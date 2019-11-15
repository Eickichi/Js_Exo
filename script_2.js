let n = prompt("De quelle nombre veux-tu calculer la factorielle ?");

function factorielle(n) {
  let total = n;
  while (n > 1) {
    total = total * (n - 1);
    n --;
  };
  return total;
};

console.log(`Le résultat est de : ${factorielle(n)}`);