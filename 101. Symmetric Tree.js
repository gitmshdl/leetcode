var isSymmetric = function(root) {
    const recurse=(l,r)=>{
        if (!l&&!r) return true
        if (!l||!r||l.val!==r.val) return false
        return recurse(l.right,r.left)&&recurse(l.left,r.right)
    }
    return recurse(root.left,root.right)
};
