class OptimizedQueue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        var item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    isEmpty() {
        return (this.rear - this.front) === 0;
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }
}


const newQ = new OptimizedQueue();

newQ.print();
newQ.enqueue(10);
newQ.enqueue(430);
newQ.enqueue(40);
newQ.dequeue();
console.log(newQ.peek());
newQ.print();