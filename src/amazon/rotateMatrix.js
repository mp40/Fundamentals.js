/* 
Given an square matrix, 
turn it by 90 degrees in anti-clockwise direction 
without using any extra space
*/
function rotateMatrix(matrix){
    const len = matrix.length
    for(let i=0; i<len/2; i++){
        for(let j=i; j<len-i-1; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][len-1-i]
            matrix[j][len-1-i] = matrix[len-1-i][len-1-j]
            matrix[len-1-i][len-1-j] = matrix[len-1-j][i]
            matrix[len-1-j][i] = temp
        }
    }
    return matrix
}

module.exports = rotateMatrix

// first attempt - prob not in place either
// function rotateMatrix(arr){
//     const tempArr = []
//     // rearrange
//     for(let i=0; i<arr.length; i++){
//         tempArr.push([])
//         tempArr[tempArr.length-1].push(arr[0].shift())
//         tempArr[tempArr.length-1].push(arr[1].shift())
//         tempArr[tempArr.length-1].push(arr[2].shift())
//     }
//     // restock arr
//     for(let i=0; i<arr.length; i++){
//         const popped = tempArr.pop()
//         arr[i].push(...popped)
//     }
//     return arr
// }