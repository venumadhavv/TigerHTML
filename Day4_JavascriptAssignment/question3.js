function LongestWord(s){
    l=s.split(' ');
    max=0
    str=''
    for(let i of l){
        if(i.length > max){
            max=i.length;
            str=i;
        }
    }
    return str;
}
s="I work at Tiger Analytics Software Company"

console.log("Longest Word is ",LongestWord(s));