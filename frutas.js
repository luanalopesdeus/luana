//Lista ordenada de valres

const frutas =["maça", "banana" , "uva", "manga"];
// indice:        0       1         2       3

//console.log(frutas);
console.log(frutas[1]);

frutas[0] = "Abacaxi";
console.log(frutas);

frutas[2] = "pera";
frutas[3] = "melancia";
console.log(frutas);
console.log(frutas.length);
frutas.push("Figo");

const removido = frutas.pop();
console.log(frutas);
console.log(removido);
frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("cacau"));