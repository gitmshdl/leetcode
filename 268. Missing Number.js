var missingNumber = function(nums) {
    let sum=nums.length*(nums.length+1)/2
    for (let num of nums){
        sum-=num
    }
    return sum
};
