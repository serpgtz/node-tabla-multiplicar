
const {crearTabla,crearTablaAsync, creartablaPromise} = require("./helpers/multiplicar")
const argv = require("./config/yargs")
const colors = require('colors');
colors.enable();


console.clear()

console.log(argv)
// console.log("base:yargs",argv.base)

// let base = 11
// crearTablaAsync(base)
console.log(argv.li)
    
creartablaPromise(argv.b, argv.l, argv.h)
.then(response=>console.log(response.green))
.catch(err=>console.log(err.red))







