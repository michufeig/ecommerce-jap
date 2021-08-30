// ENTREGA 1. MUESTRO LISTA DE PRODUCTOS

document.addEventListener("DOMContentLoaded", function(e){
    
    fetch(PRODUCTS_URL)
        .then(info => info.json())         //pone en variable info q toma de la url, convierto la var en json, llamo a esto data
        .then(data => {   
            
            // let i = 0;
            // while(i < data.length){

            function productsList() {
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
            }

            productsList();
            
        });

        //ENTREGA 2. FILTRAR A PARTIR DE MINIMO Y MAXIMO INTRODUCIDO 

        document.getElementById("filterBtn").onclick = function() {
        // document.getElementById("filterBtn").addEventListener("click", () => {
            let minValue = document.getElementById("filterMin").value;
            let maxValue = document.getElementById("filterMax").value;

            fetch(PRODUCTS_URL)
                .then(info => info.json())         
                .then(data => {   
        
                prodFiltrados = "";    

                if (minValue > maxValue) {
                    alert("El precio mínimo debe ser menor al máximo"); 
                }

                for (let i = 0; i < data.length; i++) {
                    let nombre = data[i].name;
                    let descripcion = data[i].description;
                    let costo = data[i].cost;
                    let imagen = data[i].imgSrc;
                    let cantVendida = data[i].soldCount;
                    
                    if (costo > minValue && costo < maxValue) {                
        
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
        }

        //ENTREGA 2. ORDENAR ASCENDENTE Y DESCENDENTE SEGUN PRECIO Y RELEVANCIA 
        const price_ascendent = "precio_asc";
        const price_descendent = "precio_desc";
        const relevance_descendent = "relevancia";

        function sortProducts (criteria, array) {
            let resultado = [];

            if (criteria === price_ascendent) {
                resultado = array.sort(function (previous, next) {
                    if (parseInt(previous.costo) > parseInt(next.costo)) {    //convierto a nro
                        return 1;
                    }
    
                    if (parseInt(previous.costo) < parseInt(next.costo)) {
                        return -1;
                    }
    
                    return 0;
                });
            } 
            // return previous.costo - next.costo
    
            else if (criteria === price_descendent) {
                resultado = array.sort(function (previous, next) {
                    if (parseInt(previous.costo) < parseInt(next.costo)) {
                        return 1;
                    }
    
                    if (parseInt(previous.costo) > parseInt(next.costo)) {
                        return -1;
                    }
    
                    return 0;
                })
            }
    
            else if (criteria === relevance_descendent) {
                resultado = array.sort(function (previous, next) {
                    if (parseInt(previous.cantVendida) < parseInt(next.cantVendida)) {
                        return 1;
                    }
    
                    if (parseInt(previous.cantVendida) > parseInt(next.cantVendida)) {
                        return -1;
                    }
    
                    return 0;
                })
            }

            return resultado;
        } 
        
        document.getElementById("ORDENAR-PRECIO-ASC").onclick = function() {
            criteria === price_ascendent;
            return resultado;
        }

        document.getElementById("ORDENAR-PRECIO-DESC").onclick = function() {
            criteria === price_descendent;
            return resultado;
        }

        document.getElementById("ORDENAR-RELEV-DESC").onclick = function() {
            criteria === relevance_descendent;
            return resultado;
        }

        document.getElementById("clearRangeFilter").onclick = function() {
            document.getElementById("filterMin").value = "";
            document.getElementById("filterMax").value = "";
        }

        prodFiltrados = "";    

                if (minValue > maxValue) {
                    alert("El precio mínimo debe ser menor al máximo"); 
                }

                for (let i = 0; i < data.length; i++) {
                    let nombre = data[i].name;
                    let descripcion = data[i].description;
                    let costo = data[i].cost;
                    let imagen = data[i].imgSrc;
                    let cantVendida = data[i].soldCount;
                    
                    if (costo > minValue && costo < maxValue) {                
        
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
});

 
