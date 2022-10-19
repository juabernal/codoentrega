  
        function validarEnviar() {
            //valido el nombre
            if (document.fvalida.nombre.value.length  == 0) {
                alert("Tiene que escribir su nombre")
                document.fvalida.nombre.focus()
                return 0
            }

			if (document.fvalida.email.value.length  == 0) {
                alert("Tiene que escribir su correo electrónico")
                document.fvalida.email.focus()
                return 0
            }

            if (document.fvalida.asunto.value.length  == 0) {
                alert("El formulario no tiene asunto, por favor escriba uno")
                document.fvalida.asunto.focus()
                return 0
            }

			if (document.fvalida.mensaje.value.length  == 0) {
                alert("Tiene que escribir un mensaje")
                document.fvalida.mensaje.focus()
                return 0
            }

            //Finalmente, si llegó hasta aqui, se envia el form.
            alert("Muchas gracias por enviar el formulario")
            document.fvalida.submit()
        }
        
        function validarEntero(valor) {
            //intento convertir a entero.
            //si era un entero no le afecta, si no lo era lo intenta convertir
            valor = parseInt(valor)

            //Compruebo si es un valor numérico
            if (isNaN(valor)) {
                //entonces (no es numero) devuelvo el valor cadena vacia
                return ""
            } else {
                //En caso contrario (Si era un número) devuelvo el valor
                return valor
            }
        }