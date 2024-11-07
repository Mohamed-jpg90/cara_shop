

let counetr = 0;

var cart_div = document.querySelector(".carts_products div");
let news = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    news.classList.add("loaded");
});

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

let say_welcome = document.querySelector("#mo3");
let username = localStorage.getItem("user name");
say_welcome.innerHTML = `Hallow   ${username}`;

let allProducts = document.querySelector('.products');
let products = [
    {
        id2: 1,
        titel: "Graphic Tees",
        price: 100,
        catigory: "Casual",
        image: "./image/products/f1.jpg"
    },
    {
        id2: 2,
        titel: "Classic Crew",
        price: 50,
        catigory: "Casual",
        image: "./image/products/f2.jpg"
    },
    {
        id2: 3,
        titel: "Vintage Vibes",
        price: 70,
        catigory: "Everyday",
        image: "./image/products/f3.jpg"
    },
    {
        id2: 4,
        titel: "Pocket Perfect",
        price: 45,
        catigory: "Basics",
        image: "./image/products/f4.jpg"
    },
    {
        id2: 5,
        titel: "Flannel Favorites",
        price: 84,
        catigory: "Everyday",
        image: "./image/products/f5.jpg"
    },
    {
        id2: 6,
        titel: "Statement Sleeves",
        price: 90,
        catigory: "Basics",
        image: "./image/products/f6.jpg"
    },
    {
        id2: 7,
        titel: "Essential Basics",
        price: 70,
        catigory: "Minimalist",
        image: "./image/products/f7.jpg"
    },
    {
        id2: 8,
        titel: "Henley Harmony",
        price: 90,
        catigory: "Layering",
        image: "./image/products/f8.jpg"
    },
    {
        id2: 9,
        titel: "Sporty Stripes",
        price: 400,
        catigory: "Minimalist",
        image: "./image/products/f9.jpg"
    }
];

// Render products
function dimond(products) {
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
                <button class="btn3 myButton" data-id="${item.id2}">
                    <i class="fa-solid fa-cart-shopping "></i>
                </button>
                <button class="btn2" >
                    <i class="fa-regular fa-heart favorat"  data-id="${item.id2}"></i>
                </button>
            </div>
        </div>
        `;
    }).join(' ');

    allProducts.innerHTML = y;
}
dimond(products);
// let favo_cart=[]


let searchBar_catigory=document.getElementById("searchBar_catigory")
searchBar_catigory.addEventListener("input", function() {
    let query = searchBar_catigory.value.toLowerCase();
    // console.log(query)
    let filteredProducts = products.filter(item => 
        item.catigory.toLowerCase().includes(query)
    );
    dimond(filteredProducts);
});
let searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("input", function() {
    let query = searchBar.value.toLowerCase();
    // console.log(query)
    let filteredProducts = products.filter(item => 
        item.titel.toLowerCase().includes(query)
    );
    dimond(filteredProducts);
});





let favo_cart = localStorage.getItem("favorateItem") ? JSON.parse(localStorage.getItem("favorateItem")) : []
if (favo_cart){

}
let favo = document.querySelectorAll(".favorat");
function hallow(event) {
    event.currentTarget.classList.toggle("fa-solid");
    event.currentTarget.classList.toggle("fa-regular"); 
    let id = parseInt(event.currentTarget.getAttribute('data-id'));
    let favorat_cart = products.find((item) => item.id2 === id);
        // carts_productsdiv.innerHTML += `<p>${favorat_cart.titel}</p> `;
        // favo_cart = [...favo_cart, favorat_cart]
       
        if (!favo_cart.some(item => item.id2 === id)) {
            favo_cart = [...favo_cart, favorat_cart];
        } else {
            favo_cart = favo_cart.filter(item => item.id2 !== id);
        }
        localStorage.setItem("favorateItem", JSON.stringify(favo_cart));
        // favo_cart.forEach(item => {
        //     console.log("Product ID:", item.id2);
        // });
        // console.log(favo_cart)

}
favo.forEach(item => {
    item.addEventListener("click", hallow);
});


let carts_products = document.querySelector(".carts_products");
let carts_productsdiv = document.querySelector(".carts_products div");
let over_cart = document.querySelector(".badge");
let alert_cart = document.querySelectorAll(".btn3");
let delete2 = document.querySelectorAll('.btn3 i')
let btn2 = document.querySelector(".btn2")
// let arr_broduct = [];

let arr_broduct = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []
if (arr_broduct) {
    arr_broduct.map((item) => {
        carts_productsdiv.innerHTML += `<p>${item.titel}</p> `;

    })
    // over_cart.style.display=""
    // alert_cart.style.display="none"
    over_cart.innerHTML += arr_broduct.length

}

// Update alert2 to get the data-id from button
function alert2(event) {
    if (localStorage.getItem("user name")) {
        counetr++;


        let id = parseInt(event.currentTarget.getAttribute('data-id')); // Get the product id from the button

        let cartProductsLength = document.querySelectorAll(".carts_products div p")

        let choosenItem = products.find((item) => item.id2 === id);
        // carts_productsdiv.innerHTML += `<p>${choosenItem.titel}</p> `;

        if (!arr_broduct.some(item => item.id2 === id)) {
            arr_broduct = [...arr_broduct, choosenItem]
            over_cart.innerHTML = cartProductsLength.length
            carts_productsdiv.innerHTML += `<p>${choosenItem.titel}</p> `;


        } else {
            // arr_broduct = arr_broduct.filter(item => item.id2 !== id);
            console.log("mohaed")
        }
        // arr_broduct = [...arr_broduct, choosenItem]
        localStorage.setItem("productsInCart", JSON.stringify(arr_broduct))

        this.style.display = "none"



    } else {
        alert("You don't have an account");
        window.location = "sighn.html";
    }
}

// Add click event listener for each cart button
alert_cart.forEach(item => {

    item.addEventListener("click", alert2);
});

let shopping_cart = document.querySelector(".shopping_cart");

function opencart() {
    if (carts_products.style.display == "block") {
        carts_products.style.display = "none";
    } else {
        carts_products.style.display = "block";
    }
}
shopping_cart.addEventListener("click", opencart);

