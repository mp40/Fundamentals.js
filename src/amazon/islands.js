function islands (matrix){
    let count = 0
    const n = matrix.length

    function exploreIsland(row,col){
        // mark island as 0
        matrix[row][col] = 0
        // explore row + 1
        if(row+1 < n && matrix[row+1][col]){
            exploreIsland(row+1,col)
        }
        // explore row - 1
        if(row-1 >= 0 && matrix[row-1][col]){
            exploreIsland(row-1, col)
        }
        // explore col + 1
        if(col+1 < n && matrix[row][col+1]){
            exploreIsland(row, col+1)
        }
        // explore col - 1
        if(col-1 >= 0 && matrix[row][col-1]){
            exploreIsland(row, col-1)
        }
    }
    // check each element
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            // if position returns true - not explored and removed
            if(matrix[i][j]){
                count++
                exploreIsland(i,j)
            }
        }
    }
    return count
}

module.exports = islands