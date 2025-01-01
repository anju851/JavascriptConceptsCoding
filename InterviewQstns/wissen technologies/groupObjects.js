// const data = [
//   { category: "fruit", name: "apple" },
//   { category: "fruit", name: "banana" },
//   { category: "vegetable", name: "carrot" },
//   { category: "fruit", name: "orange" },
//   { category: "vegetable", name: "spinach" },
// ];

// let groupOn = 'category';
// function groupOnKey(data, key){
//     let categories = [...new Set(data.map(dat=>dat.category))];
//     console.log("categories: ", categories);
//     let groceriesByCategory={};

//     for(let cat of categories){
//         if(!groceriesByCategory[cat]){
//             groceriesByCategory[cat] = [data.filter(item => item.category === cat)];
//         }
//     }
//     return groceriesByCategory;
// }

// let result = groupOnKey(data, groupOn);

// for(let key in result){
//     result[key].forEach(element => {
//         console.log(element)
//     });
// }

const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "orange" },
  { category: "vegetable", name: "spinach" },
];

const groupByKey = (data, key) => {
  return data.reduce((acc, curr) => {
    acc[curr[key]] = acc[curr[key]] || [];
    acc[curr[key]].push(curr);
    return acc;
  }, {});
};

const result = groupByKey(data, "category");

Object.values(result).forEach((category) => {
  console.log(category);
});