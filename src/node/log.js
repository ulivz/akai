'use strict'
const chalk = require('chalk')
const table = require('text-table')
const { isPlainObject, isArray } = require('../shared/shared-utils')

const GLOBAL_INDENT = '    '

function echo() {
  console.log.apply(console, [GLOBAL_INDENT].concat([].slice.apply(arguments)));
}

exports.success = function (msg) {
  echo(msg, chalk.green('[success]'))
}

exports.error = function (msg) {
  echo(msg, chalk.red('[error]'))
}

exports.warn = function (msg) {
  echo(msg, chalk.yellow('[warn]'))
}

exports.info = function (msg) {
  echo(msg, chalk.cyan('[info]'))
}

exports.table = function (raw) {
  let data = []
  if (isPlainObject(raw)) {
    Object.keys(raw).forEach(key => {
      data.push([key, raw[key]])
    })
  }
  if (isArray(raw)) {
    data = raw
  }
  data.forEach((line, idx) => {
    line[0] = GLOBAL_INDENT + ' ' + chalk.yellow(line[0])
  })
  var t = table(data, { align: ['l', 'l'] })
  console.log(t)
}
