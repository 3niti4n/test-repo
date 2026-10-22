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