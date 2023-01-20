const db = require('./database/db');
const App = require('./App/App');

let UserInDataBase = db.username;
let passwordInDataBase = db.password;
let emailInDataBase = db.email;

let TimeToAuth = 3000;

const questions = [
    "User",
    "Password"
];

const inputResponse = [];

const input = (index = 0) => {
    process.stdout.write(`${questions[index]} |> `);
}
input();

process.stdin.on("data", data =>{
    inputResponse.push(data.toString().trim());
    if(inputResponse.length < questions.length){
        input(inputResponse.length)
    } else if((inputResponse[0] == UserInDataBase || inputResponse[0] == emailInDataBase) && inputResponse[1] == passwordInDataBase){
        setTimeout(() => {App()}, TimeToAuth);
        console.log("\n⏱️ Authenticating...");
        setTimeout(() => {process.exit()}, TimeToAuth);
    } else{
        console.log("\n❌Incorrect Username/Email or Password. Please Try Again.");
        process.exit();
    
    }
});
