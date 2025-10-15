
/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return isMirror(root.left, root.right);

  //迭代
  // const queue: (TreeNode | null)[] = [root.left, root.right]
  
  // while (queue.length > 0) {
  //   //shift() 删除第一个元素并返回该元素
  //   const left:TreeNode |null =queue.shift()||null
  //   const right: TreeNode | null = queue.shift() || null
    
  //   if (!left && !right) continue //都为空，继续下一轮
  //   if (!left || !right) return false
  //   if (left.val !== right.val) return false
  //   queue.push(left.left, right.right, left.right, right.left)
  // }
  // return true
  
  //递归
  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean{
    if (!left && !right) return true //都为空
    if (!left || !right) return false
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }

};
// @lc code=end

