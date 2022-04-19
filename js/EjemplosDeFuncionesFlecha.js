console.log("%c##################### Ejemplos de Funciones Flecha ##################### ", 'color:#0F0;');
//##################################################
//######################### FUNCIÓN CONVENCIONAL
function FuncionSumarConvencional(par1, par2) {
    return par1 + par2;
}
//Usamos la función anterior
let resultado = FuncionSumarConvencional(1, 1);
console.log(resultado);

//##################################################
//######################### FUNCIONES FLECHAS
//######################### Declaramos la función sin parámetros
const FuncionFlechaSinParametros = () => console.log('Ejecutamos FuncionFlechaSinParametros!');
//Usamos la función anterior
FuncionFlechaSinParametros();

//######################### Declaramos la función con 1 parámetro (vemos que podemos simplificar los paréntesis del parámetro)
const MiFuncionCon1Parametro = par1 => console.log(`Ejecutamos MiFuncionCon1Parametro! --> ${par1}`);
//Usamos la función anterior
MiFuncionCon1Parametro("Parámetro1");

//######################### Declaramos la función con 2 parámetro (vemos que no podemos simplificar los paréntesis del parámetro)
const MiFuncionCon2Parametros = (par1, par2) => console.log(`Ejecutamos MiFuncionCon2Parametros! --> ${par1} ${par2}`);
//Usamos la función anterior
MiFuncionCon2Parametros("Hola", "Lucas");

//######################### Declaramos la función en una sola línea que retorna la suma de 2 números
const Sumar = (par1, par2) => par1 + par2;
//Usamos la función anterior
console.log(Sumar(2, 3));
console.log(Sumar(10, 2));


