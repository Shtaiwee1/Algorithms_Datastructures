/*
DFS - InOrder

left - root - right

Steps
Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
If the node has a left property, call the helper function with the left property on the node
Push the value of the node to the variable that stores the values
If the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable
*/



//solution
/*
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();



*/

//practice

class Node{
    constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
}



class BST{
    constructor(){
        this.root = null;
    }


    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }


    DFSInOrder(){
        //repeat the same steps as mentioned in the previous search types 
        var data =[];
        function traverse(current){
            if(current.left) traverse(current.left)
            data.push(current.value)
            if(current.right) traverse(current.right)
            
        }
        traverse(this.root)
        return data;
        // only change the place of the line where you push to the data array
        //you must push to data array after you traverse the left side so you reach the bottom of the left side push all of it to the array then push the root then go to the bottom of the right side  and push all of it
    }
}



let tree = new BST()
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSInOrder();



/*

Notes:

DFS and BFS have the same time complexity we visit each node once but they differ in space complexity


In a wider tree we use DFS less space complexity less values to keep track of in the queue array
In a deeper tree we use BFS less space complexity less values to keep track of in the queue array


InOrder DFS always returns a sorted array

/*
RECAP
Trees are non-linear data structures that contain a root and child nodes
Binary Trees can have values of any type, but at most two children for each parent
Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
We can search through Trees using BFS and DFS
*/