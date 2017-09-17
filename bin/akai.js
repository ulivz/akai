#!/usr/bin/env node
const cac = require('cac')
const fs = require('fs')
const path = require('path')
const cli = cac()
const log = require('../src/node/log')
const Pkg = require('../src/node/package')
const Readme = require('../src/node/NodeReadme')

// Add a default command
const defaultCommand = cli.command('*', {
  desc: 'The default command'
}, (input, flags) => {
  if (flags.age) {
    console.log(`${input[0]} is ${flags.age} years old`)
  }
})

defaultCommand.option('-p', {
  desc: 'Use package.json to generate README'
})

/**
 * README
 */
cli.command('readme', {
  desc: 'generate README'

}, (input, flags) => {

  const rdm = new Readme()
  const pkg = Pkg()

  if (!pkg) {
    log.warn('cnnot find package.json')
  } else {
    log.success('find package.json')
    rdm.parsePkg(pkg)
    console.log()
    log.table(rdm.config)
    fs.writeFileSync(path.resolve(process.cwd(), 'README.md'), rdm.generate())
  }

  const propmtList = [
    {
      type: 'checkbox',
      name: 'choice',
      message: `Please choose a package manager:`,
      choices: ['yarn', 'npm']
    }
  ]

})

// Bootstrap the CLI app
cli.parse()