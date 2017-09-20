"use strict";

const { render } = require('handlebars2')
const { isPlainObject } = require('../shared/shared-utils')

const DEFAULT_CONFIG = {
  username: null, // Required
  name: null, // Require
  profilename: null,

  author: null, // Required
  website: null, // Optional
  usage: true,
  badges: {
    version: true,
    downloads: true,
    codecov: true,
    ci: true,
    coverage: true
  },
  install: {
    yarn: true,
    npm: true
  }
}

const DEFAULT_TEMPLATE = require('../template/README.md')

class README {

  constructor() {
    this.config = DEFAULT_CONFIG
    this.template = DEFAULT_TEMPLATE
  }

  get(key) {
    return this.config[key]
  }

  concat(ob) {
    if (isPlainObject(ob)) {
      Object.keys(ob).forEach(key => {
        this.set(key, ob[key])
      })
    }
  }

  set(key, value) {
    this.config[key] = value
  }

  del(key) {
    delete this.config[key]
  }

  generate(template) {
    return render(template || this.template, this.config)
  }

  get text() {
    return this.generate()
  }

}

module.exports = README