document.addEventListener("DOMContentLoaded", function(e){
        
    document.getElementById("sendUsername").onclick = function() {             //el boton "entrar" con id sendusername
        
        let usuario = document.getElementById("username").value;
        localStorage.setItem("usuario", usuario);                              //stores data (then retrieves it in init.js)
        localStorage.setItem("ultimoInicio", new Date().toLocaleString());
    }
});