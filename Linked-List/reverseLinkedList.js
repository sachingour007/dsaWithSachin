class Node {
	constructor(val) {
		this.val = val;
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

	reverseLL() {
		let prev = null;
		let curr = this.head;

		while (curr) {
			let temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}

		this.head = prev;
		return this.head;
	}

	printLL() {
		let curr = this.head;
		let result = "";

		while (curr) {
			result = result + curr.val;
			if (curr.next) {
				result += " => ";
			}
			curr = curr.next;
		}
		console.log(result + " => null");
	}
}

let list = new MyLinkedList();
list.addAtHead(1);
list.addAtHead(2);
list.addAtHead(3);
list.addAtHead(4);
list.printLL();

list.reverseLL()
list.printLL();
