const Stack = require('./dataStruct')

describe ('the Stack data structure',()=>{
    // Set Up
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
        // Tear Down
        stack = new Stack(3)
    })
    it('should have an isFull method returning true when Stack is at capacity',()=>{
        for(let i =0; i<3; i++){
            stack.items.push(i);
        }
        expect(stack.isFull()).toBe(true)
        // Tear Down
        stack = new Stack(3)
    })
})