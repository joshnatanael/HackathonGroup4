let listShoppingCart = document.querySelector("#listShoppingCart");

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

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
    },

    // WOMEN SECTION
    21: {
        brand: "Old Navy",
        productName: "Long-Sleeve Plaid Flannel Boyfriend Tunic Shirt for Women",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/607/393/cn50607393.jpg",
        harga: 320000
    },
    22: {
        brand: "Old Navy",
        productName: "Cozy Plush-Yarn Cocoon Tunic Sweater for Women",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/585/771/cn50585771.jpg",
        harga: 459000
    },
    23: {
        brand: "Old Navy",
        productName: "Heathered Waffle-Knit Open-Front Cardigan for Women ",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/750/759/cn50750759.jpg",
        harga: 432900
    },
    24: {
        brand: "Old Navy",
        productName: "Uniform Pique Polo Shirt for Women ",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/328/656/cn50328656.jpg",
        harga: 150000
    },
    25: {
        brand: "Old Navy",
        productName: "Oversized Boyfriend Garment-Dyed Tunic Sweatshirt for Women",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/855/331/cn50855331.jpg",
        harga: 400000
    },
    26: {
        brand: "Nike",
        productName: "Nike Sportswear Phoenix Fleece",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c5bb7ee-69c6-4ce2-b4c3-66ec08e98167/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png",
        harga: 899000

    },
    27: {
        brand: "Nike",
        productName: "Nike Sportswear Phoenix Fleece Women's Over-Oversized Pullover Hoodie",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39d041a0-9c0d-4327-b080-210b04b28ef6/sportswear-phoenix-fleece-over-oversized-pullover-hoodie-s4mSXr.png",
        harga: 949000
    },
    28: {
        brand: "Nike",
        productName: "Nike Sportswear Women's T-Shirt (Plus Size)",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7e8fb2b2-2386-4052-a10c-c7ca365baa98/sportswear-t-shirt-kQ3fXF.png",
        harga: 349000
    },
    29: {
        brand: "Nike",
        productName: "Nike Swoosh Fly Women's Boxy Long-Sleeve T-Shirt",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/11b252dd-87c9-4ee2-8a3e-49d31c58871d/swoosh-fly-boxy-long-sleeve-t-shirt-dHvtdw.png",
        harga: 429000
    },
    30: {
        brand: "Nike",
        productName: "Nike Sportswear Icon Clash Women's Short-Sleeve Tie Top",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e42dbedf-8a3a-4f94-be8d-eef8567e4423/sportswear-icon-clash-short-sleeve-tie-top-GdbMh0.png",
        harga: 559000
    },
    31: {
        brand: "Hush Puppies",
        productName: "DC RIANDA IN BROWN",
        gambarUrl: "https://www.hushpuppies.co.id/media/catalog/product/cache/c1e792f8b86561bd65194f05e9ff9cd0/l/a/la23111br-brown-1.jpg",
        harga: 229000
    },
    32: {
        brand: "Hush Puppies",
        productName: "WINDA IN NAVY",
        gambarUrl: "https://www.hushpuppies.co.id/media/catalog/product/cache/c1e792f8b86561bd65194f05e9ff9cd0/l/a/la22377nv-navy-1.jpg",
        harga: 449000
    },
    33: {
        brand: "Hush Puppies",
        productName: "HUSH PUPPIES PAKAIAN POLO WANITA ARUSHA IN MUSTARD",
        gambarUrl: "https://www.hushpuppies.co.id/media/catalog/product/cache/c1e792f8b86561bd65194f05e9ff9cd0/l/a/la22406md-mustard-1.jpg",
        harga: 200000
    },
    34: {
        brand: "Hush Puppies",
        productName: "ILONA IN NAVY/WHITE",
        gambarUrl: "https://www.hushpuppies.co.id/media/catalog/product/cache/c1e792f8b86561bd65194f05e9ff9cd0/l/a/la21435nv-1.jpg",
        harga: 150000
    },
    35: {
        brand: "Hush Puppies",
        productName: "ARDITH IN PINK",
        gambarUrl: "https://www.hushpuppies.co.id/media/catalog/product/cache/c1e792f8b86561bd65194f05e9ff9cd0/l/a/la21434pk-1.jpg",
        harga: 150000
    },
    36: {
        brand: "Giodarno",
        productName: "Women's Embroidery Pique Polo Shirt",
        gambarUrl: "https://images.giordano.com/productphoto/13311003001/95_2_0_3_0620_0620.jpg",
        harga: 250000
    },
    37: {
        brand: "Giodarno",
        productName: "Rainbow button slim stretchy polo shirt",
        gambarUrl: "https://images.giordano.com/productphoto/05311388001/94_2_0_3_0620_0620.jpg",
        harga: 250000
    },
    38: {
        brand: "Giodarno",
        productName: "Solid color lotus edge short polo shirt",
        gambarUrl: "https://images.giordano.com/productphoto/18311011001/03_2_0_3_0620_0620.jpg",
        harga: 350000
    },
    39: {
        brand: "Giodarno",
        productName: "Double pockets long sleeve denim shirt",
        gambarUrl: "https://images.giordano.com/productphoto/18342002001/52_2_0_3_0620_0620.jpg",
        harga: 1000000
    },
    40: {
        brand: "Giodarno",
        productName: "Stripe double vents long-sleeve tee",
        gambarUrl: "https://images.giordano.com/productphoto/13321802001/04_2_0_3_0620_0620.jpg",
        harga: 150000
    },
    41: {
        brand: "Old Navy",
        productName: "Printed Microfleece Pajama Top & Pajama Joggers Set for Girls",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0020/688/273/cn20688273.jpg",
        harga: 250000
    },
    42: {
        brand: "Old Navy",
        productName: "Vintage Slouchy Graphic Raw-Edged Hoodie for Girls",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/851/338/cn50851338.jpg",
        harga: 250000
    },
    43: {
        brand: "Old Navy",
        productName: "Plaid Flannel Utility Pocket Shirt for Boys",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/645/889/cn50645889.jpg",
        harga: 120000
    },
    44: {
        brand: "Old Navy",
        productName: "Techie Fleece Tapered Sweatpants for Boys",
        gambarUrl: "https://oldnavy.gap.com/webcontent/0050/589/079/cn50589079.jpg",
        harga: 800000
    },
    45: {
        brand: "Nike",
        productName: "Nike Sportswear Older Kids' (Boys') T-Shirt",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e5f3099-09e2-44fd-b4a5-30198976ed15/sportswear-older-t-shirt-5Vdq4h.png",
        harga: 260000
    },
    46: {
        brand: "Nike",
        productName: "Nike Dri-FIT Legend Older Kids' (Girls') T-Shirt",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c4f14f8a-d8bb-4ec2-93dc-7b21627fdf0e/dri-fit-legend-older-t-shirt-3RdsJ5.png",
        harga: 160000

    },
    47: {
        brand: "Nike",
        productName: "Nike Blazer Mid '77 D Older Kids' Shoes",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/848bcf22-b9f6-4e08-9df4-368edb07cd93/blazer-mid-77-d-older-shoes-1Cv7jt.png",
        harga: 300000
    },
    48: {
        brand: "Nike",
        productName: "Nike Flex PlusOlder Kids' Road Running Shoes",
        gambarUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e60832f1-da08-426b-bf9a-77de3b3ecd77/flex-plus-older-road-running-shoes-mwbkdj.png",
        harga: 200000
    },
    49: {
        brand: "Adidas",
        productName: "HOODIE ADIDAS X DISNEY MICKEY MOUSE (BOYS)",
        gambarUrl: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/k/hk4695_2_apparel_photography_front_center_view_grey.jpg",
        harga: 700000
    },
    50: {
        brand: "Adidas",
        productName: "SEPATU HARDEN STEPBACK 3",
        gambarUrl: "https://www.adidas.co.id/media/catalog/product/cache/ffbe5d912e2813a20bb27461a01c1e7c/g/w/gw6578_sl_ecom.jpg",
        harga: 700000
    },
    51: {
        brand: "Adidas",
        productName: "SEPATU ADIDAS X DISNEY SURU365 MUPPET KERMIT SLIP-ON",
        gambarUrl: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/g/y/gy6679_sl_ecom.jpg",
        harga: 800000
    },
    52: {
        brand: "Adidas",
        productName: "HOODIE ADIDAS X DISNEY MICKEY MOUSE (GIRLS)",
        gambarUrl: "https://www.adidas.co.id/media/catalog/product/cache/ffbe5d912e2813a20bb27461a01c1e7c/h/k/hk6661_2_apparel_photography_front_center_view_grey.jpg",
        harga: 700000
    },
    53: {
        brand: "Puma",
        productName: "Puma Kids Fruits BB Unisex Caps - Blue",
        gambarUrl: "https://www.planetsports.asia/media/catalog/product/cache/932b880b51303ef8bdfacfab1d810ff5/0/1/01-PUMA-E04HPPMA0-PMA023700-01-Blue.jpg",
        harga: 200000
    },
    54: {
        brand: "Puma",
        productName: "PUMA X SW Boys Tee - Black",
        gambarUrl: "https://www.planetsports.asia/media/catalog/product/cache/932b880b51303ef8bdfacfab1d810ff5/0/1/01-PUMA-AYAV6PMA0-PMA846970-43-Black.jpg",
        harga: 240000
    },
    55: {
        brand: "Puma",
        productName: "Puma PUMA X SW Boys Sweatpants TR Cl - Black",
        gambarUrl: "https://www.planetsports.asia/media/catalog/product/cache/932b880b51303ef8bdfacfab1d810ff5/0/1/01-PUMA-AYAPNPMA0-PMA846973-01-Black.jpg",
        harga: 730000
    },
    56: {
        brand: "Puma",
        productName: "Puma ESS+ 2 Col Logo Boys Tee - Black",
        gambarUrl: "https://www.planetsports.asia/media/catalog/product/cache/932b880b51303ef8bdfacfab1d810ff5/0/1/01-PUMA-AYAV6PMA0-PMA586985-97-Black.jpg",
        harga: 239000
    },
    57: {
        brand: "Reebok",
        productName: "Question Mid Basketball Shoes - Grade School",
        gambarUrl: "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca469f6fa1214a99bf05aef500f418c3_9366/Question_Mid_Basketball_Shoes_-_Grade_School_Orange_HP3005_01_standard.jpg",
        harga: 750000
    },
    58: {
        brand: "Reebok",
        productName: "Weebok Storm X Shoes - Toddler",
        gambarUrl: "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6fa434d5f84d4fd39072ae36009d3db4_9366/Weebok_Storm_X_Shoes_-_Toddler_Black_GV8555_01_standard.jpg",
        harga: 500000
    },
    59: {
        brand: "Reebok",
        productName: "Zig Dynamica 2 Shoes - Grade School",
        gambarUrl: "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf1b4a2b47e247e38cc6adbf00b7f963_9366/Zig_Dynamica_2_Shoes_-_Grade_School_Grey_GY6867_01_standard.jpg",
        harga: 700000
    },
    60: {
        brand: "Reebok",
        productName: "Classic Leather Shoes - Toddler",
        gambarUrl: "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b1024a6352174cd8adb6aedd013b34c7_9366/Classic_Leather_Shoes_-_Toddler_Pink_HQ3906_01_standard.jpg",
        harga: 450000
    }
}

