Loops

---------------------------------------------------------------------------------
Return of the "return"

Recall that a function is something like a named block of code that we can easily call again later. Optionally associated with each function is a return statement. A return statement is what a function "gives back" after it is called. The value returned can be assigned to a variable.

Suppose that the function totalPrice of a car object calculates the total price for a car and returns this price. If the total price ends up being $20,000, then the myPrice variable in the following statement will be 20000.

var myPrice = car.totalPrice();

The return keyword is not a variable. Remember that it is a keyword that simply spits out what you want it to spit back out.



<b>Instructions</b>

Finish the supplied add function. It should sum up the arguments number1, number2, and number3 into the variable sum. Then you should return the sum.

After the function definition, call add twice: once using 1, 2, and 3 as arguments, and again using 10, 10, and -20 as arguments. Assign the values that these function calls return to new variables sum1 and sum2, respectively.


var add = function(number1, number2, number3) {
    // add up the numbers
    var sum = 
    
    // return the sum!
    
};

 // call add twice here, assigning the return values
 // to new variables sum1 and sum2

---------------------------------------------------------------------------------
// Loops are handy, if you want to run the same code over and over again, each time with a different value.  Loops can execute a block of code as long as a specified condition is true.

//Loops Example:
Instead of writing:
document.write(cars[0] + "<br>");
document.write(cars[1] + "<br>");
document.write(cars[2] + "<br>");
document.write(cars[3] + "<br>");
document.write(cars[4] + "<br>");
document.write(cars[5] + "<br>"); 

You can write:
for (var i=0;i<cars.length;i++)
{
document.write(cars[i] + "<br>");
}


//JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true


//The For Loop- often the tool you will use when you want to create a loop.

//The for loop has the following syntax:
for (statement 1; statement 2; statement 3)
  {
  the code block to be executed
  }

//Statement 1 is executed before the loop (the code block) starts.
//Statement 2 defines the condition for running the loop (the code block).
//Statement 3 is executed each time after the loop (the code block) has been executed.

//For Loop Example:

for (var i=0; i<5; i++)
  {
  x=x + "The number is " + i + "<br>";
  }

//Statement 1 sets a variable before the loop starts (var i=0).
//Statement 2 defines the condition for the loop to run (i must be less than 5).
//Statement 3 increases a value (i++) each time the code block in the loop has been executed.



//Statement 1 -normally you will use statement 1 to initiate the variable used in the loop (var i=0).  Statement 1 is optional.  You can initiate any (or many) values in statement 1:

for (var i=0,len=cars.length; i<len; i++)
{
document.write(cars[i] + "<br>");
}

//And you can omit statement 1 (like when your values are set before the loop //starts):

var i=2,len=cars.length;
for (; i<len; i++)
{
document.write(cars[i] + "<br>");
}


//Statement 2-used to evaluate the condition of the initial variable.  Statement 2 is optional.  If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.  **If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. 


//Statement 3-often increases the initial variable.  Statement 3 is optional.
//Statement 3 could do anything. The increment could be negative (i--), or larger (i=i+15).  It can also be omitted (like when you have corresponding code inside the loop): 

var i=0,len=cars.length;
for (; i<len; )
{
document.write(cars[i] + "<br>");
i++;
}



//The For/In Loop- loops through the properties of an object:

var person={fname:"John",lname:"Doe",age:25};

for (x in person)
  {
  txt=txt + person[x];
  }



//While loops-loops through a block of code as long as a specified condition is true.

//While Example:
//The loop will continue to run as long as the variable i is less than 5:
    while (i<5)
        {
        x=x + "The number is " + i + "<br>";
        i++;
        }
        
 //Do/While Loop - This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.       
 The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
//Do/While Example:
    do
        {
         x=x + "The number is " + i + "<br>";
         i++;
         }
    while (i<5); 
 
 