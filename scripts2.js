
//*************************************************************
//*********************GLOBALES*****************************

let totalCarrito = 0
let cantidad = 0
const carrito = [];
const sumarProducto = (a, b) => a * b
//*************************************************************
//*********************TIENDA*****************************

class Producto{
constructor(id,nombre, marca, tipo, precio, stock,compra){
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.tipo = tipo;
    this.precio = parseFloat(precio);
    this.stock = parseFloat(stock);
    this.compra = parseFloat(compra);
}

sumarStock(cantidad) {
    this.stock += cantidad
    return this.stock
}
oferta(porcentaje) {
    this.precio = this.precio -(this.precio/100*porcentaje)
    return this.precio

};
}

const cafe1 = new Producto(001,"Juan Valdez Premium", "Juan Valdez", "básico", 2500, 20,0);
const cafe2 = new Producto(002,"Venita Selezionse Merida", "Venita","100% Arábica", 5500, 5,0)
const cafe3 = new Producto(003,"Giulis-Café de finca", "Giulis", "intenso", 4000, 5,0 )
const cafetera1 = new Producto(004,"Cafetera Italia", "Bialletti", "Moka", 30000, 2,0)
const cafetera2 = new Producto(005,"Cafetera de Embolo", "Bodum", "prensa francesa", 20000,3,0);
const molinillo = new Producto(006,"Molinillo", "Peogeot", "estilo antiguo", 15000,2,0);


let respuesta = 1
while(respuesta==1) {
    producto = Number(prompt("Seleccione un producto: 1-Cafe1 2-Cafe2 3-Cafe3 4-Cafetera1 5-Cafetera2 6-Molinillo" ))
    cantidad = Number(prompt("Cuántas unidades?"))
   
    switch(producto){
      case 1:                       
        agregar(cafe1,cantidad)
      break;
      case 2:
        alert("Este producto tiene un 10% de descuento!")
        cafe2.oferta(10)
        agregar(cafe2,cantidad)
      break;
      case 3:
        agregar(cafe3,cantidad);
      break;
      case 4:
        agregar(cafetera1,cantidad);
      break;
      case 5:
        alert("Este producto tiene un 20% de descuento!")
        cafetera2.oferta(20)
        agregar(cafetera2,cantidad);
      break;
      case 6:
        agregar(molinillo,cantidad);
      break;
      default:
          alert("El producto no existe")  
   }
   respuesta=prompt("Le gustaría agregar otro producto 1-si 2-no")
   if(respuesta==2){
      revisarCarrito()    
      }
   }


function agregar(producto, cantidad) {
    if (producto.stock>=cantidad && producto.stock-cantidad>=0) {
        producto.stock += -cantidad
        producto.compra += cantidad
        carrito.push(producto);
        totalCarrito += sumarProducto(producto.precio,cantidad)
    }
        else {
            alert("stock insuficiente, solo quedan: " + producto.stock + " unidades")
        }
        return producto.stock, totalCarrito, carrito

        
}

function revisarCarrito(){
const listado = carrito.map((el) => el.nombre)
  alert("El total a pagar es de: $" + totalCarrito)
  alert("productos seleccionados: " + listado)

  // let rev = Number(prompt("Quisiera quitar algún producto de su carrito? 1-si  2-no"))
  // if(rev == "2"){
  //   fin()
  // }
  // else eliminar(listado)
}

// function eliminar(listado){
// respuesta = 1
// while(respuesta==1){
// producto = prompt("Qué producto desearía elmiminar?" + listado)
// cantidad = prompt("Cuántas unidades?")
// if (carrito.includes(producto)) {
//   console.log("hola")
// }
// else{
//   console.log("no lo incl")
// }
// respuesta = prompt("Quisiera quitar algún otro producto? 1-si  2-no")
// }
// fin()
// }

// function fin() {
//   alert("Gracias por su compra, visite nuestra sección de Cursos")
//   console.log("Productos: " + carrito + "Total a pagar: $" +totalCarrito)
// }
// for(const producto of carrito) {
//   listado.push(producto.nombre + " x " + producto.compra)
// }

// function eliminar(listado){
// console.log(listado) 
// }

