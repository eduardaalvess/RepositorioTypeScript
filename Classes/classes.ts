// Classes em TypeScript

// TypeScript tem modificadores de acesso.

class Data {

    dia: number;
    mes: number;
    ano: number;


    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 7, 2000);
console.log(data.dia);