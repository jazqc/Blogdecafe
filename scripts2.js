
//*************************************************************
//*********************GLOBALES*****************************

let totalCarrito = 0
let cantidad = 0
let boton = ""
const carrito = [];
const sumarProducto = (a, b) => a * b

//*************************************************************
//*********************TIENDA*****************************

class Producto {
  constructor(id, nombre, marca, tipo, precio, stock, compra) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.tipo = tipo;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.compra = parseInt(compra);
  }

  sumarStock(cantidad) {
    this.stock += parseInt(cantidad)
    return this.stock
  }
  oferta(porcentaje) {
    this.precio = this.precio - (this.precio / 100 * porcentaje)
    return this.precio

  };
}

const cafe1 = new Producto("001", "Juan Valdez Premium", "Juan Valdez", "básico", 2500, 20, 0);
const cafe2 = new Producto("002", "Venita Selezionse Merida", "Venita", "100% Arábica", 5500, 5, 0)
const cafe3 = new Producto("003", "Giulis-Café de finca", "Giulis", "intenso", 4000, 5, 0)
const cafetera1 = new Producto("004", "Cafetera Italia", "Bialletti", "Moka", 30000, 2, 0)
const cafetera2 = new Producto("005", "Cafetera de Embolo", "Bodum", "prensa francesa", 20000, 3, 0);
const molinillo = new Producto("006", "Molinillo", "Peogeot", "estilo antiguo", 15000, 2, 0);

const productos = [cafe1,cafe2,cafe3,cafetera1,cafetera2,molinillo]


let botones = document.querySelectorAll(".producto-agregar");

botones.forEach(boton => {
  boton.addEventListener("click", agregarProducto);
});

function agregarProducto(e) {
const idBoton = e.currentTarget.id;
const productoAgregado = productos.find(producto => producto.id === idBoton)
agregar(productoAgregado,1)
}

//VER TEMA CANTIDAD A PARTIR DEL SELECT


// boton =
// document.getElementById("2") 
// boton.onclick= () => {
// var cant = document.getElementById("cant2").value;
// agregar(cafe2,cant)
// console.log("agregaste el producto 2")}

// boton =
// document.getElementById("3") 
// boton.onclick= () => {
// var cant = document.getElementById("cant3").value;
// agregar(cafe3,cant)
// console.log("agregaste el producto 3")}


// boton =
// document.getElementById("4") 
// boton.onclick= () => {
// var cant = document.getElementById("cant4").value;
// agregar(cafetera1,cant)
// console.log("agregaste el producto 4")}

// boton =
// document.getElementById("5") 
// boton.onclick= () => {
// var cant = document.getElementById("cant5").value;
// agregar(cafetera2,cant)
// console.log("agregaste el producto 5")}

// boton =
// document.getElementById("6") 
// boton.onclick= () => {
// var cant = document.getElementById("cant6").value;
// agregar(molinillo,cant)
// console.log("agregaste el producto 6", carrito)}





  // switch (producto) {
  //   case 1:
  //     agregar(cafe1, cantidad)
  //     break;
  //   case 2:
  //     alert("Este producto tiene un 10% de descuento!")
  //     cafe2.oferta(10)
  //     agregar(cafe2, cantidad)
  //     break;
  //   case 3:
  //     agregar(cafe3, cantidad);
  //     break;
  //   case 4:
  //     agregar(cafetera1, cantidad);
  //     break;
  //   case 5:
  //     alert("Este producto tiene un 20% de descuento!")
  //     cafetera2.oferta(20)
  //     agregar(cafetera2, cantidad);
  //     break;
  //   case 6:
  //     agregar(molinillo, cantidad);
  //     break;
  //   default:
  //     alert("El producto no existe")
  // }




function agregar(producto, cantidad) {
  if (carrito.includes(producto) && producto.stock >= cantidad && producto.stock - cantidad >= 0) {
    carrito.splice(producto)
    sumar(producto, cantidad)     //si ya lo tengo en el carrito, actualizo la cantidad
  }
  else {
    if (producto.stock >= cantidad && producto.stock - cantidad >= 0) {
      sumar(producto, cantidad)
    }
    else {
      alert("stock insuficiente, solo quedan: " + producto.stock + " unidades")
    }
    return producto.stock, totalCarrito, carrito
  }
console.log(carrito)
}

// function revisarCarrito() {
//   const listado = carrito.map((el) => el.nombre)
//   alert("El total a pagar es de: $" + totalCarrito + "\nproductos seleccionados: " + listado)
//   console.log(totalCarrito, carrito)
//   let rev = Number(prompt("Quisiera quitar algún producto de su carrito? 1-si  2-no"))
//   if (rev == "2") {
//     fin()
//   }
//   else eliminar()
// }

// function eliminar() {
//   respuesta2 = 1
//   while (respuesta2 == 1) {
//     if (carrito.length === 0) {
//       alert("Su carrito está vacío")
//       fin()
//       break;
//     }
//     else {
//      const listarProductos = carrito.map((el) => el.id + "-" + el.nombre)
//       let productoId = prompt("Qué producto desea quitar de su carrito?" + listarProductos)
//       cantidad = prompt("Cuántas unidades desea quitar?")
//       objIndex = carrito.findIndex((producto => producto.id == productoId))
//       if (carrito[objIndex].compra - cantidad == 0) {
//         totalCarrito -= sumarProducto(carrito[objIndex].precio, cantidad)
//         carrito[objIndex].sumarStock(cantidad)
//         carrito.splice(carrito[objIndex], 1)
//       }
//       else if (carrito[objIndex].compra - cantidad < 0) {
//         alert("No dispone de esa cantidad de unidades en su carrito, este tiene: " + carrito[objIndex].compra + " unidades")
//       }
//       else {
//         carrito[objIndex].compra = carrito[objIndex].compra - cantidad
//         carrito[objIndex].sumarStock(cantidad)
//         totalCarrito -= sumarProducto(carrito[objIndex].precio, cantidad)
//       }
//       respuesta2 = prompt("Quisiera quitar algún otro producto? 1-si  2-no")
//     }
//   }
//   fin()
// }

// function fin() {
//   alert("Gracias por su compra, visite nuestra sección de Cursos \n su total a pagar es de: " + totalCarrito)
//   console.log(carrito, totalCarrito)
// }


// //OPCION FOR OF
// // function listar(carrito) {
// //   listarProductos = ""
// //   for (producto of carrito) {
// //     listarProductos += producto.id + "-" + producto.nombre + "/ "
// //   }
// //   return listarProductos
// // }



function sumar(producto, cantidad) {
  producto.stock -= cantidad
  producto.compra += cantidad
  carrito.push(producto);
  totalCarrito += sumarProducto(producto.precio, cantidad)
}
