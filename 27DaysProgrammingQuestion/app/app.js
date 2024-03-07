// write a program findlargest number
function findlargest(){

var nums = [1,2,3,4,5,6,75,4,6,4,4,3,4,4,442,55,6];

let largest = 0;

for(let i = 0 ; i<nums.length; i++){



  var num = nums[i];


  if(num > largest){

    largest = num;

   
  }
 

}

console.log('largest num ',largest )


}


function smalest(){

var nums = [1,2,3,4,5,6,75,4,6,4,4,3,4,4,442,55,6];

let largest = nums[0];

for(let i = 0 ; i<nums.length; i++){



  var num = nums[i];


  if(num < largest){

    largest = num;

   
  }
 

}

console.log('lowestf num ',largest )


}


