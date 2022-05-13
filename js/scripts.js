const text = document.querySelector('.content h2'); // Grabbing the H2 element
const popup = document.querySelector('.content .popup'); // Grabbing the .popup div

// Add click event on the H2 Element
text.addEventListener('click', () => {
    popup.classList.add('active'); // add .active class to the .popup div
    copyToClipboard(text); // call the copy function
});

// add animationend event on the .popup div
popup.addEventListener('animationend', () => {
    popup.classList.remove('active');
});

// the Copy to Clipboard function
function copyToClipboard(elm) {
    navigator.clipboard.writeText(elm.innerText); // Using the writeText method to write the text in the clipboard
    navigator.clipboard.readText();// using the readText method to read the copied text
}