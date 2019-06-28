// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

// var originalArray = [1, 2, 3, 4, 5, 6, 7]

// console.log (originalArray.reverse())

//2. Given the object below, complete the console.log to find specific information:

// var bicycle = {
// 	type: "Roadbike",
// 	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
// 	wheels: {
// 		count: 2,
// 		specs: ["road tires", "AX-7563", "80-115 PSI"],
// 		brand: "Trek"
// 	}
// }

// Log the type of bicycle:
// console.log(bicycle.type)
// Log the bell:
// console.log(bicycle.gear[2])

// // Log the PSI:
// console.log(bicycle.wheels.specs[2])

// 

// // 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

// var ourString = "Hello Learn Students!"


// var string = "Hello Learn Students!"


// const letterCounter =(str,char)=> {
//   // var sorted = [];
//   str =str.toLowerCase()
//   var count = 0;
//   for(var i=0; i<str.length; i++) {
//   // 	sorted.push(string[i].toLowerCase());
//   	if(str.charAt(i) === char) {
//     	count = count +1
//     }
//   }
//   return count;
// }

// console.log(letterCounter (string, 'l'))
// console.log(letterCounter('L'))


// console.log(letterCounter(ourString))

// function count(string,char) {
//  var re = new RegExp(char,"gi");
//  return string.match(re).length;
// }

// var str = 'I will practice survival skills';
// console.log(count(str,'i'));



// // 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// var getFib = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = getFib(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(getFib(8));
 

	


// //5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

// var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

// let newArr = []
// const onlyNum = (){
// 	if (typeof value === 'number'){
// 	newArr.push(value)
// 	}
// }
// console.log(onlyNum(fullArr))

// const oddChecker=(arr)=>{
// 	let  newArr= []
// 	for (let i =0; i<arr.length; i++){
// 		if (arr[i] % 2 === 1){
// 		newArr.push(arr[i])
// 	}
// 	}	
// 	return newArr
// }

// 	console.log(oddChecker(fullArr))
		