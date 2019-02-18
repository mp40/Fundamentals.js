const {average, containedAverage, reduceAsMap, improvedMap} = require('./basicReduce')

describe("using reduce method",()=>{
    const input = [29.76, 41.85, 46.5]
    it('should return average',()=>{
        const output = 39.37
        expect(average(input)).toBe(output)
        expect(containedAverage(input)).toBe(output)
    })
    it('should double values and map new array with reduce',()=>{
        const result = [59.52, 83.7, 93]
        expect(reduceAsMap(input)).toEqual(result)
        expect(improvedMap(input,2)).toEqual(result)
    })
})