import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
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