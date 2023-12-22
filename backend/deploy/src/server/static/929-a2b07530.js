'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [929],
    {
        6152: (e, n, t) => {
            t.r(n), t.d(n, { default: () => V });
            var r = t(5893),
                i = t(4807),
                l = t(2594),
                a = t(7294),
                o = t(577),
                s = t(9250),
                d = t(2672),
                c = t(5034),
                u = t(3942),
                p = t(6088),
                f = t(7828),
                v = t(8918),
                h = t(3223),
                b = t(1222),
                g = t(4710),
                m = t(7543),
                y = t(7820),
                x = t(8832),
                w = t(2466),
                j = t(9452),
                C = t(3379),
                O = t.n(C),
                k = t(7795),
                P = t.n(k),
                z = t(569),
                E = t.n(z),
                I = t(3565),
                N = t.n(I),
                T = t(9216),
                S = t.n(T),
                A = t(4589),
                M = t.n(A),
                Z = t(1284),
                D = {};
            (D.styleTagTransform = M()),
                (D.setAttributes = N()),
                (D.insert = E().bind(null, 'head')),
                (D.domAPI = P()),
                (D.insertStyleElement = S()),
                O()(Z.Z, D);
            const W = Z.Z && Z.Z.locals ? Z.Z.locals : void 0;
            var G = function () {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var i in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                },
                R = (0, a.memo)(function (e) {
                    var n = e.className,
                        t = e.open,
                        l = e.setOpen,
                        o = e.folderId,
                        s = e.setWasDefined,
                        c = (0, d.T)(),
                        u = (0, x.P)().pending,
                        p = (0, a.useCallback)(
                            function () {
                                return (
                                    (e = void 0),
                                    (n = void 0),
                                    (r = function () {
                                        return (function (e, n) {
                                            var t,
                                                r,
                                                i,
                                                l,
                                                a = {
                                                    label: 0,
                                                    sent: function () {
                                                        if (1 & i[0]) throw i[1];
                                                        return i[1];
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
                                                return function (s) {
                                                    return (function (o) {
                                                        if (t)
                                                            throw new TypeError(
                                                                'Generator is already executing.',
                                                            );
                                                        for (; l && ((l = 0), o[0] && (a = 0)), a; )
                                                            try {
                                                                if (
                                                                    ((t = 1),
                                                                    r &&
                                                                        (i =
                                                                            2 & o[0]
                                                                                ? r.return
                                                                                : o[0]
                                                                                ? r.throw ||
                                                                                  ((i = r.return) &&
                                                                                      i.call(r),
                                                                                  0)
                                                                                : r.next) &&
                                                                        !(i = i.call(r, o[1])).done)
                                                                )
                                                                    return i;
                                                                switch (
                                                                    ((r = 0),
                                                                    i && (o = [2 & o[0], i.value]),
                                                                    o[0])
                                                                ) {
                                                                    case 0:
                                                                    case 1:
                                                                        i = o;
                                                                        break;
                                                                    case 4:
                                                                        return (
                                                                            a.label++,
                                                                            {
                                                                                value: o[1],
                                                                                done: !1,
                                                                            }
                                                                        );
                                                                    case 5:
                                                                        a.label++,
                                                                            (r = o[1]),
                                                                            (o = [0]);
                                                                        continue;
                                                                    case 7:
                                                                        (o = a.ops.pop()),
                                                                            a.trys.pop();
                                                                        continue;
                                                                    default:
                                                                        if (
                                                                            !(
                                                                                (i =
                                                                                    (i = a.trys)
                                                                                        .length >
                                                                                        0 &&
                                                                                    i[
                                                                                        i.length - 1
                                                                                    ]) ||
                                                                                (6 !== o[0] &&
                                                                                    2 !== o[0])
                                                                            )
                                                                        ) {
                                                                            a = 0;
                                                                            continue;
                                                                        }
                                                                        if (
                                                                            3 === o[0] &&
                                                                            (!i ||
                                                                                (o[1] > i[0] &&
                                                                                    o[1] < i[3]))
                                                                        ) {
                                                                            a.label = o[1];
                                                                            break;
                                                                        }
                                                                        if (
                                                                            6 === o[0] &&
                                                                            a.label < i[1]
                                                                        ) {
                                                                            (a.label = i[1]),
                                                                                (i = o);
                                                                            break;
                                                                        }
                                                                        if (i && a.label < i[2]) {
                                                                            (a.label = i[2]),
                                                                                a.ops.push(o);
                                                                            break;
                                                                        }
                                                                        i[2] && a.ops.pop(),
                                                                            a.trys.pop();
                                                                        continue;
                                                                }
                                                                o = n.call(e, a);
                                                            } catch (e) {
                                                                (o = [6, e]), (r = 0);
                                                            } finally {
                                                                t = i = 0;
                                                            }
                                                        if (5 & o[0]) throw o[1];
                                                        return {
                                                            value: o[0] ? o[1] : void 0,
                                                            done: !0,
                                                        };
                                                    })([o, s]);
                                                };
                                            }
                                        })(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [
                                                        4,
                                                        u(
                                                            c(
                                                                (0, h.wH)({
                                                                    folderId: o || -1,
                                                                    candidateIds: [],
                                                                }),
                                                            ),
                                                            {
                                                                loadingMessage: 'Добавление...',
                                                                successMessage:
                                                                    'Кандидаты добавлены',
                                                            },
                                                        ),
                                                    ];
                                                case 1:
                                                    return (
                                                        'fulfilled' ===
                                                            e.sent().meta.requestStatus &&
                                                            (s(!0), l(!1)),
                                                        [2]
                                                    );
                                            }
                                        });
                                    }),
                                    new ((t = void 0) || (t = Promise))(function (i, l) {
                                        function a(e) {
                                            try {
                                                s(r.next(e));
                                            } catch (e) {
                                                l(e);
                                            }
                                        }
                                        function o(e) {
                                            try {
                                                s(r.throw(e));
                                            } catch (e) {
                                                l(e);
                                            }
                                        }
                                        function s(e) {
                                            var n;
                                            e.done
                                                ? i(e.value)
                                                : ((n = e.value),
                                                  n instanceof t
                                                      ? n
                                                      : new t(function (e) {
                                                            e(n);
                                                        })).then(a, o);
                                        }
                                        s((r = r.apply(e, n || [])).next());
                                    })
                                );
                                var e, n, t, r;
                            },
                            [c, o, u, l, s],
                        );
                    return (0,
                    r.jsxs)(w.u, G({ isOpen: t, setIsOpen: l, className: (0, i.A)(W.AddParticipantsModal, {}, [n]) }, { children: [(0, r.jsx)(j.Y, { className: W.disclosure, limit: 1e4, page: 0, defaultSelected: [], filterOptions: { folderId: o }, setSelectedProps: function () {} }), (0, r.jsx)(m.U, G({ justify: 'end', maxW: !0, className: W.btnWrapper }, { children: (0, r.jsx)(y.z, G({ onClick: p }, { children: 'Добавить' })) }))] }));
                }),
                _ = t(1652),
                F = {};
            (F.styleTagTransform = M()),
                (F.setAttributes = N()),
                (F.insert = E().bind(null, 'head')),
                (F.domAPI = P()),
                (F.insertStyleElement = S()),
                O()(_.Z, F);
            const L = _.Z && _.Z.locals ? _.Z.locals : void 0;
            var U = function () {
                return (
                    (U =
                        Object.assign ||
                        function (e) {
                            for (var n, t = 1, r = arguments.length; t < r; t++)
                                for (var i in (n = arguments[t]))
                                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                            return e;
                        }),
                    U.apply(this, arguments)
                );
            };
            const V = (0, a.memo)(function (e) {
                var n,
                    t = e.className;
                (0, a.useEffect)(function () {
                    document.title = 'Просмотр группы';
                }, []);
                var w = (0, s.UO)().urlFolderId,
                    j = (0, d.T)(),
                    C = (0, u.v9)(c.Cb),
                    O = (0, u.v9)(c.Ln),
                    k = (0, x.P)().pending,
                    P = (0, a.useState)(-55),
                    z = P[0],
                    E = P[1],
                    I = (0, a.useState)(!1),
                    N = I[0],
                    T = I[1],
                    S = (0, a.useState)(!1),
                    A = S[0],
                    M = S[1];
                (0, a.useEffect)(
                    function () {
                        if (!w) throw new Error('FolderID');
                        E(~~w);
                    },
                    [w],
                ),
                    (0, a.useEffect)(
                        function () {
                            z > 0 && j((0, c.gd)(z));
                        },
                        [j, z],
                    ),
                    (0, a.useEffect)(
                        function () {
                            A && (j((0, c.gd)(z)), M(!1));
                        },
                        [A, j, z],
                    );
                var Z = (0, a.useCallback)(function () {
                        T(!0);
                    }, []),
                    D = (0, a.useCallback)(
                        function (e) {
                            return (
                                (n = void 0),
                                (t = void 0),
                                (i = function () {
                                    return (function (e, n) {
                                        var t,
                                            r,
                                            i,
                                            l,
                                            a = {
                                                label: 0,
                                                sent: function () {
                                                    if (1 & i[0]) throw i[1];
                                                    return i[1];
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
                                            return function (s) {
                                                return (function (o) {
                                                    if (t)
                                                        throw new TypeError(
                                                            'Generator is already executing.',
                                                        );
                                                    for (; l && ((l = 0), o[0] && (a = 0)), a; )
                                                        try {
                                                            if (
                                                                ((t = 1),
                                                                r &&
                                                                    (i =
                                                                        2 & o[0]
                                                                            ? r.return
                                                                            : o[0]
                                                                            ? r.throw ||
                                                                              ((i = r.return) &&
                                                                                  i.call(r),
                                                                              0)
                                                                            : r.next) &&
                                                                    !(i = i.call(r, o[1])).done)
                                                            )
                                                                return i;
                                                            switch (
                                                                ((r = 0),
                                                                i && (o = [2 & o[0], i.value]),
                                                                o[0])
                                                            ) {
                                                                case 0:
                                                                case 1:
                                                                    i = o;
                                                                    break;
                                                                case 4:
                                                                    return (
                                                                        a.label++,
                                                                        { value: o[1], done: !1 }
                                                                    );
                                                                case 5:
                                                                    a.label++,
                                                                        (r = o[1]),
                                                                        (o = [0]);
                                                                    continue;
                                                                case 7:
                                                                    (o = a.ops.pop()), a.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (
                                                                        !(
                                                                            (i =
                                                                                (i = a.trys)
                                                                                    .length > 0 &&
                                                                                i[i.length - 1]) ||
                                                                            (6 !== o[0] &&
                                                                                2 !== o[0])
                                                                        )
                                                                    ) {
                                                                        a = 0;
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        3 === o[0] &&
                                                                        (!i ||
                                                                            (o[1] > i[0] &&
                                                                                o[1] < i[3]))
                                                                    ) {
                                                                        a.label = o[1];
                                                                        break;
                                                                    }
                                                                    if (
                                                                        6 === o[0] &&
                                                                        a.label < i[1]
                                                                    ) {
                                                                        (a.label = i[1]), (i = o);
                                                                        break;
                                                                    }
                                                                    if (i && a.label < i[2]) {
                                                                        (a.label = i[2]),
                                                                            a.ops.push(o);
                                                                        break;
                                                                    }
                                                                    i[2] && a.ops.pop(),
                                                                        a.trys.pop();
                                                                    continue;
                                                            }
                                                            o = n.call(e, a);
                                                        } catch (e) {
                                                            (o = [6, e]), (r = 0);
                                                        } finally {
                                                            t = i = 0;
                                                        }
                                                    if (5 & o[0]) throw o[1];
                                                    return {
                                                        value: o[0] ? o[1] : void 0,
                                                        done: !0,
                                                    };
                                                })([o, s]);
                                            };
                                        }
                                    })(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return [
                                                    4,
                                                    k(
                                                        j(
                                                            (0, h.dv)({
                                                                folderId: z,
                                                                candidateId: e,
                                                            }),
                                                        ),
                                                        {
                                                            loadingMessage:
                                                                'Исключаем кандидата из группы...',
                                                            successMessage: 'Его здесь больше нет!',
                                                        },
                                                    ),
                                                ];
                                            case 1:
                                                return (
                                                    'fulfilled' === n.sent().meta.requestStatus &&
                                                        j((0, c.gd)(z)),
                                                    [2]
                                                );
                                        }
                                    });
                                }),
                                new ((r = void 0) || (r = Promise))(function (e, l) {
                                    function a(e) {
                                        try {
                                            s(i.next(e));
                                        } catch (e) {
                                            l(e);
                                        }
                                    }
                                    function o(e) {
                                        try {
                                            s(i.throw(e));
                                        } catch (e) {
                                            l(e);
                                        }
                                    }
                                    function s(n) {
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
                                    s((i = i.apply(n, t || [])).next());
                                })
                            );
                            var n, t, r, i;
                        },
                        [j, z, k],
                    );
                return C
                    ? (0, r.jsx)(
                          p.W,
                          U(
                              { reducers: { folder: c.Jp } },
                              {
                                  children: (0, r.jsxs)(
                                      l.T,
                                      U(
                                          { className: (0, i.A)(L.FolderOverviewPage, {}, [t]) },
                                          {
                                              children: [
                                                  (0, r.jsx)(o.V, {
                                                      breadcrumbPath: [
                                                          {
                                                              label: 'Сравнение кандидатов',
                                                              url: b.h3.candidates,
                                                          },
                                                          {
                                                              label: 'Группировка кандидатов',
                                                              url: b.h3.grouping,
                                                          },
                                                          { label: 'Просмотр группы' },
                                                      ],
                                                      title: 'Просмотр группы ...',
                                                  }),
                                                  (0, r.jsx)(
                                                      v.i,
                                                      U(
                                                          { align: 'left', className: L.divider },
                                                          {
                                                              children: (0, r.jsx)(f.xv, {
                                                                  className: L.dividerTitle,
                                                                  align: 'left',
                                                                  text: 'Участники группы',
                                                                  size: 'small',
                                                              }),
                                                          },
                                                      ),
                                                  ),
                                                  (0, r.jsx)(
                                                      'div',
                                                      U(
                                                          { className: L.skeletonGrid },
                                                          {
                                                              children: new Array(10)
                                                                  .fill(0)
                                                                  .map(function (e, n) {
                                                                      return (0,
                                                                      r.jsxs)(m.g, U({ maxW: !0, align: 'center' }, { children: [(0, r.jsx)(g.O, { width: '150px', height: '150px' }), (0, r.jsx)(g.O, { width: '80px', height: '15px' }), (0, r.jsx)(g.O, { width: '120px', height: '15px' })] }), n);
                                                                  }),
                                                          },
                                                      ),
                                                  ),
                                              ],
                                          },
                                      ),
                                  ),
                              },
                          ),
                      )
                    : (0, r.jsx)(
                          p.W,
                          U(
                              { reducers: { folder: c.Jp } },
                              {
                                  children: (0, r.jsxs)(
                                      l.T,
                                      U(
                                          { className: (0, i.A)(L.FolderOverviewPage, {}, [t]) },
                                          {
                                              children: [
                                                  (0, r.jsx)(R, {
                                                      folderId: z,
                                                      open: N,
                                                      setOpen: T,
                                                      setWasDefined: M,
                                                  }),
                                                  (0, r.jsx)(o.V, {
                                                      breadcrumbPath: [
                                                          {
                                                              label: 'Сравнение кандидатов',
                                                              url: b.h3.candidates,
                                                          },
                                                          {
                                                              label: 'Группировка кандидатов',
                                                              url: b.h3.grouping,
                                                          },
                                                          { label: 'Просмотр группы' },
                                                      ],
                                                      title: 'Просмотр группы '.concat(
                                                          null == O ? void 0 : O.title,
                                                      ),
                                                  }),
                                                  (0, r.jsx)(
                                                      v.i,
                                                      U(
                                                          { align: 'left', className: L.divider },
                                                          {
                                                              children: (0, r.jsxs)(
                                                                  m.U,
                                                                  U(
                                                                      { gap: '32' },
                                                                      {
                                                                          children: [
                                                                              (0, r.jsx)(f.xv, {
                                                                                  className:
                                                                                      L.dividerTitle,
                                                                                  align: 'left',
                                                                                  text: 'Участники группы',
                                                                                  size: 'small',
                                                                              }),
                                                                              (0, r.jsx)(
                                                                                  y.z,
                                                                                  U(
                                                                                      {
                                                                                          size: 'small',
                                                                                          onClick:
                                                                                              Z,
                                                                                      },
                                                                                      {
                                                                                          children:
                                                                                              'Добавить',
                                                                                      },
                                                                                  ),
                                                                              ),
                                                                          ],
                                                                      },
                                                                  ),
                                                              ),
                                                          },
                                                      ),
                                                  ),
                                                  (
                                                      null ===
                                                          (n =
                                                              null == O
                                                                  ? void 0
                                                                  : O.participants) || void 0 === n
                                                          ? void 0
                                                          : n.length
                                                  )
                                                      ? (0, r.jsx)(h.i4, {
                                                            handleCandidateDelete: D,
                                                            gridColumns: 6,
                                                            candidates: O.participants,
                                                        })
                                                      : (0, r.jsx)(f.xv, {
                                                            title: 'Тут пока никого нет...',
                                                        }),
                                              ],
                                          },
                                      ),
                                  ),
                              },
                          ),
                      );
            });
        },
        6088: (e, n, t) => {
            t.d(n, { W: () => a });
            var r = t(5893),
                i = t(7294),
                l = t(3942),
                a = function (e) {
                    var n = (0, l.oR)(),
                        t = (0, l.I0)(),
                        a = e.children,
                        o = e.reducers,
                        s = e.removeAfterUnmount,
                        d = void 0 === s || s;
                    return (
                        (0, i.useEffect)(function () {
                            var e = n.reducerManager.getMountedReducers;
                            return (
                                Object.entries(o).forEach(function (r) {
                                    var i = r[0],
                                        l = r[1];
                                    e[i] ||
                                        (n.reducerManager.add(i, l),
                                        t({ type: '@INIT '.concat(i, ' reducer') }));
                                }),
                                function () {
                                    d &&
                                        Object.entries(o).forEach(function (e) {
                                            var r = e[0];
                                            n.reducerManager.remove(r),
                                                t({ type: '@DESTROY '.concat(r, ' reducer') });
                                        });
                                }
                            );
                        }, []),
                        (0, r.jsx)(r.Fragment, { children: a })
                    );
                };
        },
        1284: (e, n, t) => {
            t.d(n, { Z: () => o });
            var r = t(8081),
                i = t.n(r),
                l = t(3645),
                a = t.n(l)()(i());
            a.push([
                e.id,
                '.f41e4{width:70%}.ed8e6{max-height:calc(100vh - 180px);overflow-y:auto}.fd522{margin-top:50px}',
                '',
            ]),
                (a.locals = {
                    AddParticipantsModal: 'f41e4',
                    disclosure: 'ed8e6',
                    btnWrapper: 'fd522',
                });
            const o = a;
        },
        1652: (e, n, t) => {
            t.d(n, { Z: () => o });
            var r = t(8081),
                i = t.n(r),
                l = t(3645),
                a = t.n(l)()(i());
            a.push([
                e.id,
                '.f5bbb{margin:35px 0 0}.f5bbb:first-child{margin:0}.aeb2a{padding:2px 7px;border-radius:8px;background:#1a1d21}.aeb2a p{color:#999}.fb35a{display:grid;grid-template-columns:repeat(6, 1fr);grid-gap:20px;margin-top:20px}',
                '',
            ]),
                (a.locals = { divider: 'f5bbb', dividerTitle: 'aeb2a', skeletonGrid: 'fb35a' });
            const o = a;
        },
        8918: (e, n, t) => {
            t.d(n, { i: () => d });
            var r = t(7294),
                i = t(3643),
                l = t(3652),
                a = t(6367),
                o = {
                    root: function (e) {
                        var n = e.props,
                            t = e.horizontal,
                            r = e.vertical;
                        return (0, i.AK)(
                            'p-divider p-component p-divider-'
                                .concat(n.layout, ' p-divider-')
                                .concat(n.type),
                            {
                                'p-divider-left': t && (!n.align || 'left' === n.align),
                                'p-divider-right': t && 'right' === n.align,
                                'p-divider-center':
                                    (t && 'center' === n.align) ||
                                    (r && (!n.align || 'center' === n.align)),
                                'p-divider-top': r && 'top' === n.align,
                                'p-divider-bottom': r && 'bottom' === n.align,
                            },
                            n.className,
                        );
                    },
                    content: 'p-divider-content',
                },
                s = l.V.extend({
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
                d = r.forwardRef(function (e, n) {
                    var t = r.useContext(a.Ou),
                        o = s.getProps(e, t),
                        d = s.setMetaData({ props: o }),
                        c = d.ptm,
                        u = d.cx,
                        p = d.sx,
                        f = d.isUnstyled;
                    (0, l.e)(s.css.styles, f, { name: 'divider' });
                    var v = r.useRef(null),
                        h = 'horizontal' === o.layout,
                        b = 'vertical' === o.layout;
                    r.useImperativeHandle(n, function () {
                        return {
                            props: o,
                            getElement: function () {
                                return v.current;
                            },
                        };
                    });
                    var g = (0, i.dG)(
                            {
                                ref: v,
                                style: p('root'),
                                className: u('root', { horizontal: h, vertical: b }),
                                role: 'separator',
                            },
                            s.getOtherProps(o),
                            c('root'),
                        ),
                        m = (0, i.dG)({ className: u('content') }, c('content'));
                    return r.createElement('div', g, r.createElement('div', m, o.children));
                });
            d.displayName = 'Divider';
        },
        2285: (e, n, t) => {
            t.d(n, { v: () => a });
            var r = t(7294),
                i = t(4320);
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    l.apply(this, arguments)
                );
            }
            var a = r.memo(
                r.forwardRef(function (e, n) {
                    var t = i.A.getPTI(e);
                    return r.createElement(
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
                        r.createElement('path', {
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
