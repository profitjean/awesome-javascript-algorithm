/**
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100} 
 */

const list = "Yujin Hyewon";
const number = "70 100";

const keys = list.split(" ");
const values = number.split(" ");
const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i]);
}

console.log(obj);
