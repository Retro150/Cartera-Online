import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../UI";

export default ({tema}) => {
    const Claro = <Icono src={themeOn} alt="Tema Claro"/>
    const Ocsuro = <Icono src={themeOff} alt="Tema Oscuro"/>

    return <>{tema ? Ocsuro : Claro}</>
}