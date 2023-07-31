/*
STACK
LIFO- Plates

two main operations - push and pop

GOOD for - 
- checking history

> browser history
> undo operation
> Expression conversion
> Call stack runtime
*/

//Stack implementation
{
    class Stack {
        constructor() {
            this.items = []
        }

        push(element) {
            this.items.push(element);
        }

        pop() {
            return this.items.pop();
        }

        peek() {
            return this.items[this.items.length - 1]
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


    const stack = new Stack();
    console.log(stack.isEmpty())

    stack.push(5);
    stack.push(25);
    stack.push(9);
}


