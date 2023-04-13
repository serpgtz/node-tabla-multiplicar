

const argv = require("yargs")
            .option("b",{
                alias:"base",
                type:"number",
                demandOption: true,
                describe:"es la base de la tabla de multiplicar"
            })
            .option("l",{
                alias:"listar",
                type:"boolean",
                default:false,
                describe:"muestra la tabla de multiplicar por consola"
            })
            .option("h",{
                alias:"limite",
                type:"number",
                describe:"se agrega el limete de hasta que numero se multiplica"
            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw "La base debe de ser un numero"
                }
                return true
            })
            .argv



            module.exports = argv;