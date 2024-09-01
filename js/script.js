//ini script 
function calculate(event){
    console.log("Hi!")
    event.preventDefault();
    var form = document.forms['calculationMap'];
    var inputValue = form['inputNumber'].value
    if (inputValue == ''){
        alert("Input a number")
        return false;
    }
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