const kunder = [
    {name: "Mia", VIP: true, kopSumma: 1200 },
    {name: "Sam", VIP: false, kopSumma: 450 },
    {name: "Robin", VIP: true, kopSumma: 800 }
]

const getVipBonus = (kunderArr) => {
    const result = []

    for (const kund of kunderArr) {
        if (kund.VIP === true) {
        const rabatteradPris = kund.kopSumma * 0.9
        const vipKund = {name: kund.name, kopSumma: rabatteradPris}
        result.push(vipKund)
    }

  }

 return result
}

const vipBonus = getVipBonus(kunder)

console.log(vipBonus)