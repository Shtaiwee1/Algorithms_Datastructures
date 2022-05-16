/*
What is a linked list?
A data structure that contains a head, tail and length property.

Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
*/






/*
Comparisons with Arrays
Lists 

Do not have indexes!
Connected via nodes with a next pointer
Random access is not allowed
Arrays

Indexed in order!
Insertion and deletion can be expensive
Can quickly be accessed at a specific index
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
        //set the value to a new node
        let newNode = new Node(val)
        //if head doesn't exist assign the head and tail to the new node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
        //if the head exists assign the new node to the tail and move the marker next of the tail over
        this.tail.next = newNode; //the next marker of the tail must always come first in assignment otherwise the tail will keep pointing to itself infinitely and head will point to null
        this.tail = newNode;
            
            
        
        }
        //increment the length of the linked list
        this.length++;
        //return the list
        return this;
        
    }
}

//A bad way to represent a linked list

//let firstNode = new Node(5);
//firstNode.next = new Node(6);
//firstNode.next.next = new Node(7);
//firstNode.next.next.next = new Node(8);

//type firstNode to the console to see the structure of the first node

let newList = new SinglyLinkedList()
newList.push("hello")
newList.push("hell noooo")
newList.push("last")
