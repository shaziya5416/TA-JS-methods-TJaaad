let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findlongest(arr){
let long=[];
for (let element of arr){
if (element.length>long.length){
long=element;}
}
return long;
}


// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map((element)=>element.length));

// - Create a new array that only contains word with atleast one vowel.
let vowel=words.filter((element)=> 
(element.includes("a")||
element.includes("e")||
element.includes("i")||
element.includes("o")||
element.includes("u")
)
)

// - Find the index of the word "rhythm"
let index=words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let vowelS=words.filter((element)=> 

(element.startsWith("a")false||
element.startsWith("e")false|| 
element.startsWith("i")false|| 
element.startsWith("o")false||
element.startsWith("u")false
)
)
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray=numbers.reduce((acc,cv)=>
{acc=acc+cv;
return acc}
,0)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mul3=numbers.map((element)=>element*3);
// - Create a new array that contains only even numbers
let evenNum =numbers.filter((element)=>element%2===0);
// - Create  a new array that contains only odd numbers.
let oddNum =numbers.filter((element)=>element%2!==0);

// - Create a new array that should have true for even number and false for odd numbers.
let value=numbers.map((element)=>element%2===0);

// - Sort the above number in assending order.
let sorting=[...numbers].sort((a,b)=>a-b)
// - Does sort mutate the original array?
//Yes
// - Find the sum of the numbers in the array.
//same as above
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function aveargeWordLength(arr){
let length=0;
let average=0;
for( let element of arr ){
final=element.length;
length=final+length;
}
average=length/arr.length;
return average;
}



