
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all the details.");
        return;
    }

    const message = document.getElementById("message");

    message.style.color = "green";

    message.textContent =
        "Thank you, " + name +
        "! Your registration details have been submitted successfully.";

    registrationForm.reset();

});
