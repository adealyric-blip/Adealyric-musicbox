/**
 * Supabase API compatibility shim
 * Provides a supabase-like query builder interface backed by empty data.
 * Dashboard/portal pages use supabase.from('table').select('*') etc.
 * When these pages are actually routed, replace this with Prisma queries.
 */

type OrderDirection = 'asc' | 'desc';
interface QueryOptions {
  count?: 'exact' | 'planned' | 'estimated';
  head?: boolean;
}

interface OrderBy {
  column: string;
  ascending?: boolean;
  nullsFirst?: boolean;
  foreignTable?: string;
}

interface FilterOp {
  column: string;
  operator: string;
  value: unknown;
}

// Chainable query builder mimicking supabase client
export class SupabaseQueryBuilder {
  private table: string;
  private filters: FilterOp[] = [];
  private orderClauses: OrderBy[] = [];
  private limitVal?: number;
  private offsetVal?: number;
  private selectColumns = '*';
  private countOpt: QueryOptions['count'] | undefined;
  private headOnly = false;

  constructor(table: string) {
    this.table = table;
  }

  select(columns = '*', options?: QueryOptions) {
    this.selectColumns = columns;
    if (options?.count) this.countOpt = options.count;
    if (options?.head) this.headOnly = options.head;
    return this;
  }

  eq(column: string, value: unknown) {
    this.filters.push({ column, operator: 'eq', value });
    return this;
  }

  neq(column: string, value: unknown) {
    this.filters.push({ column, operator: 'neq', value });
    return this;
  }

  gt(column: string, value: unknown) {
    this.filters.push({ column, operator: 'gt', value });
    return this;
  }

  gte(column: string, value: unknown) {
    this.filters.push({ column, operator: 'gte', value });
    return this;
  }

  lt(column: string, value: unknown) {
    this.filters.push({ column, operator: 'lt', value });
    return this;
  }

  lte(column: string, value: unknown) {
    this.filters.push({ column, operator: 'lte', value });
    return this;
  }

  like(column: string, value: string) {
    this.filters.push({ column, operator: 'like', value });
    return this;
  }

  ilike(column: string, value: string) {
    this.filters.push({ column, operator: 'ilike', value });
    return this;
  }

  in(column: string, values: unknown[]) {
    this.filters.push({ column, operator: 'in', value: values });
    return this;
  }

  is(column: string, value: unknown) {
    this.filters.push({ column, operator: 'is', value });
    return this;
  }

  order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; foreignTable?: string }) {
    this.orderClauses.push({ column, ascending: options?.ascending ?? true, nullsFirst: options?.nullsFirst, foreignTable: options?.foreignTable });
    return this;
  }

  limit(n: number) {
    this.limitVal = n;
    return this;
  }

  offset(n: number) {
    this.offsetVal = n;
    return this;
  }

  single() {
    return this;
  }

  maybeSingle() {
    return this;
  }

  range(from: number, to: number) {
    this.offsetVal = from;
    this.limitVal = to - from + 1;
    return this;
  }

  async then(resolve: (v: SupabaseResult) => void) {
    // Stub: return empty data
    const result: SupabaseResult = {
      data: this.headOnly ? null : [],
      count: 0,
      error: null,
      status: 200,
      statusText: 'OK',
    };
    resolve(result);
  }
}

interface SupabaseResult {
  data: unknown[] | null;
  count: number | null;
  error: null;
  status: number;
  statusText: string;
}

export const supabase = {
  from(table: string) {
    return new SupabaseQueryBuilder(table);
  },
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async (_email: string, _password: string) => ({ data: { user: null, session: null }, error: { message: 'Not implemented', name: 'AuthError' } as any }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  rpc: async (_fn: string, _params?: Record<string, unknown>) => ({ data: null, error: null }),
};

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];
