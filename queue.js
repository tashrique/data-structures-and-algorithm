/**
 QUEUE
 FIFO - Starbucks
 enqueue
 dequeue

 BEST -
- Process in orderly fashion


 ex
 - Printers
 - CPU tasks
 - CALLBACK QUEUE
 */

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    } 
}

const queue = new Queue();

queue.enqueue("Meaw");
queue.enqueue("Meaw");
queue.enqueue("Meaw");

queue.print();