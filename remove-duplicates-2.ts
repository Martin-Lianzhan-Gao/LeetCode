// Top 150 Interview Questions
// 80. Remove Duplicates from Sorted Array II
function removeDeplicates2(nums: number[]): number {
    let index = 2;
    
    if (nums.length <= 2) { 
        return nums.length;
    }

    for (let i = 2; i < nums.length; i++) { 
        const startNum = nums[index - 2];
        const endNum = nums[i];

        if (startNum !== endNum) { 
            nums[index] = endNum;
	        index++; 
        }
        
    }

    return index;
}

export {};
const nums1 = [1, 1, 1, 2, 2, 3];
const result1 = removeDeplicates2(nums1);
console.log(result1);
console.log(nums1);

const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const result2 = removeDeplicates2(nums2);
console.log(result2);
console.log(nums2);
