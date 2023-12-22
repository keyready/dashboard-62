'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [521],
    {
        521: (e, n, t) => {
            t.r(n), t.d(n, { default: () => J });
            var a = t(5893),
                l = t(4807),
                r = t(2594),
                i = t(7294),
                s = t(577),
                c = t(7543),
                o = t(2540),
                u = t(8918),
                d = t(7828),
                f = t(1202),
                p = t(9975),
                h = t(7974),
                m = t(3621),
                x = t(3379),
                g = t.n(x),
                v = t(7795),
                b = t.n(v),
                y = t(569),
                j = t.n(y),
                k = t(3565),
                S = t.n(k),
                w = t(9216),
                C = t.n(w),
                N = t(4589),
                T = t.n(N),
                P = t(6e3),
                Z = {};
            (Z.styleTagTransform = T()),
                (Z.setAttributes = S()),
                (Z.insert = j().bind(null, 'head')),
                (Z.domAPI = b()),
                (Z.insertStyleElement = C()),
                g()(P.Z, Z);
            const M = P.Z && P.Z.locals ? P.Z.locals : void 0;
            var W = function () {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, a = arguments.length; t < a; t++)
                                    for (var l in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                },
                A = (0, i.memo)(function (e) {
                    var n = e.className,
                        t = e.placeholder,
                        r = e.selected,
                        s = e.onChange,
                        o = e.data,
                        u = (0, i.useCallback)(
                            function (e) {
                                s(e.value);
                            },
                            [s],
                        );
                    return (0,
                    a.jsx)(c.U, W({ maxW: !0, className: (0, l.A)(M.MultiSelect, {}, [n]) }, { children: (0, a.jsx)(m.N, { emptyMessage: 'Ничего не найдено', emptyFilterMessage: 'Ничего не найдено', filter: !0, value: r, onChange: u, options: o, display: 'chip', optionLabel: 'title', placeholder: t, maxSelectedLabels: 10 }) }));
                }),
                E = t(7820),
                O = t(2672),
                _ = t(5034),
                q = t(6088),
                z = t(3942),
                L = t(1222),
                F = t(9250),
                I = t(8832),
                U = t(8608).p.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            fetchKeySkills: e.query({
                                query: function () {
                                    return { url: '/api/fetch_key_skills' };
                                },
                            }),
                        };
                    },
                }).useFetchKeySkillsQuery,
                B = t(4780),
                K = {};
            (K.styleTagTransform = T()),
                (K.setAttributes = S()),
                (K.insert = j().bind(null, 'head')),
                (K.domAPI = b()),
                (K.insertStyleElement = C()),
                g()(B.Z, K);
            const D = B.Z && B.Z.locals ? B.Z.locals : void 0;
            var G = function () {
                return (
                    (G =
                        Object.assign ||
                        function (e) {
                            for (var n, t = 1, a = arguments.length; t < a; t++)
                                for (var l in (n = arguments[t]))
                                    Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
                            return e;
                        }),
                    G.apply(this, arguments)
                );
            };
            const J = (0, i.memo)(function (e) {
                var n = e.className;
                (0, i.useEffect)(function () {
                    document.title = 'Создать категорию';
                }, []);
                var t = U().data,
                    m = (0, O.T)(),
                    x = (0, F.s0)(),
                    g = (0, I.P)().pending,
                    v = (0, z.v9)(_.Cb),
                    b = (0, i.useState)(''),
                    y = b[0],
                    j = b[1],
                    k = (0, i.useState)(''),
                    S = k[0],
                    w = k[1],
                    C = (0, i.useState)(-1),
                    N = C[0],
                    T = C[1],
                    P = (0, i.useState)([]),
                    Z = P[0],
                    M = P[1],
                    W = (0, i.useState)([]),
                    B = W[0],
                    K = W[1],
                    J = (0, i.useState)([18, 40]),
                    Q = J[0],
                    V = J[1],
                    H = (0, i.useMemo)(function () {
                        return ['Возраст', 'Факультет', 'Ключевые навыки'];
                    }, []),
                    R = (0, i.useMemo)(
                        function () {
                            return (
                                '' === S ||
                                -1 === N ||
                                (1 === N && !Z.length) ||
                                (2 === N && !B.length)
                            );
                        },
                        [S, Z, B, N],
                    ),
                    X = (0, i.useCallback)(
                        function (e) {
                            return (
                                (n = void 0),
                                (t = void 0),
                                (l = function () {
                                    return (function (e, n) {
                                        var t,
                                            a,
                                            l,
                                            r,
                                            i = {
                                                label: 0,
                                                sent: function () {
                                                    if (1 & l[0]) throw l[1];
                                                    return l[1];
                                                },
                                                trys: [],
                                                ops: [],
                                            };
                                        return (
                                            (r = { next: s(0), throw: s(1), return: s(2) }),
                                            'function' == typeof Symbol &&
                                                (r[Symbol.iterator] = function () {
                                                    return this;
                                                }),
                                            r
                                        );
                                        function s(s) {
                                            return function (c) {
                                                return (function (s) {
                                                    if (t)
                                                        throw new TypeError(
                                                            'Generator is already executing.',
                                                        );
                                                    for (; r && ((r = 0), s[0] && (i = 0)), i; )
                                                        try {
                                                            if (
                                                                ((t = 1),
                                                                a &&
                                                                    (l =
                                                                        2 & s[0]
                                                                            ? a.return
                                                                            : s[0]
                                                                            ? a.throw ||
                                                                              ((l = a.return) &&
                                                                                  l.call(a),
                                                                              0)
                                                                            : a.next) &&
                                                                    !(l = l.call(a, s[1])).done)
                                                            )
                                                                return l;
                                                            switch (
                                                                ((a = 0),
                                                                l && (s = [2 & s[0], l.value]),
                                                                s[0])
                                                            ) {
                                                                case 0:
                                                                case 1:
                                                                    l = s;
                                                                    break;
                                                                case 4:
                                                                    return (
                                                                        i.label++,
                                                                        { value: s[1], done: !1 }
                                                                    );
                                                                case 5:
                                                                    i.label++,
                                                                        (a = s[1]),
                                                                        (s = [0]);
                                                                    continue;
                                                                case 7:
                                                                    (s = i.ops.pop()), i.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (
                                                                        !(
                                                                            (l =
                                                                                (l = i.trys)
                                                                                    .length > 0 &&
                                                                                l[l.length - 1]) ||
                                                                            (6 !== s[0] &&
                                                                                2 !== s[0])
                                                                        )
                                                                    ) {
                                                                        i = 0;
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        3 === s[0] &&
                                                                        (!l ||
                                                                            (s[1] > l[0] &&
                                                                                s[1] < l[3]))
                                                                    ) {
                                                                        i.label = s[1];
                                                                        break;
                                                                    }
                                                                    if (
                                                                        6 === s[0] &&
                                                                        i.label < l[1]
                                                                    ) {
                                                                        (i.label = l[1]), (l = s);
                                                                        break;
                                                                    }
                                                                    if (l && i.label < l[2]) {
                                                                        (i.label = l[2]),
                                                                            i.ops.push(s);
                                                                        break;
                                                                    }
                                                                    l[2] && i.ops.pop(),
                                                                        i.trys.pop();
                                                                    continue;
                                                            }
                                                            s = n.call(e, i);
                                                        } catch (e) {
                                                            (s = [6, e]), (a = 0);
                                                        } finally {
                                                            t = l = 0;
                                                        }
                                                    if (5 & s[0]) throw s[1];
                                                    return {
                                                        value: s[0] ? s[1] : void 0,
                                                        done: !0,
                                                    };
                                                })([s, c]);
                                            };
                                        }
                                    })(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return (
                                                    e.preventDefault(),
                                                    [
                                                        4,
                                                        g(
                                                            m(
                                                                (0, _.L6)({
                                                                    folderTitle: S,
                                                                    params: {
                                                                        param:
                                                                            0 === N
                                                                                ? 'age'
                                                                                : 1 === N
                                                                                ? 'faculty'
                                                                                : 'keySkills',
                                                                        value:
                                                                            0 === N
                                                                                ? Q.join('-')
                                                                                : 1 === N
                                                                                ? Z.join(',')
                                                                                : B.map(function (
                                                                                      e,
                                                                                  ) {
                                                                                      return e.title;
                                                                                  }).join(','),
                                                                    },
                                                                }),
                                                            ),
                                                            {
                                                                loadingMessage: 'Создаем группу...',
                                                                successMessage: 'Группа создана!',
                                                            },
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return (
                                                    'fulfilled' === n.sent().meta.requestStatus &&
                                                        x(L.h3.grouping),
                                                    [2]
                                                );
                                        }
                                    });
                                }),
                                new ((a = void 0) || (a = Promise))(function (e, r) {
                                    function i(e) {
                                        try {
                                            c(l.next(e));
                                        } catch (e) {
                                            r(e);
                                        }
                                    }
                                    function s(e) {
                                        try {
                                            c(l.throw(e));
                                        } catch (e) {
                                            r(e);
                                        }
                                    }
                                    function c(n) {
                                        var t;
                                        n.done
                                            ? e(n.value)
                                            : ((t = n.value),
                                              t instanceof a
                                                  ? t
                                                  : new a(function (e) {
                                                        e(t);
                                                    })).then(i, s);
                                    }
                                    c((l = l.apply(n, t || [])).next());
                                })
                            );
                            var n, t, a, l;
                        },
                        [g, m, S, N, Q, Z, B, x],
                    ),
                    Y = (0, i.useCallback)(function (e) {
                        V(e.value);
                    }, []),
                    $ = (0, i.useCallback)(
                        function () {
                            x(L.h3.manualgrouping);
                        },
                        [x],
                    );
                return (
                    (0, i.useEffect)(
                        function () {
                            T(
                                H.findIndex(function (e) {
                                    return e === y;
                                }),
                            );
                        },
                        [y, H],
                    ),
                    (0, a.jsx)(
                        q.W,
                        G(
                            { reducers: { folder: _.Jp } },
                            {
                                children: (0, a.jsxs)(
                                    r.T,
                                    G(
                                        { className: (0, l.A)(D.CreateFolderPage, {}, [n]) },
                                        {
                                            children: [
                                                (0, a.jsx)(s.V, {
                                                    breadcrumbPath: [
                                                        {
                                                            label: 'Сравнение кандидатов',
                                                            url: L.h3.candidates,
                                                        },
                                                        {
                                                            label: 'Группировка кандидатов',
                                                            url: L.h3.grouping,
                                                        },
                                                        { label: 'Создание группы' },
                                                    ],
                                                    title: 'Создать группу',
                                                }),
                                                (0, a.jsx)(
                                                    'form',
                                                    G(
                                                        { onSubmit: X },
                                                        {
                                                            children: (0, a.jsxs)(
                                                                c.g,
                                                                G(
                                                                    { maxW: !0 },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                u.i,
                                                                                G(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            D.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                d.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        D.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Название группы',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsx)(o.I, {
                                                                                required: !0,
                                                                                value: S,
                                                                                onChange: w,
                                                                                placeholder:
                                                                                    'Название группы',
                                                                            }),
                                                                            (0, a.jsx)(
                                                                                u.i,
                                                                                G(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            D.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                d.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        D.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Способ заполнения группы',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsx)(f.L, {
                                                                                options: H,
                                                                                value: y,
                                                                                onChange: function (
                                                                                    e,
                                                                                ) {
                                                                                    return j(
                                                                                        e.value,
                                                                                    );
                                                                                },
                                                                                emptyMessage: (0,
                                                                                a.jsx)('p', {
                                                                                    children:
                                                                                        'Ничего не найдено',
                                                                                }),
                                                                                placeholder:
                                                                                    'Выберите параметр группировки',
                                                                                required: !0,
                                                                            }),
                                                                            y &&
                                                                                (0, a.jsxs)(
                                                                                    a.Fragment,
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                u.i,
                                                                                                G(
                                                                                                    {
                                                                                                        align: 'left',
                                                                                                        className:
                                                                                                            D.divider,
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            (0,
                                                                                                            a.jsx)(
                                                                                                                d.xv,
                                                                                                                {
                                                                                                                    className:
                                                                                                                        D.dividerTitle,
                                                                                                                    align: 'left',
                                                                                                                    text: 'Выберите критерий отбора',
                                                                                                                    size: 'small',
                                                                                                                },
                                                                                                            ),
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                            0 ===
                                                                                                N &&
                                                                                                (0,
                                                                                                a.jsxs)(
                                                                                                    c.U,
                                                                                                    G(
                                                                                                        {
                                                                                                            className:
                                                                                                                D.sliderWrapper,
                                                                                                            maxW: !0,
                                                                                                            gap: '16',
                                                                                                        },
                                                                                                        {
                                                                                                            children:
                                                                                                                [
                                                                                                                    (0,
                                                                                                                    a.jsx)(
                                                                                                                        'p',
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                Q[0],
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    a.jsx)(
                                                                                                                        'div',
                                                                                                                        G(
                                                                                                                            {
                                                                                                                                style: {
                                                                                                                                    width: '100%',
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                children:
                                                                                                                                    (0,
                                                                                                                                    a.jsx)(
                                                                                                                                        h.i,
                                                                                                                                        {
                                                                                                                                            min: 18,
                                                                                                                                            max: 40,
                                                                                                                                            value: Q,
                                                                                                                                            onChange:
                                                                                                                                                Y,
                                                                                                                                            range: !0,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    a.jsx)(
                                                                                                                        'p',
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                Q[1],
                                                                                                                        },
                                                                                                                    ),
                                                                                                                ],
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            1 ===
                                                                                                N &&
                                                                                                (0,
                                                                                                a.jsx)(
                                                                                                    p.m,
                                                                                                    {
                                                                                                        selectedParams:
                                                                                                            Z,
                                                                                                        setSelectedParams:
                                                                                                            M,
                                                                                                    },
                                                                                                ),
                                                                                            2 ===
                                                                                                N &&
                                                                                                (0,
                                                                                                a.jsx)(
                                                                                                    A,
                                                                                                    {
                                                                                                        data: t,
                                                                                                        selected:
                                                                                                            B,
                                                                                                        onChange:
                                                                                                            K,
                                                                                                        placeholder:
                                                                                                            'Выберите ключевые навыки',
                                                                                                    },
                                                                                                ),
                                                                                        ],
                                                                                    },
                                                                                ),
                                                                            (0, a.jsxs)(
                                                                                c.U,
                                                                                G(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        justify:
                                                                                            'end',
                                                                                        gap: '16',
                                                                                        className:
                                                                                            D.submitBtn,
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                E.z,
                                                                                                G(
                                                                                                    {
                                                                                                        onClick:
                                                                                                            $,
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            'Ручное заполнение группы',
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                E.z,
                                                                                                G(
                                                                                                    {
                                                                                                        disabled:
                                                                                                            R,
                                                                                                        isLoading:
                                                                                                            v,
                                                                                                        type: 'submit',
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            'Сформировать группу',
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
                );
            });
        },
        4780: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(8081),
                l = t.n(a),
                r = t(3645),
                i = t.n(r)()(l());
            i.push([
                e.id,
                '.ffee3{margin:35px 0 0}.ffee3:first-child{margin:0}.e4ff7{padding:2px 7px;border-radius:8px;background:#1a1d21}.e4ff7 p{color:#999}.d47ff{width:100%}.af766{margin-top:100px}',
                '',
            ]),
                (i.locals = {
                    divider: 'ffee3',
                    dividerTitle: 'e4ff7',
                    sliderWrapper: 'd47ff',
                    submitBtn: 'af766',
                });
            const s = i;
        },
        6e3: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(8081),
                l = t.n(a),
                r = t(3645),
                i = t.n(r)()(l());
            i.push([e.id, '', '']), (i.locals = {});
            const s = i;
        },
    },
]);
