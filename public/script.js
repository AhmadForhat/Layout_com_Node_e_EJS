const options = document.querySelector(".options");
const dropdown = document.querySelector(".dropdown");
const textDropdown = document.querySelector(".dropdown h2");
const dropdownOption1 = document.querySelector(".dropdown p");
const dropdownOption2 = document.querySelector(".opcao");
const arrow2 = document.querySelector(".arrow2");
const home = document.querySelector(".home");
const homeA = document.querySelector(".homeA");
const homeB = document.querySelector(".homeB");
const botao = document.querySelector(".botao");
const itens = document.querySelector(".itens")

options.addEventListener("click", function(){
    dropdown.classList.toggle('ativo');
    dropdownOption1.classList.remove('ativado');
    dropdownOption2.classList.remove('ativado');
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
    dropdownOption1.classList.remove('ativado');
    dropdownOption2.classList.remove('ativado');
})

dropdownOption1.addEventListener("click", function(){
    homeA.classList.add('ativado');
    homeB.classList.add('none3');
    homeA.classList.remove('none3');
})

dropdownOption2.addEventListener("click", function(){
    homeA.classList.add('none3');
    homeB.classList.add('ativado');
    homeB.classList.remove('none3');
})

botao.addEventListener("click", function myFunction() {
    const x = document.getElementById("numero").value;
    if( x == "" || x == 0){
        homeA.innerHTML = "<div class=" + "flex iten" + ">" + "<p class=" + "circulo" + ">" + 1 + "</p><p class=" + "item" + ">" + "Item A" + 1 + "</p></div>" 
    } else {
    for(i = 1; i <= x ; i++){
        var resultado = "<div class=" + "flex iten" + ">" + "<p class=" + "circulo" + ">" + i + "</p><p class=" + "item" + ">" + "Item A" + i + "</p></div>"
        console.log(resultado);
        homeA.innerHTML += resultado;
    }}
  })