//passer un nb en ligne de commande et le declarer en au lancement du programme
//demander quelle est le nombre 
//tant que ce n est pas la bonne reponse je repose la question 
//si bonne rep affiche ok
const chalk = require('chalk')
const readlineSync = require('readline-sync')


let reponseUtilisateur = ''
const nbsecret = Number(process.argv[2])

if (process.argv.length !== 3) {        //si process.argv 
  console.log(`please retype your first argument fatal error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
  process.exit(1) // exit the program with code status 1
}
if (isNaN(nbsecret)) {
  console.log(`Error: ${nbsecret} is not a number.`)
  process.exit(1)
}

while (Number(reponseUtilisateur) !== nbsecret) {
  reponseUtilisateur = readlineSync.question('what the secret number?')
  
  if (isNaN(Number(reponseUtilisateur))) {
    console.log(`Error: ${reponseUtilisateur} is not a number.`)
    process.exit(1)
  }

  
  if (Number(reponseUtilisateur) === nbsecret) {
    console.log(chalk.green('bravo'))
  }  else if (Number(reponseUtilisateur) > nbsecret) {
    console.log(chalk.red('Nombre trop grand'))
  } else {
    console.log(chalk.red('Nombre trop petit'))
  }
}
