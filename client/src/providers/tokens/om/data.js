
export function getFallback(node, missingKey, path, root) {
   console.log(`fallback`.yellow);
   return node;
}

export function getData(node, key, path, root) {
   return node;
}
