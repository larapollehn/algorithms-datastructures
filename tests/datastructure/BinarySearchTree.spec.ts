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