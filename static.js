'use strict'

class Produto {
    static  grande = 10;
    static medio = 5;
    static pequeno = 1;
    codigo;
    titulo;
    valor;
    tamanho;
    constructor(codigo, titulo, valor, tamanho){
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
        this.tamanho = tamanho;
    }

}

const p1 = new Produto(123, 'Matemática',8 , Produto.grande)

console.log(p1)
console.log(Produto.valor)
console.log(p1.tamanho)
console.log(Produto.grande)