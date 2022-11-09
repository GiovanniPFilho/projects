const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = 'Leonardo';

//concatenação (+)

console.log(citacao + meuNome)

//template string OU template literal


// caracteres UTF

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// quando é necessário uma quantidade mínima de caracteres, pode se usar a propriedade length

const senhaSegura = "minhaSenha123";
console.log(senha.length) // 13 caracteres

