import {Schema, model }from "mongoose";

const EsqueletoTabla = new Schema({
    name: String,
    edad:Number,
    calificacion:Number
})

export const Tabla = new model ("Tabla Reprobados", EsqueletoTabla)