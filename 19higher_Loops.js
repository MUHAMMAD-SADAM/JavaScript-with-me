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
