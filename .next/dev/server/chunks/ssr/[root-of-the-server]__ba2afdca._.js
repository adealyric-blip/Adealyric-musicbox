module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        activeTab: "home",
        entered: false,
        cartCount: 0,
        detailSlug: null,
        detailType: null,
        shopSubPath: null,
        isAuthenticated: false,
        isAdmin: false,
        authUser: null,
        adminRoute: "/",
        portalRoute: "/portal",
        setActiveTab: (tab)=>set({
                activeTab: tab,
                detailSlug: null,
                detailType: null
            }),
        setEntered: (v)=>set({
                entered: v
            }),
        setDetailSlug: (slug, type)=>set({
                detailSlug: slug,
                detailType: type
            }),
        setShopSubPath: (path)=>set({
                shopSubPath: path
            }),
        addToCart: ()=>set((s)=>({
                    cartCount: s.cartCount + 1
                })),
        login: (username, password)=>{
            if (username === "admin" && password === "adminphilly") {
                set({
                    isAuthenticated: true,
                    isAdmin: true,
                    authUser: "admin"
                });
                return true;
            }
            return false;
        },
        logout: ()=>set({
                isAuthenticated: false,
                isAdmin: false,
                authUser: null,
                activeTab: "login"
            }),
        setAdminRoute: (route)=>set({
                adminRoute: route
            }),
        setPortalRoute: (route)=>set({
                portalRoute: route
            })
    }));
}),
"[project]/src/components/adea/SiteChrome.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageIntro",
    ()=>PageIntro,
    "PageShell",
    ()=>PageShell,
    "PlatformIcon",
    ()=>PlatformIcon,
    "SiteFooter",
    ()=>SiteFooter,
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const NAV = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Discography",
        href: "/music"
    },
    {
        label: "Tour",
        href: "/events"
    },
    {
        label: "Shop",
        href: "/shop"
    },
    {
        label: "Bio",
        href: "/bio"
    },
    {
        label: "News",
        href: "/news"
    },
    {
        label: "Services",
        href: "/services"
    }
];
function SiteHeader() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { cartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])();
    // Interior pages have white bg — header needs solid dark bg
    const isLightPage = pathname !== "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const on = ()=>setScrolled(window.scrollY > 20);
        on();
        window.addEventListener("scroll", on, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", on);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${isLightPage || scrolled ? "border-b border-border bg-ink backdrop-blur-xl" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-eyebrow text-bone cursor-pointer",
                            children: [
                                "Adea",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-2 text-ash",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                "Lyric"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-10 md:flex",
                            children: NAV.map((n)=>{
                                const active = pathname === n.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: n.href,
                                    className: `group relative text-eyebrow transition-colors cursor-pointer ${active ? "text-bone" : "text-bone/70 hover:text-bone"}`,
                                    children: [
                                        n.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute -bottom-1 left-0 h-px transition-all duration-500 ${active ? "w-full bg-bone" : "w-0 group-hover:w-full bg-bone"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, n.href, true, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "hidden text-eyebrow text-bone/70 hover:text-bone md:inline-flex cursor-pointer",
                                    children: "Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "hidden text-eyebrow text-bone/70 hover:text-bone md:inline-flex cursor-pointer",
                                    children: [
                                        "Cart",
                                        cartCount > 0 ? ` (${cartCount})` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "grid h-10 w-10 place-items-center border border-border md:hidden cursor-pointer",
                                    onClick: ()=>setMenu((v)=>!v),
                                    "aria-label": "Menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block h-px w-5 transition-transform bg-bone ${menu ? "translate-y-1 rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block h-px w-5 transition-transform bg-bone ${menu ? "-translate-y-1 -rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-30 transition-all duration-500 md:hidden ${menu ? "bg-ink opacity-100 pointer-events-auto" : "bg-ink opacity-0 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex h-full flex-col justify-center gap-8 px-8",
                    children: [
                        NAV.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: n.href,
                                onClick: ()=>setMenu(false),
                                className: "text-display text-6xl cursor-pointer text-left text-bone",
                                style: {
                                    transitionDelay: `${i * 50}ms`
                                },
                                children: n.label
                            }, n.href, false, {
                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/booking",
                            onClick: ()=>setMenu(false),
                            className: "text-display text-6xl cursor-pointer text-left text-bone/50",
                            children: "Booking"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            onClick: ()=>setMenu(false),
                            className: "text-display text-6xl cursor-pointer text-left text-bone/50",
                            children: "Log In"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function PlatformIcon({ name, className = "h-5 w-5" }) {
    const icons = {
        spotify: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 91,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 91,
            columnNumber: 14
        }, this),
        appleMusic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.165a10.16 10.16 0 00-1.564-.073C17.2.06 16.26.038 15.32.02 13.953-.01 12.586.002 11.22.002 9.853.002 8.486-.01 7.12.02 6.18.038 5.24.06 4.3.088c-.44.013-.88.044-1.316.094C2.45.261 1.58.6.887 1.232.295 1.77 0 2.43 0 3.236c0 .626.01 1.252.02 1.878.01.757.024 1.514.022 2.27-.003 1.247.01 2.494.022 3.741.006.63.014 1.26.01 1.89-.006 1.15.017 2.299.083 3.447.036.617.165 1.218.406 1.791.453 1.093 1.228 1.878 2.287 2.38a5.39 5.39 0 002.23.494c.95.036 1.9.065 2.85.075 1.257.013 2.515.005 3.772.002 1.518-.003 3.036.004 4.553-.01.627-.006 1.253-.04 1.877-.085a5.663 5.663 0 002.396-.734c.92-.558 1.547-1.366 1.86-2.396.186-.607.262-1.235.283-1.87.024-.74.033-1.48.037-2.22.008-1.488.003-2.976-.001-4.463-.002-.857-.014-1.715-.02-2.572-.003-.477-.011-.954-.008-1.431.005-.793-.008-1.586-.026-2.378a10.357 10.357 0 00-.063-1.103zm-7.027 8.688c0 .283-.037.567-.125.838-.29.914-.98 1.518-1.87 1.724-.296.068-.6.095-.902.095-1.74.004-3.48.003-5.22.003-1.367 0-2.734-.002-4.1.003a5.05 5.05 0 01-.872-.073c-.903-.157-1.613-.69-2.006-1.527a2.856 2.856 0 01-.247-1.23V10.13c0-.248.025-.497.088-.738.31-1.17 1.124-1.824 2.28-2.032.28-.05.566-.068.852-.068 1.69-.004 3.38-.003 5.07-.003 1.4 0 2.8.002 4.2-.003.34.003.678.035 1.01.118.94.237 1.58.806 1.923 1.718.123.322.178.66.178 1.003v4.69z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 92,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 92,
            columnNumber: 17
        }, this),
        tiktok: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 93,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 93,
            columnNumber: 13
        }, this),
        instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 94,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 94,
            columnNumber: 16
        }, this),
        amazonMusic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.876 3.166 2.853 0 5.67-.528 8.45-1.583l.315-.141c.277-.124.556-.048.836.225.282.27.297.549.048.835a1.594 1.594 0 01-.393.36c-2.7 1.628-5.667 2.44-8.893 2.44-3.09 0-5.928-.743-8.513-2.233C2.572 20.564.855 19.47.275 18.276a.528.528 0 01-.23-.256zm18.348-2.054c.072-.116.187-.124.348-.022.486.286.914.653 1.28 1.1.368.447.635.926.802 1.438.167.512.183 1.003.048 1.474-.135.471-.405.83-.81 1.078-.405.247-.856.363-1.354.346-.498-.017-.948-.17-1.35-.46-.402-.29-.667-.665-.795-1.127-.128-.461-.096-.94.096-1.435.191-.494.51-.902.956-1.224.445-.322.96-.527 1.543-.614.1-.015.187.004.258.056.07.052.086.12.046.203-.04.084-.115.135-.226.154-.856.164-1.525.531-2.008 1.103-.483.571-.635 1.2-.456 1.886.18.685.6 1.18 1.263 1.485.662.305 1.358.31 2.086.017.729-.294 1.168-.796 1.317-1.506.149-.71.045-1.394-.313-2.054-.357-.66-.855-1.193-1.493-1.596a.28.28 0 01-.1-.12.144.144 0 01.01-.142z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 95,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 95,
            columnNumber: 18
        }, this),
        youtube: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 96,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 96,
            columnNumber: 14
        }, this),
        tidal: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.012 3.992L8.008 7.996 12.012 12l4.004-4.004zM4.004 7.996L0 12l4.004 4.004L8.008 12zm16.016 0L16.016 12l4.004 4.004L24.024 12zM12.012 12.008L8.008 16.012l4.004 4.004 4.004-4.004z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 97,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 97,
            columnNumber: 12
        }, this),
        pandora: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.292c0 .518-.09.962-.27 1.332-.18.37-.432.662-.756.876a3.21 3.21 0 01-1.116.486 6.376 6.376 0 01-1.38.144c-.504 0-.978-.054-1.422-.162a4.363 4.363 0 01-1.152-.504l.612-1.278c.264.168.558.3.882.396.324.096.642.144.954.144.408 0 .732-.084.972-.252.24-.168.36-.42.36-.756v-8.82h1.314v8.394h.002zm6.732-1.746c0 .9-.168 1.662-.504 2.286-.336.624-.81 1.098-1.422 1.422-.612.324-1.338.486-2.178.486-.336 0-.672-.03-1.008-.09a5.406 5.406 0 01-.972-.282l.468-1.224c.228.108.474.198.738.27.264.072.534.108.81.108.528 0 .96-.126 1.296-.378.336-.252.582-.606.738-1.062.156-.456.234-.99.234-1.602V6.388h1.8v8.7l.002.458z"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 98,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/SiteChrome.tsx",
            lineNumber: 98,
            columnNumber: 14
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: icons[name] ?? null
    }, void 0, false);
}
const MUSICBOX_URL = process.env.NEXT_PUBLIC_MUSICBOX_URL || 'https://musicbox.adealyric.com';
const FOOTER_LINKS = [
    {
        heading: "Music",
        links: [
            {
                label: "Discography",
                href: "/music"
            },
            {
                label: "Latest Release",
                href: "/music"
            },
            {
                label: "Streaming",
                external: true
            }
        ]
    },
    {
        heading: "Shop",
        links: [
            {
                label: "Merchandise",
                href: "/shop"
            },
            {
                label: "Vinyl & CDs",
                href: "/shop"
            },
            {
                label: "USB Drives",
                href: "/shop"
            }
        ]
    },
    {
        heading: "Connect",
        links: [
            {
                label: "Tour Dates",
                href: "/events"
            },
            {
                label: "Vocal Coaching Booking",
                href: "/booking"
            },
            {
                label: "Newsletter",
                href: "/"
            }
        ]
    },
    {
        heading: "Account",
        links: [
            {
                label: "Log In",
                href: "/login"
            },
            {
                label: "Sign Up",
                href: "/signup"
            }
        ]
    },
    {
        heading: "MusicBox",
        external: true,
        links: [
            {
                label: "For Labels",
                href: `${MUSICBOX_URL}/labels`
            },
            {
                label: "For Artists",
                href: `${MUSICBOX_URL}/artists`
            },
            {
                label: "For Sync Agents",
                href: `${MUSICBOX_URL}/sync-agents`
            }
        ]
    }
];
const PLATFORMS = [
    {
        key: "spotify",
        label: "Spotify"
    },
    {
        key: "appleMusic",
        label: "Apple Music"
    },
    {
        key: "tiktok",
        label: "TikTok"
    },
    {
        key: "instagram",
        label: "Instagram"
    },
    {
        key: "amazonMusic",
        label: "Amazon Music"
    },
    {
        key: "youtube",
        label: "YouTube"
    },
    {
        key: "tidal",
        label: "Tidal"
    },
    {
        key: "pandora",
        label: "Pandora"
    }
];
const ALL_PLATFORMS = [
    ...PLATFORMS,
    ...PLATFORMS,
    ...PLATFORMS,
    ...PLATFORMS
];
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover opacity-50",
                        src: "/footer/video/footer-video.mp4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pt-16 pb-10 md:px-12 md:pt-24 md:pb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1600px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "relative block cursor-pointer group",
                                            "aria-label": "Adea Lyric Home",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/footer/logo/logo-footer.png",
                                                alt: "Adea Lyric",
                                                className: "h-auto w-28 sm:w-32 md:w-36 opacity-20 hover:opacity-30 transition-opacity duration-300",
                                                style: {
                                                    filter: 'invert(1)',
                                                    mixBlendMode: 'screen'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 max-w-md text-base leading-relaxed text-ash",
                                            children: "The sound of West Philly. Singer, songwriter, and producer creating every record from the soul."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:col-span-8",
                                    children: FOOTER_LINKS.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-eyebrow mb-5 text-bone/50",
                                                    children: col.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-3",
                                                    children: col.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: link.external || col.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: link.href,
                                                                className: "text-sm text-bone/70 transition-colors hover:text-bone cursor-pointer text-left",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: link.href || '/',
                                                                className: "text-sm text-bone/70 transition-colors hover:text-bone cursor-pointer text-left",
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, link.label, false, {
                                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, col.heading, true, {
                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 border-t border-border md:mt-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-col gap-8 md:mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-marquee-track flex w-max items-center gap-8",
                                        children: ALL_PLATFORMS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                onClick: (e)=>e.preventDefault(),
                                                className: "flex shrink-0 items-center gap-2 text-ash/60 transition-colors hover:text-bone",
                                                "aria-label": p.label,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformIcon, {
                                                        name: p.key,
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "whitespace-nowrap text-xs tracking-wide",
                                                        children: p.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `${p.key}-${i}`, true, {
                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start gap-1 text-xs text-ash/60 md:items-end md:text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "© ",
                                                new Date().getFullYear(),
                                                " Adea Lyric. All rights reserved."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "West Philadelphia · Est. 2017"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/SiteChrome.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function PageShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen w-full text-bone bg-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteHeader, {}, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteFooter, {}, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/SiteChrome.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
function PageIntro({ eyebrow, title, italic, sub, dark = false, bgImage }) {
    const isDark = dark || !!bgImage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative flex min-h-[60svh] items-end overflow-hidden ${isDark ? "bg-ink text-bone" : "bg-white text-black"} md:min-h-[70svh]`,
        children: [
            bgImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: bgImage,
                        alt: "",
                        className: "absolute inset-0 h-full w-full object-cover opacity-40 grayscale",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-56",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-eyebrow ${isDark ? "text-ash" : "text-black/30"}`,
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none ${isDark ? "text-bone" : "text-black"}`,
                        children: [
                            title,
                            italic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `block italic ${isDark ? "text-ash" : "text-black/40"}`,
                                children: italic
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                lineNumber: 245,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-8 max-w-xl text-lg ${isDark ? "text-bone/70" : "text-black/50"}`,
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/SiteChrome.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/product-catalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_SIZE_OPTIONS",
    ()=>ALL_SIZE_OPTIONS,
    "CATEGORY_DISPLAY",
    ()=>CATEGORY_DISPLAY,
    "CATEGORY_MAP",
    ()=>CATEGORY_MAP,
    "FAMILY_LABELS",
    ()=>FAMILY_LABELS,
    "FAN_CATEGORY_LABELS",
    ()=>FAN_CATEGORY_LABELS,
    "FAN_CATEGORY_MAP",
    ()=>FAN_CATEGORY_MAP,
    "getActiveCategories",
    ()=>getActiveCategories,
    "getAllProducts",
    ()=>getAllProducts,
    "getProductById",
    ()=>getProductById,
    "getProductsByFanCategory",
    ()=>getProductsByFanCategory,
    "getPublishedProducts",
    ()=>getPublishedProducts,
    "getSubcategories",
    ()=>getSubcategories,
    "mockCatalogProducts",
    ()=>mockCatalogProducts
]);
'use client';
const FAMILY_LABELS = {
    BlankApparel: 'Stock Apparel',
    PrintOnDemand: 'Artist-Designed Apparel',
    Beauty: 'Beauty & Wellness',
    Bags: 'Bags & Accessories',
    Music: 'Music & Audio',
    FinishedMerch: 'Branded Merch'
};
// ============ MOCK PRODUCT CATALOG ============
// Product families are admin-only concepts — fans see "Apparel", "Beauty", "Bags"
// BlankApparel = stock/unprinted apparel for inventory reference (admin creates finished products from these)
// PrintOnDemand = artist-designed apparel with custom prints (these are the finished products fans see)
// Fans NEVER see "Blank" or "Print-on-Demand" labels — they just see Apparel items
const id = (prefix, n)=>`${prefix}-${n}`;
const mockCatalogProducts = [
    // ====== BLANK APPAREL ======
    {
        id: id('bp', 1),
        name: 'Unisex Heavy Cotton Tee',
        slug: 'unisex-heavy-cotton-tee',
        description: 'Classic fit heavyweight cotton tee. Side-seamed construction for durability. Double-needle stitching on neck and sleeves.',
        productFamily: 'BlankApparel',
        category: 'T-Shirts',
        sku: 'WT0216',
        fabric: '130gsm/3.8oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL',
            '3XL'
        ],
        availableColors: [
            {
                name: 'White',
                hex: '#FFFFFF'
            },
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Red',
                hex: '#CC0000'
            }
        ],
        wholesalePriceCents: 450,
        retailPriceCents: 2499,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '36"',
                length: '28"'
            },
            M: {
                chest: '40"',
                length: '29"'
            },
            L: {
                chest: '44"',
                length: '30"'
            },
            XL: {
                chest: '48"',
                length: '31"'
            },
            '2XL': {
                chest: '52"',
                length: '32"'
            },
            '3XL': {
                chest: '56"',
                length: '33"'
            }
        },
        isPublished: true,
        inventoryCount: 150,
        sortOrder: 1
    },
    {
        id: id('bp', 2),
        name: 'Women\'s Crop Tee',
        slug: 'womens-crop-tee',
        description: 'Fashion-forward crop tee with relaxed fit. Soft cotton blend perfect for summer styling.',
        productFamily: 'BlankApparel',
        category: 'T-Shirts',
        subcategory: 'Crop',
        sku: 'WT0220',
        fabric: '145gsm/4.2oz',
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'White',
                hex: '#FFFFFF'
            },
            {
                name: 'Blush',
                hex: '#DEB8B8'
            },
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 480,
        retailPriceCents: 2299,
        badges: [
            'NEW'
        ],
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            XS: {
                chest: '32"',
                length: '22"'
            },
            S: {
                chest: '34"',
                length: '23"'
            },
            M: {
                chest: '36"',
                length: '24"'
            },
            L: {
                chest: '38"',
                length: '25"'
            },
            XL: {
                chest: '40"',
                length: '26"'
            }
        },
        isPublished: true,
        inventoryCount: 80,
        sortOrder: 2
    },
    {
        id: id('bp', 3),
        name: 'Unisex Tank Top',
        slug: 'unisex-tank-top',
        description: 'Lightweight ribbed tank top. Ideal for active lifestyles or layered summer looks.',
        productFamily: 'BlankApparel',
        category: 'Tank Tops',
        sku: 'WT0310',
        fabric: '140gsm/4.0oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'White',
                hex: '#FFFFFF'
            },
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Grey',
                hex: '#808080'
            }
        ],
        wholesalePriceCents: 350,
        retailPriceCents: 1999,
        badges: [],
        images: [
            'https://images.unsplash.com/photo-1571945153237-4929e7831a5e?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '34"',
                length: '26"'
            },
            M: {
                chest: '38"',
                length: '27"'
            },
            L: {
                chest: '42"',
                length: '28"'
            },
            XL: {
                chest: '46"',
                length: '29"'
            },
            '2XL': {
                chest: '50"',
                length: '30"'
            }
        },
        isPublished: true,
        inventoryCount: 60,
        sortOrder: 3
    },
    {
        id: id('bp', 4),
        name: 'Heavyweight Hoodie',
        slug: 'heavyweight-hoodie',
        description: 'Premium heavyweight hoodie with kangaroo pocket. Double-lined hood with drawstring. Ribbed cuffs and waistband.',
        productFamily: 'BlankApparel',
        category: 'Hoodies',
        sku: 'WH500',
        fabric: '320gsm/9.4oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL',
            '3XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Grey',
                hex: '#808080'
            },
            {
                name: 'White',
                hex: '#FFFFFF'
            }
        ],
        wholesalePriceCents: 1200,
        retailPriceCents: 5999,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '40"',
                length: '27"'
            },
            M: {
                chest: '44"',
                length: '28"'
            },
            L: {
                chest: '48"',
                length: '29"'
            },
            XL: {
                chest: '52"',
                length: '30"'
            },
            '2XL': {
                chest: '56"',
                length: '31"'
            },
            '3XL': {
                chest: '60"',
                length: '32"'
            }
        },
        isPublished: true,
        inventoryCount: 45,
        sortOrder: 4
    },
    {
        id: id('bp', 5),
        name: 'Unisex Sweatshirt',
        slug: 'unisex-sweatshirt',
        description: 'Classic crew neck sweatshirt. Soft fleece interior for warmth. Ribbed collar, cuffs, and hem.',
        productFamily: 'BlankApparel',
        category: 'Sweatshirts',
        sku: 'WS550',
        fabric: '280gsm/8.2oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Burgundy',
                hex: '#800020'
            }
        ],
        wholesalePriceCents: 900,
        retailPriceCents: 4499,
        badges: [],
        images: [
            'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '40"',
                length: '26"'
            },
            M: {
                chest: '44"',
                length: '27"'
            },
            L: {
                chest: '48"',
                length: '28"'
            },
            XL: {
                chest: '52"',
                length: '29"'
            },
            '2XL': {
                chest: '56"',
                length: '30"'
            }
        },
        isPublished: true,
        inventoryCount: 30,
        sortOrder: 5
    },
    {
        id: id('bp', 6),
        name: 'Sports Bra Activewear',
        slug: 'sports-bra-activewear',
        description: 'Medium-support sports bra with moisture-wicking fabric. Perfect for yoga, running, or gym training.',
        productFamily: 'BlankApparel',
        category: 'Activewear',
        subcategory: 'Sports Bra',
        sku: 'WA100',
        fabric: '180gsm/5.3oz',
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Nude',
                hex: '#E8D4B8'
            },
            {
                name: 'Pink',
                hex: '#FF69B4'
            }
        ],
        wholesalePriceCents: 500,
        retailPriceCents: 2999,
        badges: [
            'NEW'
        ],
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2b9942b5e?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            XS: {
                bust: '30-32"',
                length: '14"'
            },
            S: {
                bust: '32-34"',
                length: '15"'
            },
            M: {
                bust: '34-36"',
                length: '16"'
            },
            L: {
                bust: '36-38"',
                length: '17"'
            },
            XL: {
                bust: '38-40"',
                length: '18"'
            }
        },
        isPublished: true,
        inventoryCount: 70,
        sortOrder: 6
    },
    {
        id: id('bp', 7),
        name: 'Athletic Shorts',
        slug: 'athletic-shorts',
        description: 'Lightweight athletic shorts with built-in liner. Quick-dry fabric for peak performance.',
        productFamily: 'BlankApparel',
        category: 'Shorts',
        sku: 'WS200',
        fabric: '160gsm/4.7oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Grey',
                hex: '#808080'
            }
        ],
        wholesalePriceCents: 400,
        retailPriceCents: 2499,
        badges: [],
        images: [
            'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                waist: '28"',
                inseam: '7"'
            },
            M: {
                waist: '32"',
                inseam: '7.5"'
            },
            L: {
                waist: '36"',
                inseam: '8"'
            },
            XL: {
                waist: '40"',
                inseam: '8.5"'
            },
            '2XL': {
                waist: '44"',
                inseam: '9"'
            }
        },
        isPublished: true,
        inventoryCount: 55,
        sortOrder: 7
    },
    {
        id: id('bp', 8),
        name: 'Jogger Sweatpants',
        slug: 'jogger-sweatpants',
        description: 'Modern jogger sweatpants with tapered leg and elastic cuffs. Fleece-lined interior.',
        productFamily: 'BlankApparel',
        category: 'Sweatpants',
        sku: 'WP600',
        fabric: '300gsm/8.8oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Grey',
                hex: '#808080'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            }
        ],
        wholesalePriceCents: 850,
        retailPriceCents: 4499,
        badges: [],
        images: [
            'https://images.unsplash.com/photo-1552902865-b8c34162f5e4?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                waist: '28"',
                inseam: '29"'
            },
            M: {
                waist: '32"',
                inseam: '30"'
            },
            L: {
                waist: '36"',
                inseam: '31"'
            },
            XL: {
                waist: '40"',
                inseam: '32"'
            },
            '2XL': {
                waist: '44"',
                inseam: '33"'
            }
        },
        isPublished: true,
        inventoryCount: 25,
        sortOrder: 8
    },
    {
        id: id('bp', 9),
        name: 'Mini Skirt',
        slug: 'mini-skirt',
        description: 'A-line mini skirt with high waistband. Soft cotton stretch blend for comfortable wear.',
        productFamily: 'BlankApparel',
        category: 'Skirts',
        sku: 'WK100',
        fabric: '150gsm/4.4oz',
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'White',
                hex: '#FFFFFF'
            },
            {
                name: 'Denim',
                hex: '#6B8DB5'
            }
        ],
        wholesalePriceCents: 420,
        retailPriceCents: 2999,
        badges: [],
        images: [],
        sizeGuide: {
            XS: {
                waist: '24"',
                length: '16"'
            },
            S: {
                waist: '26"',
                length: '17"'
            },
            M: {
                waist: '28"',
                length: '18"'
            },
            L: {
                waist: '30"',
                length: '19"'
            },
            XL: {
                waist: '32"',
                length: '20"'
            }
        },
        isPublished: true,
        inventoryCount: 40,
        sortOrder: 9
    },
    {
        id: id('bp', 10),
        name: 'Polo Shirt',
        slug: 'polo-shirt',
        description: 'Classic polo shirt with ribbed collar and two-button placket. Piqué knit fabric.',
        productFamily: 'BlankApparel',
        category: 'PoloShirts',
        sku: 'WP010',
        fabric: '200gsm/5.9oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'White',
                hex: '#FFFFFF'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 650,
        retailPriceCents: 3499,
        badges: [],
        images: [],
        sizeGuide: {
            S: {
                chest: '36"',
                length: '27"'
            },
            M: {
                chest: '40"',
                length: '28"'
            },
            L: {
                chest: '44"',
                length: '29"'
            },
            XL: {
                chest: '48"',
                length: '30"'
            },
            '2XL': {
                chest: '52"',
                length: '31"'
            }
        },
        isPublished: true,
        inventoryCount: 50,
        sortOrder: 10
    },
    {
        id: id('bp', 11),
        name: 'Puffer Jacket',
        slug: 'puffer-jacket',
        description: 'Quilted puffer jacket with water-resistant shell. Insulated filling for cold weather.',
        productFamily: 'BlankApparel',
        category: 'CoatsJackets',
        sku: 'WJ800',
        fabric: 'Shell: 75gsm/2.2oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Olive',
                hex: '#556B2F'
            }
        ],
        wholesalePriceCents: 2000,
        retailPriceCents: 8999,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {
            S: {
                chest: '38"',
                length: '25"'
            },
            M: {
                chest: '42"',
                length: '26"'
            },
            L: {
                chest: '46"',
                length: '27"'
            },
            XL: {
                chest: '50"',
                length: '28"'
            },
            '2XL': {
                chest: '54"',
                length: '29"'
            }
        },
        isPublished: false,
        inventoryCount: 15,
        sortOrder: 11
    },
    // ====== PRINT ON DEMAND ======
    {
        id: id('pod', 1),
        name: 'Graphic Tee — Midnight Echoes',
        slug: 'graphic-tee-midnight-echoes',
        description: 'Limited edition graphic tee featuring the Midnight Echoes album art. Premium cotton construction.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Tops',
        sku: 'RU0007',
        fabric: '180gsm/5.3oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'White',
                hex: '#FFFFFF'
            }
        ],
        wholesalePriceCents: 800,
        retailPriceCents: 3499,
        badges: [
            'BESTSELLER',
            'LIMITED'
        ],
        images: [
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '36"',
                length: '28"'
            },
            M: {
                chest: '40"',
                length: '29"'
            },
            L: {
                chest: '44"',
                length: '30"'
            },
            XL: {
                chest: '48"',
                length: '31"'
            },
            '2XL': {
                chest: '52"',
                length: '32"'
            }
        },
        isPublished: true,
        inventoryCount: 200,
        sortOrder: 1
    },
    {
        id: id('pod', 2),
        name: 'Neon Dreams Hoodie',
        slug: 'neon-dreams-hoodie',
        description: 'All-over print hoodie featuring neon dream aesthetic. Soft fleece lining.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Hoodies',
        sku: 'RU0100',
        fabric: '280gsm/8.2oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 1500,
        retailPriceCents: 6999,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1618354691373-d851c5c31112?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '40"',
                length: '27"'
            },
            M: {
                chest: '44"',
                length: '28"'
            },
            L: {
                chest: '48"',
                length: '29"'
            },
            XL: {
                chest: '52"',
                length: '30"'
            },
            '2XL': {
                chest: '56"',
                length: '31"'
            }
        },
        isPublished: true,
        inventoryCount: 75,
        sortOrder: 2
    },
    {
        id: id('pod', 3),
        name: 'Adea Lyric Dress — Concert Edition',
        slug: 'adea-lyric-dress-concert',
        description: 'Flowing concert dress with Adea Lyric branding. Elegant yet comfortable for live events.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Dresses',
        sku: 'RU0200',
        fabric: '160gsm/4.7oz',
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Purple',
                hex: '#800080'
            }
        ],
        wholesalePriceCents: 1100,
        retailPriceCents: 5499,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {
            XS: {
                bust: '32"',
                length: '38"'
            },
            S: {
                bust: '34"',
                length: '39"'
            },
            M: {
                bust: '36"',
                length: '40"'
            },
            L: {
                bust: '38"',
                length: '41"'
            },
            XL: {
                bust: '40"',
                length: '42"'
            }
        },
        isPublished: true,
        inventoryCount: 30,
        sortOrder: 3
    },
    {
        id: id('pod', 4),
        name: 'Artist Matching Set',
        slug: 'artist-matching-set',
        description: 'Two-piece matching set with album artwork. Crop top + jogger pants.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Sets',
        sku: 'RU0300',
        fabric: '200gsm/5.9oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'White',
                hex: '#FFFFFF'
            }
        ],
        wholesalePriceCents: 1400,
        retailPriceCents: 7999,
        badges: [
            'TRENDING'
        ],
        images: [],
        sizeGuide: {
            S: {
                top: 'chest 34"',
                pants: 'waist 26"'
            },
            M: {
                top: 'chest 38"',
                pants: 'waist 30"'
            },
            L: {
                top: 'chest 42"',
                pants: 'waist 34"'
            },
            XL: {
                top: 'chest 46"',
                pants: 'waist 38"'
            }
        },
        isPublished: true,
        inventoryCount: 20,
        sortOrder: 4
    },
    {
        id: id('pod', 5),
        name: 'Yoga Leggings — Frequency Print',
        slug: 'yoga-leggings-frequency',
        description: 'High-waisted yoga leggings with frequency wave pattern. Squat-proof fabric.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Yoga',
        sku: 'RU0400',
        fabric: '220gsm/6.5oz',
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 900,
        retailPriceCents: 4499,
        badges: [],
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            XS: {
                waist: '24"',
                inseam: '26"'
            },
            S: {
                waist: '26"',
                inseam: '27"'
            },
            M: {
                waist: '28"',
                inseam: '28"'
            },
            L: {
                waist: '30"',
                inseam: '29"'
            },
            XL: {
                waist: '32"',
                inseam: '30"'
            }
        },
        isPublished: true,
        inventoryCount: 45,
        sortOrder: 5
    },
    {
        id: id('pod', 6),
        name: 'Swimwear — Sunset Print',
        slug: 'swimwear-sunset-print',
        description: 'One-piece swimwear with sunset gradient print. Chlorine-resistant fabric.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Swimwear',
        sku: 'RU0500',
        fabric: '180gsm/5.3oz',
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        availableColors: [
            {
                name: 'Multi',
                hex: '#FF6B35'
            }
        ],
        wholesalePriceCents: 700,
        retailPriceCents: 3999,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {
            XS: {
                bust: '30"',
                waist: '24"'
            },
            S: {
                bust: '32"',
                waist: '26"'
            },
            M: {
                bust: '34"',
                waist: '28"'
            },
            L: {
                bust: '36"',
                waist: '30"'
            },
            XL: {
                bust: '38"',
                waist: '32"'
            }
        },
        isPublished: true,
        inventoryCount: 35,
        sortOrder: 6
    },
    {
        id: id('pod', 7),
        name: 'Pajama Set — Vinyl Dreams',
        slug: 'pajama-set-vinyl-dreams',
        description: 'Comfortable pajama set with vinyl record print. Soft cotton blend.',
        productFamily: 'PrintOnDemand',
        category: 'POD_Pajamas',
        sku: 'RU0600',
        fabric: '150gsm/4.4oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Navy',
                hex: '#1B2A4A'
            },
            {
                name: 'Grey',
                hex: '#808080'
            }
        ],
        wholesalePriceCents: 750,
        retailPriceCents: 3999,
        badges: [],
        images: [],
        sizeGuide: {
            S: {
                chest: '36"',
                length: '26"'
            },
            M: {
                chest: '40"',
                length: '27"'
            },
            L: {
                chest: '44"',
                length: '28"'
            },
            XL: {
                chest: '48"',
                length: '29"'
            },
            '2XL': {
                chest: '52"',
                length: '30"'
            }
        },
        isPublished: true,
        inventoryCount: 60,
        sortOrder: 7
    },
    // ====== BEAUTY ======
    {
        id: id('bt', 1),
        name: 'Anti-Age Serum — Niacinamide B3',
        slug: 'anti-age-serum-niacinamide',
        description: 'Powerful anti-aging serum with 10% Niacinamide (B3). Reduces fine lines and improves skin texture.',
        productFamily: 'Beauty',
        category: 'Skincare',
        sku: 'BS001',
        concernTags: [
            'Anti-age',
            'Niacinamide (B3)',
            'Fine lines'
        ],
        availableSizes: [
            '30ml',
            '50ml'
        ],
        availableColors: [
            {
                name: 'Clear',
                hex: '#F5F5F5'
            }
        ],
        wholesalePriceCents: 1200,
        retailPriceCents: 4999,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop'
        ],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 100,
        sortOrder: 1
    },
    {
        id: id('bt', 2),
        name: 'Hydrating Moisturizer',
        slug: 'hydrating-moisturizer',
        description: 'Deep hydration moisturizer with hyaluronic acid and ceramides. For all skin types.',
        productFamily: 'Beauty',
        category: 'Skincare',
        sku: 'BS002',
        concernTags: [
            'Hydration',
            'Hyaluronic Acid',
            'Dry skin'
        ],
        availableSizes: [
            '50ml',
            '100ml'
        ],
        availableColors: [
            {
                name: 'White',
                hex: '#FFFFFF'
            }
        ],
        wholesalePriceCents: 800,
        retailPriceCents: 3499,
        badges: [],
        images: [
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop'
        ],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 120,
        sortOrder: 2
    },
    {
        id: id('bt', 3),
        name: 'Vitamin C Brightening Cream',
        slug: 'vitamin-c-brightening-cream',
        description: 'Brightening cream with stabilized Vitamin C. Evens skin tone and reduces dark spots.',
        productFamily: 'Beauty',
        category: 'Skincare',
        sku: 'BS003',
        concernTags: [
            'Brightening',
            'Vitamin C',
            'Dark spots'
        ],
        availableSizes: [
            '30ml',
            '50ml'
        ],
        availableColors: [
            {
                name: 'Orange',
                hex: '#FFA500'
            }
        ],
        wholesalePriceCents: 1000,
        retailPriceCents: 4499,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 80,
        sortOrder: 3
    },
    {
        id: id('bt', 4),
        name: 'Repair Hair Oil',
        slug: 'repair-hair-oil',
        description: 'Lightweight hair oil with argan and jojoba. Repairs damage and adds shine without greasiness.',
        productFamily: 'Beauty',
        category: 'Haircare',
        sku: 'BH001',
        concernTags: [
            'Repair',
            'Argan Oil',
            'Frizz'
        ],
        availableSizes: [
            '50ml',
            '100ml'
        ],
        availableColors: [
            {
                name: 'Gold',
                hex: '#DAA520'
            }
        ],
        wholesalePriceCents: 600,
        retailPriceCents: 2999,
        badges: [],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 90,
        sortOrder: 4
    },
    {
        id: id('bt', 5),
        name: 'Matte Lip Collection',
        slug: 'matte-lip-collection',
        description: 'Set of 3 matte lipsticks in artist-curated shades. Long-lasting formula.',
        productFamily: 'Beauty',
        category: 'Makeup',
        sku: 'BM001',
        concernTags: [],
        availableSizes: [
            'Set'
        ],
        availableColors: [
            {
                name: 'Crimson',
                hex: '#DC143C'
            },
            {
                name: 'Nude',
                hex: '#D2B48C'
            },
            {
                name: 'Mauve',
                hex: '#E0B0FF'
            }
        ],
        wholesalePriceCents: 500,
        retailPriceCents: 2499,
        badges: [
            'TRENDING'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 70,
        sortOrder: 5
    },
    {
        id: id('bt', 6),
        name: 'Eye Cream — Retinol Complex',
        slug: 'eye-cream-retinol',
        description: 'Targeted eye cream with gentle retinol complex. Reduces puffiness and crow\'s feet.',
        productFamily: 'Beauty',
        category: 'EyeCare',
        sku: 'BE001',
        concernTags: [
            'Anti-age',
            'Retinol',
            'Puffiness'
        ],
        availableSizes: [
            '15ml',
            '30ml'
        ],
        availableColors: [
            {
                name: 'Cream',
                hex: '#FFFDD0'
            }
        ],
        wholesalePriceCents: 900,
        retailPriceCents: 3999,
        badges: [],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 60,
        sortOrder: 6
    },
    {
        id: id('bt', 7),
        name: 'Body Butter — Shea & Cocoa',
        slug: 'body-butter-shea-cocoa',
        description: 'Rich body butter with shea and cocoa butter. Deep nourishment for dry skin.',
        productFamily: 'Beauty',
        category: 'BodyCare',
        sku: 'BB001',
        concernTags: [
            'Nourishing',
            'Shea Butter',
            'Dry skin'
        ],
        availableSizes: [
            '200ml',
            '400ml'
        ],
        availableColors: [
            {
                name: 'Natural',
                hex: '#F5DEB3'
            }
        ],
        wholesalePriceCents: 500,
        retailPriceCents: 2499,
        badges: [],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 110,
        sortOrder: 7
    },
    {
        id: id('bt', 8),
        name: 'Men\'s Grooming Kit',
        slug: 'mens-grooming-kit',
        description: 'Complete grooming kit with beard oil, face wash, and moisturizer. Cedar & sandalwood scent.',
        productFamily: 'Beauty',
        category: 'MensGrooming',
        sku: 'BG001',
        concernTags: [
            'Beard care',
            'Face care',
            'Cedarwood'
        ],
        availableSizes: [
            'Kit'
        ],
        availableColors: [
            {
                name: 'Brown',
                hex: '#8B4513'
            }
        ],
        wholesalePriceCents: 1500,
        retailPriceCents: 5999,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 40,
        sortOrder: 8
    },
    {
        id: id('bt', 9),
        name: 'Adea Signature Candle',
        slug: 'adea-signature-candle',
        description: 'Hand-poured soy candle with Adea\'s signature scent — amber, vanilla, and cedar. 40-hour burn time.',
        productFamily: 'Beauty',
        category: 'Candle',
        sku: 'BC001',
        concernTags: [
            'Relaxation',
            'Amber',
            'Vanilla'
        ],
        availableSizes: [
            '8oz',
            '16oz'
        ],
        availableColors: [
            {
                name: 'Amber',
                hex: '#FFBF00'
            }
        ],
        wholesalePriceCents: 400,
        retailPriceCents: 2999,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1602607747506-9e9e8ee2f29b?w=400&h=500&fit=crop'
        ],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 85,
        sortOrder: 9
    },
    // ====== BAGS ======
    {
        id: id('bg', 1),
        name: 'PU Leather Crossbody Bag',
        slug: 'pu-leather-crossbody-bag',
        description: 'Minimalist crossbody bag in premium PU leather. Adjustable strap, inner pocket, magnetic closure.',
        productFamily: 'Bags',
        category: 'Bags',
        sku: 'XB001',
        material: 'PU Leather',
        dimensions: '22×15×6 cm',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Tan',
                hex: '#D2B48C'
            },
            {
                name: 'Burgundy',
                hex: '#800020'
            }
        ],
        wholesalePriceCents: 800,
        retailPriceCents: 4999,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1548036328-c9fa0d6f17f1?w=400&h=500&fit=crop'
        ],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 55,
        sortOrder: 1
    },
    {
        id: id('bg', 2),
        name: 'Canvas Tote — Artist Edition',
        slug: 'canvas-tote-artist-edition',
        description: 'Heavy-duty canvas tote with Adea Lyric print. Large interior, reinforced handles.',
        productFamily: 'Bags',
        category: 'Bags',
        sku: 'XB002',
        material: 'Canvas',
        dimensions: '38×30×10 cm',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Natural',
                hex: '#F5DEB3'
            },
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 400,
        retailPriceCents: 2499,
        badges: [
            'LIMITED'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 65,
        sortOrder: 2
    },
    {
        id: id('bg', 3),
        name: 'Mini Backpack',
        slug: 'mini-backpack',
        description: 'Compact mini backpack with multiple compartments. Water-resistant nylon exterior.',
        productFamily: 'Bags',
        category: 'Bags',
        sku: 'XB003',
        material: 'Nylon',
        dimensions: '28×20×8 cm',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Olive',
                hex: '#556B2F'
            },
            {
                name: 'Pink',
                hex: '#FF69B4'
            }
        ],
        wholesalePriceCents: 600,
        retailPriceCents: 3499,
        badges: [
            'TRENDING'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 45,
        sortOrder: 3
    },
    {
        id: id('bg', 4),
        name: 'Weekender Duffle',
        slug: 'weekender-duffle',
        description: 'Spacious weekender duffle bag for short trips. Detachable shoulder strap, shoe compartment.',
        productFamily: 'Bags',
        category: 'Bags',
        sku: 'XB004',
        material: 'PU Leather + Canvas',
        dimensions: '50×28×25 cm',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Tan',
                hex: '#D2B48C'
            }
        ],
        wholesalePriceCents: 1500,
        retailPriceCents: 7999,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 20,
        sortOrder: 4
    },
    {
        id: id('bg', 5),
        name: 'Phone Pouch Belt Bag',
        slug: 'phone-pouch-belt-bag',
        description: 'Compact belt bag with phone pouch and card slots. Adjustable belt strap.',
        productFamily: 'Bags',
        category: 'Bags',
        sku: 'XB005',
        material: 'PU Leather',
        dimensions: '18×12×4 cm',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'White',
                hex: '#FFFFFF'
            }
        ],
        wholesalePriceCents: 300,
        retailPriceCents: 1999,
        badges: [],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 90,
        sortOrder: 5
    },
    // ====== MUSIC (Vinyl, CD, Digital) ======
    {
        id: id('mu', 1),
        name: 'Midnight Echoes — Vinyl LP',
        slug: 'midnight-echoes-vinyl-lp',
        description: 'Limited pressing of Midnight Echoes on 180g vinyl. Includes lyric insert and download code. Gatefold sleeve with embossed cover art.',
        productFamily: 'Music',
        category: 'Vinyl',
        sku: 'MU-V001',
        availableSizes: [
            'LP'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 800,
        retailPriceCents: 2999,
        badges: [
            'BESTSELLER',
            'LIMITED'
        ],
        images: [
            'https://images.unsplash.com/photo-1514525253161-7a46c5ac9b18?w=400&h=500&fit=crop'
        ],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 200,
        sortOrder: 1
    },
    {
        id: id('mu', 2),
        name: 'Urban Frequencies — Cassette',
        slug: 'urban-frequencies-cassette',
        description: 'Hand-numbered cassette tape of Urban Frequencies. Cream shell with on-body print. Includes digital download.',
        productFamily: 'Music',
        category: 'Cassette',
        sku: 'MU-C001',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Cream',
                hex: '#FFFDD0'
            }
        ],
        wholesalePriceCents: 200,
        retailPriceCents: 1499,
        badges: [
            'LIMITED'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 50,
        sortOrder: 2
    },
    {
        id: id('mu', 3),
        name: 'Neon Dreams — CD Album',
        slug: 'neon-dreams-cd-album',
        description: 'Full CD album of Neon Dreams with 8-panel digipak. Includes bonus track and lyric booklet.',
        productFamily: 'Music',
        category: 'CD',
        sku: 'MU-D001',
        availableSizes: [
            'Standard'
        ],
        availableColors: [
            {
                name: 'Silver',
                hex: '#C0C0C0'
            }
        ],
        wholesalePriceCents: 300,
        retailPriceCents: 1299,
        badges: [],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 300,
        sortOrder: 3
    },
    {
        id: id('mu', 4),
        name: 'Midnight Echoes — Digital Bundle',
        slug: 'midnight-echoes-digital-bundle',
        description: 'Full album download + stems + bonus demos. Includes hi-res FLAC and standard MP3.',
        productFamily: 'Music',
        category: 'Digital',
        sku: 'MU-B001',
        availableSizes: [
            'Digital'
        ],
        availableColors: [
            {
                name: 'Digital',
                hex: '#4169E1'
            }
        ],
        wholesalePriceCents: 0,
        retailPriceCents: 999,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 999,
        sortOrder: 4
    },
    {
        id: id('mu', 5),
        name: 'Live at The Fillmore — Vinyl EP',
        slug: 'live-fillmore-vinyl-ep',
        description: 'Limited 7-inch EP with 4 live tracks recorded at The Fillmore. Picture disc with concert photography.',
        productFamily: 'Music',
        category: 'Vinyl',
        sku: 'MU-V002',
        availableSizes: [
            '7-inch'
        ],
        availableColors: [
            {
                name: 'Picture Disc',
                hex: '#FF6B35'
            }
        ],
        wholesalePriceCents: 400,
        retailPriceCents: 1999,
        badges: [
            'TRENDING',
            'LIMITED'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 100,
        sortOrder: 5
    },
    // ====== FINISHED MERCH (Admin-produced, branded products) ======
    {
        id: id('fm', 1),
        name: 'Adea Lyric Logo Tee — Black',
        slug: 'adea-lyric-logo-tee',
        description: 'Premium cotton tee with the Adea Lyric logo. Screen-printed in gold foil on black heavyweight cotton.',
        productFamily: 'FinishedMerch',
        category: 'Tees',
        sku: 'FM-T001',
        fabric: '180gsm/5.3oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 600,
        retailPriceCents: 3499,
        badges: [
            'BESTSELLER'
        ],
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '36"',
                length: '28"'
            },
            M: {
                chest: '40"',
                length: '29"'
            },
            L: {
                chest: '44"',
                length: '30"'
            },
            XL: {
                chest: '48"',
                length: '31"'
            },
            '2XL': {
                chest: '52"',
                length: '32"'
            }
        },
        isPublished: true,
        inventoryCount: 120,
        sortOrder: 1
    },
    {
        id: id('fm', 2),
        name: 'Midnight Echoes Tour Hoodie',
        slug: 'midnight-echoes-tour-hoodie',
        description: 'Official tour hoodie with Midnight Echoes artwork on back. Front pocket, lined hood. Limited run.',
        productFamily: 'FinishedMerch',
        category: 'Hoodies',
        sku: 'FM-H001',
        fabric: '320gsm/9.4oz',
        availableSizes: [
            'S',
            'M',
            'L',
            'XL',
            '2XL'
        ],
        availableColors: [
            {
                name: 'Black',
                hex: '#000000'
            },
            {
                name: 'Charcoal',
                hex: '#36454F'
            }
        ],
        wholesalePriceCents: 1200,
        retailPriceCents: 6999,
        badges: [
            'LIMITED'
        ],
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop'
        ],
        sizeGuide: {
            S: {
                chest: '40"',
                length: '27"'
            },
            M: {
                chest: '44"',
                length: '28"'
            },
            L: {
                chest: '48"',
                length: '29"'
            },
            XL: {
                chest: '52"',
                length: '30"'
            },
            '2XL': {
                chest: '56"',
                length: '31"'
            }
        },
        isPublished: true,
        inventoryCount: 75,
        sortOrder: 2
    },
    {
        id: id('fm', 3),
        name: 'Frequency Waves Poster — Limited Print',
        slug: 'frequency-waves-poster',
        description: 'Limited-edition 18×24 screen-printed poster. Frequency wave pattern on archival cotton paper. Signed and numbered.',
        productFamily: 'FinishedMerch',
        category: 'Posters',
        sku: 'FM-P001',
        dimensions: '18×24 in',
        availableSizes: [
            '18×24'
        ],
        availableColors: [
            {
                name: 'Black/Gold',
                hex: '#000000'
            }
        ],
        wholesalePriceCents: 500,
        retailPriceCents: 2499,
        badges: [
            'LIMITED'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 50,
        sortOrder: 3
    },
    {
        id: id('fm', 4),
        name: 'Adea Enamel Pin Set',
        slug: 'adea-enamel-pin-set',
        description: 'Set of 3 enamel pins: Adea logo, frequency wave, and vinyl record. Gold-plated with rubber clutches.',
        productFamily: 'FinishedMerch',
        category: 'Accessories',
        sku: 'FM-A001',
        availableSizes: [
            'Set'
        ],
        availableColors: [
            {
                name: 'Gold',
                hex: '#DAA520'
            }
        ],
        wholesalePriceCents: 300,
        retailPriceCents: 1499,
        badges: [
            'NEW'
        ],
        images: [],
        sizeGuide: {},
        isPublished: true,
        inventoryCount: 100,
        sortOrder: 4
    }
];
const CATEGORY_MAP = {
    BlankApparel: {
        label: 'Stock Apparel',
        categories: [
            {
                name: 'T-Shirts',
                subcategories: [
                    'Crop'
                ]
            },
            {
                name: 'Tank Tops'
            },
            {
                name: 'Hoodies'
            },
            {
                name: 'Sweatshirts'
            },
            {
                name: 'Activewear',
                subcategories: [
                    'Sports Bra'
                ]
            },
            {
                name: 'Shorts'
            },
            {
                name: 'Sweatpants'
            },
            {
                name: 'Skirts'
            },
            {
                name: 'Bottoms'
            },
            {
                name: 'OnePieces'
            },
            {
                name: 'CoatsJackets'
            },
            {
                name: 'PoloShirts'
            }
        ]
    },
    PrintOnDemand: {
        label: 'Artist-Designed Apparel',
        categories: [
            {
                name: 'POD_Tops'
            },
            {
                name: 'POD_Hoodies'
            },
            {
                name: 'POD_Dresses'
            },
            {
                name: 'POD_Sets'
            },
            {
                name: 'POD_Yoga'
            },
            {
                name: 'POD_Swimwear'
            },
            {
                name: 'POD_Pajamas'
            }
        ]
    },
    Beauty: {
        label: 'Beauty',
        categories: [
            {
                name: 'Skincare'
            },
            {
                name: 'Haircare'
            },
            {
                name: 'Makeup'
            },
            {
                name: 'EyeCare'
            },
            {
                name: 'BodyCare'
            },
            {
                name: 'MensGrooming'
            },
            {
                name: 'Candle'
            }
        ]
    },
    Bags: {
        label: 'Bags',
        categories: [
            {
                name: 'Bags'
            }
        ]
    },
    Music: {
        label: 'Music',
        categories: [
            {
                name: 'Vinyl'
            },
            {
                name: 'Cassette'
            },
            {
                name: 'CD'
            },
            {
                name: 'Digital'
            }
        ]
    },
    FinishedMerch: {
        label: 'Branded Merch',
        categories: [
            {
                name: 'Tees'
            },
            {
                name: 'Hoodies'
            },
            {
                name: 'Posters'
            },
            {
                name: 'Accessories'
            }
        ]
    }
};
const FAN_CATEGORY_MAP = {
    Music: [
        'Vinyl',
        'Cassette',
        'CD',
        'Digital'
    ],
    Apparel: [
        'T-Shirts',
        'Tank Tops',
        'Hoodies',
        'Sweatshirts',
        'Activewear',
        'Shorts',
        'Sweatpants',
        'Skirts',
        'Bottoms',
        'OnePieces',
        'CoatsJackets',
        'PoloShirts',
        'POD_Tops',
        'POD_Hoodies',
        'POD_Dresses',
        'POD_Sets',
        'POD_Yoga',
        'POD_Swimwear',
        'POD_Pajamas',
        'Tees'
    ],
    Beauty: [
        'Skincare',
        'Haircare',
        'Makeup',
        'EyeCare',
        'BodyCare',
        'MensGrooming',
        'Candle'
    ],
    Bags: [
        'Bags'
    ],
    Accessories: [
        'Posters',
        'Accessories'
    ]
};
const FAN_CATEGORY_LABELS = {
    Music: 'Music',
    Apparel: 'Apparel',
    Beauty: 'Beauty & Wellness',
    Bags: 'Bags',
    Accessories: 'Accessories'
};
const CATEGORY_DISPLAY = {
    'T-Shirts': 'T-Shirts',
    'Tank Tops': 'Tank Tops',
    'Hoodies': 'Hoodies',
    'Sweatshirts': 'Sweatshirts',
    'Activewear': 'Activewear',
    'Shorts': 'Shorts',
    'Sweatpants': 'Sweatpants',
    'Skirts': 'Skirts',
    'Bottoms': 'Bottoms',
    'OnePieces': 'One-Pieces',
    'CoatsJackets': 'Outerwear',
    'PoloShirts': 'Polos',
    'POD_Tops': 'Tops',
    'POD_Hoodies': 'Hoodies',
    'POD_Dresses': 'Dresses',
    'POD_Sets': 'Sets',
    'POD_Yoga': 'Yoga',
    'POD_Swimwear': 'Swimwear',
    'POD_Pajamas': 'Loungewear',
    'Tees': 'Tees',
    'Skincare': 'Skincare',
    'Haircare': 'Haircare',
    'Makeup': 'Makeup',
    'EyeCare': 'Eye Care',
    'BodyCare': 'Body Care',
    'MensGrooming': "Men's Grooming",
    'Candle': 'Candles',
    'Vinyl': 'Vinyl',
    'Cassette': 'Cassette',
    'CD': 'CD',
    'Digital': 'Digital',
    'Bags': 'Bags',
    'Posters': 'Posters',
    'Accessories': 'Accessories'
};
function getPublishedProducts() {
    return mockCatalogProducts.filter((p)=>p.isPublished && p.productFamily !== 'BlankApparel');
}
function getProductsByFanCategory(cat) {
    const cats = FAN_CATEGORY_MAP[cat];
    return getPublishedProducts().filter((p)=>cats.includes(p.category));
}
function getActiveCategories() {
    const published = getPublishedProducts();
    return Object.keys(FAN_CATEGORY_MAP).map((fanCat)=>({
            fanCat,
            label: FAN_CATEGORY_LABELS[fanCat],
            count: published.filter((p)=>FAN_CATEGORY_MAP[fanCat].includes(p.category)).length
        })).filter((c)=>c.count > 0);
}
function getSubcategories(fanCat) {
    const products = getProductsByFanCategory(fanCat);
    const cats = new Set(products.map((p)=>p.category));
    return Array.from(cats).sort();
}
function getAllProducts() {
    return mockCatalogProducts;
}
function getProductById(id) {
    return mockCatalogProducts.find((p)=>p.id === id);
}
const ALL_SIZE_OPTIONS = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    '2XL',
    '3XL',
    '30ml',
    '50ml',
    '100ml',
    '200ml',
    '400ml',
    '8oz',
    '16oz',
    'Standard',
    'Set',
    'Kit'
];
}),
"[project]/src/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "centsToInput",
    ()=>centsToInput,
    "formatCents",
    ()=>formatCents,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "inputToCents",
    ()=>inputToCents,
    "timeAgo",
    ()=>timeAgo
]);
function formatCents(cents) {
    if (!cents) return '$0.00';
    return (cents / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}
function formatDate(date) {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function formatDateTime(date) {
    if (!date) return '—';
    return new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function timeAgo(date) {
    if (!date) return '—';
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return formatDate(date);
}
function centsToInput(cents) {
    if (!cents) return '';
    return (cents / 100).toFixed(2);
}
function inputToCents(value) {
    const n = parseFloat(value);
    if (isNaN(n)) return 0;
    return Math.round(n * 100);
}
}),
"[project]/src/lib/commerce-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCommerceStore",
    ()=>useCommerceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
'use client';
;
const LOCALSTORAGE_KEY = 'adea-commerce';
function loadState() {
    try {
        const stored = localStorage.getItem(LOCALSTORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return {
                cart: parsed.cart ?? [],
                wallet: parsed.wallet ?? {
                    balanceCents: 25000,
                    transactions: [
                        {
                            id: 'wt-1',
                            type: 'deposit',
                            amountCents: 25000,
                            description: 'Initial wallet top-up',
                            createdAt: '2026-07-01'
                        }
                    ]
                },
                orders: parsed.orders ?? []
            };
        }
    } catch  {}
    return {};
}
function saveState(state) {
    try {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
    } catch  {}
}
const useCommerceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
    const initial = loadState();
    return {
        // Cart
        cart: initial.cart ?? [],
        addToCart: (product, size, color, quantity = 1)=>{
            const existing = get().cart.find((item)=>item.productId === product.id && item.size === size && item.color === color);
            if (existing) {
                set((state)=>({
                        cart: state.cart.map((item)=>item.id === existing.id ? {
                                ...item,
                                quantity: item.quantity + quantity
                            } : item)
                    }));
            } else {
                const newItem = {
                    id: `cart-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    productId: product.id,
                    product,
                    quantity,
                    size,
                    color
                };
                set((state)=>({
                        cart: [
                            ...state.cart,
                            newItem
                        ]
                    }));
            }
            const s = get();
            saveState({
                cart: s.cart,
                wallet: s.wallet,
                orders: s.orders
            });
        },
        removeFromCart: (cartItemId)=>{
            set((state)=>({
                    cart: state.cart.filter((item)=>item.id !== cartItemId)
                }));
            const s = get();
            saveState({
                cart: s.cart,
                wallet: s.wallet,
                orders: s.orders
            });
        },
        updateQuantity: (cartItemId, quantity)=>{
            if (quantity <= 0) {
                get().removeFromCart(cartItemId);
                return;
            }
            set((state)=>({
                    cart: state.cart.map((item)=>item.id === cartItemId ? {
                            ...item,
                            quantity
                        } : item)
                }));
            const s = get();
            saveState({
                cart: s.cart,
                wallet: s.wallet,
                orders: s.orders
            });
        },
        clearCart: ()=>{
            set({
                cart: []
            });
            const s = get();
            saveState({
                cart: [],
                wallet: s.wallet,
                orders: s.orders
            });
        },
        cartTotal: ()=>{
            return get().cart.reduce((total, item)=>total + item.product.retailPriceCents * item.quantity, 0);
        },
        cartItemCount: ()=>{
            return get().cart.reduce((count, item)=>count + item.quantity, 0);
        },
        // Wallet
        wallet: initial.wallet ?? {
            balanceCents: 25000,
            transactions: [
                {
                    id: 'wt-1',
                    type: 'deposit',
                    amountCents: 25000,
                    description: 'Initial wallet top-up',
                    createdAt: '2026-07-01'
                }
            ]
        },
        topUpWallet: (amountCents)=>{
            const tx = {
                id: `wt-${Date.now()}`,
                type: 'deposit',
                amountCents,
                description: `Wallet top-up: ${formatCentsLocal(amountCents)}`,
                createdAt: new Date().toISOString().slice(0, 10)
            };
            set((state)=>({
                    wallet: {
                        balanceCents: state.wallet.balanceCents + amountCents,
                        transactions: [
                            tx,
                            ...state.wallet.transactions
                        ]
                    }
                }));
            const s = get();
            saveState({
                cart: s.cart,
                wallet: s.wallet,
                orders: s.orders
            });
        },
        spendFromWallet: (amountCents, description)=>{
            const tx = {
                id: `wt-${Date.now()}`,
                type: 'purchase',
                amountCents,
                description,
                createdAt: new Date().toISOString().slice(0, 10)
            };
            set((state)=>({
                    wallet: {
                        balanceCents: state.wallet.balanceCents - amountCents,
                        transactions: [
                            tx,
                            ...state.wallet.transactions
                        ]
                    }
                }));
            const s = get();
            saveState({
                cart: s.cart,
                wallet: s.wallet,
                orders: s.orders
            });
        },
        refundToWallet: (amountCents, description)=>{
            const tx = {
                id: `wt-${Date.now()}`,
                type: 'refund',
                amountCents,
                description,
                createdAt: new Date().toISOString().slice(0, 10)
            };
            set((state)=>({
                    wallet: {
                        balanceCents: state.wallet.balanceCents + amountCents,
                        transactions: [
                            tx,
                            ...state.wallet.transactions
                        ]
                    }
                }));
            const s = get();
            saveState({
                cart: s.cart,
                wallet: s.wallet,
                orders: s.orders
            });
        },
        // Orders
        orders: initial.orders ?? [],
        placeOrder: ()=>{
            const { cart, wallet } = get();
            if (cart.length === 0) return null;
            const total = cart.reduce((t, item)=>t + item.product.retailPriceCents * item.quantity, 0);
            if (wallet.balanceCents < total) return null;
            const order = {
                id: `ord-${Date.now()}`,
                items: cart.map((item)=>({
                        id: `oli-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                        productId: item.productId,
                        productName: item.product.name,
                        productImage: item.product.images[0] ?? '',
                        quantity: item.quantity,
                        size: item.size,
                        color: item.color,
                        priceCents: item.product.retailPriceCents
                    })),
                totalCents: total,
                status: 'pending',
                createdAt: new Date().toISOString().slice(0, 10)
            };
            // Spend from wallet
            get().spendFromWallet(total, `Order ${order.id}`);
            // Clear cart and add order
            set((state)=>({
                    orders: [
                        order,
                        ...state.orders
                    ],
                    cart: []
                }));
            const s = get();
            saveState({
                cart: [],
                wallet: s.wallet,
                orders: s.orders
            });
            return order;
        },
        reorder: (orderId)=>{
            const order = get().orders.find((o)=>o.id === orderId);
            if (!order) return;
        // Just add items back to cart - we'll need to look up products
        // For reorder we simulate by finding matching products from catalog
        // The actual cart needs product references, so we'll skip this for now
        // and just toast that the reorder was placed
        }
    };
});
function formatCentsLocal(cents) {
    return `$${(cents / 100).toFixed(2)}`;
}
}),
"[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const colors = {
    gray: 'bg-neutral-100 text-neutral-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
    teal: 'bg-teal-100 text-teal-700',
    pink: 'bg-pink-100 text-pink-700'
};
function Badge({ children, color = 'gray', size = 'sm' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-full font-medium ${colors[color]} ${size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 4,
        columnNumber: 87
    }, this);
}
const statusColors = {
    inquiry: 'gray',
    hold: 'amber',
    confirmed: 'blue',
    contract_sent: 'blue',
    contract_signed: 'teal',
    deposit_paid: 'green',
    paid_in_full: 'green',
    completed: 'gray',
    cancelled: 'red',
    new: 'blue',
    contacted: 'amber',
    negotiating: 'purple',
    won: 'green',
    lost: 'red',
    spam: 'gray',
    qualified: 'teal',
    active: 'green',
    inactive: 'gray',
    draft: 'gray',
    submitted: 'blue',
    accepted: 'teal',
    rejected: 'red',
    live: 'green',
    delisted: 'gray',
    pending: 'amber',
    paid: 'green',
    refunded: 'red',
    connected: 'green',
    disconnected: 'gray',
    error: 'red',
    scheduled: 'blue',
    sent: 'green'
};
function StatusBadge({ status }) {
    const color = statusColors[status] ?? 'gray';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
        color: color,
        children: status.replace(/_/g, ' ')
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 6,
        columnNumber: 116
    }, this);
}
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm',
    secondary: 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50',
    ghost: 'text-neutral-600 hover:bg-neutral-100',
    danger: 'bg-red-600 text-white hover:bg-red-700'
};
const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
};
function Button({ variant = 'secondary', size = 'md', className = '', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 8,
        columnNumber: 122
    }, this);
}
}),
"[project]/src/lib/router.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Link({ to, href, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href ?? to ?? '',
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/lib/router.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function useRouter() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return {
        path: pathname,
        navigate: (to)=>router.push(to)
    };
}
}),
"[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer,
    "toast",
    ()=>toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
