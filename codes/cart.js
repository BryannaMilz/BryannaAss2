let cart = [];
let total = 0;
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");
    const clearCartButton = document.getElementById("clear-cart");
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    total = parseFloat(localStorage.getItem("total")) || 0;
    updateCart();
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-name");
            const productPrice = parseFloat(this.getAttribute("data-price"));
            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            total += productPrice;
            updateCart();
            checkoutButton.disabled = false;
        });
    });
    function updateCart() {
        cartItemsList.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsList.appendChild(li);
        });
        cartTotal.textContent = total.toFixed(2);
    }
    checkoutButton.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total", total.toFixed(2));
        window.location.href = "/checkout";
    });
    function clearCart() {
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        cart = [];
        total = 0;
        updateCart();
        checkoutButton.disabled = true;  
    }
    clearCartButton.addEventListener("click", clearCart);
    updateCart();
});
