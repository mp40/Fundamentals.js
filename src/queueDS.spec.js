const Queue = require('./queueDS')

describe.only('the Queue data structure',()=>{
    // Set Up
    let queue = undefined;
    beforeEach(()=>{
        queue = new Queue(3)
    })
    it('should construct the Queue with a defined capacity',()=>{
        expect(queue.items).toEqual([])
        expect(queue.capacity).toEqual(3)
    })
    it('should have an isEmpty method which returns true when queue is empty',()=>{
        expect(queue.isEmpty()).toBe(true)
    })
    it('should have isEmpty return false is Queue not empty',()=>{
        queue.items.unshift(2)
        expect(queue.isEmpty()).toBe(false)
    })
    it('should have an isFull method with returns true if Queue full',()=>{
        for (let i=0; i<3; i++){
            queue.items.unshift(i)    
        }
        expect(queue.isFull()).toBe(true)
    })
    it('should have isFull return false is Queue not full',()=>{
        expect(queue.isFull()).toBe(false)
    })
    describe('the Queue should have an enqueue method',()=>{
        it('should insert the element at the start of the Queue',()=>{
            queue.enqueue(2)
            queue.enqueue(1)
            expect(queue.items[0]).toBe(1)
        })
        it('should return "Full" is Queue already full',()=>{
            queue.items = [2,2,2];
            expect(queue.enqueue(9)).toBe("Full")
        })
        it('should return the element enqueued',()=>{
            expect(queue.enqueue(7)).toBe(7)
        })
    })
})