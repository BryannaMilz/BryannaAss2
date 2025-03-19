document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.querySelector("input[placeholder='Username']").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (localStorage.getItem(username)) {
            alert("Username already exists! Please choose a different one.");
            return;
        }
        const userData = { email, password };
        localStorage.setItem(username, JSON.stringify(userData));
        alert("Registration successful! You can now log in.");
        window.location.href = "Index.html";
    });
});