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
        this.root === null ? this.root = newNode : this.insertNode(this.root, newNode)
    }
    insertNode(currentNode, newNode){
        if(newNode.data < currentNode.data){
            currentNode.left = newNode.data
        } else if (newNode.data > currentNode.data){
            currentNode.right = newNode.data
        }
    }
}

module.exports = {Node, BinarySearchTree} 