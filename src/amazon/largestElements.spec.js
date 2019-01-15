const findLargest = require('./largestElements')

describe("finding largest numbers in an array",()=>{
    const arr = [1,23,12,9,30,2,50]
    it('should return an array',()=>{
        expect(Array.isArray(findLargest(arr, 3))).toBe(true)
    })
    it('should return an array the largest K numbers',()=>{
        // K is second parameter
        expect(findLargest(arr, 3)).toContain(50,30,23)
        expect(findLargest(arr, 3).length).toBe(3)
    })
})