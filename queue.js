export default class Queue {
    constructor() {
       this.items = [];
       this.length = 0;
    }
   overflow(){
   if (this.items.length >= 10) {
      return true
   }else{
      return false;
   }

   }
   underflow(){
    if(this.items.length<=0){
        return true;
    }else{
      return false;
    }

   }
 enqueue (adding) {
    this.items[this.length] = adding;
    
    this.length += 1;
 }
 dequeue() {
  
   let number = this.items[0];
  
    this.length -= 1;
    this.items.shift();
    return number;
 };
 display () {
 
     return this.items ;

   };

   empty(){ 
      if (this.items.length == 0){
         return "Queue Is Empty";
      }else {
         return "Queue is Not Empty";
      }
   };
  
 }
