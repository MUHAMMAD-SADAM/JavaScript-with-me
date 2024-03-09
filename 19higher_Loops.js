// for of Loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const My_Name = "Sadam";
for (const name of My_Name) {
  console.log(`Each character is : ${name}`);
}

const my_Name = "Sadam";
for (const name of my_Name) {
  if (name == "d") {
    console.log(`d is detected and the loop has been ended`);
    break; // it will break the loop
  }
  console.log(`Each character is : ${name}`);
}

// Map
const map = new Map();
map.set("students01", "Sadam");
map.set("students02", "Ali");
map.set("students03", "Ahmad");
for (const [key, value] of map) {
  console.log(key, "-:", value);
}

// can we iterate the object as i iterate the map
// const myobject = {
//   students01: "Sadam",
//   students02: "Ali",
//   students03: "Ahmad",
// };
// for (const [key, value] of myobject) {
//   console.log(key, "-:", value);
// }
//  hense , we cant iterate the object as i iterate the map

const langauges = {
  js: "javascript",
  py: "python",
  ja: "java",
  cpp: "c++",
};
for (const key in langauges) {
  console.log(`${key} is the shortcut of ${languages[key]}`);
}
