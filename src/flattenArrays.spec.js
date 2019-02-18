const flatten = require('./flattenArrays')

describe('using reduce to flatten array',()=>{
    it('should reduce nested arrays into single array',()=>{
        expect(flatten([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6])
    })
})

