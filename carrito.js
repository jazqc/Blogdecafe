
//si existe algo en el local storage lo recupera, sino es un array vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productos = JSON.parse(localStorage.getItem('productos')) || []; //Lo Traigo solo para hacer modificaciones del stock, esto funcionaría como una base de datos para que si saca productos del carrito impacte en el array de productos
let contenedorCarrito = document.getElementById("carritoContainer")
contenedorCarrito.innerHTML = "" 
let totalCarrito = 0

cargarCarrito()
function cargarCarrito() {
contenedorCarrito.innerHTML = ""
carrito = JSON.parse(localStorage.getItem('carrito')) || [];
totalCarrito = 0;
 
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
eliminar.setAttribute("data-producto", producto.id)
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

//TERMINAR COMPRA: lo puse por estética nomás
const irPagar = document.getElementById("pagar")
irPagar.addEventListener("click", pagar)


function reiniciar() {
    totalCarrito = 0;
    localStorage.removeItem('carrito');
    localStorage.removeItem('productos')

    cargarCarrito()   
    actualizarTotal()

    Swal.fire({
      html:`<b>Su carrito está vacío</b>`,
      icon: 'success',
      timer: 1900,
      className: ".swal",
      
  
      
    })
}

function pagar() {
  if (carrito.length>0) {
    Swal.fire({
      html:`<b>Se lo direccionará a la página de pago</b>`,
      icon: 'info',
      timer: 2500,
      className: ".swal",
  })
}
else {
  reiniciar()
}
totalCarrito = 0;
localStorage.removeItem('carrito');
localStorage.removeItem('productos')

cargarCarrito()   
actualizarTotal()

}


//BUSCO EL PRODUCTO EN MI CARRITO

function getProducto(productoId) {
  const productoModificar = carrito.find(producto => producto.id === productoId)
  return productoModificar
}


//BOTONES DISMINUIR
function disminuirCantidad() {
  const productoId=this.getAttribute('data-producto')
  modificarProducto(productoId)
}

//DESMINUYO O ELIMINO SI TENGO SOLO 1 UNIDAD
function modificarProducto(productoId) {
  const productoModificar = getProducto(productoId)
    const nuevaCantidad=productoModificar.compra-1
    nuevaCantidad > 0?modificarCantidadDelCarrito(productoId,nuevaCantidad):eliminarDelCarrito(productoId)
    return
  }


function modificarCantidadDelCarrito(productoId,nuevaCantidad) {     
  const index=carritoIndex(productoId)
  if(carrito?.[index]){
    carrito[index].compra=nuevaCantidad
    carrito[index].stock++
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito()
    actualizarTotal()
    actualizarStock(productoId,1)   
    
  }
   
}

//Elimino del carrito y actualizo el stock y productos

function eliminarProducto() {
  const productoId=this.getAttribute('data-producto')
  actualizarStock(productoId,0)
  eliminarDelCarrito(productoId)
}


function eliminarDelCarrito(productoId) {
  const index=carritoIndex(productoId)
  // console.log(index)
  const cantCompra = Number(carrito[index].compra)
  // console.log(cantCompra)
  carrito.splice(index,1)
  localStorage.setItem('carrito', JSON.stringify(carrito));
  if (carrito.length ===0) {
    reiniciar()
  }
  else {
  actualizarStock(productoId,cantCompra)
  cargarCarrito()
  }
  actualizarTotal()
}

//actualizo mi base de productos
function actualizarStock (productoId,cantCompra){
  const index = productos.findIndex((element) => element.id === productoId)
  if(productos?.[index]){
    productos[index].stock += +cantCompra
    productos[index].compra += -cantCompra
    localStorage.setItem('productos', JSON.stringify(productos));
  }
}

//buscar index
function carritoIndex(productoId) {
  const indexProducto = carrito.findIndex((element) => element.id === productoId)
  return indexProducto
}