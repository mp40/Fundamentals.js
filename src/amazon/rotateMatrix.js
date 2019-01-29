/* 
Given an square matrix, 
turn it by 90 degrees in anti-clockwise direction 
without using any extra space
*/
//below is hard coded to anti-clockwise
function rotateMatrix(matrix){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
        }
      }
    matrix = matrix.reverse()  
    return matrix
}

function flipMatrix(matrix){
    for(let i=0; i<matrix.length; i++){
        for(let j = 0; j < i; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    return matrix
}

function rotateAntiClockwise(matrix){
    matrix = flipMatrix(matrix)
    matrix = matrix.reverse()
    return matrix
}

function rotateClockwise(matrix){
    matrix = matrix.reverse()
    matrix = flipMatrix(matrix)
    return matrix
}


module.exports = {rotateMatrix, rotateAntiClockwise, rotateClockwise}


// second attempt 
// function rotateMatrix(matrix){
//     const len = matrix.length
//     for(let i=0; i<len/2; i++){
//         for(let j=i; j<len-i-1; j++){
//             let temp = matrix[i][j]
//             matrix[i][j] = matrix[j][len-1-i]
//             matrix[j][len-1-i] = matrix[len-1-i][len-1-j]
//             matrix[len-1-i][len-1-j] = matrix[len-1-j][i]
//             matrix[len-1-j][i] = temp
//         }
//     }
//     return matrix
// }


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