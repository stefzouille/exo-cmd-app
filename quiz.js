// Ecrivez un qcm de 5 questions. Le joueur devra répondre aux questions en entrant le nombre
//  correspondant à la bonne réponse. A la fin du qcm vous lui donnerez sa note qui correspondra
//   au nombre de bonnes réponses sur les 5 questions. Je vous propose les 5 questions et les choix possibles,
//    mais vous pouvez créer les votre si vous voulez:


const chalk = require('chalk')
const readlineSync = require('readline-sync')


const q1 = readlineSync.question('Question 1: Le C++ est un->  1: langage OU 2: compilateur ')
const q2 = readlineSync.question('Question 2: TypeScript est une évolution de Javascript->  1: Vrai OU 2: Faux ')
const q3 = readlineSync.question('Question 3: Lire les cours avant de faire les exercices est inutile-> 1: vrai OU 2: faux ')
const q4 = readlineSync.question('Question 4: react.js a été developpé par Google-> 1: Vrai OU 2: Faux ')
const q5 = readlineSync.question('Question 5: Ethereum est une blockchain publique-> 1: Vrai OU 2: Faux')
const rep1 = Number(q1)
const rep2 = Number(q2)
const rep3 = Number(q3)
const rep4 = Number(q4)
const rep5 = Number(q5)
  
if (rep1 === 1) {
    console.log(chalk.green(`Question 1- Bravo c est la bonne reponse !!`))    //Q1
    console.log('')
  } else {
    console.log(chalk.red(`Question 1- Désolé,ce n'est pas la bonne reponse!`))
    console.log('')
  }

if (rep2 === 1) {
    console.log(chalk.green(`Question 2- Bravo c est la bonne reponse !!`))    //Q2
    
    console.log('')
  } else {
    console.log(chalk.red(`Question 2- Désolé,ce n'est pas la bonne reponse!`))
    console.log('')
  }

  if (rep3 === 1) {
    console.log(chalk.red(`Question 3- Désolé,ce n'est pas la bonne reponse!`))   //Q3
    console.log('')
  } else {
    console.log(chalk.green(`Question 3: Bravo c est la bonne reponse !!`))
    console.log('')
  }

  if (rep4 === 1) {
    console.log(chalk.red(`Question 4- Désolé,ce n'est pas la bonne reponse!`))   //Q4
    console.log('')
  } else {
    console.log(chalk.green(`Question 4: Bravo c est la bonne reponse !!`))
    console.log('')
  }

  
  if (rep5 === 1) {
    console.log(chalk.green(`Question 5: Bravo c est la bonne reponse !!`))   //Q4
    console.log('')
  } else {
    console.log(chalk.red(`Question 5- Désolé,ce n'est pas la bonne reponse!`))
    console.log('')
  }
 // ? mettre un marqueur sur chaque bonne reponse et le compter !!
 


 

 