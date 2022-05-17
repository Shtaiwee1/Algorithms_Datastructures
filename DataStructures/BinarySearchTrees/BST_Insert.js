/*
INSERTING A NODE
Steps - Iteratively or Recursively

Create a new node
Starting at the root
Check if there is a root, if not - the root now becomes that new node!
If there is a root, check if the value of the new node is greater than or less than the value of the root
If it is greater 
Check to see if there is a node to the right
If there is, move to that node and repeat these steps
If there is not, add that node as the right property
If it is less
Check to see if there is a node to the left
If there is, move to that node and repeat these steps
If there is not, add that node as the left property
*/


/*
solution

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
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




*/



//practice

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

    
    insert(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //check if the tree is empty set the newnode as root and return tree
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            //if not create a new variable called current and set it to root
            var current = this.root;
        //create a loop to iterate over
        while(true){
            //if the value already exists in the tree return undefined or null or false
        if(val === current.val) return undefined; //current.val must be written this way not current only
        //check if the inserted value is less than or bigger than the current
        if(val > current.val){
        //if it's bigger and there is a node to the right set current to that node else if it's bigger and there is no node to the right, place the newnode there and return tree
            if(current.right === null){
                current.right = newNode;
                return this;
            }else{
                current = current.right;
            }
        }else if(val < current.val){ //or you can say else without the condition
        //if it's smaller and there is a node to the left set current to that node else if it's smaller and there is no node to the left, place the newnode there and return tree

            if(current.left === null){
                current.left = newNode;
                return this;
            }else{
                current = current.left
            }
        }
            
        }
        
        }  
    }
}

//Note: you can't refer to the value of current as current itself otherwise the program won't work you must say current.val






let tree = new BST()
