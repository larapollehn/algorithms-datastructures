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
		if (!this.root){
			this.root = inserted_node;
		}else{
			let current: TreeNode<T> = this.root;
			let previous: TreeNode<T>;

			while (current !== null){
				if (inserted_node.data < current.data){
					previous = current;
					current = current.left;
				} else {
					previous = current;
					current = current.right;
				}
			}

			if (inserted_node.data < previous.data){
				previous.left = inserted_node;
			} else{
				previous.right = inserted_node;
			}
		}
    }

	contains(t: T): boolean {
    	return false;
	}

	/*
	 * Tips: Use high order function
	 */
	preOder(): Array<T> {
    	return new Array<T>();
	}

	/*
	 * Tips: Use high order function
	 */
	inOrder(): Array<T> {
    	return new Array<T>();
	}

	/*
	 * Tips: Use high order function
	 */
	levelOrder(): Array<T> {
    	return new Array<T>();
	}

	equals(otherTree: BinarySearchTree<T>): boolean{
		return true;
	}

}
