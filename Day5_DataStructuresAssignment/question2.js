function editString(s1,s2){
    c=0;
    if(Math.abs(s1.length-s2.length)<=1){
        if(s1.length>s2.length){
            for(let i=0;i<s1.length;i++){

                if(s2.includes(s1[i])){
                    c+=1
                }
            }
            if((s1.length-c)==1 ) 
                    return true
                else
                    return false
        }
        else{
            for(let i=0;i<s1.length;i++){

                if(s2.includes(s1[i])){
                    c+=1
                }
            }
            if((s2.length-c)==1) 
                    return true
                else
                    return false

        }            
    }
    else
        return false;
}
console.log(editString("Pale","Pal"));
console.log(editString("Pale","bale"));
console.log(editString("Pale","bal"));