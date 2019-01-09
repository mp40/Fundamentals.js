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
    it('should have isEmpty return false if Stack not empty',()=>{
        stack.items.push(2)
        expect(stack.isEmpty()).toBe(false)
    })
})