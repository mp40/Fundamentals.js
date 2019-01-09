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
    describe('the Stack should have push method that adds item to end of stack',()=>{
    
        // Set Up not neede as in scope of original Set Up
        
        it('should new items to top of Stack',()=>{
            stack.push(2);
            expect(stack.items[stack.items.length-1]).toBe(2)
            stack.push(4)
            expect(stack.items[stack.items.length-1]).toBe(4)
        })
        it('should return Full if stack already full',()=>{
            for(let i=0; i<3; i++){
                stack.push(i)
            } 
            expect(stack.push(2)).toBe("Full")
        })
        it('should return the value pushed into the Stack',()=>{
            expect(stack.push(2)).toBe(2)
        })
    })
})

