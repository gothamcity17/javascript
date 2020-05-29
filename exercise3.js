//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

//your code...

var MyString = ""

function StringStatus ()
{
    if (MyString === "") console.log("True");
    else console.log("False");
}

StringStatus();

/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

//your code...

function Replace()
{
    var FirstString = "Learning JavaScript is fun!";
    FirstString = FirstString.split(' ');
    console.log(FirstString);
    FirstString[3] = "cool!";
    FirstString = FirstString.join(' ');
    console.log(FirstString);
}

Replace();

/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

//your code...

function Declares()
{
    var FirstArray = [1, 2, 3, 4, 5]
    var SecondArray = FirstArray.map(x => Math.pow(x,2));
    console.log(SecondArray);
}

Declares()

/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

//your code...

function Declares()
{
    var FirstArray = [1, 3, 5, 7, 9, 1, 3, 5];
    var SecondArray = FirstArray.filter(x => {if(x>3) return x})
    console.log(SecondArray);
}

Declares()

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

//your code...

function Declares()
{
    var FirstArray = [5, 10, 15, 20, 25]
    var SecondArray = FirstArray.reduce((x, y) => x + y, 0);
    console.log(SecondArray)
}

Declares()

/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

//your code...

const DNA_String = "GCTAAAAAA"

function ComplementaryStrand()
{
    var DNA_Array = DNA_String.split('')
    console.log(DNA_Array);
    var DNA_Array_Reverse = DNA_Array.map (x => 
    {
        switch(x)
        {
            case "C":
                return "G";
            case "T":
                return "A";
            case "G":
                return "C";
            case "A":
                return "T";
            default:
                return;
                break;
        }
    })
    console.log(DNA_Array_Reverse);
}

ComplementaryStrand()

/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

const truthys = numbers.filter(el => el);
const primitives = truthys.filter(n => typeof n != 'object');
const noBools = primitives.filter(p => typeof p != 'boolean');
console.log(noBools)

const numStrings = ["zero","one","two","three"];
const numWithStrings = noBools.map(nb => numStrings.includes(nb) ? numStrings.indexOf(nb) : nb);
console.log(numWithStrings);

const nums = numWithStrings.filter(n => typeof x != 'string');
console.log(nums);

console.log(Math.max(...nums));


/* Old work
function maxNumber(numbers)
{
    var Array1 = numbers.map (x => 
        {
            switch(x)
            {
                case "one":
                    return 1;
                case "two":
                    return 2;
                case "3":
                    return 3;
                case "three":
                    return 3;
                default:
                    return(Number(x));
                    break;
            }
        })
        console.log(Array1);
}

maxNumber()
*/


// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false)
{
    Array1.sort(function(a, b){return b - a});
    console.log(Array1)
}

sortNums()




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");
mapObj.set(23, "integer");
mapObj.set(26.5, "float");
mapObj.set(true, "boolean");
mapObj.set("An example of a sentence", "string");
console.log(mapObj)


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

console.log("The above console.log() statement is false as there is not a conrete reference to rely upon.")

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

var New_Array = [];
mapObj.forEach(x => {New_Array.push(x)})
console.log(New_Array)

/************************************************************* */
//Problem 9:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

let onesReversed = ones.slice().reverse();

console.log(onesReversed)

/************************************************************* */
//Problem 10:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function greeting()
{
    var name = prompt('Please enter your name.');
    alert('How are you doing,' + " " +name + "?");
}
  
function performer(cb)
{
    cb();
}
  
performer(greeting);

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

//One new feature of ES6+ is template literals. Before, we had to use string concatenations. Now, we can use a string with placeholders, which allows us to get rid of all those concatenations.
//As you can see, the literals are far more simpler to implement.

//Before: 
var name = 'Gotham'; 
var message = 'Hi ' + name + ',';
console.log(message)

//After:
var name = 'Gotham'; 
var message = `Hi ${name},`;
console.log(message)