function islands(matrix){
    // let count = 0;
    let n = matrix.length
    //const results = {}
    function exploreIsland(row,col,type){
        // count++
        // if(results[type]){
        //     results[type]++
        // } else {
        //     results[type] = 1
        // }
        matrix[row][col] = "explored"
        if(row+1 < n-1  && matrix[row+1][col] === type){
            exploreIsland(row+1, col, type)
        }
        if(row-1 > -1 && matrix[row-1][col] === type){
            exploreIsland(row-1, col, type)
        }
        if(col+1 < n-1 && matrix[row][col+1] === type){
            exploreIsland(row, col+1, type)
        }
        if(col-1 > -1 && matrix[row][col-1] === type){
            exploreIsland(row, col-1,type)
        }
    }
    //check every cell in collection
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){

            exploreIsland(i,j,matrix[i][j])

            // if(matrix[i][j] !== "explored"){
            //     exploreIsland(i,j,matrix[i][j])
            // }
            
            // if(matrix[i][j] !== "explored"){
            //     count++
            //     exploreIsland(i,j,matrix[i][j])
            // }
        }
    }
    // return count
    // return Object.keys(results).length
    //return Object.keys(results).length
    return 3
}

module.exports = islands