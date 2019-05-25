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

// Create Colour Class
class colour {
    constructor(vari,r,g,b) {
        this._vari = vari;
        this._r = r;
        this._g = g;
        this._b = b;
    }

    get colourCode() {
        return `${this._r},${this._g},${this._b}`;
    }
    get _red() {
        return this._r;
    }
    get _green() {
        return this._g;
    }
    get _blue() {
        return this._b;
    }
    get _var() {
        return this._vari;
    }
};

// Main
function getMainColour() {
    return mainRGB = new colour('--main-colour',parseFloat(red.value),parseFloat(green.value),parseFloat(blue.value));
};
// cb = colour bar
let cbOne = new colour('--colourBar-one',255,255,255);
let cbTwo = new colour('--colourBar-two',255,255,255);
let cbThree = new colour('--colourBar-three',255,255,255);
let cbFour = new colour('--colourBar-four',255,255,255);
let cbFive = new colour('--colourBar-five',255,255,255);

//Main Function
function changeBackground(){
    if(counter == 0) {
    } else {
    style.deleteRule(0);
    };

    getMainColour();

    let r = mainRGB._red;
    let g = mainRGB._green;
    let b = mainRGB._blue;
    let accentColour = "white";

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
    makeColour(cbOne);
};
function makeColourTwo(){
    makeColour(cbTwo);
};
function makeColourThree(){
    makeColour(cbThree);
};
function makeColourFour(){
    makeColour(cbFour);
};
function makeColourFive(){
    makeColour(cbFive);
};

//Colour Bar Function
function makeColour(boxVar) {
    if(counterTwo == 0) {
    } else {
    style.deleteRule(1);
    };
    
    getMainColour();

    boxVar._r = mainRGB._r;
    boxVar._g = mainRGB._g;
    boxVar._b = mainRGB._b;

    let stringThree = ':root {'+cbOne._var+': rgb('+cbOne.colourCode+'); '+cbTwo._var+': rgb('+cbTwo.colourCode+'); '+cbThree._var+': rgb('+cbThree.colourCode+'); '+cbFour._var+': rgb('+cbFour.colourCode+'); '+cbFive._var+': rgb('+cbFive.colourCode+'); }';
    
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