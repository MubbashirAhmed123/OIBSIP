const button = document.querySelectorAll('button')

const display = document.getElementById('display')

let str = ''

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            display.value=''
            str = eval(str)
            display.value = str
        }
        else if (e.target.innerHTML == 'AC') {
            str = ''
            display.value = str
        } else if (e.target.innerHTML == 'DE') {
            str = str.slice(0, -1)
            display.value = str
        } else {
            str += e.target.innerHTML
            display.value = str
        }
    })
}