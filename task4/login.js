const userData = JSON.parse(localStorage.getItem('userData'))

const username = document.getElementById('username')

const password = document.getElementById('password')

const login = document.getElementById('login')

const succMsg = document.getElementById('succ-msg')

const errMsg = document.getElementById('err-msg')

const checkpassword = document.getElementById('checkpassword')

login.addEventListener('click', (e) => {
    e.preventDefault()

    if (username.value && password.value) {
        validateUser(username.value, password.value)
        username.value = ""
        password.value = ""
    } else {
        alert('all fields are required!')
    }
})

const validateUser = (username, password) => {

    let hashPassword = CryptoJS.MD5(password).toString()

    if (Object.values(userData).some(ele => (ele.name === username) && (ele.user_password == hashPassword))) {
        succMsg.style.display = 'block'
        window.location = 'home.html'

    } else {
        errMsg.style.display = 'block'
        setTimeout(() => {
            errMsg.style.display = 'none'
        }, 3000);
    }

}

checkpassword.addEventListener('click', () => {
    console.log('pt')
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'

    }
})
