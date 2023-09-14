// Obtener elementos del DOM
const dniInput = document.getElementById("dni");
const tramiteSelect = document.getElementById("tramite");
const submitButton = document.getElementById("submit-button");

// Evento al hacer clic en el botón de envío
submitButton.addEventListener("click", () => {
    // Obtener el DNI y el tipo de trámite seleccionado
    const dni = dniInput.value;
    const tramite = tramiteSelect.value;

    // Validar el DNI y el tipo de trámite (puedes implementar tus propias validaciones aquí)

    // Simular el envío de la solicitud a la API (esto es solo un ejemplo)
    enviarSolicitudAlaAPI(dni, tramite);
});

// Función para enviar la solicitud a la API (simulado)
function enviarSolicitudAlaAPI(dni, tramite) {
    // Aquí puedes agregar la lógica para enviar la solicitud a tu API
    // Esto es solo un ejemplo simulado
    setTimeout(() => {
        // Simular una respuesta exitosa
        const numeroDeTurno = generarNumeroDeTurno();
        mostrarMensajeDeConfirmacion(numeroDeTurno);
    }, 2000); // Simular una demora de 2 segundos
}

// Función para generar un número de turno (simulado)
function generarNumeroDeTurno() {
    // Aquí puedes implementar la lógica real para generar el número de turno
    // En este ejemplo, generamos un número aleatorio
    return Math.floor(Math.random() * 1000);
}

// Función para mostrar un mensaje de confirmación
function mostrarMensajeDeConfirmacion(numeroDeTurno) {
    // Aquí puedes agregar la lógica para mostrar un mensaje de confirmación al usuario
    alert(`Solicitud enviada con éxito. Tu número de turno es: ${numeroDeTurno}`);
}
