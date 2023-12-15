import { cva, CxOptions } from "class-variance-authority";
import { ClassValue } from "clsx";
import {Simplify} from "type-fest";
import {ClassProp, StringToBoolean} from "class-variance-authority/dist/types";

function decorateCva(cvaStyle: CxOptions[number]) {
  return function (target: any, propertyKey: string) {
    console.log("decorateCva", target, propertyKey);
  };
}

export default decorateCva;

/**
 * From class-variance authority;
 *
 */
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined;
};
type ConfigSchema = Record<string, Record<string, ClassValue>>;
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
type Config<T> = T extends ConfigSchema ? {
  variants?: T;
  defaultVariants?: ConfigVariants<T>;
  compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp : ClassProp)[];
} : never;

export const hotcva = <T>(base: ClassValue, config?: Config<T>) => {
  const string = cva<T>(base, config);
  return {
    string,
    config,
  };
};
