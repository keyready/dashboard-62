'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [774],
    {
        6094: (e, t, n) => {
            n.d(t, { o: () => b });
            var r = n(7294),
                o = n(6367),
                i = n(3652),
                a = n(411),
                l = n(7074),
                u = n(3643);
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
            function c(e) {
                return (
                    (c =
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
                    c(e)
                );
            }
            function p(e) {
                var t = (function (e, t) {
                    if ('object' !== c(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, 'string');
                        if ('object' !== c(r)) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(e);
                return 'symbol' === c(t) ? t : String(t);
            }
            var f = {
                    root: function (e) {
                        var t = e.props,
                            n = e.isFilled;
                        return (0, u.AK)(
                            'p-inputtext p-component',
                            { 'p-disabled': t.disabled, 'p-filled': n },
                            t.className,
                        );
                    },
                },
                d = i.V.extend({
                    defaultProps: {
                        __TYPE: 'InputText',
                        __parentMetadata: null,
                        keyfilter: null,
                        validateOnly: !1,
                        tooltip: null,
                        tooltipOptions: null,
                        onBeforeInput: null,
                        onInput: null,
                        onKeyDown: null,
                        onPaste: null,
                        children: void 0,
                    },
                    css: { classes: f },
                });
            function y(e, t) {
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
                        ? y(Object(n), !0).forEach(function (t) {
                              var r, o, i;
                              (r = e),
                                  (o = t),
                                  (i = n[t]),
                                  (o = p(o)) in r
                                      ? Object.defineProperty(r, o, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (r[o] = i);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : y(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var b = r.memo(
                r.forwardRef(function (e, t) {
                    var n = r.useContext(o.Ou),
                        c = d.getProps(e, n),
                        p = d.setMetaData(
                            m(
                                m({ props: c }, c.__parentMetadata),
                                {},
                                { context: { disabled: c.disabled } },
                            ),
                        ),
                        f = p.ptm,
                        y = p.cx,
                        b = p.isUnstyled;
                    (0, i.e)(d.css.styles, b, { name: 'inputtext', styled: !0 });
                    var v = r.useRef(t);
                    r.useEffect(
                        function () {
                            u.gb.combinedRefs(v, t);
                        },
                        [v, t],
                    );
                    var g = r.useMemo(
                            function () {
                                return u.gb.isNotEmpty(c.value) || u.gb.isNotEmpty(c.defaultValue);
                            },
                            [c.value, c.defaultValue],
                        ),
                        h = u.gb.isNotEmpty(c.tooltip),
                        O = (0, u.dG)(
                            {
                                className: y('root', { isFilled: g }),
                                onBeforeInput: function (e) {
                                    c.onBeforeInput && c.onBeforeInput(e),
                                        c.keyfilter &&
                                            a.F.onBeforeInput(e, c.keyfilter, c.validateOnly);
                                },
                                onInput: function (e) {
                                    var t = e.target,
                                        n = !0;
                                    c.keyfilter &&
                                        c.validateOnly &&
                                        (n = a.F.validate(e, c.keyfilter)),
                                        c.onInput && c.onInput(e, n),
                                        u.gb.isNotEmpty(t.value)
                                            ? u.p7.addClass(t, 'p-filled')
                                            : u.p7.removeClass(t, 'p-filled');
                                },
                                onKeyDown: function (e) {
                                    c.onKeyDown && c.onKeyDown(e),
                                        c.keyfilter &&
                                            a.F.onKeyPress(e, c.keyfilter, c.validateOnly);
                                },
                                onPaste: function (e) {
                                    c.onPaste && c.onPaste(e),
                                        c.keyfilter && a.F.onPaste(e, c.keyfilter, c.validateOnly);
                                },
                            },
                            d.getOtherProps(c),
                            f('root'),
                        );
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement('input', s({ ref: v }, O)),
                        h &&
                            r.createElement(
                                l.u,
                                s({ target: v, content: c.tooltip }, c.tooltipOptions, {
                                    pt: f('tooltip'),
                                }),
                            ),
                    );
                }),
            );
            b.displayName = 'InputText';
        },
        411: (e, t, n) => {
            n.d(t, { F: () => i });
            var r = n(3643);
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var i = {
                DEFAULT_MASKS: {
                    pint: /[\d]/,
                    int: /[\d\-]/,
                    pnum: /[\d\.]/,
                    money: /[\d\.\s,]/,
                    num: /[\d\-\.]/,
                    hex: /[0-9a-f]/i,
                    email: /[a-z0-9_\.\-@]/i,
                    alpha: /[a-z_]/i,
                    alphanum: /[a-z0-9_]/i,
                },
                getRegex: function (e) {
                    return i.DEFAULT_MASKS[e] ? i.DEFAULT_MASKS[e] : e;
                },
                onBeforeInput: function (e, t, n) {
                    !n && r.p7.isAndroid() && this.validateKey(e, e.data, t);
                },
                onKeyPress: function (e, t, n) {
                    n || r.p7.isAndroid() || e.ctrlKey || e.altKey || this.validateKey(e, e.key, t);
                },
                onPaste: function (e, t, n) {
                    if (!n) {
                        var r = this.getRegex(t);
                        ((i = e.clipboardData.getData('text')),
                        (function (e) {
                            if (Array.isArray(e)) return o(e);
                        })(i) ||
                            (function (e) {
                                if (
                                    ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                                    null != e['@@iterator']
                                )
                                    return Array.from(e);
                            })(i) ||
                            (function (e, t) {
                                if (e) {
                                    if ('string' == typeof e) return o(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return (
                                        'Object' === n && e.constructor && (n = e.constructor.name),
                                        'Map' === n || 'Set' === n
                                            ? Array.from(e)
                                            : 'Arguments' === n ||
                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                            ? o(e, t)
                                            : void 0
                                    );
                                }
                            })(i) ||
                            (function () {
                                throw new TypeError(
                                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                );
                            })()).forEach(function (t) {
                            if (!r.test(t)) return e.preventDefault(), !1;
                        });
                    }
                    var i;
                },
                validateKey: function (e, t, n) {
                    null != t && 1 === t.length && (this.getRegex(n).test(t) || e.preventDefault());
                },
                validate: function (e, t) {
                    var n = e.target.value,
                        r = !0,
                        o = this.getRegex(t);
                    return n && !o.test(n) && (r = !1), r;
                },
            };
        },
        7974: (e, t, n) => {
            n.d(t, { i: () => g });
            var r = n(7294),
                o = n(6367),
                i = n(3652),
                a = n(3308),
                l = n(3643);
            function u() {
                return (
                    (u = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var r in n)
                                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                          }),
                    u.apply(this, arguments)
                );
            }
            function s(e) {
                return (
                    (s =
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
                    s(e)
                );
            }
            function c(e) {
                var t = (function (e, t) {
                    if ('object' !== s(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, 'string');
                        if ('object' !== s(r)) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(e);
                return 'symbol' === s(t) ? t : String(t);
            }
            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function f(e, t) {
                if (e) {
                    if ('string' == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? p(e, t)
                            : void 0
                    );
                }
            }
            function d(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n =
                            null == e
                                ? null
                                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                  e['@@iterator'];
                        if (null != n) {
                            var r,
                                o,
                                i,
                                a,
                                l = [],
                                u = !0,
                                s = !1;
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
                                (s = !0), (o = e);
                            } finally {
                                try {
                                    if (
                                        !u &&
                                        null != n.return &&
                                        ((a = n.return()), Object(a) !== a)
                                    )
                                        return;
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return l;
                        }
                    })(e, t) ||
                    f(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            var y = {
                    handle: function (e) {
                        var t = e.index,
                            n = e.handleIndex;
                        return (0, l.AK)('p-slider-handle', {
                            'p-slider-handle-start': 0 === t,
                            'p-slider-handle-end': 1 === t,
                            'p-slider-handle-active': n.current === t,
                        });
                    },
                    range: 'p-slider-range',
                    root: function (e) {
                        var t = e.props,
                            n = e.vertical,
                            r = e.horizontal;
                        return (0, l.AK)('p-slider p-component', t.className, {
                            'p-disabled': t.disabled,
                            'p-slider-horizontal': r,
                            'p-slider-vertical': n,
                        });
                    },
                },
                m = i.V.extend({
                    defaultProps: {
                        __TYPE: 'Slider',
                        id: null,
                        value: null,
                        min: 0,
                        max: 100,
                        orientation: 'horizontal',
                        step: null,
                        range: !1,
                        style: null,
                        className: null,
                        disabled: !1,
                        tabIndex: 0,
                        onChange: null,
                        onSlideEnd: null,
                        children: void 0,
                    },
                    css: {
                        classes: y,
                        styles: '\n@layer primereact {\n    .p-slider {\n        position: relative;\n    }\n    \n    .p-slider .p-slider-handle {\n        position: absolute;\n        cursor: grab;\n        touch-action: none;\n        display: block;\n        z-index: 1;\n    }\n    \n    .p-slider .p-slider-handle.p-slider-handle-active {\n        z-index: 2;\n    }\n    \n    .p-slider-range {\n        position: absolute;\n        display: block;\n    }\n    \n    .p-slider-horizontal .p-slider-range {\n        top: 0;\n        left: 0;\n        height: 100%;\n    }\n    \n    .p-slider-horizontal .p-slider-handle {\n        top: 50%;\n    }\n    \n    .p-slider-vertical {\n        height: 100px;\n    }\n    \n    .p-slider-vertical .p-slider-handle {\n        left: 50%;\n    }\n    \n    .p-slider-vertical .p-slider-range {\n        bottom: 0;\n        left: 0;\n        width: 100%;\n    }\n}\n',
                        inlineStyles: {
                            handle: { position: 'absolute' },
                            range: { position: 'absolute' },
                        },
                    },
                });
            function b(e, t) {
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
            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? b(Object(n), !0).forEach(function (t) {
                              var r, o, i;
                              (r = e),
                                  (o = t),
                                  (i = n[t]),
                                  (o = c(o)) in r
                                      ? Object.defineProperty(r, o, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (r[o] = i);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : b(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var g = r.memo(
                r.forwardRef(function (e, t) {
                    var n = r.useContext(o.Ou),
                        s = m.getProps(e, n),
                        c = r.useRef(null),
                        y = r.useRef(0),
                        b = r.useRef(!1),
                        g = r.useRef(!1),
                        h = r.useRef(0),
                        O = r.useRef(0),
                        S = r.useRef(0),
                        w = r.useRef(0),
                        x = s.range ? s.value || [s.min, s.max] : s.value || 0,
                        j = 'horizontal' === s.orientation,
                        E = 'vertical' === s.orientation,
                        P = d(
                            (0, a.OR)({
                                type: 'mousemove',
                                listener: function (e) {
                                    return Y(e);
                                },
                            }),
                            2,
                        ),
                        A = P[0],
                        I = P[1],
                        D = d(
                            (0, a.OR)({
                                type: 'mouseup',
                                listener: function (e) {
                                    return W(e);
                                },
                            }),
                            2,
                        ),
                        R = D[0],
                        k = D[1],
                        K = d(
                            (0, a.OR)({
                                type: 'touchmove',
                                listener: function (e) {
                                    return Y(e);
                                },
                            }),
                            2,
                        ),
                        _ = K[0],
                        N = K[1],
                        C = d(
                            (0, a.OR)({
                                type: 'touchend',
                                listener: function (e) {
                                    return W(e);
                                },
                            }),
                            2,
                        ),
                        F = C[0],
                        M = C[1],
                        T = m.setMetaData({ props: s }),
                        z = T.ptm,
                        U = T.cx,
                        B = T.sx,
                        V = T.isUnstyled;
                    (0, i.e)(m.css.styles, V, { name: 'slider' });
                    var G = function (e, t) {
                            var n = s.range ? x[y.current] : x,
                                r = (s.step || 1) * t;
                            $(e, n + r), e.preventDefault();
                        },
                        L = function (e, t) {
                            s.disabled ||
                                ((g.current = !0), H(), (b.current = !0), (y.current = t));
                        },
                        Y = function (e) {
                            g.current && (X(e), e.preventDefault());
                        },
                        W = function (e) {
                            if (g.current) {
                                g.current = !1;
                                var t = X(e);
                                s.onSlideEnd && s.onSlideEnd({ originalEvent: e, value: t }),
                                    I(),
                                    k(),
                                    N(),
                                    M();
                            }
                        },
                        H = function () {
                            var e = c.current.getBoundingClientRect();
                            (h.current = e.left + l.p7.getWindowScrollLeft()),
                                (O.current = e.top + l.p7.getWindowScrollTop()),
                                (S.current = c.current.offsetWidth),
                                (w.current = c.current.offsetHeight);
                        },
                        X = function (e) {
                            var t,
                                n = l.gb.isNotEmpty(e.touches) ? e.touches[0].pageX : e.pageX,
                                r = l.gb.isNotEmpty(e.touches) ? e.touches[0].pageY : e.pageY;
                            if (n && r) {
                                t = j
                                    ? (100 * (n - h.current)) / S.current
                                    : (100 * (O.current + w.current - r)) / w.current;
                                var o = (s.max - s.min) * (t / 100) + s.min;
                                if (s.step) {
                                    var i = s.range ? x[y.current] : x,
                                        a = o - i;
                                    a < 0
                                        ? (o = i + Math.ceil(o / s.step - i / s.step) * s.step)
                                        : a > 0 &&
                                          (o = i + Math.floor(o / s.step - i / s.step) * s.step);
                                } else o = Math.floor(o);
                                return $(e, o);
                            }
                        },
                        $ = function (e, t) {
                            var n,
                                r = parseFloat(t.toFixed(10)),
                                o = r;
                            return (
                                s.range
                                    ? (0 === y.current
                                          ? r < s.min
                                              ? (r = s.min)
                                              : r > s.max && (r = s.max)
                                          : r > s.max
                                          ? (r = s.max)
                                          : r < s.min && (r = s.min),
                                      (((n = x),
                                      (o =
                                          (function (e) {
                                              if (Array.isArray(e)) return p(e);
                                          })(n) ||
                                          (function (e) {
                                              if (
                                                  ('undefined' != typeof Symbol &&
                                                      null != e[Symbol.iterator]) ||
                                                  null != e['@@iterator']
                                              )
                                                  return Array.from(e);
                                          })(n) ||
                                          f(n) ||
                                          (function () {
                                              throw new TypeError(
                                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                              );
                                          })()))[y.current] = r),
                                      s.onChange && s.onChange({ originalEvent: e, value: o }))
                                    : (r < s.min ? (r = s.min) : r > s.max && (r = s.max),
                                      (o = r),
                                      s.onChange && s.onChange({ originalEvent: e, value: o })),
                                o
                            );
                        },
                        q = function (e, t, n) {
                            (e = l.gb.isEmpty(e) ? null : e), (t = l.gb.isEmpty(t) ? null : t);
                            var o = {
                                    transition: g.current ? 'none' : null,
                                    left: null != e && e + '%',
                                    bottom: null != t && t + '%',
                                },
                                i = (0, l.dG)(
                                    v(
                                        {
                                            'className': U('handle', { index: n, handleIndex: y }),
                                            'style': v(
                                                v(
                                                    {},
                                                    B('handle', {
                                                        dragging: g,
                                                        leftValue: e,
                                                        bottomValue: t,
                                                    }),
                                                ),
                                                o,
                                            ),
                                            'tabIndex': s.tabIndex,
                                            'role': 'slider',
                                            'onMouseDown': function (e) {
                                                return (function (e, t) {
                                                    A(), R(), L(0, t);
                                                })(0, n);
                                            },
                                            'onTouchStart': function (e) {
                                                return (function (e, t) {
                                                    _(), F(), L(0, t);
                                                })(0, n);
                                            },
                                            'onKeyDown': function (e) {
                                                return (function (e, t) {
                                                    if (!s.disabled) {
                                                        y.current = t;
                                                        var n = e.key;
                                                        'ArrowRight' === n || 'ArrowUp' === n
                                                            ? G(e, 1)
                                                            : ('ArrowLeft' !== n &&
                                                                  'ArrowDown' !== n) ||
                                                              G(e, -1);
                                                    }
                                                })(e, n);
                                            },
                                            'aria-valuemin': s.min,
                                            'aria-valuemax': s.max,
                                            'aria-valuenow': e || t || 0,
                                            'aria-orientation': s.orientation,
                                        },
                                        ae,
                                    ),
                                    z('handle'),
                                );
                            return r.createElement('span', i);
                        };
                    r.useImperativeHandle(t, function () {
                        return {
                            props: s,
                            getElement: function () {
                                return c.current;
                            },
                        };
                    });
                    var J,
                        Q,
                        Z,
                        ee,
                        te,
                        ne,
                        re,
                        oe,
                        ie = m.getOtherProps(s),
                        ae = l.gb.reduceKeys(ie, l.p7.ARIA_PROPS),
                        le = s.range
                            ? ((J =
                                  (100 * (x[0] < s.min ? s.min : x[0] - s.min)) / (s.max - s.min)),
                              (Q = (100 * (x[1] > s.max ? s.max : x[1] - s.min)) / (s.max - s.min)),
                              (Z = j ? q(J, null, 0) : q(null, J, 0)),
                              (ee = j ? q(Q, null, 1) : q(null, Q, 1)),
                              (te = Q > J ? Q - J : J - Q),
                              (ne = Q > J ? J : Q),
                              (re = j
                                  ? { left: ne + '%', width: te + '%' }
                                  : { bottom: ne + '%', height: te + '%' }),
                              (oe = (0, l.dG)(
                                  { className: U('range'), style: v(v({}, B('range')), re) },
                                  z('range'),
                              )),
                              r.createElement(r.Fragment, null, r.createElement('span', oe), Z, ee))
                            : (function () {
                                  var e;
                                  e =
                                      x < s.min
                                          ? s.min
                                          : x > s.max
                                          ? s.max
                                          : (100 * (x - s.min)) / (s.max - s.min);
                                  var t = j ? { width: e + '%' } : { height: e + '%' },
                                      n = j ? q(e, null, null) : q(null, e, null),
                                      o = (0, l.dG)(
                                          { className: U('range'), style: v(v({}, B('range')), t) },
                                          z('range'),
                                      );
                                  return r.createElement(
                                      r.Fragment,
                                      null,
                                      r.createElement('span', o),
                                      n,
                                  );
                              })(),
                        ue = (0, l.dG)(
                            {
                                style: s.style,
                                className: U('root', { vertical: E, horizontal: j }),
                                onClick: function (e) {
                                    if (!s.disabled) {
                                        if (!b.current) {
                                            H();
                                            var t = X(e);
                                            s.onSlideEnd &&
                                                s.onSlideEnd({ originalEvent: e, value: t });
                                        }
                                        b.current = !1;
                                    }
                                },
                            },
                            m.getOtherProps(s),
                            z('root'),
                        );
                    return r.createElement('div', u({ id: s.id, ref: c }, ue), le);
                }),
            );
            g.displayName = 'Slider';
        },
    },
]);
