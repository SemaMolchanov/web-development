def sum13(nums):
    new_arr = []
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        
        new_arr.append(nums[i])
        i += 1
        
    return sum(new_arr)