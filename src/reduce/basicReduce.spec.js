const {average, containedAverage, reduceAsMap} = require('./basicReduce')

describe("using reduce method",()=>{
    const input = [29.76, 41.85, 46.5]
    it('should return average',()=>{
        const output = 39.37
        expect(average(input)).toBe(output)
        expect(containedAverage(input)).toBe(output)
    })
    it('should double values and map new array with reduce',()=>{
        expect(reduceAsMap(input)).toEqual([59.52, 83.7, 93])
    })
})