'use strict';

class Disciplinas{
    codigo;
    nome;
    constructor(codigo, nome){
    this.codigo = codigo;
    this.nome = nome;
    }
}

const d1 = new Disciplinas(1, 'Matématica');
console.log(d1);

const d2 = new Disciplinas(2, 'Portugues');
console.log(d2);

const d3 = d2;

d3.codigo = 444
d3.nome = 'Inglês'
console.log(d3)