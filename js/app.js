/* ==========================================================================
   INTERACCIÓN 1: Filtrado por Categorías (alumno/herramientas.html)
   ========================================================================== */

// SELECTORES USADOS:
// - document.querySelectorAll('.btn-filtro'): Selecciona todos los botones de filtro por su clase CSS para asignarles el evento 'click'.
// - document.querySelectorAll('.card-recurso'): Selecciona todas las tarjetas/contenedores de recursos para mostrar u ocultar según su categoría.
const botonesFiltro = document.querySelectorAll('.btn-filtro');
const tarjetasRecursos = document.querySelectorAll('.card-recurso');

/**
 * Filtra las tarjetas de recursos mostrando u ocultando según la categoría elegida.
 * @param {Event} e - Evento de clic capturado en el botón.
 */
function filtrarRecursos(e) {
    const botonActivo = e.currentTarget;
    const categoriaSeleccionada = botonActivo.getAttribute('data-categoria');

    // Actualiza la clase activa visual en los botones
    botonesFiltro.forEach(function (btn) {
        btn.classList.remove('active');
    });
    botonActivo.classList.add('active');

    // Muestra u oculta las tarjetas con classList.add/remove ('d-none' de Bootstrap)
    tarjetasRecursos.forEach(function (card) {
        const categoriaCard = card.getAttribute('data-categoria');

        if (categoriaSeleccionada === 'todos' || categoriaCard === categoriaSeleccionada) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });
}

// Asignación de event listener mediante iteración sin funciones anónimas
if (botonesFiltro.length > 0) {
    botonesFiltro.forEach(function (btn) {
        btn.addEventListener('click', filtrarRecursos);
    });
}


/* ==========================================================================
   INTERACCIÓN 2 Y 3: Validación y Notificación Toast (psicologo/subir-recursos.html)
   ========================================================================== */

// SELECTORES USADOS:
// - document.getElementById('tituloRecurso'): Selecciona el input del título por su id único para validar su longitud.
// - document.getElementById('tipoRecurso'): Selecciona el campo select por su id para verificar que no esté vacío.
// - document.getElementById('enlaceRecurso'): Selecciona el input del enlace por su id para validar formato de URL.
// - document.getElementById('descripcionRecurso'): Selecciona el textarea por su id para validar la descripción.
// - document.getElementById('formRecurso'): Selecciona el formulario completo por id para capturar el evento submit.
// - document.getElementById('toastRecurso'): Selecciona el elemento HTML del Toast para instanciar el componente de Bootstrap.

const inputTitulo = document.getElementById('tituloRecurso');
const selectTipo = document.getElementById('tipoRecurso');
const inputEnlace = document.getElementById('enlaceRecurso');
const inputDescripcion = document.getElementById('descripcionRecurso');
const formRecurso = document.getElementById('formRecurso');
const toastElemento = document.getElementById('toastRecurso');

/**
 * Aplica o remueve las clases de validez de Bootstrap ('is-valid' / 'is-invalid').
 * @param {HTMLElement} campo - Elemento HTML a evaluar.
 * @param {boolean} esValido - Resultado de la condición de validación.
 */
function aplicarEstiloValidacion(campo, esValido) {
    if (esValido) {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
    } else {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
    }
}

/**
 * Valida el título del recurso.
 */
function validarTitulo() {
    if (!inputTitulo) return false;
    const esValido = inputTitulo.value.trim().length >= 3;
    aplicarEstiloValidacion(inputTitulo, esValido);
    return esValido;
}

/**
 * Valida el tipo de recurso seleccionado.
 */
function validarTipo() {
    if (!selectTipo) return false;
    const esValido = selectTipo.value !== '';
    aplicarEstiloValidacion(selectTipo, esValido);
    return esValido;
}

/**
 * Valida la URL ingresada.
 */
function validarEnlace() {
    if (!inputEnlace) return false;
    const urlPattern = /^https?:\/\/.+/i;
    const esValido = urlPattern.test(inputEnlace.value.trim());
    aplicarEstiloValidacion(inputEnlace, esValido);
    return esValido;
}

/**
 * Valida la descripción del recurso.
 */
function validarDescripcion() {
    if (!inputDescripcion) return false;
    const esValido = inputDescripcion.value.trim().length >= 10;
    aplicarEstiloValidacion(inputDescripcion, esValido);
    return esValido;
}

/**
 * Maneja el envío del formulario, valida todos los campos y muestra el Toast de Bootstrap.
 * @param {Event} e - Evento submit del formulario.
 */
function manejarEnvioFormulario(e) {
    e.preventDefault();

    const tituloValido = validarTitulo();
    const tipoValido = validarTipo();
    const enlaceValido = validarEnlace();
    const descripcionValida = validarDescripcion();

    // Si todos los campos son válidos
    if (tituloValido && tipoValido && enlaceValido && descripcionValida) {
        // Interacción 3: Mostrar Notificación Toast de Bootstrap
        if (toastElemento) {
            const toastBS = new bootstrap.Toast(toastElemento);
            toastBS.show();
        }

        // Reiniciar formulario y clases de validación
        formRecurso.reset();
        [inputTitulo, selectTipo, inputEnlace, inputDescripcion].forEach(function (campo) {
            campo.classList.remove('is-valid', 'is-invalid');
        });
    }
}

// Asignación de listeners para validación en tiempo real (input / blur / submit)
if (formRecurso) {
    // Eventos de entrada y desenfoque para validación dinámica
    inputTitulo.addEventListener('input', validarTitulo);
    inputTitulo.addEventListener('blur', validarTitulo);

    selectTipo.addEventListener('change', validarTipo);
    selectTipo.addEventListener('blur', validarTipo);

    inputEnlace.addEventListener('input', validarEnlace);
    inputEnlace.addEventListener('blur', validarEnlace);

    inputDescripcion.addEventListener('input', validarDescripcion);
    inputDescripcion.addEventListener('blur', validarDescripcion);

    // Evento submit para envío de formulario
    formRecurso.addEventListener('submit', manejarEnvioFormulario);
}