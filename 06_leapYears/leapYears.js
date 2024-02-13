const leapYears = function(yearToCheck) {
    if (typeof yearToCheck !== "number" || yearToCheck < 0){
        return "ERROR";
    };

    if (yearToCheck % 4 === 0){
        if(yearToCheck % 100 === 0){
            if(yearToCheck % 400 === 0){
                return true;
            }else {
                return false;
            }
        };
        return true;
    };
return false;

};

// Do not edit below this line
module.exports = leapYears;
