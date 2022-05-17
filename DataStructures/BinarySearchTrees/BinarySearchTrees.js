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
