'use strict';
(self.webpackChunkntti_2023_client = self.webpackChunkntti_2023_client || []).push([
    [506],
    {
        4506: (e, t, r) => {
            r.d(t, { x: () => v });
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
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        d: 'M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z',
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
            v.displayName = 'TimesCircleIcon';
        },
    },
]);
