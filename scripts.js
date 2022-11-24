
//EN DESARROLLO!!



let totalCarrito = 0 
const carrito = [];

class Curso {
    constructor(nombre, profesor, fecha, precio, cupos, inscriptos) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.fecha = fecha;
        this.precio = parseFloat(precio);
        this.cupos = parseInt(cupos);
        this.inscriptos = inscriptos;
    }
    oferta(porcentaje) {
        this.precio = this.precio - (this.precio / 100 * porcentaje)
        return this.precio

    };
}

const curso1 = new Curso("Técnicas de extracción de café", "Juliana Lopez", "15/11/2022", 2500, 10, [])
const curso2 = new Curso("Técnicas de extracción de café", "Juliana Lopez", "10/01/2023", 2500, 10, [])
const curso3 = new Curso("Taller para tostar y moler granos", "Felipe Carmona", "10/11/2022", 2000, 10, [])
const curso4 = new Curso("Taller para tostar y moler granos", "Felipe Carmona", "03/01/2023", 2000, 10, []);




do {
    let curso = Number(prompt("seleccione curso 1-Técnicas de extracción de café o curso 2-Taller para tostar y moler granos"))
    cuposCurso = 0
    cupos = 0
    switch (curso) {
        case 1:
            reserva = prompt("seleccione entre a-15/11/2022 o b-10/01/2023").toLowerCase()
            switch (reserva) {

                case "a":
                    cupos = prompt("Cantidad de cupos: ")
                    if (curso1.cupos == 0) {
                        alert("No quedan cupos en este curso")
                    }
                    else {
                        while (curso1.cupos > 0)
                            if (cupos <= curso1.cupos && cupos > 0) {
                                inscripcion(cupos, curso1)
                                break;
                            }
                            else if (cupos > curso1.cupos && cupos > 0) {
                                respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares? si/no")
                                if (respuesta.toLowerCase() == "si") {
                                    cupos = prompt("cantidad de cupos: ")
                                }
                                else {
                                    break;
                                }
                            }
                        break;
                    }
                    break;

                case "b":
                    cupos = prompt("Cantidad de cupos: ")
                    if (curso2.cupos == 0) {
                        alert("No quedan cupos en este curso")
                    }
                    else {
                        while (curso2.cupos > 0)
                            if (cupos <= cupos2.cupos && cupos > 0) {
                                inscripcion(cupos, curso2)
                                break;
                            }
                            else if (cupos > curso2.cupos && cupos > 0) {
                                respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?si/no")
                                if (respuesta.toLowerCase() == "si") {
                                    cupos = prompt("cantidad de cupos: ")
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }
                    }
                default: alert("Opción inválida")
                    break;
            }
            break;
        case 2:
            reserva = prompt("seleccione entre a-10/11/2022 o b-03/01/2023").toLowerCase()

            switch (reserva) {

                case "a":
                    cupos = prompt("Cantidad de cupos: ")
                    if (curso3.cupos == 0) {
                        alert("No quedan cupos en este curso")
                    }
                    else {
                        while (curso3.cupos > 0)
                            if (cupos <= curso3.cupos && cupos > 0) {
                                inscripcion(cupos, curso3)
                                break;
                            }
                            else if (cupos > curso3.cupos && cupos > 0) {
                                respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?si/no")
                                if (respuesta.toLowerCase() == "si") {
                                    cupos = prompt("cantidad de cupos: ")
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }
                        break;
                    }
                    break;

                case "b":
                    cupos = prompt("Cantidad de cupos: ")
                    if (curso4.cupos == 0) {
                        alert("No quedan cupos en este curso")
                    }
                    else {
                        while (curso4.cupos > 0)
                            if (cupos <= curso4.cupos && cupos > 0) {
                                inscripcion(cupos, curso4)
                            }
                            else if (cupos > curso4.cupos && cupos > 0) {
                                respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?si/no")
                                if (respuesta.toLowerCase() == "si") {
                                    cupos = prompt("cantidad de cupos: ")
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }

                        break;
                    }
                default: alert("Opción inválida")
                    break;
            }

            break;
        default: alert("Ese curso no existe, le recomendamos que visite nuestra tienda de productos")
            break;
    }
    respuesta1 = prompt("Le gustaría inscribirse en más cursos?").toLocaleLowerCase()
}
while (respuesta1 == "si")
if (respuesta1 == "no") {
    fin()
}


function inscripcion(cantidad, curso) {
    let persona = prompt("Ingrese su nombre y apellido")
    const newInscripto = (persona)
    curso.inscriptos.push(newInscripto)
    totalCarrito += curso.precio * cantidad
    curso.cupos -= cantidad
    carrito.push(curso);
    cupos = 0;
    alert("Inscripción realizada con éxito")
    return curso.inscriptos, carrito, totalCarrito
}



function fin() {
    console.log("total carrito: " + totalCarrito)
    console.log(carrito)
    console.log("Detalle de inscriptos por curso: " + curso1.inscriptos, curso2.inscriptos, curso3.inscriptos, curso4.inscriptos)
}