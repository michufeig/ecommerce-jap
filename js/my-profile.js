document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("actualizarInfo").onclick = function() {
        localStorage.clear();

        let ultimoInicio = new Date().toLocaleString();

        let datosUser = 
        {"nombre": document.getElementById("nombre").value,
        "apellido": document.getElementById("apellido").value,
        "username1": document.getElementById("username1").value,
        "edad": document.getElementById("edad").value,
        "celular": document.getElementById("celular").value,
        "documento": document.getElementById("documento").value,
        "ultimoInicio": ultimoInicio
        };

        localStorage.setItem("datosUser",JSON.stringify(datosUser));
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