/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function countNodes(root: TreeNode | null): number {
    
    if (!root) return 0;
    
  let leftDep: number = 0,
    rightDep: number = 0;
  let curNode: TreeNode | null = root;
  //利用完全二叉树的性质，分别遍历左右子树
  while (curNode !== null) {
    leftDep++;
    curNode = curNode.left;
  }
  curNode = root;
  while (curNode !== null) {
    rightDep++;
    curNode = curNode.right;
  }
  if (leftDep === rightDep) {
    //满二叉树的情况
    return 2 ** leftDep - 1;
  }
  //如果不是满二叉树，递归计算左子树和右子树的节点数量，并加上根节点
      return countNodes(root.left) + countNodes(root.right) + 1;
    
    //迭代
    // let queue: TreeNode[] = [root];
    // let count: number = 0;
    // let curNode: TreeNode;
    // while (queue.length > 0) {
    //     let size = queue.length;
    //     for (let i = 0; i < size; i++){
    //         curNode = queue.shift()!;
    //         count++;
    //         curNode.left && queue.push(curNode.left);
    //         curNode.right && queue.push(curNode.right);
    //     }
    // }
    // return count;

};
// @lc code=end