let toastFn = null;
function toast(type, message) {
    toastFn?.(type, message);
}
const icons = {
    success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
        size: 18,
        className: "text-green-500"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 20,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
        size: 18,
        className: "text-red-500"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
        size: 18,
        className: "text-blue-500"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0))
};
function ToastContainer() {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        toastFn = (type, message)=>{
            const id = Date.now() + Math.random();
            setToasts((prev)=>[
                    ...prev,
                    {
                        id,
                        type,
                        message
                    }
                ]);
            setTimeout(()=>setToasts((prev)=>prev.filter((t)=>t.id !== id)), 4000);
        };
        return ()=>{
            toastFn = null;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-[100] flex flex-col gap-2",
        children: toasts.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 bg-white rounded-lg shadow-lg border border-neutral-200 px-4 py-3 min-w-[280px] animate-in slide-in-from-right",
                children: [
                    icons[t.type],
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-neutral-700 flex-1",
                        children: t.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setToasts((prev)=>prev.filter((x)=>x.id !== t.id)),
                        className: "text-neutral-300 hover:text-neutral-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Toast.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, t.id, true, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/portal/pages/PortalProductDetailPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortalProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/commerce-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/router.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const BADGE_COLORS = {
    NEW: 'green',
    BESTSELLER: 'amber',
    TRENDING: 'blue',
    LIMITED: 'purple'
};
function PortalProductDetailPage({ productId: propProductId }) {
    const { path } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])();
    // Extract product ID from URL if not passed as prop
    const productId = propProductId ?? path.split('/portal/shop/')[1]?.split('/')[0] ?? '';
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductById"])(productId);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sizeGuideOpen, setSizeGuideOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeImageIdx, setActiveImageIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Block fans from viewing BlankApparel products (admin-only stock reference)
    if (product && product.productFamily === 'BlankApparel') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    size: 48,
                    className: "text-neutral-200 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-400",
                    children: "This product is not available for purchase"
                }, void 0, false, {
                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/portal/shop",
                    className: "inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        " Back to Shop"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    size: 48,
                    className: "text-neutral-200 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-400",
                    children: "Product not found"
                }, void 0, false, {
                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                    to: "/portal/shop",
                    className: "inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        " Back to Shop"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    // Set defaults
    const defaultSize = product.availableSizes.length > 0 ? product.availableSizes[0] : '';
    const defaultColor = product.availableColors.length > 0 ? product.availableColors[0].name : '';
    const currentSize = selectedSize || defaultSize;
    const currentColor = selectedColor || defaultColor;
    // Related products (same family, different category)
    const relatedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublishedProducts"])().filter((p)=>p.productFamily === product.productFamily && p.id !== product.id).slice(0, 4);
    const handleAddToCart = ()=>{
        addToCart(product, currentSize, currentColor, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])('success', `Added ${product.name} to cart`);
    };
    const hasSizeGuide = product.sizeGuide && Object.keys(product.sizeGuide).length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                to: "/portal/shop",
                className: "inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    " Back to Shop"
                ]
            }, void 0, true, {
                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square bg-neutral-100 rounded-xl overflow-hidden",
                                children: product.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.images[activeImageIdx],
                                    alt: product.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        size: 64,
                                        className: "text-neutral-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            product.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-3",
                                children: product.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveImageIdx(i),
                                        className: `w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImageIdx ? 'border-neutral-900' : 'border-neutral-200 hover:border-neutral-400'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            alt: `${product.name} view ${i + 1}`,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            product.badges.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mb-3",
                                children: product.badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: BADGE_COLORS[badge] ?? 'gray',
                                        children: badge
                                    }, badge, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-bold text-neutral-900 mb-2",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "gray",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAMILY_LABELS"][product.productFamily]
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: "gray",
                                        children: product.category.replace('POD_', '').replace('_', ' ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-neutral-400",
                                        children: [
                                            "SKU: ",
                                            product.sku
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-600 leading-relaxed mb-6",
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            product.fabric && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-500 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-neutral-700",
                                        children: "Fabric:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 139,
                                        columnNumber: 58
                                    }, this),
                                    " ",
                                    product.fabric
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            product.material && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-500 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-neutral-700",
                                        children: "Material:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 142,
                                        columnNumber: 58
                                    }, this),
                                    " ",
                                    product.material
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            product.dimensions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-500 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-neutral-700",
                                        children: "Dimensions:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 145,
                                        columnNumber: 58
                                    }, this),
                                    " ",
                                    product.dimensions
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            product.concernTags && product.concernTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-neutral-700 mb-1",
                                        children: "Concerns & Ingredients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: product.concernTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                color: "blue",
                                                className: "text-xs",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold text-neutral-900",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCents"])(product.retailPriceCents)
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    product.wholesalePriceCents > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-neutral-400 ml-2",
                                        children: [
                                            "Wholesale: ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCents"])(product.wholesalePriceCents)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            product.availableSizes.length > 0 && product.productFamily !== 'Beauty' && product.productFamily !== 'Bags' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-neutral-900 mb-2 block",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: product.availableSizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedSize(size),
                                                className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentSize === size ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`,
                                                children: size
                                            }, size, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    hasSizeGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSizeGuideOpen(!sizeGuideOpen),
                                        className: "text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mt-2",
                                        children: [
                                            sizeGuideOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 192,
                                                columnNumber: 36
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 192,
                                                columnNumber: 62
                                            }, this),
                                            "Size Guide"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    sizeGuideOpen && hasSizeGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 border border-neutral-200 rounded-lg overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-neutral-50 border-b border-neutral-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-2 text-left font-semibold text-neutral-900",
                                                                children: "Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 25
                                                            }, this),
                                                            Object.keys(product.sizeGuide[Object.keys(product.sizeGuide)[0]] ?? {}).map((measurement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left font-semibold text-neutral-900 capitalize",
                                                                    children: measurement
                                                                }, measurement, false, {
                                                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-neutral-100",
                                                    children: Object.entries(product.sizeGuide).map(([size, measurements])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-neutral-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 font-medium text-neutral-900",
                                                                    children: size
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 27
                                                                }, this),
                                                                Object.entries(measurements).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-neutral-600",
                                                                        children: value
                                                                    }, key, false, {
                                                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            ]
                                                        }, size, true, {
                                                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            product.availableColors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-neutral-900 mb-2 block",
                                        children: "Color"
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: product.availableColors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedColor(color.name),
                                                className: `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentColor === color.name ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-4 h-4 rounded-full border border-neutral-300",
                                                        style: {
                                                            backgroundColor: color.hex
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    color.name
                                                ]
                                            }, color.name, true, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: product.inventoryCount > 20 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: "green",
                                    children: "In Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this) : product.inventoryCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: "amber",
                                    children: [
                                        "Only ",
                                        product.inventoryCount,
                                        " left"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: "red",
                                    children: "Sold Out"
                                }, void 0, false, {
                                    fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                className: "w-full bg-neutral-900 text-white hover:bg-neutral-700 flex items-center justify-center gap-2",
                                onClick: handleAddToCart,
                                disabled: product.inventoryCount === 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    " Add to Cart · ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCents"])(product.retailPriceCents)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-neutral-900 mb-4",
                        children: "You might also like"
                    }, void 0, false, {
                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                        children: relatedProducts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$router$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                to: `/portal/shop/${p.id}`,
                                className: "group rounded-xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square bg-neutral-100 overflow-hidden",
                                        children: p.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.images[0],
                                            alt: p.name,
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                            lineNumber: 278,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                size: 24,
                                                className: "text-neutral-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 280,
                                                columnNumber: 85
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                            lineNumber: 280,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-neutral-900 truncate",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-neutral-900 mt-1",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCents"])(p.retailPriceCents)
                                            }, void 0, false, {
                                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/portal/pages/PortalProductDetailPage.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/adea/ShopBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShopBanner",
    ()=>ShopBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const LEFT_IMG = "/home-page/hero/hero.jpg";
const RIGHT_IMG = "/discography/hero/hero.jpg";
function ShopBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-[50svh] items-center overflow-hidden bg-ink md:min-h-[60svh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden w-[30%] md:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: LEFT_IMG,
                        alt: "",
                        className: "h-full w-full object-cover grayscale opacity-60",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent to-ink/80"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex w-full flex-col items-center justify-center px-6 py-16 md:w-[40%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-bone/50",
                        children: "The Sound of West Philly"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-center text-display text-[clamp(3rem,10vw,9rem)] leading-[0.85] text-bone",
                        children: [
                            "APPAREL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-bone/40",
                                children: "SHOP."
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-px w-8 bg-bone/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] uppercase tracking-[0.2em] text-bone/50",
                                children: "Music · Merch · Vinyl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-px w-8 bg-bone/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden w-[30%] md:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: RIGHT_IMG,
                        alt: "",
                        className: "h-full w-full object-cover grayscale opacity-60",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-l from-transparent to-ink/80"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: LEFT_IMG,
                        alt: "",
                        className: "h-full w-full object-cover grayscale opacity-30",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-ink/70"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopBanner.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopBanner.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/ShopBanner.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/adea/ShopAllView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShopAllView",
    ()=>ShopAllView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
;
const SORT_OPTIONS = [
    {
        value: "newest",
        label: "Newest"
    },
    {
        value: "price-asc",
        label: "Price: Low to High"
    },
    {
        value: "price-desc",
        label: "Price: High to Low"
    },
    {
        value: "name",
        label: "Name A-Z"
    }
];
function ShopAllView() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSub, setActiveSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("newest");
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveCategories"])(), []);
    const subcategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>activeCategory ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubcategories"])(activeCategory) : [], [
        activeCategory
    ]);
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublishedProducts"])();
        if (activeCategory) {
            const catList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAN_CATEGORY_MAP"][activeCategory];
            items = items.filter((p)=>catList.includes(p.category));
        }
        if (activeSub) {
            items = items.filter((p)=>p.category === activeSub);
        }
        switch(sort){
            case "price-asc":
                items = [
                    ...items
                ].sort((a, b)=>a.retailPriceCents - b.retailPriceCents);
                break;
            case "price-desc":
                items = [
                    ...items
                ].sort((a, b)=>b.retailPriceCents - a.retailPriceCents);
                break;
            case "name":
                items = [
                    ...items
                ].sort((a, b)=>a.name.localeCompare(b.name));
                break;
            default:
                items = [
                    ...items
                ].sort((a, b)=>a.sortOrder - b.sortOrder);
        }
        return items;
    }, [
        activeCategory,
        activeSub,
        sort
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveCategory(null);
                            setActiveSub(null);
                        },
                        className: `px-5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-all cursor-pointer ${!activeCategory ? "border-black bg-black text-white" : "border-black/15 text-black/60 hover:border-black/40"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveCategory(activeCategory === c.fanCat ? null : c.fanCat);
                                setActiveSub(null);
                            },
                            className: `px-5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-all cursor-pointer ${activeCategory === c.fanCat ? "border-black bg-black text-white" : "border-black/15 text-black/60 hover:border-black/40"}`,
                            children: [
                                c.label,
                                " (",
                                c.count,
                                ")"
                            ]
                        }, c.fanCat, true, {
                            fileName: "[project]/src/components/adea/ShopAllView.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sort,
                                onChange: (e)=>setSort(e.target.value),
                                className: "appearance-none bg-transparent border border-black/15 px-4 py-2 pr-8 text-[11px] uppercase tracking-[0.1em] text-black/70 cursor-pointer focus:outline-none",
                                children: SORT_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.value,
                                        children: o.label
                                    }, o.value, false, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none text-black/40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            activeCategory && subcategories.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 mb-8",
                children: subcategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveSub(activeSub === sub ? null : sub),
                        className: `px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] border transition-all cursor-pointer ${activeSub === sub ? "border-black bg-black text-white" : "border-black/10 text-black/50 hover:border-black/30"}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_DISPLAY"][sub] || sub
                    }, sub, false, {
                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 text-[10px] uppercase tracking-[0.2em] text-black/40",
                children: [
                    products.length,
                    " ",
                    products.length === 1 ? "item" : "items",
                    activeCategory && ` in ${categories.find((c)=>c.fanCat === activeCategory)?.label}`,
                    activeSub && ` / ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_DISPLAY"][activeSub] || activeSub}`
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-6",
                children: products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-pointer",
                        onClick: ()=>router.push(`/shop/${p.id}`),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square overflow-hidden bg-[#f0f0f0]",
                                children: [
                                    p.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.images[0],
                                        alt: p.name,
                                        className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "h-8 w-8 text-black/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    p.badges.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-3 top-3 flex flex-col gap-1",
                                        children: p.badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-black text-white",
                                                children: badge
                                            }, badge, false, {
                                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-medium uppercase tracking-wide text-black/80 leading-tight line-clamp-1",
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-black",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCents"])(p.retailPriceCents)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            p.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] text-neutral-400 font-mono tracking-wider",
                                                children: p.sku
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    p.availableColors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex gap-1",
                                        children: p.availableColors.slice(0, 4).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block h-3 w-3 rounded-full border border-black/10",
                                                style: {
                                                    backgroundColor: c.hex
                                                },
                                                title: c.name
                                            }, c.name, false, {
                                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                        className: "h-12 w-12 text-black/10 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-black/40",
                        children: "No products found in this selection."
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/ShopAllView.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/ShopAllView.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/ShopAllView.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/catalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALBUMS",
    ()=>ALBUMS,
    "ALL_CATEGORIES",
    ()=>ALL_CATEGORIES,
    "ALL_PRODUCTS",
    ()=>ALL_PRODUCTS,
    "CATALOG_PRODUCTS",
    ()=>CATALOG_PRODUCTS,
    "CATEGORY_SIZE_TYPE",
    ()=>CATEGORY_SIZE_TYPE,
    "CATEGORY_TREE",
    ()=>CATEGORY_TREE,
    "FILTERS",
    ()=>FILTERS,
    "PRODUCTS",
    ()=>PRODUCTS,
    "RELEASES",
    ()=>RELEASES,
    "SHOP_ALBUMS",
    ()=>SHOP_ALBUMS,
    "SIZE_OPTIONS",
    ()=>SIZE_OPTIONS,
    "TOUR",
    ()=>TOUR,
    "enrichProduct",
    ()=>enrichProduct,
    "getLeafCategories",
    ()=>getLeafCategories
]);
const fkboiAsset = "/discography/album-covers/f-boi.png";
const cantnobodyAsset = "/discography/album-covers/cant-nobody.jpg";
const philly1 = "/discography/album-covers/after-lyric.png";
const philly2 = "/discography/album-covers/after-lyric.png";
const philly3 = "/discography/album-covers/after-lyric.png";
const RELEASES = [
    {
        slug: "fk-boi",
        title: "F**K Boi",
        year: 2024,
        type: "Single",
        cover: fkboiAsset,
        runtime: "3:42",
        color: "oklch(0.6 0.02 0)",
        credits: "Written by Adea Lyric. Produced in West Philly.",
        story: "A confrontation, a mirror, a warning. Unapologetic to the last bar.",
        bgImage: philly2,
        tracks: [
            {
                n: 1,
                title: "F**K Boi",
                length: "3:42"
            }
        ]
    },
    {
        slug: "the-lyric-ep",
        title: "The Lyric",
        year: 2023,
        type: "EP",
        cover: philly3,
        runtime: "22:14",
        color: "oklch(0.55 0.02 0)",
        credits: "Six tracks. Zero compromises.",
        story: "The refusal record. Made without a table she wasn't invited to.",
        bgImage: philly1,
        tracks: [
            {
                n: 1,
                title: "Prelude / West",
                length: "2:11"
            },
            {
                n: 2,
                title: "Signal",
                length: "3:48",
                feat: "K. Rue"
            },
            {
                n: 3,
                title: "Rachi",
                length: "4:02"
            },
            {
                n: 4,
                title: "No Chase",
                length: "3:29"
            },
            {
                n: 5,
                title: "Streetlight",
                length: "4:17"
            },
            {
                n: 6,
                title: "Lyric",
                length: "4:27"
            }
        ]
    },
    {
        slug: "cant-nobody",
        title: "Can't Nobody",
        year: 2022,
        type: "Single",
        cover: cantnobodyAsset,
        runtime: "3:58",
        color: "oklch(0.5 0.02 0)",
        credits: "Rachi Lyfe.",
        story: "A statement of arrival, tuned to a Philly frequency.",
        bgImage: philly3,
        tracks: [
            {
                n: 1,
                title: "Can't Nobody",
                length: "3:58"
            }
        ]
    },
    {
        slug: "west-philly",
        title: "West Philly",
        year: 2021,
        type: "Mixtape",
        cover: philly2,
        runtime: "38:20",
        color: "oklch(0.45 0.02 0)",
        credits: "Ten tracks. One block.",
        story: "The mixtape that turned a neighborhood into a language.",
        bgImage: philly2,
        tracks: [
            {
                n: 1,
                title: "52nd",
                length: "3:20"
            },
            {
                n: 2,
                title: "Row House",
                length: "4:05"
            },
            {
                n: 3,
                title: "Cornerstore",
                length: "3:44"
            },
            {
                n: 4,
                title: "Market Frankford",
                length: "4:12"
            },
            {
                n: 5,
                title: "Overbrook",
                length: "3:33"
            },
            {
                n: 6,
                title: "Cobbs Creek",
                length: "4:01"
            },
            {
                n: 7,
                title: "Belmont",
                length: "3:48"
            },
            {
                n: 8,
                title: "Fairmount",
                length: "3:56"
            },
            {
                n: 9,
                title: "Malcolm X",
                length: "3:41"
            },
            {
                n: 10,
                title: "Home",
                length: "4:00"
            }
        ]
    },
    {
        slug: "debut-2017",
        title: "First Light",
        year: 2017,
        type: "EP",
        cover: philly1,
        runtime: "18:02",
        color: "oklch(0.4 0.02 0)",
        credits: "The introduction.",
        story: "Where it started. A voice deciding to be heard.",
        bgImage: philly1,
        tracks: [
            {
                n: 1,
                title: "Introduction",
                length: "2:44"
            },
            {
                n: 2,
                title: "Grown",
                length: "3:52"
            },
            {
                n: 3,
                title: "Say My Name",
                length: "4:08"
            },
            {
                n: 4,
                title: "Philly Blues",
                length: "3:31"
            },
            {
                n: 5,
                title: "Light",
                length: "3:47"
            }
        ]
    }
];
const PRODUCTS = [
    {
        slug: "fkboi-vinyl",
        name: 'F**K Boi 12" Vinyl',
        price: 34,
        type: "Vinyl",
        category: "Music",
        image: fkboiAsset,
        color: "oklch(0.2 0 0)",
        edition: "Limited / 500",
        description: "Heavyweight 180g black vinyl. Screen-printed sleeve. Signed insert."
    },
    {
        slug: "west-philly-cassette",
        name: "West Philly Cassette",
        price: 18,
        type: "CD",
        category: "Music",
        image: cantnobodyAsset,
        color: "oklch(0.25 0 0)",
        edition: "Numbered / 250",
        description: "Chrome tape. Fold-out J-card with lyrics."
    },
    {
        slug: "lyric-hoodie-black",
        name: "Lyric Hoodie — Black",
        price: 88,
        type: "Apparel",
        category: "Wear",
        image: fkboiAsset,
        color: "oklch(0.1 0 0)",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        description: "Heavyweight 500gsm cotton. Embroidered chain-stitch lyric on the back."
    },
    {
        slug: "lyric-tee-bone",
        name: "Lyric Tee — Bone",
        price: 42,
        type: "Apparel",
        category: "Wear",
        image: cantnobodyAsset,
        color: "oklch(0.9 0 0)",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Boxy fit. 260gsm ring-spun cotton. Puff-print logo."
    },
    {
        slug: "west-print",
        name: 'West Philly Print 18"',
        price: 65,
        type: "Print",
        category: "Object",
        image: philly2,
        color: "oklch(0.15 0 0)",
        edition: "Signed / 100",
        description: "Giclée on cotton rag. Signed and numbered by Adea."
    },
    {
        slug: "row-print",
        name: 'Row House Print 24"',
        price: 95,
        type: "Print",
        category: "Object",
        image: philly1,
        color: "oklch(0.18 0 0)",
        edition: "Signed / 100",
        description: "Large-format giclée. Museum-grade paper. Numbered."
    },
    {
        slug: "el-print",
        name: 'The El Print 18"',
        price: 65,
        type: "Print",
        category: "Object",
        image: philly3,
        color: "oklch(0.16 0 0)",
        edition: "Signed / 100",
        description: "Giclée on cotton rag. Signed and numbered."
    },
    {
        slug: "lyric-cap",
        name: "Lyric Cap — Black",
        price: 38,
        type: "Apparel",
        category: "Wear",
        image: fkboiAsset,
        color: "oklch(0.08 0 0)",
        sizes: [
            "One Size"
        ],
        description: "Unstructured 6-panel. Waxed cotton. Metal clasp back."
    }
];
const SIZE_OPTIONS = {
    clothing: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ],
    waist: [
        "28",
        "30",
        "32",
        "34",
        "36"
    ],
    shoe: [
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
    ],
    hat: [
        "S/M",
        "L/XL",
        "Adjustable"
    ],
    drinkware: [
        "11oz",
        "15oz"
    ],
    "one-size": [
        "One Size"
    ],
    none: [],
    women_std: [
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL"
    ],
    women_numeric: [
        "4",
        "6",
        "8",
        "10",
        "12"
    ],
    women_ext: [
        "2XS",
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    pod_std: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL",
        "5XL",
        "6XL",
        "7XL",
        "8XL"
    ]
};
const CATEGORY_SIZE_TYPE = {
    /* Apparel > Tops */ "T-Shirts": "clothing",
    "Tank Tops & Camis": "clothing",
    "Crop Tops": "clothing",
    Hoodies: "clothing",
    Sweatshirts: "clothing",
    "Long Sleeve Shirts": "clothing",
    "Polo Shirts": "clothing",
    /* Apparel > Bottoms */ Leggings: "clothing",
    Sweatpants: "waist",
    Skirts: "one-size",
    Shorts: "waist",
    "Trousers & Pants": "waist",
    /* Apparel > Outerwear */ "Coats & Jackets": "clothing",
    /* Apparel > One-Pieces */ Bodysuits: "clothing",
    Jumpsuits: "clothing",
    Rompers: "clothing",
    /* Women's Tops */ "Women's T-Shirts & Shirts": "clothing",
    "Women's Tanks": "clothing",
    "Women's Hoodies": "clothing",
    "Women's Sweatshirts": "clothing",
    "Women's Coats & Jackets": "clothing",
    /* Women's Bottoms */ "Women's Trousers": "waist",
    "Women's Shorts": "waist",
    /* Women's Dresses */ "Sleeveless Dresses": "clothing",
    "Short Sleeve Dresses": "clothing",
    "Half/Long Sleeve Dresses": "clothing",
    "Short Skirts": "one-size",
    /* Women's Bodysuits & Jumpsuits */ Bodysuits: "clothing",
    Jumpsuits: "clothing",
    Rompers: "clothing",
    /* Women's Outfits */ "Casual Suits": "clothing",
    /* Women's Activewear */ "Sports Bras": "women_numeric",
    "Sports Sets": "clothing",
    "Athletic Tops": "clothing",
    "Yoga Pants": "women_numeric",
    "Yoga Shorts": "women_numeric",
    "Yoga Sets": "clothing",
    /* Women's Swimwear */ Bikinis: "clothing",
    Tankinis: "clothing",
    "One-Pieces": "clothing",
    "Plus Size Swimwear": "clothing",
    "Cover Ups": "one-size",
    "Swimwear Accessories": "one-size",
    /* Women's Lingerie & Sleep */ "Women's Underwear": "clothing",
    "Women's Lingerie": "clothing",
    "Women's Loungewear": "clothing",
    "Women's Sleepwear": "clothing",
    /* Unisex Apparel */ "Unisex T-Shirts": "clothing",
    "Unisex Crop Tops": "clothing",
    "Unisex Leggings": "clothing",
    "Unisex Hoodies": "clothing",
    "Unisex Sweatshirts": "clothing",
    "Unisex Jackets & Outerwear": "clothing",
    /* Unisex Headwear */ Hats: "hat",
    Beanies: "hat",
    "Bags & Totes": "one-size",
    /* Accessories > 3C & Tech */ "Airs Cases": "one-size",
    "Tablet & Laptop Cases": "one-size",
    "Gaming Accessories": "one-size",
    "Watches & Bands": "one-size",
    "Photography Accessories": "one-size",
    /* Accessories > Phone Cases (subcategories) */ "Microfiber Cases": "one-size",
    "Glass Cases": "one-size",
    "Flip Cases": "one-size",
    "TPU Cases": "one-size",
    "Other Cases": "one-size",
    /* Accessories > Caps & Hats */ "Baseball Caps": "hat",
    "Bucket Hats": "hat",
    Beanies: "hat",
    /* Accessories > Face & Neck */ "Face Covers": "one-size",
    "Scarves, Wraps & Stoles": "one-size",
    Ties: "one-size",
    /* Accessories > Jewelry & Ornaments */ Badges: "one-size",
    Necklaces: "one-size",
    Keychains: "one-size",
    "Key Holders": "one-size",
    /* Accessories > Eyewear */ "Eyewear Accessories": "one-size",
    /* Accessories > Hand & Arm */ "Arm Coolers & Warmers": "one-size",
    /* Accessories > Footwear */ "Sports Shoes": "shoe",
    "Slippers": "shoe",
    "Boots": "shoe",
    "Socks": "one-size",
    /* Accessories > Bags */ "Backpacks & Schoolbags": "one-size",
    "Tote Bags": "one-size",
    "Crossbody Bags": "one-size",
    "Travel & Hand Bags": "one-size",
    "Fanny Packs": "one-size",
    "Wallets & Phone Bags": "one-size",
    "Cosmetic & Toiletry Bags": "one-size",
    "Lunch Bags": "one-size",
    "Luggage": "one-size",
    "Clutches": "one-size",
    "Bucket Bags": "one-size",
    /* Beauty */ "Face Care": "one-size",
    "Body Care": "one-size",
    "Hair Care": "one-size",
    Makeup: "one-size",
    "Collection Boxes": "one-size",
    /* Music */ Vinyl: "none",
    Posters: "none",
    USB: "none",
    /* Drinkware (album merch) */ Mugs: "drinkware",
    Cups: "drinkware"
};
const CATEGORY_TREE = [
    {
        label: "Women",
        slug: "women",
        children: [
            {
                label: "Women's Tops",
                slug: "women-tops",
                categories: [
                    "Women's T-Shirts & Shirts",
                    "Women's Tanks",
                    "Women's Hoodies",
                    "Women's Sweatshirts",
                    "Women's Coats & Jackets",
                    "T-Shirts",
                    "Tank Tops & Camis",
                    "Crop Tops",
                    "Hoodies",
                    "Sweatshirts",
                    "Long Sleeve Shirts",
                    "Polo Shirts"
                ]
            },
            {
                label: "Women's Bottoms",
                slug: "women-bottoms",
                categories: [
                    "Women's Trousers",
                    "Women's Shorts"
                ]
            },
            {
                label: "Women's Dresses",
                slug: "women-dresses",
                categories: [
                    "Sleeveless Dresses",
                    "Short Sleeve Dresses",
                    "Half/Long Sleeve Dresses",
                    "Short Skirts"
                ]
            },
            {
                label: "Women's Bodysuits & Jumpsuits",
                slug: "women-bodysuits",
                categories: [
                    "Bodysuits",
                    "Jumpsuits",
                    "Rompers"
                ]
            },
            {
                label: "Women's Outfits",
                slug: "women-outfits",
                categories: [
                    "Casual Suits"
                ]
            },
            {
                label: "Women's Activewear",
                slug: "women-activewear",
                categories: [
                    "Sports Bras",
                    "Sports Sets",
                    "Athletic Tops",
                    "Yoga Pants",
                    "Yoga Shorts",
                    "Yoga Sets"
                ]
            },
            {
                label: "Women's Swimwear",
                slug: "women-swimwear",
                categories: [
                    "Bikinis",
                    "Tankinis",
                    "One-Pieces",
                    "Plus Size Swimwear",
                    "Cover Ups",
                    "Swimwear Accessories"
                ]
            },
            {
                label: "Women's Lingerie & Sleep",
                slug: "women-lingerie",
                categories: [
                    "Women's Underwear",
                    "Women's Lingerie",
                    "Women's Loungewear",
                    "Women's Sleepwear"
                ]
            },
            {
                label: "Womens Outerwear",
                slug: "women-outerwear",
                categories: [
                    "Coats & Jackets"
                ]
            }
        ]
    },
    {
        label: "Unisex",
        slug: "unisex",
        categories: [
            "Unisex T-Shirts",
            "Unisex Crop Tops",
            "Unisex Leggings",
            "Unisex Hoodies",
            "Unisex Sweatshirts",
            "Unisex Jackets & Outerwear",
            "Hats",
            "Beanies",
            "Bags & Totes"
        ]
    },
    {
        label: "Accessories",
        slug: "accessories",
        children: [
            {
                label: "3C & Tech",
                slug: "accessories-tech",
                categories: [
                    "Airs Cases",
                    "Tablet & Laptop Cases",
                    "Gaming Accessories",
                    "Watches & Bands",
                    "Photography Accessories"
                ],
                children: [
                    {
                        label: "Phone Cases",
                        slug: "accessories-phone-cases",
                        categories: [
                            "Microfiber Cases",
                            "Glass Cases",
                            "Flip Cases",
                            "TPU Cases",
                            "Other Cases"
                        ]
                    }
                ]
            },
            {
                label: "Caps & Hats",
                slug: "accessories-caps",
                categories: [
                    "Baseball Caps",
                    "Bucket Hats",
                    "Beanies"
                ]
            },
            {
                label: "Face & Neck",
                slug: "accessories-face",
                categories: [
                    "Face Covers",
                    "Scarves, Wraps & Stoles",
                    "Ties"
                ]
            },
            {
                label: "Jewelry & Ornaments",
                slug: "accessories-jewelry",
                categories: [
                    "Badges",
                    "Necklaces",
                    "Keychains",
                    "Key Holders"
                ]
            },
            {
                label: "Eyewear",
                slug: "accessories-eyewear",
                categories: [
                    "Eyewear Accessories"
                ]
            },
            {
                label: "Hand & Arm",
                slug: "accessories-hand",
                categories: [
                    "Arm Coolers & Warmers"
                ]
            },
            {
                label: "Footwear",
                slug: "accessories-footwear",
                categories: [
                    "Sports Shoes",
                    "Slippers",
                    "Boots",
                    "Socks"
                ]
            },
            {
                label: "Bags",
                slug: "accessories-bags",
                categories: [
                    "Backpacks & Schoolbags",
                    "Tote Bags",
                    "Crossbody Bags",
                    "Travel & Hand Bags",
                    "Fanny Packs",
                    "Wallets & Phone Bags",
                    "Cosmetic & Toiletry Bags",
                    "Lunch Bags",
                    "Luggage",
                    "Clutches",
                    "Bucket Bags"
                ]
            }
        ]
    },
    {
        label: "Beauty",
        slug: "beauty",
        categories: [
            "Face Care",
            "Body Care",
            "Hair Care",
            "Makeup",
            "Collection Boxes"
        ]
    },
    {
        label: "Music & Physical",
        slug: "music-physical",
        children: [
            {
                label: "Vinyl & CDs",
                slug: "physical-music",
                categories: [
                    "Vinyl"
                ]
            },
            {
                label: "USB Drives",
                slug: "physical-usb",
                categories: [
                    "USB"
                ]
            },
            {
                label: "Posters & Prints",
                slug: "physical-posters",
                categories: [
                    "Posters"
                ]
            },
            {
                label: "Mugs & Cups",
                slug: "physical-drinkware",
                categories: [
                    "Mugs",
                    "Cups"
                ]
            }
        ]
    }
];
const FILTERS = {
    color: [
        "Black",
        "White",
        "Heather Grey",
        "Navy",
        "Cream",
        "Burgundy",
        "Forest",
        "Charcoal",
        "Sand",
        "Olive",
        "Wine",
        "Slate"
    ],
    fit: [
        "Slim",
        "Regular",
        "Loose",
        "Oversized",
        "Cropped"
    ],
    size: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL"
    ],
    material: [
        "Cotton",
        "Tencel",
        "Denim",
        "Fleece",
        "Modal"
    ],
    process: [
        "DTG",
        "DTF",
        "All-Over Printing",
        "Front Printing",
        "Back Printing",
        "Dual-Sided Printing"
    ],
    design_type: [],
    product_feature: [
        "Eco-friendly",
        "UV Protection",
        "Premium",
        "Plus Sizes",
        "Zippers",
        "Kangaroo Pocket",
        "Windbreaker"
    ],
    fulfillment_lead_time: [
        "In stock",
        "2 days or less",
        "4 days or less",
        "6 days or less",
        "7+ days"
    ]
};
function getLeafCategories(node) {
    if (node.categories) return node.categories;
    if (node.children) return node.children.flatMap(getLeafCategories);
    return [];
}
function getAvailability(stock) {
    if (stock === 0) return "Out of Stock";
    if (stock <= 10) return "Low Stock";
    return "In Stock";
}
function enrichProduct(p) {
    // Generate a realistic, distinct SKU if not already present
    const categoryAbbr = (p.category ?? "GEN").replace(/[^a-zA-Z]/g, "").substring(0, 3).toUpperCase();
    const slugHash = p.slug.split("-").map((w)=>w.charAt(0)).join("").toUpperCase();
    const generatedSku = p.sku || `AD-${categoryAbbr}-${slugHash || "01"}`;
    return {
        ...p,
        sku: generatedSku,
        sizeType: CATEGORY_SIZE_TYPE[p.category] ?? "none",
        availability: getAvailability(p.stock)
    };
}
/* ---- Color Swatches ---- */ const BLACK = {
    name: "Black",
    hex: "#111111"
};
const WHITE = {
    name: "White",
    hex: "#F5F5F5"
};
const GRAY = {
    name: "Gray",
    hex: "#6B6B6B"
};
const NAVY = {
    name: "Navy",
    hex: "#1B2A4A"
};
const CREAM = {
    name: "Cream",
    hex: "#E8DFD0"
};
const BURGUNDY = {
    name: "Burgundy",
    hex: "#5C1A1B"
};
const FOREST = {
    name: "Forest",
    hex: "#2D4A3E"
};
const CHARCOAL = {
    name: "Charcoal",
    hex: "#36454F"
};
const SAND = {
    name: "Sand",
    hex: "#C2B280"
};
const OLIVE = {
    name: "Olive",
    hex: "#556B2F"
};
const WINE = {
    name: "Wine",
    hex: "#722F37"
};
const SLATE = {
    name: "Slate",
    hex: "#708090"
};
const SHOP_ALBUMS = [
    {
        slug: "cant-nobody-album",
        title: "Can't Nobody",
        releaseDate: "March 2022",
        duration: "42:18",
        description: "The debut album that introduced Adea Lyric to the world. Raw, unfiltered, and deeply rooted in West Philadelphia.",
        quote: "Every word is a weapon, every note is a prayer.",
        cover: cantnobodyAsset,
        merch: [
            {
                slug: "cn-hoodie-blk",
                name: "Can't Nobody Hoodie",
                price: 88,
                category: "Hoodies",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    BLACK,
                    GRAY,
                    CREAM
                ],
                image: "",
                description: "Heavyweight fleece hoodie with embroidered album logo on chest.",
                stock: 24,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-tee-blk",
                name: "Can't Nobody Tee",
                price: 42,
                category: "T-Shirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    BLACK,
                    WHITE,
                    CREAM
                ],
                image: "",
                description: "Premium cotton tee with puff-print album artwork.",
                stock: 48,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-sweater-navy",
                name: "Can't Nobody Crewneck",
                price: 78,
                category: "Sweatshirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    NAVY,
                    BURGUNDY,
                    CHARCOAL
                ],
                image: "",
                description: "Heavy-knit crewneck sweater with woven label on hem.",
                stock: 16,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-sweatpant",
                name: "Can't Nobody Sweatpant",
                price: 68,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    CHARCOAL,
                    NAVY
                ],
                image: "",
                description: "Relaxed-fit French terry sweatpant with embroidered detail.",
                stock: 20,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-jogger",
                name: "Can't Nobody Jogger",
                price: 72,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    OLIVE
                ],
                image: "",
                description: "Tapered jogger with zip pockets and ribbed cuffs.",
                stock: 12,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-socks",
                name: "Can't Nobody Socks",
                price: 16,
                category: "Socks",
                sizes: [
                    "One Size"
                ],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Ribbed cotton-blend socks with album logo.",
                stock: 60,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-vinyl",
                name: "Can't Nobody Vinyl",
                price: 34,
                category: "Vinyl",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "Heavyweight vinyl with printed inner sleeve.",
                stock: 8,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-usb",
                name: "Can't Nobody USB",
                price: 28,
                category: "USB",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "USB drive loaded with the full album, bonus tracks, and digital artwork.",
                stock: 15,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-mug",
                name: "Can't Nobody Mug",
                price: 18,
                category: "Mugs",
                sizes: [],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Ceramic mug with wrap-around album artwork.",
                stock: 35,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-cup",
                name: "Can't Nobody Cup",
                price: 12,
                category: "Cups",
                sizes: [],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Double-wall insulated tumbler with lid.",
                stock: 40,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-hat",
                name: "Can't Nobody Dad Hat",
                price: 38,
                category: "Hats",
                sizes: [
                    "One Size"
                ],
                colors: [
                    BLACK,
                    CREAM,
                    OLIVE
                ],
                image: "",
                description: "Unstructured 6-panel dad hat with embroidered script.",
                stock: 0,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-poster",
                name: "Can't Nobody Poster",
                price: 25,
                category: "Posters",
                sizes: [],
                colors: [],
                image: "",
                description: "Gig poster on premium stock.",
                stock: 30,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            },
            {
                slug: "cn-bottle-opener",
                name: "Can't Nobody Bottle Opener",
                price: 12,
                category: "Keychains",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "Flat stainless steel bottle opener with laser engraving.",
                stock: 50,
                albumSlug: "cant-nobody-album",
                albumTitle: "Can't Nobody"
            }
        ]
    },
    {
        slug: "after-lyric",
        title: "After Lyric",
        releaseDate: "January 2023",
        duration: "48:35",
        description: "The sophomore record. A deeper cut into the psyche — love, loss, and everything that comes after the bars fade.",
        quote: "After the lyric, the silence speaks louder.",
        singleTitle: "Fuck Boi",
        cover: philly2,
        merch: [
            {
                slug: "al-hoodie",
                name: "After Lyric Hoodie",
                price: 88,
                category: "Hoodies",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    BLACK,
                    NAVY,
                    FOREST
                ],
                image: "",
                description: "Oversized heavyweight hoodie with back graphic.",
                stock: 18,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-tee",
                name: "After Lyric Tee",
                price: 42,
                category: "T-Shirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    WHITE,
                    SAND,
                    CHARCOAL
                ],
                image: "",
                description: "Relaxed-fit tee with tonal album graphic.",
                stock: 55,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-sweater",
                name: "After Lyric Sweater",
                price: 78,
                category: "Sweatshirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    CREAM,
                    SLATE
                ],
                image: "",
                description: "Cozy lambswool blend crewneck.",
                stock: 10,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-sweatpant",
                name: "After Lyric Sweatpant",
                price: 68,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    CHARCOAL,
                    NAVY
                ],
                image: "",
                description: "French terry sweatpant with tonal embroidery.",
                stock: 14,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-jogger",
                name: "After Lyric Jogger",
                price: 72,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK
                ],
                image: "",
                description: "Tech-fabric jogger with reflective details.",
                stock: 8,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-pants",
                name: "After Lyric Cargo Pant",
                price: 85,
                category: "Trousers & Pants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    OLIVE
                ],
                image: "",
                description: "Relaxed cargo pant with utility pockets.",
                stock: 11,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-socks",
                name: "After Lyric Socks",
                price: 16,
                category: "Socks",
                sizes: [
                    "One Size"
                ],
                colors: [
                    BLACK,
                    CHARCOAL
                ],
                image: "",
                description: "Cushioned athletic socks with lyric detail.",
                stock: 45,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-vinyl",
                name: "After Lyric Vinyl",
                price: 34,
                category: "Vinyl",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "Colored vinyl with gatefold sleeve.",
                stock: 5,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-usb",
                name: "After Lyric USB",
                price: 28,
                category: "USB",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "USB drive with the full EP, exclusive photos, and lyric PDF.",
                stock: 10,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-mug",
                name: "After Lyric Mug",
                price: 18,
                category: "Mugs",
                sizes: [],
                colors: [
                    WHITE,
                    CREAM
                ],
                image: "",
                description: "Stoneware mug with debossed logo.",
                stock: 28,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-cup",
                name: "After Lyric Tumbler",
                price: 15,
                category: "Cups",
                sizes: [],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Insulated travel tumbler.",
                stock: 32,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-hat",
                name: "After Lyric Dad Hat",
                price: 38,
                category: "Hats",
                sizes: [
                    "One Size"
                ],
                colors: [
                    BLACK,
                    CREAM
                ],
                image: "",
                description: "Washed cotton dad hat.",
                stock: 20,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            },
            {
                slug: "al-poster",
                name: "After Lyric Poster",
                price: 25,
                category: "Posters",
                sizes: [],
                colors: [],
                image: "",
                description: "Art print on archival paper.",
                stock: 0,
                albumSlug: "after-lyric",
                albumTitle: "After Lyric"
            }
        ]
    },
    {
        slug: "man-in-my-life",
        title: "Man in My Life",
        releaseDate: "July 2023",
        duration: "45:52",
        description: "An exploration of relationships, loyalty, and the men who shaped the narrative. Honest and unapologetic.",
        quote: "You do not choose who changes you — they just do.",
        singleTitle: "Side N****a",
        cover: philly3,
        merch: [
            {
                slug: "ml-hoodie",
                name: "Man in My Life Hoodie",
                price: 88,
                category: "Hoodies",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    WINE,
                    BLACK,
                    GRAY
                ],
                image: "",
                description: "Faded wash hoodie with oversized back print.",
                stock: 22,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-tee",
                name: "Man in My Life Tee",
                price: 42,
                category: "T-Shirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    WHITE,
                    CREAM,
                    SLATE
                ],
                image: "",
                description: "Vintage-wash tee with front graphic.",
                stock: 0,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-sweater",
                name: "Man in My Life Cardigan",
                price: 95,
                category: "Sweatshirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    CREAM,
                    CHARCOAL
                ],
                image: "",
                description: "Open-front knit cardigan with button closure.",
                stock: 7,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-sweatpant",
                name: "Man in My Life Sweatpant",
                price: 68,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    GRAY,
                    WINE
                ],
                image: "",
                description: "Matching set sweatpant with tonal drawstring.",
                stock: 15,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-pants",
                name: "Man in My Life Pant",
                price: 82,
                category: "Trousers & Pants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    NAVY
                ],
                image: "",
                description: "Wide-leg trouser in premium twill.",
                stock: 9,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-socks",
                name: "Man in My Life Socks",
                price: 16,
                category: "Socks",
                sizes: [
                    "One Size"
                ],
                colors: [
                    WINE,
                    BLACK,
                    CREAM
                ],
                image: "",
                description: "Cotton-blend dress socks.",
                stock: 38,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-vinyl",
                name: "Man in My Life Vinyl",
                price: 34,
                category: "Vinyl",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "Standard weight vinyl in printed sleeve.",
                stock: 12,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-usb",
                name: "Man in My Life USB",
                price: 28,
                category: "USB",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "USB drive with album, instrumentals, and behind-the-scenes content.",
                stock: 10,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-mug",
                name: "Man in My Life Mug",
                price: 18,
                category: "Mugs",
                sizes: [],
                colors: [
                    BLACK,
                    CREAM
                ],
                image: "",
                description: "Matte black ceramic mug.",
                stock: 22,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-cup",
                name: "Man in My Life Cup",
                price: 12,
                category: "Cups",
                sizes: [],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Ceramic cup with hand-drawn lettering.",
                stock: 0,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-hat",
                name: "Man in My Life Dad Hat",
                price: 38,
                category: "Hats",
                sizes: [
                    "One Size"
                ],
                colors: [
                    WINE,
                    BLACK,
                    SAND
                ],
                image: "",
                description: "Distressed cotton twill hat.",
                stock: 17,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            },
            {
                slug: "ml-poster",
                name: "Man in My Life Poster",
                price: 25,
                category: "Posters",
                sizes: [],
                colors: [],
                image: "",
                description: "Lithograph poster.",
                stock: 20,
                albumSlug: "man-in-my-life",
                albumTitle: "Man in My Life"
            }
        ]
    },
    {
        slug: "story-of-my-journey",
        title: "Story of My Journey",
        releaseDate: "November 2023",
        duration: "51:07",
        description: "A sonic autobiography. From the corners of West Philly to stages worldwide — every chapter told in verse.",
        quote: "The journey does not end — it just finds new streets.",
        singleTitle: "Drink on the Beach",
        cover: philly1,
        merch: [
            {
                slug: "sj-hoodie",
                name: "Story of My Journey Hoodie",
                price: 88,
                category: "Hoodies",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    FOREST,
                    BLACK,
                    SAND
                ],
                image: "",
                description: "Earth-toned hoodie with journey-inspired back art.",
                stock: 19,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-tee",
                name: "Story of My Journey Tee",
                price: 42,
                category: "T-Shirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    WHITE,
                    OLIVE,
                    NAVY
                ],
                image: "",
                description: "Oversized tee with map-print graphic.",
                stock: 40,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-sweater",
                name: "Story of My Journey Pullover",
                price: 78,
                category: "Sweatshirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    FOREST,
                    CREAM
                ],
                image: "",
                description: "Half-zip fleece pullover with embroidered patch.",
                stock: 13,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-sweatpant",
                name: "Story of My Journey Sweatpant",
                price: 68,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    OLIVE,
                    CHARCOAL,
                    BLACK
                ],
                image: "",
                description: "Relaxed-fit sweatpant with embroidered knee.",
                stock: 16,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-jogger",
                name: "Story of My Journey Jogger",
                price: 72,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    FOREST,
                    BLACK
                ],
                image: "",
                description: "Lightweight jogger with map lining.",
                stock: 10,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-socks",
                name: "Story of My Journey Socks",
                price: 16,
                category: "Socks",
                sizes: [
                    "One Size"
                ],
                colors: [
                    FOREST,
                    CREAM,
                    BLACK
                ],
                image: "",
                description: "Merino wool blend socks.",
                stock: 50,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-vinyl",
                name: "Story of My Journey Vinyl",
                price: 34,
                category: "Vinyl",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "Double LP with booklet.",
                stock: 6,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-usb",
                name: "Story of My Journey USB",
                price: 28,
                category: "USB",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "USB drive with double album, making-of documentary, and liner notes.",
                stock: 8,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-mug",
                name: "Story of My Journey Mug",
                price: 18,
                category: "Mugs",
                sizes: [],
                colors: [
                    CREAM,
                    FOREST
                ],
                image: "",
                description: "Speckled stoneware mug.",
                stock: 25,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-cup",
                name: "Story of My Journey Cup",
                price: 15,
                category: "Cups",
                sizes: [],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Stainless steel camp cup.",
                stock: 0,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-hat",
                name: "Story of My Journey Dad Hat",
                price: 38,
                category: "Hats",
                sizes: [
                    "One Size"
                ],
                colors: [
                    OLIVE,
                    SAND,
                    BLACK
                ],
                image: "",
                description: "Washed canvas bucket hat.",
                stock: 15,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            },
            {
                slug: "sj-poster",
                name: "Story of My Journey Poster",
                price: 25,
                category: "Posters",
                sizes: [],
                colors: [],
                image: "",
                description: "Illustrated journey map poster.",
                stock: 18,
                albumSlug: "story-of-my-journey",
                albumTitle: "Story of My Journey"
            }
        ]
    },
    {
        slug: "tainted-love",
        title: "Tainted Love",
        releaseDate: "May 2024",
        duration: "39:44",
        description: "The aftermath of devotion. A darker, more vulnerable record that strips away the armor.",
        quote: "Love is the wound that keeps teaching you how to heal.",
        cover: fkboiAsset,
        merch: [
            {
                slug: "tl-hoodie",
                name: "Tainted Love Hoodie",
                price: 88,
                category: "Hoodies",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    BURGUNDY,
                    BLACK,
                    CHARCOAL
                ],
                image: "",
                description: "Distressed hoodie with cracked-print heart graphic.",
                stock: 21,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-tee",
                name: "Tainted Love Tee",
                price: 42,
                category: "T-Shirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    WHITE,
                    BURGUNDY,
                    SLATE
                ],
                image: "",
                description: "Bleach-wash tee with heart-break graphic.",
                stock: 37,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-sweater",
                name: "Tainted Love Sweater",
                price: 78,
                category: "Sweatshirts",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BURGUNDY,
                    BLACK
                ],
                image: "",
                description: "Turtleneck sweater in dark rose.",
                stock: 9,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-sweatpant",
                name: "Tainted Love Sweatpant",
                price: 68,
                category: "Sweatpants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    CHARCOAL,
                    BURGUNDY
                ],
                image: "",
                description: "Matching set sweatpant with tonal details.",
                stock: 18,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-pants",
                name: "Tainted Love Pant",
                price: 82,
                category: "Trousers & Pants",
                sizes: [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    BLACK,
                    CHARCOAL
                ],
                image: "",
                description: "Straight-leg pant with hidden pocket.",
                stock: 7,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-socks",
                name: "Tainted Love Socks",
                price: 16,
                category: "Socks",
                sizes: [
                    "One Size"
                ],
                colors: [
                    BURGUNDY,
                    BLACK
                ],
                image: "",
                description: "Ribbed ankle socks with heart detail.",
                stock: 42,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-vinyl",
                name: "Tainted Love Vinyl",
                price: 34,
                category: "Vinyl",
                sizes: [],
                colors: [
                    BURGUNDY
                ],
                image: "",
                description: "Colored vinyl in red/burgundy.",
                stock: 4,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-usb",
                name: "Tainted Love USB",
                price: 28,
                category: "USB",
                sizes: [],
                colors: [
                    BLACK
                ],
                image: "",
                description: "USB drive with the album, remixes, and photo gallery.",
                stock: 6,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-mug",
                name: "Tainted Love Mug",
                price: 18,
                category: "Mugs",
                sizes: [],
                colors: [
                    BLACK,
                    WHITE
                ],
                image: "",
                description: "Matte black mug with red accent.",
                stock: 20,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-cup",
                name: "Tainted Love Cup",
                price: 15,
                category: "Cups",
                sizes: [],
                colors: [
                    BURGUNDY,
                    BLACK
                ],
                image: "",
                description: "Ceramic cup with gold foil detail.",
                stock: 30,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-hat",
                name: "Tainted Love Dad Hat",
                price: 38,
                category: "Hats",
                sizes: [
                    "One Size"
                ],
                colors: [
                    BLACK,
                    BURGUNDY
                ],
                image: "",
                description: "Washed twill hat with embroidered rose.",
                stock: 0,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-poster",
                name: "Tainted Love Poster",
                price: 25,
                category: "Posters",
                sizes: [],
                colors: [],
                image: "",
                description: "Dark art print on heavyweight stock.",
                stock: 15,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            },
            {
                slug: "tl-bottle-opener",
                name: "Tainted Love Keychain",
                price: 12,
                category: "Keychains",
                sizes: [],
                colors: [
                    BLACK,
                    BURGUNDY
                ],
                image: "",
                description: "Bottle opener keychain with laser-cut heart.",
                stock: 0,
                albumSlug: "tainted-love",
                albumTitle: "Tainted Love"
            }
        ]
    }
];
/* ═══════════════════════════════════════════════════
   FULL CATALOG PRODUCTS — non-album merchandise
   Representative items spanning every leaf category.
   ═══════════════════════════════════════════════════ */ const _BLK = {
    name: "Black",
    hex: "#111"
};
const _WHT = {
    name: "White",
    hex: "#F5F5F5"
};
const _GRY = {
    name: "Gray",
    hex: "#6B6B6B"
};
const _NVY = {
    name: "Navy",
    hex: "#1B2A4A"
};
const _CRM = {
    name: "Cream",
    hex: "#E8DFD0"
};
const CATALOG_PRODUCTS = [
    // Apparel > Tops - T-Shirts
    {
        slug: "wt0216",
        name: "Women's Regular Fit Crewneck T-Shirt",
        price: 6.99,
        category: "T-Shirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "Classic crewneck in soft cotton.",
        stock: 50,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wt0050",
        name: "Essential Bodycon Crewneck T-Shirt",
        price: 6.99,
        category: "T-Shirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _CRM
        ],
        image: "",
        description: "Fitted bodycon silhouette.",
        stock: 45,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Tops - Tank Tops
    {
        slug: "wt0082",
        name: "Women's Tight Crewneck Crop Tank",
        price: 4.99,
        category: "Tank Tops & Camis",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Fitted crop tank in soft cotton.",
        stock: 60,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Tops - Hoodies
    {
        slug: "ww0003",
        name: "Essential Cropped Hoodie",
        price: 18.99,
        category: "Hoodies",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY,
            _CRM
        ],
        image: "",
        description: "Relaxed cropped hoodie in fleece.",
        stock: 25,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Tops - Sweatshirts
    {
        slug: "ww0004",
        name: "Essential Fleece Mock-Neck Crew",
        price: 16.99,
        category: "Sweatshirts",
        sizes: [
            "S",
            "M",
            "L"
        ],
        colors: [
            _BLK,
            _GRY,
            _NVY
        ],
        image: "",
        description: "Heavyweight fleece crewneck.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Bottoms - Leggings
    {
        slug: "wb0013",
        name: "High-Waisted Yoga Leggings",
        price: 12.99,
        category: "Leggings",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "High-waisted performance leggings.",
        stock: 35,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Bottoms - Sweatpants
    {
        slug: "wk0009",
        name: "Essential Straight-Leg Sweatpants",
        price: 12.99,
        category: "Sweatpants",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Classic straight-leg sweatpant.",
        stock: 30,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Bottoms - Skirts
    {
        slug: "wb0081",
        name: "Women's High Rise A-Line Skirt",
        price: 16.99,
        category: "Skirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Flattering A-line silhouette.",
        stock: 22,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Bottoms - Shorts
    {
        slug: "wb0014",
        name: "Women's Contrast Stripe Track Shorts",
        price: 12.99,
        category: "Shorts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "Athletic track shorts with stripe detail.",
        stock: 28,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Bottoms - Trousers
    {
        slug: "wb0089",
        name: "Women's Wide Leg Denim Jeans",
        price: 24.99,
        category: "Trousers & Pants",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK
        ],
        image: "",
        description: "Wide-leg denim with high rise.",
        stock: 15,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > Outerwear
    {
        slug: "wt0187",
        name: "Women's Mock-Neck Quarter-Zip",
        price: 22.99,
        category: "Coats & Jackets",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "Quarter-zip outerwear layer.",
        stock: 12,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Apparel > One-Pieces
    {
        slug: "wo0014",
        name: "Women's A-Line Sleeveless Dress",
        price: 22.99,
        category: "Bodysuits",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Clean A-line sleeveless design.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wo0018",
        name: "Women's U-Neck Yoga Romper",
        price: 19.99,
        category: "Rompers",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "One-piece yoga romper.",
        stock: 14,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Tops
    {
        slug: "wt0218",
        name: "Women's Leopard Print Crop T-Shirt",
        price: 9.99,
        category: "Women's T-Shirts & Shirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _CRM
        ],
        image: "",
        description: "Bold leopard print crop tee.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wt0200",
        name: "Women's Boatneck Raglan T-Shirt",
        price: 5.99,
        category: "Women's T-Shirts & Shirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Boatneck raglan sleeve tee.",
        stock: 40,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Tanks
    {
        slug: "wt0196",
        name: "Women's Crewneck Tank Top",
        price: 5.99,
        category: "Women's Tanks",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "Essential crewneck tank.",
        stock: 55,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Hoodies
    {
        slug: "wt0192",
        name: "Women's Mineral Washed Crop Hoodie",
        price: 24.99,
        category: "Women's Hoodies",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Mineral washed cropped hoodie.",
        stock: 10,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Sweatshirts
    {
        slug: "wt0212",
        name: "Women's Crop Collared Sweatshirt",
        price: 22.99,
        category: "Women's Sweatshirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _CRM
        ],
        image: "",
        description: "Collared crop sweatshirt.",
        stock: 16,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Coats
    {
        slug: "wt0187b",
        name: "Women's Quarter-Zip Outerwear",
        price: 22.99,
        category: "Women's Coats & Jackets",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "Lightweight quarter-zip layer.",
        stock: 8,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Trousers
    {
        slug: "wb0011",
        name: "Women's High-Rise Flared Jeans",
        price: 24.99,
        category: "Women's Trousers",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK
        ],
        image: "",
        description: "High-rise flared denim.",
        stock: 12,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Shorts
    {
        slug: "wb0073",
        name: "Women's Drawstring Bermuda Shorts",
        price: 12.99,
        category: "Women's Shorts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Relaxed drawstring bermuda.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Dresses
    {
        slug: "wo0008",
        name: "Women's Collared Halter A-Line Tennis Dress",
        price: 12.99,
        category: "Sleeveless Dresses",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _WHT,
            _BLK
        ],
        image: "",
        description: "Halter A-line tennis dress.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wo0015",
        name: "Women's Ruched Sleeveless Full-Zip Dress",
        price: 26.99,
        category: "Sleeveless Dresses",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Full-zip ruched sleeveless dress.",
        stock: 10,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ws0004",
        name: "High-Waist Pocketed A-Line Skirt",
        price: 14.99,
        category: "Short Skirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "Mini skirt with pockets.",
        stock: 22,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Activewear
    {
        slug: "wt0125",
        name: "Women's V-Neck Yoga Sports Bra",
        price: 12.99,
        category: "Sports Bras",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "V-neck yoga sports bra.",
        stock: 30,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wb0040",
        name: "Women's High Rise Topstitching Leggings",
        price: 14.99,
        category: "Yoga Pants",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Topstitching detail yoga leggings.",
        stock: 25,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wb0038",
        name: "Women's High Rise Yoga Shorts",
        price: 9.99,
        category: "Yoga Shorts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "High-rise yoga shorts.",
        stock: 28,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wt0074",
        name: "Strappy Criss-Cross Sports Bra",
        price: 9.99,
        category: "Sports Bras",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Strappy criss-cross design.",
        stock: 22,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wb0076",
        name: "Women's Quarter-Zip Yoga Romper",
        price: 16.99,
        category: "Sports Sets",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Quarter-zip yoga romper set.",
        stock: 10,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "wt0181",
        name: "Women's Performance Crop T-Shirt",
        price: 6.99,
        category: "Athletic Tops",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Performance crop athletic top.",
        stock: 35,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Swimwear
    {
        slug: "sw-bikini-1",
        name: "Classic Triangle Bikini Set",
        price: 19.99,
        category: "Bikinis",
        sizes: [
            "S",
            "M",
            "L"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Triangle bikini two-piece set.",
        stock: 15,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "sw-tankini-1",
        name: "Ruched Tankini Set",
        price: 24.99,
        category: "Tankinis",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "Ruched tankini swim set.",
        stock: 12,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "sw-coverup-1",
        name: "Mesh Fringed Cover Up",
        price: 16.99,
        category: "Cover Ups",
        sizes: [
            "S/M",
            "L/XL"
        ],
        colors: [
            _WHT,
            _BLK
        ],
        image: "",
        description: "Mesh cover up with fringe.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Women's Lingerie & Sleep
    {
        slug: "ln-underwear-1",
        name: "Women's Cotton Brief 3-Pack",
        price: 12.99,
        category: "Women's Underwear",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "Cotton brief underwear 3-pack.",
        stock: 40,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ln-loungewear-1",
        name: "Women's Ribbed Knit Loungewear Set",
        price: 29.99,
        category: "Women's Loungewear",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _CRM,
            _GRY
        ],
        image: "",
        description: "Ribbed knit matching loungewear set.",
        stock: 14,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Unisex
    {
        slug: "ux-tee-1",
        name: "Unisex Heavyweight Tee",
        price: 14.99,
        category: "Unisex T-Shirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "Heavyweight unisex tee.",
        stock: 50,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-crop-1",
        name: "Unisex Boxie Crop Top",
        price: 12.99,
        category: "Unisex Crop Tops",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Boxy unisex crop top.",
        stock: 30,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-hoodie-1",
        name: "Unisex Oversized Hoodie",
        price: 34.99,
        category: "Unisex Hoodies",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        colors: [
            _BLK,
            _GRY,
            _NVY
        ],
        image: "",
        description: "Oversized unisex hoodie.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-sweat-1",
        name: "Unisex Crewneck Sweatshirt",
        price: 28.99,
        category: "Unisex Sweatshirts",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Classic unisex crewneck.",
        stock: 25,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-jacket-1",
        name: "Unisex Windbreaker Jacket",
        price: 39.99,
        category: "Unisex Jackets & Outerwear",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            _BLK,
            _NVY
        ],
        image: "",
        description: "Lightweight windbreaker.",
        stock: 15,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-hat-1",
        name: "Unisex Classic Baseball Cap",
        price: 18.99,
        category: "Hats",
        sizes: [
            "One Size"
        ],
        colors: [
            _BLK,
            _WHT,
            _CRM
        ],
        image: "",
        description: "Adjustable baseball cap.",
        stock: 35,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-beanie-1",
        name: "Unisex Ribbed Knit Beanie",
        price: 14.99,
        category: "Beanies",
        sizes: [
            "One Size"
        ],
        colors: [
            _BLK,
            _GRY,
            _CRM
        ],
        image: "",
        description: "Ribbed knit beanie.",
        stock: 40,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ux-tote-1",
        name: "Unisex Canvas Tote Bag",
        price: 16.99,
        category: "Bags & Totes",
        sizes: [],
        colors: [
            _BLK,
            _WHT,
            _CRM
        ],
        image: "",
        description: "Heavyweight canvas tote.",
        stock: 45,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Accessories > 3C & Tech
    {
        slug: "tc-airpods-1",
        name: "Silicone AirPods Case",
        price: 8.99,
        category: "AirPods Cases",
        sizes: [],
        colors: [
            _BLK,
            _WHT,
            _CRM
        ],
        image: "",
        description: "Protective silicone AirPods case.",
        stock: 60,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "tc-laptop-1",
        name: "Padded Laptop Sleeve",
        price: 19.99,
        category: "Tablet & Laptop Cases",
        sizes: [],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Padded laptop sleeve case.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "tc-phone-1",
        name: "Clear Phone Case",
        price: 6.99,
        category: "TPU Cases",
        sizes: [],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Clear protective phone case.",
        stock: 80,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "tc-gaming-1",
        name: "Gaming Controller Grip",
        price: 12.99,
        category: "Gaming Accessories",
        sizes: [],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Controller grip accessory.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "tc-watch-1",
        name: "Minimalist Watch Band",
        price: 9.99,
        category: "Watches & Bands",
        sizes: [],
        colors: [
            _BLK,
            _CRM,
            _NVY
        ],
        image: "",
        description: "Minimalist watch band.",
        stock: 25,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Accessories > Caps & Hats
    {
        slug: "ac-baseball-1",
        name: "Washed Cotton Baseball Cap",
        price: 14.99,
        category: "Baseball Caps",
        sizes: [
            "One Size"
        ],
        colors: [
            _BLK,
            _CRM,
            _NVY
        ],
        image: "",
        description: "Washed cotton baseball cap.",
        stock: 30,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "ac-bucket-1",
        name: "Reversible Bucket Hat",
        price: 16.99,
        category: "Bucket Hats",
        sizes: [
            "S/M",
            "L/XL"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "Reversible bucket hat.",
        stock: 22,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Accessories > Face & Neck
    {
        slug: "fn-scarf-1",
        name: "Oversized Cashmere-Blend Scarf",
        price: 24.99,
        category: "Scarves, Wraps & Stoles",
        sizes: [],
        colors: [
            _BLK,
            _CRM,
            _GRY
        ],
        image: "",
        description: "Oversized cashmere-blend scarf.",
        stock: 15,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "fn-face-1",
        name: "Patterned Face Cover 3-Pack",
        price: 8.99,
        category: "Face Covers",
        sizes: [],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Patterned reusable face covers.",
        stock: 50,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Accessories > Jewelry
    {
        slug: "jw-badge-1",
        name: "Enamel Pin Badge",
        price: 6.99,
        category: "Badges",
        sizes: [],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Enamel pin badge.",
        stock: 40,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "jw-necklace-1",
        name: "Minimal Chain Necklace",
        price: 18.99,
        category: "Necklaces",
        sizes: [],
        colors: [
            _BLK,
            _GRY,
            _CRM
        ],
        image: "",
        description: "Minimal chain necklace.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "jw-keychain-1",
        name: "Metal Keychain",
        price: 7.99,
        category: "Keychains",
        sizes: [],
        colors: [
            _BLK,
            _GRY,
            _CRM
        ],
        image: "",
        description: "Durable metal keychain.",
        stock: 55,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Accessories > Footwear
    {
        slug: "fw-sport-1",
        name: "Lightweight Athletic Sneaker",
        price: 34.99,
        category: "Sports Shoes",
        sizes: [
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
        ],
        colors: [
            _BLK,
            _WHT,
            _GRY
        ],
        image: "",
        description: "Lightweight athletic sneaker.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "fw-boot-1",
        name: "Platform Chelsea Boot",
        price: 49.99,
        category: "Boots",
        sizes: [
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
        ],
        colors: [
            _BLK
        ],
        image: "",
        description: "Platform Chelsea boot.",
        stock: 8,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "fw-slipper-1",
        name: "Faux Fur Slide Slipper",
        price: 14.99,
        category: "Slippers",
        sizes: [
            "5",
            "6",
            "7",
            "8",
            "9"
        ],
        colors: [
            _BLK,
            _CRM
        ],
        image: "",
        description: "Faux fur slide slipper.",
        stock: 25,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "fw-sock-1",
        name: "Performance Athletic Socks 3-Pack",
        price: 9.99,
        category: "Socks",
        sizes: [
            "One Size"
        ],
        colors: [
            _BLK,
            _WHT
        ],
        image: "",
        description: "Cushioned athletic socks.",
        stock: 60,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Accessories > Bags
    {
        slug: "bg-backpack-1",
        name: "Classic Quilted Backpack",
        price: 29.99,
        category: "Backpacks & Schoolbags",
        sizes: [],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Quilted backpack with padded straps.",
        stock: 15,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-tote-1",
        name: "Structured Leather Tote",
        price: 39.99,
        category: "Tote Bags",
        sizes: [],
        colors: [
            _BLK,
            _CRM,
            _NVY
        ],
        image: "",
        description: "Structured leather tote bag.",
        stock: 12,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-crossbody-1",
        name: "Chain Strap Crossbody Bag",
        price: 24.99,
        category: "Crossbody Bags",
        sizes: [],
        colors: [
            _BLK,
            _CRM
        ],
        image: "",
        description: "Chain strap crossbody bag.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-fanny-1",
        name: "Nylon Fanny Pack",
        price: 14.99,
        category: "Fanny Packs",
        sizes: [],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Lightweight nylon fanny pack.",
        stock: 30,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-wallet-1",
        name: "Slim Bifold Wallet",
        price: 16.99,
        category: "Wallets & Phone Bags",
        sizes: [],
        colors: [
            _BLK,
            _CRM
        ],
        image: "",
        description: "Slim bifold leather wallet.",
        stock: 22,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-cosmetic-1",
        name: "Zip Cosmetic Pouch",
        price: 9.99,
        category: "Cosmetic & Toiletry Bags",
        sizes: [],
        colors: [
            _BLK,
            _CRM,
            _WHT
        ],
        image: "",
        description: "Zip-close cosmetic pouch.",
        stock: 35,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-luggage-1",
        name: "Hardshell Carry-On Suitcase",
        price: 69.99,
        category: "Luggage",
        sizes: [],
        colors: [
            _BLK,
            _GRY
        ],
        image: "",
        description: "Hardshell carry-on suitcase.",
        stock: 6,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-clutch-1",
        name: "Minimalist Clutch",
        price: 19.99,
        category: "Clutches",
        sizes: [],
        colors: [
            _BLK,
            _CRM,
            _NVY
        ],
        image: "",
        description: "Minimalist evening clutch.",
        stock: 14,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "bg-bucket-1",
        name: "Structured Bucket Bag",
        price: 28.99,
        category: "Bucket Bags",
        sizes: [],
        colors: [
            _BLK,
            _CRM
        ],
        image: "",
        description: "Structured bucket bag.",
        stock: 10,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    // Beauty
    {
        slug: "by-face-1",
        name: "Peptide Ageless AM/PM Cream",
        price: 12.50,
        category: "Face Care",
        sizes: [],
        colors: [],
        image: "",
        description: "Anti-age peptide cream.",
        stock: 25,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "by-face-2",
        name: "Anti-Age Hydrogel Eye Patches",
        price: 16.35,
        category: "Face Care",
        sizes: [],
        colors: [],
        image: "",
        description: "Niacinamide hydrogel eye patches.",
        stock: 20,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "by-body-1",
        name: "5% Urea + 2% Panthenol Body Cream",
        price: 16.40,
        category: "Body Care",
        sizes: [],
        colors: [],
        image: "",
        description: "Hydrating body cream.",
        stock: 18,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "by-hair-1",
        name: "Argan Oil Hair Treatment",
        price: 14.99,
        category: "Hair Care",
        sizes: [],
        colors: [],
        image: "",
        description: "Nourishing argan oil treatment.",
        stock: 22,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "by-makeup-1",
        name: "Matte Lipstick Collection",
        price: 11.99,
        category: "Makeup",
        sizes: [],
        colors: [],
        image: "",
        description: "Long-wear matte lipsticks.",
        stock: 30,
        albumSlug: "",
        albumTitle: "Shop All"
    },
    {
        slug: "by-box-1",
        name: "Anti-Age Peptide Collection Box",
        price: 48.30,
        category: "Collection Boxes",
        sizes: [],
        colors: [],
        image: "",
        description: "3-product anti-age collection.",
        stock: 8,
        albumSlug: "",
        albumTitle: "Shop All"
    }
];
const ALL_PRODUCTS = (()=>{
    const albumProducts = SHOP_ALBUMS.flatMap((a)=>a.merch.map((m)=>({
                ...m,
                albumSlug: a.slug,
                albumTitle: a.title
            })));
    return [
        ...albumProducts,
        ...CATALOG_PRODUCTS
    ].map(enrichProduct);
})();
const ALL_CATEGORIES = Object.keys(CATEGORY_SIZE_TYPE);
const ALBUMS = SHOP_ALBUMS;
const TOUR = [
    {
        date: "OCT 12",
        city: "Philadelphia, PA",
        venue: "The Fillmore",
        status: "On Sale"
    },
    {
        date: "OCT 19",
        city: "New York, NY",
        venue: "Bowery Ballroom",
        status: "On Sale"
    },
    {
        date: "OCT 26",
        city: "Washington, DC",
        venue: "9:30 Club",
        status: "Low"
    },
    {
        date: "NOV 02",
        city: "Boston, MA",
        venue: "Royale",
        status: "On Sale"
    },
    {
        date: "NOV 09",
        city: "Atlanta, GA",
        venue: "Terminal West",
        status: "On Sale"
    },
    {
        date: "NOV 16",
        city: "Chicago, IL",
        venue: "Thalia Hall",
        status: "Sold Out"
    },
    {
        date: "NOV 23",
        city: "Los Angeles, CA",
        venue: "The Novo",
        status: "On Sale"
    }
];
}),
"[project]/src/components/adea/Shop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlbumDetailPage",
    ()=>AlbumDetailPage,
    "ProductDetailPage",
    ()=>ProductDetailPage,
    "ShopDetailRouter",
    ()=>ShopDetailRouter,
    "ShopPage",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$SiteChrome$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/adea/SiteChrome.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$portal$2f$pages$2f$PortalProductDetailPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/portal/pages/PortalProductDetailPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$ShopBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/adea/ShopBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$ShopAllView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/adea/ShopAllView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
/* ═══════════════════════════════════════════════════
   STREAMING OVERLAY — horizontal scroll
   ═══════════════════════════════════════ */ const STREAM_PLATFORMS = [
    {
        key: "spotify",
        label: "Spotify"
    },
    {
        key: "appleMusic",
        label: "Apple Music"
    },
    {
        key: "tiktok",
        label: "TikTok"
    },
    {
        key: "instagram",
        label: "Instagram"
    },
    {
        key: "amazonMusic",
        label: "Amazon Music"
    },
    {
        key: "youtube",
        label: "YouTube"
    },
    {
        key: "tidal",
        label: "Tidal"
    },
    {
        key: "pandora",
        label: "Pandora"
    }
];
const SCROLL_PLATFORMS = [
    ...STREAM_PLATFORMS,
    ...STREAM_PLATFORMS,
    ...STREAM_PLATFORMS,
    ...STREAM_PLATFORMS
];
function StreamingOverlay({ open, onOpenChange, title }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                onClick: ()=>onOpenChange(false)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-3xl mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] uppercase tracking-[0.3em] text-white/40",
                                        children: "Stream Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-1 text-xl font-medium text-white",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onOpenChange(false),
                                className: "flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors cursor-pointer",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6 overflow-x-auto scrollbar-hide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max items-center gap-0",
                                children: SCROLL_PLATFORMS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        onClick: (e)=>e.preventDefault(),
                                        className: "flex shrink-0 items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$SiteChrome$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformIcon"], {
                                                name: p.key,
                                                className: "h-5 w-5 text-white/40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "whitespace-nowrap text-sm tracking-wide text-white/60",
                                                children: p.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "h-3.5 w-3.5 ml-0.5 text-white/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${p.key}-${i}`, true, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
/* ═══════════════════════════════════════════════════
   PRODUCT CARD
   ═══════════════════════════════════════ */ function ProductCard({ product, onSelect, onQuickAdd }) {
    const available = product.stock > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group cursor-pointer",
        onClick: onSelect,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square overflow-hidden bg-[#f0f0f0]",
                children: [
                    product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.image,
                        alt: product.name,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            className: "h-8 w-8 text-black/10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 108,
                            columnNumber: 75
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    available && onQuickAdd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onQuickAdd();
                        },
                        className: "absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center border border-black/10 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 cursor-pointer hover:bg-black hover:text-white",
                        "aria-label": "Quick add",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    !available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10 flex items-center justify-center bg-white/70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium uppercase tracking-widest text-black",
                            children: "Sold Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-medium uppercase tracking-wide text-black/80 leading-tight line-clamp-1",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm ${available ? "text-black" : "text-black"}`,
                                children: available ? `$${product.price}.00` : "Sold Out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-neutral-400 font-mono tracking-wider",
                                children: product.sku
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    product.colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex gap-1.5",
                        children: product.colors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-3 w-3 rounded-full border border-black/10",
                                style: {
                                    backgroundColor: c.hex
                                },
                                title: c.name
                            }, c.hex, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
/* ═══════════════════════════════════════════════════
   CATEGORY SIDEBAR — shared across all shop pages
   ═══════════════════════════════════════════════════ */ function CategorySidebar({ selected, onChange, onNavigate }) {
    const [openNodes, setOpenNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggle = (slug)=>{
        setOpenNodes((prev)=>{
            const next = new Set(prev);
            if (next.has(slug)) next.delete(slug);
            else next.add(slug);
            return next;
        });
    };
    function renderNode(node, depth) {
        const hasChildren = node.children && node.children.length > 0;
        const isOpen = openNodes.has(node.slug);
        const isLeaf = !!node.categories;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (isLeaf) {
                            onChange(node.categories);
                            onNavigate?.();
                        } else if (hasChildren) toggle(node.slug);
                    },
                    className: `w-full flex items-center justify-between py-1.5 text-left text-[11px] tracking-wide cursor-pointer transition-colors hover:text-black ${isLeaf && selected && JSON.stringify(selected) === JSON.stringify(node.categories) ? "text-black font-medium" : "text-black"}`,
                    style: {
                        paddingLeft: `${depth * 14}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: node.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: `h-3 w-3 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this),
                hasChildren && isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: node.children.map((child)=>renderNode(child, depth + 1))
                }, void 0, false, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, this)
            ]
        }, node.slug, true, {
            fileName: "[project]/src/components/adea/Shop.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.2em] text-black",
                        children: "Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange(null),
                        className: "text-[10px] uppercase tracking-wider text-black hover:text-black cursor-pointer underline",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_TREE"].map((node)=>renderNode(node, 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
/* ═══════════════════════════════════════════════════
   SIZE FILTER
   ═══════════════════════════════════════ */ const SIZE_LABELS = {
    clothing: "Clothing Size",
    waist: "Waist Size",
    shoe: "Shoe Size",
    hat: "Hat Size",
    drinkware: "Size",
    "one-size": "",
    none: ""
};
function SizeFilter({ categories, selected, onChange }) {
    let activeSizeType = "none";
    if (categories) {
        const types = new Set(categories.map((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_SIZE_TYPE"][c] ?? "none"));
        if (types.size === 1) activeSizeType = [
            ...types
        ][0];
        else activeSizeType = "clothing";
    }
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIZE_OPTIONS"][activeSizeType];
    const label = SIZE_LABELS[activeSizeType];
    if (!options || options.length === 0 || !label) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-[0.2em] text-black mb-3",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: options.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange(selected === s ? null : s),
                        className: `px-3 py-1.5 text-[11px] uppercase tracking-wider border transition-all cursor-pointer ${selected === s ? "bg-black text-white border-black" : "bg-white text-black border-black/15 hover:border-black/40"}`,
                        children: s
                    }, s, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
function ShopNav({ active, onChange, cartCount }) {
    const tabs = [
        {
            label: "Albums",
            key: "albums"
        },
        {
            label: "Collections",
            key: "collections"
        },
        {
            label: "Shop All",
            key: "shop-all"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between border-b border-black/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-8",
                children: tabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange(t.key),
                        className: `relative pb-3 text-[12px] font-medium uppercase tracking-[0.15em] transition-colors cursor-pointer ${active === t.key ? "text-black border-b-2 border-black" : "text-black hover:text-black/70 border-b-2 border-transparent"}`,
                        children: t.label
                    }, t.key, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] text-black",
                children: [
                    "Cart (",
                    cartCount,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
/* ─── Albums View ─── */ function AlbumsView({ onAlbumClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-black mb-8",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOP_ALBUMS"].length,
                    " albums"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOP_ALBUMS"].map((album)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-pointer",
                        onClick: ()=>onAlbumClick(album),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square overflow-hidden bg-[#f0f0f0]",
                                children: [
                                    album.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: album.cover,
                                        alt: album.title,
                                        className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "h-10 w-10 text-black/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 287,
                                            columnNumber: 81
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold uppercase tracking-wide text-black",
                                        children: album.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] text-black uppercase tracking-wider",
                                        children: album.releaseDate
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, album.slug, true, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
/* --- Collections View --- */ function CollectionsView(_props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.25em] text-black/40 mb-2",
                        children: "Collection"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-black",
                        children: "Get the Look."
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-lg text-sm text-black",
                        children: "Adea's style, curated. Every piece worn on stage, in press, and on the streets of West Philly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
                        children: [
                            1,
                            2,
                            3,
                            4
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[3/4] overflow-hidden border border-black/10 bg-[#f0f0f0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full w-full items-center justify-center text-[11px] uppercase tracking-widest text-black/15",
                                            children: [
                                                "Look ",
                                                i
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[12px] font-medium uppercase tracking-wide text-black/80 line-clamp-1",
                                        children: [
                                            "Look ",
                                            i
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] text-black/50",
                                        children: "Coming soon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-black/10 pt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-display text-3xl text-black/15",
                        children: "More collections coming soon."
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm text-black",
                        children: "Special runs and collaborations."
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
/* ─── Shop All View ─── */ function ShopAllView({ onSelectProduct, onQuickAdd }) {
    const [selectedCats, setSelectedCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"];
        if (selectedCats) list = list.filter((p)=>selectedCats.includes(p.category));
        if (selectedSize) list = list.filter((p)=>p.sizes.includes(selectedSize));
        return list;
    }, [
        selectedCats,
        selectedSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategorySidebar, {
                        selected: selectedCats,
                        onChange: setSelectedCats
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SizeFilter, {
                        categories: selectedCats,
                        selected: selectedSize,
                        onChange: setSelectedSize
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-[11px] text-black",
                        children: [
                            filtered.length,
                            " product",
                            filtered.length !== 1 ? "s" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6",
                        children: filtered.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                product: p,
                                onSelect: ()=>onSelectProduct(p),
                                onQuickAdd: onQuickAdd
                            }, p.slug, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-20 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black",
                            children: "No products match your filters."
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 361,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
function ShopPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addToCart, cartCount, shopSubPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [shopPath, setShopPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(shopSubPath || "albums");
    // Sync local state with store when shopSubPath changes (e.g. from breadcrumb)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (shopSubPath && shopSubPath !== shopPath) {
            setShopPath(shopSubPath);
        }
    }, [
        shopSubPath
    ]);
    const openAlbum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((album)=>{
        router.push(`/shop/${album.slug}`);
    }, [
        router
    ]);
    const openProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((p)=>{
        router.push(`/shop/${p.slug}`);
    }, [
        router
    ]);
    const handleQuickAdd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        addToCart();
    }, [
        addToCart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$ShopBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShopBanner"], {}, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "min-h-screen bg-white px-6 pt-12 pb-20 md:px-12 md:pt-20 md:pb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-[0.25em] text-black",
                            children: "06 — Shop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-display text-[clamp(3rem,8vw,8rem)] leading-[0.85] text-black",
                            children: "Shop."
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopNav, {
                                    active: shopPath,
                                    onChange: setShopPath,
                                    cartCount: cartCount
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this),
                                shopPath === "albums" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlbumsView, {
                                    onAlbumClick: openAlbum
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 399,
                                    columnNumber: 39
                                }, this),
                                shopPath === "collections" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollectionsView, {
                                    selectedCats: null,
                                    onCategoryChange: ()=>{}
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 400,
                                    columnNumber: 44
                                }, this),
                                shopPath === "shop-all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$ShopAllView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShopAllView"], {}, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 401,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
/* ═══════════════════════════════════════════════════
   ALBUM DETAIL PAGE — exact mockup match
   ═══════════════════════════════════════════════════ */ function AlbumActionList({ album, onStream, onAddToCart }) {
    const vinylProduct = album.merch.find((m)=>m.category === "Vinyl");
    const digitalPrice = 12;
    const actions = [
        {
            label: "Stream",
            onClick: ()=>onStream(album.title + " — Album")
        },
        {
            label: "Add to Cart (Digital)",
            onClick: onAddToCart
        },
        {
            label: "Add to Cart (Vinyl)",
            disabled: !vinylProduct || vinylProduct.stock <= 0,
            onClick: onAddToCart
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-black/15",
        children: actions.map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: action.onClick,
                disabled: action.disabled,
                className: `w-full flex items-center justify-between py-5 border-b border-black/15 transition-colors cursor-pointer ${action.disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-black/[0.02]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[15px] font-normal text-black",
                        children: action.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-[18px] w-[18px] shrink-0 rounded-full bg-black"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/Shop.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, this);
}
function AlbumDetailPage({ slug }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { detailSlug, setDetailSlug, addToCart, setActiveTab, setShopSubPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [streamOpen, setStreamOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streamTitle, setStreamTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sidebarCats, setSidebarCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeSlug = slug || detailSlug;
    const album = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOP_ALBUMS"].find((a)=>a.slug === activeSlug), [
        activeSlug
    ]);
    const openProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((p)=>{
        router.push(`/shop/${p.slug}`);
    }, [
        router
    ]);
    const handleQuickAdd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        addToCart();
    }, [
        addToCart
    ]);
    const openStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((title)=>{
        setStreamTitle(title);
        setStreamOpen(true);
    }, []);
    if (!album) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-black",
                children: "Album not found."
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 461,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/Shop.tsx",
            lineNumber: 461,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "min-h-screen bg-white px-4 pt-32 pb-20 md:px-8 md:pt-44 md:pb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push("/shop");
                                    },
                                    className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-black hover:text-black transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, this),
                                        "Shop"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push("/shop");
                                    },
                                    className: "text-[11px] uppercase tracking-[0.2em] text-black hover:text-black transition-colors cursor-pointer",
                                    children: "Shop All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push("/shop");
                                    },
                                    className: "text-[11px] uppercase tracking-[0.2em] text-black hover:text-black transition-colors cursor-pointer",
                                    children: "Collections"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr_1fr] md:gap-0 md:items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block pr-8 border-r border-black/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategorySidebar, {
                                        selected: sidebarCats,
                                        onChange: setSidebarCats,
                                        onNavigate: ()=>{
                                            setDetailSlug(null, null);
                                            setActiveTab("shop");
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center justify-center bg-[#f4f4f4] min-h-[400px] md:min-h-0 md:h-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-[90%] py-8 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full aspect-square overflow-hidden shadow-lg",
                                                style: {
                                                    transform: "rotate(-2deg)"
                                                },
                                                children: album.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: album.cover,
                                                    alt: album.title,
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-full w-full items-center justify-center bg-black/5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                        className: "h-16 w-16 text-black/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 96
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                    className: "h-3.5 w-3.5 text-black/25"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[4px] h-24 bg-black/10 rounded-full relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 w-full h-6 bg-black/40 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 501,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-start py-0 md:pl-12 md:py-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-black",
                                            children: album.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 511,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[clamp(1rem,2vw,1.35rem)] font-normal text-black",
                                            children: album.releaseDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[clamp(1rem,2vw,1.35rem)] font-normal text-black",
                                            children: album.duration
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 text-[12px] italic text-black",
                                            children: "A note from the artist:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[12px] leading-[1.5] uppercase font-medium tracking-wide text-black line-clamp-3",
                                            children: album.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[12px] uppercase tracking-wide font-medium text-black",
                                            children: "ADEA LYRIC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this),
                                        album.quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[13px] leading-[1.4] text-black italic",
                                            children: [
                                                "“",
                                                album.quote,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto pt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlbumActionList, {
                                                album: album,
                                                onStream: openStream,
                                                onAddToCart: ()=>addToCart()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase tracking-[0.2em] text-black",
                                    children: [
                                        album.title,
                                        " — Merchandise"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6",
                                    children: album.merch.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                            product: p,
                                            onSelect: ()=>openProduct(p),
                                            onQuickAdd: handleQuickAdd
                                        }, p.slug, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 545,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 539,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase tracking-[0.2em] text-black",
                                    children: "Visuals"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 552,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2",
                                    children: [
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video overflow-hidden bg-[#f0f0f0]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full w-full items-center justify-center text-[11px] uppercase tracking-widest text-black/15",
                                                children: [
                                                    "Video ",
                                                    i
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 555,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StreamingOverlay, {
                open: streamOpen,
                onOpenChange: setStreamOpen,
                title: streamTitle
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function ProductDetailPage({ slug }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { detailSlug, setDetailSlug, addToCart, setActiveTab, setShopSubPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notifyEmail, setNotifyEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notifySent, setNotifySent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarCats, setSidebarCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeSlug = slug || detailSlug;
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].find((p)=>p.slug === activeSlug), [
        activeSlug
    ]);
    const available = product ? product.stock > 0 : false;
    const enriched = product ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enrichProduct"])(product) : null;
    const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!product) return [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].filter((p)=>p.albumSlug === product.albumSlug && p.slug !== product.slug).slice(0, 4);
    }, [
        product
    ]);
    const openRelated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((p)=>{
        router.push(`/shop/${p.slug}`);
        setSelectedSize(null);
        setNotifySent(false);
    }, [
        router
    ]);
    const handleAddToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (available) addToCart();
    }, [
        available,
        addToCart
    ]);
    const handleNotify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (notifyEmail) setNotifySent(true);
    }, [
        notifyEmail
    ]);
    if (!product || !enriched) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-black",
                children: "Product not found."
            }, void 0, false, {
                fileName: "[project]/src/components/adea/Shop.tsx",
                lineNumber: 602,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/adea/Shop.tsx",
            lineNumber: 602,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-white px-4 pt-32 pb-20 md:px-8 md:pt-44 md:pb-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1400px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const parentAlbum = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOP_ALBUMS"].find((a)=>a.slug === product.albumSlug);
                                if (parentAlbum) {
                                    router.push(`/shop/${parentAlbum.slug}`);
                                } else {
                                    router.push("/shop");
                                }
                            },
                            className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-black hover:text-black transition-colors cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                router.push("/shop");
                            },
                            className: "text-[11px] uppercase tracking-[0.2em] text-black hover:text-black transition-colors cursor-pointer",
                            children: "Shop All"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                router.push("/shop");
                            },
                            className: "text-[11px] uppercase tracking-[0.2em] text-black hover:text-black transition-colors cursor-pointer",
                            children: "Collections"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 622,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 609,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr_1fr] md:gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block pr-8 border-r border-black/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategorySidebar, {
                                selected: sidebarCats,
                                onChange: setSidebarCats,
                                onNavigate: ()=>{
                                    setDetailSlug(null, null);
                                    setActiveTab("shop");
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/Shop.tsx",
                                lineNumber: 628,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-square overflow-hidden bg-[#f4f4f4]",
                            children: [
                                product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.image,
                                    alt: product.name,
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full w-full items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "h-12 w-12 text-black/10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 636,
                                        columnNumber: 79
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 636,
                                    columnNumber: 15
                                }, this),
                                !available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-white/70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-medium uppercase tracking-widest text-black",
                                        children: "Sold Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 640,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 632,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:pl-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase tracking-[0.3em] text-black",
                                            children: product.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        enriched.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase tracking-[0.2em] text-neutral-400",
                                            children: [
                                                "SKU: ",
                                                enriched.sku
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-3 text-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-black",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-2xl font-light",
                                    children: available ? `$${product.price}.00` : "Sold Out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this),
                                enriched.availability === "Low Stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-black",
                                    children: [
                                        "Low Stock — only ",
                                        product.stock,
                                        " left"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 655,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[12px] font-medium uppercase tracking-[0.2em] text-black",
                                    children: [
                                        product.albumTitle,
                                        " Collection"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 656,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-relaxed text-black",
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 657,
                                    columnNumber: 13
                                }, this),
                                enriched.sizes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-[10px] uppercase tracking-[0.2em] text-black",
                                            children: "Size"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: enriched.sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedSize(s),
                                                    className: `h-10 min-w-[48px] px-4 text-[12px] uppercase tracking-wider border transition-all cursor-pointer ${selectedSize === s ? "bg-black text-white border-black" : "bg-white text-black border-black/15 hover:border-black/40"}`,
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/Shop.tsx",
                                            lineNumber: 663,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAddToCart,
                                        className: "w-full bg-black py-4 text-[12px] uppercase tracking-[0.2em] text-white hover:bg-black/80 transition-colors cursor-pointer",
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 674,
                                        columnNumber: 17
                                    }, this) : notifySent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-black/10 py-4 text-center text-[12px] text-black",
                                        children: "You'll be notified when available."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 676,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Email for notification",
                                                value: notifyEmail,
                                                onChange: (e)=>setNotifyEmail(e.target.value),
                                                className: "flex-1 border border-black/15 px-4 py-3 text-[12px] placeholder:text-black/25 focus:outline-none focus:border-black/40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 679,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNotify,
                                                className: "bg-black px-6 py-3 text-[12px] uppercase tracking-[0.15em] text-white hover:bg-black/80 transition-colors cursor-pointer",
                                                children: "Notify Me"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/Shop.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 678,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 672,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 border-t border-black/5 pt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-black",
                                        children: "Free shipping on orders over $100. Ships in 3–5 business days. 30-day returns."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/Shop.tsx",
                                        lineNumber: 686,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this),
                related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8 text-[10px] uppercase tracking-[0.2em] text-black",
                            children: "From the same collection"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 694,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-6",
                            children: related.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                    product: p,
                                    onSelect: ()=>openRelated(p),
                                    onQuickAdd: ()=>addToCart()
                                }, p.slug, false, {
                                    fileName: "[project]/src/components/adea/Shop.tsx",
                                    lineNumber: 697,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/Shop.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/Shop.tsx",
                    lineNumber: 693,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/adea/Shop.tsx",
            lineNumber: 607,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, this);
}
function ShopDetailRouter({ slug }) {
    // Check product-catalog (POD/merch) first
    const catalogProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductById"])(slug);
    if (catalogProduct) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$portal$2f$pages$2f$PortalProductDetailPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            productId: slug
        }, void 0, false, {
            fileName: "[project]/src/components/adea/Shop.tsx",
            lineNumber: 715,
            columnNumber: 12
        }, this);
    }
    // Fall back to shop catalog (albums + merch)
    const isAlbum = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOP_ALBUMS"].some((a)=>a.slug === slug);
    const isProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].some((p)=>p.slug === slug);
    if (isAlbum) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlbumDetailPage, {
        slug: slug
    }, void 0, false, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 722,
        columnNumber: 23
    }, this);
    if (isProduct) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductDetailPage, {
        slug: slug
    }, void 0, false, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 723,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-black",
            children: "Item not found."
        }, void 0, false, {
            fileName: "[project]/src/components/adea/Shop.tsx",
            lineNumber: 727,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/adea/Shop.tsx",
        lineNumber: 726,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba2afdca._.js.map