// aqui vamos a crear un millon d eveces la linea que estoy escribiendo con createWriteStream
const fs = require ('fs');
const archivo = fs.createWriteStream('archivo.txt');

 // vamos a iterarla un minnlon de veces 
 for(let i=0; i<=1e6; i++){
     archivo.write('lorem iopsus como estas en la vida, hola mundo node avanzado, como le va a.\n')
 }
archivo.end();
// llama en la terminal a node .\crear_archivos.js