// ================= SIGN-UP FORM =================

const signupForm = document.querySelector(".form");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.querySelector('input[name="fullname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;


    // Full Name
    if (fullName === "") {
        alert("Please enter your Full Name.");
        return;
    }


    // Email
    if (email === "") {
        alert("Please enter your Gmail.");
        return;
    }


    // Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail.");
        return;
    }


    // Password
    if (password === "") {
        alert("Please enter your Password.");
        return;
    }


    // Password length
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }


    // Confirm Password
    if (confirmPassword === "") {
        alert("Please confirm your Password.");
        return;
    }


    // Password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }


    // Correct account
    if (email !== "ahamed0090k@gmail.com") {
        alert("This Gmail is not registered.");
        return;
    }

    if (password !== "12345678") {
        alert("Incorrect Password.");
        return;
    }


    // Success
    alert("Sign-Up Successful!");

    window.location.href = "login.html";

});


// ================= SHOW / HIDE PASSWORD =================

const togglePasswords = document.querySelectorAll(".toggle-password");

togglePasswords.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const passwordInput = this.previousElementSibling;

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            passwordInput.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    });

});