//import stolenItems
import { stolenItems } from './data.js';

// PROBLEM ONE
// Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!”.

function houseTotal(obj) {
  let numStolenItems = 0;
  let report;

  for (let item in obj) {
    numStolenItems += obj[item];
  }

  if (numStolenItems == 0) {
    report = "Lucky you!";
  }
  else {
    report = numStolenItems;
  }

  return report;
}
// uncomment these out to test it out
console.log(houseTotal(stolenItems[0])); 
console.log(houseTotal(stolenItems[1]));
console.log(houseTotal(stolenItems[2])); 
 
// PROBLEM TWO
// Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 

function isStolen(obj, item) {
  if (obj[item] == 0) {
    return false;
  }
  else {
    return true;
  }

}
// uncomment these out to test it out
console.log(isStolen(stolenItems[0], "keys")); 
console.log(isStolen(stolenItems[1], "socks"));
console.log(isStolen(stolenItems[2], "spoons")); 


// EXTRA CREDIT!!!!! PROBLEM THREE
// Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 

function neighborhoodTotal(arr) {
  let stolenItemsArr = Array(arr[0].length).fill(0);
  let idx = 0;
  console.log(arr);
  for (let house in arr) {
    // idx = 0;
    console.log(house);
    for (let i = 0; i < house.length; i++) {
      let item = Object.keys(house)[i];
      stolenItemsArr[i] += house[item];
      // console.log(i);
    }
  }

  // console.log(stolenItemsArr);

  let maxIdx = arrMax(stolenItemsArr, idx = true);
  let key = Object.keys(arr[0])[maxIdx];
  let value = arrMax(stolenItemsArr, idx = false);

  let total = key + maxIdx + value;
  return value; 
  
}

function arrMax(arr, idx = true) {
  let max = arr[0];
  let maxIdx = 0;

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIdx = i;
          max = arr[i];
      }
  }
  if (idx == true){
    return maxIdx;
  }
  else {
    return max;
  }
  
}

// uncomment these out to test it out
console.log(neighborhoodTotal(stolenItems)); 



// PROBLEM FOUR
// Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the “wrong” answer - just give me a fun explanation for why you think it is who it is! 
