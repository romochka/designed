import { isEndpoint } from "./endpoints.js";

export const resolve = (endpoint, root) => {

   if (!isEndpoint(endpoint)) throw "not an endpoint";

   

   return endpoint;
}
