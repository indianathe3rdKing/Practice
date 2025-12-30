function twoSum(nums: number[], target: number): number[] {
  let sums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      sums = [i, i + 1];
    }
  }
  return sums;
}
const theSums = twoSum([2, 7, 15, 15], 30);
