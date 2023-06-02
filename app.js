// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // Japan YEN
    "USD": 1.2, // US Dollar
    "GBP": 0.8, // England Pound
};

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we include fromEuroToDollar here as well because it needs to be exported

//Bea fijate que aquí empieza nuestro código, lo que el ejercicio nos pide

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}



const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.8;
    return valueInPound;

}

module.exports = {fromEuroToDollar,fromDollarToYen, fromYenToPound}
