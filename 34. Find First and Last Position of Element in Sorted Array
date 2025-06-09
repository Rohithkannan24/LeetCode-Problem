function searchRange(nums: number[], target: number): number[] {
    if(nums.length==0){
        return [-1,-1];
    }
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r){
        let m=(l+r)//2;
        if(nums[m]<target){
            l=m+1;
        }
        else if(nums[m]>target){
            r=m-1;
        }
        else{
            let a=m;
            let b=m;
            while(0<=a && nums[a]==target){
                a-=1;
            }
            while(b<nums.length && nums[b]==target){
                b+=1;
            }
            return [a+1,b-1];
            
        }  
    }
    return [-1,-1];
};
