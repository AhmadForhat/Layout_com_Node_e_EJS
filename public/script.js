const botao = document.querySelector(".botao");
const dropdown = document.querySelector(".dropdown");
const textDropdown = document.querySelector(".dropdown p");
const arrow2 = document.querySelector(".arrow2");

botao.addEventListener("click", function(){
    dropdown.classList.toggle('ativo');
    dropdown.classList.remove('ativado');
})

textDropdown.addEventListener("click", function(){
    dropdown.classList.toggle('ativado');
})
