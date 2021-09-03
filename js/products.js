document.addEventListener("DOMContentLoaded", function(e){
    
    var array = [];

    function showProductsList(data) {
        document.getElementById("listaProductos").innerHTML = "";        //primero me vacia, me elimina lo q hay (sirve dsp pa filtrar)
        
        for(let i = 0; i < data.length; i++){                    
            let nombre = data[i].name;
            let descripcion = data[i].description;
            let costo = data[i].cost;
            let imagen = data[i].imgSrc;
            let cantVendida = data[i].soldCount;

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
                        <small class="text-muted"> ` + cantVendida + ` unidades vendidas </small>
                    </div>
                </div>
            `     
            document.getElementById("listaProductos").innerHTML += productos;
            array.push(data[i]);           //le agrego los datos al array q defini antes vacio
        }
    }

    // ENTREGA 1. MUESTRO LISTA DE PRODUCTOS
    fetch(PRODUCTS_URL)
        .then(info => info.json())         //pone en variable info q toma de la url, convierto la var en json, llamo a esto data
        .then(data => {   

            showProductsList(data);
            
        });

    //ENTREGA 2. FILTRAR A PARTIR DE MINIMO Y MAXIMO INTRODUCIDO 
    document.getElementById("filterBtn").onclick = function() {                             // document.getElementById("filterBtn").addEventListener("click", () => {
        let minValue = document.getElementById("filterMin").value;
        let maxValue = document.getElementById("filterMax").value;

        fetch(PRODUCTS_URL)
            .then(info => info.json())         
            .then(data => {   
        
            prodFiltrados = [];    

            for (let i = 0; i < data.length; i++) {
                let costo = data[i].cost;                    
                if (costo > minValue && costo < maxValue) {                
                    prodFiltrados.push(data[i]);
                }
            }

            showProductsList(prodFiltrados);
        })
    }

    //ENTREGA 2. ORDENAR ASCENDENTE Y DESCENDENTE SEGUN PRECIO Y RELEVANCIA 
    const price_ascendent = "precio_ascendente";
    const price_descendent = "precio_descendente";
    const relevance_descendent = "relevancia";
    
    function sortProducts (criteria, array) {
        let resultado = [];
        prodOrdenados = [];
   
        if (criteria === price_ascendent) {
            let resultado = array.sort(function (previous, next) {
                if (parseInt(previous.cost) > parseInt(next.cost)) {    //convierto a nro
                    return 1;
                }
    
                if (parseInt(previous.cost) < parseInt(next.cost)) {
                    return -1;
                }
    
                return 0;
            });
        } 
        // return previous.costo - next.costo
    
        else if (criteria === price_descendent) {
            let resultado = array.sort(function (previous, next) {
                if (parseInt(previous.cost) < parseInt(next.cost)) {
                    return 1;
                }
    
                if (parseInt(previous.cost) > parseInt(next.cost)) {
                    return -1;
                }
    
                return 0;
            })
        }
    
        else if (criteria === relevance_descendent) {
            let resultado = array.sort(function (previous, next) {
                if (parseInt(previous.soldCount) < parseInt(next.soldCount)) {
                    return 1;
                }
    
                if (parseInt(previous.soldCount) > parseInt(next.soldCount)) {
                    return -1;
                }
    
                return 0;
            })
        }
        prodOrdenados = [];

        for (let i = 0; i < array.length; i++) {
            let nombre = array[i].name;
            let descripcion = array[i].description;
            let costo = array[i].cost;
            let imagen = array[i].imgSrc;
            let cantVendida = array[i].soldCount;           
    
                resultado += `
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
                            <small class="text-muted"> ` + cantVendida + ` unidades vendidas </small>
                        </div>
                    </div>
                `         
                document.getElementById("listaProductos").innerHTML = resultado;
                

        }        
    }
    document.getElementById("ORDENAR-PRECIO-ASC").onclick = function() {
        sortProducts (price_ascendent, array);
    }

    document.getElementById("ORDENAR-PRECIO-DESC").onclick = function() {
        sortProducts (price_descendent, array);
    }

    document.getElementById("ORDENAR-RELEV-DESC").onclick = function() {
        sortProducts (relevance_descendent, array);
    }        
        
    

    document.getElementById("clearRangeFilter").onclick = function() {
        document.getElementById("filterMin").value = "";
        document.getElementById("filterMax").value = "";
        fetch(PRODUCTS_URL)
            .then(info => info.json())         
            .then(data => { 

            showProductsList(data);              
            })
    }

});

 
