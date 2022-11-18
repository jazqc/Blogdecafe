
//*************************************************************
//*********************GLOBALES*****************************

let totalCarrito = 0
let cantidad = 0
let boton = ""
let cant = 0
const carrito = JSON.parse(localStorage.getItem('carrito')) || []; //si existe algo en el local storage lo recupera, sino es un array vacío
const sumarProducto = (a, b) => a * b

//*************************************************************
//*********************TIENDA*****************************

class Producto {
  constructor(id, imagen, nombre, marca, tipo, precio, stock, compra) {
    this.id = id;
    this.imagen = imagen;
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

const cafe1 = new Producto("001", "./img/cafe1.png","Juan Valdez Premium", "Juan Valdez", "básico", 2500, 20, 0);
const cafe2 = new Producto("002", "img/cafe2.png", "Venita Selezionse Merida", "Venita", "100% Arábica", 5500, 5, 0)
const cafe3 = new Producto("003", "img/cafe3.png", "Giulis-Café de finca", "Giulis", "intenso", 4000, 5, 0)
const cafetera1 = new Producto("004", "img/cafeteraMoka.png", "Cafetera Italia", "Bialletti", "Moka", 30000, 2, 0)
const cafetera2 = new Producto("005", "img/cafeteraEmbolo.png", "Cafetera de Embolo", "Bodum", "prensa francesa", 20000, 3, 0);
const molinillo = new Producto("006", "img/Molinillo.png", "Molinillo", "Peogeot", "estilo antiguo", 15000, 2, 0);

const productos = [cafe1,cafe2,cafe3,cafetera1,cafetera2,molinillo]


let contenedor = document.getElementById("productosContainer")

productos.forEach((producto)=>{
  let content = document.createElement("div")
  content.className="producto"

  let content1 = document.createElement("div")
  content1.className="row"

  let content2 = document.createElement("div")
  content2.className="col-12 col-md-4"
  content2.innerHTML = `
          <img src="${producto.imagen}">`

  let content3 = document.createElement("div")
  content3.className="col-12 col-md-4"
  content3.innerHTML = `
          <h2>${producto.nombre}</h2>
  `
  let content4 = document.createElement("div")
  content4.className="col-12 col-md-4"
  content4.innerHTML = `
  <h2>${producto.precio}</h2>`;
  
  let quantity = document.createElement("div")
  let botonRest = document.createElement("button")
  botonRest.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>`
  botonRest.className = "rest"
  botonRest.setAttribute("id", `rest${producto.id}`)

  let valor = document.createElement("input")
  valor.className = "valorCantidad"
  valor.setAttribute("id", `cantidad${producto.id}`)

  let botonPlus = document.createElement("button")
  botonPlus.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>`
  botonPlus.className = "plus"
  botonPlus.setAttribute("id", `plus${producto.id}`)
  quantity.append(botonRest,valor,botonPlus)

  let comprar = document.createElement("button")
  comprar.innerText = "AGREGAR"
  comprar.className = "boton boton--terciario producto-agregar"
  comprar.setAttribute("id", `comprar${producto.id}`)
  content4.append(quantity,comprar)

  content1.append(content2, content3,content4)
  content.append(content1)
  contenedor.append(content)
})



let botones = document.querySelectorAll(".producto-agregar");

botones.forEach(boton => {
  boton.addEventListener("click", agregarProducto);
});

let botonesPlus = document.querySelectorAll(".plus");
botonesPlus.forEach(botonP => {
  botonP.addEventListener("click", incrementar);
});

let botonesRest = document.querySelectorAll(".rest");
botonesRest.forEach(botonR => {
  botonR.addEventListener("click", decrementar);
});


function incrementar(e) {
  const idInput = e.currentTarget.id.substr(-3);
  cant++
  document.getElementById(`cantidad${idInput}`).value = cant
  console.log(cant,idInput)
  return cant
}

function decrementar(e) {
  const idInput = e.currentTarget.id.substr(-3);
  cant--
  document.getElementById(`cantidad${idInput}`).value = cant
  console.log(cant, idInput)
  return cant
}


function agregarProducto(e) {
const idBoton = e.currentTarget.id.substr(-3);
const cantidad = parseInt(document.getElementById(`cantidad${idBoton}`).value)
const productoAgregado = productos.find(producto => producto.id === idBoton)
agregar(productoAgregado,cantidad)
console.log(cantidad,carrito)
}



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
