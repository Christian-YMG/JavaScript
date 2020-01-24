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
const c = console.log; //una funcion es sun valor 

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