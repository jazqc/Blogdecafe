

let totalCarrito = 0
let precio = 0 //
let cantidad = 0 
let stockJV = 20
let stockV = 10
let producto = ""

//las variable se toma del selec de la página:

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
}

producto = "juanValdez"
console.log(agregar(3,0))
console.log(stockJV)

producto = "Venita"
console.log(agregar(2))
console.log(totalCarrito, stockV)
