//fixed size,fixed type
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = Array.from([11, 12, 13, 14, 5]);
console.log(arr1);
arr1.push(21);//added at the end
arr1.pop();//removed from end
arr1.unshift(21);//add from begining
arr1.shift();//remove from end
console.log(arr1);
let arr3 = ['Physics', 'Chemistry', 'Mathematics', 'Euler', 'Gamma'];
let arr4 = [true, true, true, false, false];
let arr5 = [{ id: 21, name: "Ganesh" }, { id: 22, name: "Ganapathi" }, { id: 23, name: "Gananath" }];
console.log(arr3.length);
console.log(arr3[0]);
console.log(arr3[arr3.length - 1]);
let arr6 = arr3.reverse();
console.log(arr6);
let aa = arr3.join(";");
console.log(aa);
let arr7 = arr1.concat(arr2);
console.log(arr7);
function red(a, b) {
    return a + b;
}
let bb = arr1.reduce(red);
console.log(bb);
// console.log(arr1.fill(0));
let ar = arr1.slice(0, 3);
console.log(ar);
let ab = arr1.slice(0, 3).concat(arr1.slice(3, arr1.length));
console.log(ab);
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
let j = 0;
do {
    console.log(arr3[j]);
    j += 1;
} while (j < arr3.length)



