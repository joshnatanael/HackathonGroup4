const product = {
    1: {
        brand: "Nike",
        productName: "AS Men's Nike Sportswear Club Fleece Jogger FT",
        gambarUrl: "https://dynamic.zacdn.com/Rf-2Qht14cb4OnWPcEOf-w1dmEo=/fit-in/692x1000/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/nike-0377-3751142-2.jpg",
        harga: 679000
    },
    2: {
        brand: "Nike",
        productName: "AS Men's Sportswear Icon Futura T-Shirt",
        gambarUrl: "https://dynamic.zacdn.com/znq46QbA3G8q_6kGxwT2MHhaqPw=/fit-in/692x1000/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/nike-3846-0702142-1.jpg",
        harga: 399000
    },
    3: {
        brand: "Zara",
        productName: "Kemeja Basebal Tempelan",
        gambarUrl: "https://static.zara.net/photos///2022/I/0/2/p/2795/315/712/2/w/563/2795315712_6_1_1.jpg?ts=1661240343014",
        harga: 789900
    },
    4: {
        brand: "Vans",
        productName: "U Old Skool",
        gambarUrl: "https://dynamic.zacdn.com/CI4qSpM444-unbQ7qllbJ6dLPEM=/fit-in/692x1000/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/vans-8630-7725061-1.jpg",
        harga: 999000
    },
    5: {
        brand: "Birkenstock",
        productName: "Arizona Birko-Flor Sandals",
        gambarUrl: "https://dynamic.zacdn.com/n4zioJ_IwrqRAiQu5LHFd5ny_Ho=/fit-in/692x1000/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/birkenstock-5824-5499011-1.jpg",
        harga: 959200
    },
    6: {
        brand: "Adidas",
        productName: "adidas originals superstar",
        gambarUrl: "https://dynamic.zacdn.com/5fYs9nwejbxmguiGwzRdO4-7CWE=/fit-in/692x1000/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/adidas-6728-8354232-1.jpg",
        harga: 1190000

    },
    7: {
        brand: "Adidas",
        productName: "ultraboost 1.0 dna running sportswear lifestyle shoes",
        gambarUrl: "https://dynamic.zacdn.com/Q9WzZ_-tfijCToyUcTor6um88dI=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/adidas-7952-9728553-1.jpg",
        harga: 3300000
    },
    8: {
        brand: "Adidas",
        productName: "ultraboost 1.0 dna running sportswear lifestyle shoes",
        gambarUrl: "https://dynamic.zacdn.com/KVLkc-QwHIoAoba2DoqvjvslAFM=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/adidas-4268-3528553-1.jpg",
        harga: 3300000
    },
    9: {
        brand: "Zara",
        productName: "Kemeja Motif Gambar Cassette",
        gambarUrl: "https://static.zara.net/photos///2022/I/0/2/p/6085/346/250/2/w/563/6085346250_6_1_1.jpg?ts=1657875079123",
        harga: 799900
    },
    10: {
        brand: "Zara",
        productName: "Kemeja Oversize Aneka Motif Gambar",
        gambarUrl: "https://static.zara.net/photos///2022/I/0/2/p/2795/315/712/2/w/563/2795315712_6_1_1.jpg?ts=1661240343014",
        harga: 749900
    },
    11: {
        brand: "Nike",
        productName: "Nike Windrunner D.Y.E.",
        gambarUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cfba591e-d5a1-4525-8eb9-00cd6dd1d1dd/windrunner-dye-running-jacket-6p0DK1.png",
        harga: 1599000
    },
    12: {
        brand: "Nike",
        productName: "Nike ESC",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b45635f-09a0-490a-a389-997def4054a1/esc-lightweight-jacket-ZgMQFp.png",
        harga: 8390000
    },
    13: {
        brand: "Nike",
        productName: "Men's Woven Jacket",
        gambarUrl: "https://static.nike.com/a/images/w_640,c_limit/a721111e-e644-4296-acd0-38745b235fac/jordan-x-clot-apparel-collection-release-date.png",
        harga: 4199000
    },
    14: {
        brand: "Nike",
        productName: "Nike Storm-FIT x Stüssy",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2eb9e40c-14ce-4a92-9698-91c56e00e110/stussy-jacket-BBs5qN.png",
        harga: 2099000
    },
    15: {
        brand: "Nike",
        productName: "Nike Repel A.I.R. Hola Lou",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a1997f65-99d6-4153-9d8a-af9b26b69459/repel-air-hola-lou-running-windrunner-jacket-fPDxPd.png",
        harga: 1649000
    },
    16: {
        brand: "Nike",
        productName: "Nike Sportswear",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/693cfb49-6396-4b09-a7b4-edbbc23ed790/sportswear-lightweight-woven-jacket-1vh4kj.png",
        harga: 1079000
    },
    17: {
        brand: "Old Navy",
        productName: "Regular-Fit Everyday Non-Stretch Corduroy Shirt for Men",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/743/233/cn50743233.jpg",
        harga: 550000
    },
    18: {
        brand: "Old Navy",
        productName: "BAKIAK KULIT SUEDE",
        gambarUrl: "https://static.zara.net/photos///2022/I/1/2/p/2730/020/716/2/w/563/2730020716_6_2_1.jpg?ts=1665135280545",
        harga: 990900
    },
    19: {
        brand: "Old Navy",
        productName: "Star Wars™ Graphic Gender-Neutral T-Shirt for Adults",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/515/307/cn50515307.jpg",
        harga: 200000
    },
    20: {
        brand: "Old Navy",
        productName: "Mantel Polos",
        gambarUrl: "https://static.zara.net/photos///2022/I/0/2/p/3046/470/802/2/w/563/3046470802_6_1_1.jpg?ts=1665044055976",
        harga: 2299900
    }
}

