/*
Write an efficient program for printing k largest elements in an array. 
Elements in array can be in any order.
For example, 
if given array is [1, 23, 12, 9, 30, 2, 50] 
and you are asked for the largest 3 elements 
i.e., k = 3 then your program should print 50, 30 and 23.
*/

const findLargest = function(arr, k){
    let result = arr.sort(function(a,b){
        return a - b 
    })
    return result.slice(arr.length-k)
}

module.exports = findLargest