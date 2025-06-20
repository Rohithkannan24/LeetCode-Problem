function romanToInt(s: string): number {
    const romans={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    let value=0;
    for(let i = 0; i < s.length; i++){
        if(i<s.length-1 && romans[s[i]]< romans[s[i+1]]){
            value-=romans[s[i]];
        }
        else{
            value+=romans[s[i]];
        }

    }
    return value;
    
};
