//*************************************************************
//*********************GLOBALES*****************************

let cantidad = 0;
let boton = "";
let cant = 0;
const carrito = JSON.parse(localStorage.getItem("carrito")) || []; //si existe algo en el local storage lo recupera, sino es un array vacío
console.log(carrito)
const sumarProducto = (a, b) => a * b;
let numeroCarrito = carrito.length
let contenedorCarrito = document.getElementById("cart_menu_num")
contenedorCarrito.innerText = numeroCarrito.toString()


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
    this.stock += parseInt(cantidad);
    return this.stock;
  }
  oferta(porcentaje) {
    let precioLista = this.precio
    this.precio = this.precio - (this.precio / 100) * porcentaje;
    console.log(precioLista)
    return this.precio;
  }
}

const cafe1 = new Producto(
  "001",
  "./img/cafe1.png",
  "Juan Valdez Premium",
  "Juan Valdez",
  "Básico",
  2500,
  20,
  0
);
const cafe2 = new Producto(
  "002",
  "img/cafe2.jpg",
  "Venita Selezionse Merida",
  "Venita",
  "100% Arábica",
  5500,
  5,
  0
);
const cafe3 = new Producto(
  "003",
  "img/cafe3.png",
  "Giulis-Café de finca",
  "Giulis",
  "Intenso",
  4000,
  5,
  0
);
const cafe4 = new Producto(
  "004",
  "img/cafe4.png",
  "Café Brasil Santos Bourbon",
  "Torremolinos",
  "100% Arábica",
  3200,
  5,
  0
);
const cafe5 = new Producto(
  "005",
  "img/cafe5.png",
  "Café Quindio Gourmet",
  "Quindio",
  "100% Colombiano",
  3500,
  5,
  0
);
const cafe6 = new Producto(
  "006",
  "img/cafe6.png",
  "Café Kaldi",
  "Kaldi",
  "Café&Cacao",
  5500,
  5,
  0
);
const cafetera1 = new Producto(
  "006",
  "img/cafeteraMoka.png",
  "Cafetera Italia",
  "Bialletti",
  "Moka",
  30000,
  2,
  0
);
const cafetera2 = new Producto(
  "007",
  "img/cafeteraEmbolo.png",
  "Cafetera de Embolo",
  "Bodum",
  "Prensa Francesa",
  20000,
  3,
  0
);
const molinillo = new Producto(
  "008",
  "img/Molinillo.png",
  "Molinillo",
  "Peugeot",
  "Estilo Antiguo",
  15000,
  2,
  0
);

const termo1 = new Producto("009", "img/termo1.png", "Termo", "Wilford&Sons","Portatil", 10000, 4, 0)
cafe1.oferta(10)  //solo para aplicar un método
//esto de traerlo del localstorage lo hago solamento porque estoy emulando un endpoint para que me funcione la validación de stock cuando reinicio la pagina, de otra forma lo que pasa es que se me reinicia el stock (por ejemplo si los traigo por fetch del json). Se que no es la manera pero fue la solución que le encontré para que sea más real con las herramientas q tenemos 
const BDD = JSON.parse(localStorage.getItem("productos")) || [
  cafe1,
  cafe2,
  cafe3,
  cafe4,
  cafe5,
  cafetera1,
  cafetera2,
  molinillo,
  termo1
];


const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(BDD), 800);
  });
};

traerProductos() 
    .then((res) => {
        productos = res;
        renderizar(productos)
        console.log(productos)
    })

    
let productos = []

//CONTENEDOR
let contenedor = document.getElementById("productosContainer");

function renderizar(productos) {

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "producto row";

  let content2 = document.createElement("div");
  content2.className = "imagen-producto col-12 col-md-4";
  content2.innerHTML = `
          <img src="${producto.imagen}">`;

  let content3 = document.createElement("div");
  content3.className = "nombre-producto col-12 col-md-4";
  content3.innerHTML = `
          <h2>${producto.nombre}</h2>
          <h3>${producto.marca}</h3>
          <h3>${producto.tipo}</h3>
  `;
  let content4 = document.createElement("div");
  content4.className = "col-12 col-md-4";
  content4.innerHTML = `
  <h2>$${producto.precio}</h2>`;
  
  let quantity = document.createElement("div");
  let botonRest = document.createElement("button");
  botonRest.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>`;
  botonRest.className = "rest";
  botonRest.setAttribute("data-producto", producto.id);

  let valor = document.createElement("input");
  valor.className = "valorCantidad";
  valor.setAttribute("id", `cantidad${producto.id}`);
  valor.value = 0;

  let botonPlus = document.createElement("button");
  botonPlus.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#784d3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>`;
  botonPlus.className = "plus";
  // botonPlus.setAttribute("id", `plus${producto.id}`)
  botonPlus.setAttribute("data-producto", producto.id);
  quantity.append(botonRest, valor, botonPlus);

  let comprar = document.createElement("button");
  comprar.className = "boton boton--terciario producto-agregar";
  comprar.setAttribute("id", `comprar${producto.id}`);
  comprar.setAttribute("data-producto", producto.id);

  let mensajeStock = document.createElement("div");
  mensajeStock.className = "mensajeStock";
  mensajeStock.setAttribute("id", `mensaje${producto.id}`);

  content4.append(quantity, comprar, mensajeStock);
  content.append(content2, content3, content4);
  contenedor.append(content);
});



