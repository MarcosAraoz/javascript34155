
let producto = parseInt(prompt(
      "Selecciona el producto que deseas comprar: 1.Zapatillas - 2.Campera - 3.Remera"
    )
  )
  let totalCompra = 0
  let seguirComprando = true
  let decision
  const productosExistentes = [] 

  class Producto{
    constructor(id,nombre,precio){
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
    const zapatillas = new Producto (1,`Zapatillas`,35000)
    productosExistentes.push(zapatillas)
    const campera = new Producto (2,`Campera`,10000)
    productosExistentes.push(campera)
    const remera = new Producto (3,`Remera`,8000)
    productosExistentes.push(remera)
    

    console.log(productosExistentes);

  while (seguirComprando === true) {
    if (producto == 1) {
      totalCompra = totalCompra + zapatillas.precio
    } else if (producto === 2) {
      totalCompra = totalCompra + campera.precio
    } else if (producto === 3) {
      totalCompra = totalCompra + remera.precio
    } else {
      producto = parseInt(prompt("Selecciona un producto habilitado: 1.Zapatillas - 2.Campera - 3.Remera "))
      continue
  }
    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
      producto = parseInt(
        prompt(
          "Selecciona el producto que deseas comprar: 1.Zapatillas - 2.Campera - 3.Remera"
        )
      )
    } else {
      seguirComprando = false
    }
  }
  alert("El total de tu compra es " + totalCompra)