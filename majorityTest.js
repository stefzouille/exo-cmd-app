// Un état vous demande d'écrire un petit programme qui vérifie que les citoyens ont le droit de voter.
// Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
// Si l'âge est inférieur à 18 lui afficher avec le prénom et nom correspondant:


const chalk = require('chalk')
const readlineSync = require('readline-sync')



const userName = readlineSync.question('May I have your name? ')
  const userFirstName = readlineSync.question('May I have your firstname? ')
  const ageStr = readlineSync.question('May i have your age? ')



  
  const age = Number(ageStr)
  if (age >= 18) {
    
    console.log(chalk.yellow(`${userName}${userFirstName} vous êtes majeur, vous pouvez voter !!`)
    )
    console.log('')
  } else {
    console.log(chalk.red(`Désolé, ${userName} ${userFirstName} vous êtes mineur, vous ne pouvez pas voter`))
  }
 

