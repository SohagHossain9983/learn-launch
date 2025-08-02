

const form = document.getElementById('form')
const username = document.getElementById('username')
const number = document.getElementById('number')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handelForm();
})

function handelForm() {
    const usernameValue = username.value;
    const numberValue = number.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
    // console.log(username.value)
    if (usernameValue === '') {
        showError(username, 'Name is required')
    } else {
        showSuccess(username)
    }
    if (numberValue === '') {
        showError(number, 'Number is required')
    } else {
        showSuccess(number)
    }
    if (emailValue === '') {
        showError(email, 'Email is required')
    } else {
        showSuccess(email)
    }
    if (passwordValue === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password)
    }
    if (password2Value === '') {
        showError(password2, 'Confirm password is required')
    } else if (passwordValue !== password2Value) {
        showError(password2, 'Password does not match')
    } else {
        showSuccess(password2)
    }
}

function showError(input, massage) {
    const formInput = input.parentElement;
    const pragraoh = formInput.querySelector('p')
    pragraoh.innerText = massage;
    input.className = 'form-input form-error'
}

function showSuccess(input) {
    const formInput = input.parentElement;
    const pragraoh = formInput.querySelector('p')
    input.className = 'form-input form-succes'
    pragraoh.innerText = '';
    input.value = '';
    console.log(input.value)
}



