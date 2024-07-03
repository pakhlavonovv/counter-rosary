let counter = 0;

function incrementCounter() {
    counter++;

    let counterElement = document.getElementById('counter');

    if (counter === 10) {
        counterElement.textContent = "Congratulations";
    } else {
        counterElement.textContent = counter;
    }
}