"use strict";

const { render } = require('handlebars2')
const { isPlainObject } = require('../shared/shared-utils')

class Readme {

  constructor() {
    this.config = {}
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
    return render(template, this.config)
  }

}

module.exports = Readme