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


// OPEN CART

function openCart() {

  document.getElementById("cart")
    .classList.add("open");

  document.getElementById("overlay")
    .classList.add("show");

}


// CLOSE CART

function closeCart() {

  document.getElementById("cart")
    .classList.remove("open");

  document.getElementById("overlay")
    .classList.remove("show");

}


// FILTER PRODUCTS

function filterProducts(category) {

  const products =
    document.querySelectorAll(".product");


  products.forEach(product => {

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


// CHECKOUT

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