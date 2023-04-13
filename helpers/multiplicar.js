
const fs = require("fs")

const colors = require('colors');

// Agregar el prototipo de colors al objeto String


colors.enable();


const crearTabla = (base=5) => {

    console.log("=========================================".green)
    console.log(`          tabla del ${base}              `.bgRed)
    console.log("=========================================")
  
    let salida = ""
    // let titulo = `tabla del ${base}`

 
    for (let i = 1; i <= 10; i++){
        
        salida += `${base} x ${i} = ${base*i}\n`

       
     
    }

    console.log(salida)

    fs.writeFileSync(`tabla-${base}.txt`,salida)
        console.log(colors.green(`tabla-${base}.txt creada`))
    
}


const crearTablaAsync = async(base) => {
    
    try {
        let tabla = await crearTabla(base)
        return tabla
    } catch (error) {
        throw error
    }
}

//-------------------------------------con promeasas----------------------------------------

const creartablaPromise = (base=5, listar=false, limite=10) => {

    return new Promise((resolve,reject)=>{


        try {
            let salida = ""
    // let titulo = `tabla del ${base}`

    for (let i = 1; i <= limite; i++){
        
        salida += `${base} x ${i} = ${base*i}\n`   
     
    }

    if(listar){
        
    console.log("=========================================".green)
    console.log(`          tabla del ${base}              `.america)
    console.log("=========================================".green)
    console.log(salida.blue)
    }
    

    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        console.log(`tabla-${base}.txt creada`)

        resolve(`tabla-${base}.txt`)
        } catch (error) {
            console.log("desde error",error)
        }
        
        
    })

    
}



module.exports = {
    crearTabla,
    crearTablaAsync,
    creartablaPromise
}