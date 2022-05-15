const form = document.querySelector('.right-col form'); // Grabbing the Form element
const inputs = document.querySelectorAll('.right-col form input'); // Grabbing all the input elements

form.addEventListener('submit', (e) => { // listen to the form's submit event 
    e.preventDefault(); // prevent the submit's default action
    inputs.forEach(input => { // loop through all the form inputs
        if (!input.value) { // if the input doesn't has a value
            input.parentElement.classList.add('error'); // Adding an 'error' class to its parent
        } else { // if the input has a value
            input.parentElement.classList.remove('error'); // Removing the 'error' class from its parent

            if (input.type === 'email') { // checking if it is an 'email' input
                if (validateEmail(input.value)) { // if the email's value's validation true
                    input.parentElement.classList.remove('error'); // Removing the 'error' class from its parent
                } else { // if the email's value's validation false
                    input.parentElement.classList.add('error'); // Adding an 'error' class to its parent
                }
            }
        }
    });
});

// creating a validation function with regx
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
