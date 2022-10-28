// ---------- informazioni che già conosco
const price = 0.21;

// ------------ logica

// nodo html per il nome
const userName = document.querySelector("[name='full_name']");
userName.addEventListener("click", function(){
    alert("Non lasciare il campo vuoto!")
})

// chiedo i km ed età + li valido + li salvo in una variabile
// let userKm = parseInt(prompt("Quanti km devi fare?"));

while (isNaN(userKm)){
    // userKm = parseInt(prompt("Inserisci un numero valido"));
}

// let userAge = parseInt(prompt("Quanti anni hai?"));

while (isNaN(userAge)){
    // userAge = parseInt(prompt("Inserisci un numero valido"));
}

// calolo il prezzo base del biglietto
const priceFull = userKm * price;

let priceFinal = priceFull;
let disCount;

// calcolo lo sconto in base all'età
if (userAge < 18){
    disCount = .8;
} else if (userAge >= 65) {
    disCount = .6;
}

if (disCount){
    priceFinal = parseInt((priceFull * disCount).toFixed(2));
}

console.log(priceFinal)