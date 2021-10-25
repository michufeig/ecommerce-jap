document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("botonInfo").onclick = function() {
        localStorage.clear();
        let nombreAct = document.getElementById("nombre").value;
        let apellidoAct = document.getElementById("apellido").value;
        let usernameAct = document.getElementById("username1").value;
        let edadAct = document.getElementById("edad").value;
        let celularAct = document.getElementById("celular").value;
        let documentoAct = document.getElementById("documento").value;
        let fotoPerfil = document.getElementById("fotoPerfil");
        // no logre imagen
        fotoPerfil.addEventListener("load", function () {
            var imgCanvas = document.createElement("canvas");
            var imgContext = imgCanvas.getContext("2d");

            imgCanvas.width = fotoPerfil.width;
            imgCanvas.height = fotoPerfil.height;

            // Draw image into canvas element
            imgContext.drawImage(fotoPerfil, 0, 0, fotoPerfil.width, fotoPerfil.height);

            // Get canvas contents as a data URL
            var imgAsDataURL = imgCanvas.toDataURL("image/png");

            localStorage.setItem("fotoPerfil",imgAsDataURL);

        }, false)

        localStorage.setItem("nombreAct", nombreAct);                             
        localStorage.setItem("apellidoAct", apellidoAct);
        localStorage.setItem("usernameAct", usernameAct);                              
        localStorage.setItem("edadAct", edadAct);
        localStorage.setItem("celularAct", celularAct);                              
        localStorage.setItem("documentoAct", documentoAct);

        let devuelveNombre = localStorage.getItem("nombreAct")
        let devuelveApellido = localStorage.getItem("apellidoAct")
        let devuelveUsername = localStorage.getItem("usernameAct")
        let devuelveEdad = localStorage.getItem("edadAct")

        document.getElementById("nombre").value = localStorage.getItem("nombreAct")

        document.getElementById("apellido").innerHTML = localStorage.getItem("apellidoAct")
        document.getElementById("username1").innerHTML = localStorage.getItem("usernameAct")
        document.getElementById("edad").innerHTML = localStorage.getItem("edadAct")
        document.getElementById("celular").innerHTML = localStorage.getItem("celularAct")
        document.getElementById("documento").innerHTML = localStorage.getItem("documentoAct")

        document.getElementById("mostrarAca").innerHTML = localStorage.getItem("nombreAct") + localStorage.getItem("apellidoAct") + localStorage.getItem("fotoPerfil");
    }

});