
import React, { useState } from "react";

export const DarkContext = React.createContext({})

export const DarkProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkContext.Provider value={{darkMode, setDarkMode}}>
      {props.children}
    </DarkContext.Provider>
  )
}

export const useDarkMode = () => React.useContext(DarkContext)