function compute(instructions) {
const piles = [0,0,0,0,0,0,0,0,0,0]
let block = false
let pileIndex = 0
let steps = instructions.split('')

for(let i=0; i<steps.length; i++){
    if(steps[i] === "P"){
        pileIndex = 0
        block = true
    }
    if(steps[i] === "M" && pileIndex < 9){
        pileIndex++
    }
    if(steps[i] === "L" && piles[pileIndex]<15 && block === true){
        piles[pileIndex]++
        block = false
    }
}

let result = piles.reduce((str, char)=>{
    return str + char
},"")

return result
}



module.exports = compute