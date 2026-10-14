// =====================================================
// TAREA: Interacciones dinámicas - MenteSana
// Alumno: Armando
// Rama: caracteristica/interacciones-armando
// =====================================================

// 1. CAMBIO DE TEMA — index.html
const interruptorTema = document.getElementById('themeSwitch');
const elementoRaiz = document.documentElement;

function cambiarTema() {
    if (interruptorTema.checked) {
        elementoRaiz.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('temaMenteSana', 'dark');
    } else {
        elementoRaiz.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('temaMenteSana', 'light');
    }
}

function cargarTemaGuardado() {
    const temaGuardado = localStorage.getItem('temaMenteSana');
    if (temaGuardado === 'dark') {
        elementoRaiz.setAttribute('data-bs-theme', 'dark');
        interruptorTema.checked = true;
    } else {
        elementoRaiz.setAttribute('data-bs-theme', 'light');
        interruptorTema.checked = false;
    }
}

interruptorTema.addEventListener('click', cambiarTema);
cargarTemaGuardado();

// 2. NOTIFICACIÓN — alumnos/eventos-alumno.html
const botonesRegistrarEvento = document.querySelectorAll('.btn-registrar-evento');
const contenedorToast = document.getElementById('toastEvento');
let toastRegistro = null;

function inicializarToast() {
    if (contenedorToast) {
        toastRegistro = new bootstrap.Toast(contenedorToast, {
            autohide: true,
            delay: 3000
        });
    }
}

function mostrarToastExito() {
    if (toastRegistro) toastRegistro.show();
}

botonesRegistrarEvento.forEach(boton => {
    boton.addEventListener('click', mostrarToastExito);
});
inicializarToast();

// 3. MODAL DINÁMICO — alumnos/eventos-alumno.html
const tarjetasEvento = document.querySelectorAll('.card-evento');
const ventanaModal = document.getElementById('modalEvento');
let modalDetalles = null;

const modalTitulo = document.getElementById('modal-titulo');
const modalFecha = document.getElementById('modal-fecha');
const modalHora = document.getElementById('modal-hora');
const modalLugar = document.getElementById('modal-lugar');
const modalDescripcion = document.getElementById('modal-descripcion');

function inicializarModal() {
    if (ventanaModal) {
        modalDetalles = new bootstrap.Modal(ventanaModal);
    }
}

function cargarDatosEnModal(evento) {
    const tarjeta = evento.currentTarget;
    modalTitulo.textContent = tarjeta.dataset.titulo;
    modalFecha.textContent = tarjeta.dataset.fecha;
    modalHora.textContent = tarjeta.dataset.hora;
    modalLugar.textContent = tarjeta.dataset.lugar;
    modalDescripcion.textContent = tarjeta.dataset.descripcion;
    if (modalDetalles) modalDetalles.show();
}

tarjetasEvento.forEach(tarjeta => {
    tarjeta.addEventListener('click', cargarDatosEnModal);
});
inicializarModal();