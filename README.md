# MenteSana

### Plataforma de bienestar y atención psicológica estudiantil

---

## Descripción de la aplicación

MenteSana es una plataforma digital diseñada para facilitar a los estudiantes el acceso a servicios de orientación y atención psicológica dentro del entorno universitario. Permite consultar información, seleccionar un psicólogo, revisar disponibilidad, agendar citas y llevar un registro emocional diario, todo de manera clara, discreta y sencilla.

## Objetivo

Reducir las dificultades para acceder a atención psicológica dentro del entorno estudiantil, ofreciendo un medio organizado para consultar el servicio y solicitar una cita sin procesos innecesarios.

## Integrantes del equipo

| Nombre  | Rol           |
| :------ | :------------ |
| Zayra   | Líder Técnica |
| Farid   | Backend       |
| Karina  | Backend       |
| Armando | Frontend      |
| Abril   | Analista      |

## Tecnologías utilizadas

- **HTML5** - Estructura semántica de las páginas.
- **CSS3** - Estilos personalizados y separación de responsabilidades.
- **Bootstrap 5** - Framework de diseño responsive.
- **JavaScript** - Interactividad (próximamente).
- **GitHub** - Control de versiones y colaboración.
- **LaTeX** - Elaboración de documentos (SRS y Guía de Diseño).

## Características principales

- Panel de administrador (Dashboard) con tablas de gestión de citas.
- Formularios nativos HTML5 para autenticación institucional y registro emocional.
- Diseño responsive adaptado a computadora y móvil.
- Interfaz basada en la guía de estilo MenteSana (paleta azul-morado).
- Navegación consistente en todas las páginas (Top Bar, Navbar, Footer).
- Documentación completa (SRS y Guía de Diseño en PDF).

## Componentes de Bootstrap utilizados

- **Navbar** - Barra de navegación responsive con menú hamburguesa.
- **Grid System** (Container, Row, Col) - Sistema de rejilla para el layout.
- **Cards** - Tarjetas de servicios y métricas.
- **Forms** - Formularios con validación nativa.
- **Tables** - Tablas de gestión de citas.
- **Badges** - Indicadores de estado (Atendida, Cancelada, No asistida).
- **Buttons** - Botones de acción (Agendar, Cancelar, Descargar).
- **Alerts** - Mensajes informativos.
- **Offcanvas** - Menú lateral para móvil.

## Tabla de interacciones

| Interacción                | Integrante responsable | Selectores usados                    | Eventos usados                  | Componente Bootstrap     |
| :------------------------- | :--------------------- | :----------------------------------- | :------------------------------ | :----------------------- |
| Validación de formulario   | Zayra                  | `querySelectorAll`, `getElementById` | `input`, `blur`, `submit`       | `is-valid`, `is-invalid` |
| Notificación toast         | Zayra                  | `getElementById`                     | `click`, `submit`               | Toast                    |
| Modal de confirmación      | Zayra                  | `querySelectorAll`                   | `click`                         | Modal                    |
| Mostrar/ocultar contraseña | Zayra                  | `getElementById`                     | `click`                         | Button                   |
| Agregar/eliminar horarios  | Farid                  | `getElementById`, `querySelectorAll` | `click` (delegación de eventos) | Table                    |
| Filtrado de alumnos        | Farid                  | `getElementById`, `querySelectorAll` | `input`, `keyup`                | Table                    |
| Notificación toast         | Farid                  | `getElementById`                     | `click`                         | Toast                    |
| Filtrado por categorías    | Karina                 | `querySelectorAll`                   | `click`                         | Cards                    |
| Validación de recurso      | Karina                 | `getElementById`                     | `input`, `blur`, `submit`       | `is-valid`, `is-invalid` |
| Notificación toast         | Karina                 | `getElementById`                     | `click`, `submit`               | Toast                    |
| Cambio de tema             | Armando                | `getElementById`, `documentElement`  | `change`, `click`               | Navbar, Form switch      |
| Notificación toast         | Armando                | `querySelectorAll`                   | `click`                         | Toast                    |
| Modal de evento            | Armando                | `querySelectorAll`                   | `click`, `dataset`              | Modal                    |
| Barra de progreso          | Abril                  | `getElementById`                     | `click`                         | Progress                 |
| Validación de evento       | Abril                  | `getElementById`                     | `input`, `blur`, `submit`       | `is-valid`, `is-invalid` |
| Pestañas / Acordeón        | Abril                  | `querySelectorAll`                   | `click`                         | Nav pills / Tabs         |

