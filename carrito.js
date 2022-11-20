

let carrito = JSON.parse(localStorage.getItem('carrito')) || []; //si existe algo en el local storage lo recupera, sino es un array vacío

let contenedorCarrito = document.getElementById("carritoContainer")

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

  let eliminar = document.createElement("button")
  eliminar.className = "boton boton--terciario producto-eliminar"
  eliminar.setAttribute("id", `eliminar${producto.id}`)

  contenedorCarrito.append(contentC)
  contentC.append(contentD)
  contentD.append(contentE, contentF, contentG, contentH)
  contentH.append(eliminar)
})
}
cargarCarrito()