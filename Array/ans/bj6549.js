// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const answer = [];

const findBiggest = (arr) => {
  let biggest = 0;

  let stack = [];
  let dp = [];
  arr.shift();
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    if (stack.length) {
      while (stack.length) {
        if (stack[stack.length - 1][0] >= arr[i]) {
          const [_, index] = stack.pop();
          count += dp[index];
        } else {
          break;
        }
      }
    }
    stack.push([arr[i], i]);
    dp[i] = count;
  }
  stack = [];
  let dp2 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let count = 1;
    if (stack.length) {
      while (stack.length) {
        if (stack[stack.length - 1][0] >= arr[i]) {
          const [_, index] = stack.pop();
          count += dp2[index];
        } else {
          break;
        }
      }
    }
    stack.push([arr[i], i]);
    dp2[i] = count;
  }
  const dp3 = dp.map((e, i) => e + dp2[i] - 1);
  for (let i = 0; i < arr.length; i++) {
    biggest = Math.max(biggest, dp3[i] * arr[i]);
  }

  answer.push(biggest);
};

const ans = () => {
  const arr = input;
  for (let i = 0; i < arr.length - 1; i++) {
    findBiggest(arr[i]);
  }
  console.log(answer.join("\n"));
};
ans();
