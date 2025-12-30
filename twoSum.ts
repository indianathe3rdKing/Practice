function twoSum(nums: number[], target: number): number[] {
  let sums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        sums = [i, j];
      }
  }
  return sums;
}
const theSums = twoSum([2, 15, 12, 15], 30);
console.log(theSums);
