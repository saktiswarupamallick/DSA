// these will work but gives you TLE becoz not fulfiling constraints

var twoSum = function(num, target) {
    let n = num.length;
    for(let i=0 ;i<= n-2; i++){
        for(let j =i+1;j <n; j++){
            if(num[i] +num[j] == target){
              return [i+1,j+1] // to make 1-indexed array
            }
           
        } 
    }
};

//more optimized

var twoSum = function(number, target) {
   
    let n = number.length; 
   i=0;
   j=n-1  
   while(i<j){
       if(number[i] +number[j] == target){
           return [i+1,j+1];
       }
       else if (number[i] + number[j] > target){
           j--;
       }else i++;
   }
 };