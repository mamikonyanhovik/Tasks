//test 1

function XO(str) {
  str = str.toUpperCase();
  var a = 0;
  var b = 0;
  for (var i = 0; i < str.length; i++) {
    if ( str[i] === "X") {
      a += 1;
    }
    if (str[i] === "O") {
      b += 1;
    }
  }
  if ( a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("asfgxxXwrgetgOoo"));


//test 2

function XO(str) {
 str+= ""
 var xx=0;
  var oo=0;
 for (var i = 0; i<str.length; i++) {
   if (str[i] === "x" || str[i] === "X") {
     xx +=1
   } else if (str[i] === "o" || str[i] === "O") {
     oo+=1
   } else {
     continue;
   }
 }
  if (xx === oo) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("xaaaaaaxxoo"));\

//test3

function XO(str) {
 str+= ""
 str = str.toUpperCase();
 var xx=0;
 for (var i = 0; i<str.length; i++) {
   if (str[i] === "x") {
     xx +=1
   } else if (str[i] === "o") {
     xx-=1
   } else {
     continue;
   }
 }
  if (xx === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("aaaaaaxXoo"));