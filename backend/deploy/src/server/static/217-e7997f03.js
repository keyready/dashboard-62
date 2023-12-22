'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [217],
    {
        6217: (e, t, n) => {
            n.r(t), n.d(t, { default: () => pe });
            var a = n(5893),
                r = n(4807),
                i = n(2594),
                s = n(7294),
                l = n(6088),
                o = n(1456),
                c = n(8650),
                d = n(3379),
                u = n.n(d),
                p = n(7795),
                f = n.n(p),
                h = n(569),
                g = n.n(h),
                m = n(3565),
                x = n.n(m),
                b = n(9216),
                j = n.n(b),
                v = n(4589),
                k = n.n(v),
                w = n(8057),
                y = {};
            (y.styleTagTransform = k()),
                (y.setAttributes = x()),
                (y.insert = g().bind(null, 'head')),
                (y.domAPI = f()),
                (y.insertStyleElement = j()),
                u()(w.Z, y);
            const C = w.Z && w.Z.locals ? w.Z.locals : void 0;
            var O,
                S = function () {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                },
                P = (0, s.memo)(function (e) {
                    var t = e.className,
                        n = e.data,
                        i = (e.multiple, e.onRowDelete);
                    return (0, a.jsxs)(
                        o.w,
                        S(
                            {
                                className: (0, r.A)(C.Table, {}, [t]),
                                value: n,
                                removableSort: !0,
                                selectionMode: 'single',
                                sortField: 'name',
                                sortOrder: 1,
                                emptyMessage:
                                    'Выберите от 2 до 4 выпускников, чтобы перейти к углубленному сравнению',
                                onRowClick: function (e) {
                                    return null == i ? void 0 : i(e.data);
                                },
                            },
                            {
                                children: [
                                    (0, a.jsx)(c.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'firstname',
                                        header: 'ФИО',
                                        sortable: !0,
                                    }),
                                    (0, a.jsx)(c.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'faculty',
                                        header: 'Факультет',
                                        sortable: !0,
                                    }),
                                    (0, a.jsx)(c.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'department',
                                        header: 'Специальность',
                                        sortable: !0,
                                    }),
                                    (0, a.jsx)(c.s, {
                                        alignHeader: 'center',
                                        dataType: 'numeric',
                                        field: 'age',
                                        header: 'Возраст',
                                        sortable: !0,
                                    }),
                                    (0, a.jsx)(c.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'keySkills',
                                        header: 'Ключевые навыки',
                                        sortable: !0,
                                    }),
                                ],
                            },
                        ),
                    );
                }),
                N = n(7543),
                W = n(7820),
                A = n(7828),
                L = n(8068),
                T = n(9250),
                E = n(9170),
                Z = n(1222),
                z = n(8949);
            function U() {
                return (
                    (U = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var a in n)
                                      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                              }
                              return e;
                          }),
                    U.apply(this, arguments)
                );
            }
            const I = function (e) {
                return s.createElement(
                    'svg',
                    U(
                        {
                            width: 40,
                            height: 40,
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e,
                    ),
                    O ||
                        (O = s.createElement('path', {
                            d: 'm16.666 10 8.822 8.822c.65.65.65 1.706 0 2.357L16.666 30',
                            stroke: 'currentcolor',
                            strokeWidth: 2,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        })),
                );
            };
            var F = n(2540),
                H = n(3223),
                M = n(4710),
                R = n(536),
                _ = (0, s.memo)(function (e) {
                    var t = e.className,
                        n = e.setCurrentLimit,
                        r = e.setCurrentPage,
                        i = e.currentPage,
                        l = e.currentLimit,
                        o = e.totalCandidates,
                        c = (0, s.useCallback)(
                            function (e) {
                                n(e.rows), r(e.page);
                            },
                            [n, r],
                        );
                    return (0,
                    a.jsx)(R.D, { className: t, first: i * l, rows: l, totalRecords: o || 0, rowsPerPageOptions: [10,
                            15, 20, 50], onPageChange: c });
                }),
                B = n(3942),
                D = function (e) {
                    var t;
                    return null === (t = e.candidates) || void 0 === t ? void 0 : t.totalCandidates;
                },
                Y = n(2672),
                V = n(868),
                q = n(2466),
                G = n(9975),
                J = n(7974),
                K = n(702),
                Q = {};
            (Q.styleTagTransform = k()),
                (Q.setAttributes = x()),
                (Q.insert = g().bind(null, 'head')),
                (Q.domAPI = f()),
                (Q.insertStyleElement = j()),
                u()(K.Z, Q);
            const X = K.Z && K.Z.locals ? K.Z.locals : void 0;
            var $ = function () {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                },
                ee = (0, s.memo)(function (e) {
                    var t = e.isOpen,
                        n = e.setIsOpen,
                        r = e.filterOptions,
                        i = e.setFilterOptions,
                        l = (0, s.useState)(r),
                        o = l[0],
                        c = l[1],
                        d = (0, E.a)(),
                        u = d.addSearchParams,
                        p = d.deleteSearchParams,
                        f = (0, s.useCallback)(
                            function (e) {
                                c($($({}, r), { age: e.value }));
                            },
                            [r],
                        ),
                        h = (0, s.useCallback)(
                            function (e) {
                                c($($({}, r), { education: e }));
                            },
                            [r],
                        ),
                        g = (0, s.useCallback)(
                            function () {
                                i(o),
                                    u({ education: o.education.join(','), age: o.age.join(',') }),
                                    n(!1);
                            },
                            [o, i, n],
                        ),
                        m = (0, s.useCallback)(
                            function () {
                                i({ age: [18, 40], education: [] }),
                                    p('age'),
                                    p('education'),
                                    n(!1);
                            },
                            [n, i],
                        );
                    return (0,
                    a.jsx)(q.u, $({ className: X.modal, title: 'Поиск по параметрам', isOpen: t, setIsOpen: n }, { children: (0, a.jsxs)(N.g, $({ maxW: !0, className: X.wrapper }, { children: [(0, a.jsxs)(N.U, $({ maxW: !0, align: 'start', gap: '16' }, { children: [(0, a.jsx)('h3', $({ style: { margin: 0, textAlign: 'left' } }, { children: 'Факультет, кафедра:' })), (0, a.jsx)(G.m, { selectedParams: o.education, setSelectedParams: h })] })), (0, a.jsxs)(N.U, $({ maxW: !0, gap: '16' }, { children: [(0, a.jsx)('h3', $({ style: { margin: 0 } }, { children: 'Возраст:' })), (0, a.jsxs)(N.U, $({ className: X.sliderWrapper, maxW: !0, gap: '16' }, { children: [(0, a.jsx)('p', { children: o.age[0] }), (0, a.jsx)('div', $({ style: { width: '100%' } }, { children: (0, a.jsx)(J.i, { min: 18, max: 40, value: o.age, onChange: f, range: !0 }) })), (0, a.jsx)('p', { children: o.age[1] })] }))] })), (0, a.jsxs)(N.U, $({ maxW: !0, gap: '16' }, { children: [(0, a.jsx)(W.z, $({ onClick: g }, { children: 'Поиск' })), (0, a.jsx)(W.z, $({ variant: 'danger', onClick: m }, { children: 'Очистить фильтры' }))] }))] })) }));
                }),
                te = n(577),
                ne = n(9452),
                ae = n(5034),
                re = n(8832),
                ie = n(3887),
                se = n(5368),
                le = n(235),
                oe = {};
            (oe.styleTagTransform = k()),
                (oe.setAttributes = x()),
                (oe.insert = g().bind(null, 'head')),
                (oe.domAPI = f()),
                (oe.insertStyleElement = j()),
                u()(le.Z, oe);
            const ce = le.Z && le.Z.locals ? le.Z.locals : void 0;
            var de = function () {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                },
                ue = { candidates: se.ep };
            const pe = (0, s.memo)(function (e) {
                var t,
                    n,
                    o = e.className;
                (0, s.useEffect)(function () {
                    document.title = 'Кандидаты';
                }, []);
                var c = (0, E.a)(),
                    d = c.addSearchParams,
                    u = c.deleteSearchParams,
                    p = c.getSearchParam,
                    f = (0, s.useState)([]),
                    h = f[0],
                    g = f[1],
                    m = (0, s.useState)([]),
                    x = m[0],
                    b = m[1],
                    j = (0, s.useState)(''),
                    v = j[0],
                    k = j[1],
                    w = (0, s.useState)(!1),
                    y = w[0],
                    C = w[1],
                    O = (0, s.useState)(!1),
                    S = O[0],
                    U = O[1],
                    R = (0, s.useState)(0),
                    G = R[0],
                    J = R[1],
                    K = (0, s.useState)(10),
                    Q = K[0],
                    X = K[1],
                    $ = (0, s.useState)(-1),
                    se = $[0],
                    le = $[1],
                    oe = (0, s.useState)(!1),
                    pe = oe[0],
                    fe = oe[1],
                    he = (0, s.useState)({ education: [], age: [18, 40] }),
                    ge = he[0],
                    me = he[1],
                    xe = (0, T.s0)(),
                    be = (0, B.v9)(D),
                    je = (0, Y.T)(),
                    ve = (0, re.P)().pending,
                    ke = (0, ie.V)({ page: G, limit: Q, filterOptions: ge }),
                    we = ke.data,
                    ye = ke.isLoading,
                    Ce = ke.isFetching;
                (0, s.useEffect)(
                    function () {
                        je((0, V.LY)());
                    },
                    [ge, je],
                ),
                    (0, s.useEffect)(
                        function () {
                            je((0, V.LY)());
                            var e = p('task'),
                                t = p('selected'),
                                n = p('age'),
                                a = p('education');
                            e && k(e),
                                t && b(t.split(',').map(Number)),
                                a &&
                                    (me(de(de({}, ge), { education: a.split(',') })),
                                    d({ education: a })),
                                n &&
                                    (me(de(de({}, ge), { age: n.split(',').map(Number) })),
                                    d({ age: n }));
                        },
                        [je, ge],
                    ),
                    (0, s.useEffect)(
                        function () {
                            x.length &&
                                we &&
                                g(
                                    we.filter(function (e) {
                                        return x.includes(e.id);
                                    }),
                                );
                        },
                        [we, x],
                    ),
                    (0, s.useEffect)(
                        function () {
                            h.length &&
                                d({
                                    selected: h
                                        .map(function (e) {
                                            return e.id.toString();
                                        })
                                        .join(','),
                                });
                        },
                        [h],
                    );
                var Oe = (0, s.useCallback)(
                    function () {
                        v.length >= 10 &&
                            h.length >= 2 &&
                            h.length <= 4 &&
                            xe(
                                ''
                                    .concat(Z.h3.detailedcomparison, '?selected=')
                                    .concat(
                                        h
                                            .map(function (e) {
                                                return e.id.toString();
                                            })
                                            .join(','),
                                        '&task=',
                                    )
                                    .concat(v),
                            );
                    },
                    [xe, h, v],
                );
                (0, s.useEffect)(
                    function () {
                        v && d({ task: v });
                    },
                    [v],
                );
                var Se = (0, s.useCallback)(function (e) {
                        g(function (t) {
                            return t.filter(function (t) {
                                return t.id !== e.id;
                            });
                        });
                    }, []),
                    Pe = (0, s.useCallback)(
                        function (e) {
                            return (
                                (t = void 0),
                                (n = void 0),
                                (r = function () {
                                    return (function (e, t) {
                                        var n,
                                            a,
                                            r,
                                            i,
                                            s = {
                                                label: 0,
                                                sent: function () {
                                                    if (1 & r[0]) throw r[1];
                                                    return r[1];
                                                },
                                                trys: [],
                                                ops: [],
                                            };
                                        return (
                                            (i = { next: l(0), throw: l(1), return: l(2) }),
                                            'function' == typeof Symbol &&
                                                (i[Symbol.iterator] = function () {
                                                    return this;
                                                }),
                                            i
                                        );
                                        function l(l) {
                                            return function (o) {
                                                return (function (l) {
                                                    if (n)
                                                        throw new TypeError(
                                                            'Generator is already executing.',
                                                        );
                                                    for (; i && ((i = 0), l[0] && (s = 0)), s; )
                                                        try {
                                                            if (
                                                                ((n = 1),
                                                                a &&
                                                                    (r =
                                                                        2 & l[0]
                                                                            ? a.return
                                                                            : l[0]
                                                                            ? a.throw ||
                                                                              ((r = a.return) &&
                                                                                  r.call(a),
                                                                              0)
                                                                            : a.next) &&
                                                                    !(r = r.call(a, l[1])).done)
                                                            )
                                                                return r;
                                                            switch (
                                                                ((a = 0),
                                                                r && (l = [2 & l[0], r.value]),
                                                                l[0])
                                                            ) {
                                                                case 0:
                                                                case 1:
                                                                    r = l;
                                                                    break;
                                                                case 4:
                                                                    return (
                                                                        s.label++,
                                                                        { value: l[1], done: !1 }
                                                                    );
                                                                case 5:
                                                                    s.label++,
                                                                        (a = l[1]),
                                                                        (l = [0]);
                                                                    continue;
                                                                case 7:
                                                                    (l = s.ops.pop()), s.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (
                                                                        !(
                                                                            (r =
                                                                                (r = s.trys)
                                                                                    .length > 0 &&
                                                                                r[r.length - 1]) ||
                                                                            (6 !== l[0] &&
                                                                                2 !== l[0])
                                                                        )
                                                                    ) {
                                                                        s = 0;
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        3 === l[0] &&
                                                                        (!r ||
                                                                            (l[1] > r[0] &&
                                                                                l[1] < r[3]))
                                                                    ) {
                                                                        s.label = l[1];
                                                                        break;
                                                                    }
                                                                    if (
                                                                        6 === l[0] &&
                                                                        s.label < r[1]
                                                                    ) {
                                                                        (s.label = r[1]), (r = l);
                                                                        break;
                                                                    }
                                                                    if (r && s.label < r[2]) {
                                                                        (s.label = r[2]),
                                                                            s.ops.push(l);
                                                                        break;
                                                                    }
                                                                    r[2] && s.ops.pop(),
                                                                        s.trys.pop();
                                                                    continue;
                                                            }
                                                            l = t.call(e, s);
                                                        } catch (e) {
                                                            (l = [6, e]), (a = 0);
                                                        } finally {
                                                            n = r = 0;
                                                        }
                                                    if (5 & l[0]) throw l[1];
                                                    return {
                                                        value: l[0] ? l[1] : void 0,
                                                        done: !0,
                                                    };
                                                })([l, o]);
                                            };
                                        }
                                    })(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (
                                                    U(!0),
                                                    [
                                                        4,
                                                        ve(
                                                            je(
                                                                (0, H.wH)({
                                                                    candidateIds: [se],
                                                                    folderId: e,
                                                                }),
                                                            ),
                                                            {
                                                                successMessage:
                                                                    'Кандидат добавлен в группу',
                                                                loadingMessage: 'Добавление...',
                                                            },
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return t.sent(), U(!1), fe(!1), [2];
                                        }
                                    });
                                }),
                                new ((a = void 0) || (a = Promise))(function (e, i) {
                                    function s(e) {
                                        try {
                                            o(r.next(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function l(e) {
                                        try {
                                            o(r.throw(e));
                                        } catch (e) {
                                            i(e);
                                        }
                                    }
                                    function o(t) {
                                        var n;
                                        t.done
                                            ? e(t.value)
                                            : ((n = t.value),
                                              n instanceof a
                                                  ? n
                                                  : new a(function (e) {
                                                        e(n);
                                                    })).then(s, l);
                                    }
                                    o((r = r.apply(t, n || [])).next());
                                })
                            );
                            var t, n, a, r;
                        },
                        [je, ve, se],
                    ),
                    Ne = (0, s.useCallback)(function (e) {
                        fe(!0), le(e);
                    }, []);
                return (
                    (0, s.useEffect)(
                        function () {
                            var e = function (e) {
                                'Enter' === e.key &&
                                    v.length >= 10 &&
                                    h.length >= 2 &&
                                    h.length <= 6 &&
                                    xe(
                                        ''
                                            .concat(Z.h3.detailedcomparison, '?selected=')
                                            .concat(
                                                h
                                                    .map(function (e) {
                                                        return e.id.toString();
                                                    })
                                                    .join(','),
                                                '&task=',
                                            )
                                            .concat(v),
                                    );
                            };
                            return (
                                document.addEventListener('keydown', e),
                                function () {
                                    document.removeEventListener('keydown', e);
                                }
                            );
                        },
                        [xe, h, v],
                    ),
                    ye
                        ? (0, a.jsx)(
                              l.W,
                              de(
                                  { reducers: ue, removeAfterUnmount: !1 },
                                  {
                                      children: (0, a.jsx)(
                                          i.T,
                                          de(
                                              { className: (0, r.A)(ce.CandidatesPage, {}, [o]) },
                                              {
                                                  children: (0, a.jsxs)(
                                                      N.g,
                                                      de(
                                                          { maxW: !0, gap: '32' },
                                                          {
                                                              children: [
                                                                  (0, a.jsx)(M.O, {
                                                                      width: '45%',
                                                                      height: '85px',
                                                                  }),
                                                                  (0, a.jsxs)(
                                                                      N.U,
                                                                      de(
                                                                          {
                                                                              className:
                                                                                  ce.skeletonWrapper,
                                                                              gap: '16',
                                                                              maxW: !0,
                                                                              align: 'start',
                                                                              justify: 'between',
                                                                          },
                                                                          {
                                                                              children: [
                                                                                  (0, a.jsx)(
                                                                                      N.g,
                                                                                      de(
                                                                                          {
                                                                                              gap: '16',
                                                                                              className:
                                                                                                  ce.skeletonList,
                                                                                          },
                                                                                          {
                                                                                              children:
                                                                                                  new Array(
                                                                                                      10,
                                                                                                  )
                                                                                                      .fill(
                                                                                                          0,
                                                                                                      )
                                                                                                      .map(
                                                                                                          function (
                                                                                                              e,
                                                                                                              t,
                                                                                                          ) {
                                                                                                              return (0,
                                                                                                              a.jsxs)(
                                                                                                                  N.U,
                                                                                                                  de(
                                                                                                                      {
                                                                                                                          className:
                                                                                                                              ce.skeletonCard,
                                                                                                                          maxW: !0,
                                                                                                                          gap: '8',
                                                                                                                      },
                                                                                                                      {
                                                                                                                          children:
                                                                                                                              [
                                                                                                                                  (0,
                                                                                                                                  a.jsx)(
                                                                                                                                      M.O,
                                                                                                                                      {
                                                                                                                                          shape: 'circle',
                                                                                                                                          size: '75px',
                                                                                                                                      },
                                                                                                                                  ),
                                                                                                                                  (0,
                                                                                                                                  a.jsxs)(
                                                                                                                                      N.g,
                                                                                                                                      de(
                                                                                                                                          {
                                                                                                                                              maxW: !0,
                                                                                                                                              align: 'start',
                                                                                                                                          },
                                                                                                                                          {
                                                                                                                                              children:
                                                                                                                                                  [
                                                                                                                                                      (0,
                                                                                                                                                      a.jsx)(
                                                                                                                                                          M.O,
                                                                                                                                                          {
                                                                                                                                                              width: '100%',
                                                                                                                                                              height: '40px',
                                                                                                                                                          },
                                                                                                                                                      ),
                                                                                                                                                      (0,
                                                                                                                                                      a.jsx)(
                                                                                                                                                          M.O,
                                                                                                                                                          {
                                                                                                                                                              width: '60%',
                                                                                                                                                              height: '20px',
                                                                                                                                                          },
                                                                                                                                                      ),
                                                                                                                                                      (0,
                                                                                                                                                      a.jsx)(
                                                                                                                                                          M.O,
                                                                                                                                                          {
                                                                                                                                                              width: '60%',
                                                                                                                                                              height: '20px',
                                                                                                                                                          },
                                                                                                                                                      ),
                                                                                                                                                  ],
                                                                                                                                          },
                                                                                                                                      ),
                                                                                                                                  ),
                                                                                                                              ],
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  t,
                                                                                                              );
                                                                                                          },
                                                                                                      ),
                                                                                          },
                                                                                      ),
                                                                                  ),
                                                                                  (0, a.jsx)(M.O, {
                                                                                      className:
                                                                                          ce.skeletonTable,
                                                                                      width: '60%',
                                                                                      height: '30vh',
                                                                                  }),
                                                                              ],
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
                                  },
                              ),
                          )
                        : (null == we ? void 0 : we.length) || ye
                        ? (0, a.jsxs)(
                              l.W,
                              de(
                                  { reducers: ue, removeAfterUnmount: !1 },
                                  {
                                      children: [
                                          (0, a.jsx)(
                                              q.u,
                                              de(
                                                  {
                                                      className: ce.modal,
                                                      isOpen: pe,
                                                      setIsOpen: fe,
                                                  },
                                                  {
                                                      children: (0, a.jsx)(ae.gB, {
                                                          isCandidateAdding: S,
                                                          handleClick: Pe,
                                                      }),
                                                  },
                                              ),
                                          ),
                                          (0, a.jsxs)(
                                              i.T,
                                              de(
                                                  {
                                                      className: (0, r.A)(ce.CandidatesPage, {}, [
                                                          o,
                                                      ]),
                                                  },
                                                  {
                                                      children: [
                                                          (0, a.jsx)(ee, {
                                                              filterOptions: ge,
                                                              setIsOpen: C,
                                                              isOpen: y,
                                                              setFilterOptions: me,
                                                          }),
                                                          (0, a.jsx)(te.V, {
                                                              title: 'Сравнение выпускников',
                                                          }),
                                                          (0, a.jsxs)(
                                                              N.U,
                                                              de(
                                                                  {
                                                                      className: ce.deleteBtn,
                                                                      maxW: !0,
                                                                      justify: 'end',
                                                                  },
                                                                  {
                                                                      children: [
                                                                          (0, a.jsx)(
                                                                              W.z,
                                                                              de(
                                                                                  {
                                                                                      variant:
                                                                                          'warning',
                                                                                      size: 'small',
                                                                                      onClick:
                                                                                          function () {
                                                                                              return xe(
                                                                                                  Z
                                                                                                      .h3
                                                                                                      .grouping,
                                                                                              );
                                                                                          },
                                                                                  },
                                                                                  {
                                                                                      children:
                                                                                          'Группировка кандидатов',
                                                                                  },
                                                                              ),
                                                                          ),
                                                                          (0, a.jsx)(
                                                                              W.z,
                                                                              de(
                                                                                  {
                                                                                      size: 'small',
                                                                                      onClick:
                                                                                          function () {
                                                                                              return C(
                                                                                                  !0,
                                                                                              );
                                                                                          },
                                                                                  },
                                                                                  {
                                                                                      children:
                                                                                          'Поиск по параметрам',
                                                                                  },
                                                                              ),
                                                                          ),
                                                                          (0, a.jsx)(
                                                                              W.z,
                                                                              de(
                                                                                  {
                                                                                      size: 'small',
                                                                                      variant:
                                                                                          'danger',
                                                                                      disabled:
                                                                                          !h.length,
                                                                                      onClick:
                                                                                          function () {
                                                                                              g([]),
                                                                                                  u(
                                                                                                      'selected',
                                                                                                  ),
                                                                                                  u(
                                                                                                      'task',
                                                                                                  );
                                                                                          },
                                                                                  },
                                                                                  {
                                                                                      children:
                                                                                          'Очистить выбор',
                                                                                  },
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  },
                                                              ),
                                                          ),
                                                          (0, a.jsxs)(
                                                              L.q,
                                                              de(
                                                                  { className: ce.contentWrapper },
                                                                  {
                                                                      children: [
                                                                          (0, a.jsxs)(
                                                                              L.E,
                                                                              de(
                                                                                  {
                                                                                      size: 40,
                                                                                      className:
                                                                                          ce.accordion,
                                                                                  },
                                                                                  {
                                                                                      children: [
                                                                                          Ce
                                                                                              ? (0,
                                                                                                a.jsx)(
                                                                                                    N.g,
                                                                                                    de(
                                                                                                        {
                                                                                                            gap: '16',
                                                                                                            className:
                                                                                                                ce.skeletonListFetching,
                                                                                                        },
                                                                                                        {
                                                                                                            children:
                                                                                                                new Array(
                                                                                                                    5,
                                                                                                                )
                                                                                                                    .fill(
                                                                                                                        0,
                                                                                                                    )
                                                                                                                    .map(
                                                                                                                        function (
                                                                                                                            e,
                                                                                                                            t,
                                                                                                                        ) {
                                                                                                                            return (0,
                                                                                                                            a.jsxs)(
                                                                                                                                N.U,
                                                                                                                                de(
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            ce.skeletonCard,
                                                                                                                                        maxW: !0,
                                                                                                                                        gap: '8',
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        children:
                                                                                                                                            [
                                                                                                                                                (0,
                                                                                                                                                a.jsx)(
                                                                                                                                                    M.O,
                                                                                                                                                    {
                                                                                                                                                        shape: 'circle',
                                                                                                                                                        size: '75px',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                (0,
                                                                                                                                                a.jsxs)(
                                                                                                                                                    N.g,
                                                                                                                                                    de(
                                                                                                                                                        {
                                                                                                                                                            maxW: !0,
                                                                                                                                                            align: 'start',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            children:
                                                                                                                                                                [
                                                                                                                                                                    (0,
                                                                                                                                                                    a.jsx)(
                                                                                                                                                                        M.O,
                                                                                                                                                                        {
                                                                                                                                                                            width: '100%',
                                                                                                                                                                            height: '40px',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    (0,
                                                                                                                                                                    a.jsx)(
                                                                                                                                                                        M.O,
                                                                                                                                                                        {
                                                                                                                                                                            width: '60%',
                                                                                                                                                                            height: '20px',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    (0,
                                                                                                                                                                    a.jsx)(
                                                                                                                                                                        M.O,
                                                                                                                                                                        {
                                                                                                                                                                            width: '60%',
                                                                                                                                                                            height: '20px',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                ],
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ],
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                t,
                                                                                                                            );
                                                                                                                        },
                                                                                                                    ),
                                                                                                        },
                                                                                                    ),
                                                                                                )
                                                                                              : (0,
                                                                                                a.jsx)(
                                                                                                    ne.Y,
                                                                                                    {
                                                                                                        page: G,
                                                                                                        limit: Q,
                                                                                                        filterOptions:
                                                                                                            ge,
                                                                                                        defaultSelected:
                                                                                                            h,
                                                                                                        setSelectedProps:
                                                                                                            g,
                                                                                                        handleShowAddModal:
                                                                                                            Ne,
                                                                                                    },
                                                                                                ),
                                                                                          (0,
                                                                                          a.jsx)(
                                                                                              _,
                                                                                              {
                                                                                                  totalCandidates:
                                                                                                      be,
                                                                                                  setCurrentLimit:
                                                                                                      X,
                                                                                                  setCurrentPage:
                                                                                                      J,
                                                                                                  currentPage:
                                                                                                      G,
                                                                                                  currentLimit:
                                                                                                      Q,
                                                                                              },
                                                                                          ),
                                                                                      ],
                                                                                  },
                                                                              ),
                                                                          ),
                                                                          (0, a.jsxs)(
                                                                              L.E,
                                                                              de(
                                                                                  {
                                                                                      size: 60,
                                                                                      className:
                                                                                          ce.tableWrapper,
                                                                                  },
                                                                                  {
                                                                                      children: [
                                                                                          (0,
                                                                                          a.jsx)(
                                                                                              P,
                                                                                              {
                                                                                                  data: h,
                                                                                                  onRowDelete:
                                                                                                      Se,
                                                                                              },
                                                                                          ),
                                                                                          (0,
                                                                                          a.jsx)(
                                                                                              F.I,
                                                                                              {
                                                                                                  className:
                                                                                                      ce.input,
                                                                                                  value: v,
                                                                                                  onChange:
                                                                                                      k,
                                                                                                  placeholder:
                                                                                                      'Введите задачу, которую необходимо решить',
                                                                                              },
                                                                                          ),
                                                                                          (0,
                                                                                          a.jsxs)(
                                                                                              N.U,
                                                                                              de(
                                                                                                  {
                                                                                                      maxW: !0,
                                                                                                      justify:
                                                                                                          'end',
                                                                                                      className:
                                                                                                          (0,
                                                                                                          r.A)(
                                                                                                              ce.detailedComparisonLinkWrapper,
                                                                                                              ((t =
                                                                                                                  {}),
                                                                                                              (t[
                                                                                                                  ce.active
                                                                                                              ] =
                                                                                                                  v.length >=
                                                                                                                      10 &&
                                                                                                                  h.length >=
                                                                                                                      2 &&
                                                                                                                  h.length <=
                                                                                                                      6),
                                                                                                              t),
                                                                                                          ),
                                                                                                      onClick:
                                                                                                          Oe,
                                                                                                  },
                                                                                                  {
                                                                                                      children:
                                                                                                          [
                                                                                                              (0,
                                                                                                              a.jsx)(
                                                                                                                  A.xv,
                                                                                                                  {
                                                                                                                      title: 'Перейти к подробному сравнению',
                                                                                                                      size: 'small',
                                                                                                                      align: 'right',
                                                                                                                      className:
                                                                                                                          (0,
                                                                                                                          r.A)(
                                                                                                                              ce.detailedComparisonLink,
                                                                                                                              ((n =
                                                                                                                                  {}),
                                                                                                                              (n[
                                                                                                                                  ce.active
                                                                                                                              ] =
                                                                                                                                  v.length >=
                                                                                                                                      10 &&
                                                                                                                                  h.length >=
                                                                                                                                      2 &&
                                                                                                                                  h.length <=
                                                                                                                                      6),
                                                                                                                              n),
                                                                                                                          ),
                                                                                                                  },
                                                                                                              ),
                                                                                                              (0,
                                                                                                              a.jsx)(
                                                                                                                  z.J,
                                                                                                                  {
                                                                                                                      Svg: I,
                                                                                                                  },
                                                                                                              ),
                                                                                                          ],
                                                                                                  },
                                                                                              ),
                                                                                          ),
                                                                                      ],
                                                                                  },
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  },
                                                              ),
                                                          ),
                                                      ],
                                                  },
                                              ),
                                          ),
                                      ],
                                  },
                              ),
                          )
                        : (0, a.jsx)(
                              l.W,
                              de(
                                  { reducers: ue, removeAfterUnmount: !1 },
                                  {
                                      children: (0, a.jsx)(
                                          i.T,
                                          de(
                                              { className: (0, r.A)(ce.CandidatesPage, {}, [o]) },
                                              {
                                                  children: (0, a.jsx)('h2', {
                                                      children: 'ничего не нашли',
                                                  }),
                                              },
                                          ),
                                      ),
                                  },
                              ),
                          )
                );
            });
        },
        9170: (e, t, n) => {
            n.d(t, { a: () => r });
            var a = n(9655);
            function r() {
                var e = (0, a.lr)(),
                    t = e[0],
                    n = e[1];
                return {
                    addSearchParams: function (e) {
                        for (var a in e) t.set(a, e[a]);
                        n(t);
                    },
                    deleteSearchParams: function (e) {
                        t.delete(e), n(t);
                    },
                    getSearchParams: function () {
                        return (
                            Array.from(t.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            }) || []
                        );
                    },
                    getSearchParam: function (e) {
                        var n,
                            a = Array.from(t.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            });
                        return (
                            (null ===
                                (n = a.filter(function (t) {
                                    return t.param === e;
                                })[0]) || void 0 === n
                                ? void 0
                                : n.value) || void 0
                        );
                    },
                };
            }
        },
        235: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(8081),
                r = n.n(a),
                i = n(3645),
                s = n.n(i)()(r());
            s.push([
                e.id,
                '.feaf1{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px}.feaf1 p{margin:0 0 0 5px;line-height:17px}.fbe48{position:sticky;bottom:20px}.b6c7d *{text-align:center;align-self:center}.acf93{margin-bottom:20px}.f169f{border:none;background:rgba(0,0,0,0);display:flex;align-items:start;gap:10px;outline:none;position:relative}.fc42d{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px;position:sticky;top:-20px}.e375b{margin-top:20px}.b62f5{cursor:not-allowed;margin:20px}.c92f3 h3{margin:0;color:rgba(100,100,100,.7)}.b358d{cursor:pointer}.b358d h3{color:rgba(0,0,0,0) !important;font:var(--font-m);font-weight:bold;-webkit-background-clip:text !important;background-clip:text !important;background-image:var(--accent-gradient) !important}.d81bd{align-items:start;position:relative}.d8a23{padding:10px 15px;border-radius:8px;outline:2px solid rgba(255,255,255,.06)}.a7542{width:40%}.deaba{width:100%}.af420{width:60%}.d2ce9{min-width:800px}',
                '',
            ]),
                (s.locals = {
                    'accordion': 'feaf1',
                    'paginator': 'fbe48',
                    'p-datatable-wrapper': 'b6c7d',
                    'deleteBtn': 'acf93',
                    'contentWrapper': 'f169f',
                    'tableWrapper': 'fc42d',
                    'input': 'e375b',
                    'detailedComparisonLinkWrapper': 'b62f5',
                    'detailedComparisonLink': 'c92f3',
                    'active': 'b358d',
                    'skeletonWrapper': 'd81bd',
                    'skeletonCard': 'd8a23',
                    'skeletonList': 'a7542',
                    'skeletonListFetching': 'deaba',
                    'skeletonTable': 'af420',
                    'modal': 'd2ce9',
                });
            const l = s;
        },
        8057: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(8081),
                r = n.n(a),
                i = n(3645),
                s = n.n(i)()(r());
            s.push([e.id, '.f4146{width:100%}', '']), (s.locals = { Table: 'f4146' });
            const l = s;
        },
        702: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(8081),
                r = n.n(a),
                i = n(3645),
                s = n.n(i)()(r());
            s.push([e.id, '.a0bee{max-width:50vw}.f1dcd{width:100%}.a5723{margin-top:20px}', '']),
                (s.locals = { modal: 'a0bee', sliderWrapper: 'f1dcd', wrapper: 'a5723' });
            const l = s;
        },
    },
]);
