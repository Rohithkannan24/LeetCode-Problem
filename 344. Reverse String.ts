function reverseString(s: string[]): void {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        let res = s[l];
        s[l] = s[r];
        s[r] = res;
        
        l++;
        r--;
    }
};
