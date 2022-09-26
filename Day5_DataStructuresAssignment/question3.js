function reversenumber(n){
    rem=0;
    rev=0;

    while(n>0){
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev;
}

function Followup(a,b){
    l=[]
    l.push(a);
    l.push(b);
    return (l[0]+l[1]);
}

console.log(reversenumber(716)+reversenumber(592));

console.log(Followup(617,295));

