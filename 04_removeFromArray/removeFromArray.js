let modifiedArray;

const removeFromArray = function(originalArray = [], ...argsRemoved) {
  console.log("Original array", originalArray);
  modifiedArray = originalArray;
   
     for (arg of argsRemoved){
       removeItems(modifiedArray,arg);
     
       console.log("Arg to delete:",arg,"modified Array",modifiedArray)
     }

     console.log("Resultado:", modifiedArray);
     return modifiedArray;
};

function removeItems(arr, arg){
    modifiedArray = arr.filter((el) => el !== arg);
    console.log("removeItemsTest:" ,modifiedArray)
    return modifiedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
