// console.log("hi nama sai teja");
// const product = {
//   penName: "parker jotter standard CT",
//   penType: "ball pen",
//   price: 270,
// };
//  product.price = 280;
// console.log(product);
// console.log(product.price);
// console.log(product["price"]);

// alert("hi man");

// let number = prompt("enter a number: ");
// if (number % 5 === 0) {
//   console.log(" a multiple");
// } else {
//   console.log("not a multiple");
// }

// let marks = prompt("enter student marks: ");

// if (marks >= 80 && marks <= 100) {
//   console.log("A");
// } else if (marks >= 70 && marks <= 89) {
//   console.log("B");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("C");
// } else if (marks >= 50 && marks <= 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// let student1 = {
//   fullname: "Sai Teja",
//   age: 20,
//   cgpa: 8.5,
//   isPass: true,
// };
// for (let i in student1) {
//   console.log(i, student1[i]);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let number = 50;
// let randomnumber = prompt("Enter a number:");
// while (randomnumber != number) {
//   randomnumber = prompt("You entered wrong number.enter new number again:");
// }
// console.log(" you enter correct number");

// let fullname = prompt("enter your full name: ");
// console.log("@", fullname, fullname.length);

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let i of marks) {
//   sum += i;
// }
// console.log("the average marks of the class is: ", sum / marks.length);

// let prices = [250, 645, 300, 900, 50];
// for (let i = 0; i < prices.length; i++) {
//   prices[i] = prices[i] - prices[i] * 0.1;
// }
// console.log(prices);

// let company = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
// company.splice(0, 1, "nama"); //replace bloomber with nama
// company.splice(2, 1); //remove uber
// company.splice(3, 0, "saiteja"); //add saiteja before ibm

// const multiply = (a, b) => {
//   console.log(a * b);
// };

// function countvowels(name) {
//   let count = 0;
//   for (let i of name) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") count++;
//   }
//   return count;
// }

// const vowelscount = (word) => {
//   let count = 0;
//   for (let i of word) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") count++;
//   }
//   return count;
// };

// let arr = [5, 6, 7, 8, 9, 10];
// arr.forEach((sai) => {
//   console.log(sai * sai);
// });

// let arr1 = [45, 69, 88, 96, 150, 28];
// let newArr = arr1.filter((val) => {
//   return val > 90;
// });
// console.log(newArr);

// let number = prompt("enter a number: ");
// let array = [];
// array[0] = 1;
// for (let i = 1; i < number; i++) {
//   array[i] = i + 1;
// }

// const output = array.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(output);

// const output1 = array.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(output1);

// function countingvowels(name) {
//   let count = 0;
//   for (let i of name) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// const cv = (name1) => {
//   let count = 0;
//   for (let i of name1) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// };

// let numbers = [4, 5, 6, 7, 8];
// numbers.forEach((numbers) => {
//   console.log(numbers * numbers);
// });

// let numbers = [4, 5, 6, 7, 8];
// let newArr = numbers.filter((val) => {
//   return val > 5;
// });
// console.log(newArr);

// let n = prompt("enter a number: ");
// let output = [];
// for (let i = 0; i < n; i++) {
//   output[i] = i + 1;
// }
// let op = output.reduce((res, curr) => {
//   return res * curr;
// });
// console.log(op);

// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.style.color = "white";
// btn.style.backgroundColor = "red";
// document.querySelector("body").prepend(btn);

// let ans = document.getElementById("btn");
// console.dir(ans);

// let answer = document.getElementsByClassName("name");
//  console.dir(answer);

// let res = document.getElementsByTagName("p");
//  console.dir(res);

// let result = document.querySelector("p");
//  console.dir(result);

// let result1 = document.querySelectorAll("p");
//  console.dir(result1);

// let ans1 = document.querySelector("h2");

// ans1.innerText += "from Apna College Students";
// console.dir(ans1.innerText);

// let answer = document.querySelectorAll(".box");
// console.dir(answer);
// let idx = 1;
// for (q of answer) {
//   q.innerText = `this is ${idx} div`;
//   idx++;
// }

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// document.querySelector("body").prepend(newBtn);

// let ans = document.querySelector("p");
// let namee = ans.setAttribute("class", "question");

// let ans = document.querySelector("button");
// ans.onclick = (e) => {
//   console.dir(e);
//   console.dir(e.type);
//   console.dir(e.target);
//   console.log(e.clientX, e.clientY);

//   console.log("india is champions");
// };

// ans.ondblclick = () => {
//   console.log("123456789");
// };

let ans = document.querySelector("button");
// let currMode = "light";
// ans.addEventListener("click", () => {
//   if (currMode == "light") {
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//     document.querySelector("body").style.color = "white";
//   } else {
//     currMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//     document.querySelector("body").style.color = "black";
//   }
// });

// ans.addEventListener("click", () => {
//   console.log("1");
// });
// ans.addEventListener("click", () => {
//   console.log("2");
// });
// ans.addEventListener("click", () => {
//   console.log("3");
// });
// let answer = () => {
//   console.log("4");
// };
// ans.addEventListener("click", answer);

// ans.removeEventListener("click", answer);

ans.addEventListener("click", (e) => {
  console.log(e.type);
  console.log(e.target);
});
