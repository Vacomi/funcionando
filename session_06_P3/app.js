
const $form = document.getElementById("form");
const $inputs = document.querySelectorAll("#form input");

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^[9]\d{8}$/,
}

const campos = {
    usuario: false,
    nombre: false,
    correo: false,
    password: false,
    celular: false,
    // terminos: false,
}


const validarFormulario = ( e ) => {
    switch (e.target.id) {
        case 'usuario':
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "celular":
			validarCampo(expresiones.celular, e.target, 'celular');
		break;
    //     default:
    //         if(e.target.checked) {
    //             document.querySelector(`#grupo__condiciones .invalid-feedback`).style.display = 'none';
    //             campos['terminos'] = true
    //         }else {
    //             document.querySelector(`#grupo__condiciones .invalid-feedback`).style.display = 'block';
    //             campos['terminos'] = false
    //         }
    //         break;
    }
}

    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.querySelector(`#grupo__${campo} .invalid-feedback`).style.display = 'none';
            document.querySelector(`#grupo__${campo} input`).classList.add('isValid')
            document.querySelector(`#grupo__${campo} input`).classList.remove('isInvalid')
            campos[campo] = true
        } else {
            document.querySelector(`#grupo__${campo} .invalid-feedback`).style.display = 'block';
            document.querySelector(`#grupo__${campo} input`).classList.remove('isValid')
            document.querySelector(`#grupo__${campo} input`).classList.add('isInvalid')
            campos[campo] = false;
        }
    }

    const validarPassword2 = () => {
        const inputPass1 = document.getElementById('password')
        const inputPass2 = document.getElementById('password2')
        if(inputPass1.value !== inputPass2.value) {
            document.querySelector(`#grupo__password2 .invalid-feedback`).style.display = 'block';
            document.querySelector(`#grupo__password2 input`).classList.remove('isValid')
            document.querySelector(`#grupo__password2 input`).classList.add('isInvalid')
            campos['password'] = false;
        } else {
            document.querySelector(`#grupo__password2 .invalid-feedback`).style.display = 'none';
            document.querySelector(`#grupo__password2 input`).classList.add('isValid')
            document.querySelector(`#grupo__password2 input`).classList.remove('isInvalid')
            campos['password'] = true;
        }
    }



$inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    const terminos = document.querySelector('#grupo__condiciones input');
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.celular && terminos.checked) {
        $form.reset();
        $inputs.forEach( (input) => {
            input.classList.remove('isValid')
        })
        document.querySelector('#grupo__condiciones .invalid-feedback').style.display = 'none'
        
        document.getElementById('fracaso').classList.add('d-none')
        document.getElementById('exito').classList.remove('d-none')
        document.getElementById('exito').classList.add('d-block')
        setTimeout( () => {
            document.getElementById('exito').classList.remove('d-block')
            document.getElementById('exito').classList.add('d-none')
        }, 5000)

    }else {
        document.querySelector(`#grupo__condiciones .invalid-feedback`).style.display = 'block';

        document.getElementById('fracaso').classList.remove('d-none')
        document.getElementById('fracaso').classList.add('d-block')
    }

})




