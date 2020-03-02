// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array. Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(seq) {
var result = 0;
for (var i = 0; i<seq.length; i++) {
    if (seq[i] <= seq[i-1]) 
        result++;
    if (seq[i+1] <= seq[i-1] && seq[i] <= seq[i-2])
        result++;
    
}
return result < 2
}
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))