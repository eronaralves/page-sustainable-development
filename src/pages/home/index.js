import React, { useEffect,useState } from "react";
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
import { useDarkMode } from "../../context/darkmode";


export default function Home() {
  const [goalsProfile] = useState(Goals)
  const {darkMode, setDarkMode, setGoal, setSolutions} = useDarkMode()



  const storageDark = JSON.stringify(localStorage.getItem("dark")) || []

  useEffect(() => {

    setDarkMode(storageDark)
  }, [])
  
  // DarkMode
  useEffect(() => {
  
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])



  return (
    <Container  background={darkMode}>
      <Content background={darkMode}>
        <h1>Os Objetivos de Desenvolvimento Sustentável em Inhaúma</h1>
        <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>

        <ContainerGoals>
          {goalsProfile.map((item, index) => (
            <CardGoals key={index} id={item.id} title={item.title} icon={item.img} background={item.background}/>
          ))}
        </ContainerGoals>
      </Content>
      <ButtonDarkMode darkMode={darkMode} setDarkMode={setDarkMode} functionModeDark={() => setDarkMode(!darkMode)}/>
    </Container>
  )
}