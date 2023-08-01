class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedListTails {
    constructor() {
        this.head = null;
        this.tail = this.head;
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
            printList += current.value + " > ";
            current = current.next;
        }
        console.log(printList);
    }

    prepend(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFront() {
        if (this.isempty()) {
            return null;
        } else {
            const vat = this.head.value;
            this.head = this.head.next;
            this.size--;
            return vat;
        }
    }

    removeEnd() {
        if (this.isempty()) {
            return null;
        } else {
            const vat = this.tail.value;
            if (this.size === 0) {
                this.head = null;
                this.tail = null;
            } else {
                let prev = this.head;
                while (prev.next !== this.tail) {
                    prev = prev.next;
                }
                prev.next = null;
                this.tail = prev;
            }
            this.size--;
            return vat;
        }
    }


}


const list = new LinkedListTails();

list.prepend(20);
list.prepend(30);
list.prepend(6);
list.prepend(8);
list.append(600);
list.print();
list.removeFront();
list.removeEnd();

list.print();