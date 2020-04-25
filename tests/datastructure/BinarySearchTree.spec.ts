import {BinarySearchTree, TreeNode} from "../../src/datastructure/BinarySearchTree";

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
    tree.insert(27);
    tree.insert(14);
    tree.insert(10);
    tree.insert(35);
    tree.insert(31);
    tree.insert(19);
    tree.insert(42);

    expect(tree.root.data).toBe(27);
    expect(tree.root.left.data).toBe(14);
    expect(tree.root.right.data).toBe(35);

});