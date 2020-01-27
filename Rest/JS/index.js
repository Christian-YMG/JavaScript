// const sumarConRest = (... numeros) =>{ //rest sirve cuando no importa el numero de datos que vas a pedir
//     let resultado = 0;                 //estoy sumando los argumentos que me de el usuario
//     for (let i = 0; i < numeros.length; i++) {
//         resultado  += numeros[i];
//     }
//     return resultado;
// }

// console.log(sumarConRest(1,2,3,4,5,6,7));




// las funciones pueden ser lamacenadas en variables o constantes
// como en el caso de:
// const c = console.log;
// const a = alert;

// const sumar = (a, b) => a + b;
// const a = alert;
// const c = console.log; //una funcion es sun valor 

// // mayusculas("Hola");
// // c(sumar(2, 4));

// /*Pueden pasar como argumento de otra funcion*/

// let edad = sumar(5, 4);
// let edad2 = sumar(sumar(2,1) ,2) //edad tiene el valor de 5
// c(edad2);

//Pueden ser retornadas por otra funcion

// function sumar(x){
//     return function(y){
//         return x + y
//     }
// }

// const sumar = (x) => (y)=> x+y; //todo lo que sigue despues de la flecha es el contenido de la funcion
// //la flecha señala una funcion

// //imprimimos dos veces por que el primer valor entra en la primera funcion y el segundo en la segunda funcion
// c(sumar(4)(5))


// //Ejercicio funciones retornadas

// const doSomething = x => y => x * y;

// const a = doSomething(2)(2) //4
// const b = doSomething(3) //y => 3 * y
// console.log(doSomething(a)(b(3))); //doSomething (4)(9) 36 



// //Funciones puras 
// /*No causan ningun efecto secundario y devuelven los mismos valores para los mismos parametros*/

// let a = 'Hola';

// const saludar = (saludo, persona) => `${saludo} ${persona}`;

// console.log(saludar(a, 'Christian'));
// console.log(a)


// //Funciones anonimas

// setTimeout(() => { //set time out es un metodo como prompt o alert es para esperar un determinado tiempo
//     alert('Hola Christian')
// }, 3000); //espera 3 segundos para realizar lo que esta dentro de la funcion





// ARRAYS ///////////////////////////////////////////////////////////////////////////////////

//Destructuracion de arrays////////////////////////
//Nos permite igualar valores de un array en variables independientes

// let array = ['a','b','c','d']; //un array con datos
// let [s1,s2,s3,s4] = array; //array con variables que tienen los valores de array(de las letras)

// // for (let i = 0; i < array.length; i++) { 
// //     console.log(`s${i+1} = ${array[i]}`); //imprimo el nombre de la variable y el valor que tiene   
// // }


//METODOS QUE MODIFICAN UN ARRAY//////////////////

// array.push('Hola') //añade un valor en la ultima posicion en este caso 'Hola'

// array.pop() //elimina el ultimo valor del array en este caso sería 'Hola' y me muestra el valor que elimine

// array.unshift('Primer valor'); //agrega un valor al inicio del array en este caso 'Primer valor' y el length de mi array

// array.shift(); //elimina el primer valor en este caso 'Primer valor' y me muestra el valor que elimine


/// UTILIZANDO  .splice()   //////////////////////

// let paises = ['Mexico', 'Colombia', 'Brasil', 'Ecuador'];
// // paises.splice('startIndex, cantidad de elementos que eliminara, valor1, valor2')//sintaxis

// paises.splice(1,0,'Bolivia', 'Peru') 
// //empieza en la posicion 1 no eliminara nada pero agragara 'Bolivia y Ecuador'
// //muestra los valores que elominaste

// paises.splice(1, 2); //elimine 'Bolivia' y 'Peru'
// //y me va a mostrar esos dos valores que elimine

// paises.splice(1,2, 'Guatemala', 'Honduras')
// //Elimine 'Colombia' y 'Brasil' pero agregue 'Guatemala' y 'Honduras'


// //METODOS QUE NO MODIFICAN UN ARRAY/////////////////////////////

// paises.slice(1, 3)
// //inicia en la posicion 1 y termina en 3-1, extrae esos valores y me los regresa en un array con esos valores
// //en este caso Guatemala y Honduras
// //pero no modificar el array (paises)




//METODOS PARA ORDENAR DATOS///////////////////////////


// let nombre = 'Christian';

// nombre.split(""); //separo mi nombre por letras

// nombre.split("").reverse();//separo mi nombre por letras y las coloco al reves

// nombre.split("").reverse().join("");
// //separo mi nombre por letras y las coloco al reves despues vuelvo a unir mi nombre con Join
// //join es lo contario de split, en lugar de dividir une


// let letras = ['a','z', 'y', 'b'];

// letras.sort() //Ordena los string de mayor a menor segun el orden del abecedario

// let numeros = [1,2,4,3,5,8,9,34,254]

// numeros.sort((a,b) => a-b); //este es el algoritmo para ordenar numeros de mayor a menor






/////////.join()        y         .contat()/////////////////////

// let cLetras = ['a','b','c','d'];

// let cLetras2 = ['w','x','y','z'];

// cLetras.join(""); //Va a unir los indices en un solo string

