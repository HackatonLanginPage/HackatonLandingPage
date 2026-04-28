/*Pagina de Carrito*/
function irAlCarrito() {
  window.location.href = "Carrito.html";
}

function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const contenedor = document.getElementById("lista-carrito");
  contenedor.innerHTML = "";

  let total = 0;

  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("card", "p-3", "mb-3");

    item.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <img src="${producto.imagen}" width="80">
        <div>
          <h5>${producto.nombre}</h5>
          <p>Precio: $${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <p>Subtotal: $${subtotal}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(item);
  });

  // Mostrar total final
  const totalHTML = document.createElement("h3");
  totalHTML.textContent = "Total: $" + total;

  contenedor.appendChild(totalHTML);
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

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  location.reload();
}