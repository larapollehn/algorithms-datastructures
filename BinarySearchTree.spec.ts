import {BinarySearchTree, TreeNode} from "../../src/datastructure/BinarySearchTree";
import exp = require("constants");

test('creating a node works', () => {
    let node: TreeNode<number> = new TreeNode(4);
    expect(node.data).toEqual(4);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
    node = new TreeNode(13);
    expect(node.data).toEqual(13);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
    node = new TreeNode(0.35);
    expect(node.data).toEqual(0.35);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);

});

test('inserting a node into the BinarySearchTree works', () => {
    const tree: BinarySearchTree<number> = new BinarySearchTree();
    expect(tree.root).toBe(undefined);

    tree.insert(27);
    expect(tree.root.data).toBe(27);
    expect(tree.root.left).toBe(null);
    expect(tree.root.right).toBe(null);

    tree.insert(14);
    expect(tree.root.left.data).toBe(14);
    expect(tree.root.left.left).toBe(null);
    expect(tree.root.left.right).toBe(null);
    tree.insert(35);
    expect(tree.root.right.data).toBe(35);
    expect(tree.root.right.left).toBe(null);
    expect(tree.root.right.right).toBe(null);

    tree.insert(19);
    expect(tree.root.left.data).toBe(14);
    expect(tree.root.left.left).toBe(null);
    expect(tree.root.left.right.data).toBe(19);
    tree.insert(31);
    expect(tree.root.right.data).toBe(35);
    expect(tree.root.right.left.data).toBe(31);
    expect(tree.root.right.right).toBe(null);
});

test('checking if tree conatins node works', () => {
    const tree: BinarySearchTree<number> = new BinarySearchTree();
    tree.insert(27);
    tree.insert(14);
    tree.insert(35);
    tree.insert(19);
    tree.insert(31);
    tree.insert(42);
    tree.insert(10);
    expect(tree.contains(27)).toEqual(true);
    expect(tree.contains(14)).toEqual(true);
    expect(tree.contains(35)).toEqual(true);
    expect(tree.contains(19)).toEqual(true);
    expect(tree.contains(31)).toEqual(true);
    expect(tree.contains(42)).toEqual(true);
    expect(tree.contains(10)).toEqual(true);

    expect(tree.contains(0)).toEqual(false);
    expect(tree.contains(17)).toEqual(false);
    expect(tree.contains(9)).toEqual(false);
    expect(tree.contains(239)).toEqual(false);
    expect(tree.contains(-6)).toEqual(false);
    expect(tree.contains(27.5)).toEqual(false);
});

test('preOrder-Traversal works', () => {
    const tree: BinarySearchTree<number> = new BinarySearchTree();
    tree.insert(27);
    tree.insert(14);
    tree.insert(35);
    tree.insert(20);
    tree.insert(31);
    tree.insert(42);
    tree.insert(10);

    const preOrder = tree.preOder();
    expect(preOrder).toEqual([27, 14, 10, 20, 35, 31, 42]);
});

test('inOrder-Traversal works', () => {
    const tree: BinarySearchTree<number> = new BinarySearchTree();
    tree.insert(27);
    tree.insert(14);
    tree.insert(36);
    tree.insert(20);
    tree.insert(31);
    tree.insert(42);
    tree.insert(10);

    const inOrder = tree.inOrder();
    expect(inOrder).toEqual([10, 14, 20, 27, 31, 36, 42]);

    const tree2: BinarySearchTree<number> = new BinarySearchTree();
    tree2.insert(7);
    tree2.insert(3);
    tree2.insert(13);
    const inOrder2 = tree2.inOrder();
    expect(inOrder2).toEqual([3, 7, 13]);

    const tree3: BinarySearchTree<number> = new BinarySearchTree();
    tree3.insert(7);
    tree3.insert(3);
    tree3.insert(13);
    tree3.insert(5);
    tree3.insert(12);
    const inOrder3 = tree3.inOrder();
    expect(inOrder3).toEqual([3, 5, 7, 12, 13]);
});

test('levelOrder-Traversal works', () => {
    const tree: BinarySearchTree<number> = new BinarySearchTree();
    tree.insert(8);
    tree.insert(3);
    tree.insert(1);
    tree.insert(5);
    tree.insert(20);
    tree.insert(15);
    tree.insert(21);
    let levelOrder = tree.levelOrder();
    expect(levelOrder).toEqual([8, 3, 20, 1, 5, 15, 21]);

    const tree2: BinarySearchTree<number> = new BinarySearchTree<number>();
    tree2.insert(9);
    tree2.insert(5);
    tree2.insert(7);
    tree2.insert(13);
    tree2.insert(10);
    levelOrder = tree2.levelOrder();
    expect(levelOrder).toEqual([9, 5, 13, 7, 10]);
});

test('comparing two trees works', () => {
    const tree1: BinarySearchTree<number> = new BinarySearchTree<number>();
    tree1.insert(8);
    tree1.insert(3);
    tree1.insert(1);
    tree1.insert(5);
    tree1.insert(20);
    tree1.insert(15);
    tree1.insert(22);
    const tree2: BinarySearchTree<number> = new BinarySearchTree<number>();
    tree2.insert(8);
    tree2.insert(3);
    tree2.insert(5);
    tree2.insert(1);
    tree2.insert(20);
    tree2.insert(22);
    tree2.insert(15);
    expect(tree1.equals(tree2)).toBe(true);

    const tree3: BinarySearchTree<number> = new BinarySearchTree<number>();
    tree3.insert(8)
    tree3.insert(1)
    tree3.insert(4)
    expect(tree1.equals(tree3)).toBe(false);
    expect(tree1.equals(tree1)).toBe(true);

    const tree4: BinarySearchTree<number> = new BinarySearchTree<number>();
    tree4.insert(8);
    tree4.insert(5);
    tree4.insert(3);
    tree4.insert(1);
    tree4.insert(22);
    tree4.insert(20);
    tree4.insert(15);
    expect(tree1.equals(tree4)).toBe(false);
});