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
        // If BST is empty
        if(root === null) {
            return null
        }
        
        // If val less than than parent node, go left
        if(dataValue < root.data){
            // If val matches data
            if(root.left.data === dataValue){
                // If node has no children
                if(root.left.left === null && root.left.right === null){
                    root.left = null
                    return root
                }
                // If left child null and right isn't
                if(root.left.left === null){
                    // delete and point to child
                }
                if(root.left.right === null){

                }
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