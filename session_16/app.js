const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $c1 = document.getElementById('box-1');
const $c2 = document.getElementById('box-2');


















// Funciones

let r1 = 50;
let r2 = 11;
const restar = ( a, b ) => a - b;


let grado = 23.889;
const tofaren = grados => 1.8 * grados + 32;

// let far = 75;
let far = tofaren(grado);
let toCelcius = faren => (faren - 32) * 5/9;

let suma = ( x, y ) => x + y

















$btn1.addEventListener('click', (e) => {
    
    e.target.previousElementSibling.innerHTML = `${r1} - ${r2} = ${restar(r1, r2)}`

})
$btn2.addEventListener('click', (e) => {
    e.target.previousElementSibling.innerHTML = `${far}F = ${toCelcius(far)} C°`
})
$btn3.addEventListener('click', (e) => {
    if($c1.value == '' || $c2.value == '') {
        alert('Ingrese los numeros por favor');
        return
    }

    e.target.previousElementSibling.innerHTML = `
    <input type="number" class="form-control mb-2" disabled value='${suma(+$c1.value,+$c2.value)}'>
    `
})