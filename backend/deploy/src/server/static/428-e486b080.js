'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [428],
    {
        9428: (t, e, n) => {
            n.r(e), n.d(e, { default: () => A });
            var a = n(5893),
                i = n(4807),
                r = n(2594),
                s = n(7294),
                c = n(7828),
                o = n(3379),
                l = n.n(o),
                d = n(7795),
                u = n.n(d),
                f = n(569),
                m = n.n(f),
                p = n(3565),
                x = n.n(p),
                h = n(9216),
                g = n.n(h),
                b = n(4589),
                v = n.n(b),
                y = n(8340),
                k = {};
            (k.styleTagTransform = v()),
                (k.setAttributes = x()),
                (k.insert = m().bind(null, 'head')),
                (k.domAPI = u()),
                (k.insertStyleElement = g()),
                l()(y.Z, k);
            const j = y.Z && y.Z.locals ? y.Z.locals : void 0;
            var w = function () {
                return (
                    (w =
                        Object.assign ||
                        function (t) {
                            for (var e, n = 1, a = arguments.length; n < a; n++)
                                for (var i in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t;
                        }),
                    w.apply(this, arguments)
                );
            };
            const A = (0, s.memo)(function (t) {
                var e = t.className;
                return (
                    (0, s.useEffect)(function () {
                        document.title = '403 | Нет доступа';
                    }, []),
                    (0, a.jsxs)(
                        r.T,
                        w(
                            { className: (0, i.A)(j.AuthPage, {}, [e]) },
                            {
                                children: [
                                    (0, a.jsx)(c.xv, {
                                        className: j.text,
                                        align: 'center',
                                        title: 'Сначала авторизуйтесь!',
                                        text: 'Понимаем, что Вам очень нужно на эту страницу',
                                    }),
                                    (0, a.jsx)(c.xv, {
                                        className: j.text,
                                        align: 'center',
                                        text: 'Но эта страница - органиченного пользования. Сначала Вам придется авторизоваться',
                                    }),
                                    (0, a.jsx)('h1', w({ className: j.icon }, { children: '403' })),
                                ],
                            },
                        ),
                    )
                );
            });
        },
        8340: (t, e, n) => {
            n.d(e, { Z: () => c });
            var a = n(8081),
                i = n.n(a),
                r = n(3645),
                s = n.n(r)()(i());
            s.push([
                t.id,
                '.a11bd{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow-y:hidden}.e20d2{z-index:10}.c0855{color:rgba(0,0,0,0) !important;font-size:650px !important;line-height:100% !important;-webkit-background-clip:text !important;background-clip:text !important;background-image:var(--accent-gradient) !important;font-family:Montserrat,sans-serif;position:absolute;filter:opacity(0.15);z-index:1}',
                '',
            ]),
                (s.locals = { AuthPage: 'a11bd', text: 'e20d2', icon: 'c0855' });
            const c = s;
        },
    },
]);
