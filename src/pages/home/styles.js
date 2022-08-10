import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  
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
  padding: 20px;

  h1 {
    width: 100%;
    max-width: 48.5rem;
    margin-bottom: 36px;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  p {
    max-width: 48.5rem;
    margin-bottom: 40px;
  }

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

export const ContainerGoals = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media(max-width: 940px) {
    justify-content: space-evenly;
  }
`
