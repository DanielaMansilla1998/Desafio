// Función para validar un mail
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email) ? "" : mensajesError.mailValido;
}

// Obtención de valores
let nombreCompleto = document.getElementById('nombre-completo').value;
let mail = document.getElementById('mail').value;
let mensaje = document.getElementById('mensaje').value;

// Tipos de errores
const errores = {
    comun: document.getElementById('error'),
    nombre: document.getElementById('error-nombre'),
    mail: document.getElementById('error-mail'),
    mensaje: document.getElementById('error-mensaje')
}

// Mensajes de error
const mensajesError = {
    todos: "Debes completar todos los datos solicitados.",
    nombre: "Debes ingresar tu nombre...",
    mail: "Debes ingresar tu mail",
    mailValido: "Ingresa un mail válido",
    mensaje: "Debes ingresar un mensaje"
}

// Variable que contiene un nombre de estilo 
const claseEstilosError = "mensaje-error error-campos";


// FORMULARIO DE CONSULTAS/PRESUPUESTO
document.getElementById('boton-enviar').addEventListener('click', function () {

    // Valida si hay algún campo incompleto para lanzar error de campos vacíos
    if (nombreCompleto === "" || mail === "" || mensaje === "") {
        errores.comun.textContent = mensajesError.todos;
        errores.comun.className = "mensaje-error";
    } else {
        // Si todos los campos están completos, se envía el formulario
        alert("¡Mensaje enviado éxitosamente!");
    }

    // Valida que haya texto en nombre
    if (nombreCompleto === "") {
        errores.nombre.textContent = mensajesError.nombre;
        errores.nombre.className = claseEstilosError;
    }

    // Valida que haya texto en mail y/o que sea válido
    if (mail === "") {
        errores.mail.textContent = mensajesError.mail;
        errores.mail.className = claseEstilosError;
        validarEmail(mail) ? '' : errorMail.textContent = mensajesError.mailValido;
        errores.mail.className = claseEstilosError;
    }

    // Valida que haya texto en mensaje
    if (mensaje === "") {
        errores.mensaje.textContent = mensajesError.mensaje;
        errores.mensaje.className = claseEstilosError;
    }

});


