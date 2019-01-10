class Node {
    constructor(data){
        this.data = data,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
     this.root = null   
    }
    insert(data){
        const newNode = new Node(data)
        if(this.root === null){
            this.root = newNode
        } else {
            this.insertNode(data)
        }
    }
    insertNode(){

    }
}

module.exports = {Node, BinarySearchTree} 