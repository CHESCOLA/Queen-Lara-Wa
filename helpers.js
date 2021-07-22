/*


*/

function successfullMessage(msg) {
    return "✅ *CHESCOLA-KS*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *CHESCOLA-KS*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *CHESCOLA-KS*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
