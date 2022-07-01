'use strict'

class Produto{
    tipo;
    constructor(tipo){
        this.tipo = tipo;

    }
    getDados(){
        return `Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto{
    titulo;
    numPag;
    constructor(titulo, numPag){
        super('Livro');
        this.titulo = titulo;
        this.numPag = numPag;
    }
}

const prod = new Produto('Produto Genérico');
console.log(prod.tipo);
console.log(prod.getDados())

const liv = new Livro('Meu livro', 125);
console.log(liv);
console.log(liv.getDados());