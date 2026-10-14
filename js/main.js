/* ==========================================================================
   MenteSana - Interacciones dinámicas (Práctica Bootstrap + JS)
   Autor: Zayra (Líder Técnica)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // INTERACCIÓN 1 y 2: Validación de formulario y notificación toast
    // Página: alumnos/inicio-alumno.html
    // ============================================================
    
    // Inicializar el toast de registro emocional si existe en la página
    const toastElement = document.getElementById('toastNotificacion');
    let toastNotificacion;
    if (toastElement) {
        toastNotificacion = new bootstrap.Toast(toastElement, { delay: 3000 });
    }

    // Usamos querySelectorAll porque hay varios botones con la misma clase .mood-btn.
    const moodButtons = document.querySelectorAll('.mood-btn');
    const errorEmocional = document.getElementById('errorEmocional');
    const fechaInput = document.getElementById('fechaRegistro');
    let estadoSeleccionado = null;

    // Función con nombre para manejar la selección del estado emocional
    function seleccionarEstado(event) {
        moodButtons.forEach(function(btn) {
            btn.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
        estadoSeleccionado = event.currentTarget.dataset.estado;
        if (errorEmocional) errorEmocional.classList.add('d-none');
    }

    moodButtons.forEach(function(btn) {
        btn.addEventListener('click', seleccionarEstado);
    });

    // Función con nombre para validar el formulario
    function validarFormulario(event) {
        event.preventDefault();
        let esValido = true;

        if (!estadoSeleccionado) {
            if (errorEmocional) errorEmocional.classList.remove('d-none');
            esValido = false;
        }

        if (!fechaInput || !fechaInput.value) {
            if (fechaInput) {
                fechaInput.classList.add('is-invalid');
                fechaInput.classList.remove('is-valid');
            }
            esValido = false;
        } else {
            fechaInput.classList.remove('is-invalid');
            fechaInput.classList.add('is-valid');
        }

        if (esValido) {
            if (toastNotificacion) {
                const toastMensaje = document.getElementById('toastMensaje');
                if (toastMensaje) toastMensaje.textContent = '¡Registro guardado exitosamente!';
                toastNotificacion.show();
            }
            const formRegistro = document.getElementById('formRegistroEmocional');
            if (formRegistro) formRegistro.reset();
            moodButtons.forEach(function(btn) {
                btn.classList.remove('selected');
            });
            estadoSeleccionado = null;
            if (fechaInput) fechaInput.classList.remove('is-valid');
        }
    }

    const formRegistro = document.getElementById('formRegistroEmocional');
    if (formRegistro) {
        formRegistro.addEventListener('submit', validarFormulario);
    }

    if (fechaInput) {
        fechaInput.addEventListener('change', function() {
            if (fechaInput.value) {
                fechaInput.classList.remove('is-invalid');
                fechaInput.classList.add('is-valid');
            }
        });
    }


    // ============================================================
    // INTERACCIÓN 3: Modal de confirmación para cancelar cita
    // Página: alumnos/citas-alumno.html
    // ============================================================

    // Inicializar el toast de cancelación si existe en la página
    const toastCancelacionElement = document.getElementById('toastCancelacion');
    let toastCancelacion;
    if (toastCancelacionElement) {
        toastCancelacion = new bootstrap.Toast(toastCancelacionElement, { delay: 3000 });
    }

    // Usamos querySelector porque es un elemento único en la página.
    const btnCancelarCita = document.querySelector('.btn-cancelar-cita');
    const btnConfirmarCancelacion = document.getElementById('btnConfirmarCancelacion');
    let filaAEliminar = null;

    // Función con nombre para preparar la cancelación (cargar datos en el modal)
    function prepararCancelacion(event) {
        const boton = event.currentTarget;
        // Guardamos la fila (tr) que contiene el botón para eliminarla después
        filaAEliminar = boton.closest('tr');
        // Cargamos los datos en el modal usando dataset
        document.getElementById('cancelarEspecialista').textContent = boton.dataset.especialista;
        document.getElementById('cancelarFecha').textContent = boton.dataset.fecha;
        document.getElementById('cancelarHorario').textContent = boton.dataset.horario;
    }

    // Función con nombre para confirmar la cancelación
    function confirmarCancelacion() {
        if (filaAEliminar) {
            // Eliminamos la fila de la tabla
            filaAEliminar.remove();
            filaAEliminar = null;

            // Cerramos el modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalCancelarCita'));
            if (modal) modal.hide();

            // Mostramos el toast de confirmación
            if (toastCancelacion) {
                toastCancelacion.show();
            }
        }
    }

    // Escuchamos los eventos (addEventListener, NO onclick)
    if (btnCancelarCita) {
        btnCancelarCita.addEventListener('click', prepararCancelacion);
    }
    if (btnConfirmarCancelacion) {
        btnConfirmarCancelacion.addEventListener('click', confirmarCancelacion);
    }

});