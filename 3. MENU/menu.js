
// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("deMelonCart")) || [];


// UPDATE HEADER CART COUNT

function updateCartCount() {

    let totalItems = 0;

    cart.forEach(function (item) {
        totalItems += item.quantity;
    });

    // Update every cart count on the page
    document.querySelectorAll(".count").forEach(function (count) {
        count.textContent = totalItems;
    });
}


// SAVE CART TO LOCAL STORAGE

function saveCart() {
    localStorage.setItem("deMelonCart", JSON.stringify(cart));
}


// SHOW NOTIFICATION

function showMessage(message) {

    let oldMessage = document.querySelector(".cart-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    let messageBox = document.createElement("div");

    messageBox.className = "cart-message";
    messageBox.textContent = message;

    messageBox.style.position = "fixed";
    messageBox.style.top = "100px";
    messageBox.style.right = "30px";
    messageBox.style.background = "#ff8c32";
    messageBox.style.color = "#fff";
    messageBox.style.padding = "15px 25px";
    messageBox.style.borderRadius = "8px";
    messageBox.style.zIndex = "9999";
    messageBox.style.fontWeight = "bold";
    messageBox.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    document.body.appendChild(messageBox);

    setTimeout(function () {
        messageBox.remove();
    }, 2000);
}


// ADD PRODUCT TO CART

function addToCart(card) {

    let name = card.querySelector("h2").textContent.trim();

    let priceText = card.querySelector("h3").textContent.trim();

    let price = parseFloat(priceText.replace(/[^\d.]/g, ""));

    let image = card.querySelector("img").getAttribute("src");


    // Check whether product already exists
    let existingProduct = cart.find(function (item) {
        return item.name === name;
    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    updateCardQuantity(card, name);

    showMessage(name + " added to cart!");

}


// UPDATE PRODUCT QUANTITY ON MENU

function updateCardQuantity(card, name) {

    let quantitySpan = card.querySelector(".qty span");

    let product = cart.find(function (item) {
        return item.name === name;
    });


    if (product) {

        quantitySpan.textContent = product.quantity;

    } else {

        quantitySpan.textContent = 0;

    }
}


// INCREASE QUANTITY

function increaseQuantity(card) {

    let name = card.querySelector("h2").textContent.trim();

    let product = cart.find(function (item) {
        return item.name === name;
    });


    if (product) {

        product.quantity++;

    } else {

        addToCart(card);
        return;

    }


    saveCart();

    updateCartCount();

    updateCardQuantity(card, name);

}


// DECREASE QUANTITY

function decreaseQuantity(card) {

    let name = card.querySelector("h2").textContent.trim();

    let product = cart.find(function (item) {
        return item.name === name;
    });


    if (!product) {
        return;
    }


    product.quantity--;


    // Remove product when quantity becomes 0
    if (product.quantity <= 0) {

        cart = cart.filter(function (item) {
            return item.name !== name;
        });

    }


    saveCart();

    updateCartCount();

    updateCardQuantity(card, name);

}


// CONNECT ALL MENU BUTTONS

document.querySelectorAll(".card").forEach(function (card) {

    let buttons = card.querySelectorAll(".qty button");

    let addButton = card.querySelector(".buttons > button");


    // ADD TO CART BUTTON

    if (addButton) {

        addButton.addEventListener("click", function () {

            addToCart(card);

            // Button feedback
            let originalText = addButton.textContent;

            addButton.textContent = "Added ✓";

            setTimeout(function () {
                addButton.textContent = originalText;
            }, 1000);

        });

    }


    // MINUS BUTTON

    if (buttons[0]) {

        buttons[0].addEventListener("click", function () {

            decreaseQuantity(card);

        });

    }


    // PLUS BUTTON

    if (buttons[1]) {

        buttons[1].addEventListener("click", function () {

            increaseQuantity(card);

        });

    }

});


// LOAD QUANTITY FROM LOCAL STORAGE

document.querySelectorAll(".card").forEach(function (card) {

    let name = card.querySelector("h2").textContent.trim();

    updateCardQuantity(card, name);

});


// INITIAL CART COUNT

updateCartCount();
