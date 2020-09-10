import { program } from 'commander'
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import { question } from '../utils/question'
import { repositoriesMap } from '../config/constant'

program
  .usage('    :    b init <Project Name> [-c|--config <Config File>]')
  .option('-c, --config <Config File>', 'Use Config File')
  .parse()

// dev
// console.log('program.args', program.args)
// console.log('program.opts', program.opts())

const projectName = program.args[0]
if (!projectName) {
  program.help()
}

const dest = path.join(process.cwd(), projectName)
if (fs.existsSync(dest)) {
  console.error('\n', chalk.red(`项目 ${projectName} 已经存在`))
  process.exit(1)
} else {
  console.log('\n', `Creating a new app in ${dest} .`)
}

console.log('projectName', projectName)
console.log('dest', dest)

// create
createProject(dest)

console.log('\n', 'Init End', '\n')

async function createProject(dest) {
  await fs.mkdirSync(dest)
  const answer = await question()
  console.log('answer', answer)
  const { projectType } = answer
  const url = repositoriesMap[projectType.toLocaleLowerCase]
}
