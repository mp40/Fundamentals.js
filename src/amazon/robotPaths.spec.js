const {
    makeMatrix,
    robotPaths,
    iteratePaths
} = require('./robotPaths')

describe('making the matrix',()=>{
    it('should contruct an NxN matrix',()=>{
        expect(makeMatrix(3).length).toBe(3)
        expect(makeMatrix(3)[0].length).toBe(3)
        expect(makeMatrix(3)[1].length).toBe(3)
        expect(makeMatrix(3)[2].length).toBe(3)
    })
    // it('should make matrix elements false',()=>{
    //     const matrix = makeMatrix(2)
    //     console.log(matrix)
    //     expect(matrix[0]).toEqual([false.false])
    // })
})

describe('robot paths',()=>{
    it('should return the correct number of paths',()=>{
        expect(robotPaths(2)).toBe(2)
        expect(robotPaths(3)).toBe(12)
        expect(robotPaths(4)).toBe(184)
    })
})

describe('iterating to find robot paths',()=>{
    it('should return the correct number of paths',()=>{
        expect(iteratePaths(2)).toBe(2)
        expect(interatePaths(3)).toBe(12)
        expect(interatePaths(4)).toBe(184)
    })
})