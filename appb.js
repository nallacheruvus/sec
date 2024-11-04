let arra = [[111, 211], [13, 411], [51, 16], [17, 811], [91, 1011]];
for (let i = 0; i < arra.length; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(arra[i][j]);
    }
}
console.clear();
for (const i of arra) {
    for (const j of i) {
        console.log(j);
    }
}
function prnA(a) {
    console.log(a[0] + "\n\t\t\n" + a[1]);
}
// arra.forEach(prnA);
arra.map(prnA);//Only for react
let arrb = [[[11, 12], [13]], [[111, 112], [113]], [[101, 102], [103]]];
for (const i of arrb) {
    console.log(i[0], i[1]);
}

