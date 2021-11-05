document.addEventListener("DOMContentLoaded", function(e){
    
    //ENTREGA 5. mostrar carrito con producto
    fetch(CART_INFO_URL)
    .then(info => info.json())      
    .then(data => {   
        let nombre = data.articles[0].name;
        let cantidad = data.articles[0].count;
        let costoUnitario = data.articles[0].unitCost;
        let moneda = data.articles[0].currency;
        let imagen = data.articles[0].src;      
        let subtotal = costoUnitario * cantidad;

        document.getElementById("articleName").innerHTML = nombre;
        document.getElementById("articleImage").innerHTML = `<img src="` + imagen + `" alt="` + nombre + `" class="img-thumbnail">`; 
        document.getElementById("unitCost").innerHTML = moneda + " " + costoUnitario;
        document.getElementById("cantidad").innerHTML = cantidad;
        document.getElementById("subtotal").innerHTML = subtotal;
        document.getElementById("subtotal1").innerHTML = subtotal;
        
        //ENTREGA 5. Variar cantidad y actualizar subtotal
        let costoEnvio = document.getElementById("costoEnvio").value;  
        let porcentaje = 0.15;
        actualizarCostoEnvio();
        actualizarCantidad();

        function actualizarCostoEnvio(){

            costoEnvio = Math.round(subtotal * porcentaje)
            document.getElementById("costoEnvio").innerHTML = costoEnvio;
            let costoTotal = subtotal + costoEnvio;
            document.getElementById("costoTotal").innerHTML = costoTotal;
        }

        function actualizarCantidad(){

            subtotal = costoUnitario * cantidad
            document.getElementById("cantidad").value = cantidad;
            document.getElementById("cantidad").innerHTML = cantidad;
            document.getElementById("subtotal").innerHTML = subtotal;
            document.getElementById("subtotal1").innerHTML = subtotal;
        }

        document.getElementById("premium").onchange = function() {
            porcentaje = this.value;
            actualizarCostoEnvio()
        }

        document.getElementById("express").onchange = function() {
            porcentaje = this.value;
            actualizarCostoEnvio()
        }

        document.getElementById("standard").onchange = function() {
            porcentaje = this.value;
            actualizarCostoEnvio()
        }

        document.getElementById("menos").onclick = function() {
            cantidad--
            actualizarCantidad()
            actualizarCostoEnvio()
        }
    
        document.getElementById("mas").onclick = function() {
            cantidad++
            actualizarCantidad()
            actualizarCostoEnvio()
        }

        let medioPago = "";

        document.getElementById("credito").onchange = function() {
            medioPago = this.value;
        }
        
        document.getElementById("transferencia").onchange = function() {
            medioPago = this.value;
        }
        
        document.getElementById("continuar").onclick = function() {
            console.log(medioPago)
           
            alert("Has seleccionado '" + medioPago + "' como métodos de pago")
            document.getElementById("mostrarFormaPago").innerHTML = medioPago;
        }

        function validar() {
            let calle = document.getElementById("calle").value
            let numero = document.getElementById("numero").value
            let pais = document.getElementById("pais").value

            if (calle.length == 0) {
                alert("Por favor llenar todos los datos")
                return;
            }
            if (numero.length == 0) {
                alert("Por favor llenar todos los datos")
                return;
            }
            if (pais.length == 0) {
                alert("Por favor llenar todos los datos")
                return;
            }
            else {
                window.location.href="home.html"
            }
        }
        document.getElementById("comprarBoton").onclick = function() {
            validar();
         }

        //NO ME VALIDA MEDIO DE PAGO!!!!!! EL RESTO SI
        let nombretarjeta = document.getElementById("nombretarjeta").value
        let numeroTarjeta = document.getElementById("numeroTarjeta").value
        let fechaVenc = document.getElementById("fechaVenc").value
        let codigo = document.getElementById("codigo").value
        let numeroCuenta = document.getElementById("numeroCuenta").value    

        document.getElementById("continuar").onclick = function() {
            if (medioPago == "Tarjeta de crédito"){
                if (nombretarjeta.length == 0) {
                    return;
                }
                if (numeroTarjeta.length == 0) {
                    return;
                }
                if (fechaVenc.length == 0) {
                    return;
                }
                if (codigo.length == 0) {
                    return;
                }
            }

            if (medioPago == "Transferencia"){
                if (numeroCuenta.length == 0) {
                    return;
                }
            }      
            
            else {
                alert("MAL!! NO ME VALIDA")
            }
        }

    });

});
