(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/adea/SiteChrome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { cartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    // Interior pages have white bg — header needs solid dark bg
    const isLightPage = pathname !== "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const on = {
                "SiteHeader.useEffect.on": ()=>setScrolled(window.scrollY > 20)
            }["SiteHeader.useEffect.on"];
            on();
            window.addEventListener("scroll", on, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("scroll", on)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${isLightPage || scrolled ? "border-b border-border bg-ink backdrop-blur-xl" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-eyebrow text-bone cursor-pointer",
                            children: [
                                "Adea",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-10 md:flex",
                            children: NAV.map((n)=>{
                                const active = pathname === n.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: n.href,
                                    className: `group relative text-eyebrow transition-colors cursor-pointer ${active ? "text-bone" : "text-bone/70 hover:text-bone"}`,
                                    children: [
                                        n.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "hidden text-eyebrow text-bone/70 hover:text-bone md:inline-flex cursor-pointer",
                                    children: "Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "grid h-10 w-10 place-items-center border border-border md:hidden cursor-pointer",
                                    onClick: ()=>setMenu((v)=>!v),
                                    "aria-label": "Menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block h-px w-5 transition-transform bg-bone ${menu ? "translate-y-1 rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-30 transition-all duration-500 md:hidden ${menu ? "bg-ink opacity-100 pointer-events-auto" : "bg-ink opacity-0 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex h-full flex-col justify-center gap-8 px-8",
                    children: [
                        NAV.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/booking",
                            onClick: ()=>setMenu(false),
                            className: "text-display text-6xl cursor-pointer text-left text-bone/50",
                            children: "Booking"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(SiteHeader, "cyqTPYDmA0jN54o0NBA71H8SW7o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = SiteHeader;
function PlatformIcon({ name, className = "h-5 w-5" }) {
    const icons = {
        spotify: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        appleMusic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        tiktok: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        amazonMusic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        youtube: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        tidal: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        pandora: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: className,
            fill: "currentColor",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: icons[name] ?? null
    }, void 0, false);
}
_c1 = PlatformIcon;
const MUSICBOX_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MUSICBOX_URL || 'https://musicbox.adealyric.com';
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pt-16 pb-10 md:px-12 md:pt-24 md:pb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1600px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "relative block cursor-pointer group",
                                            "aria-label": "Adea Lyric Home",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:col-span-8",
                                    children: FOOTER_LINKS.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-eyebrow mb-5 text-bone/50",
                                                    children: col.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-3",
                                                    children: col.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: link.external || col.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: link.href,
                                                                className: "text-sm text-bone/70 transition-colors hover:text-bone cursor-pointer text-left",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 border-t border-border md:mt-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/SiteChrome.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-col gap-8 md:mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-marquee-track flex w-max items-center gap-8",
                                        children: ALL_PLATFORMS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                onClick: (e)=>e.preventDefault(),
                                                className: "flex shrink-0 items-center gap-2 text-ash/60 transition-colors hover:text-bone",
                                                "aria-label": p.label,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformIcon, {
                                                        name: p.key,
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start gap-1 text-xs text-ash/60 md:items-end md:text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c2 = SiteFooter;
function PageShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen w-full text-bone bg-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteHeader, {}, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/adea/SiteChrome.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteFooter, {}, void 0, false, {
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
_c3 = PageShell;
function PageIntro({ eyebrow, title, italic, sub, dark = false, bgImage }) {
    const isDark = dark || !!bgImage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative flex min-h-[60svh] items-end overflow-hidden ${isDark ? "bg-ink text-bone" : "bg-white text-black"} md:min-h-[70svh]`,
        children: [
            bgImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: bgImage,
                        alt: "",
                        className: "absolute inset-0 h-full w-full object-cover opacity-40 grayscale",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-56",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-eyebrow ${isDark ? "text-ash" : "text-black/30"}`,
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/SiteChrome.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none ${isDark ? "text-bone" : "text-black"}`,
                        children: [
                            title,
                            italic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c4 = PageIntro;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "SiteHeader");
__turbopack_context__.k.register(_c1, "PlatformIcon");
__turbopack_context__.k.register(_c2, "SiteFooter");
__turbopack_context__.k.register(_c3, "PageShell");
__turbopack_context__.k.register(_c4, "PageIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
_c = ALL_CATEGORIES;
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
var _c;
__turbopack_context__.k.register(_c, "ALL_CATEGORIES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/adea/MusicDiscography.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscographyPage",
    ()=>DiscographyPage,
    "ReleaseDetailPage",
    ()=>ReleaseDetailPage,
    "TourPage",
    ()=>TourPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$SiteChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/adea/SiteChrome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TYPES = [
    "All",
    "Album",
    "EP",
    "Single",
    "Mixtape"
];
const DISCO_HERO = "/discography/hero/hero.jpg";
function ArrowIcon({ className = "h-4 w-4" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h14M13 6l6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ArrowIcon;
function DiscographyPage() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("path");
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { setDetailSlug, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DiscographyPage.useMemo[filtered]": ()=>{
            const list = filter === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].filter({
                "DiscographyPage.useMemo[filtered]": (r)=>r.type === filter
            }["DiscographyPage.useMemo[filtered]"]);
            return [
                ...list
            ].sort({
                "DiscographyPage.useMemo[filtered]": (a, b)=>b.year - a.year
            }["DiscographyPage.useMemo[filtered]"]);
        }
    }["DiscographyPage.useMemo[filtered]"], [
        filter
    ]);
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DiscographyPage.useMemo[counts]": ()=>{
            const m = new Map();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].forEach({
                "DiscographyPage.useMemo[counts]": (r)=>m.set(r.type, (m.get(r.type) ?? 0) + 1)
            }["DiscographyPage.useMemo[counts]"]);
            m.set("All", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].length);
            return m;
        }
    }["DiscographyPage.useMemo[counts]"], []);
    const active = filtered.find((r)=>r.slug === hover) ?? filtered[0];
    /* ---- music player state ---- */ const allTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DiscographyPage.useMemo[allTracks]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].flatMap({
                "DiscographyPage.useMemo[allTracks]": (r)=>r.tracks.map({
                        "DiscographyPage.useMemo[allTracks]": (t)=>({
                                ...t,
                                release: r
                            })
                    }["DiscographyPage.useMemo[allTracks]"])
            }["DiscographyPage.useMemo[allTracks]"])
    }["DiscographyPage.useMemo[allTracks]"], []);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const track = allTracks[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex min-h-[60svh] items-end overflow-hidden bg-ink md:min-h-[70svh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: DISCO_HERO,
                        alt: "",
                        className: "absolute inset-0 h-full w-full object-cover opacity-60",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-56",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-eyebrow text-ash",
                                children: "Volume — Discography"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none text-bone",
                                children: [
                                    "The Sound of",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block italic text-ash",
                                        children: "West Philly"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 max-w-xl text-lg text-bone/70",
                                children: "Every release, in the order the world got to hear it."
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 border-b border-black/10 bg-white px-6 md:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[1600px] flex-col justify-between gap-6 py-6 md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(t),
                                    className: `group flex items-center gap-2 border px-4 py-2 text-eyebrow transition-all cursor-pointer ${filter === t ? "border-black bg-black text-white" : "border-black/15 text-black hover:border-black hover:text-black"}`,
                                    children: [
                                        t,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-60",
                                            children: counts.get(t) ?? 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t, true, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-eyebrow text-black",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setView("path"),
                                    className: `border px-4 py-2 text-eyebrow transition-all cursor-pointer ${view === "path" ? "border-black bg-black text-white" : "border-black/15 text-black hover:border-black hover:text-black"}`,
                                    children: "Path"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setView("grid"),
                                    className: `border px-4 py-2 text-eyebrow transition-all cursor-pointer ${view === "grid" ? "border-black bg-black text-white" : "border-black/15 text-black hover:border-black hover:text-black"}`,
                                    children: "Grid"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            view === "path" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 bg-white px-6 py-20 md:px-12 md:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1600px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "divide-y divide-black/10 border-y border-black/10",
                            children: filtered.map((r, i)=>{
                                const isActive = active?.slug === r.slug;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    onMouseEnter: ()=>setHover(r.slug),
                                    className: "group relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDetailSlug(r.slug, "release"),
                                        className: "relative flex w-full items-center justify-between gap-8 py-6 md:py-10 text-left cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-6 md:gap-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-eyebrow w-14 text-black md:w-20",
                                                        children: String(i + 1).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-eyebrow hidden text-black md:inline-block md:w-32",
                                                        children: r.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-display text-[clamp(2.5rem,7vw,7rem)] leading-none transition-all duration-500 ${isActive ? "translate-x-4 text-black" : "text-black group-hover:text-black"}`,
                                                        children: r.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 md:gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-eyebrow text-black",
                                                        children: r.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden text-eyebrow text-black md:inline",
                                                        children: r.runtime
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:inline-flex items-center gap-2 text-eyebrow text-black hover:text-black transition-colors cursor-pointer",
                                                        children: "Buy ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `grid h-12 w-12 place-items-center border border-black/10 transition-all duration-500 ${isActive ? "rotate-45 border-black bg-black text-white" : "text-black"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `pointer-events-none absolute right-[15%] top-1/2 hidden aspect-[3/4] w-56 -translate-y-1/2 overflow-hidden border border-black/10 shadow-2xl transition-all duration-500 md:block ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: r.cover,
                                                    alt: "",
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 118,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this)
                                }, r.slug, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-24 text-center text-black",
                            children: "No releases in this format yet."
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 126,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 bg-white px-6 py-20 md:px-12 md:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1600px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4",
                    children: filtered.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setDetailSlug(r.slug, "release"),
                            className: "group relative block aspect-square overflow-hidden border border-black/10 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: r.cover,
                                    alt: r.title,
                                    className: "absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-between p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-eyebrow text-white",
                                                    children: r.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-eyebrow text-white",
                                                    children: r.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-display text-2xl text-white md:text-3xl",
                                                    children: r.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-eyebrow text-white/60",
                                                    children: r.runtime
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, r.slug, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-black/10 bg-white px-6 py-20 md:px-12 md:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1600px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-eyebrow mb-4 text-black",
                            children: "02 — Player"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-display text-4xl text-black md:text-6xl",
                            children: [
                                "Continuous, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-black",
                                    children: "uninterrupted."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-lg text-base text-black",
                            children: "The full catalog, in a single player. Every track from every release."
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-6 pb-32 md:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-square overflow-hidden border border-black/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: track.release.cover,
                                                alt: track.release.title,
                                                className: "h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPlaying((v)=>!v),
                                                className: "absolute inset-0 grid place-items-center cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "grid h-24 w-24 place-items-center border border-white/60 bg-black/40 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:text-black",
                                                    children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-8 w-8",
                                                        fill: "currentColor",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6 5h4v14H6zM14 5h4v14h-4z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-8 w-8",
                                                        fill: "currentColor",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8 5v14l11-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 text-eyebrow text-black",
                                        children: [
                                            track.release.type,
                                            " · ",
                                            track.release.year
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-2 text-display text-4xl text-black md:text-5xl",
                                        children: track.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setDetailSlug(track.release.slug, "release");
                                        },
                                        className: "mt-2 inline-block text-black hover:text-black cursor-pointer",
                                        children: [
                                            "from ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic",
                                                children: track.release.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 190,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex items-center gap-4 text-eyebrow text-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "0:00"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-px flex-1 bg-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-y-0 left-0 bg-black transition-all duration-1000 ${playing ? "w-1/3" : "w-0"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: track.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrent((c)=>Math.max(0, c - 1)),
                                                className: "grid h-12 w-12 place-items-center border border-black/10 text-black hover:border-black cursor-pointer",
                                                children: "‹"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPlaying((v)=>!v),
                                                className: "grid h-12 w-12 place-items-center border border-black bg-black text-white cursor-pointer",
                                                children: playing ? "❚❚" : "▶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrent((c)=>Math.min(allTracks.length - 1, c + 1)),
                                                className: "grid h-12 w-12 place-items-center border border-black/10 text-black hover:border-black cursor-pointer",
                                                children: "›"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-eyebrow mb-4 text-black",
                                    children: [
                                        "Queue · ",
                                        allTracks.length,
                                        " tracks"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: allTracks.map((tr, i)=>{
                                        const isActive = i === current;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setCurrent(i);
                                                    setPlaying(true);
                                                },
                                                className: `group flex w-full items-center justify-between gap-6 border-t border-black/10 py-4 text-left last:border-b transition-colors ${isActive ? "text-black" : "text-black hover:text-black"} cursor-pointer`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-eyebrow w-6 text-black",
                                                                children: isActive && playing ? "♪" : String(i + 1).padStart(2, "0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-display text-xl md:text-2xl",
                                                                        children: tr.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-eyebrow mt-1 text-black",
                                                                        children: tr.release.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-eyebrow text-black",
                                                        children: tr.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        }, `${tr.release.slug}-${tr.n}`, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DiscographyPage, "AsUz/o34gPjbDLaQP7NiPyTkceU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c1 = DiscographyPage;
function ReleaseDetailPage() {
    _s1();
    const { detailSlug, setDetailSlug, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].find((x)=>x.slug === detailSlug);
    if (!r) return null;
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].findIndex((x)=>x.slug === r.slug);
    const prev = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"][idx - 1];
    const next = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"][idx + 1];
    const goToShop = ()=>{
        setDetailSlug(null, null);
        setActiveTab("shop");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$SiteChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-[80svh] overflow-hidden bg-ink text-bone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: r.bgImage,
                        alt: "",
                        className: "absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-end gap-16 px-6 pb-16 pt-40 md:grid-cols-12 md:px-12 md:pb-24 md:pt-56",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square overflow-hidden border border-border shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: r.cover,
                                        alt: r.title,
                                        className: "h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDetailSlug(null, null),
                                        className: "text-eyebrow text-ash hover:text-bone cursor-pointer",
                                        children: "← Discography"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex items-center gap-6 text-eyebrow text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: r.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 269,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: r.year
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 269,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 269,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: r.runtime
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 269,
                                                columnNumber: 85
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-6 text-display text-[clamp(3.5rem,12vw,14rem)] leading-none text-bone animate-reveal",
                                        children: r.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-8 max-w-xl text-xl text-bone/80",
                                        children: r.story
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center gap-3 border border-bone bg-bone px-8 py-4 text-eyebrow text-ink transition-all hover:bg-transparent hover:text-bone cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-4 w-4",
                                                        fill: "currentColor",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8 5v14l11-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 94
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Play"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: goToShop,
                                                className: "inline-flex items-center gap-3 border border-bone bg-bone px-8 py-4 text-eyebrow text-ink transition-all hover:bg-transparent hover:text-bone cursor-pointer",
                                                children: "Buy Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center gap-3 border border-border px-8 py-4 text-eyebrow text-bone transition-all hover:border-bone cursor-pointer",
                                                children: "Spotify ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center gap-3 border border-border px-8 py-4 text-eyebrow text-bone transition-all hover:border-bone cursor-pointer",
                                                children: "Apple Music ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-white text-black px-6 py-24 md:px-12 md:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-eyebrow text-black",
                                    children: "Tracklist"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-6 text-display text-6xl text-black",
                                    children: [
                                        "Every bar,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 292,
                                            columnNumber: 77
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-black",
                                            children: "in order."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 292,
                                            columnNumber: 83
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 text-black",
                                    children: r.credits
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "md:col-span-8",
                            children: r.tracks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "group flex items-center justify-between gap-8 border-t border-black/10 py-6 last:border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 md:gap-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-eyebrow w-8 text-black",
                                                    children: String(t.n).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "grid h-10 w-10 place-items-center border border-black/10 text-black opacity-0 transition-all group-hover:opacity-100 group-hover:border-black cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-3 w-3",
                                                        fill: "currentColor",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8 5v14l11-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 98
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-display text-2xl text-black md:text-3xl",
                                                            children: t.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this),
                                                        t.feat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-eyebrow mt-1 text-black",
                                                            children: [
                                                                "feat. ",
                                                                t.feat
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-eyebrow text-black",
                                            children: t.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.n, true, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 border-t border-black/10 bg-white md:grid-cols-2",
                children: [
                    prev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setDetailSlug(prev.slug, "release"),
                        className: "group relative flex flex-col justify-between gap-6 border-b border-black/10 p-8 transition-colors hover:bg-black/[0.02] md:border-b-0 md:border-r md:p-12 cursor-pointer text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-eyebrow text-black",
                                children: "← Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-eyebrow text-black",
                                        children: [
                                            prev.year,
                                            " · ",
                                            prev.type
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-display text-4xl text-black md:text-6xl",
                                        children: prev.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 324,
                        columnNumber: 13
                    }, this),
                    next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setDetailSlug(next.slug, "release"),
                        className: "group relative flex flex-col items-end justify-between gap-6 p-8 transition-colors hover:bg-black/[0.02] md:p-12 cursor-pointer text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-eyebrow text-black",
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-eyebrow text-black",
                                        children: [
                                            next.year,
                                            " · ",
                                            next.type
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-display text-4xl text-black md:text-6xl",
                                        children: next.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 333,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$SiteChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteFooter"], {}, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(ReleaseDetailPage, "z1rckeCyaoNHDXUVx7iJavlbF9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c2 = ReleaseDetailPage;
function TourPage() {
    _s2();
    const { setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adea$2f$SiteChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageIntro"], {
                eyebrow: "On the road",
                title: "Tour,",
                italic: "live.",
                sub: "Direct ticket purchase. Calendar links. Automated map at every stop.",
                dark: true,
                bgImage: "/tour/hero/hero.jpg"
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-6 pb-12 md:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[1600px] items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-black",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUR"].length,
                            " dates"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-6 pb-24 md:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1600px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y divide-black/10 border-y border-black/10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUR"].map((d, i)=>{
                            const sold = d.status === "Sold Out";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "group grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-12 md:py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-display text-4xl text-black md:col-span-2 md:text-6xl",
                                        children: d.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 368,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-display text-2xl text-black md:text-4xl",
                                                children: d.city
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 370,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-eyebrow mt-1 text-black",
                                                children: d.venue
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 371,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 369,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-eyebrow ${sold ? "text-black/20" : d.status === "Low" ? "text-black" : "text-black"}`,
                                            children: d.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 374,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 373,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-3 md:text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: sold,
                                            className: `inline-flex items-center gap-3 border px-6 py-3 text-eyebrow transition-all cursor-pointer ${sold ? "cursor-not-allowed border-black/10 text-black/20" : "border-black text-black hover:bg-black hover:text-white"}`,
                                            children: sold ? "Sold Out" : "Tickets →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 377,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                        lineNumber: 376,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                lineNumber: 367,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-black/10 bg-white px-6 py-20 md:px-12 md:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1600px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-eyebrow mb-4 text-black",
                            children: "Recently Played"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-display text-4xl text-black md:text-6xl",
                            children: [
                                "What you've been ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-black",
                                    children: "listening to."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 393,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELEASES"].slice(0, 4).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-square overflow-hidden border border-black/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: r.cover,
                                                alt: r.title,
                                                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-black",
                                                    children: r.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-black uppercase tracking-wider",
                                                    children: [
                                                        r.year,
                                                        " · ",
                                                        r.type
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, r.slug, true, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-ink px-6 py-16 md:px-12 md:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 md:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-display text-3xl text-bone md:text-5xl",
                                    children: "Book Adea"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-ash",
                                    children: "Vocal coaching, live sessions, and private events."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("booking"),
                            className: "inline-flex items-center gap-3 border border-bone px-8 py-4 text-eyebrow text-bone transition-all hover:bg-bone hover:text-ink cursor-pointer",
                            children: "Book Now →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/adea/MusicDiscography.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(TourPage, "0m8HioFe+CvdKdiEKWQcF4ZDul4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c3 = TourPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ArrowIcon");
__turbopack_context__.k.register(_c1, "DiscographyPage");
__turbopack_context__.k.register(_c2, "ReleaseDetailPage");
__turbopack_context__.k.register(_c3, "TourPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_facc8a4e._.js.map