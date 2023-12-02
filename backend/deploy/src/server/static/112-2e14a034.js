'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [112],
    {
        4112: (e, n, t) => {
            t.r(n), t.d(n, { default: () => U });
            var r = t(5893),
                a = t(4807),
                c = t(2594),
                o = t(7294),
                s = t(6088),
                l = t(1596),
                i = t(7543),
                d = function (e) {
                    var n = e % 10,
                        t = e % 100;
                    if (t >= 11 && t <= 14) return ''.concat(e, ' файлов');
                    switch (n) {
                        case 1:
                            return ''.concat(e, ' файл');
                        case 2:
                        case 3:
                        case 4:
                            return ''.concat(e, ' файла');
                        default:
                            return ''.concat(e, ' файлов');
                    }
                },
                u = t(3379),
                p = t.n(u),
                f = t(7795),
                h = t.n(f),
                v = t(569),
                m = t.n(v),
                b = t(3565),
                g = t.n(b),
                x = t(9216),
                y = t.n(x),
                j = t(4589),
                O = t.n(j),
                Z = t(9760),
                w = {};
            (w.styleTagTransform = O()),
                (w.setAttributes = g()),
                (w.insert = m().bind(null, 'head')),
                (w.domAPI = h()),
                (w.insertStyleElement = y()),
                p()(Z.Z, w);
            const N = Z.Z && Z.Z.locals ? Z.Z.locals : void 0;
            var A = function () {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                },
                P = (0, o.memo)(function (e) {
                    e.className;
                    var n = (0, o.useState)(0),
                        t = n[0],
                        c = n[1],
                        s = (0, o.useState)(0),
                        u = s[0],
                        p = s[1],
                        f = (0, o.useCallback)(function () {
                            c(0), p(0);
                        }, []);
                    return (0, r.jsx)(l.p, {
                        onSelect: function (e) {
                            for (var n = 0, t = 0, r = e.files, a = 0; a < r.length; a += 1)
                                (n += r[a].size || 0), (t += 1);
                            c(n), p(t);
                        },
                        headerTemplate: function (e) {
                            var n = e.className,
                                c = e.uploadButton,
                                o = e.cancelButton,
                                s = e.chooseButton;
                            return (0, r.jsxs)(
                                'div',
                                A(
                                    { className: (0, a.A)(N.uploadHeader, {}, [n]) },
                                    {
                                        children: [
                                            (0, r.jsxs)(
                                                i.U,
                                                A({ gap: '8' }, { children: [s, c, o] }),
                                            ),
                                            (0, r.jsx)('div', {
                                                children: (0, r.jsxs)('h2', {
                                                    children: [
                                                        'Вы выбрали ',
                                                        d(u),
                                                        ' файлов на',
                                                        ' ',
                                                        (t / 1e6).toFixed(1),
                                                        ' МБ',
                                                    ],
                                                }),
                                            }),
                                        ],
                                    },
                                ),
                            );
                        },
                        onClear: f,
                        onRemove: function (e) {
                            c(function (n) {
                                return n - e.file.size;
                            }),
                                p(function (e) {
                                    return e - 1;
                                });
                        },
                        chooseLabel: 'Выберите файлы',
                        uploadLabel: 'Загрузить',
                        cancelLabel: 'Отменить',
                        mode: 'advanced',
                        name: 'archives',
                        url: 'http://localhost:5000/api/upload',
                        accept: 'application/zip,application/x-rar-compressed,application/x-tar,application/gzip,application/x-bzip2',
                        multiple: !0,
                    });
                }),
                T = t(1221),
                S = t(7828),
                k = t(2322),
                E = {};
            (E.styleTagTransform = O()),
                (E.setAttributes = g()),
                (E.insert = m().bind(null, 'head')),
                (E.domAPI = h()),
                (E.insertStyleElement = y()),
                p()(k.Z, E);
            const I = k.Z && k.Z.locals ? k.Z.locals : void 0;
            var z = t(5999),
                C = function () {
                    return (
                        (C =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        C.apply(this, arguments)
                    );
                },
                B = { filesUpload: z.Oe };
            const U = (0, o.memo)(function (e) {
                var n = e.className;
                return (0,
                r.jsx)(s.W, C({ reducers: B }, { children: (0, r.jsxs)(c.T, C({ className: (0, a.A)(I.UploadFilesPage, {}, [n]) }, { children: [(0, r.jsx)(i.U, C({ justify: 'start' }, { children: (0, r.jsx)(T.Z, C({ className: I.card }, { children: (0, r.jsx)(S.xv, { align: 'left', size: 'large', className: I.textBlock, title: 'Загрузка резюме' }) })) })), (0, r.jsx)(P, {})] })) }));
            });
        },
        1221: (e, n, t) => {
            t.d(n, { Z: () => O });
            var r = t(5893),
                a = t(4807),
                c = t(7294),
                o = t(3379),
                s = t.n(o),
                l = t(7795),
                i = t.n(l),
                d = t(569),
                u = t.n(d),
                p = t(3565),
                f = t.n(p),
                h = t(9216),
                v = t.n(h),
                m = t(4589),
                b = t.n(m),
                g = t(1864),
                x = {};
            (x.styleTagTransform = b()),
                (x.setAttributes = f()),
                (x.insert = u().bind(null, 'head')),
                (x.domAPI = i()),
                (x.insertStyleElement = v()),
                s()(g.Z, x);
            const y = g.Z && g.Z.locals ? g.Z.locals : void 0;
            var j = function () {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                },
                O = (0, c.memo)(function (e) {
                    var n = e.className,
                        t = e.children,
                        c = (function (e, n) {
                            var t = {};
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    n.indexOf(r) < 0 &&
                                    (t[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var a = 0;
                                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                                    n.indexOf(r[a]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                                        (t[r[a]] = e[r[a]]);
                            }
                            return t;
                        })(e, ['className', 'children']);
                    return (0,
                    r.jsx)('div', j({ className: (0, a.A)(y.Card, {}, [n]) }, c, { children: t }));
                });
        },
        6088: (e, n, t) => {
            t.d(n, { W: () => o });
            var r = t(5893),
                a = t(7294),
                c = t(3942),
                o = function (e) {
                    var n = (0, c.oR)(),
                        t = (0, c.I0)(),
                        o = e.children,
                        s = e.reducers,
                        l = e.removeAfterUnmount,
                        i = void 0 === l || l;
                    return (
                        (0, a.useEffect)(function () {
                            var e = n.reducerManager.getMountedReducers;
                            return (
                                Object.entries(s).forEach(function (r) {
                                    var a = r[0],
                                        c = r[1];
                                    e[a] ||
                                        (n.reducerManager.add(a, c),
                                        t({ type: '@INIT '.concat(a, ' reducer') }));
                                }),
                                function () {
                                    i &&
                                        Object.entries(s).forEach(function (e) {
                                            var r = e[0];
                                            n.reducerManager.remove(r),
                                                t({ type: '@DESTROY '.concat(r, ' reducer') });
                                        });
                                }
                            );
                        }, []),
                        (0, r.jsx)(r.Fragment, { children: o })
                    );
                };
        },
        9760: (e, n, t) => {
            t.d(n, { Z: () => s });
            var r = t(8081),
                a = t.n(r),
                c = t(3645),
                o = t.n(c)()(a());
            o.push([e.id, '.a056d{justify-content:space-between}', '']),
                (o.locals = { uploadHeader: 'a056d' });
            const s = o;
        },
        2322: (e, n, t) => {
            t.d(n, { Z: () => s });
            var r = t(8081),
                a = t.n(r),
                c = t(3645),
                o = t.n(c)()(a());
            o.push([e.id, '.fd66f{margin:0 0 40px}.dbd82 h1{margin:0}', '']),
                (o.locals = { card: 'fd66f', textBlock: 'dbd82' });
            const s = o;
        },
        1864: (e, n, t) => {
            t.d(n, { Z: () => s });
            var r = t(8081),
                a = t.n(r),
                c = t(3645),
                o = t.n(c)()(a());
            o.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (o.locals = { Card: 'd2057' });
            const s = o;
        },
    },
]);
