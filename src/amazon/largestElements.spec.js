const findLargest = require('./largestElements')

describe("finding largest numbers in an array",()=>{
    const arr = [1,23,12,9,30,2,50]
    it('should return an array',()=>{
        expect(Array.isArray(findLargest(arr, 3))).toBe(true)
    })
    it('should return an array the largest K numbers',()=>{
        // K is second parameter
        const input = [100, -40, 500, -124, 0, 21, 7]
        //const sorted = [-124, -40, 0, 7, 21, 100, 500]
        expect(findLargest(arr, 3)).toContain(50,30,23)
        expect(findLargest(arr, 3).length).toBe(3)
        expect(findLargest(input,2)).toEqual([100,500])
        expect(findLargest(input,4)).toEqual([7, 21, 100,500])
    })
})