const rotateMatrix = require('./rotateMatrix')

describe('rotating matrix',()=>{
    it('should rotate matrix 90 degrees anti-clockwise',()=>{
        const input =  [
            [1,  2,  3],
            [4,  5,  6],
            [7,  8,  9]
        ]
        const output = [
            [3,  6,  9], 
            [2,  5 , 8], 
            [1 , 4,  7]
        ]
        expect(rotateMatrix(input)).toEqual(output)
    })
})