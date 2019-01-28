/* 
Given an square matrix, 
turn it by 90 degrees in anti-clockwise direction 
without using any extra space
*/
function rotateMatrix(arr){
    const tempArr = []
    // rearrange
    for(let i=0; i<arr.length; i++){
        tempArr.push([])
        tempArr[tempArr.length-1].push(arr[0].shift())
        tempArr[tempArr.length-1].push(arr[1].shift())
        tempArr[tempArr.length-1].push(arr[2].shift())
    }
    console.log("GGG",tempArr)
    // restock arr
    for(let i=0; i<arr.length; i++){
        const popped = tempArr.pop()
        arr[i].push(...popped)
        // arr[i].push(tempArr[1])
        // arr[i].push(tempArr[2])
    }
    return arr
}

module.exports = rotateMatrix