function verProductos(){
    document.getElementById("producto").scrollIntoView({
        behavior: "smooth"
    })
}

/*function agregarCarrito(product) {
  const mensaje = document.createElement("p");
  mensaje.textContent = product + " agregado al carrito 🛒";
  document.body.appendChild(mensaje);
}
function agregarCarrito(nombre, precio, imagen) {

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({
    nombre: nombre,
    precio: precio,
    imagen: imagen
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
}*/

function agregarCarrito(nombre, precio, imagen) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Buscar si ya existe
  let productoExistente = carrito.find(p => p.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
}