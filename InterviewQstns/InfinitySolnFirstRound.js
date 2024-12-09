//code to sort the given array in descending order

let arr = [10, 30, 90, 60, 50, 20];

function descSort(arr) {
  let max = -Infinity,
    pos = 0;
  for (let k = 0; k < arr.length; k++) {
    max = -Infinity;
    for (let m = k; m < arr.length; m++) {
      if (arr[m] > max) {
        max = arr[m];
        pos = m;
      }
    }
    temp = arr[k];
    arr[k] = arr[pos];
    arr[pos] = temp;
  }
  console.log("descending: ", arr);
}

descSort(arr);

//code to flatten this array: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
let nestedArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
nestedArr = nestedArr.flat(Infinity);
console.log("flattened array: ", nestedArr);

//code to make the initial letter of every word in upperCase
function capitalizeInitialLetter(str) {
  //Arrays are mutable/changeable in js
  //string are immutable, non-changeable in js
  str = str.trim();
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  str = words.join(" "); // join() is used to join array elements using a separator and returns a string
  console.log("modified, capitalized string: ", str);
}

capitalizeInitialLetter("i am very Happy");
