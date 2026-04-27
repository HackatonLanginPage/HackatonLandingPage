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
function agregarCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

