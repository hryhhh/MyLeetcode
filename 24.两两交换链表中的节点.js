/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let cur = dummy;
    while (cur.next && cur.next.next) {
        let first = cur.next,
            second = cur.next.next;
        
        first.next = second.next;
        cur.next = second;
        second.next = first;

        cur = first;
    }
    return dummy.next;
};  
// @lc code=end

