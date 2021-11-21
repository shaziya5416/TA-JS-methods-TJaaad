let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Banana");

// Remove the last element from fruits array
fruits.pop();
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits.length);
// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(fruits[1]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift(`guava`);//not working
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift(`Dragon FRuit`);
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
//fruits.find(function(element,index){
(fruits[0]=="Dragon Fruit")&&(fruits[1]=="Guava") ? console.log(true):console.log(false); 
// Update the value of index 1 to `Pears`
fruits.splice(1,1,'Pears');
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,`Kiwi`,`Lemon`);
// Remove (slice) all the element from index 5
fruits.slice(4);//not working
// Create another array named moreFruits with values ['Berries', 'Melons']
moreFruits=[`Berries`,`Melons`];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
let new1 =fruits.concat(moreFruits);

// Log the name of all fruit in console
fruits.forEach(function(element){
return console.log(element);
}
)
// Convert each fruit name to lowercase and log it
fruits.forEach(function(element){
return console.log(element.toLowerCase());
}
)

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruit=[];
fruits.forEach(function(element){
let final=element.toLowerCase();
lowercaseFruit.push(final);
}
)

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruit=[];
fruits.forEach(function(element){
let final=element.toUpperCase();
uppercaseFruit.push(final);
}
)

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat(1));
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
console.log(numbersTwo.flat(1));
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

// Convert the numbersThree array to one level element.
let new3= numbersThree.flat(Infinity);
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
console.log(numbersThree.flat(Infinity));
// Use forEach to log all the elements of numberThree array
numbersThree.forEach(function(element){
return console.log(element);
}
)
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
var doubleNumbers=[];
new3.forEach(function(element){
let final= element*2;
doubleNumbers.push(final);
}
)

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
//var tripleNumbers=[];
let final=new3.map(function(element){
return element*3;
doubleNumbers.push(final);
})

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
var halfNumbers=[];
new3.forEach(function(element){
let final= element/2;
halfNumbers.push(final);
}
)

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNUmbers=new3.filter((element)=>element%2!==0
);
console.log(oddNUmbers);



// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let eveNUmbers=new3.filter((element)=>element%2===0
);
console.log(eveNUmbers);


// Find the index of 10 in numbersThree array
let index1=new3.findIndex((element)=>element===10
);
console.log(index1);
// Reverse the values of numbersThree array
numbersThree.reverse();
// Reverse the values of numbersTwo array
numbersTwo.reverse();
// Join all fruits with '-', convert to uppercase and log it
let one1=(fruits.join(`-`).toUpperCase());
// Join all fruits with '&', convert to lowercase and log it
(fruits.join(`&`).toLowerCase);
