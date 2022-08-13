
export function getFallback(node, missingKey, path, root) {
   console.log(`%cfallback`, "color:orange");
   return node;
}

export function getData(node, key, path, root) {
   return node;
}

export const getResolvedValue = endpoint => endpoint.value;

export const getRefValue = endpoint => endpoint.value;

export const getCssValue = endpoint => endpoint.value;
