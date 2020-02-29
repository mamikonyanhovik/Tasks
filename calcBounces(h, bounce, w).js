function calcBounces(h, bounce, w) {
  if (bounce >= 1 || bounce <= 0 || w > h || w <= 0 || w <= 0 || h <= 0) {
    return -1;
  } else {
    var result = 0;
    while (h > w) {
      result += 2;
      h = h * bounce;
    }
    return result - 1;
  }
}
console.log(calcBounces(3, 0.66, 1.5));