let cart = [];

// Add Product to Cart

function addToCart(name, price) {
  let product = {
    name: name,
    price: price,
  };

  cart.push(product);

  displayCart();

  alert(name + " added to cart!");
}

// Display Cart

function displayCart() {
  let cartItems = document.getElementById("cartItems");

  let cartCount = document.getElementById("cartCount");

  let total = document.getElementById("total");

  cartItems.innerHTML = "";

  let totalPrice = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  }

  cart.forEach(function (product, index) {
    totalPrice = totalPrice + product.price;

    let item = document.createElement("div");

    item.className = "cart-item";

    item.innerHTML = `
            <span>
                ${product.name} - ₹${product.price}
            </span>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

    cartItems.appendChild(item);
  });

  cartCount.innerText = cart.length;

  total.innerText = totalPrice;
}

// Remove Product

function removeFromCart(index) {
  cart.splice(index, 1);

  displayCart();
}

// Search Product

document.getElementById("searchBox").addEventListener("keyup", function () {
  let searchValue = this.value.toLowerCase();

  let products = document.querySelectorAll(".product-card");

  products.forEach(function (product) {
    let productName = product.dataset.name.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// Shop Now Button

function scrollToProducts() {
  document.getElementById("productsSection").scrollIntoView({
    behavior: "smooth",
  });
}

// Checkout

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for shopping with ShopEasy!");

    cart = [];

    displayCart();
  }
}
