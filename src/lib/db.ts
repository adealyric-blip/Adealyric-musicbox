// Dummy proxy db to support compilation of unused Prisma routes in pure Supabase-only builds
const createDummyProxy = (name: string): any => {
  return new Proxy({}, {
    get(target, prop) {
      if (prop === "then") return undefined;
      const p = String(prop);
      if (["count", "findMany", "findUnique", "create", "update", "delete"].includes(p)) {
        return async () => [];
      }
      return createDummyProxy(`${name}.${p}`);
    }
  });
};

export const db = createDummyProxy("db");
