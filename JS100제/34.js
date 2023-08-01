const unsorted = "155 170 165 166 169 176";
let sorted = "";

sorted = unsorted.split(" ").sort().join(" ");
if (unsorted === sorted) {
  console.log("yes");
} else {
  console.log("no");
}
