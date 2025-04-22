// Top 150 Interview Questions
// 26. Remove Duplicates from Sorted Array
function removeDuplicates(nums: number[]): number {
    // The index of each unique element
    let index = 0;

    for (let i = 0; i < nums.length; i++) { 
        const currentNum = nums[i];
        const nextIndex = i + 1;
        let nextNum: number = 0;

        if (nextIndex < nums.length) {
            nextNum = nums[i + 1];
        } else { 
            nextNum = 0;
        }
        
        if (currentNum !== nextNum) { 
            index++;
            nums[index] = nextNum;
        }
    }

    return index;
}

const nums1 = [1, 1, 2]
// const index = removeDuplicates(nums1);
// console.log(index);
// console.log(nums1);

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const index2 = removeDuplicates(nums2);
console.log(index2);
console.log(nums2);