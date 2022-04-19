console.log("%c##################### Ejemplos de Spread ##################### ", 'color:#0F0;');

var originalObject = {
    id:12345,
    subject:"programming",
    grade:"A"
};
console.log("Objeto original:", originalObject);

var {grade , ...newObject} = originalObject;
console.log("Objeto actualizado:",newObject);