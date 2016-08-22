class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left !== null && this.right !== null) {
			return;
		}
		if (this.left === null && this.right === null) {
			this.left = node;
			this.right = null;
			node.parent = this; // not in tests
		} else if (this.left !== null && this.right === null) {
			this.right = null;
			node.parent = this; // not in tests
		}
	}

	removeChild(node) {
		if (node === this.left) {
			this.left = null;
			node.parent = null;
		} else if (node === this.right) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error("passed node is not a child of this node");
		}
	}

	remove() {
		if (this.parent === null) {
			return;
		} 
		this.parent.removeChild(this);
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
