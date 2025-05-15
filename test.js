// Your array of objects
let arrayOfObjects = [
    { bottomRow: ["A", "-", "B","A", "-","-", "-","-","D", "-", "-","A","-"] },
    { bottomRow: ["-", "-", "-","-", "-", "-","-","-","A", "D", "-","-","-"] }
  ];
  
  // Find the common index where all elements are "-"
  function findCommonIndexWithAllDash(arr) {
    let indexArray=[]
    // Iterate over the first object's bottomRow array
    for (let index = 0; index < arr[0].bottomRow.length; index++) {
      // Check if all elements at the current index are "-"
      const allAreDash = arr.every(obj => obj.bottomRow[index] == "-");
  
      if (allAreDash) {
        indexArray.push(index);
      }
    }
  
    return indexArray; // No common index found
  }
  
  // Remove objects where all elements at the common index are "-"
  let commonIndex = findCommonIndexWithAllDash(arrayOfObjects);
  console.log(commonIndex)

  if (commonIndex.length!= 0) {
    for (let j = commonIndex.length-1; j >= 0 ; j--) {
        // arrayOfObjects = arrayOfObjects.filter(obj => obj.bottomRow.splice(commonIndex[j],1));
        for (let k = 0; k < arrayOfObjects.length; k++) {
                arrayOfObjects[k].bottomRow.splice(commonIndex[j],1)          
        }
    }
  }
  
  // Output the updated array
  console.log(arrayOfObjects);