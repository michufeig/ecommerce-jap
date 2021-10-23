document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("botonInfo").onclick = function() {

        let nombreAct = document.getElementById("nombre").value;
        let apellidoAct = document.getElementById("apellido").value;
        let usernameAct = document.getElementById("username1").value;
        let edadAct = document.getElementById("edad").value;
        let celularAct = document.getElementById("celular").value;
        let documentoAct = document.getElementById("documento").value;

        localStorage.setItem("nombreAct", nombreAct);                             
        localStorage.setItem("apellidoAct", apellidoAct);
        localStorage.setItem("usernameAct", usernameAct);                              
        localStorage.setItem("edadAct", edadAct);
        localStorage.setItem("celularAct", celularAct);                              
        localStorage.setItem("documentoAct", documentoAct);

        console.log(localStorage.setItem("nombreAct", nombreAct))
        console.log(localStorage.setItem("apellidoAct", apellidoAct))
        console.log(celularAct)
        

        // document.getElementById("mostrarAca").innerHTML = localStorage.getItem("nombreAct");
        // document.getElementById("mostrarAca").innerHTML = localStorage.getItem("apellidoAct");
        // document.getElementById("username1").innerHTML = localStorage.getItem("usernameAct");
        // document.getElementById("username").innerHTML = localStorage.getItem("usernameAct") + `<br><small style="color: white"> Último inicio de sesión: `+ localStorage.getItem("ultimoInicio");
        // document.getElementById("edad").innerHTML = localStorage.getItem("edadAct");
        // document.getElementById("celular").innerHTML = localStorage.getItem("celularAct");
        // document.getElementById("documento").innerHTML = localStorage.getItem("documentoAct");
    }

});