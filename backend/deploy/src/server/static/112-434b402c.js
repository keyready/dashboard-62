'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [112],
    {
        4112: (e, t, n) => {
            n.r(t), n.d(t, { default: () => C });
            var r = n(5893),
                a = n(4807),
                c = n(2594),
                o = n(7294),
                s = n(6088),
                l = n(6410),
                i = n(7543),
                u = function (e) {
                    var t = e % 10,
                        n = e % 100;
                    if (n >= 11 && n <= 14) return ''.concat(e, ' файлов');
                    switch (t) {
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
                d = n(3379),
                p = n.n(d),
                f = n(7795),
                m = n.n(f),
                h = n(569),
                v = n.n(h),
                b = n(3565),
                g = n.n(b),
                y = n(9216),
                x = n.n(y),
                j = n(4589),
                O = n.n(j),
                Z = n(9760),
                w = {};
            (w.styleTagTransform = O()),
                (w.setAttributes = g()),
                (w.insert = v().bind(null, 'head')),
                (w.domAPI = m()),
                (w.insertStyleElement = x()),
                p()(Z.Z, w);
            const A = Z.Z && Z.Z.locals ? Z.Z.locals : void 0;
            var N = function () {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                },
                P = (0, o.memo)(function (e) {
                    e.className;
                    var t = (0, o.useState)(0),
                        n = t[0],
                        c = t[1],
                        s = (0, o.useState)(0),
                        d = s[0],
                        p = s[1],
                        f = (0, o.useCallback)(function () {
                            c(0), p(0);
                        }, []);
                    return (0, r.jsx)(l.p, {
                        onSelect: function (e) {
                            for (var t = 0, n = 0, r = e.files, a = 0; a < r.length; a += 1)
                                (t += r[a].size || 0), (n += 1);
                            c(t), p(n);
                        },
                        headerTemplate: function (e) {
                            var t = e.className,
                                c = e.uploadButton,
                                o = e.cancelButton,
                                s = e.chooseButton;
                            return (0, r.jsxs)(
                                'div',
                                N(
                                    { className: (0, a.A)(A.uploadHeader, {}, [t]) },
                                    {
                                        children: [
                                            (0, r.jsxs)(
                                                i.U,
                                                N({ gap: '8' }, { children: [s, c, o] }),
                                            ),
                                            (0, r.jsx)('div', {
                                                children: (0, r.jsxs)('h2', {
                                                    children: [
                                                        'Вы выбрали ',
                                                        u(d),
                                                        ' файлов на',
                                                        ' ',
                                                        (n / 1e6).toFixed(1),
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
                            c(function (t) {
                                return t - e.file.size;
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
                T = n(577),
                E = n(2322),
                S = {};
            (S.styleTagTransform = O()),
                (S.setAttributes = g()),
                (S.insert = v().bind(null, 'head')),
                (S.domAPI = m()),
                (S.insertStyleElement = x()),
                p()(E.Z, S);
            const k = E.Z && E.Z.locals ? E.Z.locals : void 0;
            var I = n(5999),
                B = function () {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                },
                z = { filesUpload: I.Oe };
            const C = (0, o.memo)(function (e) {
                var t = e.className;
                return (
                    (0, o.useEffect)(function () {
                        document.title = 'Загрузите данные';
                    }, []),
                    (0, r.jsx)(
                        s.W,
                        B(
                            { reducers: z },
                            {
                                children: (0, r.jsxs)(
                                    c.T,
                                    B(
                                        { className: (0, a.A)(k.UploadFilesPage, {}, [t]) },
                                        {
                                            children: [
                                                (0, r.jsx)(T.V, { title: 'Загрузка резюме' }),
                                                (0, r.jsx)(P, {}),
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
        6088: (e, t, n) => {
            n.d(t, { W: () => o });
            var r = n(5893),
                a = n(7294),
                c = n(3942),
                o = function (e) {
                    var t = (0, c.oR)(),
                        n = (0, c.I0)(),
                        o = e.children,
                        s = e.reducers,
                        l = e.removeAfterUnmount,
                        i = void 0 === l || l;
                    return (
                        (0, a.useEffect)(function () {
                            var e = t.reducerManager.getMountedReducers;
                            return (
                                Object.entries(s).forEach(function (r) {
                                    var a = r[0],
                                        c = r[1];
                                    e[a] ||
                                        (t.reducerManager.add(a, c),
                                        n({ type: '@INIT '.concat(a, ' reducer') }));
                                }),
                                function () {
                                    i &&
                                        Object.entries(s).forEach(function (e) {
                                            var r = e[0];
                                            t.reducerManager.remove(r),
                                                n({ type: '@DESTROY '.concat(r, ' reducer') });
                                        });
                                }
                            );
                        }, []),
                        (0, r.jsx)(r.Fragment, { children: o })
                    );
                };
        },
        577: (e, t, n) => {
            n.d(t, { V: () => R });
            var r = n(5893),
                a = n(4807),
                c = n(7294),
                o = n(3379),
                s = n.n(o),
                l = n(7795),
                i = n.n(l),
                u = n(569),
                d = n.n(u),
                p = n(3565),
                f = n.n(p),
                m = n(9216),
                h = n.n(m),
                v = n(4589),
                b = n.n(v),
                g = n(1864),
                y = {};
            (y.styleTagTransform = b()),
                (y.setAttributes = f()),
                (y.insert = d().bind(null, 'head')),
                (y.domAPI = i()),
                (y.insertStyleElement = h()),
                s()(g.Z, y);
            const x = g.Z && g.Z.locals ? g.Z.locals : void 0;
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
                O = (0, c.memo)(function (e) {
                    var t = e.className,
                        n = e.children,
                        c = (function (e, t) {
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
                    r.jsx)('div', j({ className: (0, a.A)(x.Card, {}, [t]) }, c, { children: n }));
                }),
                Z = n(7828),
                w = n(7543),
                A = n(5020),
                N = n(2469),
                P = n(9250),
                T = n(4498),
                E = {};
            (E.styleTagTransform = b()),
                (E.setAttributes = f()),
                (E.insert = d().bind(null, 'head')),
                (E.domAPI = i()),
                (E.insertStyleElement = h()),
                s()(T.Z, E);
            const S = T.Z && T.Z.locals ? T.Z.locals : void 0;
            var k = function () {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                },
                I = (0, c.memo)(function (e) {
                    var t = e.className,
                        n = e.path,
                        o = (0, c.useMemo)(function () {
                            return { url: '/', icon: (0, r.jsx)(N.tvw, {}) };
                        }, []),
                        s = (0, P.s0)();
                    return (0, r.jsx)(A.c, {
                        model: n.map(function (e) {
                            return k(k({}, e), {
                                command: function (t) {
                                    t.originalEvent.preventDefault(), s(e.url || '');
                                },
                            });
                        }),
                        home: o,
                        className: (0, a.A)(S.Breadcrumb, {}, [t]),
                    });
                }),
                B = n(5559),
                z = {};
            (z.styleTagTransform = b()),
                (z.setAttributes = f()),
                (z.insert = d().bind(null, 'head')),
                (z.domAPI = i()),
                (z.insertStyleElement = h()),
                s()(B.Z, z);
            const C = B.Z && B.Z.locals ? B.Z.locals : void 0;
            var M = function () {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                },
                R = (0, c.memo)(function (e) {
                    var t = e.className,
                        n = e.title,
                        c = e.breadcrumbPath;
                    return (0,
                    r.jsxs)(w.g, M({ justify: 'start', className: (0, a.A)(C.PageTitle, {}, [t]) }, { children: [(null == c ? void 0 : c.length) && (0, r.jsx)(I, { className: C.bc, path: c }), (0, r.jsx)(O, M({ className: C.card }, { children: (0, r.jsx)(Z.xv, { align: 'left', size: 'large', className: C.textBlock, title: n }) }))] }));
                });
        },
        9760: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(8081),
                a = n.n(r),
                c = n(3645),
                o = n.n(c)()(a());
            o.push([e.id, '.a056d{justify-content:space-between}', '']),
                (o.locals = { uploadHeader: 'a056d' });
            const s = o;
        },
        2322: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(8081),
                a = n.n(r),
                c = n(3645),
                o = n.n(c)()(a());
            o.push([e.id, '.fd66f{margin:0 0 40px}.dbd82 h1{margin:0}', '']),
                (o.locals = { card: 'fd66f', textBlock: 'dbd82' });
            const s = o;
        },
        4498: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(8081),
                a = n.n(r),
                c = n(3645),
                o = n.n(c)()(a());
            o.push([e.id, '', '']), (o.locals = {});
            const s = o;
        },
        1864: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(8081),
                a = n.n(r),
                c = n(3645),
                o = n.n(c)()(a());
            o.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (o.locals = { Card: 'd2057' });
            const s = o;
        },
        5559: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(8081),
                a = n.n(r),
                c = n(3645),
                o = n.n(c)()(a());
            o.push([
                e.id,
                '.ecd81{margin:0 0 40px;max-width:100%}.f2d6a h1{margin:0}.b6604{margin-bottom:20px}',
                '',
            ]),
                (o.locals = { card: 'ecd81', textBlock: 'f2d6a', bc: 'b6604' });
            const s = o;
        },
    },
]);
