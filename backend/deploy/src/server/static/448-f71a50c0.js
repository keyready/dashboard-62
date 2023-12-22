'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [448],
    {
        556: (e, t, n) => {
            n.r(t), n.d(t, { default: () => pe });
            var a = n(5893),
                r = n(4807),
                l = n(2594),
                i = n(7294),
                s = n(7543),
                o = n(7506),
                c = n(3379),
                u = n.n(c),
                d = n(7795),
                p = n.n(d),
                f = n(569),
                m = n.n(f),
                h = n(3565),
                v = n.n(h),
                g = n(9216),
                x = n.n(g),
                b = n(4589),
                y = n.n(b),
                j = n(8830),
                w = {};
            (w.styleTagTransform = y()),
                (w.setAttributes = v()),
                (w.insert = m().bind(null, 'head')),
                (w.domAPI = p()),
                (w.insertStyleElement = x()),
                u()(j.Z, w);
            const N = j.Z && j.Z.locals ? j.Z.locals : void 0;
            var Z = function () {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                },
                O = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.chips,
                        l = e.setChips,
                        c = e.placeholder,
                        u = e.required,
                        d = (0, i.useCallback)(
                            function (e) {
                                l(e.value);
                            },
                            [l],
                        );
                    return (0,
                    a.jsx)(s.U, Z({ maxW: !0, className: (0, r.A)(N.Chips, {}, [t]) }, { children: (0, a.jsx)(o.c, { required: u, style: { width: '100% !important' }, placeholder: c, value: n, onChange: d }) }));
                }),
                S = n(3401),
                A = n(7667),
                T = {};
            (T.styleTagTransform = y()),
                (T.setAttributes = v()),
                (T.insert = m().bind(null, 'head')),
                (T.domAPI = p()),
                (T.insertStyleElement = x()),
                u()(A.Z, T);
            const P = A.Z && A.Z.locals ? A.Z.locals : void 0;
            var k = function () {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                },
                C = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.setValue,
                        l = e.value,
                        o = e.mask,
                        c = e.placeholder,
                        u = e.required,
                        d = (0, i.useCallback)(
                            function (e) {
                                var t = e.target.value;
                                t && n(t);
                            },
                            [n],
                        );
                    return (0,
                    a.jsx)(s.U, k({ maxW: !0, className: (0, r.A)(P.InputMask, {}, [t]) }, { children: (0, a.jsx)(S.v, { required: u, style: { width: '100%' }, value: l, onChange: d, mask: o || '99-999999', placeholder: c || '99-999999' }) }));
                }),
                I = n(577),
                q = n(2540),
                E = n(8918),
                W = n(7730),
                U = n(2198),
                z = {};
            (z.styleTagTransform = y()),
                (z.setAttributes = v()),
                (z.insert = m().bind(null, 'head')),
                (z.domAPI = p()),
                (z.insertStyleElement = x()),
                u()(U.Z, z);
            const V = U.Z && U.Z.locals ? U.Z.locals : void 0;
            var F,
                G = function () {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                },
                M = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.setValue,
                        l = e.value,
                        o = e.placeholder,
                        c = e.required,
                        u = (0, i.useState)([]),
                        d = u[0],
                        p = u[1],
                        f = (0, i.useMemo)(function () {
                            return 'mail.ru yandex.ru list.ru inbox.ru gmail.com'.split(' ');
                        }, []),
                        m = (0, i.useCallback)(
                            function (e) {
                                return (
                                    (t = void 0),
                                    (n = void 0),
                                    (r = function () {
                                        var t, n;
                                        return (function (e, t) {
                                            var n,
                                                a,
                                                r,
                                                l,
                                                i = {
                                                    label: 0,
                                                    sent: function () {
                                                        if (1 & r[0]) throw r[1];
                                                        return r[1];
                                                    },
                                                    trys: [],
                                                    ops: [],
                                                };
                                            return (
                                                (l = { next: s(0), throw: s(1), return: s(2) }),
                                                'function' == typeof Symbol &&
                                                    (l[Symbol.iterator] = function () {
                                                        return this;
                                                    }),
                                                l
                                            );
                                            function s(s) {
                                                return function (o) {
                                                    return (function (s) {
                                                        if (n)
                                                            throw new TypeError(
                                                                'Generator is already executing.',
                                                            );
                                                        for (; l && ((l = 0), s[0] && (i = 0)), i; )
                                                            try {
                                                                if (
                                                                    ((n = 1),
                                                                    a &&
                                                                        (r =
                                                                            2 & s[0]
                                                                                ? a.return
                                                                                : s[0]
                                                                                ? a.throw ||
                                                                                  ((r = a.return) &&
                                                                                      r.call(a),
                                                                                  0)
                                                                                : a.next) &&
                                                                        !(r = r.call(a, s[1])).done)
                                                                )
                                                                    return r;
                                                                switch (
                                                                    ((a = 0),
                                                                    r && (s = [2 & s[0], r.value]),
                                                                    s[0])
                                                                ) {
                                                                    case 0:
                                                                    case 1:
                                                                        r = s;
                                                                        break;
                                                                    case 4:
                                                                        return (
                                                                            i.label++,
                                                                            {
                                                                                value: s[1],
                                                                                done: !1,
                                                                            }
                                                                        );
                                                                    case 5:
                                                                        i.label++,
                                                                            (a = s[1]),
                                                                            (s = [0]);
                                                                        continue;
                                                                    case 7:
                                                                        (s = i.ops.pop()),
                                                                            i.trys.pop();
                                                                        continue;
                                                                    default:
                                                                        if (
                                                                            !(
                                                                                (r =
                                                                                    (r = i.trys)
                                                                                        .length >
                                                                                        0 &&
                                                                                    r[
                                                                                        r.length - 1
                                                                                    ]) ||
                                                                                (6 !== s[0] &&
                                                                                    2 !== s[0])
                                                                            )
                                                                        ) {
                                                                            i = 0;
                                                                            continue;
                                                                        }
                                                                        if (
                                                                            3 === s[0] &&
                                                                            (!r ||
                                                                                (s[1] > r[0] &&
                                                                                    s[1] < r[3]))
                                                                        ) {
                                                                            i.label = s[1];
                                                                            break;
                                                                        }
                                                                        if (
                                                                            6 === s[0] &&
                                                                            i.label < r[1]
                                                                        ) {
                                                                            (i.label = r[1]),
                                                                                (r = s);
                                                                            break;
                                                                        }
                                                                        if (r && i.label < r[2]) {
                                                                            (i.label = r[2]),
                                                                                i.ops.push(s);
                                                                            break;
                                                                        }
                                                                        r[2] && i.ops.pop(),
                                                                            i.trys.pop();
                                                                        continue;
                                                                }
                                                                s = t.call(e, i);
                                                            } catch (e) {
                                                                (s = [6, e]), (a = 0);
                                                            } finally {
                                                                n = r = 0;
                                                            }
                                                        if (5 & s[0]) throw s[1];
                                                        return {
                                                            value: s[0] ? s[1] : void 0,
                                                            done: !0,
                                                        };
                                                    })([s, o]);
                                                };
                                            }
                                        })(this, function (a) {
                                            switch (a.label) {
                                                case 0:
                                                    return (t = e.query).includes('@')
                                                        ? [
                                                              4,
                                                              ((o = t),
                                                              (r = void 0),
                                                              (l = void 0),
                                                              (i = void 0),
                                                              (s = function () {
                                                                  var e;
                                                                  return (function (e, t) {
                                                                      var n,
                                                                          a,
                                                                          r,
                                                                          l,
                                                                          i = {
                                                                              label: 0,
                                                                              sent: function () {
                                                                                  if (1 & r[0])
                                                                                      throw r[1];
                                                                                  return r[1];
                                                                              },
                                                                              trys: [],
                                                                              ops: [],
                                                                          };
                                                                      return (
                                                                          (l = {
                                                                              next: s(0),
                                                                              throw: s(1),
                                                                              return: s(2),
                                                                          }),
                                                                          'function' ==
                                                                              typeof Symbol &&
                                                                              (l[Symbol.iterator] =
                                                                                  function () {
                                                                                      return this;
                                                                                  }),
                                                                          l
                                                                      );
                                                                      function s(s) {
                                                                          return function (o) {
                                                                              return (function (s) {
                                                                                  if (n)
                                                                                      throw new TypeError(
                                                                                          'Generator is already executing.',
                                                                                      );
                                                                                  for (
                                                                                      ;
                                                                                      l &&
                                                                                          ((l = 0),
                                                                                          s[0] &&
                                                                                              (i = 0)),
                                                                                          i;

                                                                                  )
                                                                                      try {
                                                                                          if (
                                                                                              ((n = 1),
                                                                                              a &&
                                                                                                  (r =
                                                                                                      2 &
                                                                                                      s[0]
                                                                                                          ? a.return
                                                                                                          : s[0]
                                                                                                          ? a.throw ||
                                                                                                            ((r =
                                                                                                                a.return) &&
                                                                                                                r.call(
                                                                                                                    a,
                                                                                                                ),
                                                                                                            0)
                                                                                                          : a.next) &&
                                                                                                  !(r =
                                                                                                      r.call(
                                                                                                          a,
                                                                                                          s[1],
                                                                                                      ))
                                                                                                      .done)
                                                                                          )
                                                                                              return r;
                                                                                          switch (
                                                                                              ((a = 0),
                                                                                              r &&
                                                                                                  (s =
                                                                                                      [
                                                                                                          2 &
                                                                                                              s[0],
                                                                                                          r.value,
                                                                                                      ]),
                                                                                              s[0])
                                                                                          ) {
                                                                                              case 0:
                                                                                              case 1:
                                                                                                  r =
                                                                                                      s;
                                                                                                  break;
                                                                                              case 4:
                                                                                                  return (
                                                                                                      i.label++,
                                                                                                      {
                                                                                                          value: s[1],
                                                                                                          done: !1,
                                                                                                      }
                                                                                                  );
                                                                                              case 5:
                                                                                                  i.label++,
                                                                                                      (a =
                                                                                                          s[1]),
                                                                                                      (s =
                                                                                                          [
                                                                                                              0,
                                                                                                          ]);
                                                                                                  continue;
                                                                                              case 7:
                                                                                                  (s =
                                                                                                      i.ops.pop()),
                                                                                                      i.trys.pop();
                                                                                                  continue;
                                                                                              default:
                                                                                                  if (
                                                                                                      !(
                                                                                                          (r =
                                                                                                              (r =
                                                                                                                  i.trys)
                                                                                                                  .length >
                                                                                                                  0 &&
                                                                                                              r[
                                                                                                                  r.length -
                                                                                                                      1
                                                                                                              ]) ||
                                                                                                          (6 !==
                                                                                                              s[0] &&
                                                                                                              2 !==
                                                                                                                  s[0])
                                                                                                      )
                                                                                                  ) {
                                                                                                      i = 0;
                                                                                                      continue;
                                                                                                  }
                                                                                                  if (
                                                                                                      3 ===
                                                                                                          s[0] &&
                                                                                                      (!r ||
                                                                                                          (s[1] >
                                                                                                              r[0] &&
                                                                                                              s[1] <
                                                                                                                  r[3]))
                                                                                                  ) {
                                                                                                      i.label =
                                                                                                          s[1];
                                                                                                      break;
                                                                                                  }
                                                                                                  if (
                                                                                                      6 ===
                                                                                                          s[0] &&
                                                                                                      i.label <
                                                                                                          r[1]
                                                                                                  ) {
                                                                                                      (i.label =
                                                                                                          r[1]),
                                                                                                          (r =
                                                                                                              s);
                                                                                                      break;
                                                                                                  }
                                                                                                  if (
                                                                                                      r &&
                                                                                                      i.label <
                                                                                                          r[2]
                                                                                                  ) {
                                                                                                      (i.label =
                                                                                                          r[2]),
                                                                                                          i.ops.push(
                                                                                                              s,
                                                                                                          );
                                                                                                      break;
                                                                                                  }
                                                                                                  r[2] &&
                                                                                                      i.ops.pop(),
                                                                                                      i.trys.pop();
                                                                                                  continue;
                                                                                          }
                                                                                          s =
                                                                                              t.call(
                                                                                                  e,
                                                                                                  i,
                                                                                              );
                                                                                      } catch (e) {
                                                                                          (s = [
                                                                                              6,
                                                                                              e,
                                                                                          ]),
                                                                                              (a = 0);
                                                                                      } finally {
                                                                                          n = r = 0;
                                                                                      }
                                                                                  if (5 & s[0])
                                                                                      throw s[1];
                                                                                  return {
                                                                                      value: s[0]
                                                                                          ? s[1]
                                                                                          : void 0,
                                                                                      done: !0,
                                                                                  };
                                                                              })([s, o]);
                                                                          };
                                                                      }
                                                                  })(this, function (t) {
                                                                      return (
                                                                          (e = {
                                                                              method: 'POST',
                                                                              mode: 'cors',
                                                                              headers: {
                                                                                  'Content-Type':
                                                                                      'application/json',
                                                                                  'Accept':
                                                                                      'application/json',
                                                                                  'Authorization':
                                                                                      'Token e47e04f64a9e3aeb70bdaa0dc5bfacfa6a853c39',
                                                                              },
                                                                              body: JSON.stringify({
                                                                                  query: o,
                                                                              }),
                                                                          }),
                                                                          [
                                                                              2,
                                                                              fetch(
                                                                                  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/email',
                                                                                  e,
                                                                              )
                                                                                  .then(function (
                                                                                      e,
                                                                                  ) {
                                                                                      return e.json();
                                                                                  })
                                                                                  .then(function (
                                                                                      e,
                                                                                  ) {
                                                                                      return e.suggestions.map(
                                                                                          function (
                                                                                              e,
                                                                                          ) {
                                                                                              return e
                                                                                                  .data
                                                                                                  .domain;
                                                                                          },
                                                                                      );
                                                                                  }),
                                                                          ]
                                                                      );
                                                                  });
                                                              }),
                                                              new (i || (i = Promise))(function (
                                                                  e,
                                                                  t,
                                                              ) {
                                                                  function n(e) {
                                                                      try {
                                                                          o(s.next(e));
                                                                      } catch (e) {
                                                                          t(e);
                                                                      }
                                                                  }
                                                                  function a(e) {
                                                                      try {
                                                                          o(s.throw(e));
                                                                      } catch (e) {
                                                                          t(e);
                                                                      }
                                                                  }
                                                                  function o(t) {
                                                                      var r;
                                                                      t.done
                                                                          ? e(t.value)
                                                                          : ((r = t.value),
                                                                            r instanceof i
                                                                                ? r
                                                                                : new i(function (
                                                                                      e,
                                                                                  ) {
                                                                                      e(r);
                                                                                  })).then(n, a);
                                                                  }
                                                                  o(
                                                                      (s = s.apply(
                                                                          r,
                                                                          l || [],
                                                                      )).next(),
                                                                  );
                                                              })),
                                                          ]
                                                        : [3, 2];
                                                case 1:
                                                    return (
                                                        (n = a.sent()),
                                                        p(
                                                            n.map(function (e) {
                                                                return ''
                                                                    .concat(t.split('@')[0], '@')
                                                                    .concat(e);
                                                            }),
                                                        ),
                                                        [2]
                                                    );
                                                case 2:
                                                    return (
                                                        p(
                                                            f.map(function (e) {
                                                                return ''.concat(t, '@').concat(e);
                                                            }),
                                                        ),
                                                        [2]
                                                    );
                                            }
                                            var r, l, i, s, o;
                                        });
                                    }),
                                    new ((a = void 0) || (a = Promise))(function (e, l) {
                                        function i(e) {
                                            try {
                                                o(r.next(e));
                                            } catch (e) {
                                                l(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                o(r.throw(e));
                                            } catch (e) {
                                                l(e);
                                            }
                                        }
                                        function o(t) {
                                            var n;
                                            t.done
                                                ? e(t.value)
                                                : ((n = t.value),
                                                  n instanceof a
                                                      ? n
                                                      : new a(function (e) {
                                                            e(n);
                                                        })).then(i, s);
                                        }
                                        o((r = r.apply(t, n || [])).next());
                                    })
                                );
                                var t, n, a, r;
                            },
                            [f],
                        );
                    return (0, a.jsx)(
                        s.U,
                        G(
                            {
                                justify: 'start',
                                maxW: !0,
                                className: (0, r.A)(V.Autocomplete, {}, [t]),
                            },
                            {
                                children: (0, a.jsx)(W.Q, {
                                    required: c,
                                    placeholder: o,
                                    value: l,
                                    suggestions: d,
                                    completeMethod: m,
                                    onChange: function (e) {
                                        return n(e.value);
                                    },
                                }),
                            },
                        ),
                    );
                }),
                J = n(7828);
            function D() {
                return (
                    (D = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var a in n)
                                      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                              }
                              return e;
                          }),
                    D.apply(this, arguments)
                );
            }
            const _ = function (e) {
                return i.createElement(
                    'svg',
                    D(
                        {
                            width: 100,
                            height: 100,
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e,
                    ),
                    F ||
                        (F = i.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M5.847 50c0-24.385 19.767-44.153 44.152-44.153 24.384 0 44.152 19.768 44.152 44.152S74.383 94.151 50 94.151C25.614 94.151 5.847 74.383 5.847 50Zm44.152-37.82C29.112 12.18 12.18 29.112 12.18 50a37.68 37.68 0 0 0 9.868 25.475c5.89-9.2 16.207-15.308 27.954-15.308 11.745 0 22.06 6.106 27.95 15.305a37.682 37.682 0 0 0 9.866-25.473c0-20.887-16.933-37.819-37.82-37.819Zm23.213 67.678C68.559 71.863 59.905 66.5 50.002 66.5c-9.905 0-18.56 5.365-23.212 13.36a37.653 37.653 0 0 0 23.209 7.958c8.75 0 16.805-2.971 23.213-7.96ZM34.333 43.366c0-8.653 7.014-15.667 15.667-15.667 8.652 0 15.666 7.014 15.666 15.667 0 8.652-7.014 15.666-15.666 15.666-8.653 0-15.667-7.014-15.667-15.666ZM50 34.032A9.333 9.333 0 1 0 50 52.7a9.333 9.333 0 0 0 0-18.667Z',
                            fill: '#686B6E',
                        })),
                );
            };
            var B = n(8949),
                R = n(2469),
                L = n(8898),
                Q = {};
            (Q.styleTagTransform = y()),
                (Q.setAttributes = v()),
                (Q.insert = m().bind(null, 'head')),
                (Q.domAPI = p()),
                (Q.insertStyleElement = x()),
                u()(L.Z, Q);
            const Y = L.Z && L.Z.locals ? L.Z.locals : void 0;
            var H = function () {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                },
                K = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.required,
                        l = e.name,
                        o = e.setFile,
                        c = e.file,
                        u = e.placeholder,
                        d = void 0 === u ? 'Ваше фото' : u,
                        p = e.type,
                        f = (0, i.useState)(''),
                        m = f[0],
                        h = f[1];
                    return (0, a.jsxs)(
                        s.g,
                        H(
                            { className: (0, r.A)(Y.AvatarUpload, {}, [t]) },
                            {
                                children: [
                                    (0, a.jsxs)(
                                        'label',
                                        H(
                                            { htmlFor: p, className: Y.label },
                                            {
                                                children: [
                                                    !m &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                'img' === p &&
                                                                    (0, a.jsx)(B.J, { Svg: _ }),
                                                                (0, a.jsx)(J.xv, {
                                                                    align: 'center',
                                                                    text: d,
                                                                    className: Y.text,
                                                                }),
                                                            ],
                                                        }),
                                                    m &&
                                                        (null == c
                                                            ? void 0
                                                            : c.type.includes('image')) &&
                                                        (0, a.jsx)('img', {
                                                            className: Y.img,
                                                            src: m,
                                                            alt:
                                                                (null == c ? void 0 : c.name) ||
                                                                'Файл',
                                                        }),
                                                    m &&
                                                        !(null == c
                                                            ? void 0
                                                            : c.type.includes('image')) &&
                                                        (0, a.jsxs)(
                                                            s.g,
                                                            H(
                                                                { maxW: !0 },
                                                                {
                                                                    children: [
                                                                        (0, a.jsx)(R.aAW, {
                                                                            className: Y.img,
                                                                        }),
                                                                        (0, a.jsx)(J.xv, {
                                                                            text:
                                                                                (null == c
                                                                                    ? void 0
                                                                                    : c.name) ||
                                                                                'Файл',
                                                                            className: Y.text,
                                                                            align: 'center',
                                                                        }),
                                                                    ],
                                                                },
                                                            ),
                                                        ),
                                                ],
                                            },
                                        ),
                                    ),
                                    (0, a.jsx)('input', {
                                        name: l,
                                        required: n,
                                        id: p,
                                        className: Y.input,
                                        type: 'file',
                                        accept: 'img' === p ? 'image/*' : 'application/pdf',
                                        onChange: function (e) {
                                            var t,
                                                n =
                                                    null === (t = e.target.files) || void 0 === t
                                                        ? void 0
                                                        : t[0];
                                            if (n) {
                                                var a = new FileReader();
                                                (a.onloadend = function () {
                                                    h(a.result), o(n);
                                                }),
                                                    a.readAsDataURL(n);
                                            }
                                        },
                                    }),
                                ],
                            },
                        ),
                    );
                }),
                X = n(7974),
                $ = n(7674),
                ee = {};
            (ee.styleTagTransform = y()),
                (ee.setAttributes = v()),
                (ee.insert = m().bind(null, 'head')),
                (ee.domAPI = p()),
                (ee.insertStyleElement = x()),
                u()($.Z, ee);
            const te = $.Z && $.Z.locals ? $.Z.locals : void 0;
            var ne = function () {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                },
                ae = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.value,
                        l = e.setValue,
                        o = e.min,
                        c = void 0 === o ? 18 : o,
                        u = e.max,
                        d = void 0 === u ? 40 : u,
                        p = e.step,
                        f = void 0 === p ? 1 : p,
                        m = (0, i.useCallback)(
                            function (e) {
                                l(e.value);
                            },
                            [l],
                        );
                    return (0,
                    a.jsx)(s.U, ne({ maxW: !0, className: (0, r.A)(te.Slider, {}, [t]) }, { children: (0, a.jsx)(X.i, { style: { width: '100%' }, min: c, max: d, step: f, value: n, onChange: m }) }));
                }),
                re = n(4710),
                le = n(5434),
                ie = n(7820),
                se = n(2569),
                oe = {};
            (oe.styleTagTransform = y()),
                (oe.setAttributes = v()),
                (oe.insert = m().bind(null, 'head')),
                (oe.domAPI = p()),
                (oe.insertStyleElement = x()),
                u()(se.Z, oe);
            const ce = se.Z && se.Z.locals ? se.Z.locals : void 0;
            var ue = n(3293),
                de = function () {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                };
            const pe = (0, i.memo)(function (e) {
                var t = e.className;
                (0, i.useEffect)(function () {
                    document.title = 'Подайте заявку';
                }, []);
                var n = (0, i.useState)({ firstname: '', lastname: '', middlename: '' }),
                    o = n[0],
                    c = n[1],
                    u = (0, i.useState)(),
                    d = u[0],
                    p = u[1],
                    f = (0, i.useState)(),
                    m = f[0],
                    h = f[1],
                    v = (0, i.useState)([]),
                    g = v[0],
                    x = v[1],
                    b = (0, i.useState)(''),
                    y = b[0],
                    j = b[1],
                    w = (0, i.useState)(''),
                    N = w[0],
                    Z = w[1],
                    S = (0, i.useState)(24),
                    A = S[0],
                    T = S[1],
                    P = (0, i.useState)({ department: '', faculty: '' }),
                    k = P[0],
                    W = P[1],
                    U = (0, i.useState)([]),
                    z = U[0],
                    V = U[1],
                    F = (0, ue.Y)(),
                    G = F.data,
                    D = F.isLoading,
                    _ = (0, i.useCallback)(
                        function (e) {
                            e.preventDefault();
                            var t = new FormData(e.currentTarget);
                            t.append('name', JSON.stringify(o)),
                                t.append('phoneNumber', y),
                                t.append('mail', N),
                                t.append('age', A.toString()),
                                t.append('education', JSON.stringify(k)),
                                t.append('subjectsScores', JSON.stringify(z)),
                                t.append('keySkills', JSON.stringify(g)),
                                fetch('http://localhost:5000/api/candidate/create', {
                                    method: 'POST',
                                    body: t,
                                })
                                    .then(function (e) {
                                        return e.json();
                                    })
                                    .then(function (e) {
                                        return console.log(e);
                                    })
                                    .catch(function (e) {
                                        return console.error(e);
                                    });
                        },
                        [A, k, g, N, o, y, z],
                    );
                return (0, a.jsxs)(
                    l.T,
                    de(
                        { className: (0, r.A)(ce.CreateCandidatePage, {}, [t]) },
                        {
                            children: [
                                (0, a.jsx)(I.V, { title: 'Регистрация кандидата' }),
                                (0, a.jsx)(
                                    'form',
                                    de(
                                        { onSubmit: _, encType: 'multipart/form-data' },
                                        {
                                            children: (0, a.jsxs)(
                                                s.g,
                                                de(
                                                    { maxW: !0, gap: '16' },
                                                    {
                                                        children: [
                                                            (0, a.jsxs)(
                                                                s.g,
                                                                de(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                E.i,
                                                                                de(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            ce.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                J.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        ce.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Основная информация',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsxs)(
                                                                                s.U,
                                                                                de(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        justify:
                                                                                            'between',
                                                                                        gap: '32',
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsxs)(
                                                                                                s.g,
                                                                                                de(
                                                                                                    {
                                                                                                        className:
                                                                                                            ce.flexGrow,
                                                                                                        gap: '16',
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    q.I,
                                                                                                                    {
                                                                                                                        autoFocus:
                                                                                                                            !0,
                                                                                                                        onChange:
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                            ) {
                                                                                                                                return c(
                                                                                                                                    de(
                                                                                                                                        de(
                                                                                                                                            {},
                                                                                                                                            o,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            lastname:
                                                                                                                                                e,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                );
                                                                                                                            },
                                                                                                                        value: o.lastname,
                                                                                                                        placeholder:
                                                                                                                            'Фамилия',
                                                                                                                        required:
                                                                                                                            !0,
                                                                                                                    },
                                                                                                                ),
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    q.I,
                                                                                                                    {
                                                                                                                        onChange:
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                            ) {
                                                                                                                                return c(
                                                                                                                                    de(
                                                                                                                                        de(
                                                                                                                                            {},
                                                                                                                                            o,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            firstname:
                                                                                                                                                e,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                );
                                                                                                                            },
                                                                                                                        value: o.firstname,
                                                                                                                        placeholder:
                                                                                                                            'Имя',
                                                                                                                        required:
                                                                                                                            !0,
                                                                                                                    },
                                                                                                                ),
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    q.I,
                                                                                                                    {
                                                                                                                        onChange:
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                            ) {
                                                                                                                                return c(
                                                                                                                                    de(
                                                                                                                                        de(
                                                                                                                                            {},
                                                                                                                                            o,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            middlename:
                                                                                                                                                e,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                );
                                                                                                                            },
                                                                                                                        value: o.middlename,
                                                                                                                        placeholder:
                                                                                                                            'Отчество (при наличии)',
                                                                                                                    },
                                                                                                                ),
                                                                                                            ],
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                K,
                                                                                                {
                                                                                                    name: 'img',
                                                                                                    file: d,
                                                                                                    setFile:
                                                                                                        p,
                                                                                                    required:
                                                                                                        !0,
                                                                                                    type: 'img',
                                                                                                    className:
                                                                                                        ce.avatarUpload,
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
                                                            (0, a.jsxs)(
                                                                s.g,
                                                                de(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                E.i,
                                                                                de(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            ce.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                J.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        ce.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Ключевые навыки',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsx)(O, {
                                                                                required: !0,
                                                                                placeholder:
                                                                                    'Ключевые навыки',
                                                                                chips: g,
                                                                                setChips: x,
                                                                            }),
                                                                        ],
                                                                    },
                                                                ),
                                                            ),
                                                            (0, a.jsxs)(
                                                                s.g,
                                                                de(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                E.i,
                                                                                de(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            ce.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                J.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        ce.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Как с Вами связаться?',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsxs)(
                                                                                s.U,
                                                                                de(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        gap: '16',
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                C,
                                                                                                {
                                                                                                    required:
                                                                                                        !0,
                                                                                                    value: y,
                                                                                                    setValue:
                                                                                                        j,
                                                                                                    placeholder:
                                                                                                        'Номер телефона',
                                                                                                    mask: '+9 (999) 999-99-99',
                                                                                                },
                                                                                            ),
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                M,
                                                                                                {
                                                                                                    required:
                                                                                                        !0,
                                                                                                    placeholder:
                                                                                                        'Почта',
                                                                                                    value: N,
                                                                                                    setValue:
                                                                                                        Z,
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
                                                            (0, a.jsxs)(
                                                                s.g,
                                                                de(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                E.i,
                                                                                de(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            ce.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                J.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        ce.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Подробнее о Вас',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsxs)(
                                                                                s.U,
                                                                                de(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        gap: '16',
                                                                                        align: 'start',
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                q.I,
                                                                                                {
                                                                                                    value: k.faculty,
                                                                                                    onChange:
                                                                                                        function (
                                                                                                            e,
                                                                                                        ) {
                                                                                                            return W(
                                                                                                                de(
                                                                                                                    de(
                                                                                                                        {},
                                                                                                                        k,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        faculty:
                                                                                                                            e,
                                                                                                                    },
                                                                                                                ),
                                                                                                            );
                                                                                                        },
                                                                                                    required:
                                                                                                        !0,
                                                                                                    placeholder:
                                                                                                        'Факультет',
                                                                                                },
                                                                                            ),
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                q.I,
                                                                                                {
                                                                                                    value: k.department,
                                                                                                    onChange:
                                                                                                        function (
                                                                                                            e,
                                                                                                        ) {
                                                                                                            return W(
                                                                                                                de(
                                                                                                                    de(
                                                                                                                        {},
                                                                                                                        k,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        department:
                                                                                                                            e,
                                                                                                                    },
                                                                                                                ),
                                                                                                            );
                                                                                                        },
                                                                                                    required:
                                                                                                        !0,
                                                                                                    placeholder:
                                                                                                        'Специальность',
                                                                                                },
                                                                                            ),
                                                                                            (0,
                                                                                            a.jsxs)(
                                                                                                s.g,
                                                                                                de(
                                                                                                    {
                                                                                                        maxW: !0,
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    q.I,
                                                                                                                    {
                                                                                                                        disabled:
                                                                                                                            !0,
                                                                                                                        value: A,
                                                                                                                        className:
                                                                                                                            ce.ageInput,
                                                                                                                    },
                                                                                                                ),
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    ae,
                                                                                                                    {
                                                                                                                        value: A,
                                                                                                                        setValue:
                                                                                                                            T,
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
                                                            (0, a.jsxs)(
                                                                s.g,
                                                                de(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                E.i,
                                                                                de(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            ce.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                J.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        ce.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Оценки диплома',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            D &&
                                                                                (0, a.jsx)(
                                                                                    'div',
                                                                                    de(
                                                                                        {
                                                                                            className:
                                                                                                ce.subjectsGrid,
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
                                                                                                            t,
                                                                                                        ) {
                                                                                                            return (0,
                                                                                                            a.jsx)(
                                                                                                                re.O,
                                                                                                                {
                                                                                                                    width: '100%',
                                                                                                                    height: '40px',
                                                                                                                },
                                                                                                                t,
                                                                                                            );
                                                                                                        },
                                                                                                    ),
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            (0, a.jsxs)(
                                                                                s.U,
                                                                                de(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        gap: '16',
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (null ==
                                                                                            G
                                                                                                ? void 0
                                                                                                : G.length) &&
                                                                                                (0,
                                                                                                a.jsx)(
                                                                                                    'div',
                                                                                                    de(
                                                                                                        {
                                                                                                            className:
                                                                                                                ce.subjectsGrid,
                                                                                                        },
                                                                                                        {
                                                                                                            children:
                                                                                                                G.map(
                                                                                                                    function (
                                                                                                                        e,
                                                                                                                    ) {
                                                                                                                        var t,
                                                                                                                            n =
                                                                                                                                e.title,
                                                                                                                            r =
                                                                                                                                e.id;
                                                                                                                        return (0,
                                                                                                                        a.jsx)(
                                                                                                                            le.g,
                                                                                                                            {
                                                                                                                                value:
                                                                                                                                    null ===
                                                                                                                                        (t =
                                                                                                                                            z[
                                                                                                                                                r
                                                                                                                                            ]) ||
                                                                                                                                    void 0 ===
                                                                                                                                        t
                                                                                                                                        ? void 0
                                                                                                                                        : t.score,
                                                                                                                                setValue:
                                                                                                                                    function (
                                                                                                                                        e,
                                                                                                                                    ) {
                                                                                                                                        return V(
                                                                                                                                            function (
                                                                                                                                                t,
                                                                                                                                            ) {
                                                                                                                                                var a =
                                                                                                                                                    (function (
                                                                                                                                                        e,
                                                                                                                                                        t,
                                                                                                                                                        n,
                                                                                                                                                    ) {
                                                                                                                                                        if (
                                                                                                                                                            n ||
                                                                                                                                                            2 ===
                                                                                                                                                                arguments.length
                                                                                                                                                        )
                                                                                                                                                            for (
                                                                                                                                                                var a,
                                                                                                                                                                    r = 0,
                                                                                                                                                                    l =
                                                                                                                                                                        t.length;
                                                                                                                                                                r <
                                                                                                                                                                l;
                                                                                                                                                                r++
                                                                                                                                                            )
                                                                                                                                                                (!a &&
                                                                                                                                                                    r in
                                                                                                                                                                        t) ||
                                                                                                                                                                    (a ||
                                                                                                                                                                        (a =
                                                                                                                                                                            Array.prototype.slice.call(
                                                                                                                                                                                t,
                                                                                                                                                                                0,
                                                                                                                                                                                r,
                                                                                                                                                                            )),
                                                                                                                                                                    (a[
                                                                                                                                                                        r
                                                                                                                                                                    ] =
                                                                                                                                                                        t[
                                                                                                                                                                            r
                                                                                                                                                                        ]));
                                                                                                                                                        return e.concat(
                                                                                                                                                            a ||
                                                                                                                                                                Array.prototype.slice.call(
                                                                                                                                                                    t,
                                                                                                                                                                ),
                                                                                                                                                        );
                                                                                                                                                    })(
                                                                                                                                                        [],
                                                                                                                                                        t,
                                                                                                                                                        !0,
                                                                                                                                                    );
                                                                                                                                                return (
                                                                                                                                                    (a[
                                                                                                                                                        r
                                                                                                                                                    ] =
                                                                                                                                                        {
                                                                                                                                                            title: n,
                                                                                                                                                            score: e,
                                                                                                                                                        }),
                                                                                                                                                    a
                                                                                                                                                );
                                                                                                                                            },
                                                                                                                                        );
                                                                                                                                    },
                                                                                                                                title: n,
                                                                                                                            },
                                                                                                                            r,
                                                                                                                        );
                                                                                                                    },
                                                                                                                ),
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                K,
                                                                                                {
                                                                                                    name: 'document',
                                                                                                    file: m,
                                                                                                    setFile:
                                                                                                        h,
                                                                                                    required:
                                                                                                        !0,
                                                                                                    className:
                                                                                                        ce.avatarUpload,
                                                                                                    type: 'file',
                                                                                                    placeholder:
                                                                                                        'Ваш аттестат',
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
                                                            (0, a.jsx)(
                                                                ie.z,
                                                                de(
                                                                    {
                                                                        className: ce.button,
                                                                        variant: 'success',
                                                                        type: 'submit',
                                                                    },
                                                                    {
                                                                        children:
                                                                            'Отправить анкету',
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
                            ],
                        },
                    ),
                );
            });
        },
        5434: (e, t, n) => {
            n.d(t, { g: () => Z });
            var a = n(5893),
                r = n(4807),
                l = n(7294),
                i = n(7543),
                s = n(2540),
                o = n(3379),
                c = n.n(o),
                u = n(7795),
                d = n.n(u),
                p = n(569),
                f = n.n(p),
                m = n(3565),
                h = n.n(m),
                v = n(9216),
                g = n.n(v),
                x = n(4589),
                b = n.n(x),
                y = n(508),
                j = {};
            (j.styleTagTransform = b()),
                (j.setAttributes = h()),
                (j.insert = f().bind(null, 'head')),
                (j.domAPI = d()),
                (j.insertStyleElement = g()),
                c()(y.Z, j);
            const w = y.Z && y.Z.locals ? y.Z.locals : void 0;
            var N = function () {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                },
                Z = (0, l.memo)(function (e) {
                    var t = e.className,
                        n = e.setValue,
                        l = e.value,
                        o = e.title,
                        c = e.disabled;
                    return (0, a.jsxs)(
                        i.U,
                        N(
                            { maxW: !0, className: (0, r.A)(w.DiplomaScoreInput, {}, [t]) },
                            {
                                children: [
                                    (0, a.jsx)('div', N({ className: w.title }, { children: o })),
                                    (0, a.jsx)(s.I, {
                                        disabled: c,
                                        min: 3,
                                        max: 5,
                                        required: !0,
                                        className: w.input,
                                        value: l,
                                        onChange: function (e) {
                                            return null == n ? void 0 : n(~~e);
                                        },
                                        placeholder: '3',
                                    }),
                                ],
                            },
                        ),
                    );
                });
        },
        577: (e, t, n) => {
            n.d(t, { V: () => z });
            var a = n(5893),
                r = n(4807),
                l = n(7294),
                i = n(3379),
                s = n.n(i),
                o = n(7795),
                c = n.n(o),
                u = n(569),
                d = n.n(u),
                p = n(3565),
                f = n.n(p),
                m = n(9216),
                h = n.n(m),
                v = n(4589),
                g = n.n(v),
                x = n(1864),
                b = {};
            (b.styleTagTransform = g()),
                (b.setAttributes = f()),
                (b.insert = d().bind(null, 'head')),
                (b.domAPI = c()),
                (b.insertStyleElement = h()),
                s()(x.Z, b);
            const y = x.Z && x.Z.locals ? x.Z.locals : void 0;
            var j = function () {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                },
                w = (0, l.memo)(function (e) {
                    var t = e.className,
                        n = e.children,
                        l = (function (e, t) {
                            var n = {};
                            for (var a in e)
                                Object.prototype.hasOwnProperty.call(e, a) &&
                                    t.indexOf(a) < 0 &&
                                    (n[a] = e[a]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                                    t.indexOf(a[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                                        (n[a[r]] = e[a[r]]);
                            }
                            return n;
                        })(e, ['className', 'children']);
                    return (0,
                    a.jsx)('div', j({ className: (0, r.A)(y.Card, {}, [t]) }, l, { children: n }));
                }),
                N = n(7828),
                Z = n(7543),
                O = n(5020),
                S = n(2469),
                A = n(9250),
                T = n(4498),
                P = {};
            (P.styleTagTransform = g()),
                (P.setAttributes = f()),
                (P.insert = d().bind(null, 'head')),
                (P.domAPI = c()),
                (P.insertStyleElement = h()),
                s()(T.Z, P);
            const k = T.Z && T.Z.locals ? T.Z.locals : void 0;
            var C = function () {
                    return (
                        (C =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        C.apply(this, arguments)
                    );
                },
                I = (0, l.memo)(function (e) {
                    var t = e.className,
                        n = e.path,
                        i = (0, l.useMemo)(function () {
                            return { url: '/', icon: (0, a.jsx)(S.tvw, {}) };
                        }, []),
                        s = (0, A.s0)();
                    return (0, a.jsx)(O.c, {
                        model: n.map(function (e) {
                            return C(C({}, e), {
                                command: function (t) {
                                    t.originalEvent.preventDefault(), s(e.url || '');
                                },
                            });
                        }),
                        home: i,
                        className: (0, r.A)(k.Breadcrumb, {}, [t]),
                    });
                }),
                q = n(5559),
                E = {};
            (E.styleTagTransform = g()),
                (E.setAttributes = f()),
                (E.insert = d().bind(null, 'head')),
                (E.domAPI = c()),
                (E.insertStyleElement = h()),
                s()(q.Z, E);
            const W = q.Z && q.Z.locals ? q.Z.locals : void 0;
            var U = function () {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                },
                z = (0, l.memo)(function (e) {
                    var t = e.className,
                        n = e.title,
                        l = e.breadcrumbPath;
                    return (0,
                    a.jsxs)(Z.g, U({ justify: 'start', className: (0, r.A)(W.PageTitle, {}, [t]) }, { children: [(null == l ? void 0 : l.length) && (0, a.jsx)(I, { className: W.bc, path: l }), (0, a.jsx)(w, U({ className: W.card }, { children: (0, a.jsx)(N.xv, { align: 'left', size: 'large', className: W.textBlock, title: n }) }))] }));
                });
        },
        2569: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([
                e.id,
                '.c3210{margin:35px 0 0}.c3210:first-child{margin:0}.d6c82{padding:2px 7px;border-radius:8px;background:#1a1d21}.d6c82 p{color:#999}.d9936{flex-grow:1}.f7eb7{border-bottom:none;margin-bottom:-2px}.c3501{display:grid;flex-grow:1;grid-template-columns:repeat(3, 1fr);grid-gap:10px}.d96d1{width:100%;margin-top:30px}',
                '',
            ]),
                (i.locals = {
                    divider: 'c3210',
                    dividerTitle: 'd6c82',
                    flexGrow: 'd9936',
                    ageInput: 'f7eb7',
                    subjectsGrid: 'c3501',
                    button: 'd96d1',
                });
            const s = i;
        },
        4498: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([e.id, '', '']), (i.locals = {});
            const s = i;
        },
        1864: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([
                e.id,
                '.d2057{padding:15px 20px;border-radius:16px;background:var(--card-bg);box-shadow:0 -2px 0 0 var(--card-shadow)}',
                '',
            ]),
                (i.locals = { Card: 'd2057' });
            const s = i;
        },
        8830: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([e.id, '', '']), (i.locals = {});
            const s = i;
        },
        508: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([
                e.id,
                '.ea37c{width:260px;height:100%;padding:10px 15px;border-radius:8px;color:#000;background:linear-gradient(92deg, #b6f09c 0%, #82dbf7 100%);z-index:10}.a8220{width:70px;height:100%;z-index:5;margin-left:-15px;text-align:right}',
                '',
            ]),
                (i.locals = { title: 'ea37c', input: 'a8220' });
            const s = i;
        },
        7667: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([e.id, '', '']), (i.locals = {});
            const s = i;
        },
        2198: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([e.id, '', '']), (i.locals = {});
            const s = i;
        },
        7674: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([e.id, '', '']), (i.locals = {});
            const s = i;
        },
        8898: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([
                e.id,
                '.f074e{position:absolute;opacity:0;z-index:-1}.f4583{cursor:pointer;width:220px;height:220px;padding:10px 15px;border-radius:8px;background:rgba(0,0,0,0);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;outline:1px solid #686b6e}.f0877{width:100%}.f0877 p{color:#82dbf7;font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bad2d{width:180px;height:180px;border-radius:8px}',
                '',
            ]),
                (i.locals = { input: 'f074e', label: 'f4583', text: 'f0877', img: 'bad2d' });
            const s = i;
        },
        5559: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([
                e.id,
                '.ecd81{margin:0 0 40px;max-width:100%}.f2d6a h1{margin:0}.b6604{margin-bottom:20px}',
                '',
            ]),
                (i.locals = { card: 'ecd81', textBlock: 'f2d6a', bc: 'b6604' });
            const s = i;
        },
    },
]);