const menSection = document.querySelector("#menProducts");
const kidsSection = document.querySelector("#kidProducts");
const womanSection = document.querySelector("#womanProducts");
let category;
for (let keys in product) {
    if (Number(keys) > 40) {
        category = kidsSection;
    }
    else if (Number(keys) > 20) {
        category = womanSection;
    }
    else {
        category = menSection;
    }
    let hargaString="";
    for(let i=0;i<String(product[keys].harga).length%3;i++){
        hargaString+=String(product[keys].harga)[i]
    }
    let counter=3;
    if(!hargaString){
        counter=0;
    }
    for(let i=String(product[keys].harga).length%3;i<String(product[keys].harga).length;i++){
        if(counter===3){
            hargaString+=".";
            counter=0;
        }
        counter++;
        hargaString+=String(product[keys].harga)[i]
    }
    category.innerHTML += `
    <div class="max-w-sm self-center product-click ">
    <div class="img-container active:-translate-y-6 duration-300 cursor-pointer w-[278px] h-[400px]">
        <img class="hover:scale-110 duration-300 w-full h-full object-cover" src="${product[keys].gambarUrl}" alt="${product[keys].productName}">
        </div>
        <div class="mt-7 flex flex-col gap-1">
            <h1 class="font-bold text-xl">${product[keys].brand}</h1>
            <h1 class="text-sm">${product[keys].productName}</h1>
            <h1 class="font-light text-xl tracking-wider">Rp. ${hargaString}</h1>
            <h6 style="display:none;">${keys}</h6>
        </div>
    </div>`
}
// EndSection

