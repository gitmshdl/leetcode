// var majorityElement = function(nums) {
//     const map={}
//     for (let num of nums){
//         map[num]=map[num]+1||1
//     }
//     for (let key in map){
//         if (map[key]>nums.length/2) return key
//     }
// };
const majorityElement=nums=>{
    let count=1
    let el=nums[0]

    for (let num of nums){
        if (num===el) count++
        else {
            if (count===1) el=num
            else count--
        }
    }return el
}
