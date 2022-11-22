

 //si existe algo en el local storage lo recupera, sino es un array vacío
 let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let contenedorCarrito = document.getElementById("carritoContainer")
let totalCarrito = 0

function cargarCarrito() {
carrito.forEach((producto)=>{
  let contentC = document.createElement("div")
  contentC.className="producto"

  let contentD = document.createElement("div")
  contentD.className="row"


  let contentE = document.createElement("div")
  contentE.className="col-12 col-md-3"
  contentE.innerHTML = `
          <h2>${producto.nombre}</h2>
  `
  let contentF = document.createElement("div")
  contentF.className="col-12 col-md-3"
  contentF.innerHTML = `
  <h2>$${producto.precio}</h2>`;

  let contentG = document.createElement("div")
  contentG.className="col-12 col-md-3"
  contentG.innerHTML = `
  <h2>${producto.compra}</h2>`;

  let contentH = document.createElement("div")
  contentH.className="col-12 col-md-3"

  let disminuir = document.createElement("button")
  disminuir.innerHTML =  `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>`
  disminuir.className = "rest producto-disminuir"
  disminuir.setAttribute("id", `disminuir${producto.id}`)

  let eliminar = document.createElement("button")
  eliminar.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="11" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>`
eliminar.className = "rest"
  eliminar.setAttribute("id", `eliminar${producto.id}`)

  contenedorCarrito.append(contentC)
  contentC.append(contentD)
  contentD.append(contentE, contentF, contentG, contentH)
  contentH.append(disminuir, eliminar)

totalCarrito += producto.compra * producto.precio
})
}
cargarCarrito()

//MOSTRAR TOTAL

document.getElementById("total").innerText = `Total a pagar $ ${totalCarrito}`

//VACIAR
const vaciarCarrito = document.getElementById("vaciar")
vaciarCarrito.addEventListener("click", reiniciar)

function reiniciar() {
    carrito.length = 0;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
    window.location.reload()
}


//BOTONES DISMINUIR Y ELIMINAR
let botonesDisminuir = document.querySelectorAll(".producto-disminuir");

botonesDisminuir.forEach(boton => {
  boton.addEventListener("click", disminuirCantidad);
});

function disminuirCantidad(e) {
  const idBotonD = e.currentTarget.id.substr(-3);
  const productoModificar = carrito.find(producto => producto.id === idBotonD)
  console.log(productoModificar)
  // revisarProducto(productoModificar)
}

// function revisarProducto(producto) {
// if (producto.compra === 1) {
//   localStorage.removeItem(producto)
//   carrito.splice(producto)
//   cargarCarrito()
// }
// else {
//   producto.compra --
// }
// // localStorage.setItem('carrito', JSON.stringify(carrito));

// }