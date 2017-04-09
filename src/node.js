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
		var childLeft = this.left;
		var childRight = this.right;
		var parent = this.parent;
		var parentParent = parent.parent;
		var sibling;
		var thisLeft = false;
	
		if (parentParent !== null) {
			if (parent.parent.left === parent) {
				parentParent.left = this;
			} else {
				parentParent.right = this;
			}
		}
		if (parent.left === this) {
			sibling = parent.right;
			thisLeft = true;
		} else {
			sibling = parent.left;
		}
		if (sibling !== null) {
			sibling.parent = this;
		}
		if (childLeft !== null) {
			childLeft.parent = parent;
		}
		if (childRight !== null) {
			childRight.parent = parent;
		}
		parent.left = childLeft;
		parent.right = childRight;
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
