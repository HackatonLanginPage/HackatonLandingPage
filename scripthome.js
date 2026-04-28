function verProductos(){
    document.getElementById("producto").scrollIntoView({
        behavior: "smooth"
    })
}

/*function agregarCarrito(product) {
  const mensaje = document.createElement("p");
  mensaje.textContent = product + " agregado al carrito 🛒";
  document.body.appendChild(mensaje);
}*/
function agregarCarrito(nombre, precio, imagen) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({
    nombre: nombre,
    precio: precio,
    imagen: imagen
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
}