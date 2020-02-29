function high(x) {
  var arr = x.split(" ");
  var result = x.split(" ");
  var a = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      a += arr[i].charCodeAt(j) -96;
     
    }
     console.log(a)
    arr[i] = a;
    a = 0;
  }
  var m = arr.indexOf(Math.max(...arr));
  return result[m];
}

console.log(high("a A b B c d e f g h i j k l m n o p q r s taaaa"));
