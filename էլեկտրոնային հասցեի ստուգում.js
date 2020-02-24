//ստուգումա էլեկտրոնային փոստի տվյալը, որ լինի մի հատ @ չունենա /(), իսկ վերջին կետիկտ լինի @-ից հետո

let string = "n@a.k"

function s(str){
  let valid = false

  let a = str.indexOf("@");
  let b = str.lastIndexOf("@");  
  let c= str.indexOf(" ");
  let d = str.indexOf(")");
  let e= str.indexOf("(");
  let f= str.indexOf("/");
  let g= str.indexOf(".")
  let h=str.lastIndexOf(".")
  if (c==-1 && d==-1 && e==-1 && f==-1 
    &&a-b==0&& h>a && g!=str.length-1){
    valid=true
  }

  if(valid){
    return true
  }else return false

  }

  console.log(s(string))