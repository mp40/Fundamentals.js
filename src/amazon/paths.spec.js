const paths = require('./paths')

describe('path finding',()=>{
    const o = 'o'
    const x = 'x'
    const matrix = [
        [o,o,o],
        [o,o,o],
        [o,o,o]
    ]
    it('should return array of path to end',()=>{
        expect(paths(matrix)[paths(matrix).length-1]).toEqual([2,2])
    })
    const blockedMatrix = [
        [o,x,x],
        [o,x,x],
        [o,o,o]
    ]
    it('should find a path through a blocked matrix',()=>{
        expect(paths(blockedMatrix)[paths(blockedMatrix).length-1]).toEqual([2,2])
    })
    // it('should be able to backtrack',()=>{
    //     const backMatrix = [
    //         [o,o,x],
    //         [o,x,x],
    //         [o,o,o]   
    //     ]
    //     expect(paths(backMatrix)[paths(backMatrix).length-1]).toEqual([2,2])
    // })
})