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
            </div> <br>
            `
            document.getElementById("productImagesGallery").innerHTML += imagen;
        }

        //ENTREGA 4. Muestro related products
        for(let i = 0; i < data.relatedProducts.length; i++){        
            let prodRelacionados = data.relatedProducts[i];     //prodRelacionados tiene 1 y 3
            
            fetch(PRODUCTS_URL)
            .then(info => info.json())      
            .then(data => {                  

                let nombreProdRelacionados = data[prodRelacionados].name    
                let imgProdRelacionados = data[prodRelacionados].imgSrc                 

                let relacionados = "";     
                relacionados += `
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="` + imgProdRelacionados + `" alt="` + nombreProdRelacionados + `"> 
                        <h8 class="mb-1">`+ nombreProdRelacionados +`</h8>
                    </div>
                </div>
                `                    
                document.getElementById("relatedProducts").innerHTML += relacionados;
            })  
        }
        
 
    });

    // ENTREGA 3. MUESTRO COMENTS
    fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(info => info.json())
    .then(data => {

        for(let i = 0; i < data.length; i++){                    
            let puntos = data[i].score;
            let descripcion = data[i].description;
            let usuario = data[i].user;
            let fecha = data[i].dateTime;
            
            let estrellasOtros = "";

            for(let x = 0; x < puntos; x++) {
                estrellasOtros += `<span style="color:orange"/> ★`                
            }

            let comentarios = "";
            comentarios += `
                <h8 class="mb-1">` + estrellasOtros + `</h8> <br>  
                <h8 class="mb-1">` + descripcion + `</h8><br>
                <small class="text-muted">` + usuario + ` comentó el ` + fecha + `</small><br><br>
            
            `     

            document.getElementById("opinionProductos").innerHTML += comentarios;
        }
    });

    //ENTREGA 3. DESAFIATE: muestro mi comentario con los demas
    document.getElementById("sendScore").onclick = function() {

        let estrellasMias = "";

        for(let x = 0; x < document.getElementById("valor").innerHTML; x++) {  //ese inner html mostraria el nro q marco de estrellas
            estrellasMias += `<span style="color:orange"/> ★`                
        }     

        document.getElementById("opinionProductos").innerHTML += `
            <h8 class="mb-1">` + estrellasMias + `</h8><br>
            <h8 class="mb-1">` + document.getElementById("agregarComentario").value + `</h8><br>
            <small class="text-muted">` + localStorage.getItem("usuario") + ` comentó el ` + localStorage.getItem("ultimoInicio") + `</small><br><br>
 
        `

        document.getElementById("agregarComentario").value = "";
        document.getElementById("valor").innerHTML = "";
        
    };

    
    
});



