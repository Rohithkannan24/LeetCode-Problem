function removeDuplicates(nums: number[]): number {
    /*let count=0;
    let remove=[];
    for(let i=0;i<nums.length; i++){
        for(let j=0; j<nums.length;j++){
            if(nums[i]==nums[j]){
                remove+=push(nums[j]);
                count++;
            }
        }
    }
    return count;*/
    /*if (nums.length === 0) return 0;
    
    let k = 1; // Pointer for unique elements
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;*/


    let left=1;
    let right=1;

    while(right< nums.length){
        if(nums[right]!=nums[right-1]){
            nums[left]=nums[right];
            right++;
            left++;
        }
        else{
            right++;
        }
    }
    return left;

    
};
