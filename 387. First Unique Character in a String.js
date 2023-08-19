var firstUniqChar = function(s) {
    const map={}
    for (let ch of s){
        map[ch]=map[ch]+1||1
    }
    for(let i=0;i<s.length;i++){
        if (map[s[i]]===1) return i
    }
    return -1
};
