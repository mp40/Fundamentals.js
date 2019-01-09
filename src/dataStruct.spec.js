const Stack = require('./dataStruct')

describe ('the Stack data structure',()=>{
    let stack = new Stack(3)
    it('should construct the stack with the defined capacity',()=>{
        expect(stack.items).toEqual([])
        expect(stack.capacity).toEqual(3)
    })
    it('should have an isEmpty method that returns true if Stack is empty',()=>{
        expect(stack.isEmpty()).toBe(true)
    })
})