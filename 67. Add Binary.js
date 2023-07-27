var addBinary = function(a, b) {
    const m=a.length-1
    const n=b.length-1
    let carry=0
    let res=''

    for (i=m,j=n;i>=0||j>=0;i--,j--) {
        let sum = Number(a[i]||0) + Number(b[j]||0) + carry
        res=sum%2+res
        carry=sum>1?1:0
    }
    if (carry) res='1'+res
    return res
};
