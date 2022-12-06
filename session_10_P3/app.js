class Alumno {
    promediofinal = 0;
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    promedio() {
        return this.promediofinal = (this.nota1 * 0.15) + (this.nota2 * 0.2) +(this.nota3 * 0.25) + (this.nota4 * 0.4)
    }
    condicion(notafinal) {
        if(notafinal >= 12 ) {
            return 'APROBADO'
        }else {
            return 'DESAPROBADO'
        }
    }
    obsequio(notafinal) {
        if (notafinal >= 17) {
            return 'TE GANASTE UN MOCHILA'
        }else {
            return 'PIPIPIPI'
        }
    }

}
const michael = new Alumno('01', 'Michael', 20, 20, 20, 20)
const danfer = new Alumno('02', 'Michael', 10, 10, 10, 10)
const harry = new Alumno('03', 'Michael', 0, 0, 20, 20)
const shirley = new Alumno('04', 'Michael', 15, 16, 17, 18)
const oscar = new Alumno('05', 'Michael', 0, 20, 0, 20)
console.log(michael.promedio());
console.log(michael.promediofinal)
console.log(michael.condicion(michael.promediofinal));
console.log(michael.obsequio(michael.promediofinal));