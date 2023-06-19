(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45], {
        4470: function(e) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                t = Object.prototype.toString,
                r = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                i = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === t.call(e)
                },
                o = function(e) {
                    if (!e || "[object Object]" !== t.call(e)) return !1;
                    var r, l = n.call(e, "constructor"),
                        i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !l && !i) return !1;
                    for (r in e);
                    return void 0 === r || n.call(e, r)
                },
                u = function(e, n) {
                    r && "__proto__" === n.name ? r(e, n.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: n.newValue,
                        writable: !0
                    }) : e[n.name] = n.newValue
                },
                a = function(e, t) {
                    if ("__proto__" === t) {
                        if (!n.call(e, t)) return;
                        if (l) return l(e, t).value
                    }
                    return e[t]
                };
            e.exports = function e() {
                var n, t, r, l, s, c, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < d; ++p)
                    if (n = arguments[p], null != n)
                        for (t in n) r = a(f, t), f !== (l = a(n, t)) && (h && l && (o(l) || (s = i(l))) ? (s ? (s = !1, c = r && i(r) ? r : []) : c = r && o(r) ? r : {}, u(f, {
                            name: t,
                            newValue: e(h, c, l)
                        })) : void 0 !== l && u(f, {
                            name: t,
                            newValue: l
                        }));
                return f
            }
        },
        8139: function(e) {
            var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                t = /\n/g,
                r = /^\s*/,
                l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                i = /^:\s*/,
                o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                u = /^[;\s]*/,
                a = /^\s+|\s+$/g;

            function s(e) {
                return e ? e.replace(a, "") : ""
            }
            e.exports = function(e, a) {
                if ("string" != typeof e) throw TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var c = 1,
                    f = 1;

                function p(e) {
                    var n = e.match(t);
                    n && (c += n.length);
                    var r = e.lastIndexOf("\n");
                    f = ~r ? e.length - r : f + e.length
                }

                function d() {
                    var e = {
                        line: c,
                        column: f
                    };
                    return function(n) {
                        return n.position = new h(e), y(r), n
                    }
                }

                function h(e) {
                    this.start = e, this.end = {
                        line: c,
                        column: f
                    }, this.source = a.source
                }
                h.prototype.content = e;
                var m = [];

                function g(n) {
                    var t = Error(a.source + ":" + c + ":" + f + ": " + n);
                    if (t.reason = n, t.filename = a.source, t.line = c, t.column = f, t.source = e, a.silent) m.push(t);
                    else throw t
                }

                function y(n) {
                    var t = n.exec(e);
                    if (t) {
                        var r = t[0];
                        return p(r), e = e.slice(r.length), t
                    }
                }

                function k(e) {
                    var n;
                    for (e = e || []; n = x();) !1 !== n && e.push(n);
                    return e
                }

                function x() {
                    var n = d();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var t = 2;
                            "" != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));) ++t;
                        if (t += 2, "" === e.charAt(t - 1)) return g("End of comment missing");
                        var r = e.slice(2, t - 2);
                        return f += 2, p(r), e = e.slice(t), f += 2, n({
                            type: "comment",
                            comment: r
                        })
                    }
                }
                return y(r),
                    function() {
                        var e, t = [];
                        for (k(t); e = function() {
                                var e = d(),
                                    t = y(l);
                                if (t) {
                                    if (x(), !y(i)) return g("property missing ':'");
                                    var r = y(o),
                                        a = e({
                                            type: "declaration",
                                            property: s(t[0].replace(n, "")),
                                            value: r ? s(r[0].replace(n, "")) : ""
                                        });
                                    return y(u), a
                                }
                            }();) !1 !== e && (t.push(e), k(t));
                        return t
                    }()
            }
        },
        8738: function(e) {
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        9008: function(e, n, t) {
            e.exports = t(3121)
        },
        2703: function(e, n, t) {
            "use strict";
            var r = t(414);

            function l() {}

            function i() {}
            i.resetWarningCache = l, e.exports = function() {
                function e(e, n, t, l, i, o) {
                    if (o !== r) {
                        var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function n() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: n,
                    element: e,
                    elementType: e,
                    instanceOf: n,
                    node: e,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: i,
                    resetWarningCache: l
                };
                return t.PropTypes = t, t
            }
        },
        5697: function(e, n, t) {
            e.exports = t(2703)()
        },
        414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        1471: function(e, n) {
            "use strict";
            /**
             * @license React
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var t, r = Symbol.for("react.element"),
                l = Symbol.for("react.portal"),
                i = Symbol.for("react.fragment"),
                o = Symbol.for("react.strict_mode"),
                u = Symbol.for("react.profiler"),
                a = Symbol.for("react.provider"),
                s = Symbol.for("react.context"),
                c = Symbol.for("react.server_context"),
                f = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                d = Symbol.for("react.suspense_list"),
                h = Symbol.for("react.memo"),
                m = Symbol.for("react.lazy"),
                g = Symbol.for("react.offscreen");

            function y(e) {
                if ("object" == typeof e && null !== e) {
                    var n = e.$$typeof;
                    switch (n) {
                        case r:
                            switch (e = e.type) {
                                case i:
                                case u:
                                case o:
                                case p:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case s:
                                        case f:
                                        case m:
                                        case h:
                                        case a:
                                            return e;
                                        default:
                                            return n
                                    }
                            }
                        case l:
                            return n
                    }
                }
            }
            t = Symbol.for("react.module.reference"), n.ContextConsumer = s, n.ContextProvider = a, n.Element = r, n.ForwardRef = f, n.Fragment = i, n.Lazy = m, n.Memo = h, n.Portal = l, n.Profiler = u, n.StrictMode = o, n.Suspense = p, n.SuspenseList = d, n.isAsyncMode = function() {
                return !1
            }, n.isConcurrentMode = function() {
                return !1
            }, n.isContextConsumer = function(e) {
                return y(e) === s
            }, n.isContextProvider = function(e) {
                return y(e) === a
            }, n.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, n.isForwardRef = function(e) {
                return y(e) === f
            }, n.isFragment = function(e) {
                return y(e) === i
            }, n.isLazy = function(e) {
                return y(e) === m
            }, n.isMemo = function(e) {
                return y(e) === h
            }, n.isPortal = function(e) {
                return y(e) === l
            }, n.isProfiler = function(e) {
                return y(e) === u
            }, n.isStrictMode = function(e) {
                return y(e) === o
            }, n.isSuspense = function(e) {
                return y(e) === p
            }, n.isSuspenseList = function(e) {
                return y(e) === d
            }, n.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === i || e === u || e === o || e === p || e === d || e === g || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === a || e.$$typeof === s || e.$$typeof === f || e.$$typeof === t || void 0 !== e.getModuleId)
            }, n.typeOf = y
        },
        2143: function(e, n, t) {
            "use strict";
            e.exports = t(1471)
        },
        7848: function(e, n, t) {
            var r = t(8139);

            function l(e, n) {
                var t, l, i, o = null;
                if (!e || "string" != typeof e) return o;
                for (var u = r(e), a = "function" == typeof n, s = 0, c = u.length; s < c; s++) l = (t = u[s]).property, i = t.value, a ? n(l, i, t) : i && (o || (o = {}), o[l] = i);
                return o
            }
            e.exports = l, e.exports.default = l
        },
        4740: function(e, n, t) {
            "use strict";
            t.d(n, {
                D: function() {
                    return ti
                }
            });
            var r = {};
            t.r(r), t.d(r, {
                attentionMarkers: function() {
                    return eJ
                },
                contentInitial: function() {
                    return eW
                },
                disable: function() {
                    return eG
                },
                document: function() {
                    return e$
                },
                flow: function() {
                    return eY
                },
                flowInitial: function() {
                    return eQ
                },
                insideSpan: function() {
                    return eZ
                },
                string: function() {
                    return eK
                },
                text: function() {
                    return eX
                }
            });
            var l = {};
            t.r(l), t.d(l, {
                boolean: function() {
                    return nD
                },
                booleanish: function() {
                    return nO
                },
                commaOrSpaceSeparated: function() {
                    return nR
                },
                commaSeparated: function() {
                    return nM
                },
                number: function() {
                    return nL
                },
                overloadedBoolean: function() {
                    return nI
                },
                spaceSeparated: function() {
                    return nz
                }
            });
            var i = t(7294),
                o = t(8738);

            function u(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? s(e.position) : "start" in e || "end" in e ? s(e) : "line" in e || "column" in e ? a(e) : "" : ""
            }

            function a(e) {
                return c(e && e.line) + ":" + c(e && e.column)
            }

            function s(e) {
                return a(e && e.start) + "-" + a(e && e.end)
            }

            function c(e) {
                return e && "number" == typeof e ? e : 1
            }
            class f extends Error {
                constructor(e, n, t) {
                    let r = [null, null],
                        l = {
                            start: {
                                line: null,
                                column: null
                            },
                            end: {
                                line: null,
                                column: null
                            }
                        };
                    if (super(), "string" == typeof n && (t = n, n = void 0), "string" == typeof t) {
                        let e = t.indexOf(":"); - 1 === e ? r[1] = t : (r[0] = t.slice(0, e), r[1] = t.slice(e + 1))
                    }
                    n && ("type" in n || "position" in n ? n.position && (l = n.position) : "start" in n || "end" in n ? l = n : ("line" in n || "column" in n) && (l.start = n)), this.name = u(n) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = l.start.line, this.column = l.start.column, this.position = l, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
                }
            }
            f.prototype.file = "", f.prototype.name = "", f.prototype.reason = "", f.prototype.message = "", f.prototype.stack = "", f.prototype.fatal = null, f.prototype.column = null, f.prototype.line = null, f.prototype.source = null, f.prototype.ruleId = null, f.prototype.position = null;
            let p = {
                basename: function(e, n) {
                    let t;
                    if (void 0 !== n && "string" != typeof n) throw TypeError('"ext" argument must be a string');
                    d(e);
                    let r = 0,
                        l = -1,
                        i = e.length;
                    if (void 0 === n || 0 === n.length || n.length > e.length) {
                        for (; i--;)
                            if (47 === e.charCodeAt(i)) {
                                if (t) {
                                    r = i + 1;
                                    break
                                }
                            } else l < 0 && (t = !0, l = i + 1);
                        return l < 0 ? "" : e.slice(r, l)
                    }
                    if (n === e) return "";
                    let o = -1,
                        u = n.length - 1;
                    for (; i--;)
                        if (47 === e.charCodeAt(i)) {
                            if (t) {
                                r = i + 1;
                                break
                            }
                        } else o < 0 && (t = !0, o = i + 1), u > -1 && (e.charCodeAt(i) === n.charCodeAt(u--) ? u < 0 && (l = i) : (u = -1, l = o));
                    return r === l ? l = o : l < 0 && (l = e.length), e.slice(r, l)
                },
                dirname: function(e) {
                    let n;
                    if (d(e), 0 === e.length) return ".";
                    let t = -1,
                        r = e.length;
                    for (; --r;)
                        if (47 === e.charCodeAt(r)) {
                            if (n) {
                                t = r;
                                break
                            }
                        } else n || (n = !0);
                    return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
                },
                extname: function(e) {
                    let n;
                    d(e);
                    let t = e.length,
                        r = -1,
                        l = 0,
                        i = -1,
                        o = 0;
                    for (; t--;) {
                        let u = e.charCodeAt(t);
                        if (47 === u) {
                            if (n) {
                                l = t + 1;
                                break
                            }
                            continue
                        }
                        r < 0 && (n = !0, r = t + 1), 46 === u ? i < 0 ? i = t : 1 !== o && (o = 1) : i > -1 && (o = -1)
                    }
                    return i < 0 || r < 0 || 0 === o || 1 === o && i === r - 1 && i === l + 1 ? "" : e.slice(i, r)
                },
                join: function(...e) {
                    let n, t = -1;
                    for (; ++t < e.length;) d(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
                    return void 0 === n ? "." : function(e) {
                        d(e);
                        let n = 47 === e.charCodeAt(0),
                            t = function(e, n) {
                                let t, r, l = "",
                                    i = 0,
                                    o = -1,
                                    u = 0,
                                    a = -1;
                                for (; ++a <= e.length;) {
                                    if (a < e.length) t = e.charCodeAt(a);
                                    else if (47 === t) break;
                                    else t = 47;
                                    if (47 === t) {
                                        if (o === a - 1 || 1 === u);
                                        else if (o !== a - 1 && 2 === u) {
                                            if (l.length < 2 || 2 !== i || 46 !== l.charCodeAt(l.length - 1) || 46 !== l.charCodeAt(l.length - 2)) {
                                                if (l.length > 2) {
                                                    if ((r = l.lastIndexOf("/")) !== l.length - 1) {
                                                        r < 0 ? (l = "", i = 0) : i = (l = l.slice(0, r)).length - 1 - l.lastIndexOf("/"), o = a, u = 0;
                                                        continue
                                                    }
                                                } else if (l.length > 0) {
                                                    l = "", i = 0, o = a, u = 0;
                                                    continue
                                                }
                                            }
                                            n && (l = l.length > 0 ? l + "/.." : "..", i = 2)
                                        } else l.length > 0 ? l += "/" + e.slice(o + 1, a) : l = e.slice(o + 1, a), i = a - o - 1;
                                        o = a, u = 0
                                    } else 46 === t && u > -1 ? u++ : u = -1
                                }
                                return l
                            }(e, !n);
                        return 0 !== t.length || n || (t = "."), t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/"), n ? "/" + t : t
                    }(n)
                },
                sep: "/"
            };

            function d(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            let h = {
                cwd: function() {
                    return "/"
                }
            };

            function m(e) {
                return null !== e && "object" == typeof e && e.href && e.origin
            }
            let g = ["history", "path", "basename", "stem", "extname", "dirname"];
            class y {
                constructor(e) {
                    let n, t;
                    n = e ? "string" == typeof e || o(e) ? {
                        value: e
                    } : m(e) ? {
                        path: e
                    } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = h.cwd(), this.value, this.stored, this.result, this.map;
                    let r = -1;
                    for (; ++r < g.length;) {
                        let e = g[r];
                        e in n && void 0 !== n[e] && null !== n[e] && (this[e] = "history" === e ? [...n[e]] : n[e])
                    }
                    for (t in n) g.includes(t) || (this[t] = n[t])
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    m(e) && (e = function(e) {
                        if ("string" == typeof e) e = new URL(e);
                        else if (!m(e)) {
                            let n = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                            throw n.code = "ERR_INVALID_ARG_TYPE", n
                        }
                        if ("file:" !== e.protocol) {
                            let e = TypeError("The URL must be of scheme file");
                            throw e.code = "ERR_INVALID_URL_SCHEME", e
                        }
                        return function(e) {
                            if ("" !== e.hostname) {
                                let e = TypeError('File URL host must be "localhost" or empty on darwin');
                                throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                            }
                            let n = e.pathname,
                                t = -1;
                            for (; ++t < n.length;)
                                if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
                                    let e = n.charCodeAt(t + 2);
                                    if (70 === e || 102 === e) {
                                        let e = TypeError("File URL path must not include encoded / characters");
                                        throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                                    }
                                }
                            return decodeURIComponent(n)
                        }(e)
                    }(e)), x(e, "path"), this.path !== e && this.history.push(e)
                }
                get dirname() {
                    return "string" == typeof this.path ? p.dirname(this.path) : void 0
                }
                set dirname(e) {
                    v(this.basename, "dirname"), this.path = p.join(e || "", this.basename)
                }
                get basename() {
                    return "string" == typeof this.path ? p.basename(this.path) : void 0
                }
                set basename(e) {
                    x(e, "basename"), k(e, "basename"), this.path = p.join(this.dirname || "", e)
                }
                get extname() {
                    return "string" == typeof this.path ? p.extname(this.path) : void 0
                }
                set extname(e) {
                    if (k(e, "extname"), v(this.dirname, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                    }
                    this.path = p.join(this.dirname, this.stem + (e || ""))
                }
                get stem() {
                    return "string" == typeof this.path ? p.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    x(e, "stem"), k(e, "stem"), this.path = p.join(this.dirname || "", e + (this.extname || ""))
                }
                toString(e) {
                    return (this.value || "").toString(e || void 0)
                }
                message(e, n, t) {
                    let r = new f(e, n, t);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                info(e, n, t) {
                    let r = this.message(e, n, t);
                    return r.fatal = null, r
                }
                fail(e, n, t) {
                    let r = this.message(e, n, t);
                    throw r.fatal = !0, r
                }
            }

            function k(e, n) {
                if (e && e.includes(p.sep)) throw Error("`" + n + "` cannot be a path: did not expect `" + p.sep + "`")
            }

            function x(e, n) {
                if (!e) throw Error("`" + n + "` cannot be empty")
            }

            function v(e, n) {
                if (!e) throw Error("Setting `" + n + "` requires `path` to be set too")
            }

            function b(e) {
                if (e) throw e
            }
            var S = t(4470);

            function w(e) {
                if ("object" != typeof e || null === e) return !1;
                let n = Object.getPrototypeOf(e);
                return (null === n || n === Object.prototype || null === Object.getPrototypeOf(n)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }
            let C = (function e() {
                    let n;
                    let t = function() {
                            let e = [],
                                n = {
                                    run: function(...n) {
                                        let t = -1,
                                            r = n.pop();
                                        if ("function" != typeof r) throw TypeError("Expected function as last argument, not " + r);
                                        ! function l(i, ...o) {
                                            let u = e[++t],
                                                a = -1;
                                            if (i) {
                                                r(i);
                                                return
                                            }
                                            for (; ++a < n.length;)(null === o[a] || void 0 === o[a]) && (o[a] = n[a]);
                                            n = o, u ? (function(e, n) {
                                                let t;
                                                return function(...n) {
                                                    let i;
                                                    let o = e.length > n.length;
                                                    o && n.push(r);
                                                    try {
                                                        i = e.apply(this, n)
                                                    } catch (e) {
                                                        if (o && t) throw e;
                                                        return r(e)
                                                    }
                                                    o || (i instanceof Promise ? i.then(l, r) : i instanceof Error ? r(i) : l(i))
                                                };

                                                function r(e, ...l) {
                                                    t || (t = !0, n(e, ...l))
                                                }

                                                function l(e) {
                                                    r(null, e)
                                                }
                                            })(u, l)(...o) : r(null, ...o)
                                        }(null, ...n)
                                    },
                                    use: function(t) {
                                        if ("function" != typeof t) throw TypeError("Expected `middelware` to be a function, not " + t);
                                        return e.push(t), n
                                    }
                                };
                            return n
                        }(),
                        r = [],
                        l = {},
                        i = -1;
                    return u.data = function(e, t) {
                        return "string" == typeof e ? 2 == arguments.length ? (P("data", n), l[e] = t, u) : E.call(l, e) && l[e] || null : e ? (P("data", n), l = e, u) : l
                    }, u.Parser = void 0, u.Compiler = void 0, u.freeze = function() {
                        if (n) return u;
                        for (; ++i < r.length;) {
                            let [e, ...n] = r[i];
                            if (!1 === n[0]) continue;
                            !0 === n[0] && (n[0] = void 0);
                            let l = e.call(u, ...n);
                            "function" == typeof l && t.use(l)
                        }
                        return n = !0, i = Number.POSITIVE_INFINITY, u
                    }, u.attachers = r, u.use = function(e, ...t) {
                        let i;
                        if (P("use", n), null == e);
                        else if ("function" == typeof e) s(e, ...t);
                        else if ("object" == typeof e) Array.isArray(e) ? a(e) : o(e);
                        else throw TypeError("Expected usable value, not `" + e + "`");
                        return i && (l.settings = Object.assign(l.settings || {}, i)), u;

                        function o(e) {
                            a(e.plugins), e.settings && (i = Object.assign(i || {}, e.settings))
                        }

                        function a(e) {
                            let n = -1;
                            if (null == e);
                            else if (Array.isArray(e))
                                for (; ++n < e.length;) {
                                    let t = e[n];
                                    ! function(e) {
                                        if ("function" == typeof e) s(e);
                                        else if ("object" == typeof e) {
                                            if (Array.isArray(e)) {
                                                let [n, ...t] = e;
                                                s(n, ...t)
                                            } else o(e)
                                        } else throw TypeError("Expected usable value, not `" + e + "`")
                                    }(t)
                                } else throw TypeError("Expected a list of plugins, not `" + e + "`")
                        }

                        function s(e, n) {
                            let t, l = -1;
                            for (; ++l < r.length;)
                                if (r[l][0] === e) {
                                    t = r[l];
                                    break
                                }
                            t ? (w(t[1]) && w(n) && (n = S(!0, t[1], n)), t[1] = n) : r.push([...arguments])
                        }
                    }, u.parse = function(e) {
                        u.freeze();
                        let n = I(e),
                            t = u.Parser;
                        return (F("parse", t), A(t, "parse")) ? new t(String(n), n).parse() : t(String(n), n)
                    }, u.stringify = function(e, n) {
                        u.freeze();
                        let t = I(n),
                            r = u.Compiler;
                        return (T("stringify", r), D(e), A(r, "compile")) ? new r(e, t).compile() : r(e, t)
                    }, u.run = function(e, n, r) {
                        if (D(e), u.freeze(), r || "function" != typeof n || (r = n, n = void 0), !r) return new Promise(l);

                        function l(l, i) {
                            t.run(e, I(n), function(n, t, o) {
                                t = t || e, n ? i(n) : l ? l(t) : r(null, t, o)
                            })
                        }
                        l(null, r)
                    }, u.runSync = function(e, n) {
                        let t, r;
                        return u.run(e, n, function(e, n) {
                            b(e), t = n, r = !0
                        }), O("runSync", "run", r), t
                    }, u.process = function(e, n) {
                        if (u.freeze(), F("process", u.Parser), T("process", u.Compiler), !n) return new Promise(t);

                        function t(t, r) {
                            let l = I(e);

                            function i(e, l) {
                                e || !l ? r(e) : t ? t(l) : n(null, l)
                            }
                            u.run(u.parse(l), l, (e, n, t) => {
                                if (!e && n && t) {
                                    let r = u.stringify(n, t);
                                    null == r || ("string" == typeof r || o(r) ? t.value = r : t.result = r), i(e, t)
                                } else i(e)
                            })
                        }
                        t(null, n)
                    }, u.processSync = function(e) {
                        let n;
                        u.freeze(), F("processSync", u.Parser), T("processSync", u.Compiler);
                        let t = I(e);
                        return u.process(t, function(e) {
                            n = !0, b(e)
                        }), O("processSync", "process", n), t
                    }, u;

                    function u() {
                        let n = e(),
                            t = -1;
                        for (; ++t < r.length;) n.use(...r[t]);
                        return n.data(S(!0, {}, l)), n
                    }
                })().freeze(),
                E = {}.hasOwnProperty;

            function A(e, n) {
                return "function" == typeof e && e.prototype && (function(e) {
                    let n;
                    for (n in e)
                        if (E.call(e, n)) return !0;
                    return !1
                }(e.prototype) || n in e.prototype)
            }

            function F(e, n) {
                if ("function" != typeof n) throw TypeError("Cannot `" + e + "` without `Parser`")
            }

            function T(e, n) {
                if ("function" != typeof n) throw TypeError("Cannot `" + e + "` without `Compiler`")
            }

            function P(e, n) {
                if (n) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function D(e) {
                if (!w(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
            }

            function O(e, n, t) {
                if (!t) throw Error("`" + e + "` finished async. Use `" + n + "` instead")
            }

            function I(e) {
                return Boolean(e && "object" == typeof e && "message" in e && "messages" in e) ? e : new y(e)
            }

            function L(e, n) {
                return Boolean(e && "object" == typeof e) && ("value" in e && e.value || n && "alt" in e && e.alt || "children" in e && z(e.children, n)) || Array.isArray(e) && z(e, n) || ""
            }

            function z(e, n) {
                let t = [],
                    r = -1;
                for (; ++r < e.length;) t[r] = L(e[r], n);
                return t.join("")
            }

            function M(e, n, t, r) {
                let l;
                let i = e.length,
                    o = 0;
                if (n = n < 0 ? -n > i ? 0 : i + n : n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)(l = Array.from(r)).unshift(n, t), [].splice.apply(e, l);
                else
                    for (t && [].splice.apply(e, [n, t]); o < r.length;)(l = r.slice(o, o + 1e4)).unshift(n, 0), [].splice.apply(e, l), o += 1e4, n += 1e4
            }

            function R(e, n) {
                return e.length > 0 ? (M(e, e.length, 0, n), e) : n
            }
            let B = {}.hasOwnProperty,
                N = X(/[A-Za-z]/),
                _ = X(/\d/),
                j = X(/[\dA-Fa-f]/),
                H = X(/[\dA-Za-z]/),
                U = X(/[!-/:-@[-`{-~]/),
                V = X(/[#-'*+\--9=?A-Z^-~]/);

            function q(e) {
                return null !== e && (e < 32 || 127 === e)
            }

            function $(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function W(e) {
                return null !== e && e < -2
            }

            function Q(e) {
                return -2 === e || -1 === e || 32 === e
            }
            let Y = X(/\s/),
                K = X(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);

            function X(e) {
                return function(n) {
                    return null !== n && e.test(String.fromCharCode(n))
                }
            }

            function Z(e, n, t, r) {
                let l = r ? r - 1 : Number.POSITIVE_INFINITY,
                    i = 0;
                return function(r) {
                    return Q(r) ? (e.enter(t), function r(o) {
                        return Q(o) && i++ < l ? (e.consume(o), r) : (e.exit(t), n(o))
                    }(r)) : n(r)
                }
            }
            let J = {
                    tokenize: function(e) {
                        let n;
                        let t = e.attempt(this.parser.constructs.contentInitial, function(n) {
                            if (null === n) {
                                e.consume(n);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Z(e, t, "linePrefix")
                        }, function(t) {
                            return e.enter("paragraph"),
                                function t(r) {
                                    let l = e.enter("chunkText", {
                                        contentType: "text",
                                        previous: n
                                    });
                                    return n && (n.next = l), n = l,
                                        function n(r) {
                                            if (null === r) {
                                                e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                                return
                                            }
                                            return W(r) ? (e.consume(r), e.exit("chunkText"), t) : (e.consume(r), n)
                                        }(r)
                                }(t)
                        });
                        return t
                    }
                },
                G = {
                    tokenize: function(e) {
                        let n, t, r;
                        let l = this,
                            i = [],
                            o = 0;
                        return u;

                        function u(n) {
                            if (o < i.length) {
                                let t = i[o];
                                return l.containerState = t[1], e.attempt(t[0].continuation, a, s)(n)
                            }
                            return s(n)
                        }

                        function a(e) {
                            if (o++, l.containerState._closeFlow) {
                                let t;
                                l.containerState._closeFlow = void 0, n && y();
                                let r = l.events.length,
                                    i = r;
                                for (; i--;)
                                    if ("exit" === l.events[i][0] && "chunkFlow" === l.events[i][1].type) {
                                        t = l.events[i][1].end;
                                        break
                                    }
                                g(o);
                                let u = r;
                                for (; u < l.events.length;) l.events[u][1].end = Object.assign({}, t), u++;
                                return M(l.events, i + 1, 0, l.events.slice(r)), l.events.length = u, s(e)
                            }
                            return u(e)
                        }

                        function s(t) {
                            if (o === i.length) {
                                if (!n) return p(t);
                                if (n.currentConstruct && n.currentConstruct.concrete) return h(t);
                                l.interrupt = Boolean(n.currentConstruct && !n._gfmTableDynamicInterruptHack)
                            }
                            return l.containerState = {}, e.check(ee, c, f)(t)
                        }

                        function c(e) {
                            return n && y(), g(o), p(e)
                        }

                        function f(e) {
                            return l.parser.lazy[l.now().line] = o !== i.length, r = l.now().offset, h(e)
                        }

                        function p(n) {
                            return l.containerState = {}, e.attempt(ee, d, h)(n)
                        }

                        function d(e) {
                            return o++, i.push([l.currentConstruct, l.containerState]), p(e)
                        }

                        function h(r) {
                            if (null === r) {
                                n && y(), g(0), e.consume(r);
                                return
                            }
                            return n = n || l.parser.flow(l.now()), e.enter("chunkFlow", {
                                    contentType: "flow",
                                    previous: t,
                                    _tokenizer: n
                                }),
                                function n(t) {
                                    if (null === t) {
                                        m(e.exit("chunkFlow"), !0), g(0), e.consume(t);
                                        return
                                    }
                                    return W(t) ? (e.consume(t), m(e.exit("chunkFlow")), o = 0, l.interrupt = void 0, u) : (e.consume(t), n)
                                }(r)
                        }

                        function m(e, i) {
                            let u = l.sliceStream(e);
                            if (i && u.push(null), e.previous = t, t && (t.next = e), t = e, n.defineSkip(e.start), n.write(u), l.parser.lazy[e.start.line]) {
                                let e, t, i = n.events.length;
                                for (; i--;)
                                    if (n.events[i][1].start.offset < r && (!n.events[i][1].end || n.events[i][1].end.offset > r)) return;
                                let u = l.events.length,
                                    a = u;
                                for (; a--;)
                                    if ("exit" === l.events[a][0] && "chunkFlow" === l.events[a][1].type) {
                                        if (e) {
                                            t = l.events[a][1].end;
                                            break
                                        }
                                        e = !0
                                    }
                                for (g(o), i = u; i < l.events.length;) l.events[i][1].end = Object.assign({}, t), i++;
                                M(l.events, a + 1, 0, l.events.slice(u)), l.events.length = i
                            }
                        }

                        function g(n) {
                            let t = i.length;
                            for (; t-- > n;) {
                                let n = i[t];
                                l.containerState = n[1], n[0].exit.call(l, e)
                            }
                            i.length = n
                        }

                        function y() {
                            n.write([null]), t = void 0, n = void 0, l.containerState._closeFlow = void 0
                        }
                    }
                },
                ee = {
                    tokenize: function(e, n, t) {
                        return Z(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                },
                en = {
                    tokenize: function(e, n, t) {
                        return Z(e, function(e) {
                            return null === e || W(e) ? n(e) : t(e)
                        }, "linePrefix")
                    },
                    partial: !0
                };

            function et(e) {
                let n, t, r, l, i, o, u;
                let a = {},
                    s = -1;
                for (; ++s < e.length;) {
                    for (;
                        (s in a);) s = a[s];
                    if (n = e[s], s && "chunkFlow" === n[1].type && "listItemPrefix" === e[s - 1][1].type && ((r = 0) < (o = n[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type))
                        for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
                    if ("enter" === n[0]) n[1].contentType && (Object.assign(a, function(e, n) {
                        let t, r;
                        let l = e[n][1],
                            i = e[n][2],
                            o = n - 1,
                            u = [],
                            a = l._tokenizer || i.parser[l.contentType](l.start),
                            s = a.events,
                            c = [],
                            f = {},
                            p = -1,
                            d = l,
                            h = 0,
                            m = 0,
                            g = [m];
                        for (; d;) {
                            for (; e[++o][1] !== d;);
                            u.push(o), !d._tokenizer && (t = i.sliceStream(d), d.next || t.push(null), r && a.defineSkip(d.start), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(t), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), r = d, d = d.next
                        }
                        for (d = l; ++p < s.length;) "exit" === s[p][0] && "enter" === s[p - 1][0] && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (m = p + 1, g.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
                        for (a.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : g.pop(), p = g.length; p--;) {
                            let n = s.slice(g[p], g[p + 1]),
                                t = u.pop();
                            c.unshift([t, t + n.length - 1]), M(e, t, 2, n)
                        }
                        for (p = -1; ++p < c.length;) f[h + c[p][0]] = h + c[p][1], h += c[p][1] - c[p][0] - 1;
                        return f
                    }(e, s)), s = a[s], u = !0);
                    else if (n[1]._container) {
                        for (r = s, t = void 0; r--;)
                            if ("lineEnding" === (l = e[r])[1].type || "lineEndingBlank" === l[1].type) "enter" === l[0] && (t && (e[t][1].type = "lineEndingBlank"), l[1].type = "lineEnding", t = r);
                            else break;
                        t && (n[1].end = Object.assign({}, e[t][1].start), (i = e.slice(t, s)).unshift(n), M(e, t, s - t + 1, i))
                    }
                }
                return !u
            }
            let er = {
                    tokenize: function(e, n) {
                        let t;
                        return function(n) {
                            return e.enter("content"), t = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(n)
                        };

                        function r(n) {
                            return null === n ? l(n) : W(n) ? e.check(el, i, l)(n) : (e.consume(n), r)
                        }

                        function l(t) {
                            return e.exit("chunkContent"), e.exit("content"), n(t)
                        }

                        function i(n) {
                            return e.consume(n), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: t
                            }), t = t.next, r
                        }
                    },
                    resolve: function(e) {
                        return et(e), e
                    }
                },
                el = {
                    tokenize: function(e, n, t) {
                        let r = this;
                        return function(n) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Z(e, l, "linePrefix")
                        };

                        function l(l) {
                            if (null === l || W(l)) return t(l);
                            let i = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l)
                        }
                    },
                    partial: !0
                },
                ei = {
                    tokenize: function(e) {
                        let n = this,
                            t = e.attempt(en, function(r) {
                                if (null === r) {
                                    e.consume(r);
                                    return
                                }
                                return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t
                            }, e.attempt(this.parser.constructs.flowInitial, r, Z(e, e.attempt(this.parser.constructs.flow, r, e.attempt(er, r)), "linePrefix")));
                        return t;

                        function r(r) {
                            if (null === r) {
                                e.consume(r);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n.currentConstruct = void 0, t
                        }
                    }
                },
                eo = {
                    resolveAll: ec()
                },
                eu = es("string"),
                ea = es("text");

            function es(e) {
                return {
                    tokenize: function(n) {
                        let t = this,
                            r = this.parser.constructs[e],
                            l = n.attempt(r, i, o);
                        return i;

                        function i(e) {
                            return a(e) ? l(e) : o(e)
                        }

                        function o(e) {
                            if (null === e) {
                                n.consume(e);
                                return
                            }
                            return n.enter("data"), n.consume(e), u
                        }

                        function u(e) {
                            return a(e) ? (n.exit("data"), l(e)) : (n.consume(e), u)
                        }

                        function a(e) {
                            if (null === e) return !0;
                            let n = r[e],
                                l = -1;
                            if (n)
                                for (; ++l < n.length;) {
                                    let e = n[l];
                                    if (!e.previous || e.previous.call(t, t.previous)) return !0
                                }
                            return !1
                        }
                    },
                    resolveAll: ec("text" === e ? ef : void 0)
                }
            }

            function ec(e) {
                return function(n, t) {
                    let r, l = -1;
                    for (; ++l <= n.length;) void 0 === r ? n[l] && "data" === n[l][1].type && (r = l, l++) : n[l] && "data" === n[l][1].type || (l !== r + 2 && (n[r][1].end = n[l - 1][1].end, n.splice(r + 2, l - r - 2), l = r + 2), r = void 0);
                    return e ? e(n, t) : n
                }
            }

            function ef(e, n) {
                let t = 0;
                for (; ++t <= e.length;)
                    if ((t === e.length || "lineEnding" === e[t][1].type) && "data" === e[t - 1][1].type) {
                        let r;
                        let l = e[t - 1][1],
                            i = n.sliceStream(l),
                            o = i.length,
                            u = -1,
                            a = 0;
                        for (; o--;) {
                            let e = i[o];
                            if ("string" == typeof e) {
                                for (u = e.length; 32 === e.charCodeAt(u - 1);) a++, u--;
                                if (u) break;
                                u = -1
                            } else if (-2 === e) r = !0, a++;
                            else if (-1 === e);
                            else {
                                o++;
                                break
                            }
                        }
                        if (a) {
                            let i = {
                                type: t === e.length || r || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    line: l.end.line,
                                    column: l.end.column - a,
                                    offset: l.end.offset - a,
                                    _index: l.start._index + o,
                                    _bufferIndex: o ? u : l.start._bufferIndex + u
                                },
                                end: Object.assign({}, l.end)
                            };
                            l.end = Object.assign({}, i.start), l.start.offset === l.end.offset ? Object.assign(l, i) : (e.splice(t, 0, ["enter", i, n], ["exit", i, n]), t += 2)
                        }
                        t++
                    }
                return e
            }

            function ep(e, n, t) {
                let r = [],
                    l = -1;
                for (; ++l < e.length;) {
                    let i = e[l].resolveAll;
                    i && !r.includes(i) && (n = i(n, t), r.push(i))
                }
                return n
            }
            let ed = {
                    name: "thematicBreak",
                    tokenize: function(e, n, t) {
                        let r = 0;
                        return function(l) {
                            return e.enter("thematicBreak"),
                                function i(o) {
                                    return o === l ? (e.enter("thematicBreakSequence"), function n(t) {
                                        return t === l ? (e.consume(t), r++, n) : (e.exit("thematicBreakSequence"), i(t))
                                    }(o)) : Q(o) ? Z(e, i, "whitespace")(o) : r < 3 || null !== o && !W(o) ? t(o) : (e.exit("thematicBreak"), n(o))
                                }(l)
                        }
                    }
                },
                eh = {
                    name: "list",
                    tokenize: function(e, n, t) {
                        let r = this,
                            l = r.events[r.events.length - 1],
                            i = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0,
                            o = 0;
                        return function(n) {
                            let l = r.containerState.type || (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === l ? !r.containerState.marker || n === r.containerState.marker : _(n)) {
                                if (r.containerState.type || (r.containerState.type = l, e.enter(l, {
                                        _container: !0
                                    })), "listUnordered" === l) return e.enter("listItemPrefix"), 42 === n || 45 === n ? e.check(ed, t, u)(n) : u(n);
                                if (!r.interrupt || 49 === n) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                    function n(l) {
                                        return _(l) && ++o < 10 ? (e.consume(l), n) : (!r.interrupt || o < 2) && (r.containerState.marker ? l === r.containerState.marker : 41 === l || 46 === l) ? (e.exit("listItemValue"), u(l)) : t(l)
                                    }(n)
                            }
                            return t(n)
                        };

                        function u(n) {
                            return e.enter("listItemMarker"), e.consume(n), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || n, e.check(en, r.interrupt ? t : a, e.attempt(em, c, s))
                        }

                        function a(e) {
                            return r.containerState.initialBlankLine = !0, i++, c(e)
                        }

                        function s(n) {
                            return Q(n) ? (e.enter("listItemPrefixWhitespace"), e.consume(n), e.exit("listItemPrefixWhitespace"), c) : t(n)
                        }

                        function c(t) {
                            return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(t)
                        }
                    },
                    continuation: {
                        tokenize: function(e, n, t) {
                            let r = this;
                            return r.containerState._closeFlow = void 0, e.check(en, function(t) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Z(e, n, "listItemIndent", r.containerState.size + 1)(t)
                            }, function(t) {
                                return r.containerState.furtherBlankLines || !Q(t) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(t)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eg, n, l)(t))
                            });

                            function l(l) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, Z(e, e.attempt(eh, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                em = {
                    tokenize: function(e, n, t) {
                        let r = this;
                        return Z(e, function(e) {
                            let l = r.events[r.events.length - 1];
                            return !Q(e) && l && "listItemPrefixWhitespace" === l[1].type ? n(e) : t(e)
                        }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    },
                    partial: !0
                },
                eg = {
                    tokenize: function(e, n, t) {
                        let r = this;
                        return Z(e, function(e) {
                            let l = r.events[r.events.length - 1];
                            return l && "listItemIndent" === l[1].type && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? n(e) : t(e)
                        }, "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                },
                ey = {
                    name: "blockQuote",
                    tokenize: function(e, n, t) {
                        let r = this;
                        return function(n) {
                            if (62 === n) {
                                let t = r.containerState;
                                return t.open || (e.enter("blockQuote", {
                                    _container: !0
                                }), t.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(n), e.exit("blockQuoteMarker"), l
                            }
                            return t(n)
                        };

                        function l(t) {
                            return Q(t) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(t), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(t))
                        }
                    },
                    continuation: {
                        tokenize: function(e, n, t) {
                            return Z(e, e.attempt(ey, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };

            function ek(e, n, t, r, l, i, o, u, a) {
                let s = a || Number.POSITIVE_INFINITY,
                    c = 0;
                return function(n) {
                    return 60 === n ? (e.enter(r), e.enter(l), e.enter(i), e.consume(n), e.exit(i), f) : null === n || 41 === n || q(n) ? t(n) : (e.enter(r), e.enter(o), e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), h(n))
                };

                function f(t) {
                    return 62 === t ? (e.enter(i), e.consume(t), e.exit(i), e.exit(l), e.exit(r), n) : (e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), p(t))
                }

                function p(n) {
                    return 62 === n ? (e.exit("chunkString"), e.exit(u), f(n)) : null === n || 60 === n || W(n) ? t(n) : (e.consume(n), 92 === n ? d : p)
                }

                function d(n) {
                    return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n)
                }

                function h(l) {
                    return 40 === l ? ++c > s ? t(l) : (e.consume(l), h) : 41 === l ? c-- ? (e.consume(l), h) : (e.exit("chunkString"), e.exit(u), e.exit(o), e.exit(r), n(l)) : null === l || $(l) ? c ? t(l) : (e.exit("chunkString"), e.exit(u), e.exit(o), e.exit(r), n(l)) : q(l) ? t(l) : (e.consume(l), 92 === l ? m : h)
                }

                function m(n) {
                    return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n)
                }
            }

            function ex(e, n, t, r, l, i) {
                let o;
                let u = this,
                    a = 0;
                return function(n) {
                    return e.enter(r), e.enter(l), e.consume(n), e.exit(l), e.enter(i), s
                };

                function s(f) {
                    return null === f || 91 === f || 93 === f && !o || 94 === f && !a && "_hiddenFootnoteSupport" in u.parser.constructs || a > 999 ? t(f) : 93 === f ? (e.exit(i), e.enter(l), e.consume(f), e.exit(l), e.exit(r), n) : W(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(f))
                }

                function c(n) {
                    return null === n || 91 === n || 93 === n || W(n) || a++ > 999 ? (e.exit("chunkString"), s(n)) : (e.consume(n), o = o || !Q(n), 92 === n ? f : c)
                }

                function f(n) {
                    return 91 === n || 92 === n || 93 === n ? (e.consume(n), a++, c) : c(n)
                }
            }

            function ev(e, n, t, r, l, i) {
                let o;
                return function(n) {
                    return e.enter(r), e.enter(l), e.consume(n), e.exit(l), o = 40 === n ? 41 : n, u
                };

                function u(t) {
                    return t === o ? (e.enter(l), e.consume(t), e.exit(l), e.exit(r), n) : (e.enter(i), a(t))
                }

                function a(n) {
                    return n === o ? (e.exit(i), u(o)) : null === n ? t(n) : W(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Z(e, a, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), s(n))
                }

                function s(n) {
                    return n === o || null === n || W(n) ? (e.exit("chunkString"), a(n)) : (e.consume(n), 92 === n ? c : s)
                }

                function c(n) {
                    return n === o || 92 === n ? (e.consume(n), s) : s(n)
                }
            }

            function eb(e, n) {
                let t;
                return function r(l) {
                    return W(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t = !0, r) : Q(l) ? Z(e, r, t ? "linePrefix" : "lineSuffix")(l) : n(l)
                }
            }

            function eS(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            let ew = {
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return $(n) ? eb(e, r)(n) : t(n)
                        };

                        function r(n) {
                            return 34 === n || 39 === n || 40 === n ? ev(e, Z(e, l, "whitespace"), t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n) : t(n)
                        }

                        function l(e) {
                            return null === e || W(e) ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                eC = {
                    name: "codeIndented",
                    tokenize: function(e, n, t) {
                        let r = this;
                        return function(n) {
                            return e.enter("codeIndented"), Z(e, l, "linePrefix", 5)(n)
                        };

                        function l(n) {
                            let l = r.events[r.events.length - 1];
                            return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? function n(t) {
                                return null === t ? i(t) : W(t) ? e.attempt(eE, n, i)(t) : (e.enter("codeFlowValue"), function t(r) {
                                    return null === r || W(r) ? (e.exit("codeFlowValue"), n(r)) : (e.consume(r), t)
                                }(t))
                            }(n) : t(n)
                        }

                        function i(t) {
                            return e.exit("codeIndented"), n(t)
                        }
                    }
                },
                eE = {
                    tokenize: function(e, n, t) {
                        let r = this;
                        return l;

                        function l(n) {
                            return r.parser.lazy[r.now().line] ? t(n) : W(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), l) : Z(e, i, "linePrefix", 5)(n)
                        }

                        function i(e) {
                            let i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(e) : W(e) ? l(e) : t(e)
                        }
                    },
                    partial: !0
                },
                eA = {
                    name: "setextUnderline",
                    tokenize: function(e, n, t) {
                        let r;
                        let l = this,
                            i = l.events.length;
                        for (; i--;)
                            if ("lineEnding" !== l.events[i][1].type && "linePrefix" !== l.events[i][1].type && "content" !== l.events[i][1].type) {
                                r = "paragraph" === l.events[i][1].type;
                                break
                            }
                        return function(n) {
                            return !l.parser.lazy[l.now().line] && (l.interrupt || r) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), function t(r) {
                                return r === n ? (e.consume(r), t) : (e.exit("setextHeadingLineSequence"), Z(e, o, "lineSuffix")(r))
                            }(n)) : t(n)
                        };

                        function o(r) {
                            return null === r || W(r) ? (e.exit("setextHeadingLine"), n(r)) : t(r)
                        }
                    },
                    resolveTo: function(e, n) {
                        let t, r, l, i = e.length;
                        for (; i--;)
                            if ("enter" === e[i][0]) {
                                if ("content" === e[i][1].type) {
                                    t = i;
                                    break
                                }
                                "paragraph" === e[i][1].type && (r = i)
                            } else "content" === e[i][1].type && e.splice(i, 1), l || "definition" !== e[i][1].type || (l = i);
                        let o = {
                            type: "setextHeading",
                            start: Object.assign({}, e[r][1].start),
                            end: Object.assign({}, e[e.length - 1][1].end)
                        };
                        return e[r][1].type = "setextHeadingText", l ? (e.splice(r, 0, ["enter", o, n]), e.splice(l + 1, 0, ["exit", e[t][1], n]), e[t][1].end = Object.assign({}, e[l][1].end)) : e[t][1] = o, e.push(["exit", o, n]), e
                    }
                },
                eF = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                eT = ["pre", "script", "style", "textarea"],
                eP = {
                    tokenize: function(e, n, t) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(en, n, t)
                        }
                    },
                    partial: !0
                },
                eD = {
                    name: "codeFenced",
                    tokenize: function(e, n, t) {
                        let r;
                        let l = this,
                            i = {
                                tokenize: function(e, n, t) {
                                    let l = 0;
                                    return Z(e, function(n) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                                            function n(o) {
                                                return o === r ? (e.consume(o), l++, n) : l < s ? t(o) : (e.exit("codeFencedFenceSequence"), Z(e, i, "whitespace")(o))
                                            }(n)
                                    }, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                                    function i(r) {
                                        return null === r || W(r) ? (e.exit("codeFencedFence"), n(r)) : t(r)
                                    }
                                },
                                partial: !0
                            },
                            o = {
                                tokenize: function(e, n, t) {
                                    let r = this;
                                    return function(n) {
                                        return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), l
                                    };

                                    function l(e) {
                                        return r.parser.lazy[r.now().line] ? t(e) : n(e)
                                    }
                                },
                                partial: !0
                            },
                            u = this.events[this.events.length - 1],
                            a = u && "linePrefix" === u[1].type ? u[2].sliceSerialize(u[1], !0).length : 0,
                            s = 0;
                        return function(n) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), r = n,
                                function n(l) {
                                    return l === r ? (e.consume(l), s++, n) : (e.exit("codeFencedFenceSequence"), s < 3 ? t(l) : Z(e, c, "whitespace")(l))
                                }(n)
                        };

                        function c(n) {
                            return null === n || W(n) ? p(n) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), function n(l) {
                                return null === l || $(l) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Z(e, f, "whitespace")(l)) : 96 === l && l === r ? t(l) : (e.consume(l), n)
                            }(n))
                        }

                        function f(n) {
                            return null === n || W(n) ? p(n) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function n(l) {
                                return null === l || W(l) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(l)) : 96 === l && l === r ? t(l) : (e.consume(l), n)
                            }(n))
                        }

                        function p(t) {
                            return e.exit("codeFencedFence"), l.interrupt ? n(t) : function n(t) {
                                return null === t ? d(t) : W(t) ? e.attempt(o, e.attempt(i, d, a ? Z(e, n, "linePrefix", a + 1) : n), d)(t) : (e.enter("codeFlowValue"), function t(r) {
                                    return null === r || W(r) ? (e.exit("codeFlowValue"), n(r)) : (e.consume(r), t)
                                }(t))
                            }(t)
                        }

                        function d(t) {
                            return e.exit("codeFenced"), n(t)
                        }
                    },
                    concrete: !0
                },
                eO = document.createElement("i");

            function eI(e) {
                let n = "&" + e + ";";
                eO.innerHTML = n;
                let t = eO.textContent;
                return (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && t !== n && t
            }
            let eL = {
                    name: "characterReference",
                    tokenize: function(e, n, t) {
                        let r, l;
                        let i = this,
                            o = 0;
                        return function(n) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(n), e.exit("characterReferenceMarker"), u
                        };

                        function u(n) {
                            return 35 === n ? (e.enter("characterReferenceMarkerNumeric"), e.consume(n), e.exit("characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), r = 31, l = H, s(n))
                        }

                        function a(n) {
                            return 88 === n || 120 === n ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(n), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, l = j, s) : (e.enter("characterReferenceValue"), r = 7, l = _, s(n))
                        }

                        function s(u) {
                            let a;
                            return 59 === u && o ? (a = e.exit("characterReferenceValue"), l !== H || eI(i.sliceSerialize(a))) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), n) : t(u) : l(u) && o++ < r ? (e.consume(u), s) : t(u)
                        }
                    }
                },
                ez = {
                    name: "characterEscape",
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(n), e.exit("escapeMarker"), r
                        };

                        function r(r) {
                            return U(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(r)
                        }
                    }
                },
                eM = {
                    name: "lineEnding",
                    tokenize: function(e, n) {
                        return function(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Z(e, n, "linePrefix")
                        }
                    }
                },
                eR = {
                    name: "labelEnd",
                    tokenize: function(e, n, t) {
                        let r, l;
                        let i = this,
                            o = i.events.length;
                        for (; o--;)
                            if (("labelImage" === i.events[o][1].type || "labelLink" === i.events[o][1].type) && !i.events[o][1]._balanced) {
                                r = i.events[o][1];
                                break
                            }
                        return function(n) {
                            return r ? r._inactive ? a(n) : (l = i.parser.defined.includes(eS(i.sliceSerialize({
                                start: r.end,
                                end: i.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelEnd"), u) : t(n)
                        };

                        function u(t) {
                            return 40 === t ? e.attempt(eB, n, l ? n : a)(t) : 91 === t ? e.attempt(eN, n, l ? e.attempt(e_, n, a) : a)(t) : l ? n(t) : a(t)
                        }

                        function a(e) {
                            return r._balanced = !0, t(e)
                        }
                    },
                    resolveTo: function(e, n) {
                        let t, r, l, i, o = e.length,
                            u = 0;
                        for (; o--;)
                            if (t = e[o][1], r) {
                                if ("link" === t.type || "labelLink" === t.type && t._inactive) break;
                                "enter" === e[o][0] && "labelLink" === t.type && (t._inactive = !0)
                            } else if (l) {
                            if ("enter" === e[o][0] && ("labelImage" === t.type || "labelLink" === t.type) && !t._balanced && (r = o, "labelLink" !== t.type)) {
                                u = 2;
                                break
                            }
                        } else "labelEnd" === t.type && (l = o);
                        let a = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end)
                            },
                            s = {
                                type: "label",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[l][1].end)
                            },
                            c = {
                                type: "labelText",
                                start: Object.assign({}, e[r + u + 2][1].end),
                                end: Object.assign({}, e[l - 2][1].start)
                            };
                        return i = R(i = [
                            ["enter", a, n],
                            ["enter", s, n]
                        ], e.slice(r + 1, r + u + 3)), i = R(i, [
                            ["enter", c, n]
                        ]), i = R(i, ep(n.parser.constructs.insideSpan.null, e.slice(r + u + 4, l - 3), n)), i = R(i, [
                            ["exit", c, n], e[l - 2], e[l - 1],
                            ["exit", s, n]
                        ]), i = R(i, e.slice(l + 1)), i = R(i, [
                            ["exit", a, n]
                        ]), M(e, r, e.length, i), e
                    },
                    resolveAll: function(e) {
                        let n, t = -1;
                        for (; ++t < e.length;)("labelImage" === (n = e[t][1]).type || "labelLink" === n.type || "labelEnd" === n.type) && (e.splice(t + 1, "labelImage" === n.type ? 4 : 2), n.type = "data", t++);
                        return e
                    }
                },
                eB = {
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(n), e.exit("resourceMarker"), eb(e, r)
                        };

                        function r(n) {
                            return 41 === n ? o(n) : ek(e, l, t, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(n)
                        }

                        function l(n) {
                            return $(n) ? eb(e, i)(n) : o(n)
                        }

                        function i(n) {
                            return 34 === n || 39 === n || 40 === n ? ev(e, eb(e, o), t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(n) : o(n)
                        }

                        function o(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), n) : t(r)
                        }
                    }
                },
                eN = {
                    tokenize: function(e, n, t) {
                        let r = this;
                        return function(n) {
                            return ex.call(r, e, l, t, "reference", "referenceMarker", "referenceString")(n)
                        };

                        function l(e) {
                            return r.parser.defined.includes(eS(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(e) : t(e)
                        }
                    }
                },
                e_ = {
                    tokenize: function(e, n, t) {
                        return function(n) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), n) : t(r)
                        }
                    }
                },
                ej = {
                    name: "labelStartImage",
                    tokenize: function(e, n, t) {
                        let r = this;
                        return function(n) {
                            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(n), e.exit("labelImageMarker"), l
                        };

                        function l(n) {
                            return 91 === n ? (e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelImage"), i) : t(n)
                        }

                        function i(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
                        }
                    },
                    resolveAll: eR.resolveAll
                };

            function eH(e) {
                return null === e || $(e) || Y(e) ? 1 : K(e) ? 2 : void 0
            }
            let eU = {
                name: "attention",
                tokenize: function(e, n) {
                    let t = this.parser.constructs.attentionMarkers.null,
                        r = this.previous,
                        l = eH(r);
                    return function(i) {
                        return e.enter("attentionSequence"),
                            function o(u) {
                                if (u === i) return e.consume(u), o;
                                let a = e.exit("attentionSequence"),
                                    s = eH(u),
                                    c = !s || 2 === s && l || t.includes(u),
                                    f = !l || 2 === l && s || t.includes(r);
                                return a._open = Boolean(42 === i ? c : c && (l || !f)), a._close = Boolean(42 === i ? f : f && (s || !c)), n(u)
                            }(i)
                    }
                },
                resolveAll: function(e, n) {
                    let t, r, l, i, o, u, a, s, c = -1;
                    for (; ++c < e.length;)
                        if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
                            for (t = c; t--;)
                                if ("exit" === e[t][0] && "attentionSequence" === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[c][1]).charCodeAt(0)) {
                                    if ((e[t][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
                                    u = e[t][1].end.offset - e[t][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
                                    let f = Object.assign({}, e[t][1].end),
                                        p = Object.assign({}, e[c][1].start);
                                    eV(f, -u), eV(p, u), i = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: f,
                                        end: Object.assign({}, e[t][1].end)
                                    }, o = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: Object.assign({}, e[c][1].start),
                                        end: p
                                    }, l = {
                                        type: u > 1 ? "strongText" : "emphasisText",
                                        start: Object.assign({}, e[t][1].end),
                                        end: Object.assign({}, e[c][1].start)
                                    }, r = {
                                        type: u > 1 ? "strong" : "emphasis",
                                        start: Object.assign({}, i.start),
                                        end: Object.assign({}, o.end)
                                    }, e[t][1].end = Object.assign({}, i.start), e[c][1].start = Object.assign({}, o.end), a = [], e[t][1].end.offset - e[t][1].start.offset && (a = R(a, [
                                        ["enter", e[t][1], n],
                                        ["exit", e[t][1], n]
                                    ])), a = R(a, [
                                        ["enter", r, n],
                                        ["enter", i, n],
                                        ["exit", i, n],
                                        ["enter", l, n]
                                    ]), a = R(a, ep(n.parser.constructs.insideSpan.null, e.slice(t + 1, c), n)), a = R(a, [
                                        ["exit", l, n],
                                        ["enter", o, n],
                                        ["exit", o, n],
                                        ["exit", r, n]
                                    ]), e[c][1].end.offset - e[c][1].start.offset ? (s = 2, a = R(a, [
                                        ["enter", e[c][1], n],
                                        ["exit", e[c][1], n]
                                    ])) : s = 0, M(e, t - 1, c - t + 3, a), c = t + a.length - s - 2;
                                    break
                                }
                        }
                    for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
                    return e
                }
            };

            function eV(e, n) {
                e.column += n, e.offset += n, e._bufferIndex += n
            }
            let eq = {
                    name: "labelStartLink",
                    tokenize: function(e, n, t) {
                        let r = this;
                        return function(n) {
                            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelLink"), l
                        };

                        function l(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
                        }
                    },
                    resolveAll: eR.resolveAll
                },
                e$ = {
                    42: eh,
                    43: eh,
                    45: eh,
                    48: eh,
                    49: eh,
                    50: eh,
                    51: eh,
                    52: eh,
                    53: eh,
                    54: eh,
                    55: eh,
                    56: eh,
                    57: eh,
                    62: ey
                },
                eW = {
                    91: {
                        name: "definition",
                        tokenize: function(e, n, t) {
                            let r;
                            let l = this;
                            return function(n) {
                                return e.enter("definition"), ex.call(l, e, i, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n)
                            };

                            function i(n) {
                                return (r = eS(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), 58 === n) ? (e.enter("definitionMarker"), e.consume(n), e.exit("definitionMarker"), eb(e, ek(e, e.attempt(ew, Z(e, o, "whitespace"), Z(e, o, "whitespace")), t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : t(n)
                            }

                            function o(i) {
                                return null === i || W(i) ? (e.exit("definition"), l.parser.defined.includes(r) || l.parser.defined.push(r), n(i)) : t(i)
                            }
                        }
                    }
                },
                eQ = {
                    [-2]: eC,
                    [-1]: eC,
                    32: eC
                },
                eY = {
                    35: {
                        name: "headingAtx",
                        tokenize: function(e, n, t) {
                            let r = this,
                                l = 0;
                            return function(i) {
                                return e.enter("atxHeading"), e.enter("atxHeadingSequence"),
                                    function i(o) {
                                        return 35 === o && l++ < 6 ? (e.consume(o), i) : null === o || $(o) ? (e.exit("atxHeadingSequence"), r.interrupt ? n(o) : function t(r) {
                                            return 35 === r ? (e.enter("atxHeadingSequence"), function n(r) {
                                                return 35 === r ? (e.consume(r), n) : (e.exit("atxHeadingSequence"), t(r))
                                            }(r)) : null === r || W(r) ? (e.exit("atxHeading"), n(r)) : Q(r) ? Z(e, t, "whitespace")(r) : (e.enter("atxHeadingText"), function n(r) {
                                                return null === r || 35 === r || $(r) ? (e.exit("atxHeadingText"), t(r)) : (e.consume(r), n)
                                            }(r))
                                        }(o)) : t(o)
                                    }(i)
                            }
                        },
                        resolve: function(e, n) {
                            let t, r, l = e.length - 2,
                                i = 3;
                            return "whitespace" === e[3][1].type && (i += 2), l - 2 > i && "whitespace" === e[l][1].type && (l -= 2), "atxHeadingSequence" === e[l][1].type && (i === l - 1 || l - 4 > i && "whitespace" === e[l - 2][1].type) && (l -= i + 1 === l ? 2 : 4), l > i && (t = {
                                type: "atxHeadingText",
                                start: e[i][1].start,
                                end: e[l][1].end
                            }, r = {
                                type: "chunkText",
                                start: e[i][1].start,
                                end: e[l][1].end,
                                contentType: "text"
                            }, M(e, i, l - i + 1, [
                                ["enter", t, n],
                                ["enter", r, n],
                                ["exit", r, n],
                                ["exit", t, n]
                            ])), e
                        }
                    },
                    42: ed,
                    45: [eA, ed],
                    60: {
                        name: "htmlFlow",
                        tokenize: function(e, n, t) {
                            let r, l, i, o, u;
                            let a = this;
                            return function(n) {
                                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), s
                            };

                            function s(o) {
                                return 33 === o ? (e.consume(o), c) : 47 === o ? (e.consume(o), d) : 63 === o ? (e.consume(o), r = 3, a.interrupt ? n : O) : N(o) ? (e.consume(o), i = String.fromCharCode(o), l = !0, h) : t(o)
                            }

                            function c(l) {
                                return 45 === l ? (e.consume(l), r = 2, f) : 91 === l ? (e.consume(l), r = 5, i = "CDATA[", o = 0, p) : N(l) ? (e.consume(l), r = 4, a.interrupt ? n : O) : t(l)
                            }

                            function f(r) {
                                return 45 === r ? (e.consume(r), a.interrupt ? n : O) : t(r)
                            }

                            function p(r) {
                                return r === i.charCodeAt(o++) ? (e.consume(r), o === i.length ? a.interrupt ? n : C : p) : t(r)
                            }

                            function d(n) {
                                return N(n) ? (e.consume(n), i = String.fromCharCode(n), h) : t(n)
                            }

                            function h(o) {
                                return null === o || 47 === o || 62 === o || $(o) ? 47 !== o && l && eT.includes(i.toLowerCase()) ? (r = 1, a.interrupt ? n(o) : C(o)) : eF.includes(i.toLowerCase()) ? (r = 6, 47 === o) ? (e.consume(o), m) : a.interrupt ? n(o) : C(o) : (r = 7, a.interrupt && !a.parser.lazy[a.now().line] ? t(o) : l ? g(o) : function n(t) {
                                    return Q(t) ? (e.consume(t), n) : S(t)
                                }(o)) : 45 === o || H(o) ? (e.consume(o), i += String.fromCharCode(o), h) : t(o)
                            }

                            function m(r) {
                                return 62 === r ? (e.consume(r), a.interrupt ? n : C) : t(r)
                            }

                            function g(n) {
                                return 47 === n ? (e.consume(n), S) : 58 === n || 95 === n || N(n) ? (e.consume(n), y) : Q(n) ? (e.consume(n), g) : S(n)
                            }

                            function y(n) {
                                return 45 === n || 46 === n || 58 === n || 95 === n || H(n) ? (e.consume(n), y) : k(n)
                            }

                            function k(n) {
                                return 61 === n ? (e.consume(n), x) : Q(n) ? (e.consume(n), k) : g(n)
                            }

                            function x(n) {
                                return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), u = n, v) : Q(n) ? (e.consume(n), x) : (u = null, function n(t) {
                                    return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || $(t) ? k(t) : (e.consume(t), n)
                                }(n))
                            }

                            function v(n) {
                                return null === n || W(n) ? t(n) : n === u ? (e.consume(n), b) : (e.consume(n), v)
                            }

                            function b(e) {
                                return 47 === e || 62 === e || Q(e) ? g(e) : t(e)
                            }

                            function S(n) {
                                return 62 === n ? (e.consume(n), w) : t(n)
                            }

                            function w(n) {
                                return Q(n) ? (e.consume(n), w) : null === n || W(n) ? C(n) : t(n)
                            }

                            function C(n) {
                                return 45 === n && 2 === r ? (e.consume(n), F) : 60 === n && 1 === r ? (e.consume(n), T) : 62 === n && 4 === r ? (e.consume(n), I) : 63 === n && 3 === r ? (e.consume(n), O) : 93 === n && 5 === r ? (e.consume(n), D) : W(n) && (6 === r || 7 === r) ? e.check(eP, I, E)(n) : null === n || W(n) ? E(n) : (e.consume(n), C)
                            }

                            function E(n) {
                                return e.exit("htmlFlowData"),
                                    function n(t) {
                                        return null === t ? L(t) : W(t) ? e.attempt({
                                            tokenize: A,
                                            partial: !0
                                        }, n, L)(t) : (e.enter("htmlFlowData"), C(t))
                                    }(n)
                            }

                            function A(e, n, t) {
                                return function(n) {
                                    return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r
                                };

                                function r(e) {
                                    return a.parser.lazy[a.now().line] ? t(e) : n(e)
                                }
                            }

                            function F(n) {
                                return 45 === n ? (e.consume(n), O) : C(n)
                            }

                            function T(n) {
                                return 47 === n ? (e.consume(n), i = "", P) : C(n)
                            }

                            function P(n) {
                                return 62 === n && eT.includes(i.toLowerCase()) ? (e.consume(n), I) : N(n) && i.length < 8 ? (e.consume(n), i += String.fromCharCode(n), P) : C(n)
                            }

                            function D(n) {
                                return 93 === n ? (e.consume(n), O) : C(n)
                            }

                            function O(n) {
                                return 62 === n ? (e.consume(n), I) : 45 === n && 2 === r ? (e.consume(n), O) : C(n)
                            }

                            function I(n) {
                                return null === n || W(n) ? (e.exit("htmlFlowData"), L(n)) : (e.consume(n), I)
                            }

                            function L(t) {
                                return e.exit("htmlFlow"), n(t)
                            }
                        },
                        resolveTo: function(e) {
                            let n = e.length;
                            for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type););
                            return n > 1 && "linePrefix" === e[n - 2][1].type && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e
                        },
                        concrete: !0
                    },
                    61: eA,
                    95: ed,
                    96: eD,
                    126: eD
                },
                eK = {
                    38: eL,
                    92: ez
                },
                eX = {
                    [-5]: eM,
                    [-4]: eM,
                    [-3]: eM,
                    33: ej,
                    38: eL,
                    42: eU,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, n, t) {
                            let r = 1;
                            return function(n) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l
                            };

                            function l(n) {
                                return N(n) ? (e.consume(n), i) : V(n) ? u(n) : t(n)
                            }

                            function i(n) {
                                return 43 === n || 45 === n || 46 === n || H(n) ? function n(t) {
                                    return 58 === t ? (e.consume(t), o) : (43 === t || 45 === t || 46 === t || H(t)) && r++ < 32 ? (e.consume(t), n) : u(t)
                                }(n) : u(n)
                            }

                            function o(n) {
                                return 62 === n ? (e.exit("autolinkProtocol"), s(n)) : null === n || 32 === n || 60 === n || q(n) ? t(n) : (e.consume(n), o)
                            }

                            function u(n) {
                                return 64 === n ? (e.consume(n), r = 0, a) : V(n) ? (e.consume(n), u) : t(n)
                            }

                            function a(n) {
                                return H(n) ? function n(l) {
                                    return 46 === l ? (e.consume(l), r = 0, a) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", s(l)) : function l(i) {
                                        return (45 === i || H(i)) && r++ < 63 ? (e.consume(i), 45 === i ? l : n) : t(i)
                                    }(l)
                                }(n) : t(n)
                            }

                            function s(t) {
                                return e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.exit("autolink"), n
                            }
                        }
                    }, {
                        name: "htmlText",
                        tokenize: function(e, n, t) {
                            let r, l, i, o;
                            let u = this;
                            return function(n) {
                                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), a
                            };

                            function a(n) {
                                return 33 === n ? (e.consume(n), s) : 47 === n ? (e.consume(n), S) : 63 === n ? (e.consume(n), v) : N(n) ? (e.consume(n), C) : t(n)
                            }

                            function s(n) {
                                return 45 === n ? (e.consume(n), c) : 91 === n ? (e.consume(n), l = "CDATA[", i = 0, m) : N(n) ? (e.consume(n), x) : t(n)
                            }

                            function c(n) {
                                return 45 === n ? (e.consume(n), f) : t(n)
                            }

                            function f(n) {
                                return null === n || 62 === n ? t(n) : 45 === n ? (e.consume(n), p) : d(n)
                            }

                            function p(e) {
                                return null === e || 62 === e ? t(e) : d(e)
                            }

                            function d(n) {
                                return null === n ? t(n) : 45 === n ? (e.consume(n), h) : W(n) ? (o = d, O(n)) : (e.consume(n), d)
                            }

                            function h(n) {
                                return 45 === n ? (e.consume(n), L) : d(n)
                            }

                            function m(n) {
                                return n === l.charCodeAt(i++) ? (e.consume(n), i === l.length ? g : m) : t(n)
                            }

                            function g(n) {
                                return null === n ? t(n) : 93 === n ? (e.consume(n), y) : W(n) ? (o = g, O(n)) : (e.consume(n), g)
                            }

                            function y(n) {
                                return 93 === n ? (e.consume(n), k) : g(n)
                            }

                            function k(n) {
                                return 62 === n ? L(n) : 93 === n ? (e.consume(n), k) : g(n)
                            }

                            function x(n) {
                                return null === n || 62 === n ? L(n) : W(n) ? (o = x, O(n)) : (e.consume(n), x)
                            }

                            function v(n) {
                                return null === n ? t(n) : 63 === n ? (e.consume(n), b) : W(n) ? (o = v, O(n)) : (e.consume(n), v)
                            }

                            function b(e) {
                                return 62 === e ? L(e) : v(e)
                            }

                            function S(n) {
                                return N(n) ? (e.consume(n), w) : t(n)
                            }

                            function w(n) {
                                return 45 === n || H(n) ? (e.consume(n), w) : function n(t) {
                                    return W(t) ? (o = n, O(t)) : Q(t) ? (e.consume(t), n) : L(t)
                                }(n)
                            }

                            function C(n) {
                                return 45 === n || H(n) ? (e.consume(n), C) : 47 === n || 62 === n || $(n) ? E(n) : t(n)
                            }

                            function E(n) {
                                return 47 === n ? (e.consume(n), L) : 58 === n || 95 === n || N(n) ? (e.consume(n), A) : W(n) ? (o = E, O(n)) : Q(n) ? (e.consume(n), E) : L(n)
                            }

                            function A(n) {
                                return 45 === n || 46 === n || 58 === n || 95 === n || H(n) ? (e.consume(n), A) : function n(t) {
                                    return 61 === t ? (e.consume(t), F) : W(t) ? (o = n, O(t)) : Q(t) ? (e.consume(t), n) : E(t)
                                }(n)
                            }

                            function F(n) {
                                return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), r = n, T) : W(n) ? (o = F, O(n)) : Q(n) ? (e.consume(n), F) : (e.consume(n), r = void 0, D)
                            }

                            function T(n) {
                                return n === r ? (e.consume(n), P) : null === n ? t(n) : W(n) ? (o = T, O(n)) : (e.consume(n), T)
                            }

                            function P(e) {
                                return 62 === e || 47 === e || $(e) ? E(e) : t(e)
                            }

                            function D(n) {
                                return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 62 === n || $(n) ? E(n) : (e.consume(n), D)
                            }

                            function O(n) {
                                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Z(e, I, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                            }

                            function I(n) {
                                return e.enter("htmlTextData"), o(n)
                            }

                            function L(r) {
                                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(r)
                            }
                        }
                    }],
                    91: eq,
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, n, t) {
                            return function(n) {
                                return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(n), r
                            };

                            function r(r) {
                                return W(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(r)) : t(r)
                            }
                        }
                    }, ez],
                    93: eR,
                    95: eU,
                    96: {
                        name: "codeText",
                        tokenize: function(e, n, t) {
                            let r, l, i = 0;
                            return function(n) {
                                return e.enter("codeText"), e.enter("codeTextSequence"),
                                    function n(t) {
                                        return 96 === t ? (e.consume(t), i++, n) : (e.exit("codeTextSequence"), o(t))
                                    }(n)
                            };

                            function o(a) {
                                return null === a ? t(a) : 96 === a ? (l = e.enter("codeTextSequence"), r = 0, function t(o) {
                                    return 96 === o ? (e.consume(o), r++, t) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), n(o)) : (l.type = "codeTextData", u(o))
                                }(a)) : 32 === a ? (e.enter("space"), e.consume(a), e.exit("space"), o) : W(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : (e.enter("codeTextData"), u(a))
                            }

                            function u(n) {
                                return null === n || 32 === n || 96 === n || W(n) ? (e.exit("codeTextData"), o(n)) : (e.consume(n), u)
                            }
                        },
                        resolve: function(e) {
                            let n, t, r = e.length - 4,
                                l = 3;
                            if (("lineEnding" === e[3][1].type || "space" === e[l][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                                for (n = l; ++n < r;)
                                    if ("codeTextData" === e[n][1].type) {
                                        e[l][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", l += 2, r -= 2;
                                        break
                                    }
                            }
                            for (n = l - 1, r++; ++n <= r;) void 0 === t ? n !== r && "lineEnding" !== e[n][1].type && (t = n) : (n === r || "lineEnding" === e[n][1].type) && (e[t][1].type = "codeTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n - t - 2), r -= n - t - 2, n = t + 2), t = void 0);
                            return e
                        },
                        previous: function(e) {
                            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                        }
                    }
                },
                eZ = {
                    null: [eU, eo]
                },
                eJ = {
                    null: [42, 95]
                },
                eG = {
                    null: []
                },
                e1 = /[\0\t\n\r]/g;

            function e0(e, n) {
                let t = Number.parseInt(e, n);
                return t < 9 || 11 === t || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || (65535 & t) == 65535 || (65535 & t) == 65534 || t > 1114111 ? "�" : String.fromCharCode(t)
            }
            let e2 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function e4(e, n, t) {
                if (n) return n;
                let r = t.charCodeAt(0);
                if (35 === r) {
                    let e = t.charCodeAt(1),
                        n = 120 === e || 88 === e;
                    return e0(t.slice(n ? 2 : 1), n ? 16 : 10)
                }
                return eI(t) || e
            }
            let e3 = {}.hasOwnProperty,
                e6 = function(e, n, t) {
                    let l, i, o, a;
                    return "string" != typeof n && (t = n, n = void 0), (function(e) {
                        let n = {
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: i(v),
                                autolinkProtocol: p,
                                autolinkEmail: p,
                                atxHeading: i(y),
                                blockQuote: i(function() {
                                    return {
                                        type: "blockquote",
                                        children: []
                                    }
                                }),
                                characterEscape: p,
                                characterReference: p,
                                codeFenced: i(g),
                                codeFencedFenceInfo: o,
                                codeFencedFenceMeta: o,
                                codeIndented: i(g, o),
                                codeText: i(function() {
                                    return {
                                        type: "inlineCode",
                                        value: ""
                                    }
                                }, o),
                                codeTextData: p,
                                data: p,
                                codeFlowValue: p,
                                definition: i(function() {
                                    return {
                                        type: "definition",
                                        identifier: "",
                                        label: null,
                                        title: null,
                                        url: ""
                                    }
                                }),
                                definitionDestinationString: o,
                                definitionLabelString: o,
                                definitionTitleString: o,
                                emphasis: i(function() {
                                    return {
                                        type: "emphasis",
                                        children: []
                                    }
                                }),
                                hardBreakEscape: i(k),
                                hardBreakTrailing: i(k),
                                htmlFlow: i(x, o),
                                htmlFlowData: p,
                                htmlText: i(x, o),
                                htmlTextData: p,
                                image: i(function() {
                                    return {
                                        type: "image",
                                        title: null,
                                        url: "",
                                        alt: null
                                    }
                                }),
                                label: o,
                                link: i(v),
                                listItem: i(function(e) {
                                    return {
                                        type: "listItem",
                                        spread: e._spread,
                                        checked: null,
                                        children: []
                                    }
                                }),
                                listItemValue: function(e) {
                                    if (t.expectingFirstListItemValue) {
                                        let n = this.stack[this.stack.length - 2];
                                        n.start = Number.parseInt(this.sliceSerialize(e), 10), t.expectingFirstListItemValue = void 0
                                    }
                                },
                                listOrdered: i(b, function() {
                                    t.expectingFirstListItemValue = !0
                                }),
                                listUnordered: i(b),
                                paragraph: i(function() {
                                    return {
                                        type: "paragraph",
                                        children: []
                                    }
                                }),
                                reference: function() {
                                    t.referenceType = "collapsed"
                                },
                                referenceString: o,
                                resourceDestinationString: o,
                                resourceTitleString: o,
                                setextHeading: i(y),
                                strong: i(function() {
                                    return {
                                        type: "strong",
                                        children: []
                                    }
                                }),
                                thematicBreak: i(function() {
                                    return {
                                        type: "thematicBreak"
                                    }
                                })
                            },
                            exit: {
                                atxHeading: s(),
                                atxHeadingSequence: function(e) {
                                    let n = this.stack[this.stack.length - 1];
                                    if (!n.depth) {
                                        let t = this.sliceSerialize(e).length;
                                        n.depth = t
                                    }
                                },
                                autolink: s(),
                                autolinkEmail: function(e) {
                                    d.call(this, e);
                                    let n = this.stack[this.stack.length - 1];
                                    n.url = "mailto:" + this.sliceSerialize(e)
                                },
                                autolinkProtocol: function(e) {
                                    d.call(this, e);
                                    let n = this.stack[this.stack.length - 1];
                                    n.url = this.sliceSerialize(e)
                                },
                                blockQuote: s(),
                                characterEscapeValue: d,
                                characterReferenceMarkerHexadecimal: m,
                                characterReferenceMarkerNumeric: m,
                                characterReferenceValue: function(e) {
                                    let n;
                                    let r = this.sliceSerialize(e),
                                        l = t.characterReferenceType;
                                    if (l) n = e0(r, "characterReferenceMarkerNumeric" === l ? 10 : 16), t.characterReferenceType = void 0;
                                    else {
                                        let e = eI(r);
                                        n = e
                                    }
                                    let i = this.stack.pop();
                                    i.value += n, i.position.end = e5(e.end)
                                },
                                codeFenced: s(function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), t.flowCodeInside = void 0
                                }),
                                codeFencedFence: function() {
                                    !t.flowCodeInside && (this.buffer(), t.flowCodeInside = !0)
                                },
                                codeFencedFenceInfo: function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.lang = e
                                },
                                codeFencedFenceMeta: function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.meta = e
                                },
                                codeFlowValue: d,
                                codeIndented: s(function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.value = e.replace(/(\r?\n|\r)$/g, "")
                                }),
                                codeText: s(function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.value = e
                                }),
                                codeTextData: d,
                                data: d,
                                definition: s(),
                                definitionDestinationString: function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.url = e
                                },
                                definitionLabelString: function(e) {
                                    let n = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.label = n, t.identifier = eS(this.sliceSerialize(e)).toLowerCase()
                                },
                                definitionTitleString: function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.title = e
                                },
                                emphasis: s(),
                                hardBreakEscape: s(h),
                                hardBreakTrailing: s(h),
                                htmlFlow: s(function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.value = e
                                }),
                                htmlFlowData: d,
                                htmlText: s(function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.value = e
                                }),
                                htmlTextData: d,
                                image: s(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (t.inReference) {
                                        let n = t.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    t.referenceType = void 0
                                }),
                                label: function() {
                                    let e = this.stack[this.stack.length - 1],
                                        n = this.resume(),
                                        r = this.stack[this.stack.length - 1];
                                    if (t.inReference = !0, "link" === r.type) {
                                        let n = e.children;
                                        r.children = n
                                    } else r.alt = n
                                },
                                labelText: function(e) {
                                    let n = this.sliceSerialize(e),
                                        t = this.stack[this.stack.length - 2];
                                    t.label = n.replace(e2, e4), t.identifier = eS(n).toLowerCase()
                                },
                                lineEnding: function(e) {
                                    let r = this.stack[this.stack.length - 1];
                                    if (t.atHardBreak) {
                                        let n = r.children[r.children.length - 1];
                                        n.position.end = e5(e.end), t.atHardBreak = void 0;
                                        return
                                    }!t.setextHeadingSlurpLineEnding && n.canContainEols.includes(r.type) && (p.call(this, e), d.call(this, e))
                                },
                                link: s(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (t.inReference) {
                                        let n = t.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    t.referenceType = void 0
                                }),
                                listItem: s(),
                                listOrdered: s(),
                                listUnordered: s(),
                                paragraph: s(),
                                referenceString: function(e) {
                                    let n = this.resume(),
                                        r = this.stack[this.stack.length - 1];
                                    r.label = n, r.identifier = eS(this.sliceSerialize(e)).toLowerCase(), t.referenceType = "full"
                                },
                                resourceDestinationString: function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.url = e
                                },
                                resourceTitleString: function() {
                                    let e = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.title = e
                                },
                                resource: function() {
                                    t.inReference = void 0
                                },
                                setextHeading: s(function() {
                                    t.setextHeadingSlurpLineEnding = void 0
                                }),
                                setextHeadingLineSequence: function(e) {
                                    let n = this.stack[this.stack.length - 1];
                                    n.depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                                },
                                setextHeadingText: function() {
                                    t.setextHeadingSlurpLineEnding = !0
                                },
                                strong: s(),
                                thematicBreak: s()
                            }
                        };
                        ! function e(n, t) {
                            let r = -1;
                            for (; ++r < t.length;) {
                                let l = t[r];
                                Array.isArray(l) ? e(n, l) : function(e, n) {
                                    let t;
                                    for (t in n)
                                        if (e3.call(n, t)) {
                                            if ("canContainEols" === t) {
                                                let r = n[t];
                                                r && e[t].push(...r)
                                            } else if ("transforms" === t) {
                                                let r = n[t];
                                                r && e[t].push(...r)
                                            } else if ("enter" === t || "exit" === t) {
                                                let r = n[t];
                                                r && Object.assign(e[t], r)
                                            }
                                        }
                                }(n, l)
                            }
                        }(n, (e || {}).mdastExtensions || []);
                        let t = {};
                        return function(e) {
                            let t = {
                                    type: "root",
                                    children: []
                                },
                                i = {
                                    stack: [t],
                                    tokenStack: [],
                                    config: n,
                                    enter: a,
                                    exit: c,
                                    buffer: o,
                                    resume: f,
                                    setData: r,
                                    getData: l
                                },
                                u = [],
                                s = -1;
                            for (; ++s < e.length;)
                                if ("listOrdered" === e[s][1].type || "listUnordered" === e[s][1].type) {
                                    if ("enter" === e[s][0]) u.push(s);
                                    else {
                                        let n = u.pop();
                                        s = function(e, n, t) {
                                            let r, l, i, o, u = n - 1,
                                                a = -1,
                                                s = !1;
                                            for (; ++u <= t;) {
                                                let n = e[u];
                                                if ("listUnordered" === n[1].type || "listOrdered" === n[1].type || "blockQuote" === n[1].type ? ("enter" === n[0] ? a++ : a--, o = void 0) : "lineEndingBlank" === n[1].type ? "enter" === n[0] && (!r || o || a || i || (i = u), o = void 0) : "linePrefix" === n[1].type || "listItemValue" === n[1].type || "listItemMarker" === n[1].type || "listItemPrefix" === n[1].type || "listItemPrefixWhitespace" === n[1].type || (o = void 0), !a && "enter" === n[0] && "listItemPrefix" === n[1].type || -1 === a && "exit" === n[0] && ("listUnordered" === n[1].type || "listOrdered" === n[1].type)) {
                                                    if (r) {
                                                        let o = u;
                                                        for (l = void 0; o--;) {
                                                            let n = e[o];
                                                            if ("lineEnding" === n[1].type || "lineEndingBlank" === n[1].type) {
                                                                if ("exit" === n[0]) continue;
                                                                l && (e[l][1].type = "lineEndingBlank", s = !0), n[1].type = "lineEnding", l = o
                                                            } else if ("linePrefix" === n[1].type || "blockQuotePrefix" === n[1].type || "blockQuotePrefixWhitespace" === n[1].type || "blockQuoteMarker" === n[1].type || "listItemIndent" === n[1].type);
                                                            else break
                                                        }
                                                        i && (!l || i < l) && (r._spread = !0), r.end = Object.assign({}, l ? e[l][1].start : n[1].end), e.splice(l || u, 0, ["exit", r, n[2]]), u++, t++
                                                    }
                                                    "listItemPrefix" === n[1].type && (r = {
                                                        type: "listItem",
                                                        _spread: !1,
                                                        start: Object.assign({}, n[1].start)
                                                    }, e.splice(u, 0, ["enter", r, n[2]]), u++, t++, i = void 0, o = !0)
                                                }
                                            }
                                            return e[n][1]._spread = s, t
                                        }(e, n, s)
                                    }
                                }
                            for (s = -1; ++s < e.length;) {
                                let t = n[e[s][0]];
                                e3.call(t, e[s][1].type) && t[e[s][1].type].call(Object.assign({
                                    sliceSerialize: e[s][2].sliceSerialize
                                }, i), e[s][1])
                            }
                            if (i.tokenStack.length > 0) {
                                let e = i.tokenStack[i.tokenStack.length - 1],
                                    n = e[1] || e9;
                                n.call(i, void 0, e[0])
                            }
                            for (t.position = {
                                    start: e5(e.length > 0 ? e[0][1].start : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    }),
                                    end: e5(e.length > 0 ? e[e.length - 2][1].end : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    })
                                }, s = -1; ++s < n.transforms.length;) t = n.transforms[s](t) || t;
                            return t
                        };

                        function r(e, n) {
                            t[e] = n
                        }

                        function l(e) {
                            return t[e]
                        }

                        function i(e, n) {
                            return function(t) {
                                a.call(this, e(t), t), n && n.call(this, t)
                            }
                        }

                        function o() {
                            this.stack.push({
                                type: "fragment",
                                children: []
                            })
                        }

                        function a(e, n, t) {
                            let r = this.stack[this.stack.length - 1];
                            return r.children.push(e), this.stack.push(e), this.tokenStack.push([n, t]), e.position = {
                                start: e5(n.start)
                            }, e
                        }

                        function s(e) {
                            return function(n) {
                                e && e.call(this, n), c.call(this, n)
                            }
                        }

                        function c(e, n) {
                            let t = this.stack.pop(),
                                r = this.tokenStack.pop();
                            if (r) {
                                if (r[0].type !== e.type) {
                                    if (n) n.call(this, e, r[0]);
                                    else {
                                        let n = r[1] || e9;
                                        n.call(this, e, r[0])
                                    }
                                }
                            } else throw Error("Cannot close `" + e.type + "` (" + u({
                                start: e.start,
                                end: e.end
                            }) + "): it’s not open");
                            return t.position.end = e5(e.end), t
                        }

                        function f() {
                            return function(e, n) {
                                let t = {}.includeImageAlt;
                                return L(e, "boolean" != typeof t || t)
                            }(this.stack.pop())
                        }

                        function p(e) {
                            let n = this.stack[this.stack.length - 1],
                                t = n.children[n.children.length - 1];
                            t && "text" === t.type || ((t = {
                                type: "text",
                                value: ""
                            }).position = {
                                start: e5(e.start)
                            }, n.children.push(t)), this.stack.push(t)
                        }

                        function d(e) {
                            let n = this.stack.pop();
                            n.value += this.sliceSerialize(e), n.position.end = e5(e.end)
                        }

                        function h() {
                            t.atHardBreak = !0
                        }

                        function m(e) {
                            var n;
                            n = e.type, t.characterReferenceType = n
                        }

                        function g() {
                            return {
                                type: "code",
                                lang: null,
                                meta: null,
                                value: ""
                            }
                        }

                        function y() {
                            return {
                                type: "heading",
                                depth: void 0,
                                children: []
                            }
                        }

                        function k() {
                            return {
                                type: "break"
                            }
                        }

                        function x() {
                            return {
                                type: "html",
                                value: ""
                            }
                        }

                        function v() {
                            return {
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }
                        }

                        function b(e) {
                            return {
                                type: "list",
                                ordered: "listOrdered" === e.type,
                                start: null,
                                spread: e._spread,
                                children: []
                            }
                        }
                    })(t)(function(e) {
                        for (; !et(e););
                        return e
                    }((function(e = {}) {
                        let n = function(e) {
                                let n = {},
                                    t = -1;
                                for (; ++t < e.length;) ! function(e, n) {
                                    let t;
                                    for (t in n) {
                                        let r;
                                        let l = B.call(e, t) ? e[t] : void 0,
                                            i = l || (e[t] = {}),
                                            o = n[t];
                                        for (r in o) {
                                            B.call(i, r) || (i[r] = []);
                                            let e = o[r];
                                            ! function(e, n) {
                                                let t = -1,
                                                    r = [];
                                                for (; ++t < n.length;)("after" === n[t].add ? e : r).push(n[t]);
                                                M(e, 0, 0, r)
                                            }(i[r], Array.isArray(e) ? e : e ? [e] : [])
                                        }
                                    }
                                }(n, e[t]);
                                return n
                            }([r].concat(e.extensions || [])),
                            t = {
                                defined: [],
                                lazy: {},
                                constructs: n,
                                content: l(J),
                                document: l(G),
                                flow: l(ei),
                                string: l(eu),
                                text: l(ea)
                            };
                        return t;

                        function l(e) {
                            return function(n) {
                                return function(e, n, t) {
                                    let r = Object.assign(t ? Object.assign({}, t) : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        }, {
                                            _index: 0,
                                            _bufferIndex: -1
                                        }),
                                        l = {},
                                        i = [],
                                        o = [],
                                        u = [],
                                        a = {
                                            consume: function(e) {
                                                W(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = e
                                            },
                                            enter: function(e, n) {
                                                let t = n || {};
                                                return t.type = e, t.start = p(), s.events.push(["enter", t, s]), u.push(t), t
                                            },
                                            exit: function(e) {
                                                let n = u.pop();
                                                return n.end = p(), s.events.push(["exit", n, s]), n
                                            },
                                            attempt: h(function(e, n) {
                                                m(e, n.from)
                                            }),
                                            check: h(d),
                                            interrupt: h(d, {
                                                interrupt: !0
                                            })
                                        },
                                        s = {
                                            previous: null,
                                            code: null,
                                            containerState: {},
                                            events: [],
                                            parser: e,
                                            sliceStream: f,
                                            sliceSerialize: function(e, n) {
                                                return function(e, n) {
                                                    let t, r = -1,
                                                        l = [];
                                                    for (; ++r < e.length;) {
                                                        let i;
                                                        let o = e[r];
                                                        if ("string" == typeof o) i = o;
                                                        else switch (o) {
                                                            case -5:
                                                                i = "\r";
                                                                break;
                                                            case -4:
                                                                i = "\n";
                                                                break;
                                                            case -3:
                                                                i = "\r\n";
                                                                break;
                                                            case -2:
                                                                i = n ? " " : "	";
                                                                break;
                                                            case -1:
                                                                if (!n && t) continue;
                                                                i = " ";
                                                                break;
                                                            default:
                                                                i = String.fromCharCode(o)
                                                        }
                                                        t = -2 === o, l.push(i)
                                                    }
                                                    return l.join("")
                                                }(f(e), n)
                                            },
                                            now: p,
                                            defineSkip: function(e) {
                                                l[e.line] = e.column, g()
                                            },
                                            write: function(e) {
                                                return (o = R(o, e), function() {
                                                    let e;
                                                    for (; r._index < o.length;) {
                                                        var n;
                                                        let t = o[r._index];
                                                        if ("string" == typeof t)
                                                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) c = c(t.charCodeAt(r._bufferIndex));
                                                        else c = c(t)
                                                    }
                                                }(), null !== o[o.length - 1]) ? [] : (m(n, 0), s.events = ep(i, s.events, s), s.events)
                                            }
                                        },
                                        c = n.tokenize.call(s, a);
                                    return n.resolveAll && i.push(n), s;

                                    function f(e) {
                                        return function(e, n) {
                                            let t;
                                            let r = n.start._index,
                                                l = n.start._bufferIndex,
                                                i = n.end._index,
                                                o = n.end._bufferIndex;
                                            return r === i ? t = [e[r].slice(l, o)] : (t = e.slice(r, i), l > -1 && (t[0] = t[0].slice(l)), o > 0 && t.push(e[i].slice(0, o))), t
                                        }(o, e)
                                    }

                                    function p() {
                                        return Object.assign({}, r)
                                    }

                                    function d(e, n) {
                                        n.restore()
                                    }

                                    function h(e, n) {
                                        return function(t, l, i) {
                                            let o, c, f, d;
                                            return Array.isArray(t) ? h(t) : "tokenize" in t ? h([t]) : function(e) {
                                                let n = null !== e && t[e],
                                                    r = null !== e && t.null,
                                                    l = [...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []];
                                                return h(l)(e)
                                            };

                                            function h(e) {
                                                return (o = e, c = 0, 0 === e.length) ? i : m(e[c])
                                            }

                                            function m(e) {
                                                return function(t) {
                                                    return (d = function() {
                                                        let e = p(),
                                                            n = s.previous,
                                                            t = s.currentConstruct,
                                                            l = s.events.length,
                                                            i = Array.from(u);
                                                        return {
                                                            restore: function() {
                                                                r = e, s.previous = n, s.currentConstruct = t, s.events.length = l, u = i, g()
                                                            },
                                                            from: l
                                                        }
                                                    }(), f = e, e.partial || (s.currentConstruct = e), e.name && s.parser.constructs.disable.null.includes(e.name)) ? k(t) : e.tokenize.call(n ? Object.assign(Object.create(s), n) : s, a, y, k)(t)
                                                }
                                            }

                                            function y(n) {
                                                return e(f, d), l
                                            }

                                            function k(e) {
                                                return (d.restore(), ++c < o.length) ? m(o[c]) : i
                                            }
                                        }
                                    }

                                    function m(e, n) {
                                        e.resolveAll && !i.includes(e) && i.push(e), e.resolve && M(s.events, n, s.events.length - n, e.resolve(s.events.slice(n), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s))
                                    }

                                    function g() {
                                        r.line in l && r.column < 2 && (r.column = l[r.line], r.offset += l[r.line] - 1)
                                    }
                                }(t, e, n)
                            }
                        }
                    })(t).document().write((i = 1, o = "", a = !0, function(e, n, t) {
                        let r, u, s, c, f;
                        let p = [];
                        for (e = o + e.toString(n), s = 0, o = "", a && (65279 === e.charCodeAt(0) && s++, a = void 0); s < e.length;) {
                            if (e1.lastIndex = s, c = (r = e1.exec(e)) && void 0 !== r.index ? r.index : e.length, f = e.charCodeAt(c), !r) {
                                o = e.slice(s);
                                break
                            }
                            if (10 === f && s === c && l) p.push(-3), l = void 0;
                            else switch (l && (p.push(-5), l = void 0), s < c && (p.push(e.slice(s, c)), i += c - s), f) {
                                case 0:
                                    p.push(65533), i++;
                                    break;
                                case 9:
                                    for (u = 4 * Math.ceil(i / 4), p.push(-2); i++ < u;) p.push(-1);
                                    break;
                                case 10:
                                    p.push(-4), i = 1;
                                    break;
                                default:
                                    l = !0, i = 1
                            }
                            s = c + 1
                        }
                        return t && (l && p.push(-5), o && p.push(o), p.push(null)), p
                    })(e, n, !0))))
                };

            function e5(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                }
            }

            function e9(e, n) {
                if (e) throw Error("Cannot close `" + e.type + "` (" + u({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + n.type + "`, " + u({
                    start: n.start,
                    end: n.end
                }) + ") is open");
                throw Error("Cannot close document, a token (`" + n.type + "`, " + u({
                    start: n.start,
                    end: n.end
                }) + ") is still open")
            }
            var e7 = function(e) {
                let n = n => {
                    let t = this.data("settings");
                    return e6(n, Object.assign({}, t, e, {
                        extensions: this.data("micromarkExtensions") || [],
                        mdastExtensions: this.data("fromMarkdownExtensions") || []
                    }))
                };
                Object.assign(this, {
                    Parser: n
                })
            };

            function e8(e) {
                let n = [],
                    t = -1,
                    r = 0,
                    l = 0;
                for (; ++t < e.length;) {
                    let i = e.charCodeAt(t),
                        o = "";
                    if (37 === i && H(e.charCodeAt(t + 1)) && H(e.charCodeAt(t + 2))) l = 2;
                    else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (o = String.fromCharCode(i));
                    else if (i > 55295 && i < 57344) {
                        let n = e.charCodeAt(t + 1);
                        i < 56320 && n > 56319 && n < 57344 ? (o = String.fromCharCode(i, n), l = 1) : o = "�"
                    } else o = String.fromCharCode(i);
                    o && (n.push(e.slice(r, t), encodeURIComponent(o)), r = t + l + 1, o = ""), l && (t += l, l = 0)
                }
                return n.join("") + e.slice(r)
            }
            let ne = function(e) {
                if (null == e) return nt;
                if ("string" == typeof e) return nn(function(n) {
                    return n && n.type === e
                });
                if ("object" == typeof e) return Array.isArray(e) ? function(e) {
                    let n = [],
                        t = -1;
                    for (; ++t < e.length;) n[t] = ne(e[t]);
                    return nn(function(...e) {
                        let t = -1;
                        for (; ++t < n.length;)
                            if (n[t].call(this, ...e)) return !0;
                        return !1
                    })
                }(e) : nn(function(n) {
                    let t;
                    for (t in e)
                        if (n[t] !== e[t]) return !1;
                    return !0
                });
                if ("function" == typeof e) return nn(e);
                throw Error("Expected function, string, or object as test")
            };

            function nn(e) {
                return function(n, ...t) {
                    return Boolean(n && "object" == typeof n && "type" in n && Boolean(e.call(this, n, ...t)))
                }
            }

            function nt() {
                return !0
            }
            let nr = function(e, n, t, r) {
                    "function" == typeof n && "function" != typeof t && (r = t, t = n, n = null);
                    let l = ne(n),
                        i = r ? -1 : 1;
                    (function e(o, u, a) {
                        let s = o && "object" == typeof o ? o : {};
                        if ("string" == typeof s.type) {
                            let e = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
                            Object.defineProperty(c, "name", {
                                value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")"
                            })
                        }
                        return c;

                        function c() {
                            var s;
                            let c, f, p, d = [];
                            if ((!n || l(o, u, a[a.length - 1] || null)) && !1 === (d = Array.isArray(s = t(o, a)) ? s : "number" == typeof s ? [!0, s] : [s])[0]) return d;
                            if (o.children && "skip" !== d[0])
                                for (f = (r ? o.children.length : -1) + i, p = a.concat(o); f > -1 && f < o.children.length;) {
                                    if (!1 === (c = e(o.children[f], f, p)())[0]) return c;
                                    f = "number" == typeof c[1] ? c[1] : f + i
                                }
                            return d
                        }
                    })(e, void 0, [])()
                },
                nl = function(e, n, t, r) {
                    "function" == typeof n && "function" != typeof t && (r = t, t = n, n = null), nr(e, n, function(e, n) {
                        let r = n[n.length - 1];
                        return t(e, r ? r.children.indexOf(e) : null, r)
                    }, r)
                },
                ni = nu("start"),
                no = nu("end");

            function nu(e) {
                return function(n) {
                    let t = n && n.position && n.position[e] || {};
                    return {
                        line: t.line || null,
                        column: t.column || null,
                        offset: t.offset > -1 ? t.offset : null
                    }
                }
            }
            let na = {}.hasOwnProperty;

            function ns(e) {
                return String(e || "").toUpperCase()
            }

            function nc(e, n) {
                let t;
                let r = String(n.identifier).toUpperCase(),
                    l = e8(r.toLowerCase()),
                    i = e.footnoteOrder.indexOf(r); - 1 === i ? (e.footnoteOrder.push(r), e.footnoteCounts[r] = 1, t = e.footnoteOrder.length) : (e.footnoteCounts[r]++, t = i + 1);
                let o = e.footnoteCounts[r],
                    u = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: "#" + e.clobberPrefix + "fn-" + l,
                            id: e.clobberPrefix + "fnref-" + l + (o > 1 ? "-" + o : ""),
                            dataFootnoteRef: !0,
                            ariaDescribedBy: ["footnote-label"]
                        },
                        children: [{
                            type: "text",
                            value: String(t)
                        }]
                    };
                e.patch(n, u);
                let a = {
                    type: "element",
                    tagName: "sup",
                    properties: {},
                    children: [u]
                };
                return e.patch(n, a), e.applyData(n, a)
            }

            function nf(e, n) {
                let t = n.referenceType,
                    r = "]";
                if ("collapsed" === t ? r += "[]" : "full" === t && (r += "[" + (n.label || n.identifier) + "]"), "imageReference" === n.type) return {
                    type: "text",
                    value: "![" + n.alt + r
                };
                let l = e.all(n),
                    i = l[0];
                i && "text" === i.type ? i.value = "[" + i.value : l.unshift({
                    type: "text",
                    value: "["
                });
                let o = l[l.length - 1];
                return o && "text" === o.type ? o.value += r : l.push({
                    type: "text",
                    value: r
                }), l
            }

            function np(e) {
                let n = e.spread;
                return null == n ? e.children.length > 1 : n
            }

            function nd(e, n, t) {
                let r = 0,
                    l = e.length;
                if (n) {
                    let n = e.codePointAt(r);
                    for (; 9 === n || 32 === n;) r++, n = e.codePointAt(r)
                }
                if (t) {
                    let n = e.codePointAt(l - 1);
                    for (; 9 === n || 32 === n;) l--, n = e.codePointAt(l - 1)
                }
                return l > r ? e.slice(r, l) : ""
            }
            let nh = {
                blockquote: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "blockquote",
                        properties: {},
                        children: e.wrap(e.all(n), !0)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                break: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "br",
                        properties: {},
                        children: []
                    };
                    return e.patch(n, t), [e.applyData(n, t), {
                        type: "text",
                        value: "\n"
                    }]
                },
                code: function(e, n) {
                    let t = n.value ? n.value + "\n" : "",
                        r = n.lang ? n.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
                        l = {};
                    r && (l.className = ["language-" + r]);
                    let i = {
                        type: "element",
                        tagName: "code",
                        properties: l,
                        children: [{
                            type: "text",
                            value: t
                        }]
                    };
                    return n.meta && (i.data = {
                        meta: n.meta
                    }), e.patch(n, i), i = {
                        type: "element",
                        tagName: "pre",
                        properties: {},
                        children: [i = e.applyData(n, i)]
                    }, e.patch(n, i), i
                },
                delete: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "del",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                emphasis: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "em",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                footnoteReference: nc,
                footnote: function(e, n) {
                    let t = e.footnoteById,
                        r = 1;
                    for (;
                        (r in t);) r++;
                    let l = String(r);
                    return t[l] = {
                        type: "footnoteDefinition",
                        identifier: l,
                        children: [{
                            type: "paragraph",
                            children: n.children
                        }],
                        position: n.position
                    }, nc(e, {
                        type: "footnoteReference",
                        identifier: l,
                        position: n.position
                    })
                },
                heading: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "h" + n.depth,
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                html: function(e, n) {
                    if (e.dangerous) {
                        let t = {
                            type: "raw",
                            value: n.value
                        };
                        return e.patch(n, t), e.applyData(n, t)
                    }
                    return null
                },
                imageReference: function(e, n) {
                    let t = e.definition(n.identifier);
                    if (!t) return nf(e, n);
                    let r = {
                        src: e8(t.url || ""),
                        alt: n.alt
                    };
                    null !== t.title && void 0 !== t.title && (r.title = t.title);
                    let l = {
                        type: "element",
                        tagName: "img",
                        properties: r,
                        children: []
                    };
                    return e.patch(n, l), e.applyData(n, l)
                },
                image: function(e, n) {
                    let t = {
                        src: e8(n.url)
                    };
                    null !== n.alt && void 0 !== n.alt && (t.alt = n.alt), null !== n.title && void 0 !== n.title && (t.title = n.title);
                    let r = {
                        type: "element",
                        tagName: "img",
                        properties: t,
                        children: []
                    };
                    return e.patch(n, r), e.applyData(n, r)
                },
                inlineCode: function(e, n) {
                    let t = {
                        type: "text",
                        value: n.value.replace(/\r?\n|\r/g, " ")
                    };
                    e.patch(n, t);
                    let r = {
                        type: "element",
                        tagName: "code",
                        properties: {},
                        children: [t]
                    };
                    return e.patch(n, r), e.applyData(n, r)
                },
                linkReference: function(e, n) {
                    let t = e.definition(n.identifier);
                    if (!t) return nf(e, n);
                    let r = {
                        href: e8(t.url || "")
                    };
                    null !== t.title && void 0 !== t.title && (r.title = t.title);
                    let l = {
                        type: "element",
                        tagName: "a",
                        properties: r,
                        children: e.all(n)
                    };
                    return e.patch(n, l), e.applyData(n, l)
                },
                link: function(e, n) {
                    let t = {
                        href: e8(n.url)
                    };
                    null !== n.title && void 0 !== n.title && (t.title = n.title);
                    let r = {
                        type: "element",
                        tagName: "a",
                        properties: t,
                        children: e.all(n)
                    };
                    return e.patch(n, r), e.applyData(n, r)
                },
                listItem: function(e, n, t) {
                    let r = e.all(n),
                        l = t ? function(e) {
                            let n = !1;
                            if ("list" === e.type) {
                                n = e.spread || !1;
                                let t = e.children,
                                    r = -1;
                                for (; !n && ++r < t.length;) n = np(t[r])
                            }
                            return n
                        }(t) : np(n),
                        i = {},
                        o = [];
                    if ("boolean" == typeof n.checked) {
                        let e;
                        let t = r[0];
                        t && "element" === t.type && "p" === t.tagName ? e = t : (e = {
                            type: "element",
                            tagName: "p",
                            properties: {},
                            children: []
                        }, r.unshift(e)), e.children.length > 0 && e.children.unshift({
                            type: "text",
                            value: " "
                        }), e.children.unshift({
                            type: "element",
                            tagName: "input",
                            properties: {
                                type: "checkbox",
                                checked: n.checked,
                                disabled: !0
                            },
                            children: []
                        }), i.className = ["task-list-item"]
                    }
                    let u = -1;
                    for (; ++u < r.length;) {
                        let e = r[u];
                        (l || 0 !== u || "element" !== e.type || "p" !== e.tagName) && o.push({
                            type: "text",
                            value: "\n"
                        }), "element" !== e.type || "p" !== e.tagName || l ? o.push(e) : o.push(...e.children)
                    }
                    let a = r[r.length - 1];
                    a && (l || "element" !== a.type || "p" !== a.tagName) && o.push({
                        type: "text",
                        value: "\n"
                    });
                    let s = {
                        type: "element",
                        tagName: "li",
                        properties: i,
                        children: o
                    };
                    return e.patch(n, s), e.applyData(n, s)
                },
                list: function(e, n) {
                    let t = {},
                        r = e.all(n),
                        l = -1;
                    for ("number" == typeof n.start && 1 !== n.start && (t.start = n.start); ++l < r.length;) {
                        let e = r[l];
                        if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                            t.className = ["contains-task-list"];
                            break
                        }
                    }
                    let i = {
                        type: "element",
                        tagName: n.ordered ? "ol" : "ul",
                        properties: t,
                        children: e.wrap(r, !0)
                    };
                    return e.patch(n, i), e.applyData(n, i)
                },
                paragraph: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                root: function(e, n) {
                    let t = {
                        type: "root",
                        children: e.wrap(e.all(n))
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                strong: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "strong",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                table: function(e, n) {
                    let t = e.all(n),
                        r = t.shift(),
                        l = [];
                    if (r) {
                        let t = {
                            type: "element",
                            tagName: "thead",
                            properties: {},
                            children: e.wrap([r], !0)
                        };
                        e.patch(n.children[0], t), l.push(t)
                    }
                    if (t.length > 0) {
                        let r = {
                                type: "element",
                                tagName: "tbody",
                                properties: {},
                                children: e.wrap(t, !0)
                            },
                            i = ni(n.children[1]),
                            o = no(n.children[n.children.length - 1]);
                        i.line && o.line && (r.position = {
                            start: i,
                            end: o
                        }), l.push(r)
                    }
                    let i = {
                        type: "element",
                        tagName: "table",
                        properties: {},
                        children: e.wrap(l, !0)
                    };
                    return e.patch(n, i), e.applyData(n, i)
                },
                tableCell: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "td",
                        properties: {},
                        children: e.all(n)
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                tableRow: function(e, n, t) {
                    let r = t ? t.children : void 0,
                        l = r ? r.indexOf(n) : 1,
                        i = 0 === l ? "th" : "td",
                        o = t && "table" === t.type ? t.align : void 0,
                        u = o ? o.length : n.children.length,
                        a = -1,
                        s = [];
                    for (; ++a < u;) {
                        let t = n.children[a],
                            r = {},
                            l = o ? o[a] : void 0;
                        l && (r.align = l);
                        let u = {
                            type: "element",
                            tagName: i,
                            properties: r,
                            children: []
                        };
                        t && (u.children = e.all(t), e.patch(t, u), u = e.applyData(n, u)), s.push(u)
                    }
                    let c = {
                        type: "element",
                        tagName: "tr",
                        properties: {},
                        children: e.wrap(s, !0)
                    };
                    return e.patch(n, c), e.applyData(n, c)
                },
                text: function(e, n) {
                    let t = {
                        type: "text",
                        value: function(e) {
                            let n = String(e),
                                t = /\r?\n|\r/g,
                                r = t.exec(n),
                                l = 0,
                                i = [];
                            for (; r;) i.push(nd(n.slice(l, r.index), l > 0, !0), r[0]), l = r.index + r[0].length, r = t.exec(n);
                            return i.push(nd(n.slice(l), l > 0, !1)), i.join("")
                        }(String(n.value))
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                thematicBreak: function(e, n) {
                    let t = {
                        type: "element",
                        tagName: "hr",
                        properties: {},
                        children: []
                    };
                    return e.patch(n, t), e.applyData(n, t)
                },
                toml: nm,
                yaml: nm,
                definition: nm,
                footnoteDefinition: nm
            };

            function nm() {
                return null
            }
            let ng = {}.hasOwnProperty;

            function ny(e, n) {
                e.position && (n.position = {
                    start: ni(e),
                    end: no(e)
                })
            }

            function nk(e, n) {
                let t = n;
                if (e && e.data) {
                    let n = e.data.hName,
                        r = e.data.hChildren,
                        l = e.data.hProperties;
                    "string" == typeof n && ("element" === t.type ? t.tagName = n : t = {
                        type: "element",
                        tagName: n,
                        properties: {},
                        children: []
                    }), "element" === t.type && l && (t.properties = { ...t.properties,
                        ...l
                    }), "children" in t && t.children && null != r && (t.children = r)
                }
                return t
            }

            function nx(e, n, t) {
                let r = n && n.type;
                if (!r) throw Error("Expected node, got `" + n + "`");
                return ng.call(e.handlers, r) ? e.handlers[r](e, n, t) : e.passThrough && e.passThrough.includes(r) ? "children" in n ? { ...n,
                    children: nv(e, n)
                } : n : e.unknownHandler ? e.unknownHandler(e, n, t) : function(e, n) {
                    let t = n.data || {},
                        r = "value" in n && !(ng.call(t, "hProperties") || ng.call(t, "hChildren")) ? {
                            type: "text",
                            value: n.value
                        } : {
                            type: "element",
                            tagName: "div",
                            properties: {},
                            children: nv(e, n)
                        };
                    return e.patch(n, r), e.applyData(n, r)
                }(e, n)
            }

            function nv(e, n) {
                let t = [];
                if ("children" in n) {
                    let r = n.children,
                        l = -1;
                    for (; ++l < r.length;) {
                        let i = nx(e, r[l], n);
                        if (i) {
                            if (l && "break" === r[l - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = i.value.replace(/^\s+/, "")), !Array.isArray(i) && "element" === i.type)) {
                                let e = i.children[0];
                                e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""))
                            }
                            Array.isArray(i) ? t.push(...i) : t.push(i)
                        }
                    }
                }
                return t
            }

            function nb(e, n) {
                let t = [],
                    r = -1;
                for (n && t.push({
                        type: "text",
                        value: "\n"
                    }); ++r < e.length;) r && t.push({
                    type: "text",
                    value: "\n"
                }), t.push(e[r]);
                return n && e.length > 0 && t.push({
                    type: "text",
                    value: "\n"
                }), t
            }

            function nS(e, n) {
                let t = function(e, n) {
                        let t = n || {},
                            r = t.allowDangerousHtml || !1,
                            l = {};
                        return o.dangerous = r, o.clobberPrefix = void 0 === t.clobberPrefix || null === t.clobberPrefix ? "user-content-" : t.clobberPrefix, o.footnoteLabel = t.footnoteLabel || "Footnotes", o.footnoteLabelTagName = t.footnoteLabelTagName || "h2", o.footnoteLabelProperties = t.footnoteLabelProperties || {
                            className: ["sr-only"]
                        }, o.footnoteBackLabel = t.footnoteBackLabel || "Back to content", o.unknownHandler = t.unknownHandler, o.passThrough = t.passThrough, o.handlers = { ...nh,
                            ...t.handlers
                        }, o.definition = function(e) {
                            let n = Object.create(null);
                            if (!e || !e.type) throw Error("mdast-util-definitions expected node");
                            return nl(e, "definition", e => {
                                    let t = ns(e.identifier);
                                    t && !na.call(n, t) && (n[t] = e)
                                }),
                                function(e) {
                                    let t = ns(e);
                                    return t && na.call(n, t) ? n[t] : null
                                }
                        }(e), o.footnoteById = l, o.footnoteOrder = [], o.footnoteCounts = {}, o.patch = ny, o.applyData = nk, o.one = function(e, n) {
                            return nx(o, e, n)
                        }, o.all = function(e) {
                            return nv(o, e)
                        }, o.wrap = nb, o.augment = i, nl(e, "footnoteDefinition", e => {
                            let n = String(e.identifier).toUpperCase();
                            ng.call(l, n) || (l[n] = e)
                        }), o;

                        function i(e, n) {
                            if (e && "data" in e && e.data) {
                                let t = e.data;
                                t.hName && ("element" !== n.type && (n = {
                                    type: "element",
                                    tagName: "",
                                    properties: {},
                                    children: []
                                }), n.tagName = t.hName), "element" === n.type && t.hProperties && (n.properties = { ...n.properties,
                                    ...t.hProperties
                                }), "children" in n && n.children && t.hChildren && (n.children = t.hChildren)
                            }
                            if (e) {
                                let t = "type" in e ? e : {
                                    position: e
                                };
                                !t || !t.position || !t.position.start || !t.position.start.line || !t.position.start.column || !t.position.end || !t.position.end.line || !t.position.end.column || (n.position = {
                                    start: ni(t),
                                    end: no(t)
                                })
                            }
                            return n
                        }

                        function o(e, n, t, r) {
                            return Array.isArray(t) && (r = t, t = {}), i(e, {
                                type: "element",
                                tagName: n,
                                properties: t || {},
                                children: r || []
                            })
                        }
                    }(e, n),
                    r = t.one(e, null),
                    l = function(e) {
                        let n = [],
                            t = -1;
                        for (; ++t < e.footnoteOrder.length;) {
                            let r = e.footnoteById[e.footnoteOrder[t]];
                            if (!r) continue;
                            let l = e.all(r),
                                i = String(r.identifier).toUpperCase(),
                                o = e8(i.toLowerCase()),
                                u = 0,
                                a = [];
                            for (; ++u <= e.footnoteCounts[i];) {
                                let n = {
                                    type: "element",
                                    tagName: "a",
                                    properties: {
                                        href: "#" + e.clobberPrefix + "fnref-" + o + (u > 1 ? "-" + u : ""),
                                        dataFootnoteBackref: !0,
                                        className: ["data-footnote-backref"],
                                        ariaLabel: e.footnoteBackLabel
                                    },
                                    children: [{
                                        type: "text",
                                        value: "↩"
                                    }]
                                };
                                u > 1 && n.children.push({
                                    type: "element",
                                    tagName: "sup",
                                    children: [{
                                        type: "text",
                                        value: String(u)
                                    }]
                                }), a.length > 0 && a.push({
                                    type: "text",
                                    value: " "
                                }), a.push(n)
                            }
                            let s = l[l.length - 1];
                            if (s && "element" === s.type && "p" === s.tagName) {
                                let e = s.children[s.children.length - 1];
                                e && "text" === e.type ? e.value += " " : s.children.push({
                                    type: "text",
                                    value: " "
                                }), s.children.push(...a)
                            } else l.push(...a);
                            let c = {
                                type: "element",
                                tagName: "li",
                                properties: {
                                    id: e.clobberPrefix + "fn-" + o
                                },
                                children: e.wrap(l, !0)
                            };
                            e.patch(r, c), n.push(c)
                        }
                        if (0 !== n.length) return {
                            type: "element",
                            tagName: "section",
                            properties: {
                                dataFootnotes: !0,
                                className: ["footnotes"]
                            },
                            children: [{
                                type: "element",
                                tagName: e.footnoteLabelTagName,
                                properties: { ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                                    id: "footnote-label"
                                },
                                children: [{
                                    type: "text",
                                    value: e.footnoteLabel
                                }]
                            }, {
                                type: "text",
                                value: "\n"
                            }, {
                                type: "element",
                                tagName: "ol",
                                properties: {},
                                children: e.wrap(n, !0)
                            }, {
                                type: "text",
                                value: "\n"
                            }]
                        }
                    }(t);
                return l && r.children.push({
                    type: "text",
                    value: "\n"
                }, l), Array.isArray(r) ? {
                    type: "root",
                    children: r
                } : r
            }
            var nw = function(e, n) {
                    var t;
                    return e && "run" in e ? (t, r, l) => {
                        e.run(nS(t, n), r, e => {
                            l(e)
                        })
                    } : (t = e || n, e => nS(e, t))
                },
                nC = t(5697);
            class nE {
                constructor(e, n, t) {
                    this.property = e, this.normal = n, t && (this.space = t)
                }
            }

            function nA(e, n) {
                let t = {},
                    r = {},
                    l = -1;
                for (; ++l < e.length;) Object.assign(t, e[l].property), Object.assign(r, e[l].normal);
                return new nE(t, r, n)
            }

            function nF(e) {
                return e.toLowerCase()
            }
            nE.prototype.property = {}, nE.prototype.normal = {}, nE.prototype.space = null;
            class nT {
                constructor(e, n) {
                    this.property = e, this.attribute = n
                }
            }
            nT.prototype.space = null, nT.prototype.boolean = !1, nT.prototype.booleanish = !1, nT.prototype.overloadedBoolean = !1, nT.prototype.number = !1, nT.prototype.commaSeparated = !1, nT.prototype.spaceSeparated = !1, nT.prototype.commaOrSpaceSeparated = !1, nT.prototype.mustUseProperty = !1, nT.prototype.defined = !1;
            let nP = 0,
                nD = nB(),
                nO = nB(),
                nI = nB(),
                nL = nB(),
                nz = nB(),
                nM = nB(),
                nR = nB();

            function nB() {
                return 2 ** ++nP
            }
            let nN = Object.keys(l);
            class n_ extends nT {
                constructor(e, n, t, r) {
                    var i, o, u, a;
                    let s = -1;
                    if (super(e, n), i = this, r && (i.space = r), "number" == typeof t)
                        for (; ++s < nN.length;) {
                            let e = nN[s];
                            o = this, u = nN[s], (a = (t & l[e]) === l[e]) && (o[u] = a)
                        }
                }
            }
            n_.prototype.defined = !0;
            let nj = {}.hasOwnProperty;

            function nH(e) {
                let n;
                let t = {},
                    r = {};
                for (n in e.properties)
                    if (nj.call(e.properties, n)) {
                        let l = e.properties[n],
                            i = new n_(n, e.transform(e.attributes || {}, n), l, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(n) && (i.mustUseProperty = !0), t[n] = i, r[nF(n)] = n, r[nF(i.attribute)] = n
                    }
                return new nE(t, r, e.space)
            }
            let nU = nH({
                    space: "xlink",
                    transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                nV = nH({
                    space: "xml",
                    transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function nq(e, n) {
                return n in e ? e[n] : n
            }

            function n$(e, n) {
                return nq(e, n.toLowerCase())
            }
            let nW = nH({
                    space: "xmlns",
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    transform: n$,
                    properties: {
                        xmlns: null,
                        xmlnsXLink: null
                    }
                }),
                nQ = nH({
                    transform: (e, n) => "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: nO,
                        ariaAutoComplete: null,
                        ariaBusy: nO,
                        ariaChecked: nO,
                        ariaColCount: nL,
                        ariaColIndex: nL,
                        ariaColSpan: nL,
                        ariaControls: nz,
                        ariaCurrent: null,
                        ariaDescribedBy: nz,
                        ariaDetails: null,
                        ariaDisabled: nO,
                        ariaDropEffect: nz,
                        ariaErrorMessage: null,
                        ariaExpanded: nO,
                        ariaFlowTo: nz,
                        ariaGrabbed: nO,
                        ariaHasPopup: null,
                        ariaHidden: nO,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: nz,
                        ariaLevel: nL,
                        ariaLive: null,
                        ariaModal: nO,
                        ariaMultiLine: nO,
                        ariaMultiSelectable: nO,
                        ariaOrientation: null,
                        ariaOwns: nz,
                        ariaPlaceholder: null,
                        ariaPosInSet: nL,
                        ariaPressed: nO,
                        ariaReadOnly: nO,
                        ariaRelevant: null,
                        ariaRequired: nO,
                        ariaRoleDescription: nz,
                        ariaRowCount: nL,
                        ariaRowIndex: nL,
                        ariaRowSpan: nL,
                        ariaSelected: nO,
                        ariaSetSize: nL,
                        ariaSort: null,
                        ariaValueMax: nL,
                        ariaValueMin: nL,
                        ariaValueNow: nL,
                        ariaValueText: null,
                        role: null
                    }
                }),
                nY = nH({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: n$,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: nM,
                        acceptCharset: nz,
                        accessKey: nz,
                        action: null,
                        allow: null,
                        allowFullScreen: nD,
                        allowPaymentRequest: nD,
                        allowUserMedia: nD,
                        alt: null,
                        as: null,
                        async: nD,
                        autoCapitalize: null,
                        autoComplete: nz,
                        autoFocus: nD,
                        autoPlay: nD,
                        capture: nD,
                        charSet: null,
                        checked: nD,
                        cite: null,
                        className: nz,
                        cols: nL,
                        colSpan: null,
                        content: null,
                        contentEditable: nO,
                        controls: nD,
                        controlsList: nz,
                        coords: nL | nM,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: nD,
                        defer: nD,
                        dir: null,
                        dirName: null,
                        disabled: nD,
                        download: nI,
                        draggable: nO,
                        encType: null,
                        enterKeyHint: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: nD,
                        formTarget: null,
                        headers: nz,
                        height: nL,
                        hidden: nD,
                        high: nL,
                        href: null,
                        hrefLang: null,
                        htmlFor: nz,
                        httpEquiv: nz,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: nD,
                        itemId: null,
                        itemProp: nz,
                        itemRef: nz,
                        itemScope: nD,
                        itemType: nz,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: nD,
                        low: nL,
                        manifest: null,
                        max: null,
                        maxLength: nL,
                        media: null,
                        method: null,
                        min: null,
                        minLength: nL,
                        multiple: nD,
                        muted: nD,
                        name: null,
                        nonce: null,
                        noModule: nD,
                        noValidate: nD,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: nD,
                        optimum: nL,
                        pattern: null,
                        ping: nz,
                        placeholder: null,
                        playsInline: nD,
                        poster: null,
                        preload: null,
                        readOnly: nD,
                        referrerPolicy: null,
                        rel: nz,
                        required: nD,
                        reversed: nD,
                        rows: nL,
                        rowSpan: nL,
                        sandbox: nz,
                        scope: null,
                        scoped: nD,
                        seamless: nD,
                        selected: nD,
                        shape: null,
                        size: nL,
                        sizes: null,
                        slot: null,
                        span: nL,
                        spellCheck: nO,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: nL,
                        step: null,
                        style: null,
                        tabIndex: nL,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: nD,
                        useMap: null,
                        value: nO,
                        width: nL,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: nz,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: nL,
                        borderColor: null,
                        bottomMargin: nL,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: nD,
                        declare: nD,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: nL,
                        leftMargin: nL,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: nL,
                        marginWidth: nL,
                        noResize: nD,
                        noHref: nD,
                        noShade: nD,
                        noWrap: nD,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: nL,
                        rules: null,
                        scheme: null,
                        scrolling: nO,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: nL,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: nL,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: nD,
                        disableRemotePlayback: nD,
                        prefix: null,
                        property: null,
                        results: nL,
                        security: null,
                        unselectable: null
                    }
                }),
                nK = nH({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: nq,
                    properties: {
                        about: nR,
                        accentHeight: nL,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: nL,
                        amplitude: nL,
                        arabicForm: null,
                        ascent: nL,
                        attributeName: null,
                        attributeType: null,
                        azimuth: nL,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: nL,
                        by: null,
                        calcMode: null,
                        capHeight: nL,
                        className: nz,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: nL,
                        diffuseConstant: nL,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: nL,
                        dominantBaseline: null,
                        download: nD,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: nL,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: nL,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: nL,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: nM,
                        g2: nM,
                        glyphName: nM,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: nL,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: nL,
                        horizOriginX: nL,
                        horizOriginY: nL,
                        id: null,
                        ideographic: nL,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: nL,
                        k: nL,
                        k1: nL,
                        k2: nL,
                        k3: nL,
                        k4: nL,
                        kernelMatrix: nR,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: nL,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: nL,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: nL,
                        overlineThickness: nL,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: nL,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: nz,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: nL,
                        pointsAtY: nL,
                        pointsAtZ: nL,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: nR,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: nR,
                        rev: nR,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: nR,
                        requiredFeatures: nR,
                        requiredFonts: nR,
                        requiredFormats: nR,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: nL,
                        specularExponent: nL,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: nL,
                        strikethroughThickness: nL,
                        string: null,
                        stroke: null,
                        strokeDashArray: nR,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: nL,
                        strokeOpacity: nL,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: nL,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: nR,
                        tabIndex: nL,
                        tableValues: null,
                        target: null,
                        targetX: nL,
                        targetY: nL,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: nR,
                        to: null,
                        transform: null,
                        u1: null,
                        u2: null,
                        underlinePosition: nL,
                        underlineThickness: nL,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: nL,
                        values: null,
                        vAlphabetic: nL,
                        vMathematical: nL,
                        vectorEffect: null,
                        vHanging: nL,
                        vIdeographic: nL,
                        version: null,
                        vertAdvY: nL,
                        vertOriginX: nL,
                        vertOriginY: nL,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: nL,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                nX = nA([nV, nU, nW, nQ, nY], "html"),
                nZ = nA([nV, nU, nW, nQ, nK], "svg");

            function nJ(e) {
                if (e.allowedElements && e.disallowedElements) throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
                if (e.allowedElements || e.disallowedElements || e.allowElement) return n => {
                    nl(n, "element", (n, t, r) => {
                        let l;
                        if (e.allowedElements ? l = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (l = e.disallowedElements.includes(n.tagName)), !l && e.allowElement && "number" == typeof t && (l = !e.allowElement(n, t, r)), l && "number" == typeof t) return e.unwrapDisallowed && n.children ? r.children.splice(t, 1, ...n.children) : r.children.splice(t, 1), t
                    })
                }
            }
            var nG = t(2143);
            let n1 = /^data[-\w.:]+$/i,
                n0 = /-[a-z]/g,
                n2 = /[A-Z]/g;

            function n4(e) {
                return "-" + e.toLowerCase()
            }

            function n3(e) {
                return e.charAt(1).toUpperCase()
            }
            let n6 = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var n5 = t(7848);
            let n9 = ["http", "https", "mailto", "tel"];

            function n7(e) {
                let n = (e || "").trim(),
                    t = n.charAt(0);
                if ("#" === t || "/" === t) return n;
                let r = n.indexOf(":");
                if (-1 === r) return n;
                let l = -1;
                for (; ++l < n9.length;) {
                    let e = n9[l];
                    if (r === e.length && n.slice(0, e.length).toLowerCase() === e) return n
                }
                return -1 !== (l = n.indexOf("?")) && r > l || -1 !== (l = n.indexOf("#")) && r > l ? n : "javascript:void(0)"
            }
            let n8 = {}.hasOwnProperty,
                te = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function tn(e, n) {
                let t = -1,
                    r = 0;
                for (; ++t < e.children.length && e.children[t] !== n;) "element" === e.children[t].type && r++;
                return r
            }

            function tt(e, n) {
                return n.toUpperCase()
            }
            let tr = {}.hasOwnProperty,
                tl = {
                    plugins: {
                        to: "remarkPlugins",
                        id: "change-plugins-to-remarkplugins"
                    },
                    renderers: {
                        to: "components",
                        id: "change-renderers-to-components"
                    },
                    astPlugins: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    allowDangerousHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    escapeHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    source: {
                        to: "children",
                        id: "change-source-to-children"
                    },
                    allowNode: {
                        to: "allowElement",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    allowedTypes: {
                        to: "allowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    disallowedTypes: {
                        to: "disallowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    includeNodeIndex: {
                        to: "includeElementIndex",
                        id: "change-includenodeindex-to-includeelementindex"
                    }
                };

            function ti(e) {
                for (let n in tl)
                    if (tr.call(tl, n) && tr.call(e, n)) {
                        let e = tl[n];
                        console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${n}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete tl[n]
                    }
                let n = C().use(e7).use(e.remarkPlugins || []).use(nw, { ...e.remarkRehypeOptions,
                        allowDangerousHtml: !0
                    }).use(e.rehypePlugins || []).use(nJ, e),
                    t = new y;
                "string" == typeof e.children ? t.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
                let r = n.runSync(n.parse(t), t);
                if ("root" !== r.type) throw TypeError("Expected a `root` node");
                let l = i.createElement(i.Fragment, {}, function e(n, t) {
                    let r;
                    let l = [],
                        o = -1;
                    for (; ++o < t.children.length;) "element" === (r = t.children[o]).type ? l.push(function(n, t, r, l) {
                        let o;
                        let u = n.options,
                            a = void 0 === u.transformLinkUri ? n7 : u.transformLinkUri,
                            s = n.schema,
                            c = t.tagName,
                            f = {},
                            p = s;
                        if ("html" === s.space && "svg" === c && (p = nZ, n.schema = p), t.properties)
                            for (o in t.properties) n8.call(t.properties, o) && function(e, n, t, r) {
                                let l = function(e, n) {
                                        let t = nF(n),
                                            r = n,
                                            l = nT;
                                        if (t in e.normal) return e.property[e.normal[t]];
                                        if (t.length > 4 && "data" === t.slice(0, 4) && n1.test(n)) {
                                            if ("-" === n.charAt(4)) {
                                                let e = n.slice(5).replace(n0, n3);
                                                r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                                            } else {
                                                let e = n.slice(4);
                                                if (!n0.test(e)) {
                                                    let t = e.replace(n2, n4);
                                                    "-" !== t.charAt(0) && (t = "-" + t), n = "data" + t
                                                }
                                            }
                                            l = n_
                                        }
                                        return new l(r, n)
                                    }(r.schema, n),
                                    i = t;
                                null != i && i == i && (Array.isArray(i) && (i = l.commaSeparated ? function(e, n) {
                                    let t = {},
                                        r = "" === e[e.length - 1] ? [...e, ""] : e;
                                    return r.join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " ")).trim()
                                }(i) : i.join(" ").trim()), "style" === l.property && "string" == typeof i && (i = function(e) {
                                    let n = {};
                                    try {
                                        n5(e, function(e, t) {
                                            let r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                                            n[r.replace(/-([a-z])/g, tt)] = t
                                        })
                                    } catch {}
                                    return n
                                }(i)), l.space && l.property ? e[n8.call(n6, l.property) ? n6[l.property] : l.property] = i : l.attribute && (e[l.attribute] = i))
                            }(f, o, t.properties[o], n);
                        ("ol" === c || "ul" === c) && n.listDepth++;
                        let d = e(n, t);
                        ("ol" === c || "ul" === c) && n.listDepth--, n.schema = s;
                        let h = t.position || {
                                start: {
                                    line: null,
                                    column: null,
                                    offset: null
                                },
                                end: {
                                    line: null,
                                    column: null,
                                    offset: null
                                }
                            },
                            m = u.components && n8.call(u.components, c) ? u.components[c] : c,
                            g = "string" == typeof m || m === i.Fragment;
                        if (!nG.isValidElementType(m)) throw TypeError(`Component for name \`${c}\` not defined or is not renderable`);
                        if (f.key = [c, h.start.line, h.start.column, r].join("-"), "a" === c && u.linkTarget && (f.target = "function" == typeof u.linkTarget ? u.linkTarget(String(f.href || ""), t.children, "string" == typeof f.title ? f.title : null) : u.linkTarget), "a" === c && a && (f.href = a(String(f.href || ""), t.children, "string" == typeof f.title ? f.title : null)), g || "code" !== c || "element" !== l.type || "pre" === l.tagName || (f.inline = !0), g || "h1" !== c && "h2" !== c && "h3" !== c && "h4" !== c && "h5" !== c && "h6" !== c || (f.level = Number.parseInt(c.charAt(1), 10)), "img" === c && u.transformImageUri && (f.src = u.transformImageUri(String(f.src || ""), String(f.alt || ""), "string" == typeof f.title ? f.title : null)), !g && "li" === c && "element" === l.type) {
                            let e = function(e) {
                                let n = -1;
                                for (; ++n < e.children.length;) {
                                    let t = e.children[n];
                                    if ("element" === t.type && "input" === t.tagName) return t
                                }
                                return null
                            }(t);
                            f.checked = e && e.properties ? Boolean(e.properties.checked) : null, f.index = tn(l, t), f.ordered = "ol" === l.tagName
                        }
                        return g || "ol" !== c && "ul" !== c || (f.ordered = "ol" === c, f.depth = n.listDepth), "td" !== c && "th" !== c || (f.align && (f.style || (f.style = {}), f.style.textAlign = f.align, delete f.align), g || (f.isHeader = "th" === c)), g || "tr" !== c || "element" !== l.type || (f.isHeader = Boolean("thead" === l.tagName)), u.sourcePos && (f["data-sourcepos"] = [h.start.line, ":", h.start.column, "-", h.end.line, ":", h.end.column].map(String).join("")), !g && u.rawSourcePos && (f.sourcePosition = t.position), !g && u.includeElementIndex && (f.index = tn(l, t), f.siblingCount = tn(l)), g || (f.node = t), d.length > 0 ? i.createElement(m, f, d) : i.createElement(m, f)
                    }(n, r, o, t)) : "text" === r.type ? "element" === t.type && te.has(t.tagName) && function(e) {
                        let n = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
                        return "string" == typeof n && "" === n.replace(/[ \t\n\f\r]/g, "")
                    }(r) || l.push(r.value) : "raw" !== r.type || n.options.skipHtml || l.push(r.value);
                    return l
                }({
                    options: e,
                    schema: nX,
                    listDepth: 0
                }, r));
                return e.className && (l = i.createElement("div", {
                    className: e.className
                }, l)), l
            }
            ti.propTypes = {
                children: nC.string,
                className: nC.string,
                allowElement: nC.func,
                allowedElements: nC.arrayOf(nC.string),
                disallowedElements: nC.arrayOf(nC.string),
                unwrapDisallowed: nC.bool,
                remarkPlugins: nC.arrayOf(nC.oneOfType([nC.object, nC.func, nC.arrayOf(nC.oneOfType([nC.bool, nC.string, nC.object, nC.func, nC.arrayOf(nC.any)]))])),
                rehypePlugins: nC.arrayOf(nC.oneOfType([nC.object, nC.func, nC.arrayOf(nC.oneOfType([nC.bool, nC.string, nC.object, nC.func, nC.arrayOf(nC.any)]))])),
                sourcePos: nC.bool,
                rawSourcePos: nC.bool,
                skipHtml: nC.bool,
                includeElementIndex: nC.bool,
                transformLinkUri: nC.oneOfType([nC.func, nC.bool]),
                linkTarget: nC.oneOfType([nC.func, nC.string]),
                transformImageUri: nC.func,
                components: nC.object
            }
        }
    }
]);