
/*
Set pseudocode
Let's visualize this!

This function should accept a value and an index
Use your get function to find the specific node.
If the node is not found, return false
If the node is found, set the value of that node to be the value passed to the function and return true
*/




/*
Get pseudocode
This function should accept an index
If the index is less than zero or greater than or equal to the length of the list, return null
Loop through the list until you reach the index and return the node at that specific index
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    }

    pop(){
        let newTail = this.head
        let current = this.head
        if(!this.head) return undefined
        while(current.next){
            newTail=current
            current = current.next
        }
        //if(this.length == 1){ 
          //  this.head = null;
           // this.tail = null;
           // this.length=0;
        
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if(this.length === 0){// here the if conditional must be after the decrement of the length otherwise it will not be set to null until the length reaches 0 not 1
            this.head = null; // otherwise if you want it above the condition must be as shown above length ===1
            this.tail = null;
        }
        return current   
    }

    get(index){
        //consider edge cases when index is negative or larger then the lists length and return null
        if(index < 0 || index > this.length) return null;
        //create a new variable called counter and set it to 0
        let counter = 0;
        //create a new variable called current and set it to head
        let current = this.head;
        //loop through the list until counter is equal to the inserted index
        while(counter != index){
        //each loop will move current to the next node and increment the counter by 1
            current = current.next;
            counter++;
        }
        //return current when you break out of t he loop that is when counter == index
        return current;
    }

    set(index , val){
        //use the get method to fetch the node at the specified index and save it in a variable
        let foundNode = this.get(index)
        //if the node exists assign it's value to the inserted value
        if(foundNode){
            foundNode.val = val;
            return foundNode //or you can return true
        }
        //if the node was not found return false
        return false;
        
    }
}


let list = new SinglyLinkedList()