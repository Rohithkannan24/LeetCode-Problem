function lengthOfLastWord(s: string): number {
     let length = 0;
    /*for(let i=s.length - 1;i>=0;i--){
        if(s[i] === ' ') {
          i--;
        }
        else if(s[i]!==' '){
          length++;
        }
    }
    return length;*/

    let last=s.length-1;

    while(last>=0 && s[last]===' '){
        last--;
    }

    while(last>=0 && s[last]!==' '){
        length++;
        last--;
    }
    return length;
    
};
