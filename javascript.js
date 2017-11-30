// Nested




// Destrcutroring







// Filter

const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

let evenNumbers = mixedNumbers.filter(x => x%2===0);


const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];

let postTaxPrices  = prices.map(x=> x * 1.07)