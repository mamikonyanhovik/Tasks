//գտնումա թվերի ամենամեծը ու ամենափոքրը ու գումարումա իրար

let a=[1,5,4,7,9,0,8,7,9,9]

function  goods(array){
let a=[]
for(let i=0;i<array.length;i++){ ////// ստուգում ենք որ 0 չլինի
  if(array[i]===0){
    array.splice(i,1)
  }
}

a.push(Math.min(...array))
a.push(Math.max(...array))

let finalResult = a.reduce((sum, current) => 
                                sum + current, 0);
return finalResult
}

console.log(goods(a))