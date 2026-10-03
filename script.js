// ========================================
// 🛍️ NAPSA PRODUCTS
// ========================================
// ONLY EDIT PRODUCTS HERE
// Change name, description, price, or category.
// ========================================

const products = [
  {
    name: "Core Logo Tee",
    description: "Oversized cotton T-shirt",
    price: 1499,
    category: "tshirt",
    color: "white",
    badge: "NEW"
  },

  {
    name: "Midnight Oversized Tee",
    description: "Heavyweight cotton",
    price: 1699,
    category: "tshirt",
    color: "black",
    badge: "BESTSELLER"
  },

  {
    name: "Stone Cargo Pants",
    description: "Relaxed fit cargo pants",
    price: 2899,
    category: "pants",
    color: "brown",
    badge: ""
  },

  {
    name: "Utility Wide Pants",
    description: "Wide fit everyday pants",
    price: 2699,
    category: "pants",
    color: "grey",
    badge: ""
  },

  {
    name: "Essential Black Tee",
    description: "Minimal everyday T-shirt",
    price: 1399,
    category: "tshirt",
    color: "black",
    badge: ""
  },

  {
    name: "Graphic Logo Tee",
    description: "Premium oversized fit",
    price: 6969696,
    category: "tshirt",
    color: "white",
    badge: ""
  },

  {
    name: "Washed Grey Pants",
    description: "Relaxed street fit",
    price: 2799,
    category: "pants",
    color: "grey",
    badge: ""
  },

  {
    name: "Sand Relaxed Pants",
    description: "Everyday relaxed fit",
    price: 2599,
    category: "pants",
    color: "brown",
    badge: ""
  }
];


// ========================================
// AUTOMATICALLY CREATE PRODUCTS
// ========================================

function displayProducts() {

  const container = document.getElementById("products");

  container.innerHTML = "";

  products.forEach((product, index) => {

    let clothing;

    if (product.category === "tshirt") {

      clothing = `
        <div class="fake-shirt ${product.color === "black" ? "white-shirt" : ""}">
          NAPSA
        </div>
      `;

    } else {

      clothing = `
        <div class="fake-pants ${product.color === "grey" ? "dark-pants" : ""}">
          NAPSA
        </div>
      `;

    }

    container.innerHTML += `

      <div class="product ${product.category}">

        <div class="product-img ${product.color}">

          ${
            product.badge
            ? `<span class="new">${product.badge}</span>`
            : ""
          }

          ${clothing}

        </div>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <strong>
          Rs. ${product.price.toLocaleString()}
        </strong>

        <button onclick="addProductToCart(${index})">
          ADD TO CART
        </button>

      </div>

    `;

  });

}


// ========================================
// ADD PRODUCT TO CART
// ========================================

function addProductToCart(index) {

  const product = products[index];

  addToCart(product.name, product.price);

}


// ========================================
// CART
// ========================================

let cart = [];


// ADD TO CART

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  openCart();

}


// UPDATE CART

function updateCart() {

  const cartItems = document.getElementById("cart-items");

  const count = document.getElementById("cart-count");

  const total = document.getElementById("total");


  count.innerText = cart.length;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p style="color:#777;text-align:center;margin-top:50px;">
        Your cart is empty.
      </p>
    `;

    total.innerText = "Rs. 0";

    return;

  }


  cartItems.innerHTML = "";

  let totalPrice = 0;


  cart.forEach((item, index) => {

    totalPrice += item.price;


    cartItems.innerHTML += `

      <div class="cart-item">

        <div>

          <h4>${item.name}</h4>

          <p>Rs. ${item.price.toLocaleString()}</p>

        </div>

        <button onclick="removeItem(${index})">
          REMOVE
        </button>

      </div>

    `;

  });


  total.innerText =
    "Rs. " + totalPrice.toLocaleString();

}


// REMOVE ITEM

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}


// ========================================
// CART OPEN / CLOSE
// ========================================

function openCart() {

  document.getElementById("cart")
    .classList.add("open");

  document.getElementById("overlay")
    .classList.add("show");

}


function closeCart() {

  document.getElementById("cart")
    .classList.remove("open");

  document.getElementById("overlay")
    .classList.remove("show");

}


// ========================================
// FILTER PRODUCTS
// ========================================

function filterProducts(category) {

  const productCards =
    document.querySelectorAll(".product");


  productCards.forEach(product => {

    if (
      category === "all" ||
      product.classList.contains(category)
    ) {

      product.style.display = "block";

    } else {

      product.style.display = "none";

    }

  });

}


// ========================================
// CHECKOUT
// ========================================

function checkout() {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;

  }


  alert(
    "Thank you for shopping with NAPSA! 🔥\n\n" +
    "This is a demo checkout."
  );

}


// ========================================
// LOAD PRODUCTS WHEN PAGE OPENS
// ========================================

displayProducts();
