// Type Assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("num") as HTMLInputElement;
console.log(input.value);

// Outra forma de escrever isso

const input2 = <HTMLInputElement>document.getElementById("num");