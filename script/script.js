const btnNextStep = document.querySelector('.btn_next_step')
const form1 = document.querySelector('.container')
const form2 = document.querySelector('.second')
const form3 = document.querySelector('.third')

const previewSite = document.querySelector('.preview_site')
const back = document.createElement('button')
back.textContent = 'Go Back'
back.classList.add('go_back')
const buttons = document.querySelectorAll('.buttons')
let number = 0

const main = () =>{
    DOMEventPrep()
}

const DOMEventPrep = () =>{
    
    btnNextStep.addEventListener('click', nextStep)
    back.addEventListener('click', previewStep)
}

const nextStep = () =>{
    const name = document.querySelector('.name')
    const email = document.querySelector('.email')
    const phone = document.querySelector('.phone')

    
    if(number === 0){
        buttons[0].classList.add('active')
        if(name.value === '' || email.value === '' || phone.value === ''){
            name.classList.add('error')
            email.classList.add('error') 
            phone.classList.add('error')
        }else{
            name.classList.remove('error')
            email.classList.remove('error') 
            phone.classList.remove('error')
            form1.style.display = 'none'
            form2.style.display = 'block'
            previewSite.append(back)
        }

    }else if(number === 1){
        buttons[0].classList.remove('active')
        buttons[1].classList.add('active')
        number +=1
    }else if(number === 2){
        buttons[1].classList.remove('active')
        buttons[2].classList.add('active')
        form2.style.display = 'none'
        form3.style.display = 'block'
        number +=1
    }else if(number === 3){
        buttons[2].classList.remove('active')
        buttons[3].classList.add('active')
    }else if(number > 2){
        number = 3
    }
    console.log(number)
    number += 1
}


const previewStep = ()  =>{
    form2.style.display = 'none'
    form1.style.display = 'block'

    if(number === 3){
        buttons[3].classList.remove('active')
        buttons[2].classList.add('active')
        number = number - 1
    }else if(number === 2){
        buttons[2].classList.remove('active')
        buttons[1].classList.add('active')
        number = number - 1
    }else if(number === 1){
        buttons[1].classList.remove('active')
        buttons[0].classList.add('active')
        number = number - 1
    }else if(number < 0){
        number = 0
    }
    console.log(number)
}

document.addEventListener('DOMContentLoaded', main)