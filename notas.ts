import readlinesync = require('readline-sync');

const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

for(let nota of notas){
    console.log(nota.toFixed(1));
}

notas.push(4.0);

notas.unshift(2.5, 9.0);

console.log("\nExibir as Novas Notas Cadastradas: ")

for(let nota of notas){
    console.log(nota.toFixed(1));
}

console.log("\n O indice da nota 2.5 é: " + notas.indexOf(2.5));

console.log("\nA nota 2.5 está cadastrada no Array notas? " + notas.includes(2.5));

notas[notas.indexOf(7.0)] = 6.0;

console.log("\nExibir as Notas Alteradas: ")

for(let nota of notas){
    console.log(nota.toFixed(1));
}

notas.splice(notas.indexOf(2.5), 1);

console.log("\nExibir as notas, sem a nota apagada: ")

for(let nota of notas){
    console.log(nota.toFixed(1));
}