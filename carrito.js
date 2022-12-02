
//si existe algo en el local storage lo recupera, sino es un array vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productos = JSON.parse(localStorage.getItem('productos')) || []; //Lo Traigo para hacer modificaciones del stock
let contenedorCarrito = document.getElementById("carritoContainer")
let totalCarrito = 0


function cargarCarrito() {
carrito = JSON.parse(localStorage.getItem('carrito')) || [];
totalCarrito = 0;
contenedorCarrito.innerHTML = "" 
carrito.forEach((producto)=>{
  let contentC = document.createElement("div")
  contentC.className="productoEnCarrito"

  let contentD = document.createElement("div")
  contentD.className="row"


  let contentE = document.createElement("div")
  contentE.className="col-3 col-md-3"
  contentE.innerHTML = `
          <h2>${producto.nombre}</h2>
  `
  let contentF = document.createElement("div")
  contentF.className="col-3 col-md-3"
  contentF.innerHTML = `
  <h2>$${producto.precio}</h2>`;

  let contentG = document.createElement("div")
  contentG.className="botonesCarrito col-3 col-md-3"
  contentG.innerHTML = `
  <h2>${producto.compra}</h2>`;

  let contentH = document.createElement("div")
  contentH.className="col-3 col-md-3"

  let disminuir = document.createElement("button")
  disminuir.innerHTML =  `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>`
  disminuir.className = "rest producto-disminuir"
  disminuir.setAttribute("data-producto", producto.id)
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
eliminar.className = "rest producto-eliminar"
disminuir.setAttribute("data-producto", producto.id)
  eliminar.setAttribute("id", `eliminar${producto.id}`)

  contenedorCarrito.append(contentC)
  contentC.append(contentD)
  contentD.append(contentE, contentF, contentG, contentH)
  contentH.append(disminuir, eliminar)

totalCarrito += producto.compra * producto.precio

})


//BOTONES DISMINUIR Y ELIMINAR

const botonesDisminuir = document.querySelectorAll(".producto-disminuir");
const botonesEliminar = document.querySelectorAll(".producto-eliminar");

botonesDisminuir.forEach(boton => {
  boton.addEventListener("click", disminuirCantidad);
});

botonesEliminar.forEach(boton => {
  boton.addEventListener("click", eliminarProducto);
});

}
cargarCarrito()
actualizarTotal()

//MOSTRAR TOTAL
function actualizarTotal() {
document.getElementById("total").innerText = `Total a pagar $ ${totalCarrito}`
}

// VACIAR
const vaciarCarrito = document.getElementById("vaciar")
vaciarCarrito.addEventListener("click", reiniciar)

function reiniciar() {
    carrito = [];
    totalCarrito = 0;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.removeItem('productos')

    cargarCarrito()   
    actualizarTotal()

    Swal.fire({
      text: 'Tu carrito está vacío',
      icon: 'success',
      timer: 1700,
    
    })
}


//Busco el producto

function getProducto(productoId) {
  const productoModificar = carrito.find(producto => producto.id === productoId)
  return productoModificar
}


//Botones disminuir y eliminar
function disminuirCantidad() {
  const productoId=this.getAttribute('data-producto')
  modificarProducto(productoId)
}

//MODI
function modificarProducto(productoId) {
  const productoModificar = getProducto(productoId)
    const nuevaCantidad=productoModificar.compra-1
    nuevaCantidad > 0?modificarCantidadDelCarrito(productoId,nuevaCantidad):eliminarDelCarrito(productoId)
    
    return
  }


function modificarCantidadDelCarrito(productoId,nuevaCantidad) {     
  const index=carrito.findIndex((element) => element.id ===productoId)
  if(carrito?.[index]){
    carrito[index].compra=nuevaCantidad
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito()
    actualizarTotal()
    actualizarStock(productoId)
    
    
  }
   
}

function eliminarProducto() {

  const productoId=this.getAttribute('data-producto')
  eliminarDelCarrito(productoId)
}


function eliminarDelCarrito(productoId) {
  const index=carrito.findIndex((element) => element.id ===productoId)
  carrito.splice(index,1)
  localStorage.setItem('carrito', JSON.stringify(carrito));
  cargarCarrito()
  actualizarTotal()
  
}

//ME FALTA SOLO ACTUALIZAR EL STOCK CUANDO LO ELIMINA DEL CARRO
function actualizarStock (productoId){
  const index = productos.findIndex((element) => element.id === productoId)
  if(productos?.[index]){
    productos[index].stock ++
    productos[index].compra --
    localStorage.setItem('productos', JSON.stringify(productos));

console.log(productos)
  }
}

