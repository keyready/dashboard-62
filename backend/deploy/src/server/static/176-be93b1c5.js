'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [176],
    {
        9403: (e, t, n) => {
            n.d(t, { z: () => E });
            var r = n(7294),
                o = n(6367),
                i = n(3652),
                a = n(3643),
                l = n(5807),
                u = n(9868),
                c = n(7074);
            function s() {
                return (
                    (s = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var r in n)
                                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                          }),
                    s.apply(this, arguments)
                );
            }
            function p(e) {
                return (
                    (p =
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
                    p(e)
                );
            }
            function f(e, t, n) {
                return (
                    (t = (function (e) {
                        var t = (function (e, t) {
                            if ('object' !== p(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(e, 'string');
                                if ('object' !== p(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' === p(t) ? t : String(t);
                    })(t)) in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }
            var y = {
                    root: function (e) {
                        var t = e.props;
                        return (0, a.AK)(
                            'p-badge p-component',
                            f(
                                {
                                    'p-badge-no-gutter':
                                        a.gb.isNotEmpty(t.value) && 1 === String(t.value).length,
                                    'p-badge-dot': a.gb.isEmpty(t.value),
                                    'p-badge-lg': 'large' === t.size,
                                    'p-badge-xl': 'xlarge' === t.size,
                                },
                                'p-badge-'.concat(t.severity),
                                null !== t.severity,
                            ),
                        );
                    },
                },
                d = i.V.extend({
                    defaultProps: {
                        __TYPE: 'Badge',
                        __parentMetadata: null,
                        value: null,
                        severity: null,
                        size: null,
                        style: null,
                        className: null,
                        children: void 0,
                    },
                    css: {
                        classes: y,
                        styles: '\n@layer primereact {\n    .p-badge {\n        display: inline-block;\n        border-radius: 10px;\n        text-align: center;\n        padding: 0 .5rem;\n    }\n    \n    .p-overlay-badge {\n        position: relative;\n    }\n    \n    .p-overlay-badge .p-badge {\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(50%,-50%);\n        transform-origin: 100% 0;\n        margin: 0;\n    }\n    \n    .p-badge-dot {\n        width: .5rem;\n        min-width: .5rem;\n        height: .5rem;\n        border-radius: 50%;\n        padding: 0;\n    }\n    \n    .p-badge-no-gutter {\n        padding: 0;\n        border-radius: 50%;\n    }\n}\n',
                    },
                });
            function g(e, t) {
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
            var b = r.memo(
                r.forwardRef(function (e, t) {
                    var n = r.useContext(o.Ou),
                        l = d.getProps(e, n),
                        u = d.setMetaData(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? g(Object(n), !0).forEach(function (t) {
                                              f(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n),
                                          )
                                        : g(Object(n)).forEach(function (t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t),
                                              );
                                          });
                                }
                                return e;
                            })({ props: l }, l.__parentMetadata),
                        ),
                        c = u.ptm,
                        s = u.cx,
                        p = u.isUnstyled;
                    (0, i.e)(d.css.styles, p, { name: 'badge' });
                    var y = r.useRef(null);
                    r.useImperativeHandle(t, function () {
                        return {
                            props: l,
                            getElement: function () {
                                return y.current;
                            },
                        };
                    });
                    var b = (0, a.dG)(
                        { ref: y, style: l.style, className: (0, a.AK)(l.className, s('root')) },
                        d.getOtherProps(l),
                        c('root'),
                    );
                    return r.createElement('span', b, l.value);
                }),
            );
            b.displayName = 'Badge';
            var v = {
                    icon: function (e) {
                        var t = e.props;
                        return (0, a.AK)(
                            'p-button-icon p-c',
                            f({}, 'p-button-icon-'.concat(t.iconPos), t.label),
                        );
                    },
                    loadingIcon: function (e) {
                        var t = e.props,
                            n = e.className;
                        return (0, a.AK)(n, { 'p-button-loading-icon': t.loading });
                    },
                    label: 'p-button-label p-c',
                    root: function (e) {
                        var t,
                            n = e.props,
                            r = e.size,
                            o = e.disabled;
                        return (0, a.AK)(
                            'p-button p-component',
                            (f(
                                (t = {
                                    'p-button-icon-only':
                                        (n.icon || n.loading) && !n.label && !n.children,
                                    'p-button-vertical':
                                        ('top' === n.iconPos || 'bottom' === n.iconPos) && n.label,
                                    'p-disabled': o,
                                    'p-button-loading': n.loading,
                                    'p-button-outlined': n.outlined,
                                    'p-button-raised': n.raised,
                                    'p-button-link': n.link,
                                    'p-button-text': n.text,
                                    'p-button-rounded': n.rounded,
                                    'p-button-loading-label-only': n.loading && !n.icon && n.label,
                                }),
                                'p-button-loading-'.concat(n.iconPos),
                                n.loading && n.label,
                            ),
                            f(t, 'p-button-'.concat(r), r),
                            f(t, 'p-button-'.concat(n.severity), n.severity),
                            t),
                        );
                    },
                },
                m = i.V.extend({
                    defaultProps: {
                        __TYPE: 'Button',
                        __parentMetadata: null,
                        badge: null,
                        badgeClassName: null,
                        className: null,
                        children: void 0,
                        disabled: !1,
                        icon: null,
                        iconPos: 'left',
                        label: null,
                        link: !1,
                        loading: !1,
                        loadingIcon: null,
                        outlined: !1,
                        raised: !1,
                        rounded: !1,
                        severity: null,
                        size: null,
                        text: !1,
                        tooltip: null,
                        tooltipOptions: null,
                        visible: !0,
                    },
                    css: { classes: v },
                });
            function h(e, t) {
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
            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? h(Object(n), !0).forEach(function (t) {
                              f(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : h(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var E = r.memo(
                r.forwardRef(function (e, t) {
                    var n = r.useContext(o.Ou),
                        p = m.getProps(e, n),
                        y = p.disabled || p.loading,
                        d = O(
                            O({ props: p }, p.__parentMetadata),
                            {},
                            { context: { disabled: y } },
                        ),
                        g = m.setMetaData(d),
                        v = g.ptm,
                        h = g.cx,
                        E = g.isUnstyled;
                    (0, i.e)(m.css.styles, E, { name: 'button', styled: !0 });
                    var P = r.useRef(t);
                    if (
                        (r.useEffect(
                            function () {
                                a.gb.combinedRefs(P, t);
                            },
                            [P, t],
                        ),
                        !1 === p.visible)
                    )
                        return null;
                    var x,
                        j = !y || (p.tooltipOptions && p.tooltipOptions.showOnDisabled),
                        C = a.gb.isNotEmpty(p.tooltip) && j,
                        w = { large: 'lg', small: 'sm' }[p.size],
                        k = (function () {
                            var e = (0, a.AK)(
                                    'p-button-icon p-c',
                                    f({}, 'p-button-icon-'.concat(p.iconPos), p.label),
                                ),
                                t = (0, a.dG)({ className: h('icon') }, v('icon'));
                            e = (0, a.AK)(e, { 'p-button-loading-icon': p.loading });
                            var n = (0, a.dG)(
                                    { className: h('loadingIcon', { className: e }) },
                                    v('loadingIcon'),
                                ),
                                o = p.loading
                                    ? p.loadingIcon || r.createElement(l.L, s({}, n, { spin: !0 }))
                                    : p.icon;
                            return a.Cz.getJSXIcon(o, O({}, t), { props: p });
                        })(),
                        S =
                            ((x = (0, a.dG)({ className: h('label') }, v('label'))),
                            p.label
                                ? r.createElement('span', x, p.label)
                                : !p.children &&
                                  !p.label &&
                                  r.createElement(
                                      'span',
                                      s({}, x, { dangerouslySetInnerHTML: { __html: '&nbsp;' } }),
                                  )),
                        A = (function () {
                            if (p.badge) {
                                var e = (0, a.dG)(
                                    {
                                        className: (0, a.AK)(p.badgeClassName),
                                        value: p.badge,
                                        unstyled: p.unstyled,
                                        __parentMetadata: { parent: d },
                                    },
                                    v('badge'),
                                );
                                return r.createElement(b, e, p.badge);
                            }
                            return null;
                        })(),
                        D = p.label ? p.label + (p.badge ? ' ' + p.badge : '') : p['aria-label'],
                        N = (0, a.dG)(
                            {
                                'ref': P,
                                'aria-label': D,
                                'className': (0, a.AK)(
                                    p.className,
                                    h('root', { size: w, disabled: y }),
                                ),
                                'disabled': y,
                            },
                            m.getOtherProps(p),
                            v('root'),
                        );
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            'button',
                            N,
                            k,
                            S,
                            p.children,
                            A,
                            r.createElement(u.H, null),
                        ),
                        C &&
                            r.createElement(
                                c.u,
                                s({ target: P, content: p.tooltip }, p.tooltipOptions, {
                                    pt: v('tooltip'),
                                }),
                            ),
                    );
                }),
            );
            E.displayName = 'Button';
        },
        8445: (e, t, n) => {
            n.d(t, { p: () => d });
            var r = n(7294),
                o = n(4320);
            function i() {
                return (
                    (i = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var r in n)
                                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                          }),
                    i.apply(this, arguments)
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function l(e, t) {
                if (e) {
                    if ('string' == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? a(e, t)
                            : void 0
                    );
                }
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
            function c(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return a(e);
                    })(e) ||
                    (function (e) {
                        if (
                            ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                            null != e['@@iterator']
                        )
                            return Array.from(e);
                    })(e) ||
                    l(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(
                            e,
                            ((o = r.key),
                            (i = void 0),
                            (i = (function (e, t) {
                                if ('object' !== u(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, 'string');
                                    if ('object' !== u(r)) return r;
                                    throw new TypeError(
                                        '@@toPrimitive must return a primitive value.',
                                    );
                                }
                                return String(e);
                            })(o)),
                            'symbol' === u(i) ? i : String(i)),
                            r,
                        );
                }
                var o, i;
            }
            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var f = (function () {
                    function e() {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError('Cannot call a class as a function');
                        })(this, e);
                    }
                    var t, n;
                    return (
                        (t = e),
                        (n = [
                            {
                                key: 'equals',
                                value: function (e, t, n) {
                                    return n && e && 'object' === u(e) && t && 'object' === u(t)
                                        ? this.resolveFieldData(e, n) ===
                                              this.resolveFieldData(t, n)
                                        : this.deepEquals(e, t);
                                },
                            },
                            {
                                key: 'deepEquals',
                                value: function (e, t) {
                                    if (e === t) return !0;
                                    if (e && t && 'object' == u(e) && 'object' == u(t)) {
                                        var n,
                                            r,
                                            o,
                                            i = Array.isArray(e),
                                            a = Array.isArray(t);
                                        if (i && a) {
                                            if ((r = e.length) !== t.length) return !1;
                                            for (n = r; 0 != n--; )
                                                if (!this.deepEquals(e[n], t[n])) return !1;
                                            return !0;
                                        }
                                        if (i !== a) return !1;
                                        var l = e instanceof Date,
                                            c = t instanceof Date;
                                        if (l !== c) return !1;
                                        if (l && c) return e.getTime() === t.getTime();
                                        var s = e instanceof RegExp,
                                            p = t instanceof RegExp;
                                        if (s !== p) return !1;
                                        if (s && p) return e.toString() === t.toString();
                                        var f = Object.keys(e);
                                        if ((r = f.length) !== Object.keys(t).length) return !1;
                                        for (n = r; 0 != n--; )
                                            if (!Object.prototype.hasOwnProperty.call(t, f[n]))
                                                return !1;
                                        for (n = r; 0 != n--; )
                                            if (((o = f[n]), !this.deepEquals(e[o], t[o])))
                                                return !1;
                                        return !0;
                                    }
                                    return e != e && t != t;
                                },
                            },
                            {
                                key: 'resolveFieldData',
                                value: function (e, t) {
                                    if (!e || !t) return null;
                                    try {
                                        var n = e[t];
                                        if (this.isNotEmpty(n)) return n;
                                    } catch (e) {}
                                    if (Object.keys(e).length) {
                                        if (this.isFunction(t)) return t(e);
                                        if (this.isNotEmpty(e[t])) return e[t];
                                        if (-1 === t.indexOf('.')) return e[t];
                                        for (
                                            var r = t.split('.'), o = e, i = 0, a = r.length;
                                            i < a;
                                            ++i
                                        ) {
                                            if (null == o) return null;
                                            o = o[r[i]];
                                        }
                                        return o;
                                    }
                                    return null;
                                },
                            },
                            {
                                key: 'findDiffKeys',
                                value: function (e, t) {
                                    return e && t
                                        ? Object.keys(e)
                                              .filter(function (e) {
                                                  return !t.hasOwnProperty(e);
                                              })
                                              .reduce(function (t, n) {
                                                  return (t[n] = e[n]), t;
                                              }, {})
                                        : {};
                                },
                            },
                            {
                                key: 'reduceKeys',
                                value: function (e, t) {
                                    var n = {};
                                    return e && t && 0 !== t.length
                                        ? (Object.keys(e)
                                              .filter(function (e) {
                                                  return t.some(function (t) {
                                                      return e.startsWith(t);
                                                  });
                                              })
                                              .forEach(function (t) {
                                                  (n[t] = e[t]), delete e[t];
                                              }),
                                          n)
                                        : n;
                                },
                            },
                            {
                                key: 'reorderArray',
                                value: function (e, t, n) {
                                    e &&
                                        t !== n &&
                                        (n >= e.length && ((n %= e.length), (t %= e.length)),
                                        e.splice(n, 0, e.splice(t, 1)[0]));
                                },
                            },
                            {
                                key: 'findIndexInList',
                                value: function (e, t, n) {
                                    var r = this;
                                    return t
                                        ? n
                                            ? t.findIndex(function (t) {
                                                  return r.equals(t, e, n);
                                              })
                                            : t.findIndex(function (t) {
                                                  return t === e;
                                              })
                                        : -1;
                                },
                            },
                            {
                                key: 'getJSXElement',
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            n = new Array(t > 1 ? t - 1 : 0),
                                            r = 1;
                                        r < t;
                                        r++
                                    )
                                        n[r - 1] = arguments[r];
                                    return this.isFunction(e) ? e.apply(void 0, n) : e;
                                },
                            },
                            {
                                key: 'getItemValue',
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            n = new Array(t > 1 ? t - 1 : 0),
                                            r = 1;
                                        r < t;
                                        r++
                                    )
                                        n[r - 1] = arguments[r];
                                    return this.isFunction(e) ? e.apply(void 0, n) : e;
                                },
                            },
                            {
                                key: 'getProp',
                                value: function (e) {
                                    var t =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : '',
                                        n =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {},
                                        r = e ? e[t] : void 0;
                                    return void 0 === r ? n[t] : r;
                                },
                            },
                            {
                                key: 'getPropCaseInsensitive',
                                value: function (e, t) {
                                    var n =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {},
                                        r = this.toFlatCase(t);
                                    for (var o in e)
                                        if (e.hasOwnProperty(o) && this.toFlatCase(o) === r)
                                            return e[o];
                                    for (var i in n)
                                        if (n.hasOwnProperty(i) && this.toFlatCase(i) === r)
                                            return n[i];
                                },
                            },
                            {
                                key: 'getMergedProps',
                                value: function (e, t) {
                                    return Object.assign({}, t, e);
                                },
                            },
                            {
                                key: 'getDiffProps',
                                value: function (e, t) {
                                    return this.findDiffKeys(e, t);
                                },
                            },
                            {
                                key: 'getPropValue',
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            n = new Array(t > 1 ? t - 1 : 0),
                                            r = 1;
                                        r < t;
                                        r++
                                    )
                                        n[r - 1] = arguments[r];
                                    return this.isFunction(e) ? e.apply(void 0, n) : e;
                                },
                            },
                            {
                                key: 'getComponentProp',
                                value: function (e) {
                                    var t =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : '',
                                        n =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {};
                                    return this.isNotEmpty(e)
                                        ? this.getProp(e.props, t, n)
                                        : void 0;
                                },
                            },
                            {
                                key: 'getComponentProps',
                                value: function (e, t) {
                                    return this.isNotEmpty(e)
                                        ? this.getMergedProps(e.props, t)
                                        : void 0;
                                },
                            },
                            {
                                key: 'getComponentDiffProps',
                                value: function (e, t) {
                                    return this.isNotEmpty(e)
                                        ? this.getDiffProps(e.props, t)
                                        : void 0;
                                },
                            },
                            {
                                key: 'isValidChild',
                                value: function (e, t, n) {
                                    return (
                                        !!e &&
                                        (this.getComponentProp(e, '__TYPE') ||
                                            (e.type ? e.type.displayName : void 0)) === t
                                    );
                                },
                            },
                            {
                                key: 'getRefElement',
                                value: function (e) {
                                    return e
                                        ? 'object' === u(e) && e.hasOwnProperty('current')
                                            ? e.current
                                            : e
                                        : null;
                                },
                            },
                            {
                                key: 'combinedRefs',
                                value: function (e, t) {
                                    e &&
                                        t &&
                                        ('function' == typeof t
                                            ? t(e.current)
                                            : (t.current = e.current));
                                },
                            },
                            {
                                key: 'removeAccents',
                                value: function (e) {
                                    return (
                                        e &&
                                            e.search(/[\xC0-\xFF]/g) > -1 &&
                                            (e = e
                                                .replace(/[\xC0-\xC5]/g, 'A')
                                                .replace(/[\xC6]/g, 'AE')
                                                .replace(/[\xC7]/g, 'C')
                                                .replace(/[\xC8-\xCB]/g, 'E')
                                                .replace(/[\xCC-\xCF]/g, 'I')
                                                .replace(/[\xD0]/g, 'D')
                                                .replace(/[\xD1]/g, 'N')
                                                .replace(/[\xD2-\xD6\xD8]/g, 'O')
                                                .replace(/[\xD9-\xDC]/g, 'U')
                                                .replace(/[\xDD]/g, 'Y')
                                                .replace(/[\xDE]/g, 'P')
                                                .replace(/[\xE0-\xE5]/g, 'a')
                                                .replace(/[\xE6]/g, 'ae')
                                                .replace(/[\xE7]/g, 'c')
                                                .replace(/[\xE8-\xEB]/g, 'e')
                                                .replace(/[\xEC-\xEF]/g, 'i')
                                                .replace(/[\xF1]/g, 'n')
                                                .replace(/[\xF2-\xF6\xF8]/g, 'o')
                                                .replace(/[\xF9-\xFC]/g, 'u')
                                                .replace(/[\xFE]/g, 'p')
                                                .replace(/[\xFD\xFF]/g, 'y')),
                                        e
                                    );
                                },
                            },
                            {
                                key: 'toFlatCase',
                                value: function (e) {
                                    return this.isNotEmpty(e) && this.isString(e)
                                        ? e.replace(/(-|_)/g, '').toLowerCase()
                                        : e;
                                },
                            },
                            {
                                key: 'toCapitalCase',
                                value: function (e) {
                                    return this.isNotEmpty(e) && this.isString(e)
                                        ? e[0].toUpperCase() + e.slice(1)
                                        : e;
                                },
                            },
                            {
                                key: 'trim',
                                value: function (e) {
                                    return this.isNotEmpty(e) && this.isString(e) ? e.trim() : e;
                                },
                            },
                            {
                                key: 'isEmpty',
                                value: function (e) {
                                    return (
                                        null == e ||
                                        '' === e ||
                                        (Array.isArray(e) && 0 === e.length) ||
                                        (!(e instanceof Date) &&
                                            'object' === u(e) &&
                                            0 === Object.keys(e).length)
                                    );
                                },
                            },
                            {
                                key: 'isNotEmpty',
                                value: function (e) {
                                    return !this.isEmpty(e);
                                },
                            },
                            {
                                key: 'isFunction',
                                value: function (e) {
                                    return !!(e && e.constructor && e.call && e.apply);
                                },
                            },
                            {
                                key: 'isObject',
                                value: function (e) {
                                    return (
                                        null !== e &&
                                        e instanceof Object &&
                                        e.constructor === Object
                                    );
                                },
                            },
                            {
                                key: 'isDate',
                                value: function (e) {
                                    return (
                                        null !== e && e instanceof Date && e.constructor === Date
                                    );
                                },
                            },
                            {
                                key: 'isArray',
                                value: function (e) {
                                    return null !== e && Array.isArray(e);
                                },
                            },
                            {
                                key: 'isString',
                                value: function (e) {
                                    return null !== e && 'string' == typeof e;
                                },
                            },
                            {
                                key: 'isPrintableCharacter',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : '';
                                    return this.isNotEmpty(e) && 1 === e.length && e.match(/\S| /);
                                },
                            },
                            {
                                key: 'isLetter',
                                value: function (e) {
                                    return (
                                        e &&
                                        (e.toUpperCase() != e.toLowerCase() ||
                                            e.codePointAt(0) > 127)
                                    );
                                },
                            },
                            {
                                key: 'findLast',
                                value: function (e, t) {
                                    var n;
                                    if (this.isNotEmpty(e))
                                        try {
                                            n = e.findLast(t);
                                        } catch (r) {
                                            n = c(e).reverse().find(t);
                                        }
                                    return n;
                                },
                            },
                            {
                                key: 'findLastIndex',
                                value: function (e, t) {
                                    var n = -1;
                                    if (this.isNotEmpty(e))
                                        try {
                                            n = e.findLastIndex(t);
                                        } catch (r) {
                                            n = e.lastIndexOf(c(e).reverse().find(t));
                                        }
                                    return n;
                                },
                            },
                            {
                                key: 'sort',
                                value: function (e, t) {
                                    var n =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : 1,
                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                        o =
                                            arguments.length > 4 && void 0 !== arguments[4]
                                                ? arguments[4]
                                                : 1,
                                        i = this.compare(e, t, r, n),
                                        a = n;
                                    return (
                                        (this.isEmpty(e) || this.isEmpty(t)) &&
                                            (a = 1 === o ? n : o),
                                        a * i
                                    );
                                },
                            },
                            {
                                key: 'compare',
                                value: function (e, t, n) {
                                    var r =
                                            arguments.length > 3 && void 0 !== arguments[3]
                                                ? arguments[3]
                                                : 1,
                                        o = this.isEmpty(e),
                                        i = this.isEmpty(t);
                                    return o && i
                                        ? 0
                                        : o
                                        ? r
                                        : i
                                        ? -r
                                        : 'string' == typeof e && 'string' == typeof t
                                        ? n(e, t)
                                        : e < t
                                        ? -1
                                        : e > t
                                        ? 1
                                        : 0;
                                },
                            },
                            {
                                key: 'localeComparator',
                                value: function (e) {
                                    return new Intl.Collator(e, { numeric: !0 }).compare;
                                },
                            },
                            {
                                key: 'findChildrenByKey',
                                value: function (e, t) {
                                    var n,
                                        r = (function (e, t) {
                                            var n =
                                                ('undefined' != typeof Symbol &&
                                                    e[Symbol.iterator]) ||
                                                e['@@iterator'];
                                            if (!n) {
                                                if (
                                                    Array.isArray(e) ||
                                                    (n = (function (e, t) {
                                                        if (e) {
                                                            if ('string' == typeof e)
                                                                return p(e, t);
                                                            var n = Object.prototype.toString
                                                                .call(e)
                                                                .slice(8, -1);
                                                            return (
                                                                'Object' === n &&
                                                                    e.constructor &&
                                                                    (n = e.constructor.name),
                                                                'Map' === n || 'Set' === n
                                                                    ? Array.from(e)
                                                                    : 'Arguments' === n ||
                                                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                          n,
                                                                      )
                                                                    ? p(e, t)
                                                                    : void 0
                                                            );
                                                        }
                                                    })(e)) ||
                                                    (t && e && 'number' == typeof e.length)
                                                ) {
                                                    n && (e = n);
                                                    var r = 0,
                                                        o = function () {};
                                                    return {
                                                        s: o,
                                                        n: function () {
                                                            return r >= e.length
                                                                ? { done: !0 }
                                                                : { done: !1, value: e[r++] };
                                                        },
                                                        e: function (e) {
                                                            throw e;
                                                        },
                                                        f: o,
                                                    };
                                                }
                                                throw new TypeError(
                                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                );
                                            }
                                            var i,
                                                a = !0,
                                                l = !1;
                                            return {
                                                s: function () {
                                                    n = n.call(e);
                                                },
                                                n: function () {
                                                    var e = n.next();
                                                    return (a = e.done), e;
                                                },
                                                e: function (e) {
                                                    (l = !0), (i = e);
                                                },
                                                f: function () {
                                                    try {
                                                        a || null == n.return || n.return();
                                                    } finally {
                                                        if (l) throw i;
                                                    }
                                                },
                                            };
                                        })(e);
                                    try {
                                        for (r.s(); !(n = r.n()).done; ) {
                                            var o = n.value;
                                            if (o.key === t) return o.children || [];
                                            if (o.children) {
                                                var i = this.findChildrenByKey(o.children, t);
                                                if (i.length > 0) return i;
                                            }
                                        }
                                    } catch (e) {
                                        r.e(e);
                                    } finally {
                                        r.f();
                                    }
                                    return [];
                                },
                            },
                            {
                                key: 'mutateFieldData',
                                value: function (e, t, n) {
                                    if ('object' === u(e) && 'string' == typeof t)
                                        for (
                                            var r = t.split('.'), o = e, i = 0, a = r.length;
                                            i < a;
                                            ++i
                                        ) {
                                            if (i + 1 - a == 0) {
                                                o[r[i]] = n;
                                                break;
                                            }
                                            o[r[i]] || (o[r[i]] = {}), (o = o[r[i]]);
                                        }
                                },
                            },
                        ]),
                        null && s(t.prototype, null),
                        n && s(t, n),
                        Object.defineProperty(t, 'prototype', { writable: !1 }),
                        e
                    );
                })(),
                y = 0,
                d = r.memo(
                    r.forwardRef(function (e, t) {
                        var n,
                            a,
                            u = o.A.getPTI(e),
                            c =
                                ((n = r.useState(e.id)),
                                (a = 2),
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
                                                o,
                                                i,
                                                a,
                                                l = [],
                                                u = !0,
                                                c = !1;
                                            try {
                                                if (((i = (n = n.call(e)).next), 0 === t)) {
                                                    if (Object(n) !== n) return;
                                                    u = !1;
                                                } else
                                                    for (
                                                        ;
                                                        !(u = (r = i.call(n)).done) &&
                                                        (l.push(r.value), l.length !== t);
                                                        u = !0
                                                    );
                                            } catch (e) {
                                                (c = !0), (o = e);
                                            } finally {
                                                try {
                                                    if (
                                                        !u &&
                                                        null != n.return &&
                                                        ((a = n.return()), Object(a) !== a)
                                                    )
                                                        return;
                                                } finally {
                                                    if (c) throw o;
                                                }
                                            }
                                            return l;
                                        }
                                    })(n, a) ||
                                    l(n, a) ||
                                    (function () {
                                        throw new TypeError(
                                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })()),
                            s = c[0],
                            p = c[1];
                        return (
                            r.useEffect(
                                function () {
                                    f.isEmpty(s) &&
                                        p(
                                            (function () {
                                                return (
                                                    y++,
                                                    ''
                                                        .concat(
                                                            arguments.length > 0 &&
                                                                void 0 !== arguments[0]
                                                                ? arguments[0]
                                                                : 'pr_id_',
                                                        )
                                                        .concat(y)
                                                );
                                            })('pr_icon_clip_'),
                                        );
                                },
                                [s],
                            ),
                            r.createElement(
                                'svg',
                                i(
                                    {
                                        ref: t,
                                        width: '14',
                                        height: '14',
                                        viewBox: '0 0 14 14',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                    },
                                    u,
                                ),
                                r.createElement(
                                    'g',
                                    { clipPath: 'url(#'.concat(s, ')') },
                                    r.createElement('path', {
                                        d: 'M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z',
                                        fill: 'currentColor',
                                    }),
                                ),
                                r.createElement(
                                    'defs',
                                    null,
                                    r.createElement(
                                        'clipPath',
                                        { id: s },
                                        r.createElement('rect', {
                                            width: '14',
                                            height: '14',
                                            fill: 'white',
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                );
            d.displayName = 'PlusIcon';
        },
    },
]);
