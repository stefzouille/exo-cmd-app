const chalk = require('chalk')
const readlineSync = require('readline-sync')
//  const counter = Number(process.argv[2])

//  if (process.argv.length !== 3) {
//   console.log('NO NO NO------please type a majority of your country first !!!!-------°_°')
//   process.exit(1)
// } 
// if (isNaN(process.argv[2])) {
//   console.log(`Error: ${process.argv[2]} is not a number.`)
//   process.exit(1)
// }

const q1 = readlineSync.question('Question 1: Le C++ est un:  1: langage ---- 2: compilateur ')
const q2 = readlineSync.question('Question 2: TypeScript est une évolution de Javascript:  1: Vrai ---- 2: Faux ')
const rep = Number(q1)
  
if (rep === 1) {
    console.log(chalk.yellow(`vous êtes majeur, vous pouvez voter !!`)
    )
    console.log('')
  } else {
    console.log(chalk.red(`Désolé,  vous êtes mineur, vous ne pouvez pas voter`))
  }

  
const rep1 = Number(q2)
  
if (rep1 === 1) {
    console.log(chalk.yellow(`vous êtes majeur, vous pouvez voter !!`)
    )
    console.log('')
  } else {
    console.log(chalk.red(`Désolé,  vous êtes mineur, vous ne pouvez pas voter`))
  }
 