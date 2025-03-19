document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = localStorage.getItem("total") || "0.00";
    const customerName = localStorage.getItem("customer") || "Guest";
    const invoiceNumber = localStorage.getItem("invoice") || Math.floor(Math.random() * 1000000);
    const currentDate = new Date().toLocaleDateString();

    if (cart.length === 0) {
        document.body.innerHTML = "<h1>No items in the cart!</h1>";
        return;
    }
    document.getElementById("customer").textContent = customerName;
    document.getElementById("date").textContent = currentDate;
    document.getElementById("invoice").textContent = invoiceNumber;
    const productList = document.getElementById("product");
    const priceList = document.getElementById("price");
    const quantityList = document.getElementById("quantity");
    const totalAmount = document.getElementById("total");
    let productText = "";
    let priceText = "";
    let quantityText = "";
    cart.forEach(item => {
        productText += `${item.name}<br>`;
        priceText += `$${(item.price * item.quantity).toFixed(2)}<br>`;
        quantityText += `${item.quantity}<br>`;
    });
    productList.innerHTML = productText;
    priceList.innerHTML = priceText;
    quantityList.innerHTML = quantityText;
    totalAmount.innerHTML = `$${total}`;
    // Print function
    window.printReceipt = function () {
        window.print();
    };
    function goBack() {
        window.history.back();
    }    

});
