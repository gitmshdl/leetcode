var isPalindrome = function(s) {
    const char=s.split(/[^a-zA-Z0-9]/).join('')
    let left=0
    let right=char.length-1

    while(left<right){
        if(char[left++].toLowerCase()!==char[right--].toLowerCase()) return false
    }
    return true
};
