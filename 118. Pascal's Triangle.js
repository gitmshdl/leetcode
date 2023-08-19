var generate = function(numRows) {
    const res=[]
    res.push([1])
    for (let i=1;i<numRows;i++){
        const list=[]
        list.push(1)
        for (let j=1;j<res[i-1].length;j++){
            list[j]=res[i-1][j-1]+res[i-1][j]
        }
        list.push(1)
        res.push(list)
    }
    return res
};
