//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}

//your code...

function Refactor()
{
    let i = 0;
    while (i < 10)
    {
    console.log(' the value of i in the loop is : ' + i);
    i++;
    }
}

Refactor();

/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

function add(){
    return 2 + 30
}

function multiply(product){
    return product * 20
}

function divide(product){
    return product / Math.pow(10, 2)
}

console.log(divide(multiply(add())))

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

/*
const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}
*/

const day= "friday";

function Switch()
{
    switch (day)
    {
        case "monday":
            console.log("we got a long week ahead of us...");
            break;

        case "tuesday":
            console.log("tuesday's are still better than mondays, but LONG way to go still");
            break;

        case "wednesday":
            console.log("We are smack dab in the middle of the week");
            break;

        case "thursday":
            console.log("Thursday night... the mood is right");
            break;

        case "friday":
            console.log("TGIF.  Friday truly is the best day of the week!")
            break;

        default:
            console.log("It's a weekend!")
            break;
    }
}

Switch();

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:

/*
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}
*/

const age = 10

function Ternary()
{
    age > 21 ? console.log(' adult ') : console.log(' minor ');
    age > 13 && age < 19 ? console.log(' teen ') : console.log(' not a teenager ');
    age > 65 ? console.log(' retired ') : console.log('still working...');
}

Ternary();

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

function meExpanded()
{
    var me =
    {
        name: "Gowtham Katta", 
        age: "22", 
        gender: "Male", 
        hobbies: ['Running', 'Hiking', 'Netflix'],
        profession: "Student",
        education: "Bachelor of Science and Arts in Biology",
        learn: function()
        {
            return console.log("My name is " + this.name + " and I am " + this.age);
        },
        myHobbies: function() {
            return console.log("Some of my hobbies include " + this.hobbies)}
    }
    me.learn();
    me.myHobbies();
}

meExpanded();

/************************************************************* */
// Problem 7: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

function phoneExpanded()
{
    var phone =
    {
        type: "iPhone", 
        model: "X", 
        year: "2017", 
        software: "iOS 11",
        storage: "64 GB",
        features: "water reistance up to 30 feet",
        learn: function()
        {
            return console.log("I have an " + this.type + this.model);
        },
        myFeatures: function()
        {
            return console.log("One feature is that it is " + this.features)
        }
    }
    phone.learn();
    phone.myFeatures();
}

phoneExpanded();

/************************************************************* */
//Problem 8: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

function Data()
{

    console.log("Booleans are my first favorite because they super simple, like if you just wanted to know if an expression is true.");
    console.log("Numbers are my second favorite because I've always had fun playing around with them.");
    console.log("Strings are my third favorite because like booleans they are simple, but also can be used to store or manipulate text.");
}

Data();

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


