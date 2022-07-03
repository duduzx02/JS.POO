'use strict'

class Laboratorio {
    #nome;
    #capacidade;
    constructor(nome, capacidade) {
        this.#nome = nome;
        this.#capacidade = capacidade;
    }

    getNome(nome) {
        return this.#nome;
    }

    getCapacidade() {
        return this.#capacidade;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setCapacidade(capacidade) {
        this.#capacidade= capacidade;
    }
}

const lab = new Laboratorio('Informática', 45);
lab.setNome('Meu novo lab');
console.log(lab);

console.log(lab.getNome())

//lab.x = 'Computação'
//console.log(lab.x);
//console.log(lab);

//const lab2 = new Laboratorio('Meu lab', 33);
//console.log(lab2)