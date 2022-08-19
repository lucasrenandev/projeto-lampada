
const button = document.querySelector("#ligar-desligar")
const lamp = document.querySelector("#imagem")

button.addEventListener("click", On_Off)
lamp.addEventListener("mouseover", Ligar)
lamp.addEventListener("mouseleave", Desligar)
lamp.addEventListener("dblclick", Quebrar)

//Ligar lâmpada
function Ligar() {
    
   if(!Lampada_Quebrada()) {
        lamp.src = "assets/img/ligada.jpg"
   }
}

//Desligar lâmpada
function Desligar() {

    if(!Lampada_Quebrada()) {
        lamp.src = "assets/img/desligada.jpg"
    }
}

//Quebrar lâmpada
function Quebrar() {
    lamp.src = "assets/img/quebrada.jpg"
}

//Se a lâmpada estiver quebrada
function Lampada_Quebrada() {
    return lamp.src.indexOf("quebrada") > -1
}

//Ligar e desligar
function On_Off() {
    
    if(button.textContent === "Ligar") {
        Ligar()
        button.textContent = "Desligar"
    }
    else {
        Desligar()
        button.textContent = "Ligar"
    }
    
}