document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("actualizarInfo").onclick = function() {
        localStorage.clear();
        let nombreAct = document.getElementById("nombre").value;
        let apellidoAct = document.getElementById("apellido").value;
        let username1 = document.getElementById("username1").value;
        let edadAct = document.getElementById("edad").value;
        let celularAct = document.getElementById("celular").value;
        // let documentoAct = document.getElementById("documento").value;
        
        let ultimoInicio = new Date().toLocaleString();
        // let fotoPerfil = document.getElementById("fotoPerfil");

        let datosUser = {"nombre": nombreAct,
        "apellido": apellidoAct,
        "username1": username1,
        "edad": edadAct,
        "celular": celularAct,
        // "documento": documentoAct,
        "ultimoInicio": ultimoInicio
        };

        localStorage.setItem("datosUser",JSON.stringify(datosUser));

        // // no logre imagen
        // fotoPerfil.addEventListener("load", function () {
        //     var imgCanvas = document.createElement("canvas");
        //     var imgContext = imgCanvas.getContext("2d");

        //     imgCanvas.width = fotoPerfil.width;
        //     imgCanvas.height = fotoPerfil.height;

        //     // Draw image into canvas element
        //     imgContext.drawImage(fotoPerfil, 0, 0, fotoPerfil.width, fotoPerfil.height);

        //     // Get canvas contents as a data URL
        //     var imgAsDataURL = imgCanvas.toDataURL("image/png");

        //     localStorage.setItem("fotoPerfil",imgAsDataURL);

        // }, false)
    }

    let getUser =  JSON.parse(localStorage.getItem("datosUser"));
        
    document.getElementById("nombre").value = getUser.nombre
    document.getElementById("apellido").value = getUser.apellido
    document.getElementById("username").innerHTML = getUser.username1 + `<br><small style="color: white"> Último inicio de sesión: `+ getUser.ultimoInicio
    document.getElementById("username1").value = getUser.username1
    document.getElementById("edad").value = getUser.edad
    document.getElementById("celular").value = getUser.celular
    // document.getElementById("documento").value = getUser.documento
    
});

document.getElementById("cerrarSesion").onclick = function() {
    localStorage.clear();
    document.getElementById("username").innerHTML =  'Inicie sesión'

}