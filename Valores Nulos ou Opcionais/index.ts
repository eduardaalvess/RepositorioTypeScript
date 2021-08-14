



let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // Informa para o TypeScript que o valor é opcional.
}

const contato: Contato = {
    nome: 'Eduarda',
    telefone1: '12345678'
}