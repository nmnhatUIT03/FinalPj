var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var registrationForm = document.querySelector('.js-RegisterModal')


function showError(input, message) {
    let parent = input.parentElement 
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement 
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Không được để trống')
        }
        return isEmptyError
    });
}

function checkEmailError(input) {
    const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (!regexEmail.test(input.value)) {
        showError(input, 'Email không hợp lệ')
    }
    return isEmailError
}

function checkLengthError (input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }

    if (input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`)
        return true
    }

    return false
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }
    return false
}

registrationForm.addEventListener("submit", function(e) {
    e.preventDefault()
    showSuccess(username)
    showSuccess(email)
    showSuccess(password)
    showSuccess(confirmPassword)
    
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 3, 10)
    let isPasswordLengthError = checkLengthError(password, 8, 30)
    let isMatchPasswordError = checkMatchPasswordError(password, confirmPassword)

    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchPasswordError) {

    } else {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userInfo = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        alert("Đăng ký thành công!");
        registrationForm.reset();
        window.location.assign('login.html')
    }
});