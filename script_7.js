let ask = prompt("Pose ta question jeune pomme")
let askl = ask.length

if (ask[askl - 1] === "?") {
  console.log("Ouais..Ouais..")
}

else if (ask === ask.toUpperCase() && ask !== "") {
  console.log("Pwaa, tu vas te calmer jeune pomme ?")
}

else if (ask.includes("Fornite")) {
  console.log("Viens on se fait une partie en soum-soum")
}

else if (ask === "") {
  console.log("Bah alors ? Qu'est ce qui y'a ?")
}

else {
  console.log("Mdrrr franchement m'en fous")
}