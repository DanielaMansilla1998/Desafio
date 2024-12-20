function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;


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
        nombre: "Debes ingresar tu nombre",
        mail: "Debes ingresar tu mail",
        mailValido: "Ingresa un mail válido",
        mensaje: "Debes ingresar un mensaje"
    }


    // Variable que contiene un nombre de estilo 
    const claseEstilosError = "mensaje-error error-campos";


    // Validar que el nombre no esté vacío
    if (nombre === "") {
        errores.nombre.textContent = mensajesError.nombre;
        errores.nombre.className = claseEstilosError;
    }

    // Validar que el email tenga un formato correcto
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail === "") {
        errores.mail.textContent = mensajesError.mail;
        errores.mail.className = claseEstilosError;
    } else if (!regexEmail.test(mail)) {
        errores.mail.textContent = mensajesError.mailValido;
        errores.mail.className = claseEstilosError;
    }

    if (mensaje === "") {
        errores.mensaje.textContent = mensajesError.mensaje;
        errores.mensaje.className = claseEstilosError;
    }

    if (nombre === "" || mail === "" || mensaje === "") {
        errores.comun.textContent = mensajesError.todos;
        errores.comun.className = claseEstilosError;
    } else {
        // Si todos los campos están completos, se envía el formulario
        alert("¡Mensaje enviado éxitosamente!");
        errores.comun.textContent = "Éxito!";
    }
}
