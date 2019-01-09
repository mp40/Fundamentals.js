class Stack {
    constructor(capacity){
        this.items = [],
        this.capacity = capacity
    }
    isEmpty(){
        return this.items.length < 1 ? true : false
    }
    isFull(){
        return this.items.length === this.capacity ? true : false
    }
    push(element){
        this.items.push(element)
    }
}

module.exports = Stack