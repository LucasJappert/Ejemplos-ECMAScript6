console.log("%c##################### Ejemplos de Operadores Coalescentes NULOS ##################### ", 'color:#0F0;');
const name1 = '' || 'Joe MacMillan';
console.log(name1);
// Resultado: Joe MacMillan
const name2 = '' ?? 'Joe MacMillan';
console.log(name2);
// Resultado: ''
