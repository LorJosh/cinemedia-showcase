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

// ===== Validación del formulario =====

// ===== Creación de nodos =====

// ===== Envío del formulario =====
