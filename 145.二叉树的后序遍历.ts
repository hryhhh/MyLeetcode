/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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
function postorderTraversal(root: TreeNode | null): number[] {
  //后序遍历统一迭代法
  const res: number[] = [];
  if (!root) return res;
  const stack: (TreeNode|null)[] = [root];
  let curNode: TreeNode;

  while (stack.length > 0) {
    curNode= stack.pop()!;//每次循环都从栈顶弹出一个元素
    if (curNode) {
      stack.push(curNode);//重新压入并标记
      stack.push(null);//在节点和子节点之间用null作为标记
      curNode.right && stack.push(curNode.right);
      curNode.left && stack.push(curNode.left);
      
    } else {//走到标记处，则弹出要处理的节点
      curNode = stack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
};
// @lc code=end

