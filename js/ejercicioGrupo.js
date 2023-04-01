// Creamos una nueva promesa llamada "saludar"
const saludar = new Promise((resolve, reject) => {
    // Usamos el método setTimeout para esperar 4 segundos antes de resolver la promesa
    setTimeout(() => {
      // Llamamos al método resolve con el mensaje "Hola mundo. Soy llamado desde una promesa"
      resolve("1. Hola mundo. Soy llamado desde una promesa");
    }, 4000);
  });
  
  // Usamos el método then para obtener el resultado de la promesa una vez que se haya resuelto
  saludar.then((mensaje) => {
    // Imprimimos el mensaje resuelto en la consola
    console.log(mensaje);
  });
  
// ejemplo con reject, en caso que la const exito = true, 
  const saludar1 = new Promise((resolve, reject) => {
    const exito = false;
  
    if (exito) {
      setTimeout(() => {
        resolve("2. Hola mundo. Soy llamado desde una promesa.");
      }, 4000);
    } else {
      reject("Ha Fallado la Promesa");
    }
  });
  
  saludar1
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.log(error);
    });