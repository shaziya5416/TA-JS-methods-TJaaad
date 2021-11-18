Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

  -What it does?://Converts to uppercase
  -Parameter Data Type://String
  -Return Value Type://String
  -Examples:
   ```js 
let name="hello";
name.toUpperCase();//"HELLO"
   ```

3. `toLowerCase`
  -What it does?://COnverts to lower case
  -Parameter Data Type://string
  -Return Value Type://string
  -Examples:
```js
let name="Hello";
name.toLowerCase();//"hello"
```


4. `trim`
  -What it does?//Removes the extra space i.e. white space,or any tabs or any line terminators.Remember it does not remove anything from in between even if there is space
  -Parameter Data Type://string
  -Return Value Type://string
  -Examples:
```js
let name="    hello     ";
name.trim();//"hello"
```

5. `trimEnd`
  -What it does?://Removes the white space from the end (not the start)
  -Parameter Data Type:string
  -Return Value Type:string
  -Examples:
```js
let name="    hello     ";
name.trimEnd();//"     hello"
```

6. `trimStart`
  -What it does?://removes whitespace from start
  -Parameter Data Type://string
  -Return Value Type://string
  -Examples:
```js
let name="    hello     ";
name.trimStart();//"hello    "
```

7. `concat`
  -What it does?:Concats the given value of string
  -Parameter Data Type:string
  -Return Value Type:string
  -Examples:
```js
let dog="mojo";
dog.concat(` is so nic`);//"mojo is so nic"
```
8. `endsWith`
  -What it does?://tests condition whether the string ends with it or not
  -Parameter Data Type://string,length// here length is the value till where we want to search.By default it is the complete length of the string.
  -Return Value Type://boolean
  -Examples:
```js
let dog="mojo is nice";
dog.endsWith(`e`)//true;
dog.endsWith(`e`,12)//true
dog.endsWith(`e`,2)//false
```

9. `includes`
  -What it does?://the searches string is present
  -Parameter Data Type://string,position //here position refers to where to start searching from and is default to 0
  -Return Value Type://boolean
  -Examples:
```js
let sentance="shazia is a good girl";
sentance.includes("is")//true
sentance.includes("is",3)//true
sentance.includes("is",10)//false


10.`indexOf`
  -What it does?://Tells the index of a particular string 
  -Parameter Data Type:string,fromIndex (start position)
  -Return Value Type:index of particular or -1 if not found
  -Examples:
let sentance="shazia is a good girl";
sentance.indexOf("shazia");//1
sentance.indexOf("g")//12
sentance.indexOf("f")//-1

11. `lastIndexOf`
  -What it does?://Tells the last index of occurence of a particular string
  -Parameter Data Type://string (search value),fromIndex(where the search has to be stopped)
  -Return Value Type://index
  -Examples:
```js
sentance.lastIndexOf(`a`);//13
sentance.lastIndexOf(`a`,2);//2
sentance.lastIndexOf(`a`,0);//-1

12. `padEnd`
  -What it does?://Padding is added at the last of the string
  -Parameter Data Type:paddlength,paddingtype
  -Return Value Type:string
  -Examples:
sentance.padEnd(10);//"shazia ia a good girl           "
sentance.padEnd(10,`ab`)"shazia is a good girl"
sentance.padEnd(12,`ab`)"shazia is a good girlab" 
sentance.padEnd(16,`ab`)"shazia is a good girlababab"
sentance.padEnd(1)"shazia is a good girl"//no padding or changes 



13. `padStart`
  -What it does?:SAme as Padend only does it in the start
  -Parameter Data Type:
  -Return Value Type:
  -Examples:

14. `repeat`
  -What it does?://Will repeat iteself that number of times given it should be non negative and not any infinty value
  -Parameter Data Type://string
  -Return Value Type://string
  -Examples:
let name="kuku"
name.repeat(2)//kukukuku;
name.repeat(0)//nothing
name.repeat(-1)//error
name.repeat(1)//kuku

15. `replace`
  -What it does?://replces the word with new string
  -Parameter Data Type:
  -Return Value Type:
  -Examples:

16. `slice`
  -What it does?:slices out the required part given in the index without modyfing everythinh else
  -Parameter Data Type://string(startvalue) end vslue is optional.If end value is negative then string length+negativr value is taken
  -Return Value Type://string
  -Examples:
str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""

17. `split`
  -What it does?:
  -Parameter Data Type:
  -Return Value Type:
  -Examples:

18. `substring`
  -What it does?://same as slice only with more benifits
  -Parameter Data Type:
  -Return Value Type:
  -Examples:

