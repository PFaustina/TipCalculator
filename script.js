
// Selects the first button element in the HTML.
const button = document.querySelector("button");

// Selects the element with the class "output" in the HTML.
const output = document.querySelector(".output");

// Selects the form element with the ID "form" in the HTML.
const form = document.querySelector("#form");

//Print or Echo the Calculate Tip button
console.log(button);

// Adds a click event listener to the button element. When the button is clicked, the function inside the event listener is executed.
button.addEventListener("click",function(){

// Selects the first input element (bill amount) in the HTML.
    const cost = document.querySelector("input");

// Calculates 15% of the bill amount and logs it to the console.
    console.log(cost.value *0.15);

// Calculates 15% of the bill amount and rounds it to two decimal places, storing the result in the variable tip
    let tip = (cost.value *0.15).toFixed(2);
    
 // Displaying the tip calculation result on the web page.
    let temp = `<h1>You should tip $ ${tip} on $ ${cost.value}</h1>`;
    output.innerHTML = temp;
})