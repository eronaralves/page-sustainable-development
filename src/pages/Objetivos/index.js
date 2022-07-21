import React, { useEffect, useState } from "react"


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


export default function Objetivos() {
  const [storange, setStorange] = useState([])
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const getStorange = JSON.parse(localStorage.getItem('goal'))
    localStorage.setItem('goals', JSON.stringify(getStorange.goals))
    const getStorangee = JSON.parse(localStorage.getItem('goals'))
    setStorange([getStorange])
    setGoals(getStorangee)
    
  }, [])


  return (
    <Container>
      <Content>
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
    </Container>
  )
}