const triplet = require("./pythagoreanTriplet")

describe('the pythagorean triplet',()=>{
    it('should return true if contains triplet that is a2+b2=c2',()=>{
    expect(triplet([3,1,4,6,5])).toBe(true)
    })
    it('should return false if does not cobtain triplet a2+b2=c2',()=>{
        expect(triplet([10,4,6,12,5])).toBe(false)
    })
})