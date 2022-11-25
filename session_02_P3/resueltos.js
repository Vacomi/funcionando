//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"

function capitalizar(cadena) {
    let may = true;
    let listo = '';
    for (const key in cadena) {
        if( key ===  '0' || may === true ) {
            listo += cadena[key].toUpperCase();
            may = false;
            continue;
        }
        if(cadena[key] === ' ') {
            may = true;
            listo += ' ';
        }
        if( may === false ) listo += cadena[key]
    }
    return listo;
}

console.log(capitalizar('somos una frase larga'));

console.log('----------- EJERCICIO 02 -----------');


//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

 
let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

function verificarCompletos( obj ) {
    console.log('ingrese a verificar');
    for (const index in obj) {
        // if(obj[index] === '') console.log(`${index} esta vacio`);
        if(obj[index] === '')  {
           obj[index] = prompt((`La propiedad ${index} esta vacia, llenalo por favor:`))
         }
    }
    return obj
}

// console.log( verificarCompletos( persona ))


//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.


//4. Te enviaron una base de datos de usuarios:
 // Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.
console.log('----------- EJERCICIO 04 -----------');

let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]
// for (const index in users) {
//     verificarCompletos(users[index])
// }

// for (const propiedad of users) verificarCompletos( propiedad )



console.log('----------- EJERCICIO 05 -----------');

// 5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
function ordenarUp( obj ) {
   return  obj.sort( (a, b) => a.edad - b.edad )
}
// console.log(ordenarUp(users))

//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// Ejemplo: "Andres Soto tiene 28 años y es profesor"
function mostrarData( lista ) {
    for (const obj of lista){
        verificarCompletos( obj )
        document.write(`${obj.nombre} ${obj.apellido} tiene ${obj.edad} años y es ${obj.profesion} <br>`) 
    }
}
// mostrarData(users)

 //7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista

function ordenarSegun (obj, typo) {
    console.log(obj);
    obj.sort( (a, b) => {
        if( a[typo] > b[typo]) {
            return 1;
        }else if(a[typo] < b[typo]) {
            return -1;
        } else {
            return 0;
        }
    } )

    return obj
}
console.log(ordenarSegun(users, 'edad'))

//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"


const $btn = document.createElement('button');
$btn.textContent = 'Aceptar'
$btn.addEventListener('click', () => alert('De acuerdo!'))
root.append($btn);

//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
$btn.addEventListener('mouseover', (e) => {
    e.target.style.display = 'none'
    setTimeout(() => {
        e.target.style.display = "block";
      }, 500);
},false)
