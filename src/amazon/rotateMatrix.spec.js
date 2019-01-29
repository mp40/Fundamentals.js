const {rotateMatrix, rotateAntiClockwise, rotateClockwise} = require('./rotateMatrix')

// const output4C = [ 
//     [13, 9, 5, 1],
//     [14, 10, 6, 2],
//     [15, 11, 7, 3],
//     [16, 12, 8, 4]
// ]
describe('rotating matrix',()=>{
    const input3 =  [
        [1,  2,  3],
        [4,  5,  6],
        [7,  8,  9]
    ]
    const output3A = [
        [3,  6,  9], 
        [2,  5 , 8], 
        [1 , 4,  7]
    ]
    
    const input4 =  [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    
    const output4A =[
        [4,8,12,16],
        [3,7,11,15],
        [2,6,10,14],
        [1,5,9,13],
    ]
    it('should rotate matrix 90 degrees anti-clockwise',()=>{
        expect(rotateMatrix(input3)).toEqual(output3A)
        expect(rotateMatrix(input4)).toEqual(output4A)
    })
})
describe('functional rotation',()=>{
    const input3 =  [
        [1,  2,  3],
        [4,  5,  6],
        [7,  8,  9]
    ]
    const output3A = [
        [3,  6,  9], 
        [2,  5 , 8], 
        [1 , 4,  7]
    ]
    
    const input4 =  [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    
    const output4A =[
        [4,8,12,16],
        [3,7,11,15],
        [2,6,10,14],
        [1,5,9,13],
    ]
    it('should rotate matrix 90 degrees anti-clockwise',()=>{
        expect(rotateAntiClockwise(input3)).toEqual(output3A)
        expect(rotateAntiClockwise(input4)).toEqual(output4A)
    })
    it('should rotate clockwise',()=>{
        const input =  [
            [1,  2,  3],
            [4,  5,  6],
            [7,  8,  9]
        ]
        const output = [
            [7,4,1],
            [8,5,2],
            [9,6,3]
        ]
        expect(rotateClockwise(input)).toEqual(output)
    })
})