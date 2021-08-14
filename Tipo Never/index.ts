// Tipo Never

function loopInfinito(): never {

    while(true) {

    }
}

function erro(msg: string): never {

    throw new Error (msg);

}

function falha(): never {

    return erro('Algo falhou!');
}