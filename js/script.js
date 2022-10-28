// ---------- informazioni che già conosco
const price = 0.21;

// bottone
const createTicket = document.getElementById("create_ticket");

createTicket.addEventListener("click", function(){
    
    // nodo html per il nome
    const userName = document.querySelector("[name='full_name']");

    // nodi html km ed età
    const userKm = document.querySelector("[name='km']");

    const userAge = document.getElementById("age");

    // calolo il prezzo base del biglietto
    const priceFull = userKm.value * price;

    let priceFinal = priceFull;
    let disCount;

    // calcolo lo sconto in base all'età
    if (userAge.value === "young"){
        disCount = .8;
    } else if (userAge === "old") {
        disCount = .6;
    }

    if (disCount){
        priceFinal = parseInt((priceFull * disCount).toFixed(2));
    }

    alert(priceFinal);
})