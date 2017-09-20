'use strict'

const Inquirer = require('inquirer')
const AKAIError = require('../shared/akai-error')

class Prompts {

  constructor() {
    this.prompts = []
  }

  push(prompt) {
    this.prompts.push(prompt)
  }

  concat(prompts) {
    this.prompts.concat(prompts)
  }

  clear() {
    this.prompts = []
  }

  run() {
    return inquirer.prompt(this.prompts)
      .catch(err => {
        throw new AKAIError(err)
      })
  }

}