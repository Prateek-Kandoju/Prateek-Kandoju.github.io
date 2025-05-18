let fruits = ["Apple", "Orange", "Mango"];
// //for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//array.forEach method
fruits.forEach((x) => {
  console.log(x);
});

//no need of curly bracked because only one statement exists
// fruits.forEach((element) => console.log(element));

//array.map - to create new array with modified values
//let score = [20, 23, 27];
// let newScore = score.map((value) => {
//   return value + 2;
// });

// let newScore = score.map((value) => value + 2);
// console.log(newScore);

//array.filter method to return filtered data
// let filteredScore = score.filter((value) => value > 20);
// console.log(filteredScore)

//array.find method to return one value
// const newValue = score.find((value) => value === 23);
// console.log(newValue)
// const newValue = score.find((value) => value > 20);
// document.write(newValue)

//array.reduce to find sum
// const totalScore = score.reduce((sum, value) => sum + value);
// document.write(totalScore);

let vegArray = ["Carrot", "Beans", "Tomota"];
let str = "";
for (let i = 0; i < vegArray.length; i++) {
  str += `<li>${vegArray[i]}</li>`;
}
vegArray.map((value) => {
  str += `<li>${value}</li>`;
});
dvVeg.innerHTML = str;

let str1;
vegArray.map((value) => {
  str1 += `<option>${value}</option>`;
});
selVeg.innerHTML = str1;

/////////////////////////////
var arrVeg = [];
const addVeg = () => {
  let v = document.getElementById("txtVeg").value;
  arrVeg.push(v);
  dispVeg();
};

const delVeg = (veg) => {
    arrVeg = arrVeg.filter((value) => value !== veg);
    dispVeg()
};
const dispVeg = () => {
  let strVeg = "";
  arrVeg.map((value) => {
    strVeg += `<li>${value}-<button onclick="delVeg('${value}')">Delete</button></li>`;
  });
  lstVeg.innerHTML = strVeg;
};