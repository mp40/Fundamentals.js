function islands (matrix){
    let count = 0
    const n = matrix.length

    function exploreIsland(row,col){
        // explore row + 1

        // explore row - 1

        // explore col + 1

        // explore col - 1

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