/*
合并有序列表
*/
var mergeTwoLists = function (list1, list2) {
    let pre = new ListNode(-1);
    let newlist = pre;
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            newlist.next = list1;
            list1 = list1.next;
        } else {
            newlist.next = list2;
            list2 = list2.next;
        }
        newlist = newlist.next;
    }

    newlist.next = (list1 !== null) ? list1 : list2;

    return pre.next;
};