// let heroes = ["ironman", "hulk", "batman"];
// let marks = [96, 75, 48, 83, 66];
// let info = ["rahul", 86, "Delhi"];
// let marks_student1=97;
// let marks_student2=12;
// let marks_student3=14;
// let marks_student4=12;
// let marks_student5=15;

// let marks={
//     stu1:97,
//     stu2:82,
// }

// let marks = [62, 45, 66, 45];
// let info = ["rahul", 86, "Delhi"];
// console.log(info);
// console.log(marks.length);
// let heroes = ["spiderman", "batman", "superman"];
// console.log(heroes);
// console.log(heroes.length);

// let marks = [97, 63, 44, 56, 32];

// marks[2] = 66;
// console.log(marks);

// let heroes = ["Ironman", "thor", "hulk", "superman", "antman"];
// console.log(heroes[0]);
// console.log(heroes[1]);

//looping over an arrays
// print all the elements of an array
// let heroes = ["superman", "batman", "Hulk"];
// for (let idx = 0; idx <= heroes.length; idx++) {
//   console.log(heroes[idx]);
// }
// let cities = ["sydeny", "Melbourne", "brisbane"];

// for (let city of cities) {
//   console.log(city.toUpperCase());
// }
// let marks = [85, 97, 44, 37, 36, 76, 60];
// let sum = 0;
// for (let val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class=${avg}`);

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//   //   console.log(`value at index ${i}=${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer=${items[i]}`);
//   i++;
// }

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

// let veggies = ["potato", "soybean", "peas", "beans"];
// console.log(veggies);
// console.log(veggies.string);
// console.log(veggies);

// veggies.pop();
// console.log(veggies);

// let marvelHeroes = ["thor", "spiderman", "Ironman", "antman", "Dr strange"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["saktiman", "krish"];

// // let heroes = marvelHeroes.concat(dcHeroes).concat(indianHeroes);
// // console.log(heroes);
// // let heroes = marvelHeroes.concatt(dcHeroes, indianHeroes);
// // console.log(heroes);
// // let val = marvelHeroes.shift();
// // console.log("deleted", val);
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1));
// let arr = [1, 2, 3, 4, 5, 6, 7];
// // arr.splice(2, 0, 101);
// // console.log(arr);
// //delete element
// arr.splice(3, 1, 108);
// console.log(arr);
let companies = ["bloomberg", "Microsft", "uber", "Google", "IBM", "Netflix"];
// companies.shift();
companies.splice(2, 1, "ola");
companies.push("Amazoan");
console.log(companies);
