document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.btn-add-cart');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            alert("¡Su producto ha sido agregado exitosamente al carrito!");
        });
    });
});