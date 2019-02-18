const {average} = require('./basicReduce')

describe("using reduce method",()=>{
    it('should return average',()=>{
        expect(average([29.76, 41.85, 46.5])).toBe(39.37)
    })
})