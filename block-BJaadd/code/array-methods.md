Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
-What it does?:It joins two arrays together with or without a seperator
-Parameter:join(), seperator is optional
-Return:returns an array with the joined value.By default the value has , in it
-Example:
//let arr=[1,2,3,4,"nano","ok"]
undefined
arr.join("too")
'1too2too3too4toonanotoook'
arr.join(0)
'10203040nano0ok'
arr.join(``)
'1234nanook'
arr.join()
'1,2,3,4,nano,ok'

3. `flat`
-What it does?:It removes the nesting in an array upto a certain degree which is to be mentioned
-Parameter:flat(depth).Here depth is optional.
 -Return:array with concatenated value
-Example:
let join=[1,2,3,[4,5,[6,7],8],9];
undefined
join.flat()
(8) [1, 2, 3, 4, 5, Array(2), 8, 9]0: 11: 22: 33: 44: 55: (2) [6, 7]6: 87: 9length: 8[[Prototype]]: Array(0)
join.flat(2)
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
join.flat(1)
(8) [1, 2, 3, 4, 5, Array(2), 8, 9]
join.flat(Infinity)
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
join.flat(5)
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

4. `push`
-What it does?:Adds an element to the end of an array
-Parameter:push('element1','element2'....);
-Return:It mutates the original array and hence returns an array with the new lengthi.e the length of the array
-Example:let push=[1,2,3,"colors"];
undefined
push.push('1');
5
push.push(1);
6
push.push('1');
7
push.push(... join);//we have merge two arrays here.
12
push
(12) [1, 2, 3, 'colors', '1', 1, '1', 1, 2, 3, Array(4), 9]

5. `indexOf`
-What it does?:It searches for the index of the given element
-Parameter:indexOf(element,fromIndex)//here from index is from where we need to start searching.here also negative works
-Return:Returns an Index;
-Example:push.indexOf(1)
0
push.indexOf(3)
2
push.indexOf(1,3)
5

6. `lastIndexOf`
-What it does?:Same as LastIndexOf just it searches for the last index in repetation
-Parameter:same only fromINdex starts searching from backwards here.REturs -1 if not found
-Return:index number
-Example:
push.lastIndexOf(1)
7
push.lastIndexOf(1,3)
0
push.lastIndexOf(1,6)
5
push.lastIndexOf(1,3)//starts searching after 3 from backwards
0
push.lastIndexOf(1,7)
7
push.lastIndexOf(1,5)
5
push.lastIndexOf(1,-2)//can also take negative values just we have to substract from thr length
7
push.lastIndexOf(1,-8)
0
push.lastIndexOf(1,-6)
5

7. `includes`
-What it does?://Checks whether the array includes the mentioned element or not
-Parameter://includes(element,fromIndex) ,if fromIndex is negative then also it searhces form the entire array.Default value is 0 for fromIndex;	
-Return:Boolean true or false
-Example:
push.includes(1)
true
push.includes(1,10)
false
push.includes(1,-10)
true
push.includes("yes",-10)
false
push.includes("colors")
true
push.includes("ors")//half values are also not counted here
false

8. `reverse`
-What it does?:It reverses the order of the array.Also mutates the array
-Parameter:.reverse()
-Return:returns an array
-Example:
push.reverse();
(12) [9, Array(4), 3, 2, 1, '1', 1, '1', 'colors', 3, 2, 1]

