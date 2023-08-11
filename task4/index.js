const username = document.getElementById('username')

const password = document.getElementById('password')

const confirm_password = document.getElementById('confirm_password')

const register = document.getElementById('register')

const form = document.getElementById('form')

const succMsg = document.getElementById('succ-msg')

let userArrObj = []
let obj
register.addEventListener('click', (e) => {
    e.preventDefault()
    if (username.value && password.value && confirm_password.value) {

        if (password.value !== confirm_password.value) {
            alert('password and confirm password must be same')
            return
        }

        let result = checkUser(username.value, password.value, confirm_password.value)
        if (result) {
            window.location = 'login.html'
        }
        
        form.reset()

    } else {
        alert('all fields are required!!')
    }
})


const checkUser = (user, password, confirm_password) => {

    let hashpassword = CryptoJS.MD5(password).toString()
    let hash_confirm_password = CryptoJS.MD5(confirm_password).toString()

    const data = localStorage.getItem('userData')
    const actualData = JSON.parse(data)

    if (actualData) {

        if (Object.values(actualData).some((ele) => user === ele.name && hashpassword === ele.user_password && hash_confirm_password === ele.user_confirm_password)) {
            alert('Account Already Exist! Transferring You To Login Page.')
            return true
        }
        else if (Object.values(actualData).some((ele) => user === ele.name)) {
            alert('Create Different username.')
            
        }else {
            storeIntoData(user, password, confirm_password)
            succMsg.style.display = 'block'
            setTimeout(() => {
                succMsg.style.display = 'none'
            }, 3000);
        }
    }else {
        storeIntoData(user, password, confirm_password)
        succMsg.style.display = 'block'
        setTimeout(() => {
            succMsg.style.display = 'none'
        }, 3000);
    }

}

const storeIntoData = (user, pass, cpass) => {

    obj = {
        name: user,
        user_password: CryptoJS.MD5(pass).toString(),
        user_confirm_password: CryptoJS.MD5(cpass).toString()
    }

    const userData = JSON.parse(localStorage.getItem('userData') || "[]")
    userData.push(obj)
    localStorage.setItem('userData', JSON.stringify(userData))

}


const checkpassword = document.getElementById('checkpassword')


checkpassword.addEventListener('click', seepassword)
function seepassword() {
    console.log('see password')
    if (password.type === 'password') {
        password.type = 'text'
        confirm_password.type='text'
    } else {
        password.type = 'password'
        confirm_password.type='password'

    }
}



