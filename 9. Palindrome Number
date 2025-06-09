function isPalindrome(x: number): boolean {
   if (x < 0){ 
       return false
    }; 
    const value = x;
    let res = 0;
    
    while (x > 0) {
        res = (res * 10) + x % 10;
        x = Math.floor(x / 10);
    }
    if(value===res){
        return true;
    }
    else{
        return false;
    }
};
