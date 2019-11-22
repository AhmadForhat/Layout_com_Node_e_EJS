const options = document.querySelector(".options");
const dropdown = document.querySelector(".dropdown");
const textDropdown = document.querySelector(".dropdown h2");
const dropdownOption1 = document.querySelector(".dropdown p");
const dropdownOption2 = document.querySelector(".opcao");
const arrow2 = document.querySelector(".arrow2");
const home = document.querySelector(".home");
const home1 = document.querySelector(".homeA")
const home2 = document.querySelector(".homeB")

options.addEventListener("click", function(){
    dropdown.classList.toggle('ativo');
    dropdown.classList.remove('ativado');
    textDropdownOption.classList.add('none2');
})

textDropdown.addEventListener("click", function(){
    dropdown.classList.toggle('ativado');
    dropdownOption1.classList.toggle('ativado');
    dropdownOption2.classList.toggle('ativado');
})

home.addEventListener("click", function(){
    dropdown.classList.remove('ativo');
    dropdown.classList.remove('ativado');
})