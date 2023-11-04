let displayValue = '';
function appendToDisplay(value){
    displayValue += value;
    document.getElementById('display').value = displayValue;
}
function clearDisplay(){
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
function calculateResult(){
    try{
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    }
    catch(error){
        document.getElementById('display').value = 'Error';
    }
}
function calculateSin(){
    displayValue = Math.sin(eval(displayValue));
    document.getElementById('display').value = displayValue;
}
function calculateCos(){
    displayValue = Math.cos(eval(displayValue));
    document.getElementById('display').value = displayValue;
}
function calculateTangent(){
    displayValue = Math.tan(eval(displayValue));
    document.getElementById('display').value = displayValue;
}
function calculateSquareRoot(){
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = displayValue;
}
function calculateLog(){
    displayValue = Math.log10(eval(displayValue));
    document.getElementById('display').value = displayValue;
}
function calculateMatrix(){
    try{
        const matrixInput = eval(displayValue);
    
    if (Array.isArray(matrixInput) && matrixInput.length === 2 && Array.isArray(matrixInput[0]) && Array.isArray(matrixInput[1]) && matrixInput[0].lenght === 2 && matrixInput[1].lenght === 2){
   const result = [
    [matrixInput[0][0] * matrixInput[0][0] + matrixInput[0][1] * matrixInput[1][0], matrixInput[0][0] * matrixInput[0][1] + matrixInput[0][1] * matrixInput[1][1]]
   ]
} 

    
    }
}
