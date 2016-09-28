////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------
//INPUT: Array of strings
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]




var simpOrSamp = function(family){
  var namesList = [];
  var alteredNames = "";
  for (var i = 0; i< family.length; i++) {
  	if (family[i].length < 6) {
      	alteredNames =(simpList[i] + " Sampson");
      } else {
        alteredNames =(simpList[i] + " Simpson");
      }
    namesList.push(alteredNames);
  }

  return namesList;
}
// console.log( modifiedNamesList[1]);
// console.log( modifiedNamesList[2]);
// console.log( modifiedNamesList[5]);

//OUTPUT: Array of amended names=
var modifiedNamesList = simpOrSamp(simpList)
console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

//INPUT: Array of names
var shortiesOnly = function(names){
  var newArray = [];
  var newName = "";
  for (var i = 0; i < names.length; i++){
    if (names[i].length <= 4){
      	newName = names[i];
        newArray.push(newName);
  	}
  }

  return newArray;
}
var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
console.assert( shortList.indexOf('Fred') != -1 )
console.assert( shortList.indexOf('Wayne') === -1 )
