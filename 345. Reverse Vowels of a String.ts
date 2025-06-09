function reverseVowels(s: string): string {
    let sArray=[...s];
    const vowels=['a','e','i','o','u','A','E','I','O','U'];
    let l=0;
    let r=sArray.length-1;
    while (l<r){
        if(!vowels.includes(sArray[l])){
            l++;
        }
        else if(!vowels.includes(sArray[r])){
            r--;
        }
        else{
            let res=sArray[l];
            sArray[l] = sArray[r];
            sArray[r] = res;
            l++;
            r--;
        }
    }
    return sArray.join('');
    
};
