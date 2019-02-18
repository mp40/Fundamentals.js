const {average, containedAverage} = require('./basicReduce')

describe("using reduce method",()=>{
    it('should return average',()=>{
        const input = [29.76, 41.85, 46.5]
        const output = 39.37
        expect(average(input)).toBe(output)
        expect(containedAverage(input)).toBe(output)
    })
})