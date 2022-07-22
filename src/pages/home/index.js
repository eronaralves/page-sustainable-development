import React, { useEffect, useRef, useState } from "react";
// Styles
import {
  Container,
  Content,
  ContainerGoals,
} from "./styles"

// Components
import CardGoals from "../../Components/CardGoals";

// Ultis
import {Goals} from "../../Ultis"
import ButtonDarkMode from "../../Components/ButtonDarkMode";


export default function Home() {
  const [goalsProfile, setGoalsProfile] = useState(Goals)
  const [darkMode, setDarkMode] = useState(false)

  const darkContainer = useRef()
  const darkContent = useRef()

  const storageDark = JSON.parse(localStorage.getItem("dark")) || []

  useEffect(() => {
    
    const storagePosters = JSON.parse(localStorage.getItem("goal")) || []

    if(storagePosters.length > 0) {
      setGoalsProfile(storagePosters)
    } else {
      localStorage.setItem("goal", JSON.stringify(Goals))
      setGoalsProfile(Goals)
    }

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


  const openGoalsPage = (id) => {
    localStorage.setItem("goal", JSON.stringify(id))
  }

  return (
    <Container ref={darkContainer}>
      <Content ref={darkContent}>
        <h1>Os Objetivos de Desenvolvimento Sustentável em Inhaúma</h1>
        <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>

        <ContainerGoals>
          {goalsProfile.map((item, index) => (
            <CardGoals key={index} id={item.id} title={item.title} icon={item.img} background={item.background} openGoalsPage={() => {openGoalsPage(item)}}/>
          ))}
        </ContainerGoals>
      </Content>
      <ButtonDarkMode darkMode={darkMode} setDarkMode={setDarkMode} functionModeDark={() => {ChangeColor()}}/>
    </Container>
  )
}