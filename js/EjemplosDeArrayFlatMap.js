console.log("%c##################### Ejemplos de array.flatMap() ##################### ", 'color:#0F0;');

let arrayFlatMap = [1, 2, 3, 4];
console.log(arrayFlatMap);

arrayFlatMap =  arrayFlatMap.flatMap(x => [x * 2]);
console.log(arrayFlatMap);
