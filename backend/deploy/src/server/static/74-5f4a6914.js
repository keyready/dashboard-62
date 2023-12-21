'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [74],
    {
        7074: (t, e, n) => {
            n.d(e, { u: () => g });
            var r = n(7294),
                o = n(6367),
                i = n(3652),
                u = n(3308),
                a = n(4951),
                l = n(3643);
            function c() {
                return (
                    (c = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var n = arguments[e];
                                  for (var r in n)
                                      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                              }
                              return t;
                          }),
                    c.apply(this, arguments)
                );
            }
            function p(t) {
                return (
                    (p =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t &&
                                      'function' == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof t;
                              }),
                    p(t)
                );
            }
            function s(t, e, n) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ('object' !== p(t) || null === t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, 'string');
                                if ('object' !== p(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(t);
                        })(t);
                        return 'symbol' === p(e) ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n),
                    t
                );
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function d(t, e) {
                if (t) {
                    if ('string' == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                        'Object' === n && t.constructor && (n = t.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(t)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? f(t, e)
                            : void 0
                    );
                }
            }
            function m(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var n =
                            null == t
                                ? null
                                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                                  t['@@iterator'];
                        if (null != n) {
                            var r,
                                o,
                                i,
                                u,
                                a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (((i = (n = n.call(t)).next), 0 === e)) {
                                    if (Object(n) !== n) return;
                                    l = !1;
                                } else
                                    for (
                                        ;
                                        !(l = (r = i.call(n)).done) &&
                                        (a.push(r.value), a.length !== e);
                                        l = !0
                                    );
                            } catch (t) {
                                (c = !0), (o = t);
                            } finally {
                                try {
                                    if (
                                        !l &&
                                        null != n.return &&
                                        ((u = n.return()), Object(u) !== u)
                                    )
                                        return;
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return a;
                        }
                    })(t, e) ||
                    d(t, e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            var h = {
                    root: function (t) {
                        var e = t.positionState,
                            n = t.classNameState;
                        return (0, l.AK)(
                            'p-tooltip p-component',
                            s({}, 'p-tooltip-'.concat(e), !0),
                            n,
                        );
                    },
                    arrow: 'p-tooltip-arrow',
                    text: 'p-tooltip-text',
                },
                v = i.V.extend({
                    defaultProps: {
                        __TYPE: 'Tooltip',
                        appendTo: null,
                        at: null,
                        autoHide: !0,
                        autoZIndex: !0,
                        baseZIndex: 0,
                        className: null,
                        content: null,
                        disabled: !1,
                        event: null,
                        hideDelay: 0,
                        hideEvent: 'mouseleave',
                        id: null,
                        mouseTrack: !1,
                        mouseTrackLeft: 5,
                        mouseTrackTop: 5,
                        my: null,
                        onBeforeHide: null,
                        onBeforeShow: null,
                        onHide: null,
                        onShow: null,
                        position: 'right',
                        showDelay: 0,
                        showEvent: 'mouseenter',
                        showOnDisabled: !1,
                        style: null,
                        target: null,
                        updateDelay: 0,
                        children: void 0,
                    },
                    css: {
                        classes: h,
                        styles: '\n@layer primereact {\n    .p-tooltip {\n        position: absolute;\n        padding: .25em .5rem;\n        /* #3687: Tooltip prevent scrollbar flickering */\n        top: -9999px;\n        left: -9999px;\n    }\n    \n    .p-tooltip.p-tooltip-right,\n    .p-tooltip.p-tooltip-left {\n        padding: 0 .25rem;\n    }\n    \n    .p-tooltip.p-tooltip-top,\n    .p-tooltip.p-tooltip-bottom {\n        padding:.25em 0;\n    }\n    \n    .p-tooltip .p-tooltip-text {\n       white-space: pre-line;\n       word-break: break-word;\n    }\n    \n    .p-tooltip-arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-color: transparent;\n        border-style: solid;\n    }\n    \n    .p-tooltip-right .p-tooltip-arrow {\n        top: 50%;\n        left: 0;\n        margin-top: -.25rem;\n        border-width: .25em .25em .25em 0;\n    }\n    \n    .p-tooltip-left .p-tooltip-arrow {\n        top: 50%;\n        right: 0;\n        margin-top: -.25rem;\n        border-width: .25em 0 .25em .25rem;\n    }\n    \n    .p-tooltip.p-tooltip-top {\n        padding: .25em 0;\n    }\n    \n    .p-tooltip-top .p-tooltip-arrow {\n        bottom: 0;\n        left: 50%;\n        margin-left: -.25rem;\n        border-width: .25em .25em 0;\n    }\n    \n    .p-tooltip-bottom .p-tooltip-arrow {\n        top: 0;\n        left: 50%;\n        margin-left: -.25rem;\n        border-width: 0 .25em .25rem;\n    }\n}\n',
                        inlineStyles: {
                            arrow: function (t) {
                                var e = t.context;
                                return {
                                    top: e.bottom
                                        ? '0'
                                        : e.right ||
                                          e.left ||
                                          (!e.right && !e.left && !e.top && !e.bottom)
                                        ? '50%'
                                        : null,
                                    bottom: e.top ? '0' : null,
                                    left:
                                        !e.right && (e.right || e.left || e.top || e.bottom)
                                            ? e.top || e.bottom
                                                ? '50%'
                                                : null
                                            : '0',
                                    right: e.left ? '0' : null,
                                };
                            },
                        },
                    },
                });
            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? y(Object(n), !0).forEach(function (e) {
                              s(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : y(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            var g = r.memo(
                r.forwardRef(function (t, e) {
                    var n = r.useContext(o.Ou),
                        p = v.getProps(t, n),
                        s = m(r.useState(!1), 2),
                        h = s[0],
                        y = s[1],
                        g = m(r.useState(p.position), 2),
                        w = g[0],
                        E = g[1],
                        x = m(r.useState(''), 2),
                        O = x[0],
                        S = x[1],
                        T = {
                            props: p,
                            state: { visible: h, position: w, className: O },
                            context: {
                                right: 'right' === w,
                                left: 'left' === w,
                                top: 'top' === w,
                                bottom: 'bottom' === w,
                            },
                        },
                        j = v.setMetaData(T),
                        P = j.ptm,
                        k = j.cx,
                        A = j.sx,
                        C = j.isUnstyled;
                    (0, i.e)(v.css.styles, C, { name: 'tooltip' });
                    var D,
                        I,
                        N,
                        H,
                        L,
                        R = r.useRef(null),
                        W = r.useRef(null),
                        Z = r.useRef(null),
                        _ = r.useRef(null),
                        B = r.useRef(!0),
                        M = r.useRef({}),
                        F = r.useRef(null),
                        z = m(
                            (0, u.HR)({
                                listener: function (t) {
                                    !l.p7.isTouchDevice() && it(t);
                                },
                            }),
                            2,
                        ),
                        G = z[0],
                        K = z[1],
                        U = m(
                            (0, u.KJ)({
                                target: Z.current,
                                listener: function (t) {
                                    it(t);
                                },
                                when: h,
                            }),
                            2,
                        ),
                        Y = U[0],
                        q = U[1],
                        J = function (t) {
                            return Q(t, 'mousetrack') || p.mouseTrack;
                        },
                        V = function (t) {
                            return 'true' === Q(t, 'disabled') || tt(t, 'disabled') || p.disabled;
                        },
                        X = function (t) {
                            return Q(t, 'showondisabled') || p.showOnDisabled;
                        },
                        $ = function () {
                            return Q(Z.current, 'autohide') || p.autoHide;
                        },
                        Q = function (t, e) {
                            return tt(t, 'data-pr-'.concat(e))
                                ? t.getAttribute('data-pr-'.concat(e))
                                : null;
                        },
                        tt = function (t, e) {
                            return t && t.hasAttribute(e);
                        },
                        et = function (t) {
                            var e = [Q(t, 'showevent') || p.showEvent],
                                n = [Q(t, 'hideevent') || p.hideEvent];
                            if (J(t)) (e = ['mousemove']), (n = ['mouseleave']);
                            else {
                                var r = Q(t, 'event') || p.event;
                                'focus' === r && ((e = ['focus']), (n = ['blur'])),
                                    'both' === r &&
                                        ((e = ['focus', 'mouseenter']),
                                        (n = ['blur', 'mouseleave']));
                            }
                            return { showEvents: e, hideEvents: n };
                        },
                        nt = function (t, e) {
                            if (W.current) {
                                var n = Q(t, 'tooltip') || p.content;
                                n
                                    ? ((W.current.innerHTML = ''),
                                      W.current.appendChild(document.createTextNode(n)),
                                      e())
                                    : p.children && e();
                            }
                        },
                        rt = function (t) {
                            nt(Z.current, function () {
                                var e = F.current,
                                    r = e.pageX,
                                    i = e.pageY;
                                p.autoZIndex &&
                                    !l.P9.get(R.current) &&
                                    l.P9.set(
                                        'tooltip',
                                        R.current,
                                        (n && n.autoZIndex) || o.ZP.autoZIndex,
                                        p.baseZIndex ||
                                            (n && n.zIndex.tooltip) ||
                                            o.ZP.zIndex.tooltip,
                                    ),
                                    (R.current.style.left = ''),
                                    (R.current.style.top = ''),
                                    $() && (R.current.style.pointerEvents = 'none');
                                var u = J(Z.current) || 'mouse' === t;
                                ((u && !_.current) || u) &&
                                    (_.current = {
                                        width: l.p7.getOuterWidth(R.current),
                                        height: l.p7.getOuterHeight(R.current),
                                    }),
                                    ut(Z.current, { x: r, y: i }, t);
                            });
                        },
                        ot = function (t) {
                            Z.current = t.currentTarget;
                            var e,
                                n = V(Z.current);
                            (e = X(Z.current) && n ? Z.current.firstChild : Z.current),
                                !(p.content || Q(e, 'tooltip') || p.children) ||
                                    n ||
                                    ((F.current = t),
                                    h
                                        ? pt('updateDelay', rt)
                                        : st(p.onBeforeShow, {
                                              originalEvent: t,
                                              target: Z.current,
                                          }) &&
                                          pt('showDelay', function () {
                                              y(!0),
                                                  st(p.onShow, {
                                                      originalEvent: t,
                                                      target: Z.current,
                                                  });
                                          }));
                        },
                        it = function (t) {
                            ft(),
                                h &&
                                    st(p.onBeforeHide, { originalEvent: t, target: Z.current }) &&
                                    pt('hideDelay', function () {
                                        ($() || !1 !== B.current) &&
                                            (l.P9.clear(R.current),
                                            l.p7.removeClass(R.current, 'p-tooltip-active'),
                                            y(!1),
                                            st(p.onHide, { originalEvent: t, target: Z.current }));
                                    });
                        },
                        ut = function (t, e, n) {
                            var r = 0,
                                o = 0,
                                i = n || w;
                            if ((J(t) || 'mouse' == i) && e) {
                                var u = {
                                    width: l.p7.getOuterWidth(R.current),
                                    height: l.p7.getOuterHeight(R.current),
                                };
                                (r = e.x), (o = e.y);
                                var a = (function (t) {
                                        return {
                                            top: Q(t, 'mousetracktop') || p.mouseTrackTop,
                                            left: Q(t, 'mousetrackleft') || p.mouseTrackLeft,
                                        };
                                    })(t),
                                    c = a.top,
                                    s = a.left;
                                switch (i) {
                                    case 'left':
                                        (r -= u.width + s), (o -= u.height / 2 - c);
                                        break;
                                    case 'right':
                                    case 'mouse':
                                        (r += s), (o -= u.height / 2 - c);
                                        break;
                                    case 'top':
                                        (r -= u.width / 2 - s), (o -= u.height + c);
                                        break;
                                    case 'bottom':
                                        (r -= u.width / 2 - s), (o += c);
                                }
                                r <= 0 || _.current.width > u.width
                                    ? ((R.current.style.left = '0px'),
                                      (R.current.style.right =
                                          window.innerWidth - u.width - r + 'px'))
                                    : ((R.current.style.right = ''),
                                      (R.current.style.left = r + 'px')),
                                    (R.current.style.top = o + 'px'),
                                    l.p7.addClass(R.current, 'p-tooltip-active');
                            } else {
                                var f = l.p7.findCollisionPosition(i),
                                    d = Q(t, 'my') || p.my || f.my,
                                    m = Q(t, 'at') || p.at || f.at;
                                (R.current.style.padding = '0px'),
                                    l.p7.flipfitCollision(R.current, t, d, m, function (t) {
                                        var e = t.at,
                                            n = e.x,
                                            r = e.y,
                                            o = t.my.x,
                                            i = p.at
                                                ? 'center' !== n && n !== o
                                                    ? n
                                                    : r
                                                : t.at[''.concat(f.axis)];
                                        (R.current.style.padding = ''),
                                            E(i),
                                            at(i),
                                            l.p7.addClass(R.current, 'p-tooltip-active');
                                    });
                            }
                        },
                        at = function (t) {
                            if (R.current) {
                                var e = getComputedStyle(R.current);
                                'left' === t
                                    ? (R.current.style.left =
                                          parseFloat(e.left) - 2 * parseFloat(e.paddingLeft) + 'px')
                                    : 'top' === t &&
                                      (R.current.style.top =
                                          parseFloat(e.top) - 2 * parseFloat(e.paddingTop) + 'px');
                            }
                        },
                        lt = function (t) {
                            if (t) {
                                var e = et(t),
                                    n = e.showEvents,
                                    r = e.hideEvents,
                                    o = dt(t);
                                n.forEach(function (t) {
                                    return null == o ? void 0 : o.addEventListener(t, ot);
                                }),
                                    r.forEach(function (t) {
                                        return null == o ? void 0 : o.addEventListener(t, it);
                                    });
                            }
                        },
                        ct = function (t) {
                            if (t) {
                                var e = et(t),
                                    n = e.showEvents,
                                    r = e.hideEvents,
                                    o = dt(t);
                                n.forEach(function (t) {
                                    return null == o ? void 0 : o.removeEventListener(t, ot);
                                }),
                                    r.forEach(function (t) {
                                        return null == o ? void 0 : o.removeEventListener(t, it);
                                    });
                            }
                        },
                        pt = function (t, e) {
                            ft();
                            var n = Q(Z.current, t.toLowerCase()) || p[t];
                            n
                                ? (M.current[''.concat(t)] = setTimeout(function () {
                                      return e();
                                  }, n))
                                : e();
                        },
                        st = function (t) {
                            if (t) {
                                for (
                                    var e = arguments.length,
                                        n = new Array(e > 1 ? e - 1 : 0),
                                        r = 1;
                                    r < e;
                                    r++
                                )
                                    n[r - 1] = arguments[r];
                                var o = t.apply(void 0, n);
                                return void 0 === o && (o = !0), o;
                            }
                            return !0;
                        },
                        ft = function () {
                            Object.values(M.current).forEach(function (t) {
                                return clearTimeout(t);
                            });
                        },
                        dt = function (t) {
                            if (t) {
                                if (X(t)) {
                                    if (t.hasWrapper) return t.parentElement;
                                    var e = document.createElement('span');
                                    return (
                                        l.p7.addClass(e, 'p-tooltip-target-wrapper'),
                                        t.parentNode.insertBefore(e, t),
                                        e.appendChild(t),
                                        (t.hasWrapper = !0),
                                        e
                                    );
                                }
                                var n;
                                return (
                                    t.hasWrapper &&
                                        ((n = t.parentElement).replaceWith.apply(
                                            n,
                                            (function (t) {
                                                if (Array.isArray(t)) return f(t);
                                            })((r = t.parentElement.childNodes)) ||
                                                (function (t) {
                                                    if (
                                                        ('undefined' != typeof Symbol &&
                                                            null != t[Symbol.iterator]) ||
                                                        null != t['@@iterator']
                                                    )
                                                        return Array.from(t);
                                                })(r) ||
                                                d(r) ||
                                                (function () {
                                                    throw new TypeError(
                                                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                    );
                                                })(),
                                        ),
                                        delete t.hasWrapper),
                                    t
                                );
                            }
                            var r;
                            return null;
                        },
                        mt = function (t) {
                            vt(t), ht(t);
                        },
                        ht = function (t) {
                            yt(t || p.target, lt);
                        },
                        vt = function (t) {
                            yt(t || p.target, ct);
                        },
                        yt = function (t, e) {
                            if ((t = l.gb.getRefElement(t)))
                                if (l.p7.isElement(t)) e(t);
                                else {
                                    var n = function (t) {
                                        l.p7.find(document, t).forEach(function (t) {
                                            e(t);
                                        });
                                    };
                                    t instanceof Array
                                        ? t.forEach(function (t) {
                                              n(t);
                                          })
                                        : n(t);
                                }
                        };
                    if (
                        ((0, u.nw)(function () {
                            h && Z.current && V(Z.current) && it();
                        }),
                        (0, u.rf)(
                            function () {
                                return (
                                    ht(),
                                    function () {
                                        vt();
                                    }
                                );
                            },
                            [ot, it, p.target],
                        ),
                        (0, u.rf)(
                            function () {
                                if (h) {
                                    var t = ((n = Z.current), Q(n, 'position') || w),
                                        e = Q(Z.current, 'classname');
                                    E(t), S(e), rt(t), G(), Y();
                                } else
                                    E(p.position),
                                        S(''),
                                        (Z.current = null),
                                        (_.current = null),
                                        (B.current = !0);
                                var n;
                                return function () {
                                    K(), q();
                                };
                            },
                            [h],
                        ),
                        (0, u.rf)(
                            function () {
                                h &&
                                    pt('updateDelay', function () {
                                        nt(Z.current, function () {
                                            ut(Z.current);
                                        });
                                    });
                            },
                            [p.content],
                        ),
                        (0, u.zq)(function () {
                            ft(), vt(), l.P9.clear(R.current);
                        }),
                        r.useImperativeHandle(e, function () {
                            return {
                                props: p,
                                updateTargetEvents: mt,
                                loadTargetEvents: ht,
                                unloadTargetEvents: vt,
                                show: ot,
                                hide: it,
                                getElement: function () {
                                    return R.current;
                                },
                                getTarget: function () {
                                    return Z.current;
                                },
                            };
                        }),
                        h)
                    ) {
                        var bt =
                            ((D = Z.current),
                            (I = !(p.content || Q(D, 'tooltip'))),
                            (N = (0, l.dG)(
                                {
                                    'id': p.id,
                                    'className': (0, l.AK)(
                                        p.className,
                                        k('root', { positionState: w, classNameState: O }),
                                    ),
                                    'style': p.style,
                                    'role': 'tooltip',
                                    'aria-hidden': h,
                                    'onMouseEnter': function (t) {
                                        $() || (B.current = !1);
                                    },
                                    'onMouseLeave': function (t) {
                                        return (function (t) {
                                            $() || ((B.current = !0), it(t));
                                        })(t);
                                    },
                                },
                                v.getOtherProps(p),
                                P('root'),
                            )),
                            (H = (0, l.dG)(
                                { className: k('arrow'), style: A('arrow', b({}, T)) },
                                P('arrow'),
                            )),
                            (L = (0, l.dG)({ className: k('text') }, P('text'))),
                            r.createElement(
                                'div',
                                c({ ref: R }, N),
                                r.createElement('div', H),
                                r.createElement('div', c({ ref: W }, L), I && p.children),
                            ));
                        return r.createElement(a.h, {
                            element: bt,
                            appendTo: p.appendTo,
                            visible: !0,
                        });
                    }
                    return null;
                }),
            );
            g.displayName = 'Tooltip';
        },
    },
]);
