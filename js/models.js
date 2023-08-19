
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

