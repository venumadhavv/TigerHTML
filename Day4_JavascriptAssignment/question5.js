function uniqueInString(s){
    l=new Set();
   for(let i=0;i<s.length;i++){

        l.add(s[i])
       }
    s='';
    for(let i of l){
        s+=i;
    }
    console.log("Unique String is",s);
}
uniqueInString('thequickbrownfoxjumpsoverthelazydog');