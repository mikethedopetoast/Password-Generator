const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generateBtn = document.getElementById("generate-btn")

let checkbox = document.getElementById("checkbox")


// to set password length

let passwordLength = 10

let slider = document.getElementById("slider")
let sliderNumber = document.getElementById("slider-number")

slider.addEventListener("input", () => {
    // display the value of the slider
    sliderNumber.textContent = `${slider.value}`
    // assign new value to passwordLength
    passwordLength = slider.value
})

// to get a random character from the characters array

function getRandomCharacter() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

generateBtn.addEventListener("click", renderRandomPassword)

function renderRandomPassword() {
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword() 
}

// to copy selected password by clicking on it

passwordOne.addEventListener("click", () => copyToClipboard(passwordOne.textContent))
passwordTwo.addEventListener("click", () => copyToClipboard(passwordTwo.textContent))

function copyToClipboard(password) {
    navigator.clipboard.writeText(password)
    // alert user that the action took place
    alert("Copied the password to clipboard: " + password)
}

checkbox.addEventListener('change', () => {
    // change the theme of the website
    const lightTheme = document.getElementsByClassName('light-theme')
    for (let i = 0; i < lightTheme.length; i++) {
         lightTheme[i].classList.toggle('dark-theme')
         }
})