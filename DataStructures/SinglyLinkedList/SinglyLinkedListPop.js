/*

Popping pseudocode
Let's visualize this!

If there are no nodes in the list, return undefined
Loop through the list until you reach the tail
Set the next property of the 2nd to last node to be null
Set the tail to be the 2nd to last node
Decrement the length of the list by 1
Return the value of the node removed
*/
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }

    push(val){
        let newNode = new Node(val);
        //if the head doesn't exist assign the head and tail to the new node
        if(!this.head){
        this.head = newNode
        this.tail = this.head
            
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        
    }

    pop(){
         //if the length of the list is zero return undefined
        if(!this.head) return undefined;
        
        //create two new variables that start at the beginning of the list and are equal to one another
        let current = this.head; //we must not use this keyword with newTail and current otherwise we will get undefined
        let newTail = current
       
        
        //traverse through the list until the tail is found which has the next value of null
        while(current.next){
        //the newTail must always be one step earlier to the current so the current is incremented and then the next loop will assign the newTail to the current
        newTail = current
        current = current.next;
        }

            //take the previous node(newTail) for the old tail set the value of the tail to it and set the marker of the tail to null  
        this.tail = newTail;
        this.tail.next = null;
        //decrement the length of the list
        this.length--
        //consider the case of an empty list
        if(this.length === 0){  //the order here is important if the condition came after the below transition pop method will go into negative length which is not logical it should stop at length 0 
            this.head= null;
            this.tail = null;
        }
        
        return current;
        
    }
    
}






let list = new SinglyLinkedList()
//list.push("hello")
//list.pop()
//list.push("Helloo")
//list.push(2)
//list.push(true)

//a linked list can contain any combination of datatypes at once

