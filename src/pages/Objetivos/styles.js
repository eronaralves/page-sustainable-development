import styled, {css} from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${props => {
    if(props.background) {
      return css`
        background-color: #121214;
        color: #E1E1E6;
      `
    } else {
      return css`
        background-color: #fff;
        color: #121214;
      `
    }
  }}
`
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;

  ${props => {
    if(props.background) {
      return css`
        background-color: #121214;
        color: #E1E1E6;
      `
    } else {
      return css`
        background-color: #fff;
        color: #121214;
      `
    }
  }}
  
`

export const ContainerExplanation = styled.div`
  width: 100%;
  height: 70%;
  margin-inline: auto;
  

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  padding: 16px;
  margin-bottom: 80px;

  color: #fff;
  background-color: ${props => `${props.background}`};

  @media(max-width: 765px) {
    justify-content: center;
  }
  
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
    max-width: 380px;
    object-fit: cover;
  }
  
  @media(max-width: 765px) {
    img {
      max-width: 300px;
    }
  }
  @media(max-width: 400px) {
    img {
      max-width: 200px;
    }
  }

  
`

export const ContainerGoals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`


export const List = styled.ul`
  padding-inline: 16px;
  list-style: none;

  li {
    font-size: 18px;

    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
`