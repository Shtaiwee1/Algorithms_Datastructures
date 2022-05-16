/*
Shifting pseudocode
!

If there are no nodes, return undefined
Store the current head property in a variable
Set the head property to be the current head's next property
Decrement the length by 1
Return the value of the node removed
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

    shift(){
        //save the head to a variable to return it later
        let oldHead = this.head;
        //assign the head value to the next node
        this.head = oldHead.next
        //decrement the length by 1
        this.length--;
        //consider the length of 0 linkedlist and assign both head and tail to null;
        if(this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        //return the removed head
        return oldHead
    }
    
}


let list = new SinglyLinkedList()
