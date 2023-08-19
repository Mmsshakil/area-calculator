
// take the input values
function inputElement(input) {
    const inputItem = document.getElementById(input);
    const inputItemString = inputItem.value;
    const inputValue = parseFloat(inputItemString);
    return inputValue;
}

// set the area value
function areaTextSet(areaText, area){
    const previousArea = document.getElementById(areaText);
    previousArea.innerText = area;
}


// this was rectangle functions
// first call the button 
// function buttonRectangle() {

//     const rectangleWidth = inputElement('rectangleW');
//     const rectangleLength = inputElement('rectanglel');
//     const totalArea = rectangleWidth * rectangleLength;
//     areaTextSet('rectangleAreaText', totalArea);

// }