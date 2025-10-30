function performOperation() {
    // Get user input from field
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    // Check if input are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {

        // Perform the operation
        let result = multiply(num1, num2);

        //Display result
        displayResult(result);

    } else {
        displayResult("Please, enter valid numbers");
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause the execution
    debugger;

    // Multiply
    return a*b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}