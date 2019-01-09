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
        if(this.isFull()){
            return "Full"
        }
        this.items.push(element)
        return element
    }
    pop(){
        return this.isEmpty() ? "Empty" : this.items.pop()
    }
    peek(){
        return this.isEmpty() ? "Empty" : this.items[this.items.length-1]
    }
}

module.exports = Stack