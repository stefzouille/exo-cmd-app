// Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande par le maitre du jeu. 
// Le programme s'exécutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur 
// pour trouver le nombre secret, celui entré en argument de la ligne de commande du programme à son lancement,
//  les messages suivant lui apparaîtront:

// si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
// si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
// si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert


const chalk = require('chalk')
const readlineSync = require('readline-sync')

const ageStr = readlineSync.question('what the secret number? ')

 const age = Number(ageStr)
  if (age === 10) {
    console.log(chalk.green(`Bravo !!`))
    } else if (age > 10) {
    console.log(chalk.red(`Nombre trop grand !`))
  } else if (age < 10) { 
  console.log(chalk.red(` Nombre trop petit`))
  } else {
    console.log(chalk.yellow('please type a number now please bro !!'))
  }



