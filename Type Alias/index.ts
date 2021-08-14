// Alias

const funcionarios: Array<string> | boolean = ['Eu', 'Você', 'Tu', 'Nós', 'Vós']; // poderia ficar realmente grande;

type Funcionario = {

    nome: string;
    sobrenome: string;
    dtNascimento: Date;

}

// type Funcionario = Array<string> | boolean | number;

const funcionario: Funcionario[] = [{

    nome: 'Eduarda',
    sobrenome: 'Alves',
    dtNascimento: new Date()

}, {

    nome: 'Fulano',
    sobrenome: 'Beltrano',
    dtNascimento: new Date()

},

{

    nome: 'Ciclano',
    sobrenome: 'Beltrano',
    dtNascimento: new Date()

},

{

    nome: 'Beltrano',
    sobrenome: 'Alves',
    dtNascimento: new Date()

}];

function tratarFuncionarios(funcionario: Funcionario[]) {

    for(let funcionarios of funcionario) {

        console.log('Nome do funcionário: ', funcionarios.nome);
        console.log('Sobrenome do funcionário: ', funcionarios.sobrenome);
        console.log('Data de Nascimento: ', funcionarios.dtNascimento);

    }

    //.......
    //...

}