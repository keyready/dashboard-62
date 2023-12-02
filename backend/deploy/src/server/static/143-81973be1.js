'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [143],
    {
        3887: (e, t, n) => {
            n.d(t, { V: () => s });
            var r = n(8608),
                a = function () {
                    return (
                        (a =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        a.apply(this, arguments)
                    );
                },
                s = r.p.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            fetchCandidates: e.query({
                                query: function (e) {
                                    return {
                                        url: '/api/candidates',
                                        params: a(
                                            { page: e.page, limit: e.limit },
                                            e.filterOptions,
                                        ),
                                    };
                                },
                            }),
                        };
                    },
                }).useFetchCandidatesQuery;
        },
        8143: (e, t, n) => {
            n.r(t), n.d(t, { default: () => te });
            var r,
                a,
                s = n(5893),
                i = n(4807),
                l = n(2594),
                o = n(7294),
                c = n(7543),
                d = n(7828),
                u = n(9170),
                p = n(1221);
            function m() {
                return (
                    (m = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var r in n)
                                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                          }),
                    m.apply(this, arguments)
                );
            }
            const f = function (e) {
                return o.createElement(
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
                        (r = o.createElement('path', {
                            opacity: 0.5,
                            d: 'M45.833 25c0 11.506-9.327 20.833-20.833 20.833-11.506 0-20.834-9.327-20.834-20.833C4.166 13.494 13.494 4.167 25 4.167S45.833 13.494 45.833 25Z',
                            fill: '#686B6E',
                        })),
                    a ||
                        (a = o.createElement('path', {
                            d: 'm21.693 17.704.342-.612c1.32-2.367 1.979-3.55 2.965-3.55.986 0 1.646 1.183 2.966 3.55l.341.613c.375.672.562 1.008.855 1.23.292.222.656.305 1.384.47l.663.15c2.562.579 3.843.869 4.148 1.849.305.98-.569 2.001-2.315 4.044l-.452.528c-.497.58-.745.87-.856 1.23-.112.359-.075.746 0 1.52l.069.706c.264 2.725.396 4.088-.402 4.693-.798.606-1.997.054-4.396-1.05l-.62-.287c-.683-.313-1.024-.47-1.385-.47s-.702.157-1.384.47l-.62.286c-2.4 1.105-3.599 1.657-4.397 1.051-.798-.605-.666-1.968-.401-4.693l.068-.705c.075-.775.112-1.162 0-1.52-.111-.36-.36-.65-.855-1.23l-.452-.53c-1.747-2.042-2.62-3.063-2.316-4.043.305-.98 1.586-1.27 4.148-1.85l.663-.15c.728-.165 1.092-.247 1.385-.469.292-.222.48-.558.854-1.23Z',
                            fill: '#FAF000',
                        })),
                );
            };
            var h = n(8949),
                g = n(4710),
                v = n(3887),
                x = n(6367),
                b = n(3308),
                y = n(3643),
                j = n(3652),
                O = j.V.extend({
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
                                return (0, y.AK)('p-chart', t.className);
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
                w = (function () {
                    try {
                        return Chart;
                    } catch (e) {
                        return null;
                    }
                })(),
                C = o.memo(
                    o.forwardRef(function (e, t) {
                        var r = o.useContext(x.Ou),
                            a = O.getProps(e, r),
                            s = O.setMetaData({ props: a }),
                            i = s.ptm,
                            l = s.cx,
                            c = s.sx,
                            d = s.isUnstyled;
                        (0, j.e)(O.css.styles, d, { name: 'chart' });
                        var u = o.useRef(null),
                            p = o.useRef(null),
                            m = o.useRef(null),
                            f = function () {
                                p.current && (p.current.destroy(), (p.current = null));
                            };
                        o.useImperativeHandle(t, function () {
                            return {
                                props: a,
                                getCanvas: function () {
                                    return m.current;
                                },
                                getChart: function () {
                                    return p.current;
                                },
                                getBase64Image: function () {
                                    return p.current.toBase64Image();
                                },
                                getElement: function () {
                                    return u.current;
                                },
                                generateLegend: function () {
                                    return p.current && p.current.generateLegend();
                                },
                                refresh: function () {
                                    return p.current && p.current.update();
                                },
                            };
                        }),
                            o.useEffect(function () {
                                !(function () {
                                    f();
                                    var e = {
                                        type: a.type,
                                        data: a.data,
                                        options: a.options,
                                        plugins: a.plugins,
                                    };
                                    w
                                        ? (p.current = new w(m.current, e))
                                        : n
                                              .e(261)
                                              .then(n.bind(n, 5261))
                                              .then(function (t) {
                                                  f(),
                                                      m.current &&
                                                          t &&
                                                          (t.default
                                                              ? (p.current = new t.default(
                                                                    m.current,
                                                                    e,
                                                                ))
                                                              : (p.current = new t(m.current, e)));
                                              });
                                })();
                            }),
                            (0, b.zq)(function () {
                                f();
                            });
                        var h =
                                a.options &&
                                a.options.plugins &&
                                a.options.plugins.title &&
                                a.options.plugins.title.text,
                            g = a.ariaLabel || h,
                            v = (0, y.dG)(
                                { id: a.id, ref: u, style: c('root'), className: l('root') },
                                O.getOtherProps(a),
                                i('root'),
                            ),
                            C = (0, y.dG)(
                                {
                                    'ref': m,
                                    'width': a.width,
                                    'height': a.height,
                                    'role': 'img',
                                    'aria-label': g,
                                },
                                i('canvas'),
                            );
                        return o.createElement('div', v, o.createElement('canvas', C));
                    }),
                    function (e, t) {
                        return e.data === t.data && e.options === t.options && e.type === t.type;
                    },
                );
            C.displayName = 'Chart';
            var P = n(3379),
                N = n.n(P),
                E = n(7795),
                S = n.n(E),
                k = n(569),
                Z = n.n(k),
                A = n(3565),
                R = n.n(A),
                F = n(9216),
                T = n.n(F),
                D = n(4589),
                B = n.n(D),
                I = n(8210),
                z = {};
            (z.styleTagTransform = B()),
                (z.setAttributes = R()),
                (z.insert = Z().bind(null, 'head')),
                (z.domAPI = S()),
                (z.insertStyleElement = T()),
                N()(I.Z, z);
            const L = I.Z && I.Z.locals ? I.Z.locals : void 0;
            var _ = function () {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                },
                W = (0, o.memo)(function (e) {
                    var t = e.className,
                        n = e.compareResult,
                        r = (0, o.useState)({}),
                        a = r[0],
                        l = r[1],
                        c = (0, o.useState)({}),
                        d = c[0],
                        u = c[1],
                        p = (0, o.useMemo)(function () {
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
                        (0, o.useEffect)(
                            function () {
                                var e,
                                    t,
                                    r =
                                        _(_({}, null == n ? void 0 : n.diagramData), {
                                            datasets:
                                                null ===
                                                    (t =
                                                        null ===
                                                            (e =
                                                                null == n
                                                                    ? void 0
                                                                    : n.diagramData) || void 0 === e
                                                            ? void 0
                                                            : e.datasets) || void 0 === t
                                                    ? void 0
                                                    : t.map(function (e, t) {
                                                          return _(_({}, e), { color: p[t] });
                                                      }),
                                        }) || {};
                                l(r),
                                    u({
                                        plugins: { legend: { labels: { color: '#fff' } } },
                                        scales: { r: { grid: { color: '#fff' } } },
                                        responsive: !0,
                                    });
                            },
                            [p, n],
                        ),
                        (0, s.jsx)(C, {
                            className: (0, i.A)(L.radar, {}, [t]),
                            type: 'radar',
                            data: a || {},
                            options: d,
                        })
                    );
                }),
                M = n(8707),
                U = {};
            (U.styleTagTransform = B()),
                (U.setAttributes = R()),
                (U.insert = Z().bind(null, 'head')),
                (U.domAPI = S()),
                (U.insertStyleElement = T()),
                N()(M.Z, U);
            const G = M.Z && M.Z.locals ? M.Z.locals : void 0;
            var q = (0, o.memo)(function (e) {
                    var t = e.className,
                        n = e.label,
                        r = e.compareResult,
                        a = (0, o.useState)({}),
                        l = a[0],
                        c = a[1],
                        d = (0, o.useState)({}),
                        u = d[0],
                        p = d[1];
                    return (
                        (0, o.useEffect)(
                            function () {
                                getComputedStyle(document.documentElement);
                                var e = '#8d8c8c',
                                    t = {
                                        labels:
                                            null == r
                                                ? void 0
                                                : r.comparedCandidates.map(function (e) {
                                                      return e.firstname;
                                                  }),
                                        datasets: [
                                            {
                                                label: n[0],
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
                                                label: n[1],
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
                                    a = {
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
                                c(t), p(a);
                            },
                            [null == r ? void 0 : r.comparedCandidates, n],
                        ),
                        (0, s.jsx)(C, {
                            className: (0, i.A)(G.BarChart, {}, [t]),
                            type: 'bar',
                            data: l,
                            options: u,
                        })
                    );
                }),
                V = n(8608).p.injectEndpoints({
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
                K = n(5544),
                X = {};
            (X.styleTagTransform = B()),
                (X.setAttributes = R()),
                (X.insert = Z().bind(null, 'head')),
                (X.domAPI = S()),
                (X.insertStyleElement = T()),
                N()(K.Z, X);
            const H = K.Z && K.Z.locals ? K.Z.locals : void 0;
            var Y = n(4443),
                J = {};
            (J.styleTagTransform = B()),
                (J.setAttributes = R()),
                (J.insert = Z().bind(null, 'head')),
                (J.domAPI = S()),
                (J.insertStyleElement = T()),
                N()(Y.Z, J);
            const Q = Y.Z && Y.Z.locals ? Y.Z.locals : void 0;
            var $ = function () {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                },
                ee = (0, o.memo)(function (e) {
                    var t = e.className,
                        n = e.children;
                    return (0,
                    s.jsx)('div', $({ className: (0, i.A)(Q.Card, {}, [t]) }, { children: n }));
                });
            const te = (0, o.memo)(function (e) {
                var t,
                    n,
                    r = e.className,
                    a = (0, o.useState)([]),
                    m = a[0],
                    x = a[1],
                    b = (0, o.useState)(''),
                    y = b[0],
                    j = b[1],
                    O = (0, u.a)().getSearchParams,
                    w = V(),
                    C = w[0],
                    P = w[1],
                    N = P.data,
                    E = P.isLoading,
                    S = P.error,
                    k = (0, v.V)({ page: 0, limit: 1e3 }),
                    Z = k.data,
                    A = k.isLoading;
                (0, o.useEffect)(function () {
                    var e = O();
                    if (e.length) {
                        var t = 'selected' === e[1].param ? e[1].value : e[0].value,
                            n = 'task' === e[0].param ? e[0].value : e[1].value;
                        e.length && (x(t.split(',').map(Number)), j(n));
                    }
                }, []),
                    (0, o.useEffect)(
                        function () {
                            (null == Z ? void 0 : Z.length) &&
                                C({
                                    candidates: Z.filter(function (e) {
                                        return m.includes(e.id);
                                    }),
                                    task: y,
                                });
                        },
                        [Z, C, m, y],
                    );
                var R = (0, o.useMemo)(
                    function () {
                        var e;
                        if (
                            !(null === (e = null == N ? void 0 : N.comparedCandidates) ||
                            void 0 === e
                                ? void 0
                                : e.length)
                        )
                            return {};
                        for (
                            var t = null == N ? void 0 : N.comparedCandidates[0], n = 0;
                            n < N.comparedCandidates.length;
                            n += 1
                        )
                            N.comparedCandidates[n].taskOverlap > t.taskOverlap &&
                                (t = N.comparedCandidates[n]);
                        return t;
                    },
                    [N],
                );
                return E || A
                    ? (0, s.jsxs)(
                          l.T,
                          $(
                              { className: (0, i.A)(H.ComparisonPage, {}, [r]) },
                              {
                                  children: [
                                      (0, s.jsx)(
                                          c.U,
                                          $(
                                              { justify: 'start', className: H.gradCard },
                                              {
                                                  children: (0, s.jsx)(g.O, {
                                                      width: '400px',
                                                      height: '60px',
                                                      borderRadius: '10px',
                                                  }),
                                              },
                                          ),
                                      ),
                                      (0, s.jsxs)(
                                          c.g,
                                          $(
                                              { maxW: !0, gap: '32' },
                                              {
                                                  children: [
                                                      (0, s.jsxs)(
                                                          'div',
                                                          $(
                                                              { className: H.firstLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsx)(g.O, {
                                                                          width: '100%',
                                                                          height: '450px',
                                                                          borderRadius: '10px',
                                                                      }),
                                                                      (0, s.jsx)(g.O, {
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
                                                          $(
                                                              { className: H.secondLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsx)(g.O, {
                                                                          width: '100%',
                                                                          height: '350px',
                                                                          borderRadius: '10px',
                                                                      }),
                                                                      (0, s.jsx)(g.O, {
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
                    : S
                    ? (0, s.jsx)(
                          l.T,
                          $(
                              { className: (0, i.A)(H.ComparisonPage, {}, [r]) },
                              {
                                  children: (0, s.jsxs)(
                                      c.g,
                                      $(
                                          {
                                              className: H.error,
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
                          l.T,
                          $(
                              { className: (0, i.A)(H.ComparisonPage, {}, [r]) },
                              {
                                  children: [
                                      (0, s.jsx)(
                                          c.U,
                                          $(
                                              { justify: 'start', className: H.gradCard },
                                              {
                                                  children: (0, s.jsx)(p.Z, {
                                                      children: (0, s.jsx)(d.xv, {
                                                          align: 'left',
                                                          size: 'large',
                                                          className: H.textBlock,
                                                          title: 'Задача: '.concat(y),
                                                      }),
                                                  }),
                                              },
                                          ),
                                      ),
                                      (0, s.jsxs)(
                                          c.g,
                                          $(
                                              { maxW: !0, gap: '32' },
                                              {
                                                  children: [
                                                      (0, s.jsxs)(
                                                          'div',
                                                          $(
                                                              { className: H.firstLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsxs)(
                                                                          ee,
                                                                          $(
                                                                              {
                                                                                  className:
                                                                                      H.candidatesCard,
                                                                              },
                                                                              {
                                                                                  children: [
                                                                                      (0, s.jsx)(
                                                                                          'h3',
                                                                                          $(
                                                                                              {
                                                                                                  className:
                                                                                                      H.title,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      'Специалисты',
                                                                                              },
                                                                                          ),
                                                                                      ),
                                                                                      (0, s.jsx)(
                                                                                          c.g,
                                                                                          $(
                                                                                              {
                                                                                                  maxW: !0,
                                                                                                  align: 'start',
                                                                                                  className:
                                                                                                      H.candidatesFrame,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      null ==
                                                                                                      N
                                                                                                          ? void 0
                                                                                                          : N.comparedCandidates.map(
                                                                                                                function (
                                                                                                                    e,
                                                                                                                ) {
                                                                                                                    return (0,
                                                                                                                    s.jsxs)(
                                                                                                                        c.U,
                                                                                                                        $(
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
                                                                                                                                                    H.img,
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
                                                                          ee,
                                                                          $(
                                                                              { className: H.card },
                                                                              {
                                                                                  children: (0,
                                                                                  s.jsxs)(
                                                                                      c.g,
                                                                                      $(
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
                                                                                                          $(
                                                                                                              {
                                                                                                                  className:
                                                                                                                      H.title,
                                                                                                              },
                                                                                                              {
                                                                                                                  children:
                                                                                                                      'Сравнение основных параметров',
                                                                                                              },
                                                                                                          ),
                                                                                                      ),
                                                                                                      (
                                                                                                          null ==
                                                                                                          N
                                                                                                              ? void 0
                                                                                                              : N
                                                                                                                    .diagramData
                                                                                                                    .labels
                                                                                                                    .length
                                                                                                      )
                                                                                                          ? (0,
                                                                                                            s.jsx)(
                                                                                                                W,
                                                                                                                {
                                                                                                                    compareResult:
                                                                                                                        N,
                                                                                                                },
                                                                                                            )
                                                                                                          : (0,
                                                                                                            s.jsx)(
                                                                                                                g.O,
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
                                                          $(
                                                              { className: H.secondLine },
                                                              {
                                                                  children: [
                                                                      (0, s.jsxs)(ee, {
                                                                          children: [
                                                                              (0, s.jsx)(
                                                                                  'h3',
                                                                                  $(
                                                                                      {
                                                                                          className:
                                                                                              H.title,
                                                                                      },
                                                                                      {
                                                                                          children:
                                                                                              'Совпадение хобби и задачи',
                                                                                      },
                                                                                  ),
                                                                              ),
                                                                              (0, s.jsx)(q, {
                                                                                  compareResult: N,
                                                                                  label: [
                                                                                      'Совпадение хобби и специальности',
                                                                                      'Совпадение специальности и задачи',
                                                                                  ],
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      (0, s.jsxs)(
                                                                          ee,
                                                                          $(
                                                                              {
                                                                                  className:
                                                                                      H.cardStack,
                                                                              },
                                                                              {
                                                                                  children: [
                                                                                      (0, s.jsx)(
                                                                                          'h3',
                                                                                          $(
                                                                                              {
                                                                                                  className:
                                                                                                      H.title,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      'Лучший',
                                                                                              },
                                                                                          ),
                                                                                      ),
                                                                                      (0, s.jsxs)(
                                                                                          c.g,
                                                                                          $(
                                                                                              {
                                                                                                  maxW: !0,
                                                                                                  justify:
                                                                                                      'center',
                                                                                                  align: 'center',
                                                                                                  className:
                                                                                                      H.best,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      [
                                                                                                          (0,
                                                                                                          s.jsx)(
                                                                                                              'img',
                                                                                                              {
                                                                                                                  src: R.img,
                                                                                                                  title: R.lastname,
                                                                                                                  alt: R.lastname,
                                                                                                                  className:
                                                                                                                      H.bestImg,
                                                                                                              },
                                                                                                          ),
                                                                                                          (0,
                                                                                                          s.jsx)(
                                                                                                              d.xv,
                                                                                                              {
                                                                                                                  title: ''
                                                                                                                      .concat(
                                                                                                                          R.lastname,
                                                                                                                          ' ',
                                                                                                                      )
                                                                                                                      .concat(
                                                                                                                          null ===
                                                                                                                              (t =
                                                                                                                                  R.firstname) ||
                                                                                                                              void 0 ===
                                                                                                                                  t
                                                                                                                              ? void 0
                                                                                                                              : t.slice(
                                                                                                                                    0,
                                                                                                                                    1,
                                                                                                                                ),
                                                                                                                          '. ',
                                                                                                                      )
                                                                                                                      .concat(
                                                                                                                          null ===
                                                                                                                              (n =
                                                                                                                                  R.middlename) ||
                                                                                                                              void 0 ===
                                                                                                                                  n
                                                                                                                              ? void 0
                                                                                                                              : n.slice(
                                                                                                                                    0,
                                                                                                                                    1,
                                                                                                                                ),
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                          (0,
                                                                                                          s.jsxs)(
                                                                                                              c.U,
                                                                                                              $(
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
                                                                                                                                  h.J,
                                                                                                                                  {
                                                                                                                                      Svg: f,
                                                                                                                                  },
                                                                                                                              ),
                                                                                                                              (0,
                                                                                                                              s.jsx)(
                                                                                                                                  d.xv,
                                                                                                                                  {
                                                                                                                                      title: ''.concat(
                                                                                                                                          null ==
                                                                                                                                              R
                                                                                                                                              ? void 0
                                                                                                                                              : R.taskOverlap,
                                                                                                                                          ' / 5',
                                                                                                                                      ),
                                                                                                                                      className:
                                                                                                                                          H.textBlock,
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
        1221: (e, t, n) => {
            n.d(t, { Z: () => O });
            var r = n(5893),
                a = n(4807),
                s = n(7294),
                i = n(3379),
                l = n.n(i),
                o = n(7795),
                c = n.n(o),
                d = n(569),
                u = n.n(d),
                p = n(3565),
                m = n.n(p),
                f = n(9216),
                h = n.n(f),
                g = n(4589),
                v = n.n(g),
                x = n(1864),
                b = {};
            (b.styleTagTransform = v()),
                (b.setAttributes = m()),
                (b.insert = u().bind(null, 'head')),
                (b.domAPI = c()),
                (b.insertStyleElement = h()),
                l()(x.Z, b);
            const y = x.Z && x.Z.locals ? x.Z.locals : void 0;
            var j = function () {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                },
                O = (0, s.memo)(function (e) {
                    var t = e.className,
                        n = e.children,
                        s = (function (e, t) {
                            var n = {};
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    t.indexOf(r) < 0 &&
                                    (n[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var a = 0;
                                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                                    t.indexOf(r[a]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                                        (n[r[a]] = e[r[a]]);
                            }
                            return n;
                        })(e, ['className', 'children']);
                    return (0,
                    r.jsx)('div', j({ className: (0, a.A)(y.Card, {}, [t]) }, s, { children: n }));
                });
        },
        9170: (e, t, n) => {
            n.d(t, { a: () => a });
            var r = n(9655);
            function a() {
                var e = (0, r.lr)(),
                    t = e[0],
                    n = e[1];
                return {
                    addSearchParams: function (e) {
                        for (var r in e) t.set(r, e[r]);
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
                            r = Array.from(t.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            });
                        return (
                            (null ===
                                (n = r.filter(function (t) {
                                    return t.param === e;
                                })[0]) || void 0 === n
                                ? void 0
                                : n.value) || void 0
                        );
                    },
                };
            }
        },
        5544: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(8081),
                a = n.n(r),
                s = n(3645),
                i = n.n(s)()(a());
            i.push([
                e.id,
                '.c080a{display:flex;align-items:start;justify-content:center;min-height:460px}.afac3{width:50px;height:50px;border-radius:10px;font-size:12px}.a3d93{width:175px;height:175px;border-radius:10px;font-size:12px}.d3ada{height:calc(100vh - 175px)}.ca673{text-transform:uppercase;margin-bottom:20px;justify-self:start}.e0694{height:100%}.b10b4{margin-bottom:20px}.ba5f7 h1,.ba5f7 h2,.ba5f7 h3,.ba5f7 h4{margin:0}.a2e47{width:100%;display:grid;grid-template-columns:1.5fr 3fr;grid-gap:15px}.e864b{overflow-y:auto;max-height:550px}.b8d3a{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:15px}.ea4b6{display:flex;flex-direction:column;align-items:center;justify-content:center}',
                '',
            ]),
                (i.locals = {
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
            const l = i;
        },
        4443: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(8081),
                a = n.n(r),
                s = n(3645),
                i = n.n(s)()(a());
            i.push([
                e.id,
                '.c4530{padding:23px 15px;border:2px solid #686b6e;border-radius:20px}',
                '',
            ]),
                (i.locals = { Card: 'c4530' });
            const l = i;
        },
        1864: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(8081),
                a = n.n(r),
                s = n(3645),
                i = n.n(s)()(a());
            i.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (i.locals = { Card: 'd2057' });
            const l = i;
        },
        8707: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(8081),
                a = n.n(r),
                s = n(3645),
                i = n.n(s)()(a());
            i.push([e.id, '', '']), (i.locals = {});
            const l = i;
        },
        8210: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(8081),
                a = n.n(r),
                s = n(3645),
                i = n.n(s)()(a());
            i.push([e.id, '.ff24d{width:550px;height:550px}', '']), (i.locals = { radar: 'ff24d' });
            const l = i;
        },
        4710: (e, t, n) => {
            n.d(t, { O: () => m });
            var r = n(7294),
                a = n(6367),
                s = n(3652),
                i = n(3643);
            function l(e) {
                return (
                    (l =
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
                    l(e)
                );
            }
            function o(e) {
                var t = (function (e, t) {
                    if ('object' !== l(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, 'string');
                        if ('object' !== l(r)) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(e);
                return 'symbol' === l(t) ? t : String(t);
            }
            var c = {
                    root: function (e) {
                        var t = e.props;
                        return (0, i.AK)('p-skeleton p-component', {
                            'p-skeleton-circle': 'circle' === t.shape,
                            'p-skeleton-none': 'none' === t.animation,
                        });
                    },
                },
                d = s.V.extend({
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
            function u(e, t) {
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
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? u(Object(n), !0).forEach(function (t) {
                              var r, a, s;
                              (r = e),
                                  (a = t),
                                  (s = n[t]),
                                  (a = o(a)) in r
                                      ? Object.defineProperty(r, a, {
                                            value: s,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (r[a] = s);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : u(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var m = r.memo(
                r.forwardRef(function (e, t) {
                    var n = r.useContext(a.Ou),
                        l = d.getProps(e, n),
                        o = d.setMetaData({ props: l }),
                        c = o.ptm,
                        u = o.cx,
                        m = o.sx,
                        f = o.isUnstyled;
                    (0, s.e)(d.css.styles, f, { name: 'skeleton' });
                    var h = r.useRef(null);
                    r.useImperativeHandle(t, function () {
                        return {
                            props: l,
                            getElement: function () {
                                return h.current;
                            },
                        };
                    });
                    var g = l.size
                            ? { width: l.size, height: l.size, borderRadius: l.borderRadius }
                            : { width: l.width, height: l.height, borderRadius: l.borderRadius },
                        v = (0, i.dG)(
                            {
                                ref: h,
                                className: (0, i.AK)(l.className, u('root')),
                                style: p(p({}, g), m('root')),
                            },
                            d.getOtherProps(l),
                            c('root'),
                        );
                    return r.createElement('div', v);
                }),
            );
            m.displayName = 'Skeleton';
        },
    },
]);
