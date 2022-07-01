'use strict';
class Musica {
    static formato = 'mp3'
    #titulo;
    #duracao;
    constructor(titulo, duracao) {
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
    static converteSegundosEmMinutos(duracao) {
        const min = Math.floor(duracao / 60);
        let seg = duracao % 60;
        if (seg < 10 && seg > 0) {
            seg = `0${duracao % 60}`;
        }
        else if (seg < 10) {
            seg = '00';
        }
        return `${min}:${seg}`;
    }

    getDuracao() {
        return this.#duracao;
    }
}

const musica = new Musica('Minha musica', 190);
console.log(Musica.converteSegundosEmMinutos(musica.getDuracao()));


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

    static volumeProduto(largura, altura, profundidade){
        return largura * altura * profundidade;
    }

    parcelaValor(parcelas){
        return this.valor / parcelas;
    }

}

const prod = new Produto('Meu produto', 10, 3, 2, 80);
console.log(Produto.volumeProduto(20, 5, 7));



prod.descrição = 'Novo Produto'
console.log(prod.descrição)