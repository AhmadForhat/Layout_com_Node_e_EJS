const options = document.querySelector(".options");
const dropdown = document.querySelector(".dropdown");
const textDropdown = document.querySelector(".dropdown p");
const arrow2 = document.querySelector(".arrow2");
const home = document.querySelector(".home");

options.addEventListener("click", function(){
    dropdown.classList.toggle('ativo');
    dropdown.classList.remove('ativado');
})

textDropdown.addEventListener("click", function(){
    dropdown.classList.toggle('ativado');
})

home.addEventListener("click", function(){
    dropdown.classList.remove('ativo');
    dropdown.classList.remove('ativado');
})