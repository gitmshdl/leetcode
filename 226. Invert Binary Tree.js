var invertTree = function(root) {
    if(!root) return null
    temp=root.left
    root.left=root.right
    root.right=temp
    invertTree(root.right)
    invertTree(root.left)
    return root
};
