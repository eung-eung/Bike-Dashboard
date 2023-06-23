const close_btn = document.querySelector('#close')
const popup = document.querySelector('#modal_popup')
const overlay = document.querySelector('#overlay')
const price_input = document.querySelector('#price_input')

// display popup

// close popup
close_btn.addEventListener('click', () => {
    popup.style.display = 'none'
    overlay.style.display = 'none'
})


function showPopUp() {
    popup.style.display = 'block'
    overlay.style.display = 'block'
}
const formatPrice = (str) => {
    if (str.length == 0) {
        return ""
    }

    return str.trim().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}
const checkPrice = (value) => {
    if (/[^0-9]/.test(value) || value == "") {
        return false
    }
    return true
}
price_input.addEventListener('keyup', function (e) {

    this.value = this.value.replace(/[^0-9]/g, '');

    if (/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, "")
    }
    this.value = formatPrice(this.value.split('.').join(""))



})

const checkYear = (year) => {
    let text = /[^[0-9]+$/
    let current_year = new Date().getFullYear();

    if (year != 0) {
        if ((year != "") && year.length == 4 && (year > 1920 && year <= current_year) && (!text.test(year))) {
            return true;
        }

        if (year.length != 4) {
            return false;
        }
    }
    return false

}
// function render invalid div
const createMsg = (parentNode, msg, className) => {
    const invalidDiv = document.createElement("div")
    invalidDiv.className = className
    invalidDiv.innerHTML = msg
    parentNode.appendChild(invalidDiv)
}
// function clear invalid
const clearMsg = (className) => {
    document.querySelectorAll('.' + className + '').forEach((item) => {
        item.remove()
    });
}
const year_input = document.querySelector('#year_input')
year_input.addEventListener('input', function () {
    if (this.value == "") {
        clearMsg('warning_year')
        return
    }
    clearMsg('warning_year')

    if (!checkYear(this.value)) {
        createMsg(this.parentNode, 'Vui lòng nhập đúng định dạng', 'warning_year')
    }
})
const name_input = document.querySelector('#name_input')
const submit_btn = document.querySelector('#update')
submit_btn.addEventListener('click', function () {
    clearMsg('warning_submit')
    console.log(name_input.value.trim() == "")
    console.log(checkPrice(price_input.value.split('.').join('')))
    if (!(checkPrice(price_input.value.split('.').join('')) && checkYear(year_input.value) && name_input.value.trim() != "")) {
        createMsg(this.parentNode, 'Vui lòng nhập đúng các thông tin', 'warning_submit')
    }
})