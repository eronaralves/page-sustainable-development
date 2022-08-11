
import React, { useEffect, useState } from "react";

export const DarkContext = React.createContext({})

export const DarkProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)
  const [goal, setGoal] = useState([])
  const [solutions, setSolutions] = useState([])

  return (
    <DarkContext.Provider value={{darkMode, setDarkMode, goal, setGoal, solutions, setSolutions}}>
      {props.children}
    </DarkContext.Provider>
  )
}

export const useDarkMode = () => React.useContext(DarkContext)