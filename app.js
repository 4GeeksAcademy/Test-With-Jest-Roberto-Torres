// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



const sum = (a, b) => {
    return a + b;
}
console.log(sum(7, 3));



// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}


const fromYenToPound = (yenes) => {
    let euros = yenes / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };