"use strict";

const _toString = Object.prototype.toString

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
exports.isPlainObject = function (obj) {
  return _toString.call(obj) === '[object Object]'
}

/**
 * Array type check
 */
exports.isArray = function (arr) {
  return Array.isArray(arr)
}