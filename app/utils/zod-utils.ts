import type z from "zod/v4/core";

export function createDefaultValuesForZodSchema(
  _schema: z.$ZodType,
  overrides?: Partial<{
    defaultStringValue: null | undefined | "";
    defaultNumberValue: null | undefined | 0;
  }>
): unknown {
  const schema = _schema as z.$ZodTypes;
  const def = schema._zod.def;
  switch (def.type) {
    // Recursive cases
    case "object": {
      const record: Record<string, unknown> = {};
      Object.entries(def.shape).forEach(([key, value]) => {
        record[key] = createDefaultValuesForZodSchema(value);
      });

      return record;
    }
    case "pipe": {
      return createDefaultValuesForZodSchema(def.in);
    }
    // Base cases
    case "prefault": {
      return typeof def.defaultValue == "function"
        ? def.defaultValue()
        : def.defaultValue;
    }
    case "default": {
      return typeof def.defaultValue == "function"
        ? def.defaultValue()
        : def.defaultValue;
    }
    case "string": {
      return overrides?.defaultStringValue;
    }
    case "number": {
      return overrides?.defaultNumberValue;
    }
    default: {
      return undefined;
    }
  }
}
