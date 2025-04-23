/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  const answer = [];
  const stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    let count = 0;
    while (stack.length) {
      if (stack[stack.length - 1] <= heights[i]) {
        stack.pop();
        count++;
      } else {
        break;
      }
    }
    answer.push(stack.length ? count + 1 : count);
    stack.push(heights[i]);
  }
  return answer.reverse();
};
