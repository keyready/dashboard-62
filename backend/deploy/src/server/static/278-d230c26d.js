'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [278],
    {
        6088: (e, a, l) => {
            l.d(a, { W: () => r });
            var t = l(5893),
                d = l(7294),
                n = l(3942),
                r = function (e) {
                    var a = (0, n.oR)(),
                        l = (0, n.I0)(),
                        r = e.children,
                        c = e.reducers,
                        b = e.removeAfterUnmount,
                        y = void 0 === b || b;
                    return (
                        (0, d.useEffect)(function () {
                            var e = a.reducerManager.getMountedReducers;
                            return (
                                Object.entries(c).forEach(function (t) {
                                    var d = t[0],
                                        n = t[1];
                                    e[d] ||
                                        (a.reducerManager.add(d, n),
                                        l({ type: '@INIT '.concat(d, ' reducer') }));
                                }),
                                function () {
                                    y &&
                                        Object.entries(c).forEach(function (e) {
                                            var t = e[0];
                                            a.reducerManager.remove(t),
                                                l({ type: '@DESTROY '.concat(t, ' reducer') });
                                        });
                                }
                            );
                        }, []),
                        (0, t.jsx)(t.Fragment, { children: r })
                    );
                };
        },
        9975: (e, a, l) => {
            l.d(a, { m: () => E });
            var t = l(5893),
                d = l(7294),
                n = l(9976),
                r = l(3379),
                c = l.n(r),
                b = l(7795),
                y = l.n(b),
                k = l(569),
                o = l.n(k),
                i = l(3565),
                u = l.n(i),
                s = l(9216),
                f = l.n(s),
                h = l(4589),
                v = l.n(h),
                m = l(9485),
                p = {};
            (p.styleTagTransform = v()),
                (p.setAttributes = u()),
                (p.insert = o().bind(null, 'head')),
                (p.domAPI = y()),
                (p.insertStyleElement = f()),
                c()(m.Z, p);
            const g = m.Z && m.Z.locals ? m.Z.locals : void 0;
            var S = function (e, a, l) {
                    if (l || 2 === arguments.length)
                        for (var t, d = 0, n = a.length; d < n; d++)
                            (!t && d in a) ||
                                (t || (t = Array.prototype.slice.call(a, 0, d)), (t[d] = a[d]));
                    return e.concat(t || Array.prototype.slice.call(a));
                },
                E = (0, d.memo)(function (e) {
                    var a = e.setSelectedParams,
                        l = e.selectedParams,
                        r = (0, d.useState)(),
                        c = r[0],
                        b = r[1],
                        y = (0, d.useState)(null),
                        k = y[0],
                        o = y[1];
                    (0, d.useEffect)(function () {
                        b([
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
                    var i = (0, d.useCallback)(
                            function (e) {
                                var t = e.node.label;
                                t && a(S(S([], l, !0), [t], !1));
                            },
                            [l, a],
                        ),
                        u = (0, d.useCallback)(
                            function (e) {
                                var t = e.node.label;
                                t &&
                                    a(
                                        l.filter(function (e) {
                                            return e !== t;
                                        }),
                                    );
                            },
                            [l, a],
                        );
                    return (0, t.jsx)(n.m, {
                        placeholder: 'Выберите специальность',
                        onNodeSelect: i,
                        onNodeUnselect: u,
                        className: g.Tree,
                        value: k,
                        onChange: function (e) {
                            return o(e.value);
                        },
                        options: c,
                        metaKeySelection: !1,
                        selectionMode: 'checkbox',
                        display: 'chip',
                    });
                });
        },
        9485: (e, a, l) => {
            l.d(a, { Z: () => c });
            var t = l(8081),
                d = l.n(t),
                n = l(3645),
                r = l.n(n)()(d());
            r.push([e.id, '', '']), (r.locals = {});
            const c = r;
        },
    },
]);
