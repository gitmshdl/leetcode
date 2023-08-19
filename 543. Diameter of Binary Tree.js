var diameterOfBinaryTree = function(root) {
    if(!root) return 0
    let max=0

    const dfs=root=>{
        if(!root) return 0
        let left=dfs(root.left)
        let right=dfs(root.right)
        max=Math.max(right+left,max)
        return Math.max(right,left)+1
    }
    dfs(root)
    return max
};
