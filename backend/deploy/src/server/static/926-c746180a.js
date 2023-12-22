'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [926],
    {
        5020: (e, t, n) => {
            n.d(t, { c: () => y });
            var r = n(7294),
                a = n(6367),
                o = n(3652),
                l = n(3308),
                i = n(5508),
                s = n(3643);
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
            function c(e) {
                var t = (function (e, t) {
                    if ('object' !== u(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, 'string');
                        if ('object' !== u(r)) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(e);
                return 'symbol' === u(t) ? t : String(t);
            }
            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var m = {
                    icon: 'p-menuitem-icon',
                    action: 'p-menuitem-link',
                    label: 'p-menuitem-text',
                    home: function (e) {
                        var t = e._className,
                            n = e.disabled;
                        return (0, s.AK)('p-breadcrumb-home', { 'p-disabled': n }, t);
                    },
                    separatorIcon: 'p-breadcrumb-chevron',
                    separator: 'p-menuitem-separator',
                    menuitem: function (e) {
                        var t = e.item;
                        return (0, s.AK)('p-menuitem', t.className, { 'p-disabled': t.disabled });
                    },
                    menu: 'p-breadcrumb-list',
                    root: function (e) {
                        var t = e.props;
                        return (0, s.AK)('p-breadcrumb p-component', t.className);
                    },
                },
                f = o.V.extend({
                    defaultProps: {
                        __TYPE: 'BreadCrumb',
                        id: null,
                        model: null,
                        home: null,
                        separatorIcon: null,
                        style: null,
                        className: null,
                        children: void 0,
                    },
                    css: {
                        classes: m,
                        styles: '\n@layer primereact {\n    .p-breadcrumb {\n        overflow-x: auto;\n    }\n    \n    .p-breadcrumb ul {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        display: flex;\n        align-items: center;\n        flex-wrap: nowrap;\n    }\n    \n    .p-breadcrumb .p-menuitem-text {\n        line-height: 1;\n    }\n    \n    .p-breadcrumb .p-menuitem-link {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n    }\n    \n    .p-breadcrumb .p-menuitem-separator {\n        display: flex;\n        align-items: center;\n    }\n    \n    .p-breadcrumb::-webkit-scrollbar {\n        display: none;\n    }\n}\n',
                    },
                });
            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? d(Object(n), !0).forEach(function (t) {
                              var r, a, o;
                              (r = e),
                                  (a = t),
                                  (o = n[t]),
                                  (a = c(a)) in r
                                      ? Object.defineProperty(r, a, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (r[a] = o);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : d(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var y = r.memo(
                r.forwardRef(function (e, t) {
                    var n,
                        u,
                        c = r.useContext(a.Ou),
                        m = f.getProps(e, c),
                        d =
                            ((n = r.useState(m.id)),
                            (u = 2),
                            (function (e) {
                                if (Array.isArray(e)) return e;
                            })(n) ||
                                (function (e, t) {
                                    var n =
                                        null == e
                                            ? null
                                            : ('undefined' != typeof Symbol &&
                                                  e[Symbol.iterator]) ||
                                              e['@@iterator'];
                                    if (null != n) {
                                        var r,
                                            a,
                                            o,
                                            l,
                                            i = [],
                                            s = !0,
                                            u = !1;
                                        try {
                                            if (((o = (n = n.call(e)).next), 0 === t)) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else
                                                for (
                                                    ;
                                                    !(s = (r = o.call(n)).done) &&
                                                    (i.push(r.value), i.length !== t);
                                                    s = !0
                                                );
                                        } catch (e) {
                                            (u = !0), (a = e);
                                        } finally {
                                            try {
                                                if (
                                                    !s &&
                                                    null != n.return &&
                                                    ((l = n.return()), Object(l) !== l)
                                                )
                                                    return;
                                            } finally {
                                                if (u) throw a;
                                            }
                                        }
                                        return i;
                                    }
                                })(n, u) ||
                                (function (e, t) {
                                    if (e) {
                                        if ('string' == typeof e) return p(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return (
                                            'Object' === n &&
                                                e.constructor &&
                                                (n = e.constructor.name),
                                            'Map' === n || 'Set' === n
                                                ? Array.from(e)
                                                : 'Arguments' === n ||
                                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                ? p(e, t)
                                                : void 0
                                        );
                                    }
                                })(n, u) ||
                                (function () {
                                    throw new TypeError(
                                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                    );
                                })()),
                        y = d[0],
                        g = d[1],
                        v = r.useRef(null),
                        h = f.setMetaData({ props: m, state: { id: y } }),
                        w = h.ptm,
                        O = h.cx,
                        P = h.isUnstyled;
                    (0, o.e)(f.css.styles, P, { name: 'breadcrumb' });
                    var j = function (e, t) {
                            t.disabled
                                ? e.preventDefault()
                                : (t.url || e.preventDefault(),
                                  t.command && t.command({ originalEvent: e, item: t }));
                        },
                        C = function (e) {
                            var t = y + '_sep_' + e,
                                n = (0, s.dG)(
                                    { className: O('separatorIcon') },
                                    w('separatorIcon'),
                                ),
                                a = m.separatorIcon || r.createElement(i.X, n),
                                o = s.Cz.getJSXIcon(a, b({}, n), { props: m }),
                                l = (0, s.dG)(
                                    { id: t, key: t, className: O('separator'), role: 'separator' },
                                    w('separator'),
                                );
                            return r.createElement('li', l, o);
                        };
                    (0, l.nw)(function () {
                        y || g((0, s.Th)());
                    }),
                        r.useImperativeHandle(t, function () {
                            return {
                                props: m,
                                getElement: function () {
                                    return v.current;
                                },
                            };
                        });
                    var E = (function (e) {
                            var t = m.home;
                            if (t) {
                                if (!1 === t.visible) return null;
                                var n = t.icon,
                                    a = t.target,
                                    o = t.url,
                                    l = t.disabled,
                                    i = t.style,
                                    u = t.className,
                                    c = t.template,
                                    p = t.label,
                                    f = (0, s.dG)({ className: O('icon') }, w('icon')),
                                    d = s.Cz.getJSXIcon(n, b({}, f), { props: m }),
                                    g = (0, s.dG)(
                                        {
                                            'href': o || '#',
                                            'className': O('action'),
                                            'aria-disabled': l,
                                            'target': a,
                                            'onClick': function (e) {
                                                return j(e, t);
                                            },
                                        },
                                        w('action'),
                                    ),
                                    v = (0, s.dG)({ className: O('label') }, w('label')),
                                    h = p && r.createElement('span', v, p),
                                    P = r.createElement('a', g, d, h);
                                if (c) {
                                    var C = {
                                        onClick: function (e) {
                                            return j(e, t);
                                        },
                                        className: 'p-menuitem-link',
                                        labelClassName: 'p-menuitem-text',
                                        element: P,
                                        props: m,
                                    };
                                    P = s.gb.getJSXElement(c, t, C);
                                }
                                var E = y + '_home',
                                    N = (0, s.dG)(
                                        {
                                            id: E,
                                            key: E,
                                            className: O('home', { _className: u, disabled: l }),
                                            style: i,
                                        },
                                        w('home'),
                                    );
                                return r.createElement('li', N, P);
                            }
                            return null;
                        })(),
                        N = (function () {
                            if (m.model) {
                                var e = m.model.map(function (e, t) {
                                    if (!1 === e.visible) return null;
                                    var n = (function (e, t) {
                                            if (!1 === e.visible) return null;
                                            var n = (0, s.dG)(
                                                    { className: O('label') },
                                                    w('label'),
                                                ),
                                                a = e.label && r.createElement('span', n, e.label),
                                                o = (0, s.dG)(
                                                    {
                                                        'href': e.url || '#',
                                                        'className': O('action'),
                                                        'target': e.target,
                                                        'onClick': function (t) {
                                                            return j(t, e);
                                                        },
                                                        'aria-disabled': e.disabled,
                                                    },
                                                    w('action'),
                                                ),
                                                l = r.createElement('a', o, a);
                                            if (e.template) {
                                                var i = {
                                                    onClick: function (t) {
                                                        return j(t, e);
                                                    },
                                                    className: 'p-menuitem-link',
                                                    labelClassName: 'p-menuitem-text',
                                                    element: l,
                                                    props: m,
                                                };
                                                l = s.gb.getJSXElement(e.template, e, i);
                                            }
                                            var u = e.id || y + '_' + t,
                                                c = (0, s.dG)(
                                                    {
                                                        id: u,
                                                        key: u,
                                                        className: O('menuitem', { item: e }),
                                                        style: e.style,
                                                    },
                                                    w('menuitem'),
                                                );
                                            return r.createElement('li', c, l);
                                        })(e, t),
                                        a = t === m.model.length - 1 ? null : C(t),
                                        o = y + '_' + t;
                                    return r.createElement(r.Fragment, { key: o }, n, a);
                                });
                                return e;
                            }
                            return null;
                        })(),
                        S = C('home'),
                        k = (0, s.dG)({ className: O('menu') }, w('menu')),
                        x = (0, s.dG)(
                            {
                                'id': m.id,
                                'ref': v,
                                'className': O('root'),
                                'style': m.style,
                                'aria-label': 'Breadcrumb',
                            },
                            f.getOtherProps(m),
                            w('root'),
                        );
                    return r.createElement('nav', x, r.createElement('ul', k, E, S, N));
                }),
            );
            y.displayName = 'BreadCrumb';
        },
        3741: (e, t, n) => {
            n.d(t, { k: () => c });
            var r = n(7294),
                a = n(6367),
                o = n(3308),
                l = n(3643),
                i = n(3652),
                s = i.V.extend({
                    defaultProps: {
                        __TYPE: 'Chart',
                        id: null,
                        type: null,
                        data: null,
                        options: null,
                        plugins: null,
                        width: null,
                        height: null,
                        style: null,
                        className: null,
                        children: void 0,
                    },
                    css: {
                        classes: {
                            root: function (e) {
                                var t = e.props;
                                return (0, l.AK)('p-chart', t.className);
                            },
                        },
                        inlineStyles: {
                            root: function (e) {
                                var t = e.props;
                                return Object.assign({ width: t.width, height: t.height }, t.style);
                            },
                        },
                        styles: '\n        @layer primereact {\n            .p-chart {\n                position: relative\n            }\n        }\n        ',
                    },
                }),
                u = (function () {
                    try {
                        return Chart;
                    } catch (e) {
                        return null;
                    }
                })(),
                c = r.memo(
                    r.forwardRef(function (e, t) {
                        var c = r.useContext(a.Ou),
                            p = s.getProps(e, c),
                            m = s.setMetaData({ props: p }),
                            f = m.ptm,
                            d = m.cx,
                            b = m.sx,
                            y = m.isUnstyled;
                        (0, i.e)(s.css.styles, y, { name: 'chart' });
                        var g = r.useRef(null),
                            v = r.useRef(null),
                            h = r.useRef(null),
                            w = function () {
                                v.current && (v.current.destroy(), (v.current = null));
                            };
                        r.useImperativeHandle(t, function () {
                            return {
                                props: p,
                                getCanvas: function () {
                                    return h.current;
                                },
                                getChart: function () {
                                    return v.current;
                                },
                                getBase64Image: function () {
                                    return v.current.toBase64Image();
                                },
                                getElement: function () {
                                    return g.current;
                                },
                                generateLegend: function () {
                                    return v.current && v.current.generateLegend();
                                },
                                refresh: function () {
                                    return v.current && v.current.update();
                                },
                            };
                        }),
                            r.useEffect(function () {
                                !(function () {
                                    w();
                                    var e = {
                                        type: p.type,
                                        data: p.data,
                                        options: p.options,
                                        plugins: p.plugins,
                                    };
                                    u
                                        ? (v.current = new u(h.current, e))
                                        : n
                                              .e(261)
                                              .then(n.bind(n, 5261))
                                              .then(function (t) {
                                                  w(),
                                                      h.current &&
                                                          t &&
                                                          (t.default
                                                              ? (v.current = new t.default(
                                                                    h.current,
                                                                    e,
                                                                ))
                                                              : (v.current = new t(h.current, e)));
                                              });
                                })();
                            }),
                            (0, o.zq)(function () {
                                w();
                            });
                        var O =
                                p.options &&
                                p.options.plugins &&
                                p.options.plugins.title &&
                                p.options.plugins.title.text,
                            P = p.ariaLabel || O,
                            j = (0, l.dG)(
                                { id: p.id, ref: g, style: b('root'), className: d('root') },
                                s.getOtherProps(p),
                                f('root'),
                            ),
                            C = (0, l.dG)(
                                {
                                    'ref': h,
                                    'width': p.width,
                                    'height': p.height,
                                    'role': 'img',
                                    'aria-label': P,
                                },
                                f('canvas'),
                            );
                        return r.createElement('div', j, r.createElement('canvas', C));
                    }),
                    function (e, t) {
                        return e.data === t.data && e.options === t.options && e.type === t.type;
                    },
                );
            c.displayName = 'Chart';
        },
        4320: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(3643),
                a = {
                    defaultProps: { __TYPE: 'IconBase', className: null, label: null, spin: !1 },
                    getProps: function (e) {
                        return r.gb.getMergedProps(e, a.defaultProps);
                    },
                    getOtherProps: function (e) {
                        return r.gb.getDiffProps(e, a.defaultProps);
                    },
                    getPTI: function (e) {
                        var t = r.gb.isEmpty(e.label),
                            n = a.getOtherProps(e),
                            o = {
                                'className': (0, r.AK)(
                                    'p-icon',
                                    { 'p-icon-spin': e.spin },
                                    e.className,
                                ),
                                'role': t ? void 0 : 'img',
                                'aria-label': t ? void 0 : e.label,
                                'aria-hidden': t,
                            };
                        return r.gb.getMergedProps(n, o);
                    },
                };
        },
        5508: (e, t, n) => {
            n.d(t, { X: () => l });
            var r = n(7294),
                a = n(4320);
            function o() {
                return (
                    (o = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var r in n)
                                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                          }),
                    o.apply(this, arguments)
                );
            }
            var l = r.memo(
                r.forwardRef(function (e, t) {
                    var n = a.A.getPTI(e);
                    return r.createElement(
                        'svg',
                        o(
                            {
                                ref: t,
                                width: '14',
                                height: '14',
                                viewBox: '0 0 14 14',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                            },
                            n,
                        ),
                        r.createElement('path', {
                            d: 'M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z',
                            fill: 'currentColor',
                        }),
                    );
                }),
            );
            l.displayName = 'ChevronRightIcon';
        },
        4710: (e, t, n) => {
            n.d(t, { O: () => f });
            var r = n(7294),
                a = n(6367),
                o = n(3652),
                l = n(3643);
            function i(e) {
                return (
                    (i =
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
                    i(e)
                );
            }
            function s(e) {
                var t = (function (e, t) {
                    if ('object' !== i(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, 'string');
                        if ('object' !== i(r)) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(e);
                return 'symbol' === i(t) ? t : String(t);
            }
            var u = {
                    root: function (e) {
                        var t = e.props;
                        return (0, l.AK)('p-skeleton p-component', {
                            'p-skeleton-circle': 'circle' === t.shape,
                            'p-skeleton-none': 'none' === t.animation,
                        });
                    },
                },
                c = o.V.extend({
                    defaultProps: {
                        __TYPE: 'Skeleton',
                        shape: 'rectangle',
                        size: null,
                        width: '100%',
                        height: '1rem',
                        borderRadius: null,
                        animation: 'wave',
                        style: null,
                        className: null,
                    },
                    css: {
                        classes: u,
                        inlineStyles: { root: { position: 'relative' } },
                        styles: '\n@layer primereact {\n    .p-skeleton {\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-skeleton::after {\n        content: "";\n        animation: p-skeleton-animation 1.2s infinite;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        transform: translateX(-100%);\n        z-index: 1;\n    }\n    \n    .p-skeleton-circle {\n        border-radius: 50%;\n    }\n    \n    .p-skeleton-none::after {\n        animation: none;\n    }\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n',
                    },
                });
            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? p(Object(n), !0).forEach(function (t) {
                              var r, a, o;
                              (r = e),
                                  (a = t),
                                  (o = n[t]),
                                  (a = s(a)) in r
                                      ? Object.defineProperty(r, a, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (r[a] = o);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : p(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var f = r.memo(
                r.forwardRef(function (e, t) {
                    var n = r.useContext(a.Ou),
                        i = c.getProps(e, n),
                        s = c.setMetaData({ props: i }),
                        u = s.ptm,
                        p = s.cx,
                        f = s.sx,
                        d = s.isUnstyled;
                    (0, o.e)(c.css.styles, d, { name: 'skeleton' });
                    var b = r.useRef(null);
                    r.useImperativeHandle(t, function () {
                        return {
                            props: i,
                            getElement: function () {
                                return b.current;
                            },
                        };
                    });
                    var y = i.size
                            ? { width: i.size, height: i.size, borderRadius: i.borderRadius }
                            : { width: i.width, height: i.height, borderRadius: i.borderRadius },
                        g = (0, l.dG)(
                            {
                                ref: b,
                                className: (0, l.AK)(i.className, p('root')),
                                style: m(m({}, y), f('root')),
                            },
                            c.getOtherProps(i),
                            u('root'),
                        );
                    return r.createElement('div', g);
                }),
            );
            f.displayName = 'Skeleton';
        },
    },
]);
