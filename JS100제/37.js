/**
입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
 */

const votes = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
const divided = votes.split(" ");
let elected = "";
const results = {};

for (let el of divided) {
  if (results.hasOwnProperty(el)) {
    results[el]++;
  } else {
    results[el] = 1;
  }
}

let maximum = Number.MIN_SAFE_INTEGER;
for (let key in results) {
  const value = results[key];
  if (value > maximum) {
    maximum = value;
    elected = key;
  }
}
console.log(`${elected}(이)가 ${maximum}표로 선출되었음`);
