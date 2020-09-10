const inquirer = require('inquirer')

const projectType = {
  type: 'list',
  name: 'projectType',
  message: 'Which framework do u like',
  choices: ['React', 'Vue', 'Egg'],
}

module.exports = {
  question: async function () {
    const answer = await inquirer.prompt([projectType])
    return answer
  },
}
