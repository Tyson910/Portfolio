import { getValue, setValue, stringToPath } from "./ts-helpers";
import { describe, expect, it } from "vitest";

// Recreate the user object for testing
const user = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  phones: [
    {
      type: "work",
      value: "573-353-9180",
    },
  ],
};

describe("Utility Functions", () => {
  describe("#stringToPath", () => {
    it("should correctly split simple dot-separated paths", () => {
      expect(
        stringToPath("user.address.street"),
        "Path conversion for simple dot notation should work correctly"
      ).toEqual(["user", "address", "street"]);
    });

    it("should handle array notation paths", () => {
      expect(
        stringToPath("user.phones[0].type"),
        "Path conversion for array notation should correctly parse indices"
      ).toEqual(["user", "phones", "0", "type"]);
    });

    it("should remove quotes and brackets from paths", () => {
      expect(
        stringToPath('user["address"]["street"]'),
        "Path conversion should strip quotes and brackets"
      ).toEqual(["user", "address", "street"]);
    });

    it("should handle mixed notation paths", () => {
      expect(
        stringToPath("user.phones[0].value"),
        "Path conversion should handle mixed dot and array notation"
      ).toEqual(["user", "phones", "0", "value"]);
    });
  });

  describe("#getValue", () => {
    it("should retrieve top-level properties correctly", () => {
      expect(
        getValue(user, "id"),
        "getValue should return correct top-level numeric property"
      ).toBe(1);

      expect(
        getValue(user, "name"),
        "getValue should return correct top-level string property"
      ).toBe("John Doe");
    });

    it("should retrieve nested object properties accurately", () => {
      expect(
        getValue(user, "address.street"),
        "getValue should correctly access nested string property"
      ).toBe("123 Main St");

      expect(
        getValue(user, "address.city"),
        "getValue should retrieve nested city property"
      ).toBe("Anytown");

      expect(
        getValue(user, "address.zipCode"),
        "getValue should retrieve nested zipCode property"
      ).toBe("12345");
    });

    it("should handle array property retrieval", () => {
      expect(
        getValue(user, "phones"),
        "getValue should return entire phones array"
      ).toEqual([{ type: "work", value: "573-353-9180" }]);

      expect(
        getValue(user, "phones[0]"),
        "getValue should retrieve specific array item"
      ).toEqual({
        type: "work",
        value: "573-353-9180",
      });

      expect(
        getValue(user, "phones[0].type"),
        "getValue should access nested array item property"
      ).toBe("work");

      expect(
        getValue(user, "phones[0].value"),
        "getValue should retrieve phone value"
      ).toBe("573-353-9180");
    });

    it("should support dynamic index access", () => {
      const index = 0;
      expect(
        getValue(user, `phones[${index}].type`),
        "getValue should work with dynamic index"
      ).toBe("work");
    });

    it("should return undefined for non-existent paths", () => {
      expect(
        // @ts-expect-error should only accept existent paths
        getValue(user, "nonexistent"),
        "getValue should return undefined for non-existent top-level property"
      ).toBeUndefined();

      expect(
        // @ts-expect-error should only accept existent paths
        getValue(user, "address.nonexistent"),
        "getValue should return undefined for non-existent nested property"
      ).toBeUndefined();

      expect(
        getValue(user, "phones[1]"),
        "getValue should return undefined for out-of-bounds array index"
      ).toBeUndefined();
    });
  });

  describe("#setValue", () => {
    it("should update top-level properties without mutating original object", () => {
      const updatedUser = setValue(user, "id", 42);

      expect(
        updatedUser.id,
        "setValue should set new top-level property value"
      ).toBe(42);

      expect(user.id, "Original object should remain unchanged").toBe(1);

      expect(updatedUser, "Updated object should be a new reference").not.toBe(
        user
      );
    });

    it("should update nested object properties without mutation", () => {
      const updatedUser = setValue(user, "address.street", "456 Oak Ave");

      expect(
        updatedUser.address.street,
        "setValue should update nested property value"
      ).toBe("456 Oak Ave");

      expect(
        user.address.street,
        "Original nested property should remain unchanged"
      ).toBe("123 Main St");

      expect(
        updatedUser.address,
        "Nested object should be a new reference"
      ).not.toBe(user.address);

      expect(
        updatedUser,
        "Top-level object should be a new reference"
      ).not.toBe(user);
    });

    it("should update array properties without mutation", () => {
      const updatedUser = setValue(user, "phones[0].type", "mobile");

      expect(
        updatedUser.phones[0].type,
        "setValue should update array item property"
      ).toBe("mobile");

      expect(
        user.phones[0].type,
        "Original array item property should remain unchanged"
      ).toBe("work");

      expect(
        updatedUser.phones,
        "Phones array should be a new reference"
      ).not.toBe(user.phones);

      expect(
        updatedUser.phones[0],
        "Array item should be a new reference"
      ).not.toBe(user.phones[0]);

      expect(
        updatedUser,
        "Top-level object should be a new reference"
      ).not.toBe(user);
    });

    it("should create nested structures if they do not exist", () => {
      // @ts-expect-error should only accept existent paths
      const updatedUser = setValue(
        user,
        "newProperty.subProperty",
        "test value"
      );

      expect(
        updatedUser,
        "setValue should add new nested property"
      ).toHaveProperty("newProperty.subProperty", "test value");

      expect(
        user,
        "Original object should not have the new property"
      ).not.toHaveProperty("newProperty");

      expect(updatedUser, "Updated object should be a new reference").not.toBe(
        user
      );
    });

    it("should handle dynamic index setting", () => {
      const index = 0;
      const updatedUser = setValue(user, `phones[${index}].type`, "home");

      expect(
        updatedUser.phones[0].type,
        "setValue should work with dynamic index"
      ).toBe("home");

      expect(
        user.phones[0].type,
        "Original object should remain unchanged"
      ).toBe("work");

      expect(
        updatedUser.phones,
        "Phones array should be a new reference"
      ).not.toBe(user.phones);

      expect(
        updatedUser.phones[0],
        "Array item should be a new reference"
      ).not.toBe(user.phones[0]);

      expect(
        updatedUser,
        "Top-level object should be a new reference"
      ).not.toBe(user);
    });

    it("should handle setting properties on deep nested structures", () => {
      const complexUser = {
        info: {
          personal: {
            details: {
              hobbies: ["reading", "coding"],
            },
          },
        },
      };

      // @ts-expect-error should only accept existent paths
      const updatedUser = setValue(
        complexUser,
        "info.personal.details.hobbies[1]",
        "gaming"
      );

      expect(
        updatedUser.info.personal.details.hobbies[1],
        "setValue should update deeply nested array item"
      ).toBe("gaming");

      expect(
        complexUser.info.personal.details.hobbies[1],
        "Original deeply nested array item should remain unchanged"
      ).toBe("coding");

      // Check that all nested objects are new references
      expect(updatedUser, "Top-level object should be new").not.toBe(
        complexUser
      );
      expect(updatedUser.info, "info object should be new").not.toBe(
        complexUser.info
      );
      expect(
        updatedUser.info.personal,
        "personal object should be new"
      ).not.toBe(complexUser.info.personal);
      expect(
        updatedUser.info.personal.details,
        "details object should be new"
      ).not.toBe(complexUser.info.personal.details);
      expect(
        updatedUser.info.personal.details.hobbies,
        "hobbies array should be new"
      ).not.toBe(complexUser.info.personal.details.hobbies);
    });
  });
});
