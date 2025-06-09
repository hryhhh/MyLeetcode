/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
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
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) return root2;
    if (!root2) return root1;

    // //递归 修改root1的结构
    // root1.val += root2.val;
    // root1.left = mergeTrees(root1.left, root2.left);
    // root1.right = mergeTrees(root1.right, root2.right);

    //层序遍历
    const queue1: TreeNode[] = [root1];
    const queue2: TreeNode[] = [root2];
    while (queue1.length > 0) {
        let cur1: TreeNode = queue1.shift()!;
        let cur2: TreeNode = queue2.shift()!;
        cur1.val += cur2.val;
        if (cur1.left && cur2.left) {
            queue1.push(cur1.left);
            queue2.push(cur2.left);

        } else if (cur1.left === null) {
          //若不做判断 合并后的树在 cur1.left 为空的位置就会缺失 root2 的左子树的信息。
          cur1.left = cur2.left;
        }
        if (cur1.right && cur2.right) {
            queue1.push(cur1.right);
            queue2.push(cur2.right);
        } else if(cur1.right===null){
            cur1.right = cur2.right;
        }
    }
    return root1;
};
// @lc code=end

