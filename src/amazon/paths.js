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

function paths(matrix){
    const stack = [[0,0]]
    matrix[0][0] = 'v'
    while(stack.length>0){
        let last = stack.length-1
        let row = stack[last][0]
        let col = stack[last][1]
        
        if(row === matrix.length-1 && col === matrix.length-1){
            return stack
        }
        //console.log(stack)
        if(col+1 && matrix[row][col+1] === "o"){
            col = col+1
            //matrix[row][col] = "v"
            stack.push([row,col])
        } else if (row +1 && matrix[row+1][col] === "o") {
            row = row+1
            //matrix[row][col] = "v"
            stack.push([row,col])
        } else if (col-1 && matrix[row][col-1] === "o"){
            col = col-1
            //matrix[row][col] = "v"
            stack.push([row,col])
        } else if (row -1 && matrix[row-1][col] === "o"){
            row = row-1
            //matrix[row][col] = "v"
            stack.push([row,col])
        } else {
            //console.log("POP")
            stack.pop()
        }
    }
    return false
}

module.exports = paths
