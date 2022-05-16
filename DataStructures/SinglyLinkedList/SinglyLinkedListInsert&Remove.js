/*

Remove pseudocode
Let's visualize this!

If the index is less than zero or greater than the length, return undefined
If the index is the same as the length-1, pop
If the index is 0, shift
Otherwise, using the get method, access the node at the index - 1
Set the next property on that node to be the next of the next node
Decrement the length
Return the value of the node removed










Insert pseudocode
Let's visualize this!

If the index is less than zero or greater than the length, return false
If the index is the same as the length, push a new node to the end of the list
If the index is 0, unshift a new node to the start of the list
Otherwise, using the get method, access the node at the index - 1
Set the next property on that node to be the new node
Set the next property on the new node to be the previous next
Increment the length
Return true
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
    unshift(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //consider the case if there is no head
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        //set the next property for the newNode to the head
        newNode.next = this.head
        //set the head to the new node
        this.head = newNode;
        //increment the length by 1
        
        }
        //if(this.length === 0){//if the length is 0 consider edge case set both head and tail to null here we don't need an edge case for adding to the list
           // this.head = null;// when we add in push and unshift we don't need this condition just for removing
            //this.tail = null;
        //}
        this.length++;
        return this;
        //return the list
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


    insert(index , val){
        //if the index is lower than 0 or bigger than the length return false but if equal the length it is ok that means insert at the end which is push
        if(index < 0 || index > this.length) return false
        //if the index is 0 use unshift to insert
        if(index === 0)  return !!this.unshift(val)
        //if the index equals length use oush to insert
        if(index === this.length) return !!this.push(val) //!! are called double bangs which are used to return the value as a boolean //so this line will execute push which will return the whole list and then return that as a boolean which is true just to be consistent with the results of true or false but using them is optional 
        //create a new node using the given value
        let newNode = new Node(val);
        //fetch the previous node (index -1) using the get method
        let prev = this.get(index - 1)
        //save the previous node next property in a new varibale temp
        let temp = prev.next
        //set the next property for the previous to the newNode
        prev.next = newNode;
        //set the newNode next property to the old next node which is now saved in(temp)
        newNode.next = temp;
        //increment the length by 1 and return the list
        length++;
        return true
        
    }

    remove(index){
        //if the index is negative or larger than or equal the length return undefined or null or false
        if(index < 0 || index >= this.length) return undefined
        //if the index is 0 use the shift method to remove
        if(index === 0)return this.shift()
        //if the index is the length-1 use pop method to remove
        if(index === this.length - 1) return this.pop()
        //fetch the previous node to the index using get method (index-1)
        let prev = this.get(index - 1);
        //save the removed node in a variable to return it later
        let removed = prev.next;
        //set the next property for the previous node to be the next to be the next for the removed node
        prev.next = removed.next;
        //decrement the length by 1 and return the removed node
        this.length--;
        return removed;
        
    }
    
}


let list = new SinglyLinkedList()