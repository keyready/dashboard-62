'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [864],
    {
        3223: (e, n, t) => {
            t.d(n, { RH: () => W, i4: () => G, wH: () => i, dv: () => o });
            var a = t(4268),
                r = (0, a.hg)('Candidate/fetchCandidateById', function (e, n) {
                    return (
                        (t = void 0),
                        (a = void 0),
                        (i = function () {
                            var e, t, a, r, i;
                            return (function (e, n) {
                                var t,
                                    a,
                                    r,
                                    i,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & r[0]) throw r[1];
                                            return r[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = { next: l(0), throw: l(1), return: l(2) }),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function l(l) {
                                    return function (s) {
                                        return (function (l) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; i && ((i = 0), l[0] && (o = 0)), o; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        a &&
                                                            (r =
                                                                2 & l[0]
                                                                    ? a.return
                                                                    : l[0]
                                                                    ? a.throw ||
                                                                      ((r = a.return) && r.call(a),
                                                                      0)
                                                                    : a.next) &&
                                                            !(r = r.call(a, l[1])).done)
                                                    )
                                                        return r;
                                                    switch (
                                                        ((a = 0),
                                                        r && (l = [2 & l[0], r.value]),
                                                        l[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            r = l;
                                                            break;
                                                        case 4:
                                                            return (
                                                                o.label++, { value: l[1], done: !1 }
                                                            );
                                                        case 5:
                                                            o.label++, (a = l[1]), (l = [0]);
                                                            continue;
                                                        case 7:
                                                            (l = o.ops.pop()), o.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (r =
                                                                        (r = o.trys).length > 0 &&
                                                                        r[r.length - 1]) ||
                                                                    (6 !== l[0] && 2 !== l[0])
                                                                )
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === l[0] &&
                                                                (!r || (l[1] > r[0] && l[1] < r[3]))
                                                            ) {
                                                                o.label = l[1];
                                                                break;
                                                            }
                                                            if (6 === l[0] && o.label < r[1]) {
                                                                (o.label = r[1]), (r = l);
                                                                break;
                                                            }
                                                            if (r && o.label < r[2]) {
                                                                (o.label = r[2]), o.ops.push(l);
                                                                break;
                                                            }
                                                            r[2] && o.ops.pop(), o.trys.pop();
                                                            continue;
                                                    }
                                                    l = n.call(e, o);
                                                } catch (e) {
                                                    (l = [6, e]), (a = 0);
                                                } finally {
                                                    t = r = 0;
                                                }
                                            if (5 & l[0]) throw l[1];
                                            return { value: l[0] ? l[1] : void 0, done: !0 };
                                        })([l, s]);
                                    };
                                }
                            })(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        (e = n.extra),
                                            (t = n.rejectWithValue),
                                            (a = n.dispatch),
                                            (o.label = 1);
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, e.api.get('/url')];
                                    case 2:
                                        if (!(r = o.sent()).data) throw new Error();
                                        return a(s.setCandidateData(r.data)), [2, r.data];
                                    case 3:
                                        return (i = o.sent()), console.log(i), [2, t('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((r = void 0) || (r = Promise))(function (e, n) {
                            function o(e) {
                                try {
                                    s(i.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function l(e) {
                                try {
                                    s(i.throw(e));
                                } catch (e) {
                                    n(e);
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
                                            })).then(o, l);
                            }
                            s((i = i.apply(t, a || [])).next());
                        })
                    );
                    var t, a, r, i;
                }),
                i = (0, a.hg)('Candidate/defineCandidateFolder', function (e, n) {
                    return (
                        (t = void 0),
                        (a = void 0),
                        (i = function () {
                            var t, a, r, i;
                            return (function (e, n) {
                                var t,
                                    a,
                                    r,
                                    i,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & r[0]) throw r[1];
                                            return r[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = { next: l(0), throw: l(1), return: l(2) }),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function l(l) {
                                    return function (s) {
                                        return (function (l) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; i && ((i = 0), l[0] && (o = 0)), o; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        a &&
                                                            (r =
                                                                2 & l[0]
                                                                    ? a.return
                                                                    : l[0]
                                                                    ? a.throw ||
                                                                      ((r = a.return) && r.call(a),
                                                                      0)
                                                                    : a.next) &&
                                                            !(r = r.call(a, l[1])).done)
                                                    )
                                                        return r;
                                                    switch (
                                                        ((a = 0),
                                                        r && (l = [2 & l[0], r.value]),
                                                        l[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            r = l;
                                                            break;
                                                        case 4:
                                                            return (
                                                                o.label++, { value: l[1], done: !1 }
                                                            );
                                                        case 5:
                                                            o.label++, (a = l[1]), (l = [0]);
                                                            continue;
                                                        case 7:
                                                            (l = o.ops.pop()), o.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (r =
                                                                        (r = o.trys).length > 0 &&
                                                                        r[r.length - 1]) ||
                                                                    (6 !== l[0] && 2 !== l[0])
                                                                )
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === l[0] &&
                                                                (!r || (l[1] > r[0] && l[1] < r[3]))
                                                            ) {
                                                                o.label = l[1];
                                                                break;
                                                            }
                                                            if (6 === l[0] && o.label < r[1]) {
                                                                (o.label = r[1]), (r = l);
                                                                break;
                                                            }
                                                            if (r && o.label < r[2]) {
                                                                (o.label = r[2]), o.ops.push(l);
                                                                break;
                                                            }
                                                            r[2] && o.ops.pop(), o.trys.pop();
                                                            continue;
                                                    }
                                                    l = n.call(e, o);
                                                } catch (e) {
                                                    (l = [6, e]), (a = 0);
                                                } finally {
                                                    t = r = 0;
                                                }
                                            if (5 & l[0]) throw l[1];
                                            return { value: l[0] ? l[1] : void 0, done: !0 };
                                        })([l, s]);
                                    };
                                }
                            })(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        (t = n.extra), (a = n.rejectWithValue), (o.label = 1);
                                    case 1:
                                        return (
                                            o.trys.push([1, 3, , 4]),
                                            [4, t.api.post('/api/candidate/define', e)]
                                        );
                                    case 2:
                                        if (!(r = o.sent()).data) throw new Error();
                                        return [2, r.data];
                                    case 3:
                                        return (i = o.sent()), console.log(i), [2, a('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((r = void 0) || (r = Promise))(function (e, n) {
                            function o(e) {
                                try {
                                    s(i.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function l(e) {
                                try {
                                    s(i.throw(e));
                                } catch (e) {
                                    n(e);
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
                                            })).then(o, l);
                            }
                            s((i = i.apply(t, a || [])).next());
                        })
                    );
                    var t, a, r, i;
                }),
                o = (0, a.hg)('Candidate/deleteCandidateFolder', function (e, n) {
                    return (
                        (t = void 0),
                        (a = void 0),
                        (i = function () {
                            var t, a, r, i;
                            return (function (e, n) {
                                var t,
                                    a,
                                    r,
                                    i,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & r[0]) throw r[1];
                                            return r[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = { next: l(0), throw: l(1), return: l(2) }),
                                    'function' == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function l(l) {
                                    return function (s) {
                                        return (function (l) {
                                            if (t)
                                                throw new TypeError(
                                                    'Generator is already executing.',
                                                );
                                            for (; i && ((i = 0), l[0] && (o = 0)), o; )
                                                try {
                                                    if (
                                                        ((t = 1),
                                                        a &&
                                                            (r =
                                                                2 & l[0]
                                                                    ? a.return
                                                                    : l[0]
                                                                    ? a.throw ||
                                                                      ((r = a.return) && r.call(a),
                                                                      0)
                                                                    : a.next) &&
                                                            !(r = r.call(a, l[1])).done)
                                                    )
                                                        return r;
                                                    switch (
                                                        ((a = 0),
                                                        r && (l = [2 & l[0], r.value]),
                                                        l[0])
                                                    ) {
                                                        case 0:
                                                        case 1:
                                                            r = l;
                                                            break;
                                                        case 4:
                                                            return (
                                                                o.label++, { value: l[1], done: !1 }
                                                            );
                                                        case 5:
                                                            o.label++, (a = l[1]), (l = [0]);
                                                            continue;
                                                        case 7:
                                                            (l = o.ops.pop()), o.trys.pop();
                                                            continue;
                                                        default:
                                                            if (
                                                                !(
                                                                    (r =
                                                                        (r = o.trys).length > 0 &&
                                                                        r[r.length - 1]) ||
                                                                    (6 !== l[0] && 2 !== l[0])
                                                                )
                                                            ) {
                                                                o = 0;
                                                                continue;
                                                            }
                                                            if (
                                                                3 === l[0] &&
                                                                (!r || (l[1] > r[0] && l[1] < r[3]))
                                                            ) {
                                                                o.label = l[1];
                                                                break;
                                                            }
                                                            if (6 === l[0] && o.label < r[1]) {
                                                                (o.label = r[1]), (r = l);
                                                                break;
                                                            }
                                                            if (r && o.label < r[2]) {
                                                                (o.label = r[2]), o.ops.push(l);
                                                                break;
                                                            }
                                                            r[2] && o.ops.pop(), o.trys.pop();
                                                            continue;
                                                    }
                                                    l = n.call(e, o);
                                                } catch (e) {
                                                    (l = [6, e]), (a = 0);
                                                } finally {
                                                    t = r = 0;
                                                }
                                            if (5 & l[0]) throw l[1];
                                            return { value: l[0] ? l[1] : void 0, done: !0 };
                                        })([l, s]);
                                    };
                                }
                            })(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        (t = n.extra), (a = n.rejectWithValue), (o.label = 1);
                                    case 1:
                                        return (
                                            o.trys.push([1, 3, , 4]),
                                            [4, t.api.post('/api/candidate/delete', e)]
                                        );
                                    case 2:
                                        if (!(r = o.sent()).data) throw new Error();
                                        return [2, r.data];
                                    case 3:
                                        return (i = o.sent()), console.log(i), [2, a('error')];
                                    case 4:
                                        return [2];
                                }
                            });
                        }),
                        new ((r = void 0) || (r = Promise))(function (e, n) {
                            function o(e) {
                                try {
                                    s(i.next(e));
                                } catch (e) {
                                    n(e);
                                }
                            }
                            function l(e) {
                                try {
                                    s(i.throw(e));
                                } catch (e) {
                                    n(e);
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
                                            })).then(o, l);
                            }
                            s((i = i.apply(t, a || [])).next());
                        })
                    );
                    var t, a, r, i;
                }),
                l = (0, a.oM)({
                    name: 'CandidateSlice',
                    initialState: { isLoading: !1, error: void 0 },
                    reducers: {
                        setCandidateData: function (e, n) {
                            e.data = n.payload;
                        },
                    },
                    extraReducers: function (e) {
                        e.addCase(r.pending, function (e) {
                            (e.error = void 0), (e.isLoading = !0);
                        })
                            .addCase(r.fulfilled, function (e, n) {
                                (e.isLoading = !1), (e.data = n.payload);
                            })
                            .addCase(r.rejected, function (e, n) {
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
                            .addCase(o.pending, function (e) {
                                (e.error = void 0), (e.isLoading = !0);
                            })
                            .addCase(o.fulfilled, function (e, n) {
                                (e.isLoading = !1), (e.data = n.payload);
                            })
                            .addCase(o.rejected, function (e, n) {
                                (e.isLoading = !1), (e.error = n.payload);
                            });
                    },
                }),
                s = l.actions,
                c = (l.reducer, t(5893)),
                d = t(4807),
                u = t(7294),
                f = t(3379),
                p = t.n(f),
                h = t(7795),
                b = t.n(h),
                x = t(569),
                g = t.n(x),
                m = t(3565),
                v = t.n(m),
                y = t(9216),
                w = t.n(y),
                j = t(4589),
                C = t.n(j),
                k = t(6526),
                Z = {};
            (Z.styleTagTransform = C()),
                (Z.setAttributes = v()),
                (Z.insert = g().bind(null, 'head')),
                (Z.domAPI = b()),
                (Z.insertStyleElement = w()),
                p()(k.Z, Z),
                k.Z && k.Z.locals && k.Z.locals;
            var S = t(7543),
                A = t(7828),
                T = t(4382),
                P = t(7074),
                E = t(2469),
                N = t(1550),
                O = {};
            (O.styleTagTransform = C()),
                (O.setAttributes = v()),
                (O.insert = g().bind(null, 'head')),
                (O.domAPI = b()),
                (O.insertStyleElement = w()),
                p()(N.Z, O);
            const z = N.Z && N.Z.locals ? N.Z.locals : void 0;
            var L = function () {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, a = arguments.length; t < a; t++)
                                    for (var r in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                },
                W = (0, u.memo)(function (e) {
                    var n = e.className,
                        t = e.candidate,
                        a = e.handleCandidateDelete,
                        r = (0, u.useRef)(null),
                        i = (0, u.useMemo)(
                            function () {
                                return [
                                    {
                                        label: 'Удалить из группы',
                                        icon: (0, c.jsx)(E.XHJ, { className: z.icon }),
                                        command: function (e) {
                                            e.originalEvent.preventDefault(), null == a || a(t.id);
                                        },
                                    },
                                ];
                            },
                            [t.id, a],
                        );
                    return (0, c.jsxs)(
                        S.g,
                        L(
                            {
                                onContextMenu: function (e) {
                                    var n;
                                    return null === (n = r.current) || void 0 === n
                                        ? void 0
                                        : n.show(e);
                                },
                                align: 'center',
                                maxW: !0,
                                className: (0, d.A)(z.candCard, {}, [n]),
                            },
                            {
                                children: [
                                    (0, c.jsx)(T.x, { model: i, ref: r }),
                                    (0, c.jsx)(
                                        P.u,
                                        L(
                                            {
                                                showDelay: 300,
                                                mouseTrack: !0,
                                                mouseTrackLeft: 10,
                                                target: '.tooltip-preview',
                                            },
                                            {
                                                children: (0, c.jsx)('span', {
                                                    children:
                                                        'Нажмите ПКМ для дополнительных действий',
                                                }),
                                            },
                                        ),
                                    ),
                                    (0, c.jsx)('img', {
                                        src: t.img,
                                        alt: t.lastname,
                                        className: (0, d.A)(z.img, {}, ['tooltip-preview']),
                                    }),
                                    (0, c.jsxs)(
                                        S.g,
                                        L(
                                            { maxW: !0, align: 'center' },
                                            {
                                                children: [
                                                    (0, c.jsx)(A.xv, {
                                                        title: t.lastname,
                                                        size: 'small',
                                                        align: 'center',
                                                    }),
                                                    (0, c.jsx)(A.xv, {
                                                        size: 'small',
                                                        text: ''
                                                            .concat(t.firstname, ' ')
                                                            .concat(t.middlename),
                                                        align: 'center',
                                                    }),
                                                ],
                                            },
                                        ),
                                    ),
                                ],
                            },
                        ),
                    );
                }),
                D = t(9158),
                I = {};
            (I.styleTagTransform = C()),
                (I.setAttributes = v()),
                (I.insert = g().bind(null, 'head')),
                (I.domAPI = b()),
                (I.insertStyleElement = w()),
                p()(D.Z, I);
            const U = D.Z && D.Z.locals ? D.Z.locals : void 0;
            var B = function () {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, a = arguments.length; t < a; t++)
                                    for (var r in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                },
                G = (0, u.memo)(function (e) {
                    var n = e.className,
                        t = e.candidates,
                        a = e.handleCandidateDelete,
                        r = e.gridColumns;
                    return (0, c.jsx)(
                        'div',
                        B(
                            {
                                style: {
                                    gridTemplateColumns: r
                                        ? 'repeat('.concat(r, ', 1fr)')
                                        : 'repeat(4, 1fr)',
                                },
                                className: (0, d.A)(U.selectedCandidatesGrid, {}, [n]),
                            },
                            {
                                children: t.map(function (e) {
                                    return (0,
                                    c.jsx)(W, { handleCandidateDelete: a, candidate: e }, e.id);
                                }),
                            },
                        ),
                    );
                });
        },
        9452: (e, n, t) => {
            t.d(n, { Y: () => L });
            var a = t(5893),
                r = t(7294),
                i = t(7543),
                o = t(1772),
                l = t(7828),
                s = t(4807),
                c = t(3540),
                d = t(3379),
                u = t.n(d),
                f = t(7795),
                p = t.n(f),
                h = t(569),
                b = t.n(h),
                x = t(3565),
                g = t.n(x),
                m = t(9216),
                v = t.n(m),
                y = t(4589),
                w = t.n(y),
                j = t(5583),
                C = {};
            (C.styleTagTransform = w()),
                (C.setAttributes = g()),
                (C.insert = b().bind(null, 'head')),
                (C.domAPI = p()),
                (C.insertStyleElement = v()),
                u()(j.Z, C);
            const k = j.Z && j.Z.locals ? j.Z.locals : void 0;
            var Z = function () {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, a = arguments.length; t < a; t++)
                                    for (var r in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                },
                S = (0, r.memo)(function (e) {
                    var n = e.className,
                        t = e.multiple,
                        r = void 0 !== t && t,
                        i = e.titles,
                        o = e.paragraphs;
                    return (0, a.jsx)(
                        c.J,
                        Z(
                            { multiple: r, className: (0, s.A)(k.accordion, {}, [n]) },
                            {
                                children: i.map(function (e, n) {
                                    return (0, a.jsx)(c.U, Z({ header: e }, { children: o[n] }), n);
                                }),
                            },
                        ),
                    );
                }),
                A = t(868),
                T = t(7820),
                P = t(4140),
                E = {};
            (E.styleTagTransform = w()),
                (E.setAttributes = g()),
                (E.insert = b().bind(null, 'head')),
                (E.domAPI = p()),
                (E.insertStyleElement = v()),
                u()(P.Z, E);
            const N = P.Z && P.Z.locals ? P.Z.locals : void 0;
            var O = function () {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, a = arguments.length; t < a; t++)
                                    for (var r in (n = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                },
                z = function (e, n, t) {
                    if (t || 2 === arguments.length)
                        for (var a, r = 0, i = n.length; r < i; r++)
                            (!a && r in n) ||
                                (a || (a = Array.prototype.slice.call(n, 0, r)), (a[r] = n[r]));
                    return e.concat(a || Array.prototype.slice.call(n));
                },
                L = (0, r.memo)(function (e) {
                    var n = e.className,
                        t = e.filterOptions,
                        c = void 0 === t ? { age: [18, 40], education: [] } : t,
                        d = e.limit,
                        u = void 0 === d ? 1e4 : d,
                        f = e.page,
                        p = void 0 === f ? 0 : f,
                        h = e.defaultSelected,
                        b = e.setSelectedProps,
                        x = e.handleShowAddModal,
                        g = (0, r.useState)(h),
                        m = g[0],
                        v = g[1];
                    (0, r.useEffect)(
                        function () {
                            b(m);
                        },
                        [m, b],
                    ),
                        (0, r.useEffect)(
                            function () {
                                v(h);
                            },
                            [h],
                        );
                    var y = (0, r.useCallback)(
                            function (e, n) {
                                e.stopPropagation(), e.preventDefault(), null == x || x(n);
                            },
                            [x],
                        ),
                        w = (0, A.Vy)({ page: p, limit: u, filterOptions: c }).data;
                    return (0, a.jsx)(S, {
                        className: (0, s.A)('', {}, [n]),
                        titles: (null == w
                            ? void 0
                            : w.map(function (e) {
                                  return (0, a.jsxs)(
                                      i.U,
                                      O(
                                          {
                                              className: N.disclosureBug,
                                              maxW: !0,
                                              justify: 'between',
                                              gap: '16',
                                          },
                                          {
                                              children: [
                                                  (0, a.jsxs)(
                                                      i.U,
                                                      O(
                                                          {
                                                              className: N.disclosureBug,
                                                              justify: 'start',
                                                              gap: '16',
                                                          },
                                                          {
                                                              children: [
                                                                  (0, a.jsx)(o.X, {
                                                                      onChange: function (n) {
                                                                          n.stopPropagation(),
                                                                              m.includes(e)
                                                                                  ? v(function (n) {
                                                                                        return n.filter(
                                                                                            function (
                                                                                                n,
                                                                                            ) {
                                                                                                return (
                                                                                                    n !==
                                                                                                    e
                                                                                                );
                                                                                            },
                                                                                        );
                                                                                    })
                                                                                  : v(function (n) {
                                                                                        return z(
                                                                                            z(
                                                                                                [],
                                                                                                n,
                                                                                                !0,
                                                                                            ),
                                                                                            [e],
                                                                                            !1,
                                                                                        );
                                                                                    });
                                                                      },
                                                                      checked: m.includes(e),
                                                                  }),
                                                                  (0, a.jsx)('img', {
                                                                      src: e.img,
                                                                      title: e.lastname,
                                                                      alt: e.lastname,
                                                                      className: N.img,
                                                                  }),
                                                                  (0, a.jsx)(l.xv, {
                                                                      className: N.textBlock,
                                                                      size: 'extrasmall',
                                                                      title: ''
                                                                          .concat(e.lastname, ' ')
                                                                          .concat(
                                                                              e.firstname.slice(
                                                                                  0,
                                                                                  1,
                                                                              ),
                                                                              '.',
                                                                          )
                                                                          .concat(
                                                                              e.middlename.slice(
                                                                                  0,
                                                                                  1,
                                                                              ),
                                                                              '.',
                                                                          ),
                                                                  }),
                                                              ],
                                                          },
                                                      ),
                                                  ),
                                                  x &&
                                                      (0, a.jsx)(
                                                          T.z,
                                                          O(
                                                              {
                                                                  onClick: function (n) {
                                                                      return y(n, e.id);
                                                                  },
                                                                  size: 'small',
                                                              },
                                                              { children: 'Добавить в группу' },
                                                          ),
                                                      ),
                                              ],
                                          },
                                      ),
                                      e.id,
                                  );
                              })) || [(0, a.jsx)('p', { children: 'ничего' })],
                        paragraphs: (null == w
                            ? void 0
                            : w.map(function (e) {
                                  return (0,
                                  a.jsxs)(i.g, O({ maxW: !0, gap: '0' }, { children: [(0, a.jsxs)(i.U, O({ maxW: !0 }, { children: [(0, a.jsx)('b', { children: 'Возраст:' }), (0, a.jsx)('p', { children: e.age })] })), (0, a.jsxs)(i.U, O({ maxW: !0 }, { children: [(0, a.jsx)('b', { children: 'Факультет:' }), (0, a.jsx)('p', { children: e.faculty })] })), (0, a.jsxs)(i.U, O({ maxW: !0 }, { children: [(0, a.jsx)('b', { children: 'Специальность:' }), (0, a.jsx)('p', { children: e.department })] })), (0, a.jsxs)(i.U, O({ maxW: !0 }, { children: [(0, a.jsx)('b', { children: 'Ключевые навыки:' }), (0, a.jsx)('p', { children: e.keySkills.slice(0, 3).join(', ') })] }))] }), e.id);
                              })) || [(0, a.jsx)('p', { children: 'ничего' })],
                    });
                });
        },
        6526: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = t(8081),
                r = t.n(a),
                i = t(3645),
                o = t.n(i)()(r());
            o.push([
                e.id,
                'h1,h2,p{margin:0;padding:0}.f393c{width:100%;height:50px;display:flex;align-items:center;justify-content:space-evenly}.b25a1{width:50px;height:50px;fill:none;stroke:#000}.dac8e{stroke:#000;fill:#eedd20}.b447a{height:400px;padding:20px;border-radius:30px;background:var(--inverted-bg-color);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:10px;backdrop-filter:blur(10px)}.b447a::before{border-radius:30px;content:"";position:absolute;top:0;left:0;right:0;bottom:0}.b447a:hover{z-index:1000;opacity:1}.fb5ac{width:150px;height:200px;border-radius:30px}.a31dd{z-index:100;outline:2px solid #b8860b}.a31dd::before{box-shadow:0 0 10px 10px rgba(129,121,27,.5)}.ff417{z-index:90;outline:2px solid #bac07e;opacity:.9}.ff417::before{box-shadow:0 0 10px 10px rgba(218,209,115,.5)}.ab388{z-index:80;outline:2px solid #c4c0b8;opacity:.7}.ab388::before{box-shadow:0 0 10px 10px rgba(201,201,201,.5)}.ce227{z-index:50;outline:2px solid #c00000;opacity:.5}.ce227::before{box-shadow:0 0 10px 10px rgba(141,3,3,.5)}',
                '',
            ]),
                (o.locals = {
                    stars: 'f393c',
                    starIcon: 'b25a1',
                    filledStar: 'dac8e',
                    CandidateCard: 'b447a',
                    img: 'fb5ac',
                    winner: 'a31dd',
                    awardeeF: 'ff417',
                    awardeeS: 'ab388',
                    awardeeTh: 'ce227',
                });
            const l = o;
        },
        1550: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = t(8081),
                r = t.n(a),
                i = t(3645),
                o = t.n(i)()(r());
            o.push([
                e.id,
                '.d776c{cursor:pointer;padding:30px}.b3523{width:150px;height:150px;border-radius:20px}.fb2b6{margin-right:10px}',
                '',
            ]),
                (o.locals = { candCard: 'd776c', img: 'b3523', icon: 'fb2b6' });
            const l = o;
        },
        9158: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = t(8081),
                r = t.n(a),
                i = t(3645),
                o = t.n(i)()(r());
            o.push([e.id, '.d1c98{width:100%;display:grid;grid-gap:10px}', '']),
                (o.locals = { selectedCandidatesGrid: 'd1c98' });
            const l = o;
        },
        5583: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = t(8081),
                r = t.n(a),
                i = t(3645),
                o = t.n(i)()(r());
            o.push([e.id, '', '']), (o.locals = {});
            const l = o;
        },
        4140: (e, n, t) => {
            t.d(n, { Z: () => l });
            var a = t(8081),
                r = t.n(a),
                i = t(3645),
                o = t.n(i)()(r());
            o.push([
                e.id,
                '.b43ee{width:50px;height:50px;border-radius:10px;font-size:12px}.e3951 p{margin:0}',
                '',
            ]),
                (o.locals = { img: 'b43ee', disclosureBug: 'e3951' });
            const l = o;
        },
    },
]);
