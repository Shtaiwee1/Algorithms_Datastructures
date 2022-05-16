
/*
INSERT
Adding a node in a Doubly Linked List by a certain position

Insert pseudocode
Let's visualize this!

If the index is less than zero or greater than or equal to the length return false
If the index is 0, unshift
If the index is the same as the length, push
Use the get method to access the index -1
Set the next and prev properties on the correct nodes to link everything together
Increment the length 
Return true
*/

/*
REMOVE
Removing a node in a Doubly Linked List by a certain position

Remove pseudocode
Let's visualize this!

YOUR
TURN
*/

/*
REMOVE
Removing a node in a Doubly Linked List by a certain position

Remove pseudocode
Let's visualize this!

If the index is less than zero or greater than or equal to the length return undefined
If the index is 0, shift
If the index is the same as the length-1, pop
Use the get method to retrieve the item to be removed
Update the next and prev properties to remove the found node from the list
Set next and prev to null on the found node
Decrement the length
Return the removed node.
YOUR
TURN
Reverse
Reversing a Doubly Linked List in place!
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

    unshift(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //check if the list is empty set the head and tail to the new node
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        //else set the next property for the new node to be the head
            newNode.next = this.head
        //set the prev property for the head to be the new ndoe
            this.head.prev = newNode;
        //set the head to the new node
            this.head = newNode;
        }
        //increment the length and return the list
        this.length++;
        return this;
        
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

    shift(){
        //create a variable to store the old head to return it later
        let oldHead = this.head;
        //check if the length is 0 return undefined
        if(this.length === 0 ) return undefined;
        //check if the length is 1 set head and tail to null
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        //else set the next property for the old head to be the new head
            this.head = oldHead.next
        //set old head next property to null
            oldHead.next = null;
        //set the new head prev property to null
            this.head.prev = null;
        }
        //decrement te length and returrn the old head
        this.length --;
        return oldHead;
    }


    insert(index , val){
        //check if the index is valid
        if(index < 0 || index > this.length) return false;
        //if the index is 0 use unshift if it equals the length use push to Adding
        if(index === 0) return !!this.unshift(val);
        if(index === this.length)return !!this.push(val)
        //create a new node using the inserted val
        let newNode = new Node(val)
        //use the get method to access the node before the targeted one save it in variable called before node
        let beforeNode = this.get(index - 1)
        //set the next property for the before Node to be after node save it in a variable called after node
        let afterNode = beforeNode.next
        //set the next properties and prev properties for before and after and connect them to the newNode
        beforeNode.next = newNode
        newNode.prev = beforeNode;
        afterNode.prev = newNode;
        newNode.next = afterNode
        //increment the length by 1 and return true
        this.length ++;
        return true
        
    }

    remove(index){
        //check if the index is valid
        if(index < 0 || index >= this.length) return false;
        //if index =0 use shift and if index = length-1 use pop
        if(index ===0 )return this.shift()
        if(index === this.length-1 )return this.pop()
        //using the get method to access the targeted node and save it in a variable called removed node
        let removedNode = this.get(index)
        // set the next and prev property for the removed node to two variables before and after nodes
        let beforeNode = removedNode.prev
        let afterNode = removedNode.next;
        //connect the before and after nodes
        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        //set the prev and after properties for the removed node to null
        removedNode.next = null;
        removedNode.prev = null;
        //decrement the length and return the removed node
        this.length --;
        return removedNode;
    }
}

let list = new DoublyLinkedList();




/*
Big O
of Doubly Linked Lists
Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(N)

Technically searching is O(N / 2), but that's still O(N)
*/


/*
RECAP!
Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
Better than Singly Linked Lists for finding nodes and can be done in half the time!
However, they do take up more memory considering the extra pointer
Doubly linked lists are used to implement other data structures and certain types of caches
*/