console.log("TESTAR KODEN");

const skapaKonto = (name, age, roll = "Gäst") => {
    console.log("hej", name, age, roll); 

    if (age < 18) {
        return { message: "Du är inte myndig"};
    }

    return { message: "Du är myndig"};
}

const skapaKontoObject = skapaKonto("Josef", 21, "Student");

console.log(skapaKontoObject.message);