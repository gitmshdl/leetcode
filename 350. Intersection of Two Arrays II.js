var intersect = function(nums1, nums2) {
    const map={}
    const res=[]
    for (let num of nums1){
        map[num]=map[num]+1||1
    }
    for (let num of nums2){
        if (map[num]>0) {
            res.push(num)
            map[num]--
        }
    }return res
};
