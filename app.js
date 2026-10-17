// CineMedia Showcase - app.js
// Autor: Joshua Lores Florez

// ===== Modo claro / oscuro =====
const btnTema = document.querySelector('#btnTheme');

const alternarTema = () => {
  const modoOscuro = document.body.classList.toggle('dark-mode');
  btnTema.textContent = modoOscuro ? 'Modo Claro' : 'Modo Oscuro';
};

btnTema.addEventListener('click', alternarTema);

// ===== Likes por tarjeta =====
const botonesLike = document.querySelectorAll('.btn-like');

const activarLike = (boton) => {
  const spanContador = boton.querySelector('.like-count');
  let likes = 0;

  boton.addEventListener('click', () => {
    likes++;
    spanContador.textContent = likes;
  });
};

botonesLike.forEach(activarLike);

// ===== Validación del formulario =====

// ===== Creación de nodos =====

// ===== Envío del formulario =====
