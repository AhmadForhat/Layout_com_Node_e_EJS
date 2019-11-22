const options = document.querySelector(".options");
const dropdown = document.querySelector(".dropdown");
const textDropdown = document.querySelector(".dropdown h2");
const dropdownOption1 = document.querySelector(".dropdown p");
const dropdownOption2 = document.querySelector(".opcao");
const arrow2 = document.querySelector(".arrow2");
const home = document.querySelector(".home");
const homeAA = document.querySelector(".homeAA");
const homeA = document.querySelector(".homeA");
const homeBB = document.querySelector(".homeBB");
const homeB = document.querySelector(".homeB");
const botao = document.querySelector(".botao");
const itens = document.querySelector(".itens");
const setas = document.querySelector(".flex2");
const input = document.getElementById("numero");
const seta1 = document.querySelector(".arrow1");
const seta2 = document.querySelector(".arrow2");
const seta3= document.querySelector(".arrow3");
const seta4 = document.querySelector(".arrow4");
console.log(seta2);

//Slide
seta2.addEventListener("click", function(){
    homeAA.classList.remove('ativo');
    homeAA.classList.add('none3');
    homeBB.classList.add('ativo');
    homeBB.classList.remove('none3');
})

seta3.addEventListener("click", function(){
    homeBB.classList.add('none3');
    homeAA.classList.add('ativo');
    homeAA.classList.remove('none3');
})

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
    homeAA.classList.add('ativado');
    homeBB.classList.add('none3');
    homeAA.classList.remove('none3');
    homeA.innerHTML = "";
    input.classList.add('errado')
})

dropdownOption2.addEventListener("click", function(){
    homeAA.classList.add('none3');
    homeBB.classList.add('ativado');
    homeBB.classList.remove('none3');
    homeB.innerHTML = "";
    input.classList.add('errado')
})

botao.addEventListener("click", function myFunction() {
    const x = document.getElementById("numero").value;
    if( x == "" || x == 0){
        input.classList.add('errado');
        homeA.innerHTML = "";
    } else if ( x <= 3){
        homeA.innerHTML = ""
    for(i = 1; i <= x ; i++){
        input.classList.remove('errado')
        var resultado = "<div class=" + "flex iten" + ">" + "<p class=" + "circulo" + ">" + i + "</p><p class=" + "item" + ">" + "Item A" + i + "</p></div>"
        homeA.innerHTML += resultado;
    } 
    } else {
        input.classList.add('errado')
    }
  })

  botao.addEventListener("click", function myFunction() {
    const x = document.getElementById("numero").value;
    if( x == "" || x == 0){
        input.classList.add('errado');
        homeB.innerHTML = "";
    } else if ( x <= 3 && x >0){
        homeB.innerHTML = ""
    for(i = 1; i <= x ; i++){
        input.classList.remove('errado')
        var resultado = "<div class=" + "flex iten" + ">" + "<p class=" + "circulo" + ">" + i + "</p><p class=" + "item" + ">" + "Item B" + i + "</p></div>"
        homeB.innerHTML += resultado;
    } 
    } else {
        input.classList.add('errado')
    }
  })