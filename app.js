const form = document.querySelector(".form");
const inputEl = document.querySelector(".search-input");

const ipNumber = document.querySelector(".ip-number")
const cityEl = document.querySelector(".city")
const time = document.querySelector(".time")
const space = document.querySelector(".space")

// const ism = document.querySelector("#user-name")
// const post = document.querySelector("#post")
// const follower = document.querySelector("#follower")
// const following = document.querySelector("#following")
// const bio = document.querySelector("#bio")
// const cauntriy = document.querySelector("#location")
// const twitter = document.querySelector("#twitter")
// const gitUrl = document.querySelector("#gitUrl")
// const company = document.querySelector("#company")
// const created = document.querySelector(".main-span-3")
// const day = document.querySelector("#day")
// const month = document.querySelector("#month")
// const year = document.querySelector("#year")
// const avatar = document.querySelector("#user")


form.addEventListener("submit" , (e)=> {
    e.preventDefault()
    const inputVal = input.value
    console.log(inputVal);
    input.value = ""
    
    async function take() {
        const manzil = await  fetch(`https://api.github.com/users/${inputVal}`)
        const data = await manzil.json()
        
        
        console.log(data);
    }
    take()
})