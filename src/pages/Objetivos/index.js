import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// Styles
import {
  Container,
  Content,
  ContainerExplanation,
  ContainerGoals,
  List,
  BoxContentGoals,
  BoxImageGoal,
} from "./styles"

// Components
import ButtonDarkMode from "../../Components/ButtonDarkMode"
import { useDarkMode } from "../../context/darkmode"

//Ultis
import {Goals} from "../../Ultis"


export default function Objetivos() {
  const {darkMode, setDarkMode} = useDarkMode()
  const [goals, setGoals] = useState(Goals)
  const [solutions, setSolutions] = useState([])

  const {pathname} = useLocation()

  const storageDark = JSON.stringify(localStorage.getItem("dark")) || []

  useEffect(() => {

    setDarkMode(storageDark)
  }, [])


  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
    
    const filter = goals.filter(item => pathname.includes(item.id))
    setGoals(filter)
    console.log(filter[0].solutions)
    setSolutions(filter[0].solutions)

  }, [darkMode]) 

  

  const ChangeColor = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Container background={darkMode}>
      <Content background={darkMode}>
        {goals.map((item, index)  => (
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