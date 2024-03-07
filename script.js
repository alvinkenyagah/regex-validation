let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{

e.preventDefault()


let phone = document.getElementById('phone').value
let info = document.createElement('h1')

const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/

if(regex.test(phone)===false){
    info.innerText = 'Enter the correct phone number fomart!'
    infocon.append(info)
}else{
    info.innerText= `Your phone number is ${phone}.`
    infocon.append(info)
}

form.reset()

})