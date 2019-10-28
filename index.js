// Code your solutions in this file
function writeCards(array, event) {
    let resultsArray = []
    for (let i = 0; i < array.length; i++) {
        resultsArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return resultsArray
}

function countDown(n) {
    while (n > -1) {
        console.log(n)
        n--
    }
}