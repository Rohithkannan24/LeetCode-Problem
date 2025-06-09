function twoSum(numbers: number[], target: number): number[] {
   /*for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1];
            }
        }
    }*/
    let l=0;
    let r=numbers.length-1;

    while(l<r){
        let res=numbers[l]+numbers[r];
        if(res>target){
           r--;
        }
        else if(res<target){
            l++;
        }
        else if(res==target){
            return [l+1,r+1];
        }
    }
    
};
