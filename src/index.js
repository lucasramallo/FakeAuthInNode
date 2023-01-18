const db = require('./database/db')

let UserInDataBase = db.username
let passwordInDataBase = db.password 
let emailInDataBase = db.email

const questions = [
    "User",
    "Password"
]

const input = (index = 0) => {
    console.log(`${questions[index]} |>`)
}

input()

const inputResponse = []

process.stdin.on("data", data =>{
    inputResponse.push(data.toString().trim())
    if(inputResponse.length < questions.length){
        input(inputResponse.length)
    } else if((inputResponse[0] == UserInDataBase || inputResponse[0] == emailInDataBase) && inputResponse[1] == passwordInDataBase){
        console.log("\n✅Authenticated! You are on the App!")
        console.log(`\n🔥 Welcome again ${UserInDataBase}`)
        process.exit()
    } else{
        console.log("\n❌Incorrect Username/Email or Password. Please Try Again.")
        process.exit()
    
    }
})
