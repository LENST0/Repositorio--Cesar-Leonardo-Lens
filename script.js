// Seleccionar los elementos del DOM
const conta = document.getElementById('contador');
const boton = document.getElementById('like');

// Inicializar el contador
let contador = 0;

// Agregar el evento click al botón
boton.addEventListener('click', () => {
    console.log("Click");
    contador++;
    conta.textContent = contador;
});
