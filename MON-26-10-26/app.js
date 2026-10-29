const provPoints = [18, 22, 15, 28, 20];

const countMedel = (provPointsArr) => {
    let sum = 0
    for (const point of provPointsArr) {
        sum += point
    }

    return sum / provPointsArr.length
}

const medelvarde = countMedel(provPoints)
console.log("Medelpoäng på provet: ", medelvarde)