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

	AddAtHead(val) {
		const newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}
	PrintLinkedList() {
		let curr = this.head;
		let result = "";

		while (curr !== null) {
			result = result + curr.val + "-> ";
			curr = curr.next;
		}

		console.log(result + "null");
	}
	ReverseLL() {
		let prev = null;
		let curr = this.head

		while(curr !== null){
			let temp = curr.next;
			curr.next = prev;
			prev = curr;
			console.log(prev, "39")
			curr = temp;

		}
		this.head = prev 
	}
}

const listOne = new MyLinkedList();

listOne.AddAtHead(5);
listOne.AddAtHead(4);
listOne.AddAtHead(3);
listOne.AddAtHead(2);
listOne.PrintLinkedList();
listOne.ReverseLL();
listOne.PrintLinkedList();
