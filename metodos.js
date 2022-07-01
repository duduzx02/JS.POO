'use strict'

class Produto {
    descrição;
    largura;
    altura;
    profundidade;
    valor;
    constructor(descrição, largura, altura, profundidade, valor) {
        this.descrição = descrição;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }

    volumeProduto(){
        return this.largura * this.altura * this.profundidade;
    }

    parcelaValor(parcelas){
        return this.valor / parcelas;
    }

}

const prod = new Produto('Meu produto', 10, 3, 2, 80);
console.log(prod.volumeProduto());

let parcelas = 2

console.log(prod.parcelaValor(parcelas))