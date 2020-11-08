const fs = require ('fs');
// luego realizamo un bucle, primero lo haremos 5 veces, y va a aleer este archivo primero de forma sincronica 
//incluiremos un codigo que nos permitira saber cuandto tarda este proceso, que es este console a continuacion
//esos dos comandos nos permiten hacer un cronometro de tiempo en el proceso
// node .\streams.js  el tiempo que me arrojo fue de 1.37 segundos
//prueba cambiando la veces a mas y te dars cuenta que se tarda cada vez mas tiempo
console.time('tiempo de respuesta')

//for (let i=0; i<=10; i++){
//    fs.readFileSync('archivo.txt', 'utf8');
//}
// ahora vamos a porbar el metodo streams y te daras cuenta que sera mucho mas rapido 
//comentaremos lo anterior 
for (let i=0; i<=10; i++){
    const streamEscritura = fs.createReadStream('archivo.txt',{
        encoding: "utf-8"
    });
}
// con este metodo, el tiempo de lectura es de 2,96 ms muchisimo mas bajo //aqui leemos progresivamente el archivo// a diff de otras lecturas
console.timeEnd('tiempo de respuesta')