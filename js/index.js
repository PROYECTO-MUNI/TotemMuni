
let dniInput = ""; // letiable para almacenar el DNI ingresado
let turnoCounter = 1; // Contador de turnos
let pantallaDni = document.getElementById("pantalla-dni")
let dniRect = document.getElementById("dni-rect");
let pantallaTramite = document.getElementById("pantalla-tramites")
let numeroDeTurno = document.getElementById("numero-turno")
let pantallaConfirmacion = document.getElementById("pantalla-confirmacion")
let fechaYHora = document.getElementById("fecha-hora")

        // Función para agregar un número al DNI
        function agregarNumeroDNI(numero) {
            // Limitar el DNI a 8 números
            if (dniInput.length < 8) {
                dniInput += numero;
                actualizarDNI();
            }
        }

        // Función para borrar el último número del DNI
        function borrarUltimoNumero() {
            dniInput = dniInput.slice(0, -1);
            actualizarDNI();
        }

        // Función para actualizar el campo DNI con el contenido actual
        function actualizarDNI() {
            dniRect.textContent = dniInput;
        }
        //Función para borrar completamente el DNI
        function borrarDNI() {
        dniInput = "";
        actualizarDNI();
        }

        // Función para mostrar la pantalla de selección de trámites
        function mostrarTramites() {
            // Verificar si se ingresó un DNI completo
            if (dniInput.length !== 8) {
                alert("Por favor, complete su DNI antes de continuar.");
                return;
            }

            // Ocultar la pantalla de ingreso de DNI
            pantallaDni.style.display = "none";

            // Mostrar la pantalla de selección de trámites
            pantallaTramite.style.display = "block";
        }

        // Función para generar un turno y mostrar la pantalla de confirmación
        function generarTurno(tramite) {
            
            
            // Mostrar la pantalla de confirmación
            pantallaTramite.style.display = "none";
            pantallaConfirmacion.style.display = "block";
            
            let numeroTurno = turnoCounter++;
            
            // Mostrar la información del turno
            numeroDeTurno.textContent = "Turno: " + numeroTurno;
            
            // Obtener la fecha y hora actual
            let fechaHora = new Date();
            let fechaHoraFormat = fechaHora.toLocaleString();
            
            // Mostrar la fecha y hora en la pantalla de confirmación
            fechaYHora.textContent = "Fecha y hora: " + fechaHoraFormat;
            
            setTimeout(()=>{
                
                
                pantallaDni.style.display="block"

                if (dniInput.length <= 8) {
                    borrarDNI()


                    
                }
                // pantallaTramite.style.display = "block";
            pantallaConfirmacion.style.display = "none";
                
            }
            ,4000);
            
        }

    

        







// // Obtener elementos del DOM
// const dniInput = document.getElementById("dni");
// const tramiteSelect = document.getElementById("tramite");
// const submitButton = document.getElementById("submit-button");

// // Evento al hacer clic en el botón de envío
// submitButton.addEventListener("click", () => {
//     // Obtener el DNI y el tipo de trámite seleccionado
//     const dni = dniInput.value;
//     const tramite = tramiteSelect.value;

//     // Validar el DNI y el tipo de trámite (puedes implementar tus propias validaciones aquí)

//     // Simular el envío de la solicitud a la API (esto es solo un ejemplo)
//     enviarSolicitudAlaAPI(dni, tramite);
// });

// // Función para enviar la solicitud a la API (simulado)
// function enviarSolicitudAlaAPI(dni, tramite) {
//     // Aquí puedes agregar la lógica para enviar la solicitud a tu API
//     // Esto es solo un ejemplo simulado
//     setTimeout(() => {
//         // Simular una respuesta exitosa
//         const numeroDeTurno = generarNumeroDeTurno();
//         mostrarMensajeDeConfirmacion(numeroDeTurno);
//     }, 2000); // Simular una demora de 2 segundos
// }

// // Función para generar un número de turno (simulado)
// function generarNumeroDeTurno() {
//     // Aquí puedes implementar la lógica real para generar el número de turno
//     // En este ejemplo, generamos un número aleatorio
//     return Math.floor(Math.random() * 1000);
// }

// // Función para mostrar un mensaje de confirmación
// function mostrarMensajeDeConfirmacion(numeroDeTurno) {
//     // Aquí puedes agregar la lógica para mostrar un mensaje de confirmación al usuario
//     alert(`Solicitud enviada con éxito. Tu número de turno es: ${numeroDeTurno}`);
// }