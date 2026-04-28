let contador = 0;

function agregarCarrito(){

contador++;

document.getElementById("contador").textContent = contador;

alert("¡Su producto ha sido agregado exitosamente al carrito!");

}

function mostrarCategoria(categoria){

const hombre = document.querySelector(".hombre");
const mujer = document.querySelector(".mujer");


if(categoria==="todo"){
hombre.classList.remove("oculto");
mujer.classList.remove("oculto");
}


if(categoria==="hombre"){
// SOLO mostrar hombre
hombre.classList.remove("oculto");
mujer.classList.add("oculto");
}


if(categoria==="mujer"){
// SOLO mostrar mujer
mujer.classList.remove("oculto");
hombre.classList.add("oculto");
}

}