
// SIMULADOR TIENDA DE PRODUCTOS

let totalCarrito = 0
let precio = 0 //
let cantidad = 0 
let stockJV = 20
let stockV = 10
let stockMI = 4
let producto = ""

//las variable se van a tomar del selec de la página al hacer CLICk en AGREGAR:

function agregar(cantidad, precio) {
if (producto=="juanValdez") {
    if (cantidad<=stockJV) {
    precio = 4000
    totalCarrito = totalCarrito +(cantidad*precio)
    stockJV = stockJV-cantidad;
    return totalCarrito   
    }
    else {
        alert("sin stock")
    }
}
else if (producto=="Venita") {
    if (cantidad<=stockV) {
        precio = 4000
        totalCarrito = totalCarrito +(cantidad*precio)
        stockV = stockV-cantidad;
        return totalCarrito  
    }
    else {
        alert("sin stock")
    }
}
else if (producto=="mokaItaliana"){
    if (cantidad<=stockMI) {
        precio = 30000
        totalCarrito = totalCarrito + (cantidad*precio)
        stockMI = stockMI-cantidad;
        return totalCarrito
    }
    else {
        alert("sin stock")
    }
}
}


//PRUEBAS EN CONSOLA
producto = "juanValdez"
console.log(agregar(3,0))
console.log(stockJV)

producto = "Venita"
console.log(agregar(2))
console.log(totalCarrito, stockV)
