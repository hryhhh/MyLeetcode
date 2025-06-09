/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
 
function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const stack: TreeNode[] = [];
    let cur: TreeNode | null = root;
    //当前还有节点未处理或栈不为空时继续循环
    while (cur||stack.length > 0) {
      while (cur) {
        stack.push(cur); //将当前节点压入栈
        cur = cur.left; //移动到左子节点
      }
      // 栈不为空，弹出栈顶节点（最左节点）并处理它
      cur = stack.pop()!;
      res.push(cur.val);

      cur = cur.right;
    }
    return res;
};
// @lc code=end

