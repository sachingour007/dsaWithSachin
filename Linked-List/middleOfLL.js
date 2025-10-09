class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class MyLinkList {
	constructor() {
		this.size = 0;
		this.head = null;
	}

	addAtHead(val) {
		const myNode = new Node(val);
		myNode.next = this.head;
		this.head = myNode;
		this.size++;
	}

	printList() {
		let curr = this.head;
		let result = "";
		while (curr) {
			result += curr.val;
			if (curr.next) {
				result += " => ";
			}
			curr = curr.next;
		}
		console.log(result + " -> null");
	}

	printFormMiddle() {
		let slow = this.head;
		let fast = this.head;

		while (fast !== null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
		}

		console.log(slow);

		let curr = slow;
		let result = "";

		while (curr) {
			result += curr.val;
			if (curr.next) {
				result += " => ";
			}
			curr = curr.next;
		}
		console.log(result + " -> null");
	}
}

const list = new MyLinkList();
list.addAtHead(1);
list.addAtHead(2);
list.addAtHead(3);
list.addAtHead(4);
list.printFormMiddle();
list.printList();
