//Reserva talleres. //LOS PROMPTS SON A MODO DE SIMULACRO, LUEGO los CUPOS Y LAS FECHAS SE VAN A INGRESAR EN EL FORMULARIO X SELECT!!!
let reserva = ""
let cuposCurso1a = 10
let cuposCurso1b = 10
let cuposCurso2a = 10
let cuposCurso2b = 10
let totalCarrito = 0 // esta variable en realidad está definida en sricpts.js, la definí acá tmb porque separé los js para que no se ejecuten los prompts en el home sino solo al ingresar a la tienda o a los cursos
let cupos = 0
let cuposCurso = 0

let inscripto = false

let curso = Number(prompt("seleccione curso 1-Técnicas de extracción de café o curso 2-Recetas de café para principiantes"))
switch (curso) {
    case 1:
        reserva = prompt("seleccione entre a-15/11/2022 o b-10/01/2023").toLowerCase()
        switch (reserva) {

            case "a":
                cupos = prompt("Cantidad de cupos: ")
                while (cuposCurso1a > 0 && inscripto == false)
                    if (cupos <= cuposCurso1a && cupos > 0) {
                        inscripcion(cupos, cuposCurso1a, totalCarrito,2500)
                        cuposCurso1a = cuposCurso
                    }
                    else if (cupos > cuposCurso1a && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares? si/no")
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

            case "b":
                cupos = prompt("Cantidad de cupos: ")
                while (cuposCurso1b > 0 && inscripto == false)
                    if (cupos <= cuposCurso1b && cupos > 0) {
                        inscripcion(cupos, cuposCurso1b, totalCarrito,2500)
                        cuposCurso1b = cuposCurso
                        break
                    }
                    else if (cupos > cuposCurso1b && cupos > 0) {
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
        break;
    case 2:
        reserva = prompt("seleccione entre a-10/11/2022 o b-03/01/2023").toLowerCase()

        switch (reserva) {

            case "a":
                cupos = prompt("Cantidad de cupos: ")
                while (cuposCurso2a > 0 && inscripto == false)
                    if (cupos <= cuposCurso2a && cupos > 0) {
                        inscripcion(cupos, cuposCurso2a, totalCarrito,2000)
                        cuposCurso2a = cuposCurso
                        break
                    }
                    else if (cupos > cuposCurso2a && cupos > 0) {
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

            case "b":
                cupos = prompt("Cantidad de cupos: ")
                while (cuposCurso2b > 0 && inscripto == false)
                    if (cupos <= cuposCurso2b && cupos > 0) {
                        inscripcion(cupos, cuposCurso2b, totalCarrito,2000)
                        cuposCurso2b = cuposCurso
                        break
                    }
                    else if (cupos > cuposCurso2b && cupos > 0) {
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
    default: alert("Ese curso no existe, le recomendamos que visite nuestra tienda de productos")
        break;
}





function inscripcion(cupos, cuposCurso, totalCarrito, precio) {
    totalCarrito = totalCarrito + (cupos * precio)
    cuposCurso = cuposCurso - cupos
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    alert("Inscripción realizada con exito: " + apellido + "," + nombre + " cupos reservados: " + cupos + " El total a pagar es: " + totalCarrito)
    alert("Le recomendamos que visite nuestra tienda de productos")
    console.log("Cantidad de cupos disponibles: " + cuposCurso + " Nombre y apellido de inscripto: " + apellido, nombre + " cupos reservados: " + cupos + " El total a pagar es: $" + totalCarrito)
    inscripto = true
    return inscripto, totalCarrito, cuposCurso
}


