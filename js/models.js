
// triangle function
function buttonTraiangle() {

    const traingleBase = inputElement('traingleB');
    const traingleHeight = inputElement('traingleH');
    const totalArea = 0.5 * traingleBase * traingleHeight;

    // set the text of area 
    areaTextSet('traingleAreaText', totalArea);
    // console.log(traingleBase, traingleHeight, totalArea);

    // ---------------------------
    // add to claculation enrty
    addToCalculationEntry('traingel', totalArea);

}


// ractangle function
function buttonRectangle() {

    const rectangleWidth = inputElement('rectangleW');
    const rectangleLength = inputElement('rectanglel');
    const totalArea = rectangleWidth * rectangleLength;

    areaTextSet('rectangleAreaText', totalArea);


    // add to calculation entry
    addToCalculationEntry('Rectangle', totalArea);

}




// -------------------------------

function inputElement(input) {
    const inputItem = document.getElementById(input);
    const inputItemString = inputItem.value;
    const inputValue = parseFloat(inputItemString);
    if(isNaN(inputValue)){
        alert('Please Enter Number');
        return 0;
    }

    return inputValue;
}

// set the area value
function areaTextSet(areaText, area){
    const previousArea = document.getElementById(areaText);
    previousArea.innerText = area;
}


// calculation entry function right side part
// vvvvv....vvvvvv.....ppppp
function addToCalculationEntry(areaType, area){
    // console.log(areaType + ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');


    // for serial 1,2,3,4,
    const count = calculationEntry.childElementCount;

    // creat an element you want to add
    const p = document.createElement('p');

    // for gap of two line
    p.classList.add('my-4');

    // p.innerHTML = areaType + ' ' + area;
    p.innerHTML = `${count+1} ${areaType} ${area} cm<sup>2</sup>`;



    calculationEntry.appendChild(p);
}