function searchInsert(nums: number[], target: number): number {
    let l=0;
    let r=nums.length-1;
    while(l<=r){
       let m=(l+r)//2;
       if(target==nums[m]){
          return m;
        }
        else if(target>nums[m]){
            l=m+1;
        }
        else if(target<nums[m]){
            r=m-1;
        }
         
    }
    return l;


    
};
