var strStr = function(haystack, needle) {
    for (let i=0;i<haystack.length;i++){
        if (haystack[i]===needle[0]) {
            let substr = haystack.substring(i,i+needle.length)
            if (substr===needle) return i
        }
    }return -1
};
