
const btn = document.querySelector(".toggle-menu");
const navLinks = document.querySelector("#primary-menu");

btn.addEventListener("click",  () => {

    navLinks.classList.toggle("open")

    const expanded = navLinks.classList.contains("open")
    btn.setAttribute("aria-expanded" , expanded);
})


const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("contact-us-message");


const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");


const form = document.getElementById("form");

function validateField(input, errorElement) {
    if (input.checkValidity()) {
        return true;
    }

    return false;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const validName = validateField(name, nameError);
    const validEmail= validateField(email, emailError);
    const validMessage = validateField(message, messageError);


    
    if(validEmail && validEmail && validMessage) {
        alert("Thank you! Your message has been sent successfully.");
        form.reset()
    }

})