class Queue {
    constructor(capacity){
        this.items = []
        this.capacity = capacity
    }
    isEmpty(){
        return this.items.length < 1 ? true : false
    }
    isFull(){
        return this.items.length === this.capacity ? true : false
    }
    enqueue(element){
        if(this.isFull()){
            return "Full"
        }
        this.items.unshift(element)
        return element
    }
    dequeue(){
        return this.isEmpty() ? "Empty" : this.items.shift()
    }
}

module.exports = Queue