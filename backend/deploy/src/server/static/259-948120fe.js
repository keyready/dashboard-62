'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [259],
    {
        5034: (e, n, t) => {
            t.d(n, {
                Jp: () => c,
                ln: () => D,
                gB: () => K,
                L6: () => o,
                d: () => l,
                gd: () => i,
                Ln: () => u,
                Cb: () => d,
                jx: () => f,
            });
            var r = t(4268),
                a = (0, r.hg)('deleteFolder$/deleteFolder', function (e, n) {
                    return (
                        (t = void 0),
                        (r = void 0),
                        (o = function () {
                            var t, r, a, o;
                            return (function (e, n) {
                                var t,
                                    r,
                                    a,
                                    o,
                                    l = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (o = { next: i(0), throw: i(1), return: i(2) }),
                                    'function' == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function i(i) {
                                    return function (s) {
                                        return (function (i) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; o && ((o = 0), i[0] && (l = 0)), l; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        r &&
                                                            (a =
                                                                2 & i[0]
                                                                    ? r.return
                                                                    : i[0]
                                                                    ? r.throw ||
                                                                      ((a = r.return) && a.call(r),
                                                                      0)
                                                                    : r.next) &&
                                                            !(a = a.call(r, i[1])).done)
                                                    )
                                                        return a;
                                                    switch (
                                                        ((r = 0),
                                                        a && (i = [2 & i[0], a.value]),
                                                        i[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            a = i;
                                                            break;
                                                        case 4:
                                                            return (
                                                                l.label++, { value: i[1], done: !1 }
                                                            );
                                                        case 5:
                                                            l.label++, (r = i[1]), (i = [0]);
                                                            continue;
                                                        case 7:
                                                            (i = l.ops.pop()), l.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (a =
                                                                        (a = l.trys).length > 0 &&
                                                                        a[a.length - 1]) ||
                                                                    (6 !== i[0] && 2 !== i[0])
                                                                )
                                                            ) {
                                                                l = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === i[0] &&
                                                                (!a || (i[1] > a[0] && i[1] < a[3]))
                                                            ) {
                                                                l.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && l.label < a[1]) {
                                                                (l.label = a[1]), (a = i);
                                                                break;
                                                            }
                                                            if (a && l.label < a[2]) {
                                                                (l.label = a[2]), l.ops.push(i);
                                                                break;
                                                            }
                                                            a[2] && l.ops.pop(), l.trys.pop();
                                                            continue;
                                                    }
                                                    i = n.call(e, l);
                                                } catch (e) {
                                                    (i = [6, e]), (r = 0);
                                                } finally {
                                                    t = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return { value: i[0] ? i[1] : void 0, done: !0 };
                                        })([i, s]);
                                    };
                                }
                            })(this, function (l) {
                                switch (l.label) {
                                    case 0:
                                        (t = n.extra),
                                            (r = n.rejectWithValue),
                                            n.dispatch,
                                            (l.label = 1);
                                    case 1:
                                        return (
                                            l.trys.push([1, 3, , 4]),
                                            [4, t.api.post('/api/folder/delete', { folderId: e })]
                                        );
                                    case 2:
                                        if (!(a = l.sent()).data) throw new Error();
                                        return [2, a.data];
                                    case 3:
                                        return (o = l.sent()), console.log(o), [2, r('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((a = void 0) || (a = Promise))(function (e, n) {
                            function l(e) {
                                try {
                                    s(o.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function i(e) {
                                try {
                                    s(o.throw(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function s(n) {
                                var t;
                                n.done
                                    ? e(n.value)
                                    : ((t = n.value),
                                      t instanceof a
                                          ? t
                                          : new a(function (e) {
                                                e(t);
                                            })).then(l, i);
                            }
                            s((o = o.apply(t, r || [])).next());
                        })
                    );
                    var t, r, a, o;
                }),
                o = (0, r.hg)('Folder/createFolder', function (e, n) {
                    return (
                        (t = void 0),
                        (r = void 0),
                        (o = function () {
                            var t, r, a, o;
                            return (function (e, n) {
                                var t,
                                    r,
                                    a,
                                    o,
                                    l = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (o = { next: i(0), throw: i(1), return: i(2) }),
                                    'function' == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function i(i) {
                                    return function (s) {
                                        return (function (i) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; o && ((o = 0), i[0] && (l = 0)), l; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        r &&
                                                            (a =
                                                                2 & i[0]
                                                                    ? r.return
                                                                    : i[0]
                                                                    ? r.throw ||
                                                                      ((a = r.return) && a.call(r),
                                                                      0)
                                                                    : r.next) &&
                                                            !(a = a.call(r, i[1])).done)
                                                    )
                                                        return a;
                                                    switch (
                                                        ((r = 0),
                                                        a && (i = [2 & i[0], a.value]),
                                                        i[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            a = i;
                                                            break;
                                                        case 4:
                                                            return (
                                                                l.label++, { value: i[1], done: !1 }
                                                            );
                                                        case 5:
                                                            l.label++, (r = i[1]), (i = [0]);
                                                            continue;
                                                        case 7:
                                                            (i = l.ops.pop()), l.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (a =
                                                                        (a = l.trys).length > 0 &&
                                                                        a[a.length - 1]) ||
                                                                    (6 !== i[0] && 2 !== i[0])
                                                                )
                                                            ) {
                                                                l = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === i[0] &&
                                                                (!a || (i[1] > a[0] && i[1] < a[3]))
                                                            ) {
                                                                l.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && l.label < a[1]) {
                                                                (l.label = a[1]), (a = i);
                                                                break;
                                                            }
                                                            if (a && l.label < a[2]) {
                                                                (l.label = a[2]), l.ops.push(i);
                                                                break;
                                                            }
                                                            a[2] && l.ops.pop(), l.trys.pop();
                                                            continue;
                                                    }
                                                    i = n.call(e, l);
                                                } catch (e) {
                                                    (i = [6, e]), (r = 0);
                                                } finally {
                                                    t = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return { value: i[0] ? i[1] : void 0, done: !0 };
                                        })([i, s]);
                                    };
                                }
                            })(this, function (l) {
                                switch (l.label) {
                                    case 0:
                                        (t = n.extra), (r = n.rejectWithValue), (l.label = 1);
                                    case 1:
                                        return (
                                            l.trys.push([1, 3, , 4]),
                                            [4, t.api.post('/api/folder/create', e)]
                                        );
                                    case 2:
                                        if (!(a = l.sent()).data) throw new Error();
                                        return [2, a.data];
                                    case 3:
                                        return (o = l.sent()), console.log(o), [2, r('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((a = void 0) || (a = Promise))(function (e, n) {
                            function l(e) {
                                try {
                                    s(o.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function i(e) {
                                try {
                                    s(o.throw(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function s(n) {
                                var t;
                                n.done
                                    ? e(n.value)
                                    : ((t = n.value),
                                      t instanceof a
                                          ? t
                                          : new a(function (e) {
                                                e(t);
                                            })).then(l, i);
                            }
                            s((o = o.apply(t, r || [])).next());
                        })
                    );
                    var t, r, a, o;
                }),
                l = (0, r.hg)('Folder/createFolderManually', function (e, n) {
                    return (
                        (t = void 0),
                        (r = void 0),
                        (o = function () {
                            var t, r, a, o;
                            return (function (e, n) {
                                var t,
                                    r,
                                    a,
                                    o,
                                    l = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (o = { next: i(0), throw: i(1), return: i(2) }),
                                    'function' == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function i(i) {
                                    return function (s) {
                                        return (function (i) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; o && ((o = 0), i[0] && (l = 0)), l; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        r &&
                                                            (a =
                                                                2 & i[0]
                                                                    ? r.return
                                                                    : i[0]
                                                                    ? r.throw ||
                                                                      ((a = r.return) && a.call(r),
                                                                      0)
                                                                    : r.next) &&
                                                            !(a = a.call(r, i[1])).done)
                                                    )
                                                        return a;
                                                    switch (
                                                        ((r = 0),
                                                        a && (i = [2 & i[0], a.value]),
                                                        i[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            a = i;
                                                            break;
                                                        case 4:
                                                            return (
                                                                l.label++, { value: i[1], done: !1 }
                                                            );
                                                        case 5:
                                                            l.label++, (r = i[1]), (i = [0]);
                                                            continue;
                                                        case 7:
                                                            (i = l.ops.pop()), l.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (a =
                                                                        (a = l.trys).length > 0 &&
                                                                        a[a.length - 1]) ||
                                                                    (6 !== i[0] && 2 !== i[0])
                                                                )
                                                            ) {
                                                                l = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === i[0] &&
                                                                (!a || (i[1] > a[0] && i[1] < a[3]))
                                                            ) {
                                                                l.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && l.label < a[1]) {
                                                                (l.label = a[1]), (a = i);
                                                                break;
                                                            }
                                                            if (a && l.label < a[2]) {
                                                                (l.label = a[2]), l.ops.push(i);
                                                                break;
                                                            }
                                                            a[2] && l.ops.pop(), l.trys.pop();
                                                            continue;
                                                    }
                                                    i = n.call(e, l);
                                                } catch (e) {
                                                    (i = [6, e]), (r = 0);
                                                } finally {
                                                    t = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return { value: i[0] ? i[1] : void 0, done: !0 };
                                        })([i, s]);
                                    };
                                }
                            })(this, function (l) {
                                switch (l.label) {
                                    case 0:
                                        (t = n.extra), (r = n.rejectWithValue), (l.label = 1);
                                    case 1:
                                        return (
                                            l.trys.push([1, 3, , 4]),
                                            [4, t.api.post('/api/folder/manual_create', e)]
                                        );
                                    case 2:
                                        if (!(a = l.sent()).data) throw new Error();
                                        return [2, a.data];
                                    case 3:
                                        return (o = l.sent()), console.log(o), [2, r('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((a = void 0) || (a = Promise))(function (e, n) {
                            function l(e) {
                                try {
                                    s(o.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function i(e) {
                                try {
                                    s(o.throw(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function s(n) {
                                var t;
                                n.done
                                    ? e(n.value)
                                    : ((t = n.value),
                                      t instanceof a
                                          ? t
                                          : new a(function (e) {
                                                e(t);
                                            })).then(l, i);
                            }
                            s((o = o.apply(t, r || [])).next());
                        })
                    );
                    var t, r, a, o;
                }),
                i = (0, r.hg)('Folder/fetchFolderById', function (e, n) {
                    return (
                        (t = void 0),
                        (r = void 0),
                        (o = function () {
                            var t, r, a, o;
                            return (function (e, n) {
                                var t,
                                    r,
                                    a,
                                    o,
                                    l = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (o = { next: i(0), throw: i(1), return: i(2) }),
                                    'function' == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function i(i) {
                                    return function (s) {
                                        return (function (i) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; o && ((o = 0), i[0] && (l = 0)), l; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        r &&
                                                            (a =
                                                                2 & i[0]
                                                                    ? r.return
                                                                    : i[0]
                                                                    ? r.throw ||
                                                                      ((a = r.return) && a.call(r),
                                                                      0)
                                                                    : r.next) &&
                                                            !(a = a.call(r, i[1])).done)
                                                    )
                                                        return a;
                                                    switch (
                                                        ((r = 0),
                                                        a && (i = [2 & i[0], a.value]),
                                                        i[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            a = i;
                                                            break;
                                                        case 4:
                                                            return (
                                                                l.label++, { value: i[1], done: !1 }
                                                            );
                                                        case 5:
                                                            l.label++, (r = i[1]), (i = [0]);
                                                            continue;
                                                        case 7:
                                                            (i = l.ops.pop()), l.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (a =
                                                                        (a = l.trys).length > 0 &&
                                                                        a[a.length - 1]) ||
                                                                    (6 !== i[0] && 2 !== i[0])
                                                                )
                                                            ) {
                                                                l = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === i[0] &&
                                                                (!a || (i[1] > a[0] && i[1] < a[3]))
                                                            ) {
                                                                l.label = i[1];
                                                                break;
                                                            }
                                                            if (6 === i[0] && l.label < a[1]) {
                                                                (l.label = a[1]), (a = i);
                                                                break;
                                                            }
                                                            if (a && l.label < a[2]) {
                                                                (l.label = a[2]), l.ops.push(i);
                                                                break;
                                                            }
                                                            a[2] && l.ops.pop(), l.trys.pop();
                                                            continue;
                                                    }
                                                    i = n.call(e, l);
                                                } catch (e) {
                                                    (i = [6, e]), (r = 0);
                                                } finally {
                                                    t = a = 0;
                                                }
                                            if (5 & i[0]) throw i[1];
                                            return { value: i[0] ? i[1] : void 0, done: !0 };
                                        })([i, s]);
                                    };
                                }
                            })(this, function (l) {
                                switch (l.label) {
                                    case 0:
                                        (t = n.extra), (r = n.rejectWithValue), (l.label = 1);
                                    case 1:
                                        return (
                                            l.trys.push([1, 3, , 4]),
                                            [
                                                4,
                                                t.api.get('/api/folder/candidates', {
                                                    params: { folderId: e },
                                                }),
                                            ]
                                        );
                                    case 2:
                                        if (!(a = l.sent()).data) throw new Error();
                                        return [2, a.data];
                                    case 3:
                                        return (o = l.sent()), console.log(o), [2, r('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((a = void 0) || (a = Promise))(function (e, n) {
                            function l(e) {
                                try {
                                    s(o.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function i(e) {
                                try {
                                    s(o.throw(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function s(n) {
                                var t;
                                n.done
                                    ? e(n.value)
                                    : ((t = n.value),
                                      t instanceof a
                                          ? t
                                          : new a(function (e) {
                                                e(t);
                                            })).then(l, i);
                            }
                            s((o = o.apply(t, r || [])).next());
                        })
                    );
                    var t, r, a, o;
                }),
                s = (0, r.oM)({
                    name: 'FolderSlice',
                    initialState: { data: void 0, isLoading: !1, error: void 0 },
                    reducers: {},
                    extraReducers: function (e) {
                        e.addCase(o.pending, function (e) {
                            (e.error = void 0), (e.isLoading = !0);
                        })
                            .addCase(o.fulfilled, function (e) {
                                e.isLoading = !1;
                            })
                            .addCase(o.rejected, function (e, n) {
                                (e.isLoading = !1), (e.error = n.payload);
                            })
                            .addCase(l.pending, function (e) {
                                (e.error = void 0), (e.isLoading = !0);
                            })
                            .addCase(l.fulfilled, function (e) {
                                e.isLoading = !1;
                            })
                            .addCase(l.rejected, function (e, n) {
                                (e.isLoading = !1), (e.error = n.payload);
                            })
                            .addCase(i.pending, function (e) {
                                (e.error = void 0), (e.isLoading = !0);
                            })
                            .addCase(i.fulfilled, function (e, n) {
                                (e.isLoading = !1), (e.data = n.payload);
                            })
                            .addCase(i.rejected, function (e, n) {
                                (e.isLoading = !1), (e.error = n.payload);
                            })
                            .addCase(a.pending, function (e) {
                                (e.error = void 0), (e.isLoading = !0);
                            })
                            .addCase(a.fulfilled, function (e) {
                                e.isLoading = !1;
                            })
                            .addCase(a.rejected, function (e, n) {
                                (e.isLoading = !1), (e.error = n.payload);
                            });
                    },
                }),
                c = (s.actions, s.reducer),
                u = function (e) {
                    var n;
                    return null === (n = e.folder) || void 0 === n ? void 0 : n.data;
                },
                d = function (e) {
                    var n;
                    return null === (n = e.folder) || void 0 === n ? void 0 : n.isLoading;
                },
                f = t(8608).p.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            fetchFolders: e.query({
                                query: function () {
                                    return { url: '/api/folder/fetch_all' };
                                },
                            }),
                        };
                    },
                }).useFetchFoldersQuery,
                p = t(5893),
                h = t(4807),
                v = t(7294),
                b = t(7543),
                x = t(7828),
                y = t(2469),
                g = t(1222),
                m = t(9250),
                w = t(4382),
                j = t(7820),
                k = t(2672),
                Z = t(8832),
                C = t(3379),
                O = t.n(C),
                P = t(7795),
                L = t.n(P),
                N = t(569),
                F = t.n(N),
                S = t(3565),
                A = t.n(S),
                E = t(9216),
                T = t.n(E),
                M = t(4589),
                I = t.n(M),
                W = t(568),
                V = {};
            (V.styleTagTransform = I()),
                (V.setAttributes = A()),
                (V.insert = F().bind(null, 'head')),
                (V.domAPI = L()),
                (V.insertStyleElement = T()),
                O()(W.Z, V);
            const z = W.Z && W.Z.locals ? W.Z.locals : void 0;
            var _ = function () {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                },
                B = (0, v.memo)(function (e) {
                    var n = e.className,
                        t = e.folder,
                        r = e.isFirst,
                        o = e.refreshFolderList,
                        l = (0, v.useRef)(null),
                        i = (0, m.s0)(),
                        s = (0, k.T)(),
                        c = (0, Z.P)().pending,
                        u = (0, v.useState)(25),
                        d = u[0],
                        f = u[1],
                        C = (0, v.useState)((0, p.jsx)(y.yr4, {})),
                        O = C[0],
                        P = C[1],
                        L = (0, v.useCallback)(
                            function () {
                                25 === d
                                    ? (f(175),
                                      P(
                                          (0, p.jsxs)(p.Fragment, {
                                              children: [
                                                  (0, p.jsx)('p', { children: 'Распределения' }),
                                                  (0, p.jsx)(y.LZ3, {}),
                                              ],
                                          }),
                                      ))
                                    : (f(25), P((0, p.jsx)(y.yr4, {})));
                            },
                            [d],
                        ),
                        N = (0, v.useCallback)(
                            function () {
                                i(
                                    ''
                                        .concat(g.h3.allocation, '?folder=')
                                        .concat(null == t ? void 0 : t.title),
                                );
                            },
                            [t, i],
                        ),
                        F = (0, v.useCallback)(
                            function () {
                                i(g.h3.creategroup);
                            },
                            [i],
                        ),
                        S = (0, v.useCallback)(
                            function () {
                                i(
                                    ''
                                        .concat(g.h3.folderoverview, '/')
                                        .concat(null == t ? void 0 : t.id),
                                );
                            },
                            [null == t ? void 0 : t.id, i],
                        ),
                        A = (0, v.useCallback)(
                            function (e) {
                                return (
                                    (n = void 0),
                                    (t = void 0),
                                    (l = function () {
                                        return (function (e, n) {
                                            var t,
                                                r,
                                                a,
                                                o,
                                                l = {
                                                    label: 0,
                                                    sent: function () {
                                                        if (1 & a[0]) throw a[1];
                                                        return a[1];
                                                    },
                                                    trys: [],
                                                    ops: [],
                                                };
                                            return (
                                                (o = { next: i(0), throw: i(1), return: i(2) }),
                                                'function' == typeof Symbol &&
                                                    (o[Symbol.iterator] = function () {
                                                        return this;
                                                    }),
                                                o
                                            );
                                            function i(i) {
                                                return function (s) {
                                                    return (function (i) {
                                                        if (t)
                                                            throw new TypeError(
                                                                'Generator is already executing.',
                                                            );
                                                        for (; o && ((o = 0), i[0] && (l = 0)), l; )
                                                            try {
                                                                if (
                                                                    ((t = 1),
                                                                    r &&
                                                                        (a =
                                                                            2 & i[0]
                                                                                ? r.return
                                                                                : i[0]
                                                                                ? r.throw ||
                                                                                  ((a = r.return) &&
                                                                                      a.call(r),
                                                                                  0)
                                                                                : r.next) &&
                                                                        !(a = a.call(r, i[1])).done)
                                                                )
                                                                    return a;
                                                                switch (
                                                                    ((r = 0),
                                                                    a && (i = [2 & i[0], a.value]),
                                                                    i[0])
                                                                ) {
                                                                    case 0:
                                                                    case 1:
                                                                        a = i;
                                                                        break;
                                                                    case 4:
                                                                        return (
                                                                            l.label++,
                                                                            {
                                                                                value: i[1],
                                                                                done: !1,
                                                                            }
                                                                        );
                                                                    case 5:
                                                                        l.label++,
                                                                            (r = i[1]),
                                                                            (i = [0]);
                                                                        continue;
                                                                    case 7:
                                                                        (i = l.ops.pop()),
                                                                            l.trys.pop();
                                                                        continue;
                                                                    default:
                                                                        if (
                                                                            !(
                                                                                (a =
                                                                                    (a = l.trys)
                                                                                        .length >
                                                                                        0 &&
                                                                                    a[
                                                                                        a.length - 1
                                                                                    ]) ||
                                                                                (6 !== i[0] &&
                                                                                    2 !== i[0])
                                                                            )
                                                                        ) {
                                                                            l = 0;
                                                                            continue;
                                                                        }
                                                                        if (
                                                                            3 === i[0] &&
                                                                            (!a ||
                                                                                (i[1] > a[0] &&
                                                                                    i[1] < a[3]))
                                                                        ) {
                                                                            l.label = i[1];
                                                                            break;
                                                                        }
                                                                        if (
                                                                            6 === i[0] &&
                                                                            l.label < a[1]
                                                                        ) {
                                                                            (l.label = a[1]),
                                                                                (a = i);
                                                                            break;
                                                                        }
                                                                        if (a && l.label < a[2]) {
                                                                            (l.label = a[2]),
                                                                                l.ops.push(i);
                                                                            break;
                                                                        }
                                                                        a[2] && l.ops.pop(),
                                                                            l.trys.pop();
                                                                        continue;
                                                                }
                                                                i = n.call(e, l);
                                                            } catch (e) {
                                                                (i = [6, e]), (r = 0);
                                                            } finally {
                                                                t = a = 0;
                                                            }
                                                        if (5 & i[0]) throw i[1];
                                                        return {
                                                            value: i[0] ? i[1] : void 0,
                                                            done: !0,
                                                        };
                                                    })([i, s]);
                                                };
                                            }
                                        })(this, function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    return e
                                                        ? [
                                                              4,
                                                              c(s(a(e)), {
                                                                  loadingMessage:
                                                                      'Удаляем группу...',
                                                                  successMessage: 'Группа удалена!',
                                                              }),
                                                          ]
                                                        : [3, 2];
                                                case 1:
                                                    'fulfilled' === n.sent().meta.requestStatus &&
                                                        (null == o || o()),
                                                        (n.label = 2);
                                                case 2:
                                                    return [2];
                                            }
                                        });
                                    }),
                                    new ((r = void 0) || (r = Promise))(function (e, a) {
                                        function o(e) {
                                            try {
                                                s(l.next(e));
                                            } catch (e) {
                                                a(e);
                                            }
                                        }
                                        function i(e) {
                                            try {
                                                s(l.throw(e));
                                            } catch (e) {
                                                a(e);
                                            }
                                        }
                                        function s(n) {
                                            var t;
                                            n.done
                                                ? e(n.value)
                                                : ((t = n.value),
                                                  t instanceof r
                                                      ? t
                                                      : new r(function (e) {
                                                            e(t);
                                                        })).then(o, i);
                                        }
                                        s((l = l.apply(n, t || [])).next());
                                    })
                                );
                                var n, t, r, l;
                            },
                            [s, c, o],
                        ),
                        E = (0, v.useMemo)(
                            function () {
                                return [
                                    {
                                        label: 'Удалить из группы',
                                        icon: (0, p.jsx)(y.XHJ, { className: z.icon }),
                                        command: function (e) {
                                            e.originalEvent.preventDefault(),
                                                null == A || A(null == t ? void 0 : t.id);
                                        },
                                    },
                                ];
                            },
                            [null == t ? void 0 : t.id, A],
                        );
                    return r
                        ? (0, p.jsx)(
                              'div',
                              _(
                                  { className: (0, h.A)(z.wrapper, {}, [n]) },
                                  {
                                      children: (0, p.jsxs)(
                                          b.g,
                                          _(
                                              {
                                                  maxW: !0,
                                                  justify: 'between',
                                                  className: z.FolderCard,
                                              },
                                              {
                                                  children: [
                                                      (0, p.jsx)(x.xv, {
                                                          title: 'Создать новую группу',
                                                      }),
                                                      (0, p.jsx)(
                                                          j.z,
                                                          _(
                                                              { variant: 'clear', onClick: F },
                                                              {
                                                                  children: (0, p.jsx)(y.SPS, {
                                                                      className: z.addIcon,
                                                                  }),
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
                        : (0, p.jsxs)(
                              'div',
                              _(
                                  { className: (0, h.A)(z.wrapper, {}, [n]) },
                                  {
                                      children: [
                                          (0, p.jsx)(w.x, { model: E, ref: l }),
                                          (0, p.jsxs)(
                                              b.g,
                                              _(
                                                  {
                                                      onContextMenu: function (e) {
                                                          var n;
                                                          return null === (n = l.current) ||
                                                              void 0 === n
                                                              ? void 0
                                                              : n.show(e);
                                                      },
                                                      maxW: !0,
                                                      justify: 'between',
                                                      className: z.FolderCard,
                                                  },
                                                  {
                                                      children: [
                                                          (0, p.jsx)(x.xv, {
                                                              className: z.header,
                                                              onClick: S,
                                                              title: null == t ? void 0 : t.title,
                                                          }),
                                                          (0, p.jsxs)(
                                                              b.g,
                                                              _(
                                                                  { maxW: !0 },
                                                                  {
                                                                      children: [
                                                                          (0, p.jsxs)(
                                                                              b.g,
                                                                              _(
                                                                                  { maxW: !0 },
                                                                                  {
                                                                                      children: [
                                                                                          (0,
                                                                                          p.jsx)(
                                                                                              x.xv,
                                                                                              {
                                                                                                  size: 'extrasmall',
                                                                                                  text: 'Критерий группировки',
                                                                                                  align: 'left',
                                                                                                  className:
                                                                                                      z.text,
                                                                                              },
                                                                                          ),
                                                                                          (0,
                                                                                          p.jsx)(
                                                                                              x.xv,
                                                                                              {
                                                                                                  size: 'extrasmall',
                                                                                                  text:
                                                                                                      null ==
                                                                                                      t
                                                                                                          ? void 0
                                                                                                          : t.groupingRule,
                                                                                              },
                                                                                          ),
                                                                                      ],
                                                                                  },
                                                                              ),
                                                                          ),
                                                                          (0, p.jsx)(
                                                                              b.U,
                                                                              _(
                                                                                  {
                                                                                      gap: '8',
                                                                                      justify:
                                                                                          'center',
                                                                                      onMouseEnter:
                                                                                          L,
                                                                                      onMouseLeave:
                                                                                          L,
                                                                                      onClick: N,
                                                                                      style: {
                                                                                          width: ''.concat(
                                                                                              d,
                                                                                              'px',
                                                                                          ),
                                                                                      },
                                                                                      className:
                                                                                          z.expand,
                                                                                  },
                                                                                  { children: O },
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
                }),
                G = t(3877),
                q = {};
            (q.styleTagTransform = I()),
                (q.setAttributes = A()),
                (q.insert = F().bind(null, 'head')),
                (q.domAPI = L()),
                (q.insertStyleElement = T()),
                O()(G.Z, q);
            const R = G.Z && G.Z.locals ? G.Z.locals : void 0;
            var U = function () {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                },
                D = (0, v.memo)(function (e) {
                    var n = e.className,
                        t = e.folders,
                        r = e.refreshFolderList;
                    return (0, p.jsxs)(
                        b.U,
                        U(
                            { gap: '32', className: (0, h.A)(R.FoldersList, {}, [n]) },
                            {
                                children: [
                                    (0, p.jsx)(B, { isFirst: !0 }),
                                    (null == t ? void 0 : t.length)
                                        ? t.map(function (e) {
                                              return (0,
                                              p.jsx)(B, { refreshFolderList: r, folder: e }, e.id);
                                          })
                                        : (0, p.jsx)(x.xv, {
                                              title: 'Пока групп нет',
                                              text: 'Но Вы можете их создать!',
                                          }),
                                ],
                            },
                        ),
                    );
                }),
                J = t(4710),
                X = t(2025),
                H = {};
            (H.styleTagTransform = I()),
                (H.setAttributes = A()),
                (H.insert = F().bind(null, 'head')),
                (H.domAPI = L()),
                (H.insertStyleElement = T()),
                O()(X.Z, H);
            const Q = X.Z && X.Z.locals ? X.Z.locals : void 0;
            var $ = function () {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                },
                K = (0, v.memo)(function (e) {
                    var n,
                        t = e.className,
                        r = e.handleClick,
                        a = e.isCandidateAdding,
                        o = f(0, { refetchOnMountOrArgChange: !0 }),
                        l = o.data,
                        i = o.isLoading;
                    return i
                        ? (0, p.jsx)(
                              b.g,
                              $(
                                  { maxW: !0, className: (0, h.A)(Q.VerticalFolderList, {}, [t]) },
                                  {
                                      children: new Array(4).fill(0).map(function (e, n) {
                                          return (0,
                                          p.jsx)(J.O, { width: '100%', height: '60px' }, n);
                                      }),
                                  },
                              ),
                          )
                        : i || (null == l ? void 0 : l.length)
                        ? (0, p.jsx)(
                              b.g,
                              $(
                                  {
                                      gap: '8',
                                      maxW: !0,
                                      className: (0, h.A)(
                                          Q.VerticalFolderList,
                                          ((n = {}), (n[Q.disabled] = a), n),
                                          [t],
                                      ),
                                  },
                                  {
                                      children:
                                          null == l
                                              ? void 0
                                              : l.map(function (e) {
                                                    var n;
                                                    return (0, p.jsxs)(
                                                        b.U,
                                                        $(
                                                            {
                                                                onClick: a
                                                                    ? function () {}
                                                                    : function () {
                                                                          return r(e.id);
                                                                      },
                                                                className: Q.card,
                                                                maxW: !0,
                                                                justify: 'between',
                                                            },
                                                            {
                                                                children: [
                                                                    (0, p.jsx)(x.xv, {
                                                                        size: 'small',
                                                                        title: e.title,
                                                                    }),
                                                                    (0, p.jsx)(x.xv, {
                                                                        size: 'small',
                                                                        text: 'Участники: '.concat(
                                                                            (null ===
                                                                                (n =
                                                                                    e.participants) ||
                                                                            void 0 === n
                                                                                ? void 0
                                                                                : n.length) ||
                                                                                ' пока нет',
                                                                        ),
                                                                    }),
                                                                ],
                                                            },
                                                        ),
                                                    );
                                                }),
                                  },
                              ),
                          )
                        : (0, p.jsx)(
                              b.g,
                              $(
                                  { maxW: !0, className: (0, h.A)(Q.VerticalFolderList, {}, [t]) },
                                  {
                                      children: (0, p.jsx)(x.xv, {
                                          title: 'Прежде, чем это сделать, нужно создать хотя бы ожну группу',
                                      }),
                                  },
                              ),
                          );
                });
        },
        8832: (e, n, t) => {
            t.d(n, { P: () => a });
            var r = t(582);
            function a(e) {
                return {
                    success: function (n) {
                        return r.ZP.success(n, e);
                    },
                    error: function (n) {
                        return r.ZP.error(n, e);
                    },
                    pending: function (n, t) {
                        return r.ZP.promise(
                            n,
                            {
                                loading:
                                    (null == t ? void 0 : t.loadingMessage) ||
                                    'Немного подождите...',
                                success:
                                    (null == t ? void 0 : t.successMessage) ||
                                    'Ура! Все получилось!',
                                error:
                                    (null == t ? void 0 : t.errorMessage) ||
                                    'Что-то пошло не так...',
                            },
                            e,
                        );
                    },
                };
            }
        },
        577: (e, n, t) => {
            t.d(n, { V: () => W });
            var r = t(5893),
                a = t(4807),
                o = t(7294),
                l = t(3379),
                i = t.n(l),
                s = t(7795),
                c = t.n(s),
                u = t(569),
                d = t.n(u),
                f = t(3565),
                p = t.n(f),
                h = t(9216),
                v = t.n(h),
                b = t(4589),
                x = t.n(b),
                y = t(1864),
                g = {};
            (g.styleTagTransform = x()),
                (g.setAttributes = p()),
                (g.insert = d().bind(null, 'head')),
                (g.domAPI = c()),
                (g.insertStyleElement = v()),
                i()(y.Z, g);
            const m = y.Z && y.Z.locals ? y.Z.locals : void 0;
            var w = function () {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                },
                j = (0, o.memo)(function (e) {
                    var n = e.className,
                        t = e.children,
                        o = (function (e, n) {
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
                    r.jsx)('div', w({ className: (0, a.A)(m.Card, {}, [n]) }, o, { children: t }));
                }),
                k = t(7828),
                Z = t(7543),
                C = t(5020),
                O = t(2469),
                P = t(9250),
                L = t(4498),
                N = {};
            (N.styleTagTransform = x()),
                (N.setAttributes = p()),
                (N.insert = d().bind(null, 'head')),
                (N.domAPI = c()),
                (N.insertStyleElement = v()),
                i()(L.Z, N);
            const F = L.Z && L.Z.locals ? L.Z.locals : void 0;
            var S = function () {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                },
                A = (0, o.memo)(function (e) {
                    var n = e.className,
                        t = e.path,
                        l = (0, o.useMemo)(function () {
                            return { url: '/', icon: (0, r.jsx)(O.tvw, {}) };
                        }, []),
                        i = (0, P.s0)();
                    return (0, r.jsx)(C.c, {
                        model: t.map(function (e) {
                            return S(S({}, e), {
                                command: function (n) {
                                    n.originalEvent.preventDefault(), i(e.url || '');
                                },
                            });
                        }),
                        home: l,
                        className: (0, a.A)(F.Breadcrumb, {}, [n]),
                    });
                }),
                E = t(5559),
                T = {};
            (T.styleTagTransform = x()),
                (T.setAttributes = p()),
                (T.insert = d().bind(null, 'head')),
                (T.domAPI = c()),
                (T.insertStyleElement = v()),
                i()(E.Z, T);
            const M = E.Z && E.Z.locals ? E.Z.locals : void 0;
            var I = function () {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, r = arguments.length; t < r; t++)
                                    for (var a in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                },
                W = (0, o.memo)(function (e) {
                    var n = e.className,
                        t = e.title,
                        o = e.breadcrumbPath;
                    return (0,
                    r.jsxs)(Z.g, I({ justify: 'start', className: (0, a.A)(M.PageTitle, {}, [n]) }, { children: [(null == o ? void 0 : o.length) && (0, r.jsx)(A, { className: M.bc, path: o }), (0, r.jsx)(j, I({ className: M.card }, { children: (0, r.jsx)(k.xv, { align: 'left', size: 'large', className: M.textBlock, title: t }) }))] }));
                });
        },
        568: (e, n, t) => {
            t.d(n, { Z: () => i });
            var r = t(8081),
                a = t.n(r),
                o = t(3645),
                l = t.n(o)()(a());
            l.push([
                e.id,
                '.d20c1{width:390px;height:500px;flex-shrink:0}.b5684{height:100%;padding:30px;border-radius:16px;flex-grow:1;outline:4px solid #b6f09c}.bb134 p{font-weight:bold}.e0efd{cursor:pointer;height:36px;padding:2px;border-radius:8px;background:gray;font-size:16px;transition:200ms;overflow:hidden;white-space:nowrap;margin-top:20px}.e0efd:hover{color:#000;background:#b6f09c;transform:scale(1.05)}.ea01b{width:75px;height:75px;color:#b6f09c;transition:200ms}.ea01b:hover{transform:scale(1.05)}.e595c{cursor:pointer}.ead8a{margin-right:10px}',
                '',
            ]),
                (l.locals = {
                    wrapper: 'd20c1',
                    FolderCard: 'b5684',
                    text: 'bb134',
                    expand: 'e0efd',
                    addIcon: 'ea01b',
                    header: 'e595c',
                    icon: 'ead8a',
                });
            const i = l;
        },
        3877: (e, n, t) => {
            t.d(n, { Z: () => i });
            var r = t(8081),
                a = t.n(r),
                o = t(3645),
                l = t.n(o)()(a());
            l.push([e.id, '.fcfdd{padding:10px;overflow-x:auto}', '']),
                (l.locals = { FoldersList: 'fcfdd' });
            const i = l;
        },
        2025: (e, n, t) => {
            t.d(n, { Z: () => i });
            var r = t(8081),
                a = t.n(r),
                o = t(3645),
                l = t.n(o)()(a());
            l.push([
                e.id,
                '.de3de{padding:10px 20px;border:2px solid var(--text-color);border-radius:8px;transition:200ms}.de3de:hover{cursor:pointer;transform:translateX(-10px)}.d191f{cursor:not-allowed;filter:blur(2px)}.d191f *{filter:blur(2px)}',
                '',
            ]),
                (l.locals = { card: 'de3de', disabled: 'd191f' });
            const i = l;
        },
        4498: (e, n, t) => {
            t.d(n, { Z: () => i });
            var r = t(8081),
                a = t.n(r),
                o = t(3645),
                l = t.n(o)()(a());
            l.push([e.id, '', '']), (l.locals = {});
            const i = l;
        },
        1864: (e, n, t) => {
            t.d(n, { Z: () => i });
            var r = t(8081),
                a = t.n(r),
                o = t(3645),
                l = t.n(o)()(a());
            l.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (l.locals = { Card: 'd2057' });
            const i = l;
        },
        5559: (e, n, t) => {
            t.d(n, { Z: () => i });
            var r = t(8081),
                a = t.n(r),
                o = t(3645),
                l = t.n(o)()(a());
            l.push([
                e.id,
                '.ecd81{margin:0 0 40px;max-width:100%}.f2d6a h1{margin:0}.b6604{margin-bottom:20px}',
                '',
            ]),
                (l.locals = { card: 'ecd81', textBlock: 'f2d6a', bc: 'b6604' });
            const i = l;
        },
    },
]);
