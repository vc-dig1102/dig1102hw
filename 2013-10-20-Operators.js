 Operators -
  = is used to assign values.
  + is used to add values.
  
  txt1="What a very";
  txt2="nice day";
  txt3=txt1+txt2;
  
  Result:
  What a very nice day
  
  Comparisons and Logical Operators - are used to test for true or false.
  
  x==8 equal to
  x==="5" exactly equal to (equal value and equal type)
  x!=8  not equal
  x!=="5" not equal (different value or different type)
  x>8 greater than
  x<8 less than
  
  Logical Operators
  (x < 10 && y > 1) is true  && = and
  x==5 || y==5) is false  || or
  !(x==y) is true ! not
  
  
  If the variable age is a value below 18, the value of the variable voteable will be "Too young, otherwise the value of voteable will be "Old enough":
  
  voteable=(age<18)?"Too young":"Old enough";
  
  
  
  Loops - to run the same code over and over again, each time with a different value.
  
  
for (var i=0;i<cars.length;i++) 

 // i = 1;
    j = ++i;
    (i is 2, j is 2)
 
 
 
 	i = 1;
 	j = i++;
 	(i is 2, j is 1)
 
 
 "prefer ++i over i++" and you won't go wrong.
 
 
{ 
document.write(cars[i] + "<br>");
}
