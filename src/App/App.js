const db = require('../database/db')

let UserInDataBase = db.username

module.exports = function App () {
    console.log("\n✅Authenticated! You are on the App!")
    console.log(`\n🔥 Welcome again ${UserInDataBase}`)
}