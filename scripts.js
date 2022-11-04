
// //Reserva talleres. //LOS PROMPTS SON A MODO DE SIMULACRO, LUEGO los CUPOS Y LAS FECHAS SE VAN A INGRESAR EN EL FORMULARIO X SELECT!!!

// let cuposCurso1a = 10
// let cuposCurso1b = 10
// let cuposCurso2a = 10
// let cuposCurso2b = 10
let totalCarrito = 0 // esta variable en realidad está definida en sricpts.js, la definí acá tmb porque separé los js para que no se ejecuten los prompts en el home sino solo al ingresar a la tienda o a los cursos
const carrito = [];
// let cuposCurso = 0
// let respuesta1 = "si"
// let respuesta = ""
// let reserva = ""
// const inscriptos = []

// do {
//     let curso = Number(prompt("seleccione curso 1-Técnicas de extracción de café o curso 2-Recetas de café para principiantes"))
//     cuposCurso = 0
//     cupos = 0
//     switch (curso) {
//         case 1:
//             reserva = prompt("seleccione entre a-15/11/2022 o b-10/01/2023").toLowerCase()
//             switch (reserva) {

//                 case "a":
//                     cupos = prompt("Cantidad de cupos: ")
//                     if (cuposCurso1a == 0) {
//                         alert("No quedan cupos en este curso")
//                     }
//                     else {
//                         while (cuposCurso1a > 0)
//                             if (cupos <= cuposCurso1a && cupos > 0) {
//                                 inscripcion(cupos, cuposCurso1a, totalCarrito, 2500)
//                                 cuposCurso1a = cuposCurso
//                                 console.log(cuposCurso1a, totalCarrito)
//                                 break;
//                             }
//                             else if (cupos > cuposCurso1a && cupos > 0) {
//                                 respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares? si/no")
//                                 if (respuesta.toLowerCase() == "si") {
//                                     cupos = prompt("cantidad de cupos: ")
//                                 }
//                                 else {
//                                     break;
//                                 }
//                             }
//                         break;
//                     }
//                     break;

//                 case "b":
//                     cupos = prompt("Cantidad de cupos: ")
//                     if (cuposCurso1b == 0) {
//                         alert("No quedan cupos en este curso")
//                     }
//                     else {
//                         while (cuposCurso1b > 0)
//                             if (cupos <= cuposCurso1b && cupos > 0) {
//                                 inscripcion(cupos, cuposCurso1b, totalCarrito, 2500)
//                                 cuposCurso1b = cuposCurso
//                                 console.log(cuposCurso1b, totalCarrito)
//                                 break;
//                             }
//                             else if (cupos > cuposCurso1b && cupos > 0) {
//                                 respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?si/no")
//                                 if (respuesta.toLowerCase() == "si") {
//                                     cupos = prompt("cantidad de cupos: ")
//                                 }
//                                 else {
//                                     break;
//                                 }
//                             }
//                             else {
//                                 break;
//                             }
//                     }
//                     default: alert("Opción inválida")
//                     break;
//             }
//             break;
//         case 2:
//             reserva = prompt("seleccione entre a-10/11/2022 o b-03/01/2023").toLowerCase()

//             switch (reserva) {

//                 case "a":
//                     cupos = prompt("Cantidad de cupos: ")
//                     if (cuposCurso2a == 0) {
//                         alert("No quedan cupos en este curso")
//                     }
//                     else {
//                         while (cuposCurso2a > 0)
//                             if (cupos <= cuposCurso2a && cupos > 0) {
//                                 inscripcion(cupos, cuposCurso2a, totalCarrito, 2000)
//                                 cuposCurso2a = cuposCurso
//                                 console.log(cuposCurso2a, totalCarrito)
//                                 break
//                             }
//                             else if (cupos > cuposCurso2a && cupos > 0) {
//                                 respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?si/no")
//                                 if (respuesta.toLowerCase() == "si") {
//                                     cupos = prompt("cantidad de cupos: ")
//                                 }
//                                 else {
//                                     break;
//                                 }
//                             }
//                             else {
//                                 break;
//                             }
//                         break;
//                     }
//                     break;

