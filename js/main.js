/* ==========================================================================
   MenteSana - Interacciones dinámicas (Práctica Bootstrap + JS)
   Autor: Zayra (Líder Técnica)
   Descripción: Validación de formulario en tiempo real y notificación toast
   ========================================================================== */

// Variable global para el toast
let toastNotificacion;

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================
    // Inicialización del Toast (Bootstrap)
    // Usamos getElementById porque es un elemento único en la página.
    // ============================================================
    const toastElement = document.getElementById('toastNotificacion');
    if (toastElement) {
        toastNotificacion = new bootstrap.Toast(toastElement, { delay: 3000 });
    }

    // ============================================================
    // INTERACCIÓN 1: Validación de formulario en tiempo real
    // Página: alumno/inicio-alumno.html
    // ============================================================
    
    // Selección de botones de estado emocional
    // Usamos querySelectorAll porque hay varios elementos con la misma clase .mood-btn.
    const moodButtons = document.querySelectorAll('.mood-btn');
    const errorEmocional = document.getElementById('errorEmocional');
    const fechaInput = document.getElementById('fechaRegistro');
    let estadoSeleccionado = null;

    // Función con nombre para manejar la selección del estado emocional
    function seleccionarEstado(event) {
        // Quitamos la clase 'selected' de todos los botones
        moodButtons.forEach(function(btn) {
            btn.classList.remove('selected');
        });
        
        // Agregamos la clase 'selected' al botón clickeado
        event.currentTarget.classList.add('selected');
        
        // Guardamos el valor del estado seleccionado usando dataset
        estadoSeleccionado = event.currentTarget.dataset.estado;
        
        // Ocultamos el mensaje de error al seleccionar
        if (errorEmocional) {
            errorEmocional.classList.add('d-none');
        }
    }

    // Escuchamos el evento click en cada botón (addEventListener, NO onclick)
    moodButtons.forEach(function(btn) {
        btn.addEventListener('click', seleccionarEstado);
    });

    // ============================================================
    // INTERACCIÓN 2: Validación al enviar y notificación toast
    // ============================================================
    
    const formRegistro = document.getElementById('formRegistroEmocional');

    // Función con nombre para validar el formulario
    function validarFormulario(event) {
        event.preventDefault(); // Evitamos el envío por defecto del formulario
        let esValido = true;

        // Validar que se haya seleccionado un estado emocional
        if (!estadoSeleccionado) {
            if (errorEmocional) {
                errorEmocional.classList.remove('d-none');
            }
            esValido = false;
        }

        // Validar la fecha
        if (!fechaInput.value) {
            fechaInput.classList.add('is-invalid');
            fechaInput.classList.remove('is-valid');
            esValido = false;
        } else {
            fechaInput.classList.remove('is-invalid');
            fechaInput.classList.add('is-valid');
        }

        // Si todo está válido, mostramos el toast y limpiamos el formulario
        if (esValido) {
            if (toastNotificacion) {
                const toastMensaje = document.getElementById('toastMensaje');
                if (toastMensaje) {
                    toastMensaje.textContent = '¡Registro guardado exitosamente!';
                }
                toastNotificacion.show();
            }
            
            // Limpiamos el formulario
            formRegistro.reset();
            moodButtons.forEach(function(btn) {
                btn.classList.remove('selected');
            });
            estadoSeleccionado = null;
            fechaInput.classList.remove('is-valid');
        }
    }

    // Escuchamos el evento submit del formulario (addEventListener, NO onsubmit)
    if (formRegistro) {
        formRegistro.addEventListener('submit', validarFormulario);
    }

    // Validación en tiempo real de la fecha (evento 'change')
    if (fechaInput) {
        fechaInput.addEventListener('change', function() {
            if (fechaInput.value) {
                fechaInput.classList.remove('is-invalid');
                fechaInput.classList.add('is-valid');
            }
        });
    }
});