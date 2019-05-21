//Variables
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");

let style = document.styleSheets[0];
let rgbContainer = document.querySelector("#rgbInput");
let colourBarOne = document.querySelector("a.colourBar.one");
let colourBarTwo = document.querySelector("a.colourBar.two");
let colourBarThree = document.querySelector("a.colourBar.three");
let colourBarFour = document.querySelector("a.colourBar.four");
let colourBarFive = document.querySelector("a.colourBar.five");

let counter = 0;
let counterTwo = 0;

let colourList = [[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255]];

function newFunction() {
    let r = parseFloat(red.value);
    let g = parseFloat(green.value);
    let b = parseFloat(blue.value);
    return { r, g, b };
};

//Main Function
function changeBackground(){
    if(counter == 0) {
    } else {
    style.deleteRule(0);
    };

    let accentColour = "white";
    let { r, g, b } = newFunction();

    if(r+g+b <= 600){
        accentColour = "white";
    } else {
        accentColour = "black";
    };

    const string = ':root {--main-colour: rgb('+r+','+g+','+b+'); --accent-colour: '+accentColour+'; }';
    
    style.insertRule(string,0);
    counter ++
};

function makeColourOne(){
    makeColour(0);
};
function makeColourTwo(){
    makeColour(1);
};
function makeColourThree(){
    makeColour(2);
};
function makeColourFour(){
    makeColour(3);
};
function makeColourFive(){
    makeColour(4);
};

//Colour Bar Function
function makeColour(boxNumber) {
    if(counterTwo == 0) {
    } else {
    style.deleteRule(1);
    };
    let { r, g, b } = newFunction();

    let arrayOne = [r,g,b];
    colourList[boxNumber] = arrayOne;

    let stringThree = ':root {--colourBar-one: rgb('+colourList[0].join()+'); --colourBar-two: rgb('+colourList[1].join()+'); --colourBar-three: rgb('+colourList[2].join()+'); --colourBar-four: rgb('+colourList[3].join()+'); --colourBar-five: rgb('+colourList[4].join()+'); }';
    style.insertRule(stringThree,1);

    counterTwo ++
};

//Main Listener
rgbContainer.addEventListener('keyup', changeBackground);

//Colour Bar Listeners
colourBarOne.addEventListener('click', makeColourOne);
colourBarTwo.addEventListener('click', makeColourTwo);
colourBarThree.addEventListener('click', makeColourThree);
colourBarFour.addEventListener('click', makeColourFour);
colourBarFive.addEventListener('click', makeColourFive);