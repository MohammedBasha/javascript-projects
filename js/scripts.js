const text = document.querySelector('.content h2'); // Grabbing the H2 element
const popup = document.querySelector('.content .popup'); // Grabbing the .popup div

// Add click event on the H2 Element
text.addEventListener('click', () => {
    popup.classList.add('active'); // add .active class to the .popup div
    copyToClipboard(); // call the copy function
});

// add animationend event on the .popup div
popup.addEventListener('animationend', () => {
    popup.classList.remove('active');
})

// the Copy to Clipboard function
function copyToClipboard() {
    const textArea = document.createElement('textarea'); // Create textarea element
    textArea.setAttribute('readonly', ''); // make it readonly
    
    // add some styles to the textarea
    textArea.style.cssText = `
        position: absolute;
        opacity: 0;
        pointer-events: none;
    `;
    textArea.value = text.innerText; // add the H2 text to the textarea element
    document.body.appendChild(textArea); // append the text area to the body
    textArea.select(); // select the textarea's text
    document.execCommand('copy'); // copy the text to the clipboard
    document.body.removeChild(textArea); // remove the textarea from the body
}