var productsArray = {};

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status == "ok") {
            productsArray = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCountHTML = document.getElementById("productCount");
                   
            productNameHTML.innerHTML = productsArray.name;
            productDescriptionHTML.innerHTML = productsArraydescription;
            productCostHTML.innerHTML = productsArray.cost;
            productCurrencyHTML.innerHTML = productsArray.currency;
            productCountHTML.innerHTML = productsArray.productCount;
            
            showProductList(productsArray);
        }
    })
});

var productsArray = [];

for (let i = 0; i < productsArray.length; i++){
    let productQ = productsArray[i];
    productQ = productQ + 1

    fecth(PRODUCTS_URL)
        .then(result => result.json())
        .then(data => {
            let name = data.name;
            let description = data.description;
            let cost = data.cost;
            let currency = data.currency;
            // let imgSrc = data.
            let soldCount = data.soldCount;
        
        
            let chevroletOnix = "";

            chevroletOnix += `
            <div class="table-row">
                <div class="table-data">` + name +`</div>
                <div class="table-data"> ${description} </div>
                <div class="table-data">` + cost +` </div>
                <div class="table-data"> ${currency} </div>
                <div class="table-data">` + soldCount` </div>;
                <div class="table-data"><img src=${imgUrl} id="img"></div>
            </div>`
        
        })



}