function convertToFourDigitss(n){
    if(n<=35){
        return(n+2000)
    }
    else{
        return(n+1900)
    }
}

console.log(convertToFourDigitss(15))
console.log(convertToFourDigitss(75))
