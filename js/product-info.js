document.addEventListener("DOMContentLoaded", function(e){
// ENTREGA 3. MUESTRO PRODUCTS INFO

    fetch(PRODUCT_INFO_URL)
    .then(info => info.json())      
    .then(data => {   

        let nombre = data.name;
        let descripcion = data.description;
        let costo = data.cost;
        let cantVendida = data.soldCount;

        document.getElementById("productName").innerHTML = nombre; 
        document.getElementById("productDescription").innerHTML = descripcion;  
        document.getElementById("productCost").innerHTML =  `USD ` + costo + `</small>`;
        document.getElementById("productCountVendidos").innerHTML = cantVendida;
        
        for(let i = 0; i < data.images.length; i++){        
            let imagenes = data.images[i];
            
            let imagen = "";
            imagen += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + imagenes + `" alt="">
                </div>
            </div>
            `

            document.getElementById("productImagesGallery").innerHTML += imagen;
        }
        
    });

    fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(info => info.json())
    .then(data => {

        for(let i = 0; i < data.length; i++){                    
            let puntos = data[i].score;
            let descripcion = data[i].description;
            let usuario = data[i].user;
            let fecha = data[i].dateTime;
            
            // let estrellasPunt = "";
            // for(let i=0; i < puntos.length; i++) {
            //     estrellasPunt += `<span class="fa fa-star" style="color:yellow"/> `
            

                
            // }

            let comentarios = "";
            comentarios += `
                <div class="row">
                    <small class="text-muted">` + puntos + `</small>
                    <div class="col">
                        <h8 class="mb-1">` + usuario + ` <small class="text-muted"> dice: </small></h8><br>
                        <small class="text-muted">` + descripcion + `</small>
                    </div>        
                </div>
                <small class="text=muted">` + fecha + `<br></small>

            `     
            document.getElementById("opinionProductos").innerHTML += comentarios;
        }
        let puntos = document.getElementById("valor").value
        console.log(puntos)
    });

    //ENTREGA 3. DESAFIATE: muestro mi comentario con los demas
    document.getElementById("sendScore").onclick = function() {

        document.getElementById("opinionProductos").innerHTML += `
            <div class="row">
                <small class="text-muted">` + document.getElementById("valor").innerHTML + `</small>
                <div class="col">
                    <h8 class="mb-1">` + localStorage.getItem("usuario") + ` <small class="text-muted"> dice: </small></h8><br>
                    <small class="text-muted">` + document.getElementById("agregarComentario").value + `</small>
                </div>        
            </div>
            <small class="text=muted">` + localStorage.getItem("ultimoInicio") + `<br></small>
        `
        document.getElementById("agregarComentario").value = "";
    };

    


});



