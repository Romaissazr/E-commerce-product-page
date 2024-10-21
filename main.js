function increment() {
    const scoreInput = document.getElementById('score');
    let score = parseInt(scoreInput.textContent);
    scoreInput.textContent = score + 1;
}

function decrement() {
    const scoreInput = document.getElementById('score');
    let score = parseInt(scoreInput.textContent);
    if (score > 0) {
        scoreInput.textContent = score - 1;
    }
}

const mainImage = document.getElementById("main-img");

function changeImage(src ,event) {
    const secondaryImage = event.currentTarget;
    mainImage.src = src;
  

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((img) => {
        if (img.src === secondaryImage.src) {
            img.classList.add("selected");
        } else {
            img.classList.remove("selected");
        }
    });
//selected

   
}
const seCondimg = document.getElementById("second-img");

function changeImagesecend(src) {
   

   
    seCondimg.src = src;

 
    updateSelectedThumbnail();
}


function showCart() {
    let cart = document.getElementById('cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    
    
    } else {
        cart.style.display = 'block';
    }
}

function AddCart() {
    const scoreInput = document.getElementById("score");
    let score = parseInt(scoreInput.textContent);

    if (score > 0) {
        const mainImage = document.getElementById("main-img");
        const mainImageSrc = mainImage.src;
        const productNameElement = document.getElementsByTagName("h1")[0];
        const productNameText = productNameElement.textContent;

        const priceTextElement = document.getElementsByClassName("first")[0];
        const priceText = priceTextElement.textContent;

        let priceValue = parseFloat(priceText.slice(1));
        const itemsContainer = document.getElementsByClassName("iteems-container")[0];
        let existingProduct = null;

        const itemsList = document.getElementsByClassName("iteems");
        for (let i = 0; i < itemsList.length; i++) {
            const productTitle = itemsList[i].querySelector(".h3");
            const productImage = itemsList[i].querySelector(".mainImagecart");

            if (productTitle && productTitle.textContent === productNameText && productImage.src === mainImageSrc) {
                existingProduct = itemsList[i]; 
                break;
            }
        }

        if (existingProduct) {
            let currentQuantity = existingProduct.querySelector(".priceCart span:nth-child(3)");
            let newQuantity = score; 
            currentQuantity.textContent = newQuantity; 
            let newTotalPrice = priceValue * newQuantity; 
            existingProduct.querySelector(".somme").textContent = "$" + newTotalPrice.toFixed(2);
        } else {
            document.getElementById("btnn").style.display = "block"; 
            document.getElementById("p").style.display = "none"; 
            
            const items = document.createElement("div");
            items.className = "iteems";

            let mainImageCart = document.createElement("IMG");
            mainImageCart.src = mainImageSrc;
            mainImageCart.className = "mainImagecart";
            items.appendChild(mainImageCart);
            
            const info = document.createElement("div");
            info.className = "info";
            items.appendChild(info);

            let h3 = document.createElement("h3");
            h3.className = "h3";
            h3.innerText = productNameText;
            info.appendChild(h3);

            const priceCart = document.createElement("div");
            priceCart.className = "priceCart";
            info.appendChild(priceCart);

            let spanOne = document.createElement("span");
            spanOne.innerText = priceText;
            priceCart.appendChild(spanOne);

            let spanTwo = document.createElement("span");
            spanTwo.innerText = " x ";
            priceCart.appendChild(spanTwo);

            let spanThree = document.createElement("span");
            spanThree.innerText = score; 
            priceCart.appendChild(spanThree);

            let spanFour = document.createElement("span");
            spanFour.className = "somme";
            spanFour.innerText = "$" + (priceValue * score).toFixed(2); 
            priceCart.appendChild(spanFour);

            let deleteBtn = document.createElement("IMG");
            deleteBtn.src = "images/icon-delete.svg";
            deleteBtn.className = "delete";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.addEventListener("click", function () {
                itemsContainer.removeChild(items);
                
     
                if (itemsContainer.children.length-1 === 0) {
                    document.getElementById("btnn").style.display = "none"; 
                    document.getElementById("p").style.display = "block";  
                }

          
                calculateTotalQuantity();
            });
            items.appendChild(deleteBtn);

            itemsContainer.appendChild(items);
        }

        calculateTotalQuantity();
    }
   
}

function calculateTotalQuantity() {
    const quantitySpans = document.querySelectorAll(".priceCart span:nth-child(3)"); 
    let totalQuantity = 0;

    
    for (let i = 0; i < quantitySpans.length; i++) {
        totalQuantity += parseInt(quantitySpans[i].textContent); 
    }


    const iconcart = document.getElementsByClassName("iconcart")[0];
    let totalElement = iconcart.querySelector(".total");

 
    if (!totalElement) {
        totalElement = document.createElement("span");
        totalElement.className = "total";
        iconcart.appendChild(totalElement);
    }
    
    totalElement.innerText = totalQuantity; 

    if (totalQuantity === 0) { 
        totalElement.style.display = "none"; 
    } else {
        totalElement.style.display = "inline";
    }

    console.log(totalQuantity);
}
function showLightbox(){
    document.getElementById("lightbox").style.display="block"
}
function  closeLightbox(){
        document.getElementById("lightbox").style.display="none"
}
let currentIndex = 0; 
const images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
];

function nextImage() {
    let currentImage = document.getElementById("second-img");

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

    currentImage.src = images[currentIndex];

 
    updateSelectedThumbnail();
}

function prevImage() {
    let currentImage = document.getElementById("second-img");

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }


    currentImage.src = images[currentIndex];

    updateSelectedThumbnail();
}


function updateSelectedThumbnail() {
    const currentImage = document.getElementById("second-img").src;
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((img) => {
        if (img.src === currentImage) {
            img.classList.add("selected");
        } else {
            img.classList.remove("selected");
        }
    });
}

const div = document.getElementById("aside");

function moveDiv() {
    div.classList.add("move-right"); 
}
function moveDivBack() {
    div.classList.remove("move-right"); 
}
function nextPhoneImage() {
    let currentImage = document.getElementById("main-img");

   
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

   
    currentImage.src = images[currentIndex];

    console.log(currentImage.src); 
}
function prevPhoneIemage() {
    let currentImage = document.getElementById("main-img");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
// console.log("hello")
    currentImage.src = images[currentIndex];
} 