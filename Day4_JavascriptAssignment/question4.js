function PerfectNumber(n){
    s=0;
    for(let i=0;i<=n;i++){
        if(n%i==0)
            s+=i;
    }
    if(s===n)
        return(n +" Is a Perfect number");
    else
    return(n +" Is a not  Perfect number");
    
}

console.log(PerfectNumber(28));
