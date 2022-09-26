function sumOfDigits(n){
    sum=0;
    while(n>0){
        rem=n%10
        n=Math.floor(n/10);
        sum+=rem**2;
    }
    return sum
}

function happynumber(n){
    if(n==1){
        return n;
    }
    else if(n>9){
        n=sumOfDigits(n);
        return happynumber(n);
    }
    else{
        return 0;
    }
}
i=0
n=1
while(i<=5){
    k=happynumber(n);
    if(k==1){
        console.log("Happy number:",n);
        i+=1;

    }
    n+=1;
}
