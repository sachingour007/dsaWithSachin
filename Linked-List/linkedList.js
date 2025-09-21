class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    } else if (index === this.size) {
      this.addAtTail(val);
      return;
    } else {
      let newNode = new Node(val);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      newNode.next = curr.next;
      curr.next = newNode;
    }

    this.size++;
  }

  getElement(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.size) {
      return;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }
    console.log(result + " -> null");
  }
}

let list = new MyLinkedList();
list.addAtHead(1);
list.addAtTail(5);
list.addAtIndex(1, 6);
list.addAtIndex(0, 9);
list.addAtIndex(4, 10);
list.deleteAtIndex(3);

list.print();
