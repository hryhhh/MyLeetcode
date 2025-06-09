/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class ListNode{
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function() {
    this._head = null;
    this._size = 0;
    this._tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let cur = this._head;
    
    if (index < 0 || index >= this._size) return -1;
    for (let i = 0; i < index; i++){
        cur = cur.next;
    }
    return cur.val;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let cur = new ListNode(val, this._head);
    this._head = cur;
    if (this._size === 0) {
        this._tail = cur;
    }
    this._size++;

    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let tail = new ListNode(val, null);
    if (this._tail) {
        this._tail.next = tail;
    } else {
        this._head = tail;
    }
    
    this._tail = tail;//更新尾指针
    this._size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    
    if (index < 0) {
        this.addAtHead(val);
    } else if (index === this._size) {
        this.addAtTail(val);
    } else if (index < this._size) {
        let newNode = new ListNode(val, null);
        let cur = this._head;
        let prev = null;
        for (let i = 0; i < index; i++){
            prev = cur;
            cur = cur.next;
        }
        newNode.next = cur;
        if (prev) {
            prev.next = newNode;
        } else {
            this._head = newNode;
        }
        this._size++;
    } 
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let cur = this._head;
    let prev = null;

    if (index < 0 || index >= this._size) return;

    if (index === 0) {
        this._head = cur.next;
    } else if (this._size === 1) {
        this._tail=null
    } else {
        
        for (let i = 0; i < index; i++){
            prev = cur;
            cur = cur.next;
        }
        prev.next = cur.next;
        if (index === this._size - 1) {
          // 如果删除的是尾节点，更新 _tail
          this._tail = prev;
        }
    }
    this._size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

