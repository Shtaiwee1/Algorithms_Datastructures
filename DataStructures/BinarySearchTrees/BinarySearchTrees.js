/*
WHAT IS A TREE?
A data structure that consists of nodes in a parent / child relationship



Lists - linear
Trees - nonlinear


A Singly Linked List
(sort of a special case of a tree)



TREE TERMINOLOGY
Root - The top node in a tree.
Child -A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings -A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.




KINDS OF TREES
Trees
Binary Trees
Binary Search Trees





Lots of different applications!

HTML DOM
Network Routing
Abstract Syntax Tree
Artificial Intelligence
Folders in Operating Systems
Computer File Systems





    */





/*


BINARY TREES

Lots of different applications as well!

Decision Trees (true / false)
Database Indicies
Sorting Algorithms







HOW BSTS WORK
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent
*/






class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}



class BST{
    constructor(){
        this.root = null;
    }
}


let tree = new BST();

tree.root = new Node(20)
tree.root.right = new Node(32)
tree.root.left = new Node(15)
tree.root.left.right = new Node(17)


/*
Full binary tree
complete binary tree
almost complete binary tree

/*
A full binary tree is also known as 2-tree in which every node other than the leaf nodes has two child nodes. It means all the leaf nodes should be at the same level and all other internal nodes should contain two child nodes each.
*/

/*
    It follows the definition of a binary tree with some additional conditions. In a complete binary tree, all the levels of a tree are filled entirely except the last level. In the last level, nodes might or might not be filled fully. Also, let’s note that all the nodes should be filled from the left.
    */



/*
    An almost complete binary tree is a special kind of binary tree where insertion takes place level by level and from left to right order at each level and the last level is not filled fully always. It also contains 2^{L} nodes at each level except the last level.

The main point here is that if we want to insert any node at the lowest level of the tree, it should be inserted from the left. All the internal nodes should be completely filled.
    */