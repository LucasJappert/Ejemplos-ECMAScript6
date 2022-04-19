console.log("%c##################### Ejemplos de Promesas ##################### ", 'color:#0F0;');

let MiPrimerPromesa = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function () {
        resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 250);
});

var ResultadoDeMiPromesa = MiPrimerPromesa
    .then((successMessage) => {
        // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
        // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
        return successMessage;
    })
    .catch((error) => {
        return error;
    });

//Demostramos estados de la promesa...
console.log(ResultadoDeMiPromesa);
setTimeout(() => {
    console.log(ResultadoDeMiPromesa);
}, 3000);

