/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let output=0
  map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

  s.split('').map((num,i) => {
    if (map[num] < map[s[i+1]]) output -= map[num]
    else output += map[num]
  })

  return output
};
