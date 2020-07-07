export default class MaxBinaryHeap<T> {
     public heap: Array<T> = [];

     insert(t:T){
         if(this.heap === undefined){
             this.heap.push(t);
         } else {
             this.heap.push(t);
             let index = this.heap.length -1;
             let parentIndex = Math.floor(((index-1)/2));
             while(this.heap[parentIndex] < this.heap[index]){
                 let currentParent = this.heap[parentIndex];
                 this.heap[parentIndex] = this.heap[index];
                 this.heap[index] = currentParent;
                 index = parentIndex;
                 parentIndex = Math.floor(((index-1)/2));
             }
         }
     }

     print(): Array<T>{
         return this.heap;
     }
}