const menSection = document.querySelector("#menProducts");

for (let keys in product) {
    menSection.innerHTML += `
    <div class="max-w-sm self-center product-click cursor-pointer">
        <img class="hover:scale-110 duration-300" src="${product[keys].gambarUrl}" alt="${product[keys].productName}">
        <div class="mt-5 flex flex-col gap-1">
            <h1 class="font-semibold">${product[keys].brand}</h1>
            <h1 class="font-bold">${product[keys].productName}</h1>
            <h1 class="font-light">Rp. ${product[keys].harga}</h1>
            <h6 style="display:none;">${keys}</h1>
        </div>
    </div>`
}

let cart = {};

const productClick = document.querySelectorAll(".product-click");
for (const productButton of productClick) {
    productButton.addEventListener("click", function () {
        console.log(productButton.querySelector("h6"));
        cart[productButton.querySelector("h6").innerText] = product[productButton.querySelector("h6").innerText];
        renderShoppingCart();
        renderTotal();
    })
}

const buttonCheckout = document.querySelector('#checkoutNavbar');
const fadeElems = document.querySelectorAll('.hidden');
const shoppingCart = document.querySelector('#shoppingCart')
const cartCloser = document.querySelector('#cartCloser');

buttonCheckout.addEventListener('click', function () {
    console.log('click hamburger');
    shoppingCart.removeAttribute('class')
    // if(fadeElems.classList.contains("hidden")){

    // }

});

cartCloser.addEventListener('click', function () {
    shoppingCart.setAttribute("class", "hidden");
})

let listShoppingCart = document.querySelector("#listShoppingCart");

function renderTotal() {
    let total = 0;
    for (let keys in cart) {
        total += cart[keys].harga;
    }
    document.querySelector("#subtotalAll").innerText = "Rp. " + total;
}


//Increment Button
// $(document).ready(function () {
//     const minus = $('.quantity__minus');
//     const plus = $('.quantity__plus');
//     const input = $('.quantity__input');
//     minus.click(function (e) {
//         e.preventDefault();
//         var value = input.val();
//         if (value > 1) {
//             value--;
//         }
//         input.val(value);
//     });

//     plus.click(function (e) {
//         e.preventDefault();
//         var value = input.val();
//         value++;
//         input.val(value);
//     })
// });

//
function renderShoppingCart() {
    listShoppingCart.innerHTML = "";
    for (let keys in cart) {
        listShoppingCart.innerHTML += `
        <li class="flex py-6">
            <div
                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src="${cart[keys].gambarUrl}"
                    alt="${cart[keys].productName}"
                    class="h-full w-full object-cover object-center">
            </div>
            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div
                        class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">${cart[keys].productName}</a>
                        </h3>
                        <p class="ml-4">${cart[keys].harga}</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Salmon</p>
                </div>
                
              </div>
                    <div class="flex">
                        <button type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                </div>
            </div>
        </li>`
    }
}

/*
<li class="flex py-6">
    <div
        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            class="h-full w-full object-cover object-center">
    </div>
    <div class="ml-4 flex flex-1 flex-col">
        <div>
            <div
                class="flex justify-between text-base font-medium text-gray-900">
                <h3>
                    <a href="#">Throwback Hip Bag</a>
                </h3>
                <p class="ml-4">$90.00</p>
            </div>
            <p class="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm">
            <p class="text-gray-500">Qty 1</p>
            <div class="flex">
                <button type="button"
                    class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
        </div>
    </div>
</li>
*/