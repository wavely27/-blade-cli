#!/usr/bin/env node
const { program } = require('commander')

program
  .usage('Init [Project]')
  .option('-c, -config <config>', 'use config')
  .parse(process.argv)

console.log('Init End')
