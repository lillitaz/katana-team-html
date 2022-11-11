// function fizzbuzz(n) {
//   let nu = [];
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     nu.push(i);
//     console.log(i);
//   }
//   nu.map((a, b) => {
//     if (a % 15 == 0) {
//       console.log("fizzBuzz");
//       arr.push("FizzBuzz");
//     } else if (a % 3 == 0) {
//       arr.push("Fizz");
//     } else if (a % 5 == 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(a);
//     }
//   });
//   return arr;
//}

// function cleanString(str) {

//     let result = [];

//     for(let i=0; i<str.length; i++){
//       const char = str[i];
//       if(char === "#"){
//         result.pop();
//       }else{
//         result.push(char);
//       }
//     }

//     return result.join("");
//   }

function sumStrings(a, b) {
  let sum = Number(a) + Number(b);
  if (sum != NaN) {
    return sum.toString();
  }
}
console.log(sumStrings("a", "2"));
