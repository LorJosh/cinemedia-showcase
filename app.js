// CineMedia Showcase - app.js
// Autor: Joshua Lores Florez

// ===== Modo claro / oscuro =====

// ===== Likes por tarjeta =====

// ===== Validación del formulario =====
const MIN_NOMBRE = 3;
const MIN_COMENTARIO = 10;
const SOLO_LETRAS = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

const validarFormulario = ({ autor, proyecto, comentario }) => {
  const errores = [];

  if (autor.length < MIN_NOMBRE) {
    errores.push(`El nombre debe tener al menos ${MIN_NOMBRE} caracteres.`);
  } else if (!SOLO_LETRAS.test(autor)) {
    errores.push('El nombre solo puede contener letras y espacios.');
  }

  if (proyecto === '') {
    errores.push('Selecciona un proyecto.');
  }

  if (comentario.length < MIN_COMENTARIO) {
    errores.push(`El comentario debe tener al menos ${MIN_COMENTARIO} caracteres.`);
  }

  return errores;
};

const mostrarErrores = (errores) => {
  const lista = document.createElement('ul');
  lista.style.textAlign = 'left';
  lista.style.paddingLeft = '20px';

  errores.forEach((error) => {
    const item = document.createElement('li');
    item.textContent = error;
    lista.appendChild(item);
  });

  Swal.fire({
    icon: 'error',
    title: 'Revisa el formulario',
    html: lista,
  });
};

// ===== Creación de nodos =====

// ===== Envío del formulario =====
