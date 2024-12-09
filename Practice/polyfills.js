// Polyfills are the way to implement our own custom variations of array methods like map,filter,reduce etc

//1. polyfill for filter()
const arr = [2, 3, 4, 6, 7, 9];
const filteredArray = arr.filter((num) => num > 4); //standard filter()
console.log("Filtered array is: ", filteredArray);

//arguments taken by filter() - filter(arry-item, index, array)
Array.prototype.myfilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    var result = callback(this[i], i, this);
    if (result) newArr.push(this[i]);
  }
  return newArr;
};

console.log(
  "filtered array from custom filter: ",
  arr.myfilter((num) => num > 3)
);

const fruits = ["apple", "mango", "pineapple", "grapes", "papaya", "banana"];
console.log(
  "filtered fruits: ",
  fruits.myfilter((fruit) => fruit.length < 6)
);

const fruitss = ["apple", "mango", "pineapple", "grapes", "papaya", "banana"];
const leftFruits = fruitss.myfilter((fruit, index, arr) => {
  arr.pop();
  return fruit.length < 7;
});
console.log("leftFruits: ", leftFruits);


//2. polyfill for forEach() - forEach(arry-item, index, array)
var myArr = [1, 2, 5, 8, 10];
myArr.forEach((arr) => console.log(arr+2 + '\n'));
console.log("array after forEach iteration: ", myArr);

Array.prototype.customForEach = function (callback) {
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}

var secondArray = ['Anju','Shiva','Mahadev','Sambhu','Bhole','Mahakal'];
secondArray.customForEach(srr=>console.log(srr+' ' + '*'));


//3. polyfill for map() - map(callback(arry-item, index, array))
var thirdArray = [15,30,45,60,80];
console.log("map result: ", thirdArray.map((tarr)=>tarr*2));

Array.prototype.customMap = function (callback) {
    let newArr = [];
    for(let i=0;i<this.length;i++){
        result = callback(this[i],i,this);
        newArr.push(result);
    }
    return newArr;
}

console.log("custom map result: ", thirdArray.customMap(it=>it-3));


//4. polyfill for reduce() - reduce(callback(prevValue, currentValue, currentIndex, array),initialValue)
var forthArray = [5, 3, 4, 2, 1];
console.log(forthArray.reduce((prev,cur)=> prev+cur , 10));

Array.prototype.customReduce = function(callback, initialValue){
    let result=initialValue;
    for(let i=0;i<this.length;i++){
        result = callback(result,this[i],i,this);
    }
    return result;
}

console.log("customReduction : ", forthArray.customReduce((prev,cur)=> prev*cur, 2));


//5. polyfill for find() - find()
/*
find(predicate: (value: number, index: number, obj: number[]) => value is any, thisArg?: any): any
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

Returns the value of the first element in the array where predicate is true, and undefined otherwise.
*/
var fifthArray = [5, 3, 4, 2, 1];
console.log(fifthArray.find(it=>it >8));

Array.prototype.customFind = function (callback){
    
    //way1: bruteforce
    // let result;
    // for(let i=0;i<this.length;i++){
    //     result=callback(this[i],i,this);
    //     if(result) return this[i];
    // }
    // return result;

    //way2: more optimized way
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return this[i];
    }
}

console.log(fifthArray.customFind(it=>it <4));