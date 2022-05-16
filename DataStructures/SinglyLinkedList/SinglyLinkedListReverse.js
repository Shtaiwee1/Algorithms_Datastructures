/*
Reverse pseudocode


Swap the head and tail
Create a variable called next
Create a variable called prev
Create a variable called node and initialize it to the head property
Loop through the list
Set next to be the next property on whatever node is
Set the next property on the node to be whatever prev is
Set prev to be the value of the node variable
Set the node variable to be the value of the next variable
Once you have finished looping, return the list
*/


class Node{
    constructor(val){
        this.val = val
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
        //create a node with the inserted value
        let newNode = new Node(val)
        //if there is no head set the head and tail to the newNode
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length ++;
        }else{
            //if there is a head set the next property for the head to be the newNode
            this.tail.next = newNode;
            //set the tail to the newNode
            this.tail = newNode;
            //increment the length by 1 and return the linked list
            this.length ++;
            return this;
            
        }  
    }

    print(){
        let arr=[]
        let current = this.head
        while(current){
            arr.push(current.val);//we need .val here in order to push the value only to the array not the whole node
            current = current.next
        }
        return arr;
    }


    reverse(){
        //swap the head and the tail//create a var called node and set it to head
        let node = this.head
        this.head = this.tail
        this.tail = node
        //declare a variable called next 
        let next;
        //create a variable called prev and set it to null
        let prev = null; //prev must be set to null initially because logically the first node will point to null after reversing
        //create a for loop to iterate
        for(let i=0 ; i < this.length ; i++){
        // in every loop we will store the relationship of node.next in the next variable
            next = node.next;
        //then we will set node.next to the prev node which is currently null
            node.next = prev;
        //move prev one step over and et it to node
            prev = node;
        //move node one step over and set it to next which we saved on the first step
            node = next
            
        }
         
        //return the linked list and print it
        return this;
    }
}



let list = new SinglyLinkedList()
list.push(5)


/*
    Big O
of Singly Linked Lists
Insertion -   O(1)

Removal -   It depends.... O(1) or O(N)

Searching -   O(N)

Access -   O(N)
*/


/*
    RECAP
Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
Arrays contain a built in index whereas Linked Lists do not
The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues
*/