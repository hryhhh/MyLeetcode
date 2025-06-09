/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root,res=[]) {
    // let res = [];
    // const dfs = function (root) {
        
    //     if (root === null) return null;
    //     //前序遍历：根左右
    //     res.push(root.val);
    //     //递归左子树
    //     dfs(root.left);
    //     //递归右子树
    //     dfs(root.right);
    // }
    // dfs(root);
    // return res;

    //三元运算符
    // return root
    // ? [root.val,
    // ...preorderTraversal(root.left),
    // ...preorderTraversal(root.right),
    //     ]
    // : [];
    
    //迭代法遍历
    if (root == null) return res;
    const stack = [root];
    let cur = null;
    while (stack.length) {
        cur = stack.pop();
        res.push(cur.val);
        stack.push(cur.right);
        stack.push(cur.left);

    }
    return res;
};
// @lc code=end

