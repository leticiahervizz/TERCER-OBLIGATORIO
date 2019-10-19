let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){

}

function updateSubtotal(){
    
    let cant= parseInt(document.getElementById("count").value);
    let precioUnit = parseInt(document.getElementById("costoU").textContent);
    let subTotal = precioUnit * cant; 
    
    document.getElementById("subTotal").innerHTML = subTotal;
       
}


function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

function showArticles(arrayArticles){
    let contenido= "";
    for(let i = 0; i < arrayArticles.length; i++){
        let articles = arrayArticles[i];
        
     contenido += `
     <tr>
        <td> `+ articles.name +` </td>
        <td> <input type="number" value=`+ articles.count +` id="count" min="0"></td>
        <td> <span id="costoU"> `+ articles.unitCost +` </span></td>
        <td> ` + articles.currency + `</td>
        <td> <img src="` + articles.src + `"width= "50px"> </td>
        <td> <span id="subTotal"></td>
     </tr>
     `
      document.getElementById ("productsTable").innerHTML=contenido;
      updateSubtotal ();
      document.getElementById("count").addEventListener("change", function(){
      updateSubtotal(); })
    } 
}  

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            products = resultObj.data;
            showArticles(products.articles);
        }
    });
});