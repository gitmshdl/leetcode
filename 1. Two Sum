// var twoSum = function(nums, target) {
//   for (let i=0; i<nums.length; i++) {
//     for (let j=i+1; j<nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i,j]
//     }
//   }
// };

const twoSum = function(nums, target) {
  const map = {}
  for (let i=0; i<nums.length;i++) {
    // key: number, value: index
    if (map[target-nums[i]] !==undefined ) return [map[target-nums[i]],i]
    else map[nums[i]] = i
  }
}
