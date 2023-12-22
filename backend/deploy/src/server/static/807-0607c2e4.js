'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [807],
    {
        5807: (e, t, r) => {
            r.d(t, { L: () => v });
            var n = r(7294),
                i = r(4320);
            function o() {
                return (
                    (o = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r)
                                      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    o.apply(this, arguments)
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function u(e, t) {
                if (e) {
                    if ('string' == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r && e.constructor && (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? a(e, t)
                            : void 0
                    );
                }
            }
            function l(e) {
                return (
                    (l =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              }),
                    l(e)
                );
            }
            function c(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return a(e);
                    })(e) ||
                    (function (e) {
                        if (
                            ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                            null != e['@@iterator']
                        )
                            return Array.from(e);
                    })(e) ||
                    u(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(
                            e,
                            ((i = n.key),
                            (o = void 0),
                            (o = (function (e, t) {
                                if ('object' !== l(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, 'string');
                                    if ('object' !== l(n)) return n;
                                    throw new TypeError(
                                        '@@toPrimitive must return a primitive value.',
                                    );
                                }
                                return String(e);
                            })(i)),
                            'symbol' === l(o) ? o : String(o)),
                            n,
                        );
                }
                var i, o;
            }
            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var y = (function () {
                    function e() {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError('Cannot call a class as a function');
                        })(this, e);
                    }
                    var t, r;
                    return (
                        (t = e),
                        (r = [
                            {
                                key: 'equals',
                                value: function (e, t, r) {
                                    return r && e && 'object' === l(e) && t && 'object' === l(t)
                                        ? this.resolveFieldData(e, r) ===
                                              this.resolveFieldData(t, r)
                                        : this.deepEquals(e, t);
                                },
                            },
                            {
                                key: 'deepEquals',
                                value: function (e, t) {
                                    if (e === t) return !0;
                                    if (e && t && 'object' == l(e) && 'object' == l(t)) {
                                        var r,
                                            n,
                                            i,
                                            o = Array.isArray(e),
                                            a = Array.isArray(t);
                                        if (o && a) {
                                            if ((n = e.length) !== t.length) return !1;
                                            for (r = n; 0 != r--; )
                                                if (!this.deepEquals(e[r], t[r])) return !1;
                                            return !0;
                                        }
                                        if (o !== a) return !1;
                                        var u = e instanceof Date,
                                            c = t instanceof Date;
                                        if (u !== c) return !1;
                                        if (u && c) return e.getTime() === t.getTime();
                                        var f = e instanceof RegExp,
                                            s = t instanceof RegExp;
                                        if (f !== s) return !1;
                                        if (f && s) return e.toString() === t.toString();
                                        var y = Object.keys(e);
                                        if ((n = y.length) !== Object.keys(t).length) return !1;
                                        for (r = n; 0 != r--; )
                                            if (!Object.prototype.hasOwnProperty.call(t, y[r]))
                                                return !1;
                                        for (r = n; 0 != r--; )
                                            if (((i = y[r]), !this.deepEquals(e[i], t[i])))
                                                return !1;
                                        return !0;
                                    }
                                    return e != e && t != t;
                                },
                            },
                            {
                                key: 'resolveFieldData',
                                value: function (e, t) {
                                    if (!e || !t) return null;
                                    try {
                                        var r = e[t];
                                        if (this.isNotEmpty(r)) return r;
                                    } catch (e) {}
                                    if (Object.keys(e).length) {
                                        if (this.isFunction(t)) return t(e);
                                        if (this.isNotEmpty(e[t])) return e[t];
                                        if (-1 === t.indexOf('.')) return e[t];
                                        for (
                                            var n = t.split('.'), i = e, o = 0, a = n.length;
                                            o < a;
                                            ++o
                                        ) {
                                            if (null == i) return null;
                                            i = i[n[o]];
                                        }
                                        return i;
                                    }
                                    return null;
                                },
                            },
                            {
                                key: 'findDiffKeys',
                                value: function (e, t) {
                                    return e && t
                                        ? Object.keys(e)
                                              .filter(function (e) {
                                                  return !t.hasOwnProperty(e);
                                              })
                                              .reduce(function (t, r) {
                                                  return (t[r] = e[r]), t;
                                              }, {})
                                        : {};
                                },
                            },
                            {
                                key: 'reduceKeys',
                                value: function (e, t) {
                                    var r = {};
                                    return e && t && 0 !== t.length
                                        ? (Object.keys(e)
                                              .filter(function (e) {
                                                  return t.some(function (t) {
                                                      return e.startsWith(t);
                                                  });
                                              })
                                              .forEach(function (t) {
                                                  (r[t] = e[t]), delete e[t];
                                              }),
                                          r)
                                        : r;
                                },
                            },
                            {
                                key: 'reorderArray',
                                value: function (e, t, r) {
                                    e &&
                                        t !== r &&
                                        (r >= e.length && ((r %= e.length), (t %= e.length)),
                                        e.splice(r, 0, e.splice(t, 1)[0]));
                                },
                            },
                            {
                                key: 'findIndexInList',
                                value: function (e, t, r) {
                                    var n = this;
                                    return t
                                        ? r
                                            ? t.findIndex(function (t) {
                                                  return n.equals(t, e, r);
                                              })
                                            : t.findIndex(function (t) {
                                                  return t === e;
                                              })
                                        : -1;
                                },
                            },
                            {
                                key: 'getJSXElement',
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            r = new Array(t > 1 ? t - 1 : 0),
                                            n = 1;
                                        n < t;
                                        n++
                                    )
                                        r[n - 1] = arguments[n];
                                    return this.isFunction(e) ? e.apply(void 0, r) : e;
                                },
                            },
                            {
                                key: 'getItemValue',
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            r = new Array(t > 1 ? t - 1 : 0),
                                            n = 1;
                                        n < t;
                                        n++
                                    )
                                        r[n - 1] = arguments[n];
                                    return this.isFunction(e) ? e.apply(void 0, r) : e;
                                },
                            },
                            {
                                key: 'getProp',
                                value: function (e) {
                                    var t =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : '',
                                        r =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {},
                                        n = e ? e[t] : void 0;
                                    return void 0 === n ? r[t] : n;
                                },
                            },
                            {
                                key: 'getPropCaseInsensitive',
                                value: function (e, t) {
                                    var r =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {},
                                        n = this.toFlatCase(t);
                                    for (var i in e)
                                        if (e.hasOwnProperty(i) && this.toFlatCase(i) === n)
                                            return e[i];
                                    for (var o in r)
                                        if (r.hasOwnProperty(o) && this.toFlatCase(o) === n)
                                            return r[o];
                                },
                            },
                            {
                                key: 'getMergedProps',
                                value: function (e, t) {
                                    return Object.assign({}, t, e);
                                },
                            },
                            {
                                key: 'getDiffProps',
                                value: function (e, t) {
                                    return this.findDiffKeys(e, t);
                                },
                            },
                            {
                                key: 'getPropValue',
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            r = new Array(t > 1 ? t - 1 : 0),
                                            n = 1;
                                        n < t;
                                        n++
                                    )
                                        r[n - 1] = arguments[n];
                                    return this.isFunction(e) ? e.apply(void 0, r) : e;
                                },
                            },
                            {
                                key: 'getComponentProp',
                                value: function (e) {
                                    var t =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : '',
                                        r =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {};
                                    return this.isNotEmpty(e)
                                        ? this.getProp(e.props, t, r)
                                        : void 0;
                                },
                            },
                            {
                                key: 'getComponentProps',
                                value: function (e, t) {
                                    return this.isNotEmpty(e)
                                        ? this.getMergedProps(e.props, t)
                                        : void 0;
                                },
                            },
                            {
                                key: 'getComponentDiffProps',
                                value: function (e, t) {
                                    return this.isNotEmpty(e)
                                        ? this.getDiffProps(e.props, t)
                                        : void 0;
                                },
                            },
                            {
                                key: 'isValidChild',
                                value: function (e, t, r) {
                                    return (
                                        !!e &&
                                        (this.getComponentProp(e, '__TYPE') ||
                                            (e.type ? e.type.displayName : void 0)) === t
                                    );
                                },
                            },
                            {
                                key: 'getRefElement',
                                value: function (e) {
                                    return e
                                        ? 'object' === l(e) && e.hasOwnProperty('current')
                                            ? e.current
                                            : e
                                        : null;
                                },
                            },
                            {
                                key: 'combinedRefs',
                                value: function (e, t) {
                                    e &&
                                        t &&
                                        ('function' == typeof t
                                            ? t(e.current)
                                            : (t.current = e.current));
                                },
                            },
                            {
                                key: 'removeAccents',
                                value: function (e) {
                                    return (
                                        e &&
                                            e.search(/[\xC0-\xFF]/g) > -1 &&
                                            (e = e
                                                .replace(/[\xC0-\xC5]/g, 'A')
                                                .replace(/[\xC6]/g, 'AE')
                                                .replace(/[\xC7]/g, 'C')
                                                .replace(/[\xC8-\xCB]/g, 'E')
                                                .replace(/[\xCC-\xCF]/g, 'I')
                                                .replace(/[\xD0]/g, 'D')
                                                .replace(/[\xD1]/g, 'N')
                                                .replace(/[\xD2-\xD6\xD8]/g, 'O')
                                                .replace(/[\xD9-\xDC]/g, 'U')
                                                .replace(/[\xDD]/g, 'Y')
                                                .replace(/[\xDE]/g, 'P')
                                                .replace(/[\xE0-\xE5]/g, 'a')
                                                .replace(/[\xE6]/g, 'ae')
                                                .replace(/[\xE7]/g, 'c')
                                                .replace(/[\xE8-\xEB]/g, 'e')
                                                .replace(/[\xEC-\xEF]/g, 'i')
                                                .replace(/[\xF1]/g, 'n')
                                                .replace(/[\xF2-\xF6\xF8]/g, 'o')
                                                .replace(/[\xF9-\xFC]/g, 'u')
                                                .replace(/[\xFE]/g, 'p')
                                                .replace(/[\xFD\xFF]/g, 'y')),
                                        e
                                    );
                                },
                            },
                            {
                                key: 'toFlatCase',
                                value: function (e) {
                                    return this.isNotEmpty(e) && this.isString(e)
                                        ? e.replace(/(-|_)/g, '').toLowerCase()
                                        : e;
                                },
                            },
                            {
                                key: 'toCapitalCase',
                                value: function (e) {
                                    return this.isNotEmpty(e) && this.isString(e)
                                        ? e[0].toUpperCase() + e.slice(1)
                                        : e;
                                },
                            },
                            {
                                key: 'trim',
                                value: function (e) {
                                    return this.isNotEmpty(e) && this.isString(e) ? e.trim() : e;
                                },
                            },
                            {
                                key: 'isEmpty',
                                value: function (e) {
                                    return (
                                        null == e ||
                                        '' === e ||
                                        (Array.isArray(e) && 0 === e.length) ||
                                        (!(e instanceof Date) &&
                                            'object' === l(e) &&
                                            0 === Object.keys(e).length)
                                    );
                                },
                            },
                            {
                                key: 'isNotEmpty',
                                value: function (e) {
                                    return !this.isEmpty(e);
                                },
                            },
                            {
                                key: 'isFunction',
                                value: function (e) {
                                    return !!(e && e.constructor && e.call && e.apply);
                                },
                            },
                            {
                                key: 'isObject',
                                value: function (e) {
                                    return (
                                        null !== e &&
                                        e instanceof Object &&
                                        e.constructor === Object
                                    );
                                },
                            },
                            {
                                key: 'isDate',
                                value: function (e) {
                                    return (
                                        null !== e && e instanceof Date && e.constructor === Date
                                    );
                                },
                            },
                            {
                                key: 'isArray',
                                value: function (e) {
                                    return null !== e && Array.isArray(e);
                                },
                            },
                            {
                                key: 'isString',
                                value: function (e) {
                                    return null !== e && 'string' == typeof e;
                                },
                            },
                            {
                                key: 'isPrintableCharacter',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : '';
                                    return this.isNotEmpty(e) && 1 === e.length && e.match(/\S| /);
                                },
                            },
                            {
                                key: 'isLetter',
                                value: function (e) {
                                    return (
                                        e &&
                                        (e.toUpperCase() != e.toLowerCase() ||
                                            e.codePointAt(0) > 127)
                                    );
                                },
                            },
                            {
                                key: 'findLast',
                                value: function (e, t) {
                                    var r;
                                    if (this.isNotEmpty(e))
                                        try {
                                            r = e.findLast(t);
                                        } catch (n) {
                                            r = c(e).reverse().find(t);
                                        }
                                    return r;
                                },
                            },
                            {
                                key: 'findLastIndex',
                                value: function (e, t) {
                                    var r = -1;
                                    if (this.isNotEmpty(e))
                                        try {
                                            r = e.findLastIndex(t);
                                        } catch (n) {
                                            r = e.lastIndexOf(c(e).reverse().find(t));
                                        }
                                    return r;
                                },
                            },
                            {
                                key: 'sort',
                                value: function (e, t) {
                                    var r =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : 1,
                                        n = arguments.length > 3 ? arguments[3] : void 0,
                                        i =
                                            arguments.length > 4 && void 0 !== arguments[4]
                                                ? arguments[4]
                                                : 1,
                                        o = this.compare(e, t, n, r),
                                        a = r;
                                    return (
                                        (this.isEmpty(e) || this.isEmpty(t)) &&
                                            (a = 1 === i ? r : i),
                                        a * o
                                    );
                                },
                            },
                            {
                                key: 'compare',
                                value: function (e, t, r) {
                                    var n =
                                            arguments.length > 3 && void 0 !== arguments[3]
                                                ? arguments[3]
                                                : 1,
                                        i = this.isEmpty(e),
                                        o = this.isEmpty(t);
                                    return i && o
                                        ? 0
                                        : i
                                        ? n
                                        : o
                                        ? -n
                                        : 'string' == typeof e && 'string' == typeof t
                                        ? r(e, t)
                                        : e < t
                                        ? -1
                                        : e > t
                                        ? 1
                                        : 0;
                                },
                            },
                            {
                                key: 'localeComparator',
                                value: function (e) {
                                    return new Intl.Collator(e, { numeric: !0 }).compare;
                                },
                            },
                            {
                                key: 'findChildrenByKey',
                                value: function (e, t) {
                                    var r,
                                        n = (function (e, t) {
                                            var r =
                                                ('undefined' != typeof Symbol &&
                                                    e[Symbol.iterator]) ||
                                                e['@@iterator'];
                                            if (!r) {
                                                if (
                                                    Array.isArray(e) ||
                                                    (r = (function (e, t) {
                                                        if (e) {
                                                            if ('string' == typeof e)
                                                                return s(e, t);
                                                            var r = Object.prototype.toString
                                                                .call(e)
                                                                .slice(8, -1);
                                                            return (
                                                                'Object' === r &&
                                                                    e.constructor &&
                                                                    (r = e.constructor.name),
                                                                'Map' === r || 'Set' === r
                                                                    ? Array.from(e)
                                                                    : 'Arguments' === r ||
                                                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                          r,
                                                                      )
                                                                    ? s(e, t)
                                                                    : void 0
                                                            );
                                                        }
                                                    })(e)) ||
                                                    (t && e && 'number' == typeof e.length)
                                                ) {
                                                    r && (e = r);
                                                    var n = 0,
                                                        i = function () {};
                                                    return {
                                                        s: i,
                                                        n: function () {
                                                            return n >= e.length
                                                                ? { done: !0 }
                                                                : { done: !1, value: e[n++] };
                                                        },
                                                        e: function (e) {
                                                            throw e;
                                                        },
                                                        f: i,
                                                    };
                                                }
                                                throw new TypeError(
                                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                );
                                            }
                                            var o,
                                                a = !0,
                                                u = !1;
                                            return {
                                                s: function () {
                                                    r = r.call(e);
                                                },
                                                n: function () {
                                                    var e = r.next();
                                                    return (a = e.done), e;
                                                },
                                                e: function (e) {
                                                    (u = !0), (o = e);
                                                },
                                                f: function () {
                                                    try {
                                                        a || null == r.return || r.return();
                                                    } finally {
                                                        if (u) throw o;
                                                    }
                                                },
                                            };
                                        })(e);
                                    try {
                                        for (n.s(); !(r = n.n()).done; ) {
                                            var i = r.value;
                                            if (i.key === t) return i.children || [];
                                            if (i.children) {
                                                var o = this.findChildrenByKey(i.children, t);
                                                if (o.length > 0) return o;
                                            }
                                        }
                                    } catch (e) {
                                        n.e(e);
                                    } finally {
                                        n.f();
                                    }
                                    return [];
                                },
                            },
                            {
                                key: 'mutateFieldData',
                                value: function (e, t, r) {
                                    if ('object' === l(e) && 'string' == typeof t)
                                        for (
                                            var n = t.split('.'), i = e, o = 0, a = n.length;
                                            o < a;
                                            ++o
                                        ) {
                                            if (o + 1 - a == 0) {
                                                i[n[o]] = r;
                                                break;
                                            }
                                            i[n[o]] || (i[n[o]] = {}), (i = i[n[o]]);
                                        }
                                },
                            },
                        ]),
                        null && f(t.prototype, null),
                        r && f(t, r),
                        Object.defineProperty(t, 'prototype', { writable: !1 }),
                        e
                    );
                })(),
                p = 0,
                v = n.memo(
                    n.forwardRef(function (e, t) {
                        var r,
                            a,
                            l = i.A.getPTI(e),
                            c =
                                ((r = n.useState(e.id)),
                                (a = 2),
                                (function (e) {
                                    if (Array.isArray(e)) return e;
                                })(r) ||
                                    (function (e, t) {
                                        var r =
                                            null == e
                                                ? null
                                                : ('undefined' != typeof Symbol &&
                                                      e[Symbol.iterator]) ||
                                                  e['@@iterator'];
                                        if (null != r) {
                                            var n,
                                                i,
                                                o,
                                                a,
                                                u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                                    if (Object(r) !== r) return;
                                                    l = !1;
                                                } else
                                                    for (
                                                        ;
                                                        !(l = (n = o.call(r)).done) &&
                                                        (u.push(n.value), u.length !== t);
                                                        l = !0
                                                    );
                                            } catch (e) {
                                                (c = !0), (i = e);
                                            } finally {
                                                try {
                                                    if (
                                                        !l &&
                                                        null != r.return &&
                                                        ((a = r.return()), Object(a) !== a)
                                                    )
                                                        return;
                                                } finally {
                                                    if (c) throw i;
                                                }
                                            }
                                            return u;
                                        }
                                    })(r, a) ||
                                    u(r, a) ||
                                    (function () {
                                        throw new TypeError(
                                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })()),
                            f = c[0],
                            s = c[1];
                        return (
                            n.useEffect(
                                function () {
                                    y.isEmpty(f) &&
                                        s(
                                            (function () {
                                                return (
                                                    p++,
                                                    ''
                                                        .concat(
                                                            arguments.length > 0 &&
                                                                void 0 !== arguments[0]
                                                                ? arguments[0]
                                                                : 'pr_id_',
                                                        )
                                                        .concat(p)
                                                );
                                            })('pr_icon_clip_'),
                                        );
                                },
                                [f],
                            ),
                            n.createElement(
                                'svg',
                                o(
                                    {
                                        ref: t,
                                        width: '14',
                                        height: '14',
                                        viewBox: '0 0 14 14',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                    },
                                    l,
                                ),
                                n.createElement(
                                    'g',
                                    { clipPath: 'url(#'.concat(f, ')') },
                                    n.createElement('path', {
                                        d: 'M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z',
                                        fill: 'currentColor',
                                    }),
                                ),
                                n.createElement(
                                    'defs',
                                    null,
                                    n.createElement(
                                        'clipPath',
                                        { id: f },
                                        n.createElement('rect', {
                                            width: '14',
                                            height: '14',
                                            fill: 'white',
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                );
            v.displayName = 'SpinnerIcon';
        },
    },
]);
