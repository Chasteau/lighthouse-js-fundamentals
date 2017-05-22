/*
function called loopyLighthouse(range, multiples, words) that,
as you can see, you call with 3 parameters.
range should be an array of 2 numbers representing
the start and end values for the loop. multiples
should be an array of 2 numbers representing the
multiples you want to replace with words.
words should be an array of 2 strings representing
the words that will replace the multiples.

Your loopyLighthouse function should log to the console
all the numbers from 15 to 90, except replacing multiples
of 2 with "Batty", multiples of 5 with "Beacon",
and multiples of 2 and 5 with "BattyBeacon".

*/
// range should be an array of 2
//  numbers representing the start and end values for the loop
// ex range = [1 , 2]

// multiples should be an array of 2 numbers representing
// the multiples you want to replace with words.
// ex multiples = [ 2, 3]

// words should be an array of 2 strings representing the
// words that will replace the multiples.
// ex words = ["one", "two"]

// var num = 100;

function loopyLighthouse(range, multiples, words) {
// using while loop
// var num = range[0];
// while (num <= range[1]) {
//   if (num % multiples[0] === 0 && num % multiples[1] === 0 ) {
//     console.log(words[0]+words[1])
//   } else if (num % multiples[0] === 0) {
//     console.log(words[0]);
//   } else if (num % multiples[1] === 0) {
//       console.log(words[1]);
//     } else { console.log(num);
//   }
//   num++
//   }};

// using for loop
  for (num = range[0]; num <= range[1]; num++) {
     if (num % multiples[0] === 0 && num % multiples[1] === 0 ) {
    console.log(words[0]+words[1])
  } else if (num % multiples[0] === 0) {
    console.log(words[0]);
  } else if (num % multiples[1] === 0) {
      console.log(words[1]);
    } else { console.log(num);
  }
}};

// original loopylighthouse
//   while (num <= 200 ) {
// if (num % 3 === 0 && num % 4 === 0) {
//   console.log("LoopyLighthouse");
// } else if (num % 3 === 0) {
//   console.log("Loopy");

// } else if (num % 4 === 0 ) {
//   console.log("Lighthouse");
// } else {
//   console.log(num);
// }
//   num++ ;
// };
//}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
