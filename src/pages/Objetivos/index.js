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
import { useDarkMode } from "../../context/darkmode"


export default function Objetivos() {
  const {darkMode, setDarkMode, goal, solutions} = useDarkMode()


  // DarkMode
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
    
  }, [darkMode]) 


  const ChangeColor = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Container background={darkMode}>
      <Content background={darkMode}>
        {goal.map((item, index)  => (
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
              {solutions.map((item, index) => (
                <List key={index}>
                  <li> <span>{index +1}.</span> {item.solution}</li>
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