// var product = {};

// 
var currentCategoriesArray = [];

function showCategoriesList() {

    let htmlContentToAppend = "";

    for (let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];
        // productQ = productQ + 1

        // fecth(PRODUCTS_URL)
        //     .then(result => result.json())
        //     .then(data => {
        //         let name = data.name;
        //         let description = data.description;
        //         let cost = data.cost;
        //         let currency = data.currency;
        //         // let imgSrc = data.
        //         let soldCount = data.soldCount;
        
        
        //         let chevroletOnix = "";

                htmlContentToAppend += `
                <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ category.name +`</h4>
                            <small class="text-muted">` + category.productCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + category.description + `</p>
                    </div>
                </div>
            </a>
            `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;


            //    `<div class="table-row">
            //         <div class="table-data">` + name +`</div>
            //         <div class="table-data"> ${description} </div>
            //         <div class="table-data">` + cost +` </div>
            //         <div class="table-data"> ${currency} </div>
            //         <div class="table-data">` + soldCount` </div>;
            //         <div class="table-data"><img src=${imgUrl} id="img"></div>
            //     </div>`
        
        

    }

}

document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(CATEGORIES_URL).then(function(resultObj){
            if (resultObj.status == "ok") {
                showCategoriesList();
            }
        }
    
                // product = resultObj.data;
    
                // let productNameHTML  = document.getElementById("productName");
                // let productDescriptionHTML = document.getElementById("productDescription");
                // let productCostHTML = document.getElementById("productCost");
                // let productCurrencyHTML = document.getElementById("productCurrency");
                // let productCountHTML = document.getElementById("productCount");
                       
                // productNameHTML.innerHTML = product.name;
                // productDescriptionHTML.innerHTML = product.description;
                // productCostHTML.innerHTML = product.cost;
                // productCurrencyHTML.innerHTML = product.currency;
                // productCountHTML.innerHTML = product.productCount;    