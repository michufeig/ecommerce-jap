
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status == "ok"){
            categoriesArray = resultObj.data;
            showProductList(categoriesArray);
        }
    }
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
            </div>
        
        })



}