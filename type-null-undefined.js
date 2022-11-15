// O null é um tipo especial, pois pode ser traduzido como 
//“ausência de valor” e pode ser atribuído como valor de uma variável:

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}



let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined


//No cotidiano é comum considerar undefined como uma ausência de valor 
// “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado 
// que também significa ausência de valor, mas não de maneira inesperada.

