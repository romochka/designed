
export function getData(cursor, fallback) {
   return {
      data: cursor.get(),
      fallback,
   };
}
