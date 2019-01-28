/*
Given an array of integers, write a function
that returns true if there is a triplet (a, b, c) 
that satisfies a2 + b2 = c2.
*/

const triplet = function(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i !== j){
                let a = Math.pow(arr[i],2)
                let b = Math.pow(arr[j],2)
                let c = a+b
                if(arr.includes(Math.sqrt(c))){
                    return true
                }
            }
        }
    }
    return false
}


module.exports = triplet

// first attempt, poor time complexity
// const triplet = function(arr){
//     for(let i = 0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(i !== j){
//                 let a = Math.pow(arr[i],2)
//                 let b = Math.pow(arr[j],2)
//                 let c = a+b
//                 if(arr.includes(Math.sqrt(c))){
//                     return true
//                 }
//             }
//         }
//     }
//     return false
// }
