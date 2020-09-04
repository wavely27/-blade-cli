#!/usr/bin/env node
const { program } = require('commander')

const pkg = require('../package.json')

program
  .version(pkg.version)
  .usage('<Command> [Project Name]')
  .command('init', 'Initial Project')

function printHelp() {
  console.log()
  console.log('Environment Params: development / test / preview / product')
  console.log()
  console.log('Help End')
}

console.log('B End')
