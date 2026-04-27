/*Pagina de Carrito*/
function irAlCarrito() {
  window.location.href = "Carrito.html";
}

function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const contenedor = document.getElementById("lista-carrito");

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en el carrito</p>";
    return;
  }

  carrito.forEach(producto => {
    const item = document.createElement("div");
    item.classList.add("card", "p-3", "mb-3");

    item.innerHTML = `
      <h5>${producto}</h5>
      <p>Producto agregado</p>
    `;

    contenedor.appendChild(item);
  });
}

mostrarCarrito();

function confirmarCompra() {
  // Limpiar carrito
  localStorage.removeItem("carrito");

  // Mensaje
  alert("¡Compra realizada con éxito! 🎉");

  // Opcional: refrescar la vista
  location.reload();
}