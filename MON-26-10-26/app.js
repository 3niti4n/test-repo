const minaSteg = [4000, 8500, 12000, 3000, 10000];

const rakneMedel = (rakneLista) => {
    let summa = 0;
    for (const nummer of rakneLista) {
        summa += nummer;
    }
    return summa;
};

const totala = rakneMedel(minaSteg);
console.log(`Dina totala steg: ${totala}`);