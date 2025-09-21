export function pathToString(
  input: PropertyKey[] | readonly PropertyKey[]
): string {
  // Map path segments, wrapping numeric segments in square brackets
  // and handling different types of property keys
  return input
    .map((segment, index) => {
      // Convert to string to handle Symbol and number types
      const segmentStr = String(segment);

      // If it's the first segment, start without a dot
      if (index === 0) {
        // If the first segment is numeric, wrap in square brackets
        return /^\d+$/.test(segmentStr)
          ? `[${segmentStr}]`
          : typeof segment === "symbol"
            ? `[${segmentStr}]`
            : segmentStr;
      }

      // For subsequent segments, use dot notation for strings
      // and square brackets for numeric or symbol segments
      return /^\d+$/.test(segmentStr)
        ? `[${segmentStr}]`
        : typeof segment === "symbol"
          ? `[${segmentStr}]`
          : `.${segmentStr}`;
    })
    .join("");
}

export function stringToPath(input: string): string[] {
  // Remove quotes and closing brackets to clean up the path string
  // This handles cases with quoted keys or array notation like ['key'] or "key"
  const quotesAndBracketsRemoved = input.replace(/["|']|\]/g, "");
  // Split the path into segments using dots and opening square brackets
  // This breaks down nested object and array access paths
  // e.g., 'user.address[0].street' becomes ['user', 'address', '0', 'street']
  const splitPath = quotesAndBracketsRemoved.split(/\.|\[/);
  // Remove any empty or falsy path segments
  const filteredPath = splitPath.filter(Boolean);
  return filteredPath;
}

// Example usage with a properly typed getValue function:
export function getValue<
  T extends object,
  Path extends NestedKeyOf<T> & string,
>(obj: T, path: Path): GetValueType<T, Path> {
  const keys = stringToPath(path);
  let result: any = obj;

  for (const key of keys) {
    if (result == null) return undefined as GetValueType<T, Path>;
    result = result[key];
  }

  return result as GetValueType<T, Path>;
}

/**
 * Creates a new object with a specific nested property set to a given value.
 *
 * @template T The type of the original object
 * @template Path A string representing a valid nested path in the object
 *
 * @param {T} obj The original object
 * @param {Path} path The path to the property to be set
 * @param {GetValueType<T, Path>} value The value to set at the specified path
 *
 * @returns {T} A new object with the specified property updated
 *
 * @description
 * This function does not mutate the original object. Instead, it creates
 * and returns a new object with the specified path set to the given value.
 *
 * - Handles nested objects and arrays
 * - Creates intermediate objects/arrays if they don't exist
 * - Preserves the structure of the original object
 *
 * @example
 * const user = { name: 'John', address: { city: 'New York' } };
 * const updatedUser = setValue(user, 'address.city', 'San Francisco');
 * // updatedUser.address.city is 'San Francisco'
 * // user.address.city remains 'New York'
 */
export function setValue<
  T extends object,
  Path extends NestedKeyOf<T> & string,
>(obj: T, path: Path, value: GetValueType<T, Path>): T {
  const keys = stringToPath(path);
  const clonedObj: any = structuredClone(obj);
  let current: any = clonedObj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!key) continue;

    if (current[key] == null || typeof current[key] !== "object") {
      // Create new object or array based on next key
      const nextKey = keys[i + 1];
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  if (lastKey) {
    current[lastKey] = value;
  }

  return clonedObj as T;
}

export type NestedKeyOf<T> = T extends readonly any[]
  ? // Handle arrays - allow any number as index
    T extends readonly (infer U)[]
    ? `[${number}]` | `[${number}].${NestedKeyOf<U>}`
    : never
  : T extends object
    ? // Handle objects
      {
        [K in keyof T]: K extends string | number
          ? T[K] extends readonly any[]
            ? // Array property - allow any number as index
              | `${K}`
                | `${K}[${number}]`
                | `${K}[${number}].${NestedKeyOf<T[K][number]>}`
            : T[K] extends object
              ? // Object property - always convert to string
                `${K}` | `${K}.${NestedKeyOf<T[K]>}`
              : // Primitive property - always convert to string
                `${K}`
          : never;
      }[keyof T]
    : never;

// Helper type to extract array element type
type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

// Helper type to parse and navigate through a path string
export type GetValueType<T, Path extends string> = Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}[${string}].${infer Rest}`
    ? K extends keyof T
      ? T[K] extends readonly any[]
        ? GetValueType<ArrayElement<T[K]>, Rest>
        : never
      : never
    : Path extends `${infer K}[${string}]`
      ? K extends keyof T
        ? T[K] extends readonly any[]
          ? ArrayElement<T[K]>
          : never
        : never
      : Path extends `${infer K}.${infer Rest}`
        ? K extends keyof T
          ? GetValueType<T[K], Rest>
          : never
        : never;
