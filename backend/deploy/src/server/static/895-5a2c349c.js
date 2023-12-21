'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [895],
    {
        6895: (e, a, t) => {
            t.r(a), t.d(a, { default: () => Q });
            var r,
                n,
                s = t(5893),
                l = t(4807),
                i = t(2594),
                c = t(7294),
                o = t(7543),
                d = t(7828),
                u = t(9170);
            function m() {
                return (
                    (m = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var r in t)
                                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                          }),
                    m.apply(this, arguments)
                );
            }
            const p = function (e) {
                return c.createElement(
                    'svg',
                    m(
                        {
                            width: 50,
                            height: 50,
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e,
                    ),
                    r ||
                        (r = c.createElement('path', {
                            opacity: 0.5,
                            d: 'M45.833 25c0 11.506-9.327 20.833-20.833 20.833-11.506 0-20.834-9.327-20.834-20.833C4.166 13.494 13.494 4.167 25 4.167S45.833 13.494 45.833 25Z',
                            fill: '#686B6E',
                        })),
                    n ||
                        (n = c.createElement('path', {
                            d: 'm21.693 17.704.342-.612c1.32-2.367 1.979-3.55 2.965-3.55.986 0 1.646 1.183 2.966 3.55l.341.613c.375.672.562 1.008.855 1.23.292.222.656.305 1.384.47l.663.15c2.562.579 3.843.869 4.148 1.849.305.98-.569 2.001-2.315 4.044l-.452.528c-.497.58-.745.87-.856 1.23-.112.359-.075.746 0 1.52l.069.706c.264 2.725.396 4.088-.402 4.693-.798.606-1.997.054-4.396-1.05l-.62-.287c-.683-.313-1.024-.47-1.385-.47s-.702.157-1.384.47l-.62.286c-2.4 1.105-3.599 1.657-4.397 1.051-.798-.605-.666-1.968-.401-4.693l.068-.705c.075-.775.112-1.162 0-1.52-.111-.36-.36-.65-.855-1.23l-.452-.53c-1.747-2.042-2.62-3.063-2.316-4.043.305-.98 1.586-1.27 4.148-1.85l.663-.15c.728-.165 1.092-.247 1.385-.469.292-.222.48-.558.854-1.23Z',
                            fill: '#FAF000',
                        })),
                );
            };
            var f = t(8949),
                h = t(4710),
                x = t(3887),
                g = t(3741),
                v = t(3379),
                b = t.n(v),
                j = t(7795),
                y = t.n(j),
                O = t(569),
                N = t.n(O),
                Z = t(3565),
                C = t.n(Z),
                w = t(9216),
                A = t.n(w),
                E = t(4589),
                P = t.n(E),
                S = t(8210),
                k = {};
            (k.styleTagTransform = P()),
                (k.setAttributes = C()),
                (k.insert = N().bind(null, 'head')),
                (k.domAPI = y()),
                (k.insertStyleElement = A()),
                b()(S.Z, k);
            const T = S.Z && S.Z.locals ? S.Z.locals : void 0;
            var F = function () {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                },
                B = (0, c.memo)(function (e) {
                    var a = e.className,
                        t = e.compareResult,
                        r = (0, c.useState)({}),
                        n = r[0],
                        i = r[1],
                        o = (0, c.useState)({}),
                        d = o[0],
                        u = o[1],
                        m = (0, c.useMemo)(function () {
                            return [
                                '#FCE4D6',
                                '#FDF4E3',
                                '#E6F0F9',
                                '#E8F6E4',
                                '#FDF2E8',
                                '#E3F2FD',
                            ];
                        }, []);
                    return (
                        (0, c.useEffect)(
                            function () {
                                var e,
                                    a,
                                    r =
                                        F(F({}, null == t ? void 0 : t.diagramData), {
                                            datasets:
                                                null ===
                                                    (a =
                                                        null ===
                                                            (e =
                                                                null == t
                                                                    ? void 0
                                                                    : t.diagramData) || void 0 === e
                                                            ? void 0
                                                            : e.datasets) || void 0 === a
                                                    ? void 0
                                                    : a.map(function (e, a) {
                                                          return F(F({}, e), { color: m[a] });
                                                      }),
                                        }) || {};
                                i(r),
                                    u({
                                        plugins: { legend: { labels: { color: '#fff' } } },
                                        scales: { r: { grid: { color: '#fff' } } },
                                        responsive: !0,
                                    });
                            },
                            [m, t],
                        ),
                        (0, s.jsx)(g.k, {
                            className: (0, l.A)(T.radar, {}, [a]),
                            type: 'radar',
                            data: n || {},
                            options: d,
                        })
                    );
                }),
                R = t(8707),
                I = {};
            (I.styleTagTransform = P()),
                (I.setAttributes = C()),
                (I.insert = N().bind(null, 'head')),
                (I.domAPI = y()),
                (I.insertStyleElement = A()),
                b()(R.Z, I);
            const D = R.Z && R.Z.locals ? R.Z.locals : void 0;
            var L = (0, c.memo)(function (e) {
                    var a = e.className,
                        t = e.label,
                        r = e.compareResult,
                        n = (0, c.useState)({}),
                        i = n[0],
                        o = n[1],
                        d = (0, c.useState)({}),
                        u = d[0],
                        m = d[1];
                    return (
                        (0, c.useEffect)(
                            function () {
                                getComputedStyle(document.documentElement);
                                var e = '#8d8c8c',
                                    a = {
                                        labels:
                                            null == r
                                                ? void 0
                                                : r.comparedCandidates.map(function (e) {
                                                      return e.firstname;
                                                  }),
                                        datasets: [
                                            {
                                                label: t[0],
                                                backgroundColor: '#82DBF7',
                                                borderColor: '#00FAEB',
                                                data:
                                                    null == r
                                                        ? void 0
                                                        : r.comparedCandidates.map(function (e) {
                                                              return e.taskOverlap;
                                                          }),
                                            },
                                            {
                                                label: t[1],
                                                backgroundColor: '#00FAEB',
                                                borderColor: '#00FAEB',
                                                data:
                                                    null == r
                                                        ? void 0
                                                        : r.comparedCandidates.map(function (e) {
                                                              return e.hobbyOverlap;
                                                          }),
                                            },
                                        ],
                                    },
                                    n = {
                                        indexAxis: 'y',
                                        maintainAspectRatio: !1,
                                        aspectRatio: 0.8,
                                        plugins: { legend: { labels: { fontColor: '#fff' } } },
                                        scales: {
                                            x: {
                                                ticks: { color: e, font: { weight: 500 } },
                                                grid: { display: !1, drawBorder: !1 },
                                            },
                                            y: {
                                                ticks: { color: e },
                                                grid: { color: e, drawBorder: !1 },
                                            },
                                        },
                                    };
                                o(a), m(n);
                            },
                            [null == r ? void 0 : r.comparedCandidates, t],
                        ),
                        (0, s.jsx)(g.k, {
                            className: (0, l.A)(D.BarChart, {}, [a]),
                            type: 'bar',
                            data: i,
                            options: u,
                        })
                    );
                }),
                W = t(577),
                z = t(1222),
                M = t(8608).p.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            compareCandidates: e.mutation({
                                query: function (e) {
                                    return {
                                        url: '/api/compare_candidates',
                                        method: 'POST',
                                        body: {
                                            candidatesIds: e.candidates.map(function (e) {
                                                return e.id;
                                            }),
                                            task: e.task,
                                        },
                                    };
                                },
                            }),
                        };
                    },
                }).useCompareCandidatesMutation,
                _ = t(5544),
                U = {};
            (U.styleTagTransform = P()),
                (U.setAttributes = C()),
                (U.insert = N().bind(null, 'head')),
                (U.domAPI = y()),
                (U.insertStyleElement = A()),
                b()(_.Z, U);
            const V = _.Z && _.Z.locals ? _.Z.locals : void 0;
            var G = t(4443),
                q = {};
            (q.styleTagTransform = P()),
                (q.setAttributes = C()),
                (q.insert = N().bind(null, 'head')),
                (q.domAPI = y()),
                (q.insertStyleElement = A()),
                b()(G.Z, q);
            const J = G.Z && G.Z.locals ? G.Z.locals : void 0;
            var H = function () {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                },
                K = (0, c.memo)(function (e) {
                    var a = e.className,
                        t = e.children;
                    return (0,
                    s.jsx)('div', H({ className: (0, l.A)(J.Card, {}, [a]) }, { children: t }));
                });
            const Q = (0, c.memo)(function (e) {
                var a,
                    t,
                    r = e.className;
                (0, c.useEffect)(function () {
                    document.title = 'Подробное сравнение';
                }, []);
                var n = (0, c.useState)([]),
                    m = n[0],
                    g = n[1],
                    v = (0, c.useState)(''),
                    b = v[0],
                    j = v[1],
                    y = (0, u.a)().getSearchParams,
                    O = M(),
                    N = O[0],
                    Z = O[1],
                    C = Z.data,
                    w = Z.isLoading,
                    A = Z.error,
                    E = (0, x.V)({ page: 0, limit: 1e3 }),
                    P = E.data,
                    S = E.isLoading;
                (0, c.useEffect)(function () {
                    var e = y();
                    if (e.length) {
                        var a = 'selected' === e[1].param ? e[1].value : e[0].value,
                            t = 'task' === e[0].param ? e[0].value : e[1].value;
                        e.length && (g(a.split(',').map(Number)), j(t));
                    }
                }, []),
                    (0, c.useEffect)(
                        function () {
                            (null == P ? void 0 : P.length) &&
                                N({
                                    candidates: P.filter(function (e) {
                                        return m.includes(e.id);
                                    }),
                                    task: b,
                                });
                        },
                        [P, N, m, b],
                    );
                var k = (0, c.useMemo)(
                    function () {
                        var e;
                        if (
                            !(null === (e = null == C ? void 0 : C.comparedCandidates) ||
                            void 0 === e
                                ? void 0
                                : e.length)
                        )
                            return {};
                        for (
                            var a = null == C ? void 0 : C.comparedCandidates[0], t = 0;
                            t < C.comparedCandidates.length;
                            t += 1
                        )
                            C.comparedCandidates[t].taskOverlap > a.taskOverlap &&
                                (a = C.comparedCandidates[t]);
                        return a;
                    },
                    [C],
                );
                return w || S
                    ? (0, s.jsxs)(
                          i.T,
                          H(
                              { className: (0, l.A)(V.ComparisonPage, {}, [r]) },
                              {
                                  children: [
                                      (0, s.jsx)(
                                          o.U,
                                          H(
                                              { justify: 'start', className: V.gradCard },
                                              {
                                                  children: (0, s.jsx)(h.O, {
                                                      width: '400px',
                                                      height: '60px',
                                                      borderRadius: '10px',
                                                  }),
                                              },
                                          ),
                                      ),
                                      (0, s.jsxs)(
                                          o.g,
                                          H(
                                              { maxW: !0, gap: '32' },
                                              {
                                                  children: [
                                                      (0, s.jsxs)(
                                                          'div',
                                                          H(
                                                              { className: V.firstLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsx)(h.O, {
                                                                          width: '100%',
                                                                          height: '450px',
                                                                          borderRadius: '10px',
                                                                      }),
                                                                      (0, s.jsx)(h.O, {
                                                                          width: '100%',
                                                                          height: '450px',
                                                                          borderRadius: '10px',
                                                                      }),
                                                                  ],
                                                              },
                                                          ),
                                                      ),
                                                      (0, s.jsxs)(
                                                          'div',
                                                          H(
                                                              { className: V.secondLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsx)(h.O, {
                                                                          width: '100%',
                                                                          height: '350px',
                                                                          borderRadius: '10px',
                                                                      }),
                                                                      (0, s.jsx)(h.O, {
                                                                          width: '100%',
                                                                          height: '350px',
                                                                          borderRadius: '10px',
                                                                      }),
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
                    : A
                    ? (0, s.jsx)(
                          i.T,
                          H(
                              { className: (0, l.A)(V.ComparisonPage, {}, [r]) },
                              {
                                  children: (0, s.jsxs)(
                                      o.g,
                                      H(
                                          {
                                              className: V.error,
                                              maxW: !0,
                                              align: 'center',
                                              justify: 'center',
                                          },
                                          {
                                              children: [
                                                  (0, s.jsx)(d.xv, {
                                                      align: 'center',
                                                      variant: 'error',
                                                      title: 'Произошла ошибка при запросе к ChatGPT',
                                                      text: 'Перезагрузите страницу, это должно помочь',
                                                  }),
                                                  (0, s.jsx)(d.xv, {
                                                      align: 'center',
                                                      text: 'Иногда ChatGPT не справляется с оцениванием такого образования, которое дают в Академии, поэтому сравнения может быть необходимопроводить несколько раз',
                                                      size: 'small',
                                                  }),
                                              ],
                                          },
                                      ),
                                  ),
                              },
                          ),
                      )
                    : (0, s.jsxs)(
                          i.T,
                          H(
                              { className: (0, l.A)(V.ComparisonPage, {}, [r]) },
                              {
                                  children: [
                                      (0, s.jsx)(W.V, {
                                          breadcrumbPath: [
                                              {
                                                  label: 'Сравнение кандидатов',
                                                  url: z.h3.candidates,
                                              },
                                              { label: 'Подробное сравнение кандидатов' },
                                          ],
                                          title: 'Задача: '.concat(b),
                                      }),
                                      (0, s.jsxs)(
                                          o.g,
                                          H(
                                              { maxW: !0, gap: '32' },
                                              {
                                                  children: [
                                                      (0, s.jsxs)(
                                                          'div',
                                                          H(
                                                              { className: V.firstLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsxs)(
                                                                          K,
                                                                          H(
                                                                              {
                                                                                  className:
                                                                                      V.candidatesCard,
                                                                              },
                                                                              {
                                                                                  children: [
                                                                                      (0, s.jsx)(
                                                                                          'h3',
                                                                                          H(
                                                                                              {
                                                                                                  className:
                                                                                                      V.title,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      'Специалисты',
                                                                                              },
                                                                                          ),
                                                                                      ),
                                                                                      (0, s.jsx)(
                                                                                          o.g,
                                                                                          H(
                                                                                              {
                                                                                                  maxW: !0,
                                                                                                  align: 'start',
                                                                                                  className:
                                                                                                      V.candidatesFrame,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      null ==
                                                                                                      C
                                                                                                          ? void 0
                                                                                                          : C.comparedCandidates.map(
                                                                                                                function (
                                                                                                                    e,
                                                                                                                ) {
                                                                                                                    return (0,
                                                                                                                    s.jsxs)(
                                                                                                                        o.U,
                                                                                                                        H(
                                                                                                                            {
                                                                                                                                maxW: !0,
                                                                                                                                align: 'center',
                                                                                                                                justify:
                                                                                                                                    'start',
                                                                                                                                gap: '8',
                                                                                                                            },
                                                                                                                            {
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        s.jsx)(
                                                                                                                                            'img',
                                                                                                                                            {
                                                                                                                                                src: e.img,
                                                                                                                                                title: e.lastname,
                                                                                                                                                alt: e.lastname,
                                                                                                                                                className:
                                                                                                                                                    V.img,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        (0,
                                                                                                                                        s.jsxs)(
                                                                                                                                            'div',
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    [
                                                                                                                                                        (0,
                                                                                                                                                        s.jsx)(
                                                                                                                                                            d.xv,
                                                                                                                                                            {
                                                                                                                                                                text: ''
                                                                                                                                                                    .concat(
                                                                                                                                                                        e.lastname,
                                                                                                                                                                        ' ',
                                                                                                                                                                    )
                                                                                                                                                                    .concat(
                                                                                                                                                                        e.firstname,
                                                                                                                                                                    ),
                                                                                                                                                                size: 'extrasmall',
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        (0,
                                                                                                                                                        s.jsx)(
                                                                                                                                                            d.xv,
                                                                                                                                                            {
                                                                                                                                                                text: e.middlename,
                                                                                                                                                                size: 'extrasmall',
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                    ],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    ],
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        e.id,
                                                                                                                    );
                                                                                                                },
                                                                                                            ),
                                                                                              },
                                                                                          ),
                                                                                      ),
                                                                                  ],
                                                                              },
                                                                          ),
                                                                      ),
                                                                      (0, s.jsx)(
                                                                          K,
                                                                          H(
                                                                              { className: V.card },
                                                                              {
                                                                                  children: (0,
                                                                                  s.jsxs)(
                                                                                      o.g,
                                                                                      H(
                                                                                          {
                                                                                              maxW: !0,
                                                                                              align: 'center',
                                                                                              justify:
                                                                                                  'start',
                                                                                          },
                                                                                          {
                                                                                              children:
                                                                                                  [
                                                                                                      (0,
                                                                                                      s.jsx)(
                                                                                                          'h3',
                                                                                                          H(
                                                                                                              {
                                                                                                                  className:
                                                                                                                      V.title,
                                                                                                              },
                                                                                                              {
                                                                                                                  children:
                                                                                                                      'Сравнение основных параметров',
                                                                                                              },
                                                                                                          ),
                                                                                                      ),
                                                                                                      (
                                                                                                          null ==
                                                                                                          C
                                                                                                              ? void 0
                                                                                                              : C
                                                                                                                    .diagramData
                                                                                                                    .labels
                                                                                                                    .length
                                                                                                      )
                                                                                                          ? (0,
                                                                                                            s.jsx)(
                                                                                                                B,
                                                                                                                {
                                                                                                                    compareResult:
                                                                                                                        C,
                                                                                                                },
                                                                                                            )
                                                                                                          : (0,
                                                                                                            s.jsx)(
                                                                                                                h.O,
                                                                                                                {
                                                                                                                    borderRadius:
                                                                                                                        '40px',
                                                                                                                    width: '400px',
                                                                                                                    height: '400px',
                                                                                                                    shape: 'rectangle',
                                                                                                                },
                                                                                                            ),
                                                                                                  ],
                                                                                          },
                                                                                      ),
                                                                                  ),
                                                                              },
                                                                          ),
                                                                      ),
                                                                  ],
                                                              },
                                                          ),
                                                      ),
                                                      (0, s.jsxs)(
                                                          'div',
                                                          H(
                                                              { className: V.secondLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsxs)(K, {
                                                                          children: [
                                                                              (0, s.jsx)(
                                                                                  'h3',
                                                                                  H(
                                                                                      {
                                                                                          className:
                                                                                              V.title,
                                                                                      },
                                                                                      {
                                                                                          children:
                                                                                              'Совпадение хобби и задачи',
                                                                                      },
                                                                                  ),
                                                                              ),
                                                                              (0, s.jsx)(L, {
                                                                                  compareResult: C,
                                                                                  label: [
                                                                                      'Совпадение хобби и специальности',
                                                                                      'Совпадение специальности и задачи',
                                                                                  ],
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      (0, s.jsxs)(
                                                                          K,
                                                                          H(
                                                                              {
                                                                                  className:
                                                                                      V.cardStack,
                                                                              },
                                                                              {
                                                                                  children: [
                                                                                      (0, s.jsx)(
                                                                                          'h3',
                                                                                          H(
                                                                                              {
                                                                                                  className:
                                                                                                      V.title,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      'Лучший',
                                                                                              },
                                                                                          ),
                                                                                      ),
                                                                                      (0, s.jsxs)(
                                                                                          o.g,
                                                                                          H(
                                                                                              {
                                                                                                  maxW: !0,
                                                                                                  justify:
                                                                                                      'center',
                                                                                                  align: 'center',
                                                                                                  className:
                                                                                                      V.best,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      [
                                                                                                          (0,
                                                                                                          s.jsx)(
                                                                                                              'img',
                                                                                                              {
                                                                                                                  src: k.img,
                                                                                                                  title: k.lastname,
                                                                                                                  alt: k.lastname,
                                                                                                                  className:
                                                                                                                      V.bestImg,
                                                                                                              },
                                                                                                          ),
                                                                                                          (0,
                                                                                                          s.jsx)(
                                                                                                              d.xv,
                                                                                                              {
                                                                                                                  title: ''
                                                                                                                      .concat(
                                                                                                                          k.lastname,
                                                                                                                          ' ',
                                                                                                                      )
                                                                                                                      .concat(
                                                                                                                          null ===
                                                                                                                              (a =
                                                                                                                                  k.firstname) ||
                                                                                                                              void 0 ===
                                                                                                                                  a
                                                                                                                              ? void 0
                                                                                                                              : a.slice(
                                                                                                                                    0,
                                                                                                                                    1,
                                                                                                                                ),
                                                                                                                          '. ',
                                                                                                                      )
                                                                                                                      .concat(
                                                                                                                          null ===
                                                                                                                              (t =
                                                                                                                                  k.middlename) ||
                                                                                                                              void 0 ===
                                                                                                                                  t
                                                                                                                              ? void 0
                                                                                                                              : t.slice(
                                                                                                                                    0,
                                                                                                                                    1,
                                                                                                                                ),
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                          (0,
                                                                                                          s.jsxs)(
                                                                                                              o.U,
                                                                                                              H(
                                                                                                                  {
                                                                                                                      justify:
                                                                                                                          'center',
                                                                                                                      gap: '8',
                                                                                                                  },
                                                                                                                  {
                                                                                                                      children:
                                                                                                                          [
                                                                                                                              (0,
                                                                                                                              s.jsx)(
                                                                                                                                  f.J,
                                                                                                                                  {
                                                                                                                                      Svg: p,
                                                                                                                                  },
                                                                                                                              ),
                                                                                                                              (0,
                                                                                                                              s.jsx)(
                                                                                                                                  d.xv,
                                                                                                                                  {
                                                                                                                                      title: ''.concat(
                                                                                                                                          null ==
                                                                                                                                              k
                                                                                                                                              ? void 0
                                                                                                                                              : k.taskOverlap,
                                                                                                                                          ' / 5',
                                                                                                                                      ),
                                                                                                                                      className:
                                                                                                                                          V.textBlock,
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
                                      ),
                                  ],
                              },
                          ),
                      );
            });
        },
        9170: (e, a, t) => {
            t.d(a, { a: () => n });
            var r = t(9655);
            function n() {
                var e = (0, r.lr)(),
                    a = e[0],
                    t = e[1];
                return {
                    addSearchParams: function (e) {
                        for (var r in e) a.set(r, e[r]);
                        t(a);
                    },
                    deleteSearchParams: function (e) {
                        a.delete(e), t(a);
                    },
                    getSearchParams: function () {
                        return (
                            Array.from(a.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            }) || []
                        );
                    },
                    getSearchParam: function (e) {
                        var t,
                            r = Array.from(a.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            });
                        return (
                            (null ===
                                (t = r.filter(function (a) {
                                    return a.param === e;
                                })[0]) || void 0 === t
                                ? void 0
                                : t.value) || void 0
                        );
                    },
                };
            }
        },
        577: (e, a, t) => {
            t.d(a, { V: () => D });
            var r = t(5893),
                n = t(4807),
                s = t(7294),
                l = t(3379),
                i = t.n(l),
                c = t(7795),
                o = t.n(c),
                d = t(569),
                u = t.n(d),
                m = t(3565),
                p = t.n(m),
                f = t(9216),
                h = t.n(f),
                x = t(4589),
                g = t.n(x),
                v = t(1864),
                b = {};
            (b.styleTagTransform = g()),
                (b.setAttributes = p()),
                (b.insert = u().bind(null, 'head')),
                (b.domAPI = o()),
                (b.insertStyleElement = h()),
                i()(v.Z, b);
            const j = v.Z && v.Z.locals ? v.Z.locals : void 0;
            var y = function () {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                },
                O = (0, s.memo)(function (e) {
                    var a = e.className,
                        t = e.children,
                        s = (function (e, a) {
                            var t = {};
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    a.indexOf(r) < 0 &&
                                    (t[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var n = 0;
                                for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                                    a.indexOf(r[n]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                                        (t[r[n]] = e[r[n]]);
                            }
                            return t;
                        })(e, ['className', 'children']);
                    return (0,
                    r.jsx)('div', y({ className: (0, n.A)(j.Card, {}, [a]) }, s, { children: t }));
                }),
                N = t(7828),
                Z = t(7543),
                C = t(5020),
                w = t(2469),
                A = t(9250),
                E = t(4498),
                P = {};
            (P.styleTagTransform = g()),
                (P.setAttributes = p()),
                (P.insert = u().bind(null, 'head')),
                (P.domAPI = o()),
                (P.insertStyleElement = h()),
                i()(E.Z, P);
            const S = E.Z && E.Z.locals ? E.Z.locals : void 0;
            var k = function () {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                },
                T = (0, s.memo)(function (e) {
                    var a = e.className,
                        t = e.path,
                        l = (0, s.useMemo)(function () {
                            return { url: '/', icon: (0, r.jsx)(w.tvw, {}) };
                        }, []),
                        i = (0, A.s0)();
                    return (0, r.jsx)(C.c, {
                        model: t.map(function (e) {
                            return k(k({}, e), {
                                command: function (a) {
                                    a.originalEvent.preventDefault(), i(e.url || '');
                                },
                            });
                        }),
                        home: l,
                        className: (0, n.A)(S.Breadcrumb, {}, [a]),
                    });
                }),
                F = t(5559),
                B = {};
            (B.styleTagTransform = g()),
                (B.setAttributes = p()),
                (B.insert = u().bind(null, 'head')),
                (B.domAPI = o()),
                (B.insertStyleElement = h()),
                i()(F.Z, B);
            const R = F.Z && F.Z.locals ? F.Z.locals : void 0;
            var I = function () {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                },
                D = (0, s.memo)(function (e) {
                    var a = e.className,
                        t = e.title,
                        s = e.breadcrumbPath;
                    return (0,
                    r.jsxs)(Z.g, I({ justify: 'start', className: (0, n.A)(R.PageTitle, {}, [a]) }, { children: [(null == s ? void 0 : s.length) && (0, r.jsx)(T, { className: R.bc, path: s }), (0, r.jsx)(O, I({ className: R.card }, { children: (0, r.jsx)(N.xv, { align: 'left', size: 'large', className: R.textBlock, title: t }) }))] }));
                });
        },
        5544: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([
                e.id,
                '.c080a{display:flex;align-items:start;justify-content:center;min-height:460px}.afac3{width:50px;height:50px;border-radius:10px;font-size:12px}.a3d93{width:175px;height:175px;border-radius:10px;font-size:12px}.d3ada{height:calc(100vh - 175px)}.ca673{text-transform:uppercase;margin-bottom:20px;justify-self:start}.e0694{height:100%}.b10b4{margin-bottom:20px}.ba5f7 h1,.ba5f7 h2,.ba5f7 h3,.ba5f7 h4{margin:0}.a2e47{width:100%;display:grid;grid-template-columns:1.5fr 3fr;grid-gap:15px}.e864b{overflow-y:auto;max-height:550px}.b8d3a{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:15px}.ea4b6{display:flex;flex-direction:column;align-items:center;justify-content:center}',
                '',
            ]),
                (l.locals = {
                    card: 'c080a',
                    img: 'afac3',
                    bestImg: 'a3d93',
                    error: 'd3ada',
                    title: 'ca673',
                    best: 'e0694',
                    gradCard: 'b10b4',
                    textBlock: 'ba5f7',
                    firstLine: 'a2e47',
                    candidatesFrame: 'e864b',
                    secondLine: 'b8d3a',
                    cardStack: 'ea4b6',
                });
            const i = l;
        },
        4443: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([
                e.id,
                '.c4530{padding:23px 15px;border:2px solid #686b6e;border-radius:20px}',
                '',
            ]),
                (l.locals = { Card: 'c4530' });
            const i = l;
        },
        4498: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([e.id, '', '']), (l.locals = {});
            const i = l;
        },
        1864: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (l.locals = { Card: 'd2057' });
            const i = l;
        },
        8707: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([e.id, '', '']), (l.locals = {});
            const i = l;
        },
        5559: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([
                e.id,
                '.ecd81{margin:0 0 40px;max-width:100%}.f2d6a h1{margin:0}.b6604{margin-bottom:20px}',
                '',
            ]),
                (l.locals = { card: 'ecd81', textBlock: 'f2d6a', bc: 'b6604' });
            const i = l;
        },
        8210: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(8081),
                n = t.n(r),
                s = t(3645),
                l = t.n(s)()(n());
            l.push([e.id, '.ff24d{width:550px;height:550px}', '']), (l.locals = { radar: 'ff24d' });
            const i = l;
        },
    },
]);
