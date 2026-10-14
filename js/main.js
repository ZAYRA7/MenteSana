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

            if (toastLiberar) {
                toastLiberar.show();
            }
        }
    }

    if (btnAgregarHorario && tablaHorarios) {
        btnAgregarHorario.addEventListener('click', manejarAgregarHorario);
        tablaHorarios.addEventListener('click', manejarDelegacionHorarios);
    }


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