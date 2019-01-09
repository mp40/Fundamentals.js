class Stack {
    constructor(capacity){
        this.items = [],
        this.capacity = capacity
    }
    isEmpty(){
        return (this.items.length < 1) ? true : false
    }
}

module.exports = Stack