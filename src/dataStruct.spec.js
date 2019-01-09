const Stack = require('./dataStruct')

describe ('the Stack data structure',()=>{
    it('should construct the stack with the defined capacity',()=>{
        let stack = new Stack(3)
        expect(stack.items).toEqual([])
        expect(stack.capacity).toEqual(3)
    })
})