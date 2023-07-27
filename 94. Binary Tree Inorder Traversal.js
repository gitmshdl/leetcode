var inorderTraversal = function(root) {
    const res=[]
    let node = root

    while (node) {
        if (!node.left) {
            res.push(node.val)
            node=node.right
        } else {
            const pred = findPredecessor(node)
            if (pred.right===node) {
                pred.right=null
                res.push(node.val)
                node=node.right
            } else {
                pred.right=node
                node=node.left
            }
        }
    }return res
};

const findPredecessor=(root) => {
    let node=root.left
    while (node.right && node.right !== root) {
        node=node.right
    }return node
}
