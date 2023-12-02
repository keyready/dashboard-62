'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [23],
    {
        1023: (e, r, t) => {
            t.r(r), t.d(r, { default: () => z });
            var n = t(5893),
                s = t(4807),
                i = t(2594),
                l = t(7294),
                a = t(7828),
                c = t(7543),
                o = t(9704),
                d = t(3379),
                m = t.n(d),
                x = t(7795),
                f = t.n(x),
                u = t(569),
                p = t.n(u),
                h = t(3565),
                v = t.n(h),
                g = t(9216),
                j = t.n(g),
                b = t(4589),
                k = t.n(b),
                y = t(2968),
                N = {};
            (N.styleTagTransform = k()),
                (N.setAttributes = v()),
                (N.insert = p().bind(null, 'head')),
                (N.domAPI = f()),
                (N.insertStyleElement = j()),
                m()(y.Z, N);
            const T = y.Z && y.Z.locals ? y.Z.locals : void 0;
            var _ = function () {
                return (
                    (_ =
                        Object.assign ||
                        function (e) {
                            for (var r, t = 1, n = arguments.length; t < n; t++)
                                for (var s in (r = arguments[t]))
                                    Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
                            return e;
                        }),
                    _.apply(this, arguments)
                );
            };
            const z = (0, l.memo)(function (e) {
                var r = e.className;
                return (
                    (0, l.useEffect)(function () {
                        document.title = 'IVT-23';
                    }, []),
                    (0, n.jsxs)(
                        i.T,
                        _(
                            { className: (0, s.A)(T.MainPage, {}, [r]) },
                            {
                                children: [
                                    (0, n.jsx)(o.V, { title: 'О проекте' }),
                                    (0, n.jsxs)(
                                        c.g,
                                        _(
                                            { maxW: !0, gap: '16' },
                                            {
                                                children: [
                                                    (0, n.jsxs)(
                                                        'div',
                                                        _(
                                                            { className: T.descriptionTable },
                                                            {
                                                                children: [
                                                                    (0, n.jsx)(a.xv, {
                                                                        align: 'left',
                                                                        title: 'Тема',
                                                                        size: 'medium',
                                                                    }),
                                                                    (0, n.jsx)(a.xv, {
                                                                        text: 'Система ранжирования выпускников факультета (Академии) на основе их компетенций с использованием нейросетей',
                                                                        size: 'medium',
                                                                    }),
                                                                ],
                                                            },
                                                        ),
                                                    ),
                                                    (0, n.jsxs)(
                                                        'div',
                                                        _(
                                                            { className: T.descriptionTable },
                                                            {
                                                                children: [
                                                                    (0, n.jsx)(a.xv, {
                                                                        align: 'left',
                                                                        title: 'Задача',
                                                                        size: 'medium',
                                                                    }),
                                                                    (0, n.jsx)(a.xv, {
                                                                        text: 'Задача подбора кадров по описаниям компетенций требует от лица, производящего отбор, удерживать в памяти большой объем информации и выполнять множество сравнений. В целях повышения качества работы отдела рекрутинга используются автоматизированные системы отслеживания кандидатов. Результатом проекта является модуль системы, позволяющий повысить эффективность рекрутинга за счет автоматического расчетаитогового показателя компетенций и одновременного отображения компетенций сразу нескольких кандидатов на одном элементе управления.',
                                                                        size: 'medium',
                                                                    }),
                                                                ],
                                                            },
                                                        ),
                                                    ),
                                                    (0, n.jsxs)(
                                                        'div',
                                                        _(
                                                            { className: T.descriptionTable },
                                                            {
                                                                children: [
                                                                    (0, n.jsx)(a.xv, {
                                                                        align: 'left',
                                                                        title: 'Команда',
                                                                        size: 'medium',
                                                                    }),
                                                                    (0, n.jsxs)(
                                                                        c.g,
                                                                        _(
                                                                            { maxW: !0 },
                                                                            {
                                                                                children: [
                                                                                    (0, n.jsx)(
                                                                                        'a',
                                                                                        _(
                                                                                            {
                                                                                                className:
                                                                                                    T.link,
                                                                                                href: '//t.me/VALI666KO',
                                                                                                target: '_blank',
                                                                                                rel: 'noreferrer',
                                                                                            },
                                                                                            {
                                                                                                children:
                                                                                                    'Кофанов Валентин (Backend-developer)',
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                    (0, n.jsx)(
                                                                                        'a',
                                                                                        _(
                                                                                            {
                                                                                                className:
                                                                                                    T.link,
                                                                                                href: '//t.me/operculum',
                                                                                                target: '_blank',
                                                                                                rel: 'noreferrer',
                                                                                            },
                                                                                            {
                                                                                                children:
                                                                                                    'Поляков Дмитрий (UI/UX designer)',
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                    (0, n.jsx)(
                                                                                        'a',
                                                                                        _(
                                                                                            {
                                                                                                className:
                                                                                                    T.link,
                                                                                                href: '//t.me/keyrea_dy',
                                                                                                target: '_blank',
                                                                                                rel: 'noreferrer',
                                                                                            },
                                                                                            {
                                                                                                children:
                                                                                                    'Корчак Родион (Frontend-developer)',
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
                );
            });
        },
        2968: (e, r, t) => {
            t.d(r, { Z: () => a });
            var n = t(8081),
                s = t.n(n),
                i = t(3645),
                l = t.n(i)()(s());
            l.push([
                e.id,
                '.c6b48{width:100%;display:grid;grid-template-columns:1fr 5fr;grid-gap:10px}.c6b48 p{color:var(--text-color);text-indent:0}.efc98:visited,.efc98:link{color:var(--text-color);transition:100ms ease-in-out}.efc98:hover{color:var(--primary-color)}',
                '',
            ]),
                (l.locals = { descriptionTable: 'c6b48', link: 'efc98' });
            const a = l;
        },
    },
]);
