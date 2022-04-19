console.log("%c##################### Ejemplos de PlantillasLiterales ##################### ", 'color:#0F0;');

var a = 10;
var b = 5;
//Concatenado normal
console.log("La suma de " + a + " + " + b + " es " + (a + b));

//Concatenado con tildes invertidas
console.log(`La suma de ${a} + ${b} es ${a + b}`);
console.log(`Este es un texto común usando plantillas literales.
Incluso funcionan los saltos de línea!`);