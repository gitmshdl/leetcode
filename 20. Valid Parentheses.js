/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {'(': ')', '{': '}', '[': ']'}
    const stack = []

    for (let ch of s) {
        if (map[ch]) stack.push(map[ch])
        else {
            if (stack.pop() !== ch) {
                return false
            }
        }
    } return !stack.length
}
