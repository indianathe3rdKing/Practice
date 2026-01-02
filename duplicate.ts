function containsDuplicate(nums: number[]): boolean {
  let sortedArray = nums.sort();
  let isDuplicate = false;
  console.log(sortedArray);
  for (let i = 0; i < nums.length; i++) {
    console.log(sortedArray[i], sortedArray[i] + 1);
    if (sortedArray[i] == sortedArray[i] + 1) {
      isDuplicate = true;
    }
  }

  return isDuplicate;
}

const hasDuplicates = containsDuplicate([1, 2, 3, 1]);
console.log(hasDuplicates);
