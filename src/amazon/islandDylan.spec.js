const islands = require('./islandDylan')

// const matrix = [
//     ["x","x","o"],
//     ["x",'v','o'],
//     ['x','v','k'],
// ]

describe('finding islands of different type',()=>{
    //const islandMap = matrix
    
    it('should return the number of distinct islands',()=>{
        const matrix = [
            ["x","x","o"],
            ["x",'v','o'],
            ['x','v','k'],
        ]
        expect(islands(matrix)).toBe(4)
    })
    it('might work with a smaller matrix',()=>{
        const map = [
            ["y",'x'],
            ['v','x']
        ]
        expect(islands(map)).toBe(3)
    })
})