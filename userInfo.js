// import {calculatedStringsArray, stringArray} from './arrayManipulation.js'
const {calculatedStringsArray, stringArray} = require('./arrayManipulation.js')


var id;
function createUserProfiles() {
   let endresult=[];
   for (let i =0; i < stringArray.length;i++){
    endresult.push({
        originalName:stringArray[i],
        modifiedName:calculatedStringsArray[i],
        id:i+1
    })
   }
   return endresult;
  }
  
  
  const userNames = createUserProfiles(calculatedStringsArray, stringArray);
console.log(userNames);