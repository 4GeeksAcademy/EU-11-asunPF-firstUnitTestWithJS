

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar, fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


//Bea fijate que aqui empieza nuestro codigo para los tests

test("One dollar should be 139,96 japan yens", function (){
    const {fromDollarToYen} = require('./app.js');

    const yens = fromDollarToYen (2);

    const expected = 2 * 127.9;

    expect(fromDollarToYen(2)).toBe(255.8);
})


test ("One yen should be 0,0057 gbp, function", function () {
    const {fromYenToPound} = require ('./app.js');
    const pound = fromYenToPound (8);
    const expected = 8 * 0.8;
    expect (fromYenToPound (8)).toBe(6.4);
}) 