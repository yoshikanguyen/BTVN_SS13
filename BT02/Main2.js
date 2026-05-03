// SS13_BT02_Nguyễn Bình Lam Nghi

let checkList = [12,54,0,9,87];

let input = Number(prompt("Input your number"));

for (let i = 0; i < checkList.length; i++){
    if (checkList.includes(input)){
        alert("Bingo");
        break;
    } else {
        alert("Goodluck next time");
        break;
    }
};