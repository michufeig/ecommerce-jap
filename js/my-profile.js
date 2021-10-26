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

        let datosUser = {"nombre": nombreAct,
        "apellido": apellidoAct,
        "username1": usernameAct,
        "edad": edadAct,
        "celular": celularAct,
        "documento": documentoAct
        };

        localStorage.setItem("datosUser",JSON.stringify(datosUser));
    }

    let getUser =  localStorage.getItem("datosUser");
    let parseGetUser = JSON.parse(getUser)
        
    document.getElementById("nombre").value = parseGetUser.nombre
    document.getElementById("apellido").value = parseGetUser.apellido
    document.getElementById("username").innerHTML = parseGetUser.username1 + `<br><small style="color: white"> Último inicio de sesión: `+ localStorage.getItem("ultimoInicio")
    document.getElementById("username1").value = parseGetUser.username1
    document.getElementById("edad").value = parseGetUser.edad
    document.getElementById("celular").value = parseGetUser.celular
    document.getElementById("documento").value = parseGetUser.documento
    
});