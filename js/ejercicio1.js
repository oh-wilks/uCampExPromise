// // Ejercicio 1
// // Crea una función con el nombre saludar la cual recibe un parámetro de tipo string y otro que será una función callback.
// // Dentro de la función saludar, el parámetro de tipo string debe ser convertido a mayúsculas y se deberá pasar como argumento al callback.
// // En la función callback, recupera el resultado e imprímelo en consola.
// // Ahora bien, manda llamar a tu función saludar.

const saludar = (nombre, callback) =>{
    let nombreMayuscula = nombre.toUpperCase();
    callback(nombreMayuscula);

};
const imprimeNombre =(nombreMayuscula)=>{
console.log(nombreMayuscula);
};

saludar("saul",imprimeNombre);

// const promesse1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let correcto = false;
//         if (correcto){
//             resolve("Promesa cumplida");
//         }
//         else {
//             reject("Promesa rechazada");
//         }
//     }, 3000);

// });
// promesse1.then((resultado)=>{
//     console.log(resultado);

// }).catch((error)=>{
//     console.log(error);
// });


const promesseSaludar = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let mensaje = true;
        if (mensaje){
            resolve("Hola mundo. Soy llamado desde una promesa");
            
        }
        else {

            
            reject("Promesa rechazada");
        }
    }, 4000);

});
promesseSaludar.then((resultado)=>{
    console.log(resultado);
    document.write(`<h1>${resultado}</h1>`);

}).catch((error)=>{
    console.log(error);
    document.write(`<h1>${error}</h1>`);
});
