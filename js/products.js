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
            <a href="product-info.html" class="list-group-item list-group-item-_action">
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
            </a>
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
    document.getElementById("filterBtn").onclick = function() {         //event                    // document.getElementById("filterBtn").addEventListener("click", () => {
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
    document.getElementById("ORDENAR-PRECIO-ASC").onclick = function() {
        
        fetch(PRODUCTS_URL)
            .then(info => info.json())         
            .then(data => {   
        
            data.sort(function (previous, next) {
                return parseInt(previous.cost) - parseInt(next.cost);
            })
            
            showProductsList(data);
        })
    }
    
    document.getElementById("ORDENAR-PRECIO-DESC").onclick = function() {
        
        fetch(PRODUCTS_URL)
            .then(info => info.json())         
            .then(data => {   

            data.sort(function (previous, next) {
                return parseInt(next.cost) - parseInt(previous.cost);
            })

            showProductsList(data);
        })
    }

    document.getElementById("ORDENAR-RELEV-DESC").onclick = function() {
        prodOrdenados = [];
        fetch(PRODUCTS_URL)
            .then(info => info.json())         
            .then(data => {   
      
            data.sort(function (previous, next) {
                    return parseInt(next.soldCount) - parseInt(previous.soldCount);
            })
            
            showProductsList(data);
        })
    }        




    // LIMPIAR FILTRO
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

 
