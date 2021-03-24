//Ecrivez un script sayMyName.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:
// % node sayMyName.js Sofiane
// My name is Sofiane.

let name = process.argv[2]     // process.argv est un tableau de string assigné a la variable name en dessous erreur return a if car [i] de 2 = .js


if (process.argv.length !== 3) {        //si process.argv 
  console.log(`please retype your first argument fatal error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
  process.exit(1) // exit the program with code status 1
}

console.log(`My name is ${name}`)  //affiche argv de [i] indiqué en valeur



