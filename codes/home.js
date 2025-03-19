let attempts = 3;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser && storedUser.password === password) {
            alert("Login successful!");
            localStorage.setItem("currentUser", username);
            window.location.href = "products.html";
        } else {
            attempts--;
            alert(`Invalid username or password. You have ${attempts} attempts left.`);
            if (attempts === 0) {
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("error").textContent = "Too many failed login attempts. Please contact support.";
            }
            document.getElementById("password").value = "";
            document.getElementById("password").focus();
        }
    });
});