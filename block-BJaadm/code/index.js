let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName=persons.map((element)=>element.sex)
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map((element)=>element.grade)

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map((element)=>element.name)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(persons.filter((element)=>element.name.startsWith("J")||element.name.startsWith("P")))
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filter1=persons.filter((element)=>element.name.startsWith("A")||element.name.startsWith("C"));
console.log(filter1[0].name.length);

// Log all the filtered male ('M') in persons array
console.log(persons.filter((element)=>element.sex=="M"))
// Log all the filtered female ('F') in persons array
console.log(persons.filter((element)=>element.sex=="F"))
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((element)=>(element.sex=="F")&&(element.name.startsWith("J")||element.name.startsWith("C"))))
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((element)=>element%2===0))
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((element)=>element.name.startsWith("J")))
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((element)=>element.name.startsWith("P")))

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((element)=>element.name.startsWith("J")&&element.grade>10&&element.sex==="F"))

// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.filter((element)=>element.sex==="F")
// Filter all the male from persons array and store in malePersons array
let malePersons=persons.filter((element)=>element.sex==="M")
// Find the sum of all grades and store in gradeTotal
let sum=peopleGrade.reduce((acc,cv)=>
{acc=acc+cv;
return acc;
}
,0)
// Find the average grade
let avg=sum/peopleGrade.length;
// Find the average grade of male
let maleGrade=malePersons.map((element)=>element.grade);
let femaleGrade=femalePersons.map((element)=>element.grade)
let sumM=maleGrade.reduce((acc,cv)=>
{acc=acc+cv;
return acc;
}
,0)



// Find the average grade of female
let sumF=femaleGrade.reduce((acc,cv)=>
{acc=acc+cv;
return acc;
}
,0)

// Find the highest grade
let highest =[...peopleGrade].sort((a,b)=>a-b)
// Find the highest grade in male
let highestM =maleGrade.sort((a,b)=>a-b).pop()

// Find the highest grade in female
let highestF =femaleGrade.sort((a,b)=>a-b).pop()

// Find the highest grade for people whose name starts with 'J' or 'P'
let one=persons.filter((element)=>element.name.startsWith("J")||element.name.startsWith("P"))
let two=one.map((element)=>element.grade);
let three=two.sort((a,b)=>a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let ass=[...peopleGrade].sort((a,b)=>a-b)
// Sort the peopleGrade in descending order
let des=[...peopleGrade].sort((a,b)=>b-a)
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
//Done
// Sort the array peopelName in ascending `ABCD..Za....z`
//let name=peopleSex.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let nomutate=[...peopleSex].sort();

