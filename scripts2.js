
//*************************************************************
//*********************GLOBALES*****************************

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
const cafe2 = new Producto("002", "img/cafe2.jpg", "Venita Selezionse Merida", "Venita", "100% Arábica", 5500, 5, 0)
const cafe3 = new Producto("003", "img/cafe3.png", "Giulis-Café de finca", "Giulis", "intenso", 4000, 5, 0)
const cafe4 = new Producto("004", "img/cafe4.png", "Café Brasil Santos Bourbon", "Torremolinos", "100% Arábica", 3200, 5, 0)
const cafe5 = new Producto("005", "img/cafe5.png", "Café Quindio Gourmet", "Quindio", "100% colombiano", 3500, 5, 0)
const cafetera1 = new Producto("006", "img/cafeteraMoka.png", "Cafetera Italia", "Bialletti", "Moka", 30000, 2, 0)
const cafetera2 = new Producto("007", "img/cafeteraEmbolo.png", "Cafetera de Embolo", "Bodum", "prensa francesa", 20000, 3, 0);
const molinillo = new Producto("008", "img/Molinillo.png", "Molinillo", "Peugeot", "estilo antiguo", 15000, 2, 0);

const productos = [cafe1,cafe2,cafe3,cafe4,cafe5,cafetera1,cafetera2,molinillo]
// const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

//CONTENEDOR
let contenedor = document.getElementById("productosContainer")

productos.forEach((producto)=>{
  let content = document.createElement("div")
  content.className="producto row"

  // let content1 = document.createElement("div")
  // content1.className="row"

  let content2 = document.createElement("div")
  content2.className="imagen-producto col-12 col-md-4"
  content2.innerHTML = `
          <img src="${producto.imagen}">`

  let content3 = document.createElement("div")
  content3.className="nombre-producto col-12 col-md-4"
  content3.innerHTML = `
          <h2>${producto.nombre}</h2>
  `
  let content4 = document.createElement("div")
  content4.className="col-12 col-md-4"
  content4.innerHTML = `
  <h2>$${producto.precio}</h2>`;
  
  let quantity = document.createElement("div")
  let botonRest = document.createElement("button")
  botonRest.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>`
  botonRest.className = "rest"
  botonRest.setAttribute("data-producto", producto.id)

  let valor = document.createElement("input")
  valor.className = "valorCantidad"
  valor.setAttribute("id", `cantidad${producto.id}`)
  valor.value = 0;

  let botonPlus = document.createElement("button")
  botonPlus.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>`
  botonPlus.className = "plus"
  // botonPlus.setAttribute("id", `plus${producto.id}`)
  botonPlus.setAttribute("data-producto", producto.id)
  quantity.append(botonRest,valor,botonPlus)

  let comprar = document.createElement("button")
  comprar.className = "boton boton--terciario producto-agregar"
  comprar.setAttribute("id", `comprar${producto.id}`)
  comprar.setAttribute("data-producto", producto.id)

  let mensajeStock = document.createElement("div")
  mensajeStock.className = "mensajeStock"
  mensajeStock.setAttribute("id", `mensaje${producto.id}`)

  content4.append(quantity,comprar,mensajeStock)
  content.append(content2, content3,content4)
  // content.append(content1)
  contenedor.append(content)
})


//BOTONES

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

// FUNCIONES SUMAR Y RESTAR


function incrementar() {
  const productoId=this.getAttribute('data-producto')
  cant = document.getElementById(`cantidad${productoId}`).value
  cant ++
  document.getElementById(`cantidad${productoId}`).value = cant
}

function decrementar() {
  const productoId=this.getAttribute('data-producto')
  cant = document.getElementById(`cantidad${productoId}`).value
  if (cant> 0) {cant --
  document.getElementById(`cantidad${productoId}`).value = cant
  }
}


//FUNCION PARA AGREGAR PRODUCTO (VALIDO INPUT)

function agregarProducto() {
const productoId = this.getAttribute('data-producto')     
const cantidad = parseInt(document.getElementById(`cantidad${productoId}`).value)
if (cantidad != 0 && cantidad != "") {
const productoParaAgregar = getProducto(productoId)
agregar(productoParaAgregar,cantidad)

}
else {
  document.getElementById(`mensaje${productoId}`).innerText = "Por favor, seleccione cantidad"
}
}

//TOMAR VALORES PARA AGREGAR AL CARRITO

function agregar(producto, cantidad) {
  document.getElementById(`cantidad${producto.id}`).value = 0
  document.getElementById(`mensaje${producto.id}`).innerText = ""
  if (carrito.includes(producto) && producto.stock >= cantidad && producto.stock - cantidad >= 0) {
    carrito.splice(producto)
    sumar(producto, cantidad)     //si ya lo tengo en el carrito, actualizo la cantidad
  }
  else {
    if (producto.stock >= cantidad && producto.stock - cantidad >= 0) {
      sumar(producto, cantidad)    //valido stock
    }
    else {
        document.getElementById(`mensaje${producto.id}`).innerText = `Stock insuficiente, solo quedan: ${producto.stock} unidades`

    }
    return producto.stock, carrito
  }
}


//BUSCAR PRODUCTO EN MI ARRAY
function getProducto(productoId) { 
  const productoParaAgregar = productos.find(producto => producto.id === productoId)
  return productoParaAgregar
}


//FUNCION SUMAR AL CARRITO
function sumar(producto, cantidad) {
  producto.stock -= cantidad
  producto.compra += cantidad
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}




