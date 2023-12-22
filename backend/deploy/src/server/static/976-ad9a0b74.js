'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [976],
    {
        9976: (e, n, t) => {
            t.d(n, { m: () => W });
            var r = t(7294),
                o = t(6367),
                l = t(3652),
                a = t(3308),
                i = t(2285),
                c = t(3424),
                s = t(9925),
                p = t(519),
                u = t(9868),
                d = t(5807),
                f = t(3643),
                g = t(9513),
                y = t(5508),
                m = t(4320);
            function v() {
                return (
                    (v = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    v.apply(this, arguments)
                );
            }
            var h = r.memo(
                r.forwardRef(function (e, n) {
                    var t = m.A.getPTI(e);
                    return r.createElement(
                        'svg',
                        v(
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
                            d: 'M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z',
                            fill: 'currentColor',
                        }),
                    );
                }),
            );
            function b() {
                return (
                    (b = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    b.apply(this, arguments)
                );
            }
            function x(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function S(e, n) {
                if (e) {
                    if ('string' == typeof e) return x(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === t && e.constructor && (t = e.constructor.name),
                        'Map' === t || 'Set' === t
                            ? Array.from(e)
                            : 'Arguments' === t ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                            ? x(e, n)
                            : void 0
                    );
                }
            }
            function E(e) {
                return (
                    (E =
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
                    E(e)
                );
            }
            function C(e, n, t) {
                return (
                    (n = (function (e) {
                        var n = (function (e, n) {
                            if ('object' !== E(e) || null === e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' !== E(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' === E(n) ? n : String(n);
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
            function k(e, n) {
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
                                l,
                                a,
                                i = [],
                                c = !0,
                                s = !1;
                            try {
                                if (((l = (t = t.call(e)).next), 0 === n)) {
                                    if (Object(t) !== t) return;
                                    c = !1;
                                } else
                                    for (
                                        ;
                                        !(c = (r = l.call(t)).done) &&
                                        (i.push(r.value), i.length !== n);
                                        c = !0
                                    );
                            } catch (e) {
                                (s = !0), (o = e);
                            } finally {
                                try {
                                    if (
                                        !c &&
                                        null != t.return &&
                                        ((a = t.return()), Object(a) !== a)
                                    )
                                        return;
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    S(e, n) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            h.displayName = 'MinusIcon';
            var w = {
                    container: 'p-tree-container',
                    loadingIcon: 'p-tree-loading-icon',
                    loadingOverlay: 'p-tree-loading-overlay p-component-overlay',
                    searchIcon: 'p-tree-filter-icon',
                    filterContainer: 'p-tree-filter-container',
                    input: 'p-tree-filter p-inputtext p-component',
                    header: 'p-tree-header',
                    footer: 'p-tree-footer',
                    root: function (e) {
                        var n = e.props;
                        return (0, f.AK)('p-tree p-component', {
                            'p-tree-selectable': n.selectionMode,
                            'p-tree-loading': n.loading,
                            'p-disabled': n.disabled,
                        });
                    },
                    label: 'p-treenode-label',
                    checkboxIcon: 'p-checkbox-icon p-c',
                    checkboxContainer: 'p-checkbox p-component',
                    checkbox: function (e) {
                        var n = e.nodeProps,
                            t = e.checked,
                            r = e.partialChecked;
                        return (0, f.AK)('p-checkbox-box', {
                            'p-highlight': t,
                            'p-indeterminate': r,
                            'p-disabled': n.disabled,
                        });
                    },
                    nodeIcon: 'p-treenode-icon',
                    togglerIcon: 'p-tree-toggler-icon',
                    toggler: 'p-tree-toggler p-link',
                    droppoint: 'p-treenode-droppoint',
                    content: function (e) {
                        var n = e.nodeProps,
                            t = e.checked,
                            r = e.selected,
                            o = e.isCheckboxSelectionMode;
                        return (0, f.AK)('p-treenode-content', {
                            'p-treenode-selectable': n.selectionMode && !1 !== n.node.selectable,
                            'p-highlight': o() ? t : r,
                            'p-highlight-contextmenu':
                                n.contextMenuSelectionKey &&
                                n.contextMenuSelectionKey === n.node.key,
                            'p-disabled': n.disabled,
                        });
                    },
                    subgroup: 'p-treenode-children',
                    node: function (e) {
                        var n = e.isLeaf;
                        return (0, f.AK)('p-treenode', { 'p-treenode-leaf': n });
                    },
                },
                O = l.V.extend({
                    defaultProps: {
                        __TYPE: 'Tree',
                        __parentMetadata: null,
                        id: null,
                        value: null,
                        checkboxIcon: null,
                        disabled: !1,
                        selectionMode: null,
                        selectionKeys: null,
                        onSelectionChange: null,
                        contextMenuSelectionKey: null,
                        onContextMenuSelectionChange: null,
                        expandedKeys: null,
                        style: null,
                        className: null,
                        contentStyle: null,
                        contentClassName: null,
                        metaKeySelection: !0,
                        propagateSelectionUp: !0,
                        propagateSelectionDown: !0,
                        loading: !1,
                        loadingIcon: null,
                        expandIcon: null,
                        collapseIcon: null,
                        dragdropScope: null,
                        header: null,
                        footer: null,
                        showHeader: !0,
                        filter: !1,
                        filterIcon: null,
                        filterValue: null,
                        filterBy: 'label',
                        filterMode: 'lenient',
                        filterPlaceholder: null,
                        filterLocale: void 0,
                        filterTemplate: null,
                        nodeTemplate: null,
                        togglerTemplate: null,
                        onSelect: null,
                        onUnselect: null,
                        onExpand: null,
                        onCollapse: null,
                        onToggle: null,
                        onDragDrop: null,
                        onContextMenu: null,
                        onFilterValueChange: null,
                        onNodeClick: null,
                        onNodeDoubleClick: null,
                        children: void 0,
                    },
                    css: {
                        classes: w,
                        styles: '\n@layer primereact {\n    .p-tree-container {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow: auto;\n    }\n    \n    .p-treenode-children {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-treenode-selectable {\n        cursor: pointer;\n        user-select: none;\n    }\n    \n    .p-tree-toggler {\n        cursor: pointer;\n        user-select: none;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-treenode-leaf > .p-treenode-content .p-tree-toggler {\n        visibility: hidden;\n    }\n    \n    .p-treenode-content {\n        display: flex;\n        align-items: center;\n    }\n    \n    .p-tree-filter {\n        width: 100%;\n    }\n    \n    .p-tree-filter-container {\n        position: relative;\n        display: block;\n        width: 100%;\n    }\n    \n    .p-tree-filter-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-tree-loading {\n        position: relative;\n        min-height: 4rem;\n    }\n    \n    .p-tree .p-tree-loading-overlay {\n        position: absolute;\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n}\n',
                    },
                });
            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function N(e, n) {
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
            function D(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? N(Object(t), !0).forEach(function (n) {
                              C(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : N(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          });
                }
                return e;
            }
            var P = r.memo(function (e) {
                var n,
                    t,
                    l,
                    a,
                    c,
                    s,
                    p,
                    d = r.useRef(null),
                    m = r.useRef(!1),
                    v = e.isNodeLeaf(e.node),
                    b =
                        (!!e.expandedKeys && void 0 !== e.expandedKeys[e.node.key]) ||
                        e.node.expanded,
                    x = e.ptm,
                    S = e.cx,
                    E = function (n) {
                        return x(n, {
                            hostName: e.hostName,
                            context: {
                                selected: e.selected,
                                expanded: b,
                                checked: e.checked,
                                isLeaf: v,
                            },
                        });
                    },
                    C = function (n) {
                        var t = e.expandedKeys ? D({}, e.expandedKeys) : {};
                        (t[e.node.key] = !0), e.onToggle({ originalEvent: n, value: t }), O(n, !0);
                    },
                    k = function (n) {
                        var t = D({}, e.expandedKeys);
                        delete t[e.node.key], e.onToggle({ originalEvent: n, value: t }), O(n, !1);
                    },
                    w = function (n) {
                        e.disabled || (b ? k(n) : C(n), n.preventDefault(), n.stopPropagation());
                    },
                    O = function (n, t) {
                        t
                            ? e.onExpand && e.onExpand({ originalEvent: n, node: e.node })
                            : e.onCollapse && e.onCollapse({ originalEvent: n, node: e.node });
                    },
                    N = function (n) {
                        if (!e.disabled) {
                            var t = n.target.parentElement;
                            if (f.p7.hasClass(t, 'p-treenode'))
                                switch (n.which) {
                                    case 40:
                                        var r = t.children[1];
                                        if (r) M(r.children[0]);
                                        else {
                                            for (
                                                var o = t.nextElementSibling;
                                                o && f.p7.hasClass(o, 'p-treenode-droppoint');

                                            )
                                                o = o.nextElementSibling;
                                            if (o) M(o);
                                            else {
                                                var l = T(t);
                                                l && M(l);
                                            }
                                        }
                                        n.preventDefault();
                                        break;
                                    case 38:
                                        if (t.previousElementSibling)
                                            M(j(t.previousElementSibling));
                                        else {
                                            var a = K(t);
                                            a && M(a);
                                        }
                                        n.preventDefault();
                                        break;
                                    case 39:
                                        b || C(n), n.preventDefault();
                                        break;
                                    case 37:
                                        b && k(n), n.preventDefault();
                                        break;
                                    case 13:
                                        A(n), n.preventDefault();
                                }
                        }
                    },
                    T = function e(n) {
                        var t = K(n);
                        return t ? t.nextElementSibling || e(t) : null;
                    },
                    j = function e(n) {
                        var t = n.children[1];
                        return t ? e(t.children[t.children.length - 1]) : n;
                    },
                    K = function (e) {
                        var n = e.parentElement.parentElement;
                        return f.p7.hasClass(n, 'p-treenode') ? n : null;
                    },
                    M = function (e) {
                        e && e.children[0] && e.children[0].focus();
                    },
                    A = function (n) {
                        e.onClick && e.onClick({ originalEvent: n, node: e.node });
                        var t = n.target.nodeName;
                        if (
                            !e.disabled &&
                            'INPUT' !== t &&
                            'BUTTON' !== t &&
                            'A' !== t &&
                            !f.p7.hasClass(n.target, 'p-clickable')
                        ) {
                            if (e.selectionMode && !1 !== e.node.selectable) {
                                var r;
                                if (X()) {
                                    var o = V();
                                    (r = e.selectionKeys ? D({}, e.selectionKeys) : {}),
                                        o
                                            ? (e.propagateSelectionDown
                                                  ? F(e.node, !1, r)
                                                  : delete r[e.node.key],
                                              e.propagateSelectionUp &&
                                                  e.onPropagateUp &&
                                                  e.onPropagateUp({
                                                      originalEvent: n,
                                                      check: !1,
                                                      selectionKeys: r,
                                                  }),
                                              e.onUnselect &&
                                                  e.onUnselect({ originalEvent: n, node: e.node }))
                                            : (e.propagateSelectionDown
                                                  ? F(e.node, !0, r)
                                                  : (r[e.node.key] = { checked: !0 }),
                                              e.propagateSelectionUp &&
                                                  e.onPropagateUp &&
                                                  e.onPropagateUp({
                                                      originalEvent: n,
                                                      check: !0,
                                                      selectionKeys: r,
                                                  }),
                                              e.onSelect &&
                                                  e.onSelect({ originalEvent: n, node: e.node }));
                                } else {
                                    var l = R();
                                    if (!m.current && e.metaKeySelection) {
                                        var a = n.metaKey || n.ctrlKey;
                                        l && a
                                            ? (H()
                                                  ? (r = null)
                                                  : delete (r = D({}, e.selectionKeys))[e.node.key],
                                              e.onUnselect &&
                                                  e.onUnselect({ originalEvent: n, node: e.node }))
                                            : (H()
                                                  ? (r = e.node.key)
                                                  : J() &&
                                                    ((r =
                                                        a && e.selectionKeys
                                                            ? D({}, e.selectionKeys)
                                                            : {})[e.node.key] = !0),
                                              e.onSelect &&
                                                  e.onSelect({ originalEvent: n, node: e.node }));
                                    } else
                                        H()
                                            ? l
                                                ? ((r = null),
                                                  e.onUnselect &&
                                                      e.onUnselect({
                                                          originalEvent: n,
                                                          node: e.node,
                                                      }))
                                                : ((r = e.node.key),
                                                  e.onSelect &&
                                                      e.onSelect({
                                                          originalEvent: n,
                                                          node: e.node,
                                                      }))
                                            : l
                                            ? (delete (r = D({}, e.selectionKeys))[e.node.key],
                                              e.onUnselect &&
                                                  e.onUnselect({ originalEvent: n, node: e.node }))
                                            : (((r = e.selectionKeys ? D({}, e.selectionKeys) : {})[
                                                  e.node.key
                                              ] = !0),
                                              e.onSelect &&
                                                  e.onSelect({ originalEvent: n, node: e.node }));
                                }
                                e.onSelectionChange &&
                                    e.onSelectionChange({ originalEvent: n, value: r });
                            }
                            m.current = !1;
                        }
                    },
                    U = function (n) {
                        e.onDoubleClick && e.onDoubleClick({ originalEvent: n, node: e.node });
                    },
                    L = function (n) {
                        e.disabled ||
                            (f.p7.clearSelection(),
                            e.onContextMenuSelectionChange &&
                                e.onContextMenuSelectionChange({
                                    originalEvent: n,
                                    value: e.node.key,
                                }),
                            e.onContextMenu && e.onContextMenu({ originalEvent: n, node: e.node }));
                    },
                    G = function (n) {
                        var t,
                            r = n.check,
                            o = n.selectionKeys,
                            l = (function (e, n) {
                                var t =
                                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                    e['@@iterator'];
                                if (!t) {
                                    if (
                                        Array.isArray(e) ||
                                        (t = (function (e, n) {
                                            if (e) {
                                                if ('string' == typeof e) return I(e, n);
                                                var t = Object.prototype.toString
                                                    .call(e)
                                                    .slice(8, -1);
                                                return (
                                                    'Object' === t &&
                                                        e.constructor &&
                                                        (t = e.constructor.name),
                                                    'Map' === t || 'Set' === t
                                                        ? Array.from(e)
                                                        : 'Arguments' === t ||
                                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                              t,
                                                          )
                                                        ? I(e, n)
                                                        : void 0
                                                );
                                            }
                                        })(e)) ||
                                        (n && e && 'number' == typeof e.length)
                                    ) {
                                        t && (e = t);
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
                                var l,
                                    a = !0,
                                    i = !1;
                                return {
                                    s: function () {
                                        t = t.call(e);
                                    },
                                    n: function () {
                                        var e = t.next();
                                        return (a = e.done), e;
                                    },
                                    e: function (e) {
                                        (i = !0), (l = e);
                                    },
                                    f: function () {
                                        try {
                                            a || null == t.return || t.return();
                                        } finally {
                                            if (i) throw l;
                                        }
                                    },
                                };
                            })(e.node.children);
                        try {
                            for (l.s(); !(t = l.n()).done; ) {
                                var a = t.value;
                                o[a.key] && o[a.key].checked;
                            }
                        } catch (e) {
                            l.e(e);
                        } finally {
                            l.f();
                        }
                        var i = e.node.key,
                            c = f.gb.findChildrenByKey(e.originalOptions, i),
                            s = c.some(function (e) {
                                return e.key in o;
                            }),
                            p = c.every(function (e) {
                                return e.key in o && o[e.key].checked;
                            });
                        s && !p
                            ? (o[i] = { checked: !1, partialChecked: !0 })
                            : p
                            ? (o[i] = { checked: !0, partialChecked: !1 })
                            : r
                            ? (o[i] = { checked: !1, partialChecked: !1 })
                            : delete o[i],
                            e.propagateSelectionUp && e.onPropagateUp && e.onPropagateUp(n);
                    },
                    F = function e(n, t, r) {
                        if (
                            (t ? (r[n.key] = { checked: !0, partialChecked: !1 }) : delete r[n.key],
                            n.children && n.children.length)
                        )
                            for (var o = 0; o < n.children.length; o++) e(n.children[o], t, r);
                    },
                    R = function () {
                        return (
                            !(!e.selectionMode || !e.selectionKeys) &&
                            (H()
                                ? e.selectionKeys === e.node.key
                                : void 0 !== e.selectionKeys[e.node.key])
                        );
                    },
                    V = function () {
                        return (
                            (!!e.selectionKeys &&
                                e.selectionKeys[e.node.key] &&
                                e.selectionKeys[e.node.key].checked) ||
                            !1
                        );
                    },
                    H = function () {
                        return e.selectionMode && 'single' === e.selectionMode;
                    },
                    J = function () {
                        return e.selectionMode && 'multiple' === e.selectionMode;
                    },
                    X = function () {
                        return e.selectionMode && 'checkbox' === e.selectionMode;
                    },
                    _ = function () {
                        m.current = !0;
                    },
                    B = function (n) {
                        n.dataTransfer.types[1] === e.dragdropScope.toLocaleLowerCase() &&
                            ((n.dataTransfer.dropEffect = 'move'), n.preventDefault());
                    },
                    z = function (n) {
                        n.dataTransfer.types[1] === e.dragdropScope.toLocaleLowerCase() &&
                            f.p7.addClass(n.target, 'p-treenode-droppoint-active');
                    },
                    Z = function (n) {
                        n.dataTransfer.types[1] === e.dragdropScope.toLocaleLowerCase() &&
                            f.p7.removeClass(n.target, 'p-treenode-droppoint-active');
                    },
                    $ = function (n) {
                        e.dragdropScope &&
                            !1 !== e.node.droppable &&
                            (f.p7.removeClass(d.current, 'p-treenode-dragover'),
                            n.preventDefault(),
                            n.stopPropagation(),
                            e.onDrop &&
                                e.onDrop({ originalEvent: n, path: e.path, index: e.index }));
                    },
                    q = function (n) {
                        n.dataTransfer.types[1] === e.dragdropScope.toLocaleLowerCase() &&
                            !1 !== e.node.droppable &&
                            ((n.dataTransfer.dropEffect = 'move'),
                            n.preventDefault(),
                            n.stopPropagation());
                    },
                    W = function (n) {
                        n.dataTransfer.types[1] === e.dragdropScope.toLocaleLowerCase() &&
                            !1 !== e.node.droppable &&
                            f.p7.addClass(d.current, 'p-treenode-dragover');
                    },
                    Y = function (n) {
                        if (
                            n.dataTransfer.types[1] === e.dragdropScope.toLocaleLowerCase() &&
                            !1 !== e.node.droppable
                        ) {
                            var t = n.currentTarget.getBoundingClientRect();
                            (n.nativeEvent.x > t.left + t.width ||
                                n.nativeEvent.x < t.left ||
                                n.nativeEvent.y >= Math.floor(t.top + t.height) ||
                                n.nativeEvent.y < t.top) &&
                                f.p7.removeClass(d.current, 'p-treenode-dragover');
                        }
                    },
                    Q = function (n) {
                        n.dataTransfer.setData('text', e.dragdropScope),
                            n.dataTransfer.setData(e.dragdropScope, e.dragdropScope),
                            e.onDragStart &&
                                e.onDragStart({ originalEvent: n, path: e.path, index: e.index });
                    },
                    ee = function (n) {
                        e.onDragEnd && e.onDragEnd({ originalEvent: n });
                    },
                    ne = function (n) {
                        if (e.dragdropScope) {
                            var t = (0, f.dG)(
                                {
                                    className: S('droppoint'),
                                    onDrop: function (t) {
                                        return (function (n, t) {
                                            if (
                                                (n.preventDefault(),
                                                !1 !== e.node.droppable &&
                                                    (f.p7.removeClass(
                                                        n.target,
                                                        'p-treenode-droppoint-active',
                                                    ),
                                                    e.onDropPoint))
                                            ) {
                                                var r = -1 === t ? e.index : e.index + 1;
                                                e.onDropPoint({
                                                    originalEvent: n,
                                                    path: e.path,
                                                    index: r,
                                                    position: t,
                                                });
                                            }
                                        })(t, n);
                                    },
                                    onDragOver: B,
                                    onDragEnter: z,
                                    onDragLeave: Z,
                                },
                                E('droppoint'),
                            );
                            return r.createElement('li', t);
                        }
                        return null;
                    },
                    te =
                        ((t = e.disabled ? void 0 : 0),
                        (l = R()),
                        (a = V()),
                        (c = (function () {
                            var n = R(),
                                t = V(),
                                l = (function () {
                                    var n = b
                                            ? (0, o.$2)('collapseLabel')
                                            : (0, o.$2)('expandLabel'),
                                        t = (0, f.dG)(
                                            { 'className': S('togglerIcon'), 'aria-hidden': !0 },
                                            E('togglerIcon'),
                                        ),
                                        l = b
                                            ? e.collapseIcon || r.createElement(i.v, t)
                                            : e.expandIcon || r.createElement(y.X, t),
                                        a = f.Cz.getJSXIcon(l, D({}, t), { props: e, expanded: b }),
                                        c = (0, f.dG)(
                                            {
                                                'type': 'button',
                                                'className': S('toggler'),
                                                'tabIndex': -1,
                                                'onClick': w,
                                                'aria-label': n,
                                            },
                                            E('toggler'),
                                        ),
                                        s = r.createElement(
                                            'button',
                                            c,
                                            a,
                                            r.createElement(u.H, null),
                                        );
                                    if (e.togglerTemplate) {
                                        var p = {
                                            onClick: w,
                                            containerClassName: 'p-tree-toggler p-link',
                                            iconClassName: 'p-tree-toggler-icon',
                                            element: s,
                                            props: e,
                                            expanded: b,
                                        };
                                        s = f.gb.getJSXElement(e.togglerTemplate, e.node, p);
                                    }
                                    return s;
                                })(),
                                a = (function () {
                                    if (X() && !1 !== e.node.selectable) {
                                        var n = V(),
                                            t =
                                                !!e.selectionKeys &&
                                                e.selectionKeys[e.node.key] &&
                                                e.selectionKeys[e.node.key].partialChecked,
                                            o = (0, f.dG)(
                                                { className: S('checkboxIcon') },
                                                E('checkboxIcon'),
                                            ),
                                            l = n
                                                ? e.checkboxIcon || r.createElement(g.n, o)
                                                : t
                                                ? e.checkboxIcon || r.createElement(h, o)
                                                : null,
                                            a = f.Cz.getJSXIcon(l, D({}, o), e),
                                            i = (0, f.dG)(
                                                { className: S('checkboxContainer') },
                                                E('checkboxContainer'),
                                            ),
                                            c = (0, f.dG)(
                                                {
                                                    'className': S('checkbox', {
                                                        checked: n,
                                                        partialChecked: t,
                                                        nodeProps: e,
                                                    }),
                                                    'role': 'checkbox',
                                                    'aria-checked': n,
                                                },
                                                E('checkbox'),
                                            );
                                        return r.createElement(
                                            'div',
                                            i,
                                            r.createElement('div', c, a),
                                        );
                                    }
                                    return null;
                                })(),
                                c = (function () {
                                    var n =
                                        e.node.icon ||
                                        (b ? e.node.expandedIcon : e.node.collapsedIcon);
                                    if (n) {
                                        var t = (0, f.dG)(
                                            { className: (0, f.AK)(n, S('nodeIcon')) },
                                            E('nodeIcon'),
                                        );
                                        return r.createElement('span', t);
                                    }
                                    return null;
                                })(),
                                s = (function () {
                                    var n = (0, f.dG)({ className: S('label') }, E('label')),
                                        t = r.createElement('span', n, e.node.label);
                                    if (e.nodeTemplate) {
                                        var o = {
                                            onTogglerClick: w,
                                            className: 'p-treenode-label',
                                            element: t,
                                            props: e,
                                            expanded: b,
                                        };
                                        t = f.gb.getJSXElement(e.nodeTemplate, e.node, o);
                                    }
                                    return t;
                                })(),
                                p = (0, f.dG)(
                                    {
                                        ref: d,
                                        className: (0, f.AK)(
                                            e.node.className,
                                            S('content', {
                                                checked: t,
                                                selected: n,
                                                nodeProps: e,
                                                isCheckboxSelectionMode: X,
                                            }),
                                        ),
                                        style: e.node.style,
                                        onClick: A,
                                        onDoubleClick: U,
                                        onContextMenu: L,
                                        onTouchEnd: _,
                                        draggable:
                                            e.dragdropScope &&
                                            !1 !== e.node.draggable &&
                                            !e.disabled,
                                        onDrop: $,
                                        onDragOver: q,
                                        onDragEnter: W,
                                        onDragLeave: Y,
                                        onDragStart: Q,
                                        onDragEnd: ee,
                                        onKeyDown: N,
                                    },
                                    E('content'),
                                );
                            return r.createElement('div', p, l, a, c, s);
                        })()),
                        (n = (0, f.dG)({ className: S('subgroup'), role: 'group' }, E('subgroup'))),
                        (s =
                            f.gb.isNotEmpty(e.node.children) && b
                                ? r.createElement(
                                      'ul',
                                      n,
                                      e.node.children.map(function (n, t) {
                                          return r.createElement(P, {
                                              key: n.key || n.label,
                                              node: n,
                                              originalOptions: e.originalOptions,
                                              parent: e.node,
                                              index: t,
                                              last: t === e.node.children.length - 1,
                                              path: e.path + '-' + t,
                                              disabled: e.disabled,
                                              selectionMode: e.selectionMode,
                                              selectionKeys: e.selectionKeys,
                                              onSelectionChange: e.onSelectionChange,
                                              metaKeySelection: e.metaKeySelection,
                                              propagateSelectionDown: e.propagateSelectionDown,
                                              propagateSelectionUp: e.propagateSelectionUp,
                                              contextMenuSelectionKey: e.contextMenuSelectionKey,
                                              onContextMenuSelectionChange:
                                                  e.onContextMenuSelectionChange,
                                              onContextMenu: e.onContextMenu,
                                              onExpand: e.onExpand,
                                              onCollapse: e.onCollapse,
                                              onSelect: e.onSelect,
                                              onUnselect: e.onUnselect,
                                              onClick: e.onClick,
                                              onDoubleClick: e.onDoubleClick,
                                              expandedKeys: e.expandedKeys,
                                              onToggle: e.onToggle,
                                              onPropagateUp: G,
                                              nodeTemplate: e.nodeTemplate,
                                              togglerTemplate: e.togglerTemplate,
                                              isNodeLeaf: e.isNodeLeaf,
                                              dragdropScope: e.dragdropScope,
                                              onDragStart: e.onDragStart,
                                              onDragEnd: e.onDragEnd,
                                              onDrop: e.onDrop,
                                              onDropPoint: e.onDropPoint,
                                              ptm: x,
                                              cx: S,
                                          });
                                      }),
                                  )
                                : null),
                        (p = (0, f.dG)(
                            {
                                'className': (0, f.AK)(e.node.className, S('node', { isLeaf: v })),
                                'style': e.node.style,
                                'tabIndex': t,
                                'role': 'treeitem',
                                'aria-posinset': e.index + 1,
                                'aria-expanded': b,
                                'aria-selected': a || l,
                            },
                            E('node'),
                        )),
                        r.createElement('li', p, c, s));
                if (e.dragdropScope && !e.disabled) {
                    var re = ne(-1),
                        oe = e.last ? ne(1) : null;
                    return r.createElement(r.Fragment, null, re, te, oe);
                }
                return te;
            });
            function T(e, n) {
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
            function j(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? T(Object(t), !0).forEach(function (n) {
                              C(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : T(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          });
                }
                return e;
            }
            function K(e, n) {
                var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (!t) {
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return M(e, n);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                        ? M(e, n)
                                        : void 0
                                );
                            }
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
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
                var l,
                    a = !0,
                    i = !1;
                return {
                    s: function () {
                        t = t.call(e);
                    },
                    n: function () {
                        var e = t.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (i = !0), (l = e);
                    },
                    f: function () {
                        try {
                            a || null == t.return || t.return();
                        } finally {
                            if (i) throw l;
                        }
                    },
                };
            }
            function M(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            P.displayName = 'UITreeNode';
            var A = r.memo(
                r.forwardRef(function (e, n) {
                    var t = r.useContext(o.Ou),
                        a = O.getProps(e, t),
                        i = k(r.useState(''), 2),
                        s = i[0],
                        p = i[1],
                        u = k(r.useState(a.expandedKeys), 2),
                        g = u[0],
                        y = u[1],
                        m = r.useRef(null),
                        v = r.useRef([]),
                        h = r.useRef(null),
                        E = r.useRef(!1),
                        C = a.onFilterValueChange ? a.filterValue : s,
                        w = a.onToggle ? a.expandedKeys : g,
                        I = O.setMetaData({ props: a, state: { filterValue: C, expandedKeys: w } }),
                        N = I.ptm,
                        D = I.cx,
                        T = I.isUnstyled;
                    (0, l.e)(O.css.styles, T, { name: 'tree' });
                    var M = {
                            filter: function (e) {
                                return Z(e);
                            },
                            reset: function () {
                                return Q();
                            },
                        },
                        A = function (e) {
                            a.onToggle ? a.onToggle(e) : y(e.value);
                        },
                        U = function (e) {
                            h.current = { path: e.path, index: e.index };
                        },
                        L = function () {
                            h.current = null;
                        },
                        G = function e(n) {
                            if (Array.isArray(n)) return n.map(e);
                            if (n && Object.getPrototypeOf(n) === Object.prototype) {
                                var t = {};
                                for (var r in n) t[r] = 'data' !== r ? e(n[r]) : n[r];
                                return t;
                            }
                            return n;
                        },
                        F = function (e) {
                            if (H(h.current.path, e.path)) {
                                var n = G(a.value),
                                    t = h.current.path.split('-');
                                t.pop();
                                var r = _(n, t),
                                    o = r ? r.children[h.current.index] : n[h.current.index],
                                    l = _(n, e.path.split('-'));
                                l.children ? l.children.push(o) : (l.children = [o]),
                                    r
                                        ? r.children.splice(h.current.index, 1)
                                        : n.splice(h.current.index, 1),
                                    a.onDragDrop &&
                                        a.onDragDrop({
                                            originalEvent: e.originalEvent,
                                            value: n,
                                            dragNode: o,
                                            dropNode: l,
                                            dropIndex: e.index,
                                        });
                            }
                        },
                        R = function (e) {
                            if (J(e)) {
                                var n = G(a.value),
                                    t = h.current.path.split('-');
                                t.pop();
                                var r = e.path.split('-');
                                r.pop();
                                var o = _(n, t),
                                    l = _(n, r),
                                    i = o ? o.children[h.current.index] : n[h.current.index],
                                    c = X(h.current.path, e.path);
                                if (
                                    (o
                                        ? o.children.splice(h.current.index, 1)
                                        : n.splice(h.current.index, 1),
                                    e.position < 0)
                                ) {
                                    var s = c
                                        ? h.current.index > e.index
                                            ? e.index
                                            : e.index - 1
                                        : e.index;
                                    l ? l.children.splice(s, 0, i) : n.splice(s, 0, i);
                                } else l ? l.children.push(i) : n.push(i);
                                a.onDragDrop &&
                                    a.onDragDrop({
                                        originalEvent: e.originalEvent,
                                        value: n,
                                        dragNode: i,
                                        dropNode: l,
                                        dropIndex: e.index,
                                    });
                            }
                        },
                        V = function (e, n) {
                            return !!e && e !== n && 0 !== n.indexOf(e);
                        },
                        H = function (e, n) {
                            return !(
                                !V(e, n) ||
                                (e.indexOf('-') > 0 && e.substring(0, e.lastIndexOf('-')) === n)
                            );
                        },
                        J = function (e) {
                            return !(
                                !V(h.current.path, e.path) ||
                                (-1 === e.position &&
                                    X(h.current.path, e.path) &&
                                    h.current.index + 1 === e.index)
                            );
                        },
                        X = function (e, n) {
                            return (
                                (1 === e.length && 1 === n.length) ||
                                e.substring(0, e.lastIndexOf('-')) ===
                                    n.substring(0, n.lastIndexOf('-'))
                            );
                        },
                        _ = function e(n, t) {
                            if (0 === t.length) return null;
                            var r = parseInt(t[0], 10),
                                o = n.children ? n.children[r] : n[r];
                            return 1 === t.length ? o : (t.shift(), e(o, t));
                        },
                        B = function (e) {
                            return !1 !== e.leaf && !(e.children && e.children.length);
                        },
                        z = function (e) {
                            13 === e.which && e.preventDefault();
                        },
                        Z = function (e) {
                            E.current = !0;
                            var n = e.target.value;
                            a.onFilterValueChange
                                ? a.onFilterValueChange({ originalEvent: e, value: n })
                                : p(n);
                        },
                        $ = function (e) {
                            p(f.gb.isNotEmpty(e) ? e : ''), q();
                        },
                        q = function () {
                            if (E.current) {
                                if (f.gb.isEmpty(C)) v.current = a.value;
                                else {
                                    v.current = [];
                                    var e,
                                        n = a.filterBy.split(','),
                                        t = C.toLocaleLowerCase(a.filterLocale),
                                        r = 'strict' === a.filterMode,
                                        o = K(a.value);
                                    try {
                                        for (o.s(); !(e = o.n()).done; ) {
                                            var l = j({}, e.value),
                                                i = {
                                                    searchFields: n,
                                                    filterText: t,
                                                    isStrictMode: r,
                                                };
                                            ((r && (W(l, i) || Y(l, i))) ||
                                                (!r && (Y(l, i) || W(l, i)))) &&
                                                v.current.push(l);
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                }
                                E.current = !1;
                            }
                        },
                        W = function (e, n) {
                            if (e) {
                                var t = !1;
                                if (e.children) {
                                    var r =
                                        (function (e) {
                                            if (Array.isArray(e)) return x(e);
                                        })((i = e.children)) ||
                                        (function (e) {
                                            if (
                                                ('undefined' != typeof Symbol &&
                                                    null != e[Symbol.iterator]) ||
                                                null != e['@@iterator']
                                            )
                                                return Array.from(e);
                                        })(i) ||
                                        S(i) ||
                                        (function () {
                                            throw new TypeError(
                                                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                            );
                                        })();
                                    e.children = [];
                                    var o,
                                        l = K(r);
                                    try {
                                        for (l.s(); !(o = l.n()).done; ) {
                                            var a = j({}, o.value);
                                            Y(a, n) && ((t = !0), e.children.push(a));
                                        }
                                    } catch (e) {
                                        l.e(e);
                                    } finally {
                                        l.f();
                                    }
                                }
                                if (t) return (e.expanded = !0), !0;
                            }
                            var i;
                        },
                        Y = function (e, n) {
                            var t,
                                r = n.searchFields,
                                o = n.filterText,
                                l = n.isStrictMode,
                                i = !1,
                                c = K(r);
                            try {
                                for (c.s(); !(t = c.n()).done; ) {
                                    var s = t.value;
                                    String(f.gb.resolveFieldData(e, s))
                                        .toLocaleLowerCase(a.filterLocale)
                                        .indexOf(o) > -1 && (i = !0);
                                }
                            } catch (e) {
                                c.e(e);
                            } finally {
                                c.f();
                            }
                            return (
                                (!i || (l && !B(e))) &&
                                    (i =
                                        W(e, { searchFields: r, filterText: o, isStrictMode: l }) ||
                                        i),
                                i
                            );
                        },
                        Q = function () {
                            p('');
                        };
                    r.useImperativeHandle(n, function () {
                        return {
                            props: a,
                            filter: $,
                            getElement: function () {
                                return m.current;
                            },
                        };
                    });
                    var ee = O.getOtherProps(a),
                        ne = f.gb.reduceKeys(ee, f.p7.ARIA_PROPS),
                        te = (function () {
                            if (a.loading) {
                                var e = (0, f.dG)(
                                        { className: D('loadingIcon') },
                                        N('loadingIcon'),
                                    ),
                                    n =
                                        a.loadingIcon ||
                                        r.createElement(d.L, b({}, e, { spin: !0 })),
                                    t = f.Cz.getJSXIcon(n, j({}, e), { props: a }),
                                    o = (0, f.dG)(
                                        { className: D('loadingOverlay') },
                                        N('loadingOverlay'),
                                    );
                                return r.createElement('div', o, t);
                            }
                            return null;
                        })(),
                        re = (function () {
                            if (a.value) {
                                var e = (function () {
                                        a.filter && ((E.current = !0), q());
                                        var e = a.filter && v.current ? v.current : a.value;
                                        return e.map(function (n, t) {
                                            return (function (e, n, t) {
                                                return r.createElement(P, {
                                                    hostName: 'Tree',
                                                    key: e.key || e.label,
                                                    node: e,
                                                    originalOptions: a.value,
                                                    index: n,
                                                    last: t,
                                                    path: String(n),
                                                    checkboxIcon: a.checkboxIcon,
                                                    expandIcon: a.expandIcon,
                                                    collapseIcon: a.collapseIcon,
                                                    disabled: a.disabled,
                                                    selectionMode: a.selectionMode,
                                                    selectionKeys: a.selectionKeys,
                                                    onSelectionChange: a.onSelectionChange,
                                                    metaKeySelection: a.metaKeySelection,
                                                    contextMenuSelectionKey:
                                                        a.contextMenuSelectionKey,
                                                    onContextMenuSelectionChange:
                                                        a.onContextMenuSelectionChange,
                                                    onContextMenu: a.onContextMenu,
                                                    propagateSelectionDown:
                                                        a.propagateSelectionDown,
                                                    propagateSelectionUp: a.propagateSelectionUp,
                                                    onExpand: a.onExpand,
                                                    onCollapse: a.onCollapse,
                                                    onSelect: a.onSelect,
                                                    onUnselect: a.onUnselect,
                                                    expandedKeys: w,
                                                    onToggle: A,
                                                    nodeTemplate: a.nodeTemplate,
                                                    togglerTemplate: a.togglerTemplate,
                                                    isNodeLeaf: B,
                                                    dragdropScope: a.dragdropScope,
                                                    onDragStart: U,
                                                    onDragEnd: L,
                                                    onDrop: F,
                                                    onDropPoint: R,
                                                    onClick: a.onNodeClick,
                                                    onDoubleClick: a.onNodeDoubleClick,
                                                    ptm: N,
                                                    cx: D,
                                                });
                                            })(n, t, t === e.length - 1);
                                        });
                                    })(),
                                    n = (0, f.dG)(
                                        j(
                                            {
                                                className: (0, f.AK)(
                                                    a.contentClassName,
                                                    D('container'),
                                                ),
                                                role: 'tree',
                                                style: a.contentStyle,
                                            },
                                            ne,
                                        ),
                                        N('container'),
                                    );
                                return r.createElement('ul', n, e);
                            }
                            return null;
                        })(),
                        oe = (function () {
                            if (a.showHeader) {
                                var e = (function () {
                                        if (a.filter) {
                                            var e = f.gb.isNotEmpty(C) ? C : '',
                                                n = (0, f.dG)(
                                                    { className: D('searchIcon') },
                                                    N('searchIcon'),
                                                ),
                                                t = a.filterIcon || r.createElement(c.W, n),
                                                o = f.Cz.getJSXIcon(t, j({}, n), { props: a }),
                                                l = (0, f.dG)(
                                                    { className: D('filterContainer') },
                                                    N('filterContainer'),
                                                ),
                                                i = (0, f.dG)(
                                                    {
                                                        'type': 'text',
                                                        'value': e,
                                                        'autoComplete': 'off',
                                                        'className': D('input'),
                                                        'placeholder': a.filterPlaceholder,
                                                        'aria-label': a.filterPlaceholder,
                                                        'onKeyDown': z,
                                                        'onChange': Z,
                                                        'disabled': a.disabled,
                                                    },
                                                    N('input'),
                                                ),
                                                s = r.createElement(
                                                    'div',
                                                    l,
                                                    r.createElement('input', i),
                                                    o,
                                                );
                                            if (a.filterTemplate) {
                                                var p = {
                                                    className: 'p-tree-filter-container',
                                                    element: s,
                                                    filterOptions: M,
                                                    filterInputKeyDown: z,
                                                    filterInputChange: Z,
                                                    filterIconClassName: 'p-dropdown-filter-icon',
                                                    props: a,
                                                };
                                                s = f.gb.getJSXElement(a.filterTemplate, p);
                                            }
                                            return r.createElement(r.Fragment, null, s);
                                        }
                                        return null;
                                    })(),
                                    n = e;
                                if (a.header) {
                                    var t = {
                                        filterContainerClassName: 'p-tree-filter-container',
                                        filterIconClassName: 'p-tree-filter-icon',
                                        filterInput: {
                                            className: 'p-tree-filter p-inputtext p-component',
                                            onKeyDown: z,
                                            onChange: Z,
                                        },
                                        filterElement: e,
                                        element: n,
                                        props: a,
                                    };
                                    n = f.gb.getJSXElement(a.header, t);
                                }
                                var o = (0, f.dG)({ className: D('header') }, N('header'));
                                return r.createElement('div', o, n);
                            }
                            return null;
                        })(),
                        le = (function () {
                            var e = f.gb.getJSXElement(a.footer, a),
                                n = (0, f.dG)({ className: D('footer') }, N('footer'));
                            return r.createElement('div', n, e);
                        })(),
                        ae = (0, f.dG)(
                            {
                                ref: m,
                                className: (0, f.AK)(a.className, D('root')),
                                style: a.style,
                                id: a.id,
                            },
                            O.getOtherProps(a),
                            N('root'),
                        );
                    return r.createElement('div', ae, te, oe, re, le);
                }),
            );
            A.displayName = 'Tree';
            var U = t(4488),
                L = t(4951);
            function G() {
                return (
                    (G = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    G.apply(this, arguments)
                );
            }
            function F(e) {
                return (
                    (F =
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
                    F(e)
                );
            }
            function R(e, n, t) {
                return (
                    (n = (function (e) {
                        var n = (function (e, n) {
                            if ('object' !== F(e) || null === e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' !== F(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' === F(n) ? n : String(n);
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
            function V(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function H(e, n) {
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
                                l,
                                a,
                                i = [],
                                c = !0,
                                s = !1;
                            try {
                                if (((l = (t = t.call(e)).next), 0 === n)) {
                                    if (Object(t) !== t) return;
                                    c = !1;
                                } else
                                    for (
                                        ;
                                        !(c = (r = l.call(t)).done) &&
                                        (i.push(r.value), i.length !== n);
                                        c = !0
                                    );
                            } catch (e) {
                                (s = !0), (o = e);
                            } finally {
                                try {
                                    if (
                                        !c &&
                                        null != t.return &&
                                        ((a = t.return()), Object(a) !== a)
                                    )
                                        return;
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (e) {
                            if ('string' == typeof e) return V(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === t && e.constructor && (t = e.constructor.name),
                                'Map' === t || 'Set' === t
                                    ? Array.from(e)
                                    : 'Arguments' === t ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                    ? V(e, n)
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
            var J = {
                    root: function (e) {
                        var n = e.props,
                            t = e.focusedState,
                            r = e.overlayVisibleState,
                            o = e.isValueEmpty;
                        return (0, f.AK)(
                            'p-treeselect p-component p-inputwrapper',
                            {
                                'p-treeselect-chip': 'chip' === n.display,
                                'p-treeselect-clearable': n.showClear && !n.disabled,
                                'p-disabled': n.disabled,
                                'p-focus': t,
                                'p-inputwrapper-filled': !o,
                                'p-inputwrapper-focus': t || r,
                            },
                            n.className,
                        );
                    },
                    label: function (e) {
                        var n = e.props,
                            t = e.isValueEmpty,
                            r = e.getLabel;
                        return (0, f.AK)('p-treeselect-label', {
                            'p-placeholder': r() === n.placeholder,
                            'p-treeselect-label-empty': !n.placeholder && t,
                        });
                    },
                    panel: function (e) {
                        var n = e.panelProps,
                            t = e.context;
                        return (0, f.AK)('p-treeselect-panel p-component', n.panelClassName, {
                            'p-input-filled':
                                (t && 'filled' === t.inputStyle) || 'filled' === o.ZP.inputStyle,
                            'p-ripple-disabled': (t && !1 === t.ripple) || !1 === o.ZP.ripple,
                        });
                    },
                    labelContainer: 'p-treeselect-label-container',
                    tokenLabel: 'p-treeselect-token-label',
                    token: 'p-treeselect-token',
                    trigger: 'p-treeselect-trigger',
                    triggerIcon: 'p-treeselect-trigger-icon p-clickable',
                    emptyMessage: 'p-treeselect-empty-message',
                    filterContainer: 'p-treeselect-filter-container',
                    filter: 'p-treeselect-filter p-inputtext p-component',
                    filterIcon: 'p-treeselect-filter-icon',
                    closeIcon: 'p-treeselect-close-icon',
                    clearIcon: 'p-treeselect-clear-icon p-clickable',
                    closeButton: 'p-treeselect-close p-link',
                    header: 'p-treeselect-header',
                    wrapper: 'p-treeselect-items-wrapper',
                    transition: 'p-connected-overlay',
                },
                X = l.V.extend({
                    defaultProps: {
                        __TYPE: 'TreeSelect',
                        appendTo: null,
                        ariaLabel: null,
                        ariaLabelledBy: null,
                        className: null,
                        closeIcon: null,
                        clearIcon: null,
                        disabled: !1,
                        display: 'comma',
                        dropdownIcon: null,
                        emptyMessage: null,
                        expandedKeys: null,
                        filter: !1,
                        filterBy: 'label',
                        filterIcon: null,
                        filterInputAutoFocus: !0,
                        filterLocale: void 0,
                        filterMode: 'lenient',
                        filterPlaceholder: null,
                        filterTemplate: null,
                        filterValue: null,
                        inputId: null,
                        inputRef: null,
                        metaKeySelection: !0,
                        name: null,
                        nodeTemplate: null,
                        onChange: null,
                        onFilterValueChange: null,
                        onHide: null,
                        onNodeCollapse: null,
                        onNodeExpand: null,
                        onNodeSelect: null,
                        onNodeUnselect: null,
                        onShow: null,
                        options: null,
                        panelClassName: null,
                        panelFooterTemplate: null,
                        panelHeaderTemplate: null,
                        panelStyle: null,
                        placeholder: null,
                        resetFilterOnHide: !1,
                        scrollHeight: '400px',
                        selectionMode: 'single',
                        showClear: !1,
                        style: null,
                        tabIndex: null,
                        togglerTemplate: null,
                        transitionOptions: null,
                        value: null,
                        valueTemplate: null,
                        children: void 0,
                    },
                    css: {
                        classes: J,
                        styles: '\n@layer primereact {\n    .p-treeselect {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n    }\n    \n    .p-treeselect-trigger {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n    }\n    \n    .p-treeselect-label-container {\n        overflow: hidden;\n        flex: 1 1 auto;\n        cursor: pointer;\n    }\n    \n    .p-treeselect-label  {\n        display: block;\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    \n    .p-treeselect-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n    \n    .p-treeselect-token {\n        cursor: default;\n        display: inline-flex;\n        align-items: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-treeselect .p-treeselect-panel {\n        min-width: 100%;\n    }\n    \n    .p-treeselect-items-wrapper {\n        overflow: auto;\n    }\n    \n    .p-treeselect-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n    \n    .p-treeselect-filter-container {\n        position: relative;\n        flex: 1 1 auto;\n    }\n    \n    .p-treeselect-filter-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-treeselect-filter-container .p-inputtext {\n        width: 100%;\n    }\n    \n    .p-treeselect-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        overflow: hidden;\n        position: relative;\n        margin-left: auto;\n    }\n    \n    .p-treeselect-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-fluid .p-treeselect {\n        display: flex;\n}\n}\n',
                    },
                });
            function _(e, n) {
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
            var B = r.forwardRef(function (e, n) {
                var t,
                    l,
                    a,
                    i,
                    c = r.useContext(o.Ou),
                    s = e.ptm,
                    p = e.cx,
                    u = function (n, t) {
                        return s(
                            n,
                            (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {};
                                    n % 2
                                        ? _(Object(t), !0).forEach(function (n) {
                                              R(e, n, t[n]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(t),
                                          )
                                        : _(Object(t)).forEach(function (n) {
                                              Object.defineProperty(
                                                  e,
                                                  n,
                                                  Object.getOwnPropertyDescriptor(t, n),
                                              );
                                          });
                                }
                                return e;
                            })({ hostName: e.hostName }, t),
                        );
                    },
                    d =
                        ((t = { maxHeight: e.scrollHeight || 'auto' }),
                        (l = (0, f.dG)(
                            {
                                className: p('panel', { panelProps: e, context: c }),
                                style: e.panelStyle,
                                onClick: e.onClick,
                            },
                            u('panel'),
                        )),
                        (a = (0, f.dG)({ className: p('wrapper'), style: t }, u('wrapper'))),
                        (i = (0, f.dG)(
                            {
                                classNames: p('transition'),
                                in: e.in,
                                timeout: { enter: 120, exit: 100 },
                                options: e.transitionOptions,
                                unmountOnExit: !0,
                                onEnter: e.onEnter,
                                onEntered: e.onEntered,
                                onExit: e.onExit,
                                onExited: e.onExited,
                            },
                            u('transition'),
                        )),
                        r.createElement(
                            U.K,
                            G({ nodeRef: n }, i),
                            r.createElement(
                                'div',
                                G({ ref: n }, l),
                                e.header,
                                r.createElement('div', a, e.children),
                                e.footer,
                            ),
                        ));
                return r.createElement(L.h, { element: d, appendTo: e.appendTo });
            });
            function z(e, n) {
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
            function Z(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? z(Object(t), !0).forEach(function (n) {
                              R(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : z(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          });
                }
                return e;
            }
            function $(e, n) {
                var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (!t) {
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return q(e, n);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                        ? q(e, n)
                                        : void 0
                                );
                            }
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
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
                var l,
                    a = !0,
                    i = !1;
                return {
                    s: function () {
                        t = t.call(e);
                    },
                    n: function () {
                        var e = t.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (i = !0), (l = e);
                    },
                    f: function () {
                        try {
                            a || null == t.return || t.return();
                        } finally {
                            if (i) throw l;
                        }
                    },
                };
            }
            function q(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            B.displayName = 'TreeSelectPanel';
            var W = r.memo(
                r.forwardRef(function (e, n) {
                    var t = r.useContext(o.Ou),
                        d = X.getProps(e, t),
                        g = H(r.useState(!1), 2),
                        y = g[0],
                        m = g[1],
                        v = H(r.useState(!1), 2),
                        h = v[0],
                        b = v[1],
                        x = H(r.useState(d.expandedKeys), 2),
                        S = x[0],
                        E = x[1],
                        C = H(r.useState(''), 2),
                        k = C[0],
                        w = C[1],
                        O = r.useRef(null),
                        I = r.useRef(null),
                        N = r.useRef(null),
                        D = r.useRef(d.inputRef),
                        P = r.useRef(null),
                        T = r.useRef(null),
                        j = d.onToggle ? d.expandedKeys : S,
                        K = d.onFilterValueChange ? d.filterValue : k,
                        M = f.gb.isEmpty(d.value),
                        U = f.gb.isEmpty(d.options),
                        L = 'single' === d.selectionMode,
                        F = 'checkbox' === d.selectionMode,
                        V = {
                            props: d,
                            state: {
                                focused: y,
                                overlayVisible: h,
                                expandedKeys: j,
                                filterValue: K,
                            },
                        },
                        J = X.setMetaData(V),
                        _ = J.ptm,
                        z = J.cx,
                        q = J.isUnstyled;
                    (0, l.e)(X.css.styles, q, { name: 'treeselect' });
                    var W = {
                            filter: function (e) {
                                return ae(e);
                            },
                            reset: function () {
                                return ie();
                            },
                        },
                        Y = H(
                            (0, a.gq)({
                                target: O,
                                overlay: I,
                                listener: function (e, n) {
                                    n.valid && re();
                                },
                                when: h,
                            }),
                            2,
                        ),
                        Q = Y[0],
                        ee = Y[1],
                        ne = function () {
                            return ve.length
                                ? ve
                                      .map(function (e) {
                                          return e.label;
                                      })
                                      .join(', ')
                                : d.placeholder;
                        },
                        te = function () {
                            b(!0);
                        },
                        re = function () {
                            b(!1);
                        },
                        oe = function (e) {
                            d.onChange &&
                                ((T.current = !0),
                                d.onChange({
                                    originalEvent: e,
                                    value: void 0,
                                    stopPropagation: function () {
                                        e.stopPropagation();
                                    },
                                    preventDefault: function () {
                                        e.preventDefault();
                                    },
                                    target: { name: d.name, id: d.id, value: void 0 },
                                }));
                        },
                        le = function (e) {
                            13 === e.which && e.preventDefault();
                        },
                        ae = function (e) {
                            var n = e.target.value;
                            d.onFilterValueChange
                                ? d.onFilterValueChange({ originalEvent: e, value: n })
                                : w(n);
                        },
                        ie = function () {
                            w('');
                        },
                        ce = function () {
                            f.p7.alignOverlay(
                                I.current,
                                P.current.parentElement,
                                d.appendTo || (t && t.appendTo) || o.ZP.appendTo,
                            );
                        },
                        se = function e(n, t, r) {
                            if (n) {
                                if (
                                    (pe(n, t) && (r.push(n), delete t[n.key]),
                                    Object.keys(t).length && n.children)
                                ) {
                                    var o,
                                        l = $(n.children);
                                    try {
                                        for (l.s(); !(o = l.n()).done; ) e(o.value, t, r);
                                    } catch (e) {
                                        l.e(e);
                                    } finally {
                                        l.f();
                                    }
                                }
                            } else {
                                var a,
                                    i = $(d.options);
                                try {
                                    for (i.s(); !(a = i.n()).done; ) e(a.value, t, r);
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                            }
                        },
                        pe = function (e, n) {
                            return F ? n[e.key] && n[e.key].checked : n[e.key];
                        },
                        ue = function () {
                            var e = L ? R({}, ''.concat(d.value), !0) : Z({}, d.value);
                            E({}), e && d.options && de(null, null, e);
                        },
                        de = function e(n, t, r) {
                            if (n) {
                                if (
                                    (pe(n, r) && (fe(t), delete r[n.key]),
                                    Object.keys(r).length && n.children)
                                ) {
                                    var o,
                                        l = $(n.children);
                                    try {
                                        for (l.s(); !(o = l.n()).done; ) {
                                            var a = o.value;
                                            t.push(n.key), e(a, t, r);
                                        }
                                    } catch (e) {
                                        l.e(e);
                                    } finally {
                                        l.f();
                                    }
                                }
                            } else {
                                var i,
                                    c = $(d.options);
                                try {
                                    for (c.s(); !(i = c.n()).done; ) e(i.value, [], r);
                                } catch (e) {
                                    c.e(e);
                                } finally {
                                    c.f();
                                }
                            }
                        },
                        fe = function (e) {
                            if (e.length > 0) {
                                var n,
                                    t = Z({}, S || {}),
                                    r = $(e);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) t[n.value] = !0;
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                                E(t);
                            }
                        };
                    r.useImperativeHandle(n, function () {
                        return {
                            props: d,
                            clear: oe,
                            show: te,
                            hide: re,
                            focus: function () {
                                return f.p7.focus(D.current);
                            },
                            getElement: function () {
                                return O.current;
                            },
                        };
                    }),
                        r.useEffect(
                            function () {
                                f.gb.combinedRefs(D, d.inputRef);
                            },
                            [D, d.inputRef],
                        ),
                        (0, a.nw)(function () {
                            ue(), d.autoFocus && f.p7.focus(D.current, d.autoFocus);
                        }),
                        (0, a.rf)(function () {
                            h && d.filter && ce();
                        }),
                        (0, a.rf)(
                            function () {
                                ue();
                            },
                            [d.options],
                        ),
                        (0, a.rf)(
                            function () {
                                h && S && ce();
                            },
                            [S],
                        ),
                        (0, a.rf)(
                            function () {
                                h && (T.current || ue(), (T.current = !1));
                            },
                            [d.value],
                        ),
                        (0, a.zq)(function () {
                            f.P9.clear(I.current);
                        });
                    var ge,
                        ye,
                        me,
                        ve = (function () {
                            var e = [];
                            if (f.gb.isNotEmpty(d.value) && d.options) {
                                var n = L ? R({}, ''.concat(d.value), !0) : Z({}, d.value);
                                se(null, n, e);
                            }
                            return e;
                        })(),
                        he = X.getOtherProps(d),
                        be = f.gb.reduceKeys(he, f.p7.ARIA_PROPS),
                        xe = (0, f.dG)(
                            {
                                ref: O,
                                className: z('root', {
                                    focusedState: y,
                                    overlayVisibleState: h,
                                    isValueEmpty: M,
                                }),
                                style: d.style,
                                onClick: function (e) {
                                    d.disabled ||
                                        (I.current && I.current.contains(e.target)) ||
                                        f.p7.hasClass(e.target, 'p-treeselect-close') ||
                                        (f.p7.focus(D.current), h ? re() : te());
                                },
                            },
                            X.getOtherProps(d),
                            _('root'),
                        ),
                        Se =
                            ((ge = (0, f.dG)(
                                { className: 'p-hidden-accessible' },
                                _('hiddenInputWrapper'),
                            )),
                            (ye = (0, f.dG)(
                                Z(
                                    {
                                        'ref': D,
                                        'role': 'listbox',
                                        'id': d.inputId,
                                        'type': 'text',
                                        'aria-expanded': h,
                                        'onFocus': function () {
                                            m(!0);
                                        },
                                        'onBlur': function () {
                                            m(!1);
                                        },
                                        'onKeyDown': function (e) {
                                            switch (e.which) {
                                                case 40:
                                                    !h && e.altKey && te();
                                                    break;
                                                case 32:
                                                    h || (te(), e.preventDefault());
                                                    break;
                                                case 13:
                                                case 27:
                                                    h && (re(), e.preventDefault());
                                                    break;
                                                case 9:
                                                    re();
                                            }
                                        },
                                        'disabled': d.disabled,
                                        'tabIndex': d.tabIndex,
                                    },
                                    be,
                                ),
                                _('hiddenInput'),
                            )),
                            r.createElement(
                                'div',
                                ge,
                                r.createElement('input', G({}, ye, { readOnly: !0 })),
                            )),
                        Ee = (function () {
                            var e = (0, f.dG)({ className: z('token') }, _('token')),
                                n = (0, f.dG)({ className: z('tokenLabel') }, _('tokenLabel')),
                                t = (0, f.dG)(
                                    { className: z('labelContainer') },
                                    _('labelContainer'),
                                ),
                                o = (0, f.dG)(
                                    { className: z('label', { isValueEmpty: M, getLabel: ne }) },
                                    _('label'),
                                ),
                                l = null;
                            return (
                                d.valueTemplate
                                    ? (l = f.gb.getJSXElement(d.valueTemplate, ve, d))
                                    : 'comma' === d.display
                                    ? (l = ne() || 'empty')
                                    : 'chip' === d.display &&
                                      (l = r.createElement(
                                          r.Fragment,
                                          null,
                                          ve &&
                                              ve.map(function (t, o) {
                                                  return r.createElement(
                                                      'div',
                                                      G({}, e, {
                                                          key: ''.concat(t.key, '_').concat(o),
                                                      }),
                                                      r.createElement('span', n, t.label),
                                                  );
                                              }),
                                          M && (d.placeholder || 'empty'),
                                      )),
                                r.createElement('div', t, r.createElement('div', o, l))
                            );
                        })(),
                        Ce = (function () {
                            var e = (0, f.dG)(
                                    {
                                        'ref': P,
                                        'className': z('trigger'),
                                        'role': 'button',
                                        'aria-haspopup': 'listbox',
                                        'aria-expanded': h,
                                    },
                                    _('trigger'),
                                ),
                                n = (0, f.dG)({ className: z('triggerIcon') }, _('triggerIcon')),
                                t = d.dropdownIcon || r.createElement(i.v, n),
                                o = f.Cz.getJSXIcon(t, Z({}, n), { props: d });
                            return r.createElement('div', e, o);
                        })(),
                        ke = (function () {
                            if (null != d.value && d.showClear && !d.disabled) {
                                var e = (0, f.dG)(
                                        { className: z('clearIcon'), onPointerUp: oe },
                                        _('clearIcon'),
                                    ),
                                    n = d.clearIcon || r.createElement(s.q, e);
                                return f.Cz.getJSXIcon(n, Z({}, e), { props: d });
                            }
                            return null;
                        })(),
                        we =
                            ((me = (0, f.dG)({ className: z('emptyMessage') }, _('emptyMessage'))),
                            r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(A, {
                                    expandedKeys: j,
                                    filter: d.filter,
                                    filterBy: d.filterBy,
                                    filterLocale: d.filterLocale,
                                    filterMode: d.filterMode,
                                    filterPlaceholder: d.filterPlaceholder,
                                    filterValue: K,
                                    metaKeySelection: d.metaKeySelection,
                                    nodeTemplate: d.nodeTemplate,
                                    onCollapse: d.onNodeCollapse,
                                    onExpand: d.onNodeExpand,
                                    onFilterValueChange: function (e) {
                                        w(e.value);
                                    },
                                    onSelect: function (e) {
                                        d.onNodeSelect && d.onNodeSelect(e), L && re();
                                    },
                                    onSelectionChange: function (e) {
                                        d.onChange &&
                                            ((T.current = !0),
                                            d.onChange({
                                                originalEvent: e.originalEvent,
                                                value: e.value,
                                                stopPropagation: function () {
                                                    e.originalEvent.stopPropagation();
                                                },
                                                preventDefault: function () {
                                                    e.originalEvent.preventDefault();
                                                },
                                                target: { name: d.name, id: d.id, value: e.value },
                                            }));
                                    },
                                    onToggle: function (e) {
                                        d.onToggle ? d.onToggle(e) : E(e.value);
                                    },
                                    onUnselect: function (e) {
                                        d.onNodeUnselect && d.onNodeUnselect(e);
                                    },
                                    selectionKeys: d.value,
                                    selectionMode: d.selectionMode,
                                    showHeader: !1,
                                    togglerTemplate: d.togglerTemplate,
                                    value: d.options,
                                    pt: _('tree'),
                                    __parentMetadata: { parent: V },
                                }),
                                U &&
                                    r.createElement(
                                        'div',
                                        me,
                                        d.emptyMessage || (0, o.qJ)('emptyMessage'),
                                    ),
                            )),
                        Oe = (function () {
                            var e = (function () {
                                    if (d.filter) {
                                        var e = f.gb.isNotEmpty(K) ? K : '',
                                            n = (0, f.dG)(
                                                { className: z('filterContainer') },
                                                _('filterContainer'),
                                            ),
                                            t = (0, f.dG)(
                                                {
                                                    ref: N,
                                                    type: 'text',
                                                    value: e,
                                                    autoComplete: 'off',
                                                    className: z('filter'),
                                                    placeholder: d.filterPlaceholder,
                                                    onKeyDown: le,
                                                    onChange: ae,
                                                    disabled: d.disabled,
                                                },
                                                _('filter'),
                                            ),
                                            o = (0, f.dG)(
                                                { className: z('filterIcon') },
                                                _('filterIcon'),
                                            ),
                                            l = d.filterIcon || r.createElement(c.W, o),
                                            a = f.Cz.getJSXIcon(l, Z({}, o), { props: d }),
                                            i = r.createElement(
                                                'div',
                                                n,
                                                r.createElement('input', t),
                                                a,
                                            );
                                        if (d.filterTemplate) {
                                            var s = {
                                                className: 'p-treeselect-filter-container',
                                                element: i,
                                                filterOptions: W,
                                                filterInputKeyDown: le,
                                                filterInputChange: ae,
                                                filterIconClassName: 'p-dropdown-filter-icon',
                                                props: d,
                                            };
                                            i = f.gb.getJSXElement(d.filterTemplate, s);
                                        }
                                        return r.createElement(r.Fragment, null, i);
                                    }
                                })(),
                                n = (0, f.dG)(
                                    { 'className': z('closeIcon'), 'aria-hidden': !0 },
                                    _('closeIcon'),
                                ),
                                t = d.closeIcon || r.createElement(s.q, n),
                                l = f.Cz.getJSXIcon(t, Z({}, n), { props: d }),
                                a = (0, f.dG)(
                                    {
                                        'type': 'button',
                                        'className': z('closeButton'),
                                        'onClick': re,
                                        'aria-label': (0, o.qJ)('close'),
                                    },
                                    _('closeButton'),
                                ),
                                i = (0, f.dG)({ className: z('header') }, _('header')),
                                p = r.createElement('button', a, l, r.createElement(u.H, null)),
                                g = r.createElement('div', i, e, p);
                            if (d.panelHeaderTemplate) {
                                var y = {
                                    className: 'p-treeselect-header',
                                    filterElement: e,
                                    closeElement: p,
                                    closeElementClassName: 'p-treeselect-close p-link',
                                    closeIconClassName: 'p-treeselect-close-icon',
                                    onCloseClick: re,
                                    element: g,
                                    props: d,
                                };
                                return f.gb.getJSXElement(d.panelHeaderTemplate, y);
                            }
                            return g;
                        })(),
                        Ie = f.gb.getJSXElement(d.panelFooterTemplate, d);
                    return r.createElement(
                        'div',
                        xe,
                        Se,
                        Ee,
                        ke,
                        Ce,
                        r.createElement(
                            B,
                            {
                                hostName: 'TreeSelect',
                                ref: I,
                                appendTo: d.appendTo,
                                panelStyle: d.panelStyle,
                                panelClassName: d.panelClassName,
                                scrollHeight: d.scrollHeight,
                                onClick: function (e) {
                                    p.F.emit('overlay-click', {
                                        originalEvent: e,
                                        target: O.current,
                                    });
                                },
                                header: Oe,
                                footer: Ie,
                                transitionOptions: d.transitionOptions,
                                in: h,
                                onEnter: function () {
                                    var e;
                                    f.P9.set(
                                        'overlay',
                                        I.current,
                                        (t && t.autoZIndex) || o.ZP.autoZIndex,
                                        (t && t.zIndex.overlay) || o.ZP.zIndex.overlay,
                                    ),
                                        f.p7.addStyles(I.current, {
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                        }),
                                        ce(),
                                        (e = f.p7.findSingle(
                                            I.current,
                                            '.p-treenode-content.p-highlight',
                                        )) &&
                                            e.scrollIntoView &&
                                            e.scrollIntoView({ block: 'nearest', inline: 'start' });
                                },
                                onEntered: function () {
                                    Q(),
                                        d.filter &&
                                            d.filterInputAutoFocus &&
                                            f.p7.focus(N.current, d.filterInputAutoFocus),
                                        d.onShow && d.onShow();
                                },
                                onExit: function () {
                                    ee();
                                },
                                onExited: function () {
                                    d.filter && d.resetFilterOnHide && ie(),
                                        f.P9.clear(I.current),
                                        d.onHide && d.onHide();
                                },
                                ptm: _,
                                cx: z,
                            },
                            we,
                        ),
                    );
                }),
            );
            W.displayName = 'TreeSelect';
        },
    },
]);
