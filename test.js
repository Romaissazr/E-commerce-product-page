function increment() {
  const scoreInput = document.getElementById("score");
  let score = parseInt(scoreInput.textContent);
  scoreInput.textContent = score + 1;
}

function decrement() {
  const scoreInput = document.getElementById("score");
  let score = parseInt(scoreInput.textContent);
  if (score > 0) {
    // Ensure the textContent doesn't go below 0
    scoreInput.textContent = score - 1;
  }
}

const mainImage = document.getElementById("main-img");
function changeImage(src) {
  mainImage.src = src;
}

function showCart() {
  const cart = document.getElementById("cart");
  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
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
      if (productTitle && productTitle.textContent === productNameText) {
        // Check if productTitle exists
        existingProduct = itemsList[i];
        break;
      }
    }

    if (existingProduct) {
      // Update existing product's quantity and price
      let currentQuantityElement = existingProduct.querySelector(".priceCart span:nth-child(3)");
      let currentQuantity = parseInt(currentQuantityElement.textContent) + score; // Update quantity
      currentQuantityElement.textContent = currentQuantity; // Update the displayed quantity

      // Calculate new total price
      let newTotalPrice = priceValue * currentQuantity;
      existingProduct.querySelector(".somme").textContent = "$" + newTotalPrice.toFixed(2);
    } else {
      // Hide the empty cart message when the first product is added
      document.getElementById("p").style.display = "none";

      const items = document.createElement("div"); // Create a new item container
      items.className = "iteems"; // Set the class name for the item

      // Add product img
      let mainImageCart = document.createElement("IMG");
      mainImageCart.src = mainImageSrc;
      mainImageCart.className = "mainImagecart";
      items.appendChild(mainImageCart);
      
      const info = document.createElement("div");
      info.className = "info";
      items.appendChild(info);

      // Add product title
      let h3 = document.createElement("h3");
      h3.className = "h3";
      h3.innerText = productNameText;
      info.appendChild(h3);

      // Add price and quantity div
      const priceCart = document.createElement("div");
      priceCart.className = "priceCart";
      info.appendChild(priceCart);

      // Price span
      let spanOne = document.createElement("span");
      spanOne.innerText = priceText;
      priceCart.appendChild(spanOne);

      // "x" span
      let spanTwo = document.createElement("span");
      spanTwo.innerText = " x ";
      priceCart.appendChild(spanTwo);

      // Quantity span
      let spanThree = document.createElement("span");
      spanThree.innerText = score; // Add the quantity here
      priceCart.appendChild(spanThree);

      // Total price span
      let spanFour = document.createElement("span");
      spanFour.className = "somme";
      spanFour.innerText = "$" + (priceValue * score).toFixed(2); // Calculate total price
      priceCart.appendChild(spanFour);

      // Add delete button
      let deleteBtn = document.createElement("IMG");
      deleteBtn.src = "images/icon-delete.svg";
      deleteBtn.className = "delete";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.addEventListener("click", function () {
        itemsContainer.removeChild(items);
        // Check if there are no items left and show empty cart message
        if (document.getElementsByClassName("iteems").length === 0) {
          document.getElementById("btnn").style.display = "none";
          document.getElementById("p").style.display = "block";  // Show empty cart message
        }
      });
      items.appendChild(deleteBtn);

      // Append the new item to the cart
      itemsContainer.appendChild(items);
    }
  }
 
}
function calculateTotalQuantity() {
    const quantitySpans = document.querySelectorAll(".priceCart span:nth-child(3)"); // Select all quantity spans
    let totalQuantity = 0;

    quantitySpans.forEach(span => {
        totalQuantity += parseInt(span.textContent); // Convert text content to integer and add to total
    });

    return totalQuantity; // Return the total quantity
}
console.log(calculateTotalQuantity());
