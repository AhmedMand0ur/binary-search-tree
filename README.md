# Binary Search Tree (BST) Project

## 📌 Overview
This project is a Binary Search Tree (BST) implementation in JavaScript as part of **The Odin Project** curriculum. It allows inserting, deleting, searching, balancing, and visualizing a BST.

## 🚀 Features
- **Build a BST** from an array (removes duplicates and sorts it).
- **Insert & Delete** nodes in the tree.
- **Find** a specific node by value.
- **Traverse** the tree using Inorder, Preorder, and Postorder traversal.
- **Check if the tree is balanced.**
- **Rebalance** the tree when it becomes unbalanced.
- **Print the tree** in a structured format.

## 🛠️ How to Use
1. Clone this repository:
   ```sh
   git clone https://github.com/AhmedMand0ur/binary-search-tree.git
   cd binary-search-tree
   ```
2. Run the project:
   ```sh
   node main.js
   ```

## 📜 Example Usage
```javascript
import { Tree } from "./tree.js";

const array = [2, 54, 58, 96, 41, 23, 10, 8, 77, 80, 69, 38, 21, 29, 34, 62, 90];
const BST = new Tree();

BST.buildTree(array);
console.log(BST.isBalanced()); // true

BST.insert(99);
console.log(BST.isBalanced()); // false

BST.rebalance();
console.log(BST.isBalanced()); // true

BST.prettyPrint();
```

## 📂 File Structure
```
├── node.js  (Defines Node class)
├── tree.js  (Defines Tree class & methods)
├── main.js  (Runs and tests the BST implementation)
```

## 🏗️ Learning Outcomes
- Understanding Binary Search Trees.
- Implementing tree traversal algorithms.
- Handling tree balancing & depth/height calculations.
- Strengthening JavaScript problem-solving skills.

## 🤝 Contributing
This project was built as part of **The Odin Project** learning path, but feel free to improve it and experiment!

## 📜 License
This project is open-source and free to use for learning purposes. 🚀

