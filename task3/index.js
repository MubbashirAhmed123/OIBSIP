const input = document.querySelector("#input")
const btn = document.querySelector(".btn")
const listItem = document.querySelector(".list-item")

let newEle
let removeitem

btn.addEventListener("click", function () {
    console.log("clicked")
    todolist()
    input.value = ""

})

function todolist() {
    if (input.value === "") {
        alert("please enter some value to display the list")
        return
    }

    let inputValue = input.value

    listItem.insertAdjacentHTML('afterbegin', `<div class="new-item">
    <img src="/tick.png" alt="" class="complete">
    <p>${inputValue}</p>
    <img src="/delete.png" alt="" class="del-btn" width="50px">
    </div>`)
}

listItem.addEventListener("click", function (e) {

    if (e.target.classList.contains('del-btn')) {
        removeitem = e.target.parentElement
        listItem.removeChild(removeitem)
    }

})

listItem.addEventListener("click", (e) => {
    if (e.target.classList.contains('complete')) {
        item = e.target.parentElement
        item.style.textDecoration="line-through"
    }
})



