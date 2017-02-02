/*! @license Firebase v3.6.4
    Build: 3.6.4-rc.2
    Terms: https://firebase.google.com/terms/

    ---

    typedarray.js
    Copyright (c) 2010, Linden Research, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE. */
var firebase = null;
(function() {
    var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        l = function() {
            l = function() {};
            h.Symbol || (h.Symbol = ba)
        },
        ca = 0,
        ba = function(a) {
            return "jscomp_symbol_" + (a || "") + ca++
        },
        n = function() {
            l();
            var a = h.Symbol.iterator;
            a || (a = h.Symbol.iterator =
                h.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return m(this)
                }
            });
            n = function() {}
        },
        m = function(a) {
            var b = 0;
            return da(function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            })
        },
        da = function(a) {
            n();
            a = {
                next: a
            };
            a[h.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        q = this,
        r = function() {},
        t = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        v = function(a) {
            return "function" == t(a)
        },
        ea = function(a,
            b, c) {
            return a.call.apply(a.bind, arguments)
        },
        fa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        w = function(a, b, c) {
            w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
            return w.apply(null, arguments)
        },
        x = function(a, b) {
            var c = Array.prototype.slice.call(arguments,
                1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        y = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ba = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.aa = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var z;
    z = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : global;

    function __extends(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    }

    function __decorate(a, b, c, d) {
        var e = arguments.length,
            f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
            g;
        g = z.Reflect;
        if ("object" === typeof g && "function" === typeof g.decorate) f = g.decorate(a, b, c, d);
        else
            for (var k = a.length - 1; 0 <= k; k--)
                if (g = a[k]) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f; return 3 < e && f && Object.defineProperty(b, c, f), f
    }

    function __metadata(a, b) {
        var c = z.Reflect;
        if ("object" === typeof c && "function" === typeof c.metadata) return c.metadata(a, b)
    }
    var __param = function(a, b) {
            return function(c, d) {
                b(c, d, a)
            }
        },
        __awaiter = function(a, b, c, d) {
            return new(c || (c = Promise))(function(e, f) {
                function g(a) {
                    try {
                        p(d.next(a))
                    } catch (u) {
                        f(u)
                    }
                }

                function k(a) {
                    try {
                        p(d.throw(a))
                    } catch (u) {
                        f(u)
                    }
                }

                function p(a) {
                    a.done ? e(a.value) : (new c(function(b) {
                        b(a.value)
                    })).then(g, k)
                }
                p((d = d.apply(a, b)).next())
            })
        };
    "undefined" !== typeof z.M && z.M || (z.__extends = __extends, z.__decorate = __decorate, z.__metadata = __metadata, z.__param = __param, z.__awaiter = __awaiter);
    var A = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, A);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    y(A, Error);
    A.prototype.name = "CustomError";
    var ga = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    };
    var B = function(a, b) {
        b.unshift(a);
        A.call(this, ga.apply(null, b));
        b.shift()
    };
    y(B, A);
    B.prototype.name = "AssertionError";
    var ha = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) var e = e + (": " + c),
                f = d;
            else a && (e += ": " + a, f = b);
            throw new B("" + e, f || []);
        },
        C = function(a, b, c) {
            a || ha("", null, b, Array.prototype.slice.call(arguments, 2))
        },
        D = function(a, b, c) {
            v(a) || ha("Expected function but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var E = function(a, b, c) {
        this.T = c;
        this.N = a;
        this.U = b;
        this.s = 0;
        this.o = null
    };
    E.prototype.get = function() {
        var a;
        0 < this.s ? (this.s--, a = this.o, this.o = a.next, a.next = null) : a = this.N();
        return a
    };
    E.prototype.put = function(a) {
        this.U(a);
        this.s < this.T && (this.s++, a.next = this.o, this.o = a)
    };
    var F;
    a: {
        var ia = q.navigator;
        if (ia) {
            var ja = ia.userAgent;
            if (ja) {
                F = ja;
                break a
            }
        }
        F = ""
    };
    var ka = function(a) {
            q.setTimeout(function() {
                throw a;
            }, 0)
        },
        G, la = function() {
            var a = q.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == F.indexOf("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol +
                    "//" + b.location.host,
                    a = w(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && -1 == F.indexOf("Trident") && -1 == F.indexOf("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var a = c.G;
                        c.G = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        G: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in
                document.createElement("SCRIPT") ? function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    q.setTimeout(a, 0)
                }
        };
    var H = function() {
            this.v = this.f = null
        },
        ma = new E(function() {
            return new I
        }, function(a) {
            a.reset()
        }, 100);
    H.prototype.add = function(a, b) {
        var c = ma.get();
        c.set(a, b);
        this.v ? this.v.next = c : (C(!this.f), this.f = c);
        this.v = c
    };
    H.prototype.remove = function() {
        var a = null;
        this.f && (a = this.f, this.f = this.f.next, this.f || (this.v = null), a.next = null);
        return a
    };
    var I = function() {
        this.next = this.scope = this.B = null
    };
    I.prototype.set = function(a, b) {
        this.B = a;
        this.scope = b;
        this.next = null
    };
    I.prototype.reset = function() {
        this.next = this.scope = this.B = null
    };
    var M = function(a, b) {
            J || na();
            L || (J(), L = !0);
            oa.add(a, b)
        },
        J, na = function() {
            var a = q.Promise;
            if (-1 != String(a).indexOf("[native code]")) {
                var b = a.resolve(void 0);
                J = function() {
                    b.then(pa)
                }
            } else J = function() {
                var a = pa;
                !v(q.setImmediate) || q.Window && q.Window.prototype && -1 == F.indexOf("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (G || (G = la()), G(a)) : q.setImmediate(a)
            }
        },
        L = !1,
        oa = new H,
        pa = function() {
            for (var a; a = oa.remove();) {
                try {
                    a.B.call(a.scope)
                } catch (b) {
                    ka(b)
                }
                ma.put(a)
            }
            L = !1
        };
    var O = function(a, b) {
            this.b = 0;
            this.L = void 0;
            this.j = this.g = this.u = null;
            this.m = this.A = !1;
            if (a != r) try {
                var c = this;
                a.call(b, function(a) {
                    N(c, 2, a)
                }, function(a) {
                    try {
                        if (a instanceof Error) throw a;
                        throw Error("Promise rejected.");
                    } catch (e) {}
                    N(c, 3, a)
                })
            } catch (d) {
                N(this, 3, d)
            }
        },
        qa = function() {
            this.next = this.context = this.h = this.c = this.child = null;
            this.w = !1
        };
    qa.prototype.reset = function() {
        this.context = this.h = this.c = this.child = null;
        this.w = !1
    };
    var ra = new E(function() {
            return new qa
        }, function(a) {
            a.reset()
        }, 100),
        sa = function(a, b, c) {
            var d = ra.get();
            d.c = a;
            d.h = b;
            d.context = c;
            return d
        },
        ua = function(a, b, c) {
            ta(a, b, c, null) || M(x(b, a))
        };
    O.prototype.then = function(a, b, c) {
        null != a && D(a, "opt_onFulfilled should be a function.");
        null != b && D(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return va(this, v(a) ? a : null, v(b) ? b : null, c)
    };
    O.prototype.then = O.prototype.then;
    O.prototype.$goog_Thenable = !0;
    O.prototype.X = function(a, b) {
        return va(this, null, a, b)
    };
    var xa = function(a, b) {
            a.g || 2 != a.b && 3 != a.b || wa(a);
            C(null != b.c);
            a.j ? a.j.next = b : a.g = b;
            a.j = b
        },
        va = function(a, b, c, d) {
            var e = sa(null, null, null);
            e.child = new O(function(a, g) {
                e.c = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (K) {
                        g(K)
                    }
                } : a;
                e.h = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        a(e)
                    } catch (K) {
                        g(K)
                    }
                } : g
            });
            e.child.u = a;
            xa(a, e);
            return e.child
        };
    O.prototype.Y = function(a) {
        C(1 == this.b);
        this.b = 0;
        N(this, 2, a)
    };
    O.prototype.Z = function(a) {
        C(1 == this.b);
        this.b = 0;
        N(this, 3, a)
    };
    var N = function(a, b, c) {
            0 == a.b && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.b = 1, ta(c, a.Y, a.Z, a) || (a.L = c, a.b = b, a.u = null, wa(a), 3 != b || ya(a, c)))
        },
        ta = function(a, b, c, d) {
            if (a instanceof O) return null != b && D(b, "opt_onFulfilled should be a function."), null != c && D(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), xa(a, sa(b || r, c || null, d)), !0;
            var e;
            if (a) try {
                e = !!a.$goog_Thenable
            } catch (g) {
                e = !1
            } else e = !1;
            if (e) return a.then(b, c, d), !0;
            e = typeof a;
            if ("object" == e && null != a || "function" == e) try {
                var f = a.then;
                if (v(f)) return za(a, f, b, c, d), !0
            } catch (g) {
                return c.call(d, g), !0
            }
            return !1
        },
        za = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, k)
            } catch (p) {
                k(p)
            }
        },
        wa = function(a) {
            a.A || (a.A = !0, M(a.P, a))
        },
        Aa = function(a) {
            var b = null;
            a.g && (b = a.g, a.g = b.next, b.next = null);
            a.g || (a.j = null);
            null != b && C(null != b.c);
            return b
        };
    O.prototype.P = function() {
        for (var a; a = Aa(this);) {
            var b = this.b,
                c = this.L;
            if (3 == b && a.h && !a.w) {
                var d;
                for (d = this; d && d.m; d = d.u) d.m = !1
            }
            if (a.child) a.child.u = null, Ba(a, b, c);
            else try {
                a.w ? a.c.call(a.context) : Ba(a, b, c)
            } catch (e) {
                Ca.call(null, e)
            }
            ra.put(a)
        }
        this.A = !1
    };
    var Ba = function(a, b, c) {
            2 == b ? a.c.call(a.context, c) : a.h && a.h.call(a.context, c)
        },
        ya = function(a, b) {
            a.m = !0;
            M(function() {
                a.m && Ca.call(null, b)
            })
        },
        Ca = ka;

    function P(a, b) {
        if (!(b instanceof Object)) return b;
        switch (b.constructor) {
            case Date:
                return new Date(b.getTime());
            case Object:
                void 0 === a && (a = {});
                break;
            case Array:
                a = [];
                break;
            default:
                return b
        }
        for (var c in b) b.hasOwnProperty(c) && (a[c] = P(a[c], b[c]));
        return a
    };
    O.all = function(a) {
        return new O(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(a, c) {
                        d--;
                        e[a] = c;
                        0 == d && b(e)
                    }, g = function(a) {
                        c(a)
                    }, k = 0, p; k < a.length; k++) p = a[k], ua(p, x(f, k), g);
            else b(e)
        })
    };
    O.resolve = function(a) {
        if (a instanceof O) return a;
        var b = new O(r);
        N(b, 2, a);
        return b
    };
    O.reject = function(a) {
        return new O(function(b, c) {
            c(a)
        })
    };
    O.prototype["catch"] = O.prototype.X;
    var Q = O;
    "undefined" !== typeof Promise && (Q = Promise);
    var Da = Q;

    function Ea(a, b) {
        a = new R(a, b);
        return a.subscribe.bind(a)
    }
    var R = function(a, b) {
        var c = this;
        this.a = [];
        this.K = 0;
        this.task = Da.resolve();
        this.l = !1;
        this.D = b;
        this.task.then(function() {
            a(c)
        }).catch(function(a) {
            c.error(a)
        })
    };
    R.prototype.next = function(a) {
        S(this, function(b) {
            b.next(a)
        })
    };
    R.prototype.error = function(a) {
        S(this, function(b) {
            b.error(a)
        });
        this.close(a)
    };
    R.prototype.complete = function() {
        S(this, function(a) {
            a.complete()
        });
        this.close()
    };
    R.prototype.subscribe = function(a, b, c) {
        var d = this,
            e;
        if (void 0 === a && void 0 === b && void 0 === c) throw Error("Missing Observer.");
        e = Fa(a) ? a : {
            next: a,
            error: b,
            complete: c
        };
        void 0 === e.next && (e.next = T);
        void 0 === e.error && (e.error = T);
        void 0 === e.complete && (e.complete = T);
        a = this.$.bind(this, this.a.length);
        this.l && this.task.then(function() {
            try {
                d.H ? e.error(d.H) : e.complete()
            } catch (f) {}
        });
        this.a.push(e);
        return a
    };
    R.prototype.$ = function(a) {
        void 0 !== this.a && void 0 !== this.a[a] && (delete this.a[a], --this.K, 0 === this.K && void 0 !== this.D && this.D(this))
    };
    var S = function(a, b) {
            if (!a.l)
                for (var c = 0; c < a.a.length; c++) Ga(a, c, b)
        },
        Ga = function(a, b, c) {
            a.task.then(function() {
                if (void 0 !== a.a && void 0 !== a.a[b]) try {
                    c(a.a[b])
                } catch (d) {
                    "undefined" !== typeof console && console.error && console.error(d)
                }
            })
        };
    R.prototype.close = function(a) {
        var b = this;
        this.l || (this.l = !0, void 0 !== a && (this.H = a), this.task.then(function() {
            b.a = void 0;
            b.D = void 0
        }))
    };

    function Fa(a) {
        if ("object" !== typeof a || null === a) return !1;
        var b;
        b = ["next", "error", "complete"];
        n();
        var c = b[Symbol.iterator];
        b = c ? c.call(b) : m(b);
        for (c = b.next(); !c.done; c = b.next())
            if (c = c.value, c in a && "function" === typeof a[c]) return !0;
        return !1
    }

    function T() {};
    var Ha = Error.captureStackTrace,
        V = function(a, b) {
            this.code = a;
            this.message = b;
            if (Ha) Ha(this, U.prototype.create);
            else {
                var c = Error.apply(this, arguments);
                this.name = "FirebaseError";
                Object.defineProperty(this, "stack", {
                    get: function() {
                        return c.stack
                    }
                })
            }
        };
    V.prototype = Object.create(Error.prototype);
    V.prototype.constructor = V;
    V.prototype.name = "FirebaseError";
    var U = function(a, b, c) {
        this.V = a;
        this.W = b;
        this.O = c;
        this.pattern = /\{\$([^}]+)}/g
    };
    U.prototype.create = function(a, b) {
        void 0 === b && (b = {});
        var c = this.O[a];
        a = this.V + "/" + a;
        var c = void 0 === c ? "Error" : c.replace(this.pattern, function(a, c) {
                a = b[c];
                return void 0 !== a ? a.toString() : "<" + c + "?>"
            }),
            c = this.W + ": " + c + " (" + a + ").",
            c = new V(a, c),
            d;
        for (d in b) b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
        return c
    };
    var W = Q,
        X = function(a, b, c) {
            var d = this;
            this.I = c;
            this.J = !1;
            this.i = {};
            this.C = b;
            this.F = P(void 0, a);
            a = "serviceAccount" in this.F;
            ("credential" in this.F || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");
            Object.keys(c.INTERNAL.factories).forEach(function(a) {
                var b =
                    c.INTERNAL.useAsService(d, a);
                null !== b && (b = d.S.bind(d, b), d[a] = b)
            })
        };
    X.prototype.delete = function() {
        var a = this;
        return (new W(function(b) {
            Y(a);
            b()
        })).then(function() {
            a.I.INTERNAL.removeApp(a.C);
            return W.all(Object.keys(a.i).map(function(b) {
                return a.i[b].INTERNAL.delete()
            }))
        }).then(function() {
            a.J = !0;
            a.i = {}
        })
    };
    X.prototype.S = function(a) {
        Y(this);
        void 0 === this.i[a] && (this.i[a] = this.I.INTERNAL.factories[a](this, this.R.bind(this)));
        return this.i[a]
    };
    X.prototype.R = function(a) {
        P(this, a)
    };
    var Y = function(a) {
        a.J && Z(Ia("deleted", {
            name: a.C
        }))
    };
    h.Object.defineProperties(X.prototype, {
        name: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                Y(this);
                return this.C
            }
        },
        options: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                Y(this);
                return this.F
            }
        }
    });
    X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");

    function Ja() {
        function a(a) {
            a = a || "[DEFAULT]";
            var b = d[a];
            void 0 === b && Z("noApp", {
                name: a
            });
            return b
        }

        function b(a, b) {
            Object.keys(e).forEach(function(d) {
                d = c(a, d);
                if (null !== d && f[d]) f[d](b, a)
            })
        }

        function c(a, b) {
            if ("serverAuth" === b) return null;
            var c = b;
            a = a.options;
            "auth" === b && (a.serviceAccount || a.credential) && (c = "serverAuth", "serverAuth" in e || Z("serverAuthMissing"));
            return c
        }
        var d = {},
            e = {},
            f = {},
            g = {
                __esModule: !0,
                initializeApp: function(a, c) {
                    void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name", {
                        name: c + ""
                    });
                    void 0 !== d[c] && Z("dupApp", {
                        name: c
                    });
                    a = new X(a, c, g);
                    d[c] = a;
                    b(a, "create");
                    void 0 != a.INTERNAL && void 0 != a.INTERNAL.getToken || P(a, {
                        INTERNAL: {
                            getToken: function() {
                                return W.resolve(null)
                            },
                            addAuthTokenListener: function() {},
                            removeAuthTokenListener: function() {}
                        }
                    });
                    return a
                },
                app: a,
                apps: null,
                Promise: W,
                SDK_VERSION: "0.0.0",
                INTERNAL: {
                    registerService: function(b, c, d, u) {
                        e[b] && Z("dupService", {
                            name: b
                        });
                        e[b] = c;
                        u && (f[b] = u);
                        c = function(c) {
                            void 0 === c && (c = a());
                            return c[b]()
                        };
                        void 0 !== d && P(c, d);
                        return g[b] = c
                    },
                    createFirebaseNamespace: Ja,
                    extendNamespace: function(a) {
                        P(g, a)
                    },
                    createSubscribe: Ea,
                    ErrorFactory: U,
                    removeApp: function(a) {
                        b(d[a], "delete");
                        delete d[a]
                    },
                    factories: e,
                    useAsService: c,
                    Promise: O,
                    deepExtend: P
                }
            };
        g["default"] = g;
        Object.defineProperty(g, "apps", {
            get: function() {
                return Object.keys(d).map(function(a) {
                    return d[a]
                })
            }
        });
        a.App = X;
        return g
    }

    function Z(a, b) {
        throw Error(Ia(a, b));
    }

    function Ia(a, b) {
        b = b || {};
        b = {
            noApp: "No Firebase App '" + b.name + "' has been created - call Firebase App.initializeApp().",
            "bad-app-name": "Illegal App name: '" + b.name + "'.",
            dupApp: "Firebase App named '" + b.name + "' already exists.",
            deleted: "Firebase App named '" + b.name + "' already deleted.",
            dupService: "Firebase Service named '" + b.name + "' already registered.",
            serverAuthMissing: "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."
        }[a];
        return void 0 === b ? "Application Error: (" + a + ")" : b
    };
    "undefined" !== typeof firebase && (firebase = Ja());
}).call(this);
firebase.SDK_VERSION = "3.6.4";
(function() {
    var h, aa = aa || {},
        l = this,
        ba = function() {},
        m = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ca = function(a) {
            return null === a
        },
        da = function(a) {
            return "array" == m(a)
        },
        ea = function(a) {
            var b = m(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        p = function(a) {
            return "string" == typeof a
        },
        fa = function(a) {
            return "number" == typeof a
        },
        q = function(a) {
            return "function" == m(a)
        },
        ga = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ha = function(a, b,
            c) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        r = function(a, b, c) {
            r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return r.apply(null, arguments)
        },
        ja = function(a, b) {
            var c = Array.prototype.slice.call(arguments,
                1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ka = Date.now || function() {
            return +new Date
        },
        t = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.gd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Af = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var u = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, u);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    t(u, Error);
    u.prototype.name = "CustomError";
    var la = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        ma = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        na = /&/g,
        oa = /</g,
        pa = />/g,
        qa = /"/g,
        ra = /'/g,
        sa = /\x00/g,
        ta = /[\x00&<>"']/,
        v = function(a, b) {
            return -1 != a.indexOf(b)
        },
        ua = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var va = function(a, b) {
        b.unshift(a);
        u.call(this, la.apply(null, b));
        b.shift()
    };
    t(va, u);
    va.prototype.name = "AssertionError";
    var wa = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) var e = e + (": " + c),
                f = d;
            else a && (e += ": " + a, f = b);
            throw new va("" + e, f || []);
        },
        w = function(a, b, c) {
            a || wa("", null, b, Array.prototype.slice.call(arguments, 2))
        },
        xa = function(a, b) {
            throw new va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        ya = function(a, b, c) {
            fa(a) || wa("Expected number but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        za = function(a, b, c) {
            p(a) || wa("Expected string but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments,
                2))
        },
        Aa = function(a, b, c) {
            q(a) || wa("Expected function but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var Ba = Array.prototype.indexOf ? function(a, b, c) {
            w(null != a.length);
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        x = Array.prototype.forEach ? function(a, b, c) {
            w(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ca = function(a, b) {
            for (var c = p(a) ?
                    a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        },
        Da = Array.prototype.map ? function(a, b, c) {
            w(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Fa = Array.prototype.some ? function(a, b, c) {
            w(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Ha = function(a) {
            var b;
            a: {
                b = Ga;
                for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : p(a) ? a.charAt(b) : a[b]
        },
        Ia = function(a, b) {
            return 0 <= Ba(a, b)
        },
        Ka = function(a, b) {
            b = Ba(a, b);
            var c;
            (c = 0 <= b) && Ja(a, b);
            return c
        },
        Ja = function(a, b) {
            w(null != a.length);
            return 1 == Array.prototype.splice.call(a, b, 1).length
        },
        La = function(a, b) {
            var c = 0;
            Ca(a, function(d, e) {
                b.call(void 0, d, e, a) && Ja(a, e) && c++
            })
        },
        Ma = function(a) {
            return Array.prototype.concat.apply(Array.prototype,
                arguments)
        },
        Na = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Oa = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        Pa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Qa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ra = function(a) {
            for (var b in a) return !1;
            return !0
        },
        Sa = function(a, b) {
            for (var c in a)
                if (!(c in b) || a[c] !== b[c]) return !1;
            for (c in b)
                if (!(c in a)) return !1;
            return !0
        },
        Ta = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Va = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Xa;
    a: {
        var Ya = l.navigator;
        if (Ya) {
            var Za = Ya.userAgent;
            if (Za) {
                Xa = Za;
                break a
            }
        }
        Xa = ""
    }
    var y = function(a) {
        return v(Xa, a)
    };
    var $a = function(a) {
        $a[" "](a);
        return a
    };
    $a[" "] = ba;
    var bb = function(a, b) {
        var c = ab;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var cb = y("Opera"),
        A = y("Trident") || y("MSIE"),
        db = y("Edge"),
        eb = db || A,
        fb = y("Gecko") && !(v(Xa.toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        gb = v(Xa.toLowerCase(), "webkit") && !y("Edge"),
        hb = function() {
            var a = l.document;
            return a ? a.documentMode : void 0
        },
        ib;
    a: {
        var jb = "",
            kb = function() {
                var a = Xa;
                if (fb) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (db) return /Edge\/([\d\.]+)/.exec(a);
                if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (gb) return /WebKit\/(\S+)/.exec(a);
                if (cb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();kb && (jb = kb ? kb[1] : "");
        if (A) {
            var lb = hb();
            if (null != lb && lb > parseFloat(jb)) {
                ib = String(lb);
                break a
            }
        }
        ib = jb
    }
    var mb = ib,
        ab = {},
        B = function(a) {
            return bb(a, function() {
                for (var b = 0, c = ma(String(mb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        k = d[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == k[0].length) break;
                        b = ua(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || ua(0 == g[2].length, 0 == k[2].length) || ua(g[2], k[2]);
                        g = g[3];
                        k = k[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        nb;
    var ob = l.document;
    nb = ob && A ? hb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;
    var pb = function(a) {
        return Da(a, function(a) {
            a = a.toString(16);
            return 1 < a.length ? a : "0" + a
        }).join("")
    };
    var qb = null,
        rb = null,
        tb = function(a) {
            var b = "";
            sb(a, function(a) {
                b += String.fromCharCode(a)
            });
            return b
        },
        sb = function(a, b) {
            function c(b) {
                for (; d < a.length;) {
                    var c = a.charAt(d++),
                        e = rb[c];
                    if (null != e) return e;
                    if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
                }
                return b
            }
            ub();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    k = c(64);
                if (64 === k && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
            }
        },
        ub = function() {
            if (!qb) {
                qb = {};
                rb = {};
                for (var a = 0; 65 > a; a++) qb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                    rb[qb[a]] = a, 62 <= a && (rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
            }
        };
    var vb = function() {
        this.ya = -1
    };
    var yb = function(a, b) {
            this.ya = 64;
            this.Pb = l.Uint8Array ? new Uint8Array(this.ya) : Array(this.ya);
            this.uc = this.Va = 0;
            this.h = [];
            this.Xe = a;
            this.Ad = b;
            this.wf = l.Int32Array ? new Int32Array(64) : Array(64);
            void 0 !== wb || (wb = l.Int32Array ? new Int32Array(xb) : xb);
            this.reset()
        },
        wb;
    t(yb, vb);
    for (var zb = [], Ab = 0; 63 > Ab; Ab++) zb[Ab] = 0;
    var Bb = Ma(128, zb);
    yb.prototype.reset = function() {
        this.uc = this.Va = 0;
        this.h = l.Int32Array ? new Int32Array(this.Ad) : Na(this.Ad)
    };
    var Cb = function(a) {
        var b = a.Pb;
        w(b.length == a.ya);
        for (var c = a.wf, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
        for (b = 16; 64 > b; b++) {
            var e = c[b - 15] | 0,
                d = c[b - 2] | 0,
                f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + g | 0
        }
        for (var d = a.h[0] | 0, e = a.h[1] | 0, k = a.h[2] | 0, n = a.h[3] | 0, z = a.h[4] | 0, Ea = a.h[5] | 0, Wa = a.h[6] | 0, f = a.h[7] | 0, b = 0; 64 > b; b++) var ne = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0,
            g = z & Ea ^ ~z & Wa,
            f = f + ((z >>> 6 |
                z << 26) ^ (z >>> 11 | z << 21) ^ (z >>> 25 | z << 7)) | 0,
            g = g + (wb[b] | 0) | 0,
            g = f + (g + (c[b] | 0) | 0) | 0,
            f = Wa,
            Wa = Ea,
            Ea = z,
            z = n + g | 0,
            n = k,
            k = e,
            e = d,
            d = g + ne | 0;
        a.h[0] = a.h[0] + d | 0;
        a.h[1] = a.h[1] + e | 0;
        a.h[2] = a.h[2] + k | 0;
        a.h[3] = a.h[3] + n | 0;
        a.h[4] = a.h[4] + z | 0;
        a.h[5] = a.h[5] + Ea | 0;
        a.h[6] = a.h[6] + Wa | 0;
        a.h[7] = a.h[7] + f | 0
    };
    yb.prototype.update = function(a, b) {
        void 0 === b && (b = a.length);
        var c = 0,
            d = this.Va;
        if (p(a))
            for (; c < b;) this.Pb[d++] = a.charCodeAt(c++), d == this.ya && (Cb(this), d = 0);
        else if (ea(a))
            for (; c < b;) {
                var e = a[c++];
                if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");
                this.Pb[d++] = e;
                d == this.ya && (Cb(this), d = 0)
            } else throw Error("message must be string or array");
        this.Va = d;
        this.uc += b
    };
    yb.prototype.digest = function() {
        var a = [],
            b = 8 * this.uc;
        56 > this.Va ? this.update(Bb, 56 - this.Va) : this.update(Bb, this.ya - (this.Va - 56));
        for (var c = 63; 56 <= c; c--) this.Pb[c] = b & 255, b /= 256;
        Cb(this);
        for (c = b = 0; c < this.Xe; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b++] = this.h[c] >> d & 255;
        return a
    };
    var xb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
        4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
    ];
    var Eb = function() {
        yb.call(this, 8, Db)
    };
    t(Eb, yb);
    var Db = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    var Fb = !A || 9 <= Number(nb),
        Gb = A && !B("9");
    !gb || B("528");
    fb && B("1.9b") || A && B("8") || cb && B("9.5") || gb && B("528");
    fb && !B("8") || A && B("9");
    var Hb = function() {
        this.Aa = this.Aa;
        this.fc = this.fc
    };
    Hb.prototype.Aa = !1;
    Hb.prototype.isDisposed = function() {
        return this.Aa
    };
    Hb.prototype.Ra = function() {
        if (this.fc)
            for (; this.fc.length;) this.fc.shift()()
    };
    var Ib = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.$a = !1;
        this.Ld = !0
    };
    Ib.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Ld = !1
    };
    var Jb = function(a, b) {
        Ib.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.qb = this.state = null;
        a && this.init(a, b)
    };
    t(Jb, Ib);
    Jb.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (fb) {
                var e;
                a: {
                    try {
                        $a(b.nodeName);
                        e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        null === d ? (this.offsetX = gb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = gb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.qb = a;
        a.defaultPrevented &&
            this.preventDefault()
    };
    Jb.prototype.preventDefault = function() {
        Jb.gd.preventDefault.call(this);
        var a = this.qb;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Gb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Jb.prototype.ze = function() {
        return this.qb
    };
    var Kb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Lb = 0;
    var Mb = function(a, b, c, d, e) {
            this.listener = a;
            this.kc = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Xb = e;
            this.key = ++Lb;
            this.gb = this.Ob = !1
        },
        Nb = function(a) {
            a.gb = !0;
            a.listener = null;
            a.kc = null;
            a.src = null;
            a.Xb = null
        };
    var Ob = function(a) {
        this.src = a;
        this.C = {};
        this.Kb = 0
    };
    Ob.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [], this.Kb++);
        var g = Pb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ob = !1)) : (b = new Mb(b, this.src, f, !!d, e), b.Ob = c, a.push(b));
        return b
    };
    Ob.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.C)) return !1;
        var e = this.C[a];
        b = Pb(e, b, c, d);
        return -1 < b ? (Nb(e[b]), Ja(e, b), 0 == e.length && (delete this.C[a], this.Kb--), !0) : !1
    };
    var Qb = function(a, b) {
        var c = b.type;
        c in a.C && Ka(a.C[c], b) && (Nb(b), 0 == a.C[c].length && (delete a.C[c], a.Kb--))
    };
    Ob.prototype.Jc = function(a, b, c, d) {
        a = this.C[a.toString()];
        var e = -1;
        a && (e = Pb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Pb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.gb && f.listener == b && f.capture == !!c && f.Xb == d) return e
        }
        return -1
    };
    var Rb = "closure_lm_" + (1E6 * Math.random() | 0),
        Sb = {},
        Tb = 0,
        Ub = function(a, b, c, d, e) {
            if (da(b))
                for (var f = 0; f < b.length; f++) Ub(a, b[f], c, d, e);
            else c = Vb(c), a && a[Kb] ? a.listen(b, c, d, e) : Wb(a, b, c, !1, d, e)
        },
        Wb = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = !!e,
                k = Xb(a);
            k || (a[Rb] = k = new Ob(a));
            c = k.add(b, c, d, e, f);
            if (!c.kc) {
                d = Yb();
                c.kc = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) a.addEventListener(b.toString(), d, g);
                else if (a.attachEvent) a.attachEvent(Zb(b.toString()), d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Tb++
            }
        },
        Yb = function() {
            var a = $b,
                b = Fb ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ac = function(a, b, c, d, e) {
            if (da(b))
                for (var f = 0; f < b.length; f++) ac(a, b[f], c, d, e);
            else c = Vb(c), a && a[Kb] ? bc(a, b, c, d, e) : Wb(a, b, c, !0, d, e)
        },
        cc = function(a, b, c, d, e) {
            if (da(b))
                for (var f = 0; f < b.length; f++) cc(a, b[f], c, d, e);
            else c = Vb(c), a && a[Kb] ? a.aa.remove(String(b), c, d, e) : a && (a = Xb(a)) && (b = a.Jc(b, c, !!d, e)) && dc(b)
        },
        dc = function(a) {
            if (!fa(a) && a && !a.gb) {
                var b = a.src;
                if (b &&
                    b[Kb]) Qb(b.aa, a);
                else {
                    var c = a.type,
                        d = a.kc;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Zb(c), d);
                    Tb--;
                    (c = Xb(b)) ? (Qb(c, a), 0 == c.Kb && (c.src = null, b[Rb] = null)) : Nb(a)
                }
            }
        },
        Zb = function(a) {
            return a in Sb ? Sb[a] : Sb[a] = "on" + a
        },
        fc = function(a, b, c, d) {
            var e = !0;
            if (a = Xb(a))
                if (b = a.C[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.gb && (f = ec(f, d), e = e && !1 !== f)
                    }
                return e
        },
        ec = function(a, b) {
            var c = a.listener,
                d = a.Xb || a.src;
            a.Ob && dc(a);
            return c.call(d,
                b)
        },
        $b = function(a, b) {
            if (a.gb) return !0;
            if (!Fb) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = l, d; d = b.shift();)
                        if (null != c[d]) c = c[d];
                        else {
                            b = null;
                            break a
                        }
                    b = c
                }
                d = b;
                b = new Jb(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.$a && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var f = fc(d[e], a, !0, b),
                            c = c && f
                    }
                    for (e = 0; !b.$a && e < d.length; e++) b.currentTarget =
                        d[e],
                    f = fc(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return ec(a, new Jb(b, this))
        },
        Xb = function(a) {
            a = a[Rb];
            return a instanceof Ob ? a : null
        },
        gc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Vb = function(a) {
            w(a, "Listener can not be null.");
            if (q(a)) return a;
            w(a.handleEvent, "An object listener must have handleEvent method.");
            a[gc] || (a[gc] = function(b) {
                return a.handleEvent(b)
            });
            return a[gc]
        };
    var hc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    var jc = function() {
        this.rc = "";
        this.fe = ic
    };
    jc.prototype.ac = !0;
    jc.prototype.Vb = function() {
        return this.rc
    };
    jc.prototype.toString = function() {
        return "Const{" + this.rc + "}"
    };
    var kc = function(a) {
            if (a instanceof jc && a.constructor === jc && a.fe === ic) return a.rc;
            xa("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        ic = {},
        lc = function(a) {
            var b = new jc;
            b.rc = a;
            return b
        };
    lc("");
    var nc = function() {
        this.ma = "";
        this.ee = mc
    };
    nc.prototype.ac = !0;
    nc.prototype.Vb = function() {
        return this.ma
    };
    nc.prototype.toString = function() {
        return "SafeUrl{" + this.ma + "}"
    };
    var oc = function(a) {
            if (a instanceof nc && a.constructor === nc && a.ee === mc) return a.ma;
            xa("expected object of type SafeUrl, got '" + a + "' of type " + m(a));
            return "type_error:SafeUrl"
        },
        pc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        rc = function(a) {
            if (a instanceof nc) return a;
            a = a.ac ? a.Vb() : String(a);
            pc.test(a) || (a = "about:invalid#zClosurez");
            return qc(a)
        },
        mc = {},
        qc = function(a) {
            var b = new nc;
            b.ma = a;
            return b
        };
    qc("about:blank");
    var sc = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        tc = function(a) {
            a = String(a);
            if (sc(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        wc = function(a) {
            var b = [];
            uc(new vc, a, b);
            return b.join("")
        },
        vc = function() {
            this.mc = void 0
        },
        uc = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (da(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], uc(a, a.mc ? a.mc.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), xc(d, c), c.push(":"), uc(a, a.mc ? a.mc.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        xc(b,
                            c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        yc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        zc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        xc = function(a, b) {
            b.push('"', a.replace(zc, function(a) {
                var b = yc[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
                    yc[a] = b);
                return b
            }), '"')
        };
    var Ac = function() {};
    Ac.prototype.kd = null;
    var Bc = function(a) {
        return a.kd || (a.kd = a.Oc())
    };
    var Cc, Dc = function() {};
    t(Dc, Ac);
    Dc.prototype.Qb = function() {
        var a = Ec(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Dc.prototype.Oc = function() {
        var a = {};
        Ec(this) && (a[0] = !0, a[1] = !0);
        return a
    };
    var Ec = function(a) {
        if (!a.zd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.zd = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.zd
    };
    Cc = new Dc;
    var Fc = function() {};
    t(Fc, Ac);
    Fc.prototype.Qb = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new Gc;
        throw Error("Unsupported browser");
    };
    Fc.prototype.Oc = function() {
        return {}
    };
    var Gc = function() {
        this.pa = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseText = "";
        this.status = -1;
        this.statusText = this.responseXML = null;
        this.pa.onload = r(this.Ce, this);
        this.pa.onerror = r(this.wd, this);
        this.pa.onprogress = r(this.De, this);
        this.pa.ontimeout = r(this.Ee, this)
    };
    h = Gc.prototype;
    h.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.pa.open(a, b)
    };
    h.send = function(a) {
        if (a)
            if ("string" == typeof a) this.pa.send(a);
            else throw Error("Only string data is supported");
        else this.pa.send()
    };
    h.abort = function() {
        this.pa.abort()
    };
    h.setRequestHeader = function() {};
    h.Ce = function() {
        this.status = 200;
        this.responseText = this.pa.responseText;
        Hc(this, 4)
    };
    h.wd = function() {
        this.status = 500;
        this.responseText = "";
        Hc(this, 4)
    };
    h.Ee = function() {
        this.wd()
    };
    h.De = function() {
        this.status = 200;
        Hc(this, 1)
    };
    var Hc = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var Jc = function() {
        this.ic = "";
        this.ge = Ic
    };
    Jc.prototype.ac = !0;
    Jc.prototype.Vb = function() {
        return this.ic
    };
    Jc.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.ic + "}"
    };
    var Ic = {};
    var Lc = function() {
        this.ma = "";
        this.de = Kc
    };
    Lc.prototype.ac = !0;
    Lc.prototype.Vb = function() {
        return this.ma
    };
    Lc.prototype.toString = function() {
        return "SafeHtml{" + this.ma + "}"
    };
    var Mc = function(a) {
            if (a instanceof Lc && a.constructor === Lc && a.de === Kc) return a.ma;
            xa("expected object of type SafeHtml, got '" + a + "' of type " + m(a));
            return "type_error:SafeHtml"
        },
        Kc = {};
    Lc.prototype.Le = function(a) {
        this.ma = a;
        return this
    };
    !fb && !A || A && 9 <= Number(nb) || fb && B("1.9.1");
    A && B("9");
    var Oc = function(a, b) {
            Oa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Nc.hasOwnProperty(d) ? a.setAttribute(Nc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Nc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };
    var Pc = function(a, b, c) {
        this.Pe = c;
        this.ne = a;
        this.cf = b;
        this.ec = 0;
        this.Yb = null
    };
    Pc.prototype.get = function() {
        var a;
        0 < this.ec ? (this.ec--, a = this.Yb, this.Yb = a.next, a.next = null) : a = this.ne();
        return a
    };
    Pc.prototype.put = function(a) {
        this.cf(a);
        this.ec < this.Pe && (this.ec++, a.next = this.Yb, this.Yb = a)
    };
    var Qc = function(a) {
            l.setTimeout(function() {
                throw a;
            }, 0)
        },
        Rc, Sc = function() {
            var a = l.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = r(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var a = c.nd;
                        c.nd = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        nd: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    l.setTimeout(a, 0)
                }
        };
    var Tc = function() {
            this.xc = this.La = null
        },
        Vc = new Pc(function() {
            return new Uc
        }, function(a) {
            a.reset()
        }, 100);
    Tc.prototype.add = function(a, b) {
        var c = Vc.get();
        c.set(a, b);
        this.xc ? this.xc.next = c : (w(!this.La), this.La = c);
        this.xc = c
    };
    Tc.prototype.remove = function() {
        var a = null;
        this.La && (a = this.La, this.La = this.La.next, this.La || (this.xc = null), a.next = null);
        return a
    };
    var Uc = function() {
        this.next = this.scope = this.Ic = null
    };
    Uc.prototype.set = function(a, b) {
        this.Ic = a;
        this.scope = b;
        this.next = null
    };
    Uc.prototype.reset = function() {
        this.next = this.scope = this.Ic = null
    };
    var $c = function(a, b) {
            Wc || Xc();
            Yc || (Wc(), Yc = !0);
            Zc.add(a, b)
        },
        Wc, Xc = function() {
            var a = l.Promise;
            if (-1 != String(a).indexOf("[native code]")) {
                var b = a.resolve(void 0);
                Wc = function() {
                    b.then(ad)
                }
            } else Wc = function() {
                var a = ad;
                !q(l.setImmediate) || l.Window && l.Window.prototype && !y("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Rc || (Rc = Sc()), Rc(a)) : l.setImmediate(a)
            }
        },
        Yc = !1,
        Zc = new Tc,
        ad = function() {
            for (var a; a = Zc.remove();) {
                try {
                    a.Ic.call(a.scope)
                } catch (b) {
                    Qc(b)
                }
                Vc.put(a)
            }
            Yc = !1
        };
    var bd = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        cd = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var C = function(a, b) {
            this.N = 0;
            this.na = void 0;
            this.Pa = this.ja = this.s = null;
            this.Wb = this.Hc = !1;
            if (a != ba) try {
                var c = this;
                a.call(b, function(a) {
                    dd(c, 2, a)
                }, function(a) {
                    if (!(a instanceof ed)) try {
                        if (a instanceof Error) throw a;
                        throw Error("Promise rejected.");
                    } catch (e) {}
                    dd(c, 3, a)
                })
            } catch (d) {
                dd(this, 3, d)
            }
        },
        fd = function() {
            this.next = this.context = this.Xa = this.Fa = this.child = null;
            this.ob = !1
        };
    fd.prototype.reset = function() {
        this.context = this.Xa = this.Fa = this.child = null;
        this.ob = !1
    };
    var gd = new Pc(function() {
            return new fd
        }, function(a) {
            a.reset()
        }, 100),
        hd = function(a, b, c) {
            var d = gd.get();
            d.Fa = a;
            d.Xa = b;
            d.context = c;
            return d
        },
        D = function(a) {
            if (a instanceof C) return a;
            var b = new C(ba);
            dd(b, 2, a);
            return b
        },
        E = function(a) {
            return new C(function(b, c) {
                c(a)
            })
        },
        jd = function(a, b, c) {
            id(a, b, c, null) || $c(ja(b, a))
        },
        kd = function(a) {
            return new C(function(b) {
                var c = a.length,
                    d = [];
                if (c)
                    for (var e = function(a, e, f) {
                            c--;
                            d[a] = e ? {
                                xe: !0,
                                value: f
                            } : {
                                xe: !1,
                                reason: f
                            };
                            0 == c && b(d)
                        }, f = 0, g; f < a.length; f++) g = a[f], jd(g, ja(e, f, !0),
                        ja(e, f, !1));
                else b(d)
            })
        };
    C.prototype.then = function(a, b, c) {
        null != a && Aa(a, "opt_onFulfilled should be a function.");
        null != b && Aa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return ld(this, q(a) ? a : null, q(b) ? b : null, c)
    };
    bd(C);
    var nd = function(a, b) {
        b = hd(b, b, void 0);
        b.ob = !0;
        md(a, b);
        return a
    };
    C.prototype.c = function(a, b) {
        return ld(this, null, a, b)
    };
    C.prototype.cancel = function(a) {
        0 == this.N && $c(function() {
            var b = new ed(a);
            od(this, b)
        }, this)
    };
    var od = function(a, b) {
            if (0 == a.N)
                if (a.s) {
                    var c = a.s;
                    if (c.ja) {
                        for (var d = 0, e = null, f = null, g = c.ja; g && (g.ob || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.N && 1 == d ? od(c, b) : (f ? (d = f, w(c.ja), w(null != d), d.next == c.Pa && (c.Pa = d), d.next = d.next.next) : pd(c), qd(c, e, 3, b)))
                    }
                    a.s = null
                } else dd(a, 3, b)
        },
        md = function(a, b) {
            a.ja || 2 != a.N && 3 != a.N || rd(a);
            w(null != b.Fa);
            a.Pa ? a.Pa.next = b : a.ja = b;
            a.Pa = b
        },
        ld = function(a, b, c, d) {
            var e = hd(null, null, null);
            e.child = new C(function(a, g) {
                e.Fa = b ? function(c) {
                        try {
                            var e = b.call(d, c);
                            a(e)
                        } catch (z) {
                            g(z)
                        }
                    } :
                    a;
                e.Xa = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        void 0 === e && b instanceof ed ? g(b) : a(e)
                    } catch (z) {
                        g(z)
                    }
                } : g
            });
            e.child.s = a;
            md(a, e);
            return e.child
        };
    C.prototype.pf = function(a) {
        w(1 == this.N);
        this.N = 0;
        dd(this, 2, a)
    };
    C.prototype.qf = function(a) {
        w(1 == this.N);
        this.N = 0;
        dd(this, 3, a)
    };
    var dd = function(a, b, c) {
            0 == a.N && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.N = 1, id(c, a.pf, a.qf, a) || (a.na = c, a.N = b, a.s = null, rd(a), 3 != b || c instanceof ed || sd(a, c)))
        },
        id = function(a, b, c, d) {
            if (a instanceof C) return null != b && Aa(b, "opt_onFulfilled should be a function."), null != c && Aa(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), md(a, hd(b || ba, c || null, d)), !0;
            if (cd(a)) return a.then(b, c, d), !0;
            if (ga(a)) try {
                var e = a.then;
                if (q(e)) return td(a,
                    e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        td = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, k)
            } catch (n) {
                k(n)
            }
        },
        rd = function(a) {
            a.Hc || (a.Hc = !0, $c(a.se, a))
        },
        pd = function(a) {
            var b = null;
            a.ja && (b = a.ja, a.ja = b.next, b.next = null);
            a.ja || (a.Pa = null);
            null != b && w(null != b.Fa);
            return b
        };
    C.prototype.se = function() {
        for (var a; a = pd(this);) qd(this, a, this.N, this.na);
        this.Hc = !1
    };
    var qd = function(a, b, c, d) {
            if (3 == c && b.Xa && !b.ob)
                for (; a && a.Wb; a = a.s) a.Wb = !1;
            if (b.child) b.child.s = null, ud(b, c, d);
            else try {
                b.ob ? b.Fa.call(b.context) : ud(b, c, d)
            } catch (e) {
                vd.call(null, e)
            }
            gd.put(b)
        },
        ud = function(a, b, c) {
            2 == b ? a.Fa.call(a.context, c) : a.Xa && a.Xa.call(a.context, c)
        },
        sd = function(a, b) {
            a.Wb = !0;
            $c(function() {
                a.Wb && vd.call(null, b)
            })
        },
        vd = Qc,
        ed = function(a) {
            u.call(this, a)
        };
    t(ed, u);
    ed.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var wd = function(a, b) {
        this.oc = [];
        this.Fd = a;
        this.qd = b || null;
        this.sb = this.Ta = !1;
        this.na = void 0;
        this.ed = this.jd = this.Cc = !1;
        this.vc = 0;
        this.s = null;
        this.Dc = 0
    };
    wd.prototype.cancel = function(a) {
        if (this.Ta) this.na instanceof wd && this.na.cancel();
        else {
            if (this.s) {
                var b = this.s;
                delete this.s;
                a ? b.cancel(a) : (b.Dc--, 0 >= b.Dc && b.cancel())
            }
            this.Fd ? this.Fd.call(this.qd, this) : this.ed = !0;
            this.Ta || xd(this, new yd)
        }
    };
    wd.prototype.od = function(a, b) {
        this.Cc = !1;
        zd(this, a, b)
    };
    var zd = function(a, b, c) {
            a.Ta = !0;
            a.na = c;
            a.sb = !b;
            Ad(a)
        },
        Cd = function(a) {
            if (a.Ta) {
                if (!a.ed) throw new Bd;
                a.ed = !1
            }
        };
    wd.prototype.callback = function(a) {
        Cd(this);
        Dd(a);
        zd(this, !0, a)
    };
    var xd = function(a, b) {
            Cd(a);
            Dd(b);
            zd(a, !1, b)
        },
        Dd = function(a) {
            w(!(a instanceof wd), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        Hd = function(a) {
            var b = Ed("https://apis.google.com/js/client.js?onload=" + Fd);
            Gd(b, null, a, void 0)
        },
        Gd = function(a, b, c, d) {
            w(!a.jd, "Blocking Deferreds can not be re-used");
            a.oc.push([b, c, d]);
            a.Ta && Ad(a)
        };
    wd.prototype.then = function(a, b, c) {
        var d, e, f = new C(function(a, b) {
            d = a;
            e = b
        });
        Gd(this, d, function(a) {
            a instanceof yd ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    bd(wd);
    var Id = function(a) {
            return Fa(a.oc, function(a) {
                return q(a[1])
            })
        },
        Ad = function(a) {
            if (a.vc && a.Ta && Id(a)) {
                var b = a.vc,
                    c = Jd[b];
                c && (l.clearTimeout(c.tb), delete Jd[b]);
                a.vc = 0
            }
            a.s && (a.s.Dc--, delete a.s);
            for (var b = a.na, d = c = !1; a.oc.length && !a.Cc;) {
                var e = a.oc.shift(),
                    f = e[0],
                    g = e[1],
                    e = e[2];
                if (f = a.sb ? g : f) try {
                    var k = f.call(e || a.qd, b);
                    void 0 !== k && (a.sb = a.sb && (k == b || k instanceof Error), a.na = b = k);
                    if (cd(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.Cc = !0
                } catch (n) {
                    b = n, a.sb = !0, Id(a) || (c = !0)
                }
            }
            a.na = b;
            d &&
                (k = r(a.od, a, !0), d = r(a.od, a, !1), b instanceof wd ? (Gd(b, k, d), b.jd = !0) : b.then(k, d));
            c && (b = new Kd(b), Jd[b.tb] = b, a.vc = b.tb)
        },
        Bd = function() {
            u.call(this)
        };
    t(Bd, u);
    Bd.prototype.message = "Deferred has already fired";
    Bd.prototype.name = "AlreadyCalledError";
    var yd = function() {
        u.call(this)
    };
    t(yd, u);
    yd.prototype.message = "Deferred was canceled";
    yd.prototype.name = "CanceledError";
    var Kd = function(a) {
        this.tb = l.setTimeout(r(this.nf, this), 0);
        this.P = a
    };
    Kd.prototype.nf = function() {
        w(Jd[this.tb], "Cannot throw an error that is not scheduled.");
        delete Jd[this.tb];
        throw this.P;
    };
    var Jd = {};
    var Ed = function(a) {
            var b = new Jc;
            b.ic = a;
            return Ld(b)
        },
        Ld = function(a) {
            var b = {},
                c = b.document || document,
                d;
            a instanceof Jc && a.constructor === Jc && a.ge === Ic ? d = a.ic : (xa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + m(a)), d = "type_error:TrustedResourceUrl");
            var e = document.createElement("SCRIPT");
            a = {
                Md: e,
                Jb: void 0
            };
            var f = new wd(Md, a),
                g = null,
                k = null != b.timeout ? b.timeout : 5E3;
            0 < k && (g = window.setTimeout(function() {
                Nd(e, !0);
                xd(f, new Od(1, "Timeout reached for loading script " + d))
            }, k), a.Jb = g);
            e.onload =
                e.onreadystatechange = function() {
                    e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Nd(e, b.Bf || !1, g), f.callback(null))
                };
            e.onerror = function() {
                Nd(e, !0, g);
                xd(f, new Od(0, "Error while loading script " + d))
            };
            a = b.attributes || {};
            Va(a, {
                type: "text/javascript",
                charset: "UTF-8",
                src: d
            });
            Oc(e, a);
            Pd(c).appendChild(e);
            return f
        },
        Pd = function(a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
        },
        Md = function() {
            if (this && this.Md) {
                var a = this.Md;
                a && "SCRIPT" == a.tagName &&
                    Nd(a, !0, this.Jb)
            }
        },
        Nd = function(a, b, c) {
            null != c && l.clearTimeout(c);
            a.onload = ba;
            a.onerror = ba;
            a.onreadystatechange = ba;
            b && window.setTimeout(function() {
                a && a.parentNode && a.parentNode.removeChild(a)
            }, 0)
        },
        Od = function(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            u.call(this, c);
            this.code = a
        };
    t(Od, u);
    var Qd = function() {
        Hb.call(this);
        this.aa = new Ob(this);
        this.je = this;
        this.Uc = null
    };
    t(Qd, Hb);
    Qd.prototype[Kb] = !0;
    h = Qd.prototype;
    h.addEventListener = function(a, b, c, d) {
        Ub(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        cc(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        Rd(this);
        var b, c = this.Uc;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Uc) b.push(c), w(1E3 > ++d, "infinite loop")
        }
        c = this.je;
        d = a.type || a;
        if (p(a)) a = new Ib(a, c);
        else if (a instanceof Ib) a.target = a.target || c;
        else {
            var e = a;
            a = new Ib(d, c);
            Va(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; !a.$a && 0 <= g; g--) f = a.currentTarget = b[g], e = Sd(f, d, !0, a) && e;
        a.$a || (f = a.currentTarget = c, e = Sd(f, d, !0, a) && e, a.$a || (e = Sd(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.$a && g < b.length; g++) f = a.currentTarget = b[g], e = Sd(f, d, !1, a) && e;
        return e
    };
    h.Ra = function() {
        Qd.gd.Ra.call(this);
        if (this.aa) {
            var a = this.aa,
                b = 0,
                c;
            for (c in a.C) {
                for (var d = a.C[c], e = 0; e < d.length; e++) ++b, Nb(d[e]);
                delete a.C[c];
                a.Kb--
            }
        }
        this.Uc = null
    };
    h.listen = function(a, b, c, d) {
        Rd(this);
        return this.aa.add(String(a), b, !1, c, d)
    };
    var bc = function(a, b, c, d, e) {
            a.aa.add(String(b), c, !0, d, e)
        },
        Sd = function(a, b, c, d) {
            b = a.aa.C[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.gb && g.capture == c) {
                    var k = g.listener,
                        n = g.Xb || g.src;
                    g.Ob && Qb(a.aa, g);
                    e = !1 !== k.call(n, d) && e
                }
            }
            return e && 0 != d.Ld
        };
    Qd.prototype.Jc = function(a, b, c, d) {
        return this.aa.Jc(String(a), b, c, d)
    };
    var Rd = function(a) {
        w(a.aa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Td = "StopIteration" in l ? l.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Ud = function() {};
    Ud.prototype.next = function() {
        throw Td;
    };
    Ud.prototype.ie = function() {
        return this
    };
    var Vd = function(a, b) {
        this.ba = {};
        this.w = [];
        this.nb = this.o = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    Vd.prototype.Y = function() {
        Wd(this);
        for (var a = [], b = 0; b < this.w.length; b++) a.push(this.ba[this.w[b]]);
        return a
    };
    Vd.prototype.ka = function() {
        Wd(this);
        return this.w.concat()
    };
    Vd.prototype.pb = function(a) {
        return Xd(this.ba, a)
    };
    Vd.prototype.remove = function(a) {
        return Xd(this.ba, a) ? (delete this.ba[a], this.o--, this.nb++, this.w.length > 2 * this.o && Wd(this), !0) : !1
    };
    var Wd = function(a) {
        if (a.o != a.w.length) {
            for (var b = 0, c = 0; b < a.w.length;) {
                var d = a.w[b];
                Xd(a.ba, d) && (a.w[c++] = d);
                b++
            }
            a.w.length = c
        }
        if (a.o != a.w.length) {
            for (var e = {}, c = b = 0; b < a.w.length;) d = a.w[b], Xd(e, d) || (a.w[c++] = d, e[d] = 1), b++;
            a.w.length = c
        }
    };
    h = Vd.prototype;
    h.get = function(a, b) {
        return Xd(this.ba, a) ? this.ba[a] : b
    };
    h.set = function(a, b) {
        Xd(this.ba, a) || (this.o++, this.w.push(a), this.nb++);
        this.ba[a] = b
    };
    h.addAll = function(a) {
        var b;
        a instanceof Vd ? (b = a.ka(), a = a.Y()) : (b = Qa(a), a = Pa(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    h.forEach = function(a, b) {
        for (var c = this.ka(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function() {
        return new Vd(this)
    };
    h.ie = function(a) {
        Wd(this);
        var b = 0,
            c = this.nb,
            d = this,
            e = new Ud;
        e.next = function() {
            if (c != d.nb) throw Error("The map has changed since the iterator was created");
            if (b >= d.w.length) throw Td;
            var e = d.w[b++];
            return a ? e : d.ba[e]
        };
        return e
    };
    var Xd = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Yd = function(a) {
            if (a.Y && "function" == typeof a.Y) return a.Y();
            if (p(a)) return a.split("");
            if (ea(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Pa(a)
        },
        Zd = function(a) {
            if (a.ka && "function" == typeof a.ka) return a.ka();
            if (!a.Y || "function" != typeof a.Y) {
                if (ea(a) || p(a)) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return Qa(a)
            }
        },
        $d = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (ea(a) || p(a)) x(a, b, void 0);
            else
                for (var c = Zd(a), d = Yd(a), e =
                        d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        };
    var ae = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    ae.prototype.sd = null;
    var be = 0;
    ae.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || be++;
        d || ka();
        this.wb = a;
        this.Ue = b;
        delete this.sd
    };
    ae.prototype.Pd = function(a) {
        this.wb = a
    };
    var ce = function(a) {
            this.Ve = a;
            this.xd = this.Ec = this.wb = this.s = null
        },
        de = function(a, b) {
            this.name = a;
            this.value = b
        };
    de.prototype.toString = function() {
        return this.name
    };
    var ee = new de("SEVERE", 1E3),
        fe = new de("CONFIG", 700),
        ge = new de("FINE", 500);
    ce.prototype.getParent = function() {
        return this.s
    };
    ce.prototype.Pd = function(a) {
        this.wb = a
    };
    var he = function(a) {
        if (a.wb) return a.wb;
        if (a.s) return he(a.s);
        xa("Root logger has no level set.");
        return null
    };
    ce.prototype.log = function(a, b, c) {
        if (a.value >= he(this).value)
            for (q(b) && (b = b()), a = new ae(a, String(b), this.Ve), c && (a.sd = c), c = "log:" + a.Ue, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.xd)
                    for (var f = 0; b = d.xd[f]; f++) b(e);
                c = c.getParent()
            }
    };
    var ie = {},
        je = null,
        ke = function(a) {
            je || (je = new ce(""), ie[""] = je, je.Pd(fe));
            var b;
            if (!(b = ie[a])) {
                b = new ce(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = ke(a.substr(0, c));
                c.Ec || (c.Ec = {});
                c.Ec[d] = b;
                b.s = c;
                ie[a] = b
            }
            return b
        };
    var F = function(a, b) {
        a && a.log(ge, b, void 0)
    };
    var le = function(a, b, c) {
            if (q(a)) c && (a = r(a, c));
            else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
        },
        me = function(a) {
            var b = null;
            return (new C(function(c, d) {
                b = le(function() {
                    c(void 0)
                }, a); - 1 == b && d(Error("Failed to schedule timer."))
            })).c(function(a) {
                l.clearTimeout(b);
                throw a;
            })
        };
    var oe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        pe = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e, f = null;
                    0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
                    b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
            }
        };
    var G = function(a) {
        Qd.call(this);
        this.headers = new Vd;
        this.zc = a || null;
        this.qa = !1;
        this.yc = this.b = null;
        this.vb = this.Dd = this.dc = "";
        this.Ca = this.Mc = this.bc = this.Gc = !1;
        this.kb = 0;
        this.tc = null;
        this.Kd = "";
        this.wc = this.af = this.$d = !1
    };
    t(G, Qd);
    var qe = G.prototype,
        re = ke("goog.net.XhrIo");
    qe.V = re;
    var se = /^https?$/i,
        te = ["POST", "PUT"];
    G.prototype.send = function(a, b, c, d) {
        if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.dc + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.dc = a;
        this.vb = "";
        this.Dd = b;
        this.Gc = !1;
        this.qa = !0;
        this.b = this.zc ? this.zc.Qb() : Cc.Qb();
        this.yc = this.zc ? Bc(this.zc) : Bc(Cc);
        this.b.onreadystatechange = r(this.Hd, this);
        this.af && "onprogress" in this.b && (this.b.onprogress = r(function(a) {
            this.Gd(a, !0)
        }, this), this.b.upload && (this.b.upload.onprogress = r(this.Gd, this)));
        try {
            F(this.V, ue(this, "Opening Xhr")),
                this.Mc = !0, this.b.open(b, String(a), !0), this.Mc = !1
        } catch (f) {
            F(this.V, ue(this, "Error opening Xhr: " + f.message));
            this.P(5, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && $d(d, function(a, b) {
            e.set(b, a)
        });
        d = Ha(e.ka());
        c = l.FormData && a instanceof l.FormData;
        !Ia(te, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.b.setRequestHeader(b, a)
        }, this);
        this.Kd && (this.b.responseType = this.Kd);
        "withCredentials" in this.b && this.b.withCredentials !== this.$d && (this.b.withCredentials =
            this.$d);
        try {
            ve(this), 0 < this.kb && (this.wc = we(this.b), F(this.V, ue(this, "Will abort after " + this.kb + "ms if incomplete, xhr2 " + this.wc)), this.wc ? (this.b.timeout = this.kb, this.b.ontimeout = r(this.Jb, this)) : this.tc = le(this.Jb, this.kb, this)), F(this.V, ue(this, "Sending request")), this.bc = !0, this.b.send(a), this.bc = !1
        } catch (f) {
            F(this.V, ue(this, "Send error: " + f.message)), this.P(5, f)
        }
    };
    var we = function(a) {
            return A && B(9) && fa(a.timeout) && void 0 !== a.ontimeout
        },
        Ga = function(a) {
            return "content-type" == a.toLowerCase()
        };
    G.prototype.Jb = function() {
        "undefined" != typeof aa && this.b && (this.vb = "Timed out after " + this.kb + "ms, aborting", F(this.V, ue(this, this.vb)), this.dispatchEvent("timeout"), this.abort(8))
    };
    G.prototype.P = function(a, b) {
        this.qa = !1;
        this.b && (this.Ca = !0, this.b.abort(), this.Ca = !1);
        this.vb = b;
        xe(this);
        ye(this)
    };
    var xe = function(a) {
        a.Gc || (a.Gc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    G.prototype.abort = function() {
        this.b && this.qa && (F(this.V, ue(this, "Aborting")), this.qa = !1, this.Ca = !0, this.b.abort(), this.Ca = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ye(this))
    };
    G.prototype.Ra = function() {
        this.b && (this.qa && (this.qa = !1, this.Ca = !0, this.b.abort(), this.Ca = !1), ye(this, !0));
        G.gd.Ra.call(this)
    };
    G.prototype.Hd = function() {
        this.isDisposed() || (this.Mc || this.bc || this.Ca ? ze(this) : this.Ze())
    };
    G.prototype.Ze = function() {
        ze(this)
    };
    var ze = function(a) {
        if (a.qa && "undefined" != typeof aa)
            if (a.yc[1] && 4 == Ae(a) && 2 == Be(a)) F(a.V, ue(a, "Local request error detected and ignored"));
            else if (a.bc && 4 == Ae(a)) le(a.Hd, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == Ae(a)) {
            F(a.V, ue(a, "Request complete"));
            a.qa = !1;
            try {
                var b = Be(a),
                    c;
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.dc).match(oe)[1] || null;
                        if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                            f = g.substr(0, g.length - 1);
                        e = !se.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    var k;
                    try {
                        k = 2 < Ae(a) ? a.b.statusText : ""
                    } catch (n) {
                        F(a.V, "Can not get status: " + n.message), k = ""
                    }
                    a.vb = k + " [" + Be(a) + "]";
                    xe(a)
                }
            } finally {
                ye(a)
            }
        }
    };
    G.prototype.Gd = function(a, b) {
        w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
        this.dispatchEvent(Ce(a, "progress"));
        this.dispatchEvent(Ce(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Ce = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        },
        ye = function(a, b) {
            if (a.b) {
                ve(a);
                var c = a.b,
                    d = a.yc[0] ? ba : null;
                a.b = null;
                a.yc = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    (a = a.V) && a.log(ee, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
                }
            }
        },
        ve = function(a) {
            a.b && a.wc && (a.b.ontimeout = null);
            fa(a.tc) && (l.clearTimeout(a.tc), a.tc = null)
        },
        Ae = function(a) {
            return a.b ? a.b.readyState : 0
        },
        Be = function(a) {
            try {
                return 2 < Ae(a) ?
                    a.b.status : -1
            } catch (b) {
                return -1
            }
        },
        De = function(a) {
            try {
                return a.b ? a.b.responseText : ""
            } catch (b) {
                return F(a.V, "Can not get responseText: " + b.message), ""
            }
        },
        ue = function(a, b) {
            return b + " [" + a.Dd + " " + a.dc + " " + Be(a) + "]"
        };
    var Ee = function(a, b) {
        this.$ = this.Ja = this.da = "";
        this.Za = null;
        this.Ba = this.sa = "";
        this.S = this.Oe = !1;
        var c;
        a instanceof Ee ? (this.S = void 0 !== b ? b : a.S, Fe(this, a.da), c = a.Ja, H(this), this.Ja = c, Ge(this, a.$), He(this, a.Za), Ie(this, a.sa), Je(this, a.D.clone()), a = a.Ba, H(this), this.Ba = a) : a && (c = String(a).match(oe)) ? (this.S = !!b, Fe(this, c[1] || "", !0), a = c[2] || "", H(this), this.Ja = Ke(a), Ge(this, c[3] || "", !0), He(this, c[4]), Ie(this, c[5] || "", !0), Je(this, c[6] || "", !0), a = c[7] || "", H(this), this.Ba = Ke(a)) : (this.S = !!b, this.D = new I(null,
            0, this.S))
    };
    Ee.prototype.toString = function() {
        var a = [],
            b = this.da;
        b && a.push(Le(b, Me, !0), ":");
        var c = this.$;
        if (c || "file" == b) a.push("//"), (b = this.Ja) && a.push(Le(b, Me, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Za, null != c && a.push(":", String(c));
        if (c = this.sa) this.$ && "/" != c.charAt(0) && a.push("/"), a.push(Le(c, "/" == c.charAt(0) ? Ne : Oe, !0));
        (c = this.D.toString()) && a.push("?", c);
        (c = this.Ba) && a.push("#", Le(c, Pe));
        return a.join("")
    };
    Ee.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.da;
        c ? Fe(b, a.da) : c = !!a.Ja;
        if (c) {
            var d = a.Ja;
            H(b);
            b.Ja = d
        } else c = !!a.$;
        c ? Ge(b, a.$) : c = null != a.Za;
        d = a.sa;
        if (c) He(b, a.Za);
        else if (c = !!a.sa) {
            if ("/" != d.charAt(0))
                if (this.$ && !this.sa) d = "/" + d;
                else {
                    var e = b.sa.lastIndexOf("/"); - 1 != e && (d = b.sa.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (v(e, "./") || v(e, "/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length ||
                        1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? Ie(b, d) : c = "" !== a.D.toString();
        c ? Je(b, a.D.clone()) : c = !!a.Ba;
        c && (a = a.Ba, H(b), b.Ba = a);
        return b
    };
    Ee.prototype.clone = function() {
        return new Ee(this)
    };
    var Fe = function(a, b, c) {
            H(a);
            a.da = c ? Ke(b, !0) : b;
            a.da && (a.da = a.da.replace(/:$/, ""))
        },
        Ge = function(a, b, c) {
            H(a);
            a.$ = c ? Ke(b, !0) : b
        },
        He = function(a, b) {
            H(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.Za = b
            } else a.Za = null
        },
        Ie = function(a, b, c) {
            H(a);
            a.sa = c ? Ke(b, !0) : b
        },
        Je = function(a, b, c) {
            H(a);
            b instanceof I ? (a.D = b, a.D.dd(a.S)) : (c || (b = Le(b, Qe)), a.D = new I(b, 0, a.S))
        },
        J = function(a, b, c) {
            H(a);
            a.D.set(b, c)
        },
        Re = function(a, b) {
            H(a);
            a.D.remove(b)
        },
        H = function(a) {
            if (a.Oe) throw Error("Tried to modify a read-only Uri");
        };
    Ee.prototype.dd = function(a) {
        this.S = a;
        this.D && this.D.dd(a);
        return this
    };
    var Se = function(a) {
            return a instanceof Ee ? a.clone() : new Ee(a, void 0)
        },
        Te = function(a, b) {
            var c = new Ee(null, void 0);
            Fe(c, "https");
            a && Ge(c, a);
            b && Ie(c, b);
            return c
        },
        Ke = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Le = function(a, b, c) {
            return p(a) ? (a = encodeURI(a).replace(b, Ue), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Ue = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Me = /[#\/\?@]/g,
        Oe = /[\#\?:]/g,
        Ne = /[\#\?]/g,
        Qe = /[\#\?@]/g,
        Pe = /#/g,
        I = function(a, b, c) {
            this.o = this.l = null;
            this.O = a || null;
            this.S = !!c
        },
        Ve = function(a) {
            a.l || (a.l = new Vd, a.o = 0, a.O && pe(a.O, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        },
        Xe = function(a) {
            var b = Zd(a);
            if ("undefined" == typeof b) throw Error("Keys are undefined");
            var c = new I(null, 0, void 0);
            a = Yd(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = a[d];
                da(f) ? We(c, e, f) : c.add(e, f)
            }
            return c
        };
    h = I.prototype;
    h.add = function(a, b) {
        Ve(this);
        this.O = null;
        a = this.R(a);
        var c = this.l.get(a);
        c || this.l.set(a, c = []);
        c.push(b);
        this.o = ya(this.o) + 1;
        return this
    };
    h.remove = function(a) {
        Ve(this);
        a = this.R(a);
        return this.l.pb(a) ? (this.O = null, this.o = ya(this.o) - this.l.get(a).length, this.l.remove(a)) : !1
    };
    h.pb = function(a) {
        Ve(this);
        a = this.R(a);
        return this.l.pb(a)
    };
    h.ka = function() {
        Ve(this);
        for (var a = this.l.Y(), b = this.l.ka(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.Y = function(a) {
        Ve(this);
        var b = [];
        if (p(a)) this.pb(a) && (b = Ma(b, this.l.get(this.R(a))));
        else {
            a = this.l.Y();
            for (var c = 0; c < a.length; c++) b = Ma(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        Ve(this);
        this.O = null;
        a = this.R(a);
        this.pb(a) && (this.o = ya(this.o) - this.l.get(a).length);
        this.l.set(a, [b]);
        this.o = ya(this.o) + 1;
        return this
    };
    h.get = function(a, b) {
        a = a ? this.Y(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    var We = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.O = null, a.l.set(a.R(b), Na(c)), a.o = ya(a.o) + c.length)
    };
    I.prototype.toString = function() {
        if (this.O) return this.O;
        if (!this.l) return "";
        for (var a = [], b = this.l.ka(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Y(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.O = a.join("&")
    };
    I.prototype.clone = function() {
        var a = new I;
        a.O = this.O;
        this.l && (a.l = this.l.clone(), a.o = this.o);
        return a
    };
    I.prototype.R = function(a) {
        a = String(a);
        this.S && (a = a.toLowerCase());
        return a
    };
    I.prototype.dd = function(a) {
        a && !this.S && (Ve(this), this.O = null, this.l.forEach(function(a, c) {
            var b = c.toLowerCase();
            c != b && (this.remove(c), We(this, b, a))
        }, this));
        this.S = a
    };
    var Ye = function() {
            var a = K();
            return A && !!nb && 11 == nb || /Edge\/\d+/.test(a)
        },
        Ze = function() {
            return l.window && l.window.location.href || ""
        },
        $e = function(a, b) {
            var c = [],
                d;
            for (d in a) d in b ? typeof a[d] != typeof b[d] ? c.push(d) : da(a[d]) ? Sa(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < $e(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
            for (d in b) d in a || c.push(d);
            return c
        },
        bf = function() {
            var a;
            a = K();
            a = "Chrome" != af(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1],
                10) : null;
            return a && 30 > a ? !1 : !A || !nb || 9 < nb
        },
        cf = function(a) {
            a = (a || K()).toLowerCase();
            return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1
        },
        df = function(a) {
            a = a || l.window;
            try {
                a.close()
            } catch (b) {}
        },
        ef = function(a, b, c) {
            var d = Math.floor(1E9 * Math.random()).toString();
            b = b || 500;
            c = c || 600;
            var e = (window.screen.availHeight - c) / 2,
                f = (window.screen.availWidth - b) / 2;
            b = {
                width: b,
                height: c,
                top: 0 < e ? e : 0,
                left: 0 < f ? f : 0,
                location: !0,
                resizable: !0,
                statusbar: !0,
                toolbar: !1
            };
            c = K().toLowerCase();
            d && (b.target = d, v(c, "crios/") && (b.target = "_blank"));
            "Firefox" == af(K()) && (a = a || "http://localhost", b.scrollbars = !0);
            var g;
            c = a || "about:blank";
            (d = b) || (d = {});
            a = window;
            b = c instanceof nc ? c : rc("undefined" != typeof c.href ? c.href : String(c));
            c = d.target || c.target;
            e = [];
            for (g in d) switch (g) {
                case "width":
                case "height":
                case "top":
                case "left":
                    e.push(g + "=" + d[g]);
                    break;
                case "target":
                case "noreferrer":
                    break;
                default:
                    e.push(g + "=" + (d[g] ? 1 : 0))
            }
            g = e.join(",");
            (y("iPhone") && !y("iPod") &&
                !y("iPad") || y("iPad") || y("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ga(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, w(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",
                f)), b = b instanceof nc ? b : rc(b), g.href = oc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = oc(b), g && (eb && v(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = lc("b/12014412, meta tag with sanitized URL"), ta.test(d) && (-1 != d.indexOf("&") && (d = d.replace(na, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(oa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(pa,
                "&gt;")), -1 != d.indexOf('"') && (d = d.replace(qa, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(ra, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(sa, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', za(kc(a), "must provide justification"), w(!/^[\s\xa0]*$/.test(kc(a)), "must provide non-empty justification"), g.document.write(Mc((new Lc).Le(d))), g.document.close())) : g = a.open(oc(b), c, g);
            if (g) try {
                g.focus()
            } catch (k) {}
            return g
        },
        ff = function(a) {
            return new C(function(b) {
                var c = function() {
                    me(2E3).then(function() {
                        if (!a ||
                            a.closed) b();
                        else return c()
                    })
                };
                return c()
            })
        },
        gf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        hf = function() {
            var a = null;
            return (new C(function(b) {
                "complete" == l.document.readyState ? b() : (a = function() {
                    b()
                }, ac(window, "load", a))
            })).c(function(b) {
                cc(window, "load", a);
                throw b;
            })
        },
        kf = function() {
            return jf(void 0) ? hf().then(function() {
                return new C(function(a, b) {
                    var c = l.document,
                        d = setTimeout(function() {
                            b(Error("Cordova framework is not ready."))
                        }, 1E3);
                    c.addEventListener("deviceready", function() {
                        clearTimeout(d);
                        a()
                    }, !1)
                })
            }) : E(Error("Cordova must run in an Android or iOS file scheme."))
        },
        jf = function(a) {
            a = a || K();
            return !("file:" !== lf() || !a.toLowerCase().match(/iphone|ipad|ipod|android/))
        },
        L = function() {
            return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : l.hasOwnProperty("process") ? "Node" : "Browser"
        },
        mf = function() {
            var a = L();
            return "ReactNative" === a || "Node" === a
        },
        af = function(a) {
            var b = a.toLowerCase();
            if (v(b, "opera/") || v(b, "opr/") || v(b, "opios/")) return "Opera";
            if (v(b, "iemobile")) return "IEMobile";
            if (v(b,
                    "msie") || v(b, "trident/")) return "IE";
            if (v(b, "edge/")) return "Edge";
            if (v(b, "firefox/")) return "Firefox";
            if (v(b, "silk/")) return "Silk";
            if (v(b, "blackberry")) return "Blackberry";
            if (v(b, "webos")) return "Webos";
            if (!v(b, "safari/") || v(b, "chrome/") || v(b, "crios/") || v(b, "android"))
                if (!v(b, "chrome/") && !v(b, "crios/") || v(b, "edge/")) {
                    if (v(b, "android")) return "Android";
                    if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1]
                } else return "Chrome";
            else return "Safari";
            return "Other"
        },
        nf = function(a) {
            var b = L();
            return ("Browser" === b ? af(K()) : b) + "/JsCore/" + a
        },
        K = function() {
            return l.navigator && l.navigator.userAgent || ""
        },
        M = function(a, b) {
            a = a.split(".");
            b = b || l;
            for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) b = b[a[c]];
            c != a.length && (b = void 0);
            return b
        },
        pf = function() {
            var a;
            if (a = ("http:" === lf() || "https:" === lf() || jf() && !1) && !mf()) a: {
                try {
                    var b = l.localStorage,
                        c = of();
                    if (b) {
                        b.setItem(c, "1");
                        b.removeItem(c);
                        a = Ye() ? !!l.indexedDB : !0;
                        break a
                    }
                } catch (d) {}
                a = !1
            }
            return a
        },
        lf = function() {
            return l.location && l.location.protocol ||
                null
        },
        qf = function(a) {
            a = a || K();
            return cf(a) || "Firefox" == af(a) ? !1 : !0
        },
        rf = function(a) {
            return "undefined" === typeof a ? null : wc(a)
        },
        sf = function(a) {
            var b = {},
                c;
            for (c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
            return b
        },
        tf = function(a) {
            if (null !== a) {
                var b;
                try {
                    b = tc(a)
                } catch (c) {
                    try {
                        b = JSON.parse(a)
                    } catch (d) {
                        throw c;
                    }
                }
                return b
            }
        },
        of = function(a) {
            return a ? a : "" + Math.floor(1E9 * Math.random()).toString()
        },
        uf = function(a) {
            a = a || K();
            return "Safari" == af(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0
        },
        vf = function() {
            var a = l.___jsl;
            if (a && a.H)
                for (var b in a.H)
                    if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)
                        for (var c = 0; c < a.CP.length; c++) a.CP[c] = null
        },
        wf = function() {
            return l.navigator && "boolean" === typeof l.navigator.onLine ? l.navigator.onLine : !0
        },
        xf = function(a, b, c, d) {
            if (a > b) throw Error("Short delay should be less than long delay!");
            this.kf = a;
            this.Te = b;
            a = c || K();
            d = d || L();
            this.Ne = cf(a) || "ReactNative" === d
        };
    xf.prototype.get = function() {
        return this.Ne ? this.Te : this.kf
    };
    var yf;
    try {
        var zf = {};
        Object.defineProperty(zf, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 1
        });
        Object.defineProperty(zf, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 2
        });
        yf = 2 == zf.abcd
    } catch (a) {
        yf = !1
    }
    var N = function(a, b, c) {
            yf ? Object.defineProperty(a, b, {
                configurable: !0,
                enumerable: !0,
                value: c
            }) : a[b] = c
        },
        Af = function(a, b) {
            if (b)
                for (var c in b) b.hasOwnProperty(c) && N(a, c, b[c])
        },
        Bf = function(a) {
            var b = {},
                c;
            for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
            return b
        },
        Cf = function(a, b) {
            if (!b || !b.length) return !0;
            if (!a) return !1;
            for (var c = 0; c < b.length; c++) {
                var d = a[b[c]];
                if (void 0 === d || null === d || "" === d) return !1
            }
            return !0
        },
        Df = function(a) {
            var b = a;
            if ("object" == typeof a && null != a) {
                var b = "length" in a ? [] : {},
                    c;
                for (c in a) N(b, c,
                    Df(a[c]))
            }
            return b
        };
    var Ef = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        Ff = {
            ae: {
                Ab: 500,
                zb: 600,
                providerId: "facebook.com",
                nc: Ef
            },
            be: {
                Ab: 500,
                zb: 620,
                providerId: "github.com",
                nc: Ef
            },
            ce: {
                Ab: 515,
                zb: 680,
                providerId: "google.com",
                nc: Ef
            },
            he: {
                Ab: 485,
                zb: 705,
                providerId: "twitter.com",
                nc: "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
            }
        },
        Gf = function(a) {
            for (var b in Ff)
                if (Ff[b].providerId == a) return Ff[b];
            return null
        },
        Hf = function(a) {
            return (a = Gf(a)) &&
                a.nc || []
        };
    var O = function(a, b) {
        this.code = "auth/" + a;
        this.message = b || If[a] || ""
    };
    t(O, Error);
    O.prototype.F = function() {
        return {
            name: this.code,
            code: this.code,
            message: this.message
        }
    };
    var Jf = function(a) {
            var b = a && (a.name || a.code);
            return b ? new O(b.substring(5), a.message) : null
        },
        If = {
            "argument-error": "",
            "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
            "cordova-not-ready": "Cordova framework is not ready.",
            "cors-unsupported": "This browser is not supported.",
            "credential-already-in-use": "This credential is already associated with a different user account.",
            "custom-token-mismatch": "The custom token corresponds to a different audience.",
            "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
            "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
            "email-already-in-use": "The email address is already in use by another account.",
            "expired-action-code": "The action code has expired. ",
            "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
            "internal-error": "An internal error has occurred.",
            "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
            "invalid-auth-event": "An internal error has occurred.",
            "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin and cordova-plugin-browsertab",
            "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
            "invalid-email": "The email address is badly formatted.",
            "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
            "invalid-credential": "The supplied auth credential is malformed or has expired.",
            "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
            "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
            "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
            "wrong-password": "The password is invalid or the user does not have a password.",
            "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
            "missing-iframe-start": "An internal error has occurred.",
            "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
            "app-deleted": "This instance of FirebaseApp has been deleted.",
            "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
            "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
            "no-auth-event": "An internal error has occurred.",
            "no-such-provider": "User was not linked to an account with the given provider.",
            "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
            "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
            "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
            "provider-already-linked": "User can only be linked to one identity for the given provider.",
            "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
            "redirect-operation-pending": "A redirect sign-in operation is already pending.",
            timeout: "The operation has timed out.",
            "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
            "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
            "user-cancelled": "User did not grant your application the permissions it requested.",
            "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
            "user-disabled": "The user account has been disabled by an administrator.",
            "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
            "user-signed-out": "",
            "weak-password": "The password must be 6 characters long or more.",
            "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
        };
    var P = function(a, b, c, d, e) {
        this.ga = a;
        this.G = b || null;
        this.mb = c || null;
        this.cd = d || null;
        this.P = e || null;
        if (this.mb || this.P) {
            if (this.mb && this.P) throw new O("invalid-auth-event");
            if (this.mb && !this.cd) throw new O("invalid-auth-event");
        } else throw new O("invalid-auth-event");
    };
    P.prototype.Ub = function() {
        return this.cd
    };
    P.prototype.getError = function() {
        return this.P
    };
    P.prototype.F = function() {
        return {
            type: this.ga,
            eventId: this.G,
            urlResponse: this.mb,
            sessionId: this.cd,
            error: this.P && this.P.F()
        }
    };
    var Kf = function(a) {
        a = a || {};
        return a.type ? new P(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Jf(a.error)) : null
    };
    var Lf = function(a) {
        var b = "unauthorized-domain",
            c = void 0,
            d = Se(a);
        a = d.$;
        d = d.da;
        "http" != d && "https" != d ? b = "operation-not-supported-in-this-environment" : c = la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a);
        O.call(this, b, c)
    };
    t(Lf, O);
    var Mf = function(a) {
        this.Se = a.sub;
        ka();
        this.Rb = a.email || null
    };
    var Nf = function(a, b, c, d) {
        var e = {};
        ga(c) ? e = c : b && p(c) && p(d) ? e = {
            oauthToken: c,
            oauthTokenSecret: d
        } : !b && p(c) && (e = {
            accessToken: c
        });
        if (b || !e.idToken && !e.accessToken)
            if (b && e.oauthToken && e.oauthTokenSecret) N(this, "accessToken", e.oauthToken), N(this, "secret", e.oauthTokenSecret);
            else {
                if (b) throw new O("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                throw new O("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
            }
        else e.idToken && N(this,
            "idToken", e.idToken), e.accessToken && N(this, "accessToken", e.accessToken);
        N(this, "provider", a)
    };
    Nf.prototype.Tb = function(a) {
        return Of(a, Pf(this))
    };
    Nf.prototype.Ed = function(a, b) {
        var c = Pf(this);
        c.idToken = b;
        return Qf(a, c)
    };
    var Pf = function(a) {
        var b = {};
        a.idToken && (b.id_token = a.idToken);
        a.accessToken && (b.access_token = a.accessToken);
        a.secret && (b.oauth_token_secret = a.secret);
        b.providerId = a.provider;
        return {
            postBody: Xe(b).toString(),
            requestUri: pf() ? Ze() : "http://localhost"
        }
    };
    Nf.prototype.F = function() {
        var a = {
            provider: this.provider
        };
        this.idToken && (a.oauthIdToken = this.idToken);
        this.accessToken && (a.oauthAccessToken = this.accessToken);
        this.secret && (a.oauthTokenSecret = this.secret);
        return a
    };
    var Rf = function(a, b, c) {
            var d = !!b,
                e = c || [];
            b = function() {
                Af(this, {
                    providerId: a,
                    isOAuthProvider: !0
                });
                this.bd = [];
                this.pd = {};
                "google.com" == a && this.addScope("profile")
            };
            d || (b.prototype.addScope = function(a) {
                Ia(this.bd, a) || this.bd.push(a)
            });
            b.prototype.setCustomParameters = function(a) {
                this.pd = Ta(a)
            };
            b.prototype.Ae = function() {
                var a = sf(this.pd),
                    b;
                for (b in a) a[b] = a[b].toString();
                a = Ta(a);
                for (b = 0; b < e.length; b++) {
                    var c = e[b];
                    c in a && delete a[c]
                }
                return a
            };
            b.prototype.Be = function() {
                return Na(this.bd)
            };
            b.credential =
                function(b, c) {
                    return new Nf(a, d, b, c)
                };
            Af(b, {
                PROVIDER_ID: a
            });
            return b
        },
        Sf = Rf("facebook.com", !1, Hf("facebook.com"));
    Sf.prototype.addScope = Sf.prototype.addScope || void 0;
    var Tf = Rf("github.com", !1, Hf("github.com"));
    Tf.prototype.addScope = Tf.prototype.addScope || void 0;
    var Uf = Rf("google.com", !1, Hf("google.com"));
    Uf.prototype.addScope = Uf.prototype.addScope || void 0;
    Uf.credential = function(a, b) {
        if (!a && !b) throw new O("argument-error", "credential failed: must provide the ID token and/or the access token.");
        return new Nf("google.com", !1, ga(a) ? a : {
            idToken: a || null,
            accessToken: b || null
        })
    };
    var Vf = Rf("twitter.com", !0, Hf("twitter.com")),
        Wf = function(a, b) {
            this.Rb = a;
            this.Vc = b;
            N(this, "provider", "password")
        };
    Wf.prototype.Tb = function(a) {
        return Q(a, Xf, {
            email: this.Rb,
            password: this.Vc
        })
    };
    Wf.prototype.Ed = function(a, b) {
        return Q(a, Yf, {
            idToken: b,
            email: this.Rb,
            password: this.Vc
        })
    };
    Wf.prototype.F = function() {
        return {
            email: this.Rb,
            password: this.Vc
        }
    };
    var Zf = function() {
        Af(this, {
            providerId: "password",
            isOAuthProvider: !1
        })
    };
    Af(Zf, {
        PROVIDER_ID: "password"
    });
    var $f = {
            zf: Zf,
            ae: Sf,
            ce: Uf,
            be: Tf,
            he: Vf
        },
        ag = function(a) {
            var b = a && a.providerId;
            if (!b) return null;
            var c = a && a.oauthAccessToken,
                d = a && a.oauthTokenSecret;
            a = a && a.oauthIdToken;
            for (var e in $f)
                if ($f[e].PROVIDER_ID == b) try {
                    return $f[e].credential({
                        accessToken: c,
                        idToken: a,
                        oauthToken: c,
                        oauthTokenSecret: d
                    })
                } catch (f) {
                    break
                }
                return null
        },
        bg = function(a) {
            if (!a.isOAuthProvider) throw new O("invalid-oauth-provider");
        };
    var cg = function(a, b, c, d) {
        O.call(this, a, d);
        N(this, "email", b);
        N(this, "credential", c)
    };
    t(cg, O);
    cg.prototype.F = function() {
        var a = {
                code: this.code,
                message: this.message,
                email: this.email
            },
            b = this.credential && this.credential.F();
        b && (Va(a, b), a.providerId = b.provider, delete a.provider);
        return a
    };
    var dg = function(a) {
        if (a.code) {
            var b = a.code || "";
            0 == b.indexOf("auth/") && (b = b.substring(5));
            return a.email ? new cg(b, a.email, ag(a), a.message) : new O(b, a.message || void 0)
        }
        return null
    };
    var eg = function(a) {
        this.yf = a
    };
    t(eg, Ac);
    eg.prototype.Qb = function() {
        return new this.yf
    };
    eg.prototype.Oc = function() {
        return {}
    };
    var R = function(a, b, c) {
            var d;
            d = "Node" == L();
            d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
            if (!d) throw new O("internal-error", "The XMLHttpRequest compatibility library was not found.");
            this.j = a;
            a = b || {};
            this.ff = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
            this.gf = a.secureTokenTimeout || fg;
            this.Nd = Ta(a.secureTokenHeaders || gg);
            this.ve = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
            this.we = a.firebaseTimeout ||
                hg;
            this.ud = Ta(a.firebaseHeaders || ig);
            c && (this.ud["X-Client-Version"] = c, this.Nd["X-Client-Version"] = c);
            this.me = new Fc;
            this.xf = new eg(d)
        },
        jg, fg = new xf(1E4, 3E4),
        gg = {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        hg = new xf(1E4, 3E4),
        ig = {
            "Content-Type": "application/json"
        },
        lg = function(a, b, c, d, e, f, g) {
            wf() ? (bf() ? a = r(a.jf, a) : (jg || (jg = new C(function(a, b) {
                kg(a, b)
            })), a = r(a.hf, a)), a(b, c, d, e, f, g)) : c && c(null)
        };
    R.prototype.jf = function(a, b, c, d, e, f) {
        var g = "Node" == L(),
            k = mf() ? g ? new G(this.xf) : new G : new G(this.me),
            n;
        f && (k.kb = Math.max(0, f), n = setTimeout(function() {
            k.dispatchEvent("timeout")
        }, f));
        k.listen("complete", function() {
            n && clearTimeout(n);
            var a = null;
            try {
                var c;
                c = this.b ? tc(this.b.responseText) : void 0;
                a = c || null
            } catch (Wa) {
                try {
                    a = JSON.parse(De(this)) || null
                } catch (ne) {
                    a = null
                }
            }
            b && b(a)
        });
        bc(k, "ready", function() {
            n && clearTimeout(n);
            this.Aa || (this.Aa = !0, this.Ra())
        });
        bc(k, "timeout", function() {
            n && clearTimeout(n);
            this.Aa ||
                (this.Aa = !0, this.Ra());
            b && b(null)
        });
        k.send(a, c, d, e)
    };
    var Fd = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        kg = function(a, b) {
            ((window.gapi || {}).client || {}).request ? a() : (l[Fd] = function() {
                ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
            }, Hd(function() {
                b(Error("CORS_UNSUPPORTED"))
            }))
        };
    R.prototype.hf = function(a, b, c, d, e) {
        var f = this;
        jg.then(function() {
            window.gapi.client.setApiKey(f.j);
            var g = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({
                path: a,
                method: c,
                body: d,
                headers: e,
                authType: "none",
                callback: function(a) {
                    window.gapi.auth.setToken(g);
                    b && b(a)
                }
            })
        }).c(function(a) {
            b && b({
                error: {
                    message: a && a.message || "CORS_UNSUPPORTED"
                }
            })
        })
    };
    var ng = function(a, b) {
            return new C(function(c, d) {
                "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? lg(a, a.ff + "?key=" + encodeURIComponent(a.j), function(a) {
                    a ? a.error ? d(mg(a)) : a.access_token && a.refresh_token ? c(a) : d(new O("internal-error")) : d(new O("network-request-failed"))
                }, "POST", Xe(b).toString(), a.Nd, a.gf.get()) : d(new O("internal-error"))
            })
        },
        og = function(a, b, c, d, e) {
            var f = Se(a.ve + b);
            J(f, "key", a.j);
            e && J(f, "cb", ka().toString());
            var g = "GET" == c;
            if (g)
                for (var k in d) d.hasOwnProperty(k) &&
                    J(f, k, d[k]);
            return new C(function(b, e) {
                lg(a, f.toString(), function(a) {
                    a ? a.error ? e(mg(a)) : b(a) : e(new O("network-request-failed"))
                }, c, g ? void 0 : wc(sf(d)), a.ud, a.we.get())
            })
        },
        pg = function(a) {
            if (!hc.test(a.email)) throw new O("invalid-email");
        },
        qg = function(a) {
            "email" in a && pg(a)
        },
        sg = function(a, b) {
            var c = pf() ? Ze() : "http://localhost";
            return Q(a, rg, {
                identifier: b,
                continueUri: c
            }).then(function(a) {
                return a.allProviders || []
            })
        },
        ug = function(a) {
            return Q(a, tg, {}).then(function(a) {
                return a.authorizedDomains || []
            })
        },
        vg =
        function(a) {
            if (!a.idToken) throw new O("internal-error");
        };
    R.prototype.signInAnonymously = function() {
        return Q(this, wg, {})
    };
    R.prototype.updateEmail = function(a, b) {
        return Q(this, xg, {
            idToken: a,
            email: b
        })
    };
    R.prototype.updatePassword = function(a, b) {
        return Q(this, Yf, {
            idToken: a,
            password: b
        })
    };
    var yg = {
        displayName: "DISPLAY_NAME",
        photoUrl: "PHOTO_URL"
    };
    R.prototype.updateProfile = function(a, b) {
        var c = {
                idToken: a
            },
            d = [];
        Oa(yg, function(a, f) {
            var e = b[f];
            null === e ? d.push(a) : f in b && (c[f] = e)
        });
        d.length && (c.deleteAttribute = d);
        return Q(this, xg, c)
    };
    R.prototype.sendPasswordResetEmail = function(a) {
        return Q(this, zg, {
            requestType: "PASSWORD_RESET",
            email: a
        })
    };
    R.prototype.sendEmailVerification = function(a) {
        return Q(this, Ag, {
            requestType: "VERIFY_EMAIL",
            idToken: a
        })
    };
    var Cg = function(a, b, c) {
            return Q(a, Bg, {
                idToken: b,
                deleteProvider: c
            })
        },
        Dg = function(a) {
            if (!a.requestUri || !a.sessionId && !a.postBody) throw new O("internal-error");
        },
        Eg = function(a) {
            var b = null;
            a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = dg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = dg(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = dg(a));
            if (b) throw b;
            if (!a.idToken) throw new O("internal-error");
        },
        Of = function(a,
            b) {
            b.returnIdpCredential = !0;
            return Q(a, Fg, b)
        },
        Qf = function(a, b) {
            b.returnIdpCredential = !0;
            return Q(a, Gg, b)
        },
        Hg = function(a) {
            if (!a.oobCode) throw new O("invalid-action-code");
        };
    R.prototype.confirmPasswordReset = function(a, b) {
        return Q(this, Ig, {
            oobCode: a,
            newPassword: b
        })
    };
    R.prototype.checkActionCode = function(a) {
        return Q(this, Jg, {
            oobCode: a
        })
    };
    R.prototype.applyActionCode = function(a) {
        return Q(this, Kg, {
            oobCode: a
        })
    };
    var Kg = {
            endpoint: "setAccountInfo",
            M: Hg,
            ib: "email"
        },
        Jg = {
            endpoint: "resetPassword",
            M: Hg,
            va: function(a) {
                if (!a.email || !a.requestType) throw new O("internal-error");
            }
        },
        Lg = {
            endpoint: "signupNewUser",
            M: function(a) {
                pg(a);
                if (!a.password) throw new O("weak-password");
            },
            va: vg,
            wa: !0
        },
        rg = {
            endpoint: "createAuthUri"
        },
        Mg = {
            endpoint: "deleteAccount",
            hb: ["idToken"]
        },
        Bg = {
            endpoint: "setAccountInfo",
            hb: ["idToken", "deleteProvider"],
            M: function(a) {
                if (!da(a.deleteProvider)) throw new O("internal-error");
            }
        },
        Ng = {
            endpoint: "getAccountInfo"
        },
        Ag = {
            endpoint: "getOobConfirmationCode",
            hb: ["idToken", "requestType"],
            M: function(a) {
                if ("VERIFY_EMAIL" != a.requestType) throw new O("internal-error");
            },
            ib: "email"
        },
        zg = {
            endpoint: "getOobConfirmationCode",
            hb: ["requestType"],
            M: function(a) {
                if ("PASSWORD_RESET" != a.requestType) throw new O("internal-error");
                pg(a)
            },
            ib: "email"
        },
        tg = {
            le: !0,
            endpoint: "getProjectConfig",
            He: "GET"
        },
        Ig = {
            endpoint: "resetPassword",
            M: Hg,
            ib: "email"
        },
        xg = {
            endpoint: "setAccountInfo",
            hb: ["idToken"],
            M: qg,
            wa: !0
        },
        Yf = {
            endpoint: "setAccountInfo",
            hb: ["idToken"],
            M: function(a) {
                qg(a);
                if (!a.password) throw new O("weak-password");
            },
            va: vg,
            wa: !0
        },
        wg = {
            endpoint: "signupNewUser",
            va: vg,
            wa: !0
        },
        Fg = {
            endpoint: "verifyAssertion",
            M: Dg,
            va: Eg,
            wa: !0
        },
        Gg = {
            endpoint: "verifyAssertion",
            M: function(a) {
                Dg(a);
                if (!a.idToken) throw new O("internal-error");
            },
            va: Eg,
            wa: !0
        },
        Og = {
            endpoint: "verifyCustomToken",
            M: function(a) {
                if (!a.token) throw new O("invalid-custom-token");
            },
            va: vg,
            wa: !0
        },
        Xf = {
            endpoint: "verifyPassword",
            M: function(a) {
                pg(a);
                if (!a.password) throw new O("wrong-password");
            },
            va: vg,
            wa: !0
        },
        Q =
        function(a, b, c) {
            if (!Cf(c, b.hb)) return E(new O("internal-error"));
            var d = b.He || "POST",
                e;
            return D(c).then(b.M).then(function() {
                b.wa && (c.returnSecureToken = !0);
                return og(a, b.endpoint, d, c, b.le || !1)
            }).then(function(a) {
                return e = a
            }).then(b.va).then(function() {
                if (!b.ib) return e;
                if (!(b.ib in e)) throw new O("internal-error");
                return e[b.ib]
            })
        },
        mg = function(a) {
            var b, c;
            c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
            var d = {
                keyInvalid: "invalid-api-key",
                ipRefererBlocked: "app-not-authorized"
            };
            if (c = d[c] ?
                new O(d[c]) : null) return c;
            c = a.error && a.error.message || "";
            d = {
                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                MISSING_CUSTOM_TOKEN: "internal-error",
                INVALID_IDENTIFIER: "invalid-email",
                MISSING_CONTINUE_URI: "internal-error",
                INVALID_EMAIL: "invalid-email",
                INVALID_PASSWORD: "wrong-password",
                USER_DISABLED: "user-disabled",
                MISSING_PASSWORD: "internal-error",
                EMAIL_EXISTS: "email-already-in-use",
                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                INVALID_IDP_RESPONSE: "invalid-credential",
                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                INVALID_SENDER: "invalid-sender",
                EMAIL_NOT_FOUND: "user-not-found",
                EXPIRED_OOB_CODE: "expired-action-code",
                INVALID_OOB_CODE: "invalid-action-code",
                MISSING_OOB_CODE: "internal-error",
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                INVALID_ID_TOKEN: "invalid-user-token",
                TOKEN_EXPIRED: "user-token-expired",
                USER_NOT_FOUND: "user-token-expired",
                CORS_UNSUPPORTED: "cors-unsupported",
                DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                WEAK_PASSWORD: "weak-password",
                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                USER_CANCELLED: "user-cancelled"
            };
            b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;
            for (var e in d)
                if (0 === c.indexOf(e)) return new O(d[e], b);
                !b && a && (b = rf(a));
            return new O("internal-error", b)
        };
    var Pg = function(a) {
        this.W = a
    };
    Pg.prototype.value = function() {
        return this.W
    };
    Pg.prototype.Qd = function(a) {
        this.W.style = a;
        return this
    };
    var Qg = function(a) {
        this.W = a || {}
    };
    Qg.prototype.value = function() {
        return this.W
    };
    Qg.prototype.Qd = function(a) {
        this.W.style = a;
        return this
    };
    var Sg = function(a) {
            this.vf = a;
            this.$b = null;
            this.Tc = Rg(this)
        },
        Tg = function(a) {
            var b = new Qg;
            b.W.where = document.body;
            b.W.url = a.vf;
            b.W.messageHandlersFilter = M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");
            b.W.attributes = b.W.attributes || {};
            (new Pg(b.W.attributes)).Qd({
                position: "absolute",
                top: "-100px",
                width: "1px",
                height: "1px"
            });
            b.W.dontclear = !0;
            return b
        },
        Rg = function(a) {
            return Ug().then(function() {
                return new C(function(b, c) {
                    M("gapi.iframes.getContext")().open(Tg(a).value(), function(d) {
                        a.$b = d;
                        a.$b.restyle({
                            setHideOnLeave: !1
                        });
                        var e = setTimeout(function() {
                                c(Error("Network Error"))
                            }, Vg.get()),
                            f = function() {
                                clearTimeout(e);
                                b()
                            };
                        d.ping(f).then(f, function() {
                            c(Error("Network Error"))
                        })
                    })
                })
            })
        };
    Sg.prototype.sendMessage = function(a) {
        var b = this;
        return this.Tc.then(function() {
            return new C(function(c) {
                b.$b.send(a.type, a, c, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            })
        })
    };
    var Wg = function(a, b) {
            a.Tc.then(function() {
                a.$b.register("authEvent", b, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            })
        },
        Xg = new xf(3E3, 15E3),
        Vg = new xf(5E3, 15E3),
        Ug = function() {
            return new C(function(a, b) {
                if (wf()) {
                    var c = function() {
                        vf();
                        M("gapi.load")("gapi.iframes", {
                            callback: a,
                            ontimeout: function() {
                                vf();
                                b(Error("Network Error"))
                            },
                            timeout: Xg.get()
                        })
                    };
                    if (M("gapi.iframes.Iframe")) a();
                    else if (M("gapi.load")) c();
                    else {
                        var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
                        l[d] = function() {
                            M("gapi.load") ?
                                c() : b(Error("Network Error"))
                        };
                        D(Ed("https://apis.google.com/js/api.js?onload=" + d)).c(function() {
                            b(Error("Network Error"))
                        })
                    }
                } else b(Error("Network Error"))
            })
        };
    var Yg = function(a, b, c) {
        this.v = a;
        this.j = b;
        this.B = c;
        this.Ka = null;
        this.Lb = Te(this.v, "/__/auth/iframe");
        J(this.Lb, "apiKey", this.j);
        J(this.Lb, "appName", this.B)
    };
    Yg.prototype.setVersion = function(a) {
        this.Ka = a;
        return this
    };
    Yg.prototype.toString = function() {
        this.Ka ? J(this.Lb, "v", this.Ka) : Re(this.Lb, "v");
        return this.Lb.toString()
    };
    var Zg = function(a, b, c, d, e) {
        this.v = a;
        this.j = b;
        this.B = c;
        this.ke = d;
        this.Ka = this.G = this.$c = null;
        this.jc = e
    };
    Zg.prototype.setVersion = function(a) {
        this.Ka = a;
        return this
    };
    Zg.prototype.toString = function() {
        var a = Te(this.v, "/__/auth/handler");
        J(a, "apiKey", this.j);
        J(a, "appName", this.B);
        J(a, "authType", this.ke);
        if (this.jc.isOAuthProvider) {
            J(a, "providerId", this.jc.providerId);
            var b = this.jc.Be();
            b && b.length && J(a, "scopes", b.join(","));
            b = this.jc.Ae();
            Ra(b) || J(a, "customParameters", rf(b))
        }
        this.$c ? J(a, "redirectUrl", this.$c) : Re(a, "redirectUrl");
        this.G ? J(a, "eventId", this.G) : Re(a, "eventId");
        this.Ka ? J(a, "v", this.Ka) : Re(a, "v");
        if (this.Mb)
            for (var c in this.Mb) this.Mb.hasOwnProperty(c) &&
                !a.D.get(c) && J(a, c, this.Mb[c]);
        return a.toString()
    };
    var $g = function(a, b, c, d) {
            this.v = a;
            this.j = b;
            this.B = c;
            this.ye = (this.za = d || null) ? nf(this.za) : null;
            d = this.za;
            this.Ie = (new Yg(a, b, c)).setVersion(d).toString();
            this.ia = [];
            this.g = new R(b, null, this.ye);
            this.cc = this.ra = null
        },
        ah = function(a) {
            var b = Ze();
            return ug(a).then(function(a) {
                a: {
                    for (var c = Se(b), e = c.da, c = c.$, f = 0; f < a.length; f++) {
                        var g;
                        var k = a[f];
                        g = c;
                        var n = e;
                        0 == k.indexOf("chrome-extension://") ? g = Se(k).$ == g && "chrome-extension" == n : "http" != n && "https" != n ? g = !1 : gf.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = (new RegExp("^(.+\\." +
                            k + "|" + k + ")$", "i")).test(g));
                        if (g) {
                            a = !0;
                            break a
                        }
                    }
                    a = !1
                }
                if (!a) throw new Lf(Ze());
            })
        };
    h = $g.prototype;
    h.ub = function() {
        if (this.cc) return this.cc;
        var a = this;
        return this.cc = hf().then(function() {
            a.Zb = new Sg(a.Ie);
            bh(a)
        })
    };
    h.Gb = function(a, b, c) {
        var d = new O("popup-closed-by-user"),
            e = new O("web-storage-unsupported"),
            f = this,
            g = !1;
        return this.Da().then(function() {
            ch(f).then(function(c) {
                c || (a && df(a), b(e), g = !0)
            })
        }).c(function() {}).then(function() {
            if (!g) return ff(a)
        }).then(function() {
            if (!g) return me(c).then(function() {
                b(d)
            })
        })
    };
    h.Rd = function() {
        var a = K();
        return !qf(a) && !uf(a)
    };
    h.yd = function() {
        return !1
    };
    h.Bb = function(a, b, c, d, e, f, g) {
        if (!a) return E(new O("popup-blocked"));
        if (g) return this.Da().c(function(b) {
            df(a);
            e(b)
        }), d(), D();
        this.ra || (this.ra = ah(this.g));
        var k = this;
        return this.ra.then(function() {
            var b = k.Da().c(function(b) {
                df(a);
                e(b);
                throw b;
            });
            d();
            return b
        }).then(function() {
            bg(c);
            var d = dh(k.v, k.j, k.B, b, c, null, f, k.za);
            (a || l.window).location.href = oc(rc(d))
        }).c(function(a) {
            "auth/network-request-failed" == a.code && (k.ra = null);
            throw a;
        })
    };
    h.Cb = function(a, b, c) {
        this.ra || (this.ra = ah(this.g));
        var d = this;
        return this.ra.then(function() {
            bg(b);
            var e = dh(d.v, d.j, d.B, a, b, Ze(), c, d.za);
            l.window.location.href = oc(rc(e))
        })
    };
    h.Da = function() {
        var a = this;
        return this.ub().then(function() {
            return a.Zb.Tc
        }).c(function() {
            a.ra = null;
            throw new O("network-request-failed");
        })
    };
    h.Vd = function() {
        return !0
    };
    var dh = function(a, b, c, d, e, f, g, k, n) {
            a = new Zg(a, b, c, d, e);
            a.$c = f;
            a.G = g;
            f = a.setVersion(k);
            f.Mb = Ta(n || null);
            return f.toString()
        },
        bh = function(a) {
            if (!a.Zb) throw Error("IfcHandler must be initialized!");
            Wg(a.Zb, function(b) {
                var c = {};
                if (b && b.authEvent) {
                    var d = !1;
                    b = Kf(b.authEvent);
                    for (c = 0; c < a.ia.length; c++) d = a.ia[c](b) || d;
                    c = {};
                    c.status = d ? "ACK" : "ERROR";
                    return D(c)
                }
                c.status = "ERROR";
                return D(c)
            })
        },
        ch = function(a) {
            var b = {
                type: "webStorageSupport"
            };
            return a.ub().then(function() {
                return a.Zb.sendMessage(b)
            }).then(function(a) {
                if (a &&
                    a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;
                throw Error();
            })
        };
    $g.prototype.Ma = function(a) {
        this.ia.push(a)
    };
    $g.prototype.Fb = function(a) {
        La(this.ia, function(b) {
            return b == a
        })
    };
    var eh = function(a) {
        this.A = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
        if (!this.A) throw new O("internal-error", "The React Native compatibility library was not found.");
    };
    h = eh.prototype;
    h.get = function(a) {
        return D(this.A.getItem(a)).then(function(a) {
            return a && tf(a)
        })
    };
    h.set = function(a, b) {
        return D(this.A.setItem(a, rf(b)))
    };
    h.remove = function(a) {
        return D(this.A.removeItem(a))
    };
    h.Na = function() {};
    h.fb = function() {};
    var fh = function() {
        this.A = {}
    };
    h = fh.prototype;
    h.get = function(a) {
        return D(this.A[a])
    };
    h.set = function(a, b) {
        this.A[a] = b;
        return D()
    };
    h.remove = function(a) {
        delete this.A[a];
        return D()
    };
    h.Na = function() {};
    h.fb = function() {};
    var hh = function() {
            if (!gh()) {
                if ("Node" == L()) throw new O("internal-error", "The LocalStorage compatibility library was not found.");
                throw new O("web-storage-unsupported");
            }
            this.A = l.localStorage || firebase.INTERNAL.node.localStorage
        },
        gh = function() {
            var a = "Node" == L(),
                a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
            if (!a) return !1;
            try {
                return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
            } catch (b) {
                return !1
            }
        };
    h = hh.prototype;
    h.get = function(a) {
        var b = this;
        return D().then(function() {
            var c = b.A.getItem(a);
            return tf(c)
        })
    };
    h.set = function(a, b) {
        var c = this;
        return D().then(function() {
            var d = rf(b);
            null === d ? c.remove(a) : c.A.setItem(a, d)
        })
    };
    h.remove = function(a) {
        var b = this;
        return D().then(function() {
            b.A.removeItem(a)
        })
    };
    h.Na = function(a) {
        l.window && Ub(l.window, "storage", a)
    };
    h.fb = function(a) {
        l.window && cc(l.window, "storage", a)
    };
    var ih = function() {
        this.A = {}
    };
    h = ih.prototype;
    h.get = function() {
        return D(null)
    };
    h.set = function() {
        return D()
    };
    h.remove = function() {
        return D()
    };
    h.Na = function() {};
    h.fb = function() {};
    var kh = function() {
            if (!jh()) {
                if ("Node" == L()) throw new O("internal-error", "The SessionStorage compatibility library was not found.");
                throw new O("web-storage-unsupported");
            }
            this.A = l.sessionStorage || firebase.INTERNAL.node.sessionStorage
        },
        jh = function() {
            var a = "Node" == L(),
                a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
            if (!a) return !1;
            try {
                return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
            } catch (b) {
                return !1
            }
        };
    h = kh.prototype;
    h.get = function(a) {
        var b = this;
        return D().then(function() {
            var c = b.A.getItem(a);
            return tf(c)
        })
    };
    h.set = function(a, b) {
        var c = this;
        return D().then(function() {
            var d = rf(b);
            null === d ? c.remove(a) : c.A.setItem(a, d)
        })
    };
    h.remove = function(a) {
        var b = this;
        return D().then(function() {
            b.A.removeItem(a)
        })
    };
    h.Na = function() {};
    h.fb = function() {};
    var lh = function(a, b, c, d, e, f) {
            if (!window.indexedDB) throw new O("web-storage-unsupported");
            this.oe = a;
            this.Sc = b;
            this.Fc = c;
            this.Zd = d;
            this.nb = e;
            this.U = {};
            this.Hb = [];
            this.xb = 0;
            this.Je = f || l.indexedDB
        },
        mh, nh = function(a) {
            return new C(function(b, c) {
                var d = a.Je.open(a.oe, a.nb);
                d.onerror = function(a) {
                    c(Error(a.target.errorCode))
                };
                d.onupgradeneeded = function(b) {
                    b = b.target.result;
                    try {
                        b.createObjectStore(a.Sc, {
                            keyPath: a.Fc
                        })
                    } catch (f) {
                        c(f)
                    }
                };
                d.onsuccess = function(a) {
                    b(a.target.result)
                }
            })
        },
        oh = function(a) {
            a.Bd || (a.Bd =
                nh(a));
            return a.Bd
        },
        ph = function(a, b) {
            return b.objectStore(a.Sc)
        },
        qh = function(a, b, c) {
            return b.transaction([a.Sc], c ? "readwrite" : "readonly")
        },
        rh = function(a) {
            return new C(function(b, c) {
                a.onsuccess = function(a) {
                    a && a.target ? b(a.target.result) : b()
                };
                a.onerror = function(a) {
                    c(Error(a.target.errorCode))
                }
            })
        };
    h = lh.prototype;
    h.set = function(a, b) {
        var c = !1,
            d, e = this;
        return nd(oh(this).then(function(b) {
            d = b;
            b = ph(e, qh(e, d, !0));
            return rh(b.get(a))
        }).then(function(f) {
            var g = ph(e, qh(e, d, !0));
            if (f) return f.value = b, rh(g.put(f));
            e.xb++;
            c = !0;
            f = {};
            f[e.Fc] = a;
            f[e.Zd] = b;
            return rh(g.add(f))
        }).then(function() {
            e.U[a] = b
        }), function() {
            c && e.xb--
        })
    };
    h.get = function(a) {
        var b = this;
        return oh(this).then(function(c) {
            return rh(ph(b, qh(b, c, !1)).get(a))
        }).then(function(a) {
            return a && a.value
        })
    };
    h.remove = function(a) {
        var b = !1,
            c = this;
        return nd(oh(this).then(function(d) {
            b = !0;
            c.xb++;
            return rh(ph(c, qh(c, d, !0))["delete"](a))
        }).then(function() {
            delete c.U[a]
        }), function() {
            b && c.xb--
        })
    };
    h.mf = function() {
        var a = this;
        return oh(this).then(function(b) {
            var c = ph(a, qh(a, b, !1));
            return c.getAll ? rh(c.getAll()) : new C(function(a, b) {
                var d = [],
                    e = c.openCursor();
                e.onsuccess = function(b) {
                    (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d)
                };
                e.onerror = function(a) {
                    b(Error(a.target.errorCode))
                }
            })
        }).then(function(b) {
            var c = {},
                d = [];
            if (0 == a.xb) {
                for (d = 0; d < b.length; d++) c[b[d][a.Fc]] = b[d][a.Zd];
                d = $e(a.U, c);
                a.U = c
            }
            return d
        })
    };
    h.Na = function(a) {
        0 == this.Hb.length && this.fd();
        this.Hb.push(a)
    };
    h.fb = function(a) {
        La(this.Hb, function(b) {
            return b == a
        });
        0 == this.Hb.length && this.qc()
    };
    h.fd = function() {
        var a = this;
        this.qc();
        var b = function() {
            a.Wc = me(800).then(r(a.mf, a)).then(function(b) {
                0 < b.length && x(a.Hb, function(a) {
                    a(b)
                })
            }).then(b).c(function(a) {
                "STOP_EVENT" != a.message && b()
            });
            return a.Wc
        };
        b()
    };
    h.qc = function() {
        this.Wc && this.Wc.cancel("STOP_EVENT")
    };
    var vh = function() {
            this.rd = {
                Browser: sh,
                Node: th,
                ReactNative: uh
            }[L()]
        },
        wh, sh = {
            J: hh,
            hd: kh
        },
        th = {
            J: hh,
            hd: kh
        },
        uh = {
            J: eh,
            hd: ih
        };
    var xh = function(a) {
        var b = {},
            c = a.email,
            d = a.newEmail;
        a = a.requestType;
        if (!c || !a) throw Error("Invalid provider user info!");
        b.fromEmail = d || null;
        b.email = c;
        N(this, "operation", a);
        N(this, "data", Df(b))
    };
    var yh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        S = function(a, b) {
            return {
                name: a || "",
                fa: "a valid string",
                optional: !!b,
                ha: p
            }
        },
        T = function(a) {
            return {
                name: a || "",
                fa: "a valid object",
                optional: !1,
                ha: ga
            }
        },
        zh = function(a, b) {
            return {
                name: a || "",
                fa: "a function",
                optional: !!b,
                ha: q
            }
        },
        Ah = function() {
            return {
                name: "",
                fa: "null",
                optional: !1,
                ha: ca
            }
        },
        Bh = function() {
            return {
                name: "credential",
                fa: "a valid credential",
                optional: !1,
                ha: function(a) {
                    return !(!a || !a.Tb)
                }
            }
        },
        Ch = function() {
            return {
                name: "authProvider",
                fa: "a valid Auth provider",
                optional: !1,
                ha: function(a) {
                    return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                }
            }
        },
        Dh = function(a, b, c, d) {
            return {
                name: c || "",
                fa: a.fa + " or " + b.fa,
                optional: !!d,
                ha: function(c) {
                    return a.ha(c) || b.ha(c)
                }
            }
        };
    var Fh = function(a, b) {
            for (var c in b) {
                var d = b[c].name;
                a[d] = Eh(d, a[c], b[c].a)
            }
        },
        U = function(a, b, c, d) {
            a[b] = Eh(b, c, d)
        },
        Eh = function(a, b, c) {
            if (!c) return b;
            var d = Gh(a);
            a = function() {
                var a = Array.prototype.slice.call(arguments),
                    e;
                a: {
                    e = Array.prototype.slice.call(a);
                    var k;k = 0;
                    for (var n = !1, z = 0; z < c.length; z++)
                        if (c[z].optional) n = !0;
                        else {
                            if (n) throw new O("internal-error", "Argument validator encountered a required argument after an optional argument.");
                            k++
                        }
                    n = c.length;
                    if (e.length < k || n < e.length) e = "Expected " + (k == n ? 1 ==
                        k ? "1 argument" : k + " arguments" : k + "-" + n + " arguments") + " but got " + e.length + ".";
                    else {
                        for (k = 0; k < e.length; k++)
                            if (n = c[k].optional && void 0 === e[k], !c[k].ha(e[k]) && !n) {
                                e = c[k];
                                if (0 > k || k >= yh.length) throw new O("internal-error", "Argument validator received an unsupported number of arguments.");
                                e = yh[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.fa + ".";
                                break a
                            }
                        e = null
                    }
                }
                if (e) throw new O("argument-error", d + " failed: " + e);
                return b.apply(this, a)
            };
            for (var e in b) a[e] = b[e];
            for (e in b.prototype) a.prototype[e] =
                b.prototype[e];
            return a
        },
        Gh = function(a) {
            a = a.split(".");
            return a[a.length - 1]
        };
    var Hh = function(a, b, c, d) {
            this.We = a;
            this.Od = b;
            this.df = c;
            this.jb = d;
            this.T = {};
            wh || (wh = new vh);
            a = wh;
            try {
                var e;
                Ye() ? (mh || (mh = new lh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = mh) : e = new a.rd.J;
                this.Ya = e
            } catch (f) {
                this.Ya = new fh, this.jb = !0
            }
            try {
                this.sc = new a.rd.hd
            } catch (f) {
                this.sc = new fh
            }
            this.Sd = r(this.Td, this);
            this.U = {}
        },
        Ih, Jh = function() {
            Ih || (Ih = new Hh("firebase", ":", !uf(K()) && l.window && l.window != l.window.top ? !0 : !1, qf()));
            return Ih
        };
    h = Hh.prototype;
    h.R = function(a, b) {
        return this.We + this.Od + a.name + (b ? this.Od + b : "")
    };
    h.get = function(a, b) {
        return (a.J ? this.Ya : this.sc).get(this.R(a, b))
    };
    h.remove = function(a, b) {
        b = this.R(a, b);
        a.J && !this.jb && (this.U[b] = null);
        return (a.J ? this.Ya : this.sc).remove(b)
    };
    h.set = function(a, b, c) {
        var d = this.R(a, c),
            e = this,
            f = a.J ? this.Ya : this.sc;
        return f.set(d, b).then(function() {
            return f.get(d)
        }).then(function(b) {
            a.J && !this.jb && (e.U[d] = b)
        })
    };
    h.addListener = function(a, b, c) {
        a = this.R(a, b);
        this.jb || (this.U[a] = l.localStorage.getItem(a));
        Ra(this.T) && this.fd();
        this.T[a] || (this.T[a] = []);
        this.T[a].push(c)
    };
    h.removeListener = function(a, b, c) {
        a = this.R(a, b);
        this.T[a] && (La(this.T[a], function(a) {
            return a == c
        }), 0 == this.T[a].length && delete this.T[a]);
        Ra(this.T) && this.qc()
    };
    h.fd = function() {
        this.Ya.Na(this.Sd);
        this.jb || Kh(this)
    };
    var Kh = function(a) {
            Lh(a);
            a.Rc = setInterval(function() {
                for (var b in a.T) {
                    var c = l.localStorage.getItem(b);
                    c != a.U[b] && (a.U[b] = c, c = new Jb({
                        type: "storage",
                        key: b,
                        target: window,
                        oldValue: a.U[b],
                        newValue: c
                    }), a.Td(c))
                }
            }, 1E3)
        },
        Lh = function(a) {
            a.Rc && (clearInterval(a.Rc), a.Rc = null)
        };
    Hh.prototype.qc = function() {
        this.Ya.fb(this.Sd);
        this.jb || Lh(this)
    };
    Hh.prototype.Td = function(a) {
        if (a && a.ze) {
            var b = a.qb.key;
            if (this.df) {
                var c = l.localStorage.getItem(b);
                a = a.qb.newValue;
                a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b))
            }
            this.U[b] = l.localStorage.getItem(b);
            this.ld(b)
        } else x(a, r(this.ld, this))
    };
    Hh.prototype.ld = function(a) {
        this.T[a] && x(this.T[a], function(a) {
            a()
        })
    };
    var Mh = function(a, b) {
            this.u = a;
            this.i = b || Jh()
        },
        Nh = {
            name: "authEvent",
            J: !0
        },
        Oh = function(a) {
            return a.i.get(Nh, a.u).then(function(a) {
                return Kf(a)
            })
        };
    Mh.prototype.Ma = function(a) {
        this.i.addListener(Nh, this.u, a)
    };
    Mh.prototype.Fb = function(a) {
        this.i.removeListener(Nh, this.u, a)
    };
    var Ph = function(a) {
            this.i = a || Jh()
        },
        Qh = {
            name: "sessionId",
            J: !1
        };
    Ph.prototype.Ub = function(a) {
        return this.i.get(Qh, a)
    };
    var Rh = function(a, b, c, d, e, f) {
            this.v = a;
            this.j = b;
            this.B = c;
            this.za = d || null;
            this.Ud = b + ":" + c;
            this.ef = new Ph;
            this.vd = new Mh(this.Ud);
            this.Nc = null;
            this.ia = [];
            this.Me = e || 500;
            this.bf = f || 2E3;
            this.gc = null
        },
        Sh = function(a) {
            return new O("invalid-cordova-configuration", a)
        };
    Rh.prototype.Da = function() {
        return this.Pc ? this.Pc : this.Pc = kf().then(function() {
            if ("function" !== typeof M("universalLinks.subscribe", l)) throw Sh("cordova-universal-links-plugin is not installed");
            if ("undefined" === typeof M("BuildInfo.packageName", l)) throw Sh("cordova-plugin-buildinfo is not installed");
            if ("function" !== typeof M("cordova.plugins.browsertab.openUrl", l)) throw Sh("cordova-plugin-browsertab is not installed");
        }, function() {
            throw new O("cordova-not-ready");
        })
    };
    var Th = function() {
            for (var a = 20, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
            return b.join("")
        },
        Uh = function(a) {
            var b = new Eb;
            b.update(a);
            return pb(b.digest())
        };
    h = Rh.prototype;
    h.Gb = function(a, b) {
        b(new O("operation-not-supported-in-this-environment"));
        return D()
    };
    h.Bb = function() {
        return E(new O("operation-not-supported-in-this-environment"))
    };
    h.Vd = function() {
        return !1
    };
    h.Rd = function() {
        return !0
    };
    h.yd = function() {
        return !0
    };
    h.Cb = function(a, b, c) {
        if (this.gc) return E(new O("redirect-operation-pending"));
        var d = this,
            e = l.document,
            f = null,
            g = null,
            k = null;
        return this.gc = nd(D().then(function() {
            bg(b);
            return Vh(d)
        }).then(function() {
            return Wh(d, a, b, c)
        }).then(function() {
            return (new C(function(a, b) {
                g = function() {
                    a();
                    return !1
                };
                d.Ma(g);
                k = function() {
                    f = me(d.bf).then(function() {
                        b(new O("redirect-cancelled-by-user"))
                    })
                };
                e.addEventListener("resume", k, !1)
            })).c(function(a) {
                return Xh(d).then(function() {
                    throw a;
                })
            })
        }), function() {
            k && e.removeEventListener("resume",
                k, !1);
            f && f.cancel();
            g && d.Fb(g);
            d.gc = null
        })
    };
    var Wh = function(a, b, c, d) {
            var e = Th(),
                f = new P(b, d, null, e, new O("no-auth-event")),
                g = M("BuildInfo.packageName", l);
            if ("string" !== typeof g) throw new O("invalid-cordova-configuration");
            var k = M("BuildInfo.displayName", l),
                n = {};
            if (K().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;
            else if (K().toLowerCase().match(/android/)) n.apn = g;
            else return E(new O("operation-not-supported-in-this-environment"));
            k && (n.appDisplayName = k);
            e = Uh(e);
            n.sessionId = e;
            var z = dh(a.v, a.j, a.B, b, c, null, d, a.za, n);
            return a.Da().then(function() {
                var b =
                    a.Ud;
                return a.ef.i.set(Nh, f.F(), b)
            }).then(function() {
                var a = M("cordova.plugins.browsertab.openUrl", l);
                if ("function" !== typeof a) throw new O("invalid-cordova-configuration");
                a(z)
            })
        },
        Yh = function(a, b) {
            for (var c = 0; c < a.ia.length; c++) a.ia[c](b)
        },
        Vh = function(a) {
            a.Nc || (a.Nc = a.Da().then(function() {
                return new C(function(b) {
                    var c = function(d) {
                        b(d);
                        a.Fb(c);
                        return !1
                    };
                    a.Ma(c);
                    Zh(a)
                })
            }));
            return a.Nc
        },
        Xh = function(a) {
            var b = null;
            return Oh(a.vd).then(function(c) {
                b = c;
                c = a.vd;
                return c.i.remove(Nh, c.u)
            }).then(function() {
                return b
            })
        },
        Zh = function(a) {
            var b = M("universalLinks.subscribe", l);
            if ("function" !== typeof b) throw new O("invalid-cordova-configuration");
            var c = new P("unknown", null, null, null, new O("no-auth-event")),
                d = !1,
                e = me(a.Me).then(function() {
                    return Xh(a).then(function() {
                        d || Yh(a, c)
                    })
                });
            b(null, function(b) {
                d = !0;
                e && e.cancel();
                Xh(a).then(function(d) {
                    var e = c;
                    if (d && b && b.url) {
                        var f = b.url,
                            e = null,
                            g = Se(f),
                            Ea = g.D.get("link"),
                            f = g.D.get("deep_link_id") || Ea || f; - 1 != f.indexOf("/__/auth/callback") && (g = Se(f), e = tf(g.D.get("error") || null), e = (e =
                            "object" === typeof e ? Jf(e) : null) ? new P(d.ga, d.G, null, null, e) : new P(d.ga, d.G, f, d.Ub()));
                        e = e || c
                    }
                    Yh(a, e)
                })
            })
        };
    Rh.prototype.Ma = function(a) {
        this.ia.push(a);
        Vh(this).c(function() {})
    };
    Rh.prototype.Fb = function(a) {
        La(this.ia, function(b) {
            return b == a
        })
    };
    var $h = function(a) {
            this.u = a;
            this.i = Jh()
        },
        ai = {
            name: "pendingRedirect",
            J: !1
        },
        bi = function(a) {
            return a.i.set(ai, "pending", a.u)
        },
        ci = function(a) {
            return a.i.remove(ai, a.u)
        },
        di = function(a) {
            return a.i.get(ai, a.u).then(function(a) {
                return "pending" == a
            })
        };
    var V = function(a, b, c) {
            this.v = a;
            this.j = b;
            this.B = c;
            this.Ib = [];
            this.Wa = !1;
            this.Bc = r(this.Lc, this);
            this.ab = new ei(this);
            this.Id = new fi(this);
            this.yb = new $h(this.j + ":" + this.B);
            this.lb = {};
            this.lb.unknown = this.ab;
            this.lb.signInViaRedirect = this.ab;
            this.lb.linkViaRedirect = this.ab;
            this.lb.signInViaPopup = this.Id;
            this.lb.linkViaPopup = this.Id;
            this.I = gi(this.v, this.j, this.B)
        },
        gi = function(a, b, c) {
            var d = firebase.SDK_VERSION || null;
            return jf() ? new Rh(a, b, c, d) : new $g(a, b, c, d)
        };
    V.prototype.reset = function() {
        this.Wa = !1;
        this.I.Fb(this.Bc);
        this.I = gi(this.v, this.j, this.B)
    };
    V.prototype.ub = function() {
        var a = this;
        this.Wa || (this.Wa = !0, this.I.Ma(this.Bc));
        var b = this.I;
        return this.I.Da().c(function(c) {
            a.I == b && a.reset();
            throw c;
        })
    };
    var ji = function(a) {
        a.I.Rd() && a.ub().c(function(b) {
            var c = new P("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));
            hi(b) && a.Lc(c)
        });
        a.I.yd() || ii(a.ab)
    };
    V.prototype.subscribe = function(a) {
        Ia(this.Ib, a) || this.Ib.push(a);
        if (!this.Wa) {
            var b = this;
            di(this.yb).then(function(a) {
                a ? ci(b.yb).then(function() {
                    b.ub().c(function(a) {
                        var c = new P("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));
                        hi(a) && b.Lc(c)
                    })
                }) : ji(b)
            }).c(function() {
                ji(b)
            })
        }
    };
    V.prototype.unsubscribe = function(a) {
        La(this.Ib, function(b) {
            return b == a
        })
    };
    V.prototype.Lc = function(a) {
        if (!a) throw new O("invalid-auth-event");
        for (var b = !1, c = 0; c < this.Ib.length; c++) {
            var d = this.Ib[c];
            if (d.md(a.ga, a.G)) {
                (b = this.lb[a.ga]) && b.Jd(a, d);
                b = !0;
                break
            }
        }
        ii(this.ab);
        return b
    };
    var ki = new xf(2E3, 1E4),
        li = new xf(1E4, 3E4);
    V.prototype.getRedirectResult = function() {
        return this.ab.getRedirectResult()
    };
    V.prototype.Bb = function(a, b, c, d, e) {
        var f = this;
        return this.I.Bb(a, b, c, function() {
            f.Wa || (f.Wa = !0, f.I.Ma(f.Bc))
        }, function() {
            f.reset()
        }, d, e)
    };
    var hi = function(a) {
        return a && "auth/cordova-not-ready" == a.code ? !0 : !1
    };
    V.prototype.Cb = function(a, b, c) {
        var d = this,
            e;
        return bi(this.yb).then(function() {
            return d.I.Cb(a, b, c).c(function(a) {
                if (hi(a)) throw new O("operation-not-supported-in-this-environment");
                e = a;
                return ci(d.yb).then(function() {
                    throw e;
                })
            }).then(function() {
                return d.I.Vd() ? new C(function() {}) : ci(d.yb).then(function() {
                    return d.getRedirectResult()
                }).then(function() {}).c(function() {})
            })
        })
    };
    V.prototype.Gb = function(a, b, c, d) {
        return this.I.Gb(c, function(c) {
            a.Ia(b, null, c, d)
        }, ki.get())
    };
    var mi = {},
        ni = function(a, b, c) {
            var d = b + ":" + c;
            mi[d] || (mi[d] = new V(a, b, c));
            return mi[d]
        },
        ei = function(a) {
            this.i = a;
            this.eb = null;
            this.Eb = [];
            this.Db = [];
            this.bb = null;
            this.Zc = !1
        };
    ei.prototype.reset = function() {
        this.eb = null;
        this.bb && (this.bb.cancel(), this.bb = null)
    };
    ei.prototype.Jd = function(a, b) {
        if (!a) return E(new O("invalid-auth-event"));
        this.reset();
        this.Zc = !0;
        var c = a.ga,
            d = a.G,
            e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
            f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;
        "unknown" != c || e || f ? a = a.P ? this.Xc(a, b) : b.rb(c, d) ? this.Yc(a, b) : E(new O("invalid-auth-event")) : (oi(this, !1, null, null), a = D());
        return a
    };
    var ii = function(a) {
        a.Zc || (a.Zc = !0, oi(a, !1, null, null))
    };
    ei.prototype.Xc = function(a) {
        oi(this, !0, null, a.getError());
        return D()
    };
    ei.prototype.Yc = function(a, b) {
        var c = this,
            d = a.ga;
        b = b.rb(d, a.G);
        var e = a.mb;
        a = a.Ub();
        var f = "signInViaRedirect" == d || "linkViaRedirect" == d;
        return b(e, a).then(function(a) {
            oi(c, f, a, null)
        }).c(function(a) {
            oi(c, f, null, a)
        })
    };
    var pi = function(a, b) {
            a.eb = function() {
                return E(b)
            };
            if (a.Db.length)
                for (var c = 0; c < a.Db.length; c++) a.Db[c](b)
        },
        qi = function(a, b) {
            a.eb = function() {
                return D(b)
            };
            if (a.Eb.length)
                for (var c = 0; c < a.Eb.length; c++) a.Eb[c](b)
        },
        oi = function(a, b, c, d) {
            b ? d ? pi(a, d) : qi(a, c) : qi(a, {
                user: null
            });
            a.Eb = [];
            a.Db = []
        };
    ei.prototype.getRedirectResult = function() {
        var a = this;
        return new C(function(b, c) {
            a.eb ? a.eb().then(b, c) : (a.Eb.push(b), a.Db.push(c), ri(a))
        })
    };
    var ri = function(a) {
            var b = new O("timeout");
            a.bb && a.bb.cancel();
            a.bb = me(li.get()).then(function() {
                a.eb || oi(a, !0, null, b)
            })
        },
        fi = function(a) {
            this.i = a
        };
    fi.prototype.Jd = function(a, b) {
        if (!a) return E(new O("invalid-auth-event"));
        var c = a.ga,
            d = a.G;
        return a.P ? this.Xc(a, b) : b.rb(c, d) ? this.Yc(a, b) : E(new O("invalid-auth-event"))
    };
    fi.prototype.Xc = function(a, b) {
        b.Ia(a.ga, null, a.getError(), a.G);
        return D()
    };
    fi.prototype.Yc = function(a, b) {
        var c = a.G,
            d = a.ga,
            e = b.rb(d, c),
            f = a.mb;
        a = a.Ub();
        return e(f, a).then(function(a) {
            b.Ia(d, a, null, c)
        }).c(function(a) {
            b.Ia(d, null, a, c)
        })
    };
    var si = function(a) {
        this.g = a;
        this.xa = this.X = null;
        this.Sa = 0
    };
    si.prototype.F = function() {
        return {
            apiKey: this.g.j,
            refreshToken: this.X,
            accessToken: this.xa,
            expirationTime: this.Sa
        }
    };
    var ui = function(a, b) {
            var c = b.idToken,
                d = b.refreshToken;
            b = ti(b.expiresIn);
            a.xa = c;
            a.Sa = b;
            a.X = d
        },
        ti = function(a) {
            return ka() + 1E3 * parseInt(a, 10)
        },
        vi = function(a, b) {
            return ng(a.g, b).then(function(b) {
                a.xa = b.access_token;
                a.Sa = ti(b.expires_in);
                a.X = b.refresh_token;
                return {
                    accessToken: a.xa,
                    expirationTime: a.Sa,
                    refreshToken: a.X
                }
            }).c(function(b) {
                "auth/user-token-expired" == b.code && (a.X = null);
                throw b;
            })
        },
        wi = function(a) {
            return !(!a.xa || a.X)
        };
    si.prototype.getToken = function(a) {
        a = !!a;
        return wi(this) ? E(new O("user-token-expired")) : a || !this.xa || ka() > this.Sa - 3E4 ? this.X ? vi(this, {
            grant_type: "refresh_token",
            refresh_token: this.X
        }) : D(null) : D({
            accessToken: this.xa,
            expirationTime: this.Sa,
            refreshToken: this.X
        })
    };
    var xi = function(a, b, c, d, e) {
            Af(this, {
                uid: a,
                displayName: d || null,
                photoURL: e || null,
                email: c || null,
                providerId: b
            })
        },
        yi = function(a, b) {
            Ib.call(this, a);
            for (var c in b) this[c] = b[c]
        };
    t(yi, Ib);
    var W = function(a, b, c) {
        this.Z = [];
        this.j = a.apiKey;
        this.B = a.appName;
        this.v = a.authDomain || null;
        a = firebase.SDK_VERSION ? nf(firebase.SDK_VERSION) : null;
        this.g = new R(this.j, null, a);
        this.ea = new si(this.g);
        zi(this, b.idToken);
        ui(this.ea, b);
        N(this, "refreshToken", this.ea.X);
        Ai(this, c || {});
        Qd.call(this);
        this.hc = !1;
        this.v && pf() && (this.m = ni(this.v, this.j, this.B));
        this.pc = [];
        this.Ac = D()
    };
    t(W, Qd);
    W.prototype.ta = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1),
            d = this;
        return this.Ac = this.Ac.then(function() {
            return a.apply(d, c)
        }, function() {
            return a.apply(d, c)
        })
    };
    var zi = function(a, b) {
            a.Cd = b;
            N(a, "_lat", b)
        },
        Bi = function(a, b) {
            La(a.pc, function(a) {
                return a == b
            })
        },
        Ci = function(a) {
            for (var b = [], c = 0; c < a.pc.length; c++) b.push(a.pc[c](a));
            return kd(b).then(function() {
                return a
            })
        },
        Di = function(a) {
            a.m && !a.hc && (a.hc = !0, a.m.subscribe(a))
        },
        Ai = function(a, b) {
            Af(a, {
                uid: b.uid,
                displayName: b.displayName || null,
                photoURL: b.photoURL || null,
                email: b.email || null,
                emailVerified: b.emailVerified || !1,
                isAnonymous: b.isAnonymous || !1,
                providerData: []
            })
        };
    N(W.prototype, "providerId", "firebase");
    var Ei = function() {},
        Fi = function(a) {
            return D().then(function() {
                if (a.qe) throw new O("app-deleted");
            })
        },
        Gi = function(a) {
            return Da(a.providerData, function(a) {
                return a.providerId
            })
        },
        Ii = function(a, b) {
            b && (Hi(a, b.providerId), a.providerData.push(b))
        },
        Hi = function(a, b) {
            La(a.providerData, function(a) {
                return a.providerId == b
            })
        },
        Ji = function(a, b, c) {
            ("uid" != b || c) && a.hasOwnProperty(b) && N(a, b, c)
        };
    W.prototype.copy = function(a) {
        var b = this;
        b != a && (Af(this, {
            uid: a.uid,
            displayName: a.displayName,
            photoURL: a.photoURL,
            email: a.email,
            emailVerified: a.emailVerified,
            isAnonymous: a.isAnonymous,
            providerData: []
        }), x(a.providerData, function(a) {
            Ii(b, a)
        }), this.ea = a.ea, N(this, "refreshToken", this.ea.X))
    };
    W.prototype.reload = function() {
        var a = this;
        return Fi(this).then(function() {
            return Ki(a).then(function() {
                return Ci(a)
            }).then(Ei)
        })
    };
    var Ki = function(a) {
        return a.getToken().then(function(b) {
            var c = a.isAnonymous;
            return Li(a, b).then(function() {
                c || Ji(a, "isAnonymous", !1);
                return b
            }).c(function(b) {
                "auth/user-token-expired" == b.code && (a.dispatchEvent(new yi("userDeleted")), Mi(a));
                throw b;
            })
        })
    };
    W.prototype.getToken = function(a) {
        var b = this,
            c = wi(this.ea);
        return Fi(this).then(function() {
            return b.ea.getToken(a)
        }).then(function(a) {
            if (!a) throw new O("internal-error");
            a.accessToken != b.Cd && (zi(b, a.accessToken), b.Ea());
            Ji(b, "refreshToken", a.refreshToken);
            return a.accessToken
        }).c(function(a) {
            if ("auth/user-token-expired" == a.code && !c) return Ci(b).then(function() {
                Ji(b, "refreshToken", null);
                throw a;
            });
            throw a;
        })
    };
    var Ni = function(a, b) {
        b.idToken && a.Cd != b.idToken && (ui(a.ea, b), a.Ea(), zi(a, b.idToken), Ji(a, "refreshToken", a.ea.X))
    };
    W.prototype.Ea = function() {
        this.dispatchEvent(new yi("tokenChanged"))
    };
    var Li = function(a, b) {
        return Q(a.g, Ng, {
            idToken: b
        }).then(r(a.$e, a))
    };
    W.prototype.$e = function(a) {
        a = a.users;
        if (!a || !a.length) throw new O("internal-error");
        a = a[0];
        Ai(this, {
            uid: a.localId,
            displayName: a.displayName,
            photoURL: a.photoUrl,
            email: a.email,
            emailVerified: !!a.emailVerified
        });
        for (var b = Oi(a), c = 0; c < b.length; c++) Ii(this, b[c]);
        Ji(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length))
    };
    var Oi = function(a) {
        return (a = a.providerUserInfo) && a.length ? Da(a, function(a) {
            return new xi(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl)
        }) : []
    };
    W.prototype.reauthenticate = function(a) {
        var b = this;
        return this.f(a.Tb(this.g).then(function(a) {
            var c;
            a: {
                var e = a.idToken.split(".");
                if (3 == e.length) {
                    for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++) e += ".";
                    try {
                        var k = tc(tb(e));
                        if (k.sub && k.iss && k.aud && k.exp) {
                            c = new Mf(k);
                            break a
                        }
                    } catch (n) {}
                }
                c = null
            }
            if (!c || b.uid != c.Se) throw new O("user-mismatch");
            Ni(b, a);
            return b.reload()
        }))
    };
    var Pi = function(a, b) {
        return Ki(a).then(function() {
            if (Ia(Gi(a), b)) return Ci(a).then(function() {
                throw new O("provider-already-linked");
            })
        })
    };
    h = W.prototype;
    h.Qe = function(a) {
        var b = this;
        return this.f(Pi(this, a.provider).then(function() {
            return b.getToken()
        }).then(function(c) {
            return a.Ed(b.g, c)
        }).then(r(this.td, this)))
    };
    h.link = function(a) {
        return this.ta(this.Qe, a)
    };
    h.td = function(a) {
        Ni(this, a);
        var b = this;
        return this.reload().then(function() {
            return b
        })
    };
    h.sf = function(a) {
        var b = this;
        return this.f(this.getToken().then(function(c) {
            return b.g.updateEmail(c, a)
        }).then(function(a) {
            Ni(b, a);
            return b.reload()
        }))
    };
    h.updateEmail = function(a) {
        return this.ta(this.sf, a)
    };
    h.tf = function(a) {
        var b = this;
        return this.f(this.getToken().then(function(c) {
            return b.g.updatePassword(c, a)
        }).then(function(a) {
            Ni(b, a);
            return b.reload()
        }))
    };
    h.updatePassword = function(a) {
        return this.ta(this.tf, a)
    };
    h.uf = function(a) {
        if (void 0 === a.displayName && void 0 === a.photoURL) return Fi(this);
        var b = this;
        return this.f(this.getToken().then(function(c) {
            return b.g.updateProfile(c, {
                displayName: a.displayName,
                photoUrl: a.photoURL
            })
        }).then(function(a) {
            Ni(b, a);
            Ji(b, "displayName", a.displayName || null);
            Ji(b, "photoURL", a.photoUrl || null);
            return Ci(b)
        }).then(Ei))
    };
    h.updateProfile = function(a) {
        return this.ta(this.uf, a)
    };
    h.rf = function(a) {
        var b = this;
        return this.f(Ki(this).then(function(c) {
            return Ia(Gi(b), a) ? Cg(b.g, c, [a]).then(function(a) {
                var c = {};
                x(a.providerUserInfo || [], function(a) {
                    c[a.providerId] = !0
                });
                x(Gi(b), function(a) {
                    c[a] || Hi(b, a)
                });
                return Ci(b)
            }) : Ci(b).then(function() {
                throw new O("no-such-provider");
            })
        }))
    };
    h.unlink = function(a) {
        return this.ta(this.rf, a)
    };
    h.pe = function() {
        var a = this;
        return this.f(this.getToken().then(function(b) {
            return Q(a.g, Mg, {
                idToken: b
            })
        }).then(function() {
            a.dispatchEvent(new yi("userDeleted"))
        })).then(function() {
            Mi(a)
        })
    };
    h["delete"] = function() {
        return this.ta(this.pe)
    };
    h.md = function(a, b) {
        return "linkViaPopup" == a && (this.la || null) == b && this.ca || "linkViaRedirect" == a && (this.lc || null) == b ? !0 : !1
    };
    h.Ia = function(a, b, c, d) {
        "linkViaPopup" == a && d == (this.la || null) && (c && this.Ga ? this.Ga(c) : b && !c && this.ca && this.ca(b), this.K && (this.K.cancel(), this.K = null), delete this.ca, delete this.Ga)
    };
    h.rb = function(a, b) {
        return "linkViaPopup" == a && b == (this.la || null) || "linkViaRedirect" == a && (this.lc || null) == b ? r(this.te, this) : null
    };
    h.Sb = function() {
        return of(this.uid + ":::")
    };
    var Ri = function(a, b) {
        if (!pf()) return E(new O("operation-not-supported-in-this-environment"));
        var c = Gf(b.providerId),
            d = a.Sb(),
            e = null;
        !qf() && a.v && b.isOAuthProvider && (e = dh(a.v, a.j, a.B, "linkViaPopup", b, null, d, firebase.SDK_VERSION || null));
        var f = ef(e, c && c.Ab, c && c.zb),
            c = Pi(a, b.providerId).then(function() {
                return Ci(a)
            }).then(function() {
                Qi(a);
                return a.getToken()
            }).then(function() {
                return a.m.Bb(f, "linkViaPopup", b, d, !!e)
            }).then(function() {
                return new C(function(b, c) {
                    a.Ia("linkViaPopup", null, new O("cancelled-popup-request"),
                        a.la || null);
                    a.ca = b;
                    a.Ga = c;
                    a.la = d;
                    a.K = a.m.Gb(a, "linkViaPopup", f, d)
                })
            }).then(function(a) {
                f && df(f);
                return a
            }).c(function(a) {
                f && df(f);
                throw a;
            });
        return a.f(c)
    };
    W.prototype.linkWithPopup = function(a) {
        var b = Ri(this, a);
        return this.ta(function() {
            return b
        })
    };
    W.prototype.Re = function(a) {
        if (!pf()) return E(new O("operation-not-supported-in-this-environment"));
        var b = this,
            c = null,
            d = this.Sb(),
            e = Pi(this, a.providerId).then(function() {
                Qi(b);
                return b.getToken()
            }).then(function() {
                b.lc = d;
                return Ci(b)
            }).then(function(a) {
                b.Ha && (a = b.Ha, a = a.i.set(Si, b.F(), a.u));
                return a
            }).then(function() {
                return b.m.Cb("linkViaRedirect", a, d)
            }).c(function(a) {
                c = a;
                if (b.Ha) return Ti(b.Ha);
                throw c;
            }).then(function() {
                if (c) throw c;
            });
        return this.f(e)
    };
    W.prototype.linkWithRedirect = function(a) {
        return this.ta(this.Re, a)
    };
    var Qi = function(a) {
        if (!a.m || !a.hc) {
            if (a.m && !a.hc) throw new O("internal-error");
            throw new O("auth-domain-config-required");
        }
    };
    W.prototype.te = function(a, b) {
        var c = this;
        this.K && (this.K.cancel(), this.K = null);
        var d = null,
            e = this.getToken().then(function(d) {
                return Qf(c.g, {
                    requestUri: a,
                    sessionId: b,
                    idToken: d
                })
            }).then(function(a) {
                d = ag(a);
                return c.td(a)
            }).then(function(a) {
                return {
                    user: a,
                    credential: d
                }
            });
        return this.f(e)
    };
    W.prototype.sendEmailVerification = function() {
        var a = this;
        return this.f(this.getToken().then(function(b) {
            return a.g.sendEmailVerification(b)
        }).then(function(b) {
            if (a.email != b) return a.reload()
        }).then(function() {}))
    };
    var Mi = function(a) {
        for (var b = 0; b < a.Z.length; b++) a.Z[b].cancel("app-deleted");
        a.Z = [];
        a.qe = !0;
        N(a, "refreshToken", null);
        a.m && a.m.unsubscribe(a)
    };
    W.prototype.f = function(a) {
        var b = this;
        this.Z.push(a);
        nd(a, function() {
            Ka(b.Z, a)
        });
        return a
    };
    W.prototype.toJSON = function() {
        return this.F()
    };
    W.prototype.F = function() {
        var a = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            isAnonymous: this.isAnonymous,
            providerData: [],
            apiKey: this.j,
            appName: this.B,
            authDomain: this.v,
            stsTokenManager: this.ea.F(),
            redirectEventId: this.lc || null
        };
        x(this.providerData, function(b) {
            a.providerData.push(Bf(b))
        });
        return a
    };
    var Ui = function(a) {
            if (!a.apiKey) return null;
            var b = {
                    apiKey: a.apiKey,
                    authDomain: a.authDomain,
                    appName: a.appName
                },
                c = {};
            if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - ka()) / 1E3;
            else return null;
            var d = new W(b, c, a);
            a.providerData && x(a.providerData, function(a) {
                if (a) {
                    var b = {};
                    Af(b, a);
                    Ii(d, b)
                }
            });
            a.redirectEventId && (d.lc = a.redirectEventId);
            return d
        },
        Vi = function(a, b, c) {
            var d = new W(a, b);
            c && (d.Ha = c);
            return d.reload().then(function() {
                return d
            })
        };
    var Wi = function(a) {
            this.u = a;
            this.i = Jh()
        },
        Si = {
            name: "redirectUser",
            J: !1
        },
        Ti = function(a) {
            return a.i.remove(Si, a.u)
        },
        Xi = function(a, b) {
            return a.i.get(Si, a.u).then(function(a) {
                a && b && (a.authDomain = b);
                return Ui(a || {})
            })
        };
    var Yi = function(a) {
            this.u = a;
            this.i = Jh()
        },
        Zi = {
            name: "authUser",
            J: !0
        },
        $i = function(a, b) {
            return a.i.set(Zi, b.F(), a.u)
        },
        aj = function(a) {
            return a.i.remove(Zi, a.u)
        },
        bj = function(a, b) {
            return a.i.get(Zi, a.u).then(function(a) {
                a && b && (a.authDomain = b);
                return Ui(a || {})
            })
        };
    var Y = function(a) {
        this.Qa = !1;
        N(this, "app", a);
        if (X(this).options && X(this).options.apiKey) a = firebase.SDK_VERSION ? nf(firebase.SDK_VERSION) : null, this.g = new R(X(this).options && X(this).options.apiKey, null, a);
        else throw new O("invalid-api-key");
        this.Z = [];
        this.Oa = [];
        this.Ye = firebase.INTERNAL.createSubscribe(r(this.Ke, this));
        cj(this, null);
        this.oa = new Yi(X(this).options.apiKey + ":" + X(this).name);
        this.cb = new Wi(X(this).options.apiKey + ":" + X(this).name);
        this.Nb = this.f(dj(this));
        this.ua = this.f(ej(this));
        this.Qc = !1;
        this.Kc = r(this.lf, this);
        this.Xd = r(this.Ua, this);
        this.Yd = r(this.Ge, this);
        this.Wd = r(this.Fe, this);
        fj(this);
        this.INTERNAL = {};
        this.INTERNAL["delete"] = r(this["delete"], this)
    };
    Y.prototype.toJSON = function() {
        return {
            apiKey: X(this).options.apiKey,
            authDomain: X(this).options.authDomain,
            appName: X(this).name,
            currentUser: Z(this) && Z(this).F()
        }
    };
    var gj = function(a) {
            return a.re || E(new O("auth-domain-config-required"))
        },
        fj = function(a) {
            var b = X(a).options.authDomain,
                c = X(a).options.apiKey;
            b && pf() && (a.re = a.Nb.then(function() {
                if (!a.Qa) return a.m = ni(b, c, X(a).name), a.m.subscribe(a), Z(a) && Di(Z(a)), a.ad && (Di(a.ad), a.ad = null), a.m
            }))
        };
    h = Y.prototype;
    h.md = function(a, b) {
        switch (a) {
            case "unknown":
            case "signInViaRedirect":
                return !0;
            case "signInViaPopup":
                return this.la == b && !!this.ca;
            default:
                return !1
        }
    };
    h.Ia = function(a, b, c, d) {
        "signInViaPopup" == a && this.la == d && (c && this.Ga ? this.Ga(c) : b && !c && this.ca && this.ca(b), this.K && (this.K.cancel(), this.K = null), delete this.ca, delete this.Ga)
    };
    h.rb = function(a, b) {
        return "signInViaRedirect" == a || "signInViaPopup" == a && this.la == b && this.ca ? r(this.ue, this) : null
    };
    h.ue = function(a, b) {
        var c = this;
        a = {
            requestUri: a,
            sessionId: b
        };
        this.K && (this.K.cancel(), this.K = null);
        var d = null,
            e = Of(c.g, a).then(function(a) {
                d = ag(a);
                return a
            });
        a = c.Nb.then(function() {
            return e
        }).then(function(a) {
            return hj(c, a)
        }).then(function() {
            return {
                user: Z(c),
                credential: d
            }
        });
        return this.f(a)
    };
    h.Sb = function() {
        return of()
    };
    h.signInWithPopup = function(a) {
        if (!pf()) return E(new O("operation-not-supported-in-this-environment"));
        var b = this,
            c = Gf(a.providerId),
            d = this.Sb(),
            e = null;
        !qf() && X(this).options.authDomain && a.isOAuthProvider && (e = dh(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));
        var f = ef(e, c && c.Ab, c && c.zb),
            c = gj(this).then(function(b) {
                return b.Bb(f, "signInViaPopup", a, d, !!e)
            }).then(function() {
                return new C(function(a, c) {
                    b.Ia("signInViaPopup", null, new O("cancelled-popup-request"),
                        b.la);
                    b.ca = a;
                    b.Ga = c;
                    b.la = d;
                    b.K = b.m.Gb(b, "signInViaPopup", f, d)
                })
            }).then(function(a) {
                f && df(f);
                return a
            }).c(function(a) {
                f && df(f);
                throw a;
            });
        return this.f(c)
    };
    h.signInWithRedirect = function(a) {
        if (!pf()) return E(new O("operation-not-supported-in-this-environment"));
        var b = this,
            c = gj(this).then(function() {
                return b.m.Cb("signInViaRedirect", a)
            });
        return this.f(c)
    };
    h.getRedirectResult = function() {
        if (!pf()) return E(new O("operation-not-supported-in-this-environment"));
        var a = this,
            b = gj(this).then(function() {
                return a.m.getRedirectResult()
            });
        return this.f(b)
    };
    var hj = function(a, b) {
            var c = {};
            c.apiKey = X(a).options.apiKey;
            c.authDomain = X(a).options.authDomain;
            c.appName = X(a).name;
            return a.Nb.then(function() {
                return Vi(c, b, a.cb)
            }).then(function(b) {
                if (Z(a) && b.uid == Z(a).uid) return Z(a).copy(b), a.Ua(b);
                cj(a, b);
                Di(b);
                return a.Ua(b)
            }).then(function() {
                a.Ea()
            })
        },
        cj = function(a, b) {
            Z(a) && (Bi(Z(a), a.Xd), cc(Z(a), "tokenChanged", a.Yd), cc(Z(a), "userDeleted", a.Wd));
            b && (b.pc.push(a.Xd), Ub(b, "tokenChanged", a.Yd), Ub(b, "userDeleted", a.Wd));
            N(a, "currentUser", b)
        };
    Y.prototype.signOut = function() {
        var a = this,
            b = this.ua.then(function() {
                if (!Z(a)) return D();
                cj(a, null);
                return aj(a.oa).then(function() {
                    a.Ea()
                })
            });
        return this.f(b)
    };
    var ij = function(a) {
            var b = Xi(a.cb, X(a).options.authDomain).then(function(b) {
                if (a.ad = b) b.Ha = a.cb;
                return Ti(a.cb)
            });
            return a.f(b)
        },
        dj = function(a) {
            var b = X(a).options.authDomain,
                c = ij(a).then(function() {
                    return bj(a.oa, b)
                }).then(function(b) {
                    return b ? (b.Ha = a.cb, b.reload().then(function() {
                        return $i(a.oa, b).then(function() {
                            return b
                        })
                    }).c(function(c) {
                        return "auth/network-request-failed" == c.code ? b : aj(a.oa)
                    })) : null
                }).then(function(b) {
                    cj(a, b || null)
                });
            return a.f(c)
        },
        ej = function(a) {
            return a.Nb.then(function() {
                return a.getRedirectResult()
            }).c(function() {}).then(function() {
                if (!a.Qa) return a.Kc()
            }).c(function() {}).then(function() {
                if (!a.Qa) {
                    a.Qc = !0;
                    var b = a.oa;
                    b.i.addListener(Zi, b.u, a.Kc)
                }
            })
        };
    Y.prototype.lf = function() {
        var a = this;
        return bj(this.oa, X(this).options.authDomain).then(function(b) {
            if (!a.Qa) {
                var c;
                if (c = Z(a) && b) {
                    c = Z(a).uid;
                    var d = b.uid;
                    c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d
                }
                if (c) return Z(a).copy(b), Z(a).getToken();
                if (Z(a) || b) cj(a, b), b && (Di(b), b.Ha = a.cb), a.m && a.m.subscribe(a), a.Ea()
            }
        })
    };
    Y.prototype.Ua = function(a) {
        return $i(this.oa, a)
    };
    Y.prototype.Ge = function() {
        this.Ea();
        this.Ua(Z(this))
    };
    Y.prototype.Fe = function() {
        this.signOut()
    };
    var jj = function(a, b) {
        return a.f(b.then(function(b) {
            return hj(a, b)
        }).then(function() {
            return Z(a)
        }))
    };
    h = Y.prototype;
    h.Ke = function(a) {
        var b = this;
        this.addAuthTokenListener(function() {
            a.next(Z(b))
        })
    };
    h.onAuthStateChanged = function(a, b, c) {
        var d = this;
        this.Qc && firebase.Promise.resolve().then(function() {
            q(a) ? a(Z(d)) : q(a.next) && a.next(Z(d))
        });
        return this.Ye(a, b, c)
    };
    h.getToken = function(a) {
        var b = this,
            c = this.ua.then(function() {
                return Z(b) ? Z(b).getToken(a).then(function(a) {
                    return {
                        accessToken: a
                    }
                }) : null
            });
        return this.f(c)
    };
    h.signInWithCustomToken = function(a) {
        var b = this;
        return this.ua.then(function() {
            return jj(b, Q(b.g, Og, {
                token: a
            }))
        }).then(function(a) {
            Ji(a, "isAnonymous", !1);
            return b.Ua(a)
        }).then(function() {
            return Z(b)
        })
    };
    h.signInWithEmailAndPassword = function(a, b) {
        var c = this;
        return this.ua.then(function() {
            return jj(c, Q(c.g, Xf, {
                email: a,
                password: b
            }))
        })
    };
    h.createUserWithEmailAndPassword = function(a, b) {
        var c = this;
        return this.ua.then(function() {
            return jj(c, Q(c.g, Lg, {
                email: a,
                password: b
            }))
        })
    };
    h.signInWithCredential = function(a) {
        var b = this;
        return this.ua.then(function() {
            return jj(b, a.Tb(b.g))
        })
    };
    h.signInAnonymously = function() {
        var a = Z(this),
            b = this;
        return a && a.isAnonymous ? D(a) : this.ua.then(function() {
            return jj(b, b.g.signInAnonymously())
        }).then(function(a) {
            Ji(a, "isAnonymous", !0);
            return b.Ua(a)
        }).then(function() {
            return Z(b)
        })
    };
    var X = function(a) {
            return a.app
        },
        Z = function(a) {
            return a.currentUser
        };
    h = Y.prototype;
    h.Ea = function() {
        if (this.Qc)
            for (var a = 0; a < this.Oa.length; a++)
                if (this.Oa[a]) this.Oa[a](Z(this) && Z(this)._lat || null)
    };
    h.addAuthTokenListener = function(a) {
        var b = this;
        this.Oa.push(a);
        this.f(this.ua.then(function() {
            b.Qa || Ia(b.Oa, a) && a(Z(b) && Z(b)._lat || null)
        }))
    };
    h.removeAuthTokenListener = function(a) {
        La(this.Oa, function(b) {
            return b == a
        })
    };
    h["delete"] = function() {
        this.Qa = !0;
        for (var a = 0; a < this.Z.length; a++) this.Z[a].cancel("app-deleted");
        this.Z = [];
        this.oa && (a = this.oa, a.i.removeListener(Zi, a.u, this.Kc));
        this.m && this.m.unsubscribe(this);
        return firebase.Promise.resolve()
    };
    h.f = function(a) {
        var b = this;
        this.Z.push(a);
        nd(a, function() {
            Ka(b.Z, a)
        });
        return a
    };
    h.fetchProvidersForEmail = function(a) {
        return this.f(sg(this.g, a))
    };
    h.verifyPasswordResetCode = function(a) {
        return this.checkActionCode(a).then(function(a) {
            return a.data.email
        })
    };
    h.confirmPasswordReset = function(a, b) {
        return this.f(this.g.confirmPasswordReset(a, b).then(function() {}))
    };
    h.checkActionCode = function(a) {
        return this.f(this.g.checkActionCode(a).then(function(a) {
            return new xh(a)
        }))
    };
    h.applyActionCode = function(a) {
        return this.f(this.g.applyActionCode(a).then(function() {}))
    };
    h.sendPasswordResetEmail = function(a) {
        return this.f(this.g.sendPasswordResetEmail(a).then(function() {}))
    };
    Fh(Y.prototype, {
        applyActionCode: {
            name: "applyActionCode",
            a: [S("code")]
        },
        checkActionCode: {
            name: "checkActionCode",
            a: [S("code")]
        },
        confirmPasswordReset: {
            name: "confirmPasswordReset",
            a: [S("code"), S("newPassword")]
        },
        createUserWithEmailAndPassword: {
            name: "createUserWithEmailAndPassword",
            a: [S("email"), S("password")]
        },
        fetchProvidersForEmail: {
            name: "fetchProvidersForEmail",
            a: [S("email")]
        },
        getRedirectResult: {
            name: "getRedirectResult",
            a: []
        },
        onAuthStateChanged: {
            name: "onAuthStateChanged",
            a: [Dh(T(), zh(), "nextOrObserver"),
                zh("opt_error", !0), zh("opt_completed", !0)
            ]
        },
        sendPasswordResetEmail: {
            name: "sendPasswordResetEmail",
            a: [S("email")]
        },
        signInAnonymously: {
            name: "signInAnonymously",
            a: []
        },
        signInWithCredential: {
            name: "signInWithCredential",
            a: [Bh()]
        },
        signInWithCustomToken: {
            name: "signInWithCustomToken",
            a: [S("token")]
        },
        signInWithEmailAndPassword: {
            name: "signInWithEmailAndPassword",
            a: [S("email"), S("password")]
        },
        signInWithPopup: {
            name: "signInWithPopup",
            a: [Ch()]
        },
        signInWithRedirect: {
            name: "signInWithRedirect",
            a: [Ch()]
        },
        signOut: {
            name: "signOut",
            a: []
        },
        toJSON: {
            name: "toJSON",
            a: [S(null, !0)]
        },
        verifyPasswordResetCode: {
            name: "verifyPasswordResetCode",
            a: [S("code")]
        }
    });
    Fh(W.prototype, {
        "delete": {
            name: "delete",
            a: []
        },
        getToken: {
            name: "getToken",
            a: [{
                name: "opt_forceRefresh",
                fa: "a boolean",
                optional: !0,
                ha: function(a) {
                    return "boolean" == typeof a
                }
            }]
        },
        link: {
            name: "link",
            a: [Bh()]
        },
        linkWithPopup: {
            name: "linkWithPopup",
            a: [Ch()]
        },
        linkWithRedirect: {
            name: "linkWithRedirect",
            a: [Ch()]
        },
        reauthenticate: {
            name: "reauthenticate",
            a: [Bh()]
        },
        reload: {
            name: "reload",
            a: []
        },
        sendEmailVerification: {
            name: "sendEmailVerification",
            a: []
        },
        toJSON: {
            name: "toJSON",
            a: [S(null, !0)]
        },
        unlink: {
            name: "unlink",
            a: [S("provider")]
        },
        updateEmail: {
            name: "updateEmail",
            a: [S("email")]
        },
        updatePassword: {
            name: "updatePassword",
            a: [S("password")]
        },
        updateProfile: {
            name: "updateProfile",
            a: [T("profile")]
        }
    });
    Fh(C.prototype, {
        c: {
            name: "catch"
        },
        then: {
            name: "then"
        }
    });
    U(Zf, "credential", function(a, b) {
        return new Wf(a, b)
    }, [S("email"), S("password")]);
    Fh(Sf.prototype, {
        addScope: {
            name: "addScope",
            a: [S("scope")]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            a: [T("customOAuthParameters")]
        }
    });
    U(Sf, "credential", Sf.credential, [Dh(S(), T(), "token")]);
    Fh(Tf.prototype, {
        addScope: {
            name: "addScope",
            a: [S("scope")]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            a: [T("customOAuthParameters")]
        }
    });
    U(Tf, "credential", Tf.credential, [Dh(S(), T(), "token")]);
    Fh(Uf.prototype, {
        addScope: {
            name: "addScope",
            a: [S("scope")]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            a: [T("customOAuthParameters")]
        }
    });
    U(Uf, "credential", Uf.credential, [Dh(S(), Dh(T(), Ah()), "idToken"), Dh(S(), Ah(), "accessToken", !0)]);
    Fh(Vf.prototype, {
        setCustomParameters: {
            name: "setCustomParameters",
            a: [T("customOAuthParameters")]
        }
    });
    U(Vf, "credential", Vf.credential, [Dh(S(), T(), "token"), S("secret", !0)]);
    (function() {
        if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
            var a = {
                Auth: Y,
                Error: O
            };
            U(a, "EmailAuthProvider", Zf, []);
            U(a, "FacebookAuthProvider", Sf, []);
            U(a, "GithubAuthProvider", Tf, []);
            U(a, "GoogleAuthProvider", Uf, []);
            U(a, "TwitterAuthProvider", Vf, []);
            firebase.INTERNAL.registerService("auth", function(a, c) {
                    a = new Y(a);
                    c({
                        INTERNAL: {
                            getToken: r(a.getToken, a),
                            addAuthTokenListener: r(a.addAuthTokenListener, a),
                            removeAuthTokenListener: r(a.removeAuthTokenListener, a)
                        }
                    });
                    return a
                },
                a,
                function(a, c) {
                    if ("create" === a) try {
                        c.auth()
                    } catch (d) {}
                });
            firebase.INTERNAL.extendNamespace({
                User: W
            })
        } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
}).call(this);
(function() {
    var g, aa = this;

    function n(a) {
        return void 0 !== a
    }

    function ba() {}

    function ca(a) {
        a.Vb = function() {
            return a.Ye ? a.Ye : a.Ye = new a
        }
    }

    function da(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ea(a) {
        return "array" == da(a)
    }

    function fa(a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function p(a) {
        return "string" == typeof a
    }

    function ga(a) {
        return "number" == typeof a
    }

    function ha(a) {
        return "function" == da(a)
    }

    function ia(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function q(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return q.apply(null, arguments)
    }

    function la(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.wg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.sg = function(a, c, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    };

    function ma() {
        this.Wa = -1
    };

    function na() {
        this.Wa = -1;
        this.Wa = 64;
        this.M = [];
        this.Vd = [];
        this.Af = [];
        this.zd = [];
        this.zd[0] = 128;
        for (var a = 1; a < this.Wa; ++a) this.zd[a] = 0;
        this.Pd = this.$b = 0;
        this.reset()
    }
    la(na, ma);
    na.prototype.reset = function() {
        this.M[0] = 1732584193;
        this.M[1] = 4023233417;
        this.M[2] = 2562383102;
        this.M[3] = 271733878;
        this.M[4] = 3285377520;
        this.Pd = this.$b = 0
    };

    function oa(a, b, c) {
        c || (c = 0);
        var d = a.Af;
        if (p(b))
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.M[0];
        c = a.M[1];
        for (var h = a.M[2], k = a.M[3], l = a.M[4], m, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = k ^ c & (h ^ k), m = 1518500249) : (f = c ^ h ^ k, m = 1859775393) : 60 > e ? (f = c & h | k & (c | h), m = 2400959708) : (f = c ^ h ^ k, m = 3395469782), f = (b <<
            5 | b >>> 27) + f + l + m + d[e] & 4294967295, l = k, k = h, h = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.M[0] = a.M[0] + b & 4294967295;
        a.M[1] = a.M[1] + c & 4294967295;
        a.M[2] = a.M[2] + h & 4294967295;
        a.M[3] = a.M[3] + k & 4294967295;
        a.M[4] = a.M[4] + l & 4294967295
    }
    na.prototype.update = function(a, b) {
        if (null != a) {
            n(b) || (b = a.length);
            for (var c = b - this.Wa, d = 0, e = this.Vd, f = this.$b; d < b;) {
                if (0 == f)
                    for (; d <= c;) oa(this, a, d), d += this.Wa;
                if (p(a))
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Wa) {
                            oa(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.Wa) {
                                oa(this, e);
                                f = 0;
                                break
                            }
            }
            this.$b = f;
            this.Pd += b
        }
    };

    function r(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function pa(a, b) {
        var c = {},
            d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    }

    function qa(a, b) {
        for (var c in a)
            if (!b.call(void 0, a[c], c, a)) return !1;
        return !0
    }

    function ra(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function sa(a) {
        for (var b in a) return b
    }

    function ta(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function ua(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function va(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function wa(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    }

    function xa(a, b) {
        var c = wa(a, b, void 0);
        return c && a[c]
    }

    function ya(a) {
        for (var b in a) return !1;
        return !0
    }

    function za(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };

    function Aa(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function Ba() {
        this.Fd = void 0
    }

    function Ca(a, b, c) {
        switch (typeof b) {
            case "string":
                Da(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (ea(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], Ca(a, a.Fd ? a.Fd.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Da(f, c),
                    c.push(":"), Ca(a, a.Fd ? a.Fd.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var Ea = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Da(a, b) {
        b.push('"', a.replace(Fa, function(a) {
            if (a in Ea) return Ea[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Ea[a] = e + b.toString(16)
        }), '"')
    };
    var t;
    a: {
        var Ga = aa.navigator;
        if (Ga) {
            var Ha = Ga.userAgent;
            if (Ha) {
                t = Ha;
                break a
            }
        }
        t = ""
    };
    var v = Array.prototype,
        Ia = v.indexOf ? function(a, b, c) {
            return v.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ja = v.forEach ? function(a, b, c) {
            v.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ka = v.filter ? function(a, b, c) {
            return v.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = p(a) ?
                    a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        },
        La = v.map ? function(a, b, c) {
            return v.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        Ma = v.reduce ? function(a, b, c, d) {
            for (var e = [], f = 1, h = arguments.length; f < h; f++) e.push(arguments[f]);
            d && (e[0] = q(b, d));
            return v.reduce.apply(a, e)
        } : function(a, b, c, d) {
            var e = c;
            Ja(a, function(c, h) {
                e = b.call(d, e, c, h, a)
            });
            return e
        },
        Na = v.every ? function(a, b,
            c) {
            return v.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function Oa(a, b) {
        var c = Pa(a, b, void 0);
        return 0 > c ? null : p(a) ? a.charAt(c) : a[c]
    }

    function Pa(a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Qa(a, b) {
        var c = Ia(a, b);
        0 <= c && v.splice.call(a, c, 1)
    }

    function Ra(a, b, c) {
        return 2 >= arguments.length ? v.slice.call(a, b) : v.slice.call(a, b, c)
    }

    function Sa(a, b) {
        a.sort(b || Ta)
    }

    function Ta(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var Ua = -1 != t.indexOf("Opera") || -1 != t.indexOf("OPR"),
        Va = -1 != t.indexOf("Trident") || -1 != t.indexOf("MSIE"),
        Wa = -1 != t.indexOf("Gecko") && -1 == t.toLowerCase().indexOf("webkit") && !(-1 != t.indexOf("Trident") || -1 != t.indexOf("MSIE")),
        Xa = -1 != t.toLowerCase().indexOf("webkit");
    (function() {
        var a = "",
            b;
        if (Ua && aa.opera) return a = aa.opera.version, ha(a) ? a() : a;
        Wa ? b = /rv\:([^\);]+)(\)|;)/ : Va ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Xa && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(t)) ? a[1] : "");
        return Va && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
    })();
    var Ya = null,
        Za = null,
        $a = null;

    function ab(a, b) {
        if (!fa(a)) throw Error("encodeByteArray takes an array as a parameter");
        bb();
        for (var c = b ? Za : Ya, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                h = e + 1 < a.length,
                k = h ? a[e + 1] : 0,
                l = e + 2 < a.length,
                m = l ? a[e + 2] : 0,
                u = f >> 2,
                f = (f & 3) << 4 | k >> 4,
                k = (k & 15) << 2 | m >> 6,
                m = m & 63;
            l || (m = 64, h || (k = 64));
            d.push(c[u], c[f], c[k], c[m])
        }
        return d.join("")
    }

    function bb() {
        if (!Ya) {
            Ya = {};
            Za = {};
            $a = {};
            for (var a = 0; 65 > a; a++) Ya[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Za[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), $a[Za[a]] = a, 62 <= a && ($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a)
        }
    };

    function cb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function w(a, b) {
        if (Object.prototype.hasOwnProperty.call(a, b)) return a[b]
    }

    function db(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    };

    function x(a, b, c, d) {
        var e;
        d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
        if (e) throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
    }

    function y(a, b, c) {
        var d = "";
        switch (b) {
            case 1:
                d = c ? "first" : "First";
                break;
            case 2:
                d = c ? "second" : "Second";
                break;
            case 3:
                d = c ? "third" : "Third";
                break;
            case 4:
                d = c ? "fourth" : "Fourth";
                break;
            default:
                throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
        }
        return a = a + " failed: " + (d + " argument ")
    }

    function A(a, b, c, d) {
        if ((!d || n(c)) && !ha(c)) throw Error(y(a, b, d) + "must be a valid function.");
    }

    function eb(a, b, c) {
        if (n(c) && (!ia(c) || null === c)) throw Error(y(a, b, !0) + "must be a valid context object.");
    };

    function fb(a) {
        var b = [];
        db(a, function(a, d) {
            ea(d) ? Ja(d, function(d) {
                b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
            }) : b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
        });
        return b.length ? "&" + b.join("&") : ""
    };
    var gb = firebase.Promise;

    function hb() {
        var a = this;
        this.reject = this.resolve = null;
        this.ra = new gb(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    }

    function ib(a, b) {
        return function(c, d) {
            c ? a.reject(c) : a.resolve(d);
            ha(b) && (jb(a.ra), 1 === b.length ? b(c) : b(c, d))
        }
    }

    function jb(a) {
        a.then(void 0, ba)
    };

    function kb(a, b) {
        if (!a) throw lb(b);
    }

    function lb(a) {
        return Error("Firebase Database (" + firebase.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + a)
    };

    function mb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            55296 <= e && 56319 >= e && (e -= 55296, d++, kb(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    }

    function nb(a) {
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b++ : 2048 > d ? b += 2 : 55296 <= d && 56319 >= d ? (b += 4, c++) : b += 3
        }
        return b
    };

    function ob(a) {
        return "undefined" !== typeof JSON && n(JSON.parse) ? JSON.parse(a) : Aa(a)
    }

    function B(a) {
        if ("undefined" !== typeof JSON && n(JSON.stringify)) a = JSON.stringify(a);
        else {
            var b = [];
            Ca(new Ba, a, b);
            a = b.join("")
        }
        return a
    };

    function pb(a, b) {
        this.committed = a;
        this.snapshot = b
    };

    function qb() {
        return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : "")
    };

    function rb(a) {
        this.re = a;
        this.Bd = [];
        this.Qb = 0;
        this.Xd = -1;
        this.Fb = null
    }

    function sb(a, b, c) {
        a.Xd = b;
        a.Fb = c;
        a.Xd < a.Qb && (a.Fb(), a.Fb = null)
    }

    function tb(a, b, c) {
        for (a.Bd[b] = c; a.Bd[a.Qb];) {
            var d = a.Bd[a.Qb];
            delete a.Bd[a.Qb];
            for (var e = 0; e < d.length; ++e)
                if (d[e]) {
                    var f = a;
                    ub(function() {
                        f.re(d[e])
                    })
                }
            if (a.Qb === a.Xd) {
                a.Fb && (clearTimeout(a.Fb), a.Fb(), a.Fb = null);
                break
            }
            a.Qb++
        }
    };

    function vb() {
        this.pc = {}
    }
    vb.prototype.set = function(a, b) {
        null == b ? delete this.pc[a] : this.pc[a] = b
    };
    vb.prototype.get = function(a) {
        return cb(this.pc, a) ? this.pc[a] : null
    };
    vb.prototype.remove = function(a) {
        delete this.pc[a]
    };
    vb.prototype.Ze = !0;

    function wb(a) {
        this.uc = a;
        this.Cd = "firebase:"
    }
    g = wb.prototype;
    g.set = function(a, b) {
        null == b ? this.uc.removeItem(this.Cd + a) : this.uc.setItem(this.Cd + a, B(b))
    };
    g.get = function(a) {
        a = this.uc.getItem(this.Cd + a);
        return null == a ? null : ob(a)
    };
    g.remove = function(a) {
        this.uc.removeItem(this.Cd + a)
    };
    g.Ze = !1;
    g.toString = function() {
        return this.uc.toString()
    };

    function xb(a) {
        try {
            if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
                var b = window[a];
                b.setItem("firebase:sentinel", "cache");
                b.removeItem("firebase:sentinel");
                return new wb(b)
            }
        } catch (c) {}
        return new vb
    }
    var yb = xb("localStorage"),
        zb = xb("sessionStorage");

    function Ab(a, b, c) {
        this.type = Bb;
        this.source = a;
        this.path = b;
        this.Ga = c
    }
    Ab.prototype.Mc = function(a) {
        return this.path.e() ? new Ab(this.source, C, this.Ga.Q(a)) : new Ab(this.source, D(this.path), this.Ga)
    };
    Ab.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ga.toString() + ")"
    };

    function Cb(a, b) {
        this.type = Db;
        this.source = a;
        this.path = b
    }
    Cb.prototype.Mc = function() {
        return this.path.e() ? new Cb(this.source, C) : new Cb(this.source, D(this.path))
    };
    Cb.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
    };

    function Eb(a) {
        this.oc = a
    }
    Eb.prototype.getToken = function(a) {
        return this.oc.INTERNAL.getToken(a).then(null, function(a) {
            return a && "auth/token-not-initialized" === a.code ? (E("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(a)
        })
    };

    function Fb(a, b) {
        a.oc.INTERNAL.addAuthTokenListener(b)
    };

    function Gb() {
        this.Jd = G
    }
    Gb.prototype.j = function(a) {
        return this.Jd.P(a)
    };
    Gb.prototype.toString = function() {
        return this.Jd.toString()
    };

    function Hb(a, b, c, d, e) {
        this.host = a.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf(".") + 1);
        this.Sc = b;
        this.ne = c;
        this.qg = d;
        this.gf = e || "";
        this.$a = yb.get("host:" + a) || this.host
    }

    function Ib(a, b) {
        b !== a.$a && (a.$a = b, "s-" === a.$a.substr(0, 2) && yb.set("host:" + a.host, a.$a))
    }

    function Jb(a, b, c) {
        H("string" === typeof b, "typeof type must == string");
        H("object" === typeof c, "typeof params must == object");
        if ("websocket" === b) b = (a.Sc ? "wss://" : "ws://") + a.$a + "/.ws?";
        else if ("long_polling" === b) b = (a.Sc ? "https://" : "http://") + a.$a + "/.lp?";
        else throw Error("Unknown connection type: " + b);
        a.host !== a.$a && (c.ns = a.ne);
        var d = [];
        r(c, function(a, b) {
            d.push(b + "=" + a)
        });
        return b + d.join("&")
    }
    Hb.prototype.toString = function() {
        var a = (this.Sc ? "https://" : "http://") + this.host;
        this.gf && (a += "<" + this.gf + ">");
        return a
    };

    function Kb() {
        this.tc = {}
    }

    function Lb(a, b, c) {
        n(c) || (c = 1);
        cb(a.tc, b) || (a.tc[b] = 0);
        a.tc[b] += c
    }
    Kb.prototype.get = function() {
        return za(this.tc)
    };

    function Mb(a) {
        this.Ef = a;
        this.rd = null
    }
    Mb.prototype.get = function() {
        var a = this.Ef.get(),
            b = za(a);
        if (this.rd)
            for (var c in this.rd) b[c] -= this.rd[c];
        this.rd = a;
        return b
    };

    function Nb() {
        this.vb = []
    }

    function Ob(a, b) {
        for (var c = null, d = 0; d < b.length; d++) {
            var e = b[d],
                f = e.Yb();
            null === c || f.Z(c.Yb()) || (a.vb.push(c), c = null);
            null === c && (c = new Pb(f));
            c.add(e)
        }
        c && a.vb.push(c)
    }

    function Qb(a, b, c) {
        Ob(a, c);
        Rb(a, function(a) {
            return a.Z(b)
        })
    }

    function Sb(a, b, c) {
        Ob(a, c);
        Rb(a, function(a) {
            return a.contains(b) || b.contains(a)
        })
    }

    function Rb(a, b) {
        for (var c = !0, d = 0; d < a.vb.length; d++) {
            var e = a.vb[d];
            if (e)
                if (e = e.Yb(), b(e)) {
                    for (var e = a.vb[d], f = 0; f < e.jd.length; f++) {
                        var h = e.jd[f];
                        if (null !== h) {
                            e.jd[f] = null;
                            var k = h.Tb();
                            Tb && E("event: " + h.toString());
                            ub(k)
                        }
                    }
                    a.vb[d] = null
                } else c = !1
        }
        c && (a.vb = [])
    }

    function Pb(a) {
        this.qa = a;
        this.jd = []
    }
    Pb.prototype.add = function(a) {
        this.jd.push(a)
    };
    Pb.prototype.Yb = function() {
        return this.qa
    };

    function Ub(a, b, c, d) {
        this.$d = b;
        this.Md = c;
        this.Dd = d;
        this.hd = a
    }
    Ub.prototype.Yb = function() {
        var a = this.Md.wb();
        return "value" === this.hd ? a.path : a.getParent().path
    };
    Ub.prototype.ee = function() {
        return this.hd
    };
    Ub.prototype.Tb = function() {
        return this.$d.Tb(this)
    };
    Ub.prototype.toString = function() {
        return this.Yb().toString() + ":" + this.hd + ":" + B(this.Md.Qe())
    };

    function Vb(a, b, c) {
        this.$d = a;
        this.error = b;
        this.path = c
    }
    Vb.prototype.Yb = function() {
        return this.path
    };
    Vb.prototype.ee = function() {
        return "cancel"
    };
    Vb.prototype.Tb = function() {
        return this.$d.Tb(this)
    };
    Vb.prototype.toString = function() {
        return this.path.toString() + ":cancel"
    };

    function Wb() {}
    Wb.prototype.Te = function() {
        return null
    };
    Wb.prototype.de = function() {
        return null
    };
    var Xb = new Wb;

    function Yb(a, b, c) {
        this.xf = a;
        this.Ka = b;
        this.yd = c
    }
    Yb.prototype.Te = function(a) {
        var b = this.Ka.N;
        if (Zb(b, a)) return b.j().Q(a);
        b = null != this.yd ? new $b(this.yd, !0, !1) : this.Ka.w();
        return this.xf.qc(a, b)
    };
    Yb.prototype.de = function(a, b, c) {
        var d = null != this.yd ? this.yd : ac(this.Ka);
        a = this.xf.Wd(d, b, 1, c, a);
        return 0 === a.length ? null : a[0]
    };

    function I(a, b, c, d) {
        this.type = a;
        this.Ja = b;
        this.Xa = c;
        this.oe = d;
        this.Dd = void 0
    }

    function bc(a) {
        return new I(cc, a)
    }
    var cc = "value";

    function $b(a, b, c) {
        this.A = a;
        this.da = b;
        this.Sb = c
    }

    function dc(a) {
        return a.da
    }

    function ec(a) {
        return a.Sb
    }

    function fc(a, b) {
        return b.e() ? a.da && !a.Sb : Zb(a, J(b))
    }

    function Zb(a, b) {
        return a.da && !a.Sb || a.A.Da(b)
    }
    $b.prototype.j = function() {
        return this.A
    };

    function gc(a, b) {
        return hc(a.name, b.name)
    }

    function ic(a, b) {
        return hc(a, b)
    };

    function K(a, b) {
        this.name = a;
        this.R = b
    }

    function jc(a, b) {
        return new K(a, b)
    };

    function kc(a, b) {
        return a && "object" === typeof a ? (H(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
    }

    function lc(a, b) {
        var c = new mc;
        nc(a, new L(""), function(a, e) {
            oc(c, a, pc(e, b))
        });
        return c
    }

    function pc(a, b) {
        var c = a.C().H(),
            c = kc(c, b),
            d;
        if (a.J()) {
            var e = kc(a.Ca(), b);
            return e !== a.Ca() || c !== a.C().H() ? new qc(e, M(c)) : a
        }
        d = a;
        c !== a.C().H() && (d = d.fa(new qc(c)));
        a.O(N, function(a, c) {
            var e = pc(c, b);
            e !== c && (d = d.T(a, e))
        });
        return d
    };
    var rc = function() {
            var a = 1;
            return function() {
                return a++
            }
        }(),
        H = kb,
        sc = lb;

    function tc(a) {
        try {
            var b;
            bb();
            for (var c = $a, d = [], e = 0; e < a.length;) {
                var f = c[a.charAt(e++)],
                    h = e < a.length ? c[a.charAt(e)] : 0;
                ++e;
                var k = e < a.length ? c[a.charAt(e)] : 64;
                ++e;
                var l = e < a.length ? c[a.charAt(e)] : 64;
                ++e;
                if (null == f || null == h || null == k || null == l) throw Error();
                d.push(f << 2 | h >> 4);
                64 != k && (d.push(h << 4 & 240 | k >> 2), 64 != l && d.push(k << 6 & 192 | l))
            }
            if (8192 > d.length) b = String.fromCharCode.apply(null, d);
            else {
                a = "";
                for (c = 0; c < d.length; c += 8192) a += String.fromCharCode.apply(null, Ra(d, c, c + 8192));
                b = a
            }
            return b
        } catch (m) {
            E("base64Decode failed: ",
                m)
        }
        return null
    }

    function uc(a) {
        var b = mb(a);
        a = new na;
        a.update(b);
        var b = [],
            c = 8 * a.Pd;
        56 > a.$b ? a.update(a.zd, 56 - a.$b) : a.update(a.zd, a.Wa - (a.$b - 56));
        for (var d = a.Wa - 1; 56 <= d; d--) a.Vd[d] = c & 255, c /= 256;
        oa(a, a.Vd);
        for (d = c = 0; 5 > d; d++)
            for (var e = 24; 0 <= e; e -= 8) b[c] = a.M[d] >> e & 255, ++c;
        return ab(b)
    }

    function vc(a) {
        for (var b = "", c = 0; c < arguments.length; c++) b = fa(arguments[c]) ? b + vc.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + B(arguments[c]) : b + arguments[c], b += " ";
        return b
    }
    var Tb = null,
        wc = !0;

    function xc(a, b) {
        kb(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
        !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? Tb = q(console.log, console) : "object" === typeof console.log && (Tb = function(a) {
            console.log(a)
        })), b && zb.set("logging_enabled", !0)) : ha(a) ? Tb = a : (Tb = null, zb.remove("logging_enabled"))
    }

    function E(a) {
        !0 === wc && (wc = !1, null === Tb && !0 === zb.get("logging_enabled") && xc(!0));
        if (Tb) {
            var b = vc.apply(null, arguments);
            Tb(b)
        }
    }

    function yc(a) {
        return function() {
            E(a, arguments)
        }
    }

    function zc(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE INTERNAL ERROR: " + vc.apply(null, arguments);
            "undefined" !== typeof console.error ? console.error(b) : console.log(b)
        }
    }

    function Ac(a) {
        var b = vc.apply(null, arguments);
        throw Error("FIREBASE FATAL ERROR: " + b);
    }

    function O(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE WARNING: " + vc.apply(null, arguments);
            "undefined" !== typeof console.warn ? console.warn(b) : console.log(b)
        }
    }

    function Bc(a) {
        var b, c, d, e, f, h = a;
        f = c = a = b = "";
        d = !0;
        e = "https";
        if (p(h)) {
            var k = h.indexOf("//");
            0 <= k && (e = h.substring(0, k - 1), h = h.substring(k + 2));
            k = h.indexOf("/"); - 1 === k && (k = h.length);
            b = h.substring(0, k);
            f = "";
            h = h.substring(k).split("/");
            for (k = 0; k < h.length; k++)
                if (0 < h[k].length) {
                    var l = h[k];
                    try {
                        l = decodeURIComponent(l.replace(/\+/g, " "))
                    } catch (m) {}
                    f += "/" + l
                }
            h = b.split(".");
            3 === h.length ? (a = h[1], c = h[0].toLowerCase()) : 2 === h.length && (a = h[0]);
            k = b.indexOf(":");
            0 <= k && (d = "https" === e || "wss" === e)
        }
        "firebase" === a && Ac(b + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
        c && "undefined" != c || Ac("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
        d || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        return {
            jc: new Hb(b, d, c, "ws" === e || "wss" === e),
            path: new L(f)
        }
    }

    function Cc(a) {
        return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function Dc(a) {
        if ("complete" === document.readyState) a();
        else {
            var b = !1,
                c = function() {
                    document.body ? b || (b = !0, a()) : setTimeout(c, Math.floor(10))
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && c()
            }), window.attachEvent("onload", c))
        }
    }

    function hc(a, b) {
        if (a === b) return 0;
        if ("[MIN_NAME]" === a || "[MAX_NAME]" === b) return -1;
        if ("[MIN_NAME]" === b || "[MAX_NAME]" === a) return 1;
        var c = Ec(a),
            d = Ec(b);
        return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1
    }

    function Fc(a, b) {
        if (b && a in b) return b[a];
        throw Error("Missing required key (" + a + ") in object: " + B(b));
    }

    function Gc(a) {
        if ("object" !== typeof a || null === a) return B(a);
        var b = [],
            c;
        for (c in a) b.push(c);
        b.sort();
        c = "{";
        for (var d = 0; d < b.length; d++) 0 !== d && (c += ","), c += B(b[d]), c += ":", c += Gc(a[b[d]]);
        return c + "}"
    }

    function Hc(a, b) {
        if (a.length <= b) return [a];
        for (var c = [], d = 0; d < a.length; d += b) d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function Ic(a, b) {
        if (ea(a))
            for (var c = 0; c < a.length; ++c) b(c, a[c]);
        else r(a, b)
    }

    function Jc(a) {
        H(!Cc(a), "Invalid JSON number");
        var b, c, d, e;
        0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
        e = [];
        for (a = 52; a; --a) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; --a) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        e.push(b ? 1 : 0);
        e.reverse();
        b = e.join("");
        c = "";
        for (a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length &&
            (d = "0" + d), c += d;
        return c.toLowerCase()
    }
    var Kc = /^-?\d{1,10}$/;

    function Ec(a) {
        return Kc.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null
    }

    function ub(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function() {
                O("Exception was thrown by user callback.", b.stack || "");
                throw b;
            }, Math.floor(0))
        }
    }

    function Lc(a, b, c) {
        Object.defineProperty(a, b, {
            get: c
        })
    }

    function Mc(a, b) {
        var c = setTimeout(a, b);
        "object" === typeof c && c.unref && c.unref();
        return c
    };

    function Nc(a) {
        var b = {},
            c = {},
            d = {},
            e = "";
        try {
            var f = a.split("."),
                b = ob(tc(f[0]) || ""),
                c = ob(tc(f[1]) || ""),
                e = f[2],
                d = c.d || {};
            delete c.d
        } catch (h) {}
        return {
            tg: b,
            Ie: c,
            data: d,
            mg: e
        }
    }

    function Oc(a) {
        a = Nc(a);
        var b = a.Ie;
        return !!a.mg && !!b && "object" === typeof b && b.hasOwnProperty("iat")
    }

    function Pc(a) {
        a = Nc(a).Ie;
        return "object" === typeof a && !0 === w(a, "admin")
    };

    function Qc(a, b, c) {
        this.f = yc("p:rest:");
        this.L = a;
        this.Gb = b;
        this.$c = c;
        this.$ = {}
    }

    function Rc(a, b) {
        if (n(b)) return "tag$" + b;
        H(Sc(a.m), "should have a tag if it's not a default query.");
        return a.path.toString()
    }
    g = Qc.prototype;
    g.$e = function(a, b, c, d) {
        var e = a.path.toString();
        this.f("Listen called for " + e + " " + a.ja());
        var f = Rc(a, c),
            h = {};
        this.$[f] = h;
        a = Tc(a.m);
        var k = this;
        Uc(this, e + ".json", a, function(a, b) {
            var u = b;
            404 === a && (a = u = null);
            null === a && k.Gb(e, u, !1, c);
            w(k.$, f) === h && d(a ? 401 == a ? "permission_denied" : "rest_error:" + a : "ok", null)
        })
    };
    g.uf = function(a, b) {
        var c = Rc(a, b);
        delete this.$[c]
    };
    g.kf = function() {};
    g.pe = function() {};
    g.cf = function() {};
    g.xd = function() {};
    g.put = function() {};
    g.af = function() {};
    g.we = function() {};

    function Uc(a, b, c, d) {
        c = c || {};
        c.format = "export";
        a.$c.getToken(!1).then(function(e) {
            (e = e && e.accessToken) && (c.auth = e);
            var f = (a.L.Sc ? "https://" : "http://") + a.L.host + b + "?" + fb(c);
            a.f("Sending REST request for " + f);
            var h = new XMLHttpRequest;
            h.onreadystatechange = function() {
                if (d && 4 === h.readyState) {
                    a.f("REST Response for " + f + " received. status:", h.status, "response:", h.responseText);
                    var b = null;
                    if (200 <= h.status && 300 > h.status) {
                        try {
                            b = ob(h.responseText)
                        } catch (c) {
                            O("Failed to parse JSON response for " + f + ": " + h.responseText)
                        }
                        d(null,
                            b)
                    } else 401 !== h.status && 404 !== h.status && O("Got unsuccessful REST response for " + f + " Status: " + h.status), d(h.status);
                    d = null
                }
            };
            h.open("GET", f, !0);
            h.send()
        })
    };

    function Vc(a, b, c) {
        this.type = Wc;
        this.source = a;
        this.path = b;
        this.children = c
    }
    Vc.prototype.Mc = function(a) {
        if (this.path.e()) return a = this.children.subtree(new L(a)), a.e() ? null : a.value ? new Ab(this.source, C, a.value) : new Vc(this.source, C, a);
        H(J(this.path) === a, "Can't get a merge for a child not on the path of the operation");
        return new Vc(this.source, D(this.path), this.children)
    };
    Vc.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    };

    function Xc(a, b) {
        this.rf = {};
        this.Vc = new Mb(a);
        this.va = b;
        var c = 1E4 + 2E4 * Math.random();
        Mc(q(this.lf, this), Math.floor(c))
    }
    Xc.prototype.lf = function() {
        var a = this.Vc.get(),
            b = {},
            c = !1,
            d;
        for (d in a) 0 < a[d] && cb(this.rf, d) && (b[d] = a[d], c = !0);
        c && this.va.we(b);
        Mc(q(this.lf, this), Math.floor(6E5 * Math.random()))
    };
    var Yc = {},
        Zc = {};

    function $c(a) {
        a = a.toString();
        Yc[a] || (Yc[a] = new Kb);
        return Yc[a]
    }

    function ad(a, b) {
        var c = a.toString();
        Zc[c] || (Zc[c] = b());
        return Zc[c]
    };
    var bd = null;
    "undefined" !== typeof MozWebSocket ? bd = MozWebSocket : "undefined" !== typeof WebSocket && (bd = WebSocket);

    function cd(a, b, c, d) {
        this.Yd = a;
        this.f = yc(this.Yd);
        this.frames = this.zc = null;
        this.pb = this.qb = this.De = 0;
        this.Va = $c(b);
        a = {
            v: "5"
        };
        "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
        c && (a.s = c);
        d && (a.ls = d);
        this.Je = Jb(b, "websocket", a)
    }
    var dd;
    cd.prototype.open = function(a, b) {
        this.ib = b;
        this.Xf = a;
        this.f("Websocket connecting to " + this.Je);
        this.wc = !1;
        yb.set("previous_websocket_failure", !0);
        try {
            this.Ia = new bd(this.Je)
        } catch (c) {
            this.f("Error instantiating WebSocket.");
            var d = c.message || c.data;
            d && this.f(d);
            this.bb();
            return
        }
        var e = this;
        this.Ia.onopen = function() {
            e.f("Websocket connected.");
            e.wc = !0
        };
        this.Ia.onclose = function() {
            e.f("Websocket connection was disconnected.");
            e.Ia = null;
            e.bb()
        };
        this.Ia.onmessage = function(a) {
            if (null !== e.Ia)
                if (a = a.data, e.pb +=
                    a.length, Lb(e.Va, "bytes_received", a.length), ed(e), null !== e.frames) fd(e, a);
                else {
                    a: {
                        H(null === e.frames, "We already have a frame buffer");
                        if (6 >= a.length) {
                            var b = Number(a);
                            if (!isNaN(b)) {
                                e.De = b;
                                e.frames = [];
                                a = null;
                                break a
                            }
                        }
                        e.De = 1;e.frames = []
                    }
                    null !== a && fd(e, a)
                }
        };
        this.Ia.onerror = function(a) {
            e.f("WebSocket error.  Closing connection.");
            (a = a.message || a.data) && e.f(a);
            e.bb()
        }
    };
    cd.prototype.start = function() {};
    cd.isAvailable = function() {
        var a = !1;
        if ("undefined" !== typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0)
        }
        return !a && null !== bd && !dd
    };
    cd.responsesRequiredToBeHealthy = 2;
    cd.healthyTimeout = 3E4;
    g = cd.prototype;
    g.sd = function() {
        yb.remove("previous_websocket_failure")
    };

    function fd(a, b) {
        a.frames.push(b);
        if (a.frames.length == a.De) {
            var c = a.frames.join("");
            a.frames = null;
            c = ob(c);
            a.Xf(c)
        }
    }
    g.send = function(a) {
        ed(this);
        a = B(a);
        this.qb += a.length;
        Lb(this.Va, "bytes_sent", a.length);
        a = Hc(a, 16384);
        1 < a.length && gd(this, String(a.length));
        for (var b = 0; b < a.length; b++) gd(this, a[b])
    };
    g.Tc = function() {
        this.Ab = !0;
        this.zc && (clearInterval(this.zc), this.zc = null);
        this.Ia && (this.Ia.close(), this.Ia = null)
    };
    g.bb = function() {
        this.Ab || (this.f("WebSocket is closing itself"), this.Tc(), this.ib && (this.ib(this.wc), this.ib = null))
    };
    g.close = function() {
        this.Ab || (this.f("WebSocket is being closed"), this.Tc())
    };

    function ed(a) {
        clearInterval(a.zc);
        a.zc = setInterval(function() {
            a.Ia && gd(a, "0");
            ed(a)
        }, Math.floor(45E3))
    }

    function gd(a, b) {
        try {
            a.Ia.send(b)
        } catch (c) {
            a.f("Exception thrown from WebSocket.send():", c.message || c.data, "Closing connection."), setTimeout(q(a.bb, a), 0)
        }
    };

    function hd() {
        this.fb = {}
    }

    function jd(a, b) {
        var c = b.type,
            d = b.Xa;
        H("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
        H(".priority" !== d, "Only non-priority child changes can be tracked.");
        var e = w(a.fb, d);
        if (e) {
            var f = e.type;
            if ("child_added" == c && "child_removed" == f) a.fb[d] = new I("child_changed", b.Ja, d, e.Ja);
            else if ("child_removed" == c && "child_added" == f) delete a.fb[d];
            else if ("child_removed" == c && "child_changed" == f) a.fb[d] = new I("child_removed", e.oe, d);
            else if ("child_changed" == c &&
                "child_added" == f) a.fb[d] = new I("child_added", b.Ja, d);
            else if ("child_changed" == c && "child_changed" == f) a.fb[d] = new I("child_changed", b.Ja, d, e.oe);
            else throw sc("Illegal combination of changes: " + b + " occurred after " + e);
        } else a.fb[d] = b
    };

    function kd(a) {
        this.V = a;
        this.g = a.m.g
    }

    function ld(a, b, c, d) {
        var e = [],
            f = [];
        Ja(b, function(b) {
            "child_changed" === b.type && a.g.nd(b.oe, b.Ja) && f.push(new I("child_moved", b.Ja, b.Xa))
        });
        md(a, e, "child_removed", b, d, c);
        md(a, e, "child_added", b, d, c);
        md(a, e, "child_moved", f, d, c);
        md(a, e, "child_changed", b, d, c);
        md(a, e, cc, b, d, c);
        return e
    }

    function md(a, b, c, d, e, f) {
        d = Ka(d, function(a) {
            return a.type === c
        });
        Sa(d, q(a.Ff, a));
        Ja(d, function(c) {
            var d = nd(a, c, f);
            Ja(e, function(e) {
                e.nf(c.type) && b.push(e.createEvent(d, a.V))
            })
        })
    }

    function nd(a, b, c) {
        "value" !== b.type && "child_removed" !== b.type && (b.Dd = c.Ve(b.Xa, b.Ja, a.g));
        return b
    }
    kd.prototype.Ff = function(a, b) {
        if (null == a.Xa || null == b.Xa) throw sc("Should only compare child_ events.");
        return this.g.compare(new K(a.Xa, a.Ja), new K(b.Xa, b.Ja))
    };

    function od(a, b) {
        this.Sd = a;
        this.Df = b
    }

    function pd(a) {
        this.U = a
    }
    pd.prototype.eb = function(a, b, c, d) {
        var e = new hd,
            f;
        if (b.type === Bb) b.source.ce ? c = qd(this, a, b.path, b.Ga, c, d, e) : (H(b.source.Se, "Unknown source."), f = b.source.Ce || ec(a.w()) && !b.path.e(), c = rd(this, a, b.path, b.Ga, c, d, f, e));
        else if (b.type === Wc) b.source.ce ? c = sd(this, a, b.path, b.children, c, d, e) : (H(b.source.Se, "Unknown source."), f = b.source.Ce || ec(a.w()), c = td(this, a, b.path, b.children, c, d, f, e));
        else if (b.type === ud)
            if (b.Id)
                if (b = b.path, null != c.lc(b)) c = a;
                else {
                    f = new Yb(c, a, d);
                    d = a.N.j();
                    if (b.e() || ".priority" === J(b)) dc(a.w()) ?
                        b = c.Aa(ac(a)) : (b = a.w().j(), H(b instanceof P, "serverChildren would be complete if leaf node"), b = c.rc(b)), b = this.U.ya(d, b, e);
                    else {
                        var h = J(b),
                            k = c.qc(h, a.w());
                        null == k && Zb(a.w(), h) && (k = d.Q(h));
                        b = null != k ? this.U.F(d, h, k, D(b), f, e) : a.N.j().Da(h) ? this.U.F(d, h, G, D(b), f, e) : d;
                        b.e() && dc(a.w()) && (d = c.Aa(ac(a)), d.J() && (b = this.U.ya(b, d, e)))
                    }
                    d = dc(a.w()) || null != c.lc(C);
                    c = vd(a, b, d, this.U.Na())
                }
        else c = wd(this, a, b.path, b.Ob, c, d, e);
        else if (b.type === Db) d = b.path, b = a.w(), f = b.j(), h = b.da || d.e(), c = xd(this, new yd(a.N, new $b(f,
            h, b.Sb)), d, c, Xb, e);
        else throw sc("Unknown operation type: " + b.type);
        e = ta(e.fb);
        d = c;
        b = d.N;
        b.da && (f = b.j().J() || b.j().e(), h = zd(a), (0 < e.length || !a.N.da || f && !b.j().Z(h) || !b.j().C().Z(h.C())) && e.push(bc(zd(d))));
        return new od(c, e)
    };

    function xd(a, b, c, d, e, f) {
        var h = b.N;
        if (null != d.lc(c)) return b;
        var k;
        if (c.e()) H(dc(b.w()), "If change path is empty, we must have complete server data"), ec(b.w()) ? (e = ac(b), d = d.rc(e instanceof P ? e : G)) : d = d.Aa(ac(b)), f = a.U.ya(b.N.j(), d, f);
        else {
            var l = J(c);
            if (".priority" == l) H(1 == Ad(c), "Can't have a priority with additional path components"), f = h.j(), k = b.w().j(), d = d.ad(c, f, k), f = null != d ? a.U.fa(f, d) : h.j();
            else {
                var m = D(c);
                Zb(h, l) ? (k = b.w().j(), d = d.ad(c, h.j(), k), d = null != d ? h.j().Q(l).F(m, d) : h.j().Q(l)) : d = d.qc(l,
                    b.w());
                f = null != d ? a.U.F(h.j(), l, d, m, e, f) : h.j()
            }
        }
        return vd(b, f, h.da || c.e(), a.U.Na())
    }

    function rd(a, b, c, d, e, f, h, k) {
        var l = b.w();
        h = h ? a.U : a.U.Ub();
        if (c.e()) d = h.ya(l.j(), d, null);
        else if (h.Na() && !l.Sb) d = l.j().F(c, d), d = h.ya(l.j(), d, null);
        else {
            var m = J(c);
            if (!fc(l, c) && 1 < Ad(c)) return b;
            var u = D(c);
            d = l.j().Q(m).F(u, d);
            d = ".priority" == m ? h.fa(l.j(), d) : h.F(l.j(), m, d, u, Xb, null)
        }
        l = l.da || c.e();
        b = new yd(b.N, new $b(d, l, h.Na()));
        return xd(a, b, c, e, new Yb(e, b, f), k)
    }

    function qd(a, b, c, d, e, f, h) {
        var k = b.N;
        e = new Yb(e, b, f);
        if (c.e()) h = a.U.ya(b.N.j(), d, h), a = vd(b, h, !0, a.U.Na());
        else if (f = J(c), ".priority" === f) h = a.U.fa(b.N.j(), d), a = vd(b, h, k.da, k.Sb);
        else {
            c = D(c);
            var l = k.j().Q(f);
            if (!c.e()) {
                var m = e.Te(f);
                d = null != m ? ".priority" === Bd(c) && m.P(c.parent()).e() ? m : m.F(c, d) : G
            }
            l.Z(d) ? a = b : (h = a.U.F(k.j(), f, d, c, e, h), a = vd(b, h, k.da, a.U.Na()))
        }
        return a
    }

    function sd(a, b, c, d, e, f, h) {
        var k = b;
        Cd(d, function(d, m) {
            var u = c.n(d);
            Zb(b.N, J(u)) && (k = qd(a, k, u, m, e, f, h))
        });
        Cd(d, function(d, m) {
            var u = c.n(d);
            Zb(b.N, J(u)) || (k = qd(a, k, u, m, e, f, h))
        });
        return k
    }

    function Dd(a, b) {
        Cd(b, function(b, d) {
            a = a.F(b, d)
        });
        return a
    }

    function td(a, b, c, d, e, f, h, k) {
        if (b.w().j().e() && !dc(b.w())) return b;
        var l = b;
        c = c.e() ? d : Ed(Q, c, d);
        var m = b.w().j();
        c.children.ha(function(c, d) {
            if (m.Da(c)) {
                var F = b.w().j().Q(c),
                    F = Dd(F, d);
                l = rd(a, l, new L(c), F, e, f, h, k)
            }
        });
        c.children.ha(function(c, d) {
            var F = !Zb(b.w(), c) && null == d.value;
            m.Da(c) || F || (F = b.w().j().Q(c), F = Dd(F, d), l = rd(a, l, new L(c), F, e, f, h, k))
        });
        return l
    }

    function wd(a, b, c, d, e, f, h) {
        if (null != e.lc(c)) return b;
        var k = ec(b.w()),
            l = b.w();
        if (null != d.value) {
            if (c.e() && l.da || fc(l, c)) return rd(a, b, c, l.j().P(c), e, f, k, h);
            if (c.e()) {
                var m = Q;
                l.j().O(Fd, function(a, b) {
                    m = m.set(new L(a), b)
                });
                return td(a, b, c, m, e, f, k, h)
            }
            return b
        }
        m = Q;
        Cd(d, function(a) {
            var b = c.n(a);
            fc(l, b) && (m = m.set(a, l.j().P(b)))
        });
        return td(a, b, c, m, e, f, k, h)
    };

    function Gd(a) {
        this.g = a
    }
    g = Gd.prototype;
    g.F = function(a, b, c, d, e, f) {
        H(a.yc(this.g), "A node must be indexed if only a child is updated");
        e = a.Q(b);
        if (e.P(d).Z(c.P(d)) && e.e() == c.e()) return a;
        null != f && (c.e() ? a.Da(b) ? jd(f, new I("child_removed", e, b)) : H(a.J(), "A child remove without an old child only makes sense on a leaf node") : e.e() ? jd(f, new I("child_added", c, b)) : jd(f, new I("child_changed", c, b, e)));
        return a.J() && c.e() ? a : a.T(b, c).nb(this.g)
    };
    g.ya = function(a, b, c) {
        null != c && (a.J() || a.O(N, function(a, e) {
            b.Da(a) || jd(c, new I("child_removed", e, a))
        }), b.J() || b.O(N, function(b, e) {
            if (a.Da(b)) {
                var f = a.Q(b);
                f.Z(e) || jd(c, new I("child_changed", e, b, f))
            } else jd(c, new I("child_added", e, b))
        }));
        return b.nb(this.g)
    };
    g.fa = function(a, b) {
        return a.e() ? G : a.fa(b)
    };
    g.Na = function() {
        return !1
    };
    g.Ub = function() {
        return this
    };

    function Hd(a) {
        this.fe = new Gd(a.g);
        this.g = a.g;
        var b;
        a.ka ? (b = Id(a), b = a.g.Ec(Jd(a), b)) : b = a.g.Hc();
        this.Uc = b;
        a.na ? (b = Kd(a), a = a.g.Ec(Ld(a), b)) : a = a.g.Fc();
        this.vc = a
    }
    g = Hd.prototype;
    g.matches = function(a) {
        return 0 >= this.g.compare(this.Uc, a) && 0 >= this.g.compare(a, this.vc)
    };
    g.F = function(a, b, c, d, e, f) {
        this.matches(new K(b, c)) || (c = G);
        return this.fe.F(a, b, c, d, e, f)
    };
    g.ya = function(a, b, c) {
        b.J() && (b = G);
        var d = b.nb(this.g),
            d = d.fa(G),
            e = this;
        b.O(N, function(a, b) {
            e.matches(new K(a, b)) || (d = d.T(a, G))
        });
        return this.fe.ya(a, d, c)
    };
    g.fa = function(a) {
        return a
    };
    g.Na = function() {
        return !0
    };
    g.Ub = function() {
        return this.fe
    };

    function Md(a) {
        this.sa = new Hd(a);
        this.g = a.g;
        H(a.xa, "Only valid if limit has been set");
        this.oa = a.oa;
        this.Ib = !Nd(a)
    }
    g = Md.prototype;
    g.F = function(a, b, c, d, e, f) {
        this.sa.matches(new K(b, c)) || (c = G);
        return a.Q(b).Z(c) ? a : a.Eb() < this.oa ? this.sa.Ub().F(a, b, c, d, e, f) : Od(this, a, b, c, e, f)
    };
    g.ya = function(a, b, c) {
        var d;
        if (b.J() || b.e()) d = G.nb(this.g);
        else if (2 * this.oa < b.Eb() && b.yc(this.g)) {
            d = G.nb(this.g);
            b = this.Ib ? b.Zb(this.sa.vc, this.g) : b.Xb(this.sa.Uc, this.g);
            for (var e = 0; 0 < b.Pa.length && e < this.oa;) {
                var f = R(b),
                    h;
                if (h = this.Ib ? 0 >= this.g.compare(this.sa.Uc, f) : 0 >= this.g.compare(f, this.sa.vc)) d = d.T(f.name, f.R), e++;
                else break
            }
        } else {
            d = b.nb(this.g);
            d = d.fa(G);
            var k, l, m;
            if (this.Ib) {
                b = d.We(this.g);
                k = this.sa.vc;
                l = this.sa.Uc;
                var u = Pd(this.g);
                m = function(a, b) {
                    return u(b, a)
                }
            } else b = d.Wb(this.g), k = this.sa.Uc,
                l = this.sa.vc, m = Pd(this.g);
            for (var e = 0, z = !1; 0 < b.Pa.length;) f = R(b), !z && 0 >= m(k, f) && (z = !0), (h = z && e < this.oa && 0 >= m(f, l)) ? e++ : d = d.T(f.name, G)
        }
        return this.sa.Ub().ya(a, d, c)
    };
    g.fa = function(a) {
        return a
    };
    g.Na = function() {
        return !0
    };
    g.Ub = function() {
        return this.sa.Ub()
    };

    function Od(a, b, c, d, e, f) {
        var h;
        if (a.Ib) {
            var k = Pd(a.g);
            h = function(a, b) {
                return k(b, a)
            }
        } else h = Pd(a.g);
        H(b.Eb() == a.oa, "");
        var l = new K(c, d),
            m = a.Ib ? Qd(b, a.g) : Rd(b, a.g),
            u = a.sa.matches(l);
        if (b.Da(c)) {
            for (var z = b.Q(c), m = e.de(a.g, m, a.Ib); null != m && (m.name == c || b.Da(m.name));) m = e.de(a.g, m, a.Ib);
            e = null == m ? 1 : h(m, l);
            if (u && !d.e() && 0 <= e) return null != f && jd(f, new I("child_changed", d, c, z)), b.T(c, d);
            null != f && jd(f, new I("child_removed", z, c));
            b = b.T(c, G);
            return null != m && a.sa.matches(m) ? (null != f && jd(f, new I("child_added",
                m.R, m.name)), b.T(m.name, m.R)) : b
        }
        return d.e() ? b : u && 0 <= h(m, l) ? (null != f && (jd(f, new I("child_removed", m.R, m.name)), jd(f, new I("child_added", d, c))), b.T(c, d).T(m.name, G)) : b
    };

    function qc(a, b) {
        this.B = a;
        H(n(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value.");
        this.aa = b || G;
        Sd(this.aa);
        this.Db = null
    }
    var Td = ["object", "boolean", "number", "string"];
    g = qc.prototype;
    g.J = function() {
        return !0
    };
    g.C = function() {
        return this.aa
    };
    g.fa = function(a) {
        return new qc(this.B, a)
    };
    g.Q = function(a) {
        return ".priority" === a ? this.aa : G
    };
    g.P = function(a) {
        return a.e() ? this : ".priority" === J(a) ? this.aa : G
    };
    g.Da = function() {
        return !1
    };
    g.Ve = function() {
        return null
    };
    g.T = function(a, b) {
        return ".priority" === a ? this.fa(b) : b.e() && ".priority" !== a ? this : G.T(a, b).fa(this.aa)
    };
    g.F = function(a, b) {
        var c = J(a);
        if (null === c) return b;
        if (b.e() && ".priority" !== c) return this;
        H(".priority" !== c || 1 === Ad(a), ".priority must be the last token in a path");
        return this.T(c, G.F(D(a), b))
    };
    g.e = function() {
        return !1
    };
    g.Eb = function() {
        return 0
    };
    g.O = function() {
        return !1
    };
    g.H = function(a) {
        return a && !this.C().e() ? {
            ".value": this.Ca(),
            ".priority": this.C().H()
        } : this.Ca()
    };
    g.hash = function() {
        if (null === this.Db) {
            var a = "";
            this.aa.e() || (a += "priority:" + Ud(this.aa.H()) + ":");
            var b = typeof this.B,
                a = a + (b + ":"),
                a = "number" === b ? a + Jc(this.B) : a + this.B;
            this.Db = uc(a)
        }
        return this.Db
    };
    g.Ca = function() {
        return this.B
    };
    g.sc = function(a) {
        if (a === G) return 1;
        if (a instanceof P) return -1;
        H(a.J(), "Unknown node type");
        var b = typeof a.B,
            c = typeof this.B,
            d = Ia(Td, b),
            e = Ia(Td, c);
        H(0 <= d, "Unknown leaf type: " + b);
        H(0 <= e, "Unknown leaf type: " + c);
        return d === e ? "object" === c ? 0 : this.B < a.B ? -1 : this.B === a.B ? 0 : 1 : e - d
    };
    g.nb = function() {
        return this
    };
    g.yc = function() {
        return !0
    };
    g.Z = function(a) {
        return a === this ? !0 : a.J() ? this.B === a.B && this.aa.Z(a.aa) : !1
    };
    g.toString = function() {
        return B(this.H(!0))
    };

    function Vd() {}
    var Wd = {};

    function Pd(a) {
        return q(a.compare, a)
    }
    Vd.prototype.nd = function(a, b) {
        return 0 !== this.compare(new K("[MIN_NAME]", a), new K("[MIN_NAME]", b))
    };
    Vd.prototype.Hc = function() {
        return Xd
    };

    function Yd(a) {
        H(!a.e() && ".priority" !== J(a), "Can't create PathIndex with empty path or .priority key");
        this.bc = a
    }
    la(Yd, Vd);
    g = Yd.prototype;
    g.xc = function(a) {
        return !a.P(this.bc).e()
    };
    g.compare = function(a, b) {
        var c = a.R.P(this.bc),
            d = b.R.P(this.bc),
            c = c.sc(d);
        return 0 === c ? hc(a.name, b.name) : c
    };
    g.Ec = function(a, b) {
        var c = M(a),
            c = G.F(this.bc, c);
        return new K(b, c)
    };
    g.Fc = function() {
        var a = G.F(this.bc, Zd);
        return new K("[MAX_NAME]", a)
    };
    g.toString = function() {
        return this.bc.slice().join("/")
    };

    function $d() {}
    la($d, Vd);
    g = $d.prototype;
    g.compare = function(a, b) {
        var c = a.R.C(),
            d = b.R.C(),
            c = c.sc(d);
        return 0 === c ? hc(a.name, b.name) : c
    };
    g.xc = function(a) {
        return !a.C().e()
    };
    g.nd = function(a, b) {
        return !a.C().Z(b.C())
    };
    g.Hc = function() {
        return Xd
    };
    g.Fc = function() {
        return new K("[MAX_NAME]", new qc("[PRIORITY-POST]", Zd))
    };
    g.Ec = function(a, b) {
        var c = M(a);
        return new K(b, new qc("[PRIORITY-POST]", c))
    };
    g.toString = function() {
        return ".priority"
    };
    var N = new $d;

    function ae() {}
    la(ae, Vd);
    g = ae.prototype;
    g.compare = function(a, b) {
        return hc(a.name, b.name)
    };
    g.xc = function() {
        throw sc("KeyIndex.isDefinedOn not expected to be called.");
    };
    g.nd = function() {
        return !1
    };
    g.Hc = function() {
        return Xd
    };
    g.Fc = function() {
        return new K("[MAX_NAME]", G)
    };
    g.Ec = function(a) {
        H(p(a), "KeyIndex indexValue must always be a string.");
        return new K(a, G)
    };
    g.toString = function() {
        return ".key"
    };
    var Fd = new ae;

    function be() {}
    la(be, Vd);
    g = be.prototype;
    g.compare = function(a, b) {
        var c = a.R.sc(b.R);
        return 0 === c ? hc(a.name, b.name) : c
    };
    g.xc = function() {
        return !0
    };
    g.nd = function(a, b) {
        return !a.Z(b)
    };
    g.Hc = function() {
        return Xd
    };
    g.Fc = function() {
        return ce
    };
    g.Ec = function(a, b) {
        var c = M(a);
        return new K(b, c)
    };
    g.toString = function() {
        return ".value"
    };
    var de = new be;

    function ee() {
        this.Rb = this.na = this.Kb = this.ka = this.xa = !1;
        this.oa = 0;
        this.mb = "";
        this.dc = null;
        this.zb = "";
        this.ac = null;
        this.xb = "";
        this.g = N
    }
    var fe = new ee;

    function Nd(a) {
        return "" === a.mb ? a.ka : "l" === a.mb
    }

    function Jd(a) {
        H(a.ka, "Only valid if start has been set");
        return a.dc
    }

    function Id(a) {
        H(a.ka, "Only valid if start has been set");
        return a.Kb ? a.zb : "[MIN_NAME]"
    }

    function Ld(a) {
        H(a.na, "Only valid if end has been set");
        return a.ac
    }

    function Kd(a) {
        H(a.na, "Only valid if end has been set");
        return a.Rb ? a.xb : "[MAX_NAME]"
    }

    function ge(a) {
        var b = new ee;
        b.xa = a.xa;
        b.oa = a.oa;
        b.ka = a.ka;
        b.dc = a.dc;
        b.Kb = a.Kb;
        b.zb = a.zb;
        b.na = a.na;
        b.ac = a.ac;
        b.Rb = a.Rb;
        b.xb = a.xb;
        b.g = a.g;
        b.mb = a.mb;
        return b
    }
    g = ee.prototype;
    g.le = function(a) {
        var b = ge(this);
        b.xa = !0;
        b.oa = a;
        b.mb = "l";
        return b
    };
    g.me = function(a) {
        var b = ge(this);
        b.xa = !0;
        b.oa = a;
        b.mb = "r";
        return b
    };
    g.Nd = function(a, b) {
        var c = ge(this);
        c.ka = !0;
        n(a) || (a = null);
        c.dc = a;
        null != b ? (c.Kb = !0, c.zb = b) : (c.Kb = !1, c.zb = "");
        return c
    };
    g.gd = function(a, b) {
        var c = ge(this);
        c.na = !0;
        n(a) || (a = null);
        c.ac = a;
        n(b) ? (c.Rb = !0, c.xb = b) : (c.vg = !1, c.xb = "");
        return c
    };

    function he(a, b) {
        var c = ge(a);
        c.g = b;
        return c
    }

    function ie(a) {
        var b = {};
        a.ka && (b.sp = a.dc, a.Kb && (b.sn = a.zb));
        a.na && (b.ep = a.ac, a.Rb && (b.en = a.xb));
        if (a.xa) {
            b.l = a.oa;
            var c = a.mb;
            "" === c && (c = Nd(a) ? "l" : "r");
            b.vf = c
        }
        a.g !== N && (b.i = a.g.toString());
        return b
    }

    function S(a) {
        return !(a.ka || a.na || a.xa)
    }

    function Sc(a) {
        return S(a) && a.g == N
    }

    function Tc(a) {
        var b = {};
        if (Sc(a)) return b;
        var c;
        a.g === N ? c = "$priority" : a.g === de ? c = "$value" : a.g === Fd ? c = "$key" : (H(a.g instanceof Yd, "Unrecognized index type!"), c = a.g.toString());
        b.orderBy = B(c);
        a.ka && (b.startAt = B(a.dc), a.Kb && (b.startAt += "," + B(a.zb)));
        a.na && (b.endAt = B(a.ac), a.Rb && (b.endAt += "," + B(a.xb)));
        a.xa && (Nd(a) ? b.limitToFirst = a.oa : b.limitToLast = a.oa);
        return b
    }
    g.toString = function() {
        return B(ie(this))
    };

    function je(a, b) {
        this.od = a;
        this.cc = b
    }
    je.prototype.get = function(a) {
        var b = w(this.od, a);
        if (!b) throw Error("No index defined for " + a);
        return b === Wd ? null : b
    };

    function ke(a, b, c) {
        var d = pa(a.od, function(d, f) {
            var h = w(a.cc, f);
            H(h, "Missing index implementation for " + f);
            if (d === Wd) {
                if (h.xc(b.R)) {
                    for (var k = [], l = c.Wb(jc), m = R(l); m;) m.name != b.name && k.push(m), m = R(l);
                    k.push(b);
                    return le(k, Pd(h))
                }
                return Wd
            }
            h = c.get(b.name);
            k = d;
            h && (k = k.remove(new K(b.name, h)));
            return k.Oa(b, b.R)
        });
        return new je(d, a.cc)
    }

    function me(a, b, c) {
        var d = pa(a.od, function(a) {
            if (a === Wd) return a;
            var d = c.get(b.name);
            return d ? a.remove(new K(b.name, d)) : a
        });
        return new je(d, a.cc)
    }
    var ne = new je({
        ".priority": Wd
    }, {
        ".priority": N
    });

    function oe() {
        this.set = {}
    }
    g = oe.prototype;
    g.add = function(a, b) {
        this.set[a] = null !== b ? b : !0
    };
    g.contains = function(a) {
        return cb(this.set, a)
    };
    g.get = function(a) {
        return this.contains(a) ? this.set[a] : void 0
    };
    g.remove = function(a) {
        delete this.set[a]
    };
    g.clear = function() {
        this.set = {}
    };
    g.e = function() {
        return ya(this.set)
    };
    g.count = function() {
        return ra(this.set)
    };

    function pe(a, b) {
        r(a.set, function(a, d) {
            b(d, a)
        })
    }
    g.keys = function() {
        var a = [];
        r(this.set, function(b, c) {
            a.push(c)
        });
        return a
    };

    function qe(a, b, c, d) {
        this.Yd = a;
        this.f = yc(a);
        this.jc = b;
        this.pb = this.qb = 0;
        this.Va = $c(b);
        this.tf = c;
        this.wc = !1;
        this.Cb = d;
        this.Yc = function(a) {
            return Jb(b, "long_polling", a)
        }
    }
    var re, se;
    qe.prototype.open = function(a, b) {
        this.Me = 0;
        this.ia = b;
        this.bf = new rb(a);
        this.Ab = !1;
        var c = this;
        this.sb = setTimeout(function() {
            c.f("Timed out trying to connect.");
            c.bb();
            c.sb = null
        }, Math.floor(3E4));
        Dc(function() {
            if (!c.Ab) {
                c.Ta = new te(function(a, b, d, k, l) {
                    ue(c, arguments);
                    if (c.Ta)
                        if (c.sb && (clearTimeout(c.sb), c.sb = null), c.wc = !0, "start" == a) c.id = b, c.ff = d;
                        else if ("close" === a) b ? (c.Ta.Kd = !1, sb(c.bf, b, function() {
                        c.bb()
                    })) : c.bb();
                    else throw Error("Unrecognized command received: " + a);
                }, function(a, b) {
                    ue(c, arguments);
                    tb(c.bf, a, b)
                }, function() {
                    c.bb()
                }, c.Yc);
                var a = {
                    start: "t"
                };
                a.ser = Math.floor(1E8 * Math.random());
                c.Ta.Qd && (a.cb = c.Ta.Qd);
                a.v = "5";
                c.tf && (a.s = c.tf);
                c.Cb && (a.ls = c.Cb);
                "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
                a = c.Yc(a);
                c.f("Connecting via long-poll to " + a);
                ve(c.Ta, a, function() {})
            }
        })
    };
    qe.prototype.start = function() {
        var a = this.Ta,
            b = this.ff;
        a.Vf = this.id;
        a.Wf = b;
        for (a.Ud = !0; we(a););
        a = this.id;
        b = this.ff;
        this.fc = document.createElement("iframe");
        var c = {
            dframe: "t"
        };
        c.id = a;
        c.pw = b;
        this.fc.src = this.Yc(c);
        this.fc.style.display = "none";
        document.body.appendChild(this.fc)
    };
    qe.isAvailable = function() {
        return re || !se && "undefined" !== typeof document && null != document.createElement && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.rg) && !0
    };
    g = qe.prototype;
    g.sd = function() {};
    g.Tc = function() {
        this.Ab = !0;
        this.Ta && (this.Ta.close(), this.Ta = null);
        this.fc && (document.body.removeChild(this.fc), this.fc = null);
        this.sb && (clearTimeout(this.sb), this.sb = null)
    };
    g.bb = function() {
        this.Ab || (this.f("Longpoll is closing itself"), this.Tc(), this.ia && (this.ia(this.wc), this.ia = null))
    };
    g.close = function() {
        this.Ab || (this.f("Longpoll is being closed."), this.Tc())
    };
    g.send = function(a) {
        a = B(a);
        this.qb += a.length;
        Lb(this.Va, "bytes_sent", a.length);
        a = mb(a);
        a = ab(a, !0);
        a = Hc(a, 1840);
        for (var b = 0; b < a.length; b++) {
            var c = this.Ta;
            c.Qc.push({
                jg: this.Me,
                pg: a.length,
                Oe: a[b]
            });
            c.Ud && we(c);
            this.Me++
        }
    };

    function ue(a, b) {
        var c = B(b).length;
        a.pb += c;
        Lb(a.Va, "bytes_received", c)
    }

    function te(a, b, c, d) {
        this.Yc = d;
        this.ib = c;
        this.te = new oe;
        this.Qc = [];
        this.Zd = Math.floor(1E8 * Math.random());
        this.Kd = !0;
        this.Qd = rc();
        window["pLPCommand" + this.Qd] = a;
        window["pRTLPCB" + this.Qd] = b;
        a = document.createElement("iframe");
        a.style.display = "none";
        if (document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || E("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        a.contentDocument ? a.gb = a.contentDocument : a.contentWindow ? a.gb = a.contentWindow.document : a.document && (a.gb = a.document);
        this.Ea = a;
        a = "";
        this.Ea.src && "javascript:" === this.Ea.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";\x3c/script>');
        a = "<html><body>" + a + "</body></html>";
        try {
            this.Ea.gb.open(), this.Ea.gb.write(a), this.Ea.gb.close()
        } catch (f) {
            E("frame writing exception"), f.stack && E(f.stack), E(f)
        }
    }
    te.prototype.close = function() {
        this.Ud = !1;
        if (this.Ea) {
            this.Ea.gb.body.innerHTML = "";
            var a = this;
            setTimeout(function() {
                null !== a.Ea && (document.body.removeChild(a.Ea), a.Ea = null)
            }, Math.floor(0))
        }
        var b = this.ib;
        b && (this.ib = null, b())
    };

    function we(a) {
        if (a.Ud && a.Kd && a.te.count() < (0 < a.Qc.length ? 2 : 1)) {
            a.Zd++;
            var b = {};
            b.id = a.Vf;
            b.pw = a.Wf;
            b.ser = a.Zd;
            for (var b = a.Yc(b), c = "", d = 0; 0 < a.Qc.length;)
                if (1870 >= a.Qc[0].Oe.length + 30 + c.length) {
                    var e = a.Qc.shift(),
                        c = c + "&seg" + d + "=" + e.jg + "&ts" + d + "=" + e.pg + "&d" + d + "=" + e.Oe;
                    d++
                } else break;
            xe(a, b + c, a.Zd);
            return !0
        }
        return !1
    }

    function xe(a, b, c) {
        function d() {
            a.te.remove(c);
            we(a)
        }
        a.te.add(c, 1);
        var e = setTimeout(d, Math.floor(25E3));
        ve(a, b, function() {
            clearTimeout(e);
            d()
        })
    }

    function ve(a, b, c) {
        setTimeout(function() {
            try {
                if (a.Kd) {
                    var d = a.Ea.gb.createElement("script");
                    d.type = "text/javascript";
                    d.async = !0;
                    d.src = b;
                    d.onload = d.onreadystatechange = function() {
                        var a = d.readyState;
                        a && "loaded" !== a && "complete" !== a || (d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), c())
                    };
                    d.onerror = function() {
                        E("Long-poll script failed to load: " + b);
                        a.Kd = !1;
                        a.close()
                    };
                    a.Ea.gb.body.appendChild(d)
                }
            } catch (e) {}
        }, Math.floor(1))
    };

    function ye(a) {
        ze(this, a)
    }
    var Ae = [qe, cd];

    function ze(a, b) {
        var c = cd && cd.isAvailable(),
            d = c && !(yb.Ze || !0 === yb.get("previous_websocket_failure"));
        b.qg && (c || O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
        if (d) a.Wc = [cd];
        else {
            var e = a.Wc = [];
            Ic(Ae, function(a, b) {
                b && b.isAvailable() && e.push(b)
            })
        }
    }

    function Be(a) {
        if (0 < a.Wc.length) return a.Wc[0];
        throw Error("No transports available");
    };

    function Ce(a, b, c, d, e, f, h) {
        this.id = a;
        this.f = yc("c:" + this.id + ":");
        this.re = c;
        this.Lc = d;
        this.ia = e;
        this.qe = f;
        this.L = b;
        this.Ad = [];
        this.Ke = 0;
        this.sf = new ye(b);
        this.Ua = 0;
        this.Cb = h;
        this.f("Connection created");
        De(this)
    }

    function De(a) {
        var b = Be(a.sf);
        a.I = new b("c:" + a.id + ":" + a.Ke++, a.L, void 0, a.Cb);
        a.ve = b.responsesRequiredToBeHealthy || 0;
        var c = Ee(a, a.I),
            d = Fe(a, a.I);
        a.Xc = a.I;
        a.Rc = a.I;
        a.D = null;
        a.Bb = !1;
        setTimeout(function() {
            a.I && a.I.open(c, d)
        }, Math.floor(0));
        b = b.healthyTimeout || 0;
        0 < b && (a.md = Mc(function() {
            a.md = null;
            a.Bb || (a.I && 102400 < a.I.pb ? (a.f("Connection exceeded healthy timeout but has received " + a.I.pb + " bytes.  Marking connection healthy."), a.Bb = !0, a.I.sd()) : a.I && 10240 < a.I.qb ? a.f("Connection exceeded healthy timeout but has sent " +
                a.I.qb + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()))
        }, Math.floor(b)))
    }

    function Fe(a, b) {
        return function(c) {
            b === a.I ? (a.I = null, c || 0 !== a.Ua ? 1 === a.Ua && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.L.$a.substr(0, 2) && (yb.remove("host:" + a.L.host), a.L.$a = a.L.host)), a.close()) : b === a.D ? (a.f("Secondary connection lost."), c = a.D, a.D = null, a.Xc !== c && a.Rc !== c || a.close()) : a.f("closing an old connection")
        }
    }

    function Ee(a, b) {
        return function(c) {
            if (2 != a.Ua)
                if (b === a.Rc) {
                    var d = Fc("t", c);
                    c = Fc("d", c);
                    if ("c" == d) {
                        if (d = Fc("t", c), "d" in c)
                            if (c = c.d, "h" === d) {
                                var d = c.ts,
                                    e = c.v,
                                    f = c.h;
                                a.qf = c.s;
                                Ib(a.L, f);
                                0 == a.Ua && (a.I.start(), Ge(a, a.I, d), "5" !== e && O("Protocol version mismatch detected"), c = a.sf, (c = 1 < c.Wc.length ? c.Wc[1] : null) && He(a, c))
                            } else if ("n" === d) {
                            a.f("recvd end transmission on primary");
                            a.Rc = a.D;
                            for (c = 0; c < a.Ad.length; ++c) a.wd(a.Ad[c]);
                            a.Ad = [];
                            Ie(a)
                        } else "s" === d ? (a.f("Connection shutdown command received. Shutting down..."),
                            a.qe && (a.qe(c), a.qe = null), a.ia = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), Ib(a.L, c), 1 === a.Ua ? a.close() : (Je(a), De(a))) : "e" === d ? zc("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), Ke(a), Le(a)) : zc("Unknown control packet command: " + d)
                    } else "d" == d && a.wd(c)
                } else if (b === a.D)
                if (d = Fc("t", c), c = Fc("d", c), "c" == d) "t" in c && (c = c.t, "a" === c ? Me(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.D.close(), a.Xc !== a.D && a.Rc !== a.D || a.close()) : "o" === c && (a.f("got pong on secondary."),
                    a.pf--, Me(a)));
                else if ("d" == d) a.Ad.push(c);
            else throw Error("Unknown protocol layer: " + d);
            else a.f("message on old connection")
        }
    }
    Ce.prototype.ua = function(a) {
        Ne(this, {
            t: "d",
            d: a
        })
    };

    function Ie(a) {
        a.Xc === a.D && a.Rc === a.D && (a.f("cleaning up and promoting a connection: " + a.D.Yd), a.I = a.D, a.D = null)
    }

    function Me(a) {
        0 >= a.pf ? (a.f("Secondary connection is healthy."), a.Bb = !0, a.D.sd(), a.D.start(), a.f("sending client ack on secondary"), a.D.send({
            t: "c",
            d: {
                t: "a",
                d: {}
            }
        }), a.f("Ending transmission on primary"), a.I.send({
            t: "c",
            d: {
                t: "n",
                d: {}
            }
        }), a.Xc = a.D, Ie(a)) : (a.f("sending ping on secondary."), a.D.send({
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }
    Ce.prototype.wd = function(a) {
        Ke(this);
        this.re(a)
    };

    function Ke(a) {
        a.Bb || (a.ve--, 0 >= a.ve && (a.f("Primary connection is healthy."), a.Bb = !0, a.I.sd()))
    }

    function He(a, b) {
        a.D = new b("c:" + a.id + ":" + a.Ke++, a.L, a.qf);
        a.pf = b.responsesRequiredToBeHealthy || 0;
        a.D.open(Ee(a, a.D), Fe(a, a.D));
        Mc(function() {
            a.D && (a.f("Timed out trying to upgrade."), a.D.close())
        }, Math.floor(6E4))
    }

    function Ge(a, b, c) {
        a.f("Realtime connection established.");
        a.I = b;
        a.Ua = 1;
        a.Lc && (a.Lc(c, a.qf), a.Lc = null);
        0 === a.ve ? (a.f("Primary connection is healthy."), a.Bb = !0) : Mc(function() {
            Le(a)
        }, Math.floor(5E3))
    }

    function Le(a) {
        a.Bb || 1 !== a.Ua || (a.f("sending ping on primary."), Ne(a, {
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }

    function Ne(a, b) {
        if (1 !== a.Ua) throw "Connection is not connected";
        a.Xc.send(b)
    }
    Ce.prototype.close = function() {
        2 !== this.Ua && (this.f("Closing realtime connection."), this.Ua = 2, Je(this), this.ia && (this.ia(), this.ia = null))
    };

    function Je(a) {
        a.f("Shutting down all connections");
        a.I && (a.I.close(), a.I = null);
        a.D && (a.D.close(), a.D = null);
        a.md && (clearTimeout(a.md), a.md = null)
    };

    function L(a, b) {
        if (1 == arguments.length) {
            this.o = a.split("/");
            for (var c = 0, d = 0; d < this.o.length; d++) 0 < this.o[d].length && (this.o[c] = this.o[d], c++);
            this.o.length = c;
            this.Y = 0
        } else this.o = a, this.Y = b
    }

    function T(a, b) {
        var c = J(a);
        if (null === c) return b;
        if (c === J(b)) return T(D(a), D(b));
        throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
    }

    function Oe(a, b) {
        for (var c = a.slice(), d = b.slice(), e = 0; e < c.length && e < d.length; e++) {
            var f = hc(c[e], d[e]);
            if (0 !== f) return f
        }
        return c.length === d.length ? 0 : c.length < d.length ? -1 : 1
    }

    function J(a) {
        return a.Y >= a.o.length ? null : a.o[a.Y]
    }

    function Ad(a) {
        return a.o.length - a.Y
    }

    function D(a) {
        var b = a.Y;
        b < a.o.length && b++;
        return new L(a.o, b)
    }

    function Bd(a) {
        return a.Y < a.o.length ? a.o[a.o.length - 1] : null
    }
    g = L.prototype;
    g.toString = function() {
        for (var a = "", b = this.Y; b < this.o.length; b++) "" !== this.o[b] && (a += "/" + this.o[b]);
        return a || "/"
    };
    g.slice = function(a) {
        return this.o.slice(this.Y + (a || 0))
    };
    g.parent = function() {
        if (this.Y >= this.o.length) return null;
        for (var a = [], b = this.Y; b < this.o.length - 1; b++) a.push(this.o[b]);
        return new L(a, 0)
    };
    g.n = function(a) {
        for (var b = [], c = this.Y; c < this.o.length; c++) b.push(this.o[c]);
        if (a instanceof L)
            for (c = a.Y; c < a.o.length; c++) b.push(a.o[c]);
        else
            for (a = a.split("/"), c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c]);
        return new L(b, 0)
    };
    g.e = function() {
        return this.Y >= this.o.length
    };
    g.Z = function(a) {
        if (Ad(this) !== Ad(a)) return !1;
        for (var b = this.Y, c = a.Y; b <= this.o.length; b++, c++)
            if (this.o[b] !== a.o[c]) return !1;
        return !0
    };
    g.contains = function(a) {
        var b = this.Y,
            c = a.Y;
        if (Ad(this) > Ad(a)) return !1;
        for (; b < this.o.length;) {
            if (this.o[b] !== a.o[c]) return !1;
            ++b;
            ++c
        }
        return !0
    };
    var C = new L("");

    function Pe(a, b) {
        this.Qa = a.slice();
        this.Ha = Math.max(1, this.Qa.length);
        this.Pe = b;
        for (var c = 0; c < this.Qa.length; c++) this.Ha += nb(this.Qa[c]);
        Qe(this)
    }
    Pe.prototype.push = function(a) {
        0 < this.Qa.length && (this.Ha += 1);
        this.Qa.push(a);
        this.Ha += nb(a);
        Qe(this)
    };
    Pe.prototype.pop = function() {
        var a = this.Qa.pop();
        this.Ha -= nb(a);
        0 < this.Qa.length && --this.Ha
    };

    function Qe(a) {
        if (768 < a.Ha) throw Error(a.Pe + "has a key path longer than 768 bytes (" + a.Ha + ").");
        if (32 < a.Qa.length) throw Error(a.Pe + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + Re(a));
    }

    function Re(a) {
        return 0 == a.Qa.length ? "" : "in property '" + a.Qa.join(".") + "'"
    };

    function Se(a) {
        a instanceof Te || Ac("Don't call new Database() directly - please use firebase.database().");
        this.ta = a;
        this.ba = new U(a, C);
        this.INTERNAL = new Ue(this)
    }
    var Ve = {
        TIMESTAMP: {
            ".sv": "timestamp"
        }
    };
    g = Se.prototype;
    g.app = null;
    g.jf = function(a) {
        We(this, "ref");
        x("database.ref", 0, 1, arguments.length);
        return n(a) ? this.ba.n(a) : this.ba
    };
    g.gg = function(a) {
        We(this, "database.refFromURL");
        x("database.refFromURL", 1, 1, arguments.length);
        var b = Bc(a);
        Xe("database.refFromURL", b);
        var c = b.jc;
        c.host !== this.ta.L.host && Ac("database.refFromURL: Host name does not match the current database: (found " + c.host + " but expected " + this.ta.L.host + ")");
        return this.jf(b.path.toString())
    };

    function We(a, b) {
        null === a.ta && Ac("Cannot call " + b + " on a deleted database.")
    }
    g.Pf = function() {
        x("database.goOffline", 0, 0, arguments.length);
        We(this, "goOffline");
        this.ta.ab()
    };
    g.Qf = function() {
        x("database.goOnline", 0, 0, arguments.length);
        We(this, "goOnline");
        this.ta.kc()
    };
    Object.defineProperty(Se.prototype, "app", {
        get: function() {
            return this.ta.app
        }
    });

    function Ue(a) {
        this.Ya = a
    }
    Ue.prototype.delete = function() {
        We(this.Ya, "delete");
        var a = Ye.Vb(),
            b = this.Ya.ta;
        w(a.lb, b.app.name) !== b && Ac("Database " + b.app.name + " has already been deleted.");
        b.ab();
        delete a.lb[b.app.name];
        this.Ya.ta = null;
        this.Ya.ba = null;
        this.Ya = this.Ya.INTERNAL = null;
        return firebase.Promise.resolve()
    };
    Se.prototype.ref = Se.prototype.jf;
    Se.prototype.refFromURL = Se.prototype.gg;
    Se.prototype.goOnline = Se.prototype.Qf;
    Se.prototype.goOffline = Se.prototype.Pf;
    Ue.prototype["delete"] = Ue.prototype.delete;

    function mc() {
        this.k = this.B = null
    }
    mc.prototype.find = function(a) {
        if (null != this.B) return this.B.P(a);
        if (a.e() || null == this.k) return null;
        var b = J(a);
        a = D(a);
        return this.k.contains(b) ? this.k.get(b).find(a) : null
    };

    function oc(a, b, c) {
        if (b.e()) a.B = c, a.k = null;
        else if (null !== a.B) a.B = a.B.F(b, c);
        else {
            null == a.k && (a.k = new oe);
            var d = J(b);
            a.k.contains(d) || a.k.add(d, new mc);
            a = a.k.get(d);
            b = D(b);
            oc(a, b, c)
        }
    }

    function Ze(a, b) {
        if (b.e()) return a.B = null, a.k = null, !0;
        if (null !== a.B) {
            if (a.B.J()) return !1;
            var c = a.B;
            a.B = null;
            c.O(N, function(b, c) {
                oc(a, new L(b), c)
            });
            return Ze(a, b)
        }
        return null !== a.k ? (c = J(b), b = D(b), a.k.contains(c) && Ze(a.k.get(c), b) && a.k.remove(c), a.k.e() ? (a.k = null, !0) : !1) : !0
    }

    function nc(a, b, c) {
        null !== a.B ? c(b, a.B) : a.O(function(a, e) {
            var f = new L(b.toString() + "/" + a);
            nc(e, f, c)
        })
    }
    mc.prototype.O = function(a) {
        null !== this.k && pe(this.k, function(b, c) {
            a(b, c)
        })
    };
    var $e = /[\[\].#$\/\u0000-\u001F\u007F]/,
        af = /[\[\].#$\u0000-\u001F\u007F]/;

    function bf(a) {
        return p(a) && 0 !== a.length && !$e.test(a)
    }

    function cf(a) {
        return null === a || p(a) || ga(a) && !Cc(a) || ia(a) && cb(a, ".sv")
    }

    function df(a, b, c, d) {
        d && !n(b) || ef(y(a, 1, d), b, c)
    }

    function ef(a, b, c) {
        c instanceof L && (c = new Pe(c, a));
        if (!n(b)) throw Error(a + "contains undefined " + Re(c));
        if (ha(b)) throw Error(a + "contains a function " + Re(c) + " with contents: " + b.toString());
        if (Cc(b)) throw Error(a + "contains " + b.toString() + " " + Re(c));
        if (p(b) && b.length > 10485760 / 3 && 10485760 < nb(b)) throw Error(a + "contains a string greater than 10485760 utf8 bytes " + Re(c) + " ('" + b.substring(0, 50) + "...')");
        if (ia(b)) {
            var d = !1,
                e = !1;
            db(b, function(b, h) {
                if (".value" === b) d = !0;
                else if (".priority" !== b && ".sv" !== b && (e = !0, !bf(b))) throw Error(a + " contains an invalid key (" + b + ") " + Re(c) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                c.push(b);
                ef(a, h, c);
                c.pop()
            });
            if (d && e) throw Error(a + ' contains ".value" child ' + Re(c) + " in addition to actual children.");
        }
    }

    function ff(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            for (var e = d.slice(), f = 0; f < e.length; f++)
                if ((".priority" !== e[f] || f !== e.length - 1) && !bf(e[f])) throw Error(a + "contains an invalid key (" + e[f] + ") in path " + d.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
        b.sort(Oe);
        e = null;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            if (null !== e && e.contains(d)) throw Error(a + "contains a path " + e.toString() + " that is ancestor of another path " + d.toString());
            e = d
        }
    }

    function gf(a, b, c) {
        var d = y(a, 1, !1);
        if (!ia(b) || ea(b)) throw Error(d + " must be an object containing the children to replace.");
        var e = [];
        db(b, function(a, b) {
            var k = new L(a);
            ef(d, b, c.n(k));
            if (".priority" === Bd(k) && !cf(b)) throw Error(d + "contains an invalid value for '" + k.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
            e.push(k)
        });
        ff(d, e)
    }

    function hf(a, b, c) {
        if (Cc(c)) throw Error(y(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
        if (!cf(c)) throw Error(y(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
    }

    function jf(a, b, c) {
        if (!c || n(b)) switch (b) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
                break;
            default:
                throw Error(y(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }
    }

    function kf(a, b) {
        if (n(b) && !bf(b)) throw Error(y(a, 2, !0) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    }

    function lf(a, b) {
        if (!p(b) || 0 === b.length || af.test(b)) throw Error(y(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    }

    function mf(a, b) {
        if (".info" === J(b)) throw Error(a + " failed: Can't modify data under /.info/");
    }

    function Xe(a, b) {
        var c = b.path.toString(),
            d;
        !(d = !p(b.jc.host) || 0 === b.jc.host.length || !bf(b.jc.ne)) && (d = 0 !== c.length) && (c && (c = c.replace(/^\/*\.info(\/|$)/, "/")), d = !(p(c) && 0 !== c.length && !af.test(c)));
        if (d) throw Error(y(a, 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
    };

    function V(a, b) {
        this.ta = a;
        this.qa = b
    }
    V.prototype.cancel = function(a) {
        x("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
        A("Firebase.onDisconnect().cancel", 1, a, !0);
        var b = new hb;
        this.ta.xd(this.qa, ib(b, a));
        return b.ra
    };
    V.prototype.cancel = V.prototype.cancel;
    V.prototype.remove = function(a) {
        x("Firebase.onDisconnect().remove", 0, 1, arguments.length);
        mf("Firebase.onDisconnect().remove", this.qa);
        A("Firebase.onDisconnect().remove", 1, a, !0);
        var b = new hb;
        nf(this.ta, this.qa, null, ib(b, a));
        return b.ra
    };
    V.prototype.remove = V.prototype.remove;
    V.prototype.set = function(a, b) {
        x("Firebase.onDisconnect().set", 1, 2, arguments.length);
        mf("Firebase.onDisconnect().set", this.qa);
        df("Firebase.onDisconnect().set", a, this.qa, !1);
        A("Firebase.onDisconnect().set", 2, b, !0);
        var c = new hb;
        nf(this.ta, this.qa, a, ib(c, b));
        return c.ra
    };
    V.prototype.set = V.prototype.set;
    V.prototype.Jb = function(a, b, c) {
        x("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
        mf("Firebase.onDisconnect().setWithPriority", this.qa);
        df("Firebase.onDisconnect().setWithPriority", a, this.qa, !1);
        hf("Firebase.onDisconnect().setWithPriority", 2, b);
        A("Firebase.onDisconnect().setWithPriority", 3, c, !0);
        var d = new hb;
        of(this.ta, this.qa, a, b, ib(d, c));
        return d.ra
    };
    V.prototype.setWithPriority = V.prototype.Jb;
    V.prototype.update = function(a, b) {
        x("Firebase.onDisconnect().update", 1, 2, arguments.length);
        mf("Firebase.onDisconnect().update", this.qa);
        if (ea(a)) {
            for (var c = {}, d = 0; d < a.length; ++d) c["" + d] = a[d];
            a = c;
            O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        gf("Firebase.onDisconnect().update", a, this.qa);
        A("Firebase.onDisconnect().update", 2, b, !0);
        c = new hb;
        pf(this.ta, this.qa, a, ib(c, b));
        return c.ra
    };
    V.prototype.update = V.prototype.update;

    function qf(a) {
        H(ea(a) && 0 < a.length, "Requires a non-empty array");
        this.Bf = a;
        this.Dc = {}
    }
    qf.prototype.Ee = function(a, b) {
        var c;
        c = this.Dc[a] || [];
        var d = c.length;
        if (0 < d) {
            for (var e = Array(d), f = 0; f < d; f++) e[f] = c[f];
            c = e
        } else c = [];
        for (d = 0; d < c.length; d++) c[d].He.apply(c[d].Ma, Array.prototype.slice.call(arguments, 1))
    };
    qf.prototype.gc = function(a, b, c) {
        rf(this, a);
        this.Dc[a] = this.Dc[a] || [];
        this.Dc[a].push({
            He: b,
            Ma: c
        });
        (a = this.Ue(a)) && b.apply(c, a)
    };
    qf.prototype.Ic = function(a, b, c) {
        rf(this, a);
        a = this.Dc[a] || [];
        for (var d = 0; d < a.length; d++)
            if (a[d].He === b && (!c || c === a[d].Ma)) {
                a.splice(d, 1);
                break
            }
    };

    function rf(a, b) {
        H(Oa(a.Bf, function(a) {
            return a === b
        }), "Unknown event: " + b)
    };

    function sf() {
        qf.call(this, ["online"]);
        this.hc = !0;
        if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener && !qb()) {
            var a = this;
            window.addEventListener("online", function() {
                a.hc || (a.hc = !0, a.Ee("online", !0))
            }, !1);
            window.addEventListener("offline", function() {
                a.hc && (a.hc = !1, a.Ee("online", !1))
            }, !1)
        }
    }
    la(sf, qf);
    sf.prototype.Ue = function(a) {
        H("online" === a, "Unknown event type: " + a);
        return [this.hc]
    };
    ca(sf);

    function tf() {
        qf.call(this, ["visible"]);
        var a, b;
        "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
        this.Mb = !0;
        if (b) {
            var c = this;
            document.addEventListener(b,
                function() {
                    var b = !document[a];
                    b !== c.Mb && (c.Mb = b, c.Ee("visible", b))
                }, !1)
        }
    }
    la(tf, qf);
    tf.prototype.Ue = function(a) {
        H("visible" === a, "Unknown event type: " + a);
        return [this.Mb]
    };
    ca(tf);
    var uf = function() {
        var a = 0,
            b = [];
        return function(c) {
            var d = c === a;
            a = c;
            for (var e = Array(8), f = 7; 0 <= f; f--) e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
            H(0 === c, "Cannot push at time == 0");
            c = e.join("");
            if (d) {
                for (f = 11; 0 <= f && 63 === b[f]; f--) b[f] = 0;
                b[f]++
            } else
                for (f = 0; 12 > f; f++) b[f] = Math.floor(64 * Math.random());
            for (f = 0; 12 > f; f++) c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
            H(20 === c.length, "nextPushId: Length should be 20.");
            return c
        }
    }();

    function vf(a, b) {
        this.La = a;
        this.ba = b ? b : wf
    }
    g = vf.prototype;
    g.Oa = function(a, b) {
        return new vf(this.La, this.ba.Oa(a, b, this.La).X(null, null, !1, null, null))
    };
    g.remove = function(a) {
        return new vf(this.La, this.ba.remove(a, this.La).X(null, null, !1, null, null))
    };
    g.get = function(a) {
        for (var b, c = this.ba; !c.e();) {
            b = this.La(a, c.key);
            if (0 === b) return c.value;
            0 > b ? c = c.left : 0 < b && (c = c.right)
        }
        return null
    };

    function xf(a, b) {
        for (var c, d = a.ba, e = null; !d.e();) {
            c = a.La(b, d.key);
            if (0 === c) {
                if (d.left.e()) return e ? e.key : null;
                for (d = d.left; !d.right.e();) d = d.right;
                return d.key
            }
            0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
        }
        throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
    }
    g.e = function() {
        return this.ba.e()
    };
    g.count = function() {
        return this.ba.count()
    };
    g.Gc = function() {
        return this.ba.Gc()
    };
    g.ec = function() {
        return this.ba.ec()
    };
    g.ha = function(a) {
        return this.ba.ha(a)
    };
    g.Wb = function(a) {
        return new yf(this.ba, null, this.La, !1, a)
    };
    g.Xb = function(a, b) {
        return new yf(this.ba, a, this.La, !1, b)
    };
    g.Zb = function(a, b) {
        return new yf(this.ba, a, this.La, !0, b)
    };
    g.We = function(a) {
        return new yf(this.ba, null, this.La, !0, a)
    };

    function yf(a, b, c, d, e) {
        this.Hd = e || null;
        this.je = d;
        this.Pa = [];
        for (e = 1; !a.e();)
            if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e) a = this.je ? a.left : a.right;
            else if (0 === e) {
            this.Pa.push(a);
            break
        } else this.Pa.push(a), a = this.je ? a.right : a.left
    }

    function R(a) {
        if (0 === a.Pa.length) return null;
        var b = a.Pa.pop(),
            c;
        c = a.Hd ? a.Hd(b.key, b.value) : {
            key: b.key,
            value: b.value
        };
        if (a.je)
            for (b = b.left; !b.e();) a.Pa.push(b), b = b.right;
        else
            for (b = b.right; !b.e();) a.Pa.push(b), b = b.left;
        return c
    }

    function zf(a) {
        if (0 === a.Pa.length) return null;
        var b;
        b = a.Pa;
        b = b[b.length - 1];
        return a.Hd ? a.Hd(b.key, b.value) : {
            key: b.key,
            value: b.value
        }
    }

    function Af(a, b, c, d, e) {
        this.key = a;
        this.value = b;
        this.color = null != c ? c : !0;
        this.left = null != d ? d : wf;
        this.right = null != e ? e : wf
    }
    g = Af.prototype;
    g.X = function(a, b, c, d, e) {
        return new Af(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right)
    };
    g.count = function() {
        return this.left.count() + 1 + this.right.count()
    };
    g.e = function() {
        return !1
    };
    g.ha = function(a) {
        return this.left.ha(a) || a(this.key, this.value) || this.right.ha(a)
    };

    function Bf(a) {
        return a.left.e() ? a : Bf(a.left)
    }
    g.Gc = function() {
        return Bf(this).key
    };
    g.ec = function() {
        return this.right.e() ? this.key : this.right.ec()
    };
    g.Oa = function(a, b, c) {
        var d, e;
        e = this;
        d = c(a, e.key);
        e = 0 > d ? e.X(null, null, null, e.left.Oa(a, b, c), null) : 0 === d ? e.X(null, b, null, null, null) : e.X(null, null, null, null, e.right.Oa(a, b, c));
        return Cf(e)
    };

    function Df(a) {
        if (a.left.e()) return wf;
        a.left.ea() || a.left.left.ea() || (a = Ef(a));
        a = a.X(null, null, null, Df(a.left), null);
        return Cf(a)
    }
    g.remove = function(a, b) {
        var c, d;
        c = this;
        if (0 > b(a, c.key)) c.left.e() || c.left.ea() || c.left.left.ea() || (c = Ef(c)), c = c.X(null, null, null, c.left.remove(a, b), null);
        else {
            c.left.ea() && (c = Ff(c));
            c.right.e() || c.right.ea() || c.right.left.ea() || (c = Gf(c), c.left.left.ea() && (c = Ff(c), c = Gf(c)));
            if (0 === b(a, c.key)) {
                if (c.right.e()) return wf;
                d = Bf(c.right);
                c = c.X(d.key, d.value, null, null, Df(c.right))
            }
            c = c.X(null, null, null, null, c.right.remove(a, b))
        }
        return Cf(c)
    };
    g.ea = function() {
        return this.color
    };

    function Cf(a) {
        a.right.ea() && !a.left.ea() && (a = Hf(a));
        a.left.ea() && a.left.left.ea() && (a = Ff(a));
        a.left.ea() && a.right.ea() && (a = Gf(a));
        return a
    }

    function Ef(a) {
        a = Gf(a);
        a.right.left.ea() && (a = a.X(null, null, null, null, Ff(a.right)), a = Hf(a), a = Gf(a));
        return a
    }

    function Hf(a) {
        return a.right.X(null, null, a.color, a.X(null, null, !0, null, a.right.left), null)
    }

    function Ff(a) {
        return a.left.X(null, null, a.color, null, a.X(null, null, !0, a.left.right, null))
    }

    function Gf(a) {
        return a.X(null, null, !a.color, a.left.X(null, null, !a.left.color, null, null), a.right.X(null, null, !a.right.color, null, null))
    }

    function If() {}
    g = If.prototype;
    g.X = function() {
        return this
    };
    g.Oa = function(a, b) {
        return new Af(a, b, null)
    };
    g.remove = function() {
        return this
    };
    g.count = function() {
        return 0
    };
    g.e = function() {
        return !0
    };
    g.ha = function() {
        return !1
    };
    g.Gc = function() {
        return null
    };
    g.ec = function() {
        return null
    };
    g.ea = function() {
        return !1
    };
    var wf = new If;

    function P(a, b, c) {
        this.k = a;
        (this.aa = b) && Sd(this.aa);
        a.e() && H(!this.aa || this.aa.e(), "An empty node cannot have a priority");
        this.yb = c;
        this.Db = null
    }
    g = P.prototype;
    g.J = function() {
        return !1
    };
    g.C = function() {
        return this.aa || G
    };
    g.fa = function(a) {
        return this.k.e() ? this : new P(this.k, a, this.yb)
    };
    g.Q = function(a) {
        if (".priority" === a) return this.C();
        a = this.k.get(a);
        return null === a ? G : a
    };
    g.P = function(a) {
        var b = J(a);
        return null === b ? this : this.Q(b).P(D(a))
    };
    g.Da = function(a) {
        return null !== this.k.get(a)
    };
    g.T = function(a, b) {
        H(b, "We should always be passing snapshot nodes");
        if (".priority" === a) return this.fa(b);
        var c = new K(a, b),
            d, e;
        b.e() ? (d = this.k.remove(a), c = me(this.yb, c, this.k)) : (d = this.k.Oa(a, b), c = ke(this.yb, c, this.k));
        e = d.e() ? G : this.aa;
        return new P(d, e, c)
    };
    g.F = function(a, b) {
        var c = J(a);
        if (null === c) return b;
        H(".priority" !== J(a) || 1 === Ad(a), ".priority must be the last token in a path");
        var d = this.Q(c).F(D(a), b);
        return this.T(c, d)
    };
    g.e = function() {
        return this.k.e()
    };
    g.Eb = function() {
        return this.k.count()
    };
    var Jf = /^(0|[1-9]\d*)$/;
    g = P.prototype;
    g.H = function(a) {
        if (this.e()) return null;
        var b = {},
            c = 0,
            d = 0,
            e = !0;
        this.O(N, function(f, h) {
            b[f] = h.H(a);
            c++;
            e && Jf.test(f) ? d = Math.max(d, Number(f)) : e = !1
        });
        if (!a && e && d < 2 * c) {
            var f = [],
                h;
            for (h in b) f[h] = b[h];
            return f
        }
        a && !this.C().e() && (b[".priority"] = this.C().H());
        return b
    };
    g.hash = function() {
        if (null === this.Db) {
            var a = "";
            this.C().e() || (a += "priority:" + Ud(this.C().H()) + ":");
            this.O(N, function(b, c) {
                var d = c.hash();
                "" !== d && (a += ":" + b + ":" + d)
            });
            this.Db = "" === a ? "" : uc(a)
        }
        return this.Db
    };
    g.Ve = function(a, b, c) {
        return (c = Kf(this, c)) ? (a = xf(c, new K(a, b))) ? a.name : null : xf(this.k, a)
    };

    function Qd(a, b) {
        var c;
        c = (c = Kf(a, b)) ? (c = c.Gc()) && c.name : a.k.Gc();
        return c ? new K(c, a.k.get(c)) : null
    }

    function Rd(a, b) {
        var c;
        c = (c = Kf(a, b)) ? (c = c.ec()) && c.name : a.k.ec();
        return c ? new K(c, a.k.get(c)) : null
    }
    g.O = function(a, b) {
        var c = Kf(this, a);
        return c ? c.ha(function(a) {
            return b(a.name, a.R)
        }) : this.k.ha(b)
    };
    g.Wb = function(a) {
        return this.Xb(a.Hc(), a)
    };
    g.Xb = function(a, b) {
        var c = Kf(this, b);
        if (c) return c.Xb(a, function(a) {
            return a
        });
        for (var c = this.k.Xb(a.name, jc), d = zf(c); null != d && 0 > b.compare(d, a);) R(c), d = zf(c);
        return c
    };
    g.We = function(a) {
        return this.Zb(a.Fc(), a)
    };
    g.Zb = function(a, b) {
        var c = Kf(this, b);
        if (c) return c.Zb(a, function(a) {
            return a
        });
        for (var c = this.k.Zb(a.name, jc), d = zf(c); null != d && 0 < b.compare(d, a);) R(c), d = zf(c);
        return c
    };
    g.sc = function(a) {
        return this.e() ? a.e() ? 0 : -1 : a.J() || a.e() ? 1 : a === Zd ? -1 : 0
    };
    g.nb = function(a) {
        if (a === Fd || va(this.yb.cc, a.toString())) return this;
        var b = this.yb,
            c = this.k;
        H(a !== Fd, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        for (var d = [], e = !1, c = c.Wb(jc), f = R(c); f;) e = e || a.xc(f.R), d.push(f), f = R(c);
        d = e ? le(d, Pd(a)) : Wd;
        e = a.toString();
        c = za(b.cc);
        c[e] = a;
        a = za(b.od);
        a[e] = d;
        return new P(this.k, this.aa, new je(a, c))
    };
    g.yc = function(a) {
        return a === Fd || va(this.yb.cc, a.toString())
    };
    g.Z = function(a) {
        if (a === this) return !0;
        if (a.J()) return !1;
        if (this.C().Z(a.C()) && this.k.count() === a.k.count()) {
            var b = this.Wb(N);
            a = a.Wb(N);
            for (var c = R(b), d = R(a); c && d;) {
                if (c.name !== d.name || !c.R.Z(d.R)) return !1;
                c = R(b);
                d = R(a)
            }
            return null === c && null === d
        }
        return !1
    };

    function Kf(a, b) {
        return b === Fd ? null : a.yb.get(b.toString())
    }
    g.toString = function() {
        return B(this.H(!0))
    };

    function M(a, b) {
        if (null === a) return G;
        var c = null;
        "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
        H(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
        "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
        if ("object" !== typeof a || ".sv" in a) return new qc(a, M(c));
        if (a instanceof Array) {
            var d = G,
                e = a;
            r(e, function(a, b) {
                if (cb(e, b) && "." !== b.substring(0, 1)) {
                    var c = M(a);
                    if (c.J() || !c.e()) d =
                        d.T(b, c)
                }
            });
            return d.fa(M(c))
        }
        var f = [],
            h = !1,
            k = a;
        db(k, function(a) {
            if ("string" !== typeof a || "." !== a.substring(0, 1)) {
                var b = M(k[a]);
                b.e() || (h = h || !b.C().e(), f.push(new K(a, b)))
            }
        });
        if (0 == f.length) return G;
        var l = le(f, gc, function(a) {
            return a.name
        }, ic);
        if (h) {
            var m = le(f, Pd(N));
            return new P(l, M(c), new je({
                ".priority": m
            }, {
                ".priority": N
            }))
        }
        return new P(l, M(c), ne)
    }
    var Lf = Math.log(2);

    function Mf(a) {
        this.count = parseInt(Math.log(a + 1) / Lf, 10);
        this.Ne = this.count - 1;
        this.Cf = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function Nf(a) {
        var b = !(a.Cf & 1 << a.Ne);
        a.Ne--;
        return b
    }

    function le(a, b, c, d) {
        function e(b, d) {
            var f = d - b;
            if (0 == f) return null;
            if (1 == f) {
                var m = a[b],
                    u = c ? c(m) : m;
                return new Af(u, m.R, !1, null, null)
            }
            var m = parseInt(f / 2, 10) + b,
                f = e(b, m),
                z = e(m + 1, d),
                m = a[m],
                u = c ? c(m) : m;
            return new Af(u, m.R, !1, f, z)
        }
        a.sort(b);
        var f = function(b) {
            function d(b, h) {
                var k = u - b,
                    z = u;
                u -= b;
                var z = e(k + 1, z),
                    k = a[k],
                    F = c ? c(k) : k,
                    z = new Af(F, k.R, h, null, z);
                f ? f.left = z : m = z;
                f = z
            }
            for (var f = null, m = null, u = a.length, z = 0; z < b.count; ++z) {
                var F = Nf(b),
                    id = Math.pow(2, b.count - (z + 1));
                F ? d(id, !1) : (d(id, !1), d(id, !0))
            }
            return m
        }(new Mf(a.length));
        return null !== f ? new vf(d || b, f) : new vf(d || b)
    }

    function Ud(a) {
        return "number" === typeof a ? "number:" + Jc(a) : "string:" + a
    }

    function Sd(a) {
        if (a.J()) {
            var b = a.H();
            H("string" === typeof b || "number" === typeof b || "object" === typeof b && cb(b, ".sv"), "Priority must be a string or number.")
        } else H(a === Zd || a.e(), "priority of unexpected type.");
        H(a === Zd || a.C().e(), "Priority nodes can't have a priority of their own.")
    }
    var G = new P(new vf(ic), null, ne);

    function Of() {
        P.call(this, new vf(ic), G, ne)
    }
    la(Of, P);
    g = Of.prototype;
    g.sc = function(a) {
        return a === this ? 0 : 1
    };
    g.Z = function(a) {
        return a === this
    };
    g.C = function() {
        return this
    };
    g.Q = function() {
        return G
    };
    g.e = function() {
        return !1
    };
    var Zd = new Of,
        Xd = new K("[MIN_NAME]", G),
        ce = new K("[MAX_NAME]", Zd);

    function W(a, b, c) {
        this.A = a;
        this.V = b;
        this.g = c
    }
    W.prototype.H = function() {
        x("Firebase.DataSnapshot.val", 0, 0, arguments.length);
        return this.A.H()
    };
    W.prototype.val = W.prototype.H;
    W.prototype.Qe = function() {
        x("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
        return this.A.H(!0)
    };
    W.prototype.exportVal = W.prototype.Qe;
    W.prototype.Lf = function() {
        x("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
        return !this.A.e()
    };
    W.prototype.exists = W.prototype.Lf;
    W.prototype.n = function(a) {
        x("Firebase.DataSnapshot.child", 0, 1, arguments.length);
        ga(a) && (a = String(a));
        lf("Firebase.DataSnapshot.child", a);
        var b = new L(a),
            c = this.V.n(b);
        return new W(this.A.P(b), c, N)
    };
    W.prototype.child = W.prototype.n;
    W.prototype.Da = function(a) {
        x("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
        lf("Firebase.DataSnapshot.hasChild", a);
        var b = new L(a);
        return !this.A.P(b).e()
    };
    W.prototype.hasChild = W.prototype.Da;
    W.prototype.C = function() {
        x("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
        return this.A.C().H()
    };
    W.prototype.getPriority = W.prototype.C;
    W.prototype.forEach = function(a) {
        x("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
        A("Firebase.DataSnapshot.forEach", 1, a, !1);
        if (this.A.J()) return !1;
        var b = this;
        return !!this.A.O(this.g, function(c, d) {
            return a(new W(d, b.V.n(c), N))
        })
    };
    W.prototype.forEach = W.prototype.forEach;
    W.prototype.kd = function() {
        x("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
        return this.A.J() ? !1 : !this.A.e()
    };
    W.prototype.hasChildren = W.prototype.kd;
    W.prototype.getKey = function() {
        x("Firebase.DataSnapshot.key", 0, 0, arguments.length);
        return this.V.getKey()
    };
    Lc(W.prototype, "key", W.prototype.getKey);
    W.prototype.Eb = function() {
        x("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
        return this.A.Eb()
    };
    W.prototype.numChildren = W.prototype.Eb;
    W.prototype.wb = function() {
        x("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
        return this.V
    };
    Lc(W.prototype, "ref", W.prototype.wb);

    function yd(a, b) {
        this.N = a;
        this.Ld = b
    }

    function vd(a, b, c, d) {
        return new yd(new $b(b, c, d), a.Ld)
    }

    function zd(a) {
        return a.N.da ? a.N.j() : null
    }
    yd.prototype.w = function() {
        return this.Ld
    };

    function ac(a) {
        return a.Ld.da ? a.Ld.j() : null
    };

    function Pf(a, b) {
        this.V = a;
        var c = a.m,
            d = new Gd(c.g),
            c = S(c) ? new Gd(c.g) : c.xa ? new Md(c) : new Hd(c);
        this.hf = new pd(c);
        var e = b.w(),
            f = b.N,
            h = d.ya(G, e.j(), null),
            k = c.ya(G, f.j(), null);
        this.Ka = new yd(new $b(k, f.da, c.Na()), new $b(h, e.da, d.Na()));
        this.Za = [];
        this.Jf = new kd(a)
    }

    function Qf(a) {
        return a.V
    }
    g = Pf.prototype;
    g.w = function() {
        return this.Ka.w().j()
    };
    g.hb = function(a) {
        var b = ac(this.Ka);
        return b && (S(this.V.m) || !a.e() && !b.Q(J(a)).e()) ? b.P(a) : null
    };
    g.e = function() {
        return 0 === this.Za.length
    };
    g.Nb = function(a) {
        this.Za.push(a)
    };
    g.kb = function(a, b) {
        var c = [];
        if (b) {
            H(null == a, "A cancel should cancel all event registrations.");
            var d = this.V.path;
            Ja(this.Za, function(a) {
                (a = a.Le(b, d)) && c.push(a)
            })
        }
        if (a) {
            for (var e = [], f = 0; f < this.Za.length; ++f) {
                var h = this.Za[f];
                if (!h.matches(a)) e.push(h);
                else if (a.Xe()) {
                    e = e.concat(this.Za.slice(f + 1));
                    break
                }
            }
            this.Za = e
        } else this.Za = [];
        return c
    };
    g.eb = function(a, b, c) {
        a.type === Wc && null !== a.source.Hb && (H(ac(this.Ka), "We should always have a full cache before handling merges"), H(zd(this.Ka), "Missing event cache, even though we have a server cache"));
        var d = this.Ka;
        a = this.hf.eb(d, a, b, c);
        b = this.hf;
        c = a.Sd;
        H(c.N.j().yc(b.U.g), "Event snap not indexed");
        H(c.w().j().yc(b.U.g), "Server snap not indexed");
        H(dc(a.Sd.w()) || !dc(d.w()), "Once a server snap is complete, it should never go back");
        this.Ka = a.Sd;
        return Rf(this, a.Df, a.Sd.N.j(), null)
    };

    function Sf(a, b) {
        var c = a.Ka.N,
            d = [];
        c.j().J() || c.j().O(N, function(a, b) {
            d.push(new I("child_added", b, a))
        });
        c.da && d.push(bc(c.j()));
        return Rf(a, d, c.j(), b)
    }

    function Rf(a, b, c, d) {
        return ld(a.Jf, b, c, d ? [d] : a.Za)
    };

    function Tf(a, b, c) {
        this.Pb = a;
        this.rb = b;
        this.tb = c || null
    }
    g = Tf.prototype;
    g.nf = function(a) {
        return "value" === a
    };
    g.createEvent = function(a, b) {
        var c = b.m.g;
        return new Ub("value", this, new W(a.Ja, b.wb(), c))
    };
    g.Tb = function(a) {
        var b = this.tb;
        if ("cancel" === a.ee()) {
            H(this.rb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.rb;
            return function() {
                c.call(b, a.error)
            }
        }
        var d = this.Pb;
        return function() {
            d.call(b, a.Md)
        }
    };
    g.Le = function(a, b) {
        return this.rb ? new Vb(this, a, b) : null
    };
    g.matches = function(a) {
        return a instanceof Tf ? a.Pb && this.Pb ? a.Pb === this.Pb && a.tb === this.tb : !0 : !1
    };
    g.Xe = function() {
        return null !== this.Pb
    };

    function Uf(a, b, c) {
        this.ga = a;
        this.rb = b;
        this.tb = c
    }
    g = Uf.prototype;
    g.nf = function(a) {
        a = "children_added" === a ? "child_added" : a;
        return ("children_removed" === a ? "child_removed" : a) in this.ga
    };
    g.Le = function(a, b) {
        return this.rb ? new Vb(this, a, b) : null
    };
    g.createEvent = function(a, b) {
        H(null != a.Xa, "Child events should have a childName.");
        var c = b.wb().n(a.Xa);
        return new Ub(a.type, this, new W(a.Ja, c, b.m.g), a.Dd)
    };
    g.Tb = function(a) {
        var b = this.tb;
        if ("cancel" === a.ee()) {
            H(this.rb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.rb;
            return function() {
                c.call(b, a.error)
            }
        }
        var d = this.ga[a.hd];
        return function() {
            d.call(b, a.Md, a.Dd)
        }
    };
    g.matches = function(a) {
        if (a instanceof Uf) {
            if (!this.ga || !a.ga) return !0;
            if (this.tb === a.tb) {
                var b = ra(a.ga);
                if (b === ra(this.ga)) {
                    if (1 === b) {
                        var b = sa(a.ga),
                            c = sa(this.ga);
                        return c === b && (!a.ga[b] || !this.ga[c] || a.ga[b] === this.ga[c])
                    }
                    return qa(this.ga, function(b, c) {
                        return a.ga[c] === b
                    })
                }
            }
        }
        return !1
    };
    g.Xe = function() {
        return null !== this.ga
    };

    function X(a, b, c, d) {
        this.u = a;
        this.path = b;
        this.m = c;
        this.Nc = d
    }

    function Vf(a) {
        var b = null,
            c = null;
        a.ka && (b = Jd(a));
        a.na && (c = Ld(a));
        if (a.g === Fd) {
            if (a.ka) {
                if ("[MIN_NAME]" != Id(a)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if ("string" !== typeof b) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
            if (a.na) {
                if ("[MAX_NAME]" != Kd(a)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if ("string" !==
                    typeof c) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
        } else if (a.g === N) {
            if (null != b && !cf(b) || null != c && !cf(c)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (H(a.g instanceof Yd || a.g === de, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
    }

    function Wf(a) {
        if (a.ka && a.na && a.xa && (!a.xa || "" === a.mb)) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
    }

    function Xf(a, b) {
        if (!0 === a.Nc) throw Error(b + ": You can't combine multiple orderBy calls.");
    }
    g = X.prototype;
    g.wb = function() {
        x("Query.ref", 0, 0, arguments.length);
        return new U(this.u, this.path)
    };
    g.gc = function(a, b, c, d) {
        x("Query.on", 2, 4, arguments.length);
        jf("Query.on", a, !1);
        A("Query.on", 2, b, !1);
        var e = Yf("Query.on", c, d);
        if ("value" === a) Zf(this.u, this, new Tf(b, e.cancel || null, e.Ma || null));
        else {
            var f = {};
            f[a] = b;
            Zf(this.u, this, new Uf(f, e.cancel, e.Ma))
        }
        return b
    };
    g.Ic = function(a, b, c) {
        x("Query.off", 0, 3, arguments.length);
        jf("Query.off", a, !0);
        A("Query.off", 2, b, !0);
        eb("Query.off", 3, c);
        var d = null,
            e = null;
        "value" === a ? d = new Tf(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new Uf(e, null, c || null));
        e = this.u;
        d = ".info" === J(this.path) ? e.pd.kb(this, d) : e.K.kb(this, d);
        Qb(e.ca, this.path, d)
    };
    g.$f = function(a, b) {
        function c(k) {
            f && (f = !1, e.Ic(a, c), b && b.call(d.Ma, k), h.resolve(k))
        }
        x("Query.once", 1, 4, arguments.length);
        jf("Query.once", a, !1);
        A("Query.once", 2, b, !0);
        var d = Yf("Query.once", arguments[2], arguments[3]),
            e = this,
            f = !0,
            h = new hb;
        jb(h.ra);
        this.gc(a, c, function(b) {
            e.Ic(a, c);
            d.cancel && d.cancel.call(d.Ma, b);
            h.reject(b)
        });
        return h.ra
    };
    g.le = function(a) {
        x("Query.limitToFirst", 1, 1, arguments.length);
        if (!ga(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limitToFirst: First argument must be a positive integer.");
        if (this.m.xa) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new X(this.u, this.path, this.m.le(a), this.Nc)
    };
    g.me = function(a) {
        x("Query.limitToLast", 1, 1, arguments.length);
        if (!ga(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limitToLast: First argument must be a positive integer.");
        if (this.m.xa) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new X(this.u, this.path, this.m.me(a), this.Nc)
    };
    g.ag = function(a) {
        x("Query.orderByChild", 1, 1, arguments.length);
        if ("$key" === a) throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        if ("$priority" === a) throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        if ("$value" === a) throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
        lf("Query.orderByChild", a);
        Xf(this, "Query.orderByChild");
        var b = new L(a);
        if (b.e()) throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
        b = new Yd(b);
        b = he(this.m, b);
        Vf(b);
        return new X(this.u, this.path, b, !0)
    };
    g.bg = function() {
        x("Query.orderByKey", 0, 0, arguments.length);
        Xf(this, "Query.orderByKey");
        var a = he(this.m, Fd);
        Vf(a);
        return new X(this.u, this.path, a, !0)
    };
    g.cg = function() {
        x("Query.orderByPriority", 0, 0, arguments.length);
        Xf(this, "Query.orderByPriority");
        var a = he(this.m, N);
        Vf(a);
        return new X(this.u, this.path, a, !0)
    };
    g.dg = function() {
        x("Query.orderByValue", 0, 0, arguments.length);
        Xf(this, "Query.orderByValue");
        var a = he(this.m, de);
        Vf(a);
        return new X(this.u, this.path, a, !0)
    };
    g.Nd = function(a, b) {
        x("Query.startAt", 0, 2, arguments.length);
        df("Query.startAt", a, this.path, !0);
        kf("Query.startAt", b);
        var c = this.m.Nd(a, b);
        Wf(c);
        Vf(c);
        if (this.m.ka) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
        n(a) || (b = a = null);
        return new X(this.u, this.path, c, this.Nc)
    };
    g.gd = function(a, b) {
        x("Query.endAt", 0, 2, arguments.length);
        df("Query.endAt", a, this.path, !0);
        kf("Query.endAt", b);
        var c = this.m.gd(a, b);
        Wf(c);
        Vf(c);
        if (this.m.na) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
        return new X(this.u, this.path, c, this.Nc)
    };
    g.If = function(a, b) {
        x("Query.equalTo", 1, 2, arguments.length);
        df("Query.equalTo", a, this.path, !1);
        kf("Query.equalTo", b);
        if (this.m.ka) throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
        if (this.m.na) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
        return this.Nd(a, b).gd(a, b)
    };
    g.toString = function() {
        x("Query.toString", 0, 0, arguments.length);
        for (var a = this.path, b = "", c = a.Y; c < a.o.length; c++) "" !== a.o[c] && (b += "/" + encodeURIComponent(String(a.o[c])));
        return this.u.toString() + (b || "/")
    };
    g.ja = function() {
        var a = Gc(ie(this.m));
        return "{}" === a ? "default" : a
    };
    g.isEqual = function(a) {
        x("Query.isEqual", 1, 1, arguments.length);
        if (!(a instanceof X)) throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");
        var b = this.u === a.u,
            c = this.path.Z(a.path),
            d = this.ja() === a.ja();
        return b && c && d
    };

    function Yf(a, b, c) {
        var d = {
            cancel: null,
            Ma: null
        };
        if (b && c) d.cancel = b, A(a, 3, d.cancel, !0), d.Ma = c, eb(a, 4, d.Ma);
        else if (b)
            if ("object" === typeof b && null !== b) d.Ma = b;
            else if ("function" === typeof b) d.cancel = b;
        else throw Error(y(a, 3, !0) + " must either be a cancel callback or a context object.");
        return d
    }
    X.prototype.on = X.prototype.gc;
    X.prototype.off = X.prototype.Ic;
    X.prototype.once = X.prototype.$f;
    X.prototype.limitToFirst = X.prototype.le;
    X.prototype.limitToLast = X.prototype.me;
    X.prototype.orderByChild = X.prototype.ag;
    X.prototype.orderByKey = X.prototype.bg;
    X.prototype.orderByPriority = X.prototype.cg;
    X.prototype.orderByValue = X.prototype.dg;
    X.prototype.startAt = X.prototype.Nd;
    X.prototype.endAt = X.prototype.gd;
    X.prototype.equalTo = X.prototype.If;
    X.prototype.toString = X.prototype.toString;
    X.prototype.isEqual = X.prototype.isEqual;
    Lc(X.prototype, "ref", X.prototype.wb);

    function $f(a, b) {
        this.value = a;
        this.children = b || ag
    }
    var ag = new vf(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1
    });

    function bg(a) {
        var b = Q;
        r(a, function(a, d) {
            b = b.set(new L(d), a)
        });
        return b
    }
    g = $f.prototype;
    g.e = function() {
        return null === this.value && this.children.e()
    };

    function cg(a, b, c) {
        if (null != a.value && c(a.value)) return {
            path: C,
            value: a.value
        };
        if (b.e()) return null;
        var d = J(b);
        a = a.children.get(d);
        return null !== a ? (b = cg(a, D(b), c), null != b ? {
            path: (new L(d)).n(b.path),
            value: b.value
        } : null) : null
    }

    function dg(a, b) {
        return cg(a, b, function() {
            return !0
        })
    }
    g.subtree = function(a) {
        if (a.e()) return this;
        var b = this.children.get(J(a));
        return null !== b ? b.subtree(D(a)) : Q
    };
    g.set = function(a, b) {
        if (a.e()) return new $f(b, this.children);
        var c = J(a),
            d = (this.children.get(c) || Q).set(D(a), b),
            c = this.children.Oa(c, d);
        return new $f(this.value, c)
    };
    g.remove = function(a) {
        if (a.e()) return this.children.e() ? Q : new $f(null, this.children);
        var b = J(a),
            c = this.children.get(b);
        return c ? (a = c.remove(D(a)), b = a.e() ? this.children.remove(b) : this.children.Oa(b, a), null === this.value && b.e() ? Q : new $f(this.value, b)) : this
    };
    g.get = function(a) {
        if (a.e()) return this.value;
        var b = this.children.get(J(a));
        return b ? b.get(D(a)) : null
    };

    function Ed(a, b, c) {
        if (b.e()) return c;
        var d = J(b);
        b = Ed(a.children.get(d) || Q, D(b), c);
        d = b.e() ? a.children.remove(d) : a.children.Oa(d, b);
        return new $f(a.value, d)
    }

    function eg(a, b) {
        return fg(a, C, b)
    }

    function fg(a, b, c) {
        var d = {};
        a.children.ha(function(a, f) {
            d[a] = fg(f, b.n(a), c)
        });
        return c(b, a.value, d)
    }

    function gg(a, b, c) {
        return hg(a, b, C, c)
    }

    function hg(a, b, c, d) {
        var e = a.value ? d(c, a.value) : !1;
        if (e) return e;
        if (b.e()) return null;
        e = J(b);
        return (a = a.children.get(e)) ? hg(a, D(b), c.n(e), d) : null
    }

    function ig(a, b, c) {
        jg(a, b, C, c)
    }

    function jg(a, b, c, d) {
        if (b.e()) return a;
        a.value && d(c, a.value);
        var e = J(b);
        return (a = a.children.get(e)) ? jg(a, D(b), c.n(e), d) : Q
    }

    function Cd(a, b) {
        kg(a, C, b)
    }

    function kg(a, b, c) {
        a.children.ha(function(a, e) {
            kg(e, b.n(a), c)
        });
        a.value && c(b, a.value)
    }

    function lg(a, b) {
        a.children.ha(function(a, d) {
            d.value && b(a, d.value)
        })
    }
    var Q = new $f(null);
    $f.prototype.toString = function() {
        var a = {};
        Cd(this, function(b, c) {
            a[b.toString()] = c.toString()
        });
        return B(a)
    };

    function mg(a, b, c) {
        this.type = ud;
        this.source = ng;
        this.path = a;
        this.Ob = b;
        this.Id = c
    }
    mg.prototype.Mc = function(a) {
        if (this.path.e()) {
            if (null != this.Ob.value) return H(this.Ob.children.e(), "affectedTree should not have overlapping affected paths."), this;
            a = this.Ob.subtree(new L(a));
            return new mg(C, a, this.Id)
        }
        H(J(this.path) === a, "operationForChild called for unrelated child.");
        return new mg(D(this.path), this.Ob, this.Id)
    };
    mg.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Id + " affectedTree=" + this.Ob + ")"
    };
    var Bb = 0,
        Wc = 1,
        ud = 2,
        Db = 3;

    function og(a, b, c, d) {
        this.ce = a;
        this.Se = b;
        this.Hb = c;
        this.Ce = d;
        H(!d || b, "Tagged queries must be from server.")
    }
    var ng = new og(!0, !1, null, !1),
        pg = new og(!1, !0, null, !1);
    og.prototype.toString = function() {
        return this.ce ? "user" : this.Ce ? "server(queryID=" + this.Hb + ")" : "server"
    };

    function qg(a) {
        this.W = a
    }
    var rg = new qg(new $f(null));

    function sg(a, b, c) {
        if (b.e()) return new qg(new $f(c));
        var d = dg(a.W, b);
        if (null != d) {
            var e = d.path,
                d = d.value;
            b = T(e, b);
            d = d.F(b, c);
            return new qg(a.W.set(e, d))
        }
        a = Ed(a.W, b, new $f(c));
        return new qg(a)
    }

    function tg(a, b, c) {
        var d = a;
        db(c, function(a, c) {
            d = sg(d, b.n(a), c)
        });
        return d
    }
    qg.prototype.Ed = function(a) {
        if (a.e()) return rg;
        a = Ed(this.W, a, Q);
        return new qg(a)
    };

    function ug(a, b) {
        var c = dg(a.W, b);
        return null != c ? a.W.get(c.path).P(T(c.path, b)) : null
    }

    function vg(a) {
        var b = [],
            c = a.W.value;
        null != c ? c.J() || c.O(N, function(a, c) {
            b.push(new K(a, c))
        }) : a.W.children.ha(function(a, c) {
            null != c.value && b.push(new K(a, c.value))
        });
        return b
    }

    function wg(a, b) {
        if (b.e()) return a;
        var c = ug(a, b);
        return null != c ? new qg(new $f(c)) : new qg(a.W.subtree(b))
    }
    qg.prototype.e = function() {
        return this.W.e()
    };
    qg.prototype.apply = function(a) {
        return xg(C, this.W, a)
    };

    function xg(a, b, c) {
        if (null != b.value) return c.F(a, b.value);
        var d = null;
        b.children.ha(function(b, f) {
            ".priority" === b ? (H(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = xg(a.n(b), f, c)
        });
        c.P(a).e() || null === d || (c = c.F(a.n(".priority"), d));
        return c
    };

    function yg() {
        this.za = {}
    }
    g = yg.prototype;
    g.e = function() {
        return ya(this.za)
    };
    g.eb = function(a, b, c) {
        var d = a.source.Hb;
        if (null !== d) return d = w(this.za, d), H(null != d, "SyncTree gave us an op for an invalid query."), d.eb(a, b, c);
        var e = [];
        r(this.za, function(d) {
            e = e.concat(d.eb(a, b, c))
        });
        return e
    };
    g.Nb = function(a, b, c, d, e) {
        var f = a.ja(),
            h = w(this.za, f);
        if (!h) {
            var h = c.Aa(e ? d : null),
                k = !1;
            h ? k = !0 : (h = d instanceof P ? c.rc(d) : G, k = !1);
            h = new Pf(a, new yd(new $b(h, k, !1), new $b(d, e, !1)));
            this.za[f] = h
        }
        h.Nb(b);
        return Sf(h, b)
    };
    g.kb = function(a, b, c) {
        var d = a.ja(),
            e = [],
            f = [],
            h = null != zg(this);
        if ("default" === d) {
            var k = this;
            r(this.za, function(a, d) {
                f = f.concat(a.kb(b, c));
                a.e() && (delete k.za[d], S(a.V.m) || e.push(a.V))
            })
        } else {
            var l = w(this.za, d);
            l && (f = f.concat(l.kb(b, c)), l.e() && (delete this.za[d], S(l.V.m) || e.push(l.V)))
        }
        h && null == zg(this) && e.push(new U(a.u, a.path));
        return {
            hg: e,
            Kf: f
        }
    };

    function Ag(a) {
        return Ka(ta(a.za), function(a) {
            return !S(a.V.m)
        })
    }
    g.hb = function(a) {
        var b = null;
        r(this.za, function(c) {
            b = b || c.hb(a)
        });
        return b
    };

    function Bg(a, b) {
        if (S(b.m)) return zg(a);
        var c = b.ja();
        return w(a.za, c)
    }

    function zg(a) {
        return xa(a.za, function(a) {
            return S(a.V.m)
        }) || null
    };

    function Cg() {
        this.S = rg;
        this.la = [];
        this.Bc = -1
    }

    function Dg(a, b) {
        for (var c = 0; c < a.la.length; c++) {
            var d = a.la[c];
            if (d.Zc === b) return d
        }
        return null
    }
    g = Cg.prototype;
    g.Ed = function(a) {
        var b = Pa(this.la, function(b) {
            return b.Zc === a
        });
        H(0 <= b, "removeWrite called with nonexistent writeId.");
        var c = this.la[b];
        this.la.splice(b, 1);
        for (var d = c.visible, e = !1, f = this.la.length - 1; d && 0 <= f;) {
            var h = this.la[f];
            h.visible && (f >= b && Eg(h, c.path) ? d = !1 : c.path.contains(h.path) && (e = !0));
            f--
        }
        if (d) {
            if (e) this.S = Fg(this.la, Gg, C), this.Bc = 0 < this.la.length ? this.la[this.la.length - 1].Zc : -1;
            else if (c.Ga) this.S = this.S.Ed(c.path);
            else {
                var k = this;
                r(c.children, function(a, b) {
                    k.S = k.S.Ed(c.path.n(b))
                })
            }
            return !0
        }
        return !1
    };
    g.Aa = function(a, b, c, d) {
        if (c || d) {
            var e = wg(this.S, a);
            return !d && e.e() ? b : d || null != b || null != ug(e, C) ? (e = Fg(this.la, function(b) {
                return (b.visible || d) && (!c || !(0 <= Ia(c, b.Zc))) && (b.path.contains(a) || a.contains(b.path))
            }, a), b = b || G, e.apply(b)) : null
        }
        e = ug(this.S, a);
        if (null != e) return e;
        e = wg(this.S, a);
        return e.e() ? b : null != b || null != ug(e, C) ? (b = b || G, e.apply(b)) : null
    };
    g.rc = function(a, b) {
        var c = G,
            d = ug(this.S, a);
        if (d) d.J() || d.O(N, function(a, b) {
            c = c.T(a, b)
        });
        else if (b) {
            var e = wg(this.S, a);
            b.O(N, function(a, b) {
                var d = wg(e, new L(a)).apply(b);
                c = c.T(a, d)
            });
            Ja(vg(e), function(a) {
                c = c.T(a.name, a.R)
            })
        } else e = wg(this.S, a), Ja(vg(e), function(a) {
            c = c.T(a.name, a.R)
        });
        return c
    };
    g.ad = function(a, b, c, d) {
        H(c || d, "Either existingEventSnap or existingServerSnap must exist");
        a = a.n(b);
        if (null != ug(this.S, a)) return null;
        a = wg(this.S, a);
        return a.e() ? d.P(b) : a.apply(d.P(b))
    };
    g.qc = function(a, b, c) {
        a = a.n(b);
        var d = ug(this.S, a);
        return null != d ? d : Zb(c, b) ? wg(this.S, a).apply(c.j().Q(b)) : null
    };
    g.lc = function(a) {
        return ug(this.S, a)
    };
    g.Wd = function(a, b, c, d, e, f) {
        var h;
        a = wg(this.S, a);
        h = ug(a, C);
        if (null == h)
            if (null != b) h = a.apply(b);
            else return [];
        h = h.nb(f);
        if (h.e() || h.J()) return [];
        b = [];
        a = Pd(f);
        e = e ? h.Zb(c, f) : h.Xb(c, f);
        for (f = R(e); f && b.length < d;) 0 !== a(f, c) && b.push(f), f = R(e);
        return b
    };

    function Eg(a, b) {
        return a.Ga ? a.path.contains(b) : !!wa(a.children, function(c, d) {
            return a.path.n(d).contains(b)
        })
    }

    function Gg(a) {
        return a.visible
    }

    function Fg(a, b, c) {
        for (var d = rg, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (b(f)) {
                var h = f.path;
                if (f.Ga) c.contains(h) ? (h = T(c, h), d = sg(d, h, f.Ga)) : h.contains(c) && (h = T(h, c), d = sg(d, C, f.Ga.P(h)));
                else if (f.children)
                    if (c.contains(h)) h = T(c, h), d = tg(d, h, f.children);
                    else {
                        if (h.contains(c))
                            if (h = T(h, c), h.e()) d = tg(d, C, f.children);
                            else if (f = w(f.children, J(h))) f = f.P(D(h)), d = sg(d, C, f)
                    }
                else throw sc("WriteRecord should have .snap or .children");
            }
        }
        return d
    }

    function Hg(a, b) {
        this.Lb = a;
        this.W = b
    }
    g = Hg.prototype;
    g.Aa = function(a, b, c) {
        return this.W.Aa(this.Lb, a, b, c)
    };
    g.rc = function(a) {
        return this.W.rc(this.Lb, a)
    };
    g.ad = function(a, b, c) {
        return this.W.ad(this.Lb, a, b, c)
    };
    g.lc = function(a) {
        return this.W.lc(this.Lb.n(a))
    };
    g.Wd = function(a, b, c, d, e) {
        return this.W.Wd(this.Lb, a, b, c, d, e)
    };
    g.qc = function(a, b) {
        return this.W.qc(this.Lb, a, b)
    };
    g.n = function(a) {
        return new Hg(this.Lb.n(a), this.W)
    };

    function Ig() {
        this.children = {};
        this.bd = 0;
        this.value = null
    }

    function Jg(a, b, c) {
        this.ud = a ? a : "";
        this.Pc = b ? b : null;
        this.A = c ? c : new Ig
    }

    function Kg(a, b) {
        for (var c = b instanceof L ? b : new L(b), d = a, e; null !== (e = J(c));) d = new Jg(e, d, w(d.A.children, e) || new Ig), c = D(c);
        return d
    }
    g = Jg.prototype;
    g.Ca = function() {
        return this.A.value
    };

    function Lg(a, b) {
        H("undefined" !== typeof b, "Cannot set value to undefined");
        a.A.value = b;
        Mg(a)
    }
    g.clear = function() {
        this.A.value = null;
        this.A.children = {};
        this.A.bd = 0;
        Mg(this)
    };
    g.kd = function() {
        return 0 < this.A.bd
    };
    g.e = function() {
        return null === this.Ca() && !this.kd()
    };
    g.O = function(a) {
        var b = this;
        r(this.A.children, function(c, d) {
            a(new Jg(d, b, c))
        })
    };

    function Ng(a, b, c, d) {
        c && !d && b(a);
        a.O(function(a) {
            Ng(a, b, !0, d)
        });
        c && d && b(a)
    }

    function Og(a, b) {
        for (var c = a.parent(); null !== c && !b(c);) c = c.parent()
    }
    g.path = function() {
        return new L(null === this.Pc ? this.ud : this.Pc.path() + "/" + this.ud)
    };
    g.name = function() {
        return this.ud
    };
    g.parent = function() {
        return this.Pc
    };

    function Mg(a) {
        if (null !== a.Pc) {
            var b = a.Pc,
                c = a.ud,
                d = a.e(),
                e = cb(b.A.children, c);
            d && e ? (delete b.A.children[c], b.A.bd--, Mg(b)) : d || e || (b.A.children[c] = a.A, b.A.bd++, Mg(b))
        }
    };

    function Pg(a, b, c, d, e, f) {
        this.id = Qg++;
        this.f = yc("p:" + this.id + ":");
        this.qd = {};
        this.$ = {};
        this.pa = [];
        this.Oc = 0;
        this.Kc = [];
        this.ma = !1;
        this.Sa = 1E3;
        this.td = 3E5;
        this.Gb = b;
        this.Jc = c;
        this.se = d;
        this.L = a;
        this.ob = this.Fa = this.Cb = this.xe = null;
        this.$c = e;
        this.be = !1;
        this.ie = 0;
        if (f) throw Error("Auth override specified in options, but not supported on non Node.js platforms");
        this.Ge = f || null;
        this.ub = null;
        this.Mb = !1;
        this.Gd = {};
        this.ig = 0;
        this.Re = !0;
        this.Ac = this.ke = null;
        Rg(this, 0);
        tf.Vb().gc("visible", this.Zf, this); - 1 ===
            a.host.indexOf("fblocal") && sf.Vb().gc("online", this.Yf, this)
    }
    var Qg = 0,
        Sg = 0;
    g = Pg.prototype;
    g.ua = function(a, b, c) {
        var d = ++this.ig;
        a = {
            r: d,
            a: a,
            b: b
        };
        this.f(B(a));
        H(this.ma, "sendRequest call when we're not connected not allowed.");
        this.Fa.ua(a);
        c && (this.Gd[d] = c)
    };
    g.$e = function(a, b, c, d) {
        var e = a.ja(),
            f = a.path.toString();
        this.f("Listen called for " + f + " " + e);
        this.$[f] = this.$[f] || {};
        H(Sc(a.m) || !S(a.m), "listen() called for non-default but complete query");
        H(!this.$[f][e], "listen() called twice for same path/queryId.");
        a = {
            G: d,
            ld: b,
            eg: a,
            tag: c
        };
        this.$[f][e] = a;
        this.ma && Tg(this, a)
    };

    function Tg(a, b) {
        var c = b.eg,
            d = c.path.toString(),
            e = c.ja();
        a.f("Listen on " + d + " for " + e);
        var f = {
            p: d
        };
        b.tag && (f.q = ie(c.m), f.t = b.tag);
        f.h = b.ld();
        a.ua("q", f, function(f) {
            var k = f.d,
                l = f.s;
            if (k && "object" === typeof k && cb(k, "w")) {
                var m = w(k, "w");
                ea(m) && 0 <= Ia(m, "no_index") && O("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.m.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance")
            }(a.$[d] && a.$[d][e]) === b && (a.f("listen response", f), "ok" !== l && Ug(a, d, e), b.G && b.G(l,
                k))
        })
    }
    g.kf = function(a) {
        this.ob = a;
        this.f("Auth token refreshed");
        this.ob ? Vg(this) : this.ma && this.ua("unauth", {}, function() {});
        if (a && 40 === a.length || Pc(a)) this.f("Admin auth credential detected.  Reducing max reconnect time."), this.td = 3E4
    };

    function Vg(a) {
        if (a.ma && a.ob) {
            var b = a.ob,
                c = Oc(b) ? "auth" : "gauth",
                d = {
                    cred: b
                };
            a.Ge && (d.authvar = a.Ge);
            a.ua(c, d, function(c) {
                var d = c.s;
                c = c.d || "error";
                a.ob === b && ("ok" === d ? a.ie = 0 : Wg(a, d, c))
            })
        }
    }
    g.uf = function(a, b) {
        var c = a.path.toString(),
            d = a.ja();
        this.f("Unlisten called for " + c + " " + d);
        H(Sc(a.m) || !S(a.m), "unlisten() called for non-default but complete query");
        if (Ug(this, c, d) && this.ma) {
            var e = ie(a.m);
            this.f("Unlisten on " + c + " for " + d);
            c = {
                p: c
            };
            b && (c.q = e, c.t = b);
            this.ua("n", c)
        }
    };
    g.pe = function(a, b, c) {
        this.ma ? Xg(this, "o", a, b, c) : this.Kc.push({
            ue: a,
            action: "o",
            data: b,
            G: c
        })
    };
    g.cf = function(a, b, c) {
        this.ma ? Xg(this, "om", a, b, c) : this.Kc.push({
            ue: a,
            action: "om",
            data: b,
            G: c
        })
    };
    g.xd = function(a, b) {
        this.ma ? Xg(this, "oc", a, null, b) : this.Kc.push({
            ue: a,
            action: "oc",
            data: null,
            G: b
        })
    };

    function Xg(a, b, c, d, e) {
        c = {
            p: c,
            d: d
        };
        a.f("onDisconnect " + b, c);
        a.ua(b, c, function(a) {
            e && setTimeout(function() {
                e(a.s, a.d)
            }, Math.floor(0))
        })
    }
    g.put = function(a, b, c, d) {
        Yg(this, "p", a, b, c, d)
    };
    g.af = function(a, b, c, d) {
        Yg(this, "m", a, b, c, d)
    };

    function Yg(a, b, c, d, e, f) {
        d = {
            p: c,
            d: d
        };
        n(f) && (d.h = f);
        a.pa.push({
            action: b,
            mf: d,
            G: e
        });
        a.Oc++;
        b = a.pa.length - 1;
        a.ma ? Zg(a, b) : a.f("Buffering put: " + c)
    }

    function Zg(a, b) {
        var c = a.pa[b].action,
            d = a.pa[b].mf,
            e = a.pa[b].G;
        a.pa[b].fg = a.ma;
        a.ua(c, d, function(d) {
            a.f(c + " response", d);
            delete a.pa[b];
            a.Oc--;
            0 === a.Oc && (a.pa = []);
            e && e(d.s, d.d)
        })
    }
    g.we = function(a) {
        this.ma && (a = {
            c: a
        }, this.f("reportStats", a), this.ua("s", a, function(a) {
            "ok" !== a.s && this.f("reportStats", "Error sending stats: " + a.d)
        }))
    };
    g.wd = function(a) {
        if ("r" in a) {
            this.f("from server: " + B(a));
            var b = a.r,
                c = this.Gd[b];
            c && (delete this.Gd[b], c(a.b))
        } else {
            if ("error" in a) throw "A server-side error has occurred: " + a.error;
            "a" in a && (b = a.a, a = a.b, this.f("handleServerMessage", b, a), "d" === b ? this.Gb(a.p, a.d, !1, a.t) : "m" === b ? this.Gb(a.p, a.d, !0, a.t) : "c" === b ? $g(this, a.p, a.q) : "ac" === b ? Wg(this, a.s, a.d) : "sd" === b ? this.xe ? this.xe(a) : "msg" in a && "undefined" !== typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : zc("Unrecognized action received from server: " +
                B(b) + "\nAre you using the latest client?"))
        }
    };
    g.Lc = function(a, b) {
        this.f("connection ready");
        this.ma = !0;
        this.Ac = (new Date).getTime();
        this.se({
            serverTimeOffset: a - (new Date).getTime()
        });
        this.Cb = b;
        if (this.Re) {
            var c = {};
            c["sdk.js." + firebase.SDK_VERSION.replace(/\./g, "-")] = 1;
            qb() ? c["framework.cordova"] = 1 : "object" === typeof navigator && "ReactNative" === navigator.product && (c["framework.reactnative"] = 1);
            this.we(c)
        }
        ah(this);
        this.Re = !1;
        this.Jc(!0)
    };

    function Rg(a, b) {
        H(!a.Fa, "Scheduling a connect when we're already connected/ing?");
        a.ub && clearTimeout(a.ub);
        a.ub = setTimeout(function() {
            a.ub = null;
            bh(a)
        }, Math.floor(b))
    }
    g.Zf = function(a) {
        a && !this.Mb && this.Sa === this.td && (this.f("Window became visible.  Reducing delay."), this.Sa = 1E3, this.Fa || Rg(this, 0));
        this.Mb = a
    };
    g.Yf = function(a) {
        a ? (this.f("Browser went online."), this.Sa = 1E3, this.Fa || Rg(this, 0)) : (this.f("Browser went offline.  Killing connection."), this.Fa && this.Fa.close())
    };
    g.df = function() {
        this.f("data client disconnected");
        this.ma = !1;
        this.Fa = null;
        for (var a = 0; a < this.pa.length; a++) {
            var b = this.pa[a];
            b && "h" in b.mf && b.fg && (b.G && b.G("disconnect"), delete this.pa[a], this.Oc--)
        }
        0 === this.Oc && (this.pa = []);
        this.Gd = {};
        ch(this) && (this.Mb ? this.Ac && (3E4 < (new Date).getTime() - this.Ac && (this.Sa = 1E3), this.Ac = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.Sa = this.td, this.ke = (new Date).getTime()), a = Math.max(0, this.Sa - ((new Date).getTime() - this.ke)), a *= Math.random(), this.f("Trying to reconnect in " +
            a + "ms"), Rg(this, a), this.Sa = Math.min(this.td, 1.3 * this.Sa));
        this.Jc(!1)
    };

    function bh(a) {
        if (ch(a)) {
            a.f("Making a connection attempt");
            a.ke = (new Date).getTime();
            a.Ac = null;
            var b = q(a.wd, a),
                c = q(a.Lc, a),
                d = q(a.df, a),
                e = a.id + ":" + Sg++,
                f = a.Cb,
                h = !1,
                k = null,
                l = function() {
                    k ? k.close() : (h = !0, d())
                };
            a.Fa = {
                close: l,
                ua: function(a) {
                    H(k, "sendRequest call when we're not connected not allowed.");
                    k.ua(a)
                }
            };
            var m = a.be;
            a.be = !1;
            a.$c.getToken(m).then(function(l) {
                h ? E("getToken() completed but was canceled") : (E("getToken() completed. Creating connection."), a.ob = l && l.accessToken, k = new Ce(e, a.L, b, c, d, function(b) {
                    O(b +
                        " (" + a.L.toString() + ")");
                    a.ab("server_kill")
                }, f))
            }).then(null, function(b) {
                a.f("Failed to get token: " + b);
                h || l()
            })
        }
    }
    g.ab = function(a) {
        E("Interrupting connection for reason: " + a);
        this.qd[a] = !0;
        this.Fa ? this.Fa.close() : (this.ub && (clearTimeout(this.ub), this.ub = null), this.ma && this.df())
    };
    g.kc = function(a) {
        E("Resuming connection for reason: " + a);
        delete this.qd[a];
        ya(this.qd) && (this.Sa = 1E3, this.Fa || Rg(this, 0))
    };

    function $g(a, b, c) {
        c = c ? La(c, function(a) {
            return Gc(a)
        }).join("$") : "default";
        (a = Ug(a, b, c)) && a.G && a.G("permission_denied")
    }

    function Ug(a, b, c) {
        b = (new L(b)).toString();
        var d;
        n(a.$[b]) ? (d = a.$[b][c], delete a.$[b][c], 0 === ra(a.$[b]) && delete a.$[b]) : d = void 0;
        return d
    }

    function Wg(a, b, c) {
        E("Auth token revoked: " + b + "/" + c);
        a.ob = null;
        a.be = !0;
        a.Fa.close();
        "invalid_token" === b && (a.ie++, 3 <= a.ie && (a.Sa = 3E4, a = a.$c, b = 'Provided authentication credentials for the app named "' + a.oc.name + '" are invalid. This usually indicates your app was not initialized correctly. ', b = "credential" in a.oc.options ? b + 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in a.oc.options ?
            b + 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : b + 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', O(b)))
    }

    function ah(a) {
        Vg(a);
        r(a.$, function(b) {
            r(b, function(b) {
                Tg(a, b)
            })
        });
        for (var b = 0; b < a.pa.length; b++) a.pa[b] && Zg(a, b);
        for (; a.Kc.length;) b = a.Kc.shift(), Xg(a, b.action, b.ue, b.data, b.G)
    }

    function ch(a) {
        var b;
        b = sf.Vb().hc;
        return ya(a.qd) && b
    };
    var Y = {
        Mf: function() {
            re = dd = !0
        }
    };
    Y.forceLongPolling = Y.Mf;
    Y.Nf = function() {
        se = !0
    };
    Y.forceWebSockets = Y.Nf;
    Y.Tf = function() {
        return cd.isAvailable()
    };
    Y.isWebSocketsAvailable = Y.Tf;
    Y.lg = function(a, b) {
        a.u.Ra.xe = b
    };
    Y.setSecurityDebugCallback = Y.lg;
    Y.ze = function(a, b) {
        a.u.ze(b)
    };
    Y.stats = Y.ze;
    Y.Ae = function(a, b) {
        a.u.Ae(b)
    };
    Y.statsIncrementCounter = Y.Ae;
    Y.fd = function(a) {
        return a.u.fd
    };
    Y.dataUpdateCount = Y.fd;
    Y.Sf = function(a, b) {
        a.u.he = b
    };
    Y.interceptServerData = Y.Sf;

    function dh(a) {
        this.wa = Q;
        this.jb = new Cg;
        this.Be = {};
        this.ic = {};
        this.Cc = a
    }

    function eh(a, b, c, d, e) {
        var f = a.jb,
            h = e;
        H(d > f.Bc, "Stacking an older write on top of newer ones");
        n(h) || (h = !0);
        f.la.push({
            path: b,
            Ga: c,
            Zc: d,
            visible: h
        });
        h && (f.S = sg(f.S, b, c));
        f.Bc = d;
        return e ? fh(a, new Ab(ng, b, c)) : []
    }

    function gh(a, b, c, d) {
        var e = a.jb;
        H(d > e.Bc, "Stacking an older merge on top of newer ones");
        e.la.push({
            path: b,
            children: c,
            Zc: d,
            visible: !0
        });
        e.S = tg(e.S, b, c);
        e.Bc = d;
        c = bg(c);
        return fh(a, new Vc(ng, b, c))
    }

    function hh(a, b, c) {
        c = c || !1;
        var d = Dg(a.jb, b);
        if (a.jb.Ed(b)) {
            var e = Q;
            null != d.Ga ? e = e.set(C, !0) : db(d.children, function(a, b) {
                e = e.set(new L(a), b)
            });
            return fh(a, new mg(d.path, e, c))
        }
        return []
    }

    function ih(a, b, c) {
        c = bg(c);
        return fh(a, new Vc(pg, b, c))
    }

    function jh(a, b, c, d) {
        d = kh(a, d);
        if (null != d) {
            var e = lh(d);
            d = e.path;
            e = e.Hb;
            b = T(d, b);
            c = new Ab(new og(!1, !0, e, !0), b, c);
            return mh(a, d, c)
        }
        return []
    }

    function nh(a, b, c, d) {
        if (d = kh(a, d)) {
            var e = lh(d);
            d = e.path;
            e = e.Hb;
            b = T(d, b);
            c = bg(c);
            c = new Vc(new og(!1, !0, e, !0), b, c);
            return mh(a, d, c)
        }
        return []
    }
    dh.prototype.Nb = function(a, b) {
        var c = a.path,
            d = null,
            e = !1;
        ig(this.wa, c, function(a, b) {
            var f = T(a, c);
            d = d || b.hb(f);
            e = e || null != zg(b)
        });
        var f = this.wa.get(c);
        f ? (e = e || null != zg(f), d = d || f.hb(C)) : (f = new yg, this.wa = this.wa.set(c, f));
        var h;
        null != d ? h = !0 : (h = !1, d = G, lg(this.wa.subtree(c), function(a, b) {
            var c = b.hb(C);
            c && (d = d.T(a, c))
        }));
        var k = null != Bg(f, a);
        if (!k && !S(a.m)) {
            var l = oh(a);
            H(!(l in this.ic), "View does not exist, but we have a tag");
            var m = ph++;
            this.ic[l] = m;
            this.Be["_" + m] = l
        }
        h = f.Nb(a, b, new Hg(c, this.jb), d, h);
        k ||
            e || (f = Bg(f, a), h = h.concat(qh(this, a, f)));
        return h
    };
    dh.prototype.kb = function(a, b, c) {
        var d = a.path,
            e = this.wa.get(d),
            f = [];
        if (e && ("default" === a.ja() || null != Bg(e, a))) {
            f = e.kb(a, b, c);
            e.e() && (this.wa = this.wa.remove(d));
            e = f.hg;
            f = f.Kf;
            b = -1 !== Pa(e, function(a) {
                return S(a.m)
            });
            var h = gg(this.wa, d, function(a, b) {
                return null != zg(b)
            });
            if (b && !h && (d = this.wa.subtree(d), !d.e()))
                for (var d = rh(d), k = 0; k < d.length; ++k) {
                    var l = d[k],
                        m = l.V,
                        l = sh(this, l);
                    this.Cc.ye(th(m), uh(this, m), l.ld, l.G)
                }
            if (!h && 0 < e.length && !c)
                if (b) this.Cc.Od(th(a), null);
                else {
                    var u = this;
                    Ja(e, function(a) {
                        a.ja();
                        var b = u.ic[oh(a)];
                        u.Cc.Od(th(a), b)
                    })
                }
            vh(this, e)
        }
        return f
    };
    dh.prototype.Aa = function(a, b) {
        var c = this.jb,
            d = gg(this.wa, a, function(b, c) {
                var d = T(b, a);
                if (d = c.hb(d)) return d
            });
        return c.Aa(a, d, b, !0)
    };

    function rh(a) {
        return eg(a, function(a, c, d) {
            if (c && null != zg(c)) return [zg(c)];
            var e = [];
            c && (e = Ag(c));
            r(d, function(a) {
                e = e.concat(a)
            });
            return e
        })
    }

    function vh(a, b) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (!S(d.m)) {
                var d = oh(d),
                    e = a.ic[d];
                delete a.ic[d];
                delete a.Be["_" + e]
            }
        }
    }

    function th(a) {
        return S(a.m) && !Sc(a.m) ? a.wb() : a
    }

    function qh(a, b, c) {
        var d = b.path,
            e = uh(a, b);
        c = sh(a, c);
        b = a.Cc.ye(th(b), e, c.ld, c.G);
        d = a.wa.subtree(d);
        if (e) H(null == zg(d.value), "If we're adding a query, it shouldn't be shadowed");
        else
            for (e = eg(d, function(a, b, c) {
                    if (!a.e() && b && null != zg(b)) return [Qf(zg(b))];
                    var d = [];
                    b && (d = d.concat(La(Ag(b), function(a) {
                        return a.V
                    })));
                    r(c, function(a) {
                        d = d.concat(a)
                    });
                    return d
                }), d = 0; d < e.length; ++d) c = e[d], a.Cc.Od(th(c), uh(a, c));
        return b
    }

    function sh(a, b) {
        var c = b.V,
            d = uh(a, c);
        return {
            ld: function() {
                return (b.w() || G).hash()
            },
            G: function(b) {
                if ("ok" === b) {
                    if (d) {
                        var f = c.path;
                        if (b = kh(a, d)) {
                            var h = lh(b);
                            b = h.path;
                            h = h.Hb;
                            f = T(b, f);
                            f = new Cb(new og(!1, !0, h, !0), f);
                            b = mh(a, b, f)
                        } else b = []
                    } else b = fh(a, new Cb(pg, c.path));
                    return b
                }
                f = "Unknown Error";
                "too_big" === b ? f = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? f = "Client doesn't have permission to access the desired data." : "unavailable" == b &&
                    (f = "The service is unavailable");
                f = Error(b + " at " + c.path.toString() + ": " + f);
                f.code = b.toUpperCase();
                return a.kb(c, null, f)
            }
        }
    }

    function oh(a) {
        return a.path.toString() + "$" + a.ja()
    }

    function lh(a) {
        var b = a.indexOf("$");
        H(-1 !== b && b < a.length - 1, "Bad queryKey.");
        return {
            Hb: a.substr(b + 1),
            path: new L(a.substr(0, b))
        }
    }

    function kh(a, b) {
        var c = a.Be,
            d = "_" + b;
        return d in c ? c[d] : void 0
    }

    function uh(a, b) {
        var c = oh(b);
        return w(a.ic, c)
    }
    var ph = 1;

    function mh(a, b, c) {
        var d = a.wa.get(b);
        H(d, "Missing sync point for query tag that we're tracking");
        return d.eb(c, new Hg(b, a.jb), null)
    }

    function fh(a, b) {
        return wh(a, b, a.wa, null, new Hg(C, a.jb))
    }

    function wh(a, b, c, d, e) {
        if (b.path.e()) return xh(a, b, c, d, e);
        var f = c.get(C);
        null == d && null != f && (d = f.hb(C));
        var h = [],
            k = J(b.path),
            l = b.Mc(k);
        if ((c = c.children.get(k)) && l) var m = d ? d.Q(k) : null,
            k = e.n(k),
            h = h.concat(wh(a, l, c, m, k));
        f && (h = h.concat(f.eb(b, e, d)));
        return h
    }

    function xh(a, b, c, d, e) {
        var f = c.get(C);
        null == d && null != f && (d = f.hb(C));
        var h = [];
        c.children.ha(function(c, f) {
            var m = d ? d.Q(c) : null,
                u = e.n(c),
                z = b.Mc(c);
            z && (h = h.concat(xh(a, z, f, m, u)))
        });
        f && (h = h.concat(f.eb(b, e, d)));
        return h
    };

    function Te(a, b, c) {
        this.app = c;
        var d = new Eb(c);
        this.L = a;
        this.Va = $c(a);
        this.Vc = null;
        this.ca = new Nb;
        this.vd = 1;
        this.Ra = null;
        if (b || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) this.va = new Qc(this.L, q(this.Gb, this), d), setTimeout(q(this.Jc, this, !0), 0);
        else {
            b = c.options.databaseAuthVariableOverride || null;
            if (null !== b) {
                if ("object" !== da(b)) throw Error("Only objects are supported for option databaseAuthVariableOverride");
                try {
                    B(b)
                } catch (e) {
                    throw Error("Invalid authOverride provided: " + e);
                }
            }
            this.va = this.Ra = new Pg(this.L, q(this.Gb, this), q(this.Jc, this), q(this.se, this), d, b)
        }
        var f = this;
        Fb(d, function(a) {
            f.va.kf(a)
        });
        this.og = ad(a, q(function() {
            return new Xc(this.Va, this.va)
        }, this));
        this.mc = new Jg;
        this.ge = new Gb;
        this.pd = new dh({
            ye: function(a, b, c, d) {
                b = [];
                c = f.ge.j(a.path);
                c.e() || (b = fh(f.pd, new Ab(pg, a.path, c)), setTimeout(function() {
                    d("ok")
                }, 0));
                return b
            },
            Od: ba
        });
        yh(this, "connected", !1);
        this.ia = new mc;
        this.Ya = new Se(this);
        this.fd =
            0;
        this.he = null;
        this.K = new dh({
            ye: function(a, b, c, d) {
                f.va.$e(a, c, b, function(b, c) {
                    var e = d(b, c);
                    Sb(f.ca, a.path, e)
                });
                return []
            },
            Od: function(a, b) {
                f.va.uf(a, b)
            }
        })
    }
    g = Te.prototype;
    g.toString = function() {
        return (this.L.Sc ? "https://" : "http://") + this.L.host
    };
    g.name = function() {
        return this.L.ne
    };

    function zh(a) {
        a = a.ge.j(new L(".info/serverTimeOffset")).H() || 0;
        return (new Date).getTime() + a
    }

    function Ah(a) {
        a = a = {
            timestamp: zh(a)
        };
        a.timestamp = a.timestamp || (new Date).getTime();
        return a
    }
    g.Gb = function(a, b, c, d) {
        this.fd++;
        var e = new L(a);
        b = this.he ? this.he(a, b) : b;
        a = [];
        d ? c ? (b = pa(b, function(a) {
            return M(a)
        }), a = nh(this.K, e, b, d)) : (b = M(b), a = jh(this.K, e, b, d)) : c ? (d = pa(b, function(a) {
            return M(a)
        }), a = ih(this.K, e, d)) : (d = M(b), a = fh(this.K, new Ab(pg, e, d)));
        d = e;
        0 < a.length && (d = Bh(this, e));
        Sb(this.ca, d, a)
    };
    g.Jc = function(a) {
        yh(this, "connected", a);
        !1 === a && Ch(this)
    };
    g.se = function(a) {
        var b = this;
        Ic(a, function(a, d) {
            yh(b, d, a)
        })
    };

    function yh(a, b, c) {
        b = new L("/.info/" + b);
        c = M(c);
        var d = a.ge;
        d.Jd = d.Jd.F(b, c);
        c = fh(a.pd, new Ab(pg, b, c));
        Sb(a.ca, b, c)
    }
    g.Jb = function(a, b, c, d) {
        this.f("set", {
            path: a.toString(),
            value: b,
            ug: c
        });
        var e = Ah(this);
        b = M(b, c);
        var e = pc(b, e),
            f = this.vd++,
            e = eh(this.K, a, e, f, !0);
        Ob(this.ca, e);
        var h = this;
        this.va.put(a.toString(), b.H(!0), function(b, c) {
            var e = "ok" === b;
            e || O("set at " + a + " failed: " + b);
            e = hh(h.K, f, !e);
            Sb(h.ca, a, e);
            Dh(d, b, c)
        });
        e = Eh(this, a);
        Bh(this, e);
        Sb(this.ca, e, [])
    };
    g.update = function(a, b, c) {
        this.f("update", {
            path: a.toString(),
            value: b
        });
        var d = !0,
            e = Ah(this),
            f = {};
        r(b, function(a, b) {
            d = !1;
            var c = M(a);
            f[b] = pc(c, e)
        });
        if (d) E("update() called with empty data.  Don't do anything."), Dh(c, "ok");
        else {
            var h = this.vd++,
                k = gh(this.K, a, f, h);
            Ob(this.ca, k);
            var l = this;
            this.va.af(a.toString(), b, function(b, d) {
                var e = "ok" === b;
                e || O("update at " + a + " failed: " + b);
                var e = hh(l.K, h, !e),
                    f = a;
                0 < e.length && (f = Bh(l, a));
                Sb(l.ca, f, e);
                Dh(c, b, d)
            });
            r(b, function(b, c) {
                var d = Eh(l, a.n(c));
                Bh(l, d)
            });
            Sb(this.ca,
                a, [])
        }
    };

    function Ch(a) {
        a.f("onDisconnectEvents");
        var b = Ah(a),
            c = [];
        nc(lc(a.ia, b), C, function(b, e) {
            c = c.concat(fh(a.K, new Ab(pg, b, e)));
            var f = Eh(a, b);
            Bh(a, f)
        });
        a.ia = new mc;
        Sb(a.ca, C, c)
    }
    g.xd = function(a, b) {
        var c = this;
        this.va.xd(a.toString(), function(d, e) {
            "ok" === d && Ze(c.ia, a);
            Dh(b, d, e)
        })
    };

    function nf(a, b, c, d) {
        var e = M(c);
        a.va.pe(b.toString(), e.H(!0), function(c, h) {
            "ok" === c && oc(a.ia, b, e);
            Dh(d, c, h)
        })
    }

    function of(a, b, c, d, e) {
        var f = M(c, d);
        a.va.pe(b.toString(), f.H(!0), function(c, d) {
            "ok" === c && oc(a.ia, b, f);
            Dh(e, c, d)
        })
    }

    function pf(a, b, c, d) {
        var e = !0,
            f;
        for (f in c) e = !1;
        e ? (E("onDisconnect().update() called with empty data.  Don't do anything."), Dh(d, "ok")) : a.va.cf(b.toString(), c, function(e, f) {
            if ("ok" === e)
                for (var l in c) {
                    var m = M(c[l]);
                    oc(a.ia, b.n(l), m)
                }
            Dh(d, e, f)
        })
    }

    function Zf(a, b, c) {
        c = ".info" === J(b.path) ? a.pd.Nb(b, c) : a.K.Nb(b, c);
        Qb(a.ca, b.path, c)
    }
    g.ab = function() {
        this.Ra && this.Ra.ab("repo_interrupt")
    };
    g.kc = function() {
        this.Ra && this.Ra.kc("repo_interrupt")
    };
    g.ze = function(a) {
        if ("undefined" !== typeof console) {
            a ? (this.Vc || (this.Vc = new Mb(this.Va)), a = this.Vc.get()) : a = this.Va.get();
            var b = Ma(ua(a), function(a, b) {
                    return Math.max(b.length, a)
                }, 0),
                c;
            for (c in a) {
                for (var d = a[c], e = c.length; e < b + 2; e++) c += " ";
                console.log(c + d)
            }
        }
    };
    g.Ae = function(a) {
        Lb(this.Va, a);
        this.og.rf[a] = !0
    };
    g.f = function(a) {
        var b = "";
        this.Ra && (b = this.Ra.id + ":");
        E(b, arguments)
    };

    function Dh(a, b, c) {
        a && ub(function() {
            if ("ok" == b) a(null);
            else {
                var d = (b || "error").toUpperCase(),
                    e = d;
                c && (e += ": " + c);
                e = Error(e);
                e.code = d;
                a(e)
            }
        })
    };

    function Fh(a, b, c, d, e) {
        function f() {}
        a.f("transaction on " + b);
        var h = new U(a, b);
        h.gc("value", f);
        c = {
            path: b,
            update: c,
            G: d,
            status: null,
            ef: rc(),
            Fe: e,
            of: 0,
            Rd: function() {
                h.Ic("value", f)
            },
            Td: null,
            Ba: null,
            cd: null,
            dd: null,
            ed: null
        };
        d = a.K.Aa(b, void 0) || G;
        c.cd = d;
        d = c.update(d.H());
        if (n(d)) {
            ef("transaction failed: Data returned ", d, c.path);
            c.status = 1;
            e = Kg(a.mc, b);
            var k = e.Ca() || [];
            k.push(c);
            Lg(e, k);
            "object" === typeof d && null !== d && cb(d, ".priority") ? (k = w(d, ".priority"), H(cf(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) :
                k = (a.K.Aa(b) || G).C().H();
            e = Ah(a);
            d = M(d, k);
            e = pc(d, e);
            c.dd = d;
            c.ed = e;
            c.Ba = a.vd++;
            c = eh(a.K, b, e, c.Ba, c.Fe);
            Sb(a.ca, b, c);
            Gh(a)
        } else c.Rd(), c.dd = null, c.ed = null, c.G && (a = new W(c.cd, new U(a, c.path), N), c.G(null, !1, a))
    }

    function Gh(a, b) {
        var c = b || a.mc;
        b || Hh(a, c);
        if (null !== c.Ca()) {
            var d = Ih(a, c);
            H(0 < d.length, "Sending zero length transaction queue");
            Na(d, function(a) {
                return 1 === a.status
            }) && Jh(a, c.path(), d)
        } else c.kd() && c.O(function(b) {
            Gh(a, b)
        })
    }

    function Jh(a, b, c) {
        for (var d = La(c, function(a) {
                return a.Ba
            }), e = a.K.Aa(b, d) || G, d = e, e = e.hash(), f = 0; f < c.length; f++) {
            var h = c[f];
            H(1 === h.status, "tryToSendTransactionQueue_: items in queue should all be run.");
            h.status = 2;
            h.of++;
            var k = T(b, h.path),
                d = d.F(k, h.dd)
        }
        d = d.H(!0);
        a.va.put(b.toString(), d, function(d) {
            a.f("transaction put response", {
                path: b.toString(),
                status: d
            });
            var e = [];
            if ("ok" === d) {
                d = [];
                for (f = 0; f < c.length; f++) {
                    c[f].status = 3;
                    e = e.concat(hh(a.K, c[f].Ba));
                    if (c[f].G) {
                        var h = c[f].ed,
                            k = new U(a, c[f].path);
                        d.push(q(c[f].G,
                            null, null, !0, new W(h, k, N)))
                    }
                    c[f].Rd()
                }
                Hh(a, Kg(a.mc, b));
                Gh(a);
                Sb(a.ca, b, e);
                for (f = 0; f < d.length; f++) ub(d[f])
            } else {
                if ("datastale" === d)
                    for (f = 0; f < c.length; f++) c[f].status = 4 === c[f].status ? 5 : 1;
                else
                    for (O("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++) c[f].status = 5, c[f].Td = d;
                Bh(a, b)
            }
        }, e)
    }

    function Bh(a, b) {
        var c = Kh(a, b),
            d = c.path(),
            c = Ih(a, c);
        Lh(a, c, d);
        return d
    }

    function Lh(a, b, c) {
        if (0 !== b.length) {
            for (var d = [], e = [], f = Ka(b, function(a) {
                    return 1 === a.status
                }), f = La(f, function(a) {
                    return a.Ba
                }), h = 0; h < b.length; h++) {
                var k = b[h],
                    l = T(c, k.path),
                    m = !1,
                    u;
                H(null !== l, "rerunTransactionsUnderNode_: relativePath should not be null.");
                if (5 === k.status) m = !0, u = k.Td, e = e.concat(hh(a.K, k.Ba, !0));
                else if (1 === k.status)
                    if (25 <= k.of) m = !0, u = "maxretry", e = e.concat(hh(a.K, k.Ba, !0));
                    else {
                        var z = a.K.Aa(k.path, f) || G;
                        k.cd = z;
                        var F = b[h].update(z.H());
                        n(F) ? (ef("transaction failed: Data returned ", F,
                            k.path), l = M(F), "object" === typeof F && null != F && cb(F, ".priority") || (l = l.fa(z.C())), z = k.Ba, F = Ah(a), F = pc(l, F), k.dd = l, k.ed = F, k.Ba = a.vd++, Qa(f, z), e = e.concat(eh(a.K, k.path, F, k.Ba, k.Fe)), e = e.concat(hh(a.K, z, !0))) : (m = !0, u = "nodata", e = e.concat(hh(a.K, k.Ba, !0)))
                    }
                Sb(a.ca, c, e);
                e = [];
                m && (b[h].status = 3, setTimeout(b[h].Rd, Math.floor(0)), b[h].G && ("nodata" === u ? (k = new U(a, b[h].path), d.push(q(b[h].G, null, null, !1, new W(b[h].cd, k, N)))) : d.push(q(b[h].G, null, Error(u), !1, null))))
            }
            Hh(a, a.mc);
            for (h = 0; h < d.length; h++) ub(d[h]);
            Gh(a)
        }
    }

    function Kh(a, b) {
        for (var c, d = a.mc; null !== (c = J(b)) && null === d.Ca();) d = Kg(d, c), b = D(b);
        return d
    }

    function Ih(a, b) {
        var c = [];
        Mh(a, b, c);
        c.sort(function(a, b) {
            return a.ef - b.ef
        });
        return c
    }

    function Mh(a, b, c) {
        var d = b.Ca();
        if (null !== d)
            for (var e = 0; e < d.length; e++) c.push(d[e]);
        b.O(function(b) {
            Mh(a, b, c)
        })
    }

    function Hh(a, b) {
        var c = b.Ca();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d;
            Lg(b, 0 < c.length ? c : null)
        }
        b.O(function(b) {
            Hh(a, b)
        })
    }

    function Eh(a, b) {
        var c = Kh(a, b).path(),
            d = Kg(a.mc, b);
        Og(d, function(b) {
            Nh(a, b)
        });
        Nh(a, d);
        Ng(d, function(b) {
            Nh(a, b)
        });
        return c
    }

    function Nh(a, b) {
        var c = b.Ca();
        if (null !== c) {
            for (var d = [], e = [], f = -1, h = 0; h < c.length; h++) 4 !== c[h].status && (2 === c[h].status ? (H(f === h - 1, "All SENT items should be at beginning of queue."), f = h, c[h].status = 4, c[h].Td = "set") : (H(1 === c[h].status, "Unexpected transaction status in abort"), c[h].Rd(), e = e.concat(hh(a.K, c[h].Ba, !0)), c[h].G && d.push(q(c[h].G, null, Error("set"), !1, null)))); - 1 === f ? Lg(b, null) : c.length = f + 1;
            Sb(a.ca, b.path(), e);
            for (h = 0; h < d.length; h++) ub(d[h])
        }
    };

    function Ye() {
        this.lb = {};
        this.wf = !1
    }
    Ye.prototype.ab = function() {
        for (var a in this.lb) this.lb[a].ab()
    };
    Ye.prototype.kc = function() {
        for (var a in this.lb) this.lb[a].kc()
    };
    Ye.prototype.ae = function(a) {
        this.wf = a
    };
    ca(Ye);
    Ye.prototype.interrupt = Ye.prototype.ab;
    Ye.prototype.resume = Ye.prototype.kc;
    var Z = {};
    Z.nc = Pg;
    Z.DataConnection = Z.nc;
    Pg.prototype.ng = function(a, b) {
        this.ua("q", {
            p: a
        }, b)
    };
    Z.nc.prototype.simpleListen = Z.nc.prototype.ng;
    Pg.prototype.Hf = function(a, b) {
        this.ua("echo", {
            d: a
        }, b)
    };
    Z.nc.prototype.echo = Z.nc.prototype.Hf;
    Pg.prototype.interrupt = Pg.prototype.ab;
    Z.zf = Ce;
    Z.RealTimeConnection = Z.zf;
    Ce.prototype.sendRequest = Ce.prototype.ua;
    Ce.prototype.close = Ce.prototype.close;
    Z.Rf = function(a) {
        var b = Pg.prototype.put;
        Pg.prototype.put = function(c, d, e, f) {
            n(f) && (f = a());
            b.call(this, c, d, e, f)
        };
        return function() {
            Pg.prototype.put = b
        }
    };
    Z.hijackHash = Z.Rf;
    Z.yf = Hb;
    Z.ConnectionTarget = Z.yf;
    Z.ja = function(a) {
        return a.ja()
    };
    Z.queryIdentifier = Z.ja;
    Z.Uf = function(a) {
        return a.u.Ra.$
    };
    Z.listens = Z.Uf;
    Z.ae = function(a) {
        Ye.Vb().ae(a)
    };
    Z.forceRestClient = Z.ae;
    Z.Context = Ye;

    function U(a, b) {
        if (!(a instanceof Te)) throw Error("new Firebase() no longer supported - use app.database().");
        X.call(this, a, b, fe, !1);
        this.then = void 0;
        this["catch"] = void 0
    }
    la(U, X);
    g = U.prototype;
    g.getKey = function() {
        x("Firebase.key", 0, 0, arguments.length);
        return this.path.e() ? null : Bd(this.path)
    };
    g.n = function(a) {
        x("Firebase.child", 1, 1, arguments.length);
        if (ga(a)) a = String(a);
        else if (!(a instanceof L))
            if (null === J(this.path)) {
                var b = a;
                b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
                lf("Firebase.child", b)
            } else lf("Firebase.child", a);
        return new U(this.u, this.path.n(a))
    };
    g.getParent = function() {
        x("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return null === a ? null : new U(this.u, a)
    };
    g.Of = function() {
        x("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; null !== a.getParent();) a = a.getParent();
        return a
    };
    g.Gf = function() {
        return this.u.Ya
    };
    g.set = function(a, b) {
        x("Firebase.set", 1, 2, arguments.length);
        mf("Firebase.set", this.path);
        df("Firebase.set", a, this.path, !1);
        A("Firebase.set", 2, b, !0);
        var c = new hb;
        this.u.Jb(this.path, a, null, ib(c, b));
        return c.ra
    };
    g.update = function(a, b) {
        x("Firebase.update", 1, 2, arguments.length);
        mf("Firebase.update", this.path);
        if (ea(a)) {
            for (var c = {}, d = 0; d < a.length; ++d) c["" + d] = a[d];
            a = c;
            O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        gf("Firebase.update", a, this.path);
        A("Firebase.update", 2, b, !0);
        c = new hb;
        this.u.update(this.path, a, ib(c, b));
        return c.ra
    };
    g.Jb = function(a, b, c) {
        x("Firebase.setWithPriority", 2, 3, arguments.length);
        mf("Firebase.setWithPriority", this.path);
        df("Firebase.setWithPriority", a, this.path, !1);
        hf("Firebase.setWithPriority", 2, b);
        A("Firebase.setWithPriority", 3, c, !0);
        if (".length" === this.getKey() || ".keys" === this.getKey()) throw "Firebase.setWithPriority failed: " + this.getKey() + " is a read-only object.";
        var d = new hb;
        this.u.Jb(this.path, a, b, ib(d, c));
        return d.ra
    };
    g.remove = function(a) {
        x("Firebase.remove", 0, 1, arguments.length);
        mf("Firebase.remove", this.path);
        A("Firebase.remove", 1, a, !0);
        return this.set(null, a)
    };
    g.transaction = function(a, b, c) {
        x("Firebase.transaction", 1, 3, arguments.length);
        mf("Firebase.transaction", this.path);
        A("Firebase.transaction", 1, a, !1);
        A("Firebase.transaction", 2, b, !0);
        if (n(c) && "boolean" != typeof c) throw Error(y("Firebase.transaction", 3, !0) + "must be a boolean.");
        if (".length" === this.getKey() || ".keys" === this.getKey()) throw "Firebase.transaction failed: " + this.getKey() + " is a read-only object.";
        "undefined" === typeof c && (c = !0);
        var d = new hb;
        ha(b) && jb(d.ra);
        Fh(this.u, this.path, a, function(a, c, h) {
            a ?
                d.reject(a) : d.resolve(new pb(c, h));
            ha(b) && b(a, c, h)
        }, c);
        return d.ra
    };
    g.kg = function(a, b) {
        x("Firebase.setPriority", 1, 2, arguments.length);
        mf("Firebase.setPriority", this.path);
        hf("Firebase.setPriority", 1, a);
        A("Firebase.setPriority", 2, b, !0);
        var c = new hb;
        this.u.Jb(this.path.n(".priority"), a, null, ib(c, b));
        return c.ra
    };
    g.push = function(a, b) {
        x("Firebase.push", 0, 2, arguments.length);
        mf("Firebase.push", this.path);
        df("Firebase.push", a, this.path, !0);
        A("Firebase.push", 2, b, !0);
        var c = zh(this.u),
            d = uf(c),
            c = this.n(d);
        if (null != a) {
            var e = this,
                f = c.set(a, b).then(function() {
                    return e.n(d)
                });
            c.then = q(f.then, f);
            c["catch"] = q(f.then, f, void 0);
            ha(b) && jb(f)
        }
        return c
    };
    g.ib = function() {
        mf("Firebase.onDisconnect", this.path);
        return new V(this.u, this.path)
    };
    U.prototype.child = U.prototype.n;
    U.prototype.set = U.prototype.set;
    U.prototype.update = U.prototype.update;
    U.prototype.setWithPriority = U.prototype.Jb;
    U.prototype.remove = U.prototype.remove;
    U.prototype.transaction = U.prototype.transaction;
    U.prototype.setPriority = U.prototype.kg;
    U.prototype.push = U.prototype.push;
    U.prototype.onDisconnect = U.prototype.ib;
    Lc(U.prototype, "database", U.prototype.Gf);
    Lc(U.prototype, "key", U.prototype.getKey);
    Lc(U.prototype, "parent", U.prototype.getParent);
    Lc(U.prototype, "root", U.prototype.Of);
    if ("undefined" === typeof firebase) throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
    try {
        firebase.INTERNAL.registerService("database", function(a) {
            var b = Ye.Vb(),
                c = a.options.databaseURL;
            n(c) || Ac("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");
            var d = Bc(c),
                c = d.jc;
            Xe("Invalid Firebase Database URL", d);
            d.path.e() || Ac("Database URL must point to the root of a Firebase Database (not including a child path).");
            (d = w(b.lb, a.name)) && Ac("FIREBASE INTERNAL ERROR: Database initialized multiple times.");
            d = new Te(c, b.wf, a);
            b.lb[a.name] =
                d;
            return d.Ya
        }, {
            Reference: U,
            Query: X,
            Database: Se,
            enableLogging: xc,
            INTERNAL: Y,
            TEST_ACCESS: Z,
            ServerValue: Ve
        })
    } catch (Oh) {
        Ac("Failed to register the Firebase Database Service (" + Oh + ")")
    };
})();

(function() {
    var f = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            for (var d in b)
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, d);
                    e && Object.defineProperty(a, d, e)
                } else a[d] = b[d]
        },
        g = this,
        h = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" !=
                        typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        k = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.B = b.prototype;
            a.prototype = new c;
            a.u = function(a, c, n) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var m = {},
        p = (m["only-available-in-window"] = "This method is available in a Window context.", m["only-available-in-sw"] = "This method is available in a service worker context.", m["should-be-overriden"] = "This method should be overriden by extended classes.", m["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", m["permission-default"] = "The required permissions were not granted and dismissed instead.", m["permission-blocked"] = "The required permissions were not granted and blocked instead.",
            m["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", m["notifications-blocked"] = "Notifications have been blocked.", m["failed-serviceworker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", m["sw-registration-expected"] = "A service worker registration was the expected input.", m["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.", m["invalid-saved-token"] = "Unable to access details of the saved token.",
            m["sw-reg-redundant"] = "The service worker being used for push was made redundant.", m["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$message}", m["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", m["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.", m["use-sw-before-get-token"] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", m["invalid-delete-token"] =
            "You must pass a valid token into deleteToken(), i.e. the token from getToken().", m["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.", m["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.", m["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.", m["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",
            m["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", m["failed-to-delete-token"] = "Unable to delete the currently saved token.", m["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", m["incorrect-gcm-sender-id"] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", m);
    var q = {
        userVisibleOnly: !0,
        applicationServerKey: new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110])
    };
    var r = function(a, b) {
        var c = {};
        return c["firebase-messaging-msg-type"] = a, c["firebase-messaging-msg-data"] = b, c
    };
    var u = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, u);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    k(u, Error);
    var v = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    };
    var w = function(a, b) {
        b.unshift(a);
        u.call(this, v.apply(null, b));
        b.shift()
    };
    k(w, u);
    var x = function(a, b, c) {
        if (!a) {
            var d = "Assertion failed";
            if (b) var d = d + (": " + b),
                e = Array.prototype.slice.call(arguments, 2);
            throw new w("" + d, e || []);
        }
    };
    var y = null;
    var A = function(a) {
        a = new Uint8Array(a);
        var b = h(a);
        x("array" == b || "object" == b && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");
        if (!y)
            for (y = {}, b = 0; 65 > b; b++) y[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
        for (var b = y, c = [], d = 0; d < a.length; d += 3) {
            var e = a[d],
                n = d + 1 < a.length,
                l = n ? a[d + 1] : 0,
                z = d + 2 < a.length,
                t = z ? a[d + 2] : 0,
                M = e >> 2,
                e = (e & 3) << 4 | l >> 4,
                l = (l & 15) << 2 | t >> 6,
                t = t & 63;
            z || (t = 64, n || (l = 64));
            c.push(b[M], b[e], b[l], b[t])
        }
        return c.join("").replace(/\+/g, "-").replace(/\//g,
            "_").replace(/=+$/, "")
    };
    var B = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", p),
        C = function() {
            this.a = null
        },
        D = function(a) {
            if (a.a) return a.a;
            a.a = new Promise(function(a, c) {
                var b = g.indexedDB.open("fcm_token_details_db", 1);
                b.onerror = function(a) {
                    c(a.target.error)
                };
                b.onsuccess = function(b) {
                    a(b.target.result)
                };
                b.onupgradeneeded = function(a) {
                    a = a.target.result.createObjectStore("fcm_token_object_Store", {
                        keyPath: "swScope"
                    });
                    a.createIndex("fcmSenderId", "fcmSenderId", {
                        unique: !1
                    });
                    a.createIndex("fcmToken", "fcmToken", {
                        unique: !0
                    })
                }
            });
            return a.a
        },
        E = function(a) {
            a.a ? a.a.then(function(b) {
                b.close();
                a.a = null
            }) : Promise.resolve()
        },
        F = function(a, b) {
            return D(a).then(function(a) {
                return new Promise(function(c, e) {
                    var d = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);
                    d.onerror = function(a) {
                        e(a.target.error)
                    };
                    d.onsuccess = function(a) {
                        c(a.target.result)
                    }
                })
            })
        },
        G = function(a, b) {
            return D(a).then(function(a) {
                return new Promise(function(c, e) {
                    var d = [],
                        l = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
                    l.onerror = function(a) {
                        e(a.target.error)
                    };
                    l.onsuccess = function(a) {
                        (a = a.target.result) ? (a.value.fcmSenderId === b && d.push(a.value), a.continue()) : c(d)
                    }
                })
            })
        },
        H = function(a, b, c) {
            var d = A(b.getKey("p256dh")),
                e = A(b.getKey("auth"));
            a = "authorized_entity=" + a + "&" + ("endpoint=" + b.endpoint + "&") + ("encryption_key=" + d + "&") + ("encryption_auth=" + e);
            c && (a += "&pushSet=" + c);
            c = new Headers;
            c.append("Content-Type", "application/x-www-form-urlencoded");
            return fetch("https://fcm.googleapis.com/fcm/connect/subscribe", {
                method: "POST",
                headers: c,
                body: a
            }).then(function(a) {
                return a.json()
            }).then(function(a) {
                if (a.error) throw B.create("token-subscribe-failed", {
                    message: a.error.message
                });
                if (!a.token) throw B.create("token-subscribe-no-token");
                if (!a.pushSet) throw B.create("token-subscribe-no-push-set");
                return {
                    token: a.token,
                    pushSet: a.pushSet
                }
            })
        },
        I = function(a, b, c, d, e, n) {
            var l = {
                swScope: c.scope,
                endpoint: d.endpoint,
                auth: A(d.getKey("auth")),
                p256dh: A(d.getKey("p256dh")),
                fcmToken: e,
                fcmPushSet: n,
                fcmSenderId: b
            };
            return D(a).then(function(a) {
                return new Promise(function(b,
                    c) {
                    var d = a.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").put(l);
                    d.onerror = function(a) {
                        c(a.target.error)
                    };
                    d.onsuccess = function() {
                        b()
                    }
                })
            })
        };
    C.prototype.i = function(a, b) {
        return b instanceof ServiceWorkerRegistration ? "string" !== typeof a || 0 === a.length ? Promise.reject(B.create("bad-sender-id")) : G(this, a).then(function(c) {
            if (0 !== c.length) {
                var d = c.findIndex(function(c) {
                    return b.scope === c.swScope && a === c.fcmSenderId
                });
                if (-1 !== d) return c[d]
            }
        }).then(function(a) {
            if (a) return b.pushManager.getSubscription().catch(function() {
                throw B.create("get-subscription-failed");
            }).then(function(b) {
                var c;
                if (c = b) c = b.endpoint === a.endpoint && A(b.getKey("auth")) === a.auth &&
                    A(b.getKey("p256dh")) === a.p256dh;
                if (c) return a.fcmToken
            })
        }) : Promise.reject(B.create("sw-registration-expected"))
    };
    C.prototype.getSavedToken = C.prototype.i;
    C.prototype.h = function(a, b) {
        var c = this;
        return "string" !== typeof a || 0 === a.length ? Promise.reject(B.create("bad-sender-id")) : b instanceof ServiceWorkerRegistration ? b.pushManager.getSubscription().then(function(a) {
            return a ? a : b.pushManager.subscribe(q)
        }).then(function(d) {
            return H(a, d).then(function(e) {
                return I(c, a, b, d, e.token, e.pushSet).then(function() {
                    return e.token
                })
            })
        }) : Promise.reject(B.create("sw-registration-expected"))
    };
    C.prototype.createToken = C.prototype.h;
    C.prototype.deleteToken = function(a) {
        var b = this;
        return "string" !== typeof a || 0 === a.length ? Promise.reject(B.create("invalid-delete-token")) : F(this, a).then(function(a) {
            if (!a) throw B.create("delete-token-not-found");
            return D(b).then(function(b) {
                return new Promise(function(c, d) {
                    var e = b.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);
                    e.onerror = function(a) {
                        d(a.target.error)
                    };
                    e.onsuccess = function(b) {
                        0 === b.target.result ? d(B.create("failed-to-delete-token")) :
                            c(a)
                    }
                })
            })
        })
    };
    var J = function(a) {
        var b = this;
        this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", p);
        if (!a.options.messagingSenderId || "string" !== typeof a.options.messagingSenderId) throw this.a.create("bad-sender-id");
        this.l = a.options.messagingSenderId;
        this.c = new C;
        this.app = a;
        this.INTERNAL = {};
        this.INTERNAL.delete = function() {
            return b.delete
        }
    };
    J.prototype.getToken = function() {
        var a = this,
            b = Notification.permission;
        return "granted" !== b ? "denied" === b ? Promise.reject(this.a.create("notifications-blocked")) : Promise.resolve(null) : this.f().then(function(b) {
            return a.c.i(a.l, b).then(function(c) {
                return c ? c : a.c.h(a.l, b)
            })
        })
    };
    J.prototype.getToken = J.prototype.getToken;
    J.prototype.deleteToken = function(a) {
        var b = this;
        return this.c.deleteToken(a).then(function() {
            return b.f()
        }).then(function(a) {
            return a ? a.pushManager.getSubscription() : null
        }).then(function(a) {
            if (a) return a.unsubscribe()
        })
    };
    J.prototype.deleteToken = J.prototype.deleteToken;
    J.prototype.f = function() {
        throw this.a.create("should-be-overriden");
    };
    J.prototype.requestPermission = function() {
        throw this.a.create("only-available-in-window");
    };
    J.prototype.useServiceWorker = function() {
        throw this.a.create("only-available-in-window");
    };
    J.prototype.useServiceWorker = J.prototype.useServiceWorker;
    J.prototype.onMessage = function() {
        throw this.a.create("only-available-in-window");
    };
    J.prototype.onMessage = J.prototype.onMessage;
    J.prototype.onTokenRefresh = function() {
        throw this.a.create("only-available-in-window");
    };
    J.prototype.onTokenRefresh = J.prototype.onTokenRefresh;
    J.prototype.setBackgroundMessageHandler = function() {
        throw this.a.create("only-available-in-sw");
    };
    J.prototype.setBackgroundMessageHandler = J.prototype.setBackgroundMessageHandler;
    J.prototype.delete = function() {
        E(this.c)
    };
    var K = self,
        P = function(a) {
            J.call(this, a);
            var b = this;
            this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", p);
            K.addEventListener("push", function(a) {
                return L(b, a)
            }, !1);
            K.addEventListener("pushsubscriptionchange", function(a) {
                return N(b, a)
            }, !1);
            K.addEventListener("notificationclick", function(a) {
                return O(b, a)
            }, !1);
            this.b = null
        };
    f(P, J);
    var L = function(a, b) {
            var c;
            try {
                c = b.data.json()
            } catch (e) {
                return
            }
            var d = Q().then(function(b) {
                if (b) {
                    if (c.notification || a.b) return R(a, c)
                } else {
                    if ((b = c) && "object" === typeof b.notification) {
                        var d = Object.assign({}, b.notification),
                            e = {};
                        d.data = (e.FCM_MSG = b, e);
                        b = d
                    } else b = void 0;
                    if (b) return K.registration.showNotification(b.title || "", b);
                    if (a.b) return a.b(c)
                }
            });
            b.waitUntil(d)
        },
        N = function(a, b) {
            var c = a.getToken().then(function(b) {
                if (!b) throw a.a.create("no-fcm-token-for-resubscribe");
                var c = a.c;
                return F(c, b).then(function(b) {
                    if (!b) throw a.a.create("invalid-saved-token");
                    return K.registration.pushManager.subscribe(q).then(function(a) {
                        return H(b.w, a, b.v)
                    }).catch(function(d) {
                        return c.deleteToken(b.A).then(function() {
                            throw a.a.create("unable-to-resubscribe", {
                                message: d
                            });
                        })
                    })
                })
            });
            b.waitUntil(c)
        },
        O = function(a, b) {
            if (b.notification && b.notification.data && b.notification.data.FCM_MSG) {
                b.stopImmediatePropagation();
                b.notification.close();
                var c = b.notification.data.FCM_MSG,
                    d = c.notification.click_action;
                if (d) {
                    var e = S(d).then(function(a) {
                        return a ? a : K.clients.openWindow(d)
                    }).then(function(b) {
                        if (b) return delete c.notification,
                            T(a, b, r("notification-clicked", c))
                    });
                    b.waitUntil(e)
                }
            }
        };
    P.prototype.setBackgroundMessageHandler = function(a) {
        if (a && "function" !== typeof a) throw this.a.create("bg-handler-function-expected");
        this.b = a
    };
    P.prototype.setBackgroundMessageHandler = P.prototype.setBackgroundMessageHandler;
    var S = function(a) {
            var b = (new URL(a)).href;
            return K.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            }).then(function(a) {
                for (var c = null, e = 0; e < a.length; e++)
                    if ((new URL(a[e].url)).href === b) {
                        c = a[e];
                        break
                    }
                if (c) return c.focus(), c
            })
        },
        T = function(a, b, c) {
            return new Promise(function(d, e) {
                if (!b) return e(a.a.create("no-window-client-to-msg"));
                b.postMessage(c);
                d()
            })
        },
        Q = function() {
            return K.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            }).then(function(a) {
                return a.some(function(a) {
                    return "visible" ===
                        a.visibilityState
                })
            })
        },
        R = function(a, b) {
            return K.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            }).then(function(c) {
                var d = r("push-msg-received", b);
                return Promise.all(c.map(function(b) {
                    return T(a, b, d)
                }))
            })
        };
    P.prototype.f = function() {
        return Promise.resolve(K.registration)
    };
    var V = function(a) {
        J.call(this, a);
        var b = this;
        this.j = null;
        this.m = firebase.INTERNAL.createSubscribe(function(a) {
            b.j = a
        });
        this.s = null;
        this.o = firebase.INTERNAL.createSubscribe(function(a) {
            b.s = a
        });
        U(this)
    };
    f(V, J);
    V.prototype.getToken = function() {
        var a = this;
        return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") ? W(this).then(function() {
            return J.prototype.getToken.call(a)
        }) : Promise.reject(this.a.create("unsupported-browser"))
    };
    V.prototype.getToken = V.prototype.getToken;
    var W = function(a) {
        if (a.g) return a.g;
        var b = document.querySelector('link[rel="manifest"]');
        b ? a.g = fetch(b.href).then(function(a) {
            return a.json()
        }).catch(function() {
            return Promise.resolve()
        }).then(function(b) {
            if (b && b.gcm_sender_id && "103953800507" !== b.gcm_sender_id) throw a.a.create("incorrect-gcm-sender-id");
        }) : a.g = Promise.resolve();
        return a.g
    };
    V.prototype.requestPermission = function() {
        var a = this;
        return "granted" === Notification.permission ? Promise.resolve() : new Promise(function(b, c) {
            var d = function(d) {
                    return "granted" === d ? b() : "denied" === d ? c(a.a.create("permission-blocked")) : c(a.a.create("permission-default"))
                },
                e = Notification.requestPermission(function(a) {
                    e || d(a)
                });
            e && e.then(d)
        })
    };
    V.prototype.requestPermission = V.prototype.requestPermission;
    V.prototype.useServiceWorker = function(a) {
        if (!(a instanceof ServiceWorkerRegistration)) throw this.a.create("sw-registration-expected");
        if ("undefined" !== typeof this.b) throw this.a.create("use-sw-before-get-token");
        this.b = a
    };
    V.prototype.useServiceWorker = V.prototype.useServiceWorker;
    V.prototype.onMessage = function(a, b, c) {
        return this.m(a, b, c)
    };
    V.prototype.onMessage = V.prototype.onMessage;
    V.prototype.onTokenRefresh = function(a, b, c) {
        return this.o(a, b, c)
    };
    V.prototype.onTokenRefresh = V.prototype.onTokenRefresh;
    var X = function(a, b) {
        var c = b.installing || b.waiting || b.active;
        return new Promise(function(d, e) {
            if (c)
                if ("activated" === c.state) d(b);
                else if ("redundant" === c.state) e(a.a.create("sw-reg-redundant"));
            else {
                var n = function() {
                    if ("activated" === c.state) d(b);
                    else if ("redundant" === c.state) e(a.a.create("sw-reg-redundant"));
                    else return;
                    c.removeEventListener("statechange", n)
                };
                c.addEventListener("statechange", n)
            } else e(a.a.create("no-sw-in-reg"))
        })
    };
    V.prototype.f = function() {
        var a = this;
        if (this.b) return X(this, this.b);
        this.b = null;
        return navigator.serviceWorker.register("/firebase-messaging-sw.js", {
            scope: "/firebase-cloud-messaging-push-scope"
        }).catch(function(b) {
            throw a.a.create("failed-serviceworker-registration", {
                browserErrorMessage: b.message
            });
        }).then(function(b) {
            return X(a, b).then(function() {
                a.b = b;
                b.update();
                return b
            })
        })
    };
    var U = function(a) {
        "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function(b) {
            if (b.data && b.data["firebase-messaging-msg-type"]) switch (b = b.data, b["firebase-messaging-msg-type"]) {
                case "push-msg-received":
                case "notification-clicked":
                    a.j.next(b["firebase-messaging-msg-data"])
            }
        }, !1)
    };
    if (!(firebase && firebase.INTERNAL && firebase.INTERNAL.registerService)) throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");
    firebase.INTERNAL.registerService("messaging", function(a) {
        return self && "ServiceWorkerGlobalScope" in self ? new P(a) : new V(a)
    }, {
        Messaging: V
    });
}).call(this);
(function() {
    var k, l = this,
        m = function(a) {
            return void 0 !== a
        },
        aa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };
    var p = function(a, b) {
        return -1 !== a.indexOf(b)
    };
    var ba = function(a, b, c) {
        function d() {
            z || (z = !0, b.apply(null, arguments))
        }

        function e(b) {
            n = setTimeout(function() {
                n = null;
                a(f, 2 === C)
            }, b)
        }

        function f(a, b) {
            if (!z)
                if (a) d.apply(null, arguments);
                else if (2 === C || B) d.apply(null, arguments);
            else {
                64 > h && (h *= 2);
                var c;
                1 === C ? (C = 2, c = 0) : c = 1E3 * (h + Math.random());
                e(c)
            }
        }

        function g(a) {
            Ha || (Ha = !0, z || (null !== n ? (a || (C = 2), clearTimeout(n), e(0)) : a || (C = 1)))
        }
        var h = 1,
            n = null,
            B = !1,
            C = 0,
            z = !1,
            Ha = !1;
        e(0);
        setTimeout(function() {
            B = !0;
            g(!0)
        }, c);
        return g
    };
    var q = "https://firebasestorage.googleapis.com";
    var r = function(a, b) {
        this.code = "storage/" + a;
        this.message = "Firebase Storage: " + b;
        this.serverResponse = null;
        this.name = "FirebaseError"
    };
    (function() {
        var a = Error;

        function b() {}
        b.prototype = a.prototype;
        r.b = a.prototype;
        r.prototype = new b;
        r.a = function(b, d, e) {
            for (var c = Array(arguments.length - 2), g = 2; g < arguments.length; g++) c[g - 2] = arguments[g];
            return a.prototype[d].apply(b, c)
        }
    })();
    var ca = function() {
            return new r("unknown", "An unknown error occurred, please check the error payload for server response.")
        },
        da = function() {
            return new r("canceled", "User canceled the upload/download.")
        },
        ea = function() {
            return new r("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.")
        },
        fa = function(a, b, c) {
            return new r("invalid-argument", "Invalid argument in `" + b + "` at index " + a + ": " + c)
        },
        ga = function() {
            return new r("app-deleted", "The Firebase app was deleted.")
        },
        t = function(a, b) {
            return new r("invalid-format",
                "String does not match format '" + a + "': " + b)
        },
        u = function(a) {
            throw new r("internal-error", "Internal error: " + a);
        };
    var v = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        ha = function(a) {
            var b = {};
            v(a, function(a, d) {
                b[a] = d
            });
            return b
        };
    var ia = function(a, b) {
            b = b.split("/").filter(function(a) {
                return 0 < a.length
            }).join("/");
            return 0 === a.length ? b : a + "/" + b
        },
        ja = function(a) {
            var b = a.lastIndexOf("/", a.length - 2);
            return -1 === b ? a : a.slice(b + 1)
        };
    var ka = function(a) {
        if ("undefined" !== typeof firebase) return new firebase.Promise(a);
        throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");
    };
    var w = function(a, b, c, d) {
        this.h = a;
        this.b = {};
        this.method = b;
        this.headers = {};
        this.body = null;
        this.j = c;
        this.l = this.a = null;
        this.c = [200];
        this.g = [];
        this.timeout = d;
        this.f = !0
    };
    var la = {
            STATE_CHANGED: "state_changed"
        },
        x = {
            RUNNING: "running",
            PAUSED: "paused",
            SUCCESS: "success",
            CANCELED: "canceled",
            ERROR: "error"
        },
        ma = function(a) {
            switch (a) {
                case "running":
                case "pausing":
                case "canceling":
                    return "running";
                case "paused":
                    return "paused";
                case "success":
                    return "success";
                case "canceled":
                    return "canceled";
                case "error":
                    return "error";
                default:
                    return "error"
            }
        };
    var y = function(a) {
            return m(a) && null !== a
        },
        na = function(a) {
            return "string" === typeof a || a instanceof String
        },
        oa = function() {
            return "undefined" !== typeof Blob
        };
    var qa = function(a, b) {
        var c = pa;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var ra = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        sa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var A = function(a) {
        return function() {
            var b = [];
            Array.prototype.push.apply(b, arguments);
            firebase.Promise.resolve(!0).then(function() {
                a.apply(null, b)
            })
        }
    };
    var D = function(a, b) {
            this.bucket = a;
            this.path = b
        },
        ta = function(a) {
            var b = encodeURIComponent;
            return "/b/" + b(a.bucket) + "/o/" + b(a.path)
        },
        ua = function(a) {
            for (var b = null, c = [{
                    K: /^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,
                    G: {
                        bucket: 1,
                        path: 3
                    },
                    J: function(a) {
                        "/" === a.path.charAt(a.path.length - 1) && (a.path = a.path.slice(0, -1))
                    }
                }, {
                    K: /^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
                    G: {
                        bucket: 1,
                        path: 3
                    },
                    J: function(a) {
                        a.path = decodeURIComponent(a.path)
                    }
                }], d = 0; d < c.length; d++) {
                var e =
                    c[d],
                    f = e.K.exec(a);
                if (f) {
                    b = f[e.G.bucket];
                    (f = f[e.G.path]) || (f = "");
                    b = new D(b, f);
                    e.J(b);
                    break
                }
            }
            if (null == b) throw new r("invalid-url", "Invalid URL '" + a + "'.");
            return b
        };
    var va = function(a, b, c) {
        "function" == aa(a) || y(b) || y(c) ? (this.c = a, this.a = b || null, this.b = c || null) : (this.c = a.next || null, this.a = a.error || null, this.b = a.complete || null)
    };
    var E = {
            RAW: "raw",
            BASE64: "base64",
            BASE64URL: "base64url",
            DATA_URL: "data_url"
        },
        wa = function(a) {
            switch (a) {
                case "raw":
                case "base64":
                case "base64url":
                case "data_url":
                    break;
                default:
                    throw "Expected one of the event types: [raw, base64, base64url, data_url].";
            }
        },
        xa = function(a, b) {
            this.b = a;
            this.a = b || null
        },
        Ba = function(a, b) {
            switch (a) {
                case "raw":
                    return new xa(ya(b));
                case "base64":
                case "base64url":
                    return new xa(za(a, b));
                case "data_url":
                    a = new Aa(b);
                    var c;
                    if (a.a) c = za("base64", a.c);
                    else {
                        try {
                            c = decodeURIComponent(a.c)
                        } catch (d) {
                            throw t("data_url",
                                "Malformed data URL.");
                        }
                        c = ya(c)
                    }
                    return new xa(c, (new Aa(b)).b)
            }
            throw ca();
        },
        ya = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                if (127 >= d) b.push(d);
                else if (2047 >= d) b.push(192 | d >> 6, 128 | d & 63);
                else if (55296 == (d & 64512))
                    if (c < a.length - 1 && 56320 == (a.charCodeAt(c + 1) & 64512)) {
                        var e = a.charCodeAt(++c),
                            d = 65536 | (d & 1023) << 10 | e & 1023;
                        b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63)
                    } else b.push(239, 191, 189);
                else 56320 == (d & 64512) ? b.push(239, 191, 189) : b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63)
            }
            return new Uint8Array(b)
        },
        za = function(a, b) {
            switch (a) {
                case "base64":
                    var c = -1 !== b.indexOf("-"),
                        d = -1 !== b.indexOf("_");
                    if (c || d) throw t(a, "Invalid character '" + (c ? "-" : "_") + "' found: is it base64url encoded?");
                    break;
                case "base64url":
                    c = -1 !== b.indexOf("+");
                    d = -1 !== b.indexOf("/");
                    if (c || d) throw t(a, "Invalid character '" + (c ? "+" : "/") + "' found: is it base64 encoded?");
                    b = b.replace(/-/g, "+").replace(/_/g, "/")
            }
            var e;
            try {
                e = atob(b)
            } catch (f) {
                throw t(a, "Invalid character found");
            }
            a = new Uint8Array(e.length);
            for (b = 0; b < e.length; b++) a[b] = e.charCodeAt(b);
            return a
        },
        Aa = function(a) {
            var b = a.match(/^data:([^,]+)?,/);
            if (null === b) throw t("data_url", "Must be formatted 'data:[<mediatype>][;base64],<data>");
            b = b[1] || null;
            this.a = !1;
            this.b = null;
            if (null != b) {
                var c = b.length - 7;
                this.b = (this.a = 0 <= c && b.indexOf(";base64", c) == c) ? b.substring(0, b.length - 7) : b
            }
            this.c = a.substring(a.indexOf(",") + 1)
        };
    var Ca = function(a) {
        var b = encodeURIComponent,
            c = "?";
        v(a, function(a, e) {
            a = b(a) + "=" + b(e);
            c = c + a + "&"
        });
        return c = c.slice(0, -1)
    };
    var Da = function() {
            var a = this;
            this.a = new XMLHttpRequest;
            this.c = 0;
            this.f = ka(function(b) {
                a.a.addEventListener("abort", function() {
                    a.c = 2;
                    b(a)
                });
                a.a.addEventListener("error", function() {
                    a.c = 1;
                    b(a)
                });
                a.a.addEventListener("load", function() {
                    b(a)
                })
            });
            this.b = !1
        },
        Ea = function(a, b, c, d, e) {
            if (a.b) throw u("cannot .send() more than once");
            a.b = !0;
            a.a.open(c, b, !0);
            y(e) && v(e, function(b, c) {
                a.a.setRequestHeader(b, c.toString())
            });
            y(d) ? a.a.send(d) : a.a.send();
            return a.f
        },
        Fa = function(a) {
            if (!a.b) throw u("cannot .getErrorCode() before sending");
            return a.c
        },
        F = function(a) {
            if (!a.b) throw u("cannot .getStatus() before sending");
            try {
                return a.a.status
            } catch (b) {
                return -1
            }
        },
        Ga = function(a) {
            if (!a.b) throw u("cannot .getResponseText() before sending");
            return a.a.responseText
        };
    Da.prototype.abort = function() {
        this.a.abort()
    };
    var G = function(a, b, c, d, e, f) {
        this.b = a;
        this.h = b;
        this.f = c;
        this.a = d;
        this.g = e;
        this.c = f
    };
    k = G.prototype;
    k.V = function() {
        return this.b
    };
    k.qa = function() {
        return this.h
    };
    k.na = function() {
        return this.f
    };
    k.ia = function() {
        return this.a
    };
    k.W = function() {
        if (y(this.a)) {
            var a = this.a.downloadURLs;
            return y(a) && y(a[0]) ? a[0] : null
        }
        return null
    };
    k.pa = function() {
        return this.g
    };
    k.la = function() {
        return this.c
    };
    var H;
    a: {
        var Ia = l.navigator;
        if (Ia) {
            var Ja = Ia.userAgent;
            if (Ja) {
                H = Ja;
                break a
            }
        }
        H = ""
    };
    var La = function(a, b, c, d, e, f, g, h, n, B, C) {
            this.C = a;
            this.A = b;
            this.v = c;
            this.o = d;
            this.B = e.slice();
            this.m = f.slice();
            this.j = this.l = this.c = this.b = null;
            this.f = this.g = !1;
            this.s = g;
            this.h = h;
            this.D = C;
            this.w = n;
            var z = this;
            this.u = ka(function(a, b) {
                z.l = a;
                z.j = b;
                Ka(z)
            })
        },
        Ma = function(a, b, c) {
            this.b = a;
            this.c = b;
            this.a = !!c
        },
        Ka = function(a) {
            function b(a, b) {
                b ? a(!1, new Ma(!1, null, !0)) : (b = new Da, b.a.withCredentials = d.D, d.b = b, Ea(b, d.C, d.A, d.o, d.v).then(function(b) {
                    d.b = null;
                    var c = 0 === Fa(b),
                        e = F(b);
                    if (!(c = !c)) var c = p([408, 429], e),
                        f = p(d.m, e),
                        c = 500 <= e && 600 > e || c || f;
                    c ? (b = 2 === Fa(b), a(!1, new Ma(!1, null, b))) : a(!0, new Ma(p(d.B, e), b))
                }))
            }

            function c(a, b) {
                var c = d.l;
                a = d.j;
                var e = b.c;
                if (b.b) try {
                    var f = d.s(e, Ga(e));
                    m(f) ? c(f) : c()
                } catch (B) {
                    a(B)
                } else null !== e ? (b = ca(), f = Ga(e), b.serverResponse = f, d.h ? a(d.h(e, b)) : a(b)) : (b = b.a ? d.f ? ga() : da() : new r("retry-limit-exceeded", "Max retry time for operation exceeded, please try again."), a(b))
            }
            var d = a;
            a.g ? c(0, new Ma(!1, null, !0)) : a.c = ba(b, c, a.w)
        };
    La.prototype.a = function() {
        return this.u
    };
    La.prototype.cancel = function(a) {
        this.g = !0;
        this.f = a || !1;
        null !== this.c && (0, this.c)(!1);
        null !== this.b && this.b.abort()
    };
    var Na = function(a, b, c) {
        var d = Ca(a.b),
            d = a.h + d,
            e = a.headers ? ha(a.headers) : {};
        null !== b && 0 < b.length && (e.Authorization = "Firebase " + b);
        e["X-Firebase-Storage-Version"] = "webjs/" + ("undefined" !== typeof firebase ? firebase.SDK_VERSION : "AppManager");
        return new La(d, a.method, e, a.body, a.c, a.g, a.j, a.a, a.timeout, 0, c)
    };
    var Oa = function() {};
    var Pa = function(a) {
        this.b = firebase.Promise.reject(a)
    };
    Pa.prototype.a = function() {
        return this.b
    };
    Pa.prototype.cancel = function() {};
    var Qa = function() {
            this.a = {};
            this.b = Number.MIN_SAFE_INTEGER
        },
        Ra = function(a, b) {
            function c() {
                delete e.a[d]
            }
            var d = a.b;
            a.b++;
            a.a[d] = b;
            var e = a;
            b.a().then(c, c)
        },
        Sa = function(a) {
            v(a.a, function(a, c) {
                c && c.cancel(!0)
            });
            a.a = {}
        };
    var Ta = function(a, b, c, d, e) {
            this.a = a;
            this.g = null;
            if (null !== this.a && (a = this.a.options, y(a))) {
                a = a.storageBucket || null;
                if (null == a) a = null;
                else {
                    var f = null;
                    try {
                        f = ua(a)
                    } catch (g) {}
                    if (null !== f) {
                        if ("" !== f.path) throw new r("invalid-default-bucket", "Invalid default bucket '" + a + "'.");
                        a = f.bucket
                    }
                }
                this.g = a
            }
            this.o = b;
            this.m = c;
            this.j = e;
            this.l = d;
            this.c = 12E4;
            this.b = 6E4;
            this.h = new Qa;
            this.f = !1
        },
        Ua = function(a) {
            return null !== a.a && y(a.a.INTERNAL) && y(a.a.INTERNAL.getToken) ? a.a.INTERNAL.getToken().then(function(a) {
                return y(a) ?
                    a.accessToken : null
            }, function() {
                return null
            }) : firebase.Promise.resolve(null)
        };
    Ta.prototype.bucket = function() {
        if (this.f) throw ga();
        return this.g
    };
    var I = function(a, b, c) {
        if (a.f) return new Pa(ga());
        b = a.m(b, c, null === a.a, a.j);
        Ra(a.h, b);
        return b
    };
    var Va = -1 != H.indexOf("Opera"),
        Wa = -1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE"),
        Xa = -1 != H.indexOf("Edge"),
        Ya = -1 != H.indexOf("Gecko") && !(-1 != H.toLowerCase().indexOf("webkit") && -1 == H.indexOf("Edge")) && !(-1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE")) && -1 == H.indexOf("Edge"),
        Za = -1 != H.toLowerCase().indexOf("webkit") && -1 == H.indexOf("Edge"),
        $a;
    a: {
        var ab = "",
            bb = function() {
                var a = H;
                if (Ya) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Xa) return /Edge\/([\d\.]+)/.exec(a);
                if (Wa) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Za) return /WebKit\/(\S+)/.exec(a);
                if (Va) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();bb && (ab = bb ? bb[1] : "");
        if (Wa) {
            var cb, db = l.document;
            cb = db ? db.documentMode : void 0;
            if (null != cb && cb > parseFloat(ab)) {
                $a = String(cb);
                break a
            }
        }
        $a = ab
    }
    var eb = $a,
        pa = {},
        fb = function(a) {
            return qa(a, function() {
                for (var b = 0, c = ra(String(eb)).split("."), d = ra(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == h[0].length) break;
                        b = sa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || sa(0 == g[2].length, 0 == h[2].length) || sa(g[2], h[2]);
                        g = g[3];
                        h = h[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        };
    var gb = function(a) {
            var b = l.BlobBuilder || l.WebKitBlobBuilder;
            if (m(b)) {
                for (var b = new b, c = 0; c < arguments.length; c++) b.append(arguments[c]);
                return b.getBlob()
            }
            b = Array.prototype.slice.call(arguments);
            c = l.BlobBuilder || l.WebKitBlobBuilder;
            if (m(c)) {
                for (var c = new c, d = 0; d < b.length; d++) c.append(b[d], void 0);
                b = c.getBlob(void 0)
            } else if (m(l.Blob)) b = new Blob(b, {});
            else throw Error("This browser doesn't seem to support creating Blobs");
            return b
        },
        hb = function(a, b, c) {
            m(c) || (c = a.size);
            return a.webkitSlice ? a.webkitSlice(b,
                c) : a.mozSlice ? a.mozSlice(b, c) : a.slice ? Ya && !fb("13.0") || Za && !fb("537.1") ? (0 > b && (b += a.size), 0 > b && (b = 0), 0 > c && (c += a.size), c < b && (c = b), a.slice(b, c - b)) : a.slice(b, c) : null
        };
    var ib = function(a, b) {
            return b
        },
        J = function(a, b, c, d) {
            this.c = a;
            this.b = b || a;
            this.writable = !!c;
            this.a = d || ib
        },
        jb = null,
        kb = function() {
            if (jb) return jb;
            var a = [];
            a.push(new J("bucket"));
            a.push(new J("generation"));
            a.push(new J("metageneration"));
            a.push(new J("name", "fullPath", !0));
            var b = new J("name");
            b.a = function(a, b) {
                return !na(b) || 2 > b.length ? b : ja(b)
            };
            a.push(b);
            b = new J("size");
            b.a = function(a, b) {
                return y(b) ? +b : b
            };
            a.push(b);
            a.push(new J("timeCreated"));
            a.push(new J("updated"));
            a.push(new J("md5Hash", null, !0));
            a.push(new J("cacheControl", null, !0));
            a.push(new J("contentDisposition", null, !0));
            a.push(new J("contentEncoding", null, !0));
            a.push(new J("contentLanguage", null, !0));
            a.push(new J("contentType", null, !0));
            a.push(new J("metadata", "customMetadata", !0));
            a.push(new J("downloadTokens", "downloadURLs", !1, function(a, b) {
                if (!(na(b) && 0 < b.length)) return [];
                var c = encodeURIComponent;
                return b.split(",").map(function(b) {
                    var d = a.fullPath,
                        d = "https://firebasestorage.googleapis.com/v0" + ("/b/" + c(a.bucket) + "/o/" + c(d));
                    b = Ca({
                        alt: "media",
                        token: b
                    });
                    return d + b
                })
            }));
            return jb = a
        },
        lb = function(a, b) {
            Object.defineProperty(a, "ref", {
                get: function() {
                    return b.o(b, new D(a.bucket, a.fullPath))
                }
            })
        },
        mb = function(a, b) {
            for (var c = {}, d = b.length, e = 0; e < d; e++) {
                var f = b[e];
                f.writable && (c[f.c] = a[f.b])
            }
            return JSON.stringify(c)
        },
        nb = function(a) {
            if (!a || "object" !== typeof a) throw "Expected Metadata object.";
            for (var b in a) {
                var c = a[b];
                if ("customMetadata" === b && "object" !== typeof c) throw "Expected object for 'customMetadata' mapping.";
            }
        };
    var K = function(a, b, c) {
            for (var d = b.length, e = b.length, f = 0; f < b.length; f++)
                if (b[f].b) {
                    d = f;
                    break
                }
            if (!(d <= c.length && c.length <= e)) throw d === e ? (b = d, d = 1 === d ? "argument" : "arguments") : (b = "between " + d + " and " + e, d = "arguments"), new r("invalid-argument-count", "Invalid argument count in `" + a + "`: Expected " + b + " " + d + ", received " + c.length + ".");
            for (f = 0; f < c.length; f++) try {
                b[f].a(c[f])
            } catch (g) {
                if (g instanceof Error) throw fa(f, a, g.message);
                throw fa(f, a, g);
            }
        },
        L = function(a, b) {
            var c = this;
            this.a = function(b) {
                c.b && !m(b) || a(b)
            };
            this.b = !!b
        },
        ob = function(a, b) {
            return function(c) {
                a(c);
                b(c)
            }
        },
        M = function(a, b) {
            function c(a) {
                if (!("string" === typeof a || a instanceof String)) throw "Expected string.";
            }
            var d;
            a ? d = ob(c, a) : d = c;
            return new L(d, b)
        },
        pb = function() {
            return new L(function(a) {
                if (!(a instanceof Uint8Array || a instanceof ArrayBuffer || oa() && a instanceof Blob)) throw "Expected Blob or File.";
            })
        },
        qb = function() {
            return new L(function(a) {
                if (!(("number" === typeof a || a instanceof Number) && 0 <= a)) throw "Expected a number 0 or greater.";
            })
        },
        rb = function(a,
            b) {
            return new L(function(b) {
                if (!(null === b || y(b) && b instanceof Object)) throw "Expected an Object.";
                y(a) && a(b)
            }, b)
        },
        N = function() {
            return new L(function(a) {
                if (null !== a && "function" != aa(a)) throw "Expected a Function.";
            }, !0)
        };
    var O = function(a, b) {
        oa() && a instanceof Blob ? (this.i = a, b = a.size, a = a.type) : (a instanceof ArrayBuffer ? (b ? this.i = new Uint8Array(a) : (this.i = new Uint8Array(a.byteLength), this.i.set(new Uint8Array(a))), b = this.i.length) : (b ? this.i = a : (this.i = new Uint8Array(a.length), this.i.set(a)), b = a.length), a = "");
        this.a = b;
        this.b = a
    };
    O.prototype.type = function() {
        return this.b
    };
    O.prototype.slice = function(a, b) {
        if (oa() && this.i instanceof Blob) return a = hb(this.i, a, b), null === a ? null : new O(a);
        a = new Uint8Array(this.i.buffer, a, b - a);
        return new O(a, !0)
    };
    var sb = function(a) {
        var b = [];
        Array.prototype.push.apply(b, arguments);
        if (oa()) return b = b.map(function(a) {
            return a instanceof O ? a.i : a
        }), new O(gb.apply(null, b));
        var b = b.map(function(a) {
                return na(a) ? Ba("raw", a).b.buffer : a.i.buffer
            }),
            c = 0;
        b.forEach(function(a) {
            c += a.byteLength
        });
        var d = new Uint8Array(c),
            e = 0;
        b.forEach(function(a) {
            a = new Uint8Array(a);
            for (var b = 0; b < a.length; b++) d[e++] = a[b]
        });
        return new O(d, !0)
    };
    var P = function(a) {
            if (!a) throw ca();
        },
        tb = function(a, b) {
            return function(c, d) {
                var e;
                a: {
                    try {
                        e = JSON.parse(d)
                    } catch (h) {
                        e = null;
                        break a
                    }
                    c = typeof e;e = "object" == c && null != e || "function" == c ? e : null
                }
                if (null === e) e = null;
                else {
                    c = {
                        type: "file"
                    };
                    d = b.length;
                    for (var f = 0; f < d; f++) {
                        var g = b[f];
                        c[g.b] = g.a(c, e[g.c])
                    }
                    lb(c, a);
                    e = c
                }
                P(null !== e);
                return e
            }
        },
        Q = function(a) {
            return function(b, c) {
                b = 401 === F(b) ? new r("unauthenticated", "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === F(b) ?
                    new r("quota-exceeded", "Quota for bucket '" + a.bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.") : 403 === F(b) ? new r("unauthorized", "User does not have permission to access '" + a.path + "'.") : c;
                b.serverResponse = c.serverResponse;
                return b
            }
        },
        ub = function(a) {
            var b = Q(a);
            return function(c, d) {
                var e = b(c, d);
                404 === F(c) && (e = new r("object-not-found", "Object '" + a.path + "' does not exist."));
                e.serverResponse = d.serverResponse;
                return e
            }
        },
        vb = function(a, b, c) {
            var d = ta(b);
            a = new w(q + "/v0" + d, "GET",
                tb(a, c), a.c);
            a.a = ub(b);
            return a
        },
        wb = function(a, b) {
            var c = ta(b);
            a = new w(q + "/v0" + c, "DELETE", function() {}, a.c);
            a.c = [200, 204];
            a.a = ub(b);
            return a
        },
        xb = function(a, b, c) {
            c = c ? ha(c) : {};
            c.fullPath = a.path;
            c.size = b.a;
            c.contentType || (a = b && b.type() || "application/octet-stream", c.contentType = a);
            return c
        },
        yb = function(a, b, c, d, e) {
            var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
                g = {
                    "X-Goog-Upload-Protocol": "multipart"
                },
                h;
            h = "";
            for (var n = 0; 2 > n; n++) h += Math.random().toString().slice(2);
            g["Content-Type"] = "multipart/related; boundary=" +
                h;
            e = xb(b, d, e);
            n = mb(e, c);
            d = sb("--" + h + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + n + "\r\n--" + h + "\r\nContent-Type: " + e.contentType + "\r\n\r\n", d, "\r\n--" + h + "--");
            if (null === d) throw ea();
            a = new w(q + "/v0" + f, "POST", tb(a, c), a.b);
            a.b = {
                name: e.fullPath
            };
            a.headers = g;
            a.body = d.i;
            a.a = Q(b);
            return a
        },
        zb = function(a, b, c, d) {
            this.a = a;
            this.b = b;
            this.c = !!c;
            this.f = d || null
        },
        Ab = function(a, b) {
            var c;
            try {
                c = a.a.getResponseHeader("X-Goog-Upload-Status")
            } catch (d) {
                P(!1)
            }
            P(p(b || ["active"], c));
            return c
        },
        Bb = function(a,
            b, c, d, e) {
            var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
                g = xb(b, d, e);
            e = {
                name: g.fullPath
            };
            f = q + "/v0" + f;
            d = {
                "X-Goog-Upload-Protocol": "resumable",
                "X-Goog-Upload-Command": "start",
                "X-Goog-Upload-Header-Content-Length": d.a,
                "X-Goog-Upload-Header-Content-Type": g.contentType,
                "Content-Type": "application/json; charset=utf-8"
            };
            c = mb(g, c);
            a = new w(f, "POST", function(a) {
                Ab(a);
                var b;
                try {
                    b = a.a.getResponseHeader("X-Goog-Upload-URL")
                } catch (B) {
                    P(!1)
                }
                P(na(b));
                return b
            }, a.b);
            a.b = e;
            a.headers = d;
            a.body = c;
            a.a = Q(b);
            return a
        },
        Cb =
        function(a, b, c, d) {
            a = new w(c, "POST", function(a) {
                var b = Ab(a, ["active", "final"]),
                    c;
                try {
                    c = a.a.getResponseHeader("X-Goog-Upload-Size-Received")
                } catch (h) {
                    P(!1)
                }
                a = c;
                isFinite(a) && (a = String(a));
                a = "string" == typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
                P(!isNaN(a));
                return new zb(a, d.a, "final" === b)
            }, a.b);
            a.headers = {
                "X-Goog-Upload-Command": "query"
            };
            a.a = Q(b);
            a.f = !1;
            return a
        },
        Db = function(a, b, c, d, e, f, g) {
            var h = new zb(0, 0);
            g ? (h.a = g.a, h.b = g.b) : (h.a = 0, h.b = d.a);
            if (d.a !== h.b) throw new r("server-file-wrong-size",
                "Server recorded incorrect upload file size, please retry the upload.");
            var n = g = h.b - h.a;
            0 < e && (n = Math.min(n, e));
            var B = h.a;
            e = {
                "X-Goog-Upload-Command": n === g ? "upload, finalize" : "upload",
                "X-Goog-Upload-Offset": h.a
            };
            g = d.slice(B, B + n);
            if (null === g) throw ea();
            c = new w(c, "POST", function(a, c) {
                var e = Ab(a, ["active", "final"]),
                    g = h.a + n,
                    C = d.a,
                    z;
                "final" === e ? z = tb(b, f)(a, c) : z = null;
                return new zb(g, C, "final" === e, z)
            }, b.b);
            c.headers = e;
            c.body = g.i;
            c.l = null;
            c.a = Q(a);
            c.f = !1;
            return c
        };
    var T = function(a, b, c, d, e, f) {
            this.L = a;
            this.c = b;
            this.l = c;
            this.f = e;
            this.h = f || null;
            this.s = d;
            this.m = 0;
            this.D = this.u = !1;
            this.B = [];
            this.S = 262144 < this.f.a;
            this.b = "running";
            this.a = this.v = this.g = null;
            this.j = 1;
            var g = this;
            this.F = function(a) {
                g.a = null;
                g.j = 1;
                "storage/canceled" === a.code ? (g.u = !0, R(g)) : (g.g = a, S(g, "error"))
            };
            this.P = function(a) {
                g.a = null;
                "storage/canceled" === a.code ? R(g) : (g.g = a, S(g, "error"))
            };
            this.A = this.o = null;
            this.C = ka(function(a, b) {
                g.o = a;
                g.A = b;
                Eb(g)
            });
            this.C.then(null, function() {})
        },
        Eb = function(a) {
            "running" ===
            a.b && null === a.a && (a.S ? null === a.v ? Fb(a) : a.u ? Gb(a) : a.D ? Hb(a) : Ib(a) : Jb(a))
        },
        U = function(a, b) {
            Ua(a.c).then(function(c) {
                switch (a.b) {
                    case "running":
                        b(c);
                        break;
                    case "canceling":
                        S(a, "canceled");
                        break;
                    case "pausing":
                        S(a, "paused")
                }
            })
        },
        Fb = function(a) {
            U(a, function(b) {
                var c = Bb(a.c, a.l, a.s, a.f, a.h);
                a.a = I(a.c, c, b);
                a.a.a().then(function(b) {
                    a.a = null;
                    a.v = b;
                    a.u = !1;
                    R(a)
                }, this.F)
            })
        },
        Gb = function(a) {
            var b = a.v;
            U(a, function(c) {
                var d = Cb(a.c, a.l, b, a.f);
                a.a = I(a.c, d, c);
                a.a.a().then(function(b) {
                    a.a = null;
                    Kb(a, b.a);
                    a.u = !1;
                    b.c && (a.D = !0);
                    R(a)
                }, a.F)
            })
        },
        Ib = function(a) {
            var b = 262144 * a.j,
                c = new zb(a.m, a.f.a),
                d = a.v;
            U(a, function(e) {
                var f;
                try {
                    f = Db(a.l, a.c, d, a.f, b, a.s, c)
                } catch (g) {
                    a.g = g;
                    S(a, "error");
                    return
                }
                a.a = I(a.c, f, e);
                a.a.a().then(function(b) {
                    33554432 > 262144 * a.j && (a.j *= 2);
                    a.a = null;
                    Kb(a, b.a);
                    b.c ? (a.h = b.f, S(a, "success")) : R(a)
                }, a.F)
            })
        },
        Hb = function(a) {
            U(a, function(b) {
                var c = vb(a.c, a.l, a.s);
                a.a = I(a.c, c, b);
                a.a.a().then(function(b) {
                    a.a = null;
                    a.h = b;
                    S(a, "success")
                }, a.P)
            })
        },
        Jb = function(a) {
            U(a, function(b) {
                var c = yb(a.c, a.l, a.s, a.f, a.h);
                a.a = I(a.c, c,
                    b);
                a.a.a().then(function(b) {
                    a.a = null;
                    a.h = b;
                    Kb(a, a.f.a);
                    S(a, "success")
                }, a.F)
            })
        },
        Kb = function(a, b) {
            var c = a.m;
            a.m = b;
            a.m > c && V(a)
        },
        S = function(a, b) {
            if (a.b !== b) switch (b) {
                case "canceling":
                    a.b = b;
                    null !== a.a && a.a.cancel();
                    break;
                case "pausing":
                    a.b = b;
                    null !== a.a && a.a.cancel();
                    break;
                case "running":
                    var c = "paused" === a.b;
                    a.b = b;
                    c && (V(a), Eb(a));
                    break;
                case "paused":
                    a.b = b;
                    V(a);
                    break;
                case "canceled":
                    a.g = da();
                    a.b = b;
                    V(a);
                    break;
                case "error":
                    a.b = b;
                    V(a);
                    break;
                case "success":
                    a.b = b, V(a)
            }
        },
        R = function(a) {
            switch (a.b) {
                case "pausing":
                    S(a,
                        "paused");
                    break;
                case "canceling":
                    S(a, "canceled");
                    break;
                case "running":
                    Eb(a)
            }
        };
    T.prototype.w = function() {
        return new G(this.m, this.f.a, ma(this.b), this.h, this, this.L)
    };
    T.prototype.M = function(a, b, c, d) {
        function e(a) {
            try {
                g(a);
                return
            } catch (z) {}
            try {
                if (h(a), !(m(a.next) || m(a.error) || m(a.complete))) throw "";
            } catch (z) {
                throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
            }
        }

        function f(a) {
            return function(b, c, d) {
                null !== a && K("on", a, arguments);
                var e = new va(b, c, d);
                Lb(n, e);
                return function() {
                    var a = n.B,
                        b = a.indexOf(e); - 1 !== b && a.splice(b, 1)
                }
            }
        }
        var g = N().a,
            h = rb(null, !0).a;
        K("on", [M(function() {
            if ("state_changed" !== a) throw "Expected one of the event types: [state_changed].";
        }), rb(e, !0), N(), N()], arguments);
        var n = this,
            B = [rb(function(a) {
                if (null === a) throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
                e(a)
            }), N(), N()];
        return m(b) || m(c) || m(d) ? f(null)(b, c, d) : f(B)
    };
    T.prototype.then = function(a, b) {
        return this.C.then(a, b)
    };
    var Lb = function(a, b) {
            a.B.push(b);
            Mb(a, b)
        },
        V = function(a) {
            Nb(a);
            Array.prototype.slice.call(a.B).forEach(function(b) {
                Mb(a, b)
            })
        },
        Nb = function(a) {
            if (null !== a.o) {
                var b = !0;
                switch (ma(a.b)) {
                    case "success":
                        A(a.o.bind(null, a.w()))();
                        break;
                    case "canceled":
                    case "error":
                        A(a.A.bind(null, a.g))();
                        break;
                    default:
                        b = !1
                }
                b && (a.o = null, a.A = null)
            }
        },
        Mb = function(a, b) {
            switch (ma(a.b)) {
                case "running":
                case "paused":
                    null !== b.c && A(b.c.bind(b, a.w()))();
                    break;
                case "success":
                    null !== b.b && A(b.b.bind(b))();
                    break;
                case "canceled":
                case "error":
                    null !==
                        b.a && A(b.a.bind(b, a.g))();
                    break;
                default:
                    null !== b.a && A(b.a.bind(b, a.g))()
            }
        };
    T.prototype.O = function() {
        K("resume", [], arguments);
        var a = "paused" === this.b || "pausing" === this.b;
        a && S(this, "running");
        return a
    };
    T.prototype.N = function() {
        K("pause", [], arguments);
        var a = "running" === this.b;
        a && S(this, "pausing");
        return a
    };
    T.prototype.cancel = function() {
        K("cancel", [], arguments);
        var a = "running" === this.b || "pausing" === this.b;
        a && S(this, "canceling");
        return a
    };
    var W = function(a, b) {
        this.b = a;
        if (b) this.a = b instanceof D ? b : ua(b);
        else if (a = a.bucket(), null !== a) this.a = new D(a, "");
        else throw new r("no-default-bucket", "No default bucket found. Did you set the 'storageBucket' property when initializing the app?");
    };
    W.prototype.toString = function() {
        K("toString", [], arguments);
        return "gs://" + this.a.bucket + "/" + this.a.path
    };
    var Ob = function(a, b) {
        return new W(a, b)
    };
    k = W.prototype;
    k.H = function(a) {
        K("child", [M()], arguments);
        var b = ia(this.a.path, a);
        return Ob(this.b, new D(this.a.bucket, b))
    };
    k.ka = function() {
        var a;
        a = this.a.path;
        if (0 == a.length) a = null;
        else {
            var b = a.lastIndexOf("/");
            a = -1 === b ? "" : a.slice(0, b)
        }
        return null === a ? null : Ob(this.b, new D(this.a.bucket, a))
    };
    k.ma = function() {
        return Ob(this.b, new D(this.a.bucket, ""))
    };
    k.U = function() {
        return this.a.bucket
    };
    k.fa = function() {
        return this.a.path
    };
    k.ja = function() {
        return ja(this.a.path)
    };
    k.oa = function() {
        return this.b.l
    };
    k.Z = function(a, b) {
        K("put", [pb(), new L(nb, !0)], arguments);
        X(this, "put");
        return new T(this, this.b, this.a, kb(), new O(a), b)
    };
    k.$ = function(a, b, c) {
        K("putString", [M(), M(wa, !0), new L(nb, !0)], arguments);
        X(this, "putString");
        var d = Ba(y(b) ? b : "raw", a),
            e = c ? ha(c) : {};
        !y(e.contentType) && y(d.a) && (e.contentType = d.a);
        return new T(this, this.b, this.a, kb(), new O(d.b, !0), e)
    };
    k.X = function() {
        K("delete", [], arguments);
        X(this, "delete");
        var a = this;
        return Ua(this.b).then(function(b) {
            var c = wb(a.b, a.a);
            return I(a.b, c, b).a()
        })
    };
    k.I = function() {
        K("getMetadata", [], arguments);
        X(this, "getMetadata");
        var a = this;
        return Ua(this.b).then(function(b) {
            var c = vb(a.b, a.a, kb());
            return I(a.b, c, b).a()
        })
    };
    k.aa = function(a) {
        K("updateMetadata", [new L(nb, void 0)], arguments);
        X(this, "updateMetadata");
        var b = this;
        return Ua(this.b).then(function(c) {
            var d = b.b,
                e = b.a,
                f = a,
                g = kb(),
                h = ta(e),
                h = q + "/v0" + h,
                f = mb(f, g),
                d = new w(h, "PATCH", tb(d, g), d.c);
            d.headers = {
                "Content-Type": "application/json; charset=utf-8"
            };
            d.body = f;
            d.a = ub(e);
            return I(b.b, d, c).a()
        })
    };
    k.Y = function() {
        K("getDownloadURL", [], arguments);
        X(this, "getDownloadURL");
        return this.I().then(function(a) {
            a = a.downloadURLs[0];
            if (y(a)) return a;
            throw new r("no-download-url", "The given file does not have any download URLs.");
        })
    };
    var X = function(a, b) {
        if ("" === a.a.path) throw new r("invalid-root-operation", "The operation '" + b + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
    };
    var Y = function(a, b) {
        this.a = new Ta(a, function(a, b) {
            return new W(a, b)
        }, Na, this, y(b) ? b : new Oa);
        this.b = a;
        this.c = new Pb(this)
    };
    k = Y.prototype;
    k.ba = function(a) {
        K("ref", [M(function(a) {
            if (/^[A-Za-z]+:\/\//.test(a)) throw "Expected child path but got a URL, use refFromURL instead.";
        }, !0)], arguments);
        var b = new W(this.a);
        return m(a) ? b.H(a) : b
    };
    k.ca = function(a) {
        K("refFromURL", [M(function(a) {
            if (!/^[A-Za-z]+:\/\//.test(a)) throw "Expected full URL but got a child path, use ref instead.";
            try {
                ua(a)
            } catch (c) {
                throw "Expected valid full URL but got an invalid one.";
            }
        }, !1)], arguments);
        return new W(this.a, a)
    };
    k.ha = function() {
        return this.a.b
    };
    k.ea = function(a) {
        K("setMaxUploadRetryTime", [qb()], arguments);
        this.a.b = a
    };
    k.ga = function() {
        return this.a.c
    };
    k.da = function(a) {
        K("setMaxOperationRetryTime", [qb()], arguments);
        this.a.c = a
    };
    k.T = function() {
        return this.b
    };
    k.R = function() {
        return this.c
    };
    var Pb = function(a) {
        this.a = a
    };
    Pb.prototype.b = function() {
        var a = this.a.a;
        a.f = !0;
        a.a = null;
        Sa(a.h)
    };
    var Z = function(a, b, c) {
        Object.defineProperty(a, b, {
            get: c
        })
    };
    W.prototype.toString = W.prototype.toString;
    W.prototype.child = W.prototype.H;
    W.prototype.put = W.prototype.Z;
    W.prototype.putString = W.prototype.$;
    W.prototype["delete"] = W.prototype.X;
    W.prototype.getMetadata = W.prototype.I;
    W.prototype.updateMetadata = W.prototype.aa;
    W.prototype.getDownloadURL = W.prototype.Y;
    Z(W.prototype, "parent", W.prototype.ka);
    Z(W.prototype, "root", W.prototype.ma);
    Z(W.prototype, "bucket", W.prototype.U);
    Z(W.prototype, "fullPath", W.prototype.fa);
    Z(W.prototype, "name", W.prototype.ja);
    Z(W.prototype, "storage", W.prototype.oa);
    Y.prototype.ref = Y.prototype.ba;
    Y.prototype.refFromURL = Y.prototype.ca;
    Z(Y.prototype, "maxOperationRetryTime", Y.prototype.ga);
    Y.prototype.setMaxOperationRetryTime = Y.prototype.da;
    Z(Y.prototype, "maxUploadRetryTime", Y.prototype.ha);
    Y.prototype.setMaxUploadRetryTime = Y.prototype.ea;
    Z(Y.prototype, "app", Y.prototype.T);
    Z(Y.prototype, "INTERNAL", Y.prototype.R);
    Pb.prototype["delete"] = Pb.prototype.b;
    Y.prototype.capi_ = function(a) {
        q = a
    };
    T.prototype.on = T.prototype.M;
    T.prototype.resume = T.prototype.O;
    T.prototype.pause = T.prototype.N;
    T.prototype.cancel = T.prototype.cancel;
    Z(T.prototype, "snapshot", T.prototype.w);
    Z(G.prototype, "bytesTransferred", G.prototype.V);
    Z(G.prototype, "totalBytes", G.prototype.qa);
    Z(G.prototype, "state", G.prototype.na);
    Z(G.prototype, "metadata", G.prototype.ia);
    Z(G.prototype, "downloadURL", G.prototype.W);
    Z(G.prototype, "task", G.prototype.pa);
    Z(G.prototype, "ref", G.prototype.la);
    la.STATE_CHANGED = "state_changed";
    x.RUNNING = "running";
    x.PAUSED = "paused";
    x.SUCCESS = "success";
    x.CANCELED = "canceled";
    x.ERROR = "error";
    E.RAW = "raw";
    E.BASE64 = "base64";
    E.BASE64URL = "base64url";
    E.DATA_URL = "data_url";
    (function() {
        function a(a) {
            return new Y(a)
        }
        var b = {
            TaskState: x,
            TaskEvent: la,
            StringFormat: E,
            Storage: Y,
            Reference: W
        };
        if ("undefined" !== typeof firebase) firebase.INTERNAL.registerService("storage", a, b);
        else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");
    })();
}).call(this);