// cLetras.concat(cLetras2); //se van a unir los dos arrays formando uno solo






// ////////////////Encontrar Elementos en un Array/////////////////////////////

// let numbers = [1, 2, 3, 4, 5];

// numbers.indexOf(4); //Me va a devolver la posicion en la que se encuentra el numero 4 dentro del array
// //en este caso es la posicion 3

// numbers.find(number => number > 3); 
// //Me va a devolver el primer valor que sea mayor a 3 en este caso es 4

// numbers.findIndex(number => number > 4);
// //Me va a devolver la posicion en la que se encuentra el primer numero que sea mayor a 4
// //en este caso es 5 y su posicion dentro del array es 4








/////////////////Spreat Operator en Arrays (...) //////////////////
//El Spreat Operator va a leer todo el array es como un for con un length

// let n = [1, 2, 3, 2, 3, 4, 5, 6];

// new Set(n); //new Set() elimina los datos repetidos de un array
// //Pero los devuelve como un objeto:
// //Set(6){1, 2, 3, 2, 3, 4, 5, 6}

// //para pasarlos ahora a un nuevo array hacemos lo siguiente :

// [...new Set(n)];

// //new Set() elimina los datos repetidos de un array
// //colocando la instruccion dentro de corchetes le estoy diciendo que los devuelva en un nuevo array

// const eliminarRepetidos = (arr) => [...new Set(arr)];
// //creamos una funcion flecha que elimina los valores repetido de un array


//Math.min() y Math.max() con arrays y Spreat Operator (...)///////////////////////////////
// //El Spreat Operator va a leer todo el array es como un for con un length
// let n = [1, 2, 3, 2, 3, 4, 5, 6];

// Math.min(...n); //encuentra el valor minimo dentro del array n
// Math.max(...n);// encuentra el valor maximo dentro del array n







//Formas de recorrer arrays aparte de fon con .length///////////////////////////////

// let equipoFrontend = ['Midoris', 'Filiberto', 'Christian'];

// for (const dividir of equipoFrontend) { 
//     // creo una constante que va a reccorrer el array y los valores los va a guardar dentro de dividir
//     console.log(dividir);
// }





//      UTILIZAMOS     .forEach  /////////////////////////////////////////////////////

// let numerosCuadrados = [];

// let numeros = [2, 3, 4, 5];

// //Lo utilizamos cuando queremos recorrer un array y al mismo tiempo queremos que una funcion se ejecute
// numeros.forEach(numero => { //recorre el array numeros, numero va a guardar el valor
//     numerosCuadrados.push(numero * numero); //la funcion me va adevolver el cuadrado de los numeros del array
// });

// console.log(numerosCuadrados)






// ///////////UTILIZAMOS .some()//////////////////////////////
// //Lo utilizamos cuando queremos saber si la condicion se cumple almenos en un indice del array
// let equipoFrontend = ['Midoris', 'Filiberto', 'Christian'];


// //preguntamos si dentro del array se encuentra el nombre Midoris
// equipoFrontend.some( nombre => nombre === 'Midoris');

// //la variable 'nombre' va a guardar el valor de 'equipoFrontend'
// // y va a preguntar si nombre === 'Midoris'
// //Si se cumple va a retornar true en el caso contrario sera false





///////////UTILIZAMOS .every()//////////////////////////////
//Lo utilizamos cuando queremos saber si la condicion se cumple en todos los indices del array
//si se cumple regresa true sino false

// let equipoFrontend = ['Midoris', 'Filiberto', 'Christian'];

// equipoFrontend.every(nombre => nombre.length >= 7);
// //estoy preguntando si nombre tiene 7 caracteres o más cada indice del array
//regresa true



//Ejercicio para eliminar datos de un Array////////////////////
// let equipoFrontend = ['Midoris', 'Filiberto', 'Christian'];

// const eliminarNombres = (nombre) => {
// //nombre ahora es igual al array
//         nombre.splice(0, nombre.length);
// //le digo que lea desde la posicion 0 del array y que elimine los indices de acurdo a la longitud del array
// //osea que lo elimine de plano
// }



///// UTILIZANDO .map() ////////////////////////////////////////

// let numeros = [2, 3, 4, 5, 6];

// numeros.map( n => n*n)
// //recorre el array y de acuerdo a la funcion escrita entre los parentesis (callback)
// //y creara un nuevo array con esos valores



///// UTILIZANDO .filter() ////////////////////////////////////////

// let numeros = [2, 3, 4, 5, 6];

// numeros.filter( n => n > 4);
// // //recorre el array y filtra los valores que cumplan la condicion
// // //y creara un nuevo array con esos valores
// //me hara un nuevo array con los vaores 5 y 6




///// UTILIZANDO .reduce() ////////////////////////////////////////
//Reduce todos los elementos un unico valor 
//Un uso muy comun es en las matematicas donde sumas restas multiplicas etc...
// let numeros = [2, 3, 4, 5, 6];

// numeros.reduce( (a, b) => a + b);
// //Compara de 2 en 2 entonces tengo dos variables a y b cada una tiene un numero del array
// // a = 1, b = 3 en la primera iteracion 
// // y lo que hara sera sumarlos y así hasta recorrer todo el ciclo
// //y crea un nuevo array con ese valor