// 80. Remove Duplicates from Sorted Array II
function removeDeplucates(nums: number[]): number { 
    let index = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) { 
        const num = nums[i];
        const nextNum = nums[i + 1];
        if (num === nextNum) {
            count++;
            index++;
        } else { 
            count = 0;
            
        }
    }

    return 0;
}