const repeatString = function(string, repeatTimes) {
    let repeatedString = "";
    if(repeatTimes>=0){
        for (i=1;i<=repeatTimes;i++){
            repeatedString += string;
    
        };
    }else {
        repeatedString  =   "ERROR";
    }
  
console.log(repeatedString);
return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
