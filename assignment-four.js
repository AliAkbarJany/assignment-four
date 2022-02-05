// problem 1

// var goldAna = 234;
// var vori = 234 / 16;
// console.log(vori);
function anaToVori(goldAna) {

    let goldVori = goldAna / 16;
    return goldVori;
}
let goldAna = 234;
const result = anaToVori(goldAna);
console.log(result);

// problem 2

function pandaCost(singaraQuantity, somuchaQuantity, gilapiQuantity) {
    const perSingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perGilapiPrice = 15;

    const totalSingaraQuantity = perSingaraPrice * singaraQuantity;
    // console.log(totalSingaraQuantity);
    const totalSomuchaQuantity = perSomuchaPrice * somuchaQuantity;
    const totalGilapiQuantity = perGilapiPrice * gilapiQuantity;

    const totalFoodPrice = totalSingaraQuantity + totalSomuchaQuantity + totalGilapiQuantity;
    // console.log(totalFoodPrice);

    return totalFoodPrice;

}

const finalCost = pandaCost(6, 9, 4);
console.log(finalCost);


// problem 3
function picnicBudget(persons) {
    const costForFisrt100Persons = 5000;
    const costForSecond100Persons = 4000;
    const costForRestPersons = 3000;
    if (persons <= 100) {
        const cost = persons * costForFisrt100Persons;
        // console.log(cost);
        return cost;
    }
    else if (persons <= 200) {
        const totalCostForfirst100Persons = 100 * costForFisrt100Persons;
        const restPersons = persons - 100;
        const restCost = restPersons * 4000;
        const totalCostForSecond100Persons = totalCostForfirst100Persons + restCost;
        // console.log(totalCostForSecond100Persons);
        return totalCostForSecond100Persons;

    }
    else {
        const totalCostForfirst100Persons = 100 * costForFisrt100Persons;
        const totalCostForSecond100Persons = 100 * costForSecond100Persons;
        const restPersons = persons - 200;
        const restCost = restPersons * costForRestPersons;
        const totalCostForRestPersons = totalCostForfirst100Persons + totalCostForSecond100Persons + restCost;
        // console.log(totalCostForRestPersons);
        return totalCostForRestPersons;
    }


}

const totalCost = picnicBudget(210);
console.log(totalCost);

// problem 4

function oddFriend(names) {
    console.log(names.length);
    var oddName = [''];
    for (var i = 0; i <= names.length; i++) {
        if (names[i].length % 2 == 1) {
            oddName = names[i];
            // console.log(names[i]);
            // console.log(oddlength);
            return oddName;

        }
    }



}

var names = ['rafsan', 'morshad', 'sazzad', 'kajol'];
var finalresult = oddFriend(names);
console.log(finalresult);




