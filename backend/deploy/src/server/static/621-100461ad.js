'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [621],
    {
        6621: (e, r, n) => {
            n.r(r), n.d(r, { default: () => _ });
            var t = n(5893),
                a = n(4807),
                l = n(2594),
                s = n(7294),
                i = n(577),
                c = n(7543),
                o = n(5034),
                d = n(1222),
                u = n(4710),
                f = n(3379),
                h = n.n(f),
                p = n(7795),
                x = n.n(p),
                m = n(569),
                b = n.n(m),
                v = n(3565),
                g = n.n(v),
                j = n(9216),
                w = n.n(j),
                y = n(4589),
                O = n.n(y),
                k = n(5859),
                A = {};
            (A.styleTagTransform = O()),
                (A.setAttributes = g()),
                (A.insert = b().bind(null, 'head')),
                (A.domAPI = x()),
                (A.insertStyleElement = w()),
                h()(k.Z, A);
            const Z = k.Z && k.Z.locals ? k.Z.locals : void 0;
            var P = function () {
                return (
                    (P =
                        Object.assign ||
                        function (e) {
                            for (var r, n = 1, t = arguments.length; n < t; n++)
                                for (var a in (r = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                            return e;
                        }),
                    P.apply(this, arguments)
                );
            };
            const _ = (0, s.memo)(function (e) {
                var r = e.className;
                (0, s.useEffect)(function () {
                    document.title = 'Группировка кандидатов';
                }, []);
                var n = (0, o.jx)(0, { refetchOnMountOrArgChange: !0 }),
                    f = n.data,
                    h = n.isLoading,
                    p = n.error,
                    x = n.refetch,
                    m = (0, s.useMemo)(function () {
                        return (0, t.jsx)(
                            c.U,
                            P(
                                { maxW: !0, className: Z.loaderWrapper, gap: '16' },
                                {
                                    children: new Array(4).fill(0).map(function (e, r) {
                                        return (0,
                                        t.jsx)(u.O, { style: { flexShrink: 0 }, width: '390px', height: '500px', borderRadius: '8px' }, r);
                                    }),
                                },
                            ),
                        );
                    }, []);
                return (0,
                t.jsxs)(l.T, P({ className: (0, a.A)(Z.GroupingPage, {}, [r]) }, { children: [(0, t.jsx)(i.V, { breadcrumbPath: [{ label: 'Сравнение кандидатов', url: d.h3.candidates }, { label: 'Группировка кандидатов' }], title: 'Группировка кандидатов' }), h && m, p && !h && (0, t.jsx)('div', { children: 'Ошибка при загрузке' }), !h && !p && (0, t.jsx)(o.ln, { refreshFolderList: x, folders: f })] }));
            });
        },
        5859: (e, r, n) => {
            n.d(r, { Z: () => i });
            var t = n(8081),
                a = n.n(t),
                l = n(3645),
                s = n.n(l)()(a());
            s.push([e.id, '.fad9e{max-width:calc(100vw - 60px);overflow-x:hidden}', '']),
                (s.locals = { loaderWrapper: 'fad9e' });
            const i = s;
        },
    },
]);
