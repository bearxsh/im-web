! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIM = t()
}(this, (function() {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = function(e) {
            return e && e.Math == Math && e
        },
        o = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        r = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        },
        a = !r((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        s = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        c = {
            f: i && !s.call({
                1: 2
            }, 1) ? function(e) {
                var t = i(this, e);
                return !!t && t.enumerable
            } : s
        },
        u = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        l = {}.toString,
        d = function(e) {
            return l.call(e).slice(8, -1)
        },
        p = "".split,
        g = r((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == d(e) ? p.call(e, "") : Object(e)
        } : Object,
        h = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        f = function(e) {
            return g(h(e))
        },
        _ = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        m = function(e, t) {
            if (!_(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !_(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !_(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !_(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        },
        v = {}.hasOwnProperty,
        M = function(e, t) {
            return v.call(e, t)
        },
        y = o.document,
        I = _(y) && _(y.createElement),
        S = function(e) {
            return I ? y.createElement(e) : {}
        },
        T = !a && !r((function() {
            return 7 != Object.defineProperty(S("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        E = Object.getOwnPropertyDescriptor,
        D = {
            f: a ? E : function(e, t) {
                if (e = f(e), t = m(t, !0), T) try {
                    return E(e, t)
                } catch (n) {}
                if (M(e, t)) return u(!c.f.call(e, t), e[t])
            }
        },
        k = function(e) {
            if (!_(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        C = Object.defineProperty,
        N = {
            f: a ? C : function(e, t, n) {
                if (k(e), t = m(t, !0), k(n), T) try {
                    return C(e, t, n)
                } catch (o) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        A = a ? function(e, t, n) {
            return N.f(e, t, u(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        O = function(e, t) {
            try {
                A(o, e, t)
            } catch (n) {
                o[e] = t
            }
            return t
        },
        L = o["__core-js_shared__"] || O("__core-js_shared__", {}),
        R = Function.toString;
    "function" != typeof L.inspectSource && (L.inspectSource = function(e) {
        return R.call(e)
    });
    var w, b, P, G = L.inspectSource,
        U = o.WeakMap,
        F = "function" == typeof U && /native code/.test(G(U)),
        q = t((function(e) {
            (e.exports = function(e, t) {
                return L[e] || (L[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.4",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        x = 0,
        V = Math.random(),
        K = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++x + V).toString(36)
        },
        B = q("keys"),
        j = function(e) {
            return B[e] || (B[e] = K(e))
        },
        H = {},
        $ = o.WeakMap;
    if (F) {
        var Y = new $,
            z = Y.get,
            W = Y.has,
            J = Y.set;
        w = function(e, t) {
            return J.call(Y, e, t), t
        }, b = function(e) {
            return z.call(Y, e) || {}
        }, P = function(e) {
            return W.call(Y, e)
        }
    } else {
        var X = j("state");
        H[X] = !0, w = function(e, t) {
            return A(e, X, t), t
        }, b = function(e) {
            return M(e, X) ? e[X] : {}
        }, P = function(e) {
            return M(e, X)
        }
    }
    var Q, Z, ee = {
            set: w,
            get: b,
            has: P,
            enforce: function(e) {
                return P(e) ? b(e) : w(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!_(t) || (n = b(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        te = t((function(e) {
            var t = ee.get,
                n = ee.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, a, s) {
                var i = !!s && !!s.unsafe,
                    c = !!s && !!s.enumerable,
                    u = !!s && !!s.noTargetGet;
                "function" == typeof a && ("string" != typeof t || M(a, "name") || A(a, "name", t), n(a).source = r.join("string" == typeof t ? t : "")), e !== o ? (i ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = a : A(e, t, a)) : c ? e[t] = a : O(t, a)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || G(this)
            }))
        })),
        ne = o,
        oe = function(e) {
            return "function" == typeof e ? e : void 0
        },
        re = function(e, t) {
            return arguments.length < 2 ? oe(ne[e]) || oe(o[e]) : ne[e] && ne[e][t] || o[e] && o[e][t]
        },
        ae = Math.ceil,
        se = Math.floor,
        ie = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? se : ae)(e)
        },
        ce = Math.min,
        ue = function(e) {
            return e > 0 ? ce(ie(e), 9007199254740991) : 0
        },
        le = Math.max,
        de = Math.min,
        pe = function(e, t) {
            var n = ie(e);
            return n < 0 ? le(n + t, 0) : de(n, t)
        },
        ge = function(e) {
            return function(t, n, o) {
                var r, a = f(t),
                    s = ue(a.length),
                    i = pe(o, s);
                if (e && n != n) {
                    for (; s > i;)
                        if ((r = a[i++]) != r) return !0
                } else
                    for (; s > i; i++)
                        if ((e || i in a) && a[i] === n) return e || i || 0;
                return !e && -1
            }
        },
        he = {
            includes: ge(!0),
            indexOf: ge(!1)
        },
        fe = he.indexOf,
        _e = function(e, t) {
            var n, o = f(e),
                r = 0,
                a = [];
            for (n in o) !M(H, n) && M(o, n) && a.push(n);
            for (; t.length > r;) M(o, n = t[r++]) && (~fe(a, n) || a.push(n));
            return a
        },
        me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ve = me.concat("length", "prototype"),
        Me = {
            f: Object.getOwnPropertyNames || function(e) {
                return _e(e, ve)
            }
        },
        ye = {
            f: Object.getOwnPropertySymbols
        },
        Ie = re("Reflect", "ownKeys") || function(e) {
            var t = Me.f(k(e)),
                n = ye.f;
            return n ? t.concat(n(e)) : t
        },
        Se = function(e, t) {
            for (var n = Ie(t), o = N.f, r = D.f, a = 0; a < n.length; a++) {
                var s = n[a];
                M(e, s) || o(e, s, r(t, s))
            }
        },
        Te = /#|\.prototype\./,
        Ee = function(e, t) {
            var n = ke[De(e)];
            return n == Ne || n != Ce && ("function" == typeof t ? r(t) : !!t)
        },
        De = Ee.normalize = function(e) {
            return String(e).replace(Te, ".").toLowerCase()
        },
        ke = Ee.data = {},
        Ce = Ee.NATIVE = "N",
        Ne = Ee.POLYFILL = "P",
        Ae = Ee,
        Oe = D.f,
        Le = function(e, t) {
            var n, r, a, s, i, c = e.target,
                u = e.global,
                l = e.stat;
            if (n = u ? o : l ? o[c] || O(c, {}) : (o[c] || {}).prototype)
                for (r in t) {
                    if (s = t[r], a = e.noTargetGet ? (i = Oe(n, r)) && i.value : n[r], !Ae(u ? r : c + (l ? "." : "#") + r, e.forced) && void 0 !== a) {
                        if (typeof s == typeof a) continue;
                        Se(s, a)
                    }(e.sham || a && a.sham) && A(s, "sham", !0), te(n, r, s, e)
                }
        },
        Re = Array.isArray || function(e) {
            return "Array" == d(e)
        },
        we = function(e) {
            return Object(h(e))
        },
        be = function(e, t, n) {
            var o = m(t);
            o in e ? N.f(e, o, u(0, n)) : e[o] = n
        },
        Pe = !!Object.getOwnPropertySymbols && !r((function() {
            return !String(Symbol())
        })),
        Ge = Pe && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ue = q("wks"),
        Fe = o.Symbol,
        qe = Ge ? Fe : Fe && Fe.withoutSetter || K,
        xe = function(e) {
            return M(Ue, e) || (Pe && M(Fe, e) ? Ue[e] = Fe[e] : Ue[e] = qe("Symbol." + e)), Ue[e]
        },
        Ve = xe("species"),
        Ke = function(e, t) {
            var n;
            return Re(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Re(n.prototype) ? _(n) && null === (n = n[Ve]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        Be = re("navigator", "userAgent") || "",
        je = o.process,
        He = je && je.versions,
        $e = He && He.v8;
    $e ? Z = (Q = $e.split("."))[0] + Q[1] : Be && (!(Q = Be.match(/Edge\/(\d+)/)) || Q[1] >= 74) && (Q = Be.match(/Chrome\/(\d+)/)) && (Z = Q[1]);
    var Ye = Z && +Z,
        ze = xe("species"),
        We = function(e) {
            return Ye >= 51 || !r((function() {
                var t = [];
                return (t.constructor = {})[ze] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Je = xe("isConcatSpreadable"),
        Xe = Ye >= 51 || !r((function() {
            var e = [];
            return e[Je] = !1, e.concat()[0] !== e
        })),
        Qe = We("concat"),
        Ze = function(e) {
            if (!_(e)) return !1;
            var t = e[Je];
            return void 0 !== t ? !!t : Re(e)
        };
    Le({
        target: "Array",
        proto: !0,
        forced: !Xe || !Qe
    }, {
        concat: function(e) {
            var t, n, o, r, a, s = we(this),
                i = Ke(s, 0),
                c = 0;
            for (t = -1, o = arguments.length; t < o; t++)
                if (a = -1 === t ? s : arguments[t], Ze(a)) {
                    if (c + (r = ue(a.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < r; n++, c++) n in a && be(i, c, a[n])
                } else {
                    if (c >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    be(i, c++, a)
                } return i.length = c, i
        }
    });
    var et = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        nt = function(e, t, n) {
            if (et(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, o) {
                        return e.call(t, n, o)
                    };
                case 3:
                    return function(n, o, r) {
                        return e.call(t, n, o, r)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        ot = [].push,
        rt = function(e) {
            var t = 1 == e,
                n = 2 == e,
                o = 3 == e,
                r = 4 == e,
                a = 6 == e,
                s = 5 == e || a;
            return function(i, c, u, l) {
                for (var d, p, h = we(i), f = g(h), _ = nt(c, u, 3), m = ue(f.length), v = 0, M = l || Ke, y = t ? M(i, m) : n ? M(i, 0) : void 0; m > v; v++)
                    if ((s || v in f) && (p = _(d = f[v], v, h), e))
                        if (t) y[v] = p;
                        else if (p) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return d;
                            case 6:
                                return v;
                            case 2:
                                ot.call(y, d)
                        } else if (r) return !1;
                return a ? -1 : o || r ? r : y
            }
        },
        at = {
            forEach: rt(0),
            map: rt(1),
            filter: rt(2),
            some: rt(3),
            every: rt(4),
            find: rt(5),
            findIndex: rt(6)
        },
        st = function(e, t) {
            var n = [][e];
            return !!n && r((function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            }))
        },
        it = Object.defineProperty,
        ct = {},
        ut = function(e) {
            throw e
        },
        lt = function(e, t) {
            if (M(ct, e)) return ct[e];
            t || (t = {});
            var n = [][e],
                o = !!M(t, "ACCESSORS") && t.ACCESSORS,
                s = M(t, 0) ? t[0] : ut,
                i = M(t, 1) ? t[1] : void 0;
            return ct[e] = !!n && !r((function() {
                if (o && !a) return !0;
                var e = {
                    length: -1
                };
                o ? it(e, 1, {
                    enumerable: !0,
                    get: ut
                }) : e[1] = 1, n.call(e, s, i)
            }))
        },
        dt = at.forEach,
        pt = st("forEach"),
        gt = lt("forEach"),
        ht = pt && gt ? [].forEach : function(e) {
            return dt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    Le({
        target: "Array",
        proto: !0,
        forced: [].forEach != ht
    }, {
        forEach: ht
    });
    var ft = function(e, t, n, o) {
            try {
                return o ? t(k(n)[0], n[1]) : t(n)
            } catch (a) {
                var r = e.return;
                throw void 0 !== r && k(r.call(e)), a
            }
        },
        _t = {},
        mt = xe("iterator"),
        vt = Array.prototype,
        Mt = function(e) {
            return void 0 !== e && (_t.Array === e || vt[mt] === e)
        },
        yt = {};
    yt[xe("toStringTag")] = "z";
    var It = "[object z]" === String(yt),
        St = xe("toStringTag"),
        Tt = "Arguments" == d(function() {
            return arguments
        }()),
        Et = It ? d : function(e) {
            var t, n, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (n) {}
            }(t = Object(e), St)) ? n : Tt ? d(t) : "Object" == (o = d(t)) && "function" == typeof t.callee ? "Arguments" : o
        },
        Dt = xe("iterator"),
        kt = function(e) {
            if (null != e) return e[Dt] || e["@@iterator"] || _t[Et(e)]
        },
        Ct = function(e) {
            var t, n, o, r, a, s, i = we(e),
                c = "function" == typeof this ? this : Array,
                u = arguments.length,
                l = u > 1 ? arguments[1] : void 0,
                d = void 0 !== l,
                p = kt(i),
                g = 0;
            if (d && (l = nt(l, u > 2 ? arguments[2] : void 0, 2)), null == p || c == Array && Mt(p))
                for (n = new c(t = ue(i.length)); t > g; g++) s = d ? l(i[g], g) : i[g], be(n, g, s);
            else
                for (a = (r = p.call(i)).next, n = new c; !(o = a.call(r)).done; g++) s = d ? ft(r, l, [o.value, g], !0) : o.value, be(n, g, s);
            return n.length = g, n
        },
        Nt = xe("iterator"),
        At = !1;
    try {
        var Ot = 0,
            Lt = {
                next: function() {
                    return {
                        done: !!Ot++
                    }
                },
                return: function() {
                    At = !0
                }
            };
        Lt[Nt] = function() {
            return this
        }, Array.from(Lt, (function() {
            throw 2
        }))
    } catch (Ov) {}
    var Rt = function(e, t) {
            if (!t && !At) return !1;
            var n = !1;
            try {
                var o = {};
                o[Nt] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(o)
            } catch (Ov) {}
            return n
        },
        wt = !Rt((function(e) {
            Array.from(e)
        }));
    Le({
        target: "Array",
        stat: !0,
        forced: wt
    }, {
        from: Ct
    });
    var bt, Pt = Object.keys || function(e) {
            return _e(e, me)
        },
        Gt = a ? Object.defineProperties : function(e, t) {
            k(e);
            for (var n, o = Pt(t), r = o.length, a = 0; r > a;) N.f(e, n = o[a++], t[n]);
            return e
        },
        Ut = re("document", "documentElement"),
        Ft = j("IE_PROTO"),
        qt = function() {},
        xt = function(e) {
            return "<script>" + e + "<\/script>"
        },
        Vt = function() {
            try {
                bt = document.domain && new ActiveXObject("htmlfile")
            } catch (Ov) {}
            var e, t;
            Vt = bt ? function(e) {
                e.write(xt("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(bt) : ((t = S("iframe")).style.display = "none", Ut.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(xt("document.F=Object")), e.close(), e.F);
            for (var n = me.length; n--;) delete Vt.prototype[me[n]];
            return Vt()
        };
    H[Ft] = !0;
    var Kt = Object.create || function(e, t) {
        var n;
        return null !== e ? (qt.prototype = k(e), n = new qt, qt.prototype = null, n[Ft] = e) : n = Vt(), void 0 === t ? n : Gt(n, t)
    };
    Le({
        target: "Object",
        stat: !0,
        sham: !a
    }, {
        create: Kt
    });
    var Bt = r((function() {
        Pt(1)
    }));
    Le({
        target: "Object",
        stat: !0,
        forced: Bt
    }, {
        keys: function(e) {
            return Pt(we(e))
        }
    });
    var jt = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Ht = "[" + jt + "]",
        $t = RegExp("^" + Ht + Ht + "*"),
        Yt = RegExp(Ht + Ht + "*$"),
        zt = function(e) {
            return function(t) {
                var n = String(h(t));
                return 1 & e && (n = n.replace($t, "")), 2 & e && (n = n.replace(Yt, "")), n
            }
        },
        Wt = {
            start: zt(1),
            end: zt(2),
            trim: zt(3)
        },
        Jt = Wt.trim,
        Xt = o.parseInt,
        Qt = /^[+-]?0[Xx]/,
        Zt = 8 !== Xt(jt + "08") || 22 !== Xt(jt + "0x16") ? function(e, t) {
            var n = Jt(String(e));
            return Xt(n, t >>> 0 || (Qt.test(n) ? 16 : 10))
        } : Xt;
    Le({
        global: !0,
        forced: parseInt != Zt
    }, {
        parseInt: Zt
    });
    var en, tn, nn, on = function(e) {
            return function(t, n) {
                var o, r, a = String(h(t)),
                    s = ie(n),
                    i = a.length;
                return s < 0 || s >= i ? e ? "" : void 0 : (o = a.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === i || (r = a.charCodeAt(s + 1)) < 56320 || r > 57343 ? e ? a.charAt(s) : o : e ? a.slice(s, s + 2) : r - 56320 + (o - 55296 << 10) + 65536
            }
        },
        rn = {
            codeAt: on(!1),
            charAt: on(!0)
        },
        an = !r((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        sn = j("IE_PROTO"),
        cn = Object.prototype,
        un = an ? Object.getPrototypeOf : function(e) {
            return e = we(e), M(e, sn) ? e[sn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? cn : null
        },
        ln = xe("iterator"),
        dn = !1;
    [].keys && ("next" in (nn = [].keys()) ? (tn = un(un(nn))) !== Object.prototype && (en = tn) : dn = !0), null == en && (en = {}), M(en, ln) || A(en, ln, (function() {
        return this
    }));
    var pn = {
            IteratorPrototype: en,
            BUGGY_SAFARI_ITERATORS: dn
        },
        gn = N.f,
        hn = xe("toStringTag"),
        fn = function(e, t, n) {
            e && !M(e = n ? e : e.prototype, hn) && gn(e, hn, {
                configurable: !0,
                value: t
            })
        },
        _n = pn.IteratorPrototype,
        mn = function() {
            return this
        },
        vn = function(e, t, n) {
            var o = t + " Iterator";
            return e.prototype = Kt(_n, {
                next: u(1, n)
            }), fn(e, o, !1), _t[o] = mn, e
        },
        Mn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (Ov) {}
            return function(n, o) {
                return k(n),
                    function(e) {
                        if (!_(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(o), t ? e.call(n, o) : n.__proto__ = o, n
            }
        }() : void 0),
        yn = pn.IteratorPrototype,
        In = pn.BUGGY_SAFARI_ITERATORS,
        Sn = xe("iterator"),
        Tn = function() {
            return this
        },
        En = function(e, t, n, o, r, a, s) {
            vn(n, t, o);
            var i, c, u, l = function(e) {
                    if (e === r && f) return f;
                    if (!In && e in g) return g[e];
                    switch (e) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                d = t + " Iterator",
                p = !1,
                g = e.prototype,
                h = g[Sn] || g["@@iterator"] || r && g[r],
                f = !In && h || l(r),
                _ = "Array" == t && g.entries || h;
            if (_ && (i = un(_.call(new e)), yn !== Object.prototype && i.next && (un(i) !== yn && (Mn ? Mn(i, yn) : "function" != typeof i[Sn] && A(i, Sn, Tn)), fn(i, d, !0))), "values" == r && h && "values" !== h.name && (p = !0, f = function() {
                return h.call(this)
            }), g[Sn] !== f && A(g, Sn, f), _t[t] = f, r)
                if (c = {
                    values: l("values"),
                    keys: a ? f : l("keys"),
                    entries: l("entries")
                }, s)
                    for (u in c)(In || p || !(u in g)) && te(g, u, c[u]);
                else Le({
                    target: t,
                    proto: !0,
                    forced: In || p
                }, c);
            return c
        },
        Dn = rn.charAt,
        kn = ee.set,
        Cn = ee.getterFor("String Iterator");
    En(String, "String", (function(e) {
        kn(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, t = Cn(this),
            n = t.string,
            o = t.index;
        return o >= n.length ? {
            value: void 0,
            done: !0
        } : (e = Dn(n, o), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var Nn = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var An in Nn) {
        var On = o[An],
            Ln = On && On.prototype;
        if (Ln && Ln.forEach !== ht) try {
            A(Ln, "forEach", ht)
        } catch (Ov) {
            Ln.forEach = ht
        }
    }

    function Rn(e) {
        return (Rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function wn(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function bn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function Pn(e, t, n) {
        return t && bn(e.prototype, t), n && bn(e, n), e
    }

    function Gn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Un(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
        }
        return n
    }

    function Fn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Un(Object(n), !0).forEach((function(t) {
                Gn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function qn(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && Vn(e, t)
    }

    function xn(e) {
        return (xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Vn(e, t) {
        return (Vn = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Kn() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function Bn(e, t, n) {
        return (Bn = Kn() ? Reflect.construct : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var r = new(Function.bind.apply(e, o));
            return n && Vn(r, n.prototype), r
        }).apply(null, arguments)
    }

    function jn(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (jn = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o)
            }

            function o() {
                return Bn(e, arguments, xn(this).constructor)
            }
            return o.prototype = Object.create(e.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Vn(o, e)
        })(e)
    }

    function Hn(e, t) {
        if (null == e) return {};
        var n, o, r = function(e, t) {
            if (null == e) return {};
            var n, o, r = {},
                a = Object.keys(e);
            for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }

    function $n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Yn(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? $n(e) : t
    }

    function zn(e) {
        return function() {
            var t, n = xn(e);
            if (Kn()) {
                var o = xn(this).constructor;
                t = Reflect.construct(n, arguments, o)
            } else t = n.apply(this, arguments);
            return Yn(this, t)
        }
    }

    function Wn(e, t) {
        return Xn(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                o = !0,
                r = !1,
                a = void 0;
            try {
                for (var s, i = e[Symbol.iterator](); !(o = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
            } catch (c) {
                r = !0, a = c
            } finally {
                try {
                    o || null == i.return || i.return()
                } finally {
                    if (r) throw a
                }
            }
            return n
        }(e, t) || Zn(e, t) || to()
    }

    function Jn(e) {
        return function(e) {
            if (Array.isArray(e)) return eo(e)
        }(e) || Qn(e) || Zn(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Xn(e) {
        if (Array.isArray(e)) return e
    }

    function Qn(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }

    function Zn(e, t) {
        if (e) {
            if ("string" == typeof e) return eo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? eo(e, t) : void 0
        }
    }

    function eo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function to() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function no(e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (e = Zn(e))) {
                var t = 0,
                    n = function() {};
                return {
                    s: n,
                    n: function() {
                        return t >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[t++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: n
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, r, a = !0,
            s = !1;
        return {
            s: function() {
                o = e[Symbol.iterator]()
            },
            n: function() {
                var e = o.next();
                return a = e.done, e
            },
            e: function(e) {
                s = !0, r = e
            },
            f: function() {
                try {
                    a || null == o.return || o.return()
                } finally {
                    if (s) throw r
                }
            }
        }
    }
    var oo = {
            SDK_READY: "sdkStateReady",
            SDK_NOT_READY: "sdkStateNotReady",
            SDK_DESTROY: "sdkDestroy",
            MESSAGE_RECEIVED: "onMessageReceived",
            MESSAGE_MODIFIED: "onMessageModified",
            MESSAGE_REVOKED: "onMessageRevoked",
            MESSAGE_READ_BY_PEER: "onMessageReadByPeer",
            CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
            GROUP_LIST_UPDATED: "onGroupListUpdated",
            GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice",
            PROFILE_UPDATED: "onProfileUpdated",
            BLACKLIST_UPDATED: "blacklistUpdated",
            FRIEND_LIST_UPDATED: "onFriendListUpdated",
            FRIEND_GROUP_LIST_UPDATED: "onFriendGroupListUpdated",
            FRIEND_APPLICATION_LIST_UPDATED: "onFriendApplicationListUpdated",
            KICKED_OUT: "kickedOut",
            ERROR: "error",
            NET_STATE_CHANGE: "netStateChange",
            SDK_RELOAD: "sdkReload"
        },
        ro = {
            MSG_TEXT: "TIMTextElem",
            MSG_IMAGE: "TIMImageElem",
            MSG_SOUND: "TIMSoundElem",
            MSG_AUDIO: "TIMSoundElem",
            MSG_FILE: "TIMFileElem",
            MSG_FACE: "TIMFaceElem",
            MSG_VIDEO: "TIMVideoFileElem",
            MSG_GEO: "TIMLocationElem",
            MSG_GRP_TIP: "TIMGroupTipElem",
            MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
            MSG_CUSTOM: "TIMCustomElem",
            MSG_MERGER: "TIMRelayElem",
            MSG_PRIORITY_HIGH: "High",
            MSG_PRIORITY_NORMAL: "Normal",
            MSG_PRIORITY_LOW: "Low",
            MSG_PRIORITY_LOWEST: "Lowest",
            CONV_C2C: "C2C",
            CONV_GROUP: "GROUP",
            CONV_SYSTEM: "@TIM#SYSTEM",
            CONV_AT_ME: 1,
            CONV_AT_ALL: 2,
            CONV_AT_ALL_AT_ME: 3,
            GRP_PRIVATE: "Private",
            GRP_WORK: "Private",
            GRP_PUBLIC: "Public",
            GRP_CHATROOM: "ChatRoom",
            GRP_MEETING: "ChatRoom",
            GRP_AVCHATROOM: "AVChatRoom",
            GRP_MBR_ROLE_OWNER: "Owner",
            GRP_MBR_ROLE_ADMIN: "Admin",
            GRP_MBR_ROLE_MEMBER: "Member",
            GRP_TIP_MBR_JOIN: 1,
            GRP_TIP_MBR_QUIT: 2,
            GRP_TIP_MBR_KICKED_OUT: 3,
            GRP_TIP_MBR_SET_ADMIN: 4,
            GRP_TIP_MBR_CANCELED_ADMIN: 5,
            GRP_TIP_GRP_PROFILE_UPDATED: 6,
            GRP_TIP_MBR_PROFILE_UPDATED: 7,
            MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
            MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
            MSG_REMIND_DISCARD: "Discard",
            GENDER_UNKNOWN: "Gender_Type_Unknown",
            GENDER_FEMALE: "Gender_Type_Female",
            GENDER_MALE: "Gender_Type_Male",
            KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
            KICKED_OUT_MULT_DEVICE: "multipleDevice",
            KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
            ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
            ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
            ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
            FORBID_TYPE_NONE: "AdminForbid_Type_None",
            FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
            JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
            JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
            JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
            JOIN_STATUS_SUCCESS: "JoinedSuccess",
            JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
            JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
            GRP_PROFILE_OWNER_ID: "ownerID",
            GRP_PROFILE_CREATE_TIME: "createTime",
            GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
            GRP_PROFILE_MEMBER_NUM: "memberNum",
            GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
            GRP_PROFILE_JOIN_OPTION: "joinOption",
            GRP_PROFILE_INTRODUCTION: "introduction",
            GRP_PROFILE_NOTIFICATION: "notification",
            GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers",
            SNS_ADD_TYPE_SINGLE: "Add_Type_Single",
            SNS_ADD_TYPE_BOTH: "Add_Type_Both",
            SNS_DELETE_TYPE_SINGLE: "Delete_Type_Single",
            SNS_DELETE_TYPE_BOTH: "Delete_Type_Both",
            SNS_APPLICATION_TYPE_BOTH: "Pendency_Type_Both",
            SNS_APPLICATION_SENT_TO_ME: "Pendency_Type_ComeIn",
            SNS_APPLICATION_SENT_BY_ME: "Pendency_Type_SendOut",
            SNS_APPLICATION_AGREE: "Response_Action_Agree",
            SNS_APPLICATION_AGREE_AND_ADD: "Response_Action_AgreeAndAdd",
            SNS_CHECK_TYPE_BOTH: "CheckResult_Type_Both",
            SNS_CHECK_TYPE_SINGLE: "CheckResult_Type_Single",
            SNS_TYPE_NO_RELATION: "CheckResult_Type_NoRelation",
            SNS_TYPE_A_WITH_B: "CheckResult_Type_AWithB",
            SNS_TYPE_B_WITH_A: "CheckResult_Type_BWithA",
            SNS_TYPE_BOTH_WAY: "CheckResult_Type_BothWay",
            NET_STATE_CONNECTED: "connected",
            NET_STATE_CONNECTING: "connecting",
            NET_STATE_DISCONNECTED: "disconnected",
            MSG_AT_ALL: "__kImSDK_MesssageAtALL__"
        },
        ao = at.map,
        so = We("map"),
        io = lt("map");
    Le({
        target: "Array",
        proto: !0,
        forced: !so || !io
    }, {
        map: function(e) {
            return ao(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var co = [].slice,
        uo = {},
        lo = function(e, t, n) {
            if (!(t in uo)) {
                for (var o = [], r = 0; r < t; r++) o[r] = "a[" + r + "]";
                uo[t] = Function("C,a", "return new C(" + o.join(",") + ")")
            }
            return uo[t](e, n)
        },
        po = Function.bind || function(e) {
            var t = et(this),
                n = co.call(arguments, 1),
                o = function() {
                    var r = n.concat(co.call(arguments));
                    return this instanceof o ? lo(t, r.length, r) : t.apply(e, r)
                };
            return _(t.prototype) && (o.prototype = t.prototype), o
        };
    Le({
        target: "Function",
        proto: !0
    }, {
        bind: po
    });
    var go = function() {
            function e() {
                wn(this, e), this.cache = [], this.options = null
            }
            return Pn(e, [{
                key: "use",
                value: function(e) {
                    if ("function" != typeof e) throw "middleware must be a function";
                    return this.cache.push(e), this
                }
            }, {
                key: "next",
                value: function(e) {
                    if (this.middlewares && this.middlewares.length > 0) return this.middlewares.shift().call(this, this.options, this.next.bind(this))
                }
            }, {
                key: "run",
                value: function(e) {
                    return this.middlewares = this.cache.map((function(e) {
                        return e
                    })), this.options = e, this.next()
                }
            }]), e
        }(),
        ho = N.f,
        fo = Function.prototype,
        _o = fo.toString,
        mo = /^\s*function ([^ (]*)/;
    a && !("name" in fo) && ho(fo, "name", {
        configurable: !0,
        get: function() {
            try {
                return _o.call(this).match(mo)[1]
            } catch (Ov) {
                return ""
            }
        }
    });
    var vo = t((function(t, n) {
        var o, r, a, s, i, c, u, l, d, p, g, h, f, _, m, v, M, y;
        t.exports = (o = "function" == typeof Promise, r = "object" == typeof self ? self : e, a = "undefined" != typeof Symbol, s = "undefined" != typeof Map, i = "undefined" != typeof Set, c = "undefined" != typeof WeakMap, u = "undefined" != typeof WeakSet, l = "undefined" != typeof DataView, d = a && void 0 !== Symbol.iterator, p = a && void 0 !== Symbol.toStringTag, g = i && "function" == typeof Set.prototype.entries, h = s && "function" == typeof Map.prototype.entries, f = g && Object.getPrototypeOf((new Set).entries()), _ = h && Object.getPrototypeOf((new Map).entries()), m = d && "function" == typeof Array.prototype[Symbol.iterator], v = m && Object.getPrototypeOf([][Symbol.iterator]()), M = d && "function" == typeof String.prototype[Symbol.iterator], y = M && Object.getPrototypeOf("" [Symbol.iterator]()), function(e) {
            var t = typeof e;
            if ("object" !== t) return t;
            if (null === e) return "null";
            if (e === r) return "global";
            if (Array.isArray(e) && (!1 === p || !(Symbol.toStringTag in e))) return "Array";
            if ("object" == typeof window && null !== window) {
                if ("object" == typeof window.location && e === window.location) return "Location";
                if ("object" == typeof window.document && e === window.document) return "Document";
                if ("object" == typeof window.navigator) {
                    if ("object" == typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes) return "MimeTypeArray";
                    if ("object" == typeof window.navigator.plugins && e === window.navigator.plugins) return "PluginArray"
                }
                if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e instanceof window.HTMLElement) {
                    if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement";
                    if ("TD" === e.tagName) return "HTMLTableDataCellElement";
                    if ("TH" === e.tagName) return "HTMLTableHeaderCellElement"
                }
            }
            var n = p && e[Symbol.toStringTag];
            if ("string" == typeof n) return n;
            var a = Object.getPrototypeOf(e);
            return a === RegExp.prototype ? "RegExp" : a === Date.prototype ? "Date" : o && a === Promise.prototype ? "Promise" : i && a === Set.prototype ? "Set" : s && a === Map.prototype ? "Map" : u && a === WeakSet.prototype ? "WeakSet" : c && a === WeakMap.prototype ? "WeakMap" : l && a === DataView.prototype ? "DataView" : s && a === _ ? "Map Iterator" : i && a === f ? "Set Iterator" : m && a === v ? "Array Iterator" : M && a === y ? "String Iterator" : null === a ? "Object" : Object.prototype.toString.call(e).slice(8, -1)
        })
    }));
    Le({
        target: "Array",
        stat: !0
    }, {
        isArray: Re
    });
    var Mo = xe("unscopables"),
        yo = Array.prototype;
    null == yo[Mo] && N.f(yo, Mo, {
        configurable: !0,
        value: Kt(null)
    });
    var Io = function(e) {
            yo[Mo][e] = !0
        },
        So = at.find,
        To = !0,
        Eo = lt("find");
    "find" in [] && Array(1).find((function() {
        To = !1
    })), Le({
        target: "Array",
        proto: !0,
        forced: To || !Eo
    }, {
        find: function(e) {
            return So(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), Io("find");
    var Do = he.includes,
        ko = lt("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Le({
        target: "Array",
        proto: !0,
        forced: !ko
    }, {
        includes: function(e) {
            return Do(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), Io("includes");
    var Co = he.indexOf,
        No = [].indexOf,
        Ao = !!No && 1 / [1].indexOf(1, -0) < 0,
        Oo = st("indexOf"),
        Lo = lt("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Le({
        target: "Array",
        proto: !0,
        forced: Ao || !Oo || !Lo
    }, {
        indexOf: function(e) {
            return Ao ? No.apply(this, arguments) || 0 : Co(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ro = ee.set,
        wo = ee.getterFor("Array Iterator"),
        bo = En(Array, "Array", (function(e, t) {
            Ro(this, {
                type: "Array Iterator",
                target: f(e),
                index: 0,
                kind: t
            })
        }), (function() {
            var e = wo(this),
                t = e.target,
                n = e.kind,
                o = e.index++;
            return !t || o >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: o,
                done: !1
            } : "values" == n ? {
                value: t[o],
                done: !1
            } : {
                value: [o, t[o]],
                done: !1
            }
        }), "values");
    _t.Arguments = _t.Array, Io("keys"), Io("values"), Io("entries");
    var Po = [].join,
        Go = g != Object,
        Uo = st("join", ",");
    Le({
        target: "Array",
        proto: !0,
        forced: Go || !Uo
    }, {
        join: function(e) {
            return Po.call(f(this), void 0 === e ? "," : e)
        }
    });
    var Fo = We("slice"),
        qo = lt("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        xo = xe("species"),
        Vo = [].slice,
        Ko = Math.max;
    Le({
        target: "Array",
        proto: !0,
        forced: !Fo || !qo
    }, {
        slice: function(e, t) {
            var n, o, r, a = f(this),
                s = ue(a.length),
                i = pe(e, s),
                c = pe(void 0 === t ? s : t, s);
            if (Re(a) && ("function" != typeof(n = a.constructor) || n !== Array && !Re(n.prototype) ? _(n) && null === (n = n[xo]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return Vo.call(a, i, c);
            for (o = new(void 0 === n ? Array : n)(Ko(c - i, 0)), r = 0; i < c; i++, r++) i in a && be(o, r, a[i]);
            return o.length = r, o
        }
    }), Le({
        target: "Date",
        stat: !0
    }, {
        now: function() {
            return (new Date).getTime()
        }
    });
    var Bo = "".repeat || function(e) {
            var t = String(h(this)),
                n = "",
                o = ie(e);
            if (o < 0 || Infinity == o) throw RangeError("Wrong number of repetitions");
            for (; o > 0;
                   (o >>>= 1) && (t += t)) 1 & o && (n += t);
            return n
        },
        jo = Math.ceil,
        Ho = function(e) {
            return function(t, n, o) {
                var r, a, s = String(h(t)),
                    i = s.length,
                    c = void 0 === o ? " " : String(o),
                    u = ue(n);
                return u <= i || "" == c ? s : (r = u - i, (a = Bo.call(c, jo(r / c.length))).length > r && (a = a.slice(0, r)), e ? s + a : a + s)
            }
        },
        $o = {
            start: Ho(!1),
            end: Ho(!0)
        }.start,
        Yo = Math.abs,
        zo = Date.prototype,
        Wo = zo.getTime,
        Jo = zo.toISOString,
        Xo = r((function() {
            return "0385-07-25T07:06:39.999Z" != Jo.call(new Date(-50000000000001))
        })) || !r((function() {
            Jo.call(new Date(NaN))
        })) ? function() {
            if (!isFinite(Wo.call(this))) throw RangeError("Invalid time value");
            var e = this.getUTCFullYear(),
                t = this.getUTCMilliseconds(),
                n = e < 0 ? "-" : e > 9999 ? "+" : "";
            return n + $o(Yo(e), n ? 6 : 4, 0) + "-" + $o(this.getUTCMonth() + 1, 2, 0) + "-" + $o(this.getUTCDate(), 2, 0) + "T" + $o(this.getUTCHours(), 2, 0) + ":" + $o(this.getUTCMinutes(), 2, 0) + ":" + $o(this.getUTCSeconds(), 2, 0) + "." + $o(t, 3, 0) + "Z"
        } : Jo;
    Le({
        target: "Date",
        proto: !0,
        forced: Date.prototype.toISOString !== Xo
    }, {
        toISOString: Xo
    });
    var Qo = Date.prototype,
        Zo = Qo.toString,
        er = Qo.getTime;
    new Date(NaN) + "" != "Invalid Date" && te(Qo, "toString", (function() {
        var e = er.call(this);
        return e == e ? Zo.call(this) : "Invalid Date"
    }));
    var tr = function(e, t, n) {
            var o, r;
            return Mn && "function" == typeof(o = t.constructor) && o !== n && _(r = o.prototype) && r !== n.prototype && Mn(e, r), e
        },
        nr = Me.f,
        or = D.f,
        rr = N.f,
        ar = Wt.trim,
        sr = o.Number,
        ir = sr.prototype,
        cr = "Number" == d(Kt(ir)),
        ur = function(e) {
            var t, n, o, r, a, s, i, c, u = m(e, !1);
            if ("string" == typeof u && u.length > 2)
                if (43 === (t = (u = ar(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                    switch (u.charCodeAt(1)) {
                        case 66:
                        case 98:
                            o = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            o = 8, r = 55;
                            break;
                        default:
                            return +u
                    }
                    for (s = (a = u.slice(2)).length, i = 0; i < s; i++)
                        if ((c = a.charCodeAt(i)) < 48 || c > r) return NaN;
                    return parseInt(a, o)
                }
            return +u
        };
    if (Ae("Number", !sr(" 0o1") || !sr("0b1") || sr("+0x1"))) {
        for (var lr, dr = function(e) {
            var t = arguments.length < 1 ? 0 : e,
                n = this;
            return n instanceof dr && (cr ? r((function() {
                ir.valueOf.call(n)
            })) : "Number" != d(n)) ? tr(new sr(ur(t)), n, dr) : ur(t)
        }, pr = a ? nr(sr) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), gr = 0; pr.length > gr; gr++) M(sr, lr = pr[gr]) && !M(dr, lr) && rr(dr, lr, or(sr, lr));
        dr.prototype = ir, ir.constructor = dr, te(o, "Number", dr)
    }
    var hr = Me.f,
        fr = {}.toString,
        _r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        mr = {
            f: function(e) {
                return _r && "[object Window]" == fr.call(e) ? function(e) {
                    try {
                        return hr(e)
                    } catch (Ov) {
                        return _r.slice()
                    }
                }(e) : hr(f(e))
            }
        },
        vr = mr.f,
        Mr = r((function() {
            return !Object.getOwnPropertyNames(1)
        }));
    Le({
        target: "Object",
        stat: !0,
        forced: Mr
    }, {
        getOwnPropertyNames: vr
    });
    var yr = r((function() {
        un(1)
    }));
    Le({
        target: "Object",
        stat: !0,
        forced: yr,
        sham: !an
    }, {
        getPrototypeOf: function(e) {
            return un(we(e))
        }
    });
    var Ir = It ? {}.toString : function() {
        return "[object " + Et(this) + "]"
    };
    It || te(Object.prototype, "toString", Ir, {
        unsafe: !0
    });
    var Sr, Tr, Er, Dr = o.Promise,
        kr = function(e, t, n) {
            for (var o in t) te(e, o, t[o], n);
            return e
        },
        Cr = xe("species"),
        Nr = function(e) {
            var t = re(e),
                n = N.f;
            a && t && !t[Cr] && n(t, Cr, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        Ar = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        Or = t((function(e) {
            var t = function(e, t) {
                this.stopped = e, this.result = t
            };
            (e.exports = function(e, n, o, r, a) {
                var s, i, c, u, l, d, p, g = nt(n, o, r ? 2 : 1);
                if (a) s = e;
                else {
                    if ("function" != typeof(i = kt(e))) throw TypeError("Target is not iterable");
                    if (Mt(i)) {
                        for (c = 0, u = ue(e.length); u > c; c++)
                            if ((l = r ? g(k(p = e[c])[0], p[1]) : g(e[c])) && l instanceof t) return l;
                        return new t(!1)
                    }
                    s = i.call(e)
                }
                for (d = s.next; !(p = d.call(s)).done;)
                    if ("object" == typeof(l = ft(s, g, p.value, r)) && l && l instanceof t) return l;
                return new t(!1)
            }).stop = function(e) {
                return new t(!0, e)
            }
        })),
        Lr = xe("species"),
        Rr = function(e, t) {
            var n, o = k(e).constructor;
            return void 0 === o || null == (n = k(o)[Lr]) ? t : et(n)
        },
        wr = /(iphone|ipod|ipad).*applewebkit/i.test(Be),
        br = o.location,
        Pr = o.setImmediate,
        Gr = o.clearImmediate,
        Ur = o.process,
        Fr = o.MessageChannel,
        qr = o.Dispatch,
        xr = 0,
        Vr = {},
        Kr = function(e) {
            if (Vr.hasOwnProperty(e)) {
                var t = Vr[e];
                delete Vr[e], t()
            }
        },
        Br = function(e) {
            return function() {
                Kr(e)
            }
        },
        jr = function(e) {
            Kr(e.data)
        },
        Hr = function(e) {
            o.postMessage(e + "", br.protocol + "//" + br.host)
        };
    Pr && Gr || (Pr = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return Vr[++xr] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Sr(xr), xr
    }, Gr = function(e) {
        delete Vr[e]
    }, "process" == d(Ur) ? Sr = function(e) {
        Ur.nextTick(Br(e))
    } : qr && qr.now ? Sr = function(e) {
        qr.now(Br(e))
    } : Fr && !wr ? (Er = (Tr = new Fr).port2, Tr.port1.onmessage = jr, Sr = nt(Er.postMessage, Er, 1)) : !o.addEventListener || "function" != typeof postMessage || o.importScripts || r(Hr) ? Sr = "onreadystatechange" in S("script") ? function(e) {
        Ut.appendChild(S("script")).onreadystatechange = function() {
            Ut.removeChild(this), Kr(e)
        }
    } : function(e) {
        setTimeout(Br(e), 0)
    } : (Sr = Hr, o.addEventListener("message", jr, !1)));
    var $r, Yr, zr, Wr, Jr, Xr, Qr, Zr, ea = {
            set: Pr,
            clear: Gr
        },
        ta = D.f,
        na = ea.set,
        oa = o.MutationObserver || o.WebKitMutationObserver,
        ra = o.process,
        aa = o.Promise,
        sa = "process" == d(ra),
        ia = ta(o, "queueMicrotask"),
        ca = ia && ia.value;
    ca || ($r = function() {
        var e, t;
        for (sa && (e = ra.domain) && e.exit(); Yr;) {
            t = Yr.fn, Yr = Yr.next;
            try {
                t()
            } catch (Ov) {
                throw Yr ? Wr() : zr = void 0, Ov
            }
        }
        zr = void 0, e && e.enter()
    }, sa ? Wr = function() {
        ra.nextTick($r)
    } : oa && !wr ? (Jr = !0, Xr = document.createTextNode(""), new oa($r).observe(Xr, {
        characterData: !0
    }), Wr = function() {
        Xr.data = Jr = !Jr
    }) : aa && aa.resolve ? (Qr = aa.resolve(void 0), Zr = Qr.then, Wr = function() {
        Zr.call(Qr, $r)
    }) : Wr = function() {
        na.call(o, $r)
    });
    var ua, la, da, pa, ga = ca || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            zr && (zr.next = t), Yr || (Yr = t, Wr()), zr = t
        },
        ha = function(e) {
            var t, n;
            this.promise = new e((function(e, o) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = o
            })), this.resolve = et(t), this.reject = et(n)
        },
        fa = {
            f: function(e) {
                return new ha(e)
            }
        },
        _a = function(e, t) {
            if (k(e), _(t) && t.constructor === e) return t;
            var n = fa.f(e);
            return (0, n.resolve)(t), n.promise
        },
        ma = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (Ov) {
                return {
                    error: !0,
                    value: Ov
                }
            }
        },
        va = ea.set,
        Ma = xe("species"),
        ya = "Promise",
        Ia = ee.get,
        Sa = ee.set,
        Ta = ee.getterFor(ya),
        Ea = Dr,
        Da = o.TypeError,
        ka = o.document,
        Ca = o.process,
        Na = re("fetch"),
        Aa = fa.f,
        Oa = Aa,
        La = "process" == d(Ca),
        Ra = !!(ka && ka.createEvent && o.dispatchEvent),
        wa = Ae(ya, (function() {
            if (!(G(Ea) !== String(Ea))) {
                if (66 === Ye) return !0;
                if (!La && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (Ye >= 51 && /native code/.test(Ea)) return !1;
            var e = Ea.resolve(1),
                t = function(e) {
                    e((function() {}), (function() {}))
                };
            return (e.constructor = {})[Ma] = t, !(e.then((function() {})) instanceof t)
        })),
        ba = wa || !Rt((function(e) {
            Ea.all(e).catch((function() {}))
        })),
        Pa = function(e) {
            var t;
            return !(!_(e) || "function" != typeof(t = e.then)) && t
        },
        Ga = function(e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var o = t.reactions;
                ga((function() {
                    for (var r = t.value, a = 1 == t.state, s = 0; o.length > s;) {
                        var i, c, u, l = o[s++],
                            d = a ? l.ok : l.fail,
                            p = l.resolve,
                            g = l.reject,
                            h = l.domain;
                        try {
                            d ? (a || (2 === t.rejection && xa(e, t), t.rejection = 1), !0 === d ? i = r : (h && h.enter(), i = d(r), h && (h.exit(), u = !0)), i === l.promise ? g(Da("Promise-chain cycle")) : (c = Pa(i)) ? c.call(i, p, g) : p(i)) : g(r)
                        } catch (Ov) {
                            h && !u && h.exit(), g(Ov)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Fa(e, t)
                }))
            }
        },
        Ua = function(e, t, n) {
            var r, a;
            Ra ? ((r = ka.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), o.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, (a = o["on" + e]) ? a(r) : "unhandledrejection" === e && function(e, t) {
                var n = o.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        Fa = function(e, t) {
            va.call(o, (function() {
                var n, o = t.value;
                if (qa(t) && (n = ma((function() {
                    La ? Ca.emit("unhandledRejection", o, e) : Ua("unhandledrejection", e, o)
                })), t.rejection = La || qa(t) ? 2 : 1, n.error)) throw n.value
            }))
        },
        qa = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        xa = function(e, t) {
            va.call(o, (function() {
                La ? Ca.emit("rejectionHandled", e) : Ua("rejectionhandled", e, t.value)
            }))
        },
        Va = function(e, t, n, o) {
            return function(r) {
                e(t, n, r, o)
            }
        },
        Ka = function(e, t, n, o) {
            t.done || (t.done = !0, o && (t = o), t.value = n, t.state = 2, Ga(e, t, !0))
        },
        Ba = function(e, t, n, o) {
            if (!t.done) {
                t.done = !0, o && (t = o);
                try {
                    if (e === n) throw Da("Promise can't be resolved itself");
                    var r = Pa(n);
                    r ? ga((function() {
                        var o = {
                            done: !1
                        };
                        try {
                            r.call(n, Va(Ba, e, o, t), Va(Ka, e, o, t))
                        } catch (Ov) {
                            Ka(e, o, Ov, t)
                        }
                    })) : (t.value = n, t.state = 1, Ga(e, t, !1))
                } catch (Ov) {
                    Ka(e, {
                        done: !1
                    }, Ov, t)
                }
            }
        };
    wa && (Ea = function(e) {
        Ar(this, Ea, ya), et(e), ua.call(this);
        var t = Ia(this);
        try {
            e(Va(Ba, this, t), Va(Ka, this, t))
        } catch (Ov) {
            Ka(this, t, Ov)
        }
    }, (ua = function(e) {
        Sa(this, {
            type: ya,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = kr(Ea.prototype, {
        then: function(e, t) {
            var n = Ta(this),
                o = Aa(Rr(this, Ea));
            return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t && t, o.domain = La ? Ca.domain : void 0, n.parent = !0, n.reactions.push(o), 0 != n.state && Ga(this, n, !1), o.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), la = function() {
        var e = new ua,
            t = Ia(e);
        this.promise = e, this.resolve = Va(Ba, e, t), this.reject = Va(Ka, e, t)
    }, fa.f = Aa = function(e) {
        return e === Ea || e === da ? new la(e) : Oa(e)
    }, "function" == typeof Dr && (pa = Dr.prototype.then, te(Dr.prototype, "then", (function(e, t) {
        var n = this;
        return new Ea((function(e, t) {
            pa.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof Na && Le({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return _a(Ea, Na.apply(o, arguments))
        }
    }))), Le({
        global: !0,
        wrap: !0,
        forced: wa
    }, {
        Promise: Ea
    }), fn(Ea, ya, !1), Nr(ya), da = re(ya), Le({
        target: ya,
        stat: !0,
        forced: wa
    }, {
        reject: function(e) {
            var t = Aa(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), Le({
        target: ya,
        stat: !0,
        forced: wa
    }, {
        resolve: function(e) {
            return _a(this, e)
        }
    }), Le({
        target: ya,
        stat: !0,
        forced: ba
    }, {
        all: function(e) {
            var t = this,
                n = Aa(t),
                o = n.resolve,
                r = n.reject,
                a = ma((function() {
                    var n = et(t.resolve),
                        a = [],
                        s = 0,
                        i = 1;
                    Or(e, (function(e) {
                        var c = s++,
                            u = !1;
                        a.push(void 0), i++, n.call(t, e).then((function(e) {
                            u || (u = !0, a[c] = e, --i || o(a))
                        }), r)
                    })), --i || o(a)
                }));
            return a.error && r(a.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = Aa(t),
                o = n.reject,
                r = ma((function() {
                    var r = et(t.resolve);
                    Or(e, (function(e) {
                        r.call(t, e).then(n.resolve, o)
                    }))
                }));
            return r.error && o(r.value), n.promise
        }
    });
    var ja = function() {
        var e = k(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function Ha(e, t) {
        return RegExp(e, t)
    }
    var $a, Ya, za = {
            UNSUPPORTED_Y: r((function() {
                var e = Ha("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: r((function() {
                var e = Ha("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        Wa = RegExp.prototype.exec,
        Ja = String.prototype.replace,
        Xa = Wa,
        Qa = ($a = /a/, Ya = /b*/g, Wa.call($a, "a"), Wa.call(Ya, "a"), 0 !== $a.lastIndex || 0 !== Ya.lastIndex),
        Za = za.UNSUPPORTED_Y || za.BROKEN_CARET,
        es = void 0 !== /()??/.exec("")[1];
    (Qa || es || Za) && (Xa = function(e) {
        var t, n, o, r, a = this,
            s = Za && a.sticky,
            i = ja.call(a),
            c = a.source,
            u = 0,
            l = e;
        return s && (-1 === (i = i.replace("y", "")).indexOf("g") && (i += "g"), l = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (c = "(?: " + c + ")", l = " " + l, u++), n = new RegExp("^(?:" + c + ")", i)), es && (n = new RegExp("^" + c + "$(?!\\s)", i)), Qa && (t = a.lastIndex), o = Wa.call(s ? n : a, l), s ? o ? (o.input = o.input.slice(u), o[0] = o[0].slice(u), o.index = a.lastIndex, a.lastIndex += o[0].length) : a.lastIndex = 0 : Qa && o && (a.lastIndex = a.global ? o.index + o[0].length : t), es && o && o.length > 1 && Ja.call(o[0], n, (function() {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (o[r] = void 0)
        })), o
    });
    var ts = Xa;
    Le({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== ts
    }, {
        exec: ts
    });
    var ns = RegExp.prototype,
        os = ns.toString,
        rs = r((function() {
            return "/a/b" != os.call({
                source: "a",
                flags: "b"
            })
        })),
        as = "toString" != os.name;
    (rs || as) && te(RegExp.prototype, "toString", (function() {
        var e = k(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in ns) ? ja.call(e) : n)
    }), {
        unsafe: !0
    });
    var ss = rn.codeAt;
    Le({
        target: "String",
        proto: !0
    }, {
        codePointAt: function(e) {
            return ss(this, e)
        }
    });
    var is = xe("match"),
        cs = function(e) {
            var t;
            return _(e) && (void 0 !== (t = e[is]) ? !!t : "RegExp" == d(e))
        },
        us = function(e) {
            if (cs(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        ls = xe("match"),
        ds = function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[ls] = !1, "/./" [e](t)
                } catch (o) {}
            }
            return !1
        };
    Le({
        target: "String",
        proto: !0,
        forced: !ds("includes")
    }, {
        includes: function(e) {
            return !!~String(h(this)).indexOf(us(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ps = xe("species"),
        gs = !r((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        hs = "$0" === "a".replace(/./, "$0"),
        fs = xe("replace"),
        _s = !!/./ [fs] && "" === /./ [fs]("a", "$0"),
        ms = !r((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        vs = function(e, t, n, o) {
            var a = xe(e),
                s = !r((function() {
                    var t = {};
                    return t[a] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                i = s && !r((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[ps] = function() {
                        return n
                    }, n.flags = "", n[a] = /./ [a]), n.exec = function() {
                        return t = !0, null
                    }, n[a](""), !t
                }));
            if (!s || !i || "replace" === e && (!gs || !hs || _s) || "split" === e && !ms) {
                var c = /./ [a],
                    u = n(a, "" [e], (function(e, t, n, o, r) {
                        return t.exec === ts ? s && !r ? {
                            done: !0,
                            value: c.call(t, n, o)
                        } : {
                            done: !0,
                            value: e.call(n, t, o)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: hs,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: _s
                    }),
                    l = u[0],
                    d = u[1];
                te(String.prototype, e, l), te(RegExp.prototype, a, 2 == t ? function(e, t) {
                    return d.call(e, this, t)
                } : function(e) {
                    return d.call(e, this)
                })
            }
            o && A(RegExp.prototype[a], "sham", !0)
        },
        Ms = rn.charAt,
        ys = function(e, t, n) {
            return t + (n ? Ms(e, t).length : 1)
        },
        Is = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var o = n.call(e, t);
                if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== d(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return ts.call(e, t)
        };
    vs("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = h(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var o = n(t, e, this);
            if (o.done) return o.value;
            var r = k(e),
                a = String(this);
            if (!r.global) return Is(r, a);
            var s = r.unicode;
            r.lastIndex = 0;
            for (var i, c = [], u = 0; null !== (i = Is(r, a));) {
                var l = String(i[0]);
                c[u] = l, "" === l && (r.lastIndex = ys(a, ue(r.lastIndex), s)), u++
            }
            return 0 === u ? null : c
        }]
    }));
    var Ss = Math.max,
        Ts = Math.min,
        Es = Math.floor,
        Ds = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        ks = /\$([$&'`]|\d\d?)/g;
    vs("replace", 2, (function(e, t, n, o) {
        var r = o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            a = o.REPLACE_KEEPS_$0,
            s = r ? "$" : "$0";
        return [function(n, o) {
            var r = h(this),
                a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, r, o) : t.call(String(r), n, o)
        }, function(e, o) {
            if (!r && a || "string" == typeof o && -1 === o.indexOf(s)) {
                var c = n(t, e, this, o);
                if (c.done) return c.value
            }
            var u = k(e),
                l = String(this),
                d = "function" == typeof o;
            d || (o = String(o));
            var p = u.global;
            if (p) {
                var g = u.unicode;
                u.lastIndex = 0
            }
            for (var h = [];;) {
                var f = Is(u, l);
                if (null === f) break;
                if (h.push(f), !p) break;
                "" === String(f[0]) && (u.lastIndex = ys(l, ue(u.lastIndex), g))
            }
            for (var _, m = "", v = 0, M = 0; M < h.length; M++) {
                f = h[M];
                for (var y = String(f[0]), I = Ss(Ts(ie(f.index), l.length), 0), S = [], T = 1; T < f.length; T++) S.push(void 0 === (_ = f[T]) ? _ : String(_));
                var E = f.groups;
                if (d) {
                    var D = [y].concat(S, I, l);
                    void 0 !== E && D.push(E);
                    var C = String(o.apply(void 0, D))
                } else C = i(y, l, I, S, E, o);
                I >= v && (m += l.slice(v, I) + C, v = I + y.length)
            }
            return m + l.slice(v)
        }];

        function i(e, n, o, r, a, s) {
            var i = o + e.length,
                c = r.length,
                u = ks;
            return void 0 !== a && (a = we(a), u = Ds), t.call(s, u, (function(t, s) {
                var u;
                switch (s.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, o);
                    case "'":
                        return n.slice(i);
                    case "<":
                        u = a[s.slice(1, -1)];
                        break;
                    default:
                        var l = +s;
                        if (0 === l) return t;
                        if (l > c) {
                            var d = Es(l / 10);
                            return 0 === d ? t : d <= c ? void 0 === r[d - 1] ? s.charAt(1) : r[d - 1] + s.charAt(1) : t
                        }
                        u = r[l - 1]
                }
                return void 0 === u ? "" : u
            }))
        }
    }));
    var Cs = xe("iterator"),
        Ns = xe("toStringTag"),
        As = bo.values;
    for (var Os in Nn) {
        var Ls = o[Os],
            Rs = Ls && Ls.prototype;
        if (Rs) {
            if (Rs[Cs] !== As) try {
                A(Rs, Cs, As)
            } catch (Ov) {
                Rs[Cs] = As
            }
            if (Rs[Ns] || A(Rs, Ns, Os), Nn[Os])
                for (var ws in bo)
                    if (Rs[ws] !== bo[ws]) try {
                        A(Rs, ws, bo[ws])
                    } catch (Ov) {
                        Rs[ws] = bo[ws]
                    }
        }
    }
    var bs = Wt.trim,
        Ps = o.parseFloat,
        Gs = 1 / Ps(jt + "-0") != -Infinity ? function(e) {
            var t = bs(String(e)),
                n = Ps(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n
        } : Ps;
    Le({
        global: !0,
        forced: parseFloat != Gs
    }, {
        parseFloat: Gs
    });
    var Us = {
            WEB: 7,
            WX_MP: 8,
            QQ_MP: 9,
            TT_MP: 10,
            BAIDU_MP: 11,
            ALI_MP: 12,
            UNI_NATIVE_APP: 14
        },
        Fs = "1.7.3",
        qs = 537048168,
        xs = 1,
        Vs = 2,
        Ks = 3,
        Bs = {
            HOST: {
                CURRENT: {
                    DEFAULT: "",
                    BACKUP: ""
                },
                TEST: {
                    DEFAULT: "wss://wss-dev.tim.qq.com",
                    BACKUP: "wss://wss-dev.tim.qq.com"
                },
                PRODUCTION: {
                    DEFAULT: "wss://wss.im.qcloud.com",
                    BACKUP: "wss://wss.tim.qq.com"
                },
                OVERSEA_PRODUCTION: {
                    DEFAULT: "wss://wss.im.qcloud.com",
                    BACKUP: "wss://wss.im.qcloud.com"
                },
                setCurrent: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e === xs ? this.CURRENT = this.TEST : e === Vs ? this.CURRENT = this.PRODUCTION : e === Ks && (this.CURRENT = this.OVERSEA_PRODUCTION)
                }
            },
            NAME: {
                OPEN_IM: "openim",
                GROUP: "group_open_http_svc",
                FRIEND: "sns",
                PROFILE: "profile",
                RECENT_CONTACT: "recentcontact",
                PIC: "openpic",
                BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
                BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_svc",
                BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc",
                IM_OPEN_STAT: "imopenstat",
                WEB_IM: "webim",
                IM_COS_SIGN: "im_cos_sign_svr",
                CUSTOM_UPLOAD: "im_cos_msg",
                HEARTBEAT: "heartbeat",
                IM_OPEN_PUSH: "im_open_push",
                IM_OPEN_STATUS: "im_open_status",
                IM_LONG_MESSAGE: "im_long_msg",
                CLOUD_CONTROL: "im_sdk_config_mgr"
            },
            CMD: {
                ACCESS_LAYER: "accesslayer",
                LOGIN: "wslogin",
                LOGOUT_LONG_POLL: "longpollinglogout",
                LOGOUT: "wslogout",
                HELLO: "wshello",
                PORTRAIT_GET: "portrait_get_all",
                PORTRAIT_SET: "portrait_set",
                GET_LONG_POLL_ID: "getlongpollingid",
                LONG_POLL: "longpolling",
                AVCHATROOM_LONG_POLL: "get_msg",
                ADD_FRIEND: "friend_add",
                UPDATE_FRIEND: "friend_update",
                GET_FRIEND_LIST: "friend_get",
                GET_FRIEND_PROFILE: "friend_get_list",
                DELETE_FRIEND: "friend_delete",
                CHECK_FRIEND: "friend_check",
                GET_FRIEND_GROUP_LIST: "group_get",
                RESPOND_FRIEND_APPLICATION: "friend_response",
                GET_FRIEND_APPLICATION_LIST: "pendency_get",
                DELETE_FRIEND_APPLICATION: "pendency_delete",
                REPORT_FRIEND_APPLICATION: "pendency_report",
                GET_GROUP_APPLICATION: "get_pendency",
                CREATE_FRIEND_GROUP: "group_add",
                DELETE_FRIEND_GROUP: "group_delete",
                UPDATE_FRIEND_GROUP: "group_update",
                GET_BLACKLIST: "black_list_get",
                ADD_BLACKLIST: "black_list_add",
                DELETE_BLACKLIST: "black_list_delete",
                CREATE_GROUP: "create_group",
                GET_JOINED_GROUPS: "get_joined_group_list",
                SEND_MESSAGE: "sendmsg",
                REVOKE_C2C_MESSAGE: "msgwithdraw",
                DELETE_C2C_MESSAGE: "delete_c2c_msg_ramble",
                SEND_GROUP_MESSAGE: "send_group_msg",
                REVOKE_GROUP_MESSAGE: "group_msg_recall",
                DELETE_GROUP_MESSAGE: "delete_group_ramble_msg_by_seq",
                GET_GROUP_INFO: "get_group_info",
                GET_GROUP_MEMBER_INFO: "get_specified_group_member_info",
                GET_GROUP_MEMBER_LIST: "get_group_member_info",
                QUIT_GROUP: "quit_group",
                CHANGE_GROUP_OWNER: "change_group_owner",
                DESTROY_GROUP: "destroy_group",
                ADD_GROUP_MEMBER: "add_group_member",
                DELETE_GROUP_MEMBER: "delete_group_member",
                SEARCH_GROUP_BY_ID: "get_group_public_info",
                APPLY_JOIN_GROUP: "apply_join_group",
                HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
                HANDLE_GROUP_INVITATION: "handle_invite_join_group",
                MODIFY_GROUP_INFO: "modify_group_base_info",
                MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
                DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
                DELETE_GROUP_AT_TIPS: "deletemsg",
                GET_CONVERSATION_LIST: "get",
                PAGING_GET_CONVERSATION_LIST: "page_get",
                DELETE_CONVERSATION: "delete",
                GET_MESSAGES: "getmsg",
                GET_C2C_ROAM_MESSAGES: "getroammsg",
                GET_GROUP_ROAM_MESSAGES: "group_msg_get",
                SET_C2C_MESSAGE_READ: "msgreaded",
                GET_PEER_READ_TIME: "get_peer_read_time",
                SET_GROUP_MESSAGE_READ: "msg_read_report",
                FILE_READ_AND_WRITE_AUTHKEY: "authkey",
                FILE_UPLOAD: "pic_up",
                COS_SIGN: "cos",
                COS_PRE_SIG: "pre_sig",
                TIM_WEB_REPORT_V2: "tim_web_report_v2",
                BIG_DATA_HALLWAY_AUTH_KEY: "authkey",
                GET_ONLINE_MEMBER_NUM: "get_online_member_num",
                ALIVE: "alive",
                MESSAGE_PUSH: "msg_push",
                MESSAGE_PUSH_ACK: "ws_msg_push_ack",
                STATUS_FORCEOFFLINE: "stat_forceoffline",
                DOWNLOAD_MERGER_MESSAGE: "get_relay_json_msg",
                UPLOAD_MERGER_MESSAGE: "save_relay_json_msg",
                FETCH_CLOUD_CONTROL_CONFIG: "fetch_config",
                PUSHED_CLOUD_CONTROL_CONFIG: "push_configv2"
            },
            CHANNEL: {
                SOCKET: 1,
                XHR: 2,
                AUTO: 0
            },
            NAME_VERSION: {
                openim: "v4",
                group_open_http_svc: "v4",
                sns: "v4",
                profile: "v4",
                recentcontact: "v4",
                openpic: "v4",
                group_open_http_noauth_svc: "v4",
                group_open_long_polling_http_svc: "v4",
                group_open_long_polling_http_noauth_svc: "v4",
                imopenstat: "v4",
                im_cos_sign_svr: "v4",
                im_cos_msg: "v4",
                webim: "v4",
                im_open_push: "v4",
                im_open_status: "v4"
            }
        };
    Bs.HOST.setCurrent(Vs);
    var js, Hs, $s, Ys = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting),
        zs = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq.getSystemInfoSync().fontSizeSetting),
        Ws = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt.getSystemInfoSync().fontSizeSetting),
        Js = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan.getSystemInfoSync().fontSizeSetting),
        Xs = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my.getSystemInfoSync().fontSizeSetting),
        Qs = "undefined" != typeof uni && "undefined" == typeof window,
        Zs = Ys || zs || Ws || Js || Xs || Qs,
        ei = ("undefined" != typeof uni || "undefined" != typeof window) && !Zs,
        ti = zs ? qq : Ws ? tt : Js ? swan : Xs ? my : Ys ? wx : Qs ? uni : {},
        ni = (js = "WEB", _i ? js = "WEB" : zs ? js = "QQ_MP" : Ws ? js = "TT_MP" : Js ? js = "BAIDU_MP" : Xs ? js = "ALI_MP" : Ys ? js = "WX_MP" : Qs && (js = "UNI_NATIVE_APP"), Us[js]),
        oi = ei && window && window.navigator && window.navigator.userAgent || "",
        ri = /AppleWebKit\/([\d.]+)/i.exec(oi),
        ai = (ri && parseFloat(ri.pop()), /iPad/i.test(oi)),
        si = /iPhone/i.test(oi) && !ai,
        ii = /iPod/i.test(oi),
        ci = si || ai || ii,
        ui = (function() {
            var e = oi.match(/OS (\d+)_/i);
            e && e[1] && e[1]
        }(), /Android/i.test(oi)),
        li = function() {
            var e = oi.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            if (!e) return null;
            var t = e[1] && parseFloat(e[1]),
                n = e[2] && parseFloat(e[2]);
            return t && n ? parseFloat(e[1] + "." + e[2]) : t || null
        }(),
        di = (ui && /webkit/i.test(oi), /Firefox/i.test(oi), /Edge/i.test(oi)),
        pi = !di && /Chrome/i.test(oi),
        gi = (function() {
            var e = oi.match(/Chrome\/(\d+)/);
            e && e[1] && parseFloat(e[1])
        }(), /MSIE/.test(oi)),
        hi = (/MSIE\s8\.0/.test(oi), function() {
            var e = /MSIE\s(\d+)\.\d/.exec(oi),
                t = e && parseFloat(e[1]);
            return !t && /Trident\/7.0/i.test(oi) && /rv:11.0/.test(oi) && (t = 11), t
        }()),
        fi = (/Safari/i.test(oi), /TBS\/\d+/i.test(oi)),
        _i = (function() {
            var e = oi.match(/TBS\/(\d+)/i);
            if (e && e[1]) e[1]
        }(), !fi && /MQQBrowser\/\d+/i.test(oi), !fi && / QQBrowser\/\d+/i.test(oi), /(micromessenger|webbrowser)/i.test(oi)),
        mi = /Windows/i.test(oi),
        vi = /MAC OS X/i.test(oi),
        Mi = (/MicroMessenger/i.test(oi), !r((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }))),
        yi = t((function(e) {
            var t = N.f,
                n = K("meta"),
                o = 0,
                r = Object.isExtensible || function() {
                    return !0
                },
                a = function(e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++o,
                            weakData: {}
                        }
                    })
                },
                s = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!_(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!M(e, n)) {
                            if (!r(e)) return "F";
                            if (!t) return "E";
                            a(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!M(e, n)) {
                            if (!r(e)) return !0;
                            if (!t) return !1;
                            a(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function(e) {
                        return Mi && s.REQUIRED && r(e) && !M(e, n) && a(e), e
                    }
                };
            H[n] = !0
        })),
        Ii = (yi.REQUIRED, yi.fastKey, yi.getWeakData, yi.onFreeze, N.f),
        Si = yi.fastKey,
        Ti = ee.set,
        Ei = ee.getterFor,
        Di = (function(e, t, n) {
            var a = -1 !== e.indexOf("Map"),
                s = -1 !== e.indexOf("Weak"),
                i = a ? "set" : "add",
                c = o[e],
                u = c && c.prototype,
                l = c,
                d = {},
                p = function(e) {
                    var t = u[e];
                    te(u, e, "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : "delete" == e ? function(e) {
                        return !(s && !_(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function(e) {
                        return s && !_(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function(e) {
                        return !(s && !_(e)) && t.call(this, 0 === e ? 0 : e)
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if (Ae(e, "function" != typeof c || !(s || u.forEach && !r((function() {
                (new c).entries().next()
            }))))) l = n.getConstructor(t, e, a, i), yi.REQUIRED = !0;
            else if (Ae(e, !0)) {
                var g = new l,
                    h = g[i](s ? {} : -0, 1) != g,
                    f = r((function() {
                        g.has(1)
                    })),
                    m = Rt((function(e) {
                        new c(e)
                    })),
                    v = !s && r((function() {
                        for (var e = new c, t = 5; t--;) e[i](t, t);
                        return !e.has(-0)
                    }));
                m || ((l = t((function(t, n) {
                    Ar(t, l, e);
                    var o = tr(new c, t, l);
                    return null != n && Or(n, o[i], o, a), o
                }))).prototype = u, u.constructor = l), (f || v) && (p("delete"), p("has"), a && p("get")), (v || h) && p(i), s && u.clear && delete u.clear
            }
            d[e] = l, Le({
                global: !0,
                forced: l != c
            }, d), fn(l, e), s || n.setStrong(l, e, a)
        }("Map", (function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }), {
            getConstructor: function(e, t, n, o) {
                var r = e((function(e, s) {
                        Ar(e, r, t), Ti(e, {
                            type: t,
                            index: Kt(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), a || (e.size = 0), null != s && Or(s, e[o], e, n)
                    })),
                    s = Ei(t),
                    i = function(e, t, n) {
                        var o, r, i = s(e),
                            u = c(e, t);
                        return u ? u.value = n : (i.last = u = {
                            index: r = Si(t, !0),
                            key: t,
                            value: n,
                            previous: o = i.last,
                            next: void 0,
                            removed: !1
                        }, i.first || (i.first = u), o && (o.next = u), a ? i.size++ : e.size++, "F" !== r && (i.index[r] = u)), e
                    },
                    c = function(e, t) {
                        var n, o = s(e),
                            r = Si(t);
                        if ("F" !== r) return o.index[r];
                        for (n = o.first; n; n = n.next)
                            if (n.key == t) return n
                    };
                return kr(r.prototype, {
                    clear: function() {
                        for (var e = s(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                        e.first = e.last = void 0, a ? e.size = 0 : this.size = 0
                    },
                    delete: function(e) {
                        var t = s(this),
                            n = c(this, e);
                        if (n) {
                            var o = n.next,
                                r = n.previous;
                            delete t.index[n.index], n.removed = !0, r && (r.next = o), o && (o.previous = r), t.first == n && (t.first = o), t.last == n && (t.last = r), a ? t.size-- : this.size--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        for (var t, n = s(this), o = nt(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                            for (o(t.value, t.key, this); t && t.removed;) t = t.previous
                    },
                    has: function(e) {
                        return !!c(this, e)
                    }
                }), kr(r.prototype, n ? {
                    get: function(e) {
                        var t = c(this, e);
                        return t && t.value
                    },
                    set: function(e, t) {
                        return i(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function(e) {
                        return i(this, e = 0 === e ? 0 : e, e)
                    }
                }), a && Ii(r.prototype, "size", {
                    get: function() {
                        return s(this).size
                    }
                }), r
            },
            setStrong: function(e, t, n) {
                var o = t + " Iterator",
                    r = Ei(t),
                    a = Ei(o);
                En(e, t, (function(e, t) {
                    Ti(this, {
                        type: o,
                        target: e,
                        state: r(e),
                        kind: t,
                        last: void 0
                    })
                }), (function() {
                    for (var e = a(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (e.target = void 0, {
                        value: void 0,
                        done: !0
                    })
                }), n ? "entries" : "values", !n, !0), Nr(t)
            }
        }), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    Hs = "undefined" != typeof console ? console : void 0 !== Di && Di.console ? Di.console : "undefined" != typeof window && window.console ? window.console : {};
    for (var ki = function() {}, Ci = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], Ni = Ci.length; Ni--;) $s = Ci[Ni], console[$s] || (Hs[$s] = ki);
    Hs.methods = Ci;
    var Ai = Hs,
        Oi = 0,
        Li = function() {
            return (new Date).getTime() + Oi
        },
        Ri = function() {
            Oi = 0
        },
        wi = 0,
        bi = new Map;

    function Pi() {
        var e, t = ((e = new Date).setTime(Li()), e);
        return "TIM " + t.toLocaleTimeString("en-US", {
            hour12: !1
        }) + "." + function(e) {
            var t;
            switch (e.toString().length) {
                case 1:
                    t = "00" + e;
                    break;
                case 2:
                    t = "0" + e;
                    break;
                default:
                    t = e
            }
            return t
        }(t.getMilliseconds()) + ":"
    }
    var Gi = {
            arguments2String: function(e) {
                var t;
                if (1 === e.length) t = Pi() + e[0];
                else {
                    t = Pi();
                    for (var n = 0, o = e.length; n < o; n++) ji(e[n]) ? $i(e[n]) ? t += Qi(e[n]) : t += JSON.stringify(e[n]) : t += e[n], t += " "
                }
                return t
            },
            debug: function() {
                if (wi <= -1) {
                    var e = this.arguments2String(arguments);
                    Ai.debug(e)
                }
            },
            log: function() {
                if (wi <= 0) {
                    var e = this.arguments2String(arguments);
                    Ai.log(e)
                }
            },
            info: function() {
                if (wi <= 1) {
                    var e = this.arguments2String(arguments);
                    Ai.info(e)
                }
            },
            warn: function() {
                if (wi <= 2) {
                    var e = this.arguments2String(arguments);
                    Ai.warn(e)
                }
            },
            error: function() {
                if (wi <= 3) {
                    var e = this.arguments2String(arguments);
                    Ai.error(e)
                }
            },
            time: function(e) {
                bi.set(e, Ji.now())
            },
            timeEnd: function(e) {
                if (bi.has(e)) {
                    var t = Ji.now() - bi.get(e);
                    return bi.delete(e), t
                }
                return Ai.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 0
            },
            setLevel: function(e) {
                e < 4 && Ai.log(Pi() + "set level from " + wi + " to " + e), wi = e
            },
            getLevel: function() {
                return wi
            }
        },
        Ui = function(e) {
            return "file" === Yi(e)
        },
        Fi = function(e) {
            return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === Rn(e) && e.constructor === Number)
        },
        qi = function(e) {
            return "string" == typeof e
        },
        xi = function(e) {
            return null !== e && "object" === Rn(e)
        },
        Vi = function(e) {
            if ("object" !== Rn(e) || null === e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
            return t === n
        },
        Ki = function(e) {
            return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === Yi(e)
        },
        Bi = function(e) {
            return void 0 === e
        },
        ji = function(e) {
            return Ki(e) || xi(e)
        },
        Hi = function(e) {
            return "function" == typeof e
        },
        $i = function(e) {
            return e instanceof Error
        },
        Yi = function(e) {
            return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase()
        },
        zi = function(e) {
            if ("string" != typeof e) return !1;
            var t = e[0];
            return !/[^a-zA-Z0-9]/.test(t)
        },
        Wi = 0;
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    var Ji = {
            now: function() {
                0 === Wi && (Wi = Date.now() - 1);
                var e = Date.now() - Wi;
                return e > 4294967295 ? (Wi += 4294967295, Date.now() - Wi) : e
            },
            utc: function() {
                return Math.round(Date.now() / 1e3)
            }
        },
        Xi = function e(t, n, o, r) {
            if (!ji(t) || !ji(n)) return 0;
            for (var a, s = 0, i = Object.keys(n), c = 0, u = i.length; c < u; c++)
                if (a = i[c], !(Bi(n[a]) || o && o.includes(a)))
                    if (ji(t[a]) && ji(n[a])) s += e(t[a], n[a], o, r);
                    else {
                        if (r && r.includes(n[a])) continue;
                        t[a] !== n[a] && (t[a] = n[a], s += 1)
                    } return s
        },
        Qi = function(e) {
            return JSON.stringify(e, ["message", "code"])
        },
        Zi = function(e) {
            if (0 === e.length) return 0;
            for (var t = 0, n = 0, o = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t];) n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === o ? 3 : 2;
            return n
        },
        ec = function(e) {
            var t = e || 99999999;
            return Math.round(Math.random() * t)
        },
        tc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        nc = tc.length,
        oc = function(e, t) {
            for (var n in e)
                if (e[n] === t) return !0;
            return !1
        },
        rc = {},
        ac = function() {
            if (Zs) return "https:";
            if (ei && "undefined" == typeof window) return "https:";
            var e = window.location.protocol;
            return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e
        },
        sc = function(e) {
            return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? "https://" + e : e.replace(/https|http/, "https")
        },
        ic = function e(t) {
            if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null);
            var n = Array.isArray(t) ? [] : Object.create(null),
                o = "";
            for (var r in t) null !== t[r] ? void 0 !== t[r] ? (o = Rn(t[r]), ["string", "number", "function", "boolean"].indexOf(o) >= 0 ? n[r] = t[r] : n[r] = e(t[r])) : n[r] = void 0 : n[r] = null;
            return n
        };

    function cc(e, t) {
        Ki(e) && Ki(t) ? t.forEach((function(t) {
            var n = t.key,
                o = t.value,
                r = e.find((function(e) {
                    return e.key === n
                }));
            r ? r.value = o : e.push({
                key: n,
                value: o
            })
        })) : Gi.warn("updateCustomField target 或 source 不是数组，忽略此次更新。")
    }
    var uc = function(e) {
            return e === ro.GRP_PUBLIC
        },
        lc = function(e) {
            return e === ro.GRP_AVCHATROOM
        },
        dc = function(e) {
            return qi(e) && e === ro.CONV_SYSTEM
        };

    function pc(e, t) {
        var n = {};
        return Object.keys(e).forEach((function(o) {
            n[o] = t(e[o], o)
        })), n
    }

    function gc() {
        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        return "".concat(e() + e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e())
    }

    function hc() {
        var e = "unknown";
        if (vi && (e = "mac"), mi && (e = "windows"), ci && (e = "ios"), ui && (e = "android"), Zs) try {
            var t = ti.getSystemInfoSync().platform;
            void 0 !== t && (e = t)
        } catch (Ov) {}
        return e
    }

    function fc(e) {
        var t = e.originUrl,
            n = void 0 === t ? void 0 : t,
            o = e.originWidth,
            r = e.originHeight,
            a = e.min,
            s = void 0 === a ? 198 : a,
            i = parseInt(o),
            c = parseInt(r),
            u = {
                url: void 0,
                width: 0,
                height: 0
            };
        return (i <= c ? i : c) <= s ? (u.url = n, u.width = i, u.height = c) : (c <= i ? (u.width = Math.ceil(i * s / c), u.height = s) : (u.width = s, u.height = Math.ceil(c * s / i)), u.url = "".concat(n, 198 === s ? "?imageView2/3/w/198/h/198" : "?imageView2/3/w/720/h/720")), Bi(n) ? Hn(u, ["url"]) : u
    }

    function _c(e) {
        var t = e[2];
        e[2] = e[1], e[1] = t;
        for (var n = 0; n < e.length; n++) e[n].setType(n)
    }

    function mc(e) {
        var t = e.servcmd;
        return t.slice(t.indexOf(".") + 1)
    }

    function vc(e, t) {
        return Math.round(Number(e) * Math.pow(10, t)) / Math.pow(10, t)
    }

    function Mc(e, t) {
        return e.includes(t)
    }

    function yc(e, t) {
        return e.includes(t)
    }
    var Ic = Object.prototype.hasOwnProperty;

    function Sc(e) {
        if (null == e) return !0;
        if ("boolean" == typeof e) return !1;
        if ("number" == typeof e) return 0 === e;
        if ("string" == typeof e) return 0 === e.length;
        if ("function" == typeof e) return 0 === e.length;
        if (Array.isArray(e)) return 0 === e.length;
        if (e instanceof Error) return "" === e.message;
        if (Vi(e)) {
            for (var t in e)
                if (Ic.call(e, t)) return !1;
            return !0
        }
        return !("map" !== Yi(e) && ! function(e) {
            return "set" === Yi(e)
        }(e) && !Ui(e)) && 0 === e.size
    }

    function Tc(e, t, n) {
        if (void 0 === t) return !0;
        var o = !0;
        if ("object" === vo(t).toLowerCase()) Object.keys(t).forEach((function(r) {
            var a = 1 === e.length ? e[0][r] : void 0;
            o = !!Ec(a, t[r], n, r) && o
        }));
        else if ("array" === vo(t).toLowerCase())
            for (var r = 0; r < t.length; r++) o = !!Ec(e[r], t[r], n, t[r].name) && o;
        if (o) return o;
        throw new Error("Params validate failed.")
    }

    function Ec(e, t, n, o) {
        if (void 0 === t) return !0;
        var r = !0;
        return t.required && Sc(e) && (Ai.error("TIM [".concat(n, '] Missing required params: "').concat(o, '".')), r = !1), Sc(e) || vo(e).toLowerCase() === t.type.toLowerCase() || (Ai.error("TIM [".concat(n, '] Invalid params: type check failed for "').concat(o, '".Expected ').concat(t.type, ".")), r = !1), t.validator && !t.validator(e) && (Ai.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")), r = !1), r
    }
    var Dc = {
            f: xe
        },
        kc = N.f,
        Cc = at.forEach,
        Nc = j("hidden"),
        Ac = xe("toPrimitive"),
        Oc = ee.set,
        Lc = ee.getterFor("Symbol"),
        Rc = Object.prototype,
        wc = o.Symbol,
        bc = re("JSON", "stringify"),
        Pc = D.f,
        Gc = N.f,
        Uc = mr.f,
        Fc = c.f,
        qc = q("symbols"),
        xc = q("op-symbols"),
        Vc = q("string-to-symbol-registry"),
        Kc = q("symbol-to-string-registry"),
        Bc = q("wks"),
        jc = o.QObject,
        Hc = !jc || !jc.prototype || !jc.prototype.findChild,
        $c = a && r((function() {
            return 7 != Kt(Gc({}, "a", {
                get: function() {
                    return Gc(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var o = Pc(Rc, t);
            o && delete Rc[t], Gc(e, t, n), o && e !== Rc && Gc(Rc, t, o)
        } : Gc,
        Yc = function(e, t) {
            var n = qc[e] = Kt(wc.prototype);
            return Oc(n, {
                type: "Symbol",
                tag: e,
                description: t
            }), a || (n.description = t), n
        },
        zc = Ge ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof wc
        },
        Wc = function(e, t, n) {
            e === Rc && Wc(xc, t, n), k(e);
            var o = m(t, !0);
            return k(n), M(qc, o) ? (n.enumerable ? (M(e, Nc) && e[Nc][o] && (e[Nc][o] = !1), n = Kt(n, {
                enumerable: u(0, !1)
            })) : (M(e, Nc) || Gc(e, Nc, u(1, {})), e[Nc][o] = !0), $c(e, o, n)) : Gc(e, o, n)
        },
        Jc = function(e, t) {
            k(e);
            var n = f(t),
                o = Pt(n).concat(eu(n));
            return Cc(o, (function(t) {
                a && !Xc.call(n, t) || Wc(e, t, n[t])
            })), e
        },
        Xc = function(e) {
            var t = m(e, !0),
                n = Fc.call(this, t);
            return !(this === Rc && M(qc, t) && !M(xc, t)) && (!(n || !M(this, t) || !M(qc, t) || M(this, Nc) && this[Nc][t]) || n)
        },
        Qc = function(e, t) {
            var n = f(e),
                o = m(t, !0);
            if (n !== Rc || !M(qc, o) || M(xc, o)) {
                var r = Pc(n, o);
                return !r || !M(qc, o) || M(n, Nc) && n[Nc][o] || (r.enumerable = !0), r
            }
        },
        Zc = function(e) {
            var t = Uc(f(e)),
                n = [];
            return Cc(t, (function(e) {
                M(qc, e) || M(H, e) || n.push(e)
            })), n
        },
        eu = function(e) {
            var t = e === Rc,
                n = Uc(t ? xc : f(e)),
                o = [];
            return Cc(n, (function(e) {
                !M(qc, e) || t && !M(Rc, e) || o.push(qc[e])
            })), o
        };
    if (Pe || (te((wc = function() {
        if (this instanceof wc) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = K(e),
            n = function(e) {
                this === Rc && n.call(xc, e), M(this, Nc) && M(this[Nc], t) && (this[Nc][t] = !1), $c(this, t, u(1, e))
            };
        return a && Hc && $c(Rc, t, {
            configurable: !0,
            set: n
        }), Yc(t, e)
    }).prototype, "toString", (function() {
        return Lc(this).tag
    })), te(wc, "withoutSetter", (function(e) {
        return Yc(K(e), e)
    })), c.f = Xc, N.f = Wc, D.f = Qc, Me.f = mr.f = Zc, ye.f = eu, Dc.f = function(e) {
        return Yc(xe(e), e)
    }, a && (Gc(wc.prototype, "description", {
        configurable: !0,
        get: function() {
            return Lc(this).description
        }
    }), te(Rc, "propertyIsEnumerable", Xc, {
        unsafe: !0
    }))), Le({
        global: !0,
        wrap: !0,
        forced: !Pe,
        sham: !Pe
    }, {
        Symbol: wc
    }), Cc(Pt(Bc), (function(e) {
        ! function(e) {
            var t = ne.Symbol || (ne.Symbol = {});
            M(t, e) || kc(t, e, {
                value: Dc.f(e)
            })
        }(e)
    })), Le({
        target: "Symbol",
        stat: !0,
        forced: !Pe
    }, {
        for: function(e) {
            var t = String(e);
            if (M(Vc, t)) return Vc[t];
            var n = wc(t);
            return Vc[t] = n, Kc[n] = t, n
        },
        keyFor: function(e) {
            if (!zc(e)) throw TypeError(e + " is not a symbol");
            if (M(Kc, e)) return Kc[e]
        },
        useSetter: function() {
            Hc = !0
        },
        useSimple: function() {
            Hc = !1
        }
    }), Le({
        target: "Object",
        stat: !0,
        forced: !Pe,
        sham: !a
    }, {
        create: function(e, t) {
            return void 0 === t ? Kt(e) : Jc(Kt(e), t)
        },
        defineProperty: Wc,
        defineProperties: Jc,
        getOwnPropertyDescriptor: Qc
    }), Le({
        target: "Object",
        stat: !0,
        forced: !Pe
    }, {
        getOwnPropertyNames: Zc,
        getOwnPropertySymbols: eu
    }), Le({
        target: "Object",
        stat: !0,
        forced: r((function() {
            ye.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(e) {
            return ye.f(we(e))
        }
    }), bc) {
        var tu = !Pe || r((function() {
            var e = wc();
            return "[null]" != bc([e]) || "{}" != bc({
                a: e
            }) || "{}" != bc(Object(e))
        }));
        Le({
            target: "JSON",
            stat: !0,
            forced: tu
        }, {
            stringify: function(e, t, n) {
                for (var o, r = [e], a = 1; arguments.length > a;) r.push(arguments[a++]);
                if (o = t, (_(t) || void 0 !== e) && !zc(e)) return Re(t) || (t = function(e, t) {
                    if ("function" == typeof o && (t = o.call(this, e, t)), !zc(t)) return t
                }), r[1] = t, bc.apply(null, r)
            }
        })
    }
    wc.prototype[Ac] || A(wc.prototype, Ac, wc.prototype.valueOf), fn(wc, "Symbol"), H[Nc] = !0;
    var nu = N.f,
        ou = o.Symbol;
    if (a && "function" == typeof ou && (!("description" in ou.prototype) || void 0 !== ou().description)) {
        var ru = {},
            au = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof au ? new ou(e) : void 0 === e ? ou() : ou(e);
                return "" === e && (ru[t] = !0), t
            };
        Se(au, ou);
        var su = au.prototype = ou.prototype;
        su.constructor = au;
        var iu = su.toString,
            cu = "Symbol(test)" == String(ou("test")),
            uu = /^Symbol\((.*)\)[^)]+$/;
        nu(su, "description", {
            configurable: !0,
            get: function() {
                var e = _(this) ? this.valueOf() : this,
                    t = iu.call(e);
                if (M(ru, e)) return "";
                var n = cu ? t.slice(7, -1) : t.replace(uu, "$1");
                return "" === n ? void 0 : n
            }
        }), Le({
            global: !0,
            forced: !0
        }, {
            Symbol: au
        })
    }
    var lu, du = D.f,
        pu = "".startsWith,
        gu = Math.min,
        hu = ds("startsWith"),
        fu = !(hu || (lu = du(String.prototype, "startsWith"), !lu || lu.writable));
    Le({
        target: "String",
        proto: !0,
        forced: !fu && !hu
    }, {
        startsWith: function(e) {
            var t = String(h(this));
            us(e);
            var n = ue(gu(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                o = String(e);
            return pu ? pu.call(t, o, n) : t.slice(n, n + o.length) === o
        }
    });
    var _u = {
            UNSEND: "unSend",
            SUCCESS: "success",
            FAIL: "fail"
        },
        mu = {
            NOT_START: "notStart",
            PENDING: "pengding",
            RESOLVED: "resolved",
            REJECTED: "rejected"
        },
        vu = function(e) {
            return !!e && (!!(function(e) {
                return qi(e) && e.slice(0, 3) === ro.CONV_C2C
            }(e) || function(e) {
                return qi(e) && e.slice(0, 5) === ro.CONV_GROUP
            }(e) || dc(e)) || (console.warn("非法的会话 ID:".concat(e, "。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）")), !1))
        },
        Mu = "请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#",
        yu = function(e) {
            return e.param ? "".concat(e.api, " ").concat(e.param, " ").concat(e.desc, "。").concat(Mu).concat(e.api) : "".concat(e.api, " ").concat(e.desc, "。").concat(Mu).concat(e.api)
        },
        Iu = {
            type: "String",
            required: !0
        },
        Su = {
            type: "Array",
            required: !0
        },
        Tu = {
            type: "Object",
            required: !0
        },
        Eu = {
            login: {
                userID: Iu,
                userSig: Iu
            },
            addToBlacklist: {
                userIDList: Su
            },
            on: [{
                name: "eventName",
                type: "String",
                validator: function(e) {
                    return "string" == typeof e && 0 !== e.length || (console.warn(yu({
                        api: "on",
                        param: "eventName",
                        desc: "类型必须为 String，且不能为空"
                    })), !1)
                }
            }, {
                name: "handler",
                type: "Function",
                validator: function(e) {
                    return "function" != typeof e ? (console.warn(yu({
                        api: "on",
                        param: "handler",
                        desc: "参数必须为 Function"
                    })), !1) : ("" === e.name && console.warn("on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"), !0)
                }
            }],
            once: [{
                name: "eventName",
                type: "String",
                validator: function(e) {
                    return "string" == typeof e && 0 !== e.length || (console.warn(yu({
                        api: "once",
                        param: "eventName",
                        desc: "类型必须为 String，且不能为空"
                    })), !1)
                }
            }, {
                name: "handler",
                type: "Function",
                validator: function(e) {
                    return "function" != typeof e ? (console.warn(yu({
                        api: "once",
                        param: "handler",
                        desc: "参数必须为 Function"
                    })), !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"), !0)
                }
            }],
            off: [{
                name: "eventName",
                type: "String",
                validator: function(e) {
                    return "string" == typeof e && 0 !== e.length || (console.warn(yu({
                        api: "off",
                        param: "eventName",
                        desc: "类型必须为 String，且不能为空"
                    })), !1)
                }
            }, {
                name: "handler",
                type: "Function",
                validator: function(e) {
                    return "function" != typeof e ? (console.warn(yu({
                        api: "off",
                        param: "handler",
                        desc: "参数必须为 Function"
                    })), !1) : ("" === e.name && console.warn("off 接口无法为匿名函数取消监听事件。"), !0)
                }
            }],
            sendMessage: [Fn({
                name: "message"
            }, Tu)],
            getMessageList: {
                conversationID: Fn({}, Iu, {
                    validator: function(e) {
                        return vu(e)
                    }
                }),
                nextReqMessageID: {
                    type: "String"
                },
                count: {
                    type: "Number",
                    validator: function(e) {
                        return !(!Bi(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn(yu({
                            api: "getMessageList",
                            param: "count",
                            desc: "必须为正整数"
                        })), !1)
                    }
                }
            },
            setMessageRead: {
                conversationID: Fn({}, Iu, {
                    validator: function(e) {
                        return vu(e)
                    }
                })
            },
            getConversationProfile: [Fn({
                name: "conversationID"
            }, Iu, {
                validator: function(e) {
                    return vu(e)
                }
            })],
            deleteConversation: [Fn({
                name: "conversationID"
            }, Iu, {
                validator: function(e) {
                    return vu(e)
                }
            })],
            getGroupList: {
                groupProfileFilter: {
                    type: "Array"
                }
            },
            getGroupProfile: {
                groupID: Iu,
                groupCustomFieldFilter: {
                    type: "Array"
                },
                memberCustomFieldFilter: {
                    type: "Array"
                }
            },
            getGroupProfileAdvance: {
                groupIDList: Su
            },
            createGroup: {
                name: Iu
            },
            joinGroup: {
                groupID: Iu,
                type: {
                    type: "String"
                },
                applyMessage: {
                    type: "String"
                }
            },
            quitGroup: [Fn({
                name: "groupID"
            }, Iu)],
            handleApplication: {
                message: Tu,
                handleAction: Iu,
                handleMessage: {
                    type: "String"
                }
            },
            changeGroupOwner: {
                groupID: Iu,
                newOwnerID: Iu
            },
            updateGroupProfile: {
                groupID: Iu,
                muteAllMembers: {
                    type: "Boolean"
                }
            },
            dismissGroup: [Fn({
                name: "groupID"
            }, Iu)],
            searchGroupByID: [Fn({
                name: "groupID"
            }, Iu)],
            getGroupMemberList: {
                groupID: Iu,
                offset: {
                    type: "Number"
                },
                count: {
                    type: "Number"
                }
            },
            getGroupMemberProfile: {
                groupID: Iu,
                userIDList: Su,
                memberCustomFieldFilter: {
                    type: "Array"
                }
            },
            addGroupMember: {
                groupID: Iu,
                userIDList: Su
            },
            setGroupMemberRole: {
                groupID: Iu,
                userID: Iu,
                role: Iu
            },
            setGroupMemberMuteTime: {
                groupID: Iu,
                userID: Iu,
                muteTime: {
                    type: "Number",
                    validator: function(e) {
                        return e >= 0
                    }
                }
            },
            setGroupMemberNameCard: {
                groupID: Iu,
                userID: Iu,
                nameCard: {
                    type: "String",
                    validator: function(e) {
                        return qi(e) ? (e.length, !0) : (console.warn(yu({
                            api: "setGroupMemberNameCard",
                            param: "nameCard",
                            desc: "类型必须为 String"
                        })), !1)
                    }
                }
            },
            setMessageRemindType: {
                groupID: Iu,
                messageRemindType: Iu
            },
            setGroupMemberCustomField: {
                groupID: Iu,
                userID: {
                    type: "String"
                },
                memberCustomField: Su
            },
            deleteGroupMember: {
                groupID: Iu
            },
            createTextMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        return Vi(e) ? qi(e.text) ? 0 !== e.text.length || (console.warn(yu({
                            api: "createTextMessage",
                            desc: "消息内容不能为空"
                        })), !1) : (console.warn(yu({
                            api: "createTextMessage",
                            param: "payload.text",
                            desc: "类型必须为 String"
                        })), !1) : (console.warn(yu({
                            api: "createTextMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1)
                    }
                })
            },
            createTextAtMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        return Vi(e) ? qi(e.text) ? 0 === e.text.length ? (console.warn(yu({
                            api: "createTextAtMessage",
                            desc: "消息内容不能为空"
                        })), !1) : !(e.atUserList && !Ki(e.atUserList)) || (console.warn(yu({
                            api: "createTextAtMessage",
                            desc: "payload.atUserList 类型必须为数组"
                        })), !1) : (console.warn(yu({
                            api: "createTextAtMessage",
                            param: "payload.text",
                            desc: "类型必须为 String"
                        })), !1) : (console.warn(yu({
                            api: "createTextAtMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1)
                    }
                })
            },
            createCustomMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        return Vi(e) ? e.data && !qi(e.data) ? (console.warn(yu({
                            api: "createCustomMessage",
                            param: "payload.data",
                            desc: "类型必须为 String"
                        })), !1) : e.description && !qi(e.description) ? (console.warn(yu({
                            api: "createCustomMessage",
                            param: "payload.description",
                            desc: "类型必须为 String"
                        })), !1) : !(e.extension && !qi(e.extension)) || (console.warn(yu({
                            api: "createCustomMessage",
                            param: "payload.extension",
                            desc: "类型必须为 String"
                        })), !1) : (console.warn(yu({
                            api: "createCustomMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1)
                    }
                })
            },
            createImageMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        if (!Vi(e)) return console.warn(yu({
                            api: "createImageMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1;
                        if (Bi(e.file)) return console.warn(yu({
                            api: "createImageMessage",
                            param: "payload.file",
                            desc: "不能为 undefined"
                        })), !1;
                        if (ei) {
                            if (!(e.file instanceof HTMLInputElement || Ui(e.file))) return Vi(e.file) && "undefined" != typeof uni ? 0 !== e.file.tempFilePaths.length && 0 !== e.file.tempFiles.length || (console.warn(yu({
                                api: "createImageMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })), !1) : (console.warn(yu({
                                api: "createImageMessage",
                                param: "payload.file",
                                desc: "类型必须是 HTMLInputElement 或 File"
                            })), !1);
                            if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(yu({
                                api: "createImageMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })), !1
                        }
                        return !0
                    },
                    onProgress: {
                        type: "Function",
                        required: !1,
                        validator: function(e) {
                            return Bi(e) && console.warn(yu({
                                api: "createImageMessage",
                                desc: "没有 onProgress 回调，您将无法获取上传进度"
                            })), !0
                        }
                    }
                })
            },
            createAudioMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        return !!Vi(e) || (console.warn(yu({
                            api: "createAudioMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1)
                    }
                }),
                onProgress: {
                    type: "Function",
                    required: !1,
                    validator: function(e) {
                        return Bi(e) && console.warn(yu({
                            api: "createAudioMessage",
                            desc: "没有 onProgress 回调，您将无法获取上传进度"
                        })), !0
                    }
                }
            },
            createVideoMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        if (!Vi(e)) return console.warn(yu({
                            api: "createVideoMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1;
                        if (Bi(e.file)) return console.warn(yu({
                            api: "createVideoMessage",
                            param: "payload.file",
                            desc: "不能为 undefined"
                        })), !1;
                        if (ei) {
                            if (!(e.file instanceof HTMLInputElement || Ui(e.file))) return Vi(e.file) && "undefined" != typeof uni ? !!Ui(e.file.tempFile) || (console.warn(yu({
                                api: "createVideoMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })), !1) : (console.warn(yu({
                                api: "createVideoMessage",
                                param: "payload.file",
                                desc: "类型必须是 HTMLInputElement 或 File"
                            })), !1);
                            if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(yu({
                                api: "createVideoMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })), !1
                        }
                        return !0
                    }
                }),
                onProgress: {
                    type: "Function",
                    required: !1,
                    validator: function(e) {
                        return Bi(e) && console.warn(yu({
                            api: "createVideoMessage",
                            desc: "没有 onProgress 回调，您将无法获取上传进度"
                        })), !0
                    }
                }
            },
            createFaceMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        return Vi(e) ? Fi(e.index) ? !!qi(e.data) || (console.warn(yu({
                            api: "createFaceMessage",
                            param: "payload.data",
                            desc: "类型必须为 String"
                        })), !1) : (console.warn(yu({
                            api: "createFaceMessage",
                            param: "payload.index",
                            desc: "类型必须为 Number"
                        })), !1) : (console.warn(yu({
                            api: "createFaceMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1)
                    }
                })
            },
            createFileMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        if (!Vi(e)) return console.warn(yu({
                            api: "createFileMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })), !1;
                        if (Bi(e.file)) return console.warn(yu({
                            api: "createFileMessage",
                            param: "payload.file",
                            desc: "不能为 undefined"
                        })), !1;
                        if (ei) {
                            if (!(e.file instanceof HTMLInputElement || Ui(e.file))) return Vi(e.file) && "undefined" != typeof uni ? 0 !== e.file.tempFilePaths.length && 0 !== e.file.tempFiles.length || (console.warn(yu({
                                api: "createFileMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })), !1) : (console.warn(yu({
                                api: "createFileMessage",
                                param: "payload.file",
                                desc: "类型必须是 HTMLInputElement 或 File"
                            })), !1);
                            if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(yu({
                                api: "createFileMessage",
                                desc: "您没有选择文件，无法发送"
                            })), !1
                        }
                        return !0
                    }
                }),
                onProgress: {
                    type: "Function",
                    required: !1,
                    validator: function(e) {
                        return Bi(e) && console.warn(yu({
                            api: "createFileMessage",
                            desc: "没有 onProgress 回调，您将无法获取上传进度"
                        })), !0
                    }
                }
            },
            createMergerMessage: {
                to: Iu,
                conversationType: Iu,
                payload: Fn({}, Tu, {
                    validator: function(e) {
                        if (Sc(e.messageList)) return console.warn(yu({
                            api: "createMergerMessage",
                            desc: "不能为空数组"
                        })), !1;
                        if (Sc(e.compatibleText)) return console.warn(yu({
                            api: "createMergerMessage",
                            desc: "类型必须为 String，且不能为空"
                        })), !1;
                        var t = !1;
                        return e.messageList.forEach((function(e) {
                            e.status === _u.FAIL && (t = !0)
                        })), !t || (console.warn(yu({
                            api: "createMergerMessage",
                            desc: "不支持合并已发送失败的消息"
                        })), !1)
                    }
                })
            },
            revokeMessage: [Fn({
                name: "message"
            }, Tu, {
                validator: function(e) {
                    return Sc(e) ? (console.warn("revokeMessage 请传入消息（Message）实例"), !1) : e.conversationType === ro.CONV_SYSTEM ? (console.warn("revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"), !1) : !0 !== e.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"), !1)
                }
            })],
            deleteMessage: [Fn({
                name: "messageList"
            }, Su, {
                validator: function(e) {
                    return !Sc(e) || (console.warn(yu({
                        api: "deleteMessage",
                        param: "messageList",
                        desc: "不能为空数组"
                    })), !1)
                }
            })],
            getUserProfile: {
                userIDList: {
                    type: "Array",
                    validator: function(e) {
                        return Ki(e) ? (0 === e.length && console.warn(yu({
                            api: "getUserProfile",
                            param: "userIDList",
                            desc: "不能为空数组"
                        })), !0) : (console.warn(yu({
                            api: "getUserProfile",
                            param: "userIDList",
                            desc: "必须为数组"
                        })), !1)
                    }
                }
            },
            updateMyProfile: {
                profileCustomField: {
                    type: "Array",
                    validator: function(e) {
                        return !!Bi(e) || (!!Ki(e) || (console.warn(yu({
                            api: "updateMyProfile",
                            param: "profileCustomField",
                            desc: "必须为数组"
                        })), !1))
                    }
                }
            },
            addFriend: {
                to: Iu,
                source: {
                    type: "String",
                    required: !0,
                    validator: function(e) {
                        return !!e && (e.startsWith("AddSource_Type_") ? !(e.replace("AddSource_Type_", "").length > 8) || (console.warn(yu({
                            api: "addFriend",
                            desc: "加好友来源字段的关键字长度不得超过8字节"
                        })), !1) : (console.warn(yu({
                            api: "addFriend",
                            desc: "加好友来源字段的前缀必须是：AddSource_Type_"
                        })), !1))
                    }
                },
                remark: {
                    type: "String",
                    required: !1,
                    validator: function(e) {
                        return !(qi(e) && e.length > 96) || (console.warn(yu({
                            api: "updateFriend",
                            desc: " 备注长度最长不得超过 96 个字节"
                        })), !1)
                    }
                }
            },
            deleteFriend: {
                userIDList: Su
            },
            checkFriend: {
                userIDList: Su
            },
            getFriendProfile: {
                userIDList: Su
            },
            updateFriend: {
                userID: Iu,
                remark: {
                    type: "String",
                    required: !1,
                    validator: function(e) {
                        return !(qi(e) && e.length > 96) || (console.warn(yu({
                            api: "updateFriend",
                            desc: " 备注长度最长不得超过 96 个字节"
                        })), !1)
                    }
                },
                friendCustomField: {
                    type: "Array",
                    required: !1,
                    validator: function(e) {
                        if (e) {
                            if (!Ki(e)) return console.warn(yu({
                                api: "updateFriend",
                                param: "friendCustomField",
                                desc: "必须为数组"
                            })), !1;
                            var t = !0;
                            return e.forEach((function(e) {
                                return qi(e.key) && -1 !== e.key.indexOf("Tag_SNS_Custom") ? qi(e.value) ? e.value.length > 8 ? (console.warn(yu({
                                    api: "updateFriend",
                                    desc: "好友自定义字段的关键字长度不得超过8字节"
                                })), t = !1) : void 0 : (console.warn(yu({
                                    api: "updateFriend",
                                    desc: "类型必须为 String"
                                })), t = !1) : (console.warn(yu({
                                    api: "updateFriend",
                                    desc: "好友自定义字段的前缀必须是 Tag_SNS_Custom"
                                })), t = !1)
                            })), t
                        }
                        return !0
                    }
                }
            },
            acceptFriendApplication: {
                userID: Iu
            },
            refuseFriendApplication: {
                userID: Iu
            },
            deleteFriendApplication: {
                userID: Iu
            },
            createFriendGroup: {
                name: Iu
            },
            deleteFriendGroup: {
                name: Iu
            },
            addToFriendGroup: {
                name: Iu,
                userIDList: Su
            },
            removeFromFriendGroup: {
                name: Iu,
                userIDList: Su
            },
            renameFriendGroup: {
                oldName: Iu,
                newName: Iu
            }
        },
        Du = {
            login: "login",
            logout: "logout",
            on: "on",
            once: "once",
            off: "off",
            setLogLevel: "setLogLevel",
            registerPlugin: "registerPlugin",
            destroy: "destroy",
            createTextMessage: "createTextMessage",
            createTextAtMessage: "createTextAtMessage",
            createImageMessage: "createImageMessage",
            createAudioMessage: "createAudioMessage",
            createVideoMessage: "createVideoMessage",
            createCustomMessage: "createCustomMessage",
            createFaceMessage: "createFaceMessage",
            createFileMessage: "createFileMessage",
            createMergerMessage: "createMergerMessage",
            downloadMergerMessage: "downloadMergerMessage",
            createForwardMessage: "createForwardMessage",
            sendMessage: "sendMessage",
            resendMessage: "resendMessage",
            getMessageList: "getMessageList",
            setMessageRead: "setMessageRead",
            revokeMessage: "revokeMessage",
            deleteMessage: "deleteMessage",
            getConversationList: "getConversationList",
            getConversationProfile: "getConversationProfile",
            deleteConversation: "deleteConversation",
            getGroupList: "getGroupList",
            getGroupProfile: "getGroupProfile",
            createGroup: "createGroup",
            joinGroup: "joinGroup",
            updateGroupProfile: "updateGroupProfile",
            quitGroup: "quitGroup",
            dismissGroup: "dismissGroup",
            changeGroupOwner: "changeGroupOwner",
            searchGroupByID: "searchGroupByID",
            setMessageRemindType: "setMessageRemindType",
            handleGroupApplication: "handleGroupApplication",
            getGroupMemberProfile: "getGroupMemberProfile",
            getGroupMemberList: "getGroupMemberList",
            addGroupMember: "addGroupMember",
            deleteGroupMember: "deleteGroupMember",
            setGroupMemberNameCard: "setGroupMemberNameCard",
            setGroupMemberMuteTime: "setGroupMemberMuteTime",
            setGroupMemberRole: "setGroupMemberRole",
            setGroupMemberCustomField: "setGroupMemberCustomField",
            getGroupOnlineMemberCount: "getGroupOnlineMemberCount",
            getMyProfile: "getMyProfile",
            getUserProfile: "getUserProfile",
            updateMyProfile: "updateMyProfile",
            getBlacklist: "getBlacklist",
            addToBlacklist: "addToBlacklist",
            removeFromBlacklist: "removeFromBlacklist",
            getFriendList: "getFriendList",
            addFriend: "addFriend",
            deleteFriend: "deleteFriend",
            checkFriend: "checkFriend",
            updateFriend: "updateFriend",
            getFriendProfile: "getFriendProfile",
            getFriendApplicationList: "getFriendApplicationList",
            refuseFriendApplication: "refuseFriendApplication",
            deleteFriendApplication: "deleteFriendApplication",
            acceptFriendApplication: "acceptFriendApplication",
            setFriendApplicationRead: "setFriendApplicationRead",
            getFriendGroupList: "getFriendGroupList",
            createFriendGroup: "createFriendGroup",
            renameFriendGroup: "renameFriendGroup",
            deleteFriendGroup: "deleteFriendGroup",
            addToFriendGroup: "addToFriendGroup",
            removeFromFriendGroup: "removeFromFriendGroup",
            callExperimentalAPI: "callExperimentalAPI"
        },
        ku = !!Dr && r((function() {
            Dr.prototype.finally.call({
                then: function() {}
            }, (function() {}))
        }));
    Le({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: ku
    }, {
        finally: function(e) {
            var t = Rr(this, re("Promise")),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return _a(t, e()).then((function() {
                    return n
                }))
            } : e, n ? function(n) {
                return _a(t, e()).then((function() {
                    throw n
                }))
            } : e)
        }
    }), "function" != typeof Dr || Dr.prototype.finally || te(Dr.prototype, "finally", re("Promise").prototype.finally);
    var Cu = [].slice,
        Nu = /MSIE .\./.test(Be),
        Au = function(e) {
            return function(t, n) {
                var o = arguments.length > 2,
                    r = o ? Cu.call(arguments, 2) : void 0;
                return e(o ? function() {
                    ("function" == typeof t ? t : Function(t)).apply(this, r)
                } : t, n)
            }
        };
    Le({
        global: !0,
        bind: !0,
        forced: Nu
    }, {
        setTimeout: Au(o.setTimeout),
        setInterval: Au(o.setInterval)
    });
    var Ou = at.filter,
        Lu = We("filter"),
        Ru = lt("filter");
    Le({
        target: "Array",
        proto: !0,
        forced: !Lu || !Ru
    }, {
        filter: function(e) {
            return Ou(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var wu, bu = "sign",
        Pu = "message",
        Gu = "user",
        Uu = "c2c",
        Fu = "group",
        qu = "sns",
        xu = "groupMember",
        Vu = "conversation",
        Ku = "context",
        Bu = "storage",
        ju = "eventStat",
        Hu = "netMonitor",
        $u = "bigDataChannel",
        Yu = "upload",
        zu = "plugin",
        Wu = "syncUnreadMessage",
        Ju = "session",
        Xu = "channel",
        Qu = "message_loss_detection",
        Zu = "cloudControl",
        el = "pullGroupMessage",
        tl = "qualityStat",
        nl = function() {
            function e(t) {
                wn(this, e), this._moduleManager = t, this._className = ""
            }
            return Pn(e, [{
                key: "isLoggedIn",
                value: function() {
                    return this._moduleManager.getModule(Ku).isLoggedIn()
                }
            }, {
                key: "isOversea",
                value: function() {
                    return this._moduleManager.getModule(Ku).isOversea()
                }
            }, {
                key: "getMyUserID",
                value: function() {
                    return this._moduleManager.getModule(Ku).getUserID()
                }
            }, {
                key: "getModule",
                value: function(e) {
                    return this._moduleManager.getModule(e)
                }
            }, {
                key: "getPlatform",
                value: function() {
                    return ni
                }
            }, {
                key: "getNetworkType",
                value: function() {
                    return this._moduleManager.getModule(Hu).getNetworkType()
                }
            }, {
                key: "probeNetwork",
                value: function() {
                    return this._moduleManager.getModule(Hu).probe()
                }
            }, {
                key: "getCloudConfig",
                value: function(e) {
                    return this._moduleManager.getModule(Zu).getCloudConfig(e)
                }
            }, {
                key: "emitOuterEvent",
                value: function(e, t) {
                    this._moduleManager.getOuterEmitterInstance().emit(e, t)
                }
            }, {
                key: "emitInnerEvent",
                value: function(e, t) {
                    this._moduleManager.getInnerEmitterInstance().emit(e, t)
                }
            }, {
                key: "getInnerEmitterInstance",
                value: function() {
                    return this._moduleManager.getInnerEmitterInstance()
                }
            }, {
                key: "generateTjgID",
                value: function(e) {
                    return this._moduleManager.getModule(Ku).getTinyID() + "-" + e.random
                }
            }, {
                key: "filterModifiedMessage",
                value: function(e) {
                    if (!Sc(e)) {
                        var t = e.filter((function(e) {
                            return !0 === e.isModified
                        }));
                        t.length > 0 && this.emitOuterEvent(oo.MESSAGE_MODIFIED, t)
                    }
                }
            }, {
                key: "filterUnmodifiedMessage",
                value: function(e) {
                    return Sc(e) ? [] : e.filter((function(e) {
                        return !1 === e.isModified
                    }))
                }
            }, {
                key: "request",
                value: function(e) {
                    return this._moduleManager.getModule(Ju).request(e)
                }
            }]), e
        }(),
        ol = "wslogin",
        rl = "wslogout",
        al = "wshello",
        sl = "getmsg",
        il = "authkey",
        cl = "sendmsg",
        ul = "send_group_msg",
        ll = "portrait_get_all",
        dl = "portrait_set",
        pl = "black_list_get",
        gl = "black_list_add",
        hl = "black_list_delete",
        fl = "msgwithdraw",
        _l = "msgreaded",
        ml = "getroammsg",
        vl = "get_peer_read_time",
        Ml = "delete_c2c_msg_ramble",
        yl = "page_get",
        Il = "get",
        Sl = "delete",
        Tl = "deletemsg",
        El = "get_joined_group_list",
        Dl = "get_group_info",
        kl = "create_group",
        Cl = "destroy_group",
        Nl = "modify_group_base_info",
        Al = "apply_join_group",
        Ol = "apply_join_group_noauth",
        Ll = "quit_group",
        Rl = "get_group_public_info",
        wl = "change_group_owner",
        bl = "handle_apply_join_group",
        Pl = "handle_invite_join_group",
        Gl = "group_msg_recall",
        Ul = "msg_read_report",
        Fl = "group_msg_get",
        ql = "get_pendency",
        xl = "deletemsg",
        Vl = "get_msg",
        Kl = "get_msg_noauth",
        Bl = "get_online_member_num",
        jl = "delete_group_ramble_msg_by_seq",
        Hl = "get_group_member_info",
        $l = "get_specified_group_member_info",
        Yl = "add_group_member",
        zl = "delete_group_member",
        Wl = "modify_group_member_info",
        Jl = "cos",
        Xl = "pre_sig",
        Ql = "tim_web_report_v2",
        Zl = "alive",
        ed = "msg_push",
        td = "ws_msg_push_ack",
        nd = "stat_forceoffline",
        od = "save_relay_json_msg",
        rd = "get_relay_json_msg",
        ad = "fetch_config",
        sd = "push_configv2",
        id = {
            NO_SDKAPPID: 2e3,
            NO_ACCOUNT_TYPE: 2001,
            NO_IDENTIFIER: 2002,
            NO_USERSIG: 2003,
            NO_TINYID: 2022,
            NO_A2KEY: 2023,
            USER_NOT_LOGGED_IN: 2024,
            REPEAT_LOGIN: 2025,
            COS_UNDETECTED: 2040,
            COS_GET_SIG_FAIL: 2041,
            MESSAGE_SEND_FAIL: 2100,
            MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103,
            MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105,
            MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106,
            MESSAGE_FILE_IS_EMPTY: 2108,
            MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109,
            MESSAGE_REVOKE_FAIL: 2110,
            MESSAGE_DELETE_FAIL: 2111,
            MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251,
            MESSAGE_IMAGE_TYPES_LIMIT: 2252,
            MESSAGE_IMAGE_SIZE_LIMIT: 2253,
            MESSAGE_AUDIO_UPLOAD_FAIL: 2300,
            MESSAGE_AUDIO_SIZE_LIMIT: 2301,
            MESSAGE_VIDEO_UPLOAD_FAIL: 2350,
            MESSAGE_VIDEO_SIZE_LIMIT: 2351,
            MESSAGE_VIDEO_TYPES_LIMIT: 2352,
            MESSAGE_FILE_UPLOAD_FAIL: 2400,
            MESSAGE_FILE_SELECT_FILE_FIRST: 2401,
            MESSAGE_FILE_SIZE_LIMIT: 2402,
            MESSAGE_FILE_URL_IS_EMPTY: 2403,
            MESSAGE_MERGER_TYPE_INVALID: 2450,
            MESSAGE_MERGER_KEY_INVALID: 2451,
            MESSAGE_MERGER_DOWNLOAD_FAIL: 2452,
            MESSAGE_FORWARD_TYPE_INVALID: 2453,
            CONVERSATION_NOT_FOUND: 2500,
            USER_OR_GROUP_NOT_FOUND: 2501,
            CONVERSATION_UN_RECORDED_TYPE: 2502,
            ILLEGAL_GROUP_TYPE: 2600,
            CANNOT_JOIN_WORK: 2601,
            CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620,
            CANNOT_CHANGE_OWNER_TO_SELF: 2621,
            CANNOT_DISMISS_Work: 2622,
            MEMBER_NOT_IN_GROUP: 2623,
            JOIN_GROUP_FAIL: 2660,
            CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661,
            CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662,
            CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680,
            NOT_OWNER: 2681,
            CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682,
            INVALID_MEMBER_ROLE: 2683,
            CANNOT_SET_SELF_MEMBER_ROLE: 2684,
            CANNOT_MUTE_SELF: 2685,
            NOT_MY_FRIEND: 2700,
            ALREADY_MY_FRIEND: 2701,
            FRIEND_GROUP_EXISTED: 2710,
            FRIEND_GROUP_NOT_EXIST: 2711,
            FRIEND_APPLICATION_NOT_EXIST: 2716,
            UPDATE_PROFILE_INVALID_PARAM: 2721,
            UPDATE_PROFILE_NO_KEY: 2722,
            ADD_BLACKLIST_INVALID_PARAM: 2740,
            DEL_BLACKLIST_INVALID_PARAM: 2741,
            CANNOT_ADD_SELF_TO_BLACKLIST: 2742,
            ADD_FRIEND_INVALID_PARAM: 2760,
            NETWORK_ERROR: 2800,
            NETWORK_TIMEOUT: 2801,
            NETWORK_BASE_OPTIONS_NO_URL: 2802,
            NETWORK_UNDEFINED_SERVER_NAME: 2803,
            NETWORK_PACKAGE_UNDEFINED: 2804,
            NO_NETWORK: 2805,
            CONVERTOR_IRREGULAR_PARAMS: 2900,
            NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901,
            NOTICE_RUNLOOP_OFFSET_LOST: 2902,
            UNCAUGHT_ERROR: 2903,
            GET_LONGPOLL_ID_FAILED: 2904,
            INVALID_OPERATION: 2905,
            CANNOT_FIND_PROTOCOL: 2997,
            CANNOT_FIND_MODULE: 2998,
            SDK_IS_NOT_READY: 2999,
            LONG_POLL_KICK_OUT: 91101,
            MESSAGE_A2KEY_EXPIRED: 20002,
            ACCOUNT_A2KEY_EXPIRED: 70001,
            LONG_POLL_API_PARAM_ERROR: 90001,
            HELLO_ANSWER_KICKED_OUT: 1002
        },
        cd = "无 SDKAppID",
        ud = "无 userID",
        ld = "无 userSig",
        dd = "无 tinyID",
        pd = "无 a2key",
        gd = "用户未登录",
        hd = "重复登录",
        fd = "未检测到 COS 上传插件",
        _d = "获取 COS 预签名 URL 失败",
        md = "消息发送失败",
        vd = "需要 Message 的实例",
        Md = 'Message.conversationType 只能为 "C2C" 或 "GROUP"',
        yd = "无法发送空文件",
        Id = "回调函数运行时遇到错误，请检查接入侧代码",
        Sd = "消息撤回失败",
        Td = "消息删除失败",
        Ed = "请先选择一个图片",
        Dd = "只允许上传 jpg png jpeg gif bmp格式的图片",
        kd = "图片大小超过20M，无法发送",
        Cd = "语音上传失败",
        Nd = "语音大小大于20M，无法发送",
        Ad = "视频上传失败",
        Od = "视频大小超过100M，无法发送",
        Ld = "只允许上传 mp4 格式的视频",
        Rd = "文件上传失败",
        wd = "请先选择一个文件",
        bd = "文件大小超过100M，无法发送 ",
        Pd = "缺少必要的参数文件 URL",
        Gd = "非合并消息",
        Ud = "合并消息的 messageKey 无效",
        Fd = "下载合并消息失败",
        qd = "选择的消息类型（如群提示消息）不可以转发",
        xd = "没有找到相应的会话，请检查传入参数",
        Vd = "没有找到相应的用户或群组，请检查传入参数",
        Kd = "未记录的会话类型",
        Bd = "非法的群类型，请检查传入参数",
        jd = "不能加入 Work 类型的群组",
        Hd = "AVChatRoom 类型的群组不能转让群主",
        $d = "不能把群主转让给自己",
        Yd = "不能解散 Work 类型的群组",
        zd = "用户不在该群组内",
        Wd = "加群失败，请检查传入参数或重试",
        Jd = "AVChatRoom 类型的群不支持邀请群成员",
        Xd = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群",
        Qd = "不能在 AVChatRoom 类型的群组踢人",
        Zd = "你不是群主，只有群主才有权限操作",
        ep = "不能在 Work / AVChatRoom 类型的群中设置群成员身份",
        tp = "不合法的群成员身份，请检查传入参数",
        np = "不能设置自己的群成员身份，请检查传入参数",
        op = "不能将自己禁言，请检查传入参数",
        rp = "传入 updateMyProfile 接口的参数无效",
        ap = "updateMyProfile 无标配资料字段或自定义资料字段",
        sp = "传入 addToBlacklist 接口的参数无效",
        ip = "传入 removeFromBlacklist 接口的参数无效",
        cp = "不能拉黑自己",
        up = "网络错误",
        lp = "请求超时",
        dp = "未连接到网络",
        pp = "无效操作，如调用了未定义或者未实现的方法等",
        gp = "无法找到协议",
        hp = "无法找到模块",
        fp = "接口需要 SDK 处于 ready 状态后才能调用",
        _p = "upload",
        mp = "networkRTT",
        vp = "messageE2EDelay",
        Mp = "sendMessageC2C",
        yp = "sendMessageGroup",
        Ip = "sendMessageGroupAV",
        Sp = "sendMessageRichMedia",
        Tp = "cosUpload",
        Ep = "messageReceivedGroup",
        Dp = "messageReceivedGroupAVPush",
        kp = "messageReceivedGroupAVPull",
        Cp = (Gn(wu = {}, mp, 2), Gn(wu, vp, 3), Gn(wu, Mp, 4), Gn(wu, yp, 5), Gn(wu, Ip, 6), Gn(wu, Sp, 7), Gn(wu, Ep, 8), Gn(wu, Dp, 9), Gn(wu, kp, 10), Gn(wu, Tp, 11), wu),
        Np = {
            info: 4,
            warning: 5,
            error: 6
        },
        Ap = {
            wifi: 1,
            "2g": 2,
            "3g": 3,
            "4g": 4,
            "5g": 5,
            unknown: 6,
            none: 7,
            online: 8
        },
        Op = function() {
            function e(t) {
                wn(this, e), this.eventType = 0, this.timestamp = 0, this.networkType = 8, this.code = 0, this.message = "", this.moreMessage = "", this.extension = t, this.costTime = 0, this.duplicate = !1, this.level = 4, this._sentFlag = !1, this._startts = Li()
            }
            return Pn(e, [{
                key: "updateTimeStamp",
                value: function() {
                    this.timestamp = Li()
                }
            }, {
                key: "start",
                value: function(e) {
                    return this._startts = e, this
                }
            }, {
                key: "end",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!this._sentFlag) {
                        var n = Li();
                        this.costTime = n - this._startts, this.setMoreMessage("host:".concat(hc(), " startts:").concat(this._startts, " endts:").concat(n)), t ? (this._sentFlag = !0, this._eventStatModule && this._eventStatModule.pushIn(this)) : setTimeout((function() {
                            e._sentFlag = !0, e._eventStatModule && e._eventStatModule.pushIn(e)
                        }), 0)
                    }
                }
            }, {
                key: "setError",
                value: function(e, t, n) {
                    return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ? (e.code && this.setCode(e.code), e.message && this.setMoreMessage(e.message)) : (this.setCode(id.NO_NETWORK), this.setMoreMessage(dp)), this.setLevel("error")), this) : (Gi.warn("SSOLogData.setError value not instanceof Error, please check!"), this)
                }
            }, {
                key: "setCode",
                value: function(e) {
                    return Bi(e) || this._sentFlag || ("ECONNABORTED" === e && (this.code = 103), Fi(e) ? this.code = e : Gi.warn("SSOLogData.setCode value not a number, please check!", e, Rn(e))), this
                }
            }, {
                key: "setMessage",
                value: function(e) {
                    return Bi(e) || this._sentFlag || (Fi(e) && (this.message = e.toString()), qi(e) && (this.message = e)), this
                }
            }, {
                key: "setLevel",
                value: function(e) {
                    return Bi(e) || this._sentFlag || (this.level = Np[e]), this
                }
            }, {
                key: "setMoreMessage",
                value: function(e) {
                    return Sc(this.moreMessage) ? this.moreMessage = "".concat(e) : this.moreMessage += " ".concat(e), this
                }
            }, {
                key: "setNetworkType",
                value: function(e) {
                    return Bi(e) || Bi(Ap[e]) ? Gi.warn("SSOLogData.setNetworkType value is undefined, please check!") : this.networkType = Ap[e], this
                }
            }, {
                key: "getStartTs",
                value: function() {
                    return this._startts
                }
            }], [{
                key: "bindEventStatModule",
                value: function(t) {
                    e.prototype._eventStatModule = t
                }
            }]), e
        }(),
        Lp = "sdkConstruct",
        Rp = "sdkReady",
        wp = "login",
        bp = "logout",
        Pp = "kickedOut",
        Gp = "registerPlugin",
        Up = "wsConnect",
        Fp = "wsOnOpen",
        qp = "wsOnClose",
        xp = "wsOnError",
        Vp = "getCosAuthKey",
        Kp = "getCosPreSigUrl",
        Bp = "upload",
        jp = "sendMessage",
        Hp = "getC2CRoamingMessages",
        $p = "getGroupRoamingMessages",
        Yp = "revokeMessage",
        zp = "deleteMessage",
        Wp = "setC2CMessageRead",
        Jp = "setGroupMessageRead",
        Xp = "emptyMessageBody",
        Qp = "getPeerReadTime",
        Zp = "uploadMergerMessage",
        eg = "downloadMergerMessage",
        tg = "jsonParseError",
        ng = "messageE2EDelayException",
        og = "getConversationList",
        rg = "getConversationProfile",
        ag = "deleteConversation",
        sg = "getConversationListInStorage",
        ig = "syncConversationList",
        cg = "createGroup",
        ug = "applyJoinGroup",
        lg = "quitGroup",
        dg = "searchGroupByID",
        pg = "changeGroupOwner",
        gg = "handleGroupApplication",
        hg = "handleGroupInvitation",
        fg = "setMessageRemindType",
        _g = "dismissGroup",
        mg = "updateGroupProfile",
        vg = "getGroupList",
        Mg = "getGroupProfile",
        yg = "getGroupListInStorage",
        Ig = "getGroupLastSequence",
        Sg = "getGroupMissingMessage",
        Tg = "pagingGetGroupList",
        Eg = "getGroupSimplifiedInfo",
        Dg = "joinWithoutAuth",
        kg = "getGroupMemberList",
        Cg = "getGroupMemberProfile",
        Ng = "addGroupMember",
        Ag = "deleteGroupMember",
        Og = "setGroupMemberMuteTime",
        Lg = "setGroupMemberNameCard",
        Rg = "setGroupMemberRole",
        wg = "setGroupMemberCustomField",
        bg = "getGroupOnlineMemberCount",
        Pg = "longPollingAVError",
        Gg = "messageLoss",
        Ug = "messageStacked",
        Fg = "getUserProfile",
        qg = "updateMyProfile",
        xg = "getBlacklist",
        Vg = "addToBlacklist",
        Kg = "removeFromBlacklist",
        Bg = "callbackFunctionError",
        jg = "fetchCloudControlConfig",
        Hg = "pushedCloudControlConfig",
        $g = "error",
        Yg = c.f,
        zg = function(e) {
            return function(t) {
                for (var n, o = f(t), r = Pt(o), s = r.length, i = 0, c = []; s > i;) n = r[i++], a && !Yg.call(o, n) || c.push(e ? [n, o[n]] : o[n]);
                return c
            }
        },
        Wg = {
            entries: zg(!0),
            values: zg(!1)
        }.values;
    Le({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return Wg(e)
        }
    });
    var Jg = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_TEXT, this.content = {
                    text: t.text || ""
                }
            }
            return Pn(e, [{
                key: "setText",
                value: function(e) {
                    this.content.text = e
                }
            }, {
                key: "sendable",
                value: function() {
                    return 0 !== this.content.text.length
                }
            }]), e
        }(),
        Xg = Object.assign,
        Qg = Object.defineProperty,
        Zg = !Xg || r((function() {
            if (a && 1 !== Xg({
                b: 1
            }, Xg(Qg({}, "a", {
                enumerable: !0,
                get: function() {
                    Qg(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
            var e = {},
                t = {},
                n = Symbol();
            return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) {
                t[e] = e
            })), 7 != Xg({}, e)[n] || "abcdefghijklmnopqrst" != Pt(Xg({}, t)).join("")
        })) ? function(e, t) {
            for (var n = we(e), o = arguments.length, r = 1, s = ye.f, i = c.f; o > r;)
                for (var u, l = g(arguments[r++]), d = s ? Pt(l).concat(s(l)) : Pt(l), p = d.length, h = 0; p > h;) u = d[h++], a && !i.call(l, u) || (n[u] = l[u]);
            return n
        } : Xg;
    Le({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Zg
    }, {
        assign: Zg
    });
    var eh = xe("iterator"),
        th = !r((function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = "";
            return e.pathname = "c%20d", t.forEach((function(e, o) {
                t.delete("b"), n += o + e
            })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[eh] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        nh = /[^\0-\u007E]/,
        oh = /[.\u3002\uFF0E\uFF61]/g,
        rh = "Overflow: input needs wider integers to process",
        ah = Math.floor,
        sh = String.fromCharCode,
        ih = function(e) {
            return e + 22 + 75 * (e < 26)
        },
        ch = function(e, t, n) {
            var o = 0;
            for (e = n ? ah(e / 700) : e >> 1, e += ah(e / t); e > 455; o += 36) e = ah(e / 35);
            return ah(o + 36 * e / (e + 38))
        },
        uh = function(e) {
            var t, n, o = [],
                r = (e = function(e) {
                    for (var t = [], n = 0, o = e.length; n < o;) {
                        var r = e.charCodeAt(n++);
                        if (r >= 55296 && r <= 56319 && n < o) {
                            var a = e.charCodeAt(n++);
                            56320 == (64512 & a) ? t.push(((1023 & r) << 10) + (1023 & a) + 65536) : (t.push(r), n--)
                        } else t.push(r)
                    }
                    return t
                }(e)).length,
                a = 128,
                s = 0,
                i = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && o.push(sh(n));
            var c = o.length,
                u = c;
            for (c && o.push("-"); u < r;) {
                var l = 2147483647;
                for (t = 0; t < e.length; t++)(n = e[t]) >= a && n < l && (l = n);
                var d = u + 1;
                if (l - a > ah((2147483647 - s) / d)) throw RangeError(rh);
                for (s += (l - a) * d, a = l, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < a && ++s > 2147483647) throw RangeError(rh);
                    if (n == a) {
                        for (var p = s, g = 36;; g += 36) {
                            var h = g <= i ? 1 : g >= i + 26 ? 26 : g - i;
                            if (p < h) break;
                            var f = p - h,
                                _ = 36 - h;
                            o.push(sh(ih(h + f % _))), p = ah(f / _)
                        }
                        o.push(sh(ih(p))), i = ch(s, d, u == c), s = 0, ++u
                    }
                }++s, ++a
            }
            return o.join("")
        },
        lh = function(e) {
            var t = kt(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return k(t.call(e))
        },
        dh = re("fetch"),
        ph = re("Headers"),
        gh = xe("iterator"),
        hh = ee.set,
        fh = ee.getterFor("URLSearchParams"),
        _h = ee.getterFor("URLSearchParamsIterator"),
        mh = /\+/g,
        vh = Array(4),
        Mh = function(e) {
            return vh[e - 1] || (vh[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        },
        yh = function(e) {
            try {
                return decodeURIComponent(e)
            } catch (Ov) {
                return e
            }
        },
        Ih = function(e) {
            var t = e.replace(mh, " "),
                n = 4;
            try {
                return decodeURIComponent(t)
            } catch (Ov) {
                for (; n;) t = t.replace(Mh(n--), yh);
                return t
            }
        },
        Sh = /[!'()~]|%20/g,
        Th = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        Eh = function(e) {
            return Th[e]
        },
        Dh = function(e) {
            return encodeURIComponent(e).replace(Sh, Eh)
        },
        kh = function(e, t) {
            if (t)
                for (var n, o, r = t.split("&"), a = 0; a < r.length;)(n = r[a++]).length && (o = n.split("="), e.push({
                    key: Ih(o.shift()),
                    value: Ih(o.join("="))
                }))
        },
        Ch = function(e) {
            this.entries.length = 0, kh(this.entries, e)
        },
        Nh = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        },
        Ah = vn((function(e, t) {
            hh(this, {
                type: "URLSearchParamsIterator",
                iterator: lh(fh(e).entries),
                kind: t
            })
        }), "Iterator", (function() {
            var e = _h(this),
                t = e.kind,
                n = e.iterator.next(),
                o = n.value;
            return n.done || (n.value = "keys" === t ? o.key : "values" === t ? o.value : [o.key, o.value]), n
        })),
        Oh = function() {
            Ar(this, Oh, "URLSearchParams");
            var e, t, n, o, r, a, s, i, c, u = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                d = [];
            if (hh(l, {
                type: "URLSearchParams",
                entries: d,
                updateURL: function() {},
                updateSearchParams: Ch
            }), void 0 !== u)
                if (_(u))
                    if ("function" == typeof(e = kt(u)))
                        for (n = (t = e.call(u)).next; !(o = n.call(t)).done;) {
                            if ((s = (a = (r = lh(k(o.value))).next).call(r)).done || (i = a.call(r)).done || !a.call(r).done) throw TypeError("Expected sequence with length 2");
                            d.push({
                                key: s.value + "",
                                value: i.value + ""
                            })
                        } else
                        for (c in u) M(u, c) && d.push({
                            key: c,
                            value: u[c] + ""
                        });
                else kh(d, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
        },
        Lh = Oh.prototype;
    kr(Lh, {
        append: function(e, t) {
            Nh(arguments.length, 2);
            var n = fh(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }), n.updateURL()
        },
        delete: function(e) {
            Nh(arguments.length, 1);
            for (var t = fh(this), n = t.entries, o = e + "", r = 0; r < n.length;) n[r].key === o ? n.splice(r, 1) : r++;
            t.updateURL()
        },
        get: function(e) {
            Nh(arguments.length, 1);
            for (var t = fh(this).entries, n = e + "", o = 0; o < t.length; o++)
                if (t[o].key === n) return t[o].value;
            return null
        },
        getAll: function(e) {
            Nh(arguments.length, 1);
            for (var t = fh(this).entries, n = e + "", o = [], r = 0; r < t.length; r++) t[r].key === n && o.push(t[r].value);
            return o
        },
        has: function(e) {
            Nh(arguments.length, 1);
            for (var t = fh(this).entries, n = e + "", o = 0; o < t.length;)
                if (t[o++].key === n) return !0;
            return !1
        },
        set: function(e, t) {
            Nh(arguments.length, 1);
            for (var n, o = fh(this), r = o.entries, a = !1, s = e + "", i = t + "", c = 0; c < r.length; c++)(n = r[c]).key === s && (a ? r.splice(c--, 1) : (a = !0, n.value = i));
            a || r.push({
                key: s,
                value: i
            }), o.updateURL()
        },
        sort: function() {
            var e, t, n, o = fh(this),
                r = o.entries,
                a = r.slice();
            for (r.length = 0, n = 0; n < a.length; n++) {
                for (e = a[n], t = 0; t < n; t++)
                    if (r[t].key > e.key) {
                        r.splice(t, 0, e);
                        break
                    } t === n && r.push(e)
            }
            o.updateURL()
        },
        forEach: function(e) {
            for (var t, n = fh(this).entries, o = nt(e, arguments.length > 1 ? arguments[1] : void 0, 3), r = 0; r < n.length;) o((t = n[r++]).value, t.key, this)
        },
        keys: function() {
            return new Ah(this, "keys")
        },
        values: function() {
            return new Ah(this, "values")
        },
        entries: function() {
            return new Ah(this, "entries")
        }
    }, {
        enumerable: !0
    }), te(Lh, gh, Lh.entries), te(Lh, "toString", (function() {
        for (var e, t = fh(this).entries, n = [], o = 0; o < t.length;) e = t[o++], n.push(Dh(e.key) + "=" + Dh(e.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), fn(Oh, "URLSearchParams"), Le({
        global: !0,
        forced: !th
    }, {
        URLSearchParams: Oh
    }), th || "function" != typeof dh || "function" != typeof ph || Le({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, o, r = [e];
            return arguments.length > 1 && (t = arguments[1], _(t) && (n = t.body, "URLSearchParams" === Et(n) && ((o = t.headers ? new ph(t.headers) : new ph).has("content-type") || o.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = Kt(t, {
                body: u(0, String(n)),
                headers: u(0, o)
            }))), r.push(t)), dh.apply(this, r)
        }
    });
    var Rh, wh = {
            URLSearchParams: Oh,
            getState: fh
        },
        bh = rn.codeAt,
        Ph = o.URL,
        Gh = wh.URLSearchParams,
        Uh = wh.getState,
        Fh = ee.set,
        qh = ee.getterFor("URL"),
        xh = Math.floor,
        Vh = Math.pow,
        Kh = /[A-Za-z]/,
        Bh = /[\d+\-.A-Za-z]/,
        jh = /\d/,
        Hh = /^(0x|0X)/,
        $h = /^[0-7]+$/,
        Yh = /^\d+$/,
        zh = /^[\dA-Fa-f]+$/,
        Wh = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        Jh = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        Xh = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        Qh = /[\u0009\u000A\u000D]/g,
        Zh = function(e, t) {
            var n, o, r;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return "Invalid host";
                if (!(n = tf(t.slice(1, -1)))) return "Invalid host";
                e.host = n
            } else if (lf(e)) {
                if (t = function(e) {
                    var t, n, o = [],
                        r = e.toLowerCase().replace(oh, ".").split(".");
                    for (t = 0; t < r.length; t++) n = r[t], o.push(nh.test(n) ? "xn--" + uh(n) : n);
                    return o.join(".")
                }(t), Wh.test(t)) return "Invalid host";
                if (null === (n = ef(t))) return "Invalid host";
                e.host = n
            } else {
                if (Jh.test(t)) return "Invalid host";
                for (n = "", o = Ct(t), r = 0; r < o.length; r++) n += cf(o[r], of );
                e.host = n
            }
        },
        ef = function(e) {
            var t, n, o, r, a, s, i, c = e.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
            for (n = [], o = 0; o < t; o++) {
                if ("" == (r = c[o])) return e;
                if (a = 10, r.length > 1 && "0" == r.charAt(0) && (a = Hh.test(r) ? 16 : 8, r = r.slice(8 == a ? 1 : 2)), "" === r) s = 0;
                else {
                    if (!(10 == a ? Yh : 8 == a ? $h : zh).test(r)) return e;
                    s = parseInt(r, a)
                }
                n.push(s)
            }
            for (o = 0; o < t; o++)
                if (s = n[o], o == t - 1) {
                    if (s >= Vh(256, 5 - t)) return null
                } else if (s > 255) return null;
            for (i = n.pop(), o = 0; o < n.length; o++) i += n[o] * Vh(256, 3 - o);
            return i
        },
        tf = function(e) {
            var t, n, o, r, a, s, i, c = [0, 0, 0, 0, 0, 0, 0, 0],
                u = 0,
                l = null,
                d = 0,
                p = function() {
                    return e.charAt(d)
                };
            if (":" == p()) {
                if (":" != e.charAt(1)) return;
                d += 2, l = ++u
            }
            for (; p();) {
                if (8 == u) return;
                if (":" != p()) {
                    for (t = n = 0; n < 4 && zh.test(p());) t = 16 * t + parseInt(p(), 16), d++, n++;
                    if ("." == p()) {
                        if (0 == n) return;
                        if (d -= n, u > 6) return;
                        for (o = 0; p();) {
                            if (r = null, o > 0) {
                                if (!("." == p() && o < 4)) return;
                                d++
                            }
                            if (!jh.test(p())) return;
                            for (; jh.test(p());) {
                                if (a = parseInt(p(), 10), null === r) r = a;
                                else {
                                    if (0 == r) return;
                                    r = 10 * r + a
                                }
                                if (r > 255) return;
                                d++
                            }
                            c[u] = 256 * c[u] + r, 2 != ++o && 4 != o || u++
                        }
                        if (4 != o) return;
                        break
                    }
                    if (":" == p()) {
                        if (d++, !p()) return
                    } else if (p()) return;
                    c[u++] = t
                } else {
                    if (null !== l) return;
                    d++, l = ++u
                }
            }
            if (null !== l)
                for (s = u - l, u = 7; 0 != u && s > 0;) i = c[u], c[u--] = c[l + s - 1], c[l + --s] = i;
            else if (8 != u) return;
            return c
        },
        nf = function(e) {
            var t, n, o, r;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = xh(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", o = function(e) {
                    for (var t = null, n = 1, o = null, r = 0, a = 0; a < 8; a++) 0 !== e[a] ? (r > n && (t = o, n = r), o = null, r = 0) : (null === o && (o = a), ++r);
                    return r > n && (t = o, n = r), t
                }(e), n = 0; n < 8; n++) r && 0 === e[n] || (r && (r = !1), o === n ? (t += n ? ":" : "::", r = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        },
        of = {},
        rf = Zg({}, of , {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        af = Zg({}, rf, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        sf = Zg({}, af, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        cf = function(e, t) {
            var n = bh(e, 0);
            return n > 32 && n < 127 && !M(t, e) ? e : encodeURIComponent(e)
        },
        uf = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        lf = function(e) {
            return M(uf, e.scheme)
        },
        df = function(e) {
            return "" != e.username || "" != e.password
        },
        pf = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        },
        gf = function(e, t) {
            var n;
            return 2 == e.length && Kh.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        },
        hf = function(e) {
            var t;
            return e.length > 1 && gf(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        },
        ff = function(e) {
            var t = e.path,
                n = t.length;
            !n || "file" == e.scheme && 1 == n && gf(t[0], !0) || t.pop()
        },
        _f = function(e) {
            return "." === e || "%2e" === e.toLowerCase()
        },
        mf = {},
        vf = {},
        Mf = {},
        yf = {},
        If = {},
        Sf = {},
        Tf = {},
        Ef = {},
        Df = {},
        kf = {},
        Cf = {},
        Nf = {},
        Af = {},
        Of = {},
        Lf = {},
        Rf = {},
        wf = {},
        bf = {},
        Pf = {},
        Gf = {},
        Uf = {},
        Ff = function(e, t, n, o) {
            var r, a, s, i, c, u = n || mf,
                l = 0,
                d = "",
                p = !1,
                g = !1,
                h = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(Xh, "")), t = t.replace(Qh, ""), r = Ct(t); l <= r.length;) {
                switch (a = r[l], u) {
                    case mf:
                        if (!a || !Kh.test(a)) {
                            if (n) return "Invalid scheme";
                            u = Mf;
                            continue
                        }
                        d += a.toLowerCase(), u = vf;
                        break;
                    case vf:
                        if (a && (Bh.test(a) || "+" == a || "-" == a || "." == a)) d += a.toLowerCase();
                        else {
                            if (":" != a) {
                                if (n) return "Invalid scheme";
                                d = "", u = Mf, l = 0;
                                continue
                            }
                            if (n && (lf(e) != M(uf, d) || "file" == d && (df(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = d, n) return void(lf(e) && uf[e.scheme] == e.port && (e.port = null));
                            d = "", "file" == e.scheme ? u = Of : lf(e) && o && o.scheme == e.scheme ? u = yf : lf(e) ? u = Ef : "/" == r[l + 1] ? (u = If, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), u = Pf)
                        }
                        break;
                    case Mf:
                        if (!o || o.cannotBeABaseURL && "#" != a) return "Invalid scheme";
                        if (o.cannotBeABaseURL && "#" == a) {
                            e.scheme = o.scheme, e.path = o.path.slice(), e.query = o.query, e.fragment = "", e.cannotBeABaseURL = !0, u = Uf;
                            break
                        }
                        u = "file" == o.scheme ? Of : Sf;
                        continue;
                    case yf:
                        if ("/" != a || "/" != r[l + 1]) {
                            u = Sf;
                            continue
                        }
                        u = Df, l++;
                        break;
                    case If:
                        if ("/" == a) {
                            u = kf;
                            break
                        }
                        u = bf;
                        continue;
                    case Sf:
                        if (e.scheme = o.scheme, a == Rh) e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query;
                        else if ("/" == a || "\\" == a && lf(e)) u = Tf;
                        else if ("?" == a) e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = "", u = Gf;
                        else {
                            if ("#" != a) {
                                e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.path.pop(), u = bf;
                                continue
                            }
                            e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query, e.fragment = "", u = Uf
                        }
                        break;
                    case Tf:
                        if (!lf(e) || "/" != a && "\\" != a) {
                            if ("/" != a) {
                                e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, u = bf;
                                continue
                            }
                            u = kf
                        } else u = Df;
                        break;
                    case Ef:
                        if (u = Df, "/" != a || "/" != d.charAt(l + 1)) continue;
                        l++;
                        break;
                    case Df:
                        if ("/" != a && "\\" != a) {
                            u = kf;
                            continue
                        }
                        break;
                    case kf:
                        if ("@" == a) {
                            p && (d = "%40" + d), p = !0, s = Ct(d);
                            for (var f = 0; f < s.length; f++) {
                                var _ = s[f];
                                if (":" != _ || h) {
                                    var m = cf(_, sf);
                                    h ? e.password += m : e.username += m
                                } else h = !0
                            }
                            d = ""
                        } else if (a == Rh || "/" == a || "?" == a || "#" == a || "\\" == a && lf(e)) {
                            if (p && "" == d) return "Invalid authority";
                            l -= Ct(d).length + 1, d = "", u = Cf
                        } else d += a;
                        break;
                    case Cf:
                    case Nf:
                        if (n && "file" == e.scheme) {
                            u = Rf;
                            continue
                        }
                        if (":" != a || g) {
                            if (a == Rh || "/" == a || "?" == a || "#" == a || "\\" == a && lf(e)) {
                                if (lf(e) && "" == d) return "Invalid host";
                                if (n && "" == d && (df(e) || null !== e.port)) return;
                                if (i = Zh(e, d)) return i;
                                if (d = "", u = wf, n) return;
                                continue
                            }
                            "[" == a ? g = !0 : "]" == a && (g = !1), d += a
                        } else {
                            if ("" == d) return "Invalid host";
                            if (i = Zh(e, d)) return i;
                            if (d = "", u = Af, n == Nf) return
                        }
                        break;
                    case Af:
                        if (!jh.test(a)) {
                            if (a == Rh || "/" == a || "?" == a || "#" == a || "\\" == a && lf(e) || n) {
                                if ("" != d) {
                                    var v = parseInt(d, 10);
                                    if (v > 65535) return "Invalid port";
                                    e.port = lf(e) && v === uf[e.scheme] ? null : v, d = ""
                                }
                                if (n) return;
                                u = wf;
                                continue
                            }
                            return "Invalid port"
                        }
                        d += a;
                        break;
                    case Of:
                        if (e.scheme = "file", "/" == a || "\\" == a) u = Lf;
                        else {
                            if (!o || "file" != o.scheme) {
                                u = bf;
                                continue
                            }
                            if (a == Rh) e.host = o.host, e.path = o.path.slice(), e.query = o.query;
                            else if ("?" == a) e.host = o.host, e.path = o.path.slice(), e.query = "", u = Gf;
                            else {
                                if ("#" != a) {
                                    hf(r.slice(l).join("")) || (e.host = o.host, e.path = o.path.slice(), ff(e)), u = bf;
                                    continue
                                }
                                e.host = o.host, e.path = o.path.slice(), e.query = o.query, e.fragment = "", u = Uf
                            }
                        }
                        break;
                    case Lf:
                        if ("/" == a || "\\" == a) {
                            u = Rf;
                            break
                        }
                        o && "file" == o.scheme && !hf(r.slice(l).join("")) && (gf(o.path[0], !0) ? e.path.push(o.path[0]) : e.host = o.host), u = bf;
                        continue;
                    case Rf:
                        if (a == Rh || "/" == a || "\\" == a || "?" == a || "#" == a) {
                            if (!n && gf(d)) u = bf;
                            else if ("" == d) {
                                if (e.host = "", n) return;
                                u = wf
                            } else {
                                if (i = Zh(e, d)) return i;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                d = "", u = wf
                            }
                            continue
                        }
                        d += a;
                        break;
                    case wf:
                        if (lf(e)) {
                            if (u = bf, "/" != a && "\\" != a) continue
                        } else if (n || "?" != a)
                            if (n || "#" != a) {
                                if (a != Rh && (u = bf, "/" != a)) continue
                            } else e.fragment = "", u = Uf;
                        else e.query = "", u = Gf;
                        break;
                    case bf:
                        if (a == Rh || "/" == a || "\\" == a && lf(e) || !n && ("?" == a || "#" == a)) {
                            if (".." === (c = (c = d).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (ff(e), "/" == a || "\\" == a && lf(e) || e.path.push("")) : _f(d) ? "/" == a || "\\" == a && lf(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && gf(d) && (e.host && (e.host = ""), d = d.charAt(0) + ":"), e.path.push(d)), d = "", "file" == e.scheme && (a == Rh || "?" == a || "#" == a))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == a ? (e.query = "", u = Gf) : "#" == a && (e.fragment = "", u = Uf)
                        } else d += cf(a, af);
                        break;
                    case Pf:
                        "?" == a ? (e.query = "", u = Gf) : "#" == a ? (e.fragment = "", u = Uf) : a != Rh && (e.path[0] += cf(a, of ));
                        break;
                    case Gf:
                        n || "#" != a ? a != Rh && ("'" == a && lf(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : cf(a, of )) : (e.fragment = "", u = Uf);
                        break;
                    case Uf:
                        a != Rh && (e.fragment += cf(a, rf))
                }
                l++
            }
        },
        qf = function(e) {
            var t, n, o = Ar(this, qf, "URL"),
                r = arguments.length > 1 ? arguments[1] : void 0,
                s = String(e),
                i = Fh(o, {
                    type: "URL"
                });
            if (void 0 !== r)
                if (r instanceof qf) t = qh(r);
                else if (n = Ff(t = {}, String(r))) throw TypeError(n);
            if (n = Ff(i, s, null, t)) throw TypeError(n);
            var c = i.searchParams = new Gh,
                u = Uh(c);
            u.updateSearchParams(i.query), u.updateURL = function() {
                i.query = String(c) || null
            }, a || (o.href = Vf.call(o), o.origin = Kf.call(o), o.protocol = Bf.call(o), o.username = jf.call(o), o.password = Hf.call(o), o.host = $f.call(o), o.hostname = Yf.call(o), o.port = zf.call(o), o.pathname = Wf.call(o), o.search = Jf.call(o), o.searchParams = Xf.call(o), o.hash = Qf.call(o))
        },
        xf = qf.prototype,
        Vf = function() {
            var e = qh(this),
                t = e.scheme,
                n = e.username,
                o = e.password,
                r = e.host,
                a = e.port,
                s = e.path,
                i = e.query,
                c = e.fragment,
                u = t + ":";
            return null !== r ? (u += "//", df(e) && (u += n + (o ? ":" + o : "") + "@"), u += nf(r), null !== a && (u += ":" + a)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? s[0] : s.length ? "/" + s.join("/") : "", null !== i && (u += "?" + i), null !== c && (u += "#" + c), u
        },
        Kf = function() {
            var e = qh(this),
                t = e.scheme,
                n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (Ov) {
                return "null"
            }
            return "file" != t && lf(e) ? t + "://" + nf(e.host) + (null !== n ? ":" + n : "") : "null"
        },
        Bf = function() {
            return qh(this).scheme + ":"
        },
        jf = function() {
            return qh(this).username
        },
        Hf = function() {
            return qh(this).password
        },
        $f = function() {
            var e = qh(this),
                t = e.host,
                n = e.port;
            return null === t ? "" : null === n ? nf(t) : nf(t) + ":" + n
        },
        Yf = function() {
            var e = qh(this).host;
            return null === e ? "" : nf(e)
        },
        zf = function() {
            var e = qh(this).port;
            return null === e ? "" : String(e)
        },
        Wf = function() {
            var e = qh(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        Jf = function() {
            var e = qh(this).query;
            return e ? "?" + e : ""
        },
        Xf = function() {
            return qh(this).searchParams
        },
        Qf = function() {
            var e = qh(this).fragment;
            return e ? "#" + e : ""
        },
        Zf = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            }
        };
    if (a && Gt(xf, {
        href: Zf(Vf, (function(e) {
            var t = qh(this),
                n = String(e),
                o = Ff(t, n);
            if (o) throw TypeError(o);
            Uh(t.searchParams).updateSearchParams(t.query)
        })),
        origin: Zf(Kf),
        protocol: Zf(Bf, (function(e) {
            var t = qh(this);
            Ff(t, String(e) + ":", mf)
        })),
        username: Zf(jf, (function(e) {
            var t = qh(this),
                n = Ct(String(e));
            if (!pf(t)) {
                t.username = "";
                for (var o = 0; o < n.length; o++) t.username += cf(n[o], sf)
            }
        })),
        password: Zf(Hf, (function(e) {
            var t = qh(this),
                n = Ct(String(e));
            if (!pf(t)) {
                t.password = "";
                for (var o = 0; o < n.length; o++) t.password += cf(n[o], sf)
            }
        })),
        host: Zf($f, (function(e) {
            var t = qh(this);
            t.cannotBeABaseURL || Ff(t, String(e), Cf)
        })),
        hostname: Zf(Yf, (function(e) {
            var t = qh(this);
            t.cannotBeABaseURL || Ff(t, String(e), Nf)
        })),
        port: Zf(zf, (function(e) {
            var t = qh(this);
            pf(t) || ("" == (e = String(e)) ? t.port = null : Ff(t, e, Af))
        })),
        pathname: Zf(Wf, (function(e) {
            var t = qh(this);
            t.cannotBeABaseURL || (t.path = [], Ff(t, e + "", wf))
        })),
        search: Zf(Jf, (function(e) {
            var t = qh(this);
            "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ff(t, e, Gf)), Uh(t.searchParams).updateSearchParams(t.query)
        })),
        searchParams: Zf(Xf),
        hash: Zf(Qf, (function(e) {
            var t = qh(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ff(t, e, Uf)) : t.fragment = null
        }))
    }), te(xf, "toJSON", (function() {
        return Vf.call(this)
    }), {
        enumerable: !0
    }), te(xf, "toString", (function() {
        return Vf.call(this)
    }), {
        enumerable: !0
    }), Ph) {
        var e_ = Ph.createObjectURL,
            t_ = Ph.revokeObjectURL;
        e_ && te(qf, "createObjectURL", (function(e) {
            return e_.apply(Ph, arguments)
        })), t_ && te(qf, "revokeObjectURL", (function(e) {
            return t_.apply(Ph, arguments)
        }))
    }
    fn(qf, "URL"), Le({
        global: !0,
        forced: !th,
        sham: !a
    }, {
        URL: qf
    });
    var n_ = {
            JSON: {
                TYPE: {
                    C2C: {
                        NOTICE: 1,
                        COMMON: 9,
                        EVENT: 10
                    },
                    GROUP: {
                        COMMON: 3,
                        TIP: 4,
                        SYSTEM: 5,
                        TIP2: 6
                    },
                    FRIEND: {
                        NOTICE: 7
                    },
                    PROFILE: {
                        NOTICE: 8
                    }
                },
                SUBTYPE: {
                    C2C: {
                        COMMON: 0,
                        READED: 92,
                        KICKEDOUT: 96
                    },
                    GROUP: {
                        COMMON: 0,
                        LOVEMESSAGE: 1,
                        TIP: 2,
                        REDPACKET: 3
                    }
                },
                OPTIONS: {
                    GROUP: {
                        JOIN: 1,
                        QUIT: 2,
                        KICK: 3,
                        SET_ADMIN: 4,
                        CANCEL_ADMIN: 5,
                        MODIFY_GROUP_INFO: 6,
                        MODIFY_MEMBER_INFO: 7
                    }
                }
            },
            PROTOBUF: {},
            IMAGE_TYPES: {
                ORIGIN: 1,
                LARGE: 2,
                SMALL: 3
            },
            IMAGE_FORMAT: {
                JPG: 1,
                JPEG: 1,
                GIF: 2,
                PNG: 3,
                BMP: 4,
                UNKNOWN: 255
            }
        },
        o_ = {
            NICK: "Tag_Profile_IM_Nick",
            GENDER: "Tag_Profile_IM_Gender",
            BIRTHDAY: "Tag_Profile_IM_BirthDay",
            LOCATION: "Tag_Profile_IM_Location",
            SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
            ALLOWTYPE: "Tag_Profile_IM_AllowType",
            LANGUAGE: "Tag_Profile_IM_Language",
            AVATAR: "Tag_Profile_IM_Image",
            MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
            ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
            LEVEL: "Tag_Profile_IM_Level",
            ROLE: "Tag_Profile_IM_Role"
        },
        r_ = {
            UNKNOWN: "Gender_Type_Unknown",
            FEMALE: "Gender_Type_Female",
            MALE: "Gender_Type_Male"
        },
        a_ = {
            NONE: "AdminForbid_Type_None",
            SEND_OUT: "AdminForbid_Type_SendOut"
        },
        s_ = {
            NEED_CONFIRM: "AllowType_Type_NeedConfirm",
            ALLOW_ANY: "AllowType_Type_AllowAny",
            DENY_ANY: "AllowType_Type_DenyAny"
        },
        i_ = "JoinedSuccess",
        c_ = "WaitAdminApproval",
        u_ = function() {
            function e(t) {
                wn(this, e), this._imageMemoryURL = "", Zs ? this.createImageDataASURLInWXMiniApp(t.file) : this.createImageDataASURLInWeb(t.file), this._initImageInfoModel(), this.type = ro.MSG_IMAGE, this._percent = 0, this.content = {
                    imageFormat: t.imageFormat || n_.IMAGE_FORMAT.UNKNOWN,
                    uuid: t.uuid,
                    imageInfoArray: []
                }, this.initImageInfoArray(t.imageInfoArray), this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", this._autoFixUrl()
            }
            return Pn(e, [{
                key: "_initImageInfoModel",
                value: function() {
                    var e = this;
                    this._ImageInfoModel = function(t) {
                        this.instanceID = ec(9999999), this.sizeType = t.type || 0, this.type = 0, this.size = t.size || 0, this.width = t.width || 0, this.height = t.height || 0, this.imageUrl = t.url || "", this.url = t.url || e._imageMemoryURL || e._defaultImage
                    }, this._ImageInfoModel.prototype = {
                        setSizeType: function(e) {
                            this.sizeType = e
                        },
                        setType: function(e) {
                            this.type = e
                        },
                        setImageUrl: function(e) {
                            e && (this.imageUrl = e)
                        },
                        getImageUrl: function() {
                            return this.imageUrl
                        }
                    }
                }
            }, {
                key: "initImageInfoArray",
                value: function(e) {
                    for (var t = 0, n = null, o = null; t <= 2;) o = Bi(e) || Bi(e[t]) ? {
                        type: 0,
                        size: 0,
                        width: 0,
                        height: 0,
                        url: ""
                    } : e[t], (n = new this._ImageInfoModel(o)).setSizeType(t + 1), n.setType(t), this.addImageInfo(n), t++;
                    this.updateAccessSideImageInfoArray()
                }
            }, {
                key: "updateImageInfoArray",
                value: function(e) {
                    for (var t, n = this.content.imageInfoArray.length, o = 0; o < n; o++) t = this.content.imageInfoArray[o], e[o].size && (t.size = e[o].size), e[o].url && t.setImageUrl(e[o].url), e[o].width && (t.width = e[o].width), e[o].height && (t.height = e[o].height)
                }
            }, {
                key: "_autoFixUrl",
                value: function() {
                    for (var e = this.content.imageInfoArray.length, t = "", n = "", o = ["http", "https"], r = null, a = 0; a < e; a++) this.content.imageInfoArray[a].url && "" !== (r = this.content.imageInfoArray[a]).imageUrl && (n = r.imageUrl.slice(0, r.imageUrl.indexOf("://") + 1), t = r.imageUrl.slice(r.imageUrl.indexOf("://") + 1), o.indexOf(n) < 0 && (n = "https:"), this.content.imageInfoArray[a].setImageUrl([n, t].join("")))
                }
            }, {
                key: "updatePercent",
                value: function(e) {
                    this._percent = e, this._percent > 1 && (this._percent = 1)
                }
            }, {
                key: "updateImageFormat",
                value: function(e) {
                    this.content.imageFormat = n_.IMAGE_FORMAT[e.toUpperCase()] || n_.IMAGE_FORMAT.UNKNOWN
                }
            }, {
                key: "createImageDataASURLInWeb",
                value: function(e) {
                    void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]))
                }
            }, {
                key: "createImageDataASURLInWXMiniApp",
                value: function(e) {
                    e && e.url && (this._imageMemoryURL = e.url)
                }
            }, {
                key: "replaceImageInfo",
                value: function(e, t) {
                    this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e)
                }
            }, {
                key: "addImageInfo",
                value: function(e) {
                    this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e)
                }
            }, {
                key: "updateAccessSideImageInfoArray",
                value: function() {
                    var e = this.content.imageInfoArray,
                        t = e[0],
                        n = t.width,
                        o = void 0 === n ? 0 : n,
                        r = t.height,
                        a = void 0 === r ? 0 : r;
                    0 !== o && 0 !== a && (_c(e), Object.assign(e[2], fc({
                        originWidth: o,
                        originHeight: a,
                        min: 720
                    })))
                }
            }, {
                key: "sendable",
                value: function() {
                    return 0 !== this.content.imageInfoArray.length && ("" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size)
                }
            }]), e
        }(),
        l_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_FACE, this.content = t || null
            }
            return Pn(e, [{
                key: "sendable",
                value: function() {
                    return null !== this.content
                }
            }]), e
        }(),
        d_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_AUDIO, this._percent = 0, this.content = {
                    downloadFlag: 2,
                    second: t.second,
                    size: t.size,
                    url: t.url,
                    remoteAudioUrl: t.url || "",
                    uuid: t.uuid
                }
            }
            return Pn(e, [{
                key: "updatePercent",
                value: function(e) {
                    this._percent = e, this._percent > 1 && (this._percent = 1)
                }
            }, {
                key: "updateAudioUrl",
                value: function(e) {
                    this.content.remoteAudioUrl = e
                }
            }, {
                key: "sendable",
                value: function() {
                    return "" !== this.content.remoteAudioUrl
                }
            }]), e
        }();
    Le({
        target: "Object",
        stat: !0,
        forced: !a,
        sham: !a
    }, {
        defineProperty: N.f
    });
    var p_ = {
            from: !0,
            groupID: !0,
            groupName: !0,
            to: !0
        },
        g_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_GRP_TIP, this.content = {}, this._initContent(t)
            }
            return Pn(e, [{
                key: "_initContent",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach((function(n) {
                        switch (n) {
                            case "remarkInfo":
                                break;
                            case "groupProfile":
                                t.content.groupProfile = {}, t._initGroupProfile(e[n]);
                                break;
                            case "operatorInfo":
                            case "memberInfoList":
                                break;
                            case "msgMemberInfo":
                                t.content.memberList = e[n], Object.defineProperty(t.content, "msgMemberInfo", {
                                    get: function() {
                                        return Gi.warn("!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n", "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n", "参考：群提示消息 https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupTipPayload"), t.content.memberList.map((function(e) {
                                            return {
                                                userID: e.userID,
                                                shutupTime: e.muteTime
                                            }
                                        }))
                                    }
                                });
                                break;
                            case "onlineMemberInfo":
                                break;
                            case "memberNum":
                                t.content[n] = e[n], t.content.memberCount = e[n];
                                break;
                            default:
                                t.content[n] = e[n]
                        }
                    })), this.content.userIDList || (this.content.userIDList = [this.content.operatorID])
                }
            }, {
                key: "_initGroupProfile",
                value: function(e) {
                    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                        var o = t[n];
                        p_[o] && (this.content.groupProfile[o] = e[o])
                    }
                }
            }]), e
        }(),
        h_ = {
            from: !0,
            groupID: !0,
            groupName: !0,
            to: !0
        },
        f_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(t)
            }
            return Pn(e, [{
                key: "_initContent",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach((function(n) {
                        switch (n) {
                            case "memberInfoList":
                                break;
                            case "remarkInfo":
                                t.content.handleMessage = e[n];
                                break;
                            case "groupProfile":
                                t.content.groupProfile = {}, t._initGroupProfile(e[n]);
                                break;
                            default:
                                t.content[n] = e[n]
                        }
                    }))
                }
            }, {
                key: "_initGroupProfile",
                value: function(e) {
                    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                        var o = t[n];
                        h_[o] && ("groupName" === o ? this.content.groupProfile.name = e[o] : this.content.groupProfile[o] = e[o])
                    }
                }
            }]), e
        }(),
        __ = Math.min,
        m_ = [].lastIndexOf,
        v_ = !!m_ && 1 / [1].lastIndexOf(1, -0) < 0,
        M_ = st("lastIndexOf"),
        y_ = lt("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        I_ = v_ || !M_ || !y_ ? function(e) {
            if (v_) return m_.apply(this, arguments) || 0;
            var t = f(this),
                n = ue(t.length),
                o = n - 1;
            for (arguments.length > 1 && (o = __(o, ie(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)
                if (o in t && t[o] === e) return o || 0;
            return -1
        } : m_;
    Le({
        target: "Array",
        proto: !0,
        forced: I_ !== [].lastIndexOf
    }, {
        lastIndexOf: I_
    });
    var S_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_FILE, this._percent = 0;
                var n = this._getFileInfo(t);
                this.content = {
                    downloadFlag: 2,
                    fileUrl: t.url || "",
                    uuid: t.uuid,
                    fileName: n.name || "",
                    fileSize: n.size || 0
                }
            }
            return Pn(e, [{
                key: "_getFileInfo",
                value: function(e) {
                    if (e.fileName && e.fileSize) return {
                        size: e.fileSize,
                        name: e.fileName
                    };
                    if (Zs) return {};
                    var t = e.file.files[0];
                    return {
                        size: t.size,
                        name: t.name,
                        type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase()
                    }
                }
            }, {
                key: "updatePercent",
                value: function(e) {
                    this._percent = e, this._percent > 1 && (this._percent = 1)
                }
            }, {
                key: "updateFileUrl",
                value: function(e) {
                    this.content.fileUrl = e
                }
            }, {
                key: "sendable",
                value: function() {
                    return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !== this.content.fileSize)
                }
            }]), e
        }(),
        T_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_CUSTOM, this.content = {
                    data: t.data || "",
                    description: t.description || "",
                    extension: t.extension || ""
                }
            }
            return Pn(e, [{
                key: "setData",
                value: function(e) {
                    return this.content.data = e, this
                }
            }, {
                key: "setDescription",
                value: function(e) {
                    return this.content.description = e, this
                }
            }, {
                key: "setExtension",
                value: function(e) {
                    return this.content.extension = e, this
                }
            }, {
                key: "sendable",
                value: function() {
                    return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length
                }
            }]), e
        }(),
        E_ = function() {
            function e(t) {
                wn(this, e), this.type = ro.MSG_VIDEO, this._percent = 0, this.content = {
                    remoteVideoUrl: t.remoteVideoUrl || t.videoUrl || "",
                    videoFormat: t.videoFormat,
                    videoSecond: parseInt(t.videoSecond, 10),
                    videoSize: t.videoSize,
                    videoUrl: t.videoUrl,
                    videoDownloadFlag: 2,
                    videoUUID: t.videoUUID,
                    thumbUUID: t.thumbUUID,
                    thumbFormat: t.thumbFormat,
                    thumbWidth: t.thumbWidth,
                    thumbHeight: t.thumbHeight,
                    thumbSize: t.thumbSize,
                    thumbDownloadFlag: 2,
                    thumbUrl: t.thumbUrl
                }
            }
            return Pn(e, [{
                key: "updatePercent",
                value: function(e) {
                    this._percent = e, this._percent > 1 && (this._percent = 1)
                }
            }, {
                key: "updateVideoUrl",
                value: function(e) {
                    e && (this.content.remoteVideoUrl = e)
                }
            }, {
                key: "sendable",
                value: function() {
                    return "" !== this.content.remoteVideoUrl
                }
            }]), e
        }(),
        D_ = function e(t) {
            wn(this, e), this.type = ro.MSG_GEO, this.content = t
        },
        k_ = function() {
            function e(t) {
                if (wn(this, e), this.from = t.from, this.messageSender = t.from, this.time = t.time, this.messageSequence = t.sequence, this.clientSequence = t.clientSequence || t.sequence, this.messageRandom = t.random, this.cloudCustomData = t.cloudCustomData || "", t.ID) this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = [{
                    type: t.type,
                    payload: t.payload
                }], t.conversationType.startsWith(ro.CONV_C2C) ? this.receiverUserID = t.to : t.conversationType.startsWith(ro.CONV_GROUP) && (this.receiverGroupID = t.to), this.messageReceiver = t.to;
                else {
                    this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = [];
                    var n = t.elements[0].type,
                        o = t.elements[0].content;
                    this._patchRichMediaPayload(n, o), n === ro.MSG_MERGER ? this.messageBody.push({
                        type: n,
                        payload: new C_(o).content
                    }) : this.messageBody.push({
                        type: n,
                        payload: o
                    }), t.groupID && (this.receiverGroupID = t.groupID, this.messageReceiver = t.groupID), t.to && (this.receiverUserID = t.to, this.messageReceiver = t.to)
                }
            }
            return Pn(e, [{
                key: "_patchRichMediaPayload",
                value: function(e, t) {
                    e === ro.MSG_IMAGE ? t.imageInfoArray.forEach((function(e) {
                        !e.imageUrl && e.url && (e.imageUrl = e.url, e.sizeType = e.type, 1 === e.type ? e.type = 0 : 3 === e.type && (e.type = 1))
                    })) : e === ro.MSG_VIDEO ? !t.remoteVideoUrl && t.videoUrl && (t.remoteVideoUrl = t.videoUrl) : e === ro.MSG_AUDIO ? !t.remoteAudioUrl && t.url && (t.remoteAudioUrl = t.url) : e === ro.MSG_FILE && !t.fileUrl && t.url && (t.fileUrl = t.url, t.url = void 0)
                }
            }]), e
        }(),
        C_ = function() {
            function e(t) {
                if (wn(this, e), this.type = ro.MSG_MERGER, this.content = {
                    downloadKey: "",
                    pbDownloadKey: "",
                    messageList: [],
                    title: "",
                    abstractList: [],
                    compatibleText: "",
                    version: 0,
                    layersOverLimit: !1
                }, t.downloadKey) {
                    var n = t.downloadKey,
                        o = t.pbDownloadKey,
                        r = t.title,
                        a = t.abstractList,
                        s = t.compatibleText,
                        i = t.version;
                    this.content.downloadKey = n, this.content.pbDownloadKey = o, this.content.title = r, this.content.abstractList = a, this.content.compatibleText = s, this.content.version = i || 0
                } else if (Sc(t.messageList)) 1 === t.layersOverLimit && (this.content.layersOverLimit = !0);
                else {
                    var c = t.messageList,
                        u = t.title,
                        l = t.abstractList,
                        d = t.compatibleText,
                        p = t.version,
                        g = [];
                    c.forEach((function(e) {
                        if (!Sc(e)) {
                            var t = new k_(e);
                            g.push(t)
                        }
                    })), this.content.messageList = g, this.content.title = u, this.content.abstractList = l, this.content.compatibleText = d, this.content.version = p || 0
                }
                Gi.debug("MergerElement.content:", this.content)
            }
            return Pn(e, [{
                key: "sendable",
                value: function() {
                    return !Sc(this.content.messageList) || !Sc(this.content.downloadKey)
                }
            }]), e
        }(),
        N_ = {
            1: ro.MSG_PRIORITY_HIGH,
            2: ro.MSG_PRIORITY_NORMAL,
            3: ro.MSG_PRIORITY_LOW,
            4: ro.MSG_PRIORITY_LOWEST
        },
        A_ = function() {
            function e(t) {
                wn(this, e), this.ID = "", this.conversationID = t.conversationID || null, this.conversationType = t.conversationType || ro.CONV_C2C, this.conversationSubType = t.conversationSubType, this.time = t.time || Math.ceil(Date.now() / 1e3), this.sequence = t.sequence || 0, this.clientSequence = t.clientSequence || t.sequence || 0, this.random = t.random || 0 === t.random ? t.random : ec(), this.priority = this._computePriority(t.priority), this.nick = t.nick || "", this.avatar = t.avatar || "", this.isPeerRead = !1, this.nameCard = "", this._elements = [], this.isPlaceMessage = t.isPlaceMessage || 0, this.isRevoked = 2 === t.isPlaceMessage || 8 === t.msgFlagBits, this.geo = {}, this.from = t.from || null, this.to = t.to || null, this.flow = "", this.isSystemMessage = t.isSystemMessage || !1, this.protocol = t.protocol || "JSON", this.isResend = !1, this.isRead = !1, this.status = t.status || _u.SUCCESS, this._onlineOnlyFlag = !1, this._groupAtInfoList = [], this._relayFlag = !1, this.atUserList = [], this.cloudCustomData = t.cloudCustomData || "", this.isDeleted = !1, this.isModified = !1, this.reInitialize(t.currentUser), this.extractGroupInfo(t.groupProfile || null), this.handleGroupAtInfo(t)
            }
            return Pn(e, [{
                key: "getElements",
                value: function() {
                    return this._elements
                }
            }, {
                key: "extractGroupInfo",
                value: function(e) {
                    if (null !== e) {
                        qi(e.nick) && (this.nick = e.nick), qi(e.avatar) && (this.avatar = e.avatar);
                        var t = e.messageFromAccountExtraInformation;
                        Vi(t) && qi(t.nameCard) && (this.nameCard = t.nameCard)
                    }
                }
            }, {
                key: "handleGroupAtInfo",
                value: function(e) {
                    var t = this;
                    e.payload && e.payload.atUserList && e.payload.atUserList.forEach((function(e) {
                        e !== ro.MSG_AT_ALL ? (t._groupAtInfoList.push({
                            groupAtAllFlag: 0,
                            groupAtUserID: e
                        }), t.atUserList.push(e)) : (t._groupAtInfoList.push({
                            groupAtAllFlag: 1
                        }), t.atUserList.push(ro.MSG_AT_ALL))
                    })), Ki(e.groupAtInfo) && e.groupAtInfo.forEach((function(e) {
                        1 === e.groupAtAllFlag ? t.atUserList.push(e.groupAtUserID) : 2 === e.groupAtAllFlag && t.atUserList.push(ro.MSG_AT_ALL)
                    }))
                }
            }, {
                key: "getGroupAtInfoList",
                value: function() {
                    return this._groupAtInfoList
                }
            }, {
                key: "_initProxy",
                value: function() {
                    this._elements[0] && (this.payload = this._elements[0].content, this.type = this._elements[0].type)
                }
            }, {
                key: "reInitialize",
                value: function(e) {
                    e && (this.status = this.from ? _u.SUCCESS : _u.UNSEND, !this.from && (this.from = e)), this._initFlow(e), this._initSequence(e), this._concatConversationID(e), this.generateMessageID(e)
                }
            }, {
                key: "isSendable",
                value: function() {
                    return 0 !== this._elements.length && ("function" != typeof this._elements[0].sendable ? (Gi.warn("".concat(this._elements[0].type, ' need "boolean : sendable()" method')), !1) : this._elements[0].sendable())
                }
            }, {
                key: "_initTo",
                value: function(e) {
                    this.conversationType === ro.CONV_GROUP && (this.to = e.groupID)
                }
            }, {
                key: "_initSequence",
                value: function(e) {
                    0 === this.clientSequence && e && (this.clientSequence = function(e) {
                        if (!e) return Gi.error("autoIncrementIndex(string: key) need key parameter"), !1;
                        if (void 0 === rc[e]) {
                            var t = new Date,
                                n = "3".concat(t.getHours()).slice(-2),
                                o = "0".concat(t.getMinutes()).slice(-2),
                                r = "0".concat(t.getSeconds()).slice(-2);
                            rc[e] = parseInt([n, o, r, "0001"].join("")), n = null, o = null, r = null, Gi.log("autoIncrementIndex start index:".concat(rc[e]))
                        }
                        return rc[e]++
                    }(e)), 0 === this.sequence && this.conversationType === ro.CONV_C2C && (this.sequence = this.clientSequence)
                }
            }, {
                key: "generateMessageID",
                value: function(e) {
                    var t = e === this.from ? 1 : 0,
                        n = this.sequence > 0 ? this.sequence : this.clientSequence;
                    this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t)
                }
            }, {
                key: "_initFlow",
                value: function(e) {
                    "" !== e && (e === this.from ? (this.flow = "out", this.isRead = !0) : this.flow = "in")
                }
            }, {
                key: "_concatConversationID",
                value: function(e) {
                    var t = this.to,
                        n = "",
                        o = this.conversationType;
                    o !== ro.CONV_SYSTEM ? (n = o === ro.CONV_C2C ? e === this.from ? t : this.from : this.to, this.conversationID = "".concat(o).concat(n)) : this.conversationID = ro.CONV_SYSTEM
                }
            }, {
                key: "isElement",
                value: function(e) {
                    return e instanceof Jg || e instanceof u_ || e instanceof l_ || e instanceof d_ || e instanceof S_ || e instanceof E_ || e instanceof g_ || e instanceof f_ || e instanceof T_ || e instanceof D_ || e instanceof C_
                }
            }, {
                key: "setElement",
                value: function(e) {
                    var t = this;
                    if (this.isElement(e)) return this._elements = [e], void this._initProxy();
                    var n = function(e) {
                        if (e.type && e.content) switch (e.type) {
                            case ro.MSG_TEXT:
                                t.setTextElement(e.content);
                                break;
                            case ro.MSG_IMAGE:
                                t.setImageElement(e.content);
                                break;
                            case ro.MSG_AUDIO:
                                t.setAudioElement(e.content);
                                break;
                            case ro.MSG_FILE:
                                t.setFileElement(e.content);
                                break;
                            case ro.MSG_VIDEO:
                                t.setVideoElement(e.content);
                                break;
                            case ro.MSG_CUSTOM:
                                t.setCustomElement(e.content);
                                break;
                            case ro.MSG_GEO:
                                t.setGEOElement(e.content);
                                break;
                            case ro.MSG_GRP_TIP:
                                t.setGroupTipElement(e.content);
                                break;
                            case ro.MSG_GRP_SYS_NOTICE:
                                t.setGroupSystemNoticeElement(e.content);
                                break;
                            case ro.MSG_FACE:
                                t.setFaceElement(e.content);
                                break;
                            case ro.MSG_MERGER:
                                t.setMergerElement(e.content);
                                break;
                            default:
                                Gi.warn(e.type, e.content, "no operation......")
                        }
                    };
                    if (Ki(e))
                        for (var o = 0; o < e.length; o++) n(e[o]);
                    else n(e);
                    this._initProxy()
                }
            }, {
                key: "clearElement",
                value: function() {
                    this._elements.length = 0
                }
            }, {
                key: "setTextElement",
                value: function(e) {
                    var t = "string" == typeof e ? e : e.text,
                        n = new Jg({
                            text: t
                        });
                    this._elements.push(n)
                }
            }, {
                key: "setImageElement",
                value: function(e) {
                    var t = new u_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setAudioElement",
                value: function(e) {
                    var t = new d_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setFileElement",
                value: function(e) {
                    var t = new S_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setVideoElement",
                value: function(e) {
                    var t = new E_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setGEOElement",
                value: function(e) {
                    var t = new D_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setCustomElement",
                value: function(e) {
                    var t = new T_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setGroupTipElement",
                value: function(e) {
                    var t = {},
                        n = e.operationType;
                    Sc(e.memberInfoList) ? e.operatorInfo && (t = e.operatorInfo) : n !== ro.GRP_TIP_MBR_JOIN && n !== ro.GRP_TIP_MBR_KICKED_OUT && n !== ro.GRP_TIP_MBR_SET_ADMIN && n !== ro.GRP_TIP_MBR_CANCELED_ADMIN || (t = e.memberInfoList[0]);
                    var o = t,
                        r = o.nick,
                        a = o.avatar;
                    qi(r) && (this.nick = r), qi(a) && (this.avatar = a);
                    var s = new g_(e);
                    this._elements.push(s)
                }
            }, {
                key: "setGroupSystemNoticeElement",
                value: function(e) {
                    var t = new f_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setFaceElement",
                value: function(e) {
                    var t = new l_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setMergerElement",
                value: function(e) {
                    var t = new C_(e);
                    this._elements.push(t)
                }
            }, {
                key: "setIsRead",
                value: function(e) {
                    this.isRead = e
                }
            }, {
                key: "setRelayFlag",
                value: function(e) {
                    this._relayFlag = e
                }
            }, {
                key: "getRelayFlag",
                value: function() {
                    return this._relayFlag
                }
            }, {
                key: "setOnlineOnlyFlag",
                value: function(e) {
                    this._onlineOnlyFlag = e
                }
            }, {
                key: "getOnlineOnlyFlag",
                value: function() {
                    return this._onlineOnlyFlag
                }
            }, {
                key: "_computePriority",
                value: function(e) {
                    if (Bi(e)) return ro.MSG_PRIORITY_NORMAL;
                    if (qi(e) && -1 !== Object.values(N_).indexOf(e)) return e;
                    if (Fi(e)) {
                        var t = "" + e;
                        if (-1 !== Object.keys(N_).indexOf(t)) return N_[t]
                    }
                    return ro.MSG_PRIORITY_NORMAL
                }
            }, {
                key: "setNickAndAvatar",
                value: function(e) {
                    var t = e.nick,
                        n = e.avatar;
                    qi(t) && (this.nick = t), qi(n) && (this.avatar = n)
                }
            }, {
                key: "elements",
                get: function() {
                    return Gi.warn("！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"), this._elements
                }
            }]), e
        }(),
        O_ = function(e) {
            return {
                code: 0,
                data: e || {}
            }
        },
        L_ = "https://cloud.tencent.com/document/product/",
        R_ = "您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
        w_ = "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(".concat(L_, "269/32688)。"),
        b_ = "#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement",
        P_ = {
            70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",
            70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。",
            70003: w_,
            70005: w_,
            70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(".concat(L_, "269/32688)。"),
            70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。".concat(R_),
            70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。".concat(R_),
            70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(".concat(L_, "269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。"),
            70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",
            70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。".concat(R_),
            70051: "帐号被拉入黑名单。",
            70052: "UserSig 已经失效，请重新生成，再次尝试。",
            70107: "因安全原因被限制登录，请不要频繁登录。",
            70169: "请求的用户帐号不存在。",
            70114: "".concat("服务端内部超时，请稍后重试。"),
            70202: "".concat("服务端内部超时，请稍后重试。"),
            70206: "请求中批量数量不合法。",
            70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",
            70403: "请求失败，需要 App 管理员权限。",
            70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(".concat(L_, "269/32458)。"),
            70500: "".concat("服务端内部错误，请重试。"),
            71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",
            20001: "请求包非法。",
            20002: "UserSig 或 A2 失效。",
            20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",
            20004: "网络异常，请重试。",
            20005: "".concat("服务端内部错误，请重试。"),
            20006: "触发发送".concat("单聊消息", "之前回调，App 后台返回禁止下发该消息。"),
            20007: "发送".concat("单聊消息", "，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(").concat(L_, "269/38656)。"),
            20009: "消息发送双方互相不是好友，禁止发送（配置".concat("单聊消息", "校验好友关系才会出现）。"),
            20010: "发送".concat("单聊消息", "，自己不是对方的好友（单向关系），禁止发送。"),
            20011: "发送".concat("单聊消息", "，对方不是自己的好友（单向关系），禁止发送。"),
            20012: "发送方被禁言，该条消息被禁止发送。",
            20016: "消息撤回超过了时间限制（默认2分钟）。",
            20018: "删除漫游内部错误。",
            90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",
            90002: "".concat("JSON 格式请求包体", "中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(").concat(L_, "269/2720").concat(b_, ")。"),
            90003: "".concat("JSON 格式请求包体", "中缺少 To_Account 字段或者 To_Account 帐号不存在。"),
            90005: "".concat("JSON 格式请求包体", "中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。"),
            90006: "".concat("JSON 格式请求包体", "中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。"),
            90007: "".concat("JSON 格式请求包体", "中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。"),
            90008: "".concat("JSON 格式请求包体", "中缺少 From_Account 字段或者 From_Account 帐号不存在。"),
            90009: "请求需要 App 管理员权限。",
            90010: "".concat("JSON 格式请求包体", "不符合消息格式描述，请参考 TIMMsgElement 对象的定义(").concat(L_, "269/2720").concat(b_, ")。"),
            90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",
            90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",
            90026: "消息离线存储时间错误（最多不能超过7天）。",
            90031: "".concat("JSON 格式请求包体", "中 SyncOtherMachine 字段不是 Integer 类型。"),
            90044: "".concat("JSON 格式请求包体", "中 MsgLifeTime 字段不是 Integer 类型。"),
            90048: "请求的用户帐号不存在。",
            90054: "撤回请求中的 MsgKey 不合法。",
            90994: "".concat("服务端内部错误，请重试。"),
            90995: "".concat("服务端内部错误，请重试。"),
            91e3: "".concat("服务端内部错误，请重试。"),
            90992: "".concat("服务端内部错误，请重试。", "如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。"),
            93e3: "JSON 数据包超长，消息包体请不要超过8k。",
            91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",
            10002: "".concat("服务端内部错误，请重试。"),
            10003: "请求中的接口名称错误，请核对接口名称并重试。",
            10004: "参数非法，请根据错误描述检查请求是否正确。",
            10005: "请求包体中携带的帐号数量过多。",
            10006: "操作频率限制，请尝试降低调用的频率。",
            10007: "操作权限不足，例如 Work ".concat("群组", "中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。"),
            10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",
            10009: "该群不允许群主主动退出。",
            10010: "".concat("群组", "不存在，或者曾经存在过，但是目前已经被解散。"),
            10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",
            10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",
            10013: "被邀请加入的用户已经是群成员。",
            10014: "群已满员，无法将请求中的用户加入".concat("群组", "，如果是批量加人，可以尝试减少加入用户的数量。"),
            10015: "找不到指定 ID 的".concat("群组", "。"),
            10016: "App 后台通过第三方回调拒绝本次操作。",
            10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。",
            10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",
            10019: "请求的用户帐号不存在。",
            10021: "".concat("群组", " ID 已被使用，请选择其他的").concat("群组", " ID。"),
            10023: "发消息的频率超限，请延长两次发消息时间的间隔。",
            10024: "此邀请或者申请请求已经被处理。",
            10025: "".concat("群组", " ID 已被使用，并且操作者为群主，可以直接使用。"),
            10026: "该 SDKAppID 请求的命令字已被禁用。",
            10030: "请求撤回的消息不存在。",
            10031: "消息撤回超过了时间限制（默认2分钟）。",
            10032: "请求撤回的消息不支持撤回操作。",
            10033: "".concat("群组", "类型不支持消息撤回操作。"),
            10034: "该消息类型不支持删除操作。",
            10035: "直播群和在线成员广播大群不支持删除消息。",
            10036: "直播群创建数量超过了限制，请参考价格说明(".concat(L_, "269/11673)购买预付费套餐“IM直播群”。"),
            10037: "单个用户可创建和加入的".concat("群组", "数量超过了限制，请参考价格说明(").concat(L_, "269/11673)购买或升级预付费套餐“单人可创建与加入").concat("群组", "数”。"),
            10038: "群成员数量超过限制，请参考价格说明(".concat(L_, "269/11673)购买或升级预付费套餐“扩展群人数上限”。"),
            10041: "该应用（SDKAppID）已配置不支持群消息撤回。",
            30001: "请求参数错误，请根据错误描述检查请求参数",
            30002: "SDKAppID 不匹配",
            30003: "请求的用户帐号不存在",
            30004: "请求需要 App 管理员权限",
            30005: "关系链字段中包含敏感词",
            30006: "".concat("服务端内部错误，请重试。"),
            30007: "".concat("网络超时，请稍后重试. "),
            30008: "并发写导致写冲突，建议使用批量方式",
            30009: "后台禁止该用户发起加好友请求",
            30010: "自己的好友数已达系统上限",
            30011: "分组已达系统上限",
            30012: "未决数已达系统上限",
            30014: "对方的好友数已达系统上限",
            30515: "请求添加好友时，对方在自己的黑名单中，不允许加好友",
            30516: "请求添加好友时，对方的加好友验证方式是不允许任何人添加自己为好友",
            30525: "请求添加好友时，自己在对方的黑名单中，不允许加好友",
            30539: "等待对方同意",
            30540: "添加好友请求被安全策略打击，请勿频繁发起添加好友请求",
            31704: "与请求删除的帐号之间不存在好友关系",
            31707: "删除好友请求被安全策略打击，请勿频繁发起删除好友请求"
        },
        G_ = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this)).code = e.code, o.message = P_[e.code] || e.message, o.data = e.data || {}, o
            }
            return n
        }(jn(Error)),
        U_ = null,
        F_ = function(e) {
            U_ = e
        },
        q_ = function(e) {
            return Promise.resolve(O_(e))
        },
        x_ = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e instanceof G_) return t && null !== U_ && U_.emit(oo.ERROR, e), Promise.reject(e);
            if (e instanceof Error) {
                var n = new G_({
                    code: id.UNCAUGHT_ERROR,
                    message: e.message
                });
                return t && null !== U_ && U_.emit(oo.ERROR, n), Promise.reject(n)
            }
            if (Bi(e) || Bi(e.code) || Bi(e.message)) Gi.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
            else {
                if (Fi(e.code) && qi(e.message)) {
                    var o = new G_(e);
                    return t && null !== U_ && U_.emit(oo.ERROR, o), Promise.reject(o)
                }
                Gi.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!")
            }
        },
        V_ = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "C2CModule", o
            }
            return Pn(n, [{
                key: "onNewC2CMessage",
                value: function(e) {
                    var t = e.dataList,
                        n = e.isInstantMessage,
                        o = e.C2CRemainingUnreadList;
                    Gi.debug("".concat(this._className, ".onNewC2CMessage count:").concat(t.length, " isInstantMessage:").concat(n));
                    var r = this._newC2CMessageStoredAndSummary({
                            dataList: t,
                            C2CRemainingUnreadList: o,
                            isInstantMessage: n
                        }),
                        a = r.conversationOptionsList,
                        s = r.messageList;
                    (this.filterModifiedMessage(s), a.length > 0) && this.getModule(Vu).onNewMessage({
                        conversationOptionsList: a,
                        isInstantMessage: n
                    });
                    var i = this.filterUnmodifiedMessage(s);
                    n && i.length > 0 && this.emitOuterEvent(oo.MESSAGE_RECEIVED, i), s.length = 0
                }
            }, {
                key: "_newC2CMessageStoredAndSummary",
                value: function(e) {
                    for (var t = e.dataList, n = e.C2CRemainingUnreadList, o = e.isInstantMessage, r = null, a = [], s = [], i = {}, c = this.getModule($u), u = 0, l = t.length; u < l; u++) {
                        var d = t[u];
                        d.currentUser = this.getMyUserID(), d.conversationType = ro.CONV_C2C, d.isSystemMessage = !!d.isSystemMessage, r = new A_(d), d.elements = c.parseElements(d.elements, d.from), r.setElement(d.elements), r.setNickAndAvatar({
                            nick: d.nick,
                            avatar: d.avatar
                        });
                        var p = r.conversationID;
                        if (o) {
                            var g = !1,
                                h = this.getModule(Vu);
                            if (r.from !== this.getMyUserID()) {
                                var f = h.getLatestMessageSentByPeer(p);
                                if (f) {
                                    var _ = f.nick,
                                        m = f.avatar;
                                    _ === r.nick && m === r.avatar || (g = !0)
                                }
                            } else {
                                var v = h.getLatestMessageSentByMe(p);
                                if (v) {
                                    var M = v.nick,
                                        y = v.avatar;
                                    M === r.nick && y === r.avatar || h.modifyMessageSentByMe({
                                        conversationID: p,
                                        latestNick: r.nick,
                                        latestAvatar: r.avatar
                                    })
                                }
                            }
                            var I = 1 === t[u].isModified;
                            if (h.isMessageSentByCurrentInstance(r) ? r.isModified = I : I = !1, 0 === d.msgLifeTime) r.setOnlineOnlyFlag(!0), s.push(r);
                            else {
                                if (!h.pushIntoMessageList(s, r, I)) continue;
                                g && (h.modifyMessageSentByPeer(p), h.updateUserProfileSpecifiedKey({
                                    conversationID: p,
                                    nick: r.nick,
                                    avatar: r.avatar
                                }))
                            }
                            this.getModule(tl).addMessageDelay({
                                currentTime: Date.now(),
                                time: r.time
                            })
                        }
                        if (0 !== d.msgLifeTime) {
                            if (!1 === r.getOnlineOnlyFlag())
                                if (Bi(i[p])) i[p] = a.push({
                                    conversationID: p,
                                    unreadCount: "out" === r.flow ? 0 : 1,
                                    type: r.conversationType,
                                    subType: r.conversationSubType,
                                    lastMessage: r
                                }) - 1;
                                else {
                                    var S = i[p];
                                    a[S].type = r.conversationType, a[S].subType = r.conversationSubType, a[S].lastMessage = r, "in" === r.flow && a[S].unreadCount++
                                }
                        } else r.setOnlineOnlyFlag(!0)
                    }
                    if (Ki(n))
                        for (var T = function(e, t) {
                            var o = a.find((function(t) {
                                return t.conversationID === "C2C".concat(n[e].from)
                            }));
                            o ? o.unreadCount += n[e].count : a.push({
                                conversationID: "C2C".concat(n[e].from),
                                unreadCount: n[e].count,
                                type: ro.CONV_C2C,
                                lastMsgTime: n[e].lastMsgTime
                            })
                        }, E = 0, D = n.length; E < D; E++) T(E);
                    return {
                        conversationOptionsList: a,
                        messageList: s
                    }
                }
            }, {
                key: "onC2CMessageRevoked",
                value: function(e) {
                    var t = this;
                    Gi.debug("".concat(this._className, ".onC2CMessageRevoked count:").concat(e.dataList.length));
                    var n = this.getModule(Vu),
                        o = [],
                        r = null;
                    e.dataList.forEach((function(e) {
                        if (e.c2cMessageRevokedNotify) {
                            var a = e.c2cMessageRevokedNotify.revokedInfos;
                            Bi(a) || a.forEach((function(e) {
                                var a = t.getMyUserID() === e.from ? "".concat(ro.CONV_C2C).concat(e.to) : "".concat(ro.CONV_C2C).concat(e.from);
                                (r = n.revoke(a, e.sequence, e.random)) && o.push(r)
                            }))
                        }
                    })), 0 !== o.length && (n.onMessageRevoked(o), this.emitOuterEvent(oo.MESSAGE_REVOKED, o))
                }
            }, {
                key: "onC2CMessageReadReceipt",
                value: function(e) {
                    var t = this;
                    e.dataList.forEach((function(e) {
                        if (!Sc(e.c2cMessageReadReceipt)) {
                            var n = e.c2cMessageReadReceipt.to;
                            e.c2cMessageReadReceipt.uinPairReadArray.forEach((function(e) {
                                var o = e.peerReadTime;
                                Gi.debug("".concat(t._className, "._onC2CMessageReadReceipt to:").concat(n, " peerReadTime:").concat(o));
                                var r = "".concat(ro.CONV_C2C).concat(n),
                                    a = t.getModule(Vu);
                                a.recordPeerReadTime(r, o), a.updateMessageIsPeerReadProperty(r, o)
                            }))
                        }
                    }))
                }
            }, {
                key: "onC2CMessageReadNotice",
                value: function(e) {
                    var t = this;
                    e.dataList.forEach((function(e) {
                        if (!Sc(e.c2cMessageReadNotice)) {
                            var n = t.getModule(Vu);
                            e.c2cMessageReadNotice.uinPairReadArray.forEach((function(e) {
                                var o = e.from,
                                    r = e.peerReadTime;
                                Gi.debug("".concat(t._className, ".onC2CMessageReadNotice from:").concat(o, " lastReadTime:").concat(r));
                                var a = "".concat(ro.CONV_C2C).concat(o);
                                n.updateIsReadAfterReadReport({
                                    conversationID: a,
                                    lastMessageTime: r
                                }), n.updateUnreadCount(a)
                            }))
                        }
                    }))
                }
            }, {
                key: "sendMessage",
                value: function(e, t) {
                    var n = this._createC2CMessagePack(e, t);
                    return this.request(n)
                }
            }, {
                key: "_createC2CMessagePack",
                value: function(e, t) {
                    var n = null;
                    t && (t.offlinePushInfo && (n = t.offlinePushInfo), !0 === t.onlineUserOnly && (n ? n.disablePush = !0 : n = {
                        disablePush: !0
                    }));
                    var o = "";
                    return qi(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e.cloudCustomData), {
                        protocolName: cl,
                        tjgID: this.generateTjgID(e),
                        requestData: {
                            fromAccount: this.getMyUserID(),
                            toAccount: e.to,
                            msgTimeStamp: Math.ceil(Date.now() / 1e3),
                            msgBody: e.getElements(),
                            cloudCustomData: o,
                            msgSeq: e.sequence,
                            msgRandom: e.random,
                            msgLifeTime: this.isOnlineMessage(e, t) ? 0 : void 0,
                            nick: e.nick,
                            avatar: e.avatar,
                            offlinePushInfo: n ? {
                                pushFlag: !0 === n.disablePush ? 1 : 0,
                                title: n.title || "",
                                desc: n.description || "",
                                ext: n.extension || "",
                                apnsInfo: {
                                    badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
                                },
                                androidInfo: {
                                    OPPOChannelID: n.androidOPPOChannelID || ""
                                }
                            } : void 0
                        }
                    }
                }
            }, {
                key: "isOnlineMessage",
                value: function(e, t) {
                    return !(!t || !0 !== t.onlineUserOnly)
                }
            }, {
                key: "revokeMessage",
                value: function(e) {
                    return this.request({
                        protocolName: fl,
                        requestData: {
                            msgInfo: {
                                fromAccount: e.from,
                                toAccount: e.to,
                                msgSeq: e.sequence,
                                msgRandom: e.random,
                                msgTimeStamp: e.time
                            }
                        }
                    })
                }
            }, {
                key: "deleteMessage",
                value: function(e) {
                    var t = e.to,
                        n = e.keyList;
                    return Gi.log("".concat(this._className, ".deleteMessage toAccount:").concat(t, " count:").concat(n.length)), this.request({
                        protocolName: Ml,
                        requestData: {
                            fromAccount: this.getMyUserID(),
                            to: t,
                            keyList: n
                        }
                    })
                }
            }, {
                key: "setMessageRead",
                value: function(e) {
                    var t = this,
                        n = e.conversationID,
                        o = e.lastMessageTime,
                        r = "".concat(this._className, ".setMessageRead");
                    Gi.log("".concat(r, " conversationID:").concat(n, " lastMessageTime:").concat(o)), Fi(o) || Gi.warn("".concat(r, " 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确"));
                    var a = new Op(Wp);
                    return a.setMessage("conversationID:".concat(n, " lastMessageTime:").concat(o)), this.request({
                        protocolName: _l,
                        requestData: {
                            C2CMsgReaded: {
                                cookie: "",
                                C2CMsgReadedItem: [{
                                    toAccount: n.replace("C2C", ""),
                                    lastMessageTime: o,
                                    receipt: 1
                                }]
                            }
                        }
                    }).then((function() {
                        a.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(r, " ok"));
                        var e = t.getModule(Vu);
                        return e.updateIsReadAfterReadReport({
                            conversationID: n,
                            lastMessageTime: o
                        }), e.updateUnreadCount(n), O_()
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            a.setError(e, o, r).end()
                        })), Gi.log("".concat(r, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "getRoamingMessage",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".getRoamingMessage"),
                        o = e.peerAccount,
                        r = e.conversationID,
                        a = e.count,
                        s = e.lastMessageTime,
                        i = e.messageKey,
                        c = "peerAccount:".concat(o, " count:").concat(a || 15, " lastMessageTime:").concat(s || 0, " messageKey:").concat(i);
                    Gi.log("".concat(n, " ").concat(c));
                    var u = new Op(Hp);
                    return this.request({
                        protocolName: ml,
                        requestData: {
                            peerAccount: o,
                            count: a || 15,
                            lastMessageTime: s || 0,
                            messageKey: i
                        }
                    }).then((function(e) {
                        var o = e.data,
                            a = o.complete,
                            s = o.messageList,
                            i = o.messageKey;
                        Bi(s) ? Gi.log("".concat(n, " ok. complete:").concat(a, " but messageList is undefined!")) : Gi.log("".concat(n, " ok. complete:").concat(a, " count:").concat(s.length)), u.setNetworkType(t.getNetworkType()).setMessage("".concat(c, " complete:").concat(a, " length:").concat(s.length)).end();
                        var l = t.getModule(Vu);
                        1 === a && l.setCompleted(r);
                        var d = l.storeRoamingMessage(s, r);
                        l.modifyMessageList(r), l.updateIsRead(r), l.updateRoamingMessageKey(r, i);
                        var p = l.getPeerReadTime(r);
                        if (Gi.log("".concat(n, " update isPeerRead property. conversationID:").concat(r, " peerReadTime:").concat(p)), p) l.updateMessageIsPeerReadProperty(r, p);
                        else {
                            var g = r.replace(ro.CONV_C2C, "");
                            t.getRemotePeerReadTime([g]).then((function() {
                                l.updateMessageIsPeerReadProperty(r, l.getPeerReadTime(r))
                            }))
                        }
                        return d
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            u.setMessage(c).setError(e, o, r).end()
                        })), Gi.warn("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "getRemotePeerReadTime",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".getRemotePeerReadTime");
                    if (Sc(e)) return Gi.warn("".concat(n, " userIDList is empty!")), Promise.resolve();
                    var o = new Op(Qp);
                    return Gi.log("".concat(n, " userIDList:").concat(e)), this.request({
                        protocolName: vl,
                        requestData: {
                            userIDList: e
                        }
                    }).then((function(r) {
                        var a = r.data.peerReadTimeList;
                        Gi.log("".concat(n, " ok. peerReadTimeList:").concat(a));
                        for (var s = "", i = t.getModule(Vu), c = 0; c < e.length; c++) s += "".concat(e[c], "-").concat(a[c], " "), a[c] > 0 && i.recordPeerReadTime("C2C".concat(e[c]), a[c]);
                        o.setNetworkType(t.getNetworkType()).setMessage(s).end()
                    })).catch((function(e) {
                        t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.warn("".concat(n, " failed. error:"), e)
                    }))
                }
            }]), n
        }(nl),
        K_ = at.findIndex,
        B_ = !0,
        j_ = lt("findIndex");
    "findIndex" in [] && Array(1).findIndex((function() {
        B_ = !1
    })), Le({
        target: "Array",
        proto: !0,
        forced: B_ || !j_
    }, {
        findIndex: function(e) {
            return K_(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), Io("findIndex");
    var H_ = [],
        $_ = H_.sort,
        Y_ = r((function() {
            H_.sort(void 0)
        })),
        z_ = r((function() {
            H_.sort(null)
        })),
        W_ = st("sort");
    Le({
        target: "Array",
        proto: !0,
        forced: Y_ || !z_ || !W_
    }, {
        sort: function(e) {
            return void 0 === e ? $_.call(we(this)) : $_.call(we(this), et(e))
        }
    });
    var J_ = function() {
            function e(t) {
                wn(this, e), this.list = new Map, this._className = "MessageListHandler", this._latestMessageSentByPeerMap = new Map, this._latestMessageSentByMeMap = new Map, this._groupLocalLastMessageSequenceMap = new Map
            }
            return Pn(e, [{
                key: "getLocalOldestMessageByConversationID",
                value: function(e) {
                    if (!e) return null;
                    if (!this.list.has(e)) return null;
                    var t = this.list.get(e).values();
                    return t ? t.next().value : null
                }
            }, {
                key: "pushIn",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.conversationID,
                        o = e.ID,
                        r = !0;
                    this.list.has(n) || this.list.set(n, new Map);
                    var a = this.list.get(n).has(o);
                    if (a) {
                        var s = this.list.get(n).get(o);
                        if (!t || !0 === s.isModified) return r = !1
                    }
                    return this.list.get(n).set(o, e), this._setLatestMessageSentByPeer(n, e), this._setLatestMessageSentByMe(n, e), this._setGroupLocalLastMessageSequence(n, e), r
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t;
                    if (Ki(e)) {
                        if (e.length > 0) {
                            t = e[0].conversationID;
                            var n = e.length;
                            this._unshiftMultipleMessages(e), this._setGroupLocalLastMessageSequence(t, e[n - 1])
                        }
                    } else t = e.conversationID, this._unshiftSingleMessage(e), this._setGroupLocalLastMessageSequence(t, e);
                    if (t && t.startsWith(ro.CONV_C2C)) {
                        var o = Array.from(this.list.get(t).values()),
                            r = o.length;
                        if (0 === r) return;
                        for (var a = r - 1; a >= 0; a--)
                            if ("out" === o[a].flow) {
                                this._setLatestMessageSentByMe(t, o[a]);
                                break
                            } for (var s = r - 1; s >= 0; s--)
                            if ("in" === o[s].flow) {
                                this._setLatestMessageSentByPeer(t, o[s]);
                                break
                            }
                    }
                }
            }, {
                key: "_unshiftSingleMessage",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.ID;
                    if (!this.list.has(t)) return this.list.set(t, new Map), void this.list.get(t).set(n, e);
                    var o = Array.from(this.list.get(t));
                    o.unshift([n, e]), this.list.set(t, new Map(o))
                }
            }, {
                key: "_unshiftMultipleMessages",
                value: function(e) {
                    for (var t = e.length, n = [], o = e[0].conversationID, r = this.list.has(o) ? Array.from(this.list.get(o)) : [], a = 0; a < t; a++) n.push([e[a].ID, e[a]]);
                    this.list.set(o, new Map(n.concat(r)))
                }
            }, {
                key: "remove",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.ID;
                    this.list.has(t) && this.list.get(t).delete(n)
                }
            }, {
                key: "revoke",
                value: function(e, t, n) {
                    if (Gi.debug("revoke message", e, t, n), this.list.has(e)) {
                        var o, r = no(this.list.get(e));
                        try {
                            for (r.s(); !(o = r.n()).done;) {
                                var a = Wn(o.value, 2)[1];
                                if (a.sequence === t && !a.isRevoked && (Bi(n) || a.random === n)) return a.isRevoked = !0, a
                            }
                        } catch (s) {
                            r.e(s)
                        } finally {
                            r.f()
                        }
                    }
                    return null
                }
            }, {
                key: "removeByConversationID",
                value: function(e) {
                    this.list.has(e) && (this.list.delete(e), this._latestMessageSentByPeerMap.delete(e), this._latestMessageSentByMeMap.delete(e))
                }
            }, {
                key: "updateMessageIsPeerReadProperty",
                value: function(e, t) {
                    var n = [];
                    if (this.list.has(e)) {
                        var o, r = no(this.list.get(e));
                        try {
                            for (r.s(); !(o = r.n()).done;) {
                                var a = Wn(o.value, 2)[1];
                                a.time <= t && !a.isPeerRead && "out" === a.flow && (a.isPeerRead = !0, n.push(a))
                            }
                        } catch (s) {
                            r.e(s)
                        } finally {
                            r.f()
                        }
                        Gi.log("".concat(this._className, ".updateMessageIsPeerReadProperty conversationID:").concat(e, " peerReadTime:").concat(t, " count:").concat(n.length))
                    }
                    return n
                }
            }, {
                key: "updateMessageIsModifiedProperty",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.ID;
                    if (this.list.has(t)) {
                        var o = this.list.get(t).get(n);
                        o && (o.isModified = !0)
                    }
                }
            }, {
                key: "hasLocalMessageList",
                value: function(e) {
                    return this.list.has(e)
                }
            }, {
                key: "getLocalMessageList",
                value: function(e) {
                    return this.hasLocalMessageList(e) ? Jn(this.list.get(e).values()) : []
                }
            }, {
                key: "hasLocalMessage",
                value: function(e, t) {
                    return !!this.hasLocalMessageList(e) && this.list.get(e).has(t)
                }
            }, {
                key: "getLocalMessage",
                value: function(e, t) {
                    return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null
                }
            }, {
                key: "_setLatestMessageSentByPeer",
                value: function(e, t) {
                    e.startsWith(ro.CONV_C2C) && "in" === t.flow && this._latestMessageSentByPeerMap.set(e, t)
                }
            }, {
                key: "_setLatestMessageSentByMe",
                value: function(e, t) {
                    e.startsWith(ro.CONV_C2C) && "out" === t.flow && this._latestMessageSentByMeMap.set(e, t)
                }
            }, {
                key: "_setGroupLocalLastMessageSequence",
                value: function(e, t) {
                    e.startsWith(ro.CONV_GROUP) && this._groupLocalLastMessageSequenceMap.set(e, t.sequence)
                }
            }, {
                key: "getLatestMessageSentByPeer",
                value: function(e) {
                    return this._latestMessageSentByPeerMap.get(e)
                }
            }, {
                key: "getLatestMessageSentByMe",
                value: function(e) {
                    return this._latestMessageSentByMeMap.get(e)
                }
            }, {
                key: "getGroupLocalLastMessageSequence",
                value: function(e) {
                    return this._groupLocalLastMessageSequenceMap.get(e) || 0
                }
            }, {
                key: "modifyMessageSentByPeer",
                value: function(e, t) {
                    var n = this.list.get(e);
                    if (!Sc(n)) {
                        var o = Array.from(n.values()),
                            r = o.length;
                        if (0 !== r) {
                            var a = null,
                                s = null;
                            t && (s = t);
                            for (var i = 0, c = !1, u = r - 1; u >= 0; u--) "in" === o[u].flow && (null === s ? s = o[u] : ((a = o[u]).nick !== s.nick && (a.setNickAndAvatar({
                                nick: s.nick
                            }), c = !0), a.avatar !== s.avatar && (a.setNickAndAvatar({
                                avatar: s.avatar
                            }), c = !0), c && (i += 1)));
                            Gi.log("".concat(this._className, ".modifyMessageSentByPeer conversationID:").concat(e, " count:").concat(i))
                        }
                    }
                }
            }, {
                key: "modifyMessageSentByMe",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.latestNick,
                        o = e.latestAvatar,
                        r = this.list.get(t);
                    if (!Sc(r)) {
                        var a = Array.from(r.values()),
                            s = a.length;
                        if (0 !== s) {
                            for (var i = null, c = 0, u = !1, l = s - 1; l >= 0; l--) "out" === a[l].flow && ((i = a[l]).nick !== n && (i.setNickAndAvatar({
                                nick: n
                            }), u = !0), i.avatar !== o && (i.setNickAndAvatar({
                                avatar: o
                            }), u = !0), u && (c += 1));
                            Gi.log("".concat(this._className, ".modifyMessageSentByMe conversationID:").concat(t, " count:").concat(c))
                        }
                    }
                }
            }, {
                key: "traversal",
                value: function() {
                    if (0 !== this.list.size && -1 === Gi.getLevel()) {
                        console.group("conversationID-messageCount");
                        var e, t = no(this.list);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = Wn(e.value, 2),
                                    o = n[0],
                                    r = n[1];
                                console.log("".concat(o, "-").concat(r.size))
                            }
                        } catch (a) {
                            t.e(a)
                        } finally {
                            t.f()
                        }
                        console.groupEnd()
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.list.clear(), this._latestMessageSentByPeerMap.clear(), this._latestMessageSentByMeMap.clear(), this._groupLocalLastMessageSequenceMap.clear()
                }
            }]), e
        }(),
        X_ = {
            CONTEXT_A2KEY_AND_TINYID_UPDATED: "_a2KeyAndTinyIDUpdated",
            CLOUD_CONFIG_UPDATED: "_cloudConfigUpdated"
        };

    function Q_(e) {
        this.mixin(e)
    }
    Q_.mixin = function(e) {
        var t = e.prototype || e;
        t._isReady = !1, t.ready = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e) return this._isReady ? void(t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e))
        }, t.triggerReady = function() {
            var e = this;
            this._isReady = !0, setTimeout((function() {
                var t = e._readyQueue;
                e._readyQueue = [], t && t.length > 0 && t.forEach((function(e) {
                    e.call(this)
                }), e)
            }), 1)
        }, t.resetReady = function() {
            this._isReady = !1, this._readyQueue = []
        }, t.isReady = function() {
            return this._isReady
        }
    };
    var Z_ = ["jpg", "jpeg", "gif", "png", "bmp"],
        em = ["mp4"],
        tm = 1,
        nm = 2,
        om = 3,
        rm = 255,
        am = function() {
            function e(t) {
                var n = this;
                wn(this, e), Sc(t) || (this.userID = t.userID || "", this.nick = t.nick || "", this.gender = t.gender || "", this.birthday = t.birthday || 0, this.location = t.location || "", this.selfSignature = t.selfSignature || "", this.allowType = t.allowType || ro.ALLOW_TYPE_ALLOW_ANY, this.language = t.language || 0, this.avatar = t.avatar || "", this.messageSettings = t.messageSettings || 0, this.adminForbidType = t.adminForbidType || ro.FORBID_TYPE_NONE, this.level = t.level || 0, this.role = t.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], Sc(t.profileCustomField) || t.profileCustomField.forEach((function(e) {
                    n.profileCustomField.push({
                        key: e.key,
                        value: e.value
                    })
                })))
            }
            return Pn(e, [{
                key: "validate",
                value: function(e) {
                    var t = !0,
                        n = "";
                    if (Sc(e)) return {
                        valid: !1,
                        tips: "empty options"
                    };
                    if (e.profileCustomField)
                        for (var o = e.profileCustomField.length, r = null, a = 0; a < o; a++) {
                            if (r = e.profileCustomField[a], !qi(r.key) || -1 === r.key.indexOf("Tag_Profile_Custom")) return {
                                valid: !1,
                                tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom"
                            };
                            if (!qi(r.value)) return {
                                valid: !1,
                                tips: "自定义资料字段的 value 必须是字符串"
                            }
                        }
                    for (var s in e)
                        if (Object.prototype.hasOwnProperty.call(e, s)) {
                            if ("profileCustomField" === s) continue;
                            if (Sc(e[s]) && !qi(e[s]) && !Fi(e[s])) {
                                n = "key:" + s + ", invalid value:" + e[s], t = !1;
                                continue
                            }
                            switch (s) {
                                case "nick":
                                    qi(e[s]) || (n = "nick should be a string", t = !1), Zi(e[s]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(Zi(e[s]), " bytes"), t = !1);
                                    break;
                                case "gender":
                                    oc(r_, e.gender) || (n = "key:gender, invalid value:" + e.gender, t = !1);
                                    break;
                                case "birthday":
                                    Fi(e.birthday) || (n = "birthday should be a number", t = !1);
                                    break;
                                case "location":
                                    qi(e.location) || (n = "location should be a string", t = !1);
                                    break;
                                case "selfSignature":
                                    qi(e.selfSignature) || (n = "selfSignature should be a string", t = !1);
                                    break;
                                case "allowType":
                                    oc(s_, e.allowType) || (n = "key:allowType, invalid value:" + e.allowType, t = !1);
                                    break;
                                case "language":
                                    Fi(e.language) || (n = "language should be a number", t = !1);
                                    break;
                                case "avatar":
                                    qi(e.avatar) || (n = "avatar should be a string", t = !1);
                                    break;
                                case "messageSettings":
                                    0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1", t = !1);
                                    break;
                                case "adminForbidType":
                                    oc(a_, e.adminForbidType) || (n = "key:adminForbidType, invalid value:" + e.adminForbidType, t = !1);
                                    break;
                                case "level":
                                    Fi(e.level) || (n = "level should be a number", t = !1);
                                    break;
                                case "role":
                                    Fi(e.role) || (n = "role should be a number", t = !1);
                                    break;
                                default:
                                    n = "unknown key:" + s + "  " + e[s], t = !1
                            }
                        } return {
                        valid: t,
                        tips: n
                    }
                }
            }]), e
        }(),
        sm = function e(t) {
            wn(this, e), this.value = t, this.next = null
        },
        im = function() {
            function e(t) {
                wn(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map, Gi.debug("SinglyLinkedList init MAX_LENGTH:".concat(this.MAX_LENGTH))
            }
            return Pn(e, [{
                key: "set",
                value: function(e) {
                    var t = new sm(e);
                    if (this.map.size < this.MAX_LENGTH) null === this.pTail ? (this.pTail = t, this.pNodeToDel = t) : (this.pTail.next = t, this.pTail = t), this.map.set(e, 1);
                    else {
                        var n = this.pNodeToDel;
                        this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n.next = null, n = null, this.pTail.next = t, this.pTail = t, this.map.set(e, 1)
                    }
                }
            }, {
                key: "has",
                value: function(e) {
                    return this.map.has(e)
                }
            }, {
                key: "delete",
                value: function(e) {
                    this.has(e) && this.map.delete(e)
                }
            }, {
                key: "tail",
                value: function() {
                    return this.pTail
                }
            }, {
                key: "size",
                value: function() {
                    return this.map.size
                }
            }, {
                key: "data",
                value: function() {
                    return Array.from(this.map.keys())
                }
            }, {
                key: "reset",
                value: function() {
                    for (var e; null !== this.pNodeToDel;) e = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, e.next = null, e = null;
                    this.pTail = null, this.map.clear()
                }
            }]), e
        }(),
        cm = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers"],
        um = function() {
            function e(t) {
                wn(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = {
                    messageRemindType: "",
                    joinTime: "",
                    nameCard: "",
                    role: ""
                }, this.lastMessage = {
                    lastTime: "",
                    lastSequence: "",
                    fromAccount: "",
                    messageForShow: ""
                }, this.nextMessageSeq = "", this.memberNum = "", this.memberCount = "", this.maxMemberNum = "", this.maxMemberCount = "", this.joinOption = "", this.groupCustomField = [], this.muteAllMembers = void 0, this._initGroup(t)
            }
            return Pn(e, [{
                key: "_initGroup",
                value: function(e) {
                    for (var t in e) cm.indexOf(t) < 0 || ("selfInfo" !== t ? ("memberNum" === t && (this.memberCount = e[t]), "maxMemberNum" === t && (this.maxMemberCount = e[t]), this[t] = e[t]) : this.updateSelfInfo(e[t]))
                }
            }, {
                key: "updateGroup",
                value: function(e) {
                    var t = JSON.parse(JSON.stringify(e));
                    t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), Bi(t.muteAllMembers) || ("On" === t.muteAllMembers ? t.muteAllMembers = !0 : t.muteAllMembers = !1), t.groupCustomField && cc(this.groupCustomField, t.groupCustomField), Bi(t.memberNum) || (this.memberCount = t.memberNum), Bi(t.maxMemberNum) || (this.maxMemberCount = t.maxMemberNum), Xi(this, t, ["members", "errorCode", "lastMsgTime", "groupCustomField", "memberNum", "maxMemberNum"])
                }
            }, {
                key: "updateSelfInfo",
                value: function(e) {
                    var t = e.nameCard,
                        n = e.joinTime,
                        o = e.role,
                        r = e.messageRemindType;
                    Xi(this.selfInfo, {
                        nameCard: t,
                        joinTime: n,
                        role: o,
                        messageRemindType: r
                    }, [], ["", null, void 0, 0, NaN])
                }
            }, {
                key: "setSelfNameCard",
                value: function(e) {
                    this.selfInfo.nameCard = e
                }
            }, {
                key: "memberNum",
                set: function(e) {},
                get: function() {
                    return Gi.warn("！！！v2.8.0起弃用memberNum，请使用 memberCount"), this.memberCount
                }
            }, {
                key: "maxMemberNum",
                set: function(e) {},
                get: function() {
                    return Gi.warn("！！！v2.8.0起弃用maxMemberNum，请使用 maxMemberCount"), this.maxMemberCount
                }
            }]), e
        }(),
        lm = function(e, t) {
            if (Bi(t)) return "";
            switch (e) {
                case ro.MSG_TEXT:
                    return t.text;
                case ro.MSG_IMAGE:
                    return "[图片]";
                case ro.MSG_GEO:
                    return "[位置]";
                case ro.MSG_AUDIO:
                    return "[语音]";
                case ro.MSG_VIDEO:
                    return "[视频]";
                case ro.MSG_FILE:
                    return "[文件]";
                case ro.MSG_CUSTOM:
                    return "[自定义消息]";
                case ro.MSG_GRP_TIP:
                    return "[群提示消息]";
                case ro.MSG_GRP_SYS_NOTICE:
                    return "[群系统通知]";
                case ro.MSG_FACE:
                    return "[动画表情]";
                case ro.MSG_MERGER:
                    return "[聊天记录]";
                default:
                    return ""
            }
        },
        dm = function(e) {
            return Bi(e) ? {
                lastTime: 0,
                lastSequence: 0,
                fromAccount: 0,
                messageForShow: "",
                payload: null,
                type: "",
                isRevoked: !1,
                cloudCustomData: "",
                onlineOnlyFlag: !1
            } : e instanceof A_ ? {
                lastTime: e.time || 0,
                lastSequence: e.sequence || 0,
                fromAccount: e.from || "",
                messageForShow: lm(e.type, e.payload),
                payload: e.payload || null,
                type: e.type || null,
                isRevoked: e.isRevoked || !1,
                cloudCustomData: e.cloudCustomData || "",
                onlineOnlyFlag: !!Hi(e.getOnlineOnlyFlag) && e.getOnlineOnlyFlag()
            } : Fn({}, e, {
                messageForShow: lm(e.type, e.payload)
            })
        },
        pm = function() {
            function e(t) {
                wn(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0, this.type = t.type || "", this.lastMessage = dm(t.lastMessage), t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), this._isInfoCompleted = !1, this.peerReadTime = t.peerReadTime || 0, this.groupAtInfoList = [], this.remark = "", this._initProfile(t)
            }
            return Pn(e, [{
                key: "_initProfile",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach((function(n) {
                        switch (n) {
                            case "userProfile":
                                t.userProfile = e.userProfile;
                                break;
                            case "groupProfile":
                                t.groupProfile = e.groupProfile
                        }
                    })), Bi(this.userProfile) && this.type === ro.CONV_C2C ? this.userProfile = new am({
                        userID: e.conversationID.replace("C2C", "")
                    }) : Bi(this.groupProfile) && this.type === ro.CONV_GROUP && (this.groupProfile = new um({
                        groupID: e.conversationID.replace("GROUP", "")
                    }))
                }
            }, {
                key: "updateUnreadCount",
                value: function(e, t) {
                    Bi(e) || (lc(this.subType) ? this.unreadCount = 0 : t && this.type === ro.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e)
                }
            }, {
                key: "updateLastMessage",
                value: function(e) {
                    this.lastMessage = dm(e)
                }
            }, {
                key: "updateGroupAtInfoList",
                value: function(e) {
                    var t, n = (Xn(t = e.groupAtType) || Qn(t) || Zn(t) || to()).slice(0); - 1 !== n.indexOf(ro.CONV_AT_ME) && -1 !== n.indexOf(ro.CONV_AT_ALL) && (n = [ro.CONV_AT_ALL_AT_ME]);
                    var o = {
                        from: e.from,
                        groupID: e.groupID,
                        messageSequence: e.sequence,
                        atTypeArray: n,
                        __random: e.__random,
                        __sequence: e.__sequence
                    };
                    this.groupAtInfoList.push(o), Gi.debug("Conversation.updateGroupAtInfoList conversationID:".concat(this.conversationID), this.groupAtInfoList)
                }
            }, {
                key: "clearGroupAtInfoList",
                value: function() {
                    this.groupAtInfoList.length = 0
                }
            }, {
                key: "reduceUnreadCount",
                value: function() {
                    this.unreadCount >= 1 && (this.unreadCount -= 1)
                }
            }, {
                key: "isLastMessageRevoked",
                value: function(e) {
                    var t = e.sequence,
                        n = e.time;
                    return this.type === ro.CONV_C2C && t === this.lastMessage.lastSequence && n === this.lastMessage.lastTime || this.type === ro.CONV_GROUP && t === this.lastMessage.lastSequence
                }
            }, {
                key: "setLastMessageRevoked",
                value: function(e) {
                    this.lastMessage.isRevoked = e
                }
            }, {
                key: "toAccount",
                get: function() {
                    return this.conversationID.replace("C2C", "").replace("GROUP", "")
                }
            }, {
                key: "subType",
                get: function() {
                    return this.groupProfile ? this.groupProfile.type : ""
                }
            }]), e
        }(),
        gm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "ConversationModule", Q_.mixin($n(o)), o._messageListHandler = new J_, o.singlyLinkedList = new im(100), o._pagingStatus = mu.NOT_START, o._pagingTimeStamp = 0, o._conversationMap = new Map, o._tmpGroupList = [], o._tmpGroupAtTipsList = [], o._peerReadTimeMap = new Map, o._completedMap = new Map, o._roamingMessageKeyMap = new Map, o._initListeners(), o
            }
            return Pn(n, [{
                key: "_initListeners",
                value: function() {
                    this.getInnerEmitterInstance().on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initLocalConversationList, this)
                }
            }, {
                key: "onCheckTimer",
                value: function(e) {
                    e % 60 == 0 && this._messageListHandler.traversal()
                }
            }, {
                key: "_initLocalConversationList",
                value: function() {
                    var e = this,
                        t = new Op(sg);
                    Gi.log("".concat(this._className, "._initLocalConversationList."));
                    var n = "",
                        o = this._getStorageConversationList();
                    if (o) {
                        for (var r = o.length, a = 0; a < r; a++) {
                            var s = o[a];
                            if (s && s.groupProfile) {
                                var i = s.groupProfile.type;
                                if (lc(i)) continue
                            }
                            this._conversationMap.set(o[a].conversationID, new pm(o[a]))
                        }
                        this._emitConversationUpdate(!0, !1), n = "count:".concat(r)
                    } else n = "count:0";
                    t.setNetworkType(this.getNetworkType()).setMessage(n).end(), this.getModule(Uu) || this.triggerReady(), this.ready((function() {
                        e._tmpGroupList.length > 0 && (e.updateConversationGroupProfile(e._tmpGroupList), e._tmpGroupList.length = 0)
                    })), this._syncConversationList()
                }
            }, {
                key: "onMessageSent",
                value: function(e) {
                    this._onSendOrReceiveMessage(e.conversationOptionsList, !0)
                }
            }, {
                key: "onNewMessage",
                value: function(e) {
                    this._onSendOrReceiveMessage(e.conversationOptionsList, e.isInstantMessage)
                }
            }, {
                key: "_onSendOrReceiveMessage",
                value: function(e) {
                    var t = this,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._isReady ? 0 !== e.length && (this._getC2CPeerReadTime(e), this._updateLocalConversationList(e, !1, n), this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready((function() {
                        t._onSendOrReceiveMessage(e, n)
                    }))
                }
            }, {
                key: "updateConversationGroupProfile",
                value: function(e) {
                    var t = this;
                    Ki(e) && 0 === e.length || (0 !== this._conversationMap.size ? (e.forEach((function(e) {
                        var n = "GROUP".concat(e.groupID);
                        if (t._conversationMap.has(n)) {
                            var o = t._conversationMap.get(n);
                            o.groupProfile = e, o.lastMessage.lastSequence < e.nextMessageSeq && (o.lastMessage.lastSequence = e.nextMessageSeq - 1), o.subType || (o.subType = e.type)
                        }
                    })), this._emitConversationUpdate(!0, !1)) : this._tmpGroupList = e)
                }
            }, {
                key: "_updateConversationUserProfile",
                value: function(e) {
                    var t = this;
                    e.data.forEach((function(e) {
                        var n = "C2C".concat(e.userID);
                        t._conversationMap.has(n) && (t._conversationMap.get(n).userProfile = e)
                    })), this._emitConversationUpdate(!0, !1)
                }
            }, {
                key: "onMessageRevoked",
                value: function(e) {
                    var t = this;
                    if (0 !== e.length) {
                        var n = null,
                            o = !1;
                        e.forEach((function(e) {
                            (n = t._conversationMap.get(e.conversationID)) && n.isLastMessageRevoked(e) && (o = !0, n.setLastMessageRevoked(!0))
                        })), o && this._emitConversationUpdate(!0, !1)
                    }
                }
            }, {
                key: "onMessageDeleted",
                value: function(e) {
                    if (0 !== e.length) {
                        e.forEach((function(e) {
                            e.isDeleted = !0
                        }));
                        for (var t = e[0].conversationID, n = this._messageListHandler.getLocalMessageList(t), o = {}, r = n.length - 1; r > 0; r--)
                            if (!n[r].isDeleted) {
                                o = n[r];
                                break
                            } var a = this._conversationMap.get(t);
                        if (a) {
                            var s = !1;
                            a.lastMessage.lastSequence !== o.sequence && a.lastMessage.lastTime !== o.time && (a.updateLastMessage(o), s = !0, Gi.log("".concat(this._className, ".onMessageDeleted. update conversationID:").concat(t, " with lastMessage:"), a.lastMessage)), t.startsWith(ro.CONV_C2C) && this.updateUnreadCount(t), s && this._emitConversationUpdate(!0, !1)
                        }
                    }
                }
            }, {
                key: "onNewGroupAtTips",
                value: function(e) {
                    var t = this,
                        n = e.dataList,
                        o = null;
                    n.forEach((function(e) {
                        e.groupAtTips ? o = e.groupAtTips : e.elements && (o = e.elements), o.__random = e.random, o.__sequence = e.clientSequence, t._tmpGroupAtTipsList.push(o)
                    })), Gi.debug("".concat(this._className, ".onNewGroupAtTips isReady:").concat(this._isReady), this._tmpGroupAtTipsList), this._isReady && this._handleGroupAtTipsList()
                }
            }, {
                key: "_handleGroupAtTipsList",
                value: function() {
                    var e = this;
                    if (0 !== this._tmpGroupAtTipsList.length) {
                        var t = !1;
                        this._tmpGroupAtTipsList.forEach((function(n) {
                            var o = n.groupID;
                            if (n.from !== e.getMyUserID()) {
                                var r = e._conversationMap.get("".concat(ro.CONV_GROUP).concat(o));
                                r && (r.updateGroupAtInfoList(n), t = !0)
                            }
                        })), t && this._emitConversationUpdate(!0, !1), this._tmpGroupAtTipsList.length = 0
                    }
                }
            }, {
                key: "_getC2CPeerReadTime",
                value: function(e) {
                    var t = this,
                        n = [];
                    if (e.forEach((function(e) {
                        t._conversationMap.has(e.conversationID) || e.type !== ro.CONV_C2C || n.push(e.conversationID.replace(ro.CONV_C2C, ""))
                    })), n.length > 0) {
                        Gi.debug("".concat(this._className, "._getC2CPeerReadTime userIDList:").concat(n));
                        var o = this.getModule(Uu);
                        o && o.getRemotePeerReadTime(n)
                    }
                }
            }, {
                key: "_getStorageConversationList",
                value: function() {
                    return this.getModule(Bu).getItem("conversationMap")
                }
            }, {
                key: "_setStorageConversationList",
                value: function() {
                    var e = this.getLocalConversationList().slice(0, 20).map((function(e) {
                        return {
                            conversationID: e.conversationID,
                            type: e.type,
                            subType: e.subType,
                            lastMessage: e.lastMessage,
                            groupProfile: e.groupProfile,
                            userProfile: e.userProfile
                        }
                    }));
                    this.getModule(Bu).setItem("conversationMap", e)
                }
            }, {
                key: "_emitConversationUpdate",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = Jn(this._conversationMap.values());
                    if (t) {
                        var o = this.getModule(Fu);
                        o && o.updateGroupLastMessage(n)
                    }
                    e && this.emitOuterEvent(oo.CONVERSATION_LIST_UPDATED, n)
                }
            }, {
                key: "getLocalConversationList",
                value: function() {
                    return Jn(this._conversationMap.values())
                }
            }, {
                key: "getLocalConversation",
                value: function(e) {
                    return this._conversationMap.get(e)
                }
            }, {
                key: "_syncConversationList",
                value: function() {
                    var e = this,
                        t = new Op(ig);
                    return this._pagingStatus === mu.NOT_START && this._conversationMap.clear(), this._pagingGetConversationList().then((function(n) {
                        return e._pagingStatus = mu.RESOLVED, e._setStorageConversationList(), e._handleC2CPeerReadTime(), e.checkAndPatchRemark(), t.setMessage(e._conversationMap.size).setNetworkType(e.getNetworkType()).end(), n
                    })).catch((function(n) {
                        return e._pagingStatus = mu.REJECTED, t.setMessage(e._pagingTimeStamp), e.probeNetwork().then((function(e) {
                            var o = Wn(e, 2),
                                r = o[0],
                                a = o[1];
                            t.setError(n, r, a).end()
                        })), x_(n)
                    }))
                }
            }, {
                key: "_pagingGetConversationList",
                value: function() {
                    var e = this,
                        t = "".concat(this._className, "._pagingGetConversationList");
                    return this._pagingStatus = mu.PENDING, this.request({
                        protocolName: yl,
                        requestData: {
                            fromAccount: this.getMyUserID(),
                            timeStamp: this._pagingTimeStamp,
                            orderType: 1,
                            messageAssistFlags: 4
                        }
                    }).then((function(n) {
                        var o = n.data,
                            r = o.completeFlag,
                            a = o.conversations,
                            s = void 0 === a ? [] : a,
                            i = o.timeStamp;
                        if (Gi.log("".concat(t, " completeFlag:").concat(r, " count:").concat(s.length)), s.length > 0) {
                            var c = e._getConversationOptions(s);
                            e._updateLocalConversationList(c, !0)
                        }
                        if (e._isReady) e._emitConversationUpdate();
                        else {
                            if (!e.isLoggedIn()) return q_();
                            e.triggerReady()
                        }
                        return e._pagingTimeStamp = i, 1 !== r ? e._pagingGetConversationList() : (e._handleGroupAtTipsList(), q_())
                    })).catch((function(n) {
                        throw e.isLoggedIn() && (e._isReady || (Gi.warn("".concat(t, " failed. error:"), n), e.triggerReady())), n
                    }))
                }
            }, {
                key: "_updateLocalConversationList",
                value: function(e, t, n) {
                    var o, r = Date.now();
                    o = this._getTmpConversationListMapping(e, t, n), this._conversationMap = new Map(this._sortConversationList([].concat(Jn(o.toBeUpdatedConversationList), Jn(this._conversationMap)))), t || this._updateUserOrGroupProfile(o.newConversationList), Gi.debug("".concat(this._className, "._updateLocalConversationList cost ").concat(Date.now() - r, " ms"))
                }
            }, {
                key: "_getTmpConversationListMapping",
                value: function(e, t, n) {
                    for (var o = [], r = [], a = this.getModule(Fu), s = this.getModule(qu), i = 0, c = e.length; i < c; i++) {
                        var u = new pm(e[i]),
                            l = u.conversationID;
                        if (this._conversationMap.has(l)) {
                            var d = this._conversationMap.get(l),
                                p = ["unreadCount", "allowType", "adminForbidType", "payload"];
                            n || p.push("lastMessage"), Xi(d, u, p, [null, void 0, "", 0, NaN]), d.updateUnreadCount(u.unreadCount, t), n && (d.lastMessage.payload = e[i].lastMessage.payload), e[i].lastMessage && d.lastMessage.cloudCustomData !== e[i].lastMessage.cloudCustomData && (d.lastMessage.cloudCustomData = e[i].lastMessage.cloudCustomData || ""), this._conversationMap.delete(l), o.push([l, d])
                        } else {
                            if (u.type === ro.CONV_GROUP && a) {
                                var g = u.groupProfile.groupID,
                                    h = a.getLocalGroupProfile(g);
                                h && (u.groupProfile = h, u.updateUnreadCount(0))
                            } else if (u.type === ro.CONV_C2C) {
                                var f = l.replace(ro.CONV_C2C, "");
                                s && s.isMyFriend(f) && (u.remark = s.getFriendRemark(f))
                            }
                            r.push(u), o.push([l, u])
                        }
                    }
                    return {
                        toBeUpdatedConversationList: o,
                        newConversationList: r
                    }
                }
            }, {
                key: "_sortConversationList",
                value: function(e) {
                    return e.sort((function(e, t) {
                        return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                    }))
                }
            }, {
                key: "_updateUserOrGroupProfile",
                value: function(e) {
                    var t = this;
                    if (0 !== e.length) {
                        var n = [],
                            o = [],
                            r = this.getModule(Gu),
                            a = this.getModule(Fu);
                        e.forEach((function(e) {
                            if (e.type === ro.CONV_C2C) n.push(e.toAccount);
                            else if (e.type === ro.CONV_GROUP) {
                                var t = e.toAccount;
                                a.hasLocalGroup(t) ? e.groupProfile = a.getLocalGroupProfile(t) : o.push(t)
                            }
                        })), Gi.log("".concat(this._className, "._updateUserOrGroupProfile c2cUserIDList:").concat(n, " groupIDList:").concat(o)), n.length > 0 && r.getUserProfile({
                            userIDList: n
                        }).then((function(e) {
                            var n = e.data;
                            Ki(n) ? n.forEach((function(e) {
                                t._conversationMap.get("C2C".concat(e.userID)).userProfile = e
                            })) : t._conversationMap.get("C2C".concat(n.userID)).userProfile = n
                        })), o.length > 0 && a.getGroupProfileAdvance({
                            groupIDList: o,
                            responseFilter: {
                                groupBaseInfoFilter: ["Type", "Name", "FaceUrl"]
                            }
                        }).then((function(e) {
                            e.data.successGroupList.forEach((function(e) {
                                var n = "GROUP".concat(e.groupID);
                                if (t._conversationMap.has(n)) {
                                    var o = t._conversationMap.get(n);
                                    Xi(o.groupProfile, e, [], [null, void 0, "", 0, NaN]), !o.subType && e.type && (o.subType = e.type)
                                }
                            }))
                        }))
                    }
                }
            }, {
                key: "_getConversationOptions",
                value: function(e) {
                    var t = [],
                        n = e.filter((function(e) {
                            var t = e.lastMsg;
                            return Vi(t)
                        })).map((function(e) {
                            if (1 === e.type) {
                                var n = {
                                    userID: e.userID,
                                    nick: e.c2CNick,
                                    avatar: e.c2CImage
                                };
                                return t.push(n), {
                                    conversationID: "C2C".concat(e.userID),
                                    type: "C2C",
                                    lastMessage: {
                                        lastTime: e.time,
                                        lastSequence: e.sequence,
                                        fromAccount: e.lastC2CMsgFromAccount,
                                        messageForShow: e.messageShow,
                                        type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                                        payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null,
                                        cloudCustomData: e.cloudCustomData || "",
                                        isRevoked: 8 === e.lastMessageFlag,
                                        onlineOnlyFlag: !1
                                    },
                                    userProfile: new am(n),
                                    peerReadTime: e.c2cPeerReadTime
                                }
                            }
                            return {
                                conversationID: "GROUP".concat(e.groupID),
                                type: "GROUP",
                                lastMessage: {
                                    lastTime: e.time,
                                    lastSequence: e.messageReadSeq + e.unreadCount,
                                    fromAccount: e.msgGroupFromAccount,
                                    messageForShow: e.messageShow,
                                    type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                                    payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null,
                                    cloudCustomData: e.cloudCustomData || "",
                                    isRevoked: 2 === e.lastMessageFlag,
                                    onlineOnlyFlag: !1
                                },
                                groupProfile: new um({
                                    groupID: e.groupID,
                                    name: e.groupNick,
                                    avatar: e.groupImage
                                }),
                                unreadCount: e.unreadCount,
                                peerReadTime: 0
                            }
                        }));
                    t.length > 0 && this.getModule(Gu).onConversationsProfileUpdated(t);
                    return n
                }
            }, {
                key: "getLocalMessageList",
                value: function(e) {
                    return this._messageListHandler.getLocalMessageList(e)
                }
            }, {
                key: "deleteLocalMessage",
                value: function(e) {
                    e instanceof A_ && this._messageListHandler.remove(e)
                }
            }, {
                key: "getMessageList",
                value: function(e) {
                    var t = this,
                        n = e.conversationID,
                        o = e.nextReqMessageID,
                        r = e.count,
                        a = "".concat(this._className, ".getMessageList"),
                        s = this.getLocalConversation(n),
                        i = "";
                    if (s && s.groupProfile && (i = s.groupProfile.type), lc(i)) return Gi.log("".concat(a, " not available in avchatroom. conversationID:").concat(n)), q_({
                        messageList: [],
                        nextReqMessageID: "",
                        isCompleted: !0
                    });
                    (Bi(r) || r > 15) && (r = 15);
                    var c = this._computeLeftCount({
                        conversationID: n,
                        nextReqMessageID: o
                    });
                    return Gi.log("".concat(a, " conversationID:").concat(n, " leftCount:").concat(c, " count:").concat(r, " nextReqMessageID:").concat(o)), this._needGetHistory({
                        conversationID: n,
                        leftCount: c,
                        count: r
                    }) ? this.getHistoryMessages({
                        conversationID: n,
                        nextReqMessageID: o,
                        count: 20
                    }).then((function() {
                        return c = t._computeLeftCount({
                            conversationID: n,
                            nextReqMessageID: o
                        }), O_(t._computeResult({
                            conversationID: n,
                            nextReqMessageID: o,
                            count: r,
                            leftCount: c
                        }))
                    })) : (Gi.log("".concat(a, ".getMessageList get message list from memory")), this.modifyMessageList(n), q_(this._computeResult({
                        conversationID: n,
                        nextReqMessageID: o,
                        count: r,
                        leftCount: c
                    })))
                }
            }, {
                key: "_computeLeftCount",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.nextReqMessageID;
                    return n ? this._messageListHandler.getLocalMessageList(t).findIndex((function(e) {
                        return e.ID === n
                    })) : this._getMessageListSize(t)
                }
            }, {
                key: "_getMessageListSize",
                value: function(e) {
                    return this._messageListHandler.getLocalMessageList(e).length
                }
            }, {
                key: "_needGetHistory",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.leftCount,
                        o = e.count,
                        r = this.getLocalConversation(t),
                        a = "";
                    return r && r.groupProfile && (a = r.groupProfile.type), !dc(t) && !lc(a) && (n < o && !this._completedMap.has(t))
                }
            }, {
                key: "_computeResult",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.nextReqMessageID,
                        o = e.count,
                        r = e.leftCount,
                        a = this._computeMessageList({
                            conversationID: t,
                            nextReqMessageID: n,
                            count: o
                        }),
                        s = this._computeIsCompleted({
                            conversationID: t,
                            leftCount: r,
                            count: o
                        }),
                        i = this._computeNextReqMessageID({
                            messageList: a,
                            isCompleted: s,
                            conversationID: t
                        }),
                        c = "".concat(this._className, "._computeResult. conversationID:").concat(t);
                    return Gi.log("".concat(c, " leftCount:").concat(r, " count:").concat(o, " nextReqMessageID:").concat(i, " isCompleted:").concat(s)), {
                        messageList: a,
                        nextReqMessageID: i,
                        isCompleted: s
                    }
                }
            }, {
                key: "_computeMessageList",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.nextReqMessageID,
                        o = e.count,
                        r = this._messageListHandler.getLocalMessageList(t),
                        a = this._computeIndexEnd({
                            nextReqMessageID: n,
                            messageList: r
                        }),
                        s = this._computeIndexStart({
                            indexEnd: a,
                            count: o
                        });
                    return r.slice(s, a)
                }
            }, {
                key: "_computeNextReqMessageID",
                value: function(e) {
                    var t = e.messageList,
                        n = e.isCompleted,
                        o = e.conversationID;
                    if (!n) return 0 === t.length ? "" : t[0].ID;
                    var r = this._messageListHandler.getLocalMessageList(o);
                    return 0 === r.length ? "" : r[0].ID
                }
            }, {
                key: "_computeIndexEnd",
                value: function(e) {
                    var t = e.messageList,
                        n = void 0 === t ? [] : t,
                        o = e.nextReqMessageID;
                    return o ? n.findIndex((function(e) {
                        return e.ID === o
                    })) : n.length
                }
            }, {
                key: "_computeIndexStart",
                value: function(e) {
                    var t = e.indexEnd,
                        n = e.count;
                    return t > n ? t - n : 0
                }
            }, {
                key: "_computeIsCompleted",
                value: function(e) {
                    var t = e.conversationID;
                    return !!(e.leftCount <= e.count && this._completedMap.has(t))
                }
            }, {
                key: "getHistoryMessages",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.nextReqMessageID;
                    if (t === ro.CONV_SYSTEM) return q_();
                    e.count ? e.count > 20 && (e.count = 20) : e.count = 15;
                    var o = this._messageListHandler.getLocalOldestMessageByConversationID(t);
                    o || ((o = {}).time = 0, o.sequence = 0, 0 === t.indexOf(ro.CONV_C2C) ? (o.to = t.replace(ro.CONV_C2C, ""), o.conversationType = ro.CONV_C2C) : 0 === t.indexOf(ro.CONV_GROUP) && (o.to = t.replace(ro.CONV_GROUP, ""), o.conversationType = ro.CONV_GROUP));
                    var r = "",
                        a = null;
                    switch (o.conversationType) {
                        case ro.CONV_C2C:
                            return r = t.replace(ro.CONV_C2C, ""), (a = this.getModule(Uu)) ? a.getRoamingMessage({
                                conversationID: e.conversationID,
                                peerAccount: r,
                                count: e.count,
                                lastMessageTime: this._roamingMessageKeyMap.has(t) ? o.time : 0,
                                messageKey: this._roamingMessageKeyMap.get(t)
                            }) : x_({
                                code: id.CANNOT_FIND_MODULE,
                                message: hp
                            });
                        case ro.CONV_GROUP:
                            return (a = this.getModule(Fu)) ? a.getRoamingMessage({
                                conversationID: e.conversationID,
                                groupID: o.to,
                                count: e.count,
                                sequence: n && !1 === o.getOnlineOnlyFlag() ? o.sequence - 1 : o.sequence
                            }) : x_({
                                code: id.CANNOT_FIND_MODULE,
                                message: hp
                            });
                        default:
                            return q_()
                    }
                }
            }, {
                key: "patchConversationLastMessage",
                value: function(e) {
                    var t = this.getLocalConversation(e);
                    if (t) {
                        var n = t.lastMessage,
                            o = n.messageForShow,
                            r = n.payload;
                        if (Sc(o) || Sc(r)) {
                            var a = this._messageListHandler.getLocalMessageList(e);
                            if (0 === a.length) return;
                            var s = a[a.length - 1];
                            Gi.log("".concat(this._className, ".patchConversationLastMessage conversationID:").concat(e, " payload:"), s.payload), t.updateLastMessage(s)
                        }
                    }
                }
            }, {
                key: "storeRoamingMessage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = t.startsWith(ro.CONV_C2C) ? ro.CONV_C2C : ro.CONV_GROUP,
                        o = null,
                        r = [],
                        a = 0,
                        s = e.length,
                        i = null,
                        c = n === ro.CONV_GROUP,
                        u = this.getModule($u),
                        l = function() {
                            a = c ? e.length - 1 : 0, s = c ? 0 : e.length
                        },
                        d = function() {
                            c ? --a : ++a
                        },
                        p = function() {
                            return c ? a >= s : a < s
                        };
                    for (l(); p(); d())
                        if (c && 1 === e[a].sequence && this.setCompleted(t), 1 !== e[a].isPlaceMessage)
                            if ((o = new A_(e[a])).to = e[a].to, o.isSystemMessage = !!e[a].isSystemMessage, o.conversationType = n, 4 === e[a].event ? i = {
                                type: ro.MSG_GRP_TIP,
                                content: Fn({}, e[a].elements, {
                                    groupProfile: e[a].groupProfile
                                })
                            } : (e[a].elements = u.parseElements(e[a].elements, e[a].from), i = e[a].elements), c || o.setNickAndAvatar({
                                nick: e[a].nick,
                                avatar: e[a].avatar
                            }), Sc(i)) {
                                var g = new Op(Xp);
                                g.setMessage("from:".concat(o.from, " to:").concat(o.to, " sequence:").concat(o.sequence, " event:").concat(e[a].event)), g.setNetworkType(this.getNetworkType()).setLevel("warning").end()
                            } else o.setElement(i), o.reInitialize(this.getMyUserID()), r.push(o);
                    return this._messageListHandler.unshift(r), l = d = p = null, r
                }
            }, {
                key: "setMessageRead",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.messageID,
                        o = this.getLocalConversation(t);
                    if (Gi.log("".concat(this._className, ".setMessageRead conversationID:").concat(t, " unreadCount:").concat(o ? o.unreadCount : 0)), !o) return q_();
                    if (o.type !== ro.CONV_GROUP || Sc(o.groupAtInfoList) || this.deleteGroupAtTips(t), 0 === o.unreadCount) return q_();
                    var r = this._messageListHandler.getLocalMessage(t, n),
                        a = null;
                    switch (o.type) {
                        case ro.CONV_C2C:
                            return (a = this.getModule(Uu)) ? a.setMessageRead({
                                conversationID: t,
                                lastMessageTime: r ? r.time : o.lastMessage.lastTime
                            }) : x_({
                                code: id.CANNOT_FIND_MODULE,
                                message: hp
                            });
                        case ro.CONV_GROUP:
                            return (a = this._moduleManager.getModule(Fu)) ? a.setMessageRead({
                                conversationID: t,
                                lastMessageSeq: r ? r.sequence : o.lastMessage.lastSequence
                            }) : x_({
                                code: id.CANNOT_FIND_MODULE,
                                message: hp
                            });
                        case ro.CONV_SYSTEM:
                            return o.unreadCount = 0, q_();
                        default:
                            return q_()
                    }
                }
            }, {
                key: "updateIsReadAfterReadReport",
                value: function(e) {
                    var t = e.conversationID,
                        n = e.lastMessageSeq,
                        o = e.lastMessageTime,
                        r = this._messageListHandler.getLocalMessageList(t);
                    if (0 !== r.length)
                        for (var a, s = r.length - 1; s >= 0; s--)
                            if (a = r[s], !(o && a.time > o || n && a.sequence > n)) {
                                if ("in" === a.flow && a.isRead) break;
                                a.setIsRead(!0)
                            }
                }
            }, {
                key: "updateUnreadCount",
                value: function(e) {
                    var t = this.getLocalConversation(e),
                        n = this._messageListHandler.getLocalMessageList(e);
                    if (t) {
                        var o = t.unreadCount,
                            r = n.filter((function(e) {
                                return !e.isRead && !e.getOnlineOnlyFlag() && !e.isDeleted
                            })).length;
                        o !== r && (t.unreadCount = r, Gi.log("".concat(this._className, ".updateUnreadCount from ").concat(o, " to ").concat(r, ", conversationID:").concat(e)), this._emitConversationUpdate(!0, !1))
                    }
                }
            }, {
                key: "updateIsRead",
                value: function(e) {
                    var t = this.getLocalConversation(e),
                        n = this.getLocalMessageList(e);
                    if (t && 0 !== n.length && !dc(t.type)) {
                        for (var o = [], r = 0, a = n.length; r < a; r++) "in" !== n[r].flow ? "out" !== n[r].flow || n[r].isRead || n[r].setIsRead(!0) : o.push(n[r]);
                        var s = 0;
                        if (t.type === ro.CONV_C2C) {
                            var i = o.slice(-t.unreadCount).filter((function(e) {
                                return e.isRevoked
                            })).length;
                            s = o.length - t.unreadCount - i
                        } else s = o.length - t.unreadCount;
                        for (var c = 0; c < s && !o[c].isRead; c++) o[c].setIsRead(!0)
                    }
                }
            }, {
                key: "deleteGroupAtTips",
                value: function(e) {
                    var t = "".concat(this._className, ".deleteGroupAtTips");
                    Gi.log("".concat(t));
                    var n = this._conversationMap.get(e);
                    if (!n) return Promise.resolve();
                    var o = n.groupAtInfoList;
                    if (0 === o.length) return Promise.resolve();
                    var r = this.getMyUserID();
                    return this.request({
                        protocolName: Tl,
                        requestData: {
                            messageListToDelete: o.map((function(e) {
                                return {
                                    from: e.from,
                                    to: r,
                                    messageSeq: e.__sequence,
                                    messageRandom: e.__random,
                                    groupID: e.groupID
                                }
                            }))
                        }
                    }).then((function() {
                        return Gi.log("".concat(t, " ok. count:").concat(o.length)), n.clearGroupAtInfoList(), Promise.resolve()
                    })).catch((function(e) {
                        return Gi.error("".concat(t, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "appendToMessageList",
                value: function(e) {
                    this._messageListHandler.pushIn(e)
                }
            }, {
                key: "setMessageRandom",
                value: function(e) {
                    this.singlyLinkedList.set(e.random)
                }
            }, {
                key: "deleteMessageRandom",
                value: function(e) {
                    this.singlyLinkedList.delete(e.random)
                }
            }, {
                key: "pushIntoMessageList",
                value: function(e, t, n) {
                    return !(!this._messageListHandler.pushIn(t, n) || this._isMessageFromCurrentInstance(t) && !n) && (e.push(t), !0)
                }
            }, {
                key: "_isMessageFromCurrentInstance",
                value: function(e) {
                    return this.singlyLinkedList.has(e.random)
                }
            }, {
                key: "revoke",
                value: function(e, t, n) {
                    return this._messageListHandler.revoke(e, t, n)
                }
            }, {
                key: "getPeerReadTime",
                value: function(e) {
                    return this._peerReadTimeMap.get(e)
                }
            }, {
                key: "recordPeerReadTime",
                value: function(e, t) {
                    this._peerReadTimeMap.has(e) ? this._peerReadTimeMap.get(e) < t && this._peerReadTimeMap.set(e, t) : this._peerReadTimeMap.set(e, t)
                }
            }, {
                key: "updateMessageIsPeerReadProperty",
                value: function(e, t) {
                    if (e.startsWith(ro.CONV_C2C) && t > 0) {
                        var n = this._messageListHandler.updateMessageIsPeerReadProperty(e, t);
                        n.length > 0 && this.emitOuterEvent(oo.MESSAGE_READ_BY_PEER, n)
                    }
                }
            }, {
                key: "updateMessageIsReadProperty",
                value: function(e) {
                    var t = this.getLocalConversation(e),
                        n = this._messageListHandler.getLocalMessageList(e);
                    if (t && 0 !== n.length && !dc(t.type)) {
                        for (var o = [], r = 0; r < n.length; r++) "in" !== n[r].flow ? "out" !== n[r].flow || n[r].isRead || n[r].setIsRead(!0) : o.push(n[r]);
                        var a = 0;
                        if (t.type === ro.CONV_C2C) {
                            var s = o.slice(-t.unreadCount).filter((function(e) {
                                return e.isRevoked
                            })).length;
                            a = o.length - t.unreadCount - s
                        } else a = o.length - t.unreadCount;
                        for (var i = 0; i < a && !o[i].isRead; i++) o[i].setIsRead(!0)
                    }
                }
            }, {
                key: "updateMessageIsModifiedProperty",
                value: function(e) {
                    this._messageListHandler.updateMessageIsModifiedProperty(e)
                }
            }, {
                key: "setCompleted",
                value: function(e) {
                    Gi.log("".concat(this._className, ".setCompleted. conversationID:").concat(e)), this._completedMap.set(e, !0)
                }
            }, {
                key: "updateRoamingMessageKey",
                value: function(e, t) {
                    this._roamingMessageKeyMap.set(e, t)
                }
            }, {
                key: "getConversationList",
                value: function() {
                    var e = this,
                        t = "".concat(this._className, ".getConversationList");
                    Gi.log(t), this._pagingStatus === mu.REJECTED && (Gi.log("".concat(t, ". continue to sync conversationList")), this._syncConversationList());
                    var n = new Op(og);
                    return this.request({
                        protocolName: Il,
                        requestData: {
                            fromAccount: this.getMyUserID()
                        }
                    }).then((function(o) {
                        var r = o.data.conversations,
                            a = void 0 === r ? [] : r,
                            s = e._getConversationOptions(a);
                        return e._updateLocalConversationList(s, !0), e._setStorageConversationList(), e._handleC2CPeerReadTime(), n.setMessage("conversation count: ".concat(a.length)).setNetworkType(e.getNetworkType()).end(), Gi.log("".concat(t, " ok")), q_({
                            conversationList: e.getLocalConversationList()
                        })
                    })).catch((function(o) {
                        return e.probeNetwork().then((function(e) {
                            var t = Wn(e, 2),
                                r = t[0],
                                a = t[1];
                            n.setError(o, r, a).end()
                        })), Gi.error("".concat(t, " failed. error:"), o), x_(o)
                    }))
                }
            }, {
                key: "_handleC2CPeerReadTime",
                value: function() {
                    var e, t = no(this._conversationMap);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = Wn(e.value, 2),
                                o = n[0],
                                r = n[1];
                            r.type === ro.CONV_C2C && (Gi.debug("".concat(this._className, "._handleC2CPeerReadTime conversationID:").concat(o, " peerReadTime:").concat(r.peerReadTime)), this.recordPeerReadTime(o, r.peerReadTime))
                        }
                    } catch (a) {
                        t.e(a)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "getConversationProfile",
                value: function(e) {
                    var t, n = this;
                    if ((t = this._conversationMap.has(e) ? this._conversationMap.get(e) : new pm({
                        conversationID: e,
                        type: e.slice(0, 3) === ro.CONV_C2C ? ro.CONV_C2C : ro.CONV_GROUP
                    }))._isInfoCompleted || t.type === ro.CONV_SYSTEM) return q_({
                        conversation: t
                    });
                    var o = new Op(rg),
                        r = "".concat(this._className, ".getConversationProfile");
                    return Gi.log("".concat(r, ". conversationID:").concat(e, " remark:").concat(t.remark, " lastMessage:"), t.lastMessage), this._updateUserOrGroupProfileCompletely(t).then((function(a) {
                        o.setNetworkType(n.getNetworkType()).setMessage("conversationID:".concat(e, " unreadCount:").concat(a.data.conversation.unreadCount)).end();
                        var s = n.getModule(qu);
                        if (s && t.type === ro.CONV_C2C) {
                            var i = e.replace(ro.CONV_C2C, "");
                            if (s.isMyFriend(i)) {
                                var c = s.getFriendRemark(i);
                                t.remark !== c && (t.remark = c, Gi.log("".concat(r, ". conversationID:").concat(e, " patch remark:").concat(t.remark)))
                            }
                        }
                        return Gi.log("".concat(r, " ok. conversationID:").concat(e)), a
                    })).catch((function(t) {
                        return n.probeNetwork().then((function(n) {
                            var r = Wn(n, 2),
                                a = r[0],
                                s = r[1];
                            o.setError(t, a, s).setMessage("conversationID:".concat(e)).end()
                        })), Gi.error("".concat(r, " failed. error:"), t), x_(t)
                    }))
                }
            }, {
                key: "_updateUserOrGroupProfileCompletely",
                value: function(e) {
                    var t = this;
                    return e.type === ro.CONV_C2C ? this.getModule(Gu).getUserProfile({
                        userIDList: [e.toAccount]
                    }).then((function(n) {
                        var o = n.data;
                        return 0 === o.length ? x_(new G_({
                            code: id.USER_OR_GROUP_NOT_FOUND,
                            message: Vd
                        })) : (e.userProfile = o[0], e._isInfoCompleted = !0, t._unshiftConversation(e), q_({
                            conversation: e
                        }))
                    })) : this.getModule(Fu).getGroupProfile({
                        groupID: e.toAccount
                    }).then((function(n) {
                        return e.groupProfile = n.data.group, e._isInfoCompleted = !0, t._unshiftConversation(e), q_({
                            conversation: e
                        })
                    }))
                }
            }, {
                key: "_unshiftConversation",
                value: function(e) {
                    e instanceof pm && !this._conversationMap.has(e.conversationID) && (this._conversationMap = new Map([
                        [e.conversationID, e]
                    ].concat(Jn(this._conversationMap))), this._setStorageConversationList(), this._emitConversationUpdate(!0, !1))
                }
            }, {
                key: "deleteConversation",
                value: function(e) {
                    var t = this,
                        n = {
                            fromAccount: this.getMyUserID(),
                            toAccount: void 0,
                            type: void 0
                        };
                    if (!this._conversationMap.has(e)) {
                        var o = new G_({
                            code: id.CONVERSATION_NOT_FOUND,
                            message: xd
                        });
                        return x_(o)
                    }
                    switch (this._conversationMap.get(e).type) {
                        case ro.CONV_C2C:
                            n.type = 1, n.toAccount = e.replace(ro.CONV_C2C, "");
                            break;
                        case ro.CONV_GROUP:
                            n.type = 2, n.toGroupID = e.replace(ro.CONV_GROUP, "");
                            break;
                        case ro.CONV_SYSTEM:
                            return this.getModule(Fu).deleteGroupSystemNotice({
                                messageList: this._messageListHandler.getLocalMessageList(e)
                            }), this.deleteLocalConversation(e), q_({
                                conversationID: e
                            });
                        default:
                            var r = new G_({
                                code: id.CONVERSATION_UN_RECORDED_TYPE,
                                message: Kd
                            });
                            return x_(r)
                    }
                    var a = new Op(ag);
                    a.setMessage("conversationID:".concat(e));
                    var s = "".concat(this._className, ".deleteConversation");
                    return Gi.log("".concat(s, ". conversationID:").concat(e)), this.setMessageRead({
                        conversationID: e
                    }).then((function() {
                        return t.request({
                            protocolName: Sl,
                            requestData: n
                        })
                    })).then((function() {
                        return a.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(s, " ok")), t.deleteLocalConversation(e), q_({
                            conversationID: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            a.setError(e, o, r).end()
                        })), Gi.error("".concat(s, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "deleteLocalConversation",
                value: function(e) {
                    this._conversationMap.delete(e), this._setStorageConversationList(), this._messageListHandler.removeByConversationID(e), this._completedMap.delete(e), this._emitConversationUpdate(!0, !1)
                }
            }, {
                key: "isMessageSentByCurrentInstance",
                value: function(e) {
                    return !(!this._messageListHandler.hasLocalMessage(e.conversationID, e.ID) && !this.singlyLinkedList.has(e.random))
                }
            }, {
                key: "modifyMessageList",
                value: function(e) {
                    if (e.startsWith(ro.CONV_C2C)) {
                        var t = Date.now();
                        this._messageListHandler.modifyMessageSentByPeer(e);
                        var n = this.getModule(Gu).getNickAndAvatarByUserID(this.getMyUserID());
                        this._messageListHandler.modifyMessageSentByMe({
                            conversationID: e,
                            latestNick: n.nick,
                            latestAvatar: n.avatar
                        }), Gi.log("".concat(this._className, ".modifyMessageList conversationID:").concat(e, " cost ").concat(Date.now() - t, " ms"))
                    }
                }
            }, {
                key: "updateUserProfileSpecifiedKey",
                value: function(e) {
                    Gi.log("".concat(this._className, ".updateUserProfileSpecifiedKey options:"), e);
                    var t = e.conversationID,
                        n = e.nick,
                        o = e.avatar;
                    if (this._conversationMap.has(t)) {
                        var r = this._conversationMap.get(t).userProfile;
                        qi(n) && r.nick !== n && (r.nick = n), qi(o) && r.avatar !== o && (r.avatar = o), this._emitConversationUpdate(!0, !1)
                    }
                }
            }, {
                key: "onMyProfileModified",
                value: function(e) {
                    var t = this,
                        n = this.getLocalConversationList(),
                        o = Date.now();
                    n.forEach((function(n) {
                        t.modifyMessageSentByMe(Fn({
                            conversationID: n.conversationID
                        }, e))
                    })), Gi.log("".concat(this._className, ".onMyProfileModified. modify all messages sent by me, cost ").concat(Date.now() - o, " ms"))
                }
            }, {
                key: "modifyMessageSentByMe",
                value: function(e) {
                    this._messageListHandler.modifyMessageSentByMe(e)
                }
            }, {
                key: "getLatestMessageSentByMe",
                value: function(e) {
                    return this._messageListHandler.getLatestMessageSentByMe(e)
                }
            }, {
                key: "modifyMessageSentByPeer",
                value: function(e, t) {
                    this._messageListHandler.modifyMessageSentByPeer(e, t)
                }
            }, {
                key: "getLatestMessageSentByPeer",
                value: function(e) {
                    return this._messageListHandler.getLatestMessageSentByPeer(e)
                }
            }, {
                key: "pushIntoNoticeResult",
                value: function(e, t) {
                    return !(!this._messageListHandler.pushIn(t) || this.singlyLinkedList.has(t.random)) && (e.push(t), !0)
                }
            }, {
                key: "getGroupLocalLastMessageSequence",
                value: function(e) {
                    return this._messageListHandler.getGroupLocalLastMessageSequence(e)
                }
            }, {
                key: "checkAndPatchRemark",
                value: function() {
                    if (0 !== this._conversationMap.size) {
                        var e = this.getModule(qu);
                        if (e) {
                            var t = Jn(this._conversationMap.values()).filter((function(e) {
                                return e.type === ro.CONV_C2C
                            }));
                            if (0 !== t.length) {
                                var n = !1,
                                    o = 0;
                                t.forEach((function(t) {
                                    var r = t.conversationID.replace(ro.CONV_C2C, "");
                                    if (e.isMyFriend(r)) {
                                        var a = e.getFriendRemark(r);
                                        t.remark !== a && (t.remark = a, o += 1, n = !0)
                                    }
                                })), Gi.log("".concat(this._className, ".checkAndPatchRemark. c2c conversation count:").concat(t.length, ", patched count:").concat(o)), n && this._emitConversationUpdate(!0, !1)
                            }
                        }
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._pagingStatus = mu.NOT_START, this._messageListHandler.reset(), this._roamingMessageKeyMap.clear(), this.singlyLinkedList.reset(), this._peerReadTimeMap.clear(), this._completedMap.clear(), this._conversationMap.clear(), this._pagingTimeStamp = 0, this.resetReady()
                }
            }]), n
        }(nl),
        hm = function() {
            function e(t) {
                wn(this, e), this._groupModule = t, this._className = "GroupTipsHandler", this._cachedGroupTipsMap = new Map, this._checkCountMap = new Map, this.MAX_CHECK_COUNT = 4
            }
            return Pn(e, [{
                key: "onCheckTimer",
                value: function(e) {
                    e % 1 == 0 && this._cachedGroupTipsMap.size > 0 && this._checkCachedGroupTips()
                }
            }, {
                key: "_checkCachedGroupTips",
                value: function() {
                    var e = this;
                    this._cachedGroupTipsMap.forEach((function(t, n) {
                        var o = e._checkCountMap.get(n),
                            r = e._groupModule.hasLocalGroup(n);
                        Gi.log("".concat(e._className, "._checkCachedGroupTips groupID:").concat(n, " hasLocalGroup:").concat(r, " checkCount:").concat(o)), r ? (e._notifyCachedGroupTips(n), e._checkCountMap.delete(n), e._groupModule.deleteUnjoinedAVChatRoom(n)) : o >= e.MAX_CHECK_COUNT ? (e._deleteCachedGroupTips(n), e._checkCountMap.delete(n)) : (o++, e._checkCountMap.set(n, o))
                    }))
                }
            }, {
                key: "onNewGroupTips",
                value: function(e) {
                    Gi.debug("".concat(this._className, ".onReceiveGroupTips count:").concat(e.dataList.length));
                    var t = this.newGroupTipsStoredAndSummary(e),
                        n = t.eventDataList,
                        o = t.result,
                        r = t.AVChatRoomMessageList;
                    (r.length > 0 && this._groupModule.onAVChatRoomMessage(r), n.length > 0) && (this._groupModule.getModule(Vu).onNewMessage({
                        conversationOptionsList: n,
                        isInstantMessage: !0
                    }), this._groupModule.updateNextMessageSeq(n));
                    o.length > 0 && (this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED, o), this.handleMessageList(o))
                }
            }, {
                key: "newGroupTipsStoredAndSummary",
                value: function(e) {
                    for (var t = e.event, n = e.dataList, o = null, r = [], a = [], s = {}, i = [], c = 0, u = n.length; c < u; c++) {
                        var l = n[c],
                            d = l.groupProfile.groupID,
                            p = this._groupModule.hasLocalGroup(d);
                        if (p || !this._groupModule.isUnjoinedAVChatRoom(d))
                            if (p)
                                if (this._groupModule.isMessageFromAVChatroom(d)) {
                                    var g = ic(l);
                                    g.event = t, i.push(g)
                                } else {
                                    l.currentUser = this._groupModule.getMyUserID(), l.conversationType = ro.CONV_GROUP, (o = new A_(l)).setElement({
                                        type: ro.MSG_GRP_TIP,
                                        content: Fn({}, l.elements, {
                                            groupProfile: l.groupProfile
                                        })
                                    }), o.isSystemMessage = !1;
                                    var h = this._groupModule.getModule(Vu),
                                        f = o.conversationID;
                                    if (6 === t) o.setOnlineOnlyFlag(!0), a.push(o);
                                    else if (!h.pushIntoNoticeResult(a, o)) continue;
                                    if (6 !== t || !h.getLocalConversation(f)) {
                                        if (6 !== t) this._groupModule.getModule(tl).addMessageSequence({
                                            key: Ep,
                                            message: o
                                        });
                                        if (Bi(s[f])) s[f] = r.push({
                                            conversationID: f,
                                            unreadCount: "in" === o.flow && o.getOnlineOnlyFlag() ? 0 : 1,
                                            type: o.conversationType,
                                            subType: o.conversationSubType,
                                            lastMessage: o
                                        }) - 1;
                                        else {
                                            var _ = s[f];
                                            r[_].type = o.conversationType, r[_].subType = o.conversationSubType, r[_].lastMessage = o, "in" !== o.flow || o.getOnlineOnlyFlag() || r[_].unreadCount++
                                        }
                                    }
                                }
                            else this._cacheGroupTipsAndProbe({
                                groupID: d,
                                event: t,
                                item: l
                            })
                    }
                    return {
                        eventDataList: r,
                        result: a,
                        AVChatRoomMessageList: i
                    }
                }
            }, {
                key: "handleMessageList",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        switch (e.payload.operationType) {
                            case 1:
                                t._onNewMemberComeIn(e);
                                break;
                            case 2:
                                t._onMemberQuit(e);
                                break;
                            case 3:
                                t._onMemberKickedOut(e);
                                break;
                            case 4:
                                t._onMemberSetAdmin(e);
                                break;
                            case 5:
                                t._onMemberCancelledAdmin(e);
                                break;
                            case 6:
                                t._onGroupProfileModified(e);
                                break;
                            case 7:
                                t._onMemberInfoModified(e);
                                break;
                            default:
                                Gi.warn("".concat(t._className, ".handleMessageList unknown operationType:").concat(e.payload.operationType))
                        }
                    }))
                }
            }, {
                key: "_onNewMemberComeIn",
                value: function(e) {
                    var t = e.payload,
                        n = t.memberNum,
                        o = t.groupProfile.groupID,
                        r = this._groupModule.getLocalGroupProfile(o);
                    r && Fi(n) && (r.memberNum = n)
                }
            }, {
                key: "_onMemberQuit",
                value: function(e) {
                    var t = e.payload,
                        n = t.memberNum,
                        o = t.groupProfile.groupID,
                        r = this._groupModule.getLocalGroupProfile(o);
                    r && Fi(n) && (r.memberNum = n), this._groupModule.deleteLocalGroupMembers(o, e.payload.userIDList)
                }
            }, {
                key: "_onMemberKickedOut",
                value: function(e) {
                    var t = e.payload,
                        n = t.memberNum,
                        o = t.groupProfile.groupID,
                        r = this._groupModule.getLocalGroupProfile(o);
                    r && Fi(n) && (r.memberNum = n), this._groupModule.deleteLocalGroupMembers(o, e.payload.userIDList)
                }
            }, {
                key: "_onMemberSetAdmin",
                value: function(e) {
                    var t = e.payload.groupProfile.groupID,
                        n = e.payload.userIDList,
                        o = this._groupModule.getModule(xu);
                    n.forEach((function(e) {
                        var n = o.getLocalGroupMemberInfo(t, e);
                        n && n.updateRole(ro.GRP_MBR_ROLE_ADMIN)
                    }))
                }
            }, {
                key: "_onMemberCancelledAdmin",
                value: function(e) {
                    var t = e.payload.groupProfile.groupID,
                        n = e.payload.userIDList,
                        o = this._groupModule.getModule(xu);
                    n.forEach((function(e) {
                        var n = o.getLocalGroupMemberInfo(t, e);
                        n && n.updateRole(ro.GRP_MBR_ROLE_MEMBER)
                    }))
                }
            }, {
                key: "_onGroupProfileModified",
                value: function(e) {
                    var t = this,
                        n = e.payload.newGroupProfile,
                        o = e.payload.groupProfile.groupID,
                        r = this._groupModule.getLocalGroupProfile(o);
                    Object.keys(n).forEach((function(e) {
                        switch (e) {
                            case "ownerID":
                                t._ownerChanged(r, n);
                                break;
                            default:
                                r[e] = n[e]
                        }
                    })), this._groupModule.emitGroupListUpdate(!0, !0)
                }
            }, {
                key: "_ownerChanged",
                value: function(e, t) {
                    var n = e.groupID,
                        o = this._groupModule.getLocalGroupProfile(n),
                        r = this.tim.context.identifier;
                    if (r === t.ownerID) {
                        o.updateGroup({
                            selfInfo: {
                                role: ro.GRP_MBR_ROLE_OWNER
                            }
                        });
                        var a = this._groupModule.getModule(xu),
                            s = a.getLocalGroupMemberInfo(n, r),
                            i = this._groupModule.getLocalGroupProfile(n).ownerID,
                            c = a.getLocalGroupMemberInfo(n, i);
                        s && s.updateRole(ro.GRP_MBR_ROLE_OWNER), c && c.updateRole(ro.GRP_MBR_ROLE_MEMBER)
                    }
                }
            }, {
                key: "_onMemberInfoModified",
                value: function(e) {
                    var t = e.payload.groupProfile.groupID,
                        n = this._groupModule.getModule(xu);
                    e.payload.memberList.forEach((function(e) {
                        var o = n.getLocalGroupMemberInfo(t, e.userID);
                        o && e.muteTime && o.updateMuteUntil(e.muteTime)
                    }))
                }
            }, {
                key: "_cacheGroupTips",
                value: function(e, t) {
                    this._cachedGroupTipsMap.has(e) || this._cachedGroupTipsMap.set(e, []), this._cachedGroupTipsMap.get(e).push(t)
                }
            }, {
                key: "_deleteCachedGroupTips",
                value: function(e) {
                    this._cachedGroupTipsMap.has(e) && this._cachedGroupTipsMap.delete(e)
                }
            }, {
                key: "_notifyCachedGroupTips",
                value: function(e) {
                    var t = this,
                        n = this._cachedGroupTipsMap.get(e) || [];
                    n.forEach((function(e) {
                        t.onNewGroupTips(e)
                    })), this._deleteCachedGroupTips(e), Gi.log("".concat(this._className, "._notifyCachedGroupTips groupID:").concat(e, " count:").concat(n.length))
                }
            }, {
                key: "_cacheGroupTipsAndProbe",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = e.event,
                        r = e.item;
                    this._cacheGroupTips(n, {
                        event: o,
                        dataList: [r]
                    }), this._groupModule.getGroupSimplifiedInfo(n).then((function(e) {
                        e.type === ro.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(n) ? t._notifyCachedGroupTips(n) : t._groupModule.setUnjoinedAVChatRoom(n) : (t._groupModule.updateGroupMap([e]), t._notifyCachedGroupTips(n))
                    })), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Gi.log("".concat(this._className, "._cacheGroupTipsAndProbe groupID:").concat(n))
                }
            }, {
                key: "reset",
                value: function() {
                    this._cachedGroupTipsMap.clear(), this._checkCountMap.clear()
                }
            }]), e
        }(),
        fm = [].push,
        _m = Math.min,
        mm = !r((function() {
            return !RegExp(4294967295, "y")
        }));
    vs("split", 2, (function(e, t, n) {
        var o;
        return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var o = String(h(this)),
                r = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === r) return [];
            if (void 0 === e) return [o];
            if (!cs(e)) return t.call(o, e, r);
            for (var a, s, i, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, d = new RegExp(e.source, u + "g");
                 (a = ts.call(d, o)) && !((s = d.lastIndex) > l && (c.push(o.slice(l, a.index)), a.length > 1 && a.index < o.length && fm.apply(c, a.slice(1)), i = a[0].length, l = s, c.length >= r));) d.lastIndex === a.index && d.lastIndex++;
            return l === o.length ? !i && d.test("") || c.push("") : c.push(o.slice(l)), c.length > r ? c.slice(0, r) : c
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function(t, n) {
            var r = h(this),
                a = null == t ? void 0 : t[e];
            return void 0 !== a ? a.call(t, r, n) : o.call(String(r), t, n)
        }, function(e, r) {
            var a = n(o, e, this, r, o !== t);
            if (a.done) return a.value;
            var s = k(e),
                i = String(this),
                c = Rr(s, RegExp),
                u = s.unicode,
                l = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (mm ? "y" : "g"),
                d = new c(mm ? s : "^(?:" + s.source + ")", l),
                p = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === p) return [];
            if (0 === i.length) return null === Is(d, i) ? [i] : [];
            for (var g = 0, h = 0, f = []; h < i.length;) {
                d.lastIndex = mm ? h : 0;
                var _, m = Is(d, mm ? i : i.slice(h));
                if (null === m || (_ = _m(ue(d.lastIndex + (mm ? 0 : h)), i.length)) === g) h = ys(i, h, u);
                else {
                    if (f.push(i.slice(g, h)), f.length === p) return f;
                    for (var v = 1; v <= m.length - 1; v++)
                        if (f.push(m[v]), f.length === p) return f;
                    h = g = _
                }
            }
            return f.push(i.slice(g)), f
        }]
    }), !mm);
    var vm = function() {
            function e(t) {
                wn(this, e), this._groupModule = t, this._className = "CommonGroupHandler", this.tempConversationList = null, this._cachedGroupMessageMap = new Map, this._checkCountMap = new Map, this.MAX_CHECK_COUNT = 4, t.getInnerEmitterInstance().once(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
            }
            return Pn(e, [{
                key: "onCheckTimer",
                value: function(e) {
                    e % 1 == 0 && this._cachedGroupMessageMap.size > 0 && this._checkCachedGroupMessage()
                }
            }, {
                key: "_checkCachedGroupMessage",
                value: function() {
                    var e = this;
                    this._cachedGroupMessageMap.forEach((function(t, n) {
                        var o = e._checkCountMap.get(n),
                            r = e._groupModule.hasLocalGroup(n);
                        Gi.log("".concat(e._className, "._checkCachedGroupMessage groupID:").concat(n, " hasLocalGroup:").concat(r, " checkCount:").concat(o)), r ? (e._notifyCachedGroupMessage(n), e._checkCountMap.delete(n), e._groupModule.deleteUnjoinedAVChatRoom(n)) : o >= e.MAX_CHECK_COUNT ? (e._deleteCachedGroupMessage(n), e._checkCountMap.delete(n)) : (o++, e._checkCountMap.set(n, o))
                    }))
                }
            }, {
                key: "_initGroupList",
                value: function() {
                    var e = this;
                    Gi.log("".concat(this._className, "._initGroupList"));
                    var t = new Op(yg),
                        n = this._groupModule.getStorageGroupList();
                    if (Ki(n) && n.length > 0) {
                        n.forEach((function(t) {
                            e._groupModule.initGroupMap(t)
                        })), this._groupModule.emitGroupListUpdate(!0, !1);
                        var o = this._groupModule.getLocalGroupList().length;
                        t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:".concat(o)).end()
                    } else t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:0").end();
                    Gi.log("".concat(this._className, "._initGroupList ok")), this.getGroupList()
                }
            }, {
                key: "handleUpdateGroupLastMessage",
                value: function(e) {
                    var t = "".concat(this._className, ".handleUpdateGroupLastMessage");
                    if (Gi.debug("".concat(t, " conversation count:").concat(e.length, ", local group count:").concat(this._groupModule.getLocalGroupList().length)), 0 !== this._groupModule.getGroupMap().size) {
                        for (var n, o, r, a = !1, s = 0, i = e.length; s < i; s++)(n = e[s]).type === ro.CONV_GROUP && (o = n.conversationID.split(/^GROUP/)[1], (r = this._groupModule.getLocalGroupProfile(o)) && (r.lastMessage = n.lastMessage, a = !0));
                        a && (this._groupModule.sortLocalGroupList(), this._groupModule.emitGroupListUpdate(!0, !1))
                    } else this.tempConversationList = e
                }
            }, {
                key: "onNewGroupMessage",
                value: function(e) {
                    Gi.debug("".concat(this._className, ".onNewGroupMessage count:").concat(e.dataList.length));
                    var t = this._newGroupMessageStoredAndSummary(e),
                        n = t.conversationOptionsList,
                        o = t.messageList,
                        r = t.AVChatRoomMessageList;
                    (r.length > 0 && this._groupModule.onAVChatRoomMessage(r), this._groupModule.filterModifiedMessage(o), n.length > 0) && (this._groupModule.getModule(Vu).onNewMessage({
                        conversationOptionsList: n,
                        isInstantMessage: !0
                    }), this._groupModule.updateNextMessageSeq(n));
                    var a = this._groupModule.filterUnmodifiedMessage(o);
                    a.length > 0 && this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED, a), o.length = 0
                }
            }, {
                key: "_newGroupMessageStoredAndSummary",
                value: function(e) {
                    var t = e.dataList,
                        n = e.event,
                        o = e.isInstantMessage,
                        r = null,
                        a = [],
                        s = [],
                        i = [],
                        c = {},
                        u = ro.CONV_GROUP,
                        l = this._groupModule.getModule($u),
                        d = t.length;
                    d > 1 && t.sort((function(e, t) {
                        return e.sequence - t.sequence
                    }));
                    for (var p = 0; p < d; p++) {
                        var g = t[p],
                            h = g.groupProfile.groupID,
                            f = this._groupModule.hasLocalGroup(h);
                        if (f || !this._groupModule.isUnjoinedAVChatRoom(h))
                            if (f)
                                if (this._groupModule.isMessageFromAVChatroom(h)) {
                                    var _ = ic(g);
                                    _.event = n, i.push(_)
                                } else {
                                    g.currentUser = this._groupModule.getMyUserID(), g.conversationType = u, g.isSystemMessage = !!g.isSystemMessage, r = new A_(g), g.elements = l.parseElements(g.elements, g.from), r.setElement(g.elements);
                                    var m = 1 === t[p].isModified,
                                        v = this._groupModule.getModule(Vu);
                                    v.isMessageSentByCurrentInstance(r) ? r.isModified = m : m = !1;
                                    var M = this._groupModule.getModule(tl);
                                    if (o && M.addMessageDelay({
                                        currentTime: Date.now(),
                                        time: r.time
                                    }), 1 === g.onlineOnlyFlag) r.setOnlineOnlyFlag(!0), s.push(r);
                                    else {
                                        if (!v.pushIntoMessageList(s, r, m)) continue;
                                        M.addMessageSequence({
                                            key: Ep,
                                            message: r
                                        });
                                        var y = r.conversationID;
                                        if (Bi(c[y])) c[y] = a.push({
                                            conversationID: y,
                                            unreadCount: "out" === r.flow ? 0 : 1,
                                            type: r.conversationType,
                                            subType: r.conversationSubType,
                                            lastMessage: r
                                        }) - 1;
                                        else {
                                            var I = c[y];
                                            a[I].type = r.conversationType, a[I].subType = r.conversationSubType, a[I].lastMessage = r, "in" === r.flow && a[I].unreadCount++
                                        }
                                    }
                                }
                            else this._cacheGroupMessageAndProbe({
                                groupID: h,
                                event: n,
                                item: g
                            })
                    }
                    return {
                        conversationOptionsList: a,
                        messageList: s,
                        AVChatRoomMessageList: i
                    }
                }
            }, {
                key: "onGroupMessageRevoked",
                value: function(e) {
                    Gi.debug("".concat(this._className, ".onGroupMessageRevoked nums:").concat(e.dataList.length));
                    var t = this._groupModule.getModule(Vu),
                        n = [],
                        o = null;
                    e.dataList.forEach((function(e) {
                        var r = e.elements.revokedInfos;
                        Bi(r) || r.forEach((function(e) {
                            (o = t.revoke("GROUP".concat(e.groupID), e.sequence, e.random)) && n.push(o)
                        }))
                    })), 0 !== n.length && (t.onMessageRevoked(n), this._groupModule.emitOuterEvent(oo.MESSAGE_REVOKED, n))
                }
            }, {
                key: "_groupListTreeShaking",
                value: function(e) {
                    for (var t = new Map(Jn(this._groupModule.getGroupMap())), n = 0, o = e.length; n < o; n++) t.delete(e[n].groupID);
                    this._groupModule.hasJoinedAVChatRoom() && this._groupModule.getJoinedAVChatRoom().forEach((function(e) {
                        t.delete(e)
                    }));
                    for (var r = Jn(t.keys()), a = 0, s = r.length; a < s; a++) this._groupModule.deleteGroup(r[a])
                }
            }, {
                key: "getGroupList",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".getGroupList"),
                        o = new Op(vg);
                    Gi.log("".concat(n));
                    var r = {
                            introduction: "Introduction",
                            notification: "Notification",
                            createTime: "CreateTime",
                            ownerID: "Owner_Account",
                            lastInfoTime: "LastInfoTime",
                            memberNum: "MemberNum",
                            maxMemberNum: "MaxMemberNum",
                            joinOption: "ApplyJoinOption",
                            muteAllMembers: "ShutUpAllMember"
                        },
                        a = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"],
                        s = [];
                    return e && e.groupProfileFilter && e.groupProfileFilter.forEach((function(e) {
                        r[e] && a.push(r[e])
                    })), this._pagingGetGroupList({
                        limit: 50,
                        offset: 0,
                        groupBaseInfoFilter: a,
                        groupList: s
                    }).then((function() {
                        Gi.log("".concat(n, " ok. count:").concat(s.length)), t._groupListTreeShaking(s), t._groupModule.updateGroupMap(s);
                        var e = t._groupModule.getLocalGroupList().length;
                        return o.setNetworkType(t._groupModule.getNetworkType()).setMessage("remote count:".concat(s.length, ", after tree shaking, local count:").concat(e)).end(), t.tempConversationList && (Gi.log("".concat(n, " update last message with tempConversationList, count:").concat(t.tempConversationList.length)), t.handleUpdateGroupLastMessage({
                            data: t.tempConversationList
                        }), t.tempConversationList = null), t._groupModule.emitGroupListUpdate(), O_({
                            groupList: t._groupModule.getLocalGroupList()
                        })
                    })).catch((function(e) {
                        return t._groupModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "_pagingGetGroupList",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, "._pagingGetGroupList"),
                        o = e.limit,
                        r = e.offset,
                        a = e.groupBaseInfoFilter,
                        s = e.groupList,
                        i = new Op(Tg);
                    return this._groupModule.request({
                        protocolName: El,
                        requestData: {
                            memberAccount: this._groupModule.getMyUserID(),
                            limit: o,
                            offset: r,
                            responseFilter: {
                                groupBaseInfoFilter: a,
                                selfInfoFilter: ["Role", "JoinTime", "MsgFlag"]
                            }
                        }
                    }).then((function(e) {
                        var c = e.data,
                            u = c.groups,
                            l = c.totalCount;
                        s.push.apply(s, Jn(u));
                        var d = r + o,
                            p = !(l > d);
                        return i.setNetworkType(t._groupModule.getNetworkType()).setMessage("offset:".concat(r, " totalCount:").concat(l, " isCompleted:").concat(p, " currentCount:").concat(s.length)).end(), p ? (Gi.log("".concat(n, " ok. totalCount:").concat(l)), O_({
                            groupList: s
                        })) : (r = d, t._pagingGetGroupList({
                            limit: o,
                            offset: r,
                            groupBaseInfoFilter: a,
                            groupList: s
                        }))
                    })).catch((function(e) {
                        return t._groupModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            i.setError(e, o, r).end()
                        })), x_(e)
                    }))
                }
            }, {
                key: "_cacheGroupMessage",
                value: function(e, t) {
                    this._cachedGroupMessageMap.has(e) || this._cachedGroupMessageMap.set(e, []), this._cachedGroupMessageMap.get(e).push(t)
                }
            }, {
                key: "_deleteCachedGroupMessage",
                value: function(e) {
                    this._cachedGroupMessageMap.has(e) && this._cachedGroupMessageMap.delete(e)
                }
            }, {
                key: "_notifyCachedGroupMessage",
                value: function(e) {
                    var t = this,
                        n = this._cachedGroupMessageMap.get(e) || [];
                    n.forEach((function(e) {
                        t.onNewGroupMessage(e)
                    })), this._deleteCachedGroupMessage(e), Gi.log("".concat(this._className, "._notifyCachedGroupMessage groupID:").concat(e, " count:").concat(n.length))
                }
            }, {
                key: "_cacheGroupMessageAndProbe",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = e.event,
                        r = e.item;
                    this._cacheGroupMessage(n, {
                        event: o,
                        dataList: [r]
                    }), this._groupModule.getGroupSimplifiedInfo(n).then((function(e) {
                        e.type === ro.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(n) ? t._notifyCachedGroupMessage(n) : t._groupModule.setUnjoinedAVChatRoom(n) : (t._groupModule.updateGroupMap([e]), t._notifyCachedGroupMessage(n))
                    })), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Gi.log("".concat(this._className, "._cacheGroupMessageAndProbe groupID:").concat(n))
                }
            }, {
                key: "reset",
                value: function() {
                    this._cachedGroupMessageMap.clear(), this._checkCountMap.clear(), this._groupModule.getInnerEmitterInstance().once(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
                }
            }]), e
        }(),
        Mm = function() {
            function e(t) {
                wn(this, e);
                var n = t.groupModule,
                    o = t.groupID,
                    r = t.onInit,
                    a = t.onSuccess,
                    s = t.onFail;
                this._groupModule = n, this._className = "Polling", this._onInit = r, this._onSuccess = a, this._onFail = s, this._groupID = o, this._timeoutID = -1, this._isRunning = !1, this._pollingInterval = 0, this.MAX_POLLING_INTERVAL = 2e3
            }
            return Pn(e, [{
                key: "start",
                value: function() {
                    Gi.log("".concat(this._className, ".start")), this._isRunning = !0, this._request()
                }
            }, {
                key: "isRunning",
                value: function() {
                    return this._isRunning
                }
            }, {
                key: "_request",
                value: function() {
                    var e = this,
                        t = this._onInit(this._groupID),
                        n = Vl;
                    this._groupModule.isLoggedIn() || (n = Kl), this._groupModule.request({
                        protocolName: n,
                        requestData: t
                    }).then((function(t) {
                        e._onSuccess(e._groupID, t), e.isRunning() && (clearTimeout(e._timeoutID), e._timeoutID = setTimeout(e._request.bind(e), 0))
                    })).catch((function(t) {
                        e._onFail(e._groupID, t), e.isRunning() && (clearTimeout(e._timeoutID), e._timeoutID = setTimeout(e._request.bind(e), e.MAX_POLLING_INTERVAL))
                    }))
                }
            }, {
                key: "stop",
                value: function() {
                    Gi.log("".concat(this._className, ".stop")), this._timeoutID > 0 && (clearTimeout(this._timeoutID), this._timeoutID = -1, this._pollingInterval = 0), this._isRunning = !1
                }
            }]), e
        }(),
        ym = {
            3: !0,
            4: !0,
            5: !0,
            6: !0
        },
        Im = function() {
            function e(t) {
                wn(this, e), this._groupModule = t, this._className = "AVChatRoomHandler", this._joinedGroupMap = new Map, this._pollingRequestInfoMap = new Map, this._pollingInstanceMap = new Map, this.sequencesLinkedList = new im(100), this.messageIDLinkedList = new im(100), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._onlineMemberCountMap = new Map, this.DEFAULT_EXPIRE_TIME = 60
            }
            return Pn(e, [{
                key: "hasJoinedAVChatRoom",
                value: function() {
                    return this._joinedGroupMap.size > 0
                }
            }, {
                key: "checkJoinedAVChatRoomByID",
                value: function(e) {
                    return this._joinedGroupMap.has(e)
                }
            }, {
                key: "getJoinedAVChatRoom",
                value: function() {
                    return this._joinedGroupMap.size > 0 ? Jn(this._joinedGroupMap.keys()) : null
                }
            }, {
                key: "_updateRequestData",
                value: function(e) {
                    return Fn({}, this._pollingRequestInfoMap.get(e))
                }
            }, {
                key: "_handleSuccess",
                value: function(e, t) {
                    var n = t.data,
                        o = n.key,
                        r = n.nextSeq,
                        a = n.rspMsgList;
                    if (0 !== n.errorCode) {
                        var s = this._pollingRequestInfoMap.get(e),
                            i = new Op(Pg),
                            c = s ? "".concat(s.key, "-").concat(s.startSeq) : "requestInfo is undefined";
                        i.setMessage("".concat(e, "-").concat(c, "-").concat(t.errorInfo)).setCode(t.errorCode).setNetworkType(this._groupModule.getNetworkType()).end(!0)
                    } else {
                        if (!this.checkJoinedAVChatRoomByID(e)) return;
                        qi(o) && Fi(r) && this._pollingRequestInfoMap.set(e, {
                            key: o,
                            startSeq: r
                        }), Ki(a) && a.length > 0 && (a.forEach((function(e) {
                            e.to = e.groupID
                        })), this.onMessage(a))
                    }
                }
            }, {
                key: "_handleFailure",
                value: function(e, t) {}
            }, {
                key: "onMessage",
                value: function(e) {
                    if (Ki(e) && 0 !== e.length) {
                        var t = null,
                            n = [],
                            o = this._getModule(Vu),
                            r = e.length;
                        r > 1 && e.sort((function(e, t) {
                            return e.sequence - t.sequence
                        }));
                        for (var a = this._getModule(Ku), s = 0; s < r; s++)
                            if (ym[e[s].event]) {
                                this.receivedMessageCount += 1, t = this.packMessage(e[s], e[s].event);
                                var i = 1 === e[s].isModified;
                                if ((a.isUnlimitedAVChatRoom() || !this.sequencesLinkedList.has(t.sequence)) && !this.messageIDLinkedList.has(t.ID)) {
                                    var c = t.conversationID;
                                    if (this.receivedMessageCount % 40 == 0 && this._getModule(Qu).detectMessageLoss(c, this.sequencesLinkedList.data()), null !== this.sequencesLinkedList.tail()) {
                                        var u = this.sequencesLinkedList.tail().value,
                                            l = t.sequence - u;
                                        l > 1 && l <= 20 ? this._getModule(Qu).onMessageMaybeLost(c, u + 1, l - 1) : l < -1 && l >= -20 && this._getModule(Qu).onMessageMaybeLost(c, t.sequence + 1, Math.abs(l) - 1)
                                    }
                                    this.sequencesLinkedList.set(t.sequence), this.messageIDLinkedList.set(t.ID);
                                    var d = !1;
                                    if (this._isMessageSentByCurrentInstance(t) ? i && (d = !0, t.isModified = i, o.updateMessageIsModifiedProperty(t)) : d = !0, d) {
                                        if (t.conversationType, ro.CONV_SYSTEM, t.conversationType !== ro.CONV_SYSTEM) {
                                            var p = this._getModule(tl),
                                                g = t.conversationID.replace(ro.CONV_GROUP, "");
                                            this._pollingInstanceMap.has(g) ? p.addMessageSequence({
                                                key: kp,
                                                message: t
                                            }) : (t.type !== ro.MSG_GRP_TIP && p.addMessageDelay({
                                                currentTime: Date.now(),
                                                time: t.time
                                            }), p.addMessageSequence({
                                                key: Dp,
                                                message: t
                                            }))
                                        }
                                        n.push(t)
                                    }
                                }
                            } else Gi.warn("".concat(this._className, ".onMessage 未处理的 event 类型: ").concat(e[s].event));
                        if (0 !== n.length) {
                            this._groupModule.filterModifiedMessage(n);
                            var h = this.packConversationOption(n);
                            if (h.length > 0) this._getModule(Vu).onNewMessage({
                                conversationOptionsList: h,
                                isInstantMessage: !0
                            });
                            Gi.debug("".concat(this._className, ".onMessage count:").concat(n.length)), this._checkMessageStacked(n);
                            var f = this._groupModule.filterUnmodifiedMessage(n);
                            f.length > 0 && this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED, f), n.length = 0
                        }
                    }
                }
            }, {
                key: "_checkMessageStacked",
                value: function(e) {
                    var t = e.length;
                    t >= 100 && (Gi.warn("".concat(this._className, "._checkMessageStacked 直播群消息堆积数:").concat(e.length, '！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息')), this._reportMessageStackedCount < 5 && (new Op(Ug).setNetworkType(this._groupModule.getNetworkType()).setMessage("count:".concat(t, " groupID:").concat(Jn(this._joinedGroupMap.keys()))).setLevel("warning").end(), this._reportMessageStackedCount += 1))
                }
            }, {
                key: "_isMessageSentByCurrentInstance",
                value: function(e) {
                    return !!this._getModule(Vu).isMessageSentByCurrentInstance(e)
                }
            }, {
                key: "packMessage",
                value: function(e, t) {
                    e.currentUser = this._groupModule.getMyUserID(), e.conversationType = 5 === t ? ro.CONV_SYSTEM : ro.CONV_GROUP, e.isSystemMessage = !!e.isSystemMessage;
                    var n = new A_(e),
                        o = this.packElements(e, t);
                    return n.setElement(o), n
                }
            }, {
                key: "packElements",
                value: function(e, t) {
                    return 4 === t || 6 === t ? (this._updateMemberCountByGroupTips(e), {
                        type: ro.MSG_GRP_TIP,
                        content: Fn({}, e.elements, {
                            groupProfile: e.groupProfile
                        })
                    }) : 5 === t ? {
                        type: ro.MSG_GRP_SYS_NOTICE,
                        content: Fn({}, e.elements, {
                            groupProfile: e.groupProfile
                        })
                    } : this._getModule($u).parseElements(e.elements, e.from)
                }
            }, {
                key: "packConversationOption",
                value: function(e) {
                    for (var t = new Map, n = 0; n < e.length; n++) {
                        var o = e[n],
                            r = o.conversationID;
                        if (t.has(r)) {
                            var a = t.get(r);
                            a.lastMessage = o, "in" === o.flow && a.unreadCount++
                        } else t.set(r, {
                            conversationID: o.conversationID,
                            unreadCount: "out" === o.flow ? 0 : 1,
                            type: o.conversationType,
                            subType: o.conversationSubType,
                            lastMessage: o
                        })
                    }
                    return Jn(t.values())
                }
            }, {
                key: "_updateMemberCountByGroupTips",
                value: function(e) {
                    var t = e.groupProfile.groupID,
                        n = e.elements.onlineMemberInfo,
                        o = void 0 === n ? void 0 : n;
                    if (!Sc(o)) {
                        var r = o.onlineMemberNum,
                            a = void 0 === r ? 0 : r,
                            s = o.expireTime,
                            i = void 0 === s ? this.DEFAULT_EXPIRE_TIME : s,
                            c = this._onlineMemberCountMap.get(t) || {},
                            u = Date.now();
                        Sc(c) ? Object.assign(c, {
                            lastReqTime: 0,
                            lastSyncTime: 0,
                            latestUpdateTime: u,
                            memberCount: a,
                            expireTime: i
                        }) : (c.latestUpdateTime = u, c.memberCount = a), Gi.debug("".concat(this._className, "._updateMemberCountByGroupTips info:"), c), this._onlineMemberCountMap.set(t, c)
                    }
                }
            }, {
                key: "start",
                value: function(e) {
                    if (this._pollingInstanceMap.has(e)) {
                        var t = this._pollingInstanceMap.get(e);
                        t.isRunning() || t.start()
                    } else {
                        var n = new Mm({
                            groupModule: this._groupModule,
                            groupID: e,
                            onInit: this._updateRequestData.bind(this),
                            onSuccess: this._handleSuccess.bind(this),
                            onFail: this._handleFailure.bind(this)
                        });
                        n.start(), this._pollingInstanceMap.set(e, n), Gi.log("".concat(this._className, ".start groupID:").concat(e))
                    }
                }
            }, {
                key: "handleJoinResult",
                value: function(e) {
                    var t = this;
                    return this._preCheck().then((function() {
                        var n = e.longPollingKey,
                            o = e.group,
                            r = o.groupID;
                        return t._joinedGroupMap.set(r, o), t._groupModule.updateGroupMap([o]), t._groupModule.deleteUnjoinedAVChatRoom(r), t._groupModule.emitGroupListUpdate(!0, !1), Bi(n) ? q_({
                            status: i_,
                            group: o
                        }) : Promise.resolve()
                    }))
                }
            }, {
                key: "startRunLoop",
                value: function(e) {
                    var t = this;
                    return this.handleJoinResult(e).then((function() {
                        var n = e.longPollingKey,
                            o = e.group,
                            r = o.groupID;
                        return t._pollingRequestInfoMap.set(r, {
                            key: n,
                            startSeq: 0
                        }), t.start(r), t._groupModule.isLoggedIn() ? q_({
                            status: i_,
                            group: o
                        }) : q_({
                            status: i_
                        })
                    }))
                }
            }, {
                key: "_preCheck",
                value: function() {
                    if (this._getModule(Ku).isUnlimitedAVChatRoom()) return Promise.resolve();
                    if (!this.hasJoinedAVChatRoom()) return Promise.resolve();
                    var e = Wn(this._joinedGroupMap.entries().next().value, 2),
                        t = e[0],
                        n = e[1];
                    if (this._groupModule.isLoggedIn()) {
                        if (!(n.selfInfo.role === ro.GRP_MBR_ROLE_OWNER || n.ownerID === this._groupModule.getMyUserID())) return this._groupModule.quitGroup(t);
                        this._groupModule.deleteLocalGroupAndConversation(t)
                    } else this._groupModule.deleteLocalGroupAndConversation(t);
                    return this.reset(t), Promise.resolve()
                }
            }, {
                key: "joinWithoutAuth",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = "".concat(this._className, ".joinWithoutAuth"),
                        r = new Op(Dg);
                    return this._groupModule.request({
                        protocolName: Ol,
                        requestData: e
                    }).then((function(e) {
                        var a = e.data.longPollingKey;
                        if (r.setNetworkType(t._groupModule.getNetworkType()).setMessage("groupID:".concat(n, " longPollingKey:").concat(a)).end(!0), Bi(a)) return x_(new G_({
                            code: id.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN,
                            message: Xd
                        }));
                        Gi.log("".concat(o, " ok. groupID:").concat(n)), t._getModule(Vu).setCompleted("".concat(ro.CONV_GROUP).concat(n));
                        var s = new um({
                            groupID: n
                        });
                        return t.startRunLoop({
                            group: s,
                            longPollingKey: a
                        }), O_({
                            status: i_
                        })
                    })).catch((function(e) {
                        return Gi.error("".concat(o, " failed. groupID:").concat(n, " error:"), e), t._groupModule.probeNetwork().then((function(t) {
                            var o = Wn(t, 2),
                                a = o[0],
                                s = o[1];
                            r.setError(e, a, s).setMessage("groupID:".concat(n)).end(!0)
                        })), x_(e)
                    })).finally((function() {
                        t._groupModule.getModule(ju).reportAtOnce()
                    }))
                }
            }, {
                key: "getGroupOnlineMemberCount",
                value: function(e) {
                    var t = this._onlineMemberCountMap.get(e) || {},
                        n = Date.now();
                    return Sc(t) || n - t.lastSyncTime > 1e3 * t.expireTime && n - t.latestUpdateTime > 1e4 && n - t.lastReqTime > 3e3 ? (t.lastReqTime = n, this._onlineMemberCountMap.set(e, t), this._getGroupOnlineMemberCount(e).then((function(e) {
                        return O_({
                            memberCount: e.memberCount
                        })
                    })).catch((function(e) {
                        return x_(e)
                    }))) : q_({
                        memberCount: t.memberCount
                    })
                }
            }, {
                key: "_getGroupOnlineMemberCount",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, "._getGroupOnlineMemberCount");
                    return this._groupModule.request({
                        protocolName: Bl,
                        requestData: {
                            groupID: e
                        }
                    }).then((function(o) {
                        var r = t._onlineMemberCountMap.get(e) || {},
                            a = o.data,
                            s = a.onlineMemberNum,
                            i = void 0 === s ? 0 : s,
                            c = a.expireTime,
                            u = void 0 === c ? t.DEFAULT_EXPIRE_TIME : c;
                        Gi.log("".concat(n, " ok. groupID:").concat(e, " memberCount:").concat(i, " expireTime:").concat(u));
                        var l = Date.now();
                        return Sc(r) && (r.lastReqTime = l), t._onlineMemberCountMap.set(e, Object.assign(r, {
                            lastSyncTime: l,
                            latestUpdateTime: l,
                            memberCount: i,
                            expireTime: u
                        })), {
                            memberCount: i
                        }
                    })).catch((function(o) {
                        return Gi.warn("".concat(n, " failed. error:"), o), new Op(bg).setCode(o.code).setMessage("groupID:".concat(e, " error:").concat(JSON.stringify(o))).setNetworkType(t._groupModule.getNetworkType()).end(), Promise.reject(o)
                    }))
                }
            }, {
                key: "_getModule",
                value: function(e) {
                    return this._groupModule.getModule(e)
                }
            }, {
                key: "reset",
                value: function(e) {
                    if (e) {
                        Gi.log("".concat(this._className, ".reset groupID:").concat(e));
                        var t = this._pollingInstanceMap.get(e);
                        t && t.stop(), this._pollingInstanceMap.delete(e), this._joinedGroupMap.delete(e), this._pollingRequestInfoMap.delete(e), this._onlineMemberCountMap.delete(e)
                    } else {
                        Gi.log("".concat(this._className, ".reset all"));
                        var n, o = no(this._pollingInstanceMap.values());
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                n.value.stop()
                            }
                        } catch (r) {
                            o.e(r)
                        } finally {
                            o.f()
                        }
                        this._pollingInstanceMap.clear(), this._joinedGroupMap.clear(), this._pollingRequestInfoMap.clear(), this._onlineMemberCountMap.clear()
                    }
                    this.sequencesLinkedList.reset(), this.messageIDLinkedList.reset(), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0
                }
            }]), e
        }(),
        Sm = 1,
        Tm = 15,
        Em = function() {
            function e(t) {
                wn(this, e), this._groupModule = t, this._className = "GroupSystemNoticeHandler", this.pendencyMap = new Map
            }
            return Pn(e, [{
                key: "onNewGroupSystemNotice",
                value: function(e) {
                    var t = e.dataList,
                        n = e.isSyncingEnded,
                        o = e.isInstantMessage;
                    Gi.debug("".concat(this._className, ".onReceiveSystemNotice count:").concat(t.length));
                    var r = this.newSystemNoticeStoredAndSummary({
                            notifiesList: t,
                            isInstantMessage: o
                        }),
                        a = r.eventDataList,
                        s = r.result;
                    a.length > 0 && (this._groupModule.getModule(Vu).onNewMessage({
                        conversationOptionsList: a,
                        isInstantMessage: o
                    }), this._onReceivedGroupSystemNotice({
                        result: s,
                        isInstantMessage: o
                    }));
                    o ? s.length > 0 && this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED, s) : !0 === n && this._clearGroupSystemNotice()
                }
            }, {
                key: "newSystemNoticeStoredAndSummary",
                value: function(e) {
                    var t = e.notifiesList,
                        n = e.isInstantMessage,
                        o = null,
                        r = t.length,
                        a = 0,
                        s = [],
                        i = {
                            conversationID: ro.CONV_SYSTEM,
                            unreadCount: 0,
                            type: ro.CONV_SYSTEM,
                            subType: null,
                            lastMessage: null
                        };
                    for (a = 0; a < r; a++) {
                        var c = t[a];
                        if (c.elements.operationType !== Tm) c.currentUser = this._groupModule.getMyUserID(), c.conversationType = ro.CONV_SYSTEM, c.conversationID = ro.CONV_SYSTEM, (o = new A_(c)).setElement({
                            type: ro.MSG_GRP_SYS_NOTICE,
                            content: Fn({}, c.elements, {
                                groupProfile: c.groupProfile
                            })
                        }), o.isSystemMessage = !0, (1 === o.sequence && 1 === o.random || 2 === o.sequence && 2 === o.random) && (o.sequence = ec(), o.random = ec(), o.generateMessageID(c.currentUser), Gi.log("".concat(this._className, ".newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID:").concat(o.ID))), this._groupModule.getModule(Vu).pushIntoNoticeResult(s, o) && (n ? i.unreadCount++ : o.setIsRead(!0), i.subType = o.conversationSubType)
                    }
                    return i.lastMessage = s[s.length - 1], {
                        eventDataList: s.length > 0 ? [i] : [],
                        result: s
                    }
                }
            }, {
                key: "_clearGroupSystemNotice",
                value: function() {
                    var e = this;
                    this.getPendencyList().then((function(t) {
                        t.forEach((function(t) {
                            e.pendencyMap.set("".concat(t.from, "_").concat(t.groupID, "_").concat(t.to), t)
                        }));
                        var n = e._groupModule.getModule(Vu).getLocalMessageList(ro.CONV_SYSTEM),
                            o = [];
                        n.forEach((function(t) {
                            var n = t.payload,
                                r = n.operatorID,
                                a = n.operationType,
                                s = n.groupProfile;
                            if (a === Sm) {
                                var i = "".concat(r, "_").concat(s.groupID, "_").concat(s.to),
                                    c = e.pendencyMap.get(i);
                                c && Fi(c.handled) && 0 !== c.handled && o.push(t)
                            }
                        })), e.deleteGroupSystemNotice({
                            messageList: o
                        })
                    }))
                }
            }, {
                key: "deleteGroupSystemNotice",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".deleteGroupSystemNotice");
                    return Ki(e.messageList) && 0 !== e.messageList.length ? (Gi.log("".concat(n) + e.messageList.map((function(e) {
                        return e.ID
                    }))), this._groupModule.request({
                        protocolName: xl,
                        requestData: {
                            messageListToDelete: e.messageList.map((function(e) {
                                return {
                                    from: ro.CONV_SYSTEM,
                                    messageSeq: e.clientSequence,
                                    messageRandom: e.random
                                }
                            }))
                        }
                    }).then((function() {
                        Gi.log("".concat(n, " ok"));
                        var o = t._groupModule.getModule(Vu);
                        return e.messageList.forEach((function(e) {
                            o.deleteLocalMessage(e)
                        })), O_()
                    })).catch((function(e) {
                        return Gi.error("".concat(n, " error:"), e), x_(e)
                    }))) : q_()
                }
            }, {
                key: "getPendencyList",
                value: function(e) {
                    var t = this;
                    return this._groupModule.request({
                        protocolName: ql,
                        requestData: {
                            startTime: e && e.startTime ? e.startTime : 0,
                            limit: e && e.limit ? e.limit : 10,
                            handleAccount: this._groupModule.getMyUserID()
                        }
                    }).then((function(e) {
                        var n = e.data.pendencyList;
                        return 0 !== e.data.nextStartTime ? t.getPendencyList({
                            startTime: e.data.nextStartTime
                        }).then((function(e) {
                            return [].concat(Jn(n), Jn(e))
                        })) : n
                    }))
                }
            }, {
                key: "_onReceivedGroupSystemNotice",
                value: function(e) {
                    var t = this,
                        n = e.result;
                    e.isInstantMessage && n.forEach((function(e) {
                        switch (e.payload.operationType) {
                            case 1:
                                break;
                            case 2:
                                t._onApplyGroupRequestAgreed(e);
                                break;
                            case 3:
                                break;
                            case 4:
                                t._onMemberKicked(e);
                                break;
                            case 5:
                                t._onGroupDismissed(e);
                                break;
                            case 6:
                                break;
                            case 7:
                                t._onInviteGroup(e);
                                break;
                            case 8:
                                t._onQuitGroup(e);
                                break;
                            case 9:
                                t._onSetManager(e);
                                break;
                            case 10:
                                t._onDeleteManager(e)
                        }
                    }))
                }
            }, {
                key: "_onApplyGroupRequestAgreed",
                value: function(e) {
                    var t = this,
                        n = e.payload.groupProfile.groupID;
                    this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({
                        groupID: n
                    }).then((function(e) {
                        var n = e.data.group;
                        n && (t._groupModule.updateGroupMap([n]), t._groupModule.emitGroupListUpdate())
                    }))
                }
            }, {
                key: "_onMemberKicked",
                value: function(e) {
                    var t = e.payload.groupProfile.groupID;
                    this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t)
                }
            }, {
                key: "_onGroupDismissed",
                value: function(e) {
                    var t = e.payload.groupProfile.groupID;
                    this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t);
                    var n = this._groupModule._AVChatRoomHandler;
                    n && n.checkJoinedAVChatRoomByID(t) && n.reset(t)
                }
            }, {
                key: "_onInviteGroup",
                value: function(e) {
                    var t = this,
                        n = e.payload.groupProfile.groupID;
                    this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({
                        groupID: n
                    }).then((function(e) {
                        var n = e.data.group;
                        n && (t._groupModule.updateGroupMap([n]), t._groupModule.emitGroupListUpdate())
                    }))
                }
            }, {
                key: "_onQuitGroup",
                value: function(e) {
                    var t = e.payload.groupProfile.groupID;
                    this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t)
                }
            }, {
                key: "_onSetManager",
                value: function(e) {
                    var t = e.payload.groupProfile,
                        n = t.to,
                        o = t.groupID,
                        r = this._groupModule.getModule(xu).getLocalGroupMemberInfo(o, n);
                    r && r.updateRole(ro.GRP_MBR_ROLE_ADMIN)
                }
            }, {
                key: "_onDeleteManager",
                value: function(e) {
                    var t = e.payload.groupProfile,
                        n = t.to,
                        o = t.groupID,
                        r = this._groupModule.getModule(xu).getLocalGroupMemberInfo(o, n);
                    r && r.updateRole(ro.GRP_MBR_ROLE_MEMBER)
                }
            }, {
                key: "reset",
                value: function() {
                    this.pendencyMap.clear()
                }
            }]), e
        }(),
        Dm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "GroupModule", o._commonGroupHandler = null, o._AVChatRoomHandler = null, o._groupSystemNoticeHandler = null, o._commonGroupHandler = new vm($n(o)), o._AVChatRoomHandler = new Im($n(o)), o._groupTipsHandler = new hm($n(o)), o._groupSystemNoticeHandler = new Em($n(o)), o.groupMap = new Map, o._unjoinedAVChatRoomList = new Map, o
            }
            return Pn(n, [{
                key: "onCheckTimer",
                value: function(e) {
                    this.isLoggedIn() && (this._commonGroupHandler.onCheckTimer(e), this._groupTipsHandler.onCheckTimer(e))
                }
            }, {
                key: "guardForAVChatRoom",
                value: function(e) {
                    var t = this;
                    if (e.conversationType === ro.CONV_GROUP) {
                        var n = e.to;
                        return this.hasLocalGroup(n) ? q_() : this.getGroupProfile({
                            groupID: n
                        }).then((function(o) {
                            var r = o.data.group.type;
                            if (Gi.log("".concat(t._className, ".guardForAVChatRoom. groupID:").concat(n, " type:").concat(r)), r === ro.GRP_AVCHATROOM) {
                                var a = "userId:".concat(e.from, " 未加入群 groupID:").concat(n, "。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup");
                                return Gi.warn("".concat(t._className, ".guardForAVChatRoom sendMessage not allowed. ").concat(a)), x_(new G_({
                                    code: id.MESSAGE_SEND_FAIL,
                                    message: a,
                                    data: {
                                        message: e
                                    }
                                }))
                            }
                            return q_()
                        }))
                    }
                    return q_()
                }
            }, {
                key: "checkJoinedAVChatRoomByID",
                value: function(e) {
                    return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e)
                }
            }, {
                key: "onNewGroupMessage",
                value: function(e) {
                    this._commonGroupHandler && this._commonGroupHandler.onNewGroupMessage(e)
                }
            }, {
                key: "updateNextMessageSeq",
                value: function(e) {
                    var t = this;
                    Ki(e) && e.forEach((function(e) {
                        var n = e.conversationID.replace(ro.CONV_GROUP, "");
                        t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e.lastMessage.sequence + 1)
                    }))
                }
            }, {
                key: "onNewGroupTips",
                value: function(e) {
                    this._groupTipsHandler && this._groupTipsHandler.onNewGroupTips(e)
                }
            }, {
                key: "onGroupMessageRevoked",
                value: function(e) {
                    this._commonGroupHandler && this._commonGroupHandler.onGroupMessageRevoked(e)
                }
            }, {
                key: "onNewGroupSystemNotice",
                value: function(e) {
                    this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.onNewGroupSystemNotice(e)
                }
            }, {
                key: "onGroupMessageReadNotice",
                value: function(e) {
                    var t = this;
                    e.dataList.forEach((function(e) {
                        var n = e.elements.groupMessageReadNotice;
                        if (!Bi(n)) {
                            var o = t.getModule(Vu);
                            n.forEach((function(e) {
                                var n = e.groupID,
                                    r = e.lastMessageSeq;
                                Gi.debug("".concat(t._className, ".onGroupMessageReadNotice groupID:").concat(n, " lastMessageSeq:").concat(r));
                                var a = "".concat(ro.CONV_GROUP).concat(n);
                                o.updateIsReadAfterReadReport({
                                    conversationID: a,
                                    lastMessageSeq: r
                                }), o.updateUnreadCount(a)
                            }))
                        }
                    }))
                }
            }, {
                key: "deleteGroupSystemNotice",
                value: function(e) {
                    this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.deleteGroupSystemNotice(e)
                }
            }, {
                key: "initGroupMap",
                value: function(e) {
                    this.groupMap.set(e.groupID, new um(e))
                }
            }, {
                key: "deleteGroup",
                value: function(e) {
                    this.groupMap.delete(e)
                }
            }, {
                key: "updateGroupMap",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new um(e))
                    })), this._setStorageGroupList()
                }
            }, {
                key: "getStorageGroupList",
                value: function() {
                    return this.getModule(Bu).getItem("groupMap")
                }
            }, {
                key: "_setStorageGroupList",
                value: function() {
                    var e = this.getLocalGroupList().filter((function(e) {
                        var t = e.type;
                        return !lc(t)
                    })).slice(0, 20).map((function(e) {
                        return {
                            groupID: e.groupID,
                            name: e.name,
                            avatar: e.avatar,
                            type: e.type
                        }
                    }));
                    this.getModule(Bu).setItem("groupMap", e)
                }
            }, {
                key: "getGroupMap",
                value: function() {
                    return this.groupMap
                }
            }, {
                key: "getLocalGroupList",
                value: function() {
                    return Jn(this.groupMap.values())
                }
            }, {
                key: "getLocalGroupProfile",
                value: function(e) {
                    return this.groupMap.get(e)
                }
            }, {
                key: "sortLocalGroupList",
                value: function() {
                    var e = Jn(this.groupMap).filter((function(e) {
                        var t = Wn(e, 2);
                        t[0];
                        return !Sc(t[1].lastMessage)
                    }));
                    e.sort((function(e, t) {
                        return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                    })), this.groupMap = new Map(Jn(e))
                }
            }, {
                key: "updateGroupLastMessage",
                value: function(e) {
                    this._commonGroupHandler && this._commonGroupHandler.handleUpdateGroupLastMessage(e)
                }
            }, {
                key: "emitGroupListUpdate",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this.getLocalGroupList();
                    if (e && this.emitOuterEvent(oo.GROUP_LIST_UPDATED, n), t) {
                        var o = JSON.parse(JSON.stringify(n)),
                            r = this.getModule(Vu);
                        r.updateConversationGroupProfile(o)
                    }
                }
            }, {
                key: "getGroupList",
                value: function(e) {
                    return this._commonGroupHandler ? this._commonGroupHandler.getGroupList(e) : q_()
                }
            }, {
                key: "getGroupProfile",
                value: function(e) {
                    var t = this,
                        n = new Op(Mg),
                        o = "".concat(this._className, ".getGroupProfile"),
                        r = e.groupID,
                        a = e.groupCustomFieldFilter;
                    Gi.log("".concat(o, " groupID:").concat(r));
                    var s = {
                        groupIDList: [r],
                        responseFilter: {
                            groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"],
                            groupCustomFieldFilter: a
                        }
                    };
                    return this.getGroupProfileAdvance(s).then((function(e) {
                        var a, s = e.data,
                            i = s.successGroupList,
                            c = s.failureGroupList;
                        return Gi.log("".concat(o, " ok")), c.length > 0 ? x_(c[0]) : (lc(i[0].type) && !t.hasLocalGroup(r) ? a = new um(i[0]) : (t.updateGroupMap(i), a = t.getLocalGroupProfile(r)), n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(r, " type:").concat(a.type, " muteAllMembers:").concat(a.muteAllMembers, " ownerID:").concat(a.ownerID)).end(), a && a.selfInfo && !a.selfInfo.nameCard ? t.updateSelfInfo(a).then((function(e) {
                            return O_({
                                group: e
                            })
                        })) : O_({
                            group: a
                        }))
                    })).catch((function(r) {
                        return t.probeNetwork().then((function(t) {
                            var o = Wn(t, 2),
                                a = o[0],
                                s = o[1];
                            n.setError(r, a, s).setMessage("groupID:".concat(e.groupID)).end()
                        })), Gi.error("".concat(o, " failed. error:"), r), x_(r)
                    }))
                }
            }, {
                key: "getGroupProfileAdvance",
                value: function(e) {
                    var t = "".concat(this._className, ".getGroupProfileAdvance");
                    return Ki(e.groupIDList) && e.groupIDList.length > 50 && (Gi.warn("".concat(t, " 获取群资料的数量不能超过50个")), e.groupIDList.length = 50), Gi.log("".concat(t, " groupIDList:").concat(e.groupIDList)), this.request({
                        protocolName: Dl,
                        requestData: e
                    }).then((function(e) {
                        Gi.log("".concat(t, " ok"));
                        var n = e.data.groups,
                            o = n.filter((function(e) {
                                return Bi(e.errorCode) || 0 === e.errorCode
                            })),
                            r = n.filter((function(e) {
                                return e.errorCode && 0 !== e.errorCode
                            })).map((function(e) {
                                return new G_({
                                    code: e.errorCode,
                                    message: e.errorInfo,
                                    data: {
                                        groupID: e.groupID
                                    }
                                })
                            }));
                        return O_({
                            successGroupList: o,
                            failureGroupList: r
                        })
                    })).catch((function(e) {
                        return Gi.error("".concat(t, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "updateSelfInfo",
                value: function(e) {
                    var t = "".concat(this._className, ".updateSelfInfo"),
                        n = e.groupID;
                    return Gi.log("".concat(t, " groupID:").concat(n)), this.getModule(xu).getGroupMemberProfile({
                        groupID: n,
                        userIDList: [this.getMyUserID()]
                    }).then((function(n) {
                        var o = n.data.memberList;
                        return Gi.log("".concat(t, " ok")), e && 0 !== o.length && e.updateSelfInfo(o[0]), e
                    }))
                }
            }, {
                key: "createGroup",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".createGroup");
                    if (!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)) {
                        var o = new G_({
                            code: id.ILLEGAL_GROUP_TYPE,
                            message: Bd
                        });
                        return x_(o)
                    }
                    lc(e.type) && !Bi(e.memberList) && e.memberList.length > 0 && (Gi.warn("".concat(n, " 创建 AVChatRoom 时不能添加群成员，自动忽略该字段")), e.memberList = void 0), uc(e.type) || Bi(e.joinOption) || (Gi.warn("".concat(n, " 创建 Work/Meeting/AVChatRoom 群时不能设置字段 joinOption，自动忽略该字段")), e.joinOption = void 0);
                    var r = new Op(cg);
                    Gi.log("".concat(n, " options:"), e);
                    var a = [];
                    return this.request({
                        protocolName: kl,
                        requestData: Fn({}, e, {
                            ownerID: this.getMyUserID(),
                            webPushFlag: 1
                        })
                    }).then((function(o) {
                        var s = o.data,
                            i = s.groupID,
                            c = s.overLimitUserIDList,
                            u = void 0 === c ? [] : c;
                        if (a = u, r.setNetworkType(t.getNetworkType()).setMessage("groupType:".concat(e.type, " groupID:").concat(i, " overLimitUserIDList=").concat(u)).end(), Gi.log("".concat(n, " ok groupID:").concat(i, " overLimitUserIDList:"), u), e.type === ro.GRP_AVCHATROOM) return t.getGroupProfile({
                            groupID: i
                        });
                        Sc(e.memberList) || Sc(u) || (e.memberList = e.memberList.filter((function(e) {
                            return -1 === u.indexOf(e.userID)
                        }))), t.updateGroupMap([Fn({}, e, {
                            groupID: i
                        })]);
                        var l = t.getModule(Pu),
                            d = l.createCustomMessage({
                                to: i,
                                conversationType: ro.CONV_GROUP,
                                payload: {
                                    data: "group_create",
                                    extension: "".concat(t.getMyUserID(), "创建群组")
                                }
                            });
                        return l.sendMessageInstance(d), t.emitGroupListUpdate(), t.getGroupProfile({
                            groupID: i
                        })
                    })).then((function(e) {
                        var t = e.data.group,
                            n = t.selfInfo,
                            o = n.nameCard,
                            r = n.joinTime;
                        return t.updateSelfInfo({
                            nameCard: o,
                            joinTime: r,
                            messageRemindType: ro.MSG_REMIND_ACPT_AND_NOTE,
                            role: ro.GRP_MBR_ROLE_OWNER
                        }), O_({
                            group: t,
                            overLimitUserIDList: a
                        })
                    })).catch((function(o) {
                        return r.setMessage("groupType:".concat(e.type)), t.probeNetwork().then((function(e) {
                            var t = Wn(e, 2),
                                n = t[0],
                                a = t[1];
                            r.setError(o, n, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), o), x_(o)
                    }))
                }
            }, {
                key: "dismissGroup",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".dismissGroup");
                    if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === ro.GRP_WORK) return x_(new G_({
                        code: id.CANNOT_DISMISS_WORK,
                        message: Yd
                    }));
                    var o = new Op(_g);
                    return o.setMessage("groupID:".concat(e)), Gi.log("".concat(n, " groupID:").concat(e)), this.request({
                        protocolName: Cl,
                        requestData: {
                            groupID: e
                        }
                    }).then((function() {
                        return o.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), t.deleteLocalGroupAndConversation(e), t.checkJoinedAVChatRoomByID(e) && t._AVChatRoomHandler.reset(e), O_({
                            groupID: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "updateGroupProfile",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".updateGroupProfile");
                    !this.hasLocalGroup(e.groupID) || uc(this.getLocalGroupProfile(e.groupID).type) || Bi(e.joinOption) || (Gi.warn("".concat(n, " Work/Meeting/AVChatRoom 群不能设置字段 joinOption，自动忽略该字段")), e.joinOption = void 0), Bi(e.muteAllMembers) || (e.muteAllMembers ? e.muteAllMembers = "On" : e.muteAllMembers = "Off");
                    var o = new Op(mg);
                    return o.setMessage(JSON.stringify(e)), Gi.log("".concat(n, " groupID:").concat(e.groupID)), this.request({
                        protocolName: Nl,
                        requestData: e
                    }).then((function() {
                        (o.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e), t._setStorageGroupList());
                        return O_({
                            group: t.groupMap.get(e.groupID)
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.log("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "joinGroup",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = e.type,
                        r = "".concat(this._className, ".joinGroup");
                    if (o === ro.GRP_WORK) {
                        var a = new G_({
                            code: id.CANNOT_JOIN_WORK,
                            message: jd
                        });
                        return x_(a)
                    }
                    if (this.deleteUnjoinedAVChatRoom(n), this.hasLocalGroup(n)) {
                        if (!this.isLoggedIn()) return q_({
                            status: ro.JOIN_STATUS_ALREADY_IN_GROUP
                        });
                        var s = new Op(ug);
                        return this.getGroupProfile({
                            groupID: n
                        }).then((function() {
                            return s.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " joinedStatus:").concat(ro.JOIN_STATUS_ALREADY_IN_GROUP)).end(), q_({
                                status: ro.JOIN_STATUS_ALREADY_IN_GROUP
                            })
                        })).catch((function(o) {
                            return s.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " unjoined")).end(), Gi.warn("".concat(r, " ").concat(n, " was unjoined, now join!")), t.groupMap.delete(n), t.applyJoinGroup(e)
                        }))
                    }
                    return Gi.log("".concat(r, " groupID:").concat(n)), this.isLoggedIn() ? this.applyJoinGroup(e) : this._AVChatRoomHandler.joinWithoutAuth(e)
                }
            }, {
                key: "applyJoinGroup",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".applyJoinGroup"),
                        o = e.groupID,
                        r = new Op(ug);
                    return this.request({
                        protocolName: Al,
                        requestData: e
                    }).then((function(e) {
                        var a = e.data,
                            s = a.joinedStatus,
                            i = a.longPollingKey,
                            c = a.avChatRoomFlag,
                            u = "groupID:".concat(o, " joinedStatus:").concat(s, " longPollingKey:").concat(i, " avChatRoomFlag:").concat(c);
                        switch (r.setNetworkType(t.getNetworkType()).setMessage("".concat(u)).end(), Gi.log("".concat(n, " ok. ").concat(u)), s) {
                            case c_:
                                return O_({
                                    status: c_
                                });
                            case i_:
                                return t.getGroupProfile({
                                    groupID: o
                                }).then((function(e) {
                                    var n = e.data.group,
                                        r = {
                                            status: i_,
                                            group: n
                                        };
                                    return 1 === c ? (t.getModule(Vu).setCompleted("".concat(ro.CONV_GROUP).concat(o)), Bi(i) ? t._AVChatRoomHandler.handleJoinResult({
                                        group: n
                                    }) : t._AVChatRoomHandler.startRunLoop({
                                        longPollingKey: i,
                                        group: n
                                    })) : (t.emitGroupListUpdate(!0, !1), O_(r))
                                }));
                            default:
                                var l = new G_({
                                    code: id.JOIN_GROUP_FAIL,
                                    message: Wd
                                });
                                return Gi.error("".concat(n, " error:"), l), x_(l)
                        }
                    })).catch((function(o) {
                        return r.setMessage("groupID:".concat(e.groupID)), t.probeNetwork().then((function(e) {
                            var t = Wn(e, 2),
                                n = t[0],
                                a = t[1];
                            r.setError(o, n, a).end()
                        })), Gi.error("".concat(n, " error:"), o), x_(o)
                    }))
                }
            }, {
                key: "quitGroup",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".quitGroup");
                    Gi.log("".concat(n, " groupID:").concat(e));
                    var o = this.checkJoinedAVChatRoomByID(e);
                    if (!o && !this.hasLocalGroup(e)) {
                        var r = new G_({
                            code: id.MEMBER_NOT_IN_GROUP,
                            message: zd
                        });
                        return x_(r)
                    }
                    if (o && !this.isLoggedIn()) return Gi.log("".concat(n, " anonymously ok. groupID:").concat(e)), this.deleteLocalGroupAndConversation(e), this._AVChatRoomHandler.reset(e), q_({
                        groupID: e
                    });
                    var a = new Op(lg);
                    return a.setMessage("groupID:".concat(e)), this.request({
                        protocolName: Ll,
                        requestData: {
                            groupID: e
                        }
                    }).then((function() {
                        return a.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), o && t._AVChatRoomHandler.reset(e), t.deleteLocalGroupAndConversation(e), O_({
                            groupID: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            a.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "searchGroupByID",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".searchGroupByID"),
                        o = {
                            groupIDList: [e]
                        },
                        r = new Op(dg);
                    return r.setMessage("groupID:".concat(e)), Gi.log("".concat(n, " groupID:").concat(e)), this.request({
                        protocolName: Rl,
                        requestData: o
                    }).then((function(e) {
                        var o = e.data.groupProfile;
                        if (0 !== o[0].errorCode) throw new G_({
                            code: o[0].errorCode,
                            message: o[0].errorInfo
                        });
                        return r.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), O_({
                            group: new um(o[0])
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                a = n[1];
                            r.setError(e, o, a).end()
                        })), Gi.warn("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "changeGroupOwner",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".changeGroupOwner");
                    if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === ro.GRP_AVCHATROOM) return x_(new G_({
                        code: id.CANNOT_CHANGE_OWNER_IN_AVCHATROOM,
                        message: Hd
                    }));
                    if (e.newOwnerID === this.getMyUserID()) return x_(new G_({
                        code: id.CANNOT_CHANGE_OWNER_TO_SELF,
                        message: $d
                    }));
                    var o = new Op(pg);
                    return o.setMessage("groupID:".concat(e.groupID, " newOwnerID:").concat(e.newOwnerID)), Gi.log("".concat(n, " groupID:").concat(e.groupID)), this.request({
                        protocolName: wl,
                        requestData: e
                    }).then((function() {
                        o.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok"));
                        var r = e.groupID,
                            a = e.newOwnerID;
                        t.groupMap.get(r).ownerID = a;
                        var s = t.getModule(xu).getLocalGroupMemberList(r);
                        if (s instanceof Map) {
                            var i = s.get(t.getMyUserID());
                            Bi(i) || (i.updateRole("Member"), t.groupMap.get(r).selfInfo.role = "Member");
                            var c = s.get(a);
                            Bi(c) || c.updateRole("Owner")
                        }
                        return t.emitGroupListUpdate(!0, !1), O_({
                            group: t.groupMap.get(r)
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "handleGroupApplication",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".handleGroupApplication"),
                        o = e.message.payload,
                        r = o.groupProfile.groupID,
                        a = o.authentication,
                        s = o.messageKey,
                        i = o.operatorID,
                        c = new Op(gg);
                    return c.setMessage("groupID:".concat(r)), Gi.log("".concat(n, " groupID:").concat(r)), this.request({
                        protocolName: bl,
                        requestData: Fn({}, e, {
                            applicant: i,
                            groupID: r,
                            authentication: a,
                            messageKey: s
                        })
                    }).then((function() {
                        return c.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), t._groupSystemNoticeHandler.deleteGroupSystemNotice({
                            messageList: [e.message]
                        }), O_({
                            group: t.getLocalGroupProfile(r)
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            c.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error"), e), x_(e)
                    }))
                }
            }, {
                key: "handleGroupInvitation",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".handleGroupInvitation"),
                        o = e.message.payload,
                        r = o.groupProfile.groupID,
                        a = o.authentication,
                        s = o.messageKey,
                        i = o.operatorID,
                        c = e.handleAction,
                        u = new Op(hg);
                    return u.setMessage("groupID:".concat(r, " inviter:").concat(i, " handleAction:").concat(c)), Gi.log("".concat(n, " groupID:").concat(r, " inviter:").concat(i, " handleAction:").concat(c)), this.request({
                        protocolName: Pl,
                        requestData: Fn({}, e, {
                            inviter: i,
                            groupID: r,
                            authentication: a,
                            messageKey: s
                        })
                    }).then((function() {
                        return u.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), t._groupSystemNoticeHandler.deleteGroupSystemNotice({
                            messageList: [e.message]
                        }), O_({
                            group: t.getLocalGroupProfile(r)
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            u.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error"), e), x_(e)
                    }))
                }
            }, {
                key: "getGroupOnlineMemberCount",
                value: function(e) {
                    return this._AVChatRoomHandler ? this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e) ? this._AVChatRoomHandler.getGroupOnlineMemberCount(e) : q_({
                        memberCount: 0
                    }) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "hasLocalGroup",
                value: function(e) {
                    return this.groupMap.has(e)
                }
            }, {
                key: "deleteLocalGroupAndConversation",
                value: function(e) {
                    this._deleteLocalGroup(e), this.getModule(Vu).deleteLocalConversation("GROUP".concat(e)), this.emitGroupListUpdate(!0, !1)
                }
            }, {
                key: "_deleteLocalGroup",
                value: function(e) {
                    this.groupMap.delete(e), this.getModule(xu).deleteGroupMemberList(e), this._setStorageGroupList()
                }
            }, {
                key: "sendMessage",
                value: function(e, t) {
                    var n = this.createGroupMessagePack(e, t);
                    return this.request(n)
                }
            }, {
                key: "createGroupMessagePack",
                value: function(e, t) {
                    var n = null;
                    t && t.offlinePushInfo && (n = t.offlinePushInfo);
                    var o = "";
                    qi(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e.cloudCustomData);
                    var r = e.getGroupAtInfoList();
                    return {
                        protocolName: ul,
                        tjgID: this.generateTjgID(e),
                        requestData: {
                            fromAccount: this.getMyUserID(),
                            groupID: e.to,
                            msgBody: e.getElements(),
                            cloudCustomData: o,
                            random: e.random,
                            priority: e.priority,
                            clientSequence: e.clientSequence,
                            groupAtInfo: e.type !== ro.MSG_TEXT || Sc(r) ? void 0 : r,
                            onlineOnlyFlag: this.isOnlineMessage(e, t) ? 1 : 0,
                            offlinePushInfo: n ? {
                                pushFlag: !0 === n.disablePush ? 1 : 0,
                                title: n.title || "",
                                desc: n.description || "",
                                ext: n.extension || "",
                                apnsInfo: {
                                    badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
                                },
                                androidInfo: {
                                    OPPOChannelID: n.androidOPPOChannelID || ""
                                }
                            } : void 0
                        }
                    }
                }
            }, {
                key: "revokeMessage",
                value: function(e) {
                    return this.request({
                        protocolName: Gl,
                        requestData: {
                            to: e.to,
                            msgSeqList: [{
                                msgSeq: e.sequence
                            }]
                        }
                    })
                }
            }, {
                key: "deleteMessage",
                value: function(e) {
                    var t = e.to,
                        n = e.keyList;
                    return Gi.log("".concat(this._className, ".deleteMessage groupID:").concat(t, " count:").concat(n.length)), this.request({
                        protocolName: jl,
                        requestData: {
                            groupID: t,
                            deleter: this.getMyUserID(),
                            keyList: n
                        }
                    })
                }
            }, {
                key: "getRoamingMessage",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".getRoamingMessage"),
                        o = new Op($p),
                        r = 0;
                    return this._computeLastSequence(e).then((function(n) {
                        return r = n, Gi.log("".concat(t._className, ".getRoamingMessage groupID:").concat(e.groupID, " lastSequence:").concat(r)), t.request({
                            protocolName: Fl,
                            requestData: {
                                groupID: e.groupID,
                                count: 21,
                                sequence: r
                            }
                        })
                    })).then((function(a) {
                        var s = a.data,
                            i = s.messageList,
                            c = s.complete;
                        Bi(i) ? Gi.log("".concat(n, " ok. complete:").concat(c, " but messageList is undefined!")) : Gi.log("".concat(n, " ok. complete:").concat(c, " count:").concat(i.length)), o.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e.groupID, " lastSequence:").concat(r, " complete:").concat(c, " count:").concat(i ? i.length : "undefined")).end();
                        var u = "GROUP".concat(e.groupID),
                            l = t.getModule(Vu);
                        if (2 === c || Sc(i)) return l.setCompleted(u), [];
                        var d = l.storeRoamingMessage(i, u);
                        return l.updateIsRead(u), l.patchConversationLastMessage(u), d
                    })).catch((function(a) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                s = n[0],
                                i = n[1];
                            o.setError(a, s, i).setMessage("groupID:".concat(e.groupID, " lastSequence:").concat(r)).end()
                        })), Gi.warn("".concat(n, " failed. error:"), a), x_(a)
                    }))
                }
            }, {
                key: "setMessageRead",
                value: function(e) {
                    var t = this,
                        n = e.conversationID,
                        o = e.lastMessageSeq,
                        r = "".concat(this._className, ".setMessageRead");
                    Gi.log("".concat(r, " conversationID:").concat(n, " lastMessageSeq:").concat(o)), Fi(o) || Gi.warn("".concat(r, " 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确"));
                    var a = new Op(Jp);
                    return a.setMessage("".concat(n, "-").concat(o)), this.request({
                        protocolName: Ul,
                        requestData: {
                            groupID: n.replace("GROUP", ""),
                            messageReadSeq: o
                        }
                    }).then((function() {
                        a.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(r, " ok."));
                        var e = t.getModule(Vu);
                        return e.updateIsReadAfterReadReport({
                            conversationID: n,
                            lastMessageSeq: o
                        }), e.updateUnreadCount(n), O_()
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            a.setError(e, o, r).end()
                        })), Gi.log("".concat(r, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "_computeLastSequence",
                value: function(e) {
                    return e.sequence > 0 ? Promise.resolve(e.sequence) : this.getGroupLastSequence(e.groupID)
                }
            }, {
                key: "getGroupLastSequence",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".getGroupLastSequence"),
                        o = new Op(Ig),
                        r = 0,
                        a = "";
                    if (this.hasLocalGroup(e)) {
                        var s = this.getLocalGroupProfile(e),
                            i = s.lastMessage;
                        if (i.lastSequence > 0 && !1 === i.onlineOnlyFlag) return r = i.lastSequence, a = "got lastSequence:".concat(r, " from local group profile[lastMessage.lastSequence]. groupID:").concat(e), Gi.log("".concat(n, " ").concat(a)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(a)).end(), Promise.resolve(r);
                        if (s.nextMessageSeq > 1) return r = s.nextMessageSeq - 1, a = "got lastSequence:".concat(r, " from local group profile[nextMessageSeq]. groupID:").concat(e), Gi.log("".concat(n, " ").concat(a)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(a)).end(), Promise.resolve(r)
                    }
                    var c = "GROUP".concat(e),
                        u = this.getModule(Vu).getLocalConversation(c);
                    if (u && u.lastMessage.lastSequence && !1 === u.lastMessage.onlineOnlyFlag) return r = u.lastMessage.lastSequence, a = "got lastSequence:".concat(r, " from local conversation profile[lastMessage.lastSequence]. groupID:").concat(e), Gi.log("".concat(n, " ").concat(a)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(a)).end(), Promise.resolve(r);
                    var l = {
                        groupIDList: [e],
                        responseFilter: {
                            groupBaseInfoFilter: ["NextMsgSeq"]
                        }
                    };
                    return this.getGroupProfileAdvance(l).then((function(s) {
                        var i = s.data.successGroupList;
                        return Sc(i) ? Gi.log("".concat(n, " successGroupList is empty. groupID:").concat(e)) : (r = i[0].nextMessageSeq - 1, a = "got lastSequence:".concat(r, " from getGroupProfileAdvance. groupID:").concat(e), Gi.log("".concat(n, " ").concat(a))), o.setNetworkType(t.getNetworkType()).setMessage("".concat(a)).end(), r
                    })).catch((function(r) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                a = n[0],
                                s = n[1];
                            o.setError(r, a, s).setMessage("get lastSequence failed from getGroupProfileAdvance. groupID:".concat(e)).end()
                        })), Gi.warn("".concat(n, " failed. error:"), r), x_(r)
                    }))
                }
            }, {
                key: "isMessageFromAVChatroom",
                value: function(e) {
                    return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e)
                }
            }, {
                key: "hasJoinedAVChatRoom",
                value: function() {
                    return this._AVChatRoomHandler ? this._AVChatRoomHandler.hasJoinedAVChatRoom() : 0
                }
            }, {
                key: "getJoinedAVChatRoom",
                value: function() {
                    return this._AVChatRoomHandler ? this._AVChatRoomHandler.getJoinedAVChatRoom() : []
                }
            }, {
                key: "isOnlineMessage",
                value: function(e, t) {
                    return !(!this._canIUseOnlineOnlyFlag(e) || !t || !0 !== t.onlineUserOnly)
                }
            }, {
                key: "_canIUseOnlineOnlyFlag",
                value: function(e) {
                    var t = this.getJoinedAVChatRoom();
                    return !t || !t.includes(e.to) || e.conversationType !== ro.CONV_GROUP
                }
            }, {
                key: "deleteLocalGroupMembers",
                value: function(e, t) {
                    this.getModule(xu).deleteLocalGroupMembers(e, t)
                }
            }, {
                key: "onAVChatRoomMessage",
                value: function(e) {
                    this._AVChatRoomHandler && this._AVChatRoomHandler.onMessage(e)
                }
            }, {
                key: "getGroupSimplifiedInfo",
                value: function(e) {
                    var t = this,
                        n = new Op(Eg),
                        o = {
                            groupIDList: [e],
                            responseFilter: {
                                groupBaseInfoFilter: ["Type", "Name"]
                            }
                        };
                    return this.getGroupProfileAdvance(o).then((function(o) {
                        var r = o.data.successGroupList;
                        return n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e, " type:").concat(r[0].type)).end(), r[0]
                    })).catch((function(o) {
                        t.probeNetwork().then((function(t) {
                            var r = Wn(t, 2),
                                a = r[0],
                                s = r[1];
                            n.setError(o, a, s).setMessage("groupID:".concat(e)).end()
                        }))
                    }))
                }
            }, {
                key: "setUnjoinedAVChatRoom",
                value: function(e) {
                    this._unjoinedAVChatRoomList.set(e, 1)
                }
            }, {
                key: "deleteUnjoinedAVChatRoom",
                value: function(e) {
                    this._unjoinedAVChatRoomList.has(e) && this._unjoinedAVChatRoomList.delete(e)
                }
            }, {
                key: "isUnjoinedAVChatRoom",
                value: function(e) {
                    return this._unjoinedAVChatRoomList.has(e)
                }
            }, {
                key: "reset",
                value: function() {
                    this.groupMap.clear(), this._unjoinedAVChatRoomList.clear(), this._commonGroupHandler.reset(), this._groupSystemNoticeHandler.reset(), this._groupTipsHandler.reset(), this._AVChatRoomHandler && this._AVChatRoomHandler.reset()
                }
            }]), n
        }(nl),
        km = function() {
            function e(t) {
                wn(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this.memberCustomField = [], this._initMember(t)
            }
            return Pn(e, [{
                key: "_initMember",
                value: function(e) {
                    this.updateMember(e)
                }
            }, {
                key: "updateMember",
                value: function(e) {
                    var t = [null, void 0, "", 0, NaN];
                    e.memberCustomField && cc(this.memberCustomField, e.memberCustomField), Xi(this, e, ["memberCustomField"], t)
                }
            }, {
                key: "updateRole",
                value: function(e) {
                    ["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e)
                }
            }, {
                key: "updateMuteUntil",
                value: function(e) {
                    Bi(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3))
                }
            }, {
                key: "updateNameCard",
                value: function(e) {
                    Bi(e) || (this.nameCard = e)
                }
            }, {
                key: "updateMemberCustomField",
                value: function(e) {
                    e && cc(this.memberCustomField, e)
                }
            }]), e
        }(),
        Cm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "GroupMemberModule", o.groupMemberListMap = new Map, o.getInnerEmitterInstance().on(X_.PROFILE_UPDATED, o._onProfileUpdated, $n(o)), o
            }
            return Pn(n, [{
                key: "_onProfileUpdated",
                value: function(e) {
                    for (var t = this, n = e.data, o = function(e) {
                        var o = n[e];
                        t.groupMemberListMap.forEach((function(e) {
                            e.has(o.userID) && e.get(o.userID).updateMember({
                                nick: o.nick,
                                avatar: o.avatar
                            })
                        }))
                    }, r = 0; r < n.length; r++) o(r)
                }
            }, {
                key: "deleteGroupMemberList",
                value: function(e) {
                    this.groupMemberListMap.delete(e)
                }
            }, {
                key: "getGroupMemberList",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = e.offset,
                        r = void 0 === o ? 0 : o,
                        a = e.count,
                        s = void 0 === a ? 15 : a,
                        i = "".concat(this._className, ".getGroupMemberList"),
                        c = new Op(kg);
                    Gi.log("".concat(i, " groupID:").concat(n, " offset:").concat(r, " count:").concat(s));
                    var u = [];
                    return this.request({
                        protocolName: Hl,
                        requestData: {
                            groupID: n,
                            offset: r,
                            limit: s > 100 ? 100 : s
                        }
                    }).then((function(e) {
                        var o = e.data,
                            r = o.members,
                            a = o.memberNum;
                        if (!Ki(r) || 0 === r.length) return Promise.resolve([]);
                        var s = t.getModule(Fu);
                        return s.hasLocalGroup(n) && (s.getLocalGroupProfile(n).memberNum = a), u = t._updateLocalGroupMemberMap(n, r), t.getModule(Gu).getUserProfile({
                            userIDList: r.map((function(e) {
                                return e.userID
                            })),
                            tagList: [o_.NICK, o_.AVATAR]
                        })
                    })).then((function(e) {
                        var o = e.data;
                        if (!Ki(o) || 0 === o.length) return q_({
                            memberList: []
                        });
                        var a = o.map((function(e) {
                            return {
                                userID: e.userID,
                                nick: e.nick,
                                avatar: e.avatar
                            }
                        }));
                        return t._updateLocalGroupMemberMap(n, a), c.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " offset:").concat(r, " count:").concat(s)).end(), Gi.log("".concat(i, " ok.")), O_({
                            memberList: u
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            c.setError(e, o, r).end()
                        })), Gi.error("".concat(i, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "getGroupMemberProfile",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".getGroupMemberProfile"),
                        o = new Op(Cg);
                    o.setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)), Gi.log("".concat(n, " groupID:").concat(e.groupID, " userIDList:").concat(e.userIDList.join(","))), e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50));
                    var r = e.groupID,
                        a = e.userIDList;
                    return this._getGroupMemberProfileAdvance(Fn({}, e, {
                        userIDList: a
                    })).then((function(e) {
                        var n = e.data.members;
                        return Ki(n) && 0 !== n.length ? (t._updateLocalGroupMemberMap(r, n), t.getModule(Gu).getUserProfile({
                            userIDList: n.map((function(e) {
                                return e.userID
                            })),
                            tagList: [o_.NICK, o_.AVATAR]
                        })) : q_([])
                    })).then((function(e) {
                        var n = e.data.map((function(e) {
                            return {
                                userID: e.userID,
                                nick: e.nick,
                                avatar: e.avatar
                            }
                        }));
                        t._updateLocalGroupMemberMap(r, n);
                        var s = a.filter((function(e) {
                            return t.hasLocalGroupMember(r, e)
                        })).map((function(e) {
                            return t.getLocalGroupMemberInfo(r, e)
                        }));
                        return o.setNetworkType(t.getNetworkType()).end(), O_({
                            memberList: s
                        })
                    }))
                }
            }, {
                key: "addGroupMember",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".addGroupMember"),
                        o = e.groupID,
                        r = this.getModule(Fu).getLocalGroupProfile(o),
                        a = r.type,
                        s = new Op(Ng);
                    if (s.setMessage("groupID:".concat(o, " groupType:").concat(a)), lc(a)) {
                        var i = new G_({
                            code: id.CANNOT_ADD_MEMBER_IN_AVCHATROOM,
                            message: Jd
                        });
                        return s.setCode(id.CANNOT_ADD_MEMBER_IN_AVCHATROOM).setError(Jd).setNetworkType(this.getNetworkType()).end(), x_(i)
                    }
                    return e.userIDList = e.userIDList.map((function(e) {
                        return {
                            userID: e
                        }
                    })), Gi.log("".concat(n, " groupID:").concat(o)), this.request({
                        protocolName: Yl,
                        requestData: e
                    }).then((function(o) {
                        var a = o.data.members;
                        Gi.log("".concat(n, " ok"));
                        var i = a.filter((function(e) {
                                return 1 === e.result
                            })).map((function(e) {
                                return e.userID
                            })),
                            c = a.filter((function(e) {
                                return 0 === e.result
                            })).map((function(e) {
                                return e.userID
                            })),
                            u = a.filter((function(e) {
                                return 2 === e.result
                            })).map((function(e) {
                                return e.userID
                            })),
                            l = a.filter((function(e) {
                                return 4 === e.result
                            })).map((function(e) {
                                return e.userID
                            })),
                            d = "groupID:".concat(e.groupID, ", ") + "successUserIDList:".concat(i, ", ") + "failureUserIDList:".concat(c, ", ") + "existedUserIDList:".concat(u, ", ") + "overLimitUserIDList:".concat(l);
                        return s.setNetworkType(t.getNetworkType()).setMoreMessage(d).end(), 0 === i.length ? O_({
                            successUserIDList: i,
                            failureUserIDList: c,
                            existedUserIDList: u,
                            overLimitUserIDList: l
                        }) : (r.memberNum += i.length, O_({
                            successUserIDList: i,
                            failureUserIDList: c,
                            existedUserIDList: u,
                            overLimitUserIDList: l,
                            group: r
                        }))
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            s.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "deleteGroupMember",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".deleteGroupMember"),
                        o = e.groupID,
                        r = e.userIDList,
                        a = new Op(Ag),
                        s = "groupID:".concat(o, " ").concat(r.length > 5 ? "userIDList.length:".concat(r.length) : "userIDList:".concat(r));
                    a.setMessage(s), Gi.log("".concat(n, " groupID:").concat(o, " userIDList:"), r);
                    var i = this.getModule(Fu).getLocalGroupProfile(o);
                    return lc(i.type) ? x_(new G_({
                        code: id.CANNOT_KICK_MEMBER_IN_AVCHATROOM,
                        message: Qd
                    })) : this.request({
                        protocolName: zl,
                        requestData: e
                    }).then((function() {
                        return a.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), i.memberNum--, t.deleteLocalGroupMembers(o, r), O_({
                            group: i,
                            userIDList: r
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            a.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "setGroupMemberMuteTime",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = e.userID,
                        r = e.muteTime,
                        a = "".concat(this._className, ".setGroupMemberMuteTime");
                    if (o === this.getMyUserID()) return x_(new G_({
                        code: id.CANNOT_MUTE_SELF,
                        message: op
                    }));
                    Gi.log("".concat(a, " groupID:").concat(n, " userID:").concat(o));
                    var s = new Op(Og);
                    return s.setMessage("groupID:".concat(n, " userID:").concat(o, " muteTime:").concat(r)), this._modifyGroupMemberInfo({
                        groupID: n,
                        userID: o,
                        muteTime: r
                    }).then((function(e) {
                        s.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(a, " ok"));
                        var o = t.getModule(Fu);
                        return O_({
                            group: o.getLocalGroupProfile(n),
                            member: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            s.setError(e, o, r).end()
                        })), Gi.error("".concat(a, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "setGroupMemberRole",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".setGroupMemberRole"),
                        o = e.groupID,
                        r = e.userID,
                        a = e.role,
                        s = this.getModule(Fu).getLocalGroupProfile(o);
                    if (s.selfInfo.role !== ro.GRP_MBR_ROLE_OWNER) return x_(new G_({
                        code: id.NOT_OWNER,
                        message: Zd
                    }));
                    if ([ro.GRP_WORK, ro.GRP_AVCHATROOM].includes(s.type)) return x_(new G_({
                        code: id.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM,
                        message: ep
                    }));
                    if ([ro.GRP_MBR_ROLE_ADMIN, ro.GRP_MBR_ROLE_MEMBER].indexOf(a) < 0) return x_(new G_({
                        code: id.INVALID_MEMBER_ROLE,
                        message: tp
                    }));
                    if (r === this.getMyUserID()) return x_(new G_({
                        code: id.CANNOT_SET_SELF_MEMBER_ROLE,
                        message: np
                    }));
                    var i = new Op(Rg);
                    return i.setMessage("groupID:".concat(o, " userID:").concat(r, " role:").concat(a)), Gi.log("".concat(n, " groupID:").concat(o, " userID:").concat(r)), this._modifyGroupMemberInfo({
                        groupID: o,
                        userID: r,
                        role: a
                    }).then((function(e) {
                        return i.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok")), O_({
                            group: s,
                            member: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            i.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "setGroupMemberNameCard",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".setGroupMemberNameCard"),
                        o = e.groupID,
                        r = e.userID,
                        a = void 0 === r ? this.getMyUserID() : r,
                        s = e.nameCard;
                    Gi.log("".concat(n, " groupID:").concat(o, " userID:").concat(a));
                    var i = new Op(Lg);
                    return i.setMessage("groupID:".concat(o, " userID:").concat(a, " nameCard:").concat(s)), this._modifyGroupMemberInfo({
                        groupID: o,
                        userID: a,
                        nameCard: s
                    }).then((function(e) {
                        Gi.log("".concat(n, " ok")), i.setNetworkType(t.getNetworkType()).end();
                        var r = t.getModule(Fu).getLocalGroupProfile(o);
                        return a === t.getMyUserID() && r && r.setSelfNameCard(s), O_({
                            group: r,
                            member: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            i.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "setGroupMemberCustomField",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".setGroupMemberCustomField"),
                        o = e.groupID,
                        r = e.userID,
                        a = void 0 === r ? this.getMyUserID() : r,
                        s = e.memberCustomField;
                    Gi.log("".concat(n, " groupID:").concat(o, " userID:").concat(a));
                    var i = new Op(wg);
                    return i.setMessage("groupID:".concat(o, " userID:").concat(a, " memberCustomField:").concat(JSON.stringify(s))), this._modifyGroupMemberInfo({
                        groupID: o,
                        userID: a,
                        memberCustomField: s
                    }).then((function(e) {
                        i.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok"));
                        var r = t.getModule(Fu).getLocalGroupProfile(o);
                        return O_({
                            group: r,
                            member: e
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            i.setError(e, o, r).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "setMessageRemindType",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".setMessageRemindType"),
                        o = new Op(fg);
                    o.setMessage("groupID:".concat(e.groupID)), Gi.log("".concat(n, " groupID:").concat(e.groupID));
                    var r = e.groupID,
                        a = e.messageRemindType;
                    return this._modifyGroupMemberInfo({
                        groupID: r,
                        messageRemindType: a,
                        userID: this.getMyUserID()
                    }).then((function() {
                        o.setNetworkType(t.getNetworkType()).end(), Gi.log("".concat(n, " ok. groupID:").concat(e.groupID));
                        var r = t.getModule(Fu).getLocalGroupProfile(e.groupID);
                        return r && (r.selfInfo.messageRemindType = a), O_({
                            group: r
                        })
                    })).catch((function(e) {
                        return t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "_modifyGroupMemberInfo",
                value: function(e) {
                    var t = this,
                        n = e.groupID,
                        o = e.userID;
                    return this.request({
                        protocolName: Wl,
                        requestData: e
                    }).then((function() {
                        if (t.hasLocalGroupMember(n, o)) {
                            var r = t.getLocalGroupMemberInfo(n, o);
                            return Bi(e.muteTime) || r.updateMuteUntil(e.muteTime), Bi(e.role) || r.updateRole(e.role), Bi(e.nameCard) || r.updateNameCard(e.nameCard), Bi(e.memberCustomField) || r.updateMemberCustomField(e.memberCustomField), r
                        }
                        return t.getGroupMemberProfile({
                            groupID: n,
                            userIDList: [o]
                        }).then((function(e) {
                            return Wn(e.data.memberList, 1)[0]
                        }))
                    }))
                }
            }, {
                key: "_getGroupMemberProfileAdvance",
                value: function(e) {
                    return this.request({
                        protocolName: $l,
                        requestData: Fn({}, e, {
                            memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : ["Role", "JoinTime", "NameCard", "ShutUpUntil"]
                        })
                    })
                }
            }, {
                key: "_updateLocalGroupMemberMap",
                value: function(e, t) {
                    var n = this;
                    return Ki(t) && 0 !== t.length ? t.map((function(t) {
                        return n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new km(t)), n.getLocalGroupMemberInfo(e, t.userID)
                    })) : []
                }
            }, {
                key: "deleteLocalGroupMembers",
                value: function(e, t) {
                    var n = this.groupMemberListMap.get(e);
                    n && t.forEach((function(e) {
                        n.delete(e)
                    }))
                }
            }, {
                key: "getLocalGroupMemberInfo",
                value: function(e, t) {
                    return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null
                }
            }, {
                key: "setLocalGroupMember",
                value: function(e, t) {
                    if (this.groupMemberListMap.has(e)) this.groupMemberListMap.get(e).set(t.userID, t);
                    else {
                        var n = (new Map).set(t.userID, t);
                        this.groupMemberListMap.set(e, n)
                    }
                }
            }, {
                key: "getLocalGroupMemberList",
                value: function(e) {
                    return this.groupMemberListMap.get(e)
                }
            }, {
                key: "hasLocalGroupMember",
                value: function(e, t) {
                    return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t)
                }
            }, {
                key: "hasLocalGroupMemberMap",
                value: function(e) {
                    return this.groupMemberListMap.has(e)
                }
            }, {
                key: "reset",
                value: function() {
                    this.groupMemberListMap.clear()
                }
            }]), n
        }(nl),
        Nm = function() {
            function e(t) {
                wn(this, e), this._userModule = t, this._className = "ProfileHandler", this.TAG = "profile", this.accountProfileMap = new Map, this.expirationTime = 864e5
            }
            return Pn(e, [{
                key: "setExpirationTime",
                value: function(e) {
                    this.expirationTime = e
                }
            }, {
                key: "getUserProfile",
                value: function(e) {
                    var t = this,
                        n = e.userIDList;
                    e.fromAccount = this._userModule.getMyAccount(), n.length > 100 && (Gi.warn("".concat(this._className, ".getUserProfile 获取用户资料人数不能超过100人")), n.length = 100);
                    for (var o, r = [], a = [], s = 0, i = n.length; s < i; s++) o = n[s], this._userModule.isMyFriend(o) && this._containsAccount(o) ? a.push(this._getProfileFromMap(o)) : r.push(o);
                    if (0 === r.length) return q_(a);
                    e.toAccount = r;
                    var c = e.bFromGetMyProfile || !1,
                        u = [];
                    e.toAccount.forEach((function(e) {
                        u.push({
                            toAccount: e,
                            standardSequence: 0,
                            customSequence: 0
                        })
                    })), e.userItem = u;
                    var l = new Op(Fg);
                    return l.setMessage(n.length > 5 ? "userIDList.length:".concat(n.length) : "userIDList:".concat(n)), this._userModule.request({
                        protocolName: ll,
                        requestData: e
                    }).then((function(e) {
                        l.setNetworkType(t._userModule.getNetworkType()).end(), Gi.info("".concat(t._className, ".getUserProfile ok"));
                        var n = t._handleResponse(e).concat(a);
                        return O_(c ? n[0] : n)
                    })).catch((function(e) {
                        return t._userModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            l.setError(e, o, r).end()
                        })), Gi.error("".concat(t._className, ".getUserProfile failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "getMyProfile",
                value: function() {
                    var e = this._userModule.getMyAccount();
                    if (Gi.log("".concat(this._className, ".getMyProfile myAccount:").concat(e)), this._fillMap(), this._containsAccount(e)) {
                        var t = this._getProfileFromMap(e);
                        return Gi.debug("".concat(this._className, ".getMyProfile from cache, myProfile:") + JSON.stringify(t)), q_(t)
                    }
                    return this.getUserProfile({
                        fromAccount: e,
                        userIDList: [e],
                        bFromGetMyProfile: !0
                    })
                }
            }, {
                key: "_handleResponse",
                value: function(e) {
                    for (var t, n, o = Ji.now(), r = e.data.userProfileItem, a = [], s = 0, i = r.length; s < i; s++) "@TLS#NOT_FOUND" !== r[s].to && "" !== r[s].to && (t = r[s].to, n = this._updateMap(t, this._getLatestProfileFromResponse(t, r[s].profileItem)), a.push(n));
                    return Gi.log("".concat(this._className, "._handleResponse cost ").concat(Ji.now() - o, " ms")), a
                }
            }, {
                key: "_getLatestProfileFromResponse",
                value: function(e, t) {
                    var n = {};
                    if (n.userID = e, n.profileCustomField = [], !Sc(t))
                        for (var o = 0, r = t.length; o < r; o++)
                            if (t[o].tag.indexOf("Tag_Profile_Custom") > -1) n.profileCustomField.push({
                                key: t[o].tag,
                                value: t[o].value
                            });
                            else switch (t[o].tag) {
                                case o_.NICK:
                                    n.nick = t[o].value;
                                    break;
                                case o_.GENDER:
                                    n.gender = t[o].value;
                                    break;
                                case o_.BIRTHDAY:
                                    n.birthday = t[o].value;
                                    break;
                                case o_.LOCATION:
                                    n.location = t[o].value;
                                    break;
                                case o_.SELFSIGNATURE:
                                    n.selfSignature = t[o].value;
                                    break;
                                case o_.ALLOWTYPE:
                                    n.allowType = t[o].value;
                                    break;
                                case o_.LANGUAGE:
                                    n.language = t[o].value;
                                    break;
                                case o_.AVATAR:
                                    n.avatar = t[o].value;
                                    break;
                                case o_.MESSAGESETTINGS:
                                    n.messageSettings = t[o].value;
                                    break;
                                case o_.ADMINFORBIDTYPE:
                                    n.adminForbidType = t[o].value;
                                    break;
                                case o_.LEVEL:
                                    n.level = t[o].value;
                                    break;
                                case o_.ROLE:
                                    n.role = t[o].value;
                                    break;
                                default:
                                    Gi.warn("".concat(this._className, "._handleResponse unknown tag:"), t[o].tag, t[o].value)
                            }
                    return n
                }
            }, {
                key: "updateMyProfile",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".updateMyProfile"),
                        o = new Op(qg);
                    o.setMessage(JSON.stringify(e));
                    var r = (new am).validate(e);
                    if (!r.valid) return o.setCode(id.UPDATE_PROFILE_INVALID_PARAM).setMoreMessage("".concat(n, " info:").concat(r.tips)).setNetworkType(this._userModule.getNetworkType()).end(), Gi.error("".concat(n, " info:").concat(r.tips, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile")), x_({
                        code: id.UPDATE_PROFILE_INVALID_PARAM,
                        message: rp
                    });
                    var a = [];
                    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && ("profileCustomField" === s ? e.profileCustomField.forEach((function(e) {
                        a.push({
                            tag: e.key,
                            value: e.value
                        })
                    })) : a.push({
                        tag: o_[s.toUpperCase()],
                        value: e[s]
                    }));
                    return 0 === a.length ? (o.setCode(id.UPDATE_PROFILE_NO_KEY).setMoreMessage(ap).setNetworkType(this._userModule.getNetworkType()).end(), Gi.error("".concat(n, " info:").concat(ap, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile")), x_({
                        code: id.UPDATE_PROFILE_NO_KEY,
                        message: ap
                    })) : this._userModule.request({
                        protocolName: dl,
                        requestData: {
                            fromAccount: this._userModule.getMyAccount(),
                            profileItem: a
                        }
                    }).then((function(r) {
                        o.setNetworkType(t._userModule.getNetworkType()).end(), Gi.info("".concat(n, " ok"));
                        var a = t._updateMap(t._userModule.getMyAccount(), e);
                        return t._userModule.emitOuterEvent(oo.PROFILE_UPDATED, [a]), q_(a)
                    })).catch((function(e) {
                        return t._userModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))
                }
            }, {
                key: "onProfileModified",
                value: function(e) {
                    var t = e.dataList;
                    if (!Sc(t)) {
                        var n, o, r = t.length;
                        Gi.info("".concat(this._className, ".onProfileModified count:").concat(r));
                        for (var a = [], s = this._userModule.getModule(Vu), i = 0; i < r; i++) n = t[i].userID, o = this._updateMap(n, this._getLatestProfileFromResponse(n, t[i].profileList)), a.push(o), n === this._userModule.getMyAccount() && s.onMyProfileModified({
                            latestNick: o.nick,
                            latestAvatar: o.avatar
                        });
                        this._userModule.emitInnerEvent(X_.PROFILE_UPDATED, a), this._userModule.emitOuterEvent(oo.PROFILE_UPDATED, a)
                    }
                }
            }, {
                key: "_fillMap",
                value: function() {
                    if (0 === this.accountProfileMap.size) {
                        for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, o = e.length; n < o; n++) t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
                        Gi.log("".concat(this._className, "._fillMap from cache, map.size:").concat(this.accountProfileMap.size))
                    }
                }
            }, {
                key: "_updateMap",
                value: function(e, t) {
                    var n, o = Date.now();
                    return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t.profileCustomField && cc(n.profileCustomField, t.profileCustomField), Xi(n, t, ["profileCustomField"]), n.lastUpdatedTime = o) : (n = new am(t), (this._userModule.isMyFriend(e) || e === this._userModule.getMyAccount()) && (n.lastUpdatedTime = o, this.accountProfileMap.set(e, n))), this._flushMap(e === this._userModule.getMyAccount()), n
                }
            }, {
                key: "_flushMap",
                value: function(e) {
                    var t = Jn(this.accountProfileMap.values()),
                        n = this._userModule.getStorageModule();
                    Gi.debug("".concat(this._className, "._flushMap length:").concat(t.length, " flushAtOnce:").concat(e)), n.setItem(this.TAG, t, e)
                }
            }, {
                key: "_containsAccount",
                value: function(e) {
                    return this.accountProfileMap.has(e)
                }
            }, {
                key: "_getProfileFromMap",
                value: function(e) {
                    return this.accountProfileMap.get(e)
                }
            }, {
                key: "_getCachedProfiles",
                value: function() {
                    var e = this._userModule.getStorageModule().getItem(this.TAG);
                    return Sc(e) ? [] : e
                }
            }, {
                key: "onConversationsProfileUpdated",
                value: function(e) {
                    for (var t, n, o, r = [], a = 0, s = e.length; a < s; a++) n = (t = e[a]).userID, this._userModule.isMyFriend(n) || (this._containsAccount(n) ? (o = this._getProfileFromMap(n), Xi(o, t) > 0 && r.push(n)) : r.push(t.userID));
                    0 !== r.length && (Gi.info("".concat(this._className, ".onConversationsProfileUpdated toAccountList:").concat(r)), this.getUserProfile({
                        userIDList: r
                    }))
                }
            }, {
                key: "getNickAndAvatarByUserID",
                value: function(e) {
                    if (this._containsAccount(e)) {
                        var t = this._getProfileFromMap(e);
                        return {
                            nick: t.nick,
                            avatar: t.avatar
                        }
                    }
                    return {
                        nick: "",
                        avatar: ""
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this._flushMap(!0), this.accountProfileMap.clear()
                }
            }]), e
        }(),
        Am = function e(t) {
            wn(this, e), Sc || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0)
        },
        Om = function() {
            function e(t) {
                wn(this, e), this._userModule = t, this._className = "BlacklistHandler", this._blacklistMap = new Map, this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0
            }
            return Pn(e, [{
                key: "getLocalBlacklist",
                value: function() {
                    return Jn(this._blacklistMap.keys())
                }
            }, {
                key: "getBlacklist",
                value: function() {
                    var e = this,
                        t = "".concat(this._className, ".getBlacklist"),
                        n = {
                            fromAccount: this._userModule.getMyAccount(),
                            maxLimited: this.maxLimited,
                            startIndex: 0,
                            lastSequence: this.currentSequence
                        },
                        o = new Op(xg);
                    return this._userModule.request({
                        protocolName: pl,
                        requestData: n
                    }).then((function(n) {
                        var r = n.data,
                            a = r.blackListItem,
                            s = r.currentSequence,
                            i = Sc(a) ? 0 : a.length;
                        o.setNetworkType(e._userModule.getNetworkType()).setMessage("blackList count:".concat(i)).end(), Gi.info("".concat(t, " ok")), e.currentSequence = s, e._handleResponse(a, !0), e._userModule.emitOuterEvent(oo.BLACKLIST_UPDATED, Jn(e._blacklistMap.keys()))
                    })).catch((function(n) {
                        return e._userModule.probeNetwork().then((function(e) {
                            var t = Wn(e, 2),
                                r = t[0],
                                a = t[1];
                            o.setError(n, r, a).end()
                        })), Gi.error("".concat(t, " failed. error:"), n), x_(n)
                    }))
                }
            }, {
                key: "addBlacklist",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".addBlacklist"),
                        o = new Op(Vg);
                    if (!Ki(e.userIDList)) return o.setCode(id.ADD_BLACKLIST_INVALID_PARAM).setMessage(sp).setNetworkType(this._userModule.getNetworkType()).end(), Gi.error("".concat(n, " options.userIDList 必需是数组")), x_({
                        code: id.ADD_BLACKLIST_INVALID_PARAM,
                        message: sp
                    });
                    var r = this._userModule.getMyAccount();
                    return 1 === e.userIDList.length && e.userIDList[0] === r ? (o.setCode(id.CANNOT_ADD_SELF_TO_BLACKLIST).setMessage(cp).setNetworkType(this._userModule.getNetworkType()).end(), Gi.error("".concat(n, " 不能把自己拉黑")), x_({
                        code: id.CANNOT_ADD_SELF_TO_BLACKLIST,
                        message: cp
                    })) : (e.userIDList.includes(r) && (e.userIDList = e.userIDList.filter((function(e) {
                        return e !== r
                    })), Gi.warn("".concat(n, " 不能把自己拉黑，已过滤"))), e.fromAccount = this._userModule.getMyAccount(), e.toAccount = e.userIDList, this._userModule.request({
                        protocolName: gl,
                        requestData: e
                    }).then((function(r) {
                        return o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)).end(), Gi.info("".concat(n, " ok")), t._handleResponse(r.resultItem, !0), O_(Jn(t._blacklistMap.keys()))
                    })).catch((function(e) {
                        return t._userModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    })))
                }
            }, {
                key: "_handleResponse",
                value: function(e, t) {
                    if (!Sc(e))
                        for (var n, o, r, a = 0, s = e.length; a < s; a++) o = e[a].to, r = e[a].resultCode, (Bi(r) || 0 === r) && (t ? ((n = this._blacklistMap.has(o) ? this._blacklistMap.get(o) : new Am).userID = o, !Sc(e[a].addBlackTimeStamp) && (n.timeStamp = e[a].addBlackTimeStamp), this._blacklistMap.set(o, n)) : this._blacklistMap.has(o) && (n = this._blacklistMap.get(o), this._blacklistMap.delete(o)));
                    Gi.log("".concat(this._className, "._handleResponse total:").concat(this._blacklistMap.size, " bAdd:").concat(t))
                }
            }, {
                key: "deleteBlacklist",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".deleteBlacklist"),
                        o = new Op(Kg);
                    return Ki(e.userIDList) ? (e.fromAccount = this._userModule.getMyAccount(), e.toAccount = e.userIDList, this._userModule.request({
                        protocolName: hl,
                        requestData: e
                    }).then((function(r) {
                        return o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)).end(), Gi.info("".concat(n, " ok")), t._handleResponse(r.data.resultItem, !1), O_(Jn(t._blacklistMap.keys()))
                    })).catch((function(e) {
                        return t._userModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), Gi.error("".concat(n, " failed. error:"), e), x_(e)
                    }))) : (o.setCode(id.DEL_BLACKLIST_INVALID_PARAM).setMessage(ip).setNetworkType(this._userModule.getNetworkType()).end(), Gi.error("".concat(n, " options.userIDList 必需是数组")), x_({
                        code: id.DEL_BLACKLIST_INVALID_PARAM,
                        message: ip
                    }))
                }
            }, {
                key: "onAccountDeleted",
                value: function(e) {
                    for (var t, n = [], o = 0, r = e.length; o < r; o++) t = e[o], this._blacklistMap.has(t) && (this._blacklistMap.delete(t), n.push(t));
                    n.length > 0 && (Gi.log("".concat(this._className, ".onAccountDeleted count:").concat(n.length, " userIDList:"), n), this._userModule.emitOuterEvent(oo.BLACKLIST_UPDATED, Jn(this._blacklistMap.keys())))
                }
            }, {
                key: "onAccountAdded",
                value: function(e) {
                    for (var t, n = [], o = 0, r = e.length; o < r; o++) t = e[o], this._blacklistMap.has(t) || (this._blacklistMap.set(t, new Am({
                        userID: t
                    })), n.push(t));
                    n.length > 0 && (Gi.log("".concat(this._className, ".onAccountAdded count:").concat(n.length, " userIDList:"), n), this._userModule.emitOuterEvent(oo.BLACKLIST_UPDATED, Jn(this._blacklistMap.keys())))
                }
            }, {
                key: "reset",
                value: function() {
                    this._blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0
                }
            }]), e
        }(),
        Lm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "UserModule", o._profileHandler = new Nm($n(o)), o._blacklistHandler = new Om($n(o)), o.getInnerEmitterInstance().on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, o.onContextUpdated, $n(o)), o
            }
            return Pn(n, [{
                key: "onContextUpdated",
                value: function(e) {
                    this._profileHandler.getMyProfile(), this._blacklistHandler.getBlacklist()
                }
            }, {
                key: "onProfileModified",
                value: function(e) {
                    this._profileHandler.onProfileModified(e)
                }
            }, {
                key: "onRelationChainModified",
                value: function(e) {
                    var t = e.dataList;
                    if (!Sc(t)) {
                        var n = [];
                        t.forEach((function(e) {
                            e.blackListDelAccount && n.push.apply(n, Jn(e.blackListDelAccount))
                        })), n.length > 0 && this._blacklistHandler.onAccountDeleted(n);
                        var o = [];
                        t.forEach((function(e) {
                            e.blackListAddAccount && o.push.apply(o, Jn(e.blackListAddAccount))
                        })), o.length > 0 && this._blacklistHandler.onAccountAdded(o)
                    }
                }
            }, {
                key: "onConversationsProfileUpdated",
                value: function(e) {
                    this._profileHandler.onConversationsProfileUpdated(e)
                }
            }, {
                key: "getMyAccount",
                value: function() {
                    return this.getMyUserID()
                }
            }, {
                key: "getMyProfile",
                value: function() {
                    return this._profileHandler.getMyProfile()
                }
            }, {
                key: "getStorageModule",
                value: function() {
                    return this.getModule(Bu)
                }
            }, {
                key: "isMyFriend",
                value: function(e) {
                    var t = this.getModule(qu);
                    return !!t && t.isMyFriend(e)
                }
            }, {
                key: "getUserProfile",
                value: function(e) {
                    return this._profileHandler.getUserProfile(e)
                }
            }, {
                key: "updateMyProfile",
                value: function(e) {
                    return this._profileHandler.updateMyProfile(e)
                }
            }, {
                key: "getNickAndAvatarByUserID",
                value: function(e) {
                    return this._profileHandler.getNickAndAvatarByUserID(e)
                }
            }, {
                key: "getLocalBlacklist",
                value: function() {
                    var e = this._blacklistHandler.getLocalBlacklist();
                    return q_(e)
                }
            }, {
                key: "addBlacklist",
                value: function(e) {
                    return this._blacklistHandler.addBlacklist(e)
                }
            }, {
                key: "deleteBlacklist",
                value: function(e) {
                    return this._blacklistHandler.deleteBlacklist(e)
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._profileHandler.reset(), this._blacklistHandler.reset()
                }
            }]), n
        }(nl),
        Rm = function() {
            function e(t, n) {
                wn(this, e), this._moduleManager = t, this._isLoggedIn = !1, this._SDKAppID = n.SDKAppID, this._userID = n.userID || "", this._userSig = n.userSig || "", this._version = "2.13.1", this._a2Key = "", this._tinyID = "", this._contentType = "json", this._unlimitedAVChatRoom = n.unlimitedAVChatRoom, this._scene = n.scene || "", this._oversea = n.oversea, this._instanceID = n.instanceID, this._statusInstanceID = 0
            }
            return Pn(e, [{
                key: "isLoggedIn",
                value: function() {
                    return this._isLoggedIn
                }
            }, {
                key: "isOversea",
                value: function() {
                    return this._oversea
                }
            }, {
                key: "isUnlimitedAVChatRoom",
                value: function() {
                    return this._unlimitedAVChatRoom
                }
            }, {
                key: "getUserID",
                value: function() {
                    return this._userID
                }
            }, {
                key: "setUserID",
                value: function(e) {
                    this._userID = e
                }
            }, {
                key: "setUserSig",
                value: function(e) {
                    this._userSig = e
                }
            }, {
                key: "getUserSig",
                value: function() {
                    return this._userSig
                }
            }, {
                key: "getSDKAppID",
                value: function() {
                    return this._SDKAppID
                }
            }, {
                key: "getTinyID",
                value: function() {
                    return this._tinyID
                }
            }, {
                key: "setTinyID",
                value: function(e) {
                    this._tinyID = e, this._isLoggedIn = !0
                }
            }, {
                key: "getScene",
                value: function() {
                    return function() {
                        var e = !1,
                            t = [];
                        Zs && (t = Object.keys(ti)), ei && (t = Object.keys(window));
                        for (var n = 0, o = t.length; n < o; n++)
                            if (t[n].toLowerCase().includes("uikit")) {
                                e = !0;
                                break
                            } return t = null, e
                    }() ? "tuikit" : this._scene
                }
            }, {
                key: "getInstanceID",
                value: function() {
                    return this._instanceID
                }
            }, {
                key: "getStatusInstanceID",
                value: function() {
                    return this._statusInstanceID
                }
            }, {
                key: "setStatusInstanceID",
                value: function(e) {
                    this._statusInstanceID = e
                }
            }, {
                key: "getVersion",
                value: function() {
                    return this._version
                }
            }, {
                key: "getA2Key",
                value: function() {
                    return this._a2Key
                }
            }, {
                key: "setA2Key",
                value: function(e) {
                    this._a2Key = e
                }
            }, {
                key: "getContentType",
                value: function() {
                    return this._contentType
                }
            }, {
                key: "reset",
                value: function() {
                    this._isLoggedIn = !1, this._userSig = "", this._a2Key = "", this._tinyID = "", this._statusInstanceID = 0
                }
            }]), e
        }(),
        wm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "SignModule", o._helloInterval = 120, o._lastLoginTs = 0, Q_.mixin($n(o)), o
            }
            return Pn(n, [{
                key: "onCheckTimer",
                value: function(e) {
                    this.isLoggedIn() && e % this._helloInterval == 0 && this._hello()
                }
            }, {
                key: "login",
                value: function(e) {
                    if (this.isLoggedIn()) {
                        var t = "您已经登录账号".concat(e.userID, "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。");
                        return Gi.warn(t), q_({
                            actionStatus: "OK",
                            errorCode: 0,
                            errorInfo: t,
                            repeatLogin: !0
                        })
                    }
                    if (Date.now() - this._lastLoginTs <= 15e3) return Gi.warn("您正在尝试登录账号".concat(e.userID, "！请勿重复登录。")), x_({
                        code: id.REPEAT_LOGIN,
                        message: hd
                    });
                    Gi.log("".concat(this._className, ".login userID:").concat(e.userID));
                    var n = this._checkLoginInfo(e);
                    if (0 !== n.code) return x_(n);
                    var o = this.getModule(Ku),
                        r = e.userID,
                        a = e.userSig;
                    return o.setUserID(r), o.setUserSig(a), this.getModule(Ju).updateProtocolConfig(), this._login()
                }
            }, {
                key: "_login",
                value: function() {
                    var e = this,
                        t = this.getModule(Ku),
                        n = new Op(wp);
                    return n.setMessage("".concat(t.getScene())).setMoreMessage("identifier:".concat(this.getMyUserID())), this._lastLoginTs = Date.now(), this.request({
                        protocolName: ol
                    }).then((function(o) {
                        e._lastLoginTs = 0;
                        var r = Date.now(),
                            a = null,
                            s = o.data,
                            i = s.a2Key,
                            c = s.tinyID,
                            u = s.helloInterval,
                            l = s.instanceID,
                            d = s.timeStamp;
                        Gi.log("".concat(e._className, ".login ok. helloInterval:").concat(u, " instanceID:").concat(l, " timeStamp:").concat(d));
                        var p = 1e3 * d,
                            g = r - n.getStartTs(),
                            h = p + parseInt(g / 2) - r,
                            f = n.getStartTs() + h;
                        if (n.start(f), function(e, t) {
                            Oi = t;
                            var n = new Date;
                            n.setTime(e), Gi.info("baseTime from server: ".concat(n, " offset: ").concat(Oi))
                        }(p, h), !c) throw a = new G_({
                            code: id.NO_TINYID,
                            message: dd
                        }), n.setError(a, !0, e.getNetworkType()).end(), a;
                        if (!i) throw a = new G_({
                            code: id.NO_A2KEY,
                            message: pd
                        }), n.setError(a, !0, e.getNetworkType()).end(), a;
                        return n.setNetworkType(e.getNetworkType()).setMoreMessage("helloInterval:".concat(u, " instanceID:").concat(l, " offset:").concat(h)).end(), t.setA2Key(i), t.setTinyID(c), t.setStatusInstanceID(l), e.getModule(Ju).updateProtocolConfig(), e.emitInnerEvent(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED), e._helloInterval = u, e.triggerReady(), e._fetchCloudControlConfig(), o
                    })).catch((function(t) {
                        return e.probeNetwork().then((function(e) {
                            var o = Wn(e, 2),
                                r = o[0],
                                a = o[1];
                            n.setError(t, r, a).end(!0)
                        })), Gi.error("".concat(e._className, ".login failed. error:"), t), e._moduleManager.onLoginFailed(), x_(t)
                    }))
                }
            }, {
                key: "logout",
                value: function() {
                    var e = this;
                    return this.isLoggedIn() ? (new Op(bp).setNetworkType(this.getNetworkType()).setMessage("identifier:".concat(this.getMyUserID())).end(!0), Gi.info("".concat(this._className, ".logout")), this.request({
                        protocolName: rl
                    }).then((function() {
                        return e.resetReady(), q_({})
                    })).catch((function(t) {
                        return Gi.error("".concat(e._className, "._logout error:"), t), e.resetReady(), q_({})
                    }))) : x_({
                        code: id.USER_NOT_LOGGED_IN,
                        message: gd
                    })
                }
            }, {
                key: "_fetchCloudControlConfig",
                value: function() {
                    this.getModule(Zu).fetchConfig()
                }
            }, {
                key: "_hello",
                value: function() {
                    var e = this;
                    this.request({
                        protocolName: al
                    }).catch((function(t) {
                        Gi.warn("".concat(e._className, "._hello error:"), t)
                    }))
                }
            }, {
                key: "_checkLoginInfo",
                value: function(e) {
                    var t = 0,
                        n = "";
                    return Sc(this.getModule(Ku).getSDKAppID()) ? (t = id.NO_SDKAPPID, n = cd) : Sc(e.userID) ? (t = id.NO_IDENTIFIER, n = ud) : Sc(e.userSig) && (t = id.NO_USERSIG, n = ld), {
                        code: t,
                        message: n
                    }
                }
            }, {
                key: "onMultipleAccountKickedOut",
                value: function(e) {
                    var t = this;
                    new Op(Pp).setNetworkType(this.getNetworkType()).setMessage("type:".concat(ro.KICKED_OUT_MULT_ACCOUNT, " newInstanceInfo:").concat(JSON.stringify(e))).end(!0), Gi.warn("".concat(this._className, ".onMultipleAccountKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e), this.logout().then((function() {
                        t.emitOuterEvent(oo.KICKED_OUT, {
                            type: ro.KICKED_OUT_MULT_ACCOUNT
                        }), t._moduleManager.reset()
                    }))
                }
            }, {
                key: "onMultipleDeviceKickedOut",
                value: function(e) {
                    var t = this;
                    new Op(Pp).setNetworkType(this.getNetworkType()).setMessage("type:".concat(ro.KICKED_OUT_MULT_DEVICE, " newInstanceInfo:").concat(JSON.stringify(e))).end(!0), Gi.warn("".concat(this._className, ".onMultipleDeviceKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e), this.logout().then((function() {
                        t.emitOuterEvent(oo.KICKED_OUT, {
                            type: ro.KICKED_OUT_MULT_DEVICE
                        }), t._moduleManager.reset()
                    }))
                }
            }, {
                key: "onUserSigExpired",
                value: function() {
                    new Op(Pp).setNetworkType(this.getNetworkType()).setMessage(ro.KICKED_OUT_USERSIG_EXPIRED).end(!0), Gi.warn("".concat(this._className, ".onUserSigExpired: userSig 签名过期被踢下线")), 0 !== this.getModule(Ku).getStatusInstanceID() && (this.emitOuterEvent(oo.KICKED_OUT, {
                        type: ro.KICKED_OUT_USERSIG_EXPIRED
                    }), this._moduleManager.reset())
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this.resetReady(), this._helloInterval = 120, this._lastLoginTs = 0
                }
            }]), n
        }(nl);

    function bm() {
        return null
    }
    var Pm = function() {
            function e(t) {
                wn(this, e), this._moduleManager = t, this._className = "StorageModule", this._storageQueue = new Map, this._errorTolerantHandle()
            }
            return Pn(e, [{
                key: "_errorTolerantHandle",
                value: function() {
                    Zs || !Bi(window) && !Bi(window.localStorage) || (this.getItem = bm, this.setItem = bm, this.removeItem = bm, this.clear = bm)
                }
            }, {
                key: "onCheckTimer",
                value: function(e) {
                    if (e % 20 == 0) {
                        if (0 === this._storageQueue.size) return;
                        this._doFlush()
                    }
                }
            }, {
                key: "_doFlush",
                value: function() {
                    try {
                        var e, t = no(this._storageQueue);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = Wn(e.value, 2),
                                    o = n[0],
                                    r = n[1];
                                this._setStorageSync(this._getKey(o), r)
                            }
                        } catch (a) {
                            t.e(a)
                        } finally {
                            t.f()
                        }
                        this._storageQueue.clear()
                    } catch (Ov) {
                        Gi.warn("".concat(this._className, "._doFlush error:"), Ov)
                    }
                }
            }, {
                key: "_getPrefix",
                value: function() {
                    var e = this._moduleManager.getModule(Ku);
                    return "TIM_".concat(e.getSDKAppID(), "_").concat(e.getUserID(), "_")
                }
            }, {
                key: "_getKey",
                value: function(e) {
                    return "".concat(this._getPrefix()).concat(e)
                }
            }, {
                key: "getItem",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    try {
                        var n = t ? this._getKey(e) : e;
                        return this._getStorageSync(n)
                    } catch (Ov) {
                        return Gi.warn("".concat(this._className, ".getItem error:"), Ov), {}
                    }
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (n) {
                        var r = o ? this._getKey(e) : e;
                        this._setStorageSync(r, t)
                    } else this._storageQueue.set(e, t)
                }
            }, {
                key: "clear",
                value: function() {
                    try {
                        Zs ? ti.clearStorageSync() : localStorage && localStorage.clear()
                    } catch (Ov) {
                        Gi.warn("".concat(this._className, ".clear error:"), Ov)
                    }
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    try {
                        var n = t ? this._getKey(e) : e;
                        this._removeStorageSync(n)
                    } catch (Ov) {
                        Gi.warn("".concat(this._className, ".removeItem error:"), Ov)
                    }
                }
            }, {
                key: "getSize",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b";
                    try {
                        var o = {
                            size: 0,
                            limitSize: 5242880,
                            unit: n
                        };
                        if (Object.defineProperty(o, "leftSize", {
                            enumerable: !0,
                            get: function() {
                                return o.limitSize - o.size
                            }
                        }), Zs && (o.limitSize = 1024 * ti.getStorageInfoSync().limitSize), e) o.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length;
                        else if (Zs) {
                            var r = ti.getStorageInfoSync(),
                                a = r.keys;
                            a.forEach((function(e) {
                                o.size += JSON.stringify(t._getStorageSync(e)).length + t._getKey(e).length
                            }))
                        } else if (localStorage)
                            for (var s in localStorage) localStorage.hasOwnProperty(s) && (o.size += localStorage.getItem(s).length + s.length);
                        return this._convertUnit(o)
                    } catch (Ov) {
                        Gi.warn("".concat(this._className, " error:"), Ov)
                    }
                }
            }, {
                key: "_convertUnit",
                value: function(e) {
                    var t = {},
                        n = e.unit;
                    for (var o in t.unit = n, e) "number" == typeof e[o] && ("kb" === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024) : "mb" === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024 / 1024) : t[o] = e[o]);
                    return t
                }
            }, {
                key: "_setStorageSync",
                value: function(e, t) {
                    Zs ? Xs ? my.setStorageSync({
                        key: e,
                        data: t
                    }) : ti.setStorageSync(e, t) : localStorage && localStorage.setItem(e, JSON.stringify(t))
                }
            }, {
                key: "_getStorageSync",
                value: function(e) {
                    return Zs ? Xs ? my.getStorageSync({
                        key: e
                    }).data : ti.getStorageSync(e) : localStorage ? JSON.parse(localStorage.getItem(e)) : {}
                }
            }, {
                key: "_removeStorageSync",
                value: function(e) {
                    Zs ? Xs ? my.removeStorageSync({
                        key: e
                    }) : ti.removeStorageSync(e) : localStorage && localStorage.removeItem(e)
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._doFlush()
                }
            }]), e
        }(),
        Gm = function() {
            function e(t) {
                wn(this, e), this._className = "SSOLogBody", this._report = []
            }
            return Pn(e, [{
                key: "pushIn",
                value: function(e) {
                    Gi.debug("".concat(this._className, ".pushIn"), this._report.length, e), this._report.push(e)
                }
            }, {
                key: "backfill",
                value: function(e) {
                    var t;
                    Ki(e) && 0 !== e.length && (Gi.debug("".concat(this._className, ".backfill"), this._report.length, e.length), (t = this._report).unshift.apply(t, Jn(e)))
                }
            }, {
                key: "getLogsNumInMemory",
                value: function() {
                    return this._report.length
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return 0 === this._report.length
                }
            }, {
                key: "_reset",
                value: function() {
                    this._report.length = 0, this._report = []
                }
            }, {
                key: "getLogsInMemory",
                value: function() {
                    var e = this._report.slice();
                    return this._reset(), e
                }
            }]), e
        }(),
        Um = function(e) {
            var t = e.getModule(Ku);
            return {
                SDKType: 10,
                SDKAppID: t.getSDKAppID(),
                SDKVersion: t.getVersion(),
                tinyID: Number(t.getTinyID()),
                userID: t.getUserID(),
                platform: e.getPlatform(),
                instanceID: t.getInstanceID(),
                traceID: Li()
            }
        },
        Fm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                wn(this, n), (o = t.call(this, e))._className = "EventStatModule", o.TAG = "im-ssolog-event", o._reportBody = new Gm, o.MIN_THRESHOLD = 20, o.MAX_THRESHOLD = 100, o.WAITING_TIME = 6e4, o.REPORT_LEVEL = [4, 5, 6], o.REPORT_SDKAPPID_BLACKLIST = [], o.REPORT_TINYID_WHITELIST = [], o._lastReportTime = Date.now();
                var r = o.getInnerEmitterInstance();
                return r.on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, o._onLoginSuccess, $n(o)), r.on(X_.CLOUD_CONFIG_UPDATED, o._onCloudConfigUpdated, $n(o)), o
            }
            return Pn(n, [{
                key: "reportAtOnce",
                value: function() {
                    Gi.debug("".concat(this._className, ".reportAtOnce")), this._report()
                }
            }, {
                key: "_onLoginSuccess",
                value: function() {
                    var e = this,
                        t = this.getModule(Bu),
                        n = t.getItem(this.TAG, !1);
                    !Sc(n) && Hi(n.forEach) && (Gi.log("".concat(this._className, "._onLoginSuccess get ssolog in storage, count:").concat(n.length)), n.forEach((function(t) {
                        e._reportBody.pushIn(t)
                    })), t.removeItem(this.TAG, !1))
                }
            }, {
                key: "_onCloudConfigUpdated",
                value: function() {
                    var e = this.getCloudConfig("evt_rpt_threshold"),
                        t = this.getCloudConfig("evt_rpt_waiting"),
                        n = this.getCloudConfig("evt_rpt_level"),
                        o = this.getCloudConfig("evt_rpt_sdkappid_bl"),
                        r = this.getCloudConfig("evt_rpt_tinyid_wl");
                    Bi(e) || (this.MIN_THRESHOLD = Number(e)), Bi(t) || (this.WAITING_TIME = Number(t)), Bi(n) || (this.REPORT_LEVEL = n.split(",").map((function(e) {
                        return Number(e)
                    }))), Bi(o) || (this.REPORT_SDKAPPID_BLACKLIST = o.split(",").map((function(e) {
                        return Number(e)
                    }))), Bi(r) || (this.REPORT_TINYID_WHITELIST = r.split(","))
                }
            }, {
                key: "pushIn",
                value: function(e) {
                    e instanceof Op && (e.updateTimeStamp(), this._reportBody.pushIn(e), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report())
                }
            }, {
                key: "onCheckTimer",
                value: function() {
                    Date.now() < this._lastReportTime + this.WAITING_TIME || this._reportBody.isEmpty() || this._report()
                }
            }, {
                key: "_filterLogs",
                value: function(e) {
                    var t = this,
                        n = this.getModule(Ku),
                        o = n.getSDKAppID(),
                        r = n.getTinyID();
                    return Mc(this.REPORT_SDKAPPID_BLACKLIST, o) && !yc(this.REPORT_TINYID_WHITELIST, r) ? [] : e.filter((function(e) {
                        return t.REPORT_LEVEL.includes(e.level)
                    }))
                }
            }, {
                key: "_report",
                value: function() {
                    var e = this;
                    if (!this._reportBody.isEmpty()) {
                        var t = this._reportBody.getLogsInMemory(),
                            n = this._filterLogs(t);
                        if (0 !== n.length) {
                            var o = {
                                header: Um(this),
                                event: n
                            };
                            this.request({
                                protocolName: Ql,
                                requestData: Fn({}, o)
                            }).then((function() {
                                e._lastReportTime = Date.now()
                            })).catch((function(n) {
                                Gi.warn("".concat(e._className, ".report failed. networkType:").concat(e.getNetworkType(), " error:"), n), e._reportBody.backfill(t), e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD && e._flushAtOnce()
                            }))
                        } else this._lastReportTime = Date.now()
                    }
                }
            }, {
                key: "_flushAtOnce",
                value: function() {
                    var e = this.getModule(Bu),
                        t = e.getItem(this.TAG, !1),
                        n = this._reportBody.getLogsInMemory();
                    if (Sc(t)) Gi.log("".concat(this._className, "._flushAtOnce count:").concat(n.length)), e.setItem(this.TAG, n, !0, !1);
                    else {
                        var o = n.concat(t);
                        o.length > this.MAX_THRESHOLD && (o = o.slice(0, this.MAX_THRESHOLD)), Gi.log("".concat(this._className, "._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG, o, !0, !1)
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._lastReportTime = 0, this._report(), this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = []
                }
            }]), n
        }(nl),
        qm = "none",
        xm = "online",
        Vm = function() {
            function e(t) {
                wn(this, e), this._moduleManager = t, this._networkType = "", this._className = "NetMonitorModule", this.MAX_WAIT_TIME = 3e3
            }
            return Pn(e, [{
                key: "start",
                value: function() {
                    var e = this;
                    if (Zs) {
                        ti.getNetworkType({
                            success: function(t) {
                                e._networkType = t.networkType, t.networkType === qm ? Gi.warn("".concat(e._className, ".start no network, please check!")) : Gi.info("".concat(e._className, ".start networkType:").concat(t.networkType))
                            }
                        });
                        var t = this._onNetworkStatusChange.bind(this);
                        ti.offNetworkStatusChange && (Qs || Ws ? ti.offNetworkStatusChange(t) : ti.offNetworkStatusChange()), ti.onNetworkStatusChange(t)
                    } else this._networkType = xm
                }
            }, {
                key: "_onNetworkStatusChange",
                value: function(e) {
                    e.isConnected ? (Gi.info("".concat(this._className, "._onNetworkStatusChange previousNetworkType:").concat(this._networkType, " currentNetworkType:").concat(e.networkType)), this._networkType !== e.networkType && this._moduleManager.getModule(Xu).reConnect()) : Gi.warn("".concat(this._className, "._onNetworkStatusChange no network, please check!"));
                    this._networkType = e.networkType
                }
            }, {
                key: "probe",
                value: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        if (Zs) ti.getNetworkType({
                            success: function(n) {
                                e._networkType = n.networkType, n.networkType === qm ? (Gi.warn("".concat(e._className, ".probe no network, please check!")), t([!1, n.networkType])) : (Gi.info("".concat(e._className, ".probe networkType:").concat(n.networkType)), t([!0, n.networkType]))
                            }
                        });
                        else if (window && window.fetch) fetch("".concat(ac(), "//web.sdk.qcloud.com/im/assets/speed.xml?random=").concat(Math.random())).then((function(e) {
                            e.ok ? t([!0, xm]) : t([!1, qm])
                        })).catch((function(e) {
                            t([!1, qm])
                        }));
                        else {
                            var o = new XMLHttpRequest,
                                r = setTimeout((function() {
                                    Gi.warn("".concat(e._className, ".probe fetch timeout. Probably no network, please check!")), o.abort(), e._networkType = qm, t([!1, qm])
                                }), e.MAX_WAIT_TIME);
                            o.onreadystatechange = function() {
                                4 === o.readyState && (clearTimeout(r), 200 === o.status || 304 === o.status ? (this._networkType = xm, t([!0, xm])) : (Gi.warn("".concat(this.className, ".probe fetch status:").concat(o.status, ". Probably no network, please check!")), this._networkType = qm, t([!1, qm])))
                            }, o.open("GET", "".concat(ac(), "//web.sdk.qcloud.com/im/assets/speed.xml?random=").concat(Math.random())), o.send()
                        }
                    }))
                }
            }, {
                key: "getNetworkType",
                value: function() {
                    return this._networkType
                }
            }]), e
        }(),
        Km = t((function(e) {
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function o() {}

            function r(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function a(e, t, o, a, s) {
                if ("function" != typeof o) throw new TypeError("The listener must be a function");
                var i = new r(o, a || e, s),
                    c = n ? n + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], i] : e._events[c].push(i) : (e._events[c] = i, e._eventsCount++), e
            }

            function s(e, t) {
                0 == --e._eventsCount ? e._events = new o : delete e._events[t]
            }

            function i() {
                this._events = new o, this._eventsCount = 0
            }
            Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), i.prototype.eventNames = function() {
                var e, o, r = [];
                if (0 === this._eventsCount) return r;
                for (o in e = this._events) t.call(e, o) && r.push(n ? o.slice(1) : o);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
            }, i.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    o = this._events[t];
                if (!o) return [];
                if (o.fn) return [o.fn];
                for (var r = 0, a = o.length, s = new Array(a); r < a; r++) s[r] = o[r].fn;
                return s
            }, i.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    o = this._events[t];
                return o ? o.fn ? 1 : o.length : 0
            }, i.prototype.emit = function(e, t, o, r, a, s) {
                var i = n ? n + e : e;
                if (!this._events[i]) return !1;
                var c, u, l = this._events[i],
                    d = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, o), !0;
                        case 4:
                            return l.fn.call(l.context, t, o, r), !0;
                        case 5:
                            return l.fn.call(l.context, t, o, r, a), !0;
                        case 6:
                            return l.fn.call(l.context, t, o, r, a, s), !0
                    }
                    for (u = 1, c = new Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
                    l.fn.apply(l.context, c)
                } else {
                    var p, g = l.length;
                    for (u = 0; u < g; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d) {
                        case 1:
                            l[u].fn.call(l[u].context);
                            break;
                        case 2:
                            l[u].fn.call(l[u].context, t);
                            break;
                        case 3:
                            l[u].fn.call(l[u].context, t, o);
                            break;
                        case 4:
                            l[u].fn.call(l[u].context, t, o, r);
                            break;
                        default:
                            if (!c)
                                for (p = 1, c = new Array(d - 1); p < d; p++) c[p - 1] = arguments[p];
                            l[u].fn.apply(l[u].context, c)
                    }
                }
                return !0
            }, i.prototype.on = function(e, t, n) {
                return a(this, e, t, n, !1)
            }, i.prototype.once = function(e, t, n) {
                return a(this, e, t, n, !0)
            }, i.prototype.removeListener = function(e, t, o, r) {
                var a = n ? n + e : e;
                if (!this._events[a]) return this;
                if (!t) return s(this, a), this;
                var i = this._events[a];
                if (i.fn) i.fn !== t || r && !i.once || o && i.context !== o || s(this, a);
                else {
                    for (var c = 0, u = [], l = i.length; c < l; c++)(i[c].fn !== t || r && !i[c].once || o && i[c].context !== o) && u.push(i[c]);
                    u.length ? this._events[a] = 1 === u.length ? u[0] : u : s(this, a)
                }
                return this
            }, i.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new o, this._eventsCount = 0), this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = n, i.EventEmitter = i, e.exports = i
        })),
        Bm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "BigDataChannelModule", o.FILETYPE = {
                    SOUND: 2106,
                    FILE: 2107,
                    VIDEO: 2113
                }, o._bdh_download_server = "grouptalk.c2c.qq.com", o._BDHBizID = 10001, o._authKey = "", o._expireTime = 0, o.getInnerEmitterInstance().on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, o._getAuthKey, $n(o)), o
            }
            return Pn(n, [{
                key: "_getAuthKey",
                value: function() {
                    var e = this;
                    this.request({
                        protocolName: il
                    }).then((function(t) {
                        t.data.authKey && (e._authKey = t.data.authKey, e._expireTime = parseInt(t.data.expireTime))
                    }))
                }
            }, {
                key: "_isFromOlderVersion",
                value: function(e) {
                    return !(!e.content || 2 === e.content.downloadFlag)
                }
            }, {
                key: "parseElements",
                value: function(e, t) {
                    if (!Ki(e) || !t) return [];
                    for (var n = [], o = null, r = 0; r < e.length; r++) o = e[r], this._needParse(o) ? n.push(this._parseElement(o, t)) : n.push(e[r]);
                    return n
                }
            }, {
                key: "_needParse",
                value: function(e) {
                    return !e.cloudCustomData && !(!this._isFromOlderVersion(e) || e.type !== ro.MSG_AUDIO && e.type !== ro.MSG_FILE && e.type !== ro.MSG_VIDEO)
                }
            }, {
                key: "_parseElement",
                value: function(e, t) {
                    switch (e.type) {
                        case ro.MSG_AUDIO:
                            return this._parseAudioElement(e, t);
                        case ro.MSG_FILE:
                            return this._parseFileElement(e, t);
                        case ro.MSG_VIDEO:
                            return this._parseVideoElement(e, t)
                    }
                }
            }, {
                key: "_parseAudioElement",
                value: function(e, t) {
                    return e.content.url = this._genAudioUrl(e.content.uuid, t), e
                }
            }, {
                key: "_parseFileElement",
                value: function(e, t) {
                    return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName), e
                }
            }, {
                key: "_parseVideoElement",
                value: function(e, t) {
                    return e.content.url = this._genVideoUrl(e.content.uuid, t), e
                }
            }, {
                key: "_genAudioUrl",
                value: function(e, t) {
                    if ("" === this._authKey) return Gi.warn("".concat(this._className, "._genAudioUrl no authKey!")), "";
                    var n = this.getModule(Ku).getSDKAppID();
                    return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t, "&ver=0")
                }
            }, {
                key: "_genFileUrl",
                value: function(e, t, n) {
                    if ("" === this._authKey) return Gi.warn("".concat(this._className, "._genFileUrl no authKey!")), "";
                    n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now()));
                    var o = this.getModule(Ku).getSDKAppID();
                    return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(o, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t, "&ver=0&filename=").concat(encodeURIComponent(n))
                }
            }, {
                key: "_genVideoUrl",
                value: function(e, t) {
                    if ("" === this._authKey) return Gi.warn("".concat(this._className, "._genVideoUrl no authKey!")), "";
                    var n = this.getModule(Ku).getSDKAppID();
                    return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t, "&ver=0")
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._authKey = "", this.expireTime = 0
                }
            }]), n
        }(nl),
        jm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "UploadModule", o.TIMUploadPlugin = null, o.timUploadPlugin = null, o.COSSDK = null, o._cosUploadMethod = null, o.expiredTimeLimit = 600, o.appid = 0, o.bucketName = "", o.ciUrl = "", o.directory = "", o.downloadUrl = "", o.uploadUrl = "", o.region = "ap-shanghai", o.cos = null, o.cosOptions = {
                    secretId: "",
                    secretKey: "",
                    sessionToken: "",
                    expiredTime: 0
                }, o.uploadFileType = "", o.duration = 900, o.tryCount = 0, o.getInnerEmitterInstance().on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, o._init, $n(o)), o
            }
            return Pn(n, [{
                key: "_init",
                value: function() {
                    var e = "".concat(this._className, "._init"),
                        t = this.getModule(zu);
                    if (this.TIMUploadPlugin = t.getPlugin("tim-upload-plugin"), this.TIMUploadPlugin) this._initUploaderMethod();
                    else {
                        var n = Zs ? "cos-wx-sdk" : "cos-js-sdk";
                        this.COSSDK = t.getPlugin(n), this.COSSDK ? (this._getAuthorizationKey(), Gi.warn("".concat(e, " v2.9.2起推荐使用 tim-upload-plugin 代替 ").concat(n, "，上传更快更安全。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"))) : Gi.warn("".concat(e, " 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"))
                    }
                }
            }, {
                key: "_getAuthorizationKey",
                value: function() {
                    var e = this,
                        t = new Op(Vp),
                        n = Math.ceil(Date.now() / 1e3);
                    this.request({
                        protocolName: Jl,
                        requestData: {
                            duration: this.expiredTimeLimit
                        }
                    }).then((function(o) {
                        var r = o.data;
                        Gi.log("".concat(e._className, "._getAuthorizationKey ok. data:"), r);
                        var a = r.expiredTime - n;
                        t.setMessage("requestId:".concat(r.requestId, " requestTime:").concat(n, " expiredTime:").concat(r.expiredTime, " diff:").concat(a, "s")).setNetworkType(e.getNetworkType()).end(), !Zs && r.region && (e.region = r.region), e.appid = r.appid, e.bucketName = r.bucketName, e.ciUrl = r.ciUrl, e.directory = r.directory, e.downloadUrl = r.downloadUrl, e.uploadUrl = r.uploadUrl, e.cosOptions = {
                            secretId: r.secretId,
                            secretKey: r.secretKey,
                            sessionToken: r.sessionToken,
                            expiredTime: r.expiredTime
                        }, Gi.log("".concat(e._className, "._getAuthorizationKey ok. region:").concat(e.region, " bucketName:").concat(e.bucketName)), e._initUploaderMethod()
                    })).catch((function(n) {
                        e.probeNetwork().then((function(e) {
                            var o = Wn(e, 2),
                                r = o[0],
                                a = o[1];
                            t.setError(n, r, a).end()
                        })), Gi.warn("".concat(e._className, "._getAuthorizationKey failed. error:"), n)
                    }))
                }
            }, {
                key: "_getCosPreSigUrl",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, "._getCosPreSigUrl"),
                        o = Math.ceil(Date.now() / 1e3),
                        r = new Op(Kp);
                    return this.request({
                        protocolName: Xl,
                        requestData: {
                            fileType: e.fileType,
                            fileName: e.fileName,
                            uploadMethod: e.uploadMethod,
                            duration: e.duration
                        }
                    }).then((function(e) {
                        t.tryCount = 0;
                        var a = e.data || {},
                            s = a.expiredTime - o;
                        return Gi.log("".concat(n, " ok. data:"), a), r.setMessage("requestId:".concat(a.requestId, " expiredTime:").concat(a.expiredTime, " diff:").concat(s, "s")).setNetworkType(t.getNetworkType()).end(), a
                    })).catch((function(o) {
                        return -1 === o.code && (o.code = id.COS_GET_SIG_FAIL), t.probeNetwork().then((function(e) {
                            var t = Wn(e, 2),
                                n = t[0],
                                a = t[1];
                            r.setError(o, n, a).end()
                        })), Gi.warn("".concat(n, " failed. error:"), o), t.tryCount < 1 ? (t.tryCount++, t._getCosPreSigUrl(e)) : (t.tryCount = 0, x_({
                            code: id.COS_GET_SIG_FAIL,
                            message: _d
                        }))
                    }))
                }
            }, {
                key: "_initUploaderMethod",
                value: function() {
                    var e = this;
                    if (this.TIMUploadPlugin) return this.timUploadPlugin = new this.TIMUploadPlugin, void(this._cosUploadMethod = function(t, n) {
                        e.timUploadPlugin.uploadFile(t, n)
                    });
                    this.appid && (this.cos = Zs ? new this.COSSDK({
                        ForcePathStyle: !0,
                        getAuthorization: this._getAuthorization.bind(this)
                    }) : new this.COSSDK({
                        getAuthorization: this._getAuthorization.bind(this)
                    }), this._cosUploadMethod = Zs ? function(t, n) {
                        e.cos.postObject(t, n)
                    } : function(t, n) {
                        e.cos.uploadFiles(t, n)
                    })
                }
            }, {
                key: "onCheckTimer",
                value: function(e) {
                    this.COSSDK && (this.TIMUploadPlugin || this.isLoggedIn() && e % 60 == 0 && Math.ceil(Date.now() / 1e3) >= this.cosOptions.expiredTime - 120 && this._getAuthorizationKey())
                }
            }, {
                key: "_getAuthorization",
                value: function(e, t) {
                    t({
                        TmpSecretId: this.cosOptions.secretId,
                        TmpSecretKey: this.cosOptions.secretKey,
                        XCosSecurityToken: this.cosOptions.sessionToken,
                        ExpiredTime: this.cosOptions.expiredTime
                    })
                }
            }, {
                key: "upload",
                value: function(e) {
                    if (!0 === e.getRelayFlag()) return Promise.resolve();
                    var t = this.getModule(tl);
                    switch (e.type) {
                        case ro.MSG_IMAGE:
                            return t.addTotalCount(Tp), this._uploadImage(e);
                        case ro.MSG_FILE:
                            return t.addTotalCount(Tp), this._uploadFile(e);
                        case ro.MSG_AUDIO:
                            return t.addTotalCount(Tp), this._uploadAudio(e);
                        case ro.MSG_VIDEO:
                            return t.addTotalCount(Tp), this._uploadVideo(e);
                        default:
                            return Promise.resolve()
                    }
                }
            }, {
                key: "_uploadImage",
                value: function(e) {
                    var t = this.getModule(Pu),
                        n = e.getElements()[0],
                        o = t.getMessageOptionByID(e.ID);
                    return this.doUploadImage({
                        file: o.payload.file,
                        to: o.to,
                        onProgress: function(e) {
                            if (n.updatePercent(e), Hi(o.onProgress)) try {
                                o.onProgress(e)
                            } catch (t) {
                                return x_({
                                    code: id.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: Id
                                })
                            }
                        }
                    }).then((function(t) {
                        var o = t.location,
                            r = t.fileType,
                            a = t.fileSize,
                            s = t.width,
                            i = t.height,
                            c = sc(o);
                        n.updateImageFormat(r);
                        var u = fc({
                                originUrl: c,
                                originWidth: s,
                                originHeight: i,
                                min: 198
                            }),
                            l = fc({
                                originUrl: c,
                                originWidth: s,
                                originHeight: i,
                                min: 720
                            });
                        return n.updateImageInfoArray([{
                            size: a,
                            url: c,
                            width: s,
                            height: i
                        }, Fn({}, l), Fn({}, u)]), e
                    }))
                }
            }, {
                key: "_uploadFile",
                value: function(e) {
                    var t = this.getModule(Pu),
                        n = e.getElements()[0],
                        o = t.getMessageOptionByID(e.ID);
                    return this.doUploadFile({
                        file: o.payload.file,
                        to: o.to,
                        onProgress: function(e) {
                            if (n.updatePercent(e), Hi(o.onProgress)) try {
                                o.onProgress(e)
                            } catch (t) {
                                return x_({
                                    code: id.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: Id
                                })
                            }
                        }
                    }).then((function(t) {
                        var o = t.location,
                            r = sc(o);
                        return n.updateFileUrl(r), e
                    }))
                }
            }, {
                key: "_uploadAudio",
                value: function(e) {
                    var t = this.getModule(Pu),
                        n = e.getElements()[0],
                        o = t.getMessageOptionByID(e.ID);
                    return this.doUploadAudio({
                        file: o.payload.file,
                        to: o.to,
                        onProgress: function(e) {
                            if (n.updatePercent(e), Hi(o.onProgress)) try {
                                o.onProgress(e)
                            } catch (t) {
                                return x_({
                                    code: id.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: Id
                                })
                            }
                        }
                    }).then((function(t) {
                        var o = t.location,
                            r = sc(o);
                        return n.updateAudioUrl(r), e
                    }))
                }
            }, {
                key: "_uploadVideo",
                value: function(e) {
                    var t = this.getModule(Pu),
                        n = e.getElements()[0],
                        o = t.getMessageOptionByID(e.ID);
                    return this.doUploadVideo({
                        file: o.payload.file,
                        to: o.to,
                        onProgress: function(e) {
                            if (n.updatePercent(e), Hi(o.onProgress)) try {
                                o.onProgress(e)
                            } catch (t) {
                                return x_({
                                    code: id.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: Id
                                })
                            }
                        }
                    }).then((function(t) {
                        var o = sc(t.location);
                        return n.updateVideoUrl(o), e
                    }))
                }
            }, {
                key: "doUploadImage",
                value: function(e) {
                    if (!e.file) return x_({
                        code: id.MESSAGE_IMAGE_SELECT_FILE_FIRST,
                        message: Ed
                    });
                    var t = this._checkImageType(e.file);
                    if (!0 !== t) return t;
                    var n = this._checkImageSize(e.file);
                    if (!0 !== n) return n;
                    var o = null;
                    return this._setUploadFileType(tm), this.uploadByCOS(e).then((function(e) {
                        return o = e, t = "https://".concat(e.location), Zs ? new Promise((function(e, n) {
                            ti.getImageInfo({
                                src: t,
                                success: function(t) {
                                    e({
                                        width: t.width,
                                        height: t.height
                                    })
                                },
                                fail: function() {
                                    e({
                                        width: 0,
                                        height: 0
                                    })
                                }
                            })
                        })) : gi && 9 === hi ? Promise.resolve({
                            width: 0,
                            height: 0
                        }) : new Promise((function(e, n) {
                            var o = new Image;
                            o.onload = function() {
                                e({
                                    width: this.width,
                                    height: this.height
                                }), o = null
                            }, o.onerror = function() {
                                e({
                                    width: 0,
                                    height: 0
                                }), o = null
                            }, o.src = t
                        }));
                        var t
                    })).then((function(e) {
                        return o.width = e.width, o.height = e.height, Promise.resolve(o)
                    }))
                }
            }, {
                key: "_checkImageType",
                value: function(e) {
                    var t = "";
                    return t = Zs ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1), Z_.indexOf(t.toLowerCase()) >= 0 || x_({
                        code: id.MESSAGE_IMAGE_TYPES_LIMIT,
                        message: Dd
                    })
                }
            }, {
                key: "_checkImageSize",
                value: function(e) {
                    var t = 0;
                    return 0 === (t = Zs ? e.size : e.files[0].size) ? x_({
                        code: id.MESSAGE_FILE_IS_EMPTY,
                        message: "".concat(yd)
                    }) : t < 20971520 || x_({
                        code: id.MESSAGE_IMAGE_SIZE_LIMIT,
                        message: "".concat(kd)
                    })
                }
            }, {
                key: "doUploadFile",
                value: function(e) {
                    var t = null;
                    return e.file ? e.file.files[0].size > 104857600 ? x_(t = {
                        code: id.MESSAGE_FILE_SIZE_LIMIT,
                        message: bd
                    }) : 0 === e.file.files[0].size ? (t = {
                        code: id.MESSAGE_FILE_IS_EMPTY,
                        message: "".concat(yd)
                    }, x_(t)) : (this._setUploadFileType(rm), this.uploadByCOS(e)) : x_(t = {
                        code: id.MESSAGE_FILE_SELECT_FILE_FIRST,
                        message: wd
                    })
                }
            }, {
                key: "doUploadVideo",
                value: function(e) {
                    return e.file.videoFile.size > 104857600 ? x_({
                        code: id.MESSAGE_VIDEO_SIZE_LIMIT,
                        message: "".concat(Od)
                    }) : 0 === e.file.videoFile.size ? x_({
                        code: id.MESSAGE_FILE_IS_EMPTY,
                        message: "".concat(yd)
                    }) : -1 === em.indexOf(e.file.videoFile.type) ? x_({
                        code: id.MESSAGE_VIDEO_TYPES_LIMIT,
                        message: "".concat(Ld)
                    }) : (this._setUploadFileType(nm), Zs ? this.handleVideoUpload({
                        file: e.file.videoFile,
                        onProgress: e.onProgress
                    }) : ei ? this.handleVideoUpload(e) : void 0)
                }
            }, {
                key: "handleVideoUpload",
                value: function(e) {
                    var t = this;
                    return new Promise((function(n, o) {
                        t.uploadByCOS(e).then((function(e) {
                            n(e)
                        })).catch((function() {
                            t.uploadByCOS(e).then((function(e) {
                                n(e)
                            })).catch((function() {
                                o(new G_({
                                    code: id.MESSAGE_VIDEO_UPLOAD_FAIL,
                                    message: Ad
                                }))
                            }))
                        }))
                    }))
                }
            }, {
                key: "doUploadAudio",
                value: function(e) {
                    return e.file ? e.file.size > 20971520 ? x_(new G_({
                        code: id.MESSAGE_AUDIO_SIZE_LIMIT,
                        message: "".concat(Nd)
                    })) : 0 === e.file.size ? x_(new G_({
                        code: id.MESSAGE_FILE_IS_EMPTY,
                        message: "".concat(yd)
                    })) : (this._setUploadFileType(om), this.uploadByCOS(e)) : x_(new G_({
                        code: id.MESSAGE_AUDIO_UPLOAD_FAIL,
                        message: Cd
                    }))
                }
            }, {
                key: "uploadByCOS",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, ".uploadByCOS");
                    if (!Hi(this._cosUploadMethod)) return Gi.warn("".concat(n, " 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin")), x_({
                        code: id.COS_UNDETECTED,
                        message: fd
                    });
                    if (this.timUploadPlugin) return this._uploadWithPreSigUrl(e);
                    var o = new Op(Bp),
                        r = Date.now(),
                        a = Zs ? e.file : e.file.files[0];
                    return new Promise((function(s, i) {
                        var c = Zs ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e),
                            u = t;
                        t._cosUploadMethod(c, (function(e, c) {
                            var l = Object.create(null);
                            if (c) {
                                if (e || Ki(c.files) && c.files[0].error) {
                                    var d = new G_({
                                        code: id.MESSAGE_FILE_UPLOAD_FAIL,
                                        message: Rd
                                    });
                                    return o.setError(d, !0, t.getNetworkType()).end(), Gi.log("".concat(n, " failed. error:"), c.files[0].error), 403 === c.files[0].error.statusCode && (Gi.warn("".concat(n, " failed. cos AccessKeyId was invalid, regain auth key!")), t._getAuthorizationKey()), void i(d)
                                }
                                l.fileName = a.name, l.fileSize = a.size, l.fileType = a.type.slice(a.type.indexOf("/") + 1).toLowerCase(), l.location = Zs ? c.Location : c.files[0].data.Location;
                                var p = Date.now() - r,
                                    g = u._formatFileSize(a.size),
                                    h = u._formatSpeed(1e3 * a.size / p),
                                    f = "size:".concat(g, " time:").concat(p, "ms speed:").concat(h);
                                Gi.log("".concat(n, " success. name:").concat(a.name, " ").concat(f)), s(l);
                                var _ = t.getModule(tl);
                                return _.addCost(Tp, p), _.addFileSize(Tp, a.size), void o.setNetworkType(t.getNetworkType()).setMessage(f).end()
                            }
                            var m = new G_({
                                code: id.MESSAGE_FILE_UPLOAD_FAIL,
                                message: Rd
                            });
                            o.setError(m, !0, u.getNetworkType()).end(), Gi.warn("".concat(n, " failed. error:"), e), 403 === e.statusCode && (Gi.warn("".concat(n, " failed. cos AccessKeyId was invalid, regain auth key!")), t._getAuthorizationKey()), i(m)
                        }))
                    }))
                }
            }, {
                key: "_uploadWithPreSigUrl",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, "._uploadWithPreSigUrl"),
                        o = Zs ? e.file : e.file.files[0];
                    return this._createCosOptionsPreSigUrl(e).then((function(e) {
                        return new Promise((function(r, a) {
                            var s = new Op(Bp);
                            Gi.time(_p), t._cosUploadMethod(e, (function(e, i) {
                                var c = Object.create(null);
                                if (e || 403 === i.statusCode) {
                                    var u = new G_({
                                        code: id.MESSAGE_FILE_UPLOAD_FAIL,
                                        message: Rd
                                    });
                                    return s.setError(u, !0, t.getNetworkType()).end(), Gi.log("".concat(n, " failed, error:"), e), void a(u)
                                }
                                var l = i.data.location || "";
                                0 !== l.indexOf("https://") && 0 !== l.indexOf("http://") || (l = l.split("//")[1]), c.fileName = o.name, c.fileSize = o.size, c.fileType = o.type.slice(o.type.indexOf("/") + 1).toLowerCase(), c.location = l;
                                var d = Gi.timeEnd(_p),
                                    p = t._formatFileSize(o.size),
                                    g = t._formatSpeed(1e3 * o.size / d),
                                    h = "size:".concat(p, ",time:").concat(d, "ms,speed:").concat(g);
                                Gi.log("".concat(n, " success name:").concat(o.name, ",").concat(h)), s.setNetworkType(t.getNetworkType()).setMessage(h).end();
                                var f = t.getModule(tl);
                                f.addCost(Tp, d), f.addFileSize(Tp, o.size), r(c)
                            }))
                        }))
                    }))
                }
            }, {
                key: "_formatFileSize",
                value: function(e) {
                    return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math.floor(e / 1048576) + "MB"
                }
            }, {
                key: "_formatSpeed",
                value: function(e) {
                    return e <= 1048576 ? vc(e / 1024, 1) + "KB/s" : vc(e / 1048576, 1) + "MB/s"
                }
            }, {
                key: "_createCosOptionsWeb",
                value: function(e) {
                    var t = this.getMyUserID(),
                        n = this._genFileName(t, e.to, e.file.files[0].name);
                    return {
                        files: [{
                            Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                            Region: this.region,
                            Key: "".concat(this.directory, "/").concat(n),
                            Body: e.file.files[0]
                        }],
                        SliceSize: 1048576,
                        onProgress: function(t) {
                            if ("function" == typeof e.onProgress) try {
                                e.onProgress(t.percent)
                            } catch (n) {
                                Gi.warn("onProgress callback error:", n)
                            }
                        },
                        onFileFinish: function(e, t, n) {}
                    }
                }
            }, {
                key: "_createCosOptionsWXMiniApp",
                value: function(e) {
                    var t = this.getMyUserID(),
                        n = this._genFileName(t, e.to, e.file.name),
                        o = e.file.url;
                    return {
                        Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                        Region: this.region,
                        Key: "".concat(this.directory, "/").concat(n),
                        FilePath: o,
                        onProgress: function(t) {
                            if (Gi.log(JSON.stringify(t)), "function" == typeof e.onProgress) try {
                                e.onProgress(t.percent)
                            } catch (n) {
                                Gi.warn("onProgress callback error:", n)
                            }
                        }
                    }
                }
            }, {
                key: "_createCosOptionsPreSigUrl",
                value: function(e) {
                    var t = this,
                        n = "",
                        o = "",
                        r = 0;
                    return Zs ? (n = this._genFileName(e.file.name), o = e.file.url, r = 1) : (n = this._genFileName("".concat(ec(999999))), o = e.file.files[0], r = 0), this._getCosPreSigUrl({
                        fileType: this.uploadFileType,
                        fileName: n,
                        uploadMethod: r,
                        duration: this.duration
                    }).then((function(r) {
                        var a = r.uploadUrl,
                            s = r.downloadUrl;
                        return {
                            url: a,
                            fileType: t.uploadFileType,
                            fileName: n,
                            resources: o,
                            downloadUrl: s,
                            onProgress: function(t) {
                                if ("function" == typeof e.onProgress) try {
                                    e.onProgress(t.percent)
                                } catch (n) {
                                    Gi.warn("onProgress callback error:", n), Gi.error(n)
                                }
                            }
                        }
                    }))
                }
            }, {
                key: "_genFileName",
                value: function(e) {
                    return "".concat(gc(), "-").concat(e)
                }
            }, {
                key: "_setUploadFileType",
                value: function(e) {
                    this.uploadFileType = e
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset"))
                }
            }]), n
        }(nl),
        Hm = function() {
            function e(t) {
                wn(this, e), this._className = "MergerMessageHandler", this._messageModule = t
            }
            return Pn(e, [{
                key: "uploadMergerMessage",
                value: function(e, t) {
                    var n = this;
                    Gi.debug("".concat(this._className, ".uploadMergerMessage message:"), e, "messageBytes:".concat(t));
                    var o = e.payload.messageList,
                        r = o.length,
                        a = new Op(Zp);
                    return this._messageModule.request({
                        protocolName: od,
                        requestData: {
                            messageList: o
                        }
                    }).then((function(e) {
                        Gi.debug("".concat(n._className, ".uploadMergerMessage ok. response:"), e.data);
                        var o = e.data,
                            s = o.pbDownloadKey,
                            i = o.downloadKey,
                            c = {
                                pbDownloadKey: s,
                                downloadKey: i,
                                messageNumber: r
                            };
                        return a.setNetworkType(n._messageModule.getNetworkType()).setMessage("".concat(r, "-").concat(t, "-").concat(i)).end(), c
                    })).catch((function(e) {
                        throw Gi.warn("".concat(n._className, ".uploadMergerMessage failed. error:"), e), n._messageModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            a.setError(e, o, r).end()
                        })), e
                    }))
                }
            }, {
                key: "downloadMergerMessage",
                value: function(e) {
                    var t = this;
                    Gi.debug("".concat(this._className, ".downloadMergerMessage message:"), e);
                    var n = e.payload.downloadKey,
                        o = new Op(eg);
                    return o.setMessage("downloadKey:".concat(n)), this._messageModule.request({
                        protocolName: rd,
                        requestData: {
                            downloadKey: n
                        }
                    }).then((function(n) {
                        if (Gi.debug("".concat(t._className, ".downloadMergerMessage ok. response:"), n.data), Hi(e.clearElement)) {
                            var r = e.payload,
                                a = (r.downloadKey, r.pbDownloadKey, r.messageList, Hn(r, ["downloadKey", "pbDownloadKey", "messageList"]));
                            e.clearElement(), e.setElement({
                                type: e.type,
                                content: Fn({
                                    messageList: n.data.messageList
                                }, a)
                            })
                        } else {
                            var s = [];
                            n.data.messageList.forEach((function(e) {
                                if (!Sc(e)) {
                                    var t = new k_(e);
                                    s.push(t)
                                }
                            })), e.payload.messageList = s, e.payload.downloadKey = "", e.payload.pbDownloadKey = ""
                        }
                        return o.setNetworkType(t._messageModule.getNetworkType()).end(), e
                    })).catch((function(e) {
                        throw Gi.warn("".concat(t._className, ".downloadMergerMessage failed. key:").concat(n, " error:"), e), t._messageModule.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                r = n[0],
                                a = n[1];
                            o.setError(e, r, a).end()
                        })), e
                    }))
                }
            }, {
                key: "createMergerMessagePack",
                value: function(e, t, n) {
                    return e.conversationType === ro.CONV_C2C ? this._createC2CMergerMessagePack(e, t, n) : this._createGroupMergerMessagePack(e, t, n)
                }
            }, {
                key: "_createC2CMergerMessagePack",
                value: function(e, t, n) {
                    var o = null;
                    t && (t.offlinePushInfo && (o = t.offlinePushInfo), !0 === t.onlineUserOnly && (o ? o.disablePush = !0 : o = {
                        disablePush: !0
                    }));
                    var r = "";
                    qi(e.cloudCustomData) && e.cloudCustomData.length > 0 && (r = e.cloudCustomData);
                    var a = n.pbDownloadKey,
                        s = n.downloadKey,
                        i = n.messageNumber,
                        c = e.payload,
                        u = c.title,
                        l = c.abstractList,
                        d = c.compatibleText,
                        p = this._messageModule.getModule(Uu);
                    return {
                        protocolName: cl,
                        tjgID: this._messageModule.generateTjgID(e),
                        requestData: {
                            fromAccount: this._messageModule.getMyUserID(),
                            toAccount: e.to,
                            msgBody: [{
                                msgType: e.type,
                                msgContent: {
                                    pbDownloadKey: a,
                                    downloadKey: s,
                                    title: u,
                                    abstractList: l,
                                    compatibleText: d,
                                    messageNumber: i
                                }
                            }],
                            cloudCustomData: r,
                            msgSeq: e.sequence,
                            msgRandom: e.random,
                            msgLifeTime: p && p.isOnlineMessage(e, t) ? 0 : void 0,
                            offlinePushInfo: o ? {
                                pushFlag: !0 === o.disablePush ? 1 : 0,
                                title: o.title || "",
                                desc: o.description || "",
                                ext: o.extension || "",
                                apnsInfo: {
                                    badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0
                                },
                                androidInfo: {
                                    OPPOChannelID: o.androidOPPOChannelID || ""
                                }
                            } : void 0
                        }
                    }
                }
            }, {
                key: "_createGroupMergerMessagePack",
                value: function(e, t, n) {
                    var o = null;
                    t && t.offlinePushInfo && (o = t.offlinePushInfo);
                    var r = "";
                    qi(e.cloudCustomData) && e.cloudCustomData.length > 0 && (r = e.cloudCustomData);
                    var a = n.pbDownloadKey,
                        s = n.downloadKey,
                        i = n.messageNumber,
                        c = e.payload,
                        u = c.title,
                        l = c.abstractList,
                        d = c.compatibleText,
                        p = this._messageModule.getModule(Fu);
                    return {
                        protocolName: ul,
                        tjgID: this._messageModule.generateTjgID(e),
                        requestData: {
                            fromAccount: this._messageModule.getMyUserID(),
                            groupID: e.to,
                            msgBody: [{
                                msgType: e.type,
                                msgContent: {
                                    pbDownloadKey: a,
                                    downloadKey: s,
                                    title: u,
                                    abstractList: l,
                                    compatibleText: d,
                                    messageNumber: i
                                }
                            }],
                            random: e.random,
                            priority: e.priority,
                            clientSequence: e.clientSequence,
                            groupAtInfo: void 0,
                            cloudCustomData: r,
                            onlineOnlyFlag: p && p.isOnlineMessage(e, t) ? 1 : 0,
                            offlinePushInfo: o ? {
                                pushFlag: !0 === o.disablePush ? 1 : 0,
                                title: o.title || "",
                                desc: o.description || "",
                                ext: o.extension || "",
                                apnsInfo: {
                                    badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0
                                },
                                androidInfo: {
                                    OPPOChannelID: o.androidOPPOChannelID || ""
                                }
                            } : void 0
                        }
                    }
                }
            }]), e
        }(),
        $m = {
            ERR_SVR_COMM_SENSITIVE_TEXT: 80001,
            ERR_SVR_COMM_BODY_SIZE_LIMIT: 80002,
            ERR_SVR_MSG_PKG_PARSE_FAILED: 20001,
            ERR_SVR_MSG_INTERNAL_AUTH_FAILED: 20002,
            ERR_SVR_MSG_INVALID_ID: 20003,
            ERR_SVR_MSG_PUSH_DENY: 20006,
            ERR_SVR_MSG_IN_PEER_BLACKLIST: 20007,
            ERR_SVR_MSG_BOTH_NOT_FRIEND: 20009,
            ERR_SVR_MSG_NOT_PEER_FRIEND: 20010,
            ERR_SVR_MSG_NOT_SELF_FRIEND: 20011,
            ERR_SVR_MSG_SHUTUP_DENY: 20012,
            ERR_SVR_GROUP_INVALID_PARAMETERS: 10004,
            ERR_SVR_GROUP_PERMISSION_DENY: 10007,
            ERR_SVR_GROUP_NOT_FOUND: 10010,
            ERR_SVR_GROUP_INVALID_GROUPID: 10015,
            ERR_SVR_GROUP_REJECT_FROM_THIRDPARTY: 10016,
            ERR_SVR_GROUP_SHUTUP_DENY: 10017,
            MESSAGE_SEND_FAIL: 2100
        },
        Ym = [id.MESSAGE_ONPROGRESS_FUNCTION_ERROR, id.MESSAGE_IMAGE_SELECT_FILE_FIRST, id.MESSAGE_IMAGE_TYPES_LIMIT, id.MESSAGE_FILE_IS_EMPTY, id.MESSAGE_IMAGE_SIZE_LIMIT, id.MESSAGE_FILE_SELECT_FILE_FIRST, id.MESSAGE_FILE_SIZE_LIMIT, id.MESSAGE_VIDEO_SIZE_LIMIT, id.MESSAGE_VIDEO_TYPES_LIMIT, id.MESSAGE_AUDIO_UPLOAD_FAIL, id.MESSAGE_AUDIO_SIZE_LIMIT, id.COS_UNDETECTED];
    var zm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "MessageModule", o._messageOptionsMap = new Map, o._mergerMessageHandler = new Hm($n(o)), o
            }
            return Pn(n, [{
                key: "createTextMessage",
                value: function(e) {
                    var t = this.getMyUserID();
                    e.currentUser = t;
                    var n = new A_(e),
                        o = "string" == typeof e.payload ? e.payload : e.payload.text,
                        r = new Jg({
                            text: o
                        }),
                        a = this._getNickAndAvatarByUserID(t);
                    return n.setElement(r), n.setNickAndAvatar(a), n
                }
            }, {
                key: "createImageMessage",
                value: function(e) {
                    var t = this.getMyUserID();
                    e.currentUser = t;
                    var n = new A_(e);
                    if (Zs) {
                        var o = e.payload.file;
                        if (Ui(o)) return void Gi.warn("小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象");
                        var r = o.tempFilePaths[0],
                            a = {
                                url: r,
                                name: r.slice(r.lastIndexOf("/") + 1),
                                size: o.tempFiles && o.tempFiles[0].size || 1,
                                type: r.slice(r.lastIndexOf(".") + 1).toLowerCase()
                            };
                        e.payload.file = a
                    } else if (ei)
                        if (Ui(e.payload.file)) {
                            var s = e.payload.file;
                            e.payload.file = {
                                files: [s]
                            }
                        } else if (Vi(e.payload.file) && "undefined" != typeof uni) {
                            var i = e.payload.file.tempFiles[0];
                            e.payload.file = {
                                files: [i]
                            }
                        }
                    var c = new u_({
                            imageFormat: n_.IMAGE_FORMAT.UNKNOWN,
                            uuid: this._generateUUID(),
                            file: e.payload.file
                        }),
                        u = this._getNickAndAvatarByUserID(t);
                    return n.setElement(c), n.setNickAndAvatar(u), this._messageOptionsMap.set(n.ID, e), n
                }
            }, {
                key: "createAudioMessage",
                value: function(e) {
                    if (Zs) {
                        var t = e.payload.file;
                        if (Zs) {
                            var n = {
                                url: t.tempFilePath,
                                name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1),
                                size: t.fileSize,
                                second: parseInt(t.duration) / 1e3,
                                type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                            };
                            e.payload.file = n
                        }
                        var o = this.getMyUserID();
                        e.currentUser = o;
                        var r = new A_(e),
                            a = new d_({
                                second: Math.floor(t.duration / 1e3),
                                size: t.fileSize,
                                url: t.tempFilePath,
                                uuid: this._generateUUID()
                            }),
                            s = this._getNickAndAvatarByUserID(o);
                        return r.setElement(a), r.setNickAndAvatar(s), this._messageOptionsMap.set(r.ID, e), r
                    }
                    Gi.warn("createAudioMessage 目前只支持小程序环境下发语音消息")
                }
            }, {
                key: "createVideoMessage",
                value: function(e) {
                    var t = this.getMyUserID();
                    e.currentUser = t, e.payload.file.thumbUrl = "https://web.sdk.qcloud.com/im/assets/images/transparent.png", e.payload.file.thumbSize = 1668;
                    var n = {};
                    if (Zs) {
                        if (Xs) return void Gi.warn("createVideoMessage 不支持在支付宝小程序环境下使用");
                        if (Ui(e.payload.file)) return void Gi.warn("小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象");
                        var o = e.payload.file;
                        n.url = o.tempFilePath, n.name = o.tempFilePath.slice(o.tempFilePath.lastIndexOf("/") + 1), n.size = o.size, n.second = o.duration, n.type = o.tempFilePath.slice(o.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                    } else if (ei) {
                        if (Ui(e.payload.file)) {
                            var r = e.payload.file;
                            e.payload.file.files = [r]
                        } else if (Vi(e.payload.file) && "undefined" != typeof uni) {
                            var a = e.payload.file.tempFile;
                            e.payload.file.files = [a]
                        }
                        var s = e.payload.file;
                        n.url = window.URL.createObjectURL(s.files[0]), n.name = s.files[0].name, n.size = s.files[0].size, n.second = s.files[0].duration || 0, n.type = s.files[0].type.split("/")[1]
                    }
                    e.payload.file.videoFile = n;
                    var i = new A_(e),
                        c = new E_({
                            videoFormat: n.type,
                            videoSecond: vc(n.second, 0),
                            videoSize: n.size,
                            remoteVideoUrl: "",
                            videoUrl: n.url,
                            videoUUID: this._generateUUID(),
                            thumbUUID: this._generateUUID(),
                            thumbWidth: e.payload.file.width || 200,
                            thumbHeight: e.payload.file.height || 200,
                            thumbUrl: e.payload.file.thumbUrl,
                            thumbSize: e.payload.file.thumbSize,
                            thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf(".") + 1).toLowerCase()
                        }),
                        u = this._getNickAndAvatarByUserID(t);
                    return i.setElement(c), i.setNickAndAvatar(u), this._messageOptionsMap.set(i.ID, e), i
                }
            }, {
                key: "createCustomMessage",
                value: function(e) {
                    var t = this.getMyUserID();
                    e.currentUser = t;
                    var n = new A_(e),
                        o = new T_({
                            data: e.payload.data,
                            description: e.payload.description,
                            extension: e.payload.extension
                        }),
                        r = this._getNickAndAvatarByUserID(t);
                    return n.setElement(o), n.setNickAndAvatar(r), n
                }
            }, {
                key: "createFaceMessage",
                value: function(e) {
                    var t = this.getMyUserID();
                    e.currentUser = t;
                    var n = new A_(e),
                        o = new l_(e.payload),
                        r = this._getNickAndAvatarByUserID(t);
                    return n.setElement(o), n.setNickAndAvatar(r), n
                }
            }, {
                key: "createMergerMessage",
                value: function(e) {
                    var t = this.getMyUserID();
                    e.currentUser = t;
                    var n = this._getNickAndAvatarByUserID(t),
                        o = new A_(e),
                        r = new C_(e.payload);
                    return o.setElement(r), o.setNickAndAvatar(n), o.setRelayFlag(!0), o
                }
            }, {
                key: "createForwardMessage",
                value: function(e) {
                    var t = e.to,
                        n = e.conversationType,
                        o = e.priority,
                        r = e.payload,
                        a = this.getMyUserID(),
                        s = this._getNickAndAvatarByUserID(a);
                    if (r.type === ro.MSG_GRP_TIP) return x_(new G_({
                        code: id.MESSAGE_FORWARD_TYPE_INVALID,
                        message: qd
                    }));
                    var i = {
                            to: t,
                            conversationType: n,
                            conversationID: "".concat(n).concat(t),
                            priority: o,
                            isPlaceMessage: 0,
                            status: _u.UNSEND,
                            currentUser: a,
                            cloudCustomData: e.cloudCustomData || r.cloudCustomData || ""
                        },
                        c = new A_(i);
                    return c.setElement(r.getElements()[0]), c.setNickAndAvatar(s), c.setRelayFlag(!0), c
                }
            }, {
                key: "downloadMergerMessage",
                value: function(e) {
                    return this._mergerMessageHandler.downloadMergerMessage(e)
                }
            }, {
                key: "createFileMessage",
                value: function(e) {
                    if (!Zs) {
                        if (ei)
                            if (Ui(e.payload.file)) {
                                var t = e.payload.file;
                                e.payload.file = {
                                    files: [t]
                                }
                            } else if (Vi(e.payload.file) && "undefined" != typeof uni) {
                                var n = e.payload.file.tempFiles[0];
                                e.payload.file = {
                                    files: [n]
                                }
                            }
                        var o = this.getMyUserID();
                        e.currentUser = o;
                        var r = new A_(e),
                            a = new S_({
                                uuid: this._generateUUID(),
                                file: e.payload.file
                            }),
                            s = this._getNickAndAvatarByUserID(o);
                        return r.setElement(a), r.setNickAndAvatar(s), this._messageOptionsMap.set(r.ID, e), r
                    }
                    Gi.warn("小程序目前不支持选择文件， createFileMessage 接口不可用！")
                }
            }, {
                key: "_onCannotFindModule",
                value: function() {
                    return x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "sendMessageInstance",
                value: function(e, t) {
                    var n, o = this,
                        r = null;
                    switch (e.conversationType) {
                        case ro.CONV_C2C:
                            if (!(r = this.getModule(Uu))) return this._onCannotFindModule();
                            break;
                        case ro.CONV_GROUP:
                            if (!(r = this.getModule(Fu))) return this._onCannotFindModule();
                            break;
                        default:
                            return x_({
                                code: id.MESSAGE_SEND_INVALID_CONVERSATION_TYPE,
                                message: Md
                            })
                    }
                    var a = this.getModule(Yu),
                        s = this.getModule(Fu);
                    return a.upload(e).then((function() {
                        o._getSendMessageSpecifiedKey(e) === Sp && o.getModule(tl).addSuccessCount(Tp);
                        return s.guardForAVChatRoom(e).then((function() {
                            if (!e.isSendable()) return x_({
                                code: id.MESSAGE_FILE_URL_IS_EMPTY,
                                message: Pd
                            });
                            o._addSendMessageTotalCount(e), n = Date.now();
                            var a = function(e) {
                                var t = "utf-8";
                                ei && document && (t = document.charset.toLowerCase());
                                var n, o, r = 0;
                                if (o = e.length, "utf-8" === t || "utf8" === t)
                                    for (var a = 0; a < o; a++)(n = e.codePointAt(a)) <= 127 ? r += 1 : n <= 2047 ? r += 2 : n <= 65535 ? r += 3 : (r += 4, a++);
                                else if ("utf-16" === t || "utf16" === t)
                                    for (var s = 0; s < o; s++)(n = e.codePointAt(s)) <= 65535 ? r += 2 : (r += 4, s++);
                                else r = e.replace(/[^\x00-\xff]/g, "aa").length;
                                return r
                            }(JSON.stringify(e));
                            return e.type === ro.MSG_MERGER && a > 7e3 ? o._mergerMessageHandler.uploadMergerMessage(e, a).then((function(n) {
                                var r = o._mergerMessageHandler.createMergerMessagePack(e, t, n);
                                return o.request(r)
                            })) : (o.getModule(Vu).setMessageRandom(e), e.conversationType === ro.CONV_C2C || e.conversationType === ro.CONV_GROUP ? r.sendMessage(e, t) : void 0)
                        })).then((function(a) {
                            var s = a.data,
                                i = s.time,
                                c = s.sequence;
                            o._addSendMessageSuccessCount(e, n), o._messageOptionsMap.delete(e.ID);
                            var u = o.getModule(Vu);
                            e.status = _u.SUCCESS, e.time = i;
                            var l = !1;
                            if (e.conversationType === ro.CONV_GROUP) e.sequence = c, e.generateMessageID(o.getMyUserID());
                            else if (e.conversationType === ro.CONV_C2C) {
                                var d = u.getLatestMessageSentByMe(e.conversationID);
                                if (d) {
                                    var p = d.nick,
                                        g = d.avatar;
                                    p === e.nick && g === e.avatar || (l = !0)
                                }
                            }
                            return u.appendToMessageList(e), l && u.modifyMessageSentByMe({
                                conversationID: e.conversationID,
                                latestNick: e.nick,
                                latestAvatar: e.avatar
                            }), r.isOnlineMessage(e, t) ? e.setOnlineOnlyFlag(!0) : u.onMessageSent({
                                conversationOptionsList: [{
                                    conversationID: e.conversationID,
                                    unreadCount: 0,
                                    type: e.conversationType,
                                    subType: e.conversationSubType,
                                    lastMessage: e
                                }]
                            }), e.getRelayFlag() || "TIMImageElem" !== e.type || _c(e.payload.imageInfoArray), O_({
                                message: e
                            })
                        }))
                    })).catch((function(t) {
                        return o._onSendMessageFailed(e, t)
                    }))
                }
            }, {
                key: "_onSendMessageFailed",
                value: function(e, t) {
                    e.status = _u.FAIL, this.getModule(Vu).deleteMessageRandom(e), this._addSendMessageFailCountOnUser(e, t);
                    var n = new Op(jp);
                    return n.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:").concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), this.probeNetwork().then((function(e) {
                        var o = Wn(e, 2),
                            r = o[0],
                            a = o[1];
                        n.setError(t, r, a).end()
                    })), Gi.error("".concat(this._className, "._onSendMessageFailed error:"), t), x_(new G_({
                        code: t && t.code ? t.code : id.MESSAGE_SEND_FAIL,
                        message: t && t.message ? t.message : md,
                        data: {
                            message: e
                        }
                    }))
                }
            }, {
                key: "_getSendMessageSpecifiedKey",
                value: function(e) {
                    if ([ro.MSG_IMAGE, ro.MSG_AUDIO, ro.MSG_VIDEO, ro.MSG_FILE].includes(e.type)) return Sp;
                    if (e.conversationType === ro.CONV_C2C) return Mp;
                    if (e.conversationType === ro.CONV_GROUP) {
                        var t = this.getModule(Fu).getLocalGroupProfile(e.to);
                        if (!t) return;
                        var n = t.type;
                        return lc(n) ? Ip : yp
                    }
                }
            }, {
                key: "_addSendMessageTotalCount",
                value: function(e) {
                    var t = this._getSendMessageSpecifiedKey(e);
                    t && this.getModule(tl).addTotalCount(t)
                }
            }, {
                key: "_addSendMessageSuccessCount",
                value: function(e, t) {
                    var n = Math.abs(Date.now() - t),
                        o = this._getSendMessageSpecifiedKey(e);
                    if (o) {
                        var r = this.getModule(tl);
                        r.addSuccessCount(o), r.addCost(o, n)
                    }
                }
            }, {
                key: "_addSendMessageFailCountOnUser",
                value: function(e, t) {
                    var n, o, r = t.code,
                        a = void 0 === r ? -1 : r,
                        s = this.getModule(tl),
                        i = this._getSendMessageSpecifiedKey(e);
                    i === Sp && (n = a, o = !1, Ym.includes(n) && (o = !0), o) ? s.addFailedCountOfUserSide(Tp) : function(e) {
                        var t = !1;
                        return Object.values($m).includes(e) && (t = !0), (e >= 120001 && e <= 13e4 || e >= 10100 && e <= 10200) && (t = !0), t
                    }(a) && i && s.addFailedCountOfUserSide(i)
                }
            }, {
                key: "resendMessage",
                value: function(e) {
                    return e.isResend = !0, e.status = _u.UNSEND, this.sendMessageInstance(e)
                }
            }, {
                key: "revokeMessage",
                value: function(e) {
                    var t = this,
                        n = null;
                    if (e.conversationType === ro.CONV_C2C) {
                        if (!(n = this.getModule(Uu))) return this._onCannotFindModule()
                    } else if (e.conversationType === ro.CONV_GROUP && !(n = this.getModule(Fu))) return this._onCannotFindModule();
                    var o = new Op(Yp);
                    return o.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:").concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), n.revokeMessage(e).then((function(n) {
                        var r = n.data.recallRetList;
                        if (!Sc(r) && 0 !== r[0].retCode) {
                            var a = new G_({
                                code: r[0].retCode,
                                message: P_[r[0].retCode] || Sd,
                                data: {
                                    message: e
                                }
                            });
                            return o.setCode(a.code).setMoreMessage(a.message).end(), x_(a)
                        }
                        return Gi.info("".concat(t._className, ".revokeMessage ok. ID:").concat(e.ID)), e.isRevoked = !0, o.end(), t.getModule(Vu).onMessageRevoked([e]), O_({
                            message: e
                        })
                    })).catch((function(n) {
                        t.probeNetwork().then((function(e) {
                            var t = Wn(e, 2),
                                r = t[0],
                                a = t[1];
                            o.setError(n, r, a).end()
                        }));
                        var r = new G_({
                            code: n && n.code ? n.code : id.MESSAGE_REVOKE_FAIL,
                            message: n && n.message ? n.message : Sd,
                            data: {
                                message: e
                            }
                        });
                        return Gi.warn("".concat(t._className, ".revokeMessage failed. error:"), n), x_(r)
                    }))
                }
            }, {
                key: "deleteMessage",
                value: function(e) {
                    var t = this,
                        n = null,
                        o = e[0],
                        r = o.conversationID,
                        a = "",
                        s = [],
                        i = [];
                    if (o.conversationType === ro.CONV_C2C ? (n = this.getModule(Uu), a = r.replace(ro.CONV_C2C, ""), e.forEach((function(e) {
                        e && e.status === _u.SUCCESS && e.conversationID === r && (e.getOnlineOnlyFlag() || s.push("".concat(e.sequence, "_").concat(e.random, "_").concat(e.time)), i.push(e))
                    }))) : o.conversationType === ro.CONV_GROUP && (n = this.getModule(Fu), a = r.replace(ro.CONV_GROUP, ""), e.forEach((function(e) {
                        e && e.status === _u.SUCCESS && e.conversationID === r && (e.getOnlineOnlyFlag() || s.push("".concat(e.sequence)), i.push(e))
                    }))), !n) return this._onCannotFindModule();
                    if (0 === s.length) return this._onMessageDeleted(i);
                    s.length > 30 && (s = s.slice(0, 30), i = i.slice(0, 30));
                    var c = new Op(zp);
                    return c.setMessage("to:".concat(a, " count:").concat(s.length)), n.deleteMessage({
                        to: a,
                        keyList: s
                    }).then((function(e) {
                        return c.end(), Gi.info("".concat(t._className, ".deleteMessage ok")), t._onMessageDeleted(i)
                    })).catch((function(e) {
                        t.probeNetwork().then((function(t) {
                            var n = Wn(t, 2),
                                o = n[0],
                                r = n[1];
                            c.setError(e, o, r).end()
                        })), Gi.warn("".concat(t._className, ".deleteMessage failed. error:"), e);
                        var n = new G_({
                            code: e && e.code ? e.code : id.MESSAGE_DELETE_FAIL,
                            message: e && e.message ? e.message : Td
                        });
                        return x_(n)
                    }))
                }
            }, {
                key: "_onMessageDeleted",
                value: function(e) {
                    return this.getModule(Vu).onMessageDeleted(e), q_({
                        messageList: e
                    })
                }
            }, {
                key: "_generateUUID",
                value: function() {
                    var e = this.getModule(Ku);
                    return "".concat(e.getSDKAppID(), "-").concat(e.getUserID(), "-").concat(function() {
                        for (var e = "", t = 32; t > 0; --t) e += tc[Math.floor(Math.random() * nc)];
                        return e
                    }())
                }
            }, {
                key: "getMessageOptionByID",
                value: function(e) {
                    return this._messageOptionsMap.get(e)
                }
            }, {
                key: "_getNickAndAvatarByUserID",
                value: function(e) {
                    return this.getModule(Gu).getNickAndAvatarByUserID(e)
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._messageOptionsMap.clear()
                }
            }]), n
        }(nl),
        Wm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "PluginModule", o.plugins = {}, o
            }
            return Pn(n, [{
                key: "registerPlugin",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach((function(n) {
                        t.plugins[n] = e[n]
                    })), new Op(Gp).setMessage("key=".concat(Object.keys(e))).end()
                }
            }, {
                key: "getPlugin",
                value: function(e) {
                    return this.plugins[e]
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset"))
                }
            }]), n
        }(nl),
        Jm = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "SyncUnreadMessageModule", o._cookie = "", o._onlineSyncFlag = !1, o.getInnerEmitterInstance().on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, o._onLoginSuccess, $n(o)), o
            }
            return Pn(n, [{
                key: "_onLoginSuccess",
                value: function(e) {
                    this._startSync({
                        cookie: this._cookie,
                        syncFlag: 0,
                        isOnlineSync: 0
                    })
                }
            }, {
                key: "_startSync",
                value: function(e) {
                    var t = this,
                        n = e.cookie,
                        o = e.syncFlag,
                        r = e.isOnlineSync;
                    Gi.log("".concat(this._className, "._startSync cookie:").concat(n, " syncFlag:").concat(o, " isOnlineSync:").concat(r)), this.request({
                        protocolName: sl,
                        requestData: {
                            cookie: n,
                            syncFlag: o,
                            isOnlineSync: r
                        }
                    }).then((function(e) {
                        var n = e.data,
                            o = n.cookie,
                            r = n.syncFlag,
                            a = n.eventArray,
                            s = n.messageList,
                            i = n.C2CRemainingUnreadList;
                        if (t._cookie = o, Sc(o));
                        else if (0 === r || 1 === r) {
                            if (a) t.getModule(Ju).onMessage({
                                head: {},
                                body: {
                                    eventArray: a,
                                    isInstantMessage: t._onlineSyncFlag,
                                    isSyncingEnded: !1
                                }
                            });
                            t.getModule(Uu).onNewC2CMessage({
                                dataList: s,
                                isInstantMessage: !1,
                                C2CRemainingUnreadList: i
                            }), t._startSync({
                                cookie: o,
                                syncFlag: r,
                                isOnlineSync: 0
                            })
                        } else if (2 === r) {
                            if (a) t.getModule(Ju).onMessage({
                                head: {},
                                body: {
                                    eventArray: a,
                                    isInstantMessage: t._onlineSyncFlag,
                                    isSyncingEnded: !0
                                }
                            });
                            t.getModule(Uu).onNewC2CMessage({
                                dataList: s,
                                isInstantMessage: t._onlineSyncFlag,
                                C2CRemainingUnreadList: i
                            })
                        }
                    })).catch((function(e) {
                        Gi.error("".concat(t._className, "._startSync failed. error:"), e)
                    }))
                }
            }, {
                key: "startOnlineSync",
                value: function() {
                    Gi.log("".concat(this._className, ".startOnlineSync")), this._onlineSyncFlag = !0, this._startSync({
                        cookie: this._cookie,
                        syncFlag: 0,
                        isOnlineSync: 1
                    })
                }
            }, {
                key: "startSyncOnReconnected",
                value: function() {
                    Gi.log("".concat(this._className, ".startSyncOnReconnected.")), this._onlineSyncFlag = !0, this._startSync({
                        cookie: this._cookie,
                        syncFlag: 0,
                        isOnlineSync: 0
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._onlineSyncFlag = !1, this._cookie = ""
                }
            }]), n
        }(nl),
        Xm = {
            request: {
                toAccount: "To_Account",
                fromAccount: "From_Account",
                to: "To_Account",
                from: "From_Account",
                groupID: "GroupId",
                groupAtUserID: "GroupAt_Account",
                extension: "Ext",
                data: "Data",
                description: "Desc",
                elements: "MsgBody",
                sizeType: "Type",
                downloadFlag: "Download_Flag",
                thumbUUID: "ThumbUUID",
                videoUUID: "VideoUUID",
                remoteAudioUrl: "Url",
                remoteVideoUrl: "VideoUrl",
                videoUrl: "",
                imageUrl: "URL",
                fileUrl: "Url",
                uuid: "UUID",
                priority: "MsgPriority",
                receiverUserID: "To_Account",
                receiverGroupID: "GroupId",
                messageSender: "SenderId",
                messageReceiver: "ReceiverId",
                nick: "From_AccountNick",
                avatar: "From_AccountHeadurl",
                messageNumber: "MsgNum",
                pbDownloadKey: "PbMsgKey",
                downloadKey: "JsonMsgKey",
                applicationType: "PendencyType",
                userIDList: "To_Account",
                groupNameList: "GroupName",
                userID: "To_Account"
            },
            response: {
                MsgPriority: "priority",
                ThumbUUID: "thumbUUID",
                VideoUUID: "videoUUID",
                Download_Flag: "downloadFlag",
                GroupId: "groupID",
                Member_Account: "userID",
                MsgList: "messageList",
                SyncFlag: "syncFlag",
                To_Account: "to",
                From_Account: "from",
                MsgSeq: "sequence",
                MsgRandom: "random",
                MsgTime: "time",
                MsgTimeStamp: "time",
                MsgContent: "content",
                MsgBody: "elements",
                From_AccountNick: "nick",
                From_AccountHeadurl: "avatar",
                GroupWithdrawInfoArray: "revokedInfos",
                GroupReadInfoArray: "groupMessageReadNotice",
                LastReadMsgSeq: "lastMessageSeq",
                WithdrawC2cMsgNotify: "c2cMessageRevokedNotify",
                C2cWithdrawInfoArray: "revokedInfos",
                C2cReadedReceipt: "c2cMessageReadReceipt",
                ReadC2cMsgNotify: "c2cMessageReadNotice",
                LastReadTime: "peerReadTime",
                MsgRand: "random",
                MsgType: "type",
                MsgShow: "messageShow",
                NextMsgSeq: "nextMessageSeq",
                FaceUrl: "avatar",
                ProfileDataMod: "profileModify",
                Profile_Account: "userID",
                ValueBytes: "value",
                ValueNum: "value",
                NoticeSeq: "noticeSequence",
                NotifySeq: "notifySequence",
                MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
                Operator_Account: "operatorID",
                OpType: "operationType",
                ReportType: "operationType",
                UserId: "userID",
                User_Account: "userID",
                List_Account: "userIDList",
                MsgOperatorMemberExtraInfo: "operatorInfo",
                MsgMemberExtraInfo: "memberInfoList",
                ImageUrl: "avatar",
                NickName: "nick",
                MsgGroupNewInfo: "newGroupProfile",
                MsgAppDefinedData: "groupCustomField",
                Owner_Account: "ownerID",
                GroupFaceUrl: "avatar",
                GroupIntroduction: "introduction",
                GroupNotification: "notification",
                GroupApplyJoinOption: "joinOption",
                MsgKey: "messageKey",
                GroupInfo: "groupProfile",
                ShutupTime: "muteTime",
                Desc: "description",
                Ext: "extension",
                GroupAt_Account: "groupAtUserID",
                MsgNum: "messageNumber",
                PbMsgKey: "pbDownloadKey",
                JsonMsgKey: "downloadKey",
                MsgModifiedFlag: "isModified",
                PendencyItem: "applicationItem",
                PendencyType: "applicationType",
                AddTime: "time",
                AddSource: "source",
                AddWording: "wording",
                ProfileImImage: "avatar",
                PendencyAdd: "friendApplicationAdded",
                FrienPencydDel_Account: "friendApplicationDeletedUserIDList"
            },
            ignoreKeyWord: ["C2C", "ID", "USP"]
        },
        Qm = Wt.trim;

    function Zm(e, t) {
        if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
        t = Object.assign({
            pascalCase: !1
        }, t);
        var n;
        return 0 === (e = Array.isArray(e) ? e.map((function(e) {
            return e.trim()
        })).filter((function(e) {
            return e.length
        })).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = ev(e)), e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
            return t.toUpperCase()
        })).replace(/\d+(\w|$)/g, (function(e) {
            return e.toUpperCase()
        })), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
    }
    Le({
        target: "String",
        proto: !0,
        forced: function(e) {
            return r((function() {
                return !!jt[e]() || "​᠎" != "​᠎" [e]() || jt[e].name !== e
            }))
        }("trim")
    }, {
        trim: function() {
            return Qm(this)
        }
    });
    var ev = function(e) {
        for (var t = !1, n = !1, o = !1, r = 0; r < e.length; r++) {
            var a = e[r];
            t && /[a-zA-Z]/.test(a) && a.toUpperCase() === a ? (e = e.slice(0, r) + "-" + e.slice(r), t = !1, o = n, n = !0, r++) : n && o && /[a-zA-Z]/.test(a) && a.toLowerCase() === a ? (e = e.slice(0, r - 1) + "-" + e.slice(r - 1), o = n, n = !1, t = !0) : (t = a.toLowerCase() === a && a.toUpperCase() !== a, o = n, n = a.toUpperCase() === a && a.toLowerCase() !== a)
        }
        return e
    };

    function tv(e, t) {
        var n = 0;
        return function e(t, o) {
            if (++n > 100) return n--, t;
            if (Ki(t)) {
                var r = t.map((function(t) {
                    return xi(t) ? e(t, o) : t
                }));
                return n--, r
            }
            if (xi(t)) {
                var a = (s = t, i = function(e, t) {
                    if (!zi(t)) return !1;
                    if ((r = t) !== Zm(r))
                        for (var n = 0; n < Xm.ignoreKeyWord.length && !t.includes(Xm.ignoreKeyWord[n]); n++);
                    var r;
                    return Bi(o[t]) ? function(e) {
                        return "OPPOChannelID" === e ? e : e[0].toUpperCase() + Zm(e).slice(1)
                    }(t) : o[t]
                }, c = Object.create(null), Object.keys(s).forEach((function(e) {
                    var t = i(s[e], e);
                    t && (c[t] = s[e])
                })), c);
                return a = pc(a, (function(t, n) {
                    return Ki(t) || xi(t) ? e(t, o) : t
                })), n--, a
            }
            var s, i, c
        }(e, t)
    }

    function nv(e, t) {
        if (Ki(e)) return e.map((function(e) {
            return xi(e) ? nv(e, t) : e
        }));
        if (xi(e)) {
            var n = (o = e, r = function(e, n) {
                return Bi(t[n]) ? Zm(n) : t[n]
            }, a = {}, Object.keys(o).forEach((function(e) {
                a[r(o[e], e)] = o[e]
            })), a);
            return n = pc(n, (function(e) {
                return Ki(e) || xi(e) ? nv(e, t) : e
            }))
        }
        var o, r, a
    }
    var ov = function() {
            function e(t) {
                wn(this, e), this._handler = t;
                var n = t.getURL();
                this._socket = null, this._id = ec(), Zs ? Xs ? (ti.connectSocket({
                    url: n,
                    header: {
                        "content-type": "application/json"
                    }
                }), ti.onSocketClose(this._onClose.bind(this)), ti.onSocketOpen(this._onOpen.bind(this)), ti.onSocketMessage(this._onMessage.bind(this)), ti.onSocketError(this._onError.bind(this))) : (this._socket = ti.connectSocket({
                    url: n,
                    header: {
                        "content-type": "application/json"
                    },
                    complete: function() {}
                }), this._socket.onClose(this._onClose.bind(this)), this._socket.onOpen(this._onOpen.bind(this)), this._socket.onMessage(this._onMessage.bind(this)), this._socket.onError(this._onError.bind(this))) : ei && (this._socket = new WebSocket(n), this._socket.onopen = this._onOpen.bind(this), this._socket.onmessage = this._onMessage.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onerror = this._onError.bind(this))
            }
            return Pn(e, [{
                key: "getID",
                value: function() {
                    return this._id
                }
            }, {
                key: "_onOpen",
                value: function() {
                    this._handler.onOpen({
                        id: this._id
                    })
                }
            }, {
                key: "_onClose",
                value: function(e) {
                    this._handler.onClose({
                        id: this._id,
                        e: e
                    })
                }
            }, {
                key: "_onMessage",
                value: function(e) {
                    this._handler.onMessage(e)
                }
            }, {
                key: "_onError",
                value: function(e) {
                    this._handler.onError({
                        id: this._id,
                        e: e
                    })
                }
            }, {
                key: "close",
                value: function(e) {
                    if (Xs) return ti.offSocketClose(), ti.offSocketMessage(), ti.offSocketOpen(), ti.offSocketError(), void ti.closeSocket();
                    this._socket && (Zs ? (this._socket.onClose((function() {})), this._socket.onOpen((function() {})), this._socket.onMessage((function() {})), this._socket.onError((function() {}))) : ei && (this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null), Js ? this._socket.close({
                        code: e
                    }) : this._socket.close(e), this._socket = null)
                }
            }, {
                key: "send",
                value: function(e) {
                    Xs ? ti.sendSocketMessage({
                        data: e.data,
                        fail: function() {
                            e.fail && e.requestID && e.fail(e.requestID)
                        }
                    }) : this._socket && (Zs ? this._socket.send({
                        data: e.data,
                        fail: function() {
                            e.fail && e.requestID && e.fail(e.requestID)
                        }
                    }) : ei && this._socket.send(e.data))
                }
            }]), e
        }(),
        rv = 4e3,
        av = 4001,
        sv = "connected",
        iv = "connecting",
        cv = "disconnected",
        uv = function() {
            function e(t) {
                wn(this, e), this._channelModule = t, this._className = "SocketHandler", this._promiseMap = new Map, this._readyState = cv, this._simpleRequestMap = new Map, this.MAX_SIZE = 100, this._startSequence = ec(), this._startTs = 0, this._reConnectFlag = !1, this._nextPingTs = 0, this._reConnectCount = 0, this.MAX_RECONNECT_COUNT = 3, this._socketID = -1, this._random = 0, this._socket = null, this._url = "", this._onOpenTs = 0, this._setOverseaHost(), this._initConnection()
            }
            return Pn(e, [{
                key: "_setOverseaHost",
                value: function() {
                    this._channelModule.isOversea() && Bs.HOST.setCurrent(Ks)
                }
            }, {
                key: "_initConnection",
                value: function() {
                    "" === this._url ? this._url = Bs.HOST.CURRENT.DEFAULT : this._url === Bs.HOST.CURRENT.DEFAULT ? this._url = Bs.HOST.CURRENT.BACKUP : this._url === Bs.HOST.CURRENT.BACKUP && (this._url = Bs.HOST.CURRENT.DEFAULT), this._connect(), this._nextPingTs = 0
                }
            }, {
                key: "onCheckTimer",
                value: function(e) {
                    e % 1 == 0 && this._checkPromiseMap()
                }
            }, {
                key: "_checkPromiseMap",
                value: function() {
                    var e = this;
                    0 !== this._promiseMap.size && this._promiseMap.forEach((function(t, n) {
                        var o = t.reject,
                            r = t.timestamp;
                        Date.now() - r >= 15e3 && (Gi.log("".concat(e._className, "._checkPromiseMap request timeout, delete requestID:").concat(n)), e._promiseMap.delete(n), o(new G_({
                            code: id.NETWORK_TIMEOUT,
                            message: lp
                        })), e._channelModule.onRequestTimeout(n))
                    }))
                }
            }, {
                key: "onOpen",
                value: function(e) {
                    this._onOpenTs = Date.now();
                    var t = e.id;
                    this._socketID = t, new Op(Fp).setMessage(n).setMessage("socketID:".concat(t)).end();
                    var n = Date.now() - this._startTs;
                    Gi.log("".concat(this._className, "._onOpen cost ").concat(n, " ms. socketID:").concat(t)), e.id === this._socketID && (this._readyState = sv, this._reConnectCount = 0, this._resend(), !0 === this._reConnectFlag && (this._channelModule.onReconnected(), this._reConnectFlag = !1), this._channelModule.onOpen())
                }
            }, {
                key: "onClose",
                value: function(e) {
                    var t = new Op(qp),
                        n = e.id,
                        o = e.e,
                        r = "sourceSocketID:".concat(n, " currentSocketID:").concat(this._socketID),
                        a = 0;
                    0 !== this._onOpenTs && (a = Date.now() - this._onOpenTs), t.setMessage(a).setMoreMessage(r).setCode(o.code).end(), Gi.log("".concat(this._className, "._onClose code:").concat(o.code, " reason:").concat(o.reason, " ").concat(r, " onlineTime:").concat(a)), n === this._socketID && (this._readyState = cv, a < 1e3 ? this._channelModule.onReconnectFailed() : this._channelModule.onClose())
                }
            }, {
                key: "onError",
                value: function(e) {
                    var t = e.id,
                        n = e.e,
                        o = "sourceSocketID:".concat(t, " currentSocketID:").concat(this._socketID);
                    new Op(xp).setMessage(n.errMsg || Qi(n)).setMoreMessage(o).setLevel("error").end(), Gi.warn("".concat(this._className, "._onError"), n, o), t === this._socketID && (this._readyState = "", this._channelModule.onError())
                }
            }, {
                key: "onMessage",
                value: function(e) {
                    var t;
                    try {
                        t = JSON.parse(e.data)
                    } catch (Ov) {
                        new Op(tg).setMessage(e.data).end()
                    }
                    if (t && t.head) {
                        var n = this._getRequestIDFromHead(t.head),
                            o = mc(t.head),
                            r = nv(t.body, this._getResponseKeyMap(o));
                        if (Gi.debug("".concat(this._className, ".onMessage ret:").concat(JSON.stringify(r), " requestID:").concat(n, " has:").concat(this._promiseMap.has(n))), this._setNextPingTs(), this._promiseMap.has(n)) {
                            var a = this._promiseMap.get(n),
                                s = a.resolve,
                                i = a.reject,
                                c = a.timestamp;
                            return this._promiseMap.delete(n), this._calcRTT(c), void(r.errorCode && 0 !== r.errorCode ? (this._channelModule.onErrorCodeNotZero(r), i(new G_({
                                code: r.errorCode,
                                message: r.errorInfo || ""
                            }))) : s(O_(r)))
                        }
                        this._channelModule.onMessage({
                            head: t.head,
                            body: r
                        })
                    }
                }
            }, {
                key: "_calcRTT",
                value: function(e) {
                    var t = Date.now() - e;
                    this._channelModule.getModule(tl).addRTT(t)
                }
            }, {
                key: "_connect",
                value: function() {
                    new Op(Up).setMessage("url:".concat(this.getURL())).end(), Gi.log("".concat(this._className, "._connect url:").concat(this.getURL())), this._startTs = Date.now(), this._socket = new ov(this), this._socketID = this._socket.getID(), this._readyState = iv
                }
            }, {
                key: "getURL",
                value: function() {
                    var e = this._channelModule.getModule(Ku);
                    return "".concat(this._url, "/info?sdkappid=").concat(e.getSDKAppID(), "&instanceid=").concat(e.getInstanceID(), "&random=").concat(this._getRandom())
                }
            }, {
                key: "_closeConnection",
                value: function(e) {
                    Gi.log("".concat(this._className, "._closeConnection")), this._socket && (this._socket.close(e), this._socketID = -1, this._socket = null, this._readyState = cv)
                }
            }, {
                key: "_resend",
                value: function() {
                    var e = this;
                    if (Gi.log("".concat(this._className, "._resend reConnectFlag:").concat(this._reConnectFlag), "promiseMap.size:".concat(this._promiseMap.size, " simpleRequestMap.size:").concat(this._simpleRequestMap.size)), this._promiseMap.size > 0 && this._promiseMap.forEach((function(t, n) {
                        var o = t.uplinkData,
                            r = t.resolve,
                            a = t.reject;
                        e._promiseMap.set(n, {
                            resolve: r,
                            reject: a,
                            timestamp: Date.now(),
                            uplinkData: o
                        }), e._execute(n, o)
                    })), this._simpleRequestMap.size > 0) {
                        var t, n = no(this._simpleRequestMap);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var o = Wn(t.value, 2),
                                    r = o[0],
                                    a = o[1];
                                this._execute(r, a)
                            }
                        } catch (s) {
                            n.e(s)
                        } finally {
                            n.f()
                        }
                        this._simpleRequestMap.clear()
                    }
                }
            }, {
                key: "send",
                value: function(e) {
                    var t = this;
                    e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() / 1e3);
                    e.keyMap;
                    var n = Hn(e, ["keyMap"]),
                        o = this._getRequestIDFromHead(e.head),
                        r = JSON.stringify(n);
                    return new Promise((function(e, a) {
                        (t._promiseMap.set(o, {
                            resolve: e,
                            reject: a,
                            timestamp: Date.now(),
                            uplinkData: r
                        }), Gi.debug("".concat(t._className, ".send uplinkData:").concat(JSON.stringify(n), " requestID:").concat(o, " readyState:").concat(t._readyState)), t._readyState !== sv) ? t._reConnect(): (t._execute(o, r), t._channelModule.getModule(tl).addRequestCount())
                    }))
                }
            }, {
                key: "simplySend",
                value: function(e) {
                    e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() / 1e3);
                    e.keyMap;
                    var t = Hn(e, ["keyMap"]),
                        n = this._getRequestIDFromHead(e.head),
                        o = JSON.stringify(t);
                    this._readyState !== sv ? (this._simpleRequestMap.size < this.MAX_SIZE ? this._simpleRequestMap.set(n, o) : Gi.log("".concat(this._className, ".simplySend. simpleRequestMap is full, drop request!")), this._reConnect()) : this._execute(n, o)
                }
            }, {
                key: "_execute",
                value: function(e, t) {
                    this._socket.send({
                        data: t,
                        fail: Zs ? this._onSendFail.bind(this) : void 0,
                        requestID: e
                    })
                }
            }, {
                key: "_onSendFail",
                value: function(e) {
                    Gi.log("".concat(this._className, "._onSendFail requestID:").concat(e))
                }
            }, {
                key: "_getSequence",
                value: function() {
                    var e;
                    if (this._startSequence < 2415919103) return e = this._startSequence, this._startSequence += 1, 2415919103 === this._startSequence && (this._startSequence = ec()), e
                }
            }, {
                key: "_getRequestIDFromHead",
                value: function(e) {
                    return e.servcmd + e.seq
                }
            }, {
                key: "_getResponseKeyMap",
                value: function(e) {
                    var t = this._channelModule.getKeyMap(e);
                    return Fn({}, Xm.response, {}, t.response)
                }
            }, {
                key: "_reConnect",
                value: function() {
                    this._readyState !== sv && this._readyState !== iv && this.forcedReconnect()
                }
            }, {
                key: "forcedReconnect",
                value: function() {
                    var e = this;
                    Gi.log("".concat(this._className, ".forcedReconnect count:").concat(this._reConnectCount, " readyState:").concat(this._readyState)), this._reConnectFlag = !0, this._resetRandom(), this._reConnectCount < this.MAX_RECONNECT_COUNT ? (this._reConnectCount += 1, this._closeConnection(av), this._initConnection()) : this._channelModule.probeNetwork().then((function(t) {
                        var n = Wn(t, 2),
                            o = n[0];
                        n[1];
                        o ? (Gi.warn("".concat(e._className, ".forcedReconnect disconnected from wsserver but network is ok, continue...")), e._reConnectCount = 0, e._closeConnection(av), e._initConnection()) : e._channelModule.onReconnectFailed()
                    }))
                }
            }, {
                key: "getReconnectFlag",
                value: function() {
                    return this._reConnectFlag
                }
            }, {
                key: "_setNextPingTs",
                value: function() {
                    this._nextPingTs = Date.now() + 1e4
                }
            }, {
                key: "getNextPingTs",
                value: function() {
                    return this._nextPingTs
                }
            }, {
                key: "isConnected",
                value: function() {
                    return this._readyState === sv
                }
            }, {
                key: "_getRandom",
                value: function() {
                    return 0 === this._random && (this._random = Math.random()), this._random
                }
            }, {
                key: "_resetRandom",
                value: function() {
                    this._random = 0
                }
            }, {
                key: "close",
                value: function() {
                    Gi.log("".concat(this._className, ".close")), this._closeConnection(rv), this._promiseMap.clear(), this._startSequence = ec(), this._readyState = cv, this._simpleRequestMap.clear(), this._reConnectFlag = !1, this._reConnectCount = 0, this._onOpenTs = 0, this._url = "", this._random = 0
                }
            }]), e
        }(),
        lv = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                if (wn(this, n), (o = t.call(this, e))._className = "ChannelModule", o._socketHandler = new uv($n(o)), o._probing = !1, o._isAppShowing = !0, o._previousState = ro.NET_STATE_CONNECTED, Zs && "function" == typeof ti.onAppShow && "function" == typeof ti.onAppHide) {
                    var r = o._onAppHide.bind($n(o)),
                        a = o._onAppShow.bind($n(o));
                    "function" == typeof ti.offAppHide && ti.offAppHide(r), "function" == typeof ti.offAppShow && ti.offAppShow(a), ti.onAppHide(r), ti.onAppShow(a)
                }
                return o._timerForNotLoggedIn = -1, o._timerForNotLoggedIn = setInterval(o.onCheckTimer.bind($n(o)), 1e3), o._fatalErrorFlag = !1, o
            }
            return Pn(n, [{
                key: "onCheckTimer",
                value: function(e) {
                    this._socketHandler && (this.isLoggedIn() ? (this._timerForNotLoggedIn > 0 && (clearInterval(this._timerForNotLoggedIn), this._timerForNotLoggedIn = -1), this._socketHandler.onCheckTimer(e)) : this._socketHandler.onCheckTimer(1), this._checkNextPing())
                }
            }, {
                key: "onErrorCodeNotZero",
                value: function(e) {
                    this.getModule(Ju).onErrorCodeNotZero(e)
                }
            }, {
                key: "onMessage",
                value: function(e) {
                    this.getModule(Ju).onMessage(e)
                }
            }, {
                key: "send",
                value: function(e) {
                    return this._socketHandler ? this._previousState !== ro.NET_STATE_CONNECTED && e.head.servcmd.includes(Ql) ? this._sendLogViaHTTP(e) : this._socketHandler.send(e) : Promise.reject()
                }
            }, {
                key: "_sendLogViaHTTP",
                value: function(e) {
                    return new Promise((function(t, n) {
                        var o = "https://webim.tim.qq.com/v4/imopenstat/tim_web_report_v2?sdkappid=".concat(e.head.sdkappid, "&reqtime=").concat(Date.now()),
                            r = JSON.stringify(e.body),
                            a = "application/x-www-form-urlencoded;charset=UTF-8";
                        if (Zs) ti.request({
                            url: o,
                            data: r,
                            method: "POST",
                            timeout: 3e3,
                            header: {
                                "content-type": a
                            },
                            success: function() {
                                t()
                            },
                            fail: function() {
                                n(new G_({
                                    code: id.NETWORK_ERROR,
                                    message: up
                                }))
                            }
                        });
                        else {
                            var s = new XMLHttpRequest,
                                i = setTimeout((function() {
                                    s.abort(), n(new G_({
                                        code: id.NETWORK_TIMEOUT,
                                        message: lp
                                    }))
                                }), 3e3);
                            s.onreadystatechange = function() {
                                4 === s.readyState && (clearTimeout(i), 200 === s.status || 304 === s.status ? t() : n(new G_({
                                    code: id.NETWORK_ERROR,
                                    message: up
                                })))
                            }, s.open("POST", o, !0), s.setRequestHeader("Content-type", a), s.send(r)
                        }
                    }))
                }
            }, {
                key: "simplySend",
                value: function(e) {
                    return this._socketHandler ? this._socketHandler.simplySend(e) : Promise.reject()
                }
            }, {
                key: "onOpen",
                value: function() {
                    this._ping()
                }
            }, {
                key: "onClose",
                value: function() {
                    this.reConnect()
                }
            }, {
                key: "onError",
                value: function() {
                    Zs && Gi.error("".concat(this._className, ".onError 从v2.11.2起，SDK 支持了 WebSocket，如您未添加相关受信域名，请先添加！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html"))
                }
            }, {
                key: "getKeyMap",
                value: function(e) {
                    return this.getModule(Ju).getKeyMap(e)
                }
            }, {
                key: "_onAppHide",
                value: function() {
                    this._isAppShowing = !1
                }
            }, {
                key: "_onAppShow",
                value: function() {
                    this._isAppShowing = !0
                }
            }, {
                key: "onRequestTimeout",
                value: function(e) {}
            }, {
                key: "onReconnected",
                value: function() {
                    Gi.log("".concat(this._className, ".onReconnected")), this.getModule(Ju).onReconnected(), this._emitNetStateChangeEvent(ro.NET_STATE_CONNECTED)
                }
            }, {
                key: "onReconnectFailed",
                value: function() {
                    Gi.log("".concat(this._className, ".onReconnectFailed")), this._emitNetStateChangeEvent(ro.NET_STATE_DISCONNECTED)
                }
            }, {
                key: "reConnect",
                value: function() {
                    if (!this._fatalErrorFlag && this._socketHandler) {
                        var e = this._socketHandler.getReconnectFlag();
                        if (Gi.log("".concat(this._className, ".reConnect previousState:").concat(this._previousState, " reconnectFlag:").concat(e)), this._previousState === ro.NET_STATE_CONNECTING && e) return;
                        this._socketHandler.forcedReconnect(), this._emitNetStateChangeEvent(ro.NET_STATE_CONNECTING)
                    }
                }
            }, {
                key: "_emitNetStateChangeEvent",
                value: function(e) {
                    this._previousState !== e && (this._previousState = e, this.emitOuterEvent(oo.NET_STATE_CHANGE, {
                        state: e
                    }))
                }
            }, {
                key: "_ping",
                value: function() {
                    var e = this;
                    if (!0 !== this._probing) {
                        this._probing = !0;
                        var t = this.getModule(Ju).getProtocolData({
                            protocolName: Zl
                        });
                        this.send(t).then((function() {
                            e._probing = !1
                        })).catch((function(t) {
                            if (Gi.warn("".concat(e._className, "._ping failed. error:"), t), e._probing = !1, t && 60002 === t.code) return new Op($g).setMessage("code:".concat(t.code, " message:").concat(t.message)).setNetworkType(e.getModule(Hu).getNetworkType()).end(), e._fatalErrorFlag = !0, void e.emitOuterEvent(oo.NET_STATE_CHANGE, ro.NET_STATE_DISCONNECTED);
                            e.probeNetwork().then((function(t) {
                                var n = Wn(t, 2),
                                    o = n[0],
                                    r = n[1];
                                Gi.log("".concat(e._className, "._ping failed. isAppShowing:").concat(e._isAppShowing, " online:").concat(o, " networkType:").concat(r)), o ? e.reConnect() : e.emitOuterEvent(oo.NET_STATE_CHANGE, ro.NET_STATE_DISCONNECTED)
                            }))
                        }))
                    }
                }
            }, {
                key: "_checkNextPing",
                value: function() {
                    this._socketHandler && (this._socketHandler.isConnected() && Date.now() >= this._socketHandler.getNextPingTs() && this._ping())
                }
            }, {
                key: "dealloc",
                value: function() {
                    this._socketHandler && (this._socketHandler.close(), this._socketHandler = null), this._timerForNotLoggedIn > -1 && clearInterval(this._timerForNotLoggedIn)
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._previousState = ro.NET_STATE_CONNECTED, this._probing = !1, this._fatalErrorFlag = !1, this._timerForNotLoggedIn = setInterval(this.onCheckTimer.bind(this), 1e3)
                }
            }]), n
        }(nl),
        dv = function() {
            function e(t) {
                wn(this, e), this._className = "ProtocolHandler", this._sessionModule = t, this._configMap = new Map, this._fillConfigMap()
            }
            return Pn(e, [{
                key: "_fillConfigMap",
                value: function() {
                    this._configMap.clear();
                    var e = this._sessionModule.genCommonHead(),
                        t = this._sessionModule.genCosSpecifiedHead(),
                        n = this._sessionModule.genSSOReportHead();
                    this._configMap.set(ol, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_OPEN_STATUS, ".").concat(Bs.CMD.LOGIN)
                            }),
                            body: {
                                state: "Online"
                            },
                            keyMap: {
                                response: {
                                    TinyId: "tinyID",
                                    InstId: "instanceID",
                                    HelloInterval: "helloInterval"
                                }
                            }
                        }
                    }(e)), this._configMap.set(rl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_OPEN_STATUS, ".").concat(Bs.CMD.LOGOUT)
                            }),
                            body: {}
                        }
                    }(e)), this._configMap.set(al, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_OPEN_STATUS, ".").concat(Bs.CMD.HELLO)
                            }),
                            body: {},
                            keyMap: {
                                response: {
                                    NewInstInfo: "newInstanceInfo"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Jl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_COS_SIGN, ".").concat(Bs.CMD.COS_SIGN)
                            }),
                            body: {
                                cmd: "open_im_cos_svc",
                                subCmd: "get_cos_token",
                                duration: 300,
                                version: 2
                            },
                            keyMap: {
                                request: {
                                    userSig: "usersig",
                                    subCmd: "sub_cmd",
                                    cmd: "cmd",
                                    duration: "duration",
                                    version: "version"
                                },
                                response: {
                                    expired_time: "expiredTime",
                                    bucket_name: "bucketName",
                                    session_token: "sessionToken",
                                    tmp_secret_id: "secretId",
                                    tmp_secret_key: "secretKey"
                                }
                            }
                        }
                    }(t)), this._configMap.set(Xl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.CUSTOM_UPLOAD, ".").concat(Bs.CMD.COS_PRE_SIG)
                            }),
                            body: {
                                fileType: void 0,
                                fileName: void 0,
                                uploadMethod: 0,
                                duration: 900
                            },
                            keyMap: {
                                request: {
                                    userSig: "usersig",
                                    fileType: "file_type",
                                    fileName: "file_name",
                                    uploadMethod: "upload_method"
                                },
                                response: {
                                    expired_time: "expiredTime",
                                    request_id: "requestId",
                                    head_url: "headUrl",
                                    upload_url: "uploadUrl",
                                    download_url: "downloadUrl",
                                    ci_url: "ciUrl"
                                }
                            }
                        }
                    }(t)), this._configMap.set(ad, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.CLOUD_CONTROL, ".").concat(Bs.CMD.FETCH_CLOUD_CONTROL_CONFIG)
                            }),
                            body: {
                                SDKAppID: 0,
                                version: 0
                            },
                            keyMap: {
                                request: {
                                    SDKAppID: "uint32_sdkappid",
                                    version: "uint64_version"
                                },
                                response: {
                                    int32_error_code: "errorCode",
                                    str_error_message: "errorMessage",
                                    str_json_config: "cloudControlConfig",
                                    uint32_expired_time: "expiredTime",
                                    uint32_sdkappid: "SDKAppID",
                                    uint64_version: "version"
                                }
                            }
                        }
                    }(e)), this._configMap.set(sd, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.CLOUD_CONTROL, ".").concat(Bs.CMD.PUSHED_CLOUD_CONTROL_CONFIG)
                            }),
                            body: {},
                            keyMap: {
                                response: {
                                    int32_error_code: "errorCode",
                                    str_error_message: "errorMessage",
                                    str_json_config: "cloudControlConfig",
                                    uint32_expired_time: "expiredTime",
                                    uint32_sdkappid: "SDKAppID",
                                    uint64_version: "version"
                                }
                            }
                        }
                    }(e)), this._configMap.set(sl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.GET_MESSAGES)
                            }),
                            body: {
                                cookie: "",
                                syncFlag: 0,
                                needAbstract: 1,
                                isOnlineSync: 0
                            },
                            keyMap: {
                                request: {
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    from: "From_Account",
                                    to: "To_Account",
                                    time: "MsgTimeStamp",
                                    sequence: "MsgSeq",
                                    random: "MsgRandom",
                                    elements: "MsgBody"
                                },
                                response: {
                                    MsgList: "messageList",
                                    SyncFlag: "syncFlag",
                                    To_Account: "to",
                                    From_Account: "from",
                                    ClientSeq: "clientSequence",
                                    MsgSeq: "sequence",
                                    NoticeSeq: "noticeSequence",
                                    NotifySeq: "notifySequence",
                                    MsgRandom: "random",
                                    MsgTimeStamp: "time",
                                    MsgContent: "content",
                                    ToGroupId: "groupID",
                                    MsgKey: "messageKey",
                                    GroupTips: "groupTips",
                                    MsgBody: "elements",
                                    MsgType: "type",
                                    C2CRemainingUnreadCount: "C2CRemainingUnreadList",
                                    C2CPairUnreadCount: "C2CPairUnreadList"
                                }
                            }
                        }
                    }(e)), this._configMap.set(il, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.BIG_DATA_HALLWAY_AUTH_KEY)
                            }),
                            body: {}
                        }
                    }(e)), this._configMap.set(cl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.SEND_MESSAGE)
                            }),
                            body: {
                                fromAccount: "",
                                toAccount: "",
                                msgTimeStamp: void 0,
                                msgSeq: 0,
                                msgRandom: 0,
                                msgBody: [],
                                cloudCustomData: void 0,
                                nick: "",
                                avatar: "",
                                msgLifeTime: void 0,
                                offlinePushInfo: {
                                    pushFlag: 0,
                                    title: "",
                                    desc: "",
                                    ext: "",
                                    apnsInfo: {
                                        badgeMode: 0
                                    },
                                    androidInfo: {
                                        OPPOChannelID: ""
                                    }
                                }
                            },
                            keyMap: {
                                request: {
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    msgTimeStamp: "MsgTimeStamp",
                                    msgSeq: "MsgSeq",
                                    msgRandom: "MsgRandom",
                                    msgBody: "MsgBody",
                                    count: "MaxCnt",
                                    lastMessageTime: "LastMsgTime",
                                    messageKey: "MsgKey",
                                    peerAccount: "Peer_Account",
                                    data: "Data",
                                    description: "Desc",
                                    extension: "Ext",
                                    type: "MsgType",
                                    content: "MsgContent",
                                    sizeType: "Type",
                                    uuid: "UUID",
                                    url: "",
                                    imageUrl: "URL",
                                    fileUrl: "Url",
                                    remoteAudioUrl: "Url",
                                    remoteVideoUrl: "VideoUrl",
                                    thumbUUID: "ThumbUUID",
                                    videoUUID: "VideoUUID",
                                    videoUrl: "",
                                    downloadFlag: "Download_Flag",
                                    nick: "From_AccountNick",
                                    avatar: "From_AccountHeadurl",
                                    from: "From_Account",
                                    time: "MsgTimeStamp",
                                    messageRandom: "MsgRandom",
                                    messageSequence: "MsgSeq",
                                    elements: "MsgBody",
                                    clientSequence: "ClientSeq",
                                    payload: "MsgContent",
                                    messageList: "MsgList",
                                    messageNumber: "MsgNum",
                                    abstractList: "AbstractList",
                                    messageBody: "MsgBody"
                                }
                            }
                        }
                    }(e)), this._configMap.set(ul, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.SEND_GROUP_MESSAGE)
                            }),
                            body: {
                                fromAccount: "",
                                groupID: "",
                                random: 0,
                                clientSequence: 0,
                                priority: "",
                                msgBody: [],
                                cloudCustomData: void 0,
                                onlineOnlyFlag: 0,
                                offlinePushInfo: {
                                    pushFlag: 0,
                                    title: "",
                                    desc: "",
                                    ext: "",
                                    apnsInfo: {
                                        badgeMode: 0
                                    },
                                    androidInfo: {
                                        OPPOChannelID: ""
                                    }
                                },
                                groupAtInfo: []
                            },
                            keyMap: {
                                request: {
                                    to: "GroupId",
                                    extension: "Ext",
                                    data: "Data",
                                    description: "Desc",
                                    random: "Random",
                                    sequence: "ReqMsgSeq",
                                    count: "ReqMsgNumber",
                                    type: "MsgType",
                                    priority: "MsgPriority",
                                    content: "MsgContent",
                                    elements: "MsgBody",
                                    sizeType: "Type",
                                    uuid: "UUID",
                                    url: "",
                                    imageUrl: "URL",
                                    fileUrl: "Url",
                                    remoteAudioUrl: "Url",
                                    remoteVideoUrl: "VideoUrl",
                                    thumbUUID: "ThumbUUID",
                                    videoUUID: "VideoUUID",
                                    videoUrl: "",
                                    downloadFlag: "Download_Flag",
                                    clientSequence: "ClientSeq",
                                    from: "From_Account",
                                    time: "MsgTimeStamp",
                                    messageRandom: "MsgRandom",
                                    messageSequence: "MsgSeq",
                                    payload: "MsgContent",
                                    messageList: "MsgList",
                                    messageNumber: "MsgNum",
                                    abstractList: "AbstractList",
                                    messageBody: "MsgBody"
                                },
                                response: {
                                    MsgTime: "time",
                                    MsgSeq: "sequence"
                                }
                            }
                        }
                    }(e)), this._configMap.set(fl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.REVOKE_C2C_MESSAGE)
                            }),
                            body: {
                                msgInfo: {
                                    fromAccount: "",
                                    toAccount: "",
                                    msgTimeStamp: 0,
                                    msgSeq: 0,
                                    msgRandom: 0
                                }
                            },
                            keyMap: {
                                request: {
                                    msgInfo: "MsgInfo",
                                    msgTimeStamp: "MsgTimeStamp",
                                    msgSeq: "MsgSeq",
                                    msgRandom: "MsgRandom"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Gl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.REVOKE_GROUP_MESSAGE)
                            }),
                            body: {
                                to: "",
                                msgSeqList: void 0
                            },
                            keyMap: {
                                request: {
                                    to: "GroupId",
                                    msgSeqList: "MsgSeqList",
                                    msgSeq: "MsgSeq"
                                }
                            }
                        }
                    }(e)), this._configMap.set(ml, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.GET_C2C_ROAM_MESSAGES)
                            }),
                            body: {
                                peerAccount: "",
                                count: 15,
                                lastMessageTime: 0,
                                messageKey: "",
                                withRecalledMessage: 1
                            },
                            keyMap: {
                                request: {
                                    messageKey: "MsgKey",
                                    peerAccount: "Peer_Account",
                                    count: "MaxCnt",
                                    lastMessageTime: "LastMsgTime",
                                    withRecalledMessage: "WithRecalledMsg"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Fl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_GROUP_ROAM_MESSAGES)
                            }),
                            body: {
                                withRecalledMsg: 1,
                                groupID: "",
                                count: 15,
                                sequence: ""
                            },
                            keyMap: {
                                request: {
                                    sequence: "ReqMsgSeq",
                                    count: "ReqMsgNumber",
                                    withRecalledMessage: "WithRecalledMsg"
                                },
                                response: {
                                    Random: "random",
                                    MsgTime: "time",
                                    MsgSeq: "sequence",
                                    ReqMsgSeq: "sequence",
                                    RspMsgList: "messageList",
                                    IsPlaceMsg: "isPlaceMessage",
                                    IsSystemMsg: "isSystemMessage",
                                    ToGroupId: "to",
                                    EnumFrom_AccountType: "fromAccountType",
                                    EnumTo_AccountType: "toAccountType",
                                    GroupCode: "groupCode",
                                    MsgPriority: "priority",
                                    MsgBody: "elements",
                                    MsgType: "type",
                                    MsgContent: "content",
                                    IsFinished: "complete",
                                    Download_Flag: "downloadFlag",
                                    ClientSeq: "clientSequence",
                                    ThumbUUID: "thumbUUID",
                                    VideoUUID: "videoUUID"
                                }
                            }
                        }
                    }(e)), this._configMap.set(_l, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.SET_C2C_MESSAGE_READ)
                            }),
                            body: {
                                C2CMsgReaded: void 0
                            },
                            keyMap: {
                                request: {
                                    lastMessageTime: "LastedMsgTime"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Ul, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.SET_GROUP_MESSAGE_READ)
                            }),
                            body: {
                                groupID: void 0,
                                messageReadSeq: void 0
                            },
                            keyMap: {
                                request: {
                                    messageReadSeq: "MsgReadedSeq"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Ml, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.DELETE_C2C_MESSAGE)
                            }),
                            body: {
                                fromAccount: "",
                                to: "",
                                keyList: void 0
                            },
                            keyMap: {
                                request: {
                                    keyList: "MsgKeyList"
                                }
                            }
                        }
                    }(e)), this._configMap.set(jl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.DELETE_GROUP_MESSAGE)
                            }),
                            body: {
                                groupID: "",
                                deleter: "",
                                keyList: void 0
                            },
                            keyMap: {
                                request: {
                                    deleter: "Deleter_Account",
                                    keyList: "Seqs"
                                }
                            }
                        }
                    }(e)), this._configMap.set(vl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.GET_PEER_READ_TIME)
                            }),
                            body: {
                                userIDList: void 0
                            },
                            keyMap: {
                                request: {
                                    userIDList: "To_Account"
                                },
                                response: {
                                    ReadTime: "peerReadTimeList"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Il, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.RECENT_CONTACT, ".").concat(Bs.CMD.GET_CONVERSATION_LIST)
                            }),
                            body: {
                                fromAccount: void 0,
                                count: 0
                            },
                            keyMap: {
                                request: {},
                                response: {
                                    SessionItem: "conversations",
                                    ToAccount: "groupID",
                                    To_Account: "userID",
                                    UnreadMsgCount: "unreadCount",
                                    MsgGroupReadedSeq: "messageReadSeq",
                                    C2cPeerReadTime: "c2cPeerReadTime"
                                }
                            }
                        }
                    }(e)), this._configMap.set(yl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.RECENT_CONTACT, ".").concat(Bs.CMD.PAGING_GET_CONVERSATION_LIST)
                            }),
                            body: {
                                fromAccount: void 0,
                                timeStamp: void 0,
                                orderType: void 0,
                                messageAssistFlag: 4
                            },
                            keyMap: {
                                request: {
                                    messageAssistFlag: "MsgAssistFlags"
                                },
                                response: {
                                    SessionItem: "conversations",
                                    ToAccount: "groupID",
                                    To_Account: "userID",
                                    UnreadMsgCount: "unreadCount",
                                    MsgGroupReadedSeq: "messageReadSeq",
                                    C2cPeerReadTime: "c2cPeerReadTime",
                                    LastMsgFlags: "lastMessageFlag"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Sl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.RECENT_CONTACT, ".").concat(Bs.CMD.DELETE_CONVERSATION)
                            }),
                            body: {
                                fromAccount: "",
                                toAccount: void 0,
                                type: 1,
                                toGroupID: void 0
                            },
                            keyMap: {
                                request: {
                                    toGroupID: "ToGroupid"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Tl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.DELETE_GROUP_AT_TIPS)
                            }),
                            body: {
                                messageListToDelete: void 0
                            },
                            keyMap: {
                                request: {
                                    messageListToDelete: "DelMsgList",
                                    messageSeq: "MsgSeq",
                                    messageRandom: "MsgRandom"
                                }
                            }
                        }
                    }(e)), this._configMap.set(ll, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.PROFILE, ".").concat(Bs.CMD.PORTRAIT_GET)
                            }),
                            body: {
                                fromAccount: "",
                                userItem: []
                            },
                            keyMap: {
                                request: {
                                    toAccount: "To_Account",
                                    standardSequence: "StandardSequence",
                                    customSequence: "CustomSequence"
                                }
                            }
                        }
                    }(e)), this._configMap.set(dl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.PROFILE, ".").concat(Bs.CMD.PORTRAIT_SET)
                            }),
                            body: {
                                fromAccount: "",
                                profileItem: [{
                                    tag: o_.NICK,
                                    value: ""
                                }, {
                                    tag: o_.GENDER,
                                    value: ""
                                }, {
                                    tag: o_.ALLOWTYPE,
                                    value: ""
                                }, {
                                    tag: o_.AVATAR,
                                    value: ""
                                }]
                            },
                            keyMap: {
                                request: {
                                    toAccount: "To_Account",
                                    standardSequence: "StandardSequence",
                                    customSequence: "CustomSequence"
                                }
                            }
                        }
                    }(e)), this._configMap.set(pl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.FRIEND, ".").concat(Bs.CMD.GET_BLACKLIST)
                            }),
                            body: {
                                fromAccount: "",
                                startIndex: 0,
                                maxLimited: 30,
                                lastSequence: 0
                            },
                            keyMap: {
                                response: {
                                    CurruentSequence: "currentSequence"
                                }
                            }
                        }
                    }(e)), this._configMap.set(gl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.FRIEND, ".").concat(Bs.CMD.ADD_BLACKLIST)
                            }),
                            body: {
                                fromAccount: "",
                                toAccount: []
                            }
                        }
                    }(e)), this._configMap.set(hl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.FRIEND, ".").concat(Bs.CMD.DELETE_BLACKLIST)
                            }),
                            body: {
                                fromAccount: "",
                                toAccount: []
                            }
                        }
                    }(e)), this._configMap.set(El, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_JOINED_GROUPS)
                            }),
                            body: {
                                memberAccount: "",
                                limit: void 0,
                                offset: void 0,
                                groupType: void 0,
                                responseFilter: {
                                    groupBaseInfoFilter: void 0,
                                    selfInfoFilter: void 0
                                }
                            },
                            keyMap: {
                                request: {
                                    memberAccount: "Member_Account"
                                },
                                response: {
                                    GroupIdList: "groups",
                                    MsgFlag: "messageRemindType"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Dl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_GROUP_INFO)
                            }),
                            body: {
                                groupIDList: void 0,
                                responseFilter: {
                                    groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"],
                                    groupCustomFieldFilter: void 0,
                                    memberInfoFilter: void 0,
                                    memberCustomFieldFilter: void 0
                                }
                            },
                            keyMap: {
                                request: {
                                    groupIDList: "GroupIdList",
                                    groupCustomField: "AppDefinedData",
                                    memberCustomField: "AppMemberDefinedData",
                                    groupCustomFieldFilter: "AppDefinedDataFilter_Group",
                                    memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
                                },
                                response: {
                                    GroupIdList: "groups",
                                    MsgFlag: "messageRemindType",
                                    AppDefinedData: "groupCustomField",
                                    AppMemberDefinedData: "memberCustomField",
                                    AppDefinedDataFilter_Group: "groupCustomFieldFilter",
                                    AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                                    InfoSeq: "infoSequence",
                                    MemberList: "members",
                                    GroupInfo: "groups",
                                    ShutUpUntil: "muteUntil",
                                    ShutUpAllMember: "muteAllMembers",
                                    ApplyJoinOption: "joinOption"
                                }
                            }
                        }
                    }(e)), this._configMap.set(kl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.CREATE_GROUP)
                            }),
                            body: {
                                type: void 0,
                                name: void 0,
                                groupID: void 0,
                                ownerID: void 0,
                                introduction: void 0,
                                notification: void 0,
                                maxMemberNum: void 0,
                                joinOption: void 0,
                                memberList: void 0,
                                groupCustomField: void 0,
                                memberCustomField: void 0,
                                webPushFlag: 1,
                                avatar: "FaceUrl"
                            },
                            keyMap: {
                                request: {
                                    ownerID: "Owner_Account",
                                    userID: "Member_Account",
                                    avatar: "FaceUrl",
                                    maxMemberNum: "MaxMemberCount",
                                    joinOption: "ApplyJoinOption",
                                    groupCustomField: "AppDefinedData",
                                    memberCustomField: "AppMemberDefinedData"
                                },
                                response: {
                                    HugeGroupFlag: "avChatRoomFlag",
                                    OverJoinedGroupLimit_Account: "overLimitUserIDList"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Cl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.DESTROY_GROUP)
                            }),
                            body: {
                                groupID: void 0
                            }
                        }
                    }(e)), this._configMap.set(Nl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.MODIFY_GROUP_INFO)
                            }),
                            body: {
                                groupID: void 0,
                                name: void 0,
                                introduction: void 0,
                                notification: void 0,
                                avatar: void 0,
                                maxMemberNum: void 0,
                                joinOption: void 0,
                                groupCustomField: void 0,
                                muteAllMembers: void 0
                            },
                            keyMap: {
                                request: {
                                    maxMemberNum: "MaxMemberCount",
                                    groupCustomField: "AppDefinedData",
                                    muteAllMembers: "ShutUpAllMember",
                                    joinOption: "ApplyJoinOption",
                                    avatar: "FaceUrl"
                                },
                                response: {
                                    AppDefinedData: "groupCustomField",
                                    ShutUpAllMember: "muteAllMembers",
                                    ApplyJoinOption: "joinOption"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Al, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.APPLY_JOIN_GROUP)
                            }),
                            body: {
                                groupID: void 0,
                                applyMessage: void 0,
                                userDefinedField: void 0,
                                webPushFlag: 1
                            },
                            keyMap: {
                                response: {
                                    HugeGroupFlag: "avChatRoomFlag"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Ol, function(e) {
                        e.a2, e.tinyid;
                        return {
                            head: Fn({}, Hn(e, ["a2", "tinyid"]), {
                                servcmd: "".concat(Bs.NAME.BIG_GROUP_NO_AUTH, ".").concat(Bs.CMD.APPLY_JOIN_GROUP)
                            }),
                            body: {
                                groupID: void 0,
                                applyMessage: void 0,
                                userDefinedField: void 0,
                                webPushFlag: 1
                            },
                            keyMap: {
                                response: {
                                    HugeGroupFlag: "avChatRoomFlag"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Ll, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.QUIT_GROUP)
                            }),
                            body: {
                                groupID: void 0
                            }
                        }
                    }(e)), this._configMap.set(Rl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.SEARCH_GROUP_BY_ID)
                            }),
                            body: {
                                groupIDList: void 0,
                                responseFilter: {
                                    groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"]
                                }
                            },
                            keyMap: {
                                response: {
                                    ApplyJoinOption: "joinOption"
                                }
                            }
                        }
                    }(e)), this._configMap.set(wl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.CHANGE_GROUP_OWNER)
                            }),
                            body: {
                                groupID: void 0,
                                newOwnerID: void 0
                            },
                            keyMap: {
                                request: {
                                    newOwnerID: "NewOwner_Account"
                                }
                            }
                        }
                    }(e)), this._configMap.set(bl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.HANDLE_APPLY_JOIN_GROUP)
                            }),
                            body: {
                                groupID: void 0,
                                applicant: void 0,
                                handleAction: void 0,
                                handleMessage: void 0,
                                authentication: void 0,
                                messageKey: void 0,
                                userDefinedField: void 0
                            },
                            keyMap: {
                                request: {
                                    applicant: "Applicant_Account",
                                    handleAction: "HandleMsg",
                                    handleMessage: "ApprovalMsg",
                                    messageKey: "MsgKey"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Pl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.HANDLE_GROUP_INVITATION)
                            }),
                            body: {
                                groupID: void 0,
                                inviter: void 0,
                                handleAction: void 0,
                                handleMessage: void 0,
                                authentication: void 0,
                                messageKey: void 0,
                                userDefinedField: void 0
                            },
                            keyMap: {
                                request: {
                                    inviter: "Inviter_Account",
                                    handleAction: "HandleMsg",
                                    handleMessage: "ApprovalMsg",
                                    messageKey: "MsgKey"
                                }
                            }
                        }
                    }(e)), this._configMap.set(ql, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_GROUP_APPLICATION)
                            }),
                            body: {
                                startTime: void 0,
                                limit: void 0,
                                handleAccount: void 0
                            },
                            keyMap: {
                                request: {
                                    handleAccount: "Handle_Account"
                                }
                            }
                        }
                    }(e)), this._configMap.set(xl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.DELETE_GROUP_SYSTEM_MESSAGE)
                            }),
                            body: {
                                messageListToDelete: void 0
                            },
                            keyMap: {
                                request: {
                                    messageListToDelete: "DelMsgList",
                                    messageSeq: "MsgSeq",
                                    messageRandom: "MsgRandom"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Vl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.BIG_GROUP_LONG_POLLING, ".").concat(Bs.CMD.AVCHATROOM_LONG_POLL)
                            }),
                            body: {
                                USP: 1,
                                startSeq: 1,
                                holdTime: 90,
                                key: void 0
                            },
                            keyMap: {
                                request: {
                                    USP: "USP"
                                },
                                response: {
                                    ToGroupId: "groupID"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Kl, function(e) {
                        e.a2, e.tinyid;
                        return {
                            head: Fn({}, Hn(e, ["a2", "tinyid"]), {
                                servcmd: "".concat(Bs.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH, ".").concat(Bs.CMD.AVCHATROOM_LONG_POLL)
                            }),
                            body: {
                                USP: 1,
                                startSeq: 1,
                                holdTime: 90,
                                key: void 0
                            },
                            keyMap: {
                                request: {
                                    USP: "USP"
                                },
                                response: {
                                    ToGroupId: "groupID"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Bl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_ONLINE_MEMBER_NUM)
                            }),
                            body: {
                                groupID: void 0
                            }
                        }
                    }(e)), this._configMap.set(Hl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_GROUP_MEMBER_LIST)
                            }),
                            body: {
                                groupID: void 0,
                                limit: 0,
                                offset: 0,
                                memberRoleFilter: void 0,
                                memberInfoFilter: ["Role", "NameCard", "ShutUpUntil", "JoinTime"],
                                memberCustomFieldFilter: void 0
                            },
                            keyMap: {
                                request: {
                                    memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
                                },
                                response: {
                                    AppMemberDefinedData: "memberCustomField",
                                    AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                                    MemberList: "members",
                                    ShutUpUntil: "muteUntil"
                                }
                            }
                        }
                    }(e)), this._configMap.set($l, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.GET_GROUP_MEMBER_INFO)
                            }),
                            body: {
                                groupID: void 0,
                                userIDList: void 0,
                                memberInfoFilter: void 0,
                                memberCustomFieldFilter: void 0
                            },
                            keyMap: {
                                request: {
                                    userIDList: "Member_List_Account",
                                    memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
                                },
                                response: {
                                    MemberList: "members",
                                    ShutUpUntil: "muteUntil",
                                    AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                                    AppMemberDefinedData: "memberCustomField"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Yl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.ADD_GROUP_MEMBER)
                            }),
                            body: {
                                groupID: void 0,
                                silence: void 0,
                                userIDList: void 0
                            },
                            keyMap: {
                                request: {
                                    userID: "Member_Account",
                                    userIDList: "MemberList"
                                },
                                response: {
                                    MemberList: "members"
                                }
                            }
                        }
                    }(e)), this._configMap.set(zl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.DELETE_GROUP_MEMBER)
                            }),
                            body: {
                                groupID: void 0,
                                userIDList: void 0,
                                reason: void 0
                            },
                            keyMap: {
                                request: {
                                    userIDList: "MemberToDel_Account"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Wl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.GROUP, ".").concat(Bs.CMD.MODIFY_GROUP_MEMBER_INFO)
                            }),
                            body: {
                                groupID: void 0,
                                userID: void 0,
                                messageRemindType: void 0,
                                nameCard: void 0,
                                role: void 0,
                                memberCustomField: void 0,
                                muteTime: void 0
                            },
                            keyMap: {
                                request: {
                                    userID: "Member_Account",
                                    memberCustomField: "AppMemberDefinedData",
                                    muteTime: "ShutUpTime",
                                    messageRemindType: "MsgFlag"
                                }
                            }
                        }
                    }(e)), this._configMap.set(Ql, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_OPEN_STAT, ".").concat(Bs.CMD.TIM_WEB_REPORT_V2)
                            }),
                            body: {
                                header: {},
                                event: [],
                                quality: []
                            },
                            keyMap: {
                                request: {
                                    SDKType: "sdk_type",
                                    SDKVersion: "sdk_version",
                                    deviceType: "device_type",
                                    platform: "platform",
                                    instanceID: "instance_id",
                                    traceID: "trace_id",
                                    SDKAppID: "sdk_app_id",
                                    userID: "user_id",
                                    tinyID: "tiny_id",
                                    extension: "extension",
                                    timestamp: "timestamp",
                                    networkType: "network_type",
                                    eventType: "event_type",
                                    code: "error_code",
                                    message: "error_message",
                                    moreMessage: "more_message",
                                    duplicate: "duplicate",
                                    costTime: "cost_time",
                                    level: "level",
                                    qualityType: "quality_type",
                                    reportIndex: "report_index",
                                    wholePeriod: "whole_period",
                                    totalCount: "total_count",
                                    rttCount: "success_count_business",
                                    successRateOfRequest: "percent_business",
                                    countLessThan1Second: "success_count_business",
                                    percentOfCountLessThan1Second: "percent_business",
                                    countLessThan3Second: "success_count_platform",
                                    percentOfCountLessThan3Second: "percent_platform",
                                    successCountOfBusiness: "success_count_business",
                                    successRateOfBusiness: "percent_business",
                                    successCountOfPlatform: "success_count_platform",
                                    successRateOfPlatform: "percent_platform",
                                    successCountOfMessageReceived: "success_count_business",
                                    successRateOfMessageReceived: "percent_business",
                                    avgRTT: "average_value",
                                    avgDelay: "average_value",
                                    avgValue: "average_value"
                                }
                            }
                        }
                    }(n)), this._configMap.set(Zl, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.HEARTBEAT, ".").concat(Bs.CMD.ALIVE)
                            }),
                            body: {}
                        }
                    }(e)), this._configMap.set(ed, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_OPEN_PUSH, ".").concat(Bs.CMD.MESSAGE_PUSH)
                            }),
                            body: {},
                            keyMap: {
                                response: {
                                    C2cMsgArray: "C2CMessageArray",
                                    GroupMsgArray: "groupMessageArray",
                                    GroupTips: "groupTips",
                                    C2cNotifyMsgArray: "C2CNotifyMessageArray",
                                    ClientSeq: "clientSequence",
                                    MsgPriority: "priority",
                                    NoticeSeq: "noticeSequence",
                                    MsgContent: "content",
                                    MsgType: "type",
                                    MsgBody: "elements",
                                    ToGroupId: "to",
                                    Desc: "description",
                                    Ext: "extension",
                                    IsSyncMsg: "isSyncMessage",
                                    Flag: "needSync",
                                    NeedAck: "needAck",
                                    PendencyAdd_Account: "userID",
                                    ProfileImNick: "nick",
                                    PendencyType: "applicationType"
                                }
                            }
                        }
                    }(e)), this._configMap.set(td, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.OPEN_IM, ".").concat(Bs.CMD.MESSAGE_PUSH_ACK)
                            }),
                            body: {
                                sessionData: void 0
                            },
                            keyMap: {
                                request: {
                                    sessionData: "SessionData"
                                }
                            }
                        }
                    }(e)), this._configMap.set(nd, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_OPEN_STATUS, ".").concat(Bs.CMD.STATUS_FORCEOFFLINE)
                            }),
                            body: {},
                            keyMap: {
                                response: {
                                    C2cNotifyMsgArray: "C2CNotifyMessageArray",
                                    NoticeSeq: "noticeSequence",
                                    KickoutMsgNotify: "kickoutMsgNotify",
                                    NewInstInfo: "newInstanceInfo"
                                }
                            }
                        }
                    }(e)), this._configMap.set(rd, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_LONG_MESSAGE, ".").concat(Bs.CMD.DOWNLOAD_MERGER_MESSAGE)
                            }),
                            body: {
                                downloadKey: ""
                            },
                            keyMap: {
                                response: {
                                    Data: "data",
                                    Desc: "description",
                                    Ext: "extension",
                                    Download_Flag: "downloadFlag",
                                    ThumbUUID: "thumbUUID",
                                    VideoUUID: "videoUUID"
                                }
                            }
                        }
                    }(e)), this._configMap.set(od, function(e) {
                        return {
                            head: Fn({}, e, {
                                servcmd: "".concat(Bs.NAME.IM_LONG_MESSAGE, ".").concat(Bs.CMD.UPLOAD_MERGER_MESSAGE)
                            }),
                            body: {
                                messageList: []
                            },
                            keyMap: {
                                request: {
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    msgTimeStamp: "MsgTimeStamp",
                                    msgSeq: "MsgSeq",
                                    msgRandom: "MsgRandom",
                                    msgBody: "MsgBody",
                                    type: "MsgType",
                                    content: "MsgContent",
                                    data: "Data",
                                    description: "Desc",
                                    extension: "Ext",
                                    sizeType: "Type",
                                    uuid: "UUID",
                                    url: "",
                                    imageUrl: "URL",
                                    fileUrl: "Url",
                                    remoteAudioUrl: "Url",
                                    remoteVideoUrl: "VideoUrl",
                                    thumbUUID: "ThumbUUID",
                                    videoUUID: "VideoUUID",
                                    videoUrl: "",
                                    downloadFlag: "Download_Flag",
                                    from: "From_Account",
                                    time: "MsgTimeStamp",
                                    messageRandom: "MsgRandom",
                                    messageSequence: "MsgSeq",
                                    elements: "MsgBody",
                                    clientSequence: "ClientSeq",
                                    payload: "MsgContent",
                                    messageList: "MsgList",
                                    messageNumber: "MsgNum",
                                    abstractList: "AbstractList",
                                    messageBody: "MsgBody"
                                }
                            }
                        }
                    }(e))
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._configMap.has(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._configMap.get(e)
                }
            }, {
                key: "update",
                value: function() {
                    this._fillConfigMap()
                }
            }, {
                key: "getKeyMap",
                value: function(e) {
                    return this.has(e) ? this.get(e).keyMap || {} : (Gi.warn("".concat(this._className, ".getKeyMap unknown protocolName:").concat(e)), {})
                }
            }, {
                key: "getProtocolData",
                value: function(e) {
                    var t = e.protocolName,
                        n = e.requestData,
                        o = this.get(t),
                        r = null;
                    if (n) {
                        var a = this._simpleDeepCopy(o),
                            s = a.body,
                            i = Object.create(null);
                        for (var c in s)
                            if (Object.prototype.hasOwnProperty.call(s, c)) {
                                if (i[c] = s[c], void 0 === n[c]) continue;
                                i[c] = n[c]
                            } a.body = i, r = this._getUplinkData(a)
                    } else r = this._getUplinkData(o);
                    return r
                }
            }, {
                key: "_getUplinkData",
                value: function(e) {
                    var t = this._requestDataCleaner(e),
                        n = mc(t.head),
                        o = tv(t.body, this._getRequestKeyMap(n));
                    return t.body = o, t
                }
            }, {
                key: "_getRequestKeyMap",
                value: function(e) {
                    var t = this.getKeyMap(e);
                    return Fn({}, Xm.request, {}, t.request)
                }
            }, {
                key: "_requestDataCleaner",
                value: function(e) {
                    var t = Array.isArray(e) ? [] : Object.create(null);
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && zi(n) && null !== e[n] && void 0 !== e[n] && ("object" !== Rn(e[n]) ? t[n] = e[n] : t[n] = this._requestDataCleaner.bind(this)(e[n]));
                    return t
                }
            }, {
                key: "_simpleDeepCopy",
                value: function(e) {
                    for (var t, n = Object.keys(e), o = {}, r = 0, a = n.length; r < a; r++) t = n[r], Ki(e[t]) ? o[t] = Array.from(e[t]) : xi(e[t]) ? o[t] = this._simpleDeepCopy(e[t]) : o[t] = e[t];
                    return o
                }
            }]), e
        }(),
        pv = [td],
        gv = function() {
            function e(t) {
                wn(this, e), this._sessionModule = t, this._className = "DownlinkHandler", this._eventHandlerMap = new Map, this._eventHandlerMap.set("C2CMessageArray", this._c2cMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupMessageArray", this._groupMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupTips", this._groupTipsHandler.bind(this)), this._eventHandlerMap.set("C2CNotifyMessageArray", this._C2CNotifyMessageArrayHandler.bind(this)), this._eventHandlerMap.set("profileModify", this._profileHandler.bind(this)), this._eventHandlerMap.set("friendListMod", this._relationChainHandler.bind(this)), this._keys = Jn(this._eventHandlerMap.keys())
            }
            return Pn(e, [{
                key: "_c2cMessageArrayHandler",
                value: function(e) {
                    var t = this._sessionModule.getModule(Uu);
                    if (t) {
                        if (e.dataList.forEach((function(e) {
                            if (1 === e.isSyncMessage) {
                                var t = e.from;
                                e.from = e.to, e.to = t
                            }
                        })), 1 === e.needSync) this._sessionModule.getModule(Wu).startOnlineSync();
                        t.onNewC2CMessage({
                            dataList: e.dataList,
                            isInstantMessage: !0
                        })
                    }
                }
            }, {
                key: "_groupMessageArrayHandler",
                value: function(e) {
                    var t = this._sessionModule.getModule(Fu);
                    t && t.onNewGroupMessage({
                        event: e.event,
                        dataList: e.dataList,
                        isInstantMessage: !0
                    })
                }
            }, {
                key: "_groupTipsHandler",
                value: function(e) {
                    var t = this._sessionModule.getModule(Fu);
                    if (t) {
                        var n = e.event,
                            o = e.dataList,
                            r = e.isInstantMessage,
                            a = void 0 === r || r,
                            s = e.isSyncingEnded;
                        switch (n) {
                            case 4:
                            case 6:
                                t.onNewGroupTips({
                                    event: n,
                                    dataList: o
                                });
                                break;
                            case 5:
                                o.forEach((function(e) {
                                    Ki(e.elements.revokedInfos) ? t.onGroupMessageRevoked({
                                        dataList: o
                                    }) : Ki(e.elements.groupMessageReadNotice) ? t.onGroupMessageReadNotice({
                                        dataList: o
                                    }) : t.onNewGroupSystemNotice({
                                        dataList: o,
                                        isInstantMessage: a,
                                        isSyncingEnded: s
                                    })
                                }));
                                break;
                            case 12:
                                this._sessionModule.getModule(Vu).onNewGroupAtTips({
                                    dataList: o
                                });
                                break;
                            default:
                                Gi.log("".concat(this._className, "._groupTipsHandler unknown event:").concat(n, " dataList:"), o)
                        }
                    }
                }
            }, {
                key: "_C2CNotifyMessageArrayHandler",
                value: function(e) {
                    var t = this,
                        n = e.dataList;
                    if (Ki(n)) {
                        var o = this._sessionModule.getModule(Uu);
                        n.forEach((function(e) {
                            if (Vi(e))
                                if (e.hasOwnProperty("kickoutMsgNotify")) {
                                    var r = e.kickoutMsgNotify,
                                        a = r.kickType,
                                        s = r.newInstanceInfo,
                                        i = void 0 === s ? {} : s;
                                    1 === a ? t._sessionModule.onMultipleAccountKickedOut(i) : 2 === a && t._sessionModule.onMultipleDeviceKickedOut(i)
                                } else e.hasOwnProperty("c2cMessageRevokedNotify") ? o && o.onC2CMessageRevoked({
                                    dataList: n
                                }) : e.hasOwnProperty("c2cMessageReadReceipt") ? o && o.onC2CMessageReadReceipt({
                                    dataList: n
                                }) : e.hasOwnProperty("c2cMessageReadNotice") && o && o.onC2CMessageReadNotice({
                                    dataList: n
                                })
                        }))
                    }
                }
            }, {
                key: "_profileHandler",
                value: function(e) {
                    this._sessionModule.getModule(Gu).onProfileModified({
                        dataList: e.dataList
                    });
                    var t = this._sessionModule.getModule(qu);
                    t && t.onFriendProfileModified({
                        dataList: e.dataList
                    })
                }
            }, {
                key: "_relationChainHandler",
                value: function(e) {
                    this._sessionModule.getModule(Gu).onRelationChainModified({
                        dataList: e.dataList
                    });
                    var t = this._sessionModule.getModule(qu);
                    t && t.onRelationChainModified({
                        dataList: e.dataList
                    })
                }
            }, {
                key: "_cloudControlConfigHandler",
                value: function(e) {
                    this._sessionModule.getModule(Zu).onPushedCloudControlConfig(e)
                }
            }, {
                key: "onMessage",
                value: function(e) {
                    var t = this,
                        n = e.head,
                        o = e.body;
                    if (this._isPushedCloudControlConfig(n)) this._cloudControlConfigHandler(o);
                    else {
                        var r = o.eventArray,
                            a = o.isInstantMessage,
                            s = o.isSyncingEnded,
                            i = o.needSync;
                        if (Ki(r))
                            for (var c = null, u = null, l = 0, d = 0, p = r.length; d < p; d++) {
                                l = (c = r[d]).event;
                                var g = Object.keys(c).find((function(e) {
                                    return -1 !== t._keys.indexOf(e)
                                }));
                                g ? (u = c[g], this._eventHandlerMap.get(g)({
                                    event: l,
                                    dataList: u,
                                    isInstantMessage: a,
                                    isSyncingEnded: s,
                                    needSync: i
                                })) : Gi.log("".concat(this._className, ".onMessage unknown eventItem:").concat(c))
                            }
                    }
                }
            }, {
                key: "_isPushedCloudControlConfig",
                value: function(e) {
                    return e.servcmd && e.servcmd.includes(sd)
                }
            }]), e
        }(),
        hv = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "SessionModule", o._platform = o.getPlatform(), o._protocolHandler = new dv($n(o)), o._messageDispatcher = new gv($n(o)), o
            }
            return Pn(n, [{
                key: "updateProtocolConfig",
                value: function() {
                    this._protocolHandler.update()
                }
            }, {
                key: "request",
                value: function(e) {
                    Gi.debug("".concat(this._className, ".request options:"), e);
                    var t = e.protocolName,
                        n = e.tjgID;
                    if (!this._protocolHandler.has(t)) return Gi.warn("".concat(this._className, ".request unknown protocol:").concat(t)), x_({
                        code: id.CANNOT_FIND_PROTOCOL,
                        message: gp
                    });
                    var o = this.getProtocolData(e);
                    Sc(n) || (o.head.tjgID = n);
                    var r = this.getModule(Xu);
                    return pv.includes(t) ? r.simplySend(o) : r.send(o)
                }
            }, {
                key: "getKeyMap",
                value: function(e) {
                    return this._protocolHandler.getKeyMap(e)
                }
            }, {
                key: "genCommonHead",
                value: function() {
                    var e = this.getModule(Ku);
                    return {
                        ver: "v4",
                        platform: this._platform,
                        websdkappid: qs,
                        websdkversion: Fs,
                        a2: e.getA2Key() || void 0,
                        tinyid: e.getTinyID() || void 0,
                        status_instid: e.getStatusInstanceID(),
                        sdkappid: e.getSDKAppID(),
                        contenttype: e.getContentType(),
                        reqtime: 0,
                        identifier: e.getA2Key() ? void 0 : e.getUserID(),
                        usersig: e.getA2Key() ? void 0 : e.getUserSig(),
                        sdkability: 2,
                        tjgID: ""
                    }
                }
            }, {
                key: "genCosSpecifiedHead",
                value: function() {
                    var e = this.getModule(Ku);
                    return {
                        ver: "v4",
                        platform: this._platform,
                        websdkappid: qs,
                        websdkversion: Fs,
                        sdkappid: e.getSDKAppID(),
                        contenttype: e.getContentType(),
                        reqtime: 0,
                        identifier: e.getUserID(),
                        usersig: e.getUserSig(),
                        status_instid: e.getStatusInstanceID(),
                        sdkability: 2
                    }
                }
            }, {
                key: "genSSOReportHead",
                value: function() {
                    var e = this.getModule(Ku);
                    return {
                        ver: "v4",
                        platform: this._platform,
                        websdkappid: qs,
                        websdkversion: Fs,
                        sdkappid: e.getSDKAppID(),
                        contenttype: "",
                        reqtime: 0,
                        identifier: "",
                        usersig: "",
                        status_instid: e.getStatusInstanceID(),
                        sdkability: 2
                    }
                }
            }, {
                key: "getProtocolData",
                value: function(e) {
                    return this._protocolHandler.getProtocolData(e)
                }
            }, {
                key: "onErrorCodeNotZero",
                value: function(e) {
                    var t = e.errorCode;
                    if (t === id.HELLO_ANSWER_KICKED_OUT) {
                        var n = e.kickType,
                            o = e.newInstanceInfo,
                            r = void 0 === o ? {} : o;
                        1 === n ? this.onMultipleAccountKickedOut(r) : 2 === n && this.onMultipleDeviceKickedOut(r)
                    }
                    t !== id.MESSAGE_A2KEY_EXPIRED && t !== id.ACCOUNT_A2KEY_EXPIRED || (this._onUserSigExpired(), this.getModule(Xu).reConnect())
                }
            }, {
                key: "onMessage",
                value: function(e) {
                    var t = e.body,
                        n = t.needAck,
                        o = void 0 === n ? 0 : n,
                        r = t.sessionData;
                    1 === o && this._sendACK(r), this._messageDispatcher.onMessage(e)
                }
            }, {
                key: "onReconnected",
                value: function() {
                    var e = this;
                    this.isLoggedIn() && this.request({
                        protocolName: ol
                    }).then((function(t) {
                        var n = t.data.instanceID;
                        e.getModule(Ku).setStatusInstanceID(n), Gi.log("".concat(e._className, ".onReconnected, login ok. start to sync unread messages.")), e.getModule(Wu).startSyncOnReconnected(), e.getModule(el).startPull()
                    }))
                }
            }, {
                key: "onMultipleAccountKickedOut",
                value: function(e) {
                    this.getModule(bu).onMultipleAccountKickedOut(e)
                }
            }, {
                key: "onMultipleDeviceKickedOut",
                value: function(e) {
                    this.getModule(bu).onMultipleDeviceKickedOut(e)
                }
            }, {
                key: "_onUserSigExpired",
                value: function() {
                    this.getModule(bu).onUserSigExpired()
                }
            }, {
                key: "_sendACK",
                value: function(e) {
                    this.request({
                        protocolName: td,
                        requestData: {
                            sessionData: e
                        }
                    })
                }
            }]), n
        }(nl),
        fv = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "MessageLossDetectionModule", o._maybeLostSequencesMap = new Map, o
            }
            return Pn(n, [{
                key: "onMessageMaybeLost",
                value: function(e, t, n) {
                    this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e, []);
                    for (var o = this._maybeLostSequencesMap.get(e), r = 0; r < n; r++) o.push(t + r);
                    Gi.debug("".concat(this._className, ".onMessageMaybeLost. maybeLostSequences:").concat(o))
                }
            }, {
                key: "detectMessageLoss",
                value: function(e, t) {
                    var n = this._maybeLostSequencesMap.get(e);
                    if (!Sc(n) && !Sc(t)) {
                        var o = t.filter((function(e) {
                            return -1 !== n.indexOf(e)
                        }));
                        if (Gi.debug("".concat(this._className, ".detectMessageLoss. matchedSequences:").concat(o)), n.length === o.length) Gi.info("".concat(this._className, ".detectMessageLoss no message loss. conversationID:").concat(e));
                        else {
                            var r, a = n.filter((function(e) {
                                    return -1 === o.indexOf(e)
                                })),
                                s = a.length;
                            s <= 5 ? r = e + "-" + a.join("-") : (a.sort((function(e, t) {
                                return e - t
                            })), r = e + " start:" + a[0] + " end:" + a[s - 1] + " count:" + s), new Op(Gg).setMessage(r).setNetworkType(this.getNetworkType()).setLevel("warning").end(), Gi.warn("".concat(this._className, ".detectMessageLoss message loss detected. conversationID:").concat(e, " lostSequences:").concat(a))
                        }
                        n.length = 0
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._maybeLostSequencesMap.clear()
                }
            }]), n
        }(nl),
        _v = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "CloudControlModule", o._cloudConfig = new Map, o._expiredTime = 0, o._version = 0, o._isFetching = !1, o
            }
            return Pn(n, [{
                key: "getCloudConfig",
                value: function(e) {
                    return Bi(e) ? this._cloudConfig : this._cloudConfig.has(e) ? this._cloudConfig.get(e) : void 0
                }
            }, {
                key: "_canFetchConfig",
                value: function() {
                    return this.isLoggedIn() && !this._isFetching && Date.now() >= this._expiredTime
                }
            }, {
                key: "fetchConfig",
                value: function() {
                    var e = this,
                        t = this._canFetchConfig();
                    if (Gi.log("".concat(this._className, ".fetchConfig canFetchConfig:").concat(t)), t) {
                        var n = new Op(jg),
                            o = this.getModule(Ku).getSDKAppID();
                        this._isFetching = !0, this.request({
                            protocolName: ad,
                            requestData: {
                                SDKAppID: o,
                                version: this._version
                            }
                        }).then((function(t) {
                            e._isFetching = !1, n.setMessage("version:".concat(e._version, " newVersion:").concat(t.data.version, " config:").concat(t.data.cloudControlConfig)).setNetworkType(e.getNetworkType()).end(), Gi.log("".concat(e._className, ".fetchConfig ok")), e._parseCloudControlConfig(t.data)
                        })).catch((function(t) {
                            e._isFetching = !1, e.probeNetwork().then((function(e) {
                                var o = Wn(e, 2),
                                    r = o[0],
                                    a = o[1];
                                n.setError(t, r, a).end()
                            })), Gi.log("".concat(e._className, ".fetchConfig failed. error:"), t), e._setExpiredTimeOnResponseError(12e4)
                        }))
                    }
                }
            }, {
                key: "onPushedCloudControlConfig",
                value: function(e) {
                    Gi.log("".concat(this._className, ".onPushedCloudControlConfig")), new Op(Hg).setNetworkType(this.getNetworkType()).setMessage("newVersion:".concat(e.version, " config:").concat(e.cloudControlConfig)).end(), this._parseCloudControlConfig(e)
                }
            }, {
                key: "onCheckTimer",
                value: function(e) {
                    this._canFetchConfig() && this.fetchConfig()
                }
            }, {
                key: "_parseCloudControlConfig",
                value: function(e) {
                    var t = this,
                        n = "".concat(this._className, "._parseCloudControlConfig"),
                        o = e.errorCode,
                        r = e.errorMessage,
                        a = e.cloudControlConfig,
                        s = e.version,
                        i = e.expiredTime;
                    if (0 === o) {
                        if (this._version !== s) {
                            var c = null;
                            try {
                                c = JSON.parse(a)
                            } catch (Ov) {
                                Gi.error("".concat(n, " JSON parse error:").concat(a))
                            }
                            c && (this._cloudConfig.clear(), Object.keys(c).forEach((function(e) {
                                t._cloudConfig.set(e, c[e])
                            })), this._version = s, this.emitInnerEvent(X_.CLOUD_CONFIG_UPDATED))
                        }
                        this._expiredTime = Date.now() + 1e3 * i
                    } else Bi(o) ? (Gi.log("".concat(n, " failed. Invalid message format:"), e), this._setExpiredTimeOnResponseError(36e5)) : (Gi.error("".concat(n, " errorCode:").concat(o, " errorMessage:").concat(r)), this._setExpiredTimeOnResponseError(12e4))
                }
            }, {
                key: "_setExpiredTimeOnResponseError",
                value: function(e) {
                    this._expiredTime = Date.now() + e
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._cloudConfig.clear(), this._expiredTime = 0, this._version = 0, this._isFetching = !1
                }
            }]), n
        }(nl),
        mv = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                return wn(this, n), (o = t.call(this, e))._className = "PullGroupMessageModule", o._remoteLastMessageSequenceMap = new Map, o.PULL_LIMIT_COUNT = 15, o
            }
            return Pn(n, [{
                key: "startPull",
                value: function() {
                    var e = this,
                        t = this._getNeedPullConversationList();
                    this._getRemoteLastMessageSequenceList().then((function() {
                        var n = e.getModule(Vu);
                        t.forEach((function(t) {
                            var o = t.conversationID,
                                r = o.replace(ro.CONV_GROUP, ""),
                                a = n.getGroupLocalLastMessageSequence(o),
                                s = e._remoteLastMessageSequenceMap.get(r) || 0,
                                i = s - a;
                            Gi.log("".concat(e._className, ".startPull groupID:").concat(r, " localLastMessageSequence:").concat(a, " ") + "remoteLastMessageSequence:".concat(s, " diff:").concat(i)), a > 0 && i > 1 && i < 300 && e._pullMissingMessage({
                                groupID: r,
                                localLastMessageSequence: a,
                                remoteLastMessageSequence: s,
                                diff: i
                            })
                        }))
                    }))
                }
            }, {
                key: "_getNeedPullConversationList",
                value: function() {
                    return this.getModule(Vu).getLocalConversationList().filter((function(e) {
                        return e.type === ro.CONV_GROUP && e.groupProfile.type !== ro.GRP_AVCHATROOM
                    }))
                }
            }, {
                key: "_getRemoteLastMessageSequenceList",
                value: function() {
                    var e = this;
                    return this.getModule(Fu).getGroupList().then((function(t) {
                        for (var n = t.data.groupList, o = void 0 === n ? [] : n, r = 0; r < o.length; r++) {
                            var a = o[r],
                                s = a.groupID,
                                i = a.nextMessageSeq;
                            if (a.type !== ro.GRP_AVCHATROOM) {
                                var c = i - 1;
                                e._remoteLastMessageSequenceMap.set(s, c)
                            }
                        }
                    }))
                }
            }, {
                key: "_pullMissingMessage",
                value: function(e) {
                    var t = this,
                        n = e.localLastMessageSequence,
                        o = e.remoteLastMessageSequence,
                        r = e.diff;
                    e.count = r > this.PULL_LIMIT_COUNT ? this.PULL_LIMIT_COUNT : r, e.sequence = r > this.PULL_LIMIT_COUNT ? n + this.PULL_LIMIT_COUNT : n + r, this._getGroupMissingMessage(e).then((function(a) {
                        a.length > 0 && (a[0].sequence + 1 <= o && (e.localLastMessageSequence = n + t.PULL_LIMIT_COUNT, e.diff = r - t.PULL_LIMIT_COUNT, t._pullMissingMessage(e)), t.getModule(Fu).onNewGroupMessage({
                            dataList: a,
                            isInstantMessage: !1
                        }))
                    }))
                }
            }, {
                key: "_getGroupMissingMessage",
                value: function(e) {
                    var t = this,
                        n = new Op(Sg);
                    return this.request({
                        protocolName: Fl,
                        requestData: {
                            groupID: e.groupID,
                            count: e.count,
                            sequence: e.sequence
                        }
                    }).then((function(o) {
                        var r = o.data.messageList,
                            a = void 0 === r ? [] : r;
                        return n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e.groupID, " count:").concat(e.count, " sequence:").concat(e.sequence, " messageList length:").concat(a.length)).end(), a
                    })).catch((function(e) {
                        t.probeNetwork().then((function(t) {
                            var o = Wn(t, 2),
                                r = o[0],
                                a = o[1];
                            n.setError(e, r, a).end()
                        }))
                    }))
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._remoteLastMessageSequenceMap.clear()
                }
            }]), n
        }(nl),
        vv = function() {
            function e() {
                wn(this, e), this._className = "AvgE2EDelay", this._e2eDelayArray = []
            }
            return Pn(e, [{
                key: "addMessageDelay",
                value: function(e) {
                    var t = vc(e.currentTime / 1e3 - e.time, 2);
                    this._e2eDelayArray.push(t)
                }
            }, {
                key: "_calcAvg",
                value: function(e, t) {
                    if (0 === t) return 0;
                    var n = 0;
                    return e.forEach((function(e) {
                        n += e
                    })), vc(n / t, 1)
                }
            }, {
                key: "_calcTotalCount",
                value: function() {
                    return this._e2eDelayArray.length
                }
            }, {
                key: "_calcCountWithLimit",
                value: function(e) {
                    var t = e.e2eDelayArray,
                        n = e.min,
                        o = e.max;
                    return t.filter((function(e) {
                        return n < e && e <= o
                    })).length
                }
            }, {
                key: "_calcPercent",
                value: function(e, t) {
                    var n = vc(e / t * 100, 2);
                    return n > 100 && (n = 100), n
                }
            }, {
                key: "_checkE2EDelayException",
                value: function(e, t) {
                    var n = e.filter((function(e) {
                        return e > t
                    }));
                    if (n.length > 0) {
                        var o = n.length,
                            r = Math.min.apply(Math, Jn(n)),
                            a = Math.max.apply(Math, Jn(n)),
                            s = this._calcAvg(n, o),
                            i = vc(o / e.length * 100, 2);
                        new Op(ng).setMessage("message e2e delay exception. count:".concat(o, " min:").concat(r, " max:").concat(a, " avg:").concat(s, " percent:").concat(i)).setLevel("warning").end()
                    }
                }
            }, {
                key: "getStatResult",
                value: function() {
                    var e = this._calcTotalCount();
                    if (0 === e) return null;
                    var t = Jn(this._e2eDelayArray),
                        n = this._calcCountWithLimit({
                            e2eDelayArray: t,
                            min: 0,
                            max: 1
                        }),
                        o = this._calcCountWithLimit({
                            e2eDelayArray: t,
                            min: 1,
                            max: 3
                        }),
                        r = this._calcPercent(n, e),
                        a = this._calcPercent(o, e),
                        s = this._calcAvg(t, e);
                    return this._checkE2EDelayException(t, 3), this.reset(), {
                        totalCount: e,
                        countLessThan1Second: n,
                        percentOfCountLessThan1Second: r,
                        countLessThan3Second: o,
                        percentOfCountLessThan3Second: a,
                        avgDelay: s
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this._e2eDelayArray.length = 0
                }
            }]), e
        }(),
        Mv = function() {
            function e() {
                wn(this, e), this._className = "AvgRTT", this._requestCount = 0, this._rttArray = []
            }
            return Pn(e, [{
                key: "addRequestCount",
                value: function() {
                    this._requestCount += 1
                }
            }, {
                key: "addRTT",
                value: function(e) {
                    this._rttArray.push(e)
                }
            }, {
                key: "_calcTotalCount",
                value: function() {
                    return this._requestCount
                }
            }, {
                key: "_calcRTTCount",
                value: function(e) {
                    return e.length
                }
            }, {
                key: "_calcSuccessRateOfRequest",
                value: function(e, t) {
                    if (0 === t) return 0;
                    var n = vc(e / t * 100, 2);
                    return n > 100 && (n = 100), n
                }
            }, {
                key: "_calcAvg",
                value: function(e, t) {
                    if (0 === t) return 0;
                    var n = 0;
                    return e.forEach((function(e) {
                        n += e
                    })), parseInt(n / t)
                }
            }, {
                key: "_calcMax",
                value: function() {
                    return Math.max.apply(Math, Jn(this._rttArray))
                }
            }, {
                key: "_calcMin",
                value: function() {
                    return Math.min.apply(Math, Jn(this._rttArray))
                }
            }, {
                key: "getStatResult",
                value: function() {
                    var e = this._calcTotalCount(),
                        t = Jn(this._rttArray);
                    if (0 === e) return null;
                    var n = this._calcRTTCount(t),
                        o = this._calcSuccessRateOfRequest(n, e),
                        r = this._calcAvg(t, n);
                    return Gi.log("".concat(this._className, ".getStatResult max:").concat(this._calcMax(), " min:").concat(this._calcMin(), " avg:").concat(r)), this.reset(), {
                        totalCount: e,
                        rttCount: n,
                        successRateOfRequest: o,
                        avgRTT: r
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this._requestCount = 0, this._rttArray.length = 0
                }
            }]), e
        }(),
        yv = function() {
            function e(t) {
                var n = this;
                wn(this, e), this._map = new Map, t.forEach((function(e) {
                    n._map.set(e, {
                        totalCount: 0,
                        successCount: 0,
                        failedCountOfUserSide: 0,
                        costArray: [],
                        fileSizeArray: []
                    })
                }))
            }
            return Pn(e, [{
                key: "addTotalCount",
                value: function(e) {
                    return !(Bi(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1, !0)
                }
            }, {
                key: "addSuccessCount",
                value: function(e) {
                    return !(Bi(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1, !0)
                }
            }, {
                key: "addFailedCountOfUserSide",
                value: function(e) {
                    return !(Bi(e) || !this._map.has(e)) && (this._map.get(e).failedCountOfUserSide += 1, !0)
                }
            }, {
                key: "addCost",
                value: function(e, t) {
                    return !(Bi(e) || !this._map.has(e)) && (this._map.get(e).costArray.push(t), !0)
                }
            }, {
                key: "addFileSize",
                value: function(e, t) {
                    return !(Bi(e) || !this._map.has(e)) && (this._map.get(e).fileSizeArray.push(t), !0)
                }
            }, {
                key: "_calcSuccessRateOfBusiness",
                value: function(e) {
                    if (Bi(e) || !this._map.has(e)) return -1;
                    var t = this._map.get(e),
                        n = vc(t.successCount / t.totalCount * 100, 2);
                    return n > 100 && (n = 100), n
                }
            }, {
                key: "_calcSuccessRateOfPlatform",
                value: function(e) {
                    if (Bi(e) || !this._map.has(e)) return -1;
                    var t = this._map.get(e),
                        n = this._calcSuccessCountOfPlatform(e) / t.totalCount * 100;
                    return (n = vc(n, 2)) > 100 && (n = 100), n
                }
            }, {
                key: "_calcTotalCount",
                value: function(e) {
                    return Bi(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount
                }
            }, {
                key: "_calcSuccessCountOfBusiness",
                value: function(e) {
                    return Bi(e) || !this._map.has(e) ? -1 : this._map.get(e).successCount
                }
            }, {
                key: "_calcSuccessCountOfPlatform",
                value: function(e) {
                    if (Bi(e) || !this._map.has(e)) return -1;
                    var t = this._map.get(e);
                    return t.successCount + t.failedCountOfUserSide
                }
            }, {
                key: "_calcAvg",
                value: function(e) {
                    return Bi(e) || !this._map.has(e) ? -1 : e === Tp ? this._calcAvgSpeed(e) : this._calcAvgCost(e)
                }
            }, {
                key: "_calcAvgCost",
                value: function(e) {
                    var t = this._map.get(e).costArray.length;
                    if (0 === t) return 0;
                    var n = 0;
                    return this._map.get(e).costArray.forEach((function(e) {
                        n += e
                    })), parseInt(n / t)
                }
            }, {
                key: "_calcAvgSpeed",
                value: function(e) {
                    var t = 0,
                        n = 0;
                    return this._map.get(e).costArray.forEach((function(e) {
                        t += e
                    })), this._map.get(e).fileSizeArray.forEach((function(e) {
                        n += e
                    })), parseInt(1e3 * n / t)
                }
            }, {
                key: "getStatResult",
                value: function(e) {
                    var t = this._calcTotalCount(e);
                    if (0 === t) return null;
                    var n = this._calcSuccessCountOfBusiness(e),
                        o = this._calcSuccessRateOfBusiness(e),
                        r = this._calcSuccessCountOfPlatform(e),
                        a = this._calcSuccessRateOfPlatform(e),
                        s = this._calcAvg(e);
                    return this.reset(e), {
                        totalCount: t,
                        successCountOfBusiness: n,
                        successRateOfBusiness: o,
                        successCountOfPlatform: r,
                        successRateOfPlatform: a,
                        avgValue: s
                    }
                }
            }, {
                key: "reset",
                value: function(e) {
                    Bi(e) ? this._map.clear() : this._map.set(e, {
                        totalCount: 0,
                        successCount: 0,
                        failedCountOfUserSide: 0,
                        costArray: [],
                        fileSizeArray: []
                    })
                }
            }]), e
        }(),
        Iv = function() {
            function e(t) {
                var n = this;
                wn(this, e), this._lastMap = new Map, this._currentMap = new Map, t.forEach((function(e) {
                    n._lastMap.set(e, new Map), n._currentMap.set(e, new Map)
                }))
            }
            return Pn(e, [{
                key: "addMessageSequence",
                value: function(e) {
                    var t = e.key,
                        n = e.message;
                    if (Bi(t) || !this._lastMap.has(t) || !this._currentMap.has(t)) return !1;
                    var o = n.conversationID,
                        r = n.sequence,
                        a = o.replace(ro.CONV_GROUP, "");
                    if (0 === this._lastMap.get(t).size) this._addCurrentMap(e);
                    else if (this._lastMap.get(t).has(a)) {
                        var s = this._lastMap.get(t).get(a),
                            i = s.length - 1;
                        r > s[0] && r < s[i] ? (s.push(r), s.sort(), this._lastMap.get(t).set(a, s)) : this._addCurrentMap(e)
                    } else this._addCurrentMap(e);
                    return !0
                }
            }, {
                key: "_addCurrentMap",
                value: function(e) {
                    var t = e.key,
                        n = e.message,
                        o = n.conversationID,
                        r = n.sequence,
                        a = o.replace(ro.CONV_GROUP, "");
                    this._currentMap.get(t).has(a) || this._currentMap.get(t).set(a, []), this._currentMap.get(t).get(a).push(r)
                }
            }, {
                key: "_copyData",
                value: function(e) {
                    if (!Bi(e)) {
                        this._lastMap.set(e, new Map);
                        var t, n = this._lastMap.get(e),
                            o = no(this._currentMap.get(e));
                        try {
                            for (o.s(); !(t = o.n()).done;) {
                                var r = Wn(t.value, 2),
                                    a = r[0],
                                    s = r[1];
                                n.set(a, s)
                            }
                        } catch (i) {
                            o.e(i)
                        } finally {
                            o.f()
                        }
                        n = null, this._currentMap.set(e, new Map)
                    }
                }
            }, {
                key: "getStatResult",
                value: function(e) {
                    if (Bi(this._currentMap.get(e)) || Bi(this._lastMap.get(e))) return null;
                    if (0 === this._lastMap.get(e).size) return this._copyData(e), null;
                    var t = 0,
                        n = 0;
                    if (this._lastMap.get(e).forEach((function(e, o) {
                        var r = Jn(e.values()),
                            a = r.length,
                            s = r[a - 1] - r[0] + 1;
                        t += s, n += a
                    })), 0 === t) return null;
                    var o = vc(n / t * 100, 2);
                    return o > 100 && (o = 100), this._copyData(e), {
                        totalCount: t,
                        successCountOfMessageReceived: n,
                        successRateOfMessageReceived: o
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this._currentMap.clear(), this._lastMap.clear()
                }
            }]), e
        }(),
        Sv = function(e) {
            qn(n, e);
            var t = zn(n);

            function n(e) {
                var o;
                wn(this, n), (o = t.call(this, e))._className = "QualityStatModule", o.TAG = "im-ssolog-quality-stat", o.reportIndex = 0, o.wholePeriod = !1, o._qualityItems = [mp, vp, Mp, yp, Ip, Sp, Tp, Ep, Dp, kp], o.REPORT_INTERVAL = 120, o.REPORT_SDKAPPID_BLACKLIST = [], o.REPORT_TINYID_WHITELIST = [], o._statInfoArr = [], o._avgRTT = new Mv, o._avgE2EDelay = new vv;
                var r = [Mp, yp, Ip, Sp, Tp];
                o._rateMessageSend = new yv(r);
                var a = [Ep, Dp, kp];
                o._rateMessageReceived = new Iv(a);
                var s = o.getInnerEmitterInstance();
                return s.on(X_.CONTEXT_A2KEY_AND_TINYID_UPDATED, o._onLoginSuccess, $n(o)), s.on(X_.CLOUD_CONFIG_UPDATED, o._onCloudConfigUpdated, $n(o)), o
            }
            return Pn(n, [{
                key: "_onLoginSuccess",
                value: function() {
                    var e = this,
                        t = this.getModule(Bu),
                        n = t.getItem(this.TAG, !1);
                    !Sc(n) && Hi(n.forEach) && (Gi.log("".concat(this._className, "._onLoginSuccess.get quality stat log in storage, nums=").concat(n.length)), n.forEach((function(t) {
                        e._statInfoArr.push(t)
                    })), t.removeItem(this.TAG, !1))
                }
            }, {
                key: "_onCloudConfigUpdated",
                value: function() {
                    var e = this.getCloudConfig("q_rpt_interval"),
                        t = this.getCloudConfig("q_rpt_sdkappid_bl"),
                        n = this.getCloudConfig("q_rpt_tinyid_wl");
                    Bi(e) || (this.REPORT_INTERVAL = Number(e)), Bi(t) || (this.REPORT_SDKAPPID_BLACKLIST = t.split(",").map((function(e) {
                        return Number(e)
                    }))), Bi(n) || (this.REPORT_TINYID_WHITELIST = n.split(","))
                }
            }, {
                key: "onCheckTimer",
                value: function(e) {
                    this.isLoggedIn() && e % this.REPORT_INTERVAL == 0 && (this.wholePeriod = !0, this._report())
                }
            }, {
                key: "addRequestCount",
                value: function() {
                    this._avgRTT.addRequestCount()
                }
            }, {
                key: "addRTT",
                value: function(e) {
                    this._avgRTT.addRTT(e)
                }
            }, {
                key: "addMessageDelay",
                value: function(e) {
                    this._avgE2EDelay.addMessageDelay(e)
                }
            }, {
                key: "addTotalCount",
                value: function(e) {
                    this._rateMessageSend.addTotalCount(e) || Gi.warn("".concat(this._className, ".addTotalCount invalid key:"), e)
                }
            }, {
                key: "addSuccessCount",
                value: function(e) {
                    this._rateMessageSend.addSuccessCount(e) || Gi.warn("".concat(this._className, ".addSuccessCount invalid key:"), e)
                }
            }, {
                key: "addFailedCountOfUserSide",
                value: function(e) {
                    this._rateMessageSend.addFailedCountOfUserSide(e) || Gi.warn("".concat(this._className, ".addFailedCountOfUserSide invalid key:"), e)
                }
            }, {
                key: "addCost",
                value: function(e, t) {
                    this._rateMessageSend.addCost(e, t) || Gi.warn("".concat(this._className, ".addCost invalid key or cost:"), e, t)
                }
            }, {
                key: "addFileSize",
                value: function(e, t) {
                    this._rateMessageSend.addFileSize(e, t) || Gi.warn("".concat(this._className, ".addFileSize invalid key or size:"), e, t)
                }
            }, {
                key: "addMessageSequence",
                value: function(e) {
                    this._rateMessageReceived.addMessageSequence(e) || Gi.warn("".concat(this._className, ".addMessageSequence invalid key:"), e.key)
                }
            }, {
                key: "_getQualityItem",
                value: function(e) {
                    var t = {},
                        n = Ap[this.getNetworkType()];
                    Bi(n) && (n = 8);
                    var o = {
                        qualityType: Cp[e],
                        timestamp: Li(),
                        networkType: n,
                        extension: ""
                    };
                    switch (e) {
                        case mp:
                            t = this._avgRTT.getStatResult();
                            break;
                        case vp:
                            t = this._avgE2EDelay.getStatResult();
                            break;
                        case Mp:
                        case yp:
                        case Ip:
                        case Sp:
                        case Tp:
                            t = this._rateMessageSend.getStatResult(e);
                            break;
                        case Ep:
                        case Dp:
                        case kp:
                            t = this._rateMessageReceived.getStatResult(e)
                    }
                    return null === t ? null : Fn({}, o, {}, t)
                }
            }, {
                key: "_report",
                value: function(e) {
                    var t = this,
                        n = [],
                        o = null;
                    Bi(e) ? this._qualityItems.forEach((function(e) {
                        null !== (o = t._getQualityItem(e)) && (o.reportIndex = t.reportIndex, o.wholePeriod = t.wholePeriod, n.push(o))
                    })) : null !== (o = this._getQualityItem(e)) && (o.reportIndex = this.reportIndex, o.wholePeriod = this.wholePeriod, n.push(o)), Gi.debug("".concat(this._className, "._report"), n), this._statInfoArr.length > 0 && (n = n.concat(this._statInfoArr), this._statInfoArr = []);
                    var r = this.getModule(Ku),
                        a = r.getSDKAppID(),
                        s = r.getTinyID();
                    Mc(this.REPORT_SDKAPPID_BLACKLIST, a) && !yc(this.REPORT_TINYID_WHITELIST, s) && (n = []), n.length > 0 && this._doReport(n)
                }
            }, {
                key: "_doReport",
                value: function(e) {
                    var t = this,
                        n = {
                            header: Um(this),
                            quality: e
                        };
                    this.request({
                        protocolName: Ql,
                        requestData: Fn({}, n)
                    }).then((function() {
                        t.reportIndex++, t.wholePeriod = !1
                    })).catch((function(n) {
                        Gi.warn("".concat(t._className, "._doReport, online:").concat(t.getNetworkType(), " error:"), n), t._statInfoArr = t._statInfoArr.concat(e), t._flushAtOnce()
                    }))
                }
            }, {
                key: "_flushAtOnce",
                value: function() {
                    var e = this.getModule(Bu),
                        t = e.getItem(this.TAG, !1),
                        n = this._statInfoArr;
                    if (Sc(t)) Gi.log("".concat(this._className, "._flushAtOnce count:").concat(n.length)), e.setItem(this.TAG, n, !0, !1);
                    else {
                        var o = n.concat(t);
                        o.length > 10 && (o = o.slice(0, 10)), Gi.log("".concat(this.className, "._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG, o, !0, !1)
                    }
                    this._statInfoArr = []
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), this._report(), this.reportIndex = 0, this.wholePeriod = !1, this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [], this._avgRTT.reset(), this._avgE2EDelay.reset(), this._rateMessageSend.reset(), this._rateMessageReceived.reset()
                }
            }]), n
        }(nl),
        Tv = function() {
            function e(t) {
                wn(this, e);
                var n = new Op(Lp);
                this._className = "ModuleManager", this._isReady = !1, this._startLoginTs = 0, this._moduleMap = new Map, this._innerEmitter = null, this._outerEmitter = null, this._checkCount = 0, this._checkTimer = -1, this._moduleMap.set(Ku, new Rm(this, t)), this._moduleMap.set(Zu, new _v(this)), this._moduleMap.set(tl, new Sv(this)), this._moduleMap.set(Xu, new lv(this)), this._moduleMap.set(Ju, new hv(this)), this._moduleMap.set(bu, new wm(this)), this._moduleMap.set(Pu, new zm(this)), this._moduleMap.set(Gu, new Lm(this)), this._moduleMap.set(Uu, new V_(this)), this._moduleMap.set(Vu, new gm(this)), this._moduleMap.set(Fu, new Dm(this)), this._moduleMap.set(xu, new Cm(this)), this._moduleMap.set(Bu, new Pm(this)), this._moduleMap.set(ju, new Fm(this)), this._moduleMap.set(Hu, new Vm(this)), this._moduleMap.set($u, new Bm(this)), this._moduleMap.set(Yu, new jm(this)), this._moduleMap.set(zu, new Wm(this)), this._moduleMap.set(Wu, new Jm(this)), this._moduleMap.set(Qu, new fv(this)), this._moduleMap.set(el, new mv(this));
                var o = t.instanceID,
                    r = t.oversea,
                    a = t.SDKAppID,
                    s = "instanceID:".concat(o, " oversea:").concat(r, " host:").concat(hc(), " ") + "inBrowser:".concat(ei, " inMiniApp:").concat(Zs, " SDKAppID:").concat(a, " UserAgent:").concat(oi);
                Op.bindEventStatModule(this._moduleMap.get(ju)), n.setMessage("".concat(s)).end(), Gi.info("SDK ".concat(s)), this._readyList = void 0, this._ssoLogForReady = null, this._initReadyList()
            }
            return Pn(e, [{
                key: "_startTimer",
                value: function() {
                    this._checkTimer < 0 && (this._checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3))
                }
            }, {
                key: "stopTimer",
                value: function() {
                    this._checkTimer > 0 && (clearInterval(this._checkTimer), this._checkTimer = -1, this._checkCount = 0)
                }
            }, {
                key: "_onCheckTimer",
                value: function() {
                    this._checkCount += 1;
                    var e, t = no(this._moduleMap);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = Wn(e.value, 2)[1];
                            n.onCheckTimer && n.onCheckTimer(this._checkCount)
                        }
                    } catch (o) {
                        t.e(o)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "_initReadyList",
                value: function() {
                    var e = this;
                    this._readyList = [this._moduleMap.get(bu), this._moduleMap.get(Vu)], this._readyList.forEach((function(t) {
                        t.ready((function() {
                            return e._onModuleReady()
                        }))
                    }))
                }
            }, {
                key: "_onModuleReady",
                value: function() {
                    var e = !0;
                    if (this._readyList.forEach((function(t) {
                        t.isReady() || (e = !1)
                    })), e && !this._isReady) {
                        this._isReady = !0, this._outerEmitter.emit(oo.SDK_READY);
                        var t = Date.now() - this._startLoginTs;
                        Gi.warn("SDK is ready. cost ".concat(t, " ms")), this._startLoginTs = Date.now();
                        var n = this._moduleMap.get(Hu).getNetworkType(),
                            o = this._ssoLogForReady.getStartTs() + Oi;
                        this._ssoLogForReady.setNetworkType(n).setMessage(t).start(o).end()
                    }
                }
            }, {
                key: "login",
                value: function() {
                    0 === this._startLoginTs && (Ri(), this._startLoginTs = Date.now(), this._startTimer(), this._moduleMap.get(Hu).start(), this._ssoLogForReady = new Op(Rp))
                }
            }, {
                key: "onLoginFailed",
                value: function() {
                    this._startLoginTs = 0
                }
            }, {
                key: "getOuterEmitterInstance",
                value: function() {
                    return null === this._outerEmitter && (this._outerEmitter = new Km, F_(this._outerEmitter), this._outerEmitter._emit = this._outerEmitter.emit, this._outerEmitter.emit = function(e, t) {
                        var n = arguments[0],
                            o = [n, {
                                name: arguments[0],
                                data: arguments[1]
                            }];
                        this._outerEmitter._emit.apply(this._outerEmitter, o)
                    }.bind(this)), this._outerEmitter
                }
            }, {
                key: "getInnerEmitterInstance",
                value: function() {
                    return null === this._innerEmitter && (this._innerEmitter = new Km, this._innerEmitter._emit = this._innerEmitter.emit, this._innerEmitter.emit = function(e, t) {
                        var n;
                        Vi(arguments[1]) && arguments[1].data ? (Gi.warn("inner eventData has data property, please check!"), n = [e, {
                            name: arguments[0],
                            data: arguments[1].data
                        }]) : n = [e, {
                            name: arguments[0],
                            data: arguments[1]
                        }], this._innerEmitter._emit.apply(this._innerEmitter, n)
                    }.bind(this)), this._innerEmitter
                }
            }, {
                key: "hasModule",
                value: function(e) {
                    return this._moduleMap.has(e)
                }
            }, {
                key: "getModule",
                value: function(e) {
                    return this._moduleMap.get(e)
                }
            }, {
                key: "isReady",
                value: function() {
                    return this._isReady
                }
            }, {
                key: "onError",
                value: function(e) {
                    Gi.warn("Oops! code:".concat(e.code, " message:").concat(e.message)), new Op($g).setMessage("code:".concat(e.code, " message:").concat(e.message)).setNetworkType(this.getModule(Hu).getNetworkType()).setLevel("error").end(), this.getOuterEmitterInstance().emit(oo.ERROR, e)
                }
            }, {
                key: "reset",
                value: function() {
                    Gi.log("".concat(this._className, ".reset")), Ri();
                    var e, t = no(this._moduleMap);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = Wn(e.value, 2)[1];
                            n.reset && n.reset()
                        }
                    } catch (o) {
                        t.e(o)
                    } finally {
                        t.f()
                    }
                    this._startLoginTs = 0, this._initReadyList(), this._isReady = !1, this.stopTimer(), this._outerEmitter.emit(oo.SDK_NOT_READY)
                }
            }]), e
        }(),
        Ev = function() {
            function e() {
                wn(this, e), this._funcMap = new Map
            }
            return Pn(e, [{
                key: "defense",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if ("string" != typeof e) return null;
                    if (0 === e.length) return null;
                    if ("function" != typeof t) return null;
                    if (this._funcMap.has(e) && this._funcMap.get(e).has(t)) return this._funcMap.get(e).get(t);
                    this._funcMap.has(e) || this._funcMap.set(e, new Map);
                    var o = null;
                    return this._funcMap.get(e).has(t) ? o = this._funcMap.get(e).get(t) : (o = this._pack(e, t, n), this._funcMap.get(e).set(t, o)), o
                }
            }, {
                key: "defenseOnce",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return "function" != typeof t ? null : this._pack(e, t, n)
                }
            }, {
                key: "find",
                value: function(e, t) {
                    return "string" != typeof e || 0 === e.length || "function" != typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (Gi.log("SafetyCallback.find: 找不到 func —— ".concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")), null) : (Gi.log("SafetyCallback.find: 找不到 eventName-".concat(e, " 对应的 func")), null)
                }
            }, {
                key: "delete",
                value: function(e, t) {
                    return "function" == typeof t && (!!this._funcMap.has(e) && (!!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t), 0 === this._funcMap.get(e).size && this._funcMap.delete(e), !0)))
                }
            }, {
                key: "_pack",
                value: function(e, t, n) {
                    return function() {
                        try {
                            t.apply(n, Array.from(arguments))
                        } catch (s) {
                            var o = Object.values(oo).indexOf(e);
                            if (-1 !== o) {
                                var r = Object.keys(oo)[o];
                                Gi.warn("接入侧事件 TIM.EVENT.".concat(r, " 对应的回调函数逻辑存在问题，请检查！"), s)
                            }
                            var a = new Op(Bg);
                            a.setMessage("eventName:".concat(e)).setMoreMessage(s.message).end()
                        }
                    }
                }
            }]), e
        }(),
        Dv = function() {
            function e(t) {
                wn(this, e);
                var n = {
                    SDKAppID: t.SDKAppID,
                    unlimitedAVChatRoom: t.unlimitedAVChatRoom || !1,
                    scene: t.scene || "",
                    oversea: t.oversea || !1,
                    instanceID: gc()
                };
                this._moduleManager = new Tv(n), this._safetyCallbackFactory = new Ev
            }
            return Pn(e, [{
                key: "isReady",
                value: function() {
                    return this._moduleManager.isReady()
                }
            }, {
                key: "onError",
                value: function(e) {
                    this._moduleManager.onError(e)
                }
            }, {
                key: "login",
                value: function(e) {
                    return this._moduleManager.login(), this._moduleManager.getModule(bu).login(e)
                }
            }, {
                key: "logout",
                value: function() {
                    var e = this;
                    return this._moduleManager.getModule(bu).logout().then((function(t) {
                        return e._moduleManager.reset(), t
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    return this.logout().finally((function() {
                        e._moduleManager.stopTimer(), e._moduleManager.getModule(Xu).dealloc();
                        var t = e._moduleManager.getOuterEmitterInstance(),
                            n = e._moduleManager.getModule(Ku);
                        t.emit(oo.SDK_DESTROY, {
                            SDKAppID: n.getSDKAppID()
                        })
                    }))
                }
            }, {
                key: "on",
                value: function(e, t, n) {
                    e === oo.GROUP_SYSTEM_NOTICE_RECEIVED && Gi.warn("！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupSystemNoticePayload"), Gi.debug("on", "eventName:".concat(e)), this._moduleManager.getOuterEmitterInstance().on(e, this._safetyCallbackFactory.defense(e, t, n), n)
                }
            }, {
                key: "once",
                value: function(e, t, n) {
                    Gi.debug("once", "eventName:".concat(e)), this._moduleManager.getOuterEmitterInstance().once(e, this._safetyCallbackFactory.defenseOnce(e, t, n), n || this)
                }
            }, {
                key: "off",
                value: function(e, t, n, o) {
                    Gi.debug("off", "eventName:".concat(e));
                    var r = this._safetyCallbackFactory.find(e, t);
                    null !== r && (this._moduleManager.getOuterEmitterInstance().off(e, r, n, o), this._safetyCallbackFactory.delete(e, t))
                }
            }, {
                key: "registerPlugin",
                value: function(e) {
                    this._moduleManager.getModule(zu).registerPlugin(e)
                }
            }, {
                key: "setLogLevel",
                value: function(e) {
                    if (e <= 0) {
                        console.log(["", " ________  ______  __       __  __       __  ________  _______", "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\", " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\", "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$", "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$", "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\", "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$", "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$", "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$", "", ""].join("\n")), console.log("%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc", "color:#006eff"), console.log("%c从v2.11.2起，SDK 支持了 WebSocket，小程序需要添加受信域名！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html", "color:#ff0000");
                        console.log(["", "参考以下文档，会更快解决问题哦！(#^.^#)\n", "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n", "SDK 接口文档: https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html\n", "常见问题: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-01-faq.html\n", "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n", "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"].join("\n"))
                    }
                    Gi.setLevel(e)
                }
            }, {
                key: "createTextMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createTextMessage(e)
                }
            }, {
                key: "createTextAtMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createTextMessage(e)
                }
            }, {
                key: "createImageMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createImageMessage(e)
                }
            }, {
                key: "createAudioMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createAudioMessage(e)
                }
            }, {
                key: "createVideoMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createVideoMessage(e)
                }
            }, {
                key: "createCustomMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createCustomMessage(e)
                }
            }, {
                key: "createFaceMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createFaceMessage(e)
                }
            }, {
                key: "createFileMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createFileMessage(e)
                }
            }, {
                key: "createMergerMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createMergerMessage(e)
                }
            }, {
                key: "downloadMergerMessage",
                value: function(e) {
                    return e.type !== ro.MSG_MERGER ? x_(new G_({
                        code: id.MESSAGE_MERGER_TYPE_INVALID,
                        message: Gd
                    })) : Sc(e.payload.downloadKey) ? x_(new G_({
                        code: id.MESSAGE_MERGER_KEY_INVALID,
                        message: Ud
                    })) : this._moduleManager.getModule(Pu).downloadMergerMessage(e).catch((function(e) {
                        return x_(new G_({
                            code: id.MESSAGE_MERGER_DOWNLOAD_FAIL,
                            message: Fd
                        }))
                    }))
                }
            }, {
                key: "createForwardMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).createForwardMessage(e)
                }
            }, {
                key: "sendMessage",
                value: function(e, t) {
                    return e instanceof A_ ? this._moduleManager.getModule(Pu).sendMessageInstance(e, t) : x_(new G_({
                        code: id.MESSAGE_SEND_NEED_MESSAGE_INSTANCE,
                        message: vd
                    }))
                }
            }, {
                key: "callExperimentalAPI",
                value: function(e, t) {
                    return "handleGroupInvitation" === e ? this._moduleManager.getModule(Fu).handleGroupInvitation(t) : x_(new G_({
                        code: id.INVALID_OPERATION,
                        message: pp
                    }))
                }
            }, {
                key: "revokeMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).revokeMessage(e)
                }
            }, {
                key: "resendMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).resendMessage(e)
                }
            }, {
                key: "deleteMessage",
                value: function(e) {
                    return this._moduleManager.getModule(Pu).deleteMessage(e)
                }
            }, {
                key: "getMessageList",
                value: function(e) {
                    return this._moduleManager.getModule(Vu).getMessageList(e)
                }
            }, {
                key: "setMessageRead",
                value: function(e) {
                    return this._moduleManager.getModule(Vu).setMessageRead(e)
                }
            }, {
                key: "getConversationList",
                value: function() {
                    return this._moduleManager.getModule(Vu).getConversationList()
                }
            }, {
                key: "getConversationProfile",
                value: function(e) {
                    return this._moduleManager.getModule(Vu).getConversationProfile(e)
                }
            }, {
                key: "deleteConversation",
                value: function(e) {
                    return this._moduleManager.getModule(Vu).deleteConversation(e)
                }
            }, {
                key: "getMyProfile",
                value: function() {
                    return this._moduleManager.getModule(Gu).getMyProfile()
                }
            }, {
                key: "getUserProfile",
                value: function(e) {
                    return this._moduleManager.getModule(Gu).getUserProfile(e)
                }
            }, {
                key: "updateMyProfile",
                value: function(e) {
                    return this._moduleManager.getModule(Gu).updateMyProfile(e)
                }
            }, {
                key: "getBlacklist",
                value: function() {
                    return this._moduleManager.getModule(Gu).getLocalBlacklist()
                }
            }, {
                key: "addToBlacklist",
                value: function(e) {
                    return this._moduleManager.getModule(Gu).addBlacklist(e)
                }
            }, {
                key: "removeFromBlacklist",
                value: function(e) {
                    return this._moduleManager.getModule(Gu).deleteBlacklist(e)
                }
            }, {
                key: "getFriendList",
                value: function() {
                    var e = this._moduleManager.getModule(qu);
                    return e ? e.getLocalFriendList() : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "addFriend",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.addFriend(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "deleteFriend",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.deleteFriend(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "checkFriend",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.checkFriend(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "getFriendProfile",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.getFriendProfile(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "updateFriend",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.updateFriend(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "getFriendApplicationList",
                value: function() {
                    var e = this._moduleManager.getModule(qu);
                    return e ? e.getLocalFriendApplicationList() : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "acceptFriendApplication",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.acceptFriendApplication(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "refuseFriendApplication",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.refuseFriendApplication(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "deleteFriendApplication",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.deleteFriendApplication(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "setFriendApplicationRead",
                value: function() {
                    var e = this._moduleManager.getModule(qu);
                    return e ? e.setFriendApplicationRead() : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "getFriendGroupList",
                value: function() {
                    var e = this._moduleManager.getModule(qu);
                    return e ? e.getLocalFriendGroupList() : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "createFriendGroup",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.createFriendGroup(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "deleteFriendGroup",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.deleteFriendGroup(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "addToFriendGroup",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.addToFriendGroup(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "removeFromFriendGroup",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.removeFromFriendGroup(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "renameFriendGroup",
                value: function(e) {
                    var t = this._moduleManager.getModule(qu);
                    return t ? t.renameFriendGroup(e) : x_({
                        code: id.CANNOT_FIND_MODULE,
                        message: hp
                    })
                }
            }, {
                key: "getGroupList",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).getGroupList(e)
                }
            }, {
                key: "getGroupProfile",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).getGroupProfile(e)
                }
            }, {
                key: "createGroup",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).createGroup(e)
                }
            }, {
                key: "dismissGroup",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).dismissGroup(e)
                }
            }, {
                key: "updateGroupProfile",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).updateGroupProfile(e)
                }
            }, {
                key: "joinGroup",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).joinGroup(e)
                }
            }, {
                key: "quitGroup",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).quitGroup(e)
                }
            }, {
                key: "searchGroupByID",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).searchGroupByID(e)
                }
            }, {
                key: "getGroupOnlineMemberCount",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).getGroupOnlineMemberCount(e)
                }
            }, {
                key: "changeGroupOwner",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).changeGroupOwner(e)
                }
            }, {
                key: "handleGroupApplication",
                value: function(e) {
                    return this._moduleManager.getModule(Fu).handleGroupApplication(e)
                }
            }, {
                key: "getGroupMemberList",
                value: function(e) {
                    return this._moduleManager.getModule(xu).getGroupMemberList(e)
                }
            }, {
                key: "getGroupMemberProfile",
                value: function(e) {
                    return this._moduleManager.getModule(xu).getGroupMemberProfile(e)
                }
            }, {
                key: "addGroupMember",
                value: function(e) {
                    return this._moduleManager.getModule(xu).addGroupMember(e)
                }
            }, {
                key: "deleteGroupMember",
                value: function(e) {
                    return this._moduleManager.getModule(xu).deleteGroupMember(e)
                }
            }, {
                key: "setGroupMemberMuteTime",
                value: function(e) {
                    return this._moduleManager.getModule(xu).setGroupMemberMuteTime(e)
                }
            }, {
                key: "setGroupMemberRole",
                value: function(e) {
                    return this._moduleManager.getModule(xu).setGroupMemberRole(e)
                }
            }, {
                key: "setGroupMemberNameCard",
                value: function(e) {
                    return this._moduleManager.getModule(xu).setGroupMemberNameCard(e)
                }
            }, {
                key: "setGroupMemberCustomField",
                value: function(e) {
                    return this._moduleManager.getModule(xu).setGroupMemberCustomField(e)
                }
            }, {
                key: "setMessageRemindType",
                value: function(e) {
                    return this._moduleManager.getModule(xu).setMessageRemindType(e)
                }
            }]), e
        }(),
        kv = {
            login: "login",
            logout: "logout",
            destroy: "destroy",
            on: "on",
            off: "off",
            ready: "ready",
            setLogLevel: "setLogLevel",
            joinGroup: "joinGroup",
            quitGroup: "quitGroup",
            registerPlugin: "registerPlugin",
            getGroupOnlineMemberCount: "getGroupOnlineMemberCount"
        };

    function Cv(e, t) {
        if (e.isReady() || void 0 !== kv[t]) return !0;
        var n = new G_({
            code: id.SDK_IS_NOT_READY,
            message: "".concat(t, " ").concat(fp, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/module-EVENT.html#.SDK_READY")
        });
        return e.onError(n), !1
    }
    var Nv = {},
        Av = {};
    return Av.create = function(e) {
        var t = 0;
        if (Fi(e.SDKAppID)) t = e.SDKAppID;
        else if (Gi.warn("TIM.create SDKAppID 的类型应该为 Number，请修改！"), t = parseInt(e.SDKAppID), isNaN(t)) return Gi.error("TIM.create failed. 解析 SDKAppID 失败，请检查传参！"), null;
        if (t && Nv[t]) return Nv[t];
        Gi.log("TIM.create");
        var n = new Dv(Fn({}, e, {
            SDKAppID: t
        }));
        n.on(oo.SDK_DESTROY, (function(e) {
            Nv[e.data.SDKAppID] = null, delete Nv[e.data.SDKAppID]
        }));
        var o = function(e) {
            var t = Object.create(null);
            return Object.keys(Du).forEach((function(n) {
                if (e[n]) {
                    var o = Du[n],
                        r = new go;
                    t[o] = function() {
                        var t = Array.from(arguments);
                        return r.use((function(t, o) {
                            return Cv(e, n) ? o() : x_(new G_({
                                code: id.SDK_IS_NOT_READY,
                                message: "".concat(n, " ").concat(fp, "。")
                            }))
                        })).use((function(e, t) {
                            if (!0 === Tc(e, Eu[n], o)) return t()
                        })).use((function(t, o) {
                            return e[n].apply(e, t)
                        })), r.run(t)
                    }
                }
            })), t
        }(n);
        return Nv[t] = o, Gi.log("TIM.create ok"), o
    }, Av.TYPES = ro, Av.EVENT = oo, Av.VERSION = "2.13.1", Gi.log("TIM.VERSION: ".concat(Av.VERSION)), Av
}));