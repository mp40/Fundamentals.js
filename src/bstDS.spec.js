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
    // Set Up
    let bst = undefined;
    beforeEach(()=>{
        bst = new BinarySearchTree()
    })
    //const bst = new BinarySearchTree()
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
    describe('the BinarySearchTree should have an insertNode method',()=>{
        beforeEach(()=>{
            // Set Up root value
            bst.insert(7)
            // Set Up 1st left value
            bst.insert(3)
            // Set Up 2nd right value
            bst.insert(9)
        })
        it('should compare data to current node and move it left if smaller',()=>{
            expect(bst.root.left.data).toBe(3)
            expect(bst.root.left).toEqual({
                data: 3,
                left: null,
                right: null
            })
        })
        it('should compare data to current node and it right if larger',()=>{
            expect(bst.root.right).toEqual({
                data: 9,
                left: null,
                right: null
            })
        })
        it('should recurse through tree until it finds the correct empty position',()=>{
            bst.insert(1)
            bst.insert(11)
            bst.insert(2)
            expect(bst.root.left.data).not.toBe(1)
            expect(bst.root.left.left).toEqual({
                data: 1,
                left: null,
                right: {
                    data: 2,
                    left: null,
                    right: null
                }
            })
            expect(bst.root.right.right).toEqual({
                data: 11,
                left: null,
                right: null
            })
        })
    })
    describe('the BinarySearchTree should have a remove method',()=>{
        // it("should call the removeNode method",()=>{
        //     const removeNodeSpy = jest.spyOn(bst, 'removeNode')
        //     bst.remove()
        //     expect(removeNodeSpy).toHaveBeenCalled()
        //     removeNodeSpy.mockRestore()
        // })
    })
    describe('the BinarySearchTree should have a removeNode method',()=>{
        let bst = new BinarySearchTree()
        it('should return null if tree is already empty',()=>{
            expect(bst.removeNode(bst.root, 4)).toBe(null)
        })
        it('should delete a leaf node, returning null to parent node',()=>{
            const resultAll = {
                data: 7,
                left: null,
                right: null
            }
            const resultLeft = {
                data: 7,
                left: null,
                right: {
                    data: 11,
                    left: null,
                    right: null
                }
            }
            bst.insert(7)
            bst.insert(3)
            bst.insert(11)
            expect(bst.removeNode(bst.root,3)).toEqual(resultLeft)
            expect(bst.removeNode(bst.root, 11)).toEqual(resultAll)
        })
        it('should reasign pointer to child when deleting parent node with one child',()=>{
            // bst.root = data:7, left:null, right:null
            bst.insert(3)
            bst.insert(1)
            expect(bst.removeNode(bst.root, 3).root.left).toEqual(1) 
            console.log(bst.root) 
        })
    })
})