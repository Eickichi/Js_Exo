let size = prompt("Entre un nombre d'étage");
let symbol = "#"

function pyramid(size) {
  for(let i = 1; i <= size; i++) {
    console.log(" ".repeat(size-i) + symbol.repeat(i));
  }
}
console.log(pyramid(size))