/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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
function binaryTreePaths(root: TreeNode | null): string[] {
    // const res: string[] = [];
    // if (root === null) return res;

    // function recur(cur: TreeNode, path: number[], ): void{
    //     path.push(cur.val);//将当前节点值加入路径
    //     //检查当前节点是否为叶子节点
    //     if (cur.left === null && cur.right === null) {
    //         //使用join将path转换为字符串并存储到res
    //         res.push(path.join('->'));
    //     } else {
    //         cur.left && recur(cur.left, path);
    //         cur.right && recur(cur.right, path);
    //     }
    //     //回溯，移除当前节点
    //     path.pop();
    // }
    // recur(root, []);
    // return res;

    //迭代
    let stack: TreeNode[] = [];
    let pathArr: string[] = [];
    let res: string[] = [];

    if (root === null) return res;
    stack.push(root);
    pathArr.push(String(root.val));
    while (stack.length > 0) {
      let cur: TreeNode = stack.pop()!;
      //path 表示根节点到当前节点的路径
      let path = pathArr.pop()!; //获取当前节点的路径
      // 检查是否为叶子节点
      if (cur.left === null && cur.right === null) {
        res.push(path);
      }
      if (cur.right) {
        //更新右子节点的路径
        stack.push(cur.right); //path当前的值是到达 cur的路径（例如 "1->2"）
        //通过字符串拼接，将右子节点的值添加到当前路径中，形成新的路径字符串（例如 "1->2->3"）。
        pathArr.push(path + "->" + cur.right.val);
      }
      if (cur.left) {
        stack.push(cur.left);
        pathArr.push(path + "->" + cur.left.val);
      }
    }
    return res;
};
// @lc code=end

