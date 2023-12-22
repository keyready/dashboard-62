'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [437],
    {
        4382: (e, n, t) => {
            t.d(n, { x: () => w });
            var r = t(7294),
                o = t(6367),
                i = t(3652),
                u = t(4488),
                a = t(3308),
                l = t(4951),
                c = t(3643),
                s = t(3158),
                m = t(9868);
            function p() {
                return (
                    (p = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    p.apply(this, arguments)
                );
            }
            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function d(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var t =
                            null == e
                                ? null
                                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                  e['@@iterator'];
                        if (null != t) {
                            var r,
                                o,
                                i,
                                u,
                                a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (((i = (t = t.call(e)).next), 0 === n)) {
                                    if (Object(t) !== t) return;
                                    l = !1;
                                } else
                                    for (
                                        ;
                                        !(l = (r = i.call(t)).done) &&
                                        (a.push(r.value), a.length !== n);
                                        l = !0
                                    );
                            } catch (e) {
                                (c = !0), (o = e);
                            } finally {
                                try {
                                    if (
                                        !l &&
                                        null != t.return &&
                                        ((u = t.return()), Object(u) !== u)
                                    )
                                        return;
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return a;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (e) {
                            if ('string' == typeof e) return f(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === t && e.constructor && (t = e.constructor.name),
                                'Map' === t || 'Set' === t
                                    ? Array.from(e)
                                    : 'Arguments' === t ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                    ? f(e, n)
                                    : void 0
                            );
                        }
                    })(e, n) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            var b = {
                    root: function (e) {
                        var n = e.context;
                        return (0, c.AK)('p-contextmenu p-component', {
                            'p-input-filled':
                                (n && 'filled' === n.inputStyle) || 'filled' === o.ZP.inputStyle,
                            'p-ripple-disabled': (n && !1 === n.ripple) || !1 === o.ZP.ripple,
                        });
                    },
                    menu: function (e) {
                        var n = e.menuProps;
                        return (0, c.AK)({ 'p-submenu-list': !n.root });
                    },
                    menuitem: function (e) {
                        var n = e.item,
                            t = e.active;
                        return (0, c.AK)('p-menuitem', { 'p-menuitem-active': t }, n.className);
                    },
                    action: function (e) {
                        var n = e.item;
                        return (0, c.AK)('p-menuitem-link', { 'p-disabled': n.disabled });
                    },
                    icon: 'p-menuitem-icon',
                    submenuIcon: 'p-submenu-icon',
                    label: 'p-menuitem-text',
                    separator: 'p-menu-separator',
                    transition: 'p-contextmenu',
                    submenuTransition: 'p-contextmenusub',
                },
                y = i.V.extend({
                    defaultProps: {
                        __TYPE: 'ContextMenu',
                        id: null,
                        model: null,
                        style: null,
                        className: null,
                        global: !1,
                        autoZIndex: !0,
                        baseZIndex: 0,
                        breakpoint: void 0,
                        scrollHeight: '400px',
                        appendTo: null,
                        transitionOptions: null,
                        onShow: null,
                        onHide: null,
                        submenuIcon: null,
                        children: void 0,
                    },
                    css: {
                        classes: b,
                        styles: '\n@layer primereact {\n    .p-contextmenu ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n    \n    .p-contextmenu .p-submenu-list {\n        position: absolute;\n        min-width: 100%;\n        z-index: 1;\n    }\n    \n    .p-contextmenu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-contextmenu .p-menuitem-text {\n        line-height: 1;\n    }\n    \n    .p-contextmenu .p-menuitem {\n        position: relative;\n    }\n    \n    .p-contextmenu .p-menuitem-link .p-submenu-icon {\n        margin-left: auto;\n    }\n    \n    .p-contextmenu-enter {\n        opacity: 0;\n    }\n    \n    .p-contextmenu-enter-active {\n        opacity: 1;\n        transition: opacity 250ms;\n    }\n}\n',
                    },
                });
            function v(e) {
                return (
                    (v =
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
                    v(e)
                );
            }
            function h(e, n, t) {
                return (
                    (n = (function (e) {
                        var n = (function (e, n) {
                            if ('object' !== v(e) || null === e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' !== v(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' === v(n) ? n : String(n);
                    })(n)) in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = t),
                    e
                );
            }
            function g(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n &&
                        (r = r.filter(function (n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                        })),
                        t.push.apply(t, r);
                }
                return t;
            }
            function x(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? g(Object(t), !0).forEach(function (n) {
                              h(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : g(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          });
                }
                return e;
            }
            var O = r.memo(function (e) {
                var n = d(r.useState(null), 2),
                    t = n[0],
                    o = n[1],
                    i = r.useRef(null),
                    l = e.root || !e.resetMenu,
                    f = e.ptm,
                    b = e.cx,
                    y = function (n, r) {
                        return f(r, { hostName: e.hostName, context: { active: t === n } });
                    };
                !0 === e.resetMenu && null !== t && o(null);
                var v = function (n, r) {
                        r.disabled
                            ? n.preventDefault()
                            : (r.url || n.preventDefault(),
                              r.command && r.command({ originalEvent: n, item: r }),
                              e.isMobileMode && r.items && o(t && r === t ? null : r),
                              r.items || e.onLeafClick(n));
                    },
                    g = function () {
                        if (!e.isMobileMode) {
                            var n = i.current.parentElement,
                                t = c.p7.getOffset(n),
                                r = c.p7.getViewport(),
                                o = i.current.offsetParent
                                    ? i.current.offsetWidth
                                    : c.p7.getHiddenElementOuterWidth(i.current),
                                u = c.p7.getOuterWidth(n.children[0]),
                                a =
                                    parseInt(t.top, 10) +
                                    i.current.offsetHeight -
                                    c.p7.getWindowScrollTop();
                            a > r.height
                                ? (i.current.style.top = r.height - a + 'px')
                                : (i.current.style.top = '0px'),
                                parseInt(t.left, 10) + u + o >
                                r.width - c.p7.calculateScrollbarWidth()
                                    ? (i.current.style.left = -1 * o + 'px')
                                    : (i.current.style.left = u + 'px');
                        }
                    };
                (0, a.rf)(function () {
                    l && g();
                });
                var w = e.model
                        ? e.model.map(function (n, i) {
                              return n.separator
                                  ? (function (n) {
                                        var t = e.id + '_separator_' + n,
                                            o = (0, c.dG)(
                                                {
                                                    id: t,
                                                    key: t,
                                                    className: b('separator'),
                                                    role: 'separator',
                                                },
                                                f('separator', { hostName: e.hostName }),
                                            );
                                        return r.createElement('li', o);
                                    })(i)
                                  : (function (n, i) {
                                        var u;
                                        if (!1 === n.visible) return null;
                                        var a = t === n,
                                            l = n.id || e.id + '_' + i,
                                            p = (0, c.dG)({ className: b('icon') }, y(n, 'icon')),
                                            d = c.Cz.getJSXIcon(n.icon, x({}, p), {
                                                props: e.menuProps,
                                            }),
                                            g = (0, c.dG)(
                                                { className: b('submenuIcon') },
                                                y(n, 'submenuIcon'),
                                            ),
                                            w = (0, c.dG)({ className: b('label') }, y(n, 'label')),
                                            P =
                                                n.items &&
                                                c.Cz.getJSXIcon(
                                                    e.submenuIcon || r.createElement(s.o, g),
                                                    x({}, g),
                                                    { props: e.menuProps },
                                                ),
                                            S = n.label && r.createElement('span', w, n.label),
                                            k = (function (n, o) {
                                                return n.items
                                                    ? r.createElement(O, {
                                                          id: e.id + '_' + o,
                                                          hostName: e.hostName,
                                                          menuProps: e.menuProps,
                                                          model: n.items,
                                                          resetMenu: n !== t,
                                                          onLeafClick: e.onLeafClick,
                                                          isMobileMode: e.isMobileMode,
                                                          submenuIcon: e.submenuIcon,
                                                          ptm: f,
                                                          cx: b,
                                                      })
                                                    : null;
                                            })(n, i),
                                            E = (0, c.dG)(
                                                {
                                                    'href': n.url || '#',
                                                    'className': b('action', { item: n }),
                                                    'target': n.target,
                                                    'onClick': function (e) {
                                                        return v(e, n);
                                                    },
                                                    'role': 'menuitem',
                                                    'aria-haspopup': null != n.items,
                                                    'aria-disabled': n.disabled,
                                                },
                                                y(n, 'action'),
                                            ),
                                            j = r.createElement(
                                                'a',
                                                E,
                                                d,
                                                S,
                                                P,
                                                r.createElement(m.H, null),
                                            );
                                        if (n.template) {
                                            var N = {
                                                onClick: function (e) {
                                                    return v(e, n);
                                                },
                                                className: 'p-menuitem-link',
                                                labelClassName: 'p-menuitem-text',
                                                iconClassName: 'p-menuitem-icon',
                                                submenuIconClassName: b('submenuIcon'),
                                                element: j,
                                                props: e,
                                                active: a,
                                            };
                                            j = c.gb.getJSXElement(n.template, n, N);
                                        }
                                        var C = (0, c.dG)(
                                            (h(
                                                (u = {
                                                    id: l,
                                                    key: l,
                                                    role: 'none',
                                                    className: b('menuitem', {
                                                        item: n,
                                                        active: a,
                                                    }),
                                                    style: n.style,
                                                }),
                                                'key',
                                                l,
                                            ),
                                            h(u, 'onMouseEnter', function (t) {
                                                return (function (n, t) {
                                                    t.disabled || e.isMobileMode
                                                        ? n.preventDefault()
                                                        : o(t);
                                                })(t, n);
                                            }),
                                            u),
                                            y(n, 'menuitem'),
                                        );
                                        return r.createElement('li', C, j, k);
                                    })(n, i);
                          })
                        : null,
                    P = (0, c.dG)(
                        { className: b('menu', { menuProps: e }) },
                        f('menu', { hostName: e.hostName }),
                    ),
                    S = (0, c.dG)(
                        {
                            classNames: b('submenuTransition'),
                            in: l,
                            timeout: { enter: 0, exit: 0 },
                            unmountOnExit: !0,
                            onEnter: function () {
                                g();
                            },
                        },
                        f('menu.transition', { hostName: e.hostName }),
                    );
                return r.createElement(
                    u.K,
                    p({ nodeRef: i }, S),
                    r.createElement('ul', p({ ref: i }, P), w),
                );
            });
            O.displayName = 'ContextMenuSub';
            var w = r.memo(
                r.forwardRef(function (e, n) {
                    var t = r.useContext(o.Ou),
                        s = y.getProps(e, t),
                        m = d(r.useState(s.id), 2),
                        f = m[0],
                        b = m[1],
                        v = d(r.useState(!1), 2),
                        h = v[0],
                        g = v[1],
                        x = d(r.useState(!1), 2),
                        w = x[0],
                        P = x[1],
                        S = d(r.useState(!1), 2),
                        k = S[0],
                        E = S[1],
                        j = d(r.useState(null), 2),
                        N = j[0],
                        C = j[1],
                        I = y.setMetaData({
                            props: s,
                            state: {
                                id: f,
                                visible: h,
                                reshow: w,
                                resetMenu: k,
                                attributeSelector: N,
                            },
                        }),
                        M = I.ptm,
                        R = I.cx,
                        T = I.isUnstyled;
                    (0, i.e)(y.css.styles, T, { name: 'contextmenu' });
                    var A = r.useRef(null),
                        H = r.useRef(null),
                        D = r.useRef(null),
                        L = (0, a.ag)(
                            'screen and (max-width: '.concat(s.breakpoint, ')'),
                            !!s.breakpoint,
                        ),
                        Z = d(
                            (0, a.OR)({
                                type: 'click',
                                listener: function (e) {
                                    B(e) && 2 !== e.button && (Y(e), E(!0));
                                },
                            }),
                            2,
                        ),
                        _ = Z[0],
                        z = Z[1],
                        G = d(
                            (0, a.OR)({
                                type: 'contextmenu',
                                when: s.global,
                                listener: function (e) {
                                    U(e);
                                },
                            }),
                            1,
                        )[0],
                        K = d(
                            (0, a.HR)({
                                listener: function (e) {
                                    h && !c.p7.isTouchDevice() && Y(e);
                                },
                            }),
                            2,
                        ),
                        W = K[0],
                        X = K[1],
                        V = function () {
                            if (!D.current) {
                                D.current = c.p7.createInlineStyle((t && t.nonce) || o.ZP.nonce);
                                var e = ''.concat(N),
                                    n = '\n@media screen and (max-width: '
                                        .concat(s.breakpoint, ') {\n    .p-contextmenu[')
                                        .concat(e, '] > ul {\n        max-height: ')
                                        .concat(s.scrollHeight, ';\n        overflow: ')
                                        .concat(
                                            s.scrollHeight ? 'auto' : '',
                                            ';\n    }\n\n    .p-contextmenu[',
                                        )
                                        .concat(
                                            e,
                                            '] .p-submenu-list {\n        position: relative;\n    }\n\n    .p-contextmenu[',
                                        )
                                        .concat(
                                            e,
                                            '] .p-menuitem-active > .p-submenu-list {\n        left: 0 !important;\n        box-shadow: none;\n        border-radius: 0;\n        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */\n    }\n\n    .p-contextmenu[',
                                        )
                                        .concat(
                                            e,
                                            '] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n        transform: rotate(-180deg);\n    }\n\n    .p-contextmenu[',
                                        )
                                        .concat(
                                            e,
                                            '] .p-submenu-icon:before {\n        content: "\\e930";\n    }\n}\n',
                                        );
                                D.current.innerHTML = n;
                            }
                        },
                        J = function () {
                            D.current = c.p7.removeInlineStyle(D.current);
                        },
                        U = function (e) {
                            e.stopPropagation(),
                                e.preventDefault(),
                                (H.current = e),
                                h ? P(!0) : (g(!0), s.onShow && s.onShow(H.current));
                        },
                        Y = function (e) {
                            (H.current = e), g(!1), P(!1), s.onHide && s.onHide(H.current);
                        },
                        q = function (e) {
                            if (e) {
                                var n = e.pageX + 1,
                                    t = e.pageY + 1,
                                    r = A.current.offsetParent
                                        ? A.current.offsetWidth
                                        : c.p7.getHiddenElementOuterWidth(A.current),
                                    o = A.current.offsetParent
                                        ? A.current.offsetHeight
                                        : c.p7.getHiddenElementOuterHeight(A.current),
                                    i = c.p7.getViewport();
                                n + r - document.body.scrollLeft > i.width && (n -= r),
                                    t + o - document.body.scrollTop > i.height && (t -= o),
                                    n < document.body.scrollLeft && (n = document.body.scrollLeft),
                                    t < document.body.scrollTop && (t = document.body.scrollTop),
                                    (A.current.style.left = n + 'px'),
                                    (A.current.style.top = t + 'px');
                            }
                        },
                        B = function (e) {
                            return (
                                A &&
                                A.current &&
                                !(A.current.isSameNode(e.target) || A.current.contains(e.target))
                            );
                        },
                        $ = function () {
                            W(), _();
                        },
                        F = function () {
                            X(), z();
                        };
                    (0, a.nw)(function () {
                        var e = (0, c.Th)();
                        !f && b(e), s.global && G(), s.breakpoint && !N && C(e);
                    }),
                        (0, a.rf)(
                            function () {
                                s.global && G();
                            },
                            [s.global],
                        ),
                        (0, a.rf)(
                            function () {
                                return (
                                    N && A.current && (A.current.setAttribute(N, ''), V()),
                                    function () {
                                        J();
                                    }
                                );
                            },
                            [N, s.breakpoint],
                        ),
                        (0, a.rf)(
                            function () {
                                h ? (g(!1), P(!1), E(!0)) : w || h || !k || U(H.current);
                            },
                            [w],
                        ),
                        (0, a.zq)(function () {
                            c.P9.clear(A.current);
                        }),
                        r.useImperativeHandle(n, function () {
                            return {
                                props: s,
                                show: U,
                                hide: Y,
                                getElement: function () {
                                    return A.current;
                                },
                            };
                        });
                    var Q,
                        ee,
                        ne =
                            ((Q = (0, c.dG)(
                                {
                                    id: s.id,
                                    className: (0, c.AK)(s.className, R('root', { context: t })),
                                    style: s.style,
                                    onClick: function (e) {
                                        E(!1);
                                    },
                                    onMouseEnter: function (e) {
                                        E(!1);
                                    },
                                },
                                y.getOtherProps(s),
                                M('root'),
                            )),
                            (ee = (0, c.dG)(
                                {
                                    classNames: R('transition'),
                                    in: h,
                                    timeout: { enter: 250, exit: 0 },
                                    options: s.transitionOptions,
                                    unmountOnExit: !0,
                                    onEnter: function () {
                                        c.p7.addStyles(A.current, { position: 'absolute' }),
                                            s.autoZIndex &&
                                                c.P9.set(
                                                    'menu',
                                                    A.current,
                                                    (t && t.autoZIndex) || o.ZP.autoZIndex,
                                                    s.baseZIndex ||
                                                        (t && t.zIndex.menu) ||
                                                        o.ZP.zIndex.menu,
                                                ),
                                            q(H.current),
                                            N &&
                                                s.breakpoint &&
                                                (A.current.setAttribute(N, ''), V());
                                    },
                                    onEntered: function () {
                                        $();
                                    },
                                    onExit: function () {
                                        F(), c.P9.clear(A.current);
                                    },
                                    onExited: function () {
                                        c.P9.clear(A.current), J();
                                    },
                                },
                                M('transition'),
                            )),
                            r.createElement(
                                u.K,
                                p({ nodeRef: A }, ee),
                                r.createElement(
                                    'div',
                                    p({ ref: A }, Q),
                                    r.createElement(O, {
                                        hostName: 'ContextMenu',
                                        id: f,
                                        menuProps: s,
                                        model: s.model,
                                        root: !0,
                                        resetMenu: k,
                                        onLeafClick: function (e) {
                                            E(!0), Y(e), e.stopPropagation();
                                        },
                                        isMobileMode: L,
                                        submenuIcon: s.submenuIcon,
                                        ptm: M,
                                        cx: R,
                                    }),
                                ),
                            ));
                    return r.createElement(l.h, { element: ne, appendTo: s.appendTo });
                }),
            );
            w.displayName = 'ContextMenu';
        },
        3158: (e, n, t) => {
            t.d(n, { o: () => u });
            var r = t(7294),
                o = t(4320);
            function i() {
                return (
                    (i = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    i.apply(this, arguments)
                );
            }
            var u = r.memo(
                r.forwardRef(function (e, n) {
                    var t = o.A.getPTI(e);
                    return r.createElement(
                        'svg',
                        i(
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
                        r.createElement('path', {
                            d: 'M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z',
                            fill: 'currentColor',
                        }),
                    );
                }),
            );
            u.displayName = 'AngleRightIcon';
        },
        4710: (e, n, t) => {
            t.d(n, { O: () => f });
            var r = t(7294),
                o = t(6367),
                i = t(3652),
                u = t(3643);
            function a(e) {
                return (
                    (a =
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
                    a(e)
                );
            }
            function l(e) {
                var n = (function (e, n) {
                    if ('object' !== a(e) || null === e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, 'string');
                        if ('object' !== a(r)) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(e);
                return 'symbol' === a(n) ? n : String(n);
            }
            var c = {
                    root: function (e) {
                        var n = e.props;
                        return (0, u.AK)('p-skeleton p-component', {
                            'p-skeleton-circle': 'circle' === n.shape,
                            'p-skeleton-none': 'none' === n.animation,
                        });
                    },
                },
                s = i.V.extend({
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
                        classes: c,
                        inlineStyles: { root: { position: 'relative' } },
                        styles: '\n@layer primereact {\n    .p-skeleton {\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-skeleton::after {\n        content: "";\n        animation: p-skeleton-animation 1.2s infinite;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        transform: translateX(-100%);\n        z-index: 1;\n    }\n    \n    .p-skeleton-circle {\n        border-radius: 50%;\n    }\n    \n    .p-skeleton-none::after {\n        animation: none;\n    }\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n',
                    },
                });
            function m(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n &&
                        (r = r.filter(function (n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                        })),
                        t.push.apply(t, r);
                }
                return t;
            }
            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? m(Object(t), !0).forEach(function (n) {
                              var r, o, i;
                              (r = e),
                                  (o = n),
                                  (i = t[n]),
                                  (o = l(o)) in r
                                      ? Object.defineProperty(r, o, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (r[o] = i);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : m(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          });
                }
                return e;
            }
            var f = r.memo(
                r.forwardRef(function (e, n) {
                    var t = r.useContext(o.Ou),
                        a = s.getProps(e, t),
                        l = s.setMetaData({ props: a }),
                        c = l.ptm,
                        m = l.cx,
                        f = l.sx,
                        d = l.isUnstyled;
                    (0, i.e)(s.css.styles, d, { name: 'skeleton' });
                    var b = r.useRef(null);
                    r.useImperativeHandle(n, function () {
                        return {
                            props: a,
                            getElement: function () {
                                return b.current;
                            },
                        };
                    });
                    var y = a.size
                            ? { width: a.size, height: a.size, borderRadius: a.borderRadius }
                            : { width: a.width, height: a.height, borderRadius: a.borderRadius },
                        v = (0, u.dG)(
                            {
                                ref: b,
                                className: (0, u.AK)(a.className, m('root')),
                                style: p(p({}, y), f('root')),
                            },
                            s.getOtherProps(a),
                            c('root'),
                        );
                    return r.createElement('div', v);
                }),
            );
            f.displayName = 'Skeleton';
        },
    },
]);
