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

    /**
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        let runner = this.head;
        while(runner.next.next !== null) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    /**
     * @returns {boolean}
     */
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

    /**
     * @returns {boolean}
     */
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
    /**
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {}

    /**
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        const newHead = new ListNode(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    /**
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        if (this.isEmpty()) {
            return null;
        }

        const oldHead = this.head;
        this.head = oldHead.next;
        return oldHead.data;
    }

    /**
     * @returns {number|NaN} The average of the node's data.
     */
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

    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
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

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
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

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
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
emptyList.insertAtBackMany([12,13,14,15,16,17]);
// emptyList.insertAtBackMany([12]);
// emptyList.insertAtBackMany([]);
console.log(emptyList.containsRecursive(12));
console.log(emptyList.containsRecursive(15));
console.log(emptyList.containsRecursive(17));
console.log(emptyList.containsRecursive(42));


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