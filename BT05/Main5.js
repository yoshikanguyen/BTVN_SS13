// SS13_BT05_Nguyễn Bình Lam Nghi

let arr = Math.floor(Math.random() * 11) + 10;
let num = [];

for (let i = 0; i < arr; i++) {
    num.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Mảng ngẫu nhiên:", num);

let numOdd = 0;
let numEven = 0;

for (let i = 0; i < arr; i++) {
    if (num[i] % 2 === 0) {
        numEven += num[i];
    } else {
        numOdd += num[i];
    }
};

console.log(`Mảng có ${arr} phần tử: [${num.join(", ")}]`);
console.log(`Tổng các số lẻ là: ${numOdd}`);
console.log(`Tổng các số chẵn là: ${numEven}`);
alert(`Mảng có ${arr} phần tử: [${num.join(", ")}]`);
alert(`Tổng các số lẻ là: ${numOdd}`);
alert(`Tổng các số chẵn là: ${numEven}`);