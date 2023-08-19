var sortedArrayToBST = function(nums) {

    const convert=(start,end)=>{
        if (start>end) return null
        const mid=Math.floor((start+end)/2)
        const root=new TreeNode(nums[mid])
        root.left=convert(start,mid-1)
        root.right=convert(mid+1,end)
        return root
    }
    return convert(0,nums.length-1)
}
