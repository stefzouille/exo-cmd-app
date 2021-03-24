const chalk = require('chalk')
const readlineSync = require('readline-sync')


 const counter = Number(process.argv[2])

 if (process.argv.length !== 3) {
  console.log('NO NO NO------please type a majority of your country first !!!!-------°_°')
  continue
    } 
  if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
  }



const country = readlineSync.question(`if ${counter} year(s) is the majority of your country type enter.`)
const userName = readlineSync.question('May I have your name? ')
const userFirstName = readlineSync.question('May I have your firstname? ')
const ageStr = readlineSync.question('May i have your age? ')

const age = Number(ageStr)
  
  if (age >= counter) {
    
      console.log(chalk.yellow(`${userName}${userFirstName} vous êtes majeur, vous pouvez voter !!`)
    )
    console.log('')
   } else {
      console.log(chalk.red(`Désolé, ${userName} ${userFirstName} vous êtes mineur, vous ne pouvez pas voter`))
      continue
   }
  


//node interMajorityTest.js


