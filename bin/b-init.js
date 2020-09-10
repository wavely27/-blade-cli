const { program } = require('commander')
require('../src/utils/babel')
require('../src/command/init')

program
  .usage('    :    b init <Project Name> [-c|--config <Config File>]')
  .option('-c, --config <Config File>', 'Use Config File')
  .parse()
