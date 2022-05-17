
/*
TRAVERSING A TREE
Two ways:

Breadth-first Search
Depth-first Search
*/


/*

BFS(breadth first search)

Steps - Iteratively

Create a queue (this can be an array) and a variable to store the values of nodes visited
Place the root node in the queue
Loop as long as there is anything in the queue
Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
If there is a left property on the node dequeued - add it to the queue
If there is a right property on the node dequeued - add it to the queue
Return the variable that stores the values
*/





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

    BFS(){
        //create three variables one called node store the root in it and two empty arrays called queue and data
        var node = this.root;
        var queue = []; // array used as a helper to organize the traversal and keep track of values at the end will be empty
        var data = []; // the array that are going to return at the end
        //push the node to the queue
        queue.push(node);
        //while there are values in the queue array 
        while(queue.length){
        //push node to the array of data
            node = queue.shift()
            data.push(node.value)
            
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
        //node equals whatever is shifted from the queue array one value at a time implementing FIFO principle so we push to the end and then shift from  the beginning
        //if there is a value to the left of node push it to the queue array and do the same for the right
        //return the array of data
    }
}




let tree = new BST();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)