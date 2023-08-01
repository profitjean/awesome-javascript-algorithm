const input = "1 2 3 4 5";
const reverse = input.split(" ").reverse();
var result = "";
// console.log(reverse);

for (let i = 0; i < reverse.length; i++) {
  result += reverse[i];
  result += " ";
}

console.log(result);
