import React, { useEffect, useState, useRef } from "react"


// Styles
import {
  Container,
  Content,
  ContainerExplanation,
  BoxContentGoals,
  ContainerGoals,
  ContentGoal,
  BoxImageGoal,
  List
} from "./styles"

// Components
import ButtonDarkMode from "../../Components/ButtonDarkMode"


export default function Objetivos() {
  const [storange, setStorange] = useState([])
  const [goals, setGoals] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const darkContainer = useRef()
  const darkContent = useRef()

  const storageDark = JSON.parse(localStorage.getItem("dark")) || []

  useEffect(() => {
    const getStorange = JSON.parse(localStorage.getItem('goal'))

    localStorage.setItem('goals', JSON.stringify(getStorange.goals))
    const getStorangeGoals = JSON.parse(localStorage.getItem('goals'))

    setStorange([getStorange])
    setGoals(getStorangeGoals)

    setDarkMode(storageDark.dark)

  }, [])

  // DarkMode
  useEffect(() => {
    if(darkMode) {
      darkContainer.current.style.backgroundColor = "#121214"
      darkContainer.current.style.color = "#E1E1E6"

      darkContent.current.style.backgroundColor = "#121214"
      darkContent.current.style.color = "#E1E1E6"
    } else {
      darkContainer.current.style.backgroundColor = "#fff"
      darkContainer.current.style.color = "#121214"

      darkContent.current.style.backgroundColor = "#fff"
      darkContent.current.style.color = "#121214"
    }

    if(darkMode) {
      localStorage.setItem('dark', JSON.stringify({dark: true}))
    } else {
      localStorage.setItem('dark', JSON.stringify({dark: false}))
    }
    
  }, [darkMode]) 


  const ChangeColor = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Container ref={darkContainer}>
      <Content ref={darkContent}>
        {storange.map((item, index)  => (
          <div key={index}>
            <ContainerExplanation key={index} background={item.background}>
              <BoxContentGoals>
                <h3>Objetivos de Desenvolvimento Sustentável</h3>
                <span>{item.id}</span>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3> 
              </BoxContentGoals>
                <BoxImageGoal>
                  <img src={item.img} alt={item.title}/>
                </BoxImageGoal>
            </ContainerExplanation>
            <ContainerGoals>
              {goals.map((item, index) => (
                <List key={index}>
                  <li> <span>{index +1}.</span> {item.goal}</li>
                </List>
              ))}

            </ContainerGoals>
          </div>
        ))}
      </Content>
      <ButtonDarkMode darkMode={darkMode} setDarkMode={setDarkMode} functionModeDark={() => {ChangeColor()}}/>
    </Container>
  )
}