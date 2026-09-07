function confirmOrder() {

    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");


    // Check Name
    if (!name.checkValidity()) {
        name.reportValidity();
        return;
    }


    // Check Phone
    if (!phone.checkValidity()) {
        phone.reportValidity();
        return;
    }


    // Check Email
    if (!email.checkValidity()) {
        email.reportValidity();
        return;
    }


    // Get selected payment
    let payment = document.querySelector(
        'input[name="payment"]:checked'
    ).value;


    let paymentMethod;


    if (payment === "upi") {

        paymentMethod = "UPI";

    } else if (payment === "card") {

        paymentMethod = "Credit / Debit Card";

    } else {

        paymentMethod = "Cash";

    }


    // Order confirmation
    alert(
        "🎉 Order Confirmed Successfully!\n\n" +

        "Customer Name : " + name.value + "\n" +

        "Phone Number : " + phone.value + "\n" +

        "Email : " + email.value + "\n" +

        "Payment Method : " + paymentMethod + "\n\n" +

        "Total Amount : ₹1779\n\n" +

        "Thank you for ordering from De Melon Cafe! ❤️"
    );

}