9. `every`
-What it does?:It checks if all the values are truthy or not.Even if one value is false,it will return false;
-Parameter:every(callback function)/every(function(element,index,array,every(element)==>{};
-Return:Boolean-TRue/False
-Example:
function letme(element){
    return element>4;
}
undefined
[1,2,3,4].every(letme)
false
[5,6,7,8].every(letme)
true
[4,5,6,7].every(letme)
false
Whether it is subset of:
let arr1=[1,2,3,4,5];
undefined
let arr2=[1,2,3,4,5];
undefined
arr2.every(function(element){
    return arr1.includes(element);
})
true
arr2.every(function(element){
    return arr1.includes(element);
})
true
let arr1=[1,2,3,4,5];
undefined
let arr2=[3,4,5];
undefined
arr2.every(function(element){
    return arr1.includes(element);
})
true
let arr2=[8,4,5];
undefined
arr2.every(function(element){
    return arr1.includes(element);
})
false


10. `shift`
-What it does?:REmoves the first element from the array and makes the indexes accordingly
-Parameter:shift().Also it is mutable
-Return:returns the removed value
-Example:
let arr1=[1,2,3]
undefined
let arr2=arr1.shift();
undefined
arr2
1
arr1
(2) [2, 3]//mutates the array
let arr3=[];
undefined
arr3.shift();
undefined
let arr4=arr3.shift();
undefined//It returns undefined if the array is empty
arr3
[]
arr4
undefined

11. `splice`
-What it does?:It removes and(or) adds elements in the array 
-Parameter:splice(index,delete no of element,element 1,element2);//if we do not put how many elements have to be deleted then the entire srray after thre given index gets removed
-Return:returns the deleted element//if nothing  is deleted it returns an emty array
-Example:
let s1=["Sana","Shafin","Aamir"];
undefined
s1.splice(1,0,"Raza");
[]
s1
(4) ['Sana', 'Raza', 'Shafin', 'Aamir']
s1.splice(2,1,"Mantasha");
['Shafin']
s1
(4) ['Sana', 'Raza', 'Mantasha', 'Aamir']
s1.splice(0,3,"Erum");
(3) ['Sana', 'Raza', 'Mantasha']
s1.splice(0,2,"Erum","Yaya");
(2) ['Erum', 'Aamir']
s1
(2) ['Erum', 'Yaya']

12. `find`
-What it does?:It provides the first element that satisfies the given condition.
-Parameter:find(cb),find(function(element,index,array){condition},find(element)=> {condition} 
-Return:the first element of the array that satisfies the given condition
-Example:
let colors=["red","yellow","black","purple"];
undefined

function findColor (color){return color==="black");
VM1023:1 Uncaught SyntaxError: Unexpected token ')'
function findColor (color){return color==="black"};
undefined;
colors.find(findColor);
'black'
colors.find(function(element,index){
    return element=="red");
VM1410:2 Uncaught SyntaxError: Unexpected token ')'
colors.find(function(element,index){
    return element=="red"};
VM1416:2 Uncaught SyntaxError: missing ) after argument list
colors.find(function(element,index){
    return element=="red"};)
VM1426:2 Uncaught SyntaxError: missing ) after argument list
colors.find(function(element,index)){
    return element=="red";}
VM1449:1 Uncaught SyntaxError: Unexpected token ')'
colors.find(function(element,index)){
    return element=="red";} 
)
VM1480:1 Uncaught SyntaxError: Unexpected token ')'
colors.find(function(element){
    return element==="red";} //) not given
)
'red'
colors.find(function(element,index){
    return index===0;} 
)
'red'
colors.find(function(element,index){
    return index===1;} //by default the first value is element even if you name it as 
)
'yellow'
colors.find(function(element,index){
    return index===3;} 
)
'purple'
colors.find(element)=>{return element=="purple"}
VM1715:1 Uncaught SyntaxError: Malformed arrow function parameter list
colors.find(element) => {return element=="purple"}
VM1737:1 Uncaught SyntaxError: Malformed arrow function parameter list
colors.find((element) => {return element=="purple"})
'purple'
colors.find((element,index) => {return index==0})
'red'
colors.find((element,index) => {return index==8})
undefined
colors.find((index) => {return index==0})
undefined
colors.find((index) => {return index=="red")
VM1889:1 Uncaught SyntaxError: Unexpected token ')'
colors.find((index) => {return index=="red"})
'red'

13. `unshift`
-What it does?://adss value in the start of the array
-Parameter:unshift(value)
-Return:the length of the new array
-Example:
let arr1=[2,3,4];
undefined
let arr2=arr1.shift();
undefined
arr1
(2) [3, 4]
arr2
2
arr5=arr1.unshift(3,4,5);
5
arr5
5
arr1
(5) [3, 4, 5, 3, 4]

14. `findIndex`
-What it does?://same as findINdex just only innstead of value it returns index.Also it returns -1 if the condition is not satisfied
-Parameter://findIndex(cb),findINdex(function(element,index,array){}),findIndex(element)=>{});
-Return://index of the true statement
-Example://
let family=["maa","papa","sister","father"];
undefined
function findPapa(element)
{ return element=="papa";
}
undefined
family.findIndex(findPapa);
1
function findPapa(element)
{ return element=="maa";
}
undefined
family.findIndex(findPapa);
0
family.findIndex(function(element){return element=="sister"})
2
family.findIndex(element)=>{return element=="dadi"})
VM2997:1 Uncaught SyntaxError: Malformed arrow function parameter list
family.findIndex((element)=>{return element=="dadi"})
-1
family.findIndex((element)=>{return element=="father"})
3


15. `filter`
-What it does?://returns a new array which pass the test
-Parameter:same as index
-Return://new array
-Example:
function is(element){
    return element.length>4;
}
undefined
family.filter(is)
(2) ['sister', 'father']
family.filter(function(element){return element.length>2})
(4) ['maa', 'papa', 'sister', 'father']
family.filter((element,index)=> {return index>1})
(2) ['sister', 'father']
family.filter((element,index)=> {return index>0})
(3) ['papa', 'sister', 'father']
family.filter((element,index)=> {return index>=0})
(4) ['maa', 'papa', 'sister', 'father']

16. `flat`//done above
-What it does?:
-Parameter:
-Return:
-Example:

17. `forEach`
-What it does?://executes the function for each element of the array
-Parameter:forEach(cb),etc etc(
two more)
-Return:undefined
-Example://to be done


18. `map`
-What it does?://creates a new array for everytime the function is being called on the array
-Parameter://same as above
-Return://an array
-Example:
function no(element){
return element+3;
}
undefined
numbers.map(no)
(5) [4, 5, 6, 7, 8]
numbers.map(function(element,index,array){
    return array+1;})
(5) ['1,2,3,4,51', '1,2,3,4,51', '1,2,3,4,51', '1,2,3,4,51', '1,2,3,4,51']
numbers.map(function(element,index,array){
    return index+1;})
(5) [1, 2, 3, 4, 5]
numbers.map(function(element,index,array){
    return index+3;})
(5) [3, 4, 5, 6, 7]
numbers.map(function(element,index,array){
    return element*3;})
(5) [3, 6, 9, 12, 15]//we shoulf us the map when we actually require the array and if we dont require the array 

19. `pop`
-What it does?://Removes the last element of the array.Changes the length of the array.Mutates it.
-Parameter:pop();
-Return:returns the removes array
-Example:
numbers.pop();
5
numbers
(4) [1, 2, 3, 4]
numbers.pop();
4
numbers
(3) [1, 2, 3]

20. `reduce`
-What it does?:
-Parameter:
-Return:
-Example:

21. `slice`
-What it does?:It gives you/cuts the slices in the array
-Parameter:slice(index,start,end)//note that when in end, it does not include end.
-Return:returns the deleted array
-Example:
numbers.slice(1)
(4) [2, 3, 4, 5]0: 21: 32: 43: 5length: 4[[Prototype]]: Array(0)
numbers.slice(1,4)
(3) [2, 3, 4]
numbers.slice(3,8)
(2) [4, 5]

22. `some`
-What it does?://AT least one of the condition from array is true
-Parameter://same as every
-Return://same as every
-Example:
let numbers=[1,2,3,4,5];
undefined
function num(element){
    return element>4}
undefined
numbers.some(num)
true
﻿
￼
​


