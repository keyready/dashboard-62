'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [23],
    {
        1023: (e, r, t) => {
            t.r(r), t.d(r, { default: () => w });
            var n = t(5893),
                a = t(4807),
                l = t(2594),
                s = t(7294),
                i = t(7828),
                c = t(7543),
                o = t(1221),
                d = t(3379),
                m = t.n(d),
                p = t(7795),
                x = t.n(p),
                f = t(569),
                u = t.n(f),
                h = t(3565),
                v = t.n(h),
                b = t(9216),
                g = t.n(b),
                j = t(4589),
                y = t.n(j),
                k = t(2968),
                O = {};
            (O.styleTagTransform = y()),
                (O.setAttributes = v()),
                (O.insert = u().bind(null, 'head')),
                (O.domAPI = x()),
                (O.insertStyleElement = g()),
                m()(k.Z, O);
            const N = k.Z && k.Z.locals ? k.Z.locals : void 0;
            var Z = function () {
                return (
                    (Z =
                        Object.assign ||
                        function (e) {
                            for (var r, t = 1, n = arguments.length; t < n; t++)
                                for (var a in (r = arguments[t]))
                                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                            return e;
                        }),
                    Z.apply(this, arguments)
                );
            };
            const w = (0, s.memo)(function (e) {
                var r = e.className;
                return (0,
                n.jsxs)(l.T, Z({ className: (0, a.A)(N.MainPage, {}, [r]) }, { children: [(0, n.jsx)(c.U, Z({ justify: 'start' }, { children: (0, n.jsx)(o.Z, Z({ className: N.card }, { children: (0, n.jsx)(i.xv, { align: 'left', size: 'large', className: N.textBlock, title: 'О проекте' }) })) })), (0, n.jsxs)(c.g, Z({ maxW: !0, gap: '16' }, { children: [(0, n.jsxs)('div', Z({ className: N.descriptionTable }, { children: [(0, n.jsx)(i.xv, { align: 'left', title: 'Тема', size: 'medium' }), (0, n.jsx)(i.xv, { text: 'Система ранжирования выпускников факультета (Академии) на основе их компетенций с использованием нейросетей', size: 'medium' })] })), (0, n.jsxs)('div', Z({ className: N.descriptionTable }, { children: [(0, n.jsx)(i.xv, { align: 'left', title: 'Задача', size: 'medium' }), (0, n.jsx)(i.xv, { text: 'Задача подбора кадров по описаниям компетенций требует от лица, производящего отбор, удерживать в памяти большой объем информации и выполнять множество сравнений. В целях повышения качества работы отдела рекрутинга используются автоматизированные системы отслеживания кандидатов. Результатом проекта является модуль системы, позволяющий повысить эффективность рекрутинга за счет автоматического расчетаитогового показателя компетенций и одновременного отображения компетенций сразу нескольких кандидатов на одном элементе управления.', size: 'medium' })] })), (0, n.jsxs)('div', Z({ className: N.descriptionTable }, { children: [(0, n.jsx)(i.xv, { align: 'left', title: 'Команда', size: 'medium' }), (0, n.jsxs)(c.g, Z({ maxW: !0 }, { children: [(0, n.jsx)('a', Z({ className: N.link, href: '//t.me/VALI666KO', target: '_blank', rel: 'noreferrer' }, { children: 'Кофанов Валентин (Backend-developer)' })), (0, n.jsx)('a', Z({ className: N.link, href: '//t.me/operculum', target: '_blank', rel: 'noreferrer' }, { children: 'Поляков Дмитрий (UI/UX designer)' })), (0, n.jsx)('a', Z({ className: N.link, href: '//t.me/keyrea_dy', target: '_blank', rel: 'noreferrer' }, { children: 'Корчак Родион (Frontend-developer)' }))] }))] }))] }))] }));
            });
        },
        1221: (e, r, t) => {
            t.d(r, { Z: () => k });
            var n = t(5893),
                a = t(4807),
                l = t(7294),
                s = t(3379),
                i = t.n(s),
                c = t(7795),
                o = t.n(c),
                d = t(569),
                m = t.n(d),
                p = t(3565),
                x = t.n(p),
                f = t(9216),
                u = t.n(f),
                h = t(4589),
                v = t.n(h),
                b = t(1864),
                g = {};
            (g.styleTagTransform = v()),
                (g.setAttributes = x()),
                (g.insert = m().bind(null, 'head')),
                (g.domAPI = o()),
                (g.insertStyleElement = u()),
                i()(b.Z, g);
            const j = b.Z && b.Z.locals ? b.Z.locals : void 0;
            var y = function () {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var r, t = 1, n = arguments.length; t < n; t++)
                                    for (var a in (r = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                },
                k = (0, l.memo)(function (e) {
                    var r = e.className,
                        t = e.children,
                        l = (function (e, r) {
                            var t = {};
                            for (var n in e)
                                Object.prototype.hasOwnProperty.call(e, n) &&
                                    r.indexOf(n) < 0 &&
                                    (t[n] = e[n]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var a = 0;
                                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                                    r.indexOf(n[a]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                                        (t[n[a]] = e[n[a]]);
                            }
                            return t;
                        })(e, ['className', 'children']);
                    return (0,
                    n.jsx)('div', y({ className: (0, a.A)(j.Card, {}, [r]) }, l, { children: t }));
                });
        },
        2968: (e, r, t) => {
            t.d(r, { Z: () => i });
            var n = t(8081),
                a = t.n(n),
                l = t(3645),
                s = t.n(l)()(a());
            s.push([
                e.id,
                '.fb398{width:340px;margin:0 0 40px}.ae71b h1{margin:0}.c6b48{width:100%;display:grid;grid-template-columns:1fr 5fr;grid-gap:10px}.c6b48 p{color:var(--text-color);text-indent:0}.efc98:visited,.efc98:link{color:var(--text-color);transition:100ms ease-in-out}.efc98:hover{color:var(--primary-color)}',
                '',
            ]),
                (s.locals = {
                    card: 'fb398',
                    textBlock: 'ae71b',
                    descriptionTable: 'c6b48',
                    link: 'efc98',
                });
            const i = s;
        },
        1864: (e, r, t) => {
            t.d(r, { Z: () => i });
            var n = t(8081),
                a = t.n(n),
                l = t(3645),
                s = t.n(l)()(a());
            s.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (s.locals = { Card: 'd2057' });
            const i = s;
        },
    },
]);
