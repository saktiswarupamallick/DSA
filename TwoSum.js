/**
 * @param {number[]} num
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(num, target) {
    let n = num.length;
    for(let i=0 ;i<= n-2; i++){
        for(let j =i+1;j <n; j++){
            if(num[i] +num[j] == target){
              return [i,j]
            }
           
        } 
    }
};