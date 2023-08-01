function one(n) {
  // function two(val) {
  //   //pass
  //   const sq = Math.pow(val, n);
  //   return sq;
  // }
  const two = (val) => Math.pow(val, n);
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
