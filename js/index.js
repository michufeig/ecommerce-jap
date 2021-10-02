document.addEventListener("DOMContentLoaded", function(e){
        
    document.getElementById("sendUsername").onclick = function() {    //evento         //el boton "entrar" con id sendusername
        let usuario = document.getElementById("username").value;
        let ultimoInicio = new Date().toLocaleString();
        localStorage.setItem("usuario", usuario);                              //stores data (then retrieves it in init.js)
        localStorage.setItem("ultimoInicio", ultimoInicio);
    }

    //ENTREGA 4: menu desplegable
    document.getElementById("cerrarSesion").onclick = function() {
        document.getElementById("username").value = "";
    }
});