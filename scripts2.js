
//*************************************************************
//*********************GLOBALES*****************************

let totalCarrito = 0
let cantidad = 0
const carrito = [];
//*************************************************************
//*********************TIENDA*****************************

class Producto{
constructor(nombre, marca, tipo, precio, stock,compra){
    this.nombre = nombre;
    this.marca = marca;
    this.tipo = tipo;
    this.precio = parseFloat(precio);
    this.stock = parseFloat(stock);
    this.compra = parseFloat(compra);
}

agregar(producto, cantidad) {
  if (producto.stock>=cantidad && producto.stock-cantidad>=0) {
      producto.stock += -cantidad
      carrito.push(producto);
      totalCarrito += producto.precio*cantidad
  }
      else {
          alert("stock insuficiente, solo quedan: " + producto.stock + " unidades")
      }
      console.log(totalCarrito, carrito)
      return producto.stock, totalCarrito, carrito

      
}


sumarStock(cantidad) {
    this.stock = this.stock+cantidad
    return this.stock
}
oferta(porcentaje) {
    this.precio = this.precio -(this.precio/100*porcentaje)
    return this.precio

};
}

const cafe1 = new Producto("Juan Valdez Premium", "Juan Valdez", "básico", 2500, 20,0);
const cafe2 = new Producto("Venita Selezionse Merida", "Venita","100% Arábica", 5500, 5,0)
const cafe3 = new Producto("Giulis-Café de finca", "Giulis", "intenso", 4000, 5,0 )
const cafetera1 = new Producto("Cafetera Italia", "Bialletti", "Moka", 30000, 2,0)
const cafetera2 = new Producto("Cafetera de Embolo", "Bodum", "prensa francesa", 20000,3,0);
const molinillo = new Producto("Molinillo", "Peogeot", "estilo antiguo", 15000,2,0);


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
        cafe5.oferta(20)
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

    
//*************************************************************
//*********************FUNCIONES GLOBALES*****************************
function agregar(producto, cantidad) {
    if (producto.stock>=cantidad && producto.stock-cantidad>=0) {
        producto.stock += -cantidad
        producto.compra += cantidad
        carrito.push(producto);
        totalCarrito += producto.precio*cantidad
    }
        else {
            alert("stock insuficiente, solo quedan: " + producto.stock + " unidades")
        }
        return producto.stock, totalCarrito, carrito

        
}

function revisarCarrito(){
  console.log(totalCarrito, carrito)
const listado = []
   for(const producto of carrito) {
    listado.push(producto.nombre)
  }
  alert("El total a pagar es de: $" + totalCarrito)
  alert("productos seleccionados: " + listado)

}



