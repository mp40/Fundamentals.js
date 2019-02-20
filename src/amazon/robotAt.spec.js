const compute = require ('./robotAt')

describe('the robot',()=>{
    it('should return right answer',()=>{
        expect(compute('PMLPMMMLPMLPMML')).toEqual("0211000000")
    })
})