## Capturas de pantalla

### Bienestar Emocional

![Evidencia 1: Index.html versión claro .]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.03 AM.jpeg")

### Notificación

[Evidencia 2: Index.html versión oscuro.]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.12 AM.jpeg")
("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.12 AM.jpeg")

### Modal de confirmación

![Modal de confirmación]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.55 AM.jpeg")

### Mostrar/ocultar contraseña

![Mostrar y ocultar contraseña]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 1.18.19 PM.jpeg")
"C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 1.18.19 PM (1).jpeg"

### Agregar/eliminar horarios

![Agregar y eliminar horarios]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 1.18.19 PM (1).jpeg")
"C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 1.19.23 PM.jpeg"

### Filtrado de alumnos

![Filtrado de alumnos](img/capturas/filtrado-alumnos.png)

### Filtrado por categorías

![Filtrado por categorías](img/capturas/filtrado-categorias.png)

### Validación de recurso

![Validación de recurso]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.37 AM.jpeg")

### Cambio de tema

![Cambio de tema apartado de eventos]("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.37 AM.jpeg")
("C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 10.10.55 AM (1).jpeg")

### Modal de evento

![Modal de evento](img/capturas/modal-evento.png)

### Barra de progreso

![Barra de progreso]("C:\Users\PC\OneDrive\Pictures\Screenshots\Captura de pantalla 2026-10-14 042106.png")

### Validación de evento

![Validación de evento]("C:\Users\PC\OneDrive\Pictures\Screenshots\Captura de pantalla 2026-10-14 041654.png")

### Pestañas de eventos

![Pestañas de eventos](img/capturas/pestanas-eventos.png)

### Filtrado Dinamico por categoria

"C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 1.17.41 PM.jpeg"
"C:\Users\PC\Downloads\WhatsApp Image 2026-10-14 at 1.17.59 PM.jpeg"

## Descripción del trabajo por integrante

- **Zayra (Líder Técnica):** Implementó la validación de formularios con retroalimentación en tiempo real, las notificaciones toast, el modal de confirmación y el botón para mostrar u ocultar la contraseña. Además coordinó la integración del código y el flujo de trabajo en GitHub.
- **Farid (Backend):** Desarrolló la gestión de horarios del psicólogo (agregar y eliminar filas con delegación de eventos), el filtrado de alumnos en tiempo real y las notificaciones toast del panel.
- **Karina (Backend):** Creó el filtrado de recursos por categorías con tarjetas, la validación del formulario de recursos y sus notificaciones toast.
- **Armando (Frontend):** Programó el cambio de tema claro/oscuro con un interruptor en la barra de navegación, el modal de detalle de eventos (usando `dataset`) y las notificaciones toast.
- **Abril (Analista):** Implementó la barra de progreso "Tu camino hacia el bienestar", la validación del formulario de eventos y las pestañas para filtrar eventos por tipo.

## Reflexión del equipo

La interacción más difícil fue la validación de formularios, porque había que coordinar tres eventos (`input`, `blur` y `submit`) y decidir en qué momento mostrar cada mensaje sin resultar molesto para el usuario. También costó trabajo definir expresiones regulares correctas, como la del horario. La delegación de eventos nos mostró su ventaja en las tablas dinámicas: con un solo listener en el contenedor se atienden los botones de filas que se agregan después, sin volver a registrar eventos y con menos código. Al combinar JavaScript con Bootstrap aprendimos que Bootstrap aporta el diseño y las clases de estado (`is-valid`, `is-invalid`, `active`, `show`), mientras que JavaScript decide cuándo aplicarlas con `classList`. También aprendimos a usar la API de Bootstrap para abrir modales y mostrar toasts desde el código. Por último, trabajar en ramas separadas y con Pull Requests nos ayudó a integrar el trabajo de cinco personas sin pisarnos los cambios.
