import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { Test } from "./backend/controllers/reprobados.controller.js";
// importar librerias

dotenv.config();//Trayendo configuracion de librerias 
mongoose.connect(process.env.urlBD)//Conectando a mongoDB
.then(()=>{
    console.log("Funciona chingon la base")
})
.catch((error)=>{
    console.log("No funciona la base ptm", error)
})//Promesa de funcionamiento

const app = express();//Realizado el servidor
app.use(cors());//Dando seguridad al server 
app.listen(4000, ()=>{
    console.log("Se escucha el servidor correctamente")
})//Escuchando el servidor 

Test();