
let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]
 
// console.log(pokemons);
console.log('EJERCICIOS');

//1. Ordernar los pokemons por base_damage de menor a mayor.

// console.log(pokemons.sort( (a, b) => a.base_damage - b.base_damage));
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function ordenarPokemon (parametro) {
    let requeridos = ['type', 'base_damage', 'base_hp', 'speed', 'name', 'id'];

    if( requeridos.includes(parametro)) {
        let respuesta = pokemons.sort( (a, b) => {
            if( a[parametro] > b[parametro]) {
                return 1;
            }else if(a[parametro] < b[parametro]) {
                return -1;
            } else {
                return 0;
            }
        })

        return respuesta
    } else {
        return 'Ingresa solo los parametros indicados'
    }
  }

// console.log(ordenarPokemon('base_hp'));

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
  function filtrarPokemon( arg ) {
    let filtrados = pokemons.filter( poke => poke.type === arg);
    
    return filtrados.length === 0 ? 'No existe ese tipo de pokemón' : filtrados;
  }

//   console.log(filtrarPokemon('air'));


//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
 
const MaestroPokemon = {
    id: 0,
    name: 'Michael',
    created_date: '2022',
    pokemon: []
}
// console.log(MaestroPokemon);

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

function agregarPokemon() {
    // chocolateamos
    let azar = Math.floor(Math.random() * pokemons.length);
    MaestroPokemon.pokemon.push(pokemons[azar]);
    return MaestroPokemon;
}

console.log('------------------');
// console.log(agregarPokemon());


//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

function addAtributos() {
    pokemons.forEach( obj => {
        obj.min_damage = Math.floor(Math.random() * ( 3 - 1 ) + 1 );
        obj.max_damage = Math.floor(Math.random() * ( 6 - 3 ) + 3 );
    });
    return pokemons
}

// console.log(addAtributos());

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

function getDamage( pok ) {
    // let elegido = Math.floor(Math.random() * pokemons.length);
    addAtributos()
    let pokeeligido = pokemons[pok];

    let extra = Math.floor(Math.random() * ( pokeeligido.max_damage - pokeeligido.min_damage) + pokeeligido.min_damage)

    console.log(pokeeligido);
    console.log('min-da: ' +pokeeligido.min_damage)
    console.log('max-da: ' +pokeeligido.max_damage)
    console.log('daño' + extra)

    let danio = pokeeligido.base_damage + extra;

    console.log(danio);

    return `El pokemon ${pokeeligido.name} tiene ${danio} puntos de daño`;
}

// console.log(getDamage(9));
 
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

function ordenarMaestro() {
    agregarPokemon();
    agregarPokemon();
    console.log(MaestroPokemon.pokemon.sort( (a, b) => (b.base_damage + b.max_damage) - (a.base_damage + a.max_damage) ))
}

// ordenarMaestro();





//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
const $root = document.getElementById('root');
const ul = document.createElement('ul');
$root.appendChild(ul);

pokemons.forEach (pokemon => {
    const li = document.createElement('li')
    li.textContent = pokemon.name
    li.addEventListener("click", () => setDamage(1))
    ul.append(li)
})
 
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

const $table = document.createElement('table');
$table.setAttribute('border', 'collapse')
$root.append($table);

const $thead = document.createElement('thead');
const $tbody = document.createElement('tbody');
const $tr    = document.createElement('tr');
// cabeceras
for (const key in pokemons[0]  ) {
    const $th = document.createElement('th');
    $th.textContent = key;
    $th.addEventListener('click', (e) => {
        $tbody.innerHTML = ''
        console.log(ordenarPokemon(e.target.textContent));
        pintarCuerpo();
    } )
    $tr.append($th)
    // console.log();
}
$thead.append($tr)
$table.append($thead)




pintarCuerpo();
// Cuerpo
function pintarCuerpo() {

    for (const indice in pokemons) {
        const $trb = document.createElement('tr')
        
        for ( let i = 0; i < Object.keys(pokemons[indice]).length; i++ ) {
    
            let prop = Object.keys(pokemons[indice])[i];
            const $td = document.createElement('td');
            $td.textContent = pokemons[indice][prop];
        
            $trb.append($td)
        }
        $tbody.append($trb)
    }
    
    $table.append($tbody)
    
}


// console.log(pokemons);

 
//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.
 
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.
 