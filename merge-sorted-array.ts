// 88. Merge Sorted Array

/**
    Use double pointer to merge two sorted arrays
    Time complexity: O(m + n)
    Space complexity: O(1)
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    const length = m + n;

    let lastNums1 = m - 1;
    let lastNums2 = n - 1;
    let index = length - 1;
    
    while (lastNums1 >= 0 && lastNums2 >= 0) { 
        if (nums1[lastNums1] > nums2[lastNums2]) {
            nums1[index] = nums1[lastNums1];
            lastNums1--;
        } else {
            nums1[index] = nums2[lastNums2];
            lastNums2--;
        }
        index--;
    }

    
    while (lastNums2 >= 0) { 
        nums1[index] = nums2[lastNums2];
        lastNums2--;
        index--;
        
    }

    console.log(nums1);
};


merge([0], 0, [1], 1);
