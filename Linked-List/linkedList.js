class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
+
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	AddAtHead(val) {
		const newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}

	AddToTail(val) {
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
	AddAtIndex(index, val) {
		const newNode = new Node(val);
		if (index === 0) {
			this.AddAtHead(val);
			return;
		} else if (index === this.size) {
			this.AddToTail(val);
		} else {
			let curr = this.head;
			for (let i = 0; i < index - 1; i++) {
				curr = curr.next;
			}
			newNode.next = curr.next;
			curr.next = newNode;
			this.size++;
		}
	}
	PrintLL() {
		let curr = this.head;
		let result = "";
		while (curr !== null) {
			result += curr.val + " -> ";
			curr = curr.next;
		}
		console.log(result + "null");
	}
	GetNode(index) {
		if (index < 0 || index >= this.size) {
			return -1;
		}
		let current = this.next;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current.val;
	}
	DeleteElement(index) {
		if (index < 0 || index >= this.size) {
			return;
		}
		if (index === 0) {
			this.head = this.head.next;
		} else {
			let current = this.head;

			for (let i = 0; i < index - 1; i) {
				current = current.next;
			}
			current.next = current.next.next;
		}
		this.size--;
	}
}

// function LinkedList() {
// 	this.head = null;

// 	this.addAtHead = function (val) {
// 		console.log("helo");
// 	};
// }

const list = new LinkedList();

list.AddAtHead(0);
list.AddToTail(5);
list.AddToTail(6);
list.AddToTail(7);
list.AddAtIndex(2, 10);
list.PrintLL();
