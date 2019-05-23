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
        this._var = vari;
        this._r = r;
        this._g = g;
        this._b = b;
    }

    get colourCode() {
        return `${this._r},${this._g},${this._b}`;
    }
};

// Main
let mainRGB = new colour('--main-colour',parseFloat(red.value),parseFloat(green.value),parseFloat(blue.value));
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

    let r = colour.mainRGB._r;
    let g = colour.mainRGB._g;
    let b = colour.mainRGB._b;
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
    makeColour(colour.cbOne);
};
function makeColourTwo(){
    makeColour(colour.cbTwo);
};
function makeColourThree(){
    makeColour(colour.cbThree);
};
function makeColourFour(){
    makeColour(colour.cbFour);
};
function makeColourFive(){
    makeColour(colour.cbFive);
};

//Colour Bar Function
function makeColour(boxVar) {
    if(counterTwo == 0) {
    } else {
    style.deleteRule(1);
    };
    
    boxVar._r = colour.mainRGB._r;
    boxVar._g = colour.mainRGB._g;
    boxVar._b = colour.mainRGB._b;

    let stringThree = ':root {'+colour.cbOne._var+': rgb('+colour.cbOne.colourCode+');'+colour.cbTwo._var+': rgb('+colour.cbTwo.colourCode+');'+colour.cbThree._var+': rgb('+colour.cbThree.colourCode+');'+colour.cbFour._var+': rgb('+colour.cbFour.colourCode+');'+colour.cbFive._var+': rgb('+colour.cbFive.colourCode+');}';
    
    style.insertRule(stringThree,1);

    counterTwo ++
    console.log("Hello World!");
};

//Main Listener
rgbContainer.addEventListener('keyup', changeBackground);

//Colour Bar Listeners
colourBarOne.addEventListener('click', makeColourOne);
colourBarTwo.addEventListener('click', makeColourTwo);
colourBarThree.addEventListener('click', makeColourThree);
colourBarFour.addEventListener('click', makeColourFour);
colourBarFive.addEventListener('click', makeColourFive);