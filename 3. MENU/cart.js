
// Get cart from localStorage

let cart = JSON.parse(localStorage.getItem("deMelonCart")) || [];



// GET HTML ELEMENTS

const cartContainer = document.getElementById("cartContainer");

const emptyCart = document.getElementById("emptyCart");

const cartSummary = document.getElementById("cartSummary");

const totalItemsElement = document.getElementById("totalItems");

const subtotalElement = document.getElementById("subtotal");

const deliveryElement = document.getElementById("delivery");

const totalPriceElement = document.getElementById("totalPrice");

const clearCartBtn = document.getElementById("clearCartBtn");

const checkoutBtn = document.getElementById("checkoutBtn");


// SAVE CART

function saveCart() {

    localStorage.setItem(
        "deMelonCart",
        JSON.stringify(cart)
    );

}

// UPDATE HEADER CART COUNT

function updateCartCount() {

    let totalItems = 0;


    cart.forEach(function(item) {

        totalItems += item.quantity;

    });


    document.querySelectorAll(".count").forEach(function(count) {

        count.textContent = totalItems;

    });


    totalItemsElement.textContent = totalItems;

}


// DISPLAY CART

function displayCart() {

    cartContainer.innerHTML = "";


    // Check empty cart

    if (cart.length === 0) {

        emptyCart.style.display = "block";

        cartSummary.style.display = "none";

        return;

    }


    emptyCart.style.display = "none";

    cartSummary.style.display = "block";


    // Create each cart item

    cart.forEach(function(item, index) {


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img src="${item.image}" alt="${item.name}">


            <div class="cart-product">

                <h2>${item.name}</h2>

                <p>Delicious choice from De Melon Cafe</p>

            </div>


            <div class="cart-price">

                ₹${item.price}

            </div>


            <div class="quantity">

                <button class="minus-btn" data-index="${index}">
                    -
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button class="plus-btn" data-index="${index}">
                    +
                </button>

            </div>


            <div class="item-subtotal">

                ₹${item.price * item.quantity}

            </div>


            <button
                class="remove-btn"
                data-index="${index}"
                title="Remove item">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartContainer.appendChild(cartItem);

    });


    updateTotals();

}


// UPDATE TOTALS

function updateTotals() {

    let totalItems = 0;

    let subtotal = 0;


    cart.forEach(function(item) {

        totalItems += item.quantity;

        subtotal += item.price * item.quantity;

    });


    // Delivery charge

    let delivery = 0;


    if (subtotal > 0) {

        delivery = 50;

    }


    let total = subtotal + delivery;


    totalItemsElement.textContent = totalItems;

    subtotalElement.textContent = subtotal;

    deliveryElement.textContent = delivery;

    totalPriceElement.textContent = total;


    updateCartCount();

}


// PLUS / MINUS / REMOVE

cartContainer.addEventListener("click", function(event) {


    const plusButton = event.target.closest(".plus-btn");

    const minusButton = event.target.closest(".minus-btn");

    const removeButton = event.target.closest(".remove-btn");


    // PLUS

    if (plusButton) {

        const index = plusButton.dataset.index;

        cart[index].quantity++;

        saveCart();

        displayCart();

    }


    // MINUS

    if (minusButton) {

        const index = minusButton.dataset.index;

        cart[index].quantity--;


        if (cart[index].quantity <= 0) {

            cart.splice(index, 1);

        }


        saveCart();

        displayCart();

    }


    // REMOVE

    if (removeButton) {

        const index = removeButton.dataset.index;

        cart.splice(index, 1);

        saveCart();

        displayCart();

    }

});


// CLEAR CART

clearCartBtn.addEventListener("click", function() {


    if (cart.length === 0) {

        return;

    }


    const confirmClear = confirm(
        "Are you sure you want to clear your cart?"
    );


    if (confirmClear) {

        cart = [];

        saveCart();

        displayCart();

    }

});


// INITIAL LOAD

displayCart();

updateCartCount();
 
