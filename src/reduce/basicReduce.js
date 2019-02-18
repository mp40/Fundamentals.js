/*
Exercises from
https://medium.freecodecamp.org/reduce-f47a7da511a9
*/

function average (arr) {
    const sum = arr.reduce((sum,num)=>{
        return sum + num;
    })
    return sum/arr.length
}

function containedAverage (arr){
    return arr.reduce((sum, num, dex)=>{
        sum += num
        return dex === arr.length-1 ?
            sum/arr.length :
            sum
    })
}

// not working...
// function containedAverage (arr){
//     return arr.reduce((sum, num)=>{
//         sum += num
//         return sum/arr.length
//     },0)
// }

function reduceAsMap (arr) {
    return arr.reduce((final, num)=>{
        final.push(num*2)
        return final
    },[])
}

function improvedMap (arr, multiplier) {
    return arr.reduce((final, num)=>{
        final.push(num * multiplier)
        return final
    },[])
}

module.exports = {average, containedAverage, reduceAsMap, improvedMap}