const reverseString = function(string = "") {
let reversedString = "";
for(i=string.length;i>=0;i--){
    reversedString += string.charAt(i);
}
console.log(reversedString);
return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
