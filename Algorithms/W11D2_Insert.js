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
         * @param {any} data The data for the new node.
         * @returns {SinglyLinkedList} This list.
         */
        insertAtFront(data) {
            const newNode = new ListNode(data);
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }

        /**
         * @returns {any} The data from the removed node.
         */
        removeHead() {
            if(this.head == null) {
                return "The list is empty - there's nothing to remove";
            }
            const newList = this.head.next;
            this.head = newList;
            return this;
        }

        // EXTRA
        /**
         * @returns {number|NaN} The average of the node's data.
         */
        average() {}

        /**
         * @returns {boolean}
         */
        isEmpty() {
            return this.head === null;
        }

        /**
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
    console.log(emptyList.insertAtFront("Hello").insertAtFront("Later"));
    console.log(emptyList.removeHead());

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