let cart = {};

const productClick = document.querySelectorAll(".product-click");
for (const productButton of productClick) {
    productButton.addEventListener("click", function () {
        if (!cart[productButton.querySelector("h6").innerText]) {
            cart[productButton.querySelector("h6").innerText] = product[productButton.querySelector("h6").innerText];
            cart[productButton.querySelector("h6").innerText].qty = 0;
        }
        cart[productButton.querySelector("h6").innerText].qty++;
        renderShoppingCart();
        renderTotal();
    })
}

const buttonCheckout = document.querySelector('#checkoutNavbar');
const fadeElems = document.querySelectorAll('.hidden');
const shoppingCart = document.querySelector('#shoppingCart')
const cartCloser = document.querySelector('#cartCloser');
const cartOpener = document.querySelector('.shoppingCartOpener')

const closingTheCart = document.getElementById('closingTheCart')
const hidden = document.querySelectorAll('.has-fade')


buttonCheckout.addEventListener('click', function () {
    if(shoppingCart.classList.contains('has-fade')){
        shoppingCart.classList.remove('has-fade')
        hidden.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
    else{
        shoppingCart.classList.add('has-fade')
        hidden.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in')
        })
    }

    // if(fadeElems.classList.contains("hidden")){

    // }

});
cartCloser.addEventListener('click', function () {
    // shoppingCart.setAttribute("class", "hidden");
    if(shoppingCart.classList.contains('fade-in')){
        shoppingCart.classList.remove('fade-in')
        shoppingCart.classList.add('has-fade')
        hidden.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
})
closingTheCart.addEventListener('click', function () {
    if(shoppingCart.classList.contains('fade-in')){
        shoppingCart.classList.remove('fade-in')
        shoppingCart.classList.add('has-fade')
        hidden.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
})
cartOpener.addEventListener('click', function () {
    if(shoppingCart.classList.contains('has-fade')){
        shoppingCart.classList.remove('has-fade')
        hidden.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
    else{
        shoppingCart.classList.add('has-fade')
        hidden.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in')
        })
    }
})






function renderTotal() {
    let total = 0;
    for (let keys in cart) {
            total += cart[keys].harga * cart[keys].qty;
        }
    let totalString="";
    for(let i=0;i<String(total).length%3;i++){
        totalString+=String(total)[i]
    }
    let counter=3;
    if(!totalString){
        counter=0;
    }
    for(let i=String(total).length%3;i<String(total).length;i++){
        if(counter===3){
            totalString+=".";
            counter=0;
        }
        counter++;
        totalString+=String(total)[i]
    }
    document.querySelector("#subtotalAll").innerText = "Rp. " + totalString;
}

//
function renderShoppingCart() {
    listShoppingCart.innerHTML = "";
    for (let keys in cart) {
        if (cart[keys].qty === 0) {
            delete keys;
        }
        else {
            let hargaString="";
            for(let i=0;i<String(cart[keys].harga).length%3;i++){
                hargaString+=String(cart[keys].harga)[i]
            }
            let counter=3;
            if(!hargaString){
                counter=0;
            }
            for(let i=String(cart[keys].harga).length%3;i<String(cart[keys].harga).length;i++){
                if(counter===3){
                    hargaString+=".";
                    counter=0;
                }
                counter++;
                hargaString+=String(cart[keys].harga)[i]
            }
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
                                <a>${cart[keys].productName}</a>
                            </h3>
                            <p class="ml-4">Rp. ${hargaString}</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                    <div class="quantity mt-1">
                    <a class="quantity__minus" onclick="decrement(${keys})"><span>-</span><h6 style="display:none;">${keys}</h6></a>
                    
                    <h1 class="px-5" id="qty${keys}" qty>${cart[keys].qty}</h1>
                    

                    <a class="quantity__plus" onclick="increment(${keys})"><span>+</span><h6 style="display:none;">${keys}</h6></a>
                    
                  </div>
                        <div class="flex">
                            <button type="button"
                                class="font-medium text-indigo-600 hover:text-indigo-500 removeButton" onclick="remove(${keys})">Remove</button>
                        </div>
                    </div>
                </div>
            </li>`;
        }
    }
}

function increment(keys) {
    cart[keys].qty++;
    renderShoppingCart();
    renderTotal();
}

function decrement(keys) {
    cart[keys].qty--;
    renderShoppingCart();
    renderTotal();
}

function remove(keys) {
    cart[keys].qty = 0;
    renderShoppingCart();
    renderTotal();
}

let newEmail = []
function sendEmail(){
    // console.log("bisaa")
    let input = document.getElementsByName("member[]");

    console.log('List Member')
    for (let i = 0; i < input.length; i++) {
        let a = input[i];
        newEmail.push(`${newEmail.length + 1}: ${a.value}`);
    }
    
    console.log(newEmail)
}
