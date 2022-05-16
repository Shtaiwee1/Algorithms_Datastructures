/*
WHAT IS A STACK?
A LIFO data structure!

The last element added to the stack will be the first element removed from the stack
*/

/*
HOW IS IT USED?
Think about a stack of plates, or a stack of markers, or a stack of....anything.

As you pile it up the last thing (or the topmost thing) is what gets removed first.
    */

/*
WHERE STACKS ARE USED
Managing function invocations
Undo / Redo
Routing (the history object) is treated like a stack!
*/

/*
THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK
ARRAY IMPLEMENTATION
LINKED LIST IMPLEMENTATION
A STACK CLASS

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

*/
/*
PUSHING
Add a value to the top of the stack!
*/


/*
PUSHING PSEUDOCODE
The function should accept a value
Create a new node with that value
If there are no nodes in the stack, set the first and last property to be the newly created node 
If there is at least one node, create a variable that stores the current first property on the stack
Reset the first property to be the newly created node
Set the next property on the node to be the previously created variable
Increment the size of the stack by 1
*/

/*
POP
Remove a value from the top of the stack!
*/

/*
POP PSEUDOCODE
If there are no nodes in the stack, return null
Create a temporary variable to store the first property on the stack
If there is only 1 node, set the first and last property to be null
If there is more than one node, set the first property to be the next property on the current first
Decrement the size by 1
Return the value of the node removed
*/


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        //create a new node using the inserted val
        let newNode = new Node(val);
        //check if the stack is empty set first and lst to the newnode
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
        //else store first in a new variable
            let temp = this.first
        //set first to the new added node
            this.first = newNode;
        //set the next property for the new node to be the previous first
            this.first.next = temp;   
        }
        
        //return the size of the list after incrementing by 1
        return ++this.size;
    }

    pop(){
        //if the list is empty return undefined or null or false
        if(this.size === 0) return undefined;
        // if the size is 1 set last to be null
        if(this.first === this.last){
            this.last = null;
        } 
        //else store the first node in a variable to return it later
        let removedNode = this.first
        // set the next property for the first node to be the new first
        this.first = this.first.next 
        //set the next property for the old first to be null;
        removedNode.next = null;
        //decrement the length by 1 and return t he removed value
        this.size--;
        return removedNode;
    }
}



let stack = new Stack()








/*
    BIG O of STACKS
Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(N)
*/

/*
    RECAP
Stacks are a LIFO data structure where the last value in is always the first one out.
Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
They are not a built in data structure in JavaScript, but are relatively simple to implement
Insert and remove are both O(1)
*/