import { describe, expect, it } from "vitest";
import { z } from "zod/v4";

import { createDefaultValuesForZodSchema } from "./zod-utils";

describe("#createDefaultValuesForZodSchema", () => {
  describe("String schema", () => {
    describe("Default values", () => {
      it("With default value provided", () => {
        const stringSchema = z.string().default("default");
        const result = createDefaultValuesForZodSchema(stringSchema);
        expect(result).toBe("default");
      });

      it("Without default value provided", () => {
        const stringSchema = z.string();
        const result = createDefaultValuesForZodSchema(stringSchema);
        expect(result).toBeUndefined();
      });
    });
    describe("defaultStringValue override", () => {
      it("With null default value", () => {
        const stringSchema = z.string();
        const result = createDefaultValuesForZodSchema(stringSchema, {
          defaultStringValue: null,
        });
        expect(result).toBe(null);
      });

      it("With empty string default value", () => {
        const stringSchema = z.string();
        const result = createDefaultValuesForZodSchema(stringSchema, {
          defaultStringValue: "",
        });
        expect(result).toBe("");
      });

      it("With undefined default value", () => {
        const stringSchema = z.string();
        const result = createDefaultValuesForZodSchema(stringSchema, {
          defaultStringValue: undefined,
        });
        expect(result).toBe(undefined);
      });
    });
  });

  describe("Number schema", () => {
    it("With default value provided", () => {
      const numberSchema = z.number().default(42);
      const result = createDefaultValuesForZodSchema(numberSchema);
      expect(result).toBe(42);
    });

    it("Without default value provided", () => {
      const numberSchema = z.number();
      const result = createDefaultValuesForZodSchema(numberSchema);
      expect(result).toBeUndefined();
    });

    describe("defaultNumberValue overrides", () => {
      it("With null default value", () => {
        const numberSchema = z.number();
        const result = createDefaultValuesForZodSchema(numberSchema, {
          defaultNumberValue: null,
        });
        expect(result).toBe(null);
      });

      it("With zero default value", () => {
        const numberSchema = z.number();
        const result = createDefaultValuesForZodSchema(numberSchema, {
          defaultNumberValue: 0,
        });
        expect(result).toBe(0);
      });

      it("With undefined default value", () => {
        const numberSchema = z.number();
        const result = createDefaultValuesForZodSchema(numberSchema, {
          defaultNumberValue: undefined,
        });
        expect(result).toBe(undefined);
      });
    });
  });

  describe("String schema with function default value", () => {
    it("With default function value", () => {
      const stringSchema = z.string().default(() => "dynamic default");
      const result = createDefaultValuesForZodSchema(stringSchema);
      expect(result).toBe("dynamic default");
    });

    it("Without default function value", () => {
      const stringSchema = z.string();
      const result = createDefaultValuesForZodSchema(stringSchema);
      expect(result).toBeUndefined();
    });
  });

  describe("Object schema", () => {
    it("With default values provided", () => {
      const objectSchema = z.object({
        name: z.string().default("John"),
        age: z.number().default(30),
      });
      const result = createDefaultValuesForZodSchema(objectSchema);
      expect(result).toEqual({
        name: "John",
        age: 30,
      });
    });

    it("Without default values provided", () => {
      const objectSchema = z.object({
        name: z.string(),
        age: z.number(),
      });
      const result = createDefaultValuesForZodSchema(objectSchema);
      expect(result).toEqual({
        name: undefined,
        age: undefined,
      });
    });
  });

  describe("Union schema", () => {
    it("With default values in first option", () => {
      const unionSchema = z
        .union([z.string().default("string"), z.number().default(42)])
        .default("string");
      const result = createDefaultValuesForZodSchema(unionSchema);
      expect(result).toBe("string");
    });

    it("Without default values", () => {
      const unionSchema = z.union([z.string(), z.number()]);
      const result = createDefaultValuesForZodSchema(unionSchema);
      expect(result).toBeUndefined();
    });
  });

  describe("Pipe schema", () => {
    it("With default in input schema", () => {
      const pipeSchema = z.string().default("input").pipe(z.string().min(3));
      const result = createDefaultValuesForZodSchema(pipeSchema);
      expect(result).toBe("input");
    });

    it("Without default in input schema", () => {
      const pipeSchema = z.string().pipe(z.string().min(3));
      const result = createDefaultValuesForZodSchema(pipeSchema);
      expect(result).toBeUndefined();
    });
  });

  describe("Nested object schema", () => {
    it("With default values provided", () => {
      const complexObjectSchema = z.object({
        user: z.object({
          name: z.string().default("Alice"),
          details: z.object({
            age: z.number().default(25),
          }),
        }),
        active: z.boolean().default(true),
      });
      const result = createDefaultValuesForZodSchema(complexObjectSchema);
      expect(result).toEqual({
        user: {
          name: "Alice",
          details: {
            age: 25,
          },
        },
        active: true,
      });
    });

    it("Without default values provided", () => {
      const complexObjectSchema = z.object({
        user: z.object({
          name: z.string(),
          details: z.object({
            age: z.number(),
          }),
        }),
        active: z.boolean(),
      });
      const result = createDefaultValuesForZodSchema(complexObjectSchema);
      expect(result).toEqual({
        user: {
          name: undefined,
          details: {
            age: undefined,
          },
        },
        active: undefined,
      });
    });
  });

  describe("Unsupported schema types", () => {
    it("Unsupported schema type without default", () => {
      const dateSchema = z.date();
      const result = createDefaultValuesForZodSchema(dateSchema);
      expect(result).toBeUndefined();
    });

    it("Unsupported schema type with default", () => {
      const dateSchema = z.date().default(new Date("2023-01-01"));
      const result = createDefaultValuesForZodSchema(dateSchema);
      expect(result).toEqual(new Date("2023-01-01"));
    });
  });
});
