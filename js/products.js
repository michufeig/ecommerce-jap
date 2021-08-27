// fetch
document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRODUCTS_URL)
        .then(info => info.json())         //pone en variable info q toma de la url, convierto la var en json, llamo a esto data
        .then(data => {   
            
            // let i = 0;
            // while(i < data.length){

            for(let i = 0; i < data.length; i++){                    
                let nombre = data[i].name;
                let descripcion = data[i].description;
                let costo = data[i].cost;
                let imagen = data[i].imgSrc;

                let productos = "";

                productos += `
                    <div class="row">
                        <div class="col-3">
                        <img src="` + imagen + `" alt="` + descripcion + `" class="img-thumbnail"> 
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ nombre +`</h4>
                                <small class="text-muted"> USD ` + costo + `</small>
                            </div>
                            <p class="mb-1">` + descripcion + `</p>
                        </div>
                    </div>
                `     
                document.getElementById("listaProductos").innerHTML += productos;
                // i = i + 1
            }
        });
});

    // document.getElementById("filterBtn").onclick = function() {
document.getElementById("filterBtn").addEventListener("click", () => {
    let minValue = document.getElementById("filterMin").value;
    let maxValue = document.getElementById("filterMax").value;
  
    fetch(PRODUCTS_URL)
        .then(info => info.json())         //pone en variable info q toma de la url, convierto la var en json, llamo a esto data
        .then(data => {   

        prodFiltrados = "";    
        for(let i = 0; i < data; i++) {
            let nombre = data[i].name;
            let descripcion = data[i].description;
            let costo = data[i].cost;
            let imagen = data[i].imgSrc;

            

            if(costo > minValue && costo < maxValue) {                

                prodFiltrados += `
                    <div class="row">
                        <div class="col-3">
                        <img src="` + imagen + `" alt="` + descripcion + `" class="img-thumbnail"> 
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ nombre +`</h4>
                                <small class="text-muted"> USD ` + costo + `</small>
                            </div>
                            <p class="mb-1">` + descripcion + `</p>
                        </div>
                    </div>
                `         
                document.getElementById("listaProductos").innerHTML = prodFiltrados;
            }
        }
    })
})