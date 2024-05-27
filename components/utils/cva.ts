import { cva } from "class-variance-authority";
import { type ClassValue } from "clsx";
import {
  type ClassProp,
  type StringToBoolean,
} from "class-variance-authority/dist/types";

export function generateCvaProperties(cvaReturn: ReturnType<typeof hotcva>) {
  const cvaProperties: Record<
    string,
    {
      type: StringConstructor;
    }
  > = {};
  for (const variant in cvaReturn.variants) {
    cvaProperties[variant] = {
      type: String,
    };
  }
  return cvaProperties as GeneratedCvaProperties<typeof cvaReturn.variants>;
}

export type GeneratedCvaProperties<T> = {
  [Variant in keyof T]: {
    type: StringConstructor;
  };
};

/**
 * From class-variance authority;
 *
 */
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | Array<StringToBoolean<keyof T[Variant]>>
    | undefined;
};
type ConfigSchema = Record<string, Record<string, ClassValue>>;
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
type Config<T> = T extends ConfigSchema
  ? {
      variants?: T;
      defaultVariants?: ConfigVariants<T>;
      compoundVariants?: Array<
        T extends ConfigSchema
          ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
          : ClassProp
      >;
    }
  : never;

export const hotcva = <T>(base: ClassValue, config?: Config<T>) => {
  const string = cva<T>(base, config);
  return {
    string,
    variants: config?.variants,
  };
};
