'use strict'

class Filme{
    constructor(titulo, ano){
        this.titulo = titulo;
        this.ano = ano;
    }
}

let meuFilme = new Filme('Aprendendo JavaScript', 2022);

console.log(meuFilme)
console.log(meuFilme.titulo)

class Produto{
    constructor(fruta){
        this.tipo = 'Produto X'
        this.catalogo = fruta
    }
}

const prod = new Produto();
console.log(prod);


class Financiamento{
    valorFinanciamento;
    taxaJuros;
    numero;
    constructor(valorFinanciamento, taxaJuros, numero){
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
    }
}

const fin = new Financiamento(10000, 1, 1)
const fin2 = new  Financiamento(20000, 2) 
console.log(fin)
console.log(fin2)

