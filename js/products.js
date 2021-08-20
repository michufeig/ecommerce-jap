// fetch
document.addEventListener("DOMContentLoaded", function(e){
    
        for(let i = 0; i < data.length; i++){
            let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";

            fetch(url)
                .then(info => info.json())         //pone en variable info q toma de la url, convierto la var en json, llamo a esto data
                .then(data => {
                    console.log(data.name);    
                    let nombre = data.name;
                    let descripcion = data.description;
                    let costo = data.cost;
                    let moneda = data.currency;
                    let imagen = data.imgSrc
                    let cantidadVendida = data.soldCount;

                    document.getElementsByClassName("list-group-item list-group-item-action").innerHTML += `
                        <div class="row">
                            <div class="col-3"> nombre` + nombre + `</div>
                            <div class="col-3"> descripcion` + descripcion + `</div>
                            <div class="col-3"> costo` + costo + `</div>
                            <div class="col-3"> moneda` + moneda + `</div>
                            <div class="col-3"> imagen` + imagen + `</div>
                            <div class="col-3"> nombre` + cantidadVendida + `</div>
                        </div>
                    `
                })    
        }
});         
         







            // let i = 0;

            // while(i < data.results.length){             //menor a cantidad de peliculas - results

            //     let film = data.results[i];     //para no repetir en todos los renglones la chorrera, lo guardo en var. film

            //     let titulo = film.title;     //entro dentro del array a results, y a la posicion 0 (films), y dentro de eso a title
            //     let director = film.director;
            //     let fecha = film.release_date;
            //     let cantPersonajes = film.characters.length;  // porq quiero la cantidad (Characters es una lista)
            //     let cantPlanetas = film.planets.lenght;          
                
            //                                       //<div class="table-content" id="eldelatabla"> </div>               
            //     document.getElementById("eldelatabla").innerHTML += `    
            //         <div class="table-row">
            //             <div class="table-data">titulo` + titulo + `</div>
            //             <div class="table-data">titulo` + director + `</div>
            //             <div class="table-data">titulo` + fecha + `</div>
            //             <div class="table-data">titulo` + cantPersonajes + `</div>
            //             <div class="table-data">titulo` + cantPlanetas + `</div>
            //         </div>
            //     `    
            //                                            //trae el div de la tabla
            //     i = i + 1
            // }
//         })
// });
//hago tabla en html, aca tengo q acceder a los datos y ponerlos en variables

