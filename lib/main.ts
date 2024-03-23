// a library pacakge to check js simple value type
// recommended-lib-name:strv-check,nano-strv-check,nano-jssv-check
// jssv-check

// you can use it to check js value type

/* eslint-disable @typescript-eslint/no-explicit-any */

const { toString } = Object.prototype;

/**
 * get kind of thing
 * @sample
 * ```ts
 * kindOf(strvparse(value))
 * ```
 * @description
 * ```
 * ## good ?
 * - [x] cache result
 * - [x] zero middle var with iifn
 * ```
 */
export const kindOf = ((cache) => (thing: any) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

/**
 *
 * @sample
 * ```ts
 * let istring = kindOfTest('string')
 * istring(strvparse(value))
 * ```
 */
export const kindOfTest = (type: string) => {
  type = type.toLowerCase();
  return (thing: any) => kindOf(thing) === type;
};

/**
 *
 * @sample
 * ```ts
 * jssvcheck('name','string') //true
 * jssvcheck(1,'string') //false
 * jssvcheck(value,type)
 *
 * value = strvparse(value,type)
 * jssvcheck(value,type)
 * const strvparsesafe = (value:any,type:string,desc?:any) => {let result=strvparse(value,type);if(!jssvcheck(result,type)){throw new Error(desc?desc:`expect ${result} to type ${type}`)};return result}
 * ```
 */
export const jssvcheck = (thing: any, type: string) => kindOfTest(type)(thing);
export { jssvcheck as strvcheck };

// nano-strv-parse
// nano-strv-check
