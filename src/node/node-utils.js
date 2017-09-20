const fs = require('fs')

exports.exists = function (path) {
  return fs.existsSync(path)
}

exports.isFile = function (path) {
  const stat = fs.statSync(path)
  return stat.isFile()
}

exports.isDirectory = function (path) {
  const stat = fs.statSync(path)
  return stat.isDirectory()
}