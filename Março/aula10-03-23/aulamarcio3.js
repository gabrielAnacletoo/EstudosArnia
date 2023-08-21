let io = require("../aulasJS/io")

u = ["brasil", "mexico","argentina"];
function f (elem) {
    return elem+ " america"
}

let novovetor = u.map(f)
console.log(novovetor)