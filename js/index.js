document.addEventListener("DOMContentLoaded", function(e){
    
    document.getElementById("sendUsername").addEventListener("click", () => {    //el boton "entrar" con id sendusername
        let usuario = document.getElementById("username").value;
        localStorage.setItem("usuario", usuario);            //stores data (then retrieves it in init.js)
    })   
});