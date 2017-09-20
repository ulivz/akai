const path = require('path')
const fs = require('fs')
const { exists, isFile } = require('./node-utils')

module.exports = function () {
  const pkgPath = path.resolve(process.cwd(), 'package.json')
  if (!exists(pkgPath) || !isFile(pkgPath))
    return null;
  return require(pkgPath)
}