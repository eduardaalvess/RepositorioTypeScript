interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

// Bem parecido com Java.

function getUser() {
    return {
        nome: 'Eduarda',
        email: 'eduarda@eduarda.com'
    }
}

function setUser(usuario: Usuario) {
    //.............
}