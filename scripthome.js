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
function agregarCarrito(product) {
  alert(product + " agregado al carrito 🛒");
}