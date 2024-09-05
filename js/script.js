//ini script 
function CtoF(){
    var form = document.forms['calculationMap']
    var inputValue = form['inputNumber'].value
    var x = parseFloat(inputValue)
    var f = (x* 9/5)+32;
    var fahrenheit = parseFloat(f.toFixed(2))
    var xCalculated = parseFloat((x*9/5).toFixed(2))
    console.log(x)
    document.getElementById('answerFormula').innerHTML = "Fahrenheit = " + fahrenheit + "°F"
    document.getElementById('answerFormula').classList.add('answerFormulaBorder')
    document.getElementById('answerCalculation').innerText = `Formula = 
    (°C × 9/5) + 32 = ${fahrenheit}
    (${x} x 9/5) + 32 = ${fahrenheit}
    ${xCalculated} + 32 = ${fahrenheit}
    `
}

function FtoC(){
    var form = document.forms['calculationMap']
    var inputValue = form['inputNumber'].value
    var x = parseFloat(inputValue)
    var c = (x -32 ) * 5/9;
    var celcius = parseFloat(c.toFixed(2))
    var xCalculated = parseFloat((x -32).toFixed(2))
    console.log(x)
    document.getElementById('answerFormula').innerHTML = "Celcius = " + celcius + "°C"
    document.getElementById('answerFormula').classList.add('answerFormulaBorder')
    document.getElementById('answerCalculation').innerText = `Formula = 
    (°F - 32) x 5/9 = ${celcius}
    (${x} - 32) x 5/9 = ${celcius}
    ${xCalculated} x 5/9 = ${celcius}
    `
}

function calculate(event){
    console.log("Hi!")
    event.preventDefault();
    var form = document.forms['calculationMap'];
    var inputValue = form['inputNumber'].value
    var selectedOption = document.getElementById("measurement").value;
    if (inputValue == ''){
        alert("Input a number")
        return false;
    }
    if (selectedOption == "CtoF"){
        CtoF()
    } if (selectedOption == "FtoC"){
        FtoC()
    }
    
    
}

function removeFormula(){
    document.getElementById('answerFormula').innerHTML = ``
    document.getElementById('answerFormula').classList.remove('answerFormulaBorder')
    document.getElementById('answerCalculation').innerText = ``
}

function handleMeasurementChange() {
    var selectedOption = document.getElementById("measurement").value;
    console.log("Selected conversion:", selectedOption);
    var x = document.getElementsByClassName('inputMeasurementLabel')

    if (selectedOption === "CtoF") {
        console.log("You selected Celsius to Fahrenheit.");
        for (i=0; i<x.length; i++){
            x[i].textContent= "°C";
            removeFormula()
        }

    } else if (selectedOption === "FtoC") {
        console.log("You selected Fahrenheit to Celsius.");
        for (i=0; i<x.length; i++){
            x[i].textContent = "°F";
            removeFormula()
        }
    }
}
