from typing import List


def repeatedNTimes(nums: List[int]) -> int:

    box = []
    sorted_nums = sorted(nums)
    repeated = 0
    for n in sorted_nums:
        last = len(box)
        if last > 0 and n == box[last-1]:
            repeated = n
            break

        box.append(n)
        print("box :", last)
        print("n :", n)

    return repeated


print(repeatedNTimes([2, 1, 2, 5, 3, 2]))