//                 case "b":
//                     cupos = prompt("Cantidad de cupos: ")
//                     if (cuposCurso2b == 0) {
//                         alert("No quedan cupos en este curso")
//                     }
//                     else {
//                         while (cuposCurso2b > 0)
//                             if (cupos <= cuposCurso2b && cupos > 0) {
//                                 inscripcion(cupos, cuposCurso2b, totalCarrito, 2000)
//                                 cuposCurso2b = cuposCurso
//                                 console.log(cuposCurso2b, totalCarrito)
//                                 break
//                             }
//                             else if (cupos > cuposCurso2b && cupos > 0) {
//                                 respuesta = prompt("no disponemos de esa cantidad de cupos, quiere reservar menos lugares?si/no")
//                                 if (respuesta.toLowerCase() == "si") {
//                                     cupos = prompt("cantidad de cupos: ")
//                                 }
//                                 else {
//                                     break;
//                                 }
//                             }
//                             else {
//                                 break;
//                             }
                    
//                         break;
//                     }
//                     default: alert("Opción inválida")
//                     break;
//             }

//             break;
//         default: alert("Ese curso no existe, le recomendamos que visite nuestra tienda de productos")
//             break;
//     }
//     respuesta1 = prompt("Le gustaría inscribirse en más cursos?").toLocaleLowerCase()
// }
// while (respuesta1 == "si")

// function inscripcion(cupos, cuposdisponibles, totalPagar, precio) {
//     let totalParcial = cupos * precio
//     totalCarrito = totalPagar + (cupos * precio)
//     cuposCurso = cuposdisponibles - cupos
//     let nombre = prompt("Ingrese su nombre")
//     let apellido = prompt("Ingrese su apellido")
//     alert("Inscripción realizada con éxito: " + apellido + "," + nombre + " Cupos reservados: " + cupos + " El total a pagar es: " + totalCarrito)
//     console.log("Cantidad de cupos disponibles del curso: " + cuposCurso + " Nombre y apellido de inscripto: " + apellido, nombre + " Cupos reservados: " + cupos + " Total Parcial: " + totalParcial + " El total a pagar es: $" + totalCarrito)
//     cupos = 0
//     return totalCarrito, cuposCurso
// }


//OPCION OBJETOS//



class Curso{
    constructor(nombre, profesor, fecha, precio, cupos,inscriptos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.fecha = fecha;
        this.precio = parseFloat(precio);
        this.cupos = parseFloat(cupos);
        this.inscriptos = inscriptos;
    }
    oferta(porcentaje) {
        this.precio = this.precio -(this.precio/100*porcentaje)
        return this.precio
    
    };
    }
    
    const curso1 = new Curso("Técnicas de extracción de café", "Juliana Lopez", "15/11/2022", 2500, 10,[] )
    const curso2 = new Curso("Técnicas de extracción de café", "Juliana Lopez", "10/01/2023",2500,10,[])
    const curso3 = new Curso("Recetas de café para principiantes", "Felipe Carmona","10/11/2022", 2000, 10,[])
    const curso4 = new Curso("Recetas de café para principiantes", "Felipe Carmona", "03/01/2023", 2000,10,[]);




    do {
            let curso = Number(prompt("seleccione curso 1-Técnicas de extracción de café o curso 2-Recetas de café para principiantes"))
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
                                        inscripcion(cupos,curso1)
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
                                        inscripcion(cupos,curso2)
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
                                        inscripcion(cupos,curso3)
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
                                        inscripcion(cupos,curso4)
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
        if(respuesta1 == "no") {
            console.log(totalCarrito, carrito, curso1.inscriptos, curso2.inscriptos, curso3.inscriptos, curso4.inscriptos)
        }


       function inscripcion(cantidad, curso) {       
            let persona = prompt("Ingrese su nombre y apellido")
            const newInscripto = {name: persona, reservas: cantidad}
            curso.inscriptos.push(newInscripto)
            totalCarrito +=curso.precio*cantidad 
            curso.cupos -= cantidad
            carrito.push(curso);
            cupos = 0;
            alert("Inscripción realizada con éxito")
            return curso.inscriptos, carrito, totalCarrito   
        }






