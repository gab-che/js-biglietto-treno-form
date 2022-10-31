const price = 0.21;

const createTicket = document.getElementById("create_ticket");

createTicket.addEventListener("click", function(){
    
    const userName = document.querySelector("[name='full_name']");
    const passengerName = document.getElementById("passenger_name");
    passengerName.innerHTML = userName.value; 

    const userKm = document.querySelector("[name='km']");
    const passengerKm = document.getElementById("passenger_km");
    passengerKm.innerHTML = userKm.value;

    // prezzo base del biglietto
    const priceFull = (userKm.value * price).toFixed(2);

    let priceFinal = priceFull;
    let disCount;
    const displayDiscount = document.getElementById("display_discount");

    // sconto in base all'età
    const userAge = document.getElementById("age");

    if (userAge.value === "young"){
        disCount = 20;
        displayDiscount.innerHTML = `Tariffa under 18`;

    } else if (userAge.value === "old") {
        disCount = 40;
        displayDiscount.innerHTML = `Tariffa over 65`;

    }   else{
        displayDiscount.innerHTML = `Tariffa base`;
    }

    if (disCount){
        priceFinal = parseInt(priceFull - (priceFull * disCount)/100);
    }

    const passengerFare = document.getElementById("passenger_fare");
    passengerFare.innerHTML = `${priceFinal} €`;

    const initialFare = document.getElementById("initial_fare");
    initialFare.innerHTML = `${priceFull} €`;

    if (userName.value !="" && userKm.value !=""){
        const wagon = (Math.floor(Math.random()*5)) + 1;
    
        const seatNumber = (Math.floor(Math.random()*50)+1);
        
        const seatLetters = "ABCD"
        const seatLetter = seatLetters[Math.floor(Math.random()*seatLetters.length)];
        
        const seat = document.getElementById("seat");
        seat.innerHTML = `Carrozza n. ${wagon}, posto ${seatNumber}${seatLetter}`;
    }

    const outPut = document.getElementById("output");
    outPut.classList.toggle("d-none");
})

function clearFields() {
    document.getElementById("full_name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";
    const outPut = document.getElementById("output");
    outPut.classList.add("d-none");
}