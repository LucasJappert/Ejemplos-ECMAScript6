console.log("%c##################### Ejemplos de Operador Opcional ##################### ", 'color:#0F0;');

var myObj = {
    nombre: "Pepe"
}
console.log(myObj.apellido?.trim());

myObj = null;
//console.log(myObj.apellido?.trim());
console.log(myObj?.apellido?.trim());
