//task "shapeArea"  Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n. A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function shapeArea(n) {
  var length = (n*2)-1;
  var result = 0;
  for (var i=0; i<=length; i++) {
    if (i%2!==0) {
    result+=i;
    }
    
  }
return (result*2)-length
}

console.log(shapeArea(2))