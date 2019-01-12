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
            if (currentNode.left === null){
                currentNode.left = new Node(newNode.data)
            } else {
                //recurse the left Node
                this.insertNode(currentNode.left, newNode)
            }
        } else if (newNode.data > currentNode.data){
            if(currentNode.right === null){
                currentNode.right = new Node(newNode.data)
            } else {
                //recurse the right Node
                this.insertNode(currentNode.right, newNode)
            }
            
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(root, dataValue){
        if(root === null) {
            return null
        }
        
        if(dataValue < root.data){
            if(root.left.data === dataValue){
                root.left = null
                return root
            }
        }

        if(dataValue > root.data){
            if(root.right.data === dataValue){
                root.right = null
                return root
            }
        }
    }
}

module.exports = {Node, BinarySearchTree} 