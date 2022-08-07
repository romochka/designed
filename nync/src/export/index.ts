let count = 0;

let obj = {};

const traverse = (node: SceneNode, obj: any = {}) => {
   count++;
   console.log(`node: ${node.name}`);
   if (node.type === "FRAME" || node.type === "INSTANCE") obj[node.name] = {};
   if ("children" in node) {
      for (const child of node.children) {
         traverse(child, obj[node.name]);
      }
   }
};

export const countNodes = (nodeCollection: readonly SceneNode[]): any => {
   for (const node of nodeCollection) traverse(node, obj);
   return obj;
};
