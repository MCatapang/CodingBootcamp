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

    // Determine if this list is empty
    isEmpty() {
        return (this.head == null ? true : false);
    }

    // Creates a new node with the given data and inserts it at the back of the list
    insertAtBack(data) {
        const newNode = new ListNode({
            "data": data,
            "next": null,
        })
        if(!this.head) {
            this.head = newNode.data
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next
            console.log(currentNode);
        }
        return this;
    }

    // Creates a new node with the given data and inserts it at the back of this list, calling itself within itself
    insertAtBackRecursive(data, runner = this.head) {}

    // Calls insertAtBack on each item of the given array
    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    // Converts this list into an array containing the data of each node
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
// console.log(emptyList.isEmpty());
console.log(emptyList.insertAtBack(15));
console.log(emptyList.insertAtBack(20));


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