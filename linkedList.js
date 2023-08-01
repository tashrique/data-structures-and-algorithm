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
            printList += current.value + " > ";
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
        //Check if index is okay
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        const node = new Node(value);
        var prev = this.head;

        for (var i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }

    remove(index) {
        //Check if index is okay
        if (index < 0 || index > this.size) {
            return;
        }

        var removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
            this.size--;
            return removeNode;
        }

        else {
            var prev = this.head;

            for (var i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode;
    }

    removeValue(value) {
        if (this.isempty()) {
            return null;
        }

        var removeNode;

        if (this.head.value === value) {
            this.head = removeNode.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isempty()) {
            return -1;
        }

        var prev = this.head;
        while (prev.next && prev.next.value !== value) {
            prev = prev.next;
        }
        if (prev.next) {
            return prev.next;
        }

        return -1;
    }

    reverse() {
        if (this.size < 2) {
            return this;
        }
        var prev = null;
        var curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }


}


const list = new LinkedList();


list.prepend(20);
list.prepend(30);
list.prepend(6);
list.prepend(8);
list.append(600);
list.insert(2323, 5);
list.print();
// list.remove(4);
// list.removeValue(2323);
// console.log(list.search(30));
// console.log(list.isempty());
// console.log(list.getSize());
list.reverse();
list.print();