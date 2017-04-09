class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		// if (this.left !== null && this.right !== null) {
		// 	return;
		// }
		// if (this.left === null && this.right === null) {
		// 	this.left = node;
		// 	node.parent = this;
		// } else if (this.left !== null && this.right === null) {
		// 	this.right = node;
		// 	node.parent = this;
		// }
		if (this.left === null) {
			this.left = node;
			node.parent = this;
		} else if (this.right === null) {
			this.right = node;
			node.parent = this;
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
			throw new Error("Passed node is not a child of this node");
		}
	}

	remove() {
		// if (this.parent === null) {
		// 	return;
		// }
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent === null) {return;}
		let childLeft = this.left;
		let childRight = this.right;
		let parent = this.parent;
		let parentParent = parent.parent;
		let sibling;
		let thisLeft = false;

		if (parent.left === this) {
			sibling = parent.right;
			thisLeft = true;
		} else {
			sibling = parent.left;
		}

	
		parent.left = childLeft;
		parent.right = childRight;
		childRight.parent = parent;
		childLeft.parent = parent;
		sibling.parent = this;

		parent.parent = this;
		this.parent = parentParent;
		
		if (thisLeft) {
			this.left = parent;
			this.right = sibling;
		} else {
			this.left = sibling;
			this.right = parent;
		}
	}
}

module.exports = Node;
