console.log("%c##################### Ejemplos de Let y Const ##################### ", 'color:#0F0;');

const apellido = 'Cameron';
//apellido = "asdasd";
console.log(apellido);

let nombre = 'Howe';
function ConsultarNombre() {
    let nombre = 'Donna';
    let apellido = 'Clark';
    console.log(`${nombre} ${apellido}`);
    let apellido1 = 'Gomez';
}
//Si descomentamos lanzará un error ya que apellido1 está declarado en otro bloque (scope)
//console.log(apellido1);


ConsultarNombre(); //Usamos la función..
