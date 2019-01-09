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
})