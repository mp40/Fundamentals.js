const Stack = require('./dataStruct')

describe ('the Stack data structure',()=>{
    // Set Up - define varable undefined, 
    // then run beforeEach to assign value before each test
    let stack = undefined;
    beforeEach(() => {
        stack = new Stack(3)
      })
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
    it('should have an isFull method returning true when Stack is at capacity',()=>{
        for(let i =0; i<3; i++){
            stack.items.push(i);
        }
        expect(stack.isFull()).toBe(true)
    })
    it('should have isFull return false when Stack under capacity', ()=>{
        expect(stack.isFull()).toBe(false)
    })
})

describe('the Stack should have push method that adds item to end of stack',()=>{
    
    // Set Up
    let stack = undefined;
    beforeEach(()=>{
        stack = new Stack(3)
    })

    it('should new items to top of Stack',()=>{
        stack.push(2);
        expect(stack.items[stack.items.length-1]).toBe(2)
        stack.push(4)
        expect(stack.items[stack.items.length-1]).toBe(4)
    })
})