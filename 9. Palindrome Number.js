/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x < 0) return false
    let reverse = 0

    for(i=x; i > 0; i = Math.floor(i/10)) reverse = reverse*10+i%10

    return reverse===x
};

// const isPalindrome = (x) => x==x.toString().split('').reverse().join('')
