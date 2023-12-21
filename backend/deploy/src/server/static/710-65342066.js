'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [710],
    {
        2285: (e, t, r) => {
            r.d(t, { v: () => i });
            var n = r(7294),
                o = r(4320);
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r)
                                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    l.apply(this, arguments)
                );
            }
            var i = n.memo(
                n.forwardRef(function (e, t) {
                    var r = o.A.getPTI(e);
                    return n.createElement(
                        'svg',
                        l(
                            {
                                ref: t,
                                width: '14',
                                height: '14',
                                viewBox: '0 0 14 14',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                            },
                            r,
                        ),
                        n.createElement('path', {
                            d: 'M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z',
                            fill: 'currentColor',
                        }),
                    );
                }),
            );
            i.displayName = 'ChevronDownIcon';
        },
        519: (e, t, r) => {
            r.d(t, { F: () => n });
            var n = (0, r(3643).Nd)();
        },
        243: (e, t, r) => {
            r.d(t, { J: () => v });
            var n = r(7294),
                o = r(3308),
                l = r(3643),
                i = r(3652),
                s = r(5807),
                c = r(6367);
            function a() {
                return (
                    (a = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r)
                                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    a.apply(this, arguments)
                );
            }
            function u(e) {
                return (
                    (u =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              }),
                    u(e)
                );
            }
            function f(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e, t) {
                            if ('object' !== u(e) || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, 'string');
                                if ('object' !== u(n)) return n;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' === u(t) ? t : String(t);
                    })(t)) in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function m(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e
                                ? null
                                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                  e['@@iterator'];
                        if (null != r) {
                            var n,
                                o,
                                l,
                                i,
                                s = [],
                                c = !0,
                                a = !1;
                            try {
                                if (((l = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    c = !1;
                                } else
                                    for (
                                        ;
                                        !(c = (n = l.call(r)).done) &&
                                        (s.push(n.value), s.length !== t);
                                        c = !0
                                    );
                            } catch (e) {
                                (a = !0), (o = e);
                            } finally {
                                try {
                                    if (
                                        !c &&
                                        null != r.return &&
                                        ((i = r.return()), Object(i) !== i)
                                    )
                                        return;
                                } finally {
                                    if (a) throw o;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return p(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                    ? p(e, t)
                                    : void 0
                            );
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            var d = i.V.extend({
                defaultProps: {
                    __TYPE: 'VirtualScroller',
                    __parentMetadata: null,
                    id: null,
                    style: null,
                    className: null,
                    tabIndex: 0,
                    items: null,
                    itemSize: 0,
                    scrollHeight: null,
                    scrollWidth: null,
                    orientation: 'vertical',
                    step: 0,
                    numToleratedItems: null,
                    delay: 0,
                    resizeDelay: 10,
                    appendOnly: !1,
                    inline: !1,
                    lazy: !1,
                    disabled: !1,
                    loaderDisabled: !1,
                    loadingIcon: null,
                    columns: null,
                    loading: void 0,
                    autoSize: !1,
                    showSpacer: !0,
                    showLoader: !1,
                    loadingTemplate: null,
                    loaderIconTemplate: null,
                    itemTemplate: null,
                    contentTemplate: null,
                    onScroll: null,
                    onScrollIndexChange: null,
                    onLazyLoad: null,
                    children: void 0,
                },
                css: {
                    styles: '\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*contain: content;*/\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n',
                },
            });
            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? g(Object(r), !0).forEach(function (t) {
                              f(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : g(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            var v = n.memo(
                n.forwardRef(function (e, t) {
                    var r = n.useContext(c.Ou),
                        i = d.getProps(e, r),
                        u = (0, o.D9)(e) || {},
                        p = 'vertical' === i.orientation,
                        g = 'horizontal' === i.orientation,
                        v = 'both' === i.orientation,
                        y = m(n.useState(v ? { rows: 0, cols: 0 } : 0), 2),
                        w = y[0],
                        b = y[1],
                        S = m(n.useState(v ? { rows: 0, cols: 0 } : 0), 2),
                        z = S[0],
                        O = S[1],
                        I = m(n.useState(0), 2),
                        T = I[0],
                        x = I[1],
                        R = m(n.useState(v ? { rows: 0, cols: 0 } : 0), 2),
                        C = R[0],
                        j = R[1],
                        E = m(n.useState(i.numToleratedItems), 2),
                        L = E[0],
                        P = E[1],
                        M = m(n.useState(i.loading || !1), 2),
                        H = M[0],
                        A = M[1],
                        W = m(n.useState([]), 2),
                        D = W[0],
                        F = W[1],
                        N = d.setMetaData({
                            props: i,
                            state: {
                                first: w,
                                last: z,
                                page: T,
                                numItemsInViewport: C,
                                numToleratedItems: L,
                                loading: H,
                                loaderArr: D,
                            },
                        }).ptm;
                    (0, o.Xj)(d.css.styles, { name: 'virtualscroller' });
                    var k = n.useRef(null),
                        V = n.useRef(null),
                        _ = n.useRef(null),
                        J = n.useRef(null),
                        X = n.useRef(v ? { top: 0, left: 0 } : 0),
                        G = n.useRef(null),
                        K = n.useRef(null),
                        B = n.useRef({}),
                        Z = n.useRef({}),
                        U = n.useRef(null),
                        Y = n.useRef(null),
                        $ = n.useRef(null),
                        q = n.useRef(null),
                        Q = n.useRef(!1),
                        ee = n.useRef(null),
                        te = m(
                            (0, o.HR)({
                                listener: function (e) {
                                    return ge();
                                },
                                when: !i.disabled,
                            }),
                            1,
                        )[0],
                        re = m(
                            (0, o.OR)({
                                target: 'window',
                                type: 'orientationchange',
                                listener: function (e) {
                                    return ge();
                                },
                                when: !i.disabled,
                            }),
                            1,
                        )[0],
                        ne = function () {
                            return k;
                        },
                        oe = function (e) {
                            return Math.floor((e + 4 * L) / (i.step || 1));
                        },
                        le = function (e) {
                            return !i.step || T !== oe(e);
                        },
                        ie = function (e) {
                            (X.current = v ? { top: 0, left: 0 } : 0),
                                k.current && k.current.scrollTo(e);
                        },
                        se = function (e) {
                            var t =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 'auto',
                                r = ue().numToleratedItems,
                                n = pe(),
                                o = function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 0;
                                    return e <= (arguments.length > 1 ? arguments[1] : void 0)
                                        ? 0
                                        : e;
                                },
                                l = function (e, t, r) {
                                    return e * t + r;
                                },
                                s = function () {
                                    return ie({
                                        left:
                                            arguments.length > 0 && void 0 !== arguments[0]
                                                ? arguments[0]
                                                : 0,
                                        top:
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : 0,
                                        behavior: t,
                                    });
                                },
                                c = v ? { rows: 0, cols: 0 } : 0,
                                a = !1;
                            v
                                ? (s(
                                      l(
                                          (c = { rows: o(e[0], r[0]), cols: o(e[1], r[1]) }).cols,
                                          i.itemSize[1],
                                          n.left,
                                      ),
                                      l(c.rows, i.itemSize[0], n.top),
                                  ),
                                  (a = w.rows !== c.rows || w.cols !== c.cols))
                                : ((c = o(e, r)),
                                  g
                                      ? s(l(c, i.itemSize, n.left), 0)
                                      : s(0, l(c, i.itemSize, n.top)),
                                  (a = w !== c)),
                                (Q.current = a),
                                b(c);
                        },
                        ce = function (e, t) {
                            var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 'auto';
                            if (t) {
                                var n = ae(),
                                    o = n.first,
                                    l = n.viewport,
                                    s = function () {
                                        return ie({
                                            left:
                                                arguments.length > 0 && void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : 0,
                                            top:
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : 0,
                                            behavior: r,
                                        });
                                    },
                                    c = 'to-end' === t;
                                if ('to-start' === t) {
                                    if (v)
                                        l.first.rows - o.rows > e[0]
                                            ? s(
                                                  l.first.cols * i.itemSize[1],
                                                  (l.first.rows - 1) * i.itemSize[0],
                                              )
                                            : l.first.cols - o.cols > e[1] &&
                                              s(
                                                  (l.first.cols - 1) * i.itemSize[1],
                                                  l.first.rows * i.itemSize[0],
                                              );
                                    else if (l.first - o > e) {
                                        var a = (l.first - 1) * i.itemSize;
                                        g ? s(a, 0) : s(0, a);
                                    }
                                } else if (c)
                                    if (v)
                                        l.last.rows - o.rows <= e[0] + 1
                                            ? s(
                                                  l.first.cols * i.itemSize[1],
                                                  (l.first.rows + 1) * i.itemSize[0],
                                              )
                                            : l.last.cols - o.cols <= e[1] + 1 &&
                                              s(
                                                  (l.first.cols + 1) * i.itemSize[1],
                                                  l.first.rows * i.itemSize[0],
                                              );
                                    else if (l.last - o <= e + 1) {
                                        var u = (l.first + 1) * i.itemSize;
                                        g ? s(u, 0) : s(0, u);
                                    }
                            } else se(e, r);
                        },
                        ae = function () {
                            var e = function (e, t) {
                                    return Math.floor(e / (t || e));
                                },
                                t = w,
                                r = 0;
                            if (k.current) {
                                var n = k.current,
                                    o = n.scrollTop,
                                    l = n.scrollLeft;
                                r = v
                                    ? {
                                          rows:
                                              (t = {
                                                  rows: e(o, i.itemSize[0]),
                                                  cols: e(l, i.itemSize[1]),
                                              }).rows + C.rows,
                                          cols: t.cols + C.cols,
                                      }
                                    : (t = e(g ? l : o, i.itemSize)) + C;
                            }
                            return { first: w, last: z, viewport: { first: t, last: r } };
                        },
                        ue = function () {
                            var e = pe(),
                                t = k.current ? k.current.offsetWidth - e.left : 0,
                                r = k.current ? k.current.offsetHeight - e.top : 0,
                                n = function (e, t) {
                                    return Math.ceil(e / (t || e));
                                },
                                o = function (e) {
                                    return Math.ceil(e / 2);
                                },
                                l = v
                                    ? { rows: n(r, i.itemSize[0]), cols: n(t, i.itemSize[1]) }
                                    : n(g ? t : r, i.itemSize);
                            return {
                                numItemsInViewport: l,
                                numToleratedItems: L || (v ? [o(l.rows), o(l.cols)] : o(l)),
                            };
                        },
                        fe = function () {
                            var e =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0,
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            return i.items
                                ? Math.min(t ? (i.columns || i.items[0]).length : i.items.length, e)
                                : 0;
                        },
                        pe = function () {
                            if (V.current) {
                                var e = getComputedStyle(V.current),
                                    t =
                                        parseFloat(e.paddingLeft) +
                                        Math.max(parseFloat(e.left) || 0, 0),
                                    r =
                                        parseFloat(e.paddingRight) +
                                        Math.max(parseFloat(e.right) || 0, 0),
                                    n =
                                        parseFloat(e.paddingTop) +
                                        Math.max(parseFloat(e.top) || 0, 0),
                                    o =
                                        parseFloat(e.paddingBottom) +
                                        Math.max(parseFloat(e.bottom) || 0, 0);
                                return { left: t, right: r, top: n, bottom: o, x: t + r, y: n + o };
                            }
                            return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
                        },
                        me = function (e) {
                            var t = e.target,
                                r = pe(),
                                n = function (e, t) {
                                    return e ? (e > t ? e - t : e) : 0;
                                },
                                o = function (e, t) {
                                    return Math.floor(e / (t || e));
                                },
                                l = function (e, t, r, n, o, l) {
                                    return e <= o ? o : l ? r - n - o : t + o - 1;
                                },
                                s = function (e, t, r, n, o, l, i) {
                                    return e <= l
                                        ? 0
                                        : Math.max(
                                              0,
                                              i ? (e < t ? r : e - l) : e > t ? r : e - 2 * l,
                                          );
                                },
                                c = function (e, t, r, n, o, l) {
                                    var i = t + n + 2 * o;
                                    return e >= o && (i += o + 1), fe(i, l);
                                },
                                a = n(t.scrollTop, r.top),
                                u = n(t.scrollLeft, r.left),
                                f = v ? { rows: 0, cols: 0 } : 0,
                                p = z,
                                m = !1,
                                d = X.current;
                            if (v) {
                                var h = X.current.top <= a,
                                    y = X.current.left <= u;
                                if (!i.appendOnly || (i.appendOnly && (h || y))) {
                                    var b = {
                                            rows: o(a, i.itemSize[0]),
                                            cols: o(u, i.itemSize[1]),
                                        },
                                        S = {
                                            rows: l(b.rows, w.rows, z.rows, C.rows, L[0], h),
                                            cols: l(b.cols, w.cols, z.cols, C.cols, L[1], y),
                                        };
                                    (f = {
                                        rows: s(b.rows, S.rows, w.rows, z.rows, C.rows, L[0], h),
                                        cols: s(b.cols, S.cols, w.cols, z.cols, C.cols, L[1], y),
                                    }),
                                        (p = {
                                            rows: c(b.rows, f.rows, z.rows, C.rows, L[0]),
                                            cols: c(b.cols, f.cols, z.cols, C.cols, L[1], !0),
                                        }),
                                        (m =
                                            f.rows !== w.rows ||
                                            p.rows !== z.rows ||
                                            f.cols !== w.cols ||
                                            p.cols !== z.cols ||
                                            Q.current),
                                        (d = { top: a, left: u });
                                }
                            } else {
                                var O = g ? u : a,
                                    I = X.current <= O;
                                if (!i.appendOnly || (i.appendOnly && I)) {
                                    var T = o(O, i.itemSize);
                                    (p = c(
                                        T,
                                        (f = s(T, l(T, w, z, C, L, I), w, 0, 0, L, I)),
                                        0,
                                        C,
                                        L,
                                    )),
                                        (m = f !== w || p !== z || Q.current),
                                        (d = O);
                                }
                            }
                            return { first: f, last: p, isRangeChanged: m, scrollPos: d };
                        },
                        de = function (e) {
                            var t = me(e),
                                r = t.first,
                                n = t.last,
                                o = t.isRangeChanged,
                                l = t.scrollPos;
                            if (o) {
                                var s = { first: r, last: n };
                                if (
                                    ((function (e) {
                                        if (V.current && !i.appendOnly) {
                                            var t = e ? e.first : w,
                                                r = function (e, t) {
                                                    return e * t;
                                                },
                                                n = function () {
                                                    var e =
                                                            arguments.length > 0 &&
                                                            void 0 !== arguments[0]
                                                                ? arguments[0]
                                                                : 0,
                                                        t =
                                                            arguments.length > 1 &&
                                                            void 0 !== arguments[1]
                                                                ? arguments[1]
                                                                : 0;
                                                    J.current &&
                                                        (J.current.style.top = '-'.concat(t, 'px')),
                                                        (B.current = h(h({}, B.current), {
                                                            transform: 'translate3d('
                                                                .concat(e, 'px, ')
                                                                .concat(t, 'px, 0)'),
                                                        }));
                                                };
                                            if (v)
                                                n(
                                                    r(t.cols, i.itemSize[1]),
                                                    r(t.rows, i.itemSize[0]),
                                                );
                                            else {
                                                var o = r(t, i.itemSize);
                                                g ? n(o, 0) : n(0, o);
                                            }
                                        }
                                    })(s),
                                    b(r),
                                    O(n),
                                    (X.current = l),
                                    i.onScrollIndexChange && i.onScrollIndexChange(s),
                                    i.lazy && le(r))
                                ) {
                                    var c = {
                                        first: i.step
                                            ? Math.min(oe(r) * i.step, i.items.length - i.step)
                                            : r,
                                        last: Math.min(
                                            i.step ? (oe(r) + 1) * i.step : n,
                                            i.items.length,
                                        ),
                                    };
                                    (!ee.current ||
                                        ee.current.first !== c.first ||
                                        ee.current.last !== c.last) &&
                                        i.onLazyLoad &&
                                        i.onLazyLoad(c),
                                        (ee.current = c);
                                }
                            }
                        },
                        ge = function () {
                            K.current && clearTimeout(K.current),
                                (K.current = setTimeout(function () {
                                    if (k.current) {
                                        var e = [
                                                l.p7.getWidth(k.current),
                                                l.p7.getHeight(k.current),
                                            ],
                                            t = e[0],
                                            r = e[1],
                                            n = t !== U.current,
                                            o = r !== Y.current;
                                        (v ? n || o : g ? n : p && o) &&
                                            (P(i.numToleratedItems),
                                            (U.current = t),
                                            (Y.current = r),
                                            ($.current = l.p7.getWidth(V.current)),
                                            (q.current = l.p7.getHeight(V.current)));
                                    }
                                }, i.resizeDelay));
                        },
                        he = function (e) {
                            var t = (i.items || []).length,
                                r = v ? w.rows + e : w + e;
                            return {
                                index: r,
                                count: t,
                                first: 0 === r,
                                last: r === t - 1,
                                even: r % 2 == 0,
                                odd: r % 2 != 0,
                                props: i,
                            };
                        },
                        ve = function (e, t) {
                            var r = D.length;
                            return h(
                                {
                                    index: e,
                                    count: r,
                                    first: 0 === e,
                                    last: e === r - 1,
                                    even: e % 2 == 0,
                                    odd: e % 2 != 0,
                                    props: i,
                                },
                                t,
                            );
                        },
                        ye = function () {
                            var e = i.items;
                            return e && !H
                                ? v
                                    ? e.slice(i.appendOnly ? 0 : w.rows, z.rows).map(function (e) {
                                          return i.columns
                                              ? e
                                              : e.slice(i.appendOnly ? 0 : w.cols, z.cols);
                                      })
                                    : g && i.columns
                                    ? e
                                    : e.slice(i.appendOnly ? 0 : w, z)
                                : [];
                        },
                        we = function () {
                            var e, t, r, n, o;
                            i.disabled ||
                                ((function () {
                                    if (k.current) {
                                        var e = k.current.parentElement,
                                            t =
                                                i.scrollWidth ||
                                                ''.concat(
                                                    k.current.offsetWidth || e.offsetWidth,
                                                    'px',
                                                ),
                                            r =
                                                i.scrollHeight ||
                                                ''.concat(
                                                    k.current.offsetHeight || e.offsetHeight,
                                                    'px',
                                                ),
                                            n = function (e, t) {
                                                return (k.current.style[e] = t);
                                            };
                                        v || g ? (n('height', r), n('width', t)) : n('height', r);
                                    }
                                })(),
                                (e = ue()),
                                (t = e.numItemsInViewport),
                                (r = e.numToleratedItems),
                                (n = function (e, t, r) {
                                    return fe(
                                        e + t + (e < r ? 2 : 3) * r,
                                        arguments.length > 3 &&
                                            void 0 !== arguments[3] &&
                                            arguments[3],
                                    );
                                }),
                                (o = v
                                    ? {
                                          rows: n(w.rows, t.rows, r[0]),
                                          cols: n(w.cols, t.cols, r[1], !0),
                                      }
                                    : n(w, t, r)),
                                j(t),
                                P(r),
                                O(o),
                                i.showLoader &&
                                    F(
                                        v
                                            ? Array.from({ length: t.rows }).map(function () {
                                                  return Array.from({ length: t.cols });
                                              })
                                            : Array.from({ length: t }),
                                    ),
                                i.lazy &&
                                    Promise.resolve().then(function () {
                                        (ee.current = {
                                            first: i.step ? (v ? { rows: 0, cols: w.cols } : 0) : w,
                                            last: Math.min(i.step ? i.step : o, i.items.length),
                                        }),
                                            i.onLazyLoad && i.onLazyLoad(ee.current);
                                    }),
                                (function () {
                                    var e = i.items;
                                    if (e) {
                                        var t = pe(),
                                            r = function (e, t, r) {
                                                var n =
                                                    arguments.length > 3 && void 0 !== arguments[3]
                                                        ? arguments[3]
                                                        : 0;
                                                return (Z.current = h(
                                                    h({}, Z.current),
                                                    f(
                                                        {},
                                                        ''.concat(e),
                                                        (t || []).length * r + n + 'px',
                                                    ),
                                                ));
                                            };
                                        v
                                            ? (r('height', e, i.itemSize[0], t.y),
                                              r('width', i.columns || e[1], i.itemSize[1], t.x))
                                            : g
                                            ? r('width', i.columns || e, i.itemSize, t.x)
                                            : r('height', e, i.itemSize, t.y);
                                    }
                                })());
                        };
                    (0, o.nw)(function () {
                        var e;
                        k.current &&
                            l.p7.isVisible(k.current) &&
                            ((e = V.current),
                            (V.current =
                                e ||
                                V.current ||
                                l.p7.findSingle(k.current, '.p-virtualscroller-content')),
                            we(),
                            te(),
                            re(),
                            (U.current = l.p7.getWidth(k.current)),
                            (Y.current = l.p7.getHeight(k.current)),
                            ($.current = l.p7.getWidth(V.current)),
                            (q.current = l.p7.getHeight(V.current)));
                    }),
                        (0, o.rf)(
                            function () {
                                we();
                            },
                            [i.itemSize, i.scrollHeight, i.scrollWidth],
                        ),
                        (0, o.rf)(
                            function () {
                                i.numToleratedItems !== L && P(i.numToleratedItems);
                            },
                            [i.numToleratedItems],
                        ),
                        (0, o.rf)(
                            function () {
                                i.numToleratedItems === L && we();
                            },
                            [L],
                        ),
                        (0, o.rf)(function () {
                            (u.items && u.items.length === (i.items || []).length) || we();
                            var e = H;
                            i.lazy &&
                                u.loading !== i.loading &&
                                i.loading !== H &&
                                (A(i.loading), (e = i.loading)),
                                (function (e) {
                                    i.autoSize &&
                                        !e &&
                                        Promise.resolve().then(function () {
                                            if (V.current) {
                                                (V.current.style.minHeight =
                                                    V.current.style.minWidth =
                                                        'auto'),
                                                    (V.current.style.position = 'relative'),
                                                    (k.current.style.contain = 'none');
                                                var e = [
                                                        l.p7.getWidth(k.current),
                                                        l.p7.getHeight(k.current),
                                                    ],
                                                    t = e[0],
                                                    r = e[1];
                                                (v || g) &&
                                                    (k.current.style.width =
                                                        (t < U.current
                                                            ? t
                                                            : i.scrollWidth || U.current) + 'px'),
                                                    (v || p) &&
                                                        (k.current.style.height =
                                                            (r < Y.current
                                                                ? r
                                                                : i.scrollHeight || Y.current) +
                                                            'px'),
                                                    (V.current.style.minHeight =
                                                        V.current.style.minWidth =
                                                            ''),
                                                    (V.current.style.position = ''),
                                                    (k.current.style.contain = '');
                                            }
                                        });
                                })(e);
                        }),
                        (0, o.rf)(
                            function () {
                                X.current = v ? { top: 0, left: 0 } : 0;
                            },
                            [i.orientation],
                        ),
                        n.useImperativeHandle(t, function () {
                            return {
                                props: i,
                                getElementRef: ne,
                                scrollTo: ie,
                                scrollToIndex: se,
                                scrollInView: ce,
                                getRenderedRange: ae,
                            };
                        });
                    var be = function (e, t) {
                        var r = he(t),
                            o = l.gb.getJSXElement(i.itemTemplate, e, r);
                        return n.createElement(n.Fragment, { key: r.index }, o);
                    };
                    if (i.disabled) {
                        var Se = l.gb.getJSXElement(i.contentTemplate, {
                            items: i.items,
                            rows: i.items,
                            columns: i.columns,
                        });
                        return n.createElement(n.Fragment, null, i.children, Se);
                    }
                    var ze = (0, l.AK)(
                            'p-virtualscroller',
                            {
                                'p-virtualscroller-inline': i.inline,
                                'p-virtualscroller-both p-both-scroll': v,
                                'p-virtualscroller-horizontal p-horizontal-scroll': g,
                            },
                            i.className,
                        ),
                        Oe = (function () {
                            var e = 'p-virtualscroller-loading-icon',
                                t = (0, l.dG)({ className: e }, N('loadingIcon')),
                                r = i.loadingIcon || n.createElement(s.L, a({}, t, { spin: !0 })),
                                o = l.Cz.getJSXIcon(r, h({}, t), { props: i });
                            if (!i.loaderDisabled && i.showLoader && H) {
                                var c = (0, l.AK)('p-virtualscroller-loader', {
                                        'p-component-overlay': !i.loadingTemplate,
                                    }),
                                    u = o;
                                if (i.loadingTemplate)
                                    u = D.map(function (e, t) {
                                        return (function (e) {
                                            var t = ve(
                                                    e,
                                                    arguments.length > 1 && void 0 !== arguments[1]
                                                        ? arguments[1]
                                                        : {},
                                                ),
                                                r = l.gb.getJSXElement(i.loadingTemplate, t);
                                            return n.createElement(n.Fragment, { key: e }, r);
                                        })(t, v && { numCols: C.cols });
                                    });
                                else if (i.loaderIconTemplate) {
                                    var f = { iconClassName: e, element: u, props: i };
                                    u = l.gb.getJSXElement(i.loaderIconTemplate, f);
                                }
                                var p = (0, l.dG)({ className: c }, N('loader'));
                                return n.createElement('div', p, u);
                            }
                            return null;
                        })(),
                        Ie = (function () {
                            var e = ye().map(be),
                                t = (0, l.AK)('p-virtualscroller-content', {
                                    'p-virtualscroller-loading': H,
                                }),
                                r = (0, l.dG)(
                                    { ref: V, style: B.current, className: t },
                                    N('content'),
                                ),
                                o = n.createElement('div', r, e);
                            if (i.contentTemplate) {
                                var s = {
                                    style: B.current,
                                    className: t,
                                    spacerStyle: Z.current,
                                    contentRef: function (e) {
                                        return (V.current = l.gb.getRefElement(e));
                                    },
                                    spacerRef: function (e) {
                                        return (_.current = l.gb.getRefElement(e));
                                    },
                                    stickyRef: function (e) {
                                        return (J.current = l.gb.getRefElement(e));
                                    },
                                    items: ye(),
                                    getItemOptions: function (e) {
                                        return he(e);
                                    },
                                    children: e,
                                    element: o,
                                    props: i,
                                    loading: H,
                                    getLoaderOptions: function (e, t) {
                                        return ve(e, t);
                                    },
                                    loadingTemplate: i.loadingTemplate,
                                    itemSize: i.itemSize,
                                    rows: H ? (i.loaderDisabled ? D : []) : ye(),
                                    columns:
                                        (i.columns && v) || g
                                            ? H && i.loaderDisabled
                                                ? v
                                                    ? D[0]
                                                    : D
                                                : i.columns.slice(v ? w.cols : w, v ? z.cols : z)
                                            : i.columns,
                                    vertical: p,
                                    horizontal: g,
                                    both: v,
                                };
                                return l.gb.getJSXElement(i.contentTemplate, s);
                            }
                            return o;
                        })(),
                        Te = (function () {
                            if (i.showSpacer) {
                                var e = (0, l.dG)(
                                    {
                                        ref: _,
                                        style: Z.current,
                                        className: 'p-virtualscroller-spacer',
                                    },
                                    N('spacer'),
                                );
                                return n.createElement('div', e);
                            }
                            return null;
                        })(),
                        xe = (0, l.dG)(
                            {
                                ref: k,
                                className: ze,
                                tabIndex: i.tabIndex,
                                style: i.style,
                                onScroll: function (e) {
                                    return (
                                        (t = e),
                                        i.onScroll && i.onScroll(t),
                                        void (i.delay
                                            ? (G.current && clearTimeout(G.current),
                                              le(w) &&
                                                  (!H &&
                                                      i.showLoader &&
                                                      (me(t).isRangeChanged || (i.step && le(w))) &&
                                                      A(!0),
                                                  (G.current = setTimeout(function () {
                                                      de(t),
                                                          !H ||
                                                              !i.showLoader ||
                                                              (i.lazy && void 0 !== i.loading) ||
                                                              (A(!1), x(oe(w)));
                                                  }, i.delay))))
                                            : de(t))
                                    );
                                    var t;
                                },
                            },
                            d.getOtherProps(i),
                            N('root'),
                        );
                    return n.createElement('div', xe, Ie, Te, Oe);
                }),
            );
            v.displayName = 'VirtualScroller';
        },
    },
]);
