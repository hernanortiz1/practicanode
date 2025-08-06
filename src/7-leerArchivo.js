//const fs = require("fs")
import fs from "fs"

//ruta del archivo, opcional utf8 para que se vean caracteres especiales, funcion para error 
fs.readFile("./listaPersonajes.txt", "utf8", (err, data)=>{
    if(err){
        console.error("ocurrio un error al intentar abrir el archivo ",err)
        return;
    }
    console.log("Datos ")
    console.log(data)
})

