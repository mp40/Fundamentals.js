const {Node, BinarySearchTree} = require('./bstDS') 

describe.only('the Node Class',()=>{
    const node = new Node(7)
    it('should construct Node storing the defined data',()=>{
        expect(node.data).toBe(7)
    })
    it('should construct Node with property left defined as null',()=>{
        expect(node.left).toBe(null)
    })
    it('should construct Node with property right defined as null',()=>{
        expect(node.right).toBe(null)
    })
})

describe.only("the BinarySearchTree",()=>{
    const bst = new BinarySearchTree()
    it("should construct BinarySearchTree with property root defined as null",()=>{
        expect(bst.root).toBe(null)
    })
    describe("the BinarySearchTree should have a insert method",()=>{
        it('should insert a new Node at root if root is null',()=>{
            bst.insert(7)
            expect(bst.root.data).toBe(7)
        })
        it('should call insertNode if root is not null',()=>{
            const spyInsertNode = jest.spyOn(bst, 'insertNode')
            bst.insert(7)
            bst.insert(9)
            expect(bst.root.data).toBe(7)
            expect(spyInsertNode).toHaveBeenCalled()
            spyInsertNode.mockRestore()
        })
    })
})