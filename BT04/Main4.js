// SS13_BT03_Nguyễn Bình Lam Nghi

let str = prompt("Hãy nhập một dãy số, tách biệt nhau bằng dấu cách");
let arr = str.split(" ");
let max = Number(arr[0]);

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    if (Number(arr[i]) > max) {
        max = Number(arr[i]);
    }
};

alert (`Số lớn nhất là ${max}`);