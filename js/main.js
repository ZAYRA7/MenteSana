/* ==========================================================================
   MenteSana - Interacciones dinámicas (Práctica Bootstrap + JS)
   Autor: Zayra (Líder Técnica)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // INTERACCIÓN 1 y 2: Validación de formulario y notificación toast
    // Página: alumnos/inicio-alumno.html
    // ============================================================
    
    const toastElement = document.getElementById('toastNotificacion');
    let toastNotificacion;
    if (toastElement) {
        toastNotificacion = new bootstrap.Toast(toastElement, { delay: 3000 });
    }

    const moodButtons = document.querySelectorAll('.mood-btn');
    const errorEmocional = document.getElementById('errorEmocional');
    const fechaInput = document.getElementById('fechaRegistro');
    let estadoSeleccionado = null;

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

    const toastCancelacionElement = document.getElementById('toastCancelacion');
    let toastCancelacion;
    if (toastCancelacionElement) {
        toastCancelacion = new bootstrap.Toast(toastCancelacionElement, { delay: 3000 });
    }

    const btnCancelarCita = document.querySelector('.btn-cancelar-cita');
    const btnConfirmarCancelacion = document.getElementById('btnConfirmarCancelacion');
    let filaAEliminar = null;

    function prepararCancelacion(event) {
        const boton = event.currentTarget;
        filaAEliminar = boton.closest('tr');
        document.getElementById('cancelarEspecialista').textContent = boton.dataset.especialista;
        document.getElementById('cancelarFecha').textContent = boton.dataset.fecha;
        document.getElementById('cancelarHorario').textContent = boton.dataset.horario;
    }

    function confirmarCancelacion() {
        if (filaAEliminar) {
            filaAEliminar.remove();
            filaAEliminar = null;

            const modal = bootstrap.Modal.getInstance(document.getElementById('modalCancelarCita'));
            if (modal) modal.hide();

            if (toastCancelacion) {
                toastCancelacion.show();
            }
        }
    }

    if (btnCancelarCita) {
        btnCancelarCita.addEventListener('click', prepararCancelacion);
    }
    if (btnConfirmarCancelacion) {
        btnConfirmarCancelacion.addEventListener('click', confirmarCancelacion);
    }


    // ============================================================
    // INTERACCIÓN 4: Mostrar/ocultar contraseña
    // Página: registro-alumno.html y registro-psicologo.html
    // ============================================================

    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    function togglePassword() {
        if (!passwordInput) return;
        
        const icon = togglePasswordBtn.querySelector('.material-symbols-outlined');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            if (icon) icon.textContent = 'visibility_off';
        } else {
            passwordInput.type = 'password';
            if (icon) icon.textContent = 'visibility';
        }
    }

    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', togglePassword);
    }

});