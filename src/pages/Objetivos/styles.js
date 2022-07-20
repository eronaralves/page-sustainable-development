import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin-inline: auto;
  
`

export const ContainerExplanation = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60vh;
  margin-inline: auto;
  

  display: flex;
  justify-content: space-between;

  padding-inline: 16px;
  margin-bottom: 80px;

  color: #fff;
  background-color: ${props => `${props.background}`};
  
`

export const BoxContentGoals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
  }

  span {
    display: block;
    font-size: 96px;
    font-weight: 300;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
  }

`


export const BoxImageGoal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-width: 400px;
    object-fit: cover;
  }
 
  
`

export const ContainerGoals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`


export const List = styled.ul`
  list-style: none;

  li {
    font-size: 18px;

    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
`