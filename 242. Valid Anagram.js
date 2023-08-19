var isAnagram = function(s, t) {
    const map={}
    if (s.length!==t.length) return false
    for (let ch of s){
        map[ch]=map[ch]+1||1
    }
    for (let ch of t){
        if (map[ch]) map[ch]--
        else return false
    }
    return true
};
