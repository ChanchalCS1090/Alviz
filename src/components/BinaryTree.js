class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = 0;
    }
}

class BinaryTree {
    constructor() {
        this.root = new Node(null, null, null);
    }
    insert = (value) => {
        let node = new Node(value, null, null);
        let pointer = this.root;
        if (!pointer.value) { pointer.value = value; this.height = 0 }
        else while (pointer.left || pointer.right) {
            if (pointer.value > node.value) {
                if (!pointer.left) {
                    pointer.left = node;
                    if (!pointer.right) this.height += 1;
                }
                else pointer = pointer.left;
            }
            else if (pointer.value < node.value) {
                if (!pointer.right) {
                    pointer.right = node;
                    if (!pointer.left) this.height += 1;
                }
                else pointer = pointer.right;
            }
        }
        if (pointer.value > node.value) {
            if (!pointer.left) {
                pointer.left = node;
                if (!pointer.right) this.height += 1;
            }
            else pointer = pointer.left;
        }
        else if (pointer.value < node.value) {
            if (!pointer.right) {
                pointer.right = node;
                if (!pointer.left) this.height += 1;
            }
            else pointer = pointer.right;
        }
    }
}

export default BinaryTree;