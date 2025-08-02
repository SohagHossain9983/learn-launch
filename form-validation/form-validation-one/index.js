





const form = document.getElementById('form');
const username = document.getElementById('username');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // CheckInput();

    if (username.value === '') {
        // showError(username, 'User name is requred')
        const formInput = username.parentElement;
        const small = formInput.querySelector('p')
        small.innerText = 'User name is requred'
        username.className = 'form-input form-error'
    } else if (username.value) {
        console.log(username.value)
        const formInput = username.parentElement;
        const small = formInput.querySelector('p')
        small.innerText = ''
        username.value= ''
        username.className = 'form-input form-succes'
    }

});
