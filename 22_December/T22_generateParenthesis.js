var generateParenthesis = function (n) {
    var ans = new Array()
    brackets(ans, '', 0, 0, n)
    return ans
};
function brackets(ans, cur, left, right, n) {
    if (cur.length === n * 2) {
        ans.push(cur)
        return;
    }
    if (left < n) {
        cur = cur.concat('(')
        brackets(ans, cur, left + 1, right, n)
        cur = cur.slice(0, cur.length - 1)
    }
    if (right < left) {
        cur = cur.concat(')')
        brackets(ans, cur, left, right + 1, n)
        cur= cur.slice(0, cur.length - 1)
    }
}
