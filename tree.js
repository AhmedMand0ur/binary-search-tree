import { Node } from "./node.js";


export class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(array) {
        const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b);

        function buildBalancedBST(start, end) {
            if (start > end) return null;

            const mid = Math.floor((start + end) / 2);
            const root = new Node(sortedUniqueArray[mid]);

            root.left = buildBalancedBST(start, mid - 1);
            root.right = buildBalancedBST(mid + 1, end);

            return root;
        }

        this.root = buildBalancedBST(0, sortedUniqueArray.length - 1);
    }


    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode; // If tree is empty, set root to the new node
            return;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) return; // Ignore duplicate values

            if (value < current.value) {
                // Go to the left subtree
                if (current.left === null) {
                    current.left = newNode; // Insert as left child
                    return;
                }
                current = current.left;
            } else {
                // Go to the right subtree
                if (current.right === null) {
                    current.right = newNode; // Insert as right child
                    return;
                }
                current = current.right;
            }
        }
    }


    delete(value) {
        this.root = this._deleteRec(this.root, value);
    }

    _deleteRec(root, value) {
        if (root === null) return null; // Base case: value not found

        if (value < root.value) {
            root.left = this._deleteRec(root.left, value); // Search in left subtree
        } else if (value > root.value) {
            root.right = this._deleteRec(root.right, value); // Search in right subtree
        } else {
            // Node found! Now we handle 3 cases:

            // Case 1: No children (leaf node)
            if (root.left === null && root.right === null) {
                return null;
            }

            // Case 2: One child (replace with the only child)
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Case 3: Two children (replace with inorder successor)
            let successor = this._findMin(root.right);
            root.value = successor.value; // Copy successor value
            root.right = this._deleteRec(root.right, successor.value); // Delete successor
        }
        return root;
    }

    // Helper function to find the smallest value in a subtree
    _findMin(root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root;
    }


    find(value) {
        let current = this.root;

        while (current !== null) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }


    levelOrder(callback) {
        if (typeof callback !== "function") throw new Error("Expected an argument of type function");

        if (!this.root) return;

        let queue = [this.root];

        while (queue.length !== 0) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            callback(current);
        }
    }


    #_traverse(node, callback, order) {
        if (!node) return;

        if (order === "pre") callback(node);
        this.#_traverse(node.left, callback, order);
        if (order === "in") callback(node);
        this.#_traverse(node.right, callback, order);
        if (order === "post") callback(node);
    }

    inOrder(callback) {
        if (typeof callback !== "function") throw new Error("Expected a function");
        this.#_traverse(this.root, callback, "in");
    }

    preOrder(callback) {
        if (typeof callback !== "function") throw new Error("Expected a function");
        this.#_traverse(this.root, callback, "pre");
    }

    postOrder(callback) {
        if (typeof callback !== "function") throw new Error("Expected a function");
        this.#_traverse(this.root, callback, "post");
    }


    height(node) {
        if (!node) return -1; // Empty node has height -1

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }


    depth(node) {
        let current = this.root;
        let depthCount = 0;

        while (current) {
            if (node === current) return depthCount;

            if (node.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }

            depthCount++;
        }

        return null;
    }



    isBalanced() {
        function checkHeight(node) {
            if (!node) return 0; // Base case: null node has height 0

            let leftHeight = checkHeight(node.left);
            let rightHeight = checkHeight(node.right);

            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1; // If unbalanced, return -1
            }

            return Math.max(leftHeight, rightHeight) + 1; // Return height of current node
        }
        return checkHeight(this.root) !== -1; // If -1 is returned, tree is unbalanced
    }



    rebalance() {
        let sortedValues = [];

        // Use in-order traversal to get sorted values
        this.inOrder((node) => sortedValues.push(node.value));

        // Rebuild the tree using sorted values
        this.buildTree(sortedValues);
    }



    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;

        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }

        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }




}








