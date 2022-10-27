import Queue from './queue.js';

let QUEUE = new Queue();

let theResult = document.querySelector(".result");
let insert = document.querySelector(".enqueButton");
let remove = document.querySelector(".dequeButton");
let Empty = document.querySelector(".empty");


insert.addEventListener("click", (event) => {
   
   if ( QUEUE.overflow()) {
      theResult.innerHTML = "Queue Overflow"
      event.preventDefault();
  } 
  
  else {
      let addToTheQueue = document.querySelector(".insertValue").value;
      QUEUE. enqueue(addToTheQueue);
      theResult.innerHTML =  QUEUE.display();
  }
});
remove.addEventListener("click", (event) => {

   if ( QUEUE.underflow()) {
      theResult.innerHTML = "Queue Underflow"
      event.preventDefault();
  } else {
   QUEUE. dequeue();
      theResult.innerHTML =  QUEUE.display();
  }
});

Empty.addEventListener("click", () => {
   theResult.innerHTML =  QUEUE.empty();
   
});