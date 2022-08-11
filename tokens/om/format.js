
export const formatPath = path => path.join(".").replace(/\.(\d+)[\.]/g, "[$1].").replace(/\.(\d+)$/, "[$1]");
