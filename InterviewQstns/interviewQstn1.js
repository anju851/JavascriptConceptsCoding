let a = 3;
let b = new Number(3);
let c = "3";
console.log(a === b);  // strict equality checks for value and type equality as well
console.log(a == c); // less stricter equality only checks for value equality


//Output : 
// false
// true