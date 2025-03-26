import { Tree } from "./tree.js";



const array = [2, 54, 58, 96, 41, 23, 10, 8, 77, 80, 69, 38, 21, 29, 34, 62, 90];

const BST = new Tree();

BST.buildTree(array);


console.log(BST.isBalanced());
/*
BST.inOrder(node => console.log(node.value));
BST.preOrder(node => console.log(node));
BST.postOrder(node => console.log(node));
*/

BST.insert(99);
console.log(BST.isBalanced());
BST.rebalance();

console.log(BST.isBalanced());
BST.prettyPrint();