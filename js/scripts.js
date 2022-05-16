const button = document.querySelector('.container button'); // the Generator Button
const jokeText = document.querySelector('.container p'); // the Joke text

/*
// Declaring the fetching a joke function
async function getJoke() { // using async to asynchronize the fetching
    const jokeData = await fetch('https://icanhazdadjoke.com/', { // the joke api
        headers: {
            'Accept': 'application/json' // accepting json format
        }
    });

    const jokeObj = await jokeData.json(); // format the output in json
    jokeText.innerHTML = jokeObj.joke; // add it to the joke text
}
*/

function getJoke() { // using Promise chains to fetch the jokes
    const jokeData = fetch('https://icanhazdadjoke.com/', { // the joke api
        headers: {
            'Accept': 'application/json' // accepting json format
        }
    })
        .then(jokeObj => jokeObj.json()) // format the output in json
        .then(formatedData => jokeText.innerHTML = formatedData.joke); // add it to the joke text
}

// when the document loaded, add a joke in the joke text
document.addEventListener('DOMContentLoaded', getJoke);

// when clicking the generator button, generate a new joke
button.addEventListener('click', getJoke);