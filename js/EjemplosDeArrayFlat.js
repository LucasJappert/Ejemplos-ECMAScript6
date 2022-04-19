console.log("%c##################### Ejemplos de array.flat() ##################### ", 'color:#0F0;');

let arrayNumerico = [1, 2, [3, 4, [5, 6]]];
console.log(arrayNumerico);

arrayNumerico = arrayNumerico.flat(1);
console.log(arrayNumerico);

arrayNumerico = arrayNumerico.flat(2);
console.log(arrayNumerico);