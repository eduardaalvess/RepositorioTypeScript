// Boolean

const contaPaga: boolean = false;

// Number

const idade: number = 23;

const avaliacao: number = 4.2;

// String

const nome: string = 'Eduarda Alves';

// Array

const idades: number[] = [20, 32, 43, 56, 78];

const idades2: Array<number> = [12, 10, 19, 17];

// Tuple

let jogadores: [string, string, string];
jogadores = ['Fulano', 'Ciclano', 'Beltrano'];

let aleatorio: [string, boolean, number];
aleatorio = ['Eu', true, 16];

// Enum

enum statusAprovacao {
    aprovado = '001',
    pendente = '002',
    rejeitado = '003'
}

const stats: statusAprovacao = statusAprovacao.aprovado;

enum statusAprovacao2 {
    aprovado = '001',
    pendente = '002',
    rejeitado = '003'
}

const stats2: statusAprovacao = statusAprovacao.pendente;

enum statusAprovacao3 {
    aprovado = '001',
    pendente = '002',
    rejeitado = '003'
}

const stats3: statusAprovacao = statusAprovacao.rejeitado;

// Any

const retorno: any[] = [123, 'Oi', false, 4321];

const retorno2: any = {

    //...............

};

// Void

function printNaTela(msg: string): void {
    console.log(msg);
}

// Null e Underfined

const un: undefined = undefined;

const nu: null = null;

// Object 

function criar(objeto: object) {

// ............

}

criar ({

    propriedade: 1,

})

// criar('Eduarda') //Dá erro.