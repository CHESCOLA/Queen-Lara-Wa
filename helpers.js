/*


*/

function successfullMessage(msg) {
    return "β *CHESCOLA-KS*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *CHESCOLA-KS*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *CHESCOLA-KS*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
