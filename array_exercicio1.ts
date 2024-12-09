import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let posicao: number;

posicao = readlinesync.questionInt("Digite o numero que deseja encontrar: ")


if(posicao > 0 && posicao <= 10){

    console.log(`\nO número ${posicao} está localizado na posição: ${numeros.indexOf(posicao)}`)
}else if(posicao <= 0 || posicao > 10){
    console.log(`\nO número ${posicao} não foi encontrado!`)
}


