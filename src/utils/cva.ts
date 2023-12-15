import { LitElement } from "lit";
import { cva, CxOptions, CxReturn } from "class-variance-authority";
import { ClassValue } from "clsx";

function decorateCva(cvaStyle: CxOptions[number]) {
  return function (target: any, propertyKey: string) {
    console.log("decorateCva", target, propertyKey);
  };
}

export default decorateCva;

type CvaParams = Parameters<typeof cva>;
type CvaVariantOptions = NonNullable<CxOptions[1]>;

export const hotcva = <T extends CvaVariantOptions>(cvaParams: {
  base: ClassValue;
  variants: T;
}) => {
  const string = cva<T>(cvaParams.base, cvaParams.variants);
  return {
    string,
    cvaParams,
  };
};
