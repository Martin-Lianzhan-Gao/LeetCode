
function removeEelement(nums: number[], val: number): number { 

    
    let index = 0;
    
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
}

const nums = [0,1,2,2,3,0,4,2]
const val = 2

const count = removeEelement(nums, val);

console.log('The count is:', count);
console.log('The array after remove:', nums);

