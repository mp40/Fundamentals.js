// return all possible paths

function makeMatrix(n){
    const matrix = []
    for(let i=0; i<n; i++){
        matrix.push([])
        for(let j=0; j<n; j++){
            matrix[i].push(false)
        }
    }
    matrix.toggle = function(row, col){
        matrix[row][col] = !matrix[row][col]
    }
    matrix.visited = function(row, col){
        return matrix[row][col]
    }
    return matrix
}

function robotPaths(n){
    const matrix = makeMatrix(n)
    let paths = 0

    function findPath(row, col){
        // Base Case
        if(row === n-1 && col === n-1){
            paths++
            return
        }
        // Check Out of bounds
        if(row < 0 || row > n-1 || col < 0 || col > n-1){
            return
        }
        if(matrix.visited(row,col)){
            return
        } else {
            // explore
            matrix.toggle(row, col)
            findPath(row+1, col)
            findPath(row-1, col)
            findPath(row, col+1)
            findPath(row, col-1)
            matrix.toggle(row, col)
        }
    }
    // kick off recursion
    findPath(0,0)

    return paths
}

function iteratePaths(n){
    const matrix = makeMatrix(n)
    let paths = 0
    let stack =[[0,0]]
    matrix.toggle(0,0)
    let lastRow = 0
    let lastCol = 0

let count = 0

    while(stack.length > 0){
        debugger
        let row = stack[stack.length-1][0]
        let col = stack[stack.length-1][1]
        if(row+1 < n-1 && !matrix.visited(row+1, col)){
            stack.push([row+1, col])
            matrix.toggle(row+1, col)
        } else if(row-1 > 0 && matrix[row-1, col] === false){
            stack.push([row-1, col])
            matrix.toggle(row-1, col)
        } else if(col+1 < n-1 && matrix[row, col+1] === false){
            stack.push([row, col+1])
            matrix.toggle(row, col+1)
        } else if(col-1 > 0 && matrix[row, col-1] === false){
            stack.push([row, col-1])
            matrix.toggle(row, col-1)
        } else if(stack[stack.length-1][0] === n-1 && stack[stack.length-1] === n-1){
            paths++
            let temp = stack.pop()
            lastRow = temp[0]
            lastCol = temp[1]
        } else {
            matrix.toggle(lastRow,lastCol)
            let temp = stack.pop()
            lastRow = temp[0]
            lastCol = temp[1]
        }
        count++
    }
    return paths
}

let result = iteratePaths(2)
console.log(result)

module.exports = {makeMatrix, robotPaths, iteratePaths}