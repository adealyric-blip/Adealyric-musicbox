module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://gbxbhtrddqwtjcxeklgl.supabase.co") || 'https://dummy.supabase.co';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieGJodHJkZHF3dGpjeGVrbGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MjM2NTEsImV4cCI6MjEwMDQ5OTY1MX0.udw5wyunOOQPDMUlwu0xh7Pbvs5i3IVNHGS_2LfckWw") || 'dummy-anon-key';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/src/app/api/admin/products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
;
;
function generateSlug(name) {
    return name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}
/** Convert camelCase body keys to snake_case for Supabase */ function toSnake(data) {
    const out = {};
    for (const [k, v] of Object.entries(data)){
        const snake = k.replace(/[A-Z]/g, (m)=>`_${m.toLowerCase()}`);
        out[snake] = v;
    }
    return out;
}
/** Convert snake_case row keys to camelCase for the API response */ function toCamel(row) {
    const out = {};
    for (const [k, v] of Object.entries(row)){
        const camel = k.replace(/_([a-z])/g, (_, c)=>c.toUpperCase());
        out[camel] = v;
    }
    return out;
}
async function GET(request) {
    try {
        const { searchParams } = request.nextUrl;
        const search = searchParams.get('search') || '';
        const department = searchParams.get('department');
        const category = searchParams.get('category');
        const published = searchParams.get('published');
        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '50', 10)));
        const from = (page - 1) * limit;
        const to = from + limit - 1;
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('admin_products').select('*', {
            count: 'exact'
        });
        if (search) query = query.ilike('name', `%${search}%`);
        if (department) query = query.eq('department', department);
        if (category) query = query.eq('category', category);
        if (published !== null && published !== undefined && published !== '') {
            query = query.eq('is_published', published === 'true');
        }
        query = query.order('created_at', {
            ascending: false
        }).range(from, to);
        const { data, count, error } = await query;
        if (error) {
            console.error('[admin/products GET]', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: error.message
            }, {
                status: 500
            });
        }
        const total = count || 0;
        const camelData = (data || []).map((r)=>toCamel(r));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: camelData,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('[admin/products GET]', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch products'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        if (!body.name || !body.department || !body.category || body.price === undefined || body.price === null) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Missing required fields: name, department, category, price'
            }, {
                status: 400
            });
        }
        const slug = body.slug || generateSlug(body.name);
        if (!slug) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Could not generate slug'
            }, {
                status: 400
            });
        }
        const row = {
            name: body.name,
            slug,
            department: body.department,
            category: body.category,
            price: parseFloat(body.price)
        };
        // Map optional fields to snake_case for Supabase
        const optionalMap = {
            description: 'description',
            subcategory: 'subcategory',
            originalPrice: 'original_price',
            onSale: 'on_sale',
            discountPct: 'discount_pct',
            sku: 'sku',
            sizes: 'sizes',
            sizeList: 'size_list',
            colors: 'colors',
            colorCount: 'color_count',
            fabric: 'fabric',
            material: 'material',
            dimensions: 'dimensions',
            beautySize: 'beauty_size',
            images: 'images',
            badges: 'badges',
            tags: 'tags',
            isPublished: 'is_published',
            sortOrder: 'sort_order'
        };
        for (const [camel, snake] of Object.entries(optionalMap)){
            if (body[camel] !== undefined && body[camel] !== null) {
                if ([
                    'originalPrice',
                    'price'
                ].includes(camel)) {
                    row[snake] = parseFloat(body[camel]);
                } else if ([
                    'discountPct',
                    'colorCount',
                    'sortOrder'
                ].includes(camel)) {
                    row[snake] = parseInt(body[camel], 10);
                } else {
                    row[snake] = body[camel];
                }
            }
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('admin_products').insert(row).select().single();
        if (error) {
            if (error.code === '23505') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'A product with this slug or SKU already exists'
                }, {
                    status: 409
                });
            }
            console.error('[admin/products POST]', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: error.message
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: toCamel(data)
        }, {
            status: 201
        });
    } catch (error) {
        console.error('[admin/products POST]', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to create product'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c1e1548f._.js.map