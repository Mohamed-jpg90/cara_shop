let rooe=1


let old_nave = document.querySelector("#mo");
let new_nave = document.querySelector("#links2");

if (localStorage.getItem("user name")) {
    old_nave.style.display = "none";
    new_nave.style.display = "flex";
}

let logout = document.querySelector("#logout");

function out2() {
    localStorage.clear();
    window.location = "index.html";
}
logout.addEventListener("click", out2);
/////////////////////////////////////////////////////////////////////


let allProducts = document.querySelector('.products');
let favorate_products= document.querySelector('.favorate')

let productsInCart = localStorage.getItem("productsInCart")

let favorate_items= localStorage.getItem("favorateItem")
if (favorate_items){
    let zero = JSON.parse(favorate_items)
    draw_favorate_item(zero)
    console.log(localStorage.getItem("favorateItem"))
}
if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartesproducts(item)
    console.log(localStorage.getItem("productsInCart"))

}
function drawCartesproducts(products) {
    let y = products.map((item) => {
        return `
         <div class="content_sec2 col-10 col-md-4 mt-3 mx-auto">
            <img src="${item.image}" alt="" width="257">
            <br><br>
            <p style="color: rgb(143, 143, 143); font-size: 12px;">adidos</p>
            <div class="thes">
                <p class="fs-5 "> ${item.titel} </p>
            </div>
            <div class="sill">
                <p class="fs-5"> <span style="color: black;">catigory:</span> ${item.catigory} </p>
                <span style="font-size: 23px;"> <span style="color: black;">price:</span> ${item.price}$</span>
            </div>
            <div class="sil">
                <button class="btn3 btn4 btn5"  data-id="${item.id2}">
                    <i class="fa-solid fa-trash" data-id="${item.id2}"></i>
                </button>
                    <button class="btn3 btn4 plus"  data-id="${item.id2}">
               <i class="fa-solid fa-plus"></i>
                </button>
                    <button class="btn3 btn4 minus"  data-id="${item.id2}">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                <button class="btn3 btn4" data-id="${item.id2}">
                    <span class="num" data-id="${item.id2}">${item.quantity || 1}</span>
                </button>
                 

            </div>
        </div>
        `;
    }).join(' ');

    allProducts.innerHTML = y;
}




/////////////////////////////////////////////
function draw_favorate_item(zero) {
    let y = zero.map((item) => {
        return `
         <div class="content_sec2 col-10 col-md-4 mt-3 mx-auto">
            <img src="${item.image}" alt="" width="257">
            <br><br>
            <p style="color: rgb(143, 143, 143); font-size: 12px;">adidos</p>
            <div class="thes">
                <p class="fs-5 "> ${item.titel} </p>
            </div>
            <div class="sill">
                <p class="fs-5"> <span style="color: black;">catigory:</span> ${item.catigory} </p>
                <span style="font-size: 23px;"> <span style="color: black;">price:</span> ${item.price}$</span>
            </div>
            <div class="sil">
                <button class="btn3 btn4 btn6"  data-id="${item.id2}">
                    <i class="fa-solid fa-trash" data-id="${item.id2}"></i>
                </button>
                 

            </div>
        </div>
        `;
    }).join(' ');

    favorate_products.innerHTML = y;
}
/////////////////////////////////////////////////

let num = document.querySelectorAll(".num")
let minus =document.querySelectorAll(".minus")
let plus =document.querySelectorAll(".plus")
// num.innerHTML=rooe
// function plus4(){
//     rooe++
//     num.forEach((nums) => nums.innerHTML = rooe);
// }
// plus.forEach((item) => {
//     item.addEventListener("click", plus4);
// });

function plus4(event) {
    let id = parseInt(event.currentTarget.getAttribute('data-id'));
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    let product = productsInCart.find(item => item.id2 === id);
    product.quantity = (product.quantity||1) + 1;
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    drawCartesproducts(productsInCart);
    window.location="cartsproducts.html"
}
plus.forEach((item)=>
{
    item.addEventListener("click",plus4)
})

function minus4(event){
        let id = parseInt(event.currentTarget.getAttribute('data-id'));
        let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
        var product = productsInCart.find(item => item.id2 === id); 
         product.quantity = (product.quantity) - 1;
    if (product.quantity > 0) {

      
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
        drawCartesproducts(productsInCart);
        window.location="cartsproducts.html"
    } else {
        alert("do you want to remove this item");
       
    }
}


minus.forEach((item) => {
    item.addEventListener("click", minus4);
});

let trash= document.querySelectorAll(".btn5")
let trash2=document.querySelectorAll(".btn6")
function remove(event){

    let id = parseInt(event.currentTarget.getAttribute('data-id'));

    // Remove item from cart
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart")) ;
    let updatedProducts = productsInCart.filter((item) => item.id2 !== id);
    localStorage.setItem("productsInCart", JSON.stringify(updatedProducts));
    drawCartesproducts(updatedProducts);
window.location="cartsproducts.html"

}



trash.forEach(item => {
    item.addEventListener("click",remove)
});


function  remove2 (event){
        // Remove item from favorites
    let id = parseInt(event.currentTarget.getAttribute('data-id'));

    let remove_favorate_item = JSON.parse(localStorage.getItem("favorateItem")) ;
    let Update_favorate_item = remove_favorate_item.filter((item) => item.id2 !== id);
    localStorage.setItem("favorateItem", JSON.stringify(Update_favorate_item));
    draw_favorate_item(Update_favorate_item);
    window.location="cartsproducts.html"

}
trash2.forEach(item => {
    item.addEventListener("click",remove2)
});

