//Make a tic tac to game

var x = "x.jpg";
// Location of where you uploaded your site's x.jpg image

var o = "o.jpg";
// Location of where you uploaded your site's o.jpg image

var blank = "blank.jpg";
// Location of where you uploaded your site's blank.jpg image

var pause = 0;
var all = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var temp="";
var ok = 0;
var cf = 0;
var choice=9;
var aRandomNumber = 0;
var comp = 0;
var t = 0;
var wn = 0;
var ls = 0;
var ts = 0;

function help() {
alert("Welcome to Tic-Tac-Toe!  You play as the X's and the computer is the O's.  Select the square you want to put your X into by clicking them.  You cannot occupy a square that is already occupied. The first player to get three squares in a row wins.  Good Luck!!")
}


function logicOne() {
//logicOne() was done in class by all of us
if ((a==1)&&(b==1)&&(c==1)) all=1;
if ((a==1)&&(d==1)&&(g==1)) all=1;
if ((a==1)&&(e==1)&&(i==1)) all=1;
if ((b==1)&&(e==1)&&(h==1)) all=1;
if ((d==1)&&(e==1)&&(f==1)) all=1;
if ((g==1)&&(e==1)&&(c==1)) all=1;
if ((g==1)&&(h==1)&&(i==1)) all=1;
if ((c==1)&&(f==1)&&(i==1)) all=1;

}



function logicTwo() {
// logicTwo was done in class by all of us  
if ((a==2)&&(b==2)&&(c==2)) all=2;
if ((d==2)&&(e==2)&&(f==2)) all=2;
if ((g==2)&&(h==2)&&(i==2)) all=2;
if ((a==2)&&(d==2)&&(g==2)) all=2;
if ((b==2)&&(e==2)&&(h==2)) all=2;
if ((c==2)&&(f==2)&&(i==2)) all=2;
if ((a==2)&&(e==2)&&(i==2)) all=2;
if ((g==2)&&(e==2)&&(c==2)) all=2;
}



function clearOut() {//clears out the board
// I am thinking that seting a through I to 0 will clear out the board, what do you all think?
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
}

function checkSpace() {//makes sure the space in unoccupied
//I am thinking this using the following logic, what do you all think?
if ((a==1)||(a==2)) var ok = !0;
if ((b==1)||(b==2)) var ok = !0;
if ((c==1)||(c==2)) var ok = !0;
if ((d==1)||(d==2)) var ok = !0;
if ((e==1)||(e==2)) var ok = !0;
if ((f==1)||(f==2)) var ok = !0;
if ((g==1)||(g==2)) var ok = !0;
if ((h==1)||(h==2)) var ok = !0;
if ((i==1)||(i==2)) var ok = !0;
}


function yourChoice(chName) {


}



function taken() {


}


function myChoice() {


}



function ended() {


}


function process() {//tallies as a win, lose, or tie


}


function playAgain() {


}


function reset() {

}
