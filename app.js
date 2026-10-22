
// if-satser //
let age = 16 
let hasTicket = false
let withAdult = true

if (age >= 15 && hasTicket === true) {
    console.log("Välkommen in i BIO")
} else {
    console.log("GÅ KÖP TICkEtS")
}

const isLoggedIn = true
const userRole = "admin"

if (isLoggedIn === true) {
    if (userRole === "admin") {
        console.log("Välkommen till adminpanelen!")
    } else {
        console.log("Välkommen vänlig användare!")
    }
} else {
    console.log("Du måste logga in först!")
}

// SWITCH-satser //

const traficLight = "gul"

switch (traficLight) {
    case "grön" : 
        console.log("Kör")
        break;
    case "gul"  : 
        console.log("Gör dig Redo!")
        break;
    case "röd"  : 
        console.log("Stanna!")
        break;

    default : 
        console.log ("Okänd Signal") 
}

const weather = "regn"

switch (weather) {
    case "regn" :
        console.log("Ta med ett paraply!")
        break;
    case "sol"  :
        console.log("Glöm inte solglasögon!")
        break;
    case "snö"  :
        console.log("Ta på dig en varm jacka!")
        break;
    default :
       console.log ("Kolla väderappen igen.")
}

// FOR-LOOP //

// while-loop //

let energi = 3;

while (energi > 0) {
    console.log("Sprang ett varv! Energi kvar: " + energi);
    energi-- // Minskar energi med 1 efter varje varv!
}
console.log("Slut på energi, vila en stund")