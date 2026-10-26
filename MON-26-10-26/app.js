const provPoang = [18, 22, 15, 28, 20];

const rakenaMedel = (poangLista) => {
    let summa = 0;
    for (const p of poangLista) {
        summa += p;
    }
    return summa / poangLista.length;
};

const medel = rakenaMedel(provPoang);
console.log(`Medelpoäng på provet: ${medel}`);

