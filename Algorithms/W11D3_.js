class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    removeBack() {
        let runner = this.head;
        while(runner.next.next !== null) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    contains(val) {
        let runner = this.head;
        while(runner !== null) {
            if(runner == null) {
                return false;
            }
            if(runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    containsRecursive(val, current = this.head) {
        if(current.data === val) {
            return true;
        } else if (current.next === null) {
            return false;
        } else {
            return this.containsRecursive(val, current.next);
        }
    }

    // EXTRA
    insertAtFront(data) {
        const newHead = new ListNode(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    removeHead() {
        if (this.isEmpty()) {
            return null;
        }

        const oldHead = this.head;
        this.head = oldHead.next;
        return oldHead.data;
    }

    average() {
        let runner = this.head;
        let sum = 0;
        let cnt = 0;

        while (runner) {
            cnt++;
            sum += runner.data;
            runner = runner.next;
        }

        /**
         * Dividing by 0 will give you NaN (Not a Number), so an empty list
         * will return NaN in this case, it may make sense to allow NaN to be
         * returned, because the average of an empty list doesn't make sense and
         * it could be misleading to return 0 since 0 is the average of any
         * list with a sum of 0 (due to negatives or all zeros).
         */
        return sum / cnt;
    }

    isEmpty() {
        return this.head === null;
    }

    insertAtBack(data) {
        const newBack = new ListNode(data);

        if (this.isEmpty()) {
            this.head = newBack;
            return this;
        }

        let runner = this.head;

        while (runner.next !== null) {
            runner = runner.next;
        }

        runner.next = newBack;
        return this;
    }

    insertAtBackRecursive(data, runner = this.head) {
    if (this.isEmpty()) {
        this.head = new ListNode(data);
        return this;
    }

    if (runner.next === null) {
        runner.next = new ListNode(data);
        return this;
    }
    return this.insertAtBackRecursive(data, runner.next);
    }

    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }
}

/******************************************************************* 
 Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();
console.log(emptyList.insertAtBack(13));
console.log(emptyList.insertAtBack(15));
console.log(emptyList.insertAtBack(20));
// emptyList.insertAtBackMany([12]);
// emptyList.insertAtBackMany([]);
// console.log(emptyList.containsRecursive(12));
// console.log(emptyList.containsRecursive(15));
// console.log(emptyList.containsRecursive(17));
// console.log(emptyList.containsRecursive(42));


// const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
// const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
// const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new SinglyLinkedList().insertAtBackMany([
//   -5, -10, 4, -3, 6, 1, -7, -2,
// ]);

/* node 4 connects to node 1, back to head */
// const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
// perfectLoopList.head.next.next.next = perfectLoopList.head;

/* node 4 connects to node 2 */
// const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
// loopList.head.next.next.next = loopList.head.next;

// const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
//   1, 1, 1, 2, 3, 3, 4, 5, 5,
// ]);

// Print your list like so:
// console.log(firstThreeList.toArr());