'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [379],
    {
        3546: (e, n, t) => {
            t.r(n), t.d(n, { default: () => _ });
            var i = t(5893),
                r = t(4807),
                l = t(2594),
                a = t(7294),
                o = t(577),
                d = t(8918),
                s = t(7828),
                c = t(2540),
                u = t(2672),
                p = t(9250),
                f = t(7543),
                v = t(5034),
                h = t(1222),
                g = t(7820),
                b = t(3942),
                m = t(9452),
                y = t(3223),
                x = t(8832),
                j = t(3379),
                w = t.n(j),
                C = t(7795),
                z = t.n(C),
                N = t(569),
                k = t.n(N),
                P = t(3565),
                S = t.n(P),
                T = t(9216),
                E = t.n(T),
                O = t(4589),
                I = t.n(O),
                L = t(9344),
                D = {};
            (D.styleTagTransform = I()),
                (D.setAttributes = S()),
                (D.insert = k().bind(null, 'head')),
                (D.domAPI = z()),
                (D.insertStyleElement = E()),
                w()(L.Z, D);
            const M = L.Z && L.Z.locals ? L.Z.locals : void 0;
            var Z = function () {
                return (
                    (Z =
                        Object.assign ||
                        function (e) {
                            for (var n, t = 1, i = arguments.length; t < i; t++)
                                for (var r in (n = arguments[t]))
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            return e;
                        }),
                    Z.apply(this, arguments)
                );
            };
            const _ = (0, a.memo)(function (e) {
                var n = e.className;
                (0, a.useEffect)(function () {
                    document.title = 'Ручное создание группы';
                }, []);
                var t = (0, u.T)(),
                    j = (0, p.s0)(),
                    w = (0, x.P)().pending,
                    C = (0, b.v9)(v.Cb),
                    z = (0, a.useState)(''),
                    N = z[0],
                    k = z[1],
                    P = (0, a.useState)(''),
                    S = P[0],
                    T = P[1],
                    E = (0, a.useState)([]),
                    O = E[0],
                    I = E[1],
                    L = (0, a.useState)([]),
                    D = L[0],
                    _ = L[1];
                (0, a.useEffect)(
                    function () {
                        I(
                            D.map(function (e) {
                                return e.id;
                            }),
                        );
                    },
                    [D],
                );
                var A = (0, a.useMemo)(
                        function () {
                            return '' === N || 0 === O.length || '' === S;
                        },
                        [O.length, N, S],
                    ),
                    W = (0, a.useCallback)(function (e) {
                        _(function (n) {
                            return n.filter(function (n) {
                                return n.id !== e;
                            });
                        });
                    }, []),
                    G = (0, a.useCallback)(
                        function (e) {
                            return (
                                (n = void 0),
                                (i = void 0),
                                (l = function () {
                                    return (function (e, n) {
                                        var t,
                                            i,
                                            r,
                                            l,
                                            a = {
                                                label: 0,
                                                sent: function () {
                                                    if (1 & r[0]) throw r[1];
                                                    return r[1];
                                                },
                                                trys: [],
                                                ops: [],
                                            };
                                        return (
                                            (l = { next: o(0), throw: o(1), return: o(2) }),
                                            'function' == typeof Symbol &&
                                                (l[Symbol.iterator] = function () {
                                                    return this;
                                                }),
                                            l
                                        );
                                        function o(o) {
                                            return function (d) {
                                                return (function (o) {
                                                    if (t)
                                                        throw new TypeError(
                                                            'Generator is already executing.',
                                                        );
                                                    for (; l && ((l = 0), o[0] && (a = 0)), a; )
                                                        try {
                                                            if (
                                                                ((t = 1),
                                                                i &&
                                                                    (r =
                                                                        2 & o[0]
                                                                            ? i.return
                                                                            : o[0]
                                                                            ? i.throw ||
                                                                              ((r = i.return) &&
                                                                                  r.call(i),
                                                                              0)
                                                                            : i.next) &&
                                                                    !(r = r.call(i, o[1])).done)
                                                            )
                                                                return r;
                                                            switch (
                                                                ((i = 0),
                                                                r && (o = [2 & o[0], r.value]),
                                                                o[0])
                                                            ) {
                                                                case 0:
                                                                case 1:
                                                                    r = o;
                                                                    break;
                                                                case 4:
                                                                    return (
                                                                        a.label++,
                                                                        { value: o[1], done: !1 }
                                                                    );
                                                                case 5:
                                                                    a.label++,
                                                                        (i = o[1]),
                                                                        (o = [0]);
                                                                    continue;
                                                                case 7:
                                                                    (o = a.ops.pop()), a.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (
                                                                        !(
                                                                            (r =
                                                                                (r = a.trys)
                                                                                    .length > 0 &&
                                                                                r[r.length - 1]) ||
                                                                            (6 !== o[0] &&
                                                                                2 !== o[0])
                                                                        )
                                                                    ) {
                                                                        a = 0;
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        3 === o[0] &&
                                                                        (!r ||
                                                                            (o[1] > r[0] &&
                                                                                o[1] < r[3]))
                                                                    ) {
                                                                        a.label = o[1];
                                                                        break;
                                                                    }
                                                                    if (
                                                                        6 === o[0] &&
                                                                        a.label < r[1]
                                                                    ) {
                                                                        (a.label = r[1]), (r = o);
                                                                        break;
                                                                    }
                                                                    if (r && a.label < r[2]) {
                                                                        (a.label = r[2]),
                                                                            a.ops.push(o);
                                                                        break;
                                                                    }
                                                                    r[2] && a.ops.pop(),
                                                                        a.trys.pop();
                                                                    continue;
                                                            }
                                                            o = n.call(e, a);
                                                        } catch (e) {
                                                            (o = [6, e]), (i = 0);
                                                        } finally {
                                                            t = r = 0;
                                                        }
                                                    if (5 & o[0]) throw o[1];
                                                    return {
                                                        value: o[0] ? o[1] : void 0,
                                                        done: !0,
                                                    };
                                                })([o, d]);
                                            };
                                        }
                                    })(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return (
                                                    e.preventDefault(),
                                                    [
                                                        4,
                                                        w(
                                                            t(
                                                                (0, v.d)({
                                                                    folderTitle: N,
                                                                    groupingRule: S,
                                                                    candidatesIds: O,
                                                                }),
                                                            ),
                                                            {
                                                                loadingMessage: 'Создаем группу...',
                                                                successMessage: 'Группа создана!',
                                                            },
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return (
                                                    'fulfilled' === n.sent().meta.requestStatus &&
                                                        j(h.h3.grouping),
                                                    [2]
                                                );
                                        }
                                    });
                                }),
                                new ((r = void 0) || (r = Promise))(function (e, t) {
                                    function a(e) {
                                        try {
                                            d(l.next(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }
                                    function o(e) {
                                        try {
                                            d(l.throw(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }
                                    function d(n) {
                                        var t;
                                        n.done
                                            ? e(n.value)
                                            : ((t = n.value),
                                              t instanceof r
                                                  ? t
                                                  : new r(function (e) {
                                                        e(t);
                                                    })).then(a, o);
                                    }
                                    d((l = l.apply(n, i || [])).next());
                                })
                            );
                            var n, i, r, l;
                        },
                        [O, t, N, S, j, w],
                    );
                return (0,
                i.jsxs)(l.T, Z({ className: (0, r.A)(M.ManualGroupingPage, {}, [n]) }, { children: [(0, i.jsx)(o.V, { breadcrumbPath: [{ label: 'Сравнение кандидатов', url: h.h3.candidates }, { label: 'Группировка кандидатов', url: h.h3.grouping }, { label: 'Создание группы', url: h.h3.creategroup }, { label: 'Ручное создание группы' }], title: 'Ручное создание группы' }), (0, i.jsx)('form', Z({ onSubmit: G }, { children: (0, i.jsxs)(f.g, Z({ maxW: !0 }, { children: [(0, i.jsx)(d.i, Z({ align: 'left', className: M.divider }, { children: (0, i.jsx)(s.xv, { className: M.dividerTitle, align: 'left', text: 'Название группы', size: 'small' }) })), (0, i.jsx)(c.I, { required: !0, value: N, onChange: k, placeholder: 'Название группы' }), (0, i.jsx)(d.i, Z({ align: 'left', className: M.divider }, { children: (0, i.jsx)(s.xv, { className: M.dividerTitle, align: 'left', text: 'Описание группы', size: 'small' }) })), (0, i.jsx)(c.I, { required: !0, value: S, onChange: T, placeholder: 'Описание группы' }), (0, i.jsx)(d.i, Z({ align: 'left', className: M.divider }, { children: (0, i.jsx)(s.xv, { className: M.dividerTitle, align: 'left', text: 'Все кандидаты', size: 'small' }) })), (0, i.jsxs)(f.U, Z({ maxW: !0, justify: 'between', align: 'start' }, { children: [(0, i.jsx)(m.Y, { className: M.candidatesList, page: 0, limit: 1e4, filterOptions: { age: [18,
                                                                                        40], education: [] }, defaultSelected: D, setSelectedProps: _ }), (0, i.jsx)(y.i4, { handleCandidateDelete: W, candidates: D })] })), (0, i.jsx)(f.U, Z({ maxW: !0, justify: 'end', className: M.buttonWrapper }, { children: (0, i.jsx)(g.z, Z({ type: 'submit', disabled: A, isLoading: C }, { children: 'Сформировать группу' })) }))] })) }))] }));
            });
        },
        9344: (e, n, t) => {
            t.d(n, { Z: () => o });
            var i = t(8081),
                r = t.n(i),
                l = t(3645),
                a = t.n(l)()(r());
            a.push([
                e.id,
                '.da343{margin:35px 0 0}.da343:first-child{margin:0}.bd307{padding:2px 7px;border-radius:8px;background:#1a1d21}.bd307 p{color:#999}.f0818{margin-top:100px}.a134c{width:55%}',
                '',
            ]),
                (a.locals = {
                    divider: 'da343',
                    dividerTitle: 'bd307',
                    buttonWrapper: 'f0818',
                    candidatesList: 'a134c',
                });
            const o = a;
        },
        8918: (e, n, t) => {
            t.d(n, { i: () => s });
            var i = t(7294),
                r = t(3643),
                l = t(3652),
                a = t(6367),
                o = {
                    root: function (e) {
                        var n = e.props,
                            t = e.horizontal,
                            i = e.vertical;
                        return (0, r.AK)(
                            'p-divider p-component p-divider-'
                                .concat(n.layout, ' p-divider-')
                                .concat(n.type),
                            {
                                'p-divider-left': t && (!n.align || 'left' === n.align),
                                'p-divider-right': t && 'right' === n.align,
                                'p-divider-center':
                                    (t && 'center' === n.align) ||
                                    (i && (!n.align || 'center' === n.align)),
                                'p-divider-top': i && 'top' === n.align,
                                'p-divider-bottom': i && 'bottom' === n.align,
                            },
                            n.className,
                        );
                    },
                    content: 'p-divider-content',
                },
                d = l.V.extend({
                    defaultProps: {
                        __TYPE: 'Divider',
                        align: null,
                        layout: 'horizontal',
                        type: 'solid',
                        style: null,
                        className: null,
                        children: void 0,
                    },
                    css: {
                        classes: o,
                        styles: '\n@layer primereact {\n    .p-divider-horizontal {\n        display: flex;\n        width: 100%;\n        position: relative;\n        align-items: center;\n    }\n    \n    .p-divider-horizontal:before {\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        content: "";\n    }\n    \n    .p-divider-horizontal.p-divider-left {\n        justify-content: flex-start;\n    }\n    \n    .p-divider-horizontal.p-divider-right {\n        justify-content: flex-end;\n    }\n    \n    .p-divider-horizontal.p-divider-center {\n        justify-content: center;\n    }\n    \n    .p-divider-content {\n        z-index: 1;\n    }\n    \n    .p-divider-vertical {\n        min-height: 100%;\n        margin: 0 1rem;\n        display: flex;\n        position: relative;\n        justify-content: center;\n    }\n    \n    .p-divider-vertical:before {\n        position: absolute;\n        display: block;\n        top: 0;\n        left: 50%;\n        height: 100%;\n        content: "";\n    }\n    \n    .p-divider-vertical.p-divider-top {\n        align-items: flex-start;\n    }\n    \n    .p-divider-vertical.p-divider-center {\n        align-items: center;\n    }\n    \n    .p-divider-vertical.p-divider-bottom {\n        align-items: flex-end;\n    }\n    \n    .p-divider-solid.p-divider-horizontal:before {\n        border-top-style: solid;\n    }\n    \n    .p-divider-solid.p-divider-vertical:before {\n        border-left-style: solid;\n    }\n    \n    .p-divider-dashed.p-divider-horizontal:before {\n        border-top-style: dashed;\n    }\n    \n    .p-divider-dashed.p-divider-vertical:before {\n        border-left-style: dashed;\n    }\n    \n    .p-divider-dotted.p-divider-horizontal:before {\n        border-top-style: dotted;\n    }\n    \n    .p-divider-dotted.p-divider-horizontal:before {\n        border-left-style: dotted;\n    }\n}\n',
                        inlineStyles: {
                            root: function (e) {
                                var n = e.props;
                                return {
                                    justifyContent:
                                        'horizontal' === n.layout
                                            ? 'center' === n.align || null === n.align
                                                ? 'center'
                                                : 'left' === n.align
                                                ? 'flex-start'
                                                : 'right' === n.align
                                                ? 'flex-end'
                                                : null
                                            : null,
                                    alignItems:
                                        'vertical' === n.layout
                                            ? 'center' === n.align || null === n.align
                                                ? 'center'
                                                : 'top' === n.align
                                                ? 'flex-start'
                                                : 'bottom' === n.align
                                                ? 'flex-end'
                                                : null
                                            : null,
                                };
                            },
                        },
                    },
                }),
                s = i.forwardRef(function (e, n) {
                    var t = i.useContext(a.Ou),
                        o = d.getProps(e, t),
                        s = d.setMetaData({ props: o }),
                        c = s.ptm,
                        u = s.cx,
                        p = s.sx,
                        f = s.isUnstyled;
                    (0, l.e)(d.css.styles, f, { name: 'divider' });
                    var v = i.useRef(null),
                        h = 'horizontal' === o.layout,
                        g = 'vertical' === o.layout;
                    i.useImperativeHandle(n, function () {
                        return {
                            props: o,
                            getElement: function () {
                                return v.current;
                            },
                        };
                    });
                    var b = (0, r.dG)(
                            {
                                ref: v,
                                style: p('root'),
                                className: u('root', { horizontal: h, vertical: g }),
                                role: 'separator',
                            },
                            d.getOtherProps(o),
                            c('root'),
                        ),
                        m = (0, r.dG)({ className: u('content') }, c('content'));
                    return i.createElement('div', b, i.createElement('div', m, o.children));
                });
            s.displayName = 'Divider';
        },
        2285: (e, n, t) => {
            t.d(n, { v: () => a });
            var i = t(7294),
                r = t(4320);
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var i in t)
                                      Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                              }
                              return e;
                          }),
                    l.apply(this, arguments)
                );
            }
            var a = i.memo(
                i.forwardRef(function (e, n) {
                    var t = r.A.getPTI(e);
                    return i.createElement(
                        'svg',
                        l(
                            {
                                ref: n,
                                width: '14',
                                height: '14',
                                viewBox: '0 0 14 14',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                            },
                            t,
                        ),
                        i.createElement('path', {
                            d: 'M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z',
                            fill: 'currentColor',
                        }),
                    );
                }),
            );
            a.displayName = 'ChevronDownIcon';
        },
    },
]);
