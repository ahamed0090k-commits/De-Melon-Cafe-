// ================= LOGIN FORM =================

const loginForm = document.querySelector(".form");

const correctEmail = "ahamed0090k@gmail.com";
const correctPassword = "12345678";

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;

    // Email required
    if (email === "") {
        alert("Please enter your Gmail.");
        return;
    }

    // Password required
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Check Gmail first
    if (email !== correctEmail) {
        alert("Incorrect Gmail.");
        return;
    }

    // Check password separately
    if (password !== correctPassword) {
        alert("Incorrect Password.");
        return;
    }

    // Both are correct
    alert("Login Successful!");

    window.location.href = "../1. HOME/index.html";

});























