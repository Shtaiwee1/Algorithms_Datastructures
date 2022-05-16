
/*
GET
Accessing a node in a Doubly Linked List by its position
*/

/*
Get Pseudocode
Let's visualize this!

If the index is less than 0 or greater or equal to the length, return null
If the index is less than or equal to half the length of the list
Loop through the list starting from the head and loop towards the middle
Return the node once it is found
If the index is greater than half the length of the list
​Loop through the list starting from the tail and loop towards the middle
Return the node once it is found
*/

/*
SET
Replacing the value of a node to the in a Doubly Linked List
*/

/*
Set pseudocode
Let's visualize this!

Create a variable which is the result of the get method at the index passed to the function
If the get method returns a valid node, set the value of that node to be the value passed to the function
Return true
Otherwise, return false
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null; // this is the only difference in the main skeleton between singly and doubly
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //check for the empty List
        if(this.length === 0){ // you can check for an empty list using (this.length===0) condition or (!this.head)  or (!this.tail)
        //if the list is empty set the head and tail to the newNode
            this.head = newNode;
            this.tail = newNode;
        }else{
        //if not set the next for the tail to the new node
            this.tail.next = newNode;
        //set the prev for the new node to the old tail
            newNode.prev = this.tail;
        //set the old tail to new node
            this.tail=newNode;  
        }
        //increment the length by 1 and return the list
        this.length++;
        return this;
    }

    pop(){
        //create a new variable called poppedNode and set it to tail to return the popped item later
        let poppedNode = this.tail;
        //check for empty list retun undefined
        if(!this.head) return undefined;
        //check if the length is 1 set head and tail to null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        //else set the tail to the popped item previous node
            this.tail = poppedNode.prev;
        //set the next property for the new tail to be null
            this.tail.next = null;
        //set the prev property for the poppedNode to be null
            poppedNode.prev = null;
       
        }
         //decrement the length and return the popped item
        this.length--; //these steps must be outside of the else statement so the length will decrement even if the length is 1
        return poppedNode;
    }

    get(index){
        //check if the index is negative or equal or or bigger than the length
        if(index < 0 || index >= this.length) return undefined;
        //check if the index is bigger than or smaller than the list length/2
        if(index < this.length/2){
        //if bigger than:
        //create a variable called count set it to 0
            let count = 0;
        //create a variable called current and set it to head
            var current = this.head;
        //create a while loop that breaks when count reaches index that means you reached the target item
            while(count !== index){
            //in every loop move current one step and increment the count
                current = current.next
                count ++;
            }
        }else{
        //else if smaller than:
        //set the count to the last item
            let count = this.length -1;
        //current will equal the tail
            var current = this.tail;
        //while loop that moves the current to previous in every loop and decrements count
            while(index !== count){
                current = current.prev;
                count--;
            }
        }
        //return current
        return current;
        //Note: this solution for get method will only work if current was declared using var not let if you use let it won't work
    }

    set(index , val){
        //use the get method to access the item using the inserted index and save that in a new variable
        let foundNode = this.get(index)
        //if the node is found set the found node val to the inserted val and return true
        if(foundNode){ //or you can say (foundNode != null)
        foundNode.val = val
        return true
        }
        //if not found return false
        return false;
    }

    
}



let list = new DoublyLinkedList()