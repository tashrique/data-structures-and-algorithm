/**
 *Linked List over Array -

 - easily inserted and removed 
 - but random access not faeasible and accessing is O(n)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isempty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        var current = this.head;
        var printList = "";
        while (current) {
            printList += current.value + " ";
            current = current.next;
        }
        console.log(printList);
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    insert(value, index) {
        const node = new Node(value);
        const finger = null;
        for(var i = 0; i < index; i++) {

        }
    }
}


const list = new LinkedList();

console.log(list.isempty());
console.log(list.getSize());
list.prepend(20);
list.prepend(30);
list.prepend(6);
list.append(600);
list.print();