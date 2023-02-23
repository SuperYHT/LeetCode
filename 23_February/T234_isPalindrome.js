/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head
    let fast = head
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let post = reverseList(slow)
    while (head !== null) {
        if (post.val !== head.val)
            return false
        post = post.next
        head = head.next
    }
    return true;
};
function reverseList(head) {
    let pre = null;
    let next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}




var diameterOfBinaryTree = function (root) {
    let max = 0;
    if (root === null) {
        return 0;
    }
    const depthSearch = (node) => {
        if (node === null) {
            return 0
        }
        leftlen = depthSearch(node.left)
        rightlen = depthSearch(node.right)
        max = Math.max(leftlen + rightlen, max)
        return 1 + Math.max(leftlen, rightlen)
    }
    depthSearch(root);
    return max
};
