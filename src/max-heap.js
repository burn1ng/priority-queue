const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.data = data;
		this.priority = priority;
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		this.node = node;
		if(this.root === null) {
			this.root = node;
		}
		this.parentNodes.push( node );
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
