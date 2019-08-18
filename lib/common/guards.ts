const lProduct = (a: boolean, b: boolean) => a && b;

export const isObject = (a: any): a is Object => a instanceof Object;
export const isArray = (a: any): a is Array<any> => a instanceof Array;
export const areObjects = (args: any[]): args is Array<Object> =>
  args.map(isObject).reduce(lProduct, true);
export const areArrays = (args: any[]): args is Array<any[]> =>
  args.map(isObject).reduce(lProduct, true);
