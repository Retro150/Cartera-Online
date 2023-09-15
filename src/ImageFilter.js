import React from "react"
import alimentacion from "./assets/images/alimentacion.svg"
import salud from "./assets/images/salud.svg"
import otros from "./assets/images/otros.svg"
import transporte from "./assets/images/transporte.svg"
import utilidades from "./assets/images/utilidades.svg"

import { Icono, IconoTema } from "./Components/UI"

export default (type) =>{
    console.log(type)
    const Images = {
        Restaurante: <IconoTema src={alimentacion}/>,
        Salud: <IconoTema src={salud}/>,
        Otros: <IconoTema src={otros}/>,
        Transporte: <IconoTema src={transporte}/>,
        Utilidades: <IconoTema src={utilidades}/>,
        Default: <IconoTema  src={otros}/>
    }

    return Images[type] || Images["Default"];
}