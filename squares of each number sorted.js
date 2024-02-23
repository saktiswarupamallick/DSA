//working of sort
//sort function sort the array in dictionary order ..not ascending   so we have give parameters to that funct
//arr.sort((x,y)=>x-y);//this sort correctly ascend
//-ve x<y(1st arg puts ffirst then 2nd) //+ve x>y (vice versa)
//arr.sort((x,y)=>y-x); //descend
//sort takes lot of instructions



//one of the extreme ends is going to give largest element
//the greater one will fill the sits  from back 
// 2 pointers i and j will come inside accod to which value went to fulfil the space

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length; 
     let result = Array(n);
     let left = 0;
     let right = n-1;
  
     for( let i=n-1; i>=0;i--){
         if(nums[left]**2 > nums[right]**2){
             result[i] = nums[left]**2;
             left ++; 
         }else{
             result[i] = nums[right]**2;
             right --;
         }
     }
     return result
     
  };