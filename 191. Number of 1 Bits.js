var hammingWeight = function(n) {
    let output=0
    for (let i=0;i<32;i++){
        if (n&1===1) output++
        n=n>>>1
    }return output
};
