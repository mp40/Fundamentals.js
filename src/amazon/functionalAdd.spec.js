const add = require('./functionalAdd')

describe('functional addition',()=>{
    it('return correct result with two parameters',()=>{
        expect(add(2,5)).toBe(7)
    })
    it('returns correct result functionaly',()=>{
        expect(add(2)(5)).toBe(7)
    })
})