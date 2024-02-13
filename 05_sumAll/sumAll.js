const sumAll = function(int1, int2) {
    if (typeof int1 !== "number" || typeof int2 !== "number" ){
        return "ERROR";
    }
    if (int1 < 0 || int2 < 0 ){
        return "ERROR";
    }

    let maxInt;
    let minInt;
    if(int1>int2){
        maxInt = int1;
        minInt = int2;
    }else if (int2 > int1){
        maxInt = int2;
        minInt= int1;
    }else{
        return int1 + int2;
    }

    let finalSum = 0;
    for (let i=minInt; i <= maxInt; i++){
        finalSum = finalSum + i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
