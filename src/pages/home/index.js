import React, { useEffect, useState } from "react";
// Styles
import {
  Container,
  Content,
  ContainerGoals
} from "./styles"

// Components
import CardGoals from "../../Components/CardGoals";

// Ultis
import {Goals} from "../../Ultis"

export default function Home() {
  const [goalsProfile, setGoalsProfile] = useState(Goals)

  useEffect(() => {
    const storagePosters = JSON.parse(localStorage.getItem("goal")) || []

    if(storagePosters.length > 0) {
      setGoalsProfile(storagePosters)
    } else {
      localStorage.setItem("goal", JSON.stringify(Goals))
      setGoalsProfile(Goals)
    }
    
  }, [])

  const openGoalsPage = (id) => {
    localStorage.setItem("goal", JSON.stringify(id))
  }

  return (
    <Container>
      <Content>
        <h1>Os Objetivos de Desenvolvimento Sustentável em Inhaúma</h1>
        <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>

        <ContainerGoals>
          {goalsProfile.map((item, index) => (
            <CardGoals key={index} id={item.id} title={item.title} icon={item.img} background={item.background} openGoalsPage={() => {openGoalsPage(item)}}/>
          ))}
        </ContainerGoals>
      </Content>
    </Container>
  )
}