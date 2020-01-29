// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]
var strings = ["this", "is", "a", "collection", "of", "words"]
var instructors = [
  { firstname: "JD", teaches: "JavaScript" },
  { firstname: "Tim", teaches: "JavaScript" },
  { firstname: "Brit", teaches: "Ruby" },
  { firstname: "Joe", teaches: "iOS" },
  { firstname: "Jake", teaches: "JavaScript" },
  { firstname: "Will", teaches: "JavaScript" },
  { firstname: "Calvin", teaches: "JavaScript" },
  { firstname: "James", teaches: "Ruby" }
]

// ---------------------------
// 1. Find largest number
// ---------------------------

function large(num) {
  var max = num[0]
  for (var i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i]
    }
  }
  console.log(max)
}
large(numbers)
// ---------------------------
// 2. Find longest string
// ---------------------------

function longStr(str) {
  var newLongest = str[0]
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > newLongest.length) {
      newLongest = str[i]
    }
  }
  console.log(newLongest)
}
longStr(strings)

// ---------------------------
// 3. Find even numbers
// ---------------------------

function evenNum(num) {
  var newArray = []
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      newArray.push(num[i])
    }
  }
  console.log(newArray)
}
evenNum(numbers)

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function oddNum(num1) {
  var newArr = []
  for (var i = 0; i < num1.length; i++) {
    if (num1[i] % 2 == 1) {
      newArr.push(num1[i])
    }
  }
  console.log(newArr)
}
oddNum(numbers)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function findIs(x) {
  var containIs = []
  for (var i = 0; i < x.length; i++) {
    if (x[i].includes("is")) {
      containIs.push(x[i])
    }
  }
  console.log(containIs)
}
findIs(strings)

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function join(arr1, arr2) {
  var newString = []
  for (var i = 0; i < arr1.length; i++) {
    newString.push(arr1[i])
  }
  for (var i = 0; i < arr2.length; i++) {
    newString.push(arr2[i])
  }
  console.log(newString)
}
join(numbers, strings)

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

// function teachJava(obj) {
//   //for (var i = 0; i < obj.length; i++) {
//     var newObj = []
//     for (var Javascript in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         newObj.push(const:Javascript)
//       }
//     }
//   }
//   console.log(newObj)
// }
// teachJava(instructors)
