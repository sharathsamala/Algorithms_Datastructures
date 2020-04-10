function addOneToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addOneToNWithFormulae(n) {
  return (n * (n + 1)) / 2;
}

const input = 1000000000;
console.time("a");
console.log(addOneToN(input));
console.timeEnd("a");

console.time("b");
console.log(addOneToNWithFormulae(input));
console.timeEnd("b");
