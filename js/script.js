const price = 0.21;

const createTicket = document.getElementById("create_ticket");

createTicket.addEventListener("click", function(){
    
    const userName = document.querySelector("[name='full_name']");

    const userKm = document.querySelector("[name='km']");

    const userAge = document.getElementById("age");

    // prezzo base del biglietto
    let priceFull = userKm.value * price;

    let priceFinal = priceFull;
    let disCount;

    // sconto in base all'età
    if (userAge.value === "young"){
        disCount = .8;
    } else if (userAge.value === "old") {
        disCount = .6;
    }

    if (disCount){
        priceFinal = parseInt((priceFull * disCount).toFixed(2));
    }

    alert(priceFinal);
})