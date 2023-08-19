// var singleNumber = function(nums) {
//     const map={}
//     for(let num of nums){
//         map[num]=map[num]+1||1
//     }
//     for (let key in map){
//         if (map[key]===1) return key
//     }
// };

// const singleNumber=nums=>{
//     return nums.reduce((a,b)=>a^b,0)
// }

const singleNumber=nums=>{
    let result=0

    for (let i=0;i<nums.length;i++){
        result^=nums[i]
    }return result
}
