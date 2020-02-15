//Միջին թվաբանական

function mijinTvabanakan(arr){
  var sum = 0;
  var amaunt = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      amaunt++;
      sum += arr[i];
    }
  }
  return sum/amaunt;
}
console.log(mijinTvabanakan([-4,3,2,4,-8]));

//երկրորդ տարբերակ

let arr = [2,4,-2,-4,];

function average(array){
  let result = array.filter((item,  array) => {   
   return item >0
})
let finalResult = result.reduce((sum, current) => 
                                sum + current/result.length, 0);
return finalResult
}

console.log(average(arr))

//երրորդ լուծում

let arr = [2,4,-2,-4,9];


function average(array){
  let a =[]
 for(let i=0; i<array.length; i++){
  
   if(array[i]>=0){
     a.push(array[i])
   }
 }
  let c=0
  for(let i=0; i<a.length; i++){
  
   c=(c+a[i])
  }
  let d= c/a.length
  
return d

}

console.log(average(arr))