//Reserva talleres. //LOS PROMPTS SON A MODO DE SIMULACRO, LUEGO los CUPOS Y LAS FECHAS SE VAN A INGRESAR EN EL FORMULARIO X SELECT!!!
let reserva = ""
let cuposCurso1a = 10
let cuposCurso1b = 10
let cuposCurso2a = 10
let cuposCurso2b = 10
let totalCarrito = 0 // esta variable en realidad está definida en sricpts.js, la definí acá tmb porque separé los js para que no se ejecuten los prompts en el home sino solo al ingresar a la tienda o a los cursos
let cupos = 0
let curso = prompt("seleccione curso 1 o curso 2")
let nombre = ""
let apellido = ""


switch (curso) {
    case "1":
        reserva = prompt("seleccione entre 15/11/2022 o 10/01/2023")
        cupos = prompt("cantidad de cupos")

        switch (reserva) {

            case "15/11/2022":
                while (cuposCurso1a > 0)
                    if (cupos <= cuposCurso1a && cupos > 0) {
                        totalCarrito = totalCarrito + (cupos * 2500)
                        cuposCurso1a = cuposCurso1a - cupos
                        inscripcion(cupos,cuposCurso1a,totalCarrito)
                        break
                        
                    }
                    else if (cupos > cuposCurso1a && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta.toLowerCase() == "si") {
                            cupos = prompt("cantidad de cupos")
                        }
                        else {
                            break
                        }
                    }
                    else {
                        break
                    }
                    break
                

            case "10/01/2023":
                while (cuposCurso1b > 0)
                    if (cupos <= cuposCurso1b && cupos > 0) {
                        totalCarrito = totalCarrito + (cupos * 2500)
                        cuposCurso1b = cuposCurso1b - cupos
                        inscripcion(cupos,cuposCurso1b,totalCarrito)
                        break
                    }
                    else if (cupos > cuposCurso1b && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta.toLowerCase() == "si") {
                            cupos = prompt("cantidad de cupos")
                        }
                        else {
                            break
                        }
                    }
                    else {
                        break
                    }
                break
        


    case "2":
        reserva = prompt("seleccione entre 10/11/2022 o 03/01/2023")
        cupos = prompt("cantidad de cupos")

        switch (reserva) {

            case "10/11/2022":
                while (cuposCurso2a > 0)
                    if (cupos <= cuposCurso2a && cupos > 0) {
                        totalCarrito = totalCarrito + (cupos * 2000)
                        cuposCurso2a = cuposCurso2a - cupos
                        inscripcion(cupos,cuposCurso2a,totalCarrito)
                        break
                    }
                    else if (cupos > cuposCurso2a && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta.toLowerCase() == "si") {
                            cupos = prompt("cantidad de cupos")
                        }
                        else {
                            break
                        }
                    }
                    else {
                        break
                    }
                    break
                

            case "03/01/2023":
                while (cuposCurso1b > 0)
                    if (cupos <= cuposCurso2b && cupos > 0) {
                        totalCarrito = totalCarrito + (cupos * 2000)
                        cuposCurso2b = cuposCurso2b - cupos
                        inscripcion(cupos,cuposCurso2b,totalCarrito)
                        break
                    }
                    else if (cupos > cuposCurso2b && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta.toLowerCase() == "si") {
                            cupos = prompt("cantidad de cupos")
                        }
                        else {
                            break
                        }
                    }
                    else {
                        break
                    }
                break
        }

}
}



function inscripcion(cupos,cuposCurso,totalPagar) {
nombre = prompt("Ingrese su nombre")
apellido = prompt("Ingrese su apellido")
alert("Inscripción realizada con exito: " + apellido + "," + nombre + " cupos reservados: " + cupos +  " El total a pagar es: " + totalPagar)
console.log("Cantidad de cupos disponibles: " + cuposCurso + " Nombre y apellido de inscripto: "+ apellido, nombre + " cupos reservados: " + cupos +  " El total a pagar es: $" + totalPagar)
}
