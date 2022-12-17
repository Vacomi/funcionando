
// Mostrar todos los usuarios
function getUsers() {
    fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
}

// Mostrar un usuario por ID
function getUserbyId(id) {

    fetch(`http://localhost:3000/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))

}

// Muestra todos 
getUsers();

// Muestra solo uno ( por ID)
getUserbyId('639ce150a42bcf29fb1acd95');
