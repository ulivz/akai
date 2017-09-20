const Readme = require('../runtime').Readme
const user = require('.//git-user')
const { render } = require('handlebars2')
const fs = require('fs')
const path = require('path')

const DEFAULT_TEMPLATE = fs.readFileSync(path.resolve(__dirname, '../template', 'README.md'), 'utf-8')


class NodeReadme extends Readme {
  constructor() {
    super()
    this.init()
  }

  init() {
    const _user = user()
    this.concat({
      author: _user.name,
      email: _user.email,
    })
    this.concat(DEFAULT_CONFIG)
  }

  parsePkg(pkg) {
    // TODO check the respository and author to get the username
    this.concat({
      name: pkg.name,
      version: pkg.version,
      description: pkg.description,
    })
    this.concat(pkg.akai)
  }

  generate(template) {
    if (!template) {
      return render(DEFAULT_TEMPLATE, this.config)
    }
    return render(template, this.config)
  }

}

module.exports = NodeReadme