const form = document.querySelector('.container form'); // The form element
const factText = document.querySelector('.number-fact'); // The fact div

// Add a listener to the submit event
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default submit event
    const number = e.target.querySelector('input[type="number"]').value; // The value of the input
    const loadText = 'Wait a little bit ...'; // The loading text
    factText.innerHTML = loadText;
    const baseURL = 'http://numbersapi.com/'; // The Numbers API
    fetch(baseURL + number, {
        headers: {
            'x-requested-with': 'text/plain'
        }
    }) // fetching the Fact
        .then(response => response.text()) // get the text
        .then(text => factText.innerHTML = text); // output the text
});