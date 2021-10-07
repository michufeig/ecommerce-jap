document.addEventListener("DOMContentLoaded", function(e){
    
    fetch(CART_INFO_URL)
    .then(info => info.json())      
    .then(data => {   
        let nombre = data.articles[0].name;
        let cantidad = data.articles[0].count;
        let costoUnitario = data.articles[0].unitCost;
        let moneda = data.articles[0].currency;
        let imagen = data.articles[0].src;      
        let costoTotal = costoUnitario * cantidad;

        document.getElementById("articleName").innerHTML = nombre;
        document.getElementById("articleImage").innerHTML = `<img src="` + imagen + `" alt="` + nombre + `" class="img-thumbnail">`; 
        document.getElementById("unitCost").innerHTML = moneda + " " + costoUnitario;
        document.getElementById("articleCount").innerHTML = cantidad;
        document.getElementById("costoTotal").innerHTML = costoTotal;
        
        document.getElementById("menos").onclick = function() {
 
            cantidad --
            let costoTotal = costoUnitario * cantidad
            
            document.getElementById("articleCount").value = cantidad;
            document.getElementById("costoTotal").innerHTML = costoTotal;
        }
    
        document.getElementById("mas").onclick = function() {

            cantidad ++
            let costoTotal = costoUnitario * cantidad
    
            document.getElementById("articleCount").value = cantidad;
            document.getElementById("costoTotal").innerHTML = costoTotal;
        }
    })



});