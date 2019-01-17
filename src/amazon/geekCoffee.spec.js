const calculateRefills = require('./geekCoffee')

describe('getting coffee refills',()=>{
    it("should return the amount of the querried cup",()=>{
        expect(calculateRefills(100, 2)).toBe(50)
    })
    it('should round down',()=>{
        expect(calculateRefills(100, 4)).toBe(12)
    })
})