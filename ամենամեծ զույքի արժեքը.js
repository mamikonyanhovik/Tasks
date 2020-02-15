// ամենամեծ զույգի արժեքը

let arr=[-4,-5,1,2,3]

function mult(array){
 let a = []
 for(let i=0; i<array.length-1; i++){
   
  a.push(array[i]*array[i+1])
   
 }   
let b =Math.max(...a)
   
return b
  
}
console.log(mult(arr))




// երկրորդ տարբերակ
var a = [5, 7, 1, -8, -9, 3];
function maxProduct(arr) {
  var result = -Infinity; //նշանակումա մինուս անվերջություն
  for (var i = 0; i < arr.length - 1; i++) {
    result = (arr[i] * arr[i + 1] > result)? arr[i] * arr[i + 1]: result;
  }
  return result;
}
console.log(maxProduct(a));
