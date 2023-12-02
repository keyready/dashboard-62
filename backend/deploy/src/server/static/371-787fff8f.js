'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [371],
    {
        3887: (e, a, t) => {
            t.d(a, { V: () => l });
            var n = t(8608),
                r = function () {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, n = arguments.length; t < n; t++)
                                    for (var r in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                },
                l = n.p.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            fetchCandidates: e.query({
                                query: function (e) {
                                    return {
                                        url: '/api/candidates',
                                        params: r(
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
        6371: (e, a, t) => {
            t.r(a), t.d(a, { default: () => ve });
            var n = t(5893),
                r = t(4807),
                l = t(2594),
                s = t(7294),
                i = t(6088),
                c = t(1772),
                o = t(1456),
                d = t(8650),
                u = t(3379),
                p = t.n(u),
                h = t(7795),
                f = t.n(h),
                m = t(569),
                g = t.n(m),
                x = t(3565),
                b = t.n(x),
                y = t(9216),
                j = t.n(y),
                v = t(4589),
                k = t.n(v),
                O = t(8057),
                w = {};
            (w.styleTagTransform = k()),
                (w.setAttributes = b()),
                (w.insert = g().bind(null, 'head')),
                (w.domAPI = f()),
                (w.insertStyleElement = j()),
                p()(O.Z, w);
            const C = O.Z && O.Z.locals ? O.Z.locals : void 0;
            var P = function () {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, n = arguments.length; t < n; t++)
                                    for (var r in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                },
                N = (0, s.memo)(function (e) {
                    var a = e.className,
                        t = e.data,
                        l = (e.multiple, e.onRowDelete);
                    return (0, n.jsxs)(
                        o.w,
                        P(
                            {
                                className: (0, r.A)(C.Table, {}, [a]),
                                value: t,
                                removableSort: !0,
                                selectionMode: 'single',
                                sortField: 'name',
                                sortOrder: 1,
                                emptyMessage:
                                    'Выберите от 2 до 4 выпускников, чтобы перейти к углубленному сравнению',
                                onRowClick: function (e) {
                                    return null == l ? void 0 : l(e.data);
                                },
                            },
                            {
                                children: [
                                    (0, n.jsx)(d.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'firstname',
                                        header: 'ФИО',
                                        sortable: !0,
                                    }),
                                    (0, n.jsx)(d.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'faculty',
                                        header: 'Факультет',
                                        sortable: !0,
                                    }),
                                    (0, n.jsx)(d.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'department',
                                        header: 'Специальность',
                                        sortable: !0,
                                    }),
                                    (0, n.jsx)(d.s, {
                                        alignHeader: 'center',
                                        dataType: 'numeric',
                                        field: 'age',
                                        header: 'Возраст',
                                        sortable: !0,
                                    }),
                                    (0, n.jsx)(d.s, {
                                        alignHeader: 'center',
                                        dataType: 'text',
                                        field: 'hobby',
                                        header: 'Хобби',
                                        sortable: !0,
                                    }),
                                ],
                            },
                        ),
                    );
                }),
                S = t(7543),
                W = t(8794),
                A = t(1221),
                Z = t(7828),
                T = t(3540),
                E = t(5583),
                U = {};
            (U.styleTagTransform = k()),
                (U.setAttributes = b()),
                (U.insert = g().bind(null, 'head')),
                (U.domAPI = f()),
                (U.insertStyleElement = j()),
                p()(E.Z, U);
            const L = E.Z && E.Z.locals ? E.Z.locals : void 0;
            var z,
                I = function () {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, n = arguments.length; t < n; t++)
                                    for (var r in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                },
                F = (0, s.memo)(function (e) {
                    var a = e.className,
                        t = e.multiple,
                        l = void 0 !== t && t,
                        s = e.titles,
                        i = e.paragraphs;
                    return (0, n.jsx)(
                        T.J,
                        I(
                            { multiple: l, className: (0, r.A)(L.accordion, {}, [a]) },
                            {
                                children: s.map(function (e, a) {
                                    return (0, n.jsx)(T.U, I({ header: e }, { children: i[a] }), a);
                                }),
                            },
                        ),
                    );
                }),
                B = t(8068),
                M = t(9250),
                R = t(9170),
                H = t(7751),
                D = t(8949);
            function _() {
                return (
                    (_ = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var n in t)
                                      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                              }
                              return e;
                          }),
                    _.apply(this, arguments)
                );
            }
            const q = function (e) {
                return s.createElement(
                    'svg',
                    _(
                        {
                            width: 40,
                            height: 40,
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e,
                    ),
                    z ||
                        (z = s.createElement('path', {
                            d: 'm16.666 10 8.822 8.822c.65.65.65 1.706 0 2.357L16.666 30',
                            stroke: 'currentcolor',
                            strokeWidth: 2,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        })),
                );
            };
            var Y = t(2540),
                J = t(4710),
                V = t(4457),
                K = (0, s.memo)(function (e) {
                    var a = e.className,
                        t = e.setCurrentLimit,
                        r = e.setCurrentPage,
                        l = e.currentPage,
                        i = e.currentLimit,
                        c = e.totalCandidates,
                        o = (0, s.useCallback)(
                            function (e) {
                                t(e.rows), r(e.page);
                            },
                            [t, r],
                        );
                    return (0,
                    n.jsx)(V.D, { className: a, first: l * i, rows: i, totalRecords: c || 0, rowsPerPageOptions: [10,
                            15, 20], onPageChange: o });
                }),
                Q = t(3942),
                X = function (e) {
                    var a;
                    return null === (a = e.candidates) || void 0 === a ? void 0 : a.totalCandidates;
                },
                G = t(2672),
                $ = t(868),
                ee = t(2466),
                ae = t(9976),
                te = t(9485),
                ne = {};
            (ne.styleTagTransform = k()),
                (ne.setAttributes = b()),
                (ne.insert = g().bind(null, 'head')),
                (ne.domAPI = f()),
                (ne.insertStyleElement = j()),
                p()(te.Z, ne);
            const re = te.Z && te.Z.locals ? te.Z.locals : void 0;
            var le = function (e, a, t) {
                    if (t || 2 === arguments.length)
                        for (var n, r = 0, l = a.length; r < l; r++)
                            (!n && r in a) ||
                                (n || (n = Array.prototype.slice.call(a, 0, r)), (n[r] = a[r]));
                    return e.concat(n || Array.prototype.slice.call(a));
                },
                se = (0, s.memo)(function (e) {
                    var a = e.setSelectedParams,
                        t = e.selectedParams,
                        r = (0, s.useState)(),
                        l = r[0],
                        i = r[1],
                        c = (0, s.useState)(null),
                        o = c[0],
                        d = c[1];
                    (0, s.useEffect)(function () {
                        i([
                            {
                                label: 'Факультет конструкции летательных аппаратов',
                                data: 'Факультет конструкции летательных аппаратов',
                                children: [
                                    {
                                        label: 'Кафедра контроля качества и испытания вооружения, военной и специальной техники',
                                        data: 'Кафедра контроля качества и испытания вооружения, военной и специальной техники',
                                        key: '0-0',
                                    },
                                    {
                                        label: 'Кафедра космических аппаратов и средств межорбитальной транспортировки',
                                        data: 'Кафедра космических аппаратов и средств межорбитальной транспортировки',
                                        key: '0-1',
                                    },
                                    {
                                        label: 'Кафедра конструкций ракет-носителей',
                                        data: 'Кафедра конструкций ракет-носителей',
                                        key: '0-2',
                                    },
                                    {
                                        label: 'Кафедра стартовых и технических комплексов',
                                        data: 'Кафедра стартовых и технических комплексов',
                                        key: '0-3',
                                    },
                                    {
                                        label: 'Кафедра заправочного оборудования',
                                        data: 'Кафедра заправочного оборудования',
                                        key: '0-4',
                                    },
                                    {
                                        label: 'Кафедра навигационного-баллистического обеспечения применения космических средств и теории полета летательных аппаратов',
                                        data: 'Кафедра навигационного-баллистического обеспечения применения космических средств и теории полета летательных аппаратов',
                                        key: '0-5',
                                    },
                                ],
                                key: '0',
                            },
                            {
                                label: 'Факультет систем управления ракетно-космических комплексов',
                                data: 'Факультет систем управления ракетно-космических комплексов',
                                children: [
                                    {
                                        label: 'Кафедра автономных систем управления',
                                        data: 'Кафедра автономных систем управления',
                                        key: '1-0',
                                    },
                                    {
                                        label: 'Кафедра бортового электрооборудования и энергетических систем летательных аппаратов',
                                        data: 'Кафедра бортового электрооборудования и энергетических систем летательных аппаратов',
                                        key: '1-1',
                                    },
                                    {
                                        label: 'Кафедра управления организационно-техническими системами космического назначения',
                                        data: 'Кафедра управления организационно-техническими системами космического назначения',
                                        key: '1-2',
                                    },
                                    {
                                        label: 'Кафедра информационно-вычислительных систем и сетей',
                                        data: 'Кафедра информационно-вычислительных систем и сетей',
                                        key: '1-3',
                                    },
                                    {
                                        label: 'Кафедра бортовых информационных и измерительных комплексов',
                                        data: 'Кафедра бортовых информационных и измерительных комплексов',
                                        key: '1-4',
                                    },
                                    {
                                        label: 'Кафедра автоматизированных систем подготовки и пуска ракет космического назначения.\nкафедра математического и программного обеспечения.',
                                        data: 'Кафедра автоматизированных систем подготовки и пуска ракет космического назначения.\nкафедра математического и программного обеспечения.',
                                        key: '1-5',
                                    },
                                ],
                                key: '1',
                            },
                            {
                                label: 'Факультет радиоэлектронных систем космических комплексов',
                                data: 'Факультет радиоэлектронных систем космических комплексов',
                                children: [
                                    {
                                        label: 'Кафедра передающих, антенно-фидерных устройств и средств сев',
                                        data: 'Кафедра передающих, антенно-фидерных устройств и средств сев',
                                        key: '2-0',
                                    },
                                    {
                                        label: 'Кафедра космических радиотехнических систем',
                                        data: 'Кафедра космических радиотехнических систем',
                                        key: '2-1',
                                    },
                                    {
                                        label: 'Кафедра космической радиолокации и радионавигации',
                                        data: 'Кафедра космической радиолокации и радионавигации',
                                        key: '2-2',
                                    },
                                    {
                                        label: 'Кафедра телеметрических систем и комплексной обработки информации',
                                        data: 'Кафедра телеметрических систем и комплексной обработки информации',
                                        key: '2-3',
                                    },
                                    {
                                        label: 'Кафедра систем и средств радиоэлектронной борьбы космического назначения',
                                        data: 'Кафедра систем и средств радиоэлектронной борьбы космического назначения',
                                        key: '2-4',
                                    },
                                    {
                                        label: 'Кафедра сетей и систем связи космических комплексов',
                                        data: 'Кафедра сетей и систем связи космических комплексов',
                                        key: '2-5',
                                    },
                                    {
                                        label: 'Кафедра приемных устройств и радиоавтоматики.',
                                        data: 'Кафедра приемных устройств и радиоавтоматики.',
                                        key: '2-6',
                                    },
                                ],
                                key: '2',
                            },
                            {
                                label: 'Факультет инженерного и электромеханического обеспечения',
                                data: 'Факультет инженерного и электромеханического обеспечения',
                                children: [
                                    {
                                        label: 'Кафедра инженерного обеспечения и маскировки',
                                        data: 'Кафедра инженерного обеспечения и маскировки',
                                        key: '3-0',
                                    },
                                    {
                                        label: 'Кафедра специальных сооружений ракетно-космических комплексов',
                                        data: 'Кафедра специальных сооружений ракетно-космических комплексов',
                                        key: '3-1',
                                    },
                                    {
                                        label: 'Кафедра систем жизнеобеспечения объектов наземной космической инфраструктуры',
                                        data: 'Кафедра систем жизнеобеспечения объектов наземной космической инфраструктуры',
                                        key: '3-2',
                                    },
                                    {
                                        label: 'Кафедра энергоснабжения объектов наземной космической инфраструктуры.',
                                        data: 'Кафедра энергоснабжения объектов наземной космической инфраструктуры.',
                                        key: '3-3',
                                    },
                                ],
                                key: '3',
                            },
                            {
                                label: 'Факультет сбора и обработки информации',
                                data: 'Факультет сбора и обработки информации',
                                children: [
                                    {
                                        label: 'Кафедра оптико-электронных средств контроля',
                                        data: 'Кафедра оптико-электронных средств контроля',
                                        key: '4-0',
                                    },
                                    {
                                        label: 'Кафедра технологий и средств геофизического обеспечения',
                                        data: 'Кафедра технологий и средств геофизического обеспечения',
                                        key: '4-1',
                                    },
                                    {
                                        label: 'Кафедра технических средств комплексного контроля ракетно-космических объектов',
                                        data: 'Кафедра технических средств комплексного контроля ракетно-космических объектов',
                                        key: '4-2',
                                    },
                                    {
                                        label: 'Кафедра космического радиоэлектронного контроля.',
                                        data: 'Кафедра космического радиоэлектронного контроля.',
                                        key: '4-3',
                                    },
                                ],
                                key: '4',
                            },
                            {
                                label: 'Факультет специальных информационных технологий',
                                data: 'Факультет специальных информационных технологий',
                                children: [
                                    {
                                        label: 'Кафедра систем сбора и обработки информации',
                                        data: 'Кафедра систем сбора и обработки информации',
                                        key: '5-0',
                                    },
                                    {
                                        label: 'Кафедра инженерного анализа',
                                        data: 'Кафедра инженерного анализа',
                                        key: '5-1',
                                    },
                                    {
                                        label: 'Кафедра информационно-аналитической работы.',
                                        data: 'Кафедра информационно-аналитической работы.',
                                        key: '5-2',
                                    },
                                ],
                                key: '5',
                            },
                            {
                                label: 'Факультет топогеодезического обеспечения и картографии',
                                data: 'Факультет топогеодезического обеспечения и картографии',
                                children: [
                                    {
                                        label: 'Кафедра топогеодезического обеспечения',
                                        data: 'Кафедра топогеодезического обеспечения',
                                        key: '6-0',
                                    },
                                    {
                                        label: 'Кафедра картографии',
                                        data: 'Кафедра картографии',
                                        key: '6-1',
                                    },
                                    {
                                        label: 'Кафедра высшей геодезии',
                                        data: 'Кафедра высшей геодезии',
                                        key: '6-2',
                                    },
                                    {
                                        label: 'Кафедра фототопографии и фотограмметрии.',
                                        data: 'Кафедра фототопографии и фотограмметрии.',
                                        key: '6-3',
                                    },
                                ],
                                key: '6',
                            },
                            {
                                label: 'Факультет средств ракетно-космической обороны',
                                data: 'Факультет средств ракетно-космической обороны',
                                children: [
                                    {
                                        label: 'Применение и эксплуатация средств предупреждения о ракетном нападении',
                                        data: 'Применение и эксплуатация средств предупреждения о ракетном нападении',
                                        key: '7-0',
                                    },
                                    {
                                        label: 'Применение и эксплуатация средств противоракетной обороны',
                                        data: 'Применение и эксплуатация средств противоракетной обороны',
                                        key: '7-1',
                                    },
                                    {
                                        label: 'Применение и эксплуатация средств противокосмической обороны и контроля космического пространства.',
                                        data: 'Применение и эксплуатация средств противокосмической обороны и контроля космического пространства.',
                                        key: '7-2',
                                    },
                                ],
                                key: '7',
                            },
                            {
                                label: 'Факультет автоматизированных систем управления войсками',
                                data: 'Факультет автоматизированных систем управления войсками',
                                children: [
                                    {
                                        label: 'Кафедра системного анализа и математического обеспечения автоматизированных систем управления (войсками)',
                                        data: 'Кафедра системного анализа и математического обеспечения автоматизированных систем управления (войсками)',
                                        key: '8-0',
                                    },
                                    {
                                        label: 'Кафедра технологий и средств технического обеспечения и эксплуатации автоматизированных систем управления (войсками)',
                                        data: 'Кафедра технологий и средств технического обеспечения и эксплуатации автоматизированных систем управления (войсками)',
                                        key: '8-1',
                                    },
                                    {
                                        label: 'Кафедра технологий и средств комплексной обработки и передачи информации в автоматизированных системах управления (войсками)',
                                        data: 'Кафедра технологий и средств комплексной обработки и передачи информации в автоматизированных системах управления (войсками)',
                                        key: '8-2',
                                    },
                                    {
                                        label: 'Кафедра автоматизированных систем управления космических комплексов',
                                        data: 'Кафедра автоматизированных систем управления космических комплексов',
                                        key: '8-3',
                                    },
                                    {
                                        label: 'Программно-алгоритмическое обеспечения автоматизированных систем управления ракетно-космической обороны',
                                        data: 'Программно-алгоритмическое обеспечения автоматизированных систем управления ракетно-космической обороны',
                                        key: '8-4',
                                    },
                                    {
                                        label: 'Метрологического обеспечения вооружения, военной и специальной техники.',
                                        data: 'Метрологического обеспечения вооружения, военной и специальной техники.',
                                        key: '8-5',
                                    },
                                ],
                                key: '8',
                            },
                        ]);
                    }, []);
                    var u = (0, s.useCallback)(
                            function (e) {
                                var n = e.node.label;
                                n && a(le(le([], t, !0), [n], !1));
                            },
                            [t, a],
                        ),
                        p = (0, s.useCallback)(
                            function (e) {
                                var n = e.node.label;
                                n &&
                                    a(
                                        t.filter(function (e) {
                                            return e !== n;
                                        }),
                                    );
                            },
                            [t, a],
                        );
                    return (0, n.jsx)(ae.m, {
                        placeholder: 'Выберите специальность',
                        onNodeSelect: u,
                        onNodeUnselect: p,
                        className: re.Tree,
                        value: o,
                        onChange: function (e) {
                            return d(e.value);
                        },
                        options: l,
                        metaKeySelection: !1,
                        selectionMode: 'checkbox',
                        display: 'chip',
                    });
                }),
                ie = t(7974),
                ce = t(702),
                oe = {};
            (oe.styleTagTransform = k()),
                (oe.setAttributes = b()),
                (oe.insert = g().bind(null, 'head')),
                (oe.domAPI = f()),
                (oe.insertStyleElement = j()),
                p()(ce.Z, oe);
            const de = ce.Z && ce.Z.locals ? ce.Z.locals : void 0;
            var ue = function () {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, n = arguments.length; t < n; t++)
                                    for (var r in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                },
                pe = (0, s.memo)(function (e) {
                    var a = e.isOpen,
                        t = e.setIsOpen,
                        r = e.filterOptions,
                        l = e.setFilterOptions,
                        i = (0, s.useState)(r),
                        c = i[0],
                        o = i[1],
                        d = (0, R.a)(),
                        u = d.addSearchParams,
                        p = d.deleteSearchParams,
                        h = (0, s.useCallback)(
                            function (e) {
                                o(ue(ue({}, r), { age: e.value }));
                            },
                            [r],
                        ),
                        f = (0, s.useCallback)(
                            function (e) {
                                o(ue(ue({}, r), { education: e }));
                            },
                            [r],
                        ),
                        m = (0, s.useCallback)(
                            function () {
                                l(c),
                                    u({ education: c.education.join(','), age: c.age.join(',') }),
                                    t(!1);
                            },
                            [c, l, t],
                        ),
                        g = (0, s.useCallback)(
                            function () {
                                l({ age: [18, 40], education: [] }),
                                    p('age'),
                                    p('education'),
                                    t(!1);
                            },
                            [t, l],
                        );
                    return (0,
                    n.jsx)(ee.u, ue({ className: de.modal, title: 'Поиск по параметрам', isOpen: a, setIsOpen: t }, { children: (0, n.jsxs)(S.g, ue({ maxW: !0, className: de.wrapper }, { children: [(0, n.jsxs)(S.U, ue({ maxW: !0, align: 'start', gap: '16' }, { children: [(0, n.jsx)('h3', ue({ style: { margin: 0 } }, { children: 'Факультет, кафедра:' })), (0, n.jsx)(se, { selectedParams: c.education, setSelectedParams: f })] })), (0, n.jsxs)(S.U, ue({ maxW: !0, gap: '16' }, { children: [(0, n.jsx)('h3', ue({ style: { margin: 0 } }, { children: 'Возраст:' })), (0, n.jsxs)(S.U, ue({ className: de.sliderWrapper, maxW: !0, gap: '16' }, { children: [(0, n.jsx)('p', { children: c.age[0] }), (0, n.jsx)('div', ue({ style: { width: 450 } }, { children: (0, n.jsx)(ie.i, { min: 18, max: 40, value: c.age, onChange: h, range: !0 }) })), (0, n.jsx)('p', { children: c.age[1] })] }))] })), (0, n.jsxs)(S.U, ue({ maxW: !0, gap: '16' }, { children: [(0, n.jsx)(W.z, ue({ onClick: m }, { children: 'Поиск' })), (0, n.jsx)(W.z, ue({ variant: 'danger', onClick: g }, { children: 'Очистить фильтры' }))] }))] })) }));
                }),
                he = t(3887),
                fe = t(5368),
                me = t(235),
                ge = {};
            (ge.styleTagTransform = k()),
                (ge.setAttributes = b()),
                (ge.insert = g().bind(null, 'head')),
                (ge.domAPI = f()),
                (ge.insertStyleElement = j()),
                p()(me.Z, ge);
            const xe = me.Z && me.Z.locals ? me.Z.locals : void 0;
            var be = function () {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, n = arguments.length; t < n; t++)
                                    for (var r in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                },
                ye = function (e, a, t) {
                    if (t || 2 === arguments.length)
                        for (var n, r = 0, l = a.length; r < l; r++)
                            (!n && r in a) ||
                                (n || (n = Array.prototype.slice.call(a, 0, r)), (n[r] = a[r]));
                    return e.concat(n || Array.prototype.slice.call(a));
                },
                je = { candidates: fe.ep };
            const ve = (0, s.memo)(function (e) {
                var a,
                    t,
                    o = e.className,
                    d = (0, R.a)(),
                    u = d.addSearchParams,
                    p = d.deleteSearchParams,
                    h = (d.getSearchParams, d.getSearchParam),
                    f = (0, s.useState)([]),
                    m = f[0],
                    g = f[1],
                    x = (0, s.useState)([]),
                    b = x[0],
                    y = x[1],
                    j = (0, s.useState)(''),
                    v = j[0],
                    k = j[1],
                    O = (0, s.useState)(0),
                    w = O[0],
                    C = O[1],
                    P = (0, s.useState)(10),
                    T = P[0],
                    E = P[1],
                    U = (0, s.useState)(!1),
                    L = U[0],
                    z = U[1],
                    I = (0, s.useState)({ education: [], age: [18, 40] }),
                    _ = I[0],
                    V = I[1],
                    ee = (0, M.s0)(),
                    ae = (0, Q.v9)(X),
                    te = (0, G.T)(),
                    ne = (0, he.V)({ page: w, limit: T, filterOptions: _ }),
                    re = ne.data,
                    le = ne.isLoading,
                    se = ne.isFetching;
                (0, s.useEffect)(
                    function () {
                        te((0, $.LY)());
                    },
                    [_, te],
                ),
                    (0, s.useEffect)(
                        function () {
                            te((0, $.LY)());
                            var e = h('task'),
                                a = h('selected'),
                                t = h('age'),
                                n = h('education');
                            e && k(e),
                                a && y(a.split(',').map(Number)),
                                n &&
                                    (V(be(be({}, _), { education: n.split(',') })),
                                    u({ education: n })),
                                t &&
                                    (V(be(be({}, _), { age: t.split(',').map(Number) })),
                                    u({ age: t }));
                        },
                        [te],
                    ),
                    (0, s.useEffect)(
                        function () {
                            b.length &&
                                re &&
                                g(
                                    re.filter(function (e) {
                                        return b.includes(e.id);
                                    }),
                                );
                        },
                        [re, b],
                    ),
                    (0, s.useEffect)(
                        function () {
                            m.length &&
                                u({
                                    selected: m
                                        .map(function (e) {
                                            return e.id.toString();
                                        })
                                        .join(','),
                                });
                        },
                        [m],
                    );
                var ie = (0, s.useCallback)(
                    function () {
                        v.length >= 10 &&
                            m.length >= 2 &&
                            m.length <= 4 &&
                            ee(
                                ''
                                    .concat(H.h3.detailedcomparison, '?selected=')
                                    .concat(
                                        m
                                            .map(function (e) {
                                                return e.id.toString();
                                            })
                                            .join(','),
                                        '&task=',
                                    )
                                    .concat(v),
                            );
                    },
                    [ee, m, v],
                );
                (0, s.useEffect)(
                    function () {
                        v && u({ task: v });
                    },
                    [v],
                );
                var ce = (0, s.useCallback)(function (e) {
                    g(function (a) {
                        return a.filter(function (a) {
                            return a.id !== e.id;
                        });
                    });
                }, []);
                return (
                    (0, s.useEffect)(
                        function () {
                            var e = function (e) {
                                'Enter' === e.key &&
                                    v.length >= 10 &&
                                    m.length >= 2 &&
                                    m.length <= 6 &&
                                    ee(
                                        ''
                                            .concat(H.h3.detailedcomparison, '?selected=')
                                            .concat(
                                                m
                                                    .map(function (e) {
                                                        return e.id.toString();
                                                    })
                                                    .join(','),
                                                '&task=',
                                            )
                                            .concat(v),
                                    );
                            };
                            return (
                                document.addEventListener('keydown', e),
                                function () {
                                    document.removeEventListener('keydown', e);
                                }
                            );
                        },
                        [ee, m, v],
                    ),
                    le
                        ? (0, n.jsx)(
                              i.W,
                              be(
                                  { reducers: je, removeAfterUnmount: !1 },
                                  {
                                      children: (0, n.jsx)(
                                          l.T,
                                          be(
                                              { className: (0, r.A)(xe.CandidatesPage, {}, [o]) },
                                              {
                                                  children: (0, n.jsxs)(
                                                      S.g,
                                                      be(
                                                          { maxW: !0, gap: '32' },
                                                          {
                                                              children: [
                                                                  (0, n.jsx)(J.O, {
                                                                      width: '45%',
                                                                      height: '85px',
                                                                  }),
                                                                  (0, n.jsxs)(
                                                                      S.U,
                                                                      be(
                                                                          {
                                                                              className:
                                                                                  xe.skeletonWrapper,
                                                                              gap: '16',
                                                                              maxW: !0,
                                                                              align: 'start',
                                                                              justify: 'between',
                                                                          },
                                                                          {
                                                                              children: [
                                                                                  (0, n.jsx)(
                                                                                      S.g,
                                                                                      be(
                                                                                          {
                                                                                              gap: '16',
                                                                                              className:
                                                                                                  xe.skeletonList,
                                                                                          },
                                                                                          {
                                                                                              children:
                                                                                                  new Array(
                                                                                                      10,
                                                                                                  )
                                                                                                      .fill(
                                                                                                          0,
                                                                                                      )
                                                                                                      .map(
                                                                                                          function (
                                                                                                              e,
                                                                                                              a,
                                                                                                          ) {
                                                                                                              return (0,
                                                                                                              n.jsxs)(
                                                                                                                  S.U,
                                                                                                                  be(
                                                                                                                      {
                                                                                                                          className:
                                                                                                                              xe.skeletonCard,
                                                                                                                          maxW: !0,
                                                                                                                          gap: '8',
                                                                                                                      },
                                                                                                                      {
                                                                                                                          children:
                                                                                                                              [
                                                                                                                                  (0,
                                                                                                                                  n.jsx)(
                                                                                                                                      J.O,
                                                                                                                                      {
                                                                                                                                          shape: 'circle',
                                                                                                                                          size: '75px',
                                                                                                                                      },
                                                                                                                                  ),
                                                                                                                                  (0,
                                                                                                                                  n.jsxs)(
                                                                                                                                      S.g,
                                                                                                                                      be(
                                                                                                                                          {
                                                                                                                                              maxW: !0,
                                                                                                                                              align: 'start',
                                                                                                                                          },
                                                                                                                                          {
                                                                                                                                              children:
                                                                                                                                                  [
                                                                                                                                                      (0,
                                                                                                                                                      n.jsx)(
                                                                                                                                                          J.O,
                                                                                                                                                          {
                                                                                                                                                              width: '100%',
                                                                                                                                                              height: '40px',
                                                                                                                                                          },
                                                                                                                                                      ),
                                                                                                                                                      (0,
                                                                                                                                                      n.jsx)(
                                                                                                                                                          J.O,
                                                                                                                                                          {
                                                                                                                                                              width: '60%',
                                                                                                                                                              height: '20px',
                                                                                                                                                          },
                                                                                                                                                      ),
                                                                                                                                                      (0,
                                                                                                                                                      n.jsx)(
                                                                                                                                                          J.O,
                                                                                                                                                          {
                                                                                                                                                              width: '60%',
                                                                                                                                                              height: '20px',
                                                                                                                                                          },
                                                                                                                                                      ),
                                                                                                                                                  ],
                                                                                                                                          },
                                                                                                                                      ),
                                                                                                                                  ),
                                                                                                                              ],
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  a,
                                                                                                              );
                                                                                                          },
                                                                                                      ),
                                                                                          },
                                                                                      ),
                                                                                  ),
                                                                                  (0, n.jsx)(J.O, {
                                                                                      className:
                                                                                          xe.skeletonTable,
                                                                                      width: '60%',
                                                                                      height: '30vh',
                                                                                  }),
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
                                  },
                              ),
                          )
                        : (null == re ? void 0 : re.length) || le
                        ? (0, n.jsx)(
                              i.W,
                              be(
                                  { reducers: je, removeAfterUnmount: !1 },
                                  {
                                      children: (0, n.jsxs)(
                                          l.T,
                                          be(
                                              { className: (0, r.A)(xe.CandidatesPage, {}, [o]) },
                                              {
                                                  children: [
                                                      (0, n.jsx)(pe, {
                                                          filterOptions: _,
                                                          setIsOpen: z,
                                                          isOpen: L,
                                                          setFilterOptions: V,
                                                      }),
                                                      (0, n.jsx)(
                                                          S.U,
                                                          be(
                                                              { justify: 'start' },
                                                              {
                                                                  children: (0, n.jsx)(
                                                                      A.Z,
                                                                      be(
                                                                          { className: xe.card },
                                                                          {
                                                                              children: (0, n.jsx)(
                                                                                  Z.xv,
                                                                                  {
                                                                                      align: 'left',
                                                                                      size: 'large',
                                                                                      className:
                                                                                          xe.textBlock,
                                                                                      title: 'Сравнение выпускников',
                                                                                  },
                                                                              ),
                                                                          },
                                                                      ),
                                                                  ),
                                                              },
                                                          ),
                                                      ),
                                                      (0, n.jsxs)(
                                                          S.U,
                                                          be(
                                                              {
                                                                  className: xe.deleteBtn,
                                                                  maxW: !0,
                                                                  justify: 'end',
                                                              },
                                                              {
                                                                  children: [
                                                                      (0, n.jsx)(
                                                                          W.z,
                                                                          be(
                                                                              {
                                                                                  size: 'small',
                                                                                  onClick:
                                                                                      function () {
                                                                                          return z(
                                                                                              !0,
                                                                                          );
                                                                                      },
                                                                              },
                                                                              {
                                                                                  children:
                                                                                      'Поиск по параметрам',
                                                                              },
                                                                          ),
                                                                      ),
                                                                      (0, n.jsx)(
                                                                          W.z,
                                                                          be(
                                                                              {
                                                                                  size: 'small',
                                                                                  variant: 'danger',
                                                                                  disabled:
                                                                                      !m.length,
                                                                                  onClick:
                                                                                      function () {
                                                                                          g([]),
                                                                                              p(
                                                                                                  'selected',
                                                                                              ),
                                                                                              p(
                                                                                                  'task',
                                                                                              );
                                                                                      },
                                                                              },
                                                                              {
                                                                                  children:
                                                                                      'Очистить выбор',
                                                                              },
                                                                          ),
                                                                      ),
                                                                  ],
                                                              },
                                                          ),
                                                      ),
                                                      (0, n.jsxs)(
                                                          B.q,
                                                          be(
                                                              { className: xe.contentWrapper },
                                                              {
                                                                  children: [
                                                                      (0, n.jsxs)(
                                                                          B.E,
                                                                          be(
                                                                              {
                                                                                  size: 40,
                                                                                  className:
                                                                                      xe.accordion,
                                                                              },
                                                                              {
                                                                                  children: [
                                                                                      se
                                                                                          ? (0,
                                                                                            n.jsx)(
                                                                                                S.g,
                                                                                                be(
                                                                                                    {
                                                                                                        gap: '16',
                                                                                                        className:
                                                                                                            xe.skeletonListFetching,
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            new Array(
                                                                                                                5,
                                                                                                            )
                                                                                                                .fill(
                                                                                                                    0,
                                                                                                                )
                                                                                                                .map(
                                                                                                                    function (
                                                                                                                        e,
                                                                                                                        a,
                                                                                                                    ) {
                                                                                                                        return (0,
                                                                                                                        n.jsxs)(
                                                                                                                            S.U,
                                                                                                                            be(
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        xe.skeletonCard,
                                                                                                                                    maxW: !0,
                                                                                                                                    gap: '8',
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    children:
                                                                                                                                        [
                                                                                                                                            (0,
                                                                                                                                            n.jsx)(
                                                                                                                                                J.O,
                                                                                                                                                {
                                                                                                                                                    shape: 'circle',
                                                                                                                                                    size: '75px',
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            (0,
                                                                                                                                            n.jsxs)(
                                                                                                                                                S.g,
                                                                                                                                                be(
                                                                                                                                                    {
                                                                                                                                                        maxW: !0,
                                                                                                                                                        align: 'start',
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        children:
                                                                                                                                                            [
                                                                                                                                                                (0,
                                                                                                                                                                n.jsx)(
                                                                                                                                                                    J.O,
                                                                                                                                                                    {
                                                                                                                                                                        width: '100%',
                                                                                                                                                                        height: '40px',
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                (0,
                                                                                                                                                                n.jsx)(
                                                                                                                                                                    J.O,
                                                                                                                                                                    {
                                                                                                                                                                        width: '60%',
                                                                                                                                                                        height: '20px',
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                (0,
                                                                                                                                                                n.jsx)(
                                                                                                                                                                    J.O,
                                                                                                                                                                    {
                                                                                                                                                                        width: '60%',
                                                                                                                                                                        height: '20px',
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            ],
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        ],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            a,
                                                                                                                        );
                                                                                                                    },
                                                                                                                ),
                                                                                                    },
                                                                                                ),
                                                                                            )
                                                                                          : (0,
                                                                                            n.jsx)(
                                                                                                F,
                                                                                                {
                                                                                                    titles: (null ==
                                                                                                    re
                                                                                                        ? void 0
                                                                                                        : re.map(
                                                                                                              function (
                                                                                                                  e,
                                                                                                              ) {
                                                                                                                  return (0,
                                                                                                                  n.jsxs)(
                                                                                                                      S.U,
                                                                                                                      be(
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  xe.disclosureBug,
                                                                                                                              maxW: !0,
                                                                                                                              justify:
                                                                                                                                  'start',
                                                                                                                              gap: '16',
                                                                                                                          },
                                                                                                                          {
                                                                                                                              children:
                                                                                                                                  [
                                                                                                                                      (0,
                                                                                                                                      n.jsx)(
                                                                                                                                          c.X,
                                                                                                                                          {
                                                                                                                                              onChange:
                                                                                                                                                  function (
                                                                                                                                                      a,
                                                                                                                                                  ) {
                                                                                                                                                      a.stopPropagation(),
                                                                                                                                                          m.includes(
                                                                                                                                                              e,
                                                                                                                                                          )
                                                                                                                                                              ? g(
                                                                                                                                                                    function (
                                                                                                                                                                        a,
                                                                                                                                                                    ) {
                                                                                                                                                                        return a.filter(
                                                                                                                                                                            function (
                                                                                                                                                                                a,
                                                                                                                                                                            ) {
                                                                                                                                                                                return (
                                                                                                                                                                                    a !==
                                                                                                                                                                                    e
                                                                                                                                                                                );
                                                                                                                                                                            },
                                                                                                                                                                        );
                                                                                                                                                                    },
                                                                                                                                                                )
                                                                                                                                                              : g(
                                                                                                                                                                    function (
                                                                                                                                                                        a,
                                                                                                                                                                    ) {
                                                                                                                                                                        return ye(
                                                                                                                                                                            ye(
                                                                                                                                                                                [],
                                                                                                                                                                                a,
                                                                                                                                                                                !0,
                                                                                                                                                                            ),
                                                                                                                                                                            [
                                                                                                                                                                                e,
                                                                                                                                                                            ],
                                                                                                                                                                            !1,
                                                                                                                                                                        );
                                                                                                                                                                    },
                                                                                                                                                                );
                                                                                                                                                  },
                                                                                                                                              checked:
                                                                                                                                                  m.includes(
                                                                                                                                                      e,
                                                                                                                                                  ),
                                                                                                                                          },
                                                                                                                                      ),
                                                                                                                                      (0,
                                                                                                                                      n.jsx)(
                                                                                                                                          'img',
                                                                                                                                          {
                                                                                                                                              src: e.img,
                                                                                                                                              title: e.lastname,
                                                                                                                                              alt: e.lastname,
                                                                                                                                              className:
                                                                                                                                                  xe.img,
                                                                                                                                          },
                                                                                                                                      ),
                                                                                                                                      (0,
                                                                                                                                      n.jsx)(
                                                                                                                                          Z.xv,
                                                                                                                                          {
                                                                                                                                              className:
                                                                                                                                                  xe.textBlock,
                                                                                                                                              size: 'extrasmall',
                                                                                                                                              title: e.firstname,
                                                                                                                                          },
                                                                                                                                      ),
                                                                                                                                  ],
                                                                                                                          },
                                                                                                                      ),
                                                                                                                      e.id,
                                                                                                                  );
                                                                                                              },
                                                                                                          )) || [
                                                                                                        (0,
                                                                                                        n.jsx)(
                                                                                                            'p',
                                                                                                            {
                                                                                                                children:
                                                                                                                    'ничего',
                                                                                                            },
                                                                                                        ),
                                                                                                    ],
                                                                                                    paragraphs:
                                                                                                        (null ==
                                                                                                        re
                                                                                                            ? void 0
                                                                                                            : re.map(
                                                                                                                  function (
                                                                                                                      e,
                                                                                                                  ) {
                                                                                                                      return (0,
                                                                                                                      n.jsxs)(
                                                                                                                          S.g,
                                                                                                                          be(
                                                                                                                              {
                                                                                                                                  maxW: !0,
                                                                                                                                  gap: '0',
                                                                                                                              },
                                                                                                                              {
                                                                                                                                  children:
                                                                                                                                      [
                                                                                                                                          (0,
                                                                                                                                          n.jsxs)(
                                                                                                                                              S.U,
                                                                                                                                              be(
                                                                                                                                                  {
                                                                                                                                                      maxW: !0,
                                                                                                                                                  },
                                                                                                                                                  {
                                                                                                                                                      children:
                                                                                                                                                          [
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'b',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          'Возраст:',
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'p',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          e.age,
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                          ],
                                                                                                                                                  },
                                                                                                                                              ),
                                                                                                                                          ),
                                                                                                                                          (0,
                                                                                                                                          n.jsxs)(
                                                                                                                                              S.U,
                                                                                                                                              be(
                                                                                                                                                  {
                                                                                                                                                      maxW: !0,
                                                                                                                                                  },
                                                                                                                                                  {
                                                                                                                                                      children:
                                                                                                                                                          [
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'b',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          'Факультет:',
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'p',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          e.faculty,
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                          ],
                                                                                                                                                  },
                                                                                                                                              ),
                                                                                                                                          ),
                                                                                                                                          (0,
                                                                                                                                          n.jsxs)(
                                                                                                                                              S.U,
                                                                                                                                              be(
                                                                                                                                                  {
                                                                                                                                                      maxW: !0,
                                                                                                                                                  },
                                                                                                                                                  {
                                                                                                                                                      children:
                                                                                                                                                          [
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'b',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          'Специальность:',
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'p',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          e.department,
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                          ],
                                                                                                                                                  },
                                                                                                                                              ),
                                                                                                                                          ),
                                                                                                                                          (0,
                                                                                                                                          n.jsxs)(
                                                                                                                                              S.U,
                                                                                                                                              be(
                                                                                                                                                  {
                                                                                                                                                      maxW: !0,
                                                                                                                                                  },
                                                                                                                                                  {
                                                                                                                                                      children:
                                                                                                                                                          [
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'b',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          'Хобби:',
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                              (0,
                                                                                                                                                              n.jsx)(
                                                                                                                                                                  'p',
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          e.hobby,
                                                                                                                                                                  },
                                                                                                                                                              ),
                                                                                                                                                          ],
                                                                                                                                                  },
                                                                                                                                              ),
                                                                                                                                          ),
                                                                                                                                      ],
                                                                                                                              },
                                                                                                                          ),
                                                                                                                          e.id,
                                                                                                                      );
                                                                                                                  },
                                                                                                              )) || [
                                                                                                            (0,
                                                                                                            n.jsx)(
                                                                                                                'p',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        'ничего',
                                                                                                                },
                                                                                                            ),
                                                                                                        ],
                                                                                                },
                                                                                            ),
                                                                                      (0, n.jsx)(
                                                                                          K,
                                                                                          {
                                                                                              totalCandidates:
                                                                                                  ae,
                                                                                              setCurrentLimit:
                                                                                                  E,
                                                                                              setCurrentPage:
                                                                                                  C,
                                                                                              currentPage:
                                                                                                  w,
                                                                                              currentLimit:
                                                                                                  T,
                                                                                          },
                                                                                      ),
                                                                                  ],
                                                                              },
                                                                          ),
                                                                      ),
                                                                      (0, n.jsxs)(
                                                                          B.E,
                                                                          be(
                                                                              {
                                                                                  size: 60,
                                                                                  className:
                                                                                      xe.tableWrapper,
                                                                              },
                                                                              {
                                                                                  children: [
                                                                                      (0, n.jsx)(
                                                                                          N,
                                                                                          {
                                                                                              data: m,
                                                                                              onRowDelete:
                                                                                                  ce,
                                                                                          },
                                                                                      ),
                                                                                      (0, n.jsx)(
                                                                                          Y.I,
                                                                                          {
                                                                                              className:
                                                                                                  xe.input,
                                                                                              value: v,
                                                                                              onChange:
                                                                                                  k,
                                                                                              placeholder:
                                                                                                  'Введите задачу, которую необходимо решить',
                                                                                          },
                                                                                      ),
                                                                                      (0, n.jsxs)(
                                                                                          S.U,
                                                                                          be(
                                                                                              {
                                                                                                  maxW: !0,
                                                                                                  justify:
                                                                                                      'end',
                                                                                                  className:
                                                                                                      (0,
                                                                                                      r.A)(
                                                                                                          xe.detailedComparisonLinkWrapper,
                                                                                                          ((a =
                                                                                                              {}),
                                                                                                          (a[
                                                                                                              xe.active
                                                                                                          ] =
                                                                                                              v.length >=
                                                                                                                  10 &&
                                                                                                              m.length >=
                                                                                                                  2 &&
                                                                                                              m.length <=
                                                                                                                  6),
                                                                                                          a),
                                                                                                      ),
                                                                                                  onClick:
                                                                                                      ie,
                                                                                              },
                                                                                              {
                                                                                                  children:
                                                                                                      [
                                                                                                          (0,
                                                                                                          n.jsx)(
                                                                                                              Z.xv,
                                                                                                              {
                                                                                                                  title: 'Перейти к подробному сравнению',
                                                                                                                  size: 'small',
                                                                                                                  align: 'right',
                                                                                                                  className:
                                                                                                                      (0,
                                                                                                                      r.A)(
                                                                                                                          xe.detailedComparisonLink,
                                                                                                                          ((t =
                                                                                                                              {}),
                                                                                                                          (t[
                                                                                                                              xe.active
                                                                                                                          ] =
                                                                                                                              v.length >=
                                                                                                                                  10 &&
                                                                                                                              m.length >=
                                                                                                                                  2 &&
                                                                                                                              m.length <=
                                                                                                                                  6),
                                                                                                                          t),
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                          (0,
                                                                                                          n.jsx)(
                                                                                                              D.J,
                                                                                                              {
                                                                                                                  Svg: q,
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
                                  },
                              ),
                          )
                        : (0, n.jsx)(
                              i.W,
                              be(
                                  { reducers: je, removeAfterUnmount: !1 },
                                  {
                                      children: (0, n.jsx)(
                                          l.T,
                                          be(
                                              { className: (0, r.A)(xe.CandidatesPage, {}, [o]) },
                                              {
                                                  children: (0, n.jsx)('h2', {
                                                      children: 'ничего не нашли',
                                                  }),
                                              },
                                          ),
                                      ),
                                  },
                              ),
                          )
                );
            });
        },
        1221: (e, a, t) => {
            t.d(a, { Z: () => k });
            var n = t(5893),
                r = t(4807),
                l = t(7294),
                s = t(3379),
                i = t.n(s),
                c = t(7795),
                o = t.n(c),
                d = t(569),
                u = t.n(d),
                p = t(3565),
                h = t.n(p),
                f = t(9216),
                m = t.n(f),
                g = t(4589),
                x = t.n(g),
                b = t(1864),
                y = {};
            (y.styleTagTransform = x()),
                (y.setAttributes = h()),
                (y.insert = u().bind(null, 'head')),
                (y.domAPI = o()),
                (y.insertStyleElement = m()),
                i()(b.Z, y);
            const j = b.Z && b.Z.locals ? b.Z.locals : void 0;
            var v = function () {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var a, t = 1, n = arguments.length; t < n; t++)
                                    for (var r in (a = arguments[t]))
                                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                },
                k = (0, l.memo)(function (e) {
                    var a = e.className,
                        t = e.children,
                        l = (function (e, a) {
                            var t = {};
                            for (var n in e)
                                Object.prototype.hasOwnProperty.call(e, n) &&
                                    a.indexOf(n) < 0 &&
                                    (t[n] = e[n]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                                    a.indexOf(n[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                                        (t[n[r]] = e[n[r]]);
                            }
                            return t;
                        })(e, ['className', 'children']);
                    return (0,
                    n.jsx)('div', v({ className: (0, r.A)(j.Card, {}, [a]) }, l, { children: t }));
                });
        },
        6088: (e, a, t) => {
            t.d(a, { W: () => s });
            var n = t(5893),
                r = t(7294),
                l = t(3942),
                s = function (e) {
                    var a = (0, l.oR)(),
                        t = (0, l.I0)(),
                        s = e.children,
                        i = e.reducers,
                        c = e.removeAfterUnmount,
                        o = void 0 === c || c;
                    return (
                        (0, r.useEffect)(function () {
                            var e = a.reducerManager.getMountedReducers;
                            return (
                                Object.entries(i).forEach(function (n) {
                                    var r = n[0],
                                        l = n[1];
                                    e[r] ||
                                        (a.reducerManager.add(r, l),
                                        t({ type: '@INIT '.concat(r, ' reducer') }));
                                }),
                                function () {
                                    o &&
                                        Object.entries(i).forEach(function (e) {
                                            var n = e[0];
                                            a.reducerManager.remove(n),
                                                t({ type: '@DESTROY '.concat(n, ' reducer') });
                                        });
                                }
                            );
                        }, []),
                        (0, n.jsx)(n.Fragment, { children: s })
                    );
                };
        },
        9170: (e, a, t) => {
            t.d(a, { a: () => r });
            var n = t(9655);
            function r() {
                var e = (0, n.lr)(),
                    a = e[0],
                    t = e[1];
                return {
                    addSearchParams: function (e) {
                        for (var n in e) a.set(n, e[n]);
                        t(a);
                    },
                    deleteSearchParams: function (e) {
                        a.delete(e), t(a);
                    },
                    getSearchParams: function () {
                        return (
                            Array.from(a.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            }) || []
                        );
                    },
                    getSearchParam: function (e) {
                        var t,
                            n = Array.from(a.entries()).map(function (e) {
                                return { param: e[0], value: e[1] };
                            });
                        return (
                            (null ===
                                (t = n.filter(function (a) {
                                    return a.param === e;
                                })[0]) || void 0 === t
                                ? void 0
                                : t.value) || void 0
                        );
                    },
                };
            }
        },
        235: (e, a, t) => {
            t.d(a, { Z: () => i });
            var n = t(8081),
                r = t.n(n),
                l = t(3645),
                s = t.n(l)()(r());
            s.push([
                e.id,
                '.e9df0 h1,.e9df0 h2,.e9df0 h3,.e9df0 h4{margin:0}.feaf1{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px}.feaf1 p{line-height:17px;margin:0 0 0 5px}.fbe48{position:sticky;bottom:20px}.b6c7d *{text-align:center;align-self:center}.acf93{margin-bottom:20px}.affdd{width:50px;height:50px;border-radius:10px;font-size:12px}.d09aa p{margin:0}.f169f{border:none;background:rgba(0,0,0,0);display:flex;align-items:start;gap:10px;outline:none;position:relative}.fc42d{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px;position:sticky;top:-20px}.e375b{margin-top:20px}.b62f5{cursor:not-allowed;margin:20px}.c92f3 h3{margin:0;color:rgba(100,100,100,.7)}.b358d{cursor:pointer}.b358d h3{color:rgba(0,0,0,0) !important;font:var(--font-m);font-weight:bold;-webkit-background-clip:text !important;background-clip:text !important;background-image:var(--accent-gradient) !important}.d81bd{align-items:start;position:relative}.d8a23{padding:10px 15px;border-radius:8px;outline:2px solid rgba(255,255,255,.06)}.a7542{width:40%}.deaba{width:100%}.af420{width:60%}',
                '',
            ]),
                (s.locals = {
                    'textBlock': 'e9df0',
                    'accordion': 'feaf1',
                    'paginator': 'fbe48',
                    'p-datatable-wrapper': 'b6c7d',
                    'deleteBtn': 'acf93',
                    'img': 'affdd',
                    'disclosureBug': 'd09aa',
                    'contentWrapper': 'f169f',
                    'tableWrapper': 'fc42d',
                    'input': 'e375b',
                    'detailedComparisonLinkWrapper': 'b62f5',
                    'detailedComparisonLink': 'c92f3',
                    'active': 'b358d',
                    'skeletonWrapper': 'd81bd',
                    'skeletonCard': 'd8a23',
                    'skeletonList': 'a7542',
                    'skeletonListFetching': 'deaba',
                    'skeletonTable': 'af420',
                });
            const i = s;
        },
        1864: (e, a, t) => {
            t.d(a, { Z: () => i });
            var n = t(8081),
                r = t.n(n),
                l = t(3645),
                s = t.n(l)()(r());
            s.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (s.locals = { Card: 'd2057' });
            const i = s;
        },
        5583: (e, a, t) => {
            t.d(a, { Z: () => i });
            var n = t(8081),
                r = t.n(n),
                l = t(3645),
                s = t.n(l)()(r());
            s.push([e.id, '', '']), (s.locals = {});
            const i = s;
        },
        8057: (e, a, t) => {
            t.d(a, { Z: () => i });
            var n = t(8081),
                r = t.n(n),
                l = t(3645),
                s = t.n(l)()(r());
            s.push([e.id, '.f4146{width:100%}', '']), (s.locals = { Table: 'f4146' });
            const i = s;
        },
        702: (e, a, t) => {
            t.d(a, { Z: () => i });
            var n = t(8081),
                r = t.n(n),
                l = t(3645),
                s = t.n(l)()(r());
            s.push([e.id, '.a0bee{max-width:50vw}.f1dcd{width:500px}.a5723{margin-top:20px}', '']),
                (s.locals = { modal: 'a0bee', sliderWrapper: 'f1dcd', wrapper: 'a5723' });
            const i = s;
        },
        9485: (e, a, t) => {
            t.d(a, { Z: () => i });
            var n = t(8081),
                r = t.n(n),
                l = t(3645),
                s = t.n(l)()(r());
            s.push([e.id, '', '']), (s.locals = {});
            const i = s;
        },
    },
]);
