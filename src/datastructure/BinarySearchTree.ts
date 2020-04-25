import {createSecureContext} from "tls";

export class TreeNode<T> {
    public data: T;
    public left: TreeNode<T>;
    public right: TreeNode<T>;


    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree<T> {
    public root: TreeNode<T>;

    insert(t: T): void {
        let inserted_node: TreeNode<T> = new TreeNode(t);
        if (!this.root) {
            this.root = inserted_node;
        } else {
            let current: TreeNode<T> = this.root;
            let previous: TreeNode<T>;

            while (current !== null) {
                if (inserted_node.data < current.data) {
                    previous = current;
                    current = current.left;
                } else {
                    previous = current;
                    current = current.right;
                }
            }

            if (inserted_node.data < previous.data) {
                previous.left = inserted_node;
            } else {
                previous.right = inserted_node;
            }
        }
    }

    contains(t: T): boolean {
        if (!this.root) {
            return false;
        } else {
            let current = this.root;
            while (current !== null) {
                if (current.data === t) {
                    return true;
                } else if (current.data > t) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            return false;
        }
    }

    preOder(): Array<T> {
        function _preOrder(root: TreeNode<T>, result: Array<T>) {
            result.push(root.data);
            if(root.left){
                _preOrder(root.left, result);
            }
            if(root.right){
                _preOrder(root.right, result);
            }
        }
        const result = new Array<T>();
        _preOrder(this.root, result);
        return result;
    }

    inOrder(): Array<T> {
        function _inOrder(root: TreeNode<T>, result: Array<T>) {
            if (root.left){
                _inOrder(root.left, result);
            }
            result.push(root.data);
            if (root.right){
                _inOrder(root.right, result);
            }
        }
        const result = new Array<T>();
        _inOrder(this.root, result);
        return result;
    }

    /*
     * Tips: Use high order function
     */
    levelOrder()
        :
        Array<T> {
        return new Array<T>();
    }

    equals(otherTree
               :
               BinarySearchTree<T>
    ):
        boolean {
        return true;
    }

}
