//Reserva talleres. //LOS PROMPTS SON A MODO DE SIMULACRO, LUEGO los CUPOS Y LAS FECHAS SE VAN A INGRESAR EN EL FORMULARIO X SELECT!!!
let reserva = ""
let cuposCurso1a = 10
let cuposCurso1b = 10
let cuposCurso2a = 10
let cuposCurso2b = 10
let totalCarrito = 0 // esta variable en realidad está definida en sricpts.js, la definí acá tmb porque separé los js para que no se ejecuten los prompts en el home sino solo al ingresar a la tienda o a los cursos
let cupos = 0

let curso = prompt("seleccione curso 1 o curso 2")


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
                        console.log(totalCarrito, cuposCurso1a)
                        break
                    }
                    else if (cupos > cuposCurso1a && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta == "si") {
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
                    if (cupos <= cuposCurso1a && cupos > 0) {
                        totalCarrito = totalCarrito + (cupos * 2500)
                        cuposCurso1b = cuposCurso1b - cupos
                        console.log(totalCarrito, cuposCurso1b)
                        break
                    }
                    else if (cupos > cuposCurso1b && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta == "si") {
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
                        console.log(totalCarrito, cuposCurso2a)
                        break
                    }
                    else if (cupos > cuposCurso2a && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta == "si") {
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
                        console.log(totalCarrito, cuposCurso2b)
                        break
                    }
                    else if (cupos > cuposCurso2b && cupos > 0) {
                        respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?")
                        if (respuesta == "si") {
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
        break
}
