'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [487],
    {
        6487: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ve });
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
                h = n.n(f),
                m = n(3565),
                v = n.n(m),
                g = n(9216),
                x = n.n(g),
                b = n(4589),
                y = n.n(b),
                j = n(8830),
                w = {};
            (w.styleTagTransform = y()),
                (w.setAttributes = v()),
                (w.insert = h().bind(null, 'head')),
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
                S = (0, i.memo)(function (e) {
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
                O = n(3401),
                A = n(7667),
                C = {};
            (C.styleTagTransform = y()),
                (C.setAttributes = v()),
                (C.insert = h().bind(null, 'head')),
                (C.domAPI = p()),
                (C.insertStyleElement = x()),
                u()(A.Z, C);
            const T = A.Z && A.Z.locals ? A.Z.locals : void 0;
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
                q = (0, i.memo)(function (e) {
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
                    a.jsx)(s.U, k({ maxW: !0, className: (0, r.A)(T.InputMask, {}, [t]) }, { children: (0, a.jsx)(O.v, { required: u, style: { width: '100%' }, value: l, onChange: d, mask: o || '99-999999', placeholder: c || '99-999999' }) }));
                }),
                P = n(9704),
                I = n(2540),
                W = n(8918),
                E = n(7730),
                U = n(8189),
                z = {};
            (z.styleTagTransform = y()),
                (z.setAttributes = v()),
                (z.insert = h().bind(null, 'head')),
                (z.domAPI = p()),
                (z.insertStyleElement = x()),
                u()(U.Z, z);
            const F = U.Z && U.Z.locals ? U.Z.locals : void 0;
            var V,
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
                J = (0, i.memo)(function (e) {
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
                        h = (0, i.useCallback)(
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
                                className: (0, r.A)(F.Autocomplete, {}, [t]),
                            },
                            {
                                children: (0, a.jsx)(E.Q, {
                                    required: c,
                                    placeholder: o,
                                    value: l,
                                    suggestions: d,
                                    completeMethod: h,
                                    onChange: function (e) {
                                        return n(e.value);
                                    },
                                }),
                            },
                        ),
                    );
                }),
                M = n(7828);
            function _() {
                return (
                    (_ = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var a in n)
                                      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                              }
                              return e;
                          }),
                    _.apply(this, arguments)
                );
            }
            const D = function (e) {
                return i.createElement(
                    'svg',
                    _(
                        {
                            width: 100,
                            height: 100,
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e,
                    ),
                    V ||
                        (V = i.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M5.847 50c0-24.385 19.767-44.153 44.152-44.153 24.384 0 44.152 19.768 44.152 44.152S74.383 94.151 50 94.151C25.614 94.151 5.847 74.383 5.847 50Zm44.152-37.82C29.112 12.18 12.18 29.112 12.18 50a37.68 37.68 0 0 0 9.868 25.475c5.89-9.2 16.207-15.308 27.954-15.308 11.745 0 22.06 6.106 27.95 15.305a37.682 37.682 0 0 0 9.866-25.473c0-20.887-16.933-37.819-37.82-37.819Zm23.213 67.678C68.559 71.863 59.905 66.5 50.002 66.5c-9.905 0-18.56 5.365-23.212 13.36a37.653 37.653 0 0 0 23.209 7.958c8.75 0 16.805-2.971 23.213-7.96ZM34.333 43.366c0-8.653 7.014-15.667 15.667-15.667 8.652 0 15.666 7.014 15.666 15.667 0 8.652-7.014 15.666-15.666 15.666-8.653 0-15.667-7.014-15.667-15.666ZM50 34.032A9.333 9.333 0 1 0 50 52.7a9.333 9.333 0 0 0 0-18.667Z',
                            fill: '#686B6E',
                        })),
                );
            };
            var R = n(8949),
                L = n(2469),
                Q = n(8898),
                B = {};
            (B.styleTagTransform = y()),
                (B.setAttributes = v()),
                (B.insert = h().bind(null, 'head')),
                (B.domAPI = p()),
                (B.insertStyleElement = x()),
                u()(Q.Z, B);
            const H = Q.Z && Q.Z.locals ? Q.Z.locals : void 0;
            var K = function () {
                    return (
                        (K =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        K.apply(this, arguments)
                    );
                },
                X = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.required,
                        l = e.name,
                        o = e.setFile,
                        c = e.file,
                        u = e.placeholder,
                        d = void 0 === u ? 'Ваше фото' : u,
                        p = e.type,
                        f = (0, i.useState)(''),
                        h = f[0],
                        m = f[1];
                    return (0, a.jsxs)(
                        s.g,
                        K(
                            { className: (0, r.A)(H.AvatarUpload, {}, [t]) },
                            {
                                children: [
                                    (0, a.jsxs)(
                                        'label',
                                        K(
                                            { htmlFor: p, className: H.label },
                                            {
                                                children: [
                                                    !h &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                'img' === p &&
                                                                    (0, a.jsx)(R.J, { Svg: D }),
                                                                (0, a.jsx)(M.xv, {
                                                                    align: 'center',
                                                                    text: d,
                                                                    className: H.text,
                                                                }),
                                                            ],
                                                        }),
                                                    h &&
                                                        (null == c
                                                            ? void 0
                                                            : c.type.includes('image')) &&
                                                        (0, a.jsx)('img', {
                                                            className: H.img,
                                                            src: h,
                                                            alt:
                                                                (null == c ? void 0 : c.name) ||
                                                                'Файл',
                                                        }),
                                                    h &&
                                                        !(null == c
                                                            ? void 0
                                                            : c.type.includes('image')) &&
                                                        (0, a.jsxs)(
                                                            s.g,
                                                            K(
                                                                { maxW: !0 },
                                                                {
                                                                    children: [
                                                                        (0, a.jsx)(L.aAW, {
                                                                            className: H.img,
                                                                        }),
                                                                        (0, a.jsx)(M.xv, {
                                                                            text:
                                                                                (null == c
                                                                                    ? void 0
                                                                                    : c.name) ||
                                                                                'Файл',
                                                                            className: H.text,
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
                                        className: H.input,
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
                                                    m(a.result), o(n);
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
                Y = n(7974),
                $ = n(7674),
                ee = {};
            (ee.styleTagTransform = y()),
                (ee.setAttributes = v()),
                (ee.insert = h().bind(null, 'head')),
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
                        h = (0, i.useCallback)(
                            function (e) {
                                l(e.value);
                            },
                            [l],
                        );
                    return (0,
                    a.jsx)(s.U, ne({ maxW: !0, className: (0, r.A)(te.Slider, {}, [t]) }, { children: (0, a.jsx)(Y.i, { style: { width: '100%' }, min: c, max: d, step: f, value: n, onChange: h }) }));
                }),
                re = n(4710),
                le = n(508),
                ie = {};
            (ie.styleTagTransform = y()),
                (ie.setAttributes = v()),
                (ie.insert = h().bind(null, 'head')),
                (ie.domAPI = p()),
                (ie.insertStyleElement = x()),
                u()(le.Z, ie);
            const se = le.Z && le.Z.locals ? le.Z.locals : void 0;
            var oe = function () {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                },
                ce = (0, i.memo)(function (e) {
                    var t = e.className,
                        n = e.setValue,
                        l = e.value,
                        i = e.title;
                    return (0, a.jsxs)(
                        s.U,
                        oe(
                            { maxW: !0, className: (0, r.A)(se.DiplomaScoreInput, {}, [t]) },
                            {
                                children: [
                                    (0, a.jsx)('div', oe({ className: se.title }, { children: i })),
                                    (0, a.jsx)(I.I, {
                                        min: 3,
                                        max: 5,
                                        className: se.input,
                                        value: l,
                                        onChange: function (e) {
                                            return n(~~e);
                                        },
                                        placeholder: '5',
                                    }),
                                ],
                            },
                        ),
                    );
                }),
                ue = n(8794),
                de = n(2569),
                pe = {};
            (pe.styleTagTransform = y()),
                (pe.setAttributes = v()),
                (pe.insert = h().bind(null, 'head')),
                (pe.domAPI = p()),
                (pe.insertStyleElement = x()),
                u()(de.Z, pe);
            const fe = de.Z && de.Z.locals ? de.Z.locals : void 0;
            var he = n(8608).p.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            fetchCandidates: e.query({
                                query: function () {
                                    return { url: '/api/subjects/fetch' };
                                },
                            }),
                        };
                    },
                }).useFetchCandidatesQuery,
                me = function () {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, a = arguments.length; n < a; n++)
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                };
            const ve = (0, i.memo)(function (e) {
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
                    h = f[0],
                    m = f[1],
                    v = (0, i.useState)([]),
                    g = v[0],
                    x = v[1],
                    b = (0, i.useState)(''),
                    y = b[0],
                    j = b[1],
                    w = (0, i.useState)(''),
                    N = w[0],
                    Z = w[1],
                    O = (0, i.useState)(24),
                    A = O[0],
                    C = O[1],
                    T = (0, i.useState)({ department: '', faculty: '' }),
                    k = T[0],
                    E = T[1],
                    U = (0, i.useState)([]),
                    z = U[0],
                    F = U[1],
                    V = he(),
                    G = V.data,
                    _ = V.isLoading,
                    D = (0, i.useCallback)(
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
                    me(
                        { className: (0, r.A)(fe.CreateCandidatePage, {}, [t]) },
                        {
                            children: [
                                (0, a.jsx)(P.V, { title: 'Регистрация кандидата' }),
                                (0, a.jsx)(
                                    'form',
                                    me(
                                        { onSubmit: D, encType: 'multipart/form-data' },
                                        {
                                            children: (0, a.jsxs)(
                                                s.g,
                                                me(
                                                    { maxW: !0, gap: '16' },
                                                    {
                                                        children: [
                                                            (0, a.jsxs)(
                                                                s.g,
                                                                me(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                W.i,
                                                                                me(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            fe.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                M.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        fe.dividerTitle,
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
                                                                                me(
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
                                                                                                me(
                                                                                                    {
                                                                                                        className:
                                                                                                            fe.flexGrow,
                                                                                                        gap: '16',
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    I.I,
                                                                                                                    {
                                                                                                                        autoFocus:
                                                                                                                            !0,
                                                                                                                        onChange:
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                            ) {
                                                                                                                                return c(
                                                                                                                                    me(
                                                                                                                                        me(
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
                                                                                                                    I.I,
                                                                                                                    {
                                                                                                                        onChange:
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                            ) {
                                                                                                                                return c(
                                                                                                                                    me(
                                                                                                                                        me(
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
                                                                                                                    I.I,
                                                                                                                    {
                                                                                                                        onChange:
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                            ) {
                                                                                                                                return c(
                                                                                                                                    me(
                                                                                                                                        me(
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
                                                                                                X,
                                                                                                {
                                                                                                    name: 'img',
                                                                                                    file: d,
                                                                                                    setFile:
                                                                                                        p,
                                                                                                    required:
                                                                                                        !0,
                                                                                                    type: 'img',
                                                                                                    className:
                                                                                                        fe.avatarUpload,
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
                                                                me(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                W.i,
                                                                                me(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            fe.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                M.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        fe.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Ключевые навыки',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            (0, a.jsx)(S, {
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
                                                                me(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                W.i,
                                                                                me(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            fe.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                M.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        fe.dividerTitle,
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
                                                                                me(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        gap: '16',
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                q,
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
                                                                                                J,
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
                                                                me(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                W.i,
                                                                                me(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            fe.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                M.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        fe.dividerTitle,
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
                                                                                me(
                                                                                    {
                                                                                        maxW: !0,
                                                                                        gap: '16',
                                                                                        align: 'start',
                                                                                    },
                                                                                    {
                                                                                        children: [
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                I.I,
                                                                                                {
                                                                                                    value: k.faculty,
                                                                                                    onChange:
                                                                                                        function (
                                                                                                            e,
                                                                                                        ) {
                                                                                                            return E(
                                                                                                                me(
                                                                                                                    me(
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
                                                                                                I.I,
                                                                                                {
                                                                                                    value: k.department,
                                                                                                    onChange:
                                                                                                        function (
                                                                                                            e,
                                                                                                        ) {
                                                                                                            return E(
                                                                                                                me(
                                                                                                                    me(
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
                                                                                                me(
                                                                                                    {
                                                                                                        maxW: !0,
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    I.I,
                                                                                                                    {
                                                                                                                        disabled:
                                                                                                                            !0,
                                                                                                                        value: A,
                                                                                                                        className:
                                                                                                                            fe.ageInput,
                                                                                                                    },
                                                                                                                ),
                                                                                                                (0,
                                                                                                                a.jsx)(
                                                                                                                    ae,
                                                                                                                    {
                                                                                                                        value: A,
                                                                                                                        setValue:
                                                                                                                            C,
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
                                                                me(
                                                                    { maxW: !0, gap: '8' },
                                                                    {
                                                                        children: [
                                                                            (0, a.jsx)(
                                                                                W.i,
                                                                                me(
                                                                                    {
                                                                                        align: 'left',
                                                                                        className:
                                                                                            fe.divider,
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            a.jsx)(
                                                                                                M.xv,
                                                                                                {
                                                                                                    className:
                                                                                                        fe.dividerTitle,
                                                                                                    align: 'left',
                                                                                                    text: 'Оценки диплома',
                                                                                                    size: 'small',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            _ &&
                                                                                (0, a.jsx)(
                                                                                    'div',
                                                                                    me(
                                                                                        {
                                                                                            className:
                                                                                                fe.subjectsGrid,
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
                                                                                me(
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
                                                                                                    me(
                                                                                                        {
                                                                                                            className:
                                                                                                                fe.subjectsGrid,
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
                                                                                                                            ce,
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
                                                                                                                                        return F(
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
                                                                                                X,
                                                                                                {
                                                                                                    name: 'document',
                                                                                                    file: h,
                                                                                                    setFile:
                                                                                                        m,
                                                                                                    required:
                                                                                                        !0,
                                                                                                    className:
                                                                                                        fe.avatarUpload,
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
                                                                ue.z,
                                                                me(
                                                                    {
                                                                        className: fe.button,
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
        8189: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(8081),
                r = n.n(a),
                l = n(3645),
                i = n.n(l)()(r());
            i.push([e.id, '', '']), (i.locals = {});
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
                '.f074e{position:absolute;top:-9999px;left:-9999px}.f4583{cursor:pointer;width:220px;height:220px;padding:10px 15px;border-radius:8px;background:rgba(0,0,0,0);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;outline:1px solid #686b6e}.f0877{width:100%}.f0877 p{color:#82dbf7;font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bad2d{width:180px;height:180px;border-radius:8px}',
                '',
            ]),
                (i.locals = { input: 'f074e', label: 'f4583', text: 'f0877', img: 'bad2d' });
            const s = i;
        },
    },
]);
