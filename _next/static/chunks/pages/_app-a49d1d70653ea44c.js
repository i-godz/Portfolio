(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(5461)
            }])
        },
        227: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, r) {
                return !1
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1551: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(4941).Z;
            n(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(2648).Z,
                s = n(7273).Z,
                a = o(n(7294)),
                c = n(1978),
                i = n(2139),
                l = n(7795),
                u = n(670),
                f = n(4465),
                d = n(2692),
                h = n(8245),
                p = n(9246),
                m = n(227),
                v = n(3468),
                j = new Set;

            function _(e, t, n, r, o) {
                if (o || i.isLocalURL(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        var s = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (j.has(s)) return;
                        j.add(s)
                    }
                    Promise.resolve(e.prefetch(t, n, r)).catch(function(e) {})
                }
            }

            function g(e) {
                return "string" == typeof e ? e : l.formatUrl(e)
            }
            var x = a.default.forwardRef(function(e, t) {
                var n, o, l = e.href,
                    j = e.as,
                    x = e.children,
                    b = e.prefetch,
                    y = e.passHref,
                    w = e.replace,
                    k = e.shallow,
                    C = e.scroll,
                    O = e.locale,
                    M = e.onClick,
                    N = e.onMouseEnter,
                    P = e.onTouchStart,
                    E = e.legacyBehavior,
                    S = void 0 !== E && E,
                    L = s(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = x, S && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                var R = !1 !== b,
                    T = a.default.useContext(d.RouterContext),
                    A = a.default.useContext(h.AppRouterContext),
                    B = null != T ? T : A,
                    I = !T,
                    H = a.default.useMemo(function() {
                        if (!T) {
                            var e = g(l);
                            return {
                                href: e,
                                as: j ? g(j) : e
                            }
                        }
                        var t = r(c.resolveHref(T, l, !0), 2),
                            n = t[0],
                            o = t[1];
                        return {
                            href: n,
                            as: j ? c.resolveHref(T, j) : o || n
                        }
                    }, [T, l, j]),
                    Z = H.href,
                    D = H.as,
                    X = a.default.useRef(Z),
                    G = a.default.useRef(D);
                S && (o = a.default.Children.only(n));
                var U = S ? o && "object" == typeof o && o.ref : t,
                    Y = r(p.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    J = Y[0],
                    K = Y[1],
                    V = Y[2],
                    W = a.default.useCallback(function(e) {
                        (G.current !== D || X.current !== Z) && (V(), G.current = D, X.current = Z), J(e), U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
                    }, [D, U, Z, V, J]);
                a.default.useEffect(function() {
                    B && K && R && _(B, Z, D, {
                        locale: O
                    }, I)
                }, [D, Z, K, O, R, null == T ? void 0 : T.locale, B, I]);
                var z = {
                    ref: W,
                    onClick: function(e) {
                        S || "function" != typeof M || M(e), S && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), B && !e.defaultPrevented && function(e, t, n, r, o, s, c, l, u, f) {
                            if (!("A" === e.currentTarget.nodeName.toUpperCase() && ((d = e.currentTarget.getAttribute("target")) && "_self" !== d || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which || !u && !i.isLocalURL(n)))) {
                                e.preventDefault();
                                var d, h = function() {
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                        shallow: s,
                                        locale: l,
                                        scroll: c
                                    }) : t[o ? "replace" : "push"](r || n, {
                                        forceOptimisticNavigation: !f
                                    })
                                };
                                u ? a.default.startTransition(h) : h()
                            }
                        }(e, B, Z, D, w, k, C, O, I, R)
                    },
                    onMouseEnter: function(e) {
                        S || "function" != typeof N || N(e), S && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), B && (R || !I) && _(B, Z, D, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, I)
                    },
                    onTouchStart: function(e) {
                        S || "function" != typeof P || P(e), S && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), B && (R || !I) && _(B, Z, D, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, I)
                    }
                };
                if (u.isAbsoluteUrl(D)) z.href = D;
                else if (!S || y || "a" === o.type && !("href" in o.props)) {
                    var F = void 0 !== O ? O : null == T ? void 0 : T.locale,
                        q = (null == T ? void 0 : T.isLocaleDomain) && m.getDomainLocale(D, F, null == T ? void 0 : T.locales, null == T ? void 0 : T.domainLocales);
                    z.href = q || v.addBasePath(f.addLocale(D, F, null == T ? void 0 : T.defaultLocale))
                }
                return S ? a.default.cloneElement(o, z) : a.default.createElement("a", Object.assign({}, L, z), n)
            });
            t.default = x, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(4941).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    l = e.disabled || !a,
                    u = r(o.useState(!1), 2),
                    f = u[0],
                    d = u[1],
                    h = o.useRef(null),
                    p = o.useCallback(function(e) {
                        h.current = e
                    }, []);
                return o.useEffect(function() {
                    if (a) {
                        if (!l && !f) {
                            var e, r, o, u, p = h.current;
                            if (p && p.tagName) return r = (e = function(e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = i.find(function(e) {
                                            return e.root === n.root && e.margin === n.margin
                                        });
                                    if (r && (t = c.get(r))) return t;
                                    var o = new Map;
                                    return t = {
                                        id: n,
                                        observer: new IntersectionObserver(function(e) {
                                            e.forEach(function(e) {
                                                var t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e),
                                        elements: o
                                    }, i.push(n), c.set(n, t), t
                                }({
                                    root: null == t ? void 0 : t.current,
                                    rootMargin: n
                                })).id, o = e.observer, (u = e.elements).set(p, function(e) {
                                    return e && d(e)
                                }), o.observe(p),
                                function() {
                                    if (u.delete(p), o.unobserve(p), 0 === u.size) {
                                        o.disconnect(), c.delete(r);
                                        var e = i.findIndex(function(e) {
                                            return e.root === r.root && e.margin === r.margin
                                        });
                                        e > -1 && i.splice(e, 1)
                                    }
                                }
                        }
                    } else if (!f) {
                        var m = s.requestIdleCallback(function() {
                            return d(!0)
                        });
                        return function() {
                            return s.cancelIdleCallback(m)
                        }
                    }
                }, [l, n, t, f, h.current]), [p, f, o.useCallback(function() {
                    d(!1)
                }, [])]
            };
            var o = n(7294),
                s = n(4686),
                a = "function" == typeof IntersectionObserver,
                c = new Map,
                i = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            });
            var r = n(5893);
            n(4160), n(6257);
            var o = n(603),
                s = n(7294),
                a = n(1664),
                c = n.n(a),
                i = n(1163),
                l = n(564),
                u = n.n(l),
                f = function(e) {
                    var t = e.setMenu,
                        n = (0, i.useRouter)().pathname,
                        o = n.includes("portfolio") || n.includes("project") ? u().secondaryHeader : u().primaryHeader;
                    return (0, r.jsxs)("header", {
                        className: "".concat(u().header, " ").concat(o),
                        children: [(0, r.jsx)(c(), {
                            href: "/",
                            children: (0, r.jsx)("div", {
                                className: u().logo,
                                children: (0, r.jsx)("h2", {
                                    className: "logoText",
                                    children: "Saad Baig"
                                })
                            })
                        }), (0, r.jsxs)("nav", {
                            children: [(0, r.jsx)(c(), {
                                href: "/portfolio",
                                children: (0, r.jsxs)("li", {
                                    children: ["Portfolio ", (0, r.jsx)("span", {})]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "/#about",
                                children: (0, r.jsxs)("li", {
                                    children: ["About ", (0, r.jsx)("span", {})]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "/#resume",
                                children: (0, r.jsxs)("li", {
                                    children: ["Resume ", (0, r.jsx)("span", {})]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "/blog",
                                children: (0, r.jsxs)("li", {
                                    children: ["Blog ", (0, r.jsx)("span", {})]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: u().btn,
                            children: [(0, r.jsx)(c(), {
                                href: "/#contact",
                                children: (0, r.jsx)("button", {
                                    children: "Let's talk"
                                })
                            }), (0, r.jsx)("button", {
                                className: u().menu,
                                onClick: function() {
                                    return t(!0)
                                },
                                children: (0, r.jsx)("img", {
                                    src: "/assets/icons/menu.svg",
                                    alt: "menu"
                                })
                            })]
                        })]
                    })
                },
                d = n(4544),
                h = n.n(d),
                p = function(e) {
                    var t = e.scrollY,
                        n = e.setMenu;
                    return (0, r.jsxs)("header", {
                        className: "".concat(h().header, " ").concat(t > 400 ? h().sticky : ""),
                        children: [(0, r.jsx)(c(), {
                            href: "/",
                            children: (0, r.jsx)("div", {
                                className: h().logo,
                                children: (0, r.jsx)("h2", {
                                    children: "Saad Baig"
                                })
                            })
                        }), (0, r.jsxs)("nav", {
                            children: [(0, r.jsx)(c(), {
                                href: "/portfolio",
                                children: (0, r.jsxs)("li", {
                                    children: ["Portfolio ", (0, r.jsx)("span", {})]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "/#about",
                                children: (0, r.jsxs)("li", {
                                    children: ["About ", (0, r.jsx)("span", {})]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "/#resume",
                                children: (0, r.jsxs)("li", {
                                    children: ["Resume ", (0, r.jsx)("span", {})]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "/blog",
                                children: (0, r.jsxs)("li", {
                                    children: ["Blog ", (0, r.jsx)("span", {})]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: h().btn,
                            children: [(0, r.jsx)(c(), {
                                href: "/#contact",
                                children: (0, r.jsx)("button", {
                                    children: "Let's talk"
                                })
                            }), (0, r.jsx)("button", {
                                className: h().menu,
                                onClick: function() {
                                    return n(!0)
                                },
                                children: (0, r.jsx)("img", {
                                    src: "/assets/icons/menu.svg",
                                    alt: "menu"
                                })
                            })]
                        })]
                    })
                },
                m = n(9253),
                v = n.n(m),
                j = function() {
                    return (0, r.jsxs)("footer", {
                        className: v().footer,
                        children: [(0, r.jsxs)("div", {
                            className: v().details,
                            children: [(0, r.jsxs)("p", {
                                children: [(0, r.jsx)("img", {
                                    src: "/assets/icons/atSign_grey.svg",
                                    alt: "at"
                                }), " saad@saadbaig.me"]
                            }), (0, r.jsx)("span", {}), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("img", {
                                    src: "/assets/icons/phone_grey.svg",
                                    alt: "phone"
                                }), "+92 3132480261"]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: v().socials,
                            children: [(0, r.jsx)(c(), {
                                href: "https://twitter.com/TheRealSaadBaig",
                                children: (0, r.jsx)("img", {
                                    src: "/assets/icons/twitter_white.svg",
                                    alt: "twitter"
                                })
                            }), (0, r.jsx)(c(), {
                                href: "https://www.linkedin.com/in/TheRealSaadBaig/",
                                children: (0, r.jsx)("img", {
                                    src: "/assets/icons/linkedin_white.svg",
                                    alt: "linkedin"
                                })
                            }), (0, r.jsx)(c(), {
                                href: "https://github.com/saadbaigg",
                                children: (0, r.jsx)("img", {
                                    src: "/assets/icons/github_4.svg",
                                    alt: "github"
                                })
                            })]
                        })]
                    })
                },
                _ = n(5511),
                g = n.n(_),
                x = function(e) {
                    var t = e.menu,
                        n = e.setMenu,
                        o = (0, i.useRouter)(),
                        s = o.asPath,
                        a = {
                            home: "/" === s ? g().active : "",
                            portfolio: "/portfolio" === s ? g().active : "",
                            blog: "/blog" === s ? g().active : "",
                            about: s.includes("about") ? g().active : "",
                            services: s.includes("services") ? g().active : "",
                            resume: s.includes("resume") ? g().active : "",
                            contact: s.includes("contact") ? g().active : ""
                        };
                    return (0, r.jsxs)("div", {
                        className: "".concat(g().container, " ").concat(t ? g().open : g().close),
                        children: [(0, r.jsx)("span", {
                            className: g().closeButton,
                            onClick: function() {
                                return n(!1)
                            },
                            children: "\xd7"
                        }), (0, r.jsxs)("ul", {
                            children: [(0, r.jsx)("li", {
                                className: a.home,
                                onClick: function() {
                                    n(!1), o.push("/")
                                },
                                children: "home"
                            }), (0, r.jsx)("li", {
                                className: a.portfolio,
                                onClick: function() {
                                    n(!1), o.push("/portfolio")
                                },
                                children: "portfolio"
                            }), (0, r.jsx)("li", {
                                className: a.about,
                                onClick: function() {
                                    n(!1), o.push("/#about")
                                },
                                children: "about"
                            }), (0, r.jsx)("li", {
                                className: a.resume,
                                onClick: function() {
                                    n(!1), o.push("/#resume")
                                },
                                children: "about"
                            }), (0, r.jsx)("li", {
                                className: a.blog,
                                onClick: function() {
                                    n(!1), o.push("/blog")
                                },
                                children: "blog"
                            }), (0, r.jsx)("li", {
                                className: a.contact,
                                onClick: function() {
                                    n(!1), o.push("/#contact")
                                },
                                children: "contact"
                            })]
                        })]
                    })
                },
                b = function(e) {
                    var t = e.children,
                        n = function() {
                            i(window.pageYOffset)
                        },
                        a = (0, o.Z)((0, s.useState)(0), 2),
                        c = a[0],
                        i = a[1],
                        l = (0, o.Z)((0, s.useState)(!1), 2),
                        u = l[0],
                        d = l[1];
                    return (0, s.useEffect)(function() {
                        return window.addEventListener("scroll", n),
                            function() {
                                window.removeEventListener("scroll", n)
                            }
                    }), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(f, {
                            scrollY: c,
                            setMenu: d
                        }), (0, r.jsx)(p, {
                            scrollY: c,
                            setMenu: d
                        }), (0, r.jsx)(x, {
                            menu: u,
                            setMenu: d
                        }), t, (0, r.jsx)(j, {})]
                    })
                },
                y = n(4298),
                w = n.n(y),
                k = function(e) {
                    var t = e.Component,
                        n = e.pageProps;
                    return (0, r.jsxs)(b, {
                        children: [(0, r.jsx)(w(), {
                            strategy: "lazyOnload",
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat("G-VNXGJ3XVW0")
                        }), (0, r.jsx)(w(), {
                            strategy: "lazyOnload",
                            children: "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '".concat("G-VNXGJ3XVW0", "', {\n        page_path: window.location.pathname,\n        });\n    ")
                        }), (0, r.jsx)(t, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r, o;
                                    r = e, o = n[t], t in r ? Object.defineProperty(r, t, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[t] = o
                                })
                            }
                            return e
                        }({}, n))]
                    })
                }
        },
        4160: function() {},
        6257: function() {},
        9253: function(e) {
            e.exports = {
                footer: "footer_footer__urXRR",
                details: "footer_details__vh7pD",
                socials: "footer_socials__jf2GG"
            }
        },
        564: function(e) {
            e.exports = {
                header: "header_header__WaB8X",
                logo: "header_logo__JhkiY",
                btn: "header_btn__3IPl2",
                menu: "header_menu__mOEeG",
                primaryHeader: "header_primaryHeader__RmsL9",
                secondaryHeader: "header_secondaryHeader__TwnCT"
            }
        },
        4544: function(e) {
            e.exports = {
                header: "header_copy_header__Tms8U",
                logo: "header_copy_logo__L62eo",
                btn: "header_copy_btn__ZY83Z",
                menu: "header_copy_menu__k65DJ",
                sticky: "header_copy_sticky__mb_jS"
            }
        },
        5511: function(e) {
            e.exports = {
                container: "menu_container__44um0",
                closeButton: "menu_closeButton__FCnY4",
                active: "menu_active__mvnmP",
                open: "menu_open__4wPoc",
                close: "menu_close__ElkSW"
            }
        },
        1664: function(e, t, n) {
            e.exports = n(1551)
        },
        1163: function(e, t, n) {
            e.exports = n(880)
        },
        4298: function(e, t, n) {
            e.exports = n(3573)
        },
        603: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(1118), t(880)
        }), _N_E = e.O()
    }
]);