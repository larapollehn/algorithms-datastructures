export class TreeNode<T> {
    public data: T;
    public left: TreeNode<T>;
    public right: TreeNode<T>;


    constructor(data: T, left: TreeNode<T>, right: TreeNode<T>) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BinarySearchTree<T> {
    public head: TreeNode<T>;

    insert(t: T): void {

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
