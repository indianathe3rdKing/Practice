

from typing import List


def searchInsert(nums: List[int], target: int) -> int:

    low = 0
    high = len(nums)-1
    print("High :", nums[high])
    while low <= high:
        mid = (high+low)//2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid+1
        else:
            high = mid-1
    return low


print(searchInsert([1, 3, 5, 6], 7))
