
function showProductsList(currentProductsArray) {

    let htmlContentToAppend = "";

    for (let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];         

                htmlContentToAppend += `
                <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                            
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                    </div>
                    <div class="row">
                        <div class="col">
                            <small class="text-muted">` + product.currency +` `+ product.cost  + `</small>
                        </div>
                    </div>
                </div>
                </div>
            `
        document.getElementById("listaProductos").innerHTML = htmlContentToAppend;            
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status == "ok") {
                list_products = resultObj.data
                showProductsList(list_products);
            }
        })
});    