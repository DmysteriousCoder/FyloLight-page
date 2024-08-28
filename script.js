let navToggler = document.getElementById("ham");
let exit = document.getElementById("exit");
let nav = document.querySelector("nav");

navToggler.addEventListener("click", open);
exit.addEventListener("click", close);

function open() {
    nav.classList.add("active");
}

function close() {
    nav.classList.remove("active");
}