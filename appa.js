let arr3 = ['Physics', 'Chemistry', 'Mathematics', 'Euler', 'Gamma'];
for (const i of arr3) {
    console.log(i);
}
let arr5 = [{ id: 21, name: "Ganesh" }, { id: 22, name: "Ganapathi" }, { id: 23, name: "Gananath" }];
for (const i of arr5) {
    console.log(i.id + " " + i.name);
}
let arr6 = [true, false, true, false, false];
for (const i of arr6) {
    i ? console.log("Its true") : console.log("Its false");
}
let arr7 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const i of arr7) {
    console.log("Sqrt(" + i + ")=" + Math.sqrt(i));
    console.log("Log(" + i + ")=" + Math.log(i));
    console.log("Sqr(" + i + ")=" + Math.pow(i, 2));
    console.log("*".repeat(30));
}

let str = "This is rather a short story cut short iam burying the garbage";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 3));
console.log(str.concat(" Hannibal Calling"));
console.log(str.length);
console.log(str.repeat(5));
console.log(str.slice(0, 7));
console.log("*".repeat(100));
console.clear();//wipe out all the previous output
console.log("The action");
let ar = str.split(" ");
console.log(ar);
let arb = str.split("");
console.log(arb);
console.log("No of white spaces is ", ar.length - 1);
const ac = str.split("").reverse().join();
console.log(ac.toString());
