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

        document.getElementById("comprarBoton").onclick = function() {
            alert("Gracias por tu compra!");

        }

    });

});



  // //ENTREGA 5. Costo de envio e importe total
        // let costoEnvio = document.getElementById("costoEnvio").value;
        
        // document.getElementById("premium").onclick = function() {
        //     costoEnvio = 0;

        //     document.getElementById("costoEnvio").innerHTML = costoEnvio;
        //     let costoTotal = subtotal + costoEnvio;
        //     document.getElementById("costoTotal").innerHTML = costoTotal;
        // }

        // document.getElementById("express").onclick = function() {
        //     costoEnvio = 200;    

        //     document.getElementById("costoEnvio").innerHTML = costoEnvio;
        //     let costoTotal = subtotal + costoEnvio;
        //     document.getElementById("costoTotal").innerHTML = costoTotal;
        // }

        // document.getElementById("standard").onclick = function() {
        //     costoEnvio = 200;    

        //     document.getElementById("costoEnvio").innerHTML = costoEnvio;
        //     let costoTotal = subtotal + costoEnvio;
        //     document.getElementById("costoTotal").innerHTML = costoTotal;
        // }