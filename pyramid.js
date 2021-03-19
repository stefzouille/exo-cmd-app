// En vous basant sur l'exemple du cours showStars.js, écrire un programme pyramid.js qui prend 2 arguments sur la ligne de commande:

// le nombre d'éléments qui sera la base de la pyramide
// une string (un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *.

// Notre fonction ShowStars

// Notre fonction ShowStars
const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(`${name}`.repeat(i))
  }
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 4) {
  console.log('please type a number now with 2 arguments !!')
  process.exit(1)
}
else if (process.argv.length !== 4) {
  console.log('please type 2 arguments max !!')
  process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}
let name = process.argv[3]
 
// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const nbStars = Number(process.argv[2])
showStars(nbStars)