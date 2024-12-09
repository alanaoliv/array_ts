import readlinesync = require('readline-sync');

const numeros = new Set();
numeros.add('2');
numeros.add('5');
numeros.add('1');
numeros.add('3');
numeros.add('4');
numeros.add('9');
numeros.add('7');
numeros.add('8');
numeros.add('10');
numeros.add('6');

let posicao = readlinesync.questionInt("\nDigite o numero que deseja encontrar: ");

if(posicao > 0 && posicao <= 10){
    console.log(`\nO número ${posicao} foi encontrado! `);
}else if(posicao <= 0 || posicao > 10){
    console.log(`\nO número ${posicao} não foi encontrado!`);
}
