/*
We know what lists are...
but doubly?
Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!
*/

/*
Comparisons with
Singly Linked Lists
More memory === More Flexibility

It's almost always a tradeoff!
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
}

let list = new DoublyLinkedList()

//try it out
let newNode = new Node(5)

newNode.next = new Node(5)
newNode.next.prev = newNode;