/* ==========================================================================
   MenteSana - Interacciones dinámicas (Práctica Bootstrap + JS)
   Autores: Zayra (Líder Técnica) y Armando (Frontend)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // INTERACCIONES DE ARMANDO
    // ============================================================

    // 1. CAMBIO DE TEMA
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
            if (interruptorTema) interruptorTema.checked = true;
        } else {
            elementoRaiz.setAttribute('data-bs-theme', 'light');
            if (interruptorTema) interruptorTema.checked = false;
        }
    }

    if (interruptorTema) {
        interruptorTema.addEventListener('click', cambiarTema);
        cargarTemaGuardado();
    }

    // 2. NOTIFICACIÓN — eventos-alumno.html
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

    // 3. MODAL DINÁMICO — eventos-alumno.html
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
        if (modalTitulo) modalTitulo.textContent = tarjeta.dataset.titulo;
        if (modalFecha) modalFecha.textContent = tarjeta.dataset.fecha;
        if (modalHora) modalHora.textContent = tarjeta.dataset.hora;
        if (modalLugar) modalLugar.textContent = tarjeta.dataset.lugar;
        if (modalDescripcion) modalDescripcion.textContent = tarjeta.dataset.descripcion;
        if (modalDetalles) modalDetalles.show();
    }

    tarjetasEvento.forEach(tarjeta => {
        tarjeta.addEventListener('click', cargarDatosEnModal);
    });
    inicializarModal();

    // 4. PESTAÑAS DE FILTRADO — eventos-alumno.html
    const pestanas = document.querySelectorAll('.nav-link-tab');
    const paneles = document.querySelectorAll('.tab-pane');

    function activarPestana(event) {
        const pestana = event.currentTarget;
        
        pestanas.forEach(function (p) {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
        });
        paneles.forEach(function (panel) {
            panel.classList.remove('show', 'active');
        });

        pestana.classList.add('active');
        pestana.setAttribute('aria-selected', 'true');

        const panelActivo = document.getElementById(pestana.dataset.target);
        if (panelActivo) {
            panelActivo.classList.add('active');
            setTimeout(function () {
                panelActivo.classList.add('show');
            }, 10);
        }
    }

    pestanas.forEach(function (pestana) {
        pestana.addEventListener('click', activarPestana);
    });


    // ============================================================
    // INTERACCIONES DE ZAYRA
    // ============================================================

    // INTERACCIÓN 1 y 2: Validación y toast
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

    // INTERACCIÓN 3: Modal cancelar cita
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

    // INTERACCIÓN 4: Mostrar/ocultar contraseña
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