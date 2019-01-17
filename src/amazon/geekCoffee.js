const calculateRefills = function(firstCup, querriedCup){
    let currentCup = firstCup
    for(let i=0; i<querriedCup-1; i++){
        currentCup = Math.floor(currentCup/2)
    }
    return currentCup
}

module.exports = calculateRefills