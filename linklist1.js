
// // What are the 4 types of linked list?
// // Types of Linked list
// // Singly Linked list.
// // Doubly Linked list.
// // Circular Linked list.
// // Doubly Circular Linked list.

// a linked list consists of nodes where each 
// node contains a data field and a reference(link) to the next node in the list. 


class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}
let head = null
let tail = null
let arr =[10,20,30,40,50]
for(element of arr){
let node = new Node(element)
if(!head){
    head = node
    tail = node
}  
    else{
         tail.next = node
         tail = tail.next
     }
}

// printing values 
for(let i = 0; i<arr.length; i++){
      console.log(head.value)
      head = head.next
}
