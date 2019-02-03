const onlineTest = require('./test')

describe('test',()=>{
    it('should pass',()=>{
        onlineTest()
        expect(true).toBe(true)
    })
})