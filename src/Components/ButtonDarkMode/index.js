import React from "react";

// Styles
import {
  DarkMode,
  Span
} from "./styles"

// Icons
import {FaMoon} from "react-icons/fa"
import {GiBedLamp} from "react-icons/gi"

export default function ButtonDarkMode({darkMode, setDarkMode, functionModeDark}) {


  return (
    <DarkMode onClick={() => {functionModeDark()}} darkMode={darkMode}>
      {darkMode ? <GiBedLamp size={20}/> : <FaMoon size={20}/>}
      <Span>
        <span></span>
        Modo {darkMode ? "Claro" : "Escuro"} 
      </Span>
    </DarkMode>
  )
}