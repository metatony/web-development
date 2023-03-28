// array

var list = ['banana', 'apples', 'oranges', 'blueberries'];

// remove banana from the array
list.shift([0]);
console.log(list);

// sort the array in alphabetical order
list.sort();
console.log(list);

//put kiwi at the end of the array
list.push('kiwi');
console.log(list);

// remove apples
list.shift([0]);
console.log(list);

//sort the array in reverse order not alphabetical
list.reverse();
console.log(list);

// using this array
var array2 = ['watermelon', ['carrot', ['mangoes'], 'coconut']];
//access oranges
//console.log(array2[1][1]);
console.log(array2);