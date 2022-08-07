// import "react-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

function traverse(node) {
   if (typeof node.type === "function") {
      console.log(node.type.name);
   } else {
      if (node.type) {
         if (node.type.render?.name) {
            console.log(node.type.render.name);
         } else {
            console.log(node.type);
         }
      } else {
         console.log(node);
      }
   }
   if (node.child) {
      traverse(node.child);
   }
}

function tr(node, level = 0) {
   if (typeof node.elementType === "function") {
      if (node.elementType.name) {
         console.log(node.elementType.name);
      } else {
         console.log(node.elementType);
      }
   } else {
      console.log(node.elementType);
   }

   if (node.child) tr(node.child, level + 1);
}

setTimeout(() => {
   console.log(root);

   const reactContainer = root._internalRoot.current;

   tr(reactContainer);

   /*   console.log(rootContainer);
  console.log(rootContainer.childNodes);

  const nodes = [...rootContainer.childNodes];

  nodes.forEach(node => {
    const reactNode = Object.entries(node)
    .find(([key]) => key.indexOf("__reactFiber") === 0);
    if (!reactNode) return;
    console.log(reactNode[1]);
    traverse(reactNode[1].return);
  }); */

   /* const reactContainer = Object.entries(rootContainer)
  .find(([key]) => key.indexOf("__reactContainer") === 0)[1].alternate;
  console.log(`reactContainer:`, reactContainer);
  traverse(reactContainer); */
   // console.log(rootContainer.childNodes);
   // console.log(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
   // const renderer = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.get(1);
   // console.log(renderer);
   // const rendered_root_node = renderer.findFiberByHostInstance(rootContainer);
   // console.log(rendered_root_node);
}, 200);
// console.log(root._internalRoot.current.child);

// tr(root._internalRoot.current);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
