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
    constructor(tipo, titulo, numPag){
        super(tipo);
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(super.getDados())
    }
    exibeDadosLivros(){
        console.log(`${this.getDados()}. ${this.titulo} - ${this.numPag} Páginas.`)
    }
}

/*const prod = new Produto('Produto Genérico');
console.log(prod.tipo);
console.log(prod.getDados())*/

const liv = new Livro('protudo', 'Meu livro', 125);
//console.log(liv);
//console.log(liv.getDados());

liv.exibeDadosLivros();