// SS13_BT06_Nguyễn Bình Lam Nghi

let arr = Math.floor(Math.random() * 11) + 10;
let num = [];

for (let i = 0; i < arr; i++) {
    num.push(Math.floor(Math.random() * 100) + 1);
};

console.log("Mảng ngẫu nhiên:", num);

let k = +prompt("Hãy nhập một số ngẫu nhiên");
let count = 0;

for (let i = 0; i < num.length - 1; i++) {
    if (num[i] === k) {
        count++;
    }
};

console.log(`Số lần xuất hiện của phần tử ${k} là ${count}`);
alert(`Số lần xuất hiện của phần tử ${k} là ${count}`);