//BOTONES

let botones = document.querySelectorAll(".producto-agregar");

botones.forEach((boton) => {
  boton.addEventListener("click", agregarProducto);
});

let botonesPlus = document.querySelectorAll(".plus");
botonesPlus.forEach((botonP) => {
  botonP.addEventListener("click", incrementar);
});

let botonesRest = document.querySelectorAll(".rest");
botonesRest.forEach((botonR) => {
  botonR.addEventListener("click", decrementar);
});
}



// FUNCIONES SUMAR Y RESTAR

function incrementar() {
  const productoId = this.getAttribute("data-producto");
  cant = document.getElementById(`cantidad${productoId}`).value;
  cant++;
  document.getElementById(`cantidad${productoId}`).value = cant;
}

function decrementar() {
  const productoId = this.getAttribute("data-producto");
  cant = document.getElementById(`cantidad${productoId}`).value;
  if (cant > 0) {
    cant--;
    document.getElementById(`cantidad${productoId}`).value = cant;
  }
}

//FUNCION PARA AGREGAR PRODUCTO (valido input de cantidad antes)

function agregarProducto() {
  const productoId = this.getAttribute("data-producto");
  const cantidad = parseInt(
    document.getElementById(`cantidad${productoId}`).value
  );
  if (cantidad != 0 && cantidad != "") {
    const productoParaAgregar = getProducto(productoId);
    agregar(productoParaAgregar, cantidad);
  } else {
    document.getElementById(`mensaje${productoId}`).innerText =
      "Por favor, seleccione cantidad";
  }
}

//TOMAR VALORES PARA AGREGAR AL CARRITO(valido stock y si ya lo tengo en el carrito) 


function chequearCarrito(producto) {
  if (carrito.find(({ id }) => id === producto.id)) { 
    return true
  }

}


function agregar(producto, cantidad) {
  document.getElementById(`cantidad${producto.id}`).value = 0;
  document.getElementById(`mensaje${producto.id}`).innerText = "";
  const enCarrito = chequearCarrito(producto) //para chequear si el producto está en el carrito y actualizar la cantidad de compra
  // console.log(enCarrito)
  
  if (
    enCarrito == true &&
    producto.stock >= cantidad &&
    producto.stock - cantidad >= 0
  ) {
    const index=carrito.findIndex((element) => element.id ===producto.id) 
    carrito.splice(index,1); 
    sumar(producto, cantidad); //si ya lo tengo en el carrito, actualizo la cantidad
  } else {
    if (producto.stock >= cantidad && producto.stock - cantidad >= 0) {
      sumar(producto, cantidad);
       //valido stock
    } else {
      document.getElementById(
        `mensaje${producto.id}`
      ).innerText = `Stock insuficiente, solo quedan: ${producto.stock} unidades`;
    }
    return producto.stock, carrito;
  }
}

//BUSCAR PRODUCTO EN MI ARRAY
function getProducto(productoId) {
  const productoParaAgregar = productos.find(
    (producto) => producto.id === productoId
  );
  return productoParaAgregar;
}

//FUNCION SUMAR AL CARRITO
function sumar(producto, cantidad) {
  producto.stock -= cantidad;
  producto.compra += cantidad;
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("productos",JSON.stringify(productos))
  actualizarNumeroCarrito()
}

//ACTUALIZO EL NÚMERO DEL CARRITO X CANTIDAD DE PRODUCTOS
function actualizarNumeroCarrito() {
  numeroCarrito = carrito.length
  contenedorCarrito.innerText = numeroCarrito.toString()
}



//*************************************************************
//*********************CONTENEDOR PRINCIPAL HERO*****************************
//Consumo API de frases con función que randomiza la frase para cada sesión.
let contenedorFrase = document.getElementById("quote")
function getQuote() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '26921d54d6mshf87a255fae13fd3p141fd3jsn324bc2b8557e',
      'X-RapidAPI-Host': 'quotes-villa.p.rapidapi.com'
    }
  };
  
  fetch('https://quotes-villa.p.rapidapi.com/quotes/art', options)
    .then(response => response.json())
    .then(data => contenedorFrase.innerHTML = `<p class="typed-out"">${data[Math.floor(Math.random() * data.length)].text}</p>`)
    .catch(err => console.error(err))

    
}

getQuote()

