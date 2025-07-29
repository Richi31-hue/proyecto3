import {Tabla} from "../models/reprobados.model.js";

Tabla.create({
    name:"Panchito",
    Edad:25,
    calificacion:3.4
},
{
    name:"Vimicio",
    edad:20,
    calificacion:4.4
})

export const Test = ()=>{
    console.log("LLamando al controlador desde app.js correctamente")
}
