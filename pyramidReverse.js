const pyramid = (nbBase, str, reverse) => {
  if (reverse === undefined) {

    for (let i = 1; i <= nbBase; ++i) {
      console.log(str.repeat(i))
    }
  } else if (reverse === '-r') {
    for (let i = nbBase; i >= 1; --i) {
      console.log(str.repeat(i))
    }
  }
}


if (process.argv.length > 5 || process.argv.length < 4) { // SI = Utilisation d'un argument(argv) sur l'objet process = 0 programme / 1 fichier.js / 2. argument(1) / 3. argument(2)= donc ne pas dépasser 2 arguments (!=4)
  console.log("Vous devez taper votre commande : node pyramid.js Number String Reverse(optionnal)") // affichage de la commande à tapper si syntaxe fausse
  process.exit(1)// affichage code 1 si syntaxe fausse
}

if (isNaN(process.argv[2])) { // SI l'argument n°1 n'est pas un nombre
  console.log(`Erreur : ${process.argv[2]} n'est pas un nombre.`) // affichage de la commande à tapper si syntaxe fausse
  process.exit(1)// affichage code 1 si syntaxe fausse
}

if (process.argv.length === 5 && process.argv[4] !== '-r') {
  console.log(`Veuillez changer ${process.argv[4]} par le parametre -r `)
  process.exit(1)// affichage code 1 si syntaxe fausse

}

let nbBase = Number(process.argv[2]) // Creation Variable pour le 1 eme arguments en Nombre
let str = process.argv[3] // Creation Variable pour le 3 eme arguments
let reverse = process.argv[4]


pyramid(nbBase, str, reverse) // appel affichage fonction 
