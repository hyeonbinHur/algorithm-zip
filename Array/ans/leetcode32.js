/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (s[stack[stack.length - 1]] === "(") {
        stack.pop();
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return max;
};
