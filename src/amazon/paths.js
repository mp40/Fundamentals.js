import { applyPatches } from "immer";

/* 
N x N matrix, start at 0,0, end at n,n
find path to end 
return path as array
*/

/*
[
    [o,o,o]
    [o,o,o]
    [o,o,o]
]
*/

// function paths(matrix){
//     const stack = [[0,0]]
//     matrix[0][0] = 'v'
//     while(stack.length>0){
//         let last = stack.length-1
//         let row = stack[last][0]
//         let col = stack[last][1]
        
//         if(row === matrix.length-1 && col === matrix.length-1){
//             return stack
//         }
//         //console.log(stack)
//         if(col+1 && matrix[row][col+1] === "o"){
//             col = col+1
//             //matrix[row][col] = "v"
//             stack.push([row,col])
//         } else if (row +1 && matrix[row+1][col] === "o") {
//             row = row+1
//             //matrix[row][col] = "v"
//             stack.push([row,col])
//         } else if (col-1 && matrix[row][col-1] === "o"){
//             col = col-1
//             //matrix[row][col] = "v"
//             stack.push([row,col])
//         } else if (row -1 && matrix[row-1][col] === "o"){
//             row = row-1
//             //matrix[row][col] = "v"
//             stack.push([row,col])
//         } else {
//             //console.log("POP")
//             stack.pop()
//         }
//     }
//     return false
//}


// function paths(matrix){
//     let path = []
//     const n = matrix.length
//     function toggleMatrix(row, col){
//         matrix[row][col] = !matrix[row][col]
//     }
//     function checkMatrix(row, col){
//         return matrix[row[col]]
//     }
    
//     function findPath(row, col, arr = []){
//         // base case
//         if(row === n-1 && col === n-1){
//             path.push(arr)
//             return
//         }
//         // check out of bounds
//         if(row < 0 || row > n-1 || col < 0 || col > n-1){
//             return
//         }
//         // check if move blocked
//         if(matrix[row][col] === "X"){
//             return
//         }
//         // check out if visited
//         if(checkMatrix(row,col)){
//             return
//         } else {
//             arr.push([row, col])
//             // explore
//             toggleMatrix(row, col)
//             findPath(row+1, col, arr)
//             findPath(row-1, col, arr)
//             findPath(row, col+1, arr)
//             findPath(row, col-1, arr)
//             toggleMatrix(row, col)
//         }

//     }
//     findPath(0,0)
//     return path
// }

function paths(){
    
}

module.exports = paths
