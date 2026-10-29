const skrivUtTio = () => {
    return 10
}

const minFunktion = callbackFn => {
    const result = callbackFn()

    return () => {
        console.log("Josef")
    }
}

const skrivUtResult = minFunktion(skrivUtTio)


const siffror = [5, 12, 8, 20, 3];

 const over10 = siffror.filter(siffra => {
    return siffra > 10
})

console.log(over10)
