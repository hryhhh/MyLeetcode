/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    let curB = headB;
    let lenA = 0, lenB = 0;
    while (curA) {
        lenA++;
        curA = curA.next;
    }
    while (curB) {
        lenB++;
        curB = curB.next;
    }
    curA = headA;
    curB = headB;
    if (lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let gap = lenA - lenB;
    while (gap--) {
        curA = curA.next;
    }
    while (curA) {
        if (curA === curB) {
            return curA
        }
        curA = curA.next;
        curB = curB.next;
    }
    return null;


};
// @lc code=end

