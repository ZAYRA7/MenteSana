
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
// ============================================================
    // INTERACCIÓN MÓDULO PSICÓLOGOS: Agregar, Eliminar y Toast
    // Página: psicologos/horarios.html
    // ============================================================

    const tablaHorarios = document.getElementById('tablaHorarios');
    const btnAgregarHorario = document.getElementById('btnAgregarHorario');
    const toastLiberarElement = document.getElementById('toastLiberar');
    let toastLiberar;

    if (toastLiberarElement) {
        toastLiberar = new bootstrap.Toast(toastLiberarElement, { delay: 3000 });
    }

    // Función nombrada para agregar un nuevo horario a la tabla
    function manejarAgregarHorario(evento) {
        evento.preventDefault();
        
        if (!tablaHorarios) return;
        const tbody = tablaHorarios.querySelector('tbody');
        if (!tbody) return;

        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td class="ps-4 fw-bold">Miércoles</td>
            <td>02:00 PM - 03:00 PM</td>
            <td class="text-muted fst-italic">Sin asignar (Disponible)</td>
            <td><span class="badge bg-success bg-opacity-10 text-success px-2 py-1">Libre</span></td>
            <td class="text-end pe-4"><button class="md3-btn-danger-soft btn-liberar">Liberar</button></td>
        `;
        
        tbody.appendChild(nuevaFila);
    }

    // Función nombrada para aplicar delegación de eventos al eliminar/liberar filas y mostrar Toast
    function manejarDelegacionHorarios(evento) {
        if (evento.target.classList.contains('btn-liberar')) {
            const fila = evento.target.closest('tr');
            if (fila) {
                fila.remove();
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



            if (toastLiberar) {
                toastLiberar.show();
            }
        }
    }

    if (btnAgregarHorario && tablaHorarios) {
        btnAgregarHorario.addEventListener('click', manejarAgregarHorario);
        tablaHorarios.addEventListener('click', manejarDelegacionHorarios);
    }


    // INTERACCIÓN 4: Mostrar/ocultar contraseña
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // ============================================================
    // INTERACCIÓN MÓDULO PSICÓLOGOS: Filtrado o búsqueda de alumnos
    // Página: psicologos/seguimiento.html
    // ============================================================

    const inputBusqueda = document.getElementById('inputBusqueda');
    const filasAlumnos = document.querySelectorAll('#tablaAlumnos tbody tr');

    // Función nombrada para filtrar las filas de la tabla según el texto ingresado
    function manejarFiltradoAlumnos(evento) {
        const textoBusqueda = evento.target.value.toLowerCase().trim();

        filasAlumnos.forEach(function(fila) {
            const textoFila = fila.textContent.toLowerCase();
            
            if (textoFila.includes(textoBusqueda)) {
                fila.classList.remove('d-none');
            } else {
                fila.classList.add('d-none');
            }
        });
    }

    if (inputBusqueda && filasAlumnos.length > 0) {
        inputBusqueda.addEventListener('input', manejarFiltradoAlumnos);
        inputBusqueda.addEventListener('keyup', manejarFiltradoAlumnos);
    }