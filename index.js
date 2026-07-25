
const btn = document.querySelector(".toggle-menu");
const navLinks = document.querySelector("#primary-menu");

btn.addEventListener("click",  () => {

    navLinks.classList.toggle("open")

    const expanded = navLinks.classList.contains("open")
    btn.setAttribute("aria-expanded" , expanded);
})
