//let-ի տիրույթը, որտեղ է նա գործում
  
function func(){
  let a=1
    function func1(){
    let b=2
     function func2(){
    let c=3
    console.log("func2:", a,b,c)
  }
    func2()
    console.log("func1:", a,b)
    }
  func1()
  console.log("func:", a)
}
func()

//true, false արժեքների ստուգում և համեմատում

console.log(Boolean(false==""))
console.log(Boolean(false==[]))
console.log(Boolean(false=={}))
console.log(Boolean(""==0))
console.log(Boolean(""==[]))
console.log(Boolean(""=={}))
console.log(Boolean(0==[]))
console.log(Boolean(0=={}))
console.log(Boolean(0==null))
console.log(Boolean(undefined==NaN))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(''))


// կրկին փորձեր let-ի տիրույթի և array-ի վերաբերյալ

let a =3;
 let b=a;
 b+=9
console.log("a",a)
console.log("b",b)
let a=[1,2,3];
let b=a;
b.push(8);
console.log("a",a)
 console.log("b",b)
let c=[1,2,3,8]
console.log(a===b)
console.log(a===c)