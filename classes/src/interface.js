"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
exports.Animal = Animal;
const laica = {
    categoria: "mamifero",
    mostrarDetalhes() {
        console.log("qualquer coisa");
    },
    idade: 5
};
class Gato extends Animal {
    constructor(nome, idade) {
        super("mamifero");
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("mostrar detalhe chamado");
    }
}
class Cachorro {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("mostrar Detalhes de Cachorro");
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : "");
    }
    latir() {
        console.log(this.nome, "está latindo");
    }
}
const mingal = new Gato("mingal", 5);
console.log(mingal);
const toto = new Cachorro("mamifero", "toto");
toto